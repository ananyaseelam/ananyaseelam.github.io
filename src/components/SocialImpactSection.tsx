import data from "@/content/social-impact.json";
import CollapsibleCard from "./CollapsibleCard";

export default function SocialImpactSection() {
  return (
    <section id="social-impact" className="mx-auto max-w-section px-6 py-16">
      <h2 className="font-mono text-xl font-semibold text-ink">Social Impact</h2>

      <p className="mt-8 text-xs font-medium uppercase tracking-wide text-ink-muted">
        Current advocacy
      </p>
      <div className="mt-3 flex flex-col gap-3">
        {data.advocacy.map((item) => (
          <CollapsibleCard key={item.title} title={item.title}>
            <p className="text-sm text-ink-secondary">{item.summary}</p>
          </CollapsibleCard>
        ))}
      </div>
      <p className="mt-6 text-xs font-medium uppercase tracking-wide text-ink-muted">
        Research
      </p>
      <div className="mt-3 flex flex-col gap-3">
        {data.research.map((paper) => (
          <CollapsibleCard
            key={paper.slug}
            title={paper.title}
            subtitle={`${paper.venue} · ${paper.year}`}
          >
            <p className="text-sm text-ink-secondary">{paper.summary}</p>
            {paper.url && (
              <a
                href={paper.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-sm font-medium text-accent hover:text-accent-hover"
              >
                Read the paper ↗
              </a>
            )}
          </CollapsibleCard>
        ))}
      </div>

      <p className="mt-8 text-xs font-medium uppercase tracking-wide text-ink-muted">
        Organizations
      </p>
      <div className="mt-3 flex flex-col gap-3">
        {data.organizations.map((org) => (
          <CollapsibleCard
            key={org.slug}
            title={org.name}
            subtitle={org.involvement}
          >
            <p className="text-sm text-ink-secondary">{org.summary}</p>
          </CollapsibleCard>
        ))}
      </div>

      
    </section>
  );
}
