import { Mail } from "lucide-react";
import profile from "@/content/profile.json";
import TerminalWidget from "./TerminalWidget";

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center gap-16 px-6 py-24 sm:flex-row sm:items-center sm:justify-between sm:gap-24 sm:pl-48 sm:pr-12"
    >
      {/* Left: static text */}
      <div className="flex-1">
        <h1 className="font-mono text-5xl font-bold tracking-tight text-ink sm:text-6xl lg:text-7xl">
          hi!
          <br />
          i&apos;m {profile.firstName}
        </h1>
        <p className="mt-6 max-w-lg text-xl leading-relaxed text-ink-secondary">
          {profile.blurb}
        </p>
        <div className="mt-10 flex gap-4">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-md border border-border px-6 py-3 text-base font-medium text-ink transition-colors hover:border-accent hover:text-accent"
          >
            <LinkedinIcon className="h-5 w-5" />
            linkedin
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-base font-semibold text-[#000000] transition-colors hover:bg-accent-hover"
          >
            <Mail className="h-5 w-5" />
            say hi!
          </a>
        </div>
      </div>

      {/* Right: terminal easter egg */}
      <div className="w-full max-w-xl flex-[1.3]">
        <TerminalWidget />
      </div>
    </section>
  );
}