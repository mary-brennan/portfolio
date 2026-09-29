"use client";

import { useEffect, useState, type ReactNode } from "react";

// Keeps its children blurred (see `.reveal-on-scroll` in globals.css) while
// the page is at the top, and brings them into focus once the user scrolls
// down. Scrolling back to the top blurs them again.
export function RevealOnScroll({ children }: { children: ReactNode }) {
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const check = () => setRevealed(window.scrollY > 8);
    // covers reloads and #about links that land already scrolled
    const frame = requestAnimationFrame(check);
    window.addEventListener("scroll", check, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", check);
    };
  }, []);

  return (
    <div data-revealed={revealed} className="reveal-on-scroll">
      {children}
    </div>
  );
}
