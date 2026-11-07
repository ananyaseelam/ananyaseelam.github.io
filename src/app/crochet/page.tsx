import BackButton from "@/components/BackButton";
import CrochetGallery from "@/components/CrochetGallery";
import pieces from "@/content/crochet.json";

export default function CrochetPage() {
  // newest first
  const sorted = [...pieces].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <BackButton />
      <h1 className="mt-6 font-mono text-2xl font-semibold text-ink">
        Crochet
      </h1>
      <p className="mt-2 text-sm text-ink-secondary">
        Things I&apos;ve made, newest first.
      </p>
      <div className="mt-8">
        <CrochetGallery pieces={sorted} />
      </div>
    </main>
  );
}
