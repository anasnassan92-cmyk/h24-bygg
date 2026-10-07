import { Home, Building2, Hammer, PaintRoller, Wrench } from "lucide-react";
import { useSiteContent } from "@/lib/site-content";

const services = [
  {
    icon: Home,
    title: "Husrenovering",
    short: "Hus",
    desc: "Komplett renovering invändigt och utvändigt för ditt hem.",
  },
  {
    icon: Building2,
    title: "Lägenhetsrenovering",
    short: "Lägenhet",
    desc: "Moderna uppgraderingar för urbant boende.",
  },
  {
    icon: Hammer,
    title: "Villarenovering",
    short: "Villa",
    desc: "Restaurering och modernisering av familjevillor.",
  },
  {
    icon: PaintRoller,
    title: "Målning & Inredning",
    short: "Målning",
    desc: "Professionell målning och invändig finish.",
  },
  {
    icon: Wrench,
    title: "Utvändig Reparation",
    short: "Reparation",
    desc: "Reparationer och underhåll av din fastighet.",
  },
];

export function Services() {
  const { get } = useSiteContent();
  return (
    <section id="tjanster" className="bg-concrete py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-12 text-center">
          <p className="label-tech mb-3 text-xs">{get("services.eyebrow", "Våra Tjänster")}</p>
          <h2 className="text-3xl font-800 uppercase text-charcoal md:text-5xl">
            {get("services.title", "Tjänster")}
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-5">
          {services.map((s, i) => {
            const title = get(`services.items.${i}.title`, s.title);
            const short = get(`services.items.${i}.short`, s.short);
            return (
              <div
                key={i}
                className="group rounded-lg border border-border bg-card p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:border-primary hover:shadow-lg"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-md bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <s.icon className="h-7 w-7" />
                </div>
                <h3 className="text-base font-700 text-charcoal">
                  <span className="sm:hidden">{short}</span>
                  <span className="hidden sm:inline">{title}</span>
                </h3>
                <p className="mt-2 font-body text-sm text-muted-foreground">
                  {get(`services.items.${i}.desc`, s.desc)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
