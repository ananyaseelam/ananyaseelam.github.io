import Link from "next/link";

const links = [
  {
    label: "Crochet gallery",
    href: "/crochet",
    external: false,
  },
  {
    label: "Goodreads",
    href: "https://goodreads.com/your-profile",
    external: true,
  },
  {
    label: "Substack",
    href: "https://your-name.substack.com",
    external: true,
  },
];

export default function HobbiesSection() {
  return (
    <section id="hobbies" className="mx-auto max-w-section px-6 py-16">
      <h2 className="font-mono text-xl font-semibold text-ink">
        Currently: crocheting, reading, and running
      </h2>
      <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
        {links.map((link) =>
          link.external ? (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-border bg-surface px-4 py-4 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
            >
              {link.label} ↗
            </a>
          ) : (
            <Link
              key={link.label}
              href={link.href}
              className="rounded-lg border border-border bg-surface px-4 py-4 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
            >
              {link.label}
            </Link>
          )
        )}
      </div>
    </section>
  );
}
