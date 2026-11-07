import experience from "@/content/experience.json";
import CollapsibleCard from "./CollapsibleCard";

export default function ExperienceSection() {
  return (
    <section id="experience" className="mx-auto max-w-section px-6 py-16">
      <h2 className="font-mono text-xl font-semibold text-ink">Experience</h2>
      <div className="mt-6 flex flex-col gap-3">
        {experience.map((role) => (
          <CollapsibleCard
            key={`${role.company}-${role.role}`}
            title={role.company}
            subtitle={`${role.role} · ${role.dates}`}
          >
            <div className="flex flex-col gap-4">
              {role.projects.map((project) => (
                <div key={project.slug}>
                  <p className="text-sm font-medium text-ink">{project.title}</p>
                  <p className="mt-1 text-sm text-ink-secondary">
                    {project.summary}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {project.languages.map((lang) => (
                      <span
                        key={lang}
                        className="rounded-sm bg-accent-soft px-2 py-0.5 text-xs font-medium text-accent"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CollapsibleCard>
        ))}
      </div>
    </section>
  );
}
