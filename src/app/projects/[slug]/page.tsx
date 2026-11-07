import { notFound } from "next/navigation";
import BackButton from "@/components/BackButton";
import experience from "@/content/experience.json";

export function generateStaticParams() {
  return experience.flatMap((role) =>
    role.projects.map((p) => ({ slug: p.slug }))
  );
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const role = experience.find((r) =>
    r.projects.some((p) => p.slug === params.slug)
  );
  const project = role?.projects.find((p) => p.slug === params.slug);

  if (!project || !role) return notFound();

  return (
    <main className="mx-auto max-w-section px-6 py-16">
      <BackButton />
      <p className="mt-6 text-xs font-medium uppercase tracking-wide text-ink-muted">
        {role.company}
      </p>
      <h1 className="mt-2 font-mono text-2xl font-semibold text-ink">
        {project.title}
      </h1>
      <p className="mt-4 text-sm leading-relaxed text-ink-secondary">
        {project.summary}
      </p>
      {/* Add a longer write-up, images, etc. here as the project grows */}
      <div className="mt-6 flex flex-wrap gap-1.5">
        {project.languages.map((lang) => (
          <span
            key={lang}
            className="rounded-sm bg-accent-soft px-2 py-0.5 text-xs font-medium text-accent"
          >
            {lang}
          </span>
        ))}
      </div>
    </main>
  );
}
