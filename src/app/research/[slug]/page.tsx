import { notFound } from "next/navigation";
import BackButton from "@/components/BackButton";
import data from "@/content/social-impact.json";

export function generateStaticParams() {
  return data.research.map((r) => ({ slug: r.slug }));
}

export default function ResearchPage({ params }: { params: { slug: string } }) {
  const paper = data.research.find((r) => r.slug === params.slug);

  if (!paper) return notFound();

  return (
    <main className="mx-auto max-w-section px-6 py-16">
      <BackButton />
      <p className="mt-6 text-xs font-medium uppercase tracking-wide text-ink-muted">
        {paper.venue} · {paper.year}
      </p>
      <h1 className="mt-2 font-mono text-2xl font-semibold text-ink">
        {paper.title}
      </h1>
      <p className="mt-4 text-sm leading-relaxed text-ink-secondary">
        {paper.summary}
      </p>
      {/* Add a link to the full paper, PDF, or press coverage here */}
    </main>
  );
}
