"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import profile from "@/content/profile.json";

const navItems = [
  { label: "Experience", id: "experience" },
  { label: "Social Impact", id: "social-impact" },
  { label: "Hobbies", id: "hobbies" },
  { label: "About", id: "about" },
];

export default function Header() {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed left-6 top-6 z-40 hidden w-48 flex-col gap-6 sm:flex">
      <Link href="/" className="font-mono text-sm font-semibold text-ink">
        + {profile.name}
      </Link>

      <div>
        <p className="text-[10px] font-medium uppercase tracking-widest text-ink-muted">
          Menu
        </p>
        <nav className="mt-2 flex flex-col gap-1.5">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={`/#${item.id}`}
              className={`text-sm font-medium transition-colors ${
                activeId === item.id
                  ? "text-accent"
                  : "text-ink-secondary hover:text-accent"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      <div>
        <p className="text-[10px] font-medium uppercase tracking-widest text-ink-muted">
          Contact
        </p>
        <nav className="mt-2 flex flex-col gap-1.5">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-ink-secondary transition-colors hover:text-accent"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="text-sm font-medium text-ink-secondary transition-colors hover:text-accent"
          >
            Email
          </a>
        </nav>
      </div>
    </header>
  );
}