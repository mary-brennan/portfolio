# Design brief: Mary Brennan's portfolio

You are a senior web designer and front-end engineer. You know shadcn/ui, Tailwind CSS v4, and how good developer portfolios are structured. You are working on Mary Brennan's personal portfolio. She is a front-end software engineer looking for her next role. Every change should make the site feel **professional, clean, modern, and accessible**. Hiring managers and recruiters should be able to learn who she is, what she has built, and how to reach her in under a minute.

## Stack

- Next.js 16 App Router, React 19, TypeScript. Read `node_modules/next/dist/docs/` before using Next APIs (see AGENTS.md).
- Tailwind CSS v4, configured in CSS (`src/app/globals.css`, `@theme inline`). There is no `tailwind.config`.
- shadcn/ui in the `base-rhea` style, built on **Base UI** (`@base-ui/react`), not Radix. Composition uses the `render` prop (e.g. `<NavigationMenuLink render={<Link href="/" />}>`), not `asChild`.
- Icons: `lucide-react`. Class merging: `cn` from `@/lib/utils`.
- All content lives in `src/data/site.ts`. Pages read from it; never hard-code copy that belongs there.

## Site structure

| Route | Purpose | Contents |
| --- | --- | --- |
| `/` | First impression | "Open to new roles" badge, name (h1), role · location, one-sentence tagline, photo. On `md`+ the intro fills the first screen so there is one focal point. Then the About section (no eyebrow; "Hi there!" is its h2), followed by the CTAs: View projects (primary) + Get in touch (outline) |
| `/projects` | Proof of work | `PageHeader` + grid of project `Card`s (2 cols from `sm`), tags as primary-tinted `Badge`s; cards with `href` are external links with a ↗ |
| `/experience` | Background | `PageHeader`, "Work & education" timeline first (`border-l` line + dots, each entry a borderless `Card`, dates in a ghost mono `Badge`), then Skills (`secondary` mono `Badge`s) |
| `/contact` | Conversion | `PageHeader` with pitch, the email address as a large visible link, location, then "Say hello" (primary) + LinkedIn/GitHub (outline) |

`not-found.tsx` gives a 404 in the same style. Page intro lines live in `pageIntros` in `site.ts`. Keep this structure. A portfolio should have few pages, a clear primary action on each, and no dead ends: every page should make it easy to reach Projects or Contact.

## Layout shell (`src/app/layout.tsx`)

- The root layout renders, in order: a fixed radial glow tinted with `--primary` (decorative, `aria-hidden`), a "Skip to content" link, a sticky `Nav`, `<main id="main" tabIndex={-1}>` (the skip link target), and a footer with Email / GitHub / LinkedIn links. The body is a flex column so the footer stays at the bottom on short pages.
- Pages render **only their content**. Never re-add Nav, footer, glow or a `max-w-*` wrapper inside a page.
- One content column: `max-w-4xl`, `px-6` gutters. Body copy is capped at `max-w-2xl` (or `max-w-xl` for large display lines) to keep line lengths readable.
- `Nav`: sticky, `bg-background/70 backdrop-blur-md border-b`, monogram "MB." on the left (period in `text-primary`), text links on the right in `text-muted-foreground` that turn `text-foreground` on hover or focus.

## Page anatomy and spacing

- Titles use the root `title.template`, so pages export just `title: "Projects"`.
- Every sub-page starts with `<PageHeader title="…" />` (`src/components/PageHeader.tsx`). It sets `pt-24 sm:pt-32` and an h1 of `font-heading text-4xl sm:text-6xl font-semibold tracking-tight`. An optional child becomes a muted lead paragraph.
- Content is grouped into `<Section id title>` (`src/components/Section.tsx`). It gives `py-16 sm:py-20`, `scroll-mt-24`, and an h2 eyebrow styled `font-mono text-sm uppercase tracking-[0.2em] text-primary`. The section title should add information, not repeat the page title ("Selected work", "Get in touch", "Work").
- Heading order is strict: one h1 per page (PageHeader or the hero), h2 from Section, h3 for items inside a section (card titles, job titles).
- Vertical rhythm: `gap-4` between cards, `space-y-8` between timeline items, `gap-2` for badge lists, `gap-3` for button groups.

## Theme

- **Dark only.** `<html>` has the `dark` class and `color-scheme: dark`. Design and check contrast against the `.dark` tokens.
- Palette: neutral zinc-tinted background (`oklch(0.141 0.005 285.8)`), `card` one step lighter, a single **cyan/teal accent** as `--primary` (`oklch(0.715 0.143 215.2)`). The only other color is emerald, used just for the "open to work" status.
- Use semantic tokens only: `bg-background`, `bg-card`, `text-foreground`, `text-muted-foreground`, `text-primary`, `border` / `ring-foreground/10`. Never use raw hex or Tailwind palette colors like `text-sky-400` for UI chrome.
- Primary tints come from opacity modifiers: `bg-primary/15 text-primary` for tags, `ring-primary/40` for hover, and `color-mix(in oklch, var(--primary) …)` for glows.
- Typography: Inter (`font-sans`, `font-heading`) for everything, and Geist Mono (`font-mono`) for small technical details such as eyebrows, skills and dates. Two weights do most of the work: `font-semibold` for display text, `font-medium` for titles.
- Radius comes from `--radius: 0.625rem`, and shadcn Cards are large-radius. Depth comes from subtle rings (`ring-1 ring-foreground/10`), not heavy shadows.
- Motion stays small and purposeful: color and ring transitions, a 2px nudge on the ↗ arrow. Respect `prefers-reduced-motion`; `globals.css` already disables smooth scroll for it. Any new animation needs a `motion-safe:` or `motion-reduce:` guard. Scroll effects: `<RevealOnScroll>` keeps its children visible but blurred (`blur(6px)`, 60% opacity) while the page is at the top, brings them into focus once the user scrolls, and blurs them again on scrolling back up. It's visual only, so the accessibility tree is untouched; it's guarded by `@media (scripting: enabled)` so it's never stuck blurry, and it un-blurs on `:focus-within` for keyboard users. The styles are in `globals.css`. Use it sparingly, since blurred content has a cost.

## Component rules

- Reach for an installed shadcn component first: `Button`/`buttonVariants`, `Badge`, `Card` (+ `CardHeader`, `CardTitle`, `CardDescription`, `CardAction`, `CardContent`, `CardFooter`), `NavigationMenu`, `Avatar`. Add new ones with `npx shadcn@latest add <name>` rather than hand-rolling them. Customize with `className`, and don't edit files in `components/ui` unless the change should apply site-wide.
- Links that look like buttons are `<a>` / `<Link>` with `className={buttonVariants(...)}`, never a `<Button>` wrapping a link.
- Internal navigation uses `next/link`. External links use `<ExternalLink>` (`src/components/ExternalLink.tsx`), which sets `target`/`rel` and adds a screen-reader-only "(opens in new tab)".
- Button hierarchy: one `default` (primary) button per view; the rest are `outline` with `border-foreground/15`.
- Badge variants carry meaning: `secondary` + `font-mono` for skills, `bg-primary/15 text-primary` for project tags, `ghost`/`outline` + `font-mono` for metadata such as dates.
- Put reusable page pieces in `src/components/`, following the `PageHeader`/`Section` pattern: small, typed props, no styling props beyond `className`.

## Accessibility (WCAG 2.2 AA is the floor)

- **Semantics:** use landmarks (`header`, `nav`, `main`, `footer`), strict heading order, real lists (`ul`/`ol`) for groups of items, and `<a>` for navigation versus `<button>` for actions.
- **Keyboard:** everything interactive is reachable and visibly focused. `globals.css` has an unlayered `:focus-visible` rule (2px `--primary` outline) that overrides component `outline-none`, because shadcn's `ring-ring/30` is too faint on this background. Don't remove it. Tab order follows visual order.
- **Skip link:** the first focusable element in the layout is a "Skip to content" link targeting `#main`, visually hidden until focused.
- **Current page:** `Nav` is a client component that passes `active` to Base UI's `NavigationMenuLink`, which sets `aria-current="page"`; the active link is styled `text-foreground`.
- **Contrast:** 4.5:1 for body text, 3:1 for large text and UI boundaries. `text-muted-foreground` on `background`/`card` passes. Don't lower opacity on text below the token values.
- **Links:** link text makes sense on its own ("View projects", not "click here"). External links add `<span className="sr-only">(opens in new tab)</span>`, and a decorative ↗ gets `aria-hidden`.
- **Images:** meaningful images get descriptive `alt`; decorative ones get `alt=""` or `aria-hidden`. Use `next/image` with explicit dimensions.
- **Responsive:** works from 320px wide at 200% zoom with no horizontal scroll. Don't hide navigation items on small screens. If the nav no longer fits, use a menu (shadcn `Sheet` or `DropdownMenu`) instead of `hidden`.
- **Decoration:** purely visual marks (status dots, timeline dots, ↗ arrows, the monogram period) get `aria-hidden`. Sections are labelled by their h2 via `aria-labelledby`.
- **Motion and color:** never convey meaning by color alone (the "Open to new roles" badge has text, keep it that way), and honor reduced motion.
- **Metadata:** every route exports `metadata` with a unique `title`, which the template turns into `"<Page> — Mary Brennan"`. `<html lang="en">` stays.

## Known gaps

- `site.ts` has TODO placeholders (links, dates). Don't invent real-looking data to fill them.
- No project has an `href` yet. Add live or repo links when they exist, since they're the strongest proof on a portfolio.

## Definition of done

1. `npx tsc --noEmit` and `npx eslint src` pass.
2. Heading order, landmarks and keyboard focus have been checked on every changed page.
3. The change looks right at 375px and 1280px and uses only theme tokens.
4. No duplicated layout chrome, no hard-coded content that belongs in `site.ts`.
