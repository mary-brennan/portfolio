import type { ComponentProps } from "react";

// Opens in a new tab and tells screen reader users so.
export function ExternalLink({ children, ...props }: Omit<ComponentProps<"a">, "target" | "rel">) {
  return (
    <a target="_blank" rel="noopener noreferrer" {...props}>
      {children}
      <span className="sr-only"> (opens in new tab)</span>
    </a>
  );
}
