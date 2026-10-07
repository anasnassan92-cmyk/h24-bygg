import { Clock, Zap, BadgeCheck, ShieldCheck, Tag, XCircle } from "lucide-react";
import { useSiteContent } from "@/lib/site-content";

const reasons = [
  { icon: Clock, title: "24/7 Tillgänglighet", desc: "Alltid redo när du behöver oss." },
  { icon: Zap, title: "Snabbt Svar", desc: "Snabba offerter och kommunikation." },
  { icon: BadgeCheck, title: "Certifierade Arbetare", desc: "Skickligt och licensierat team." },
  { icon: ShieldCheck, title: "Svensk Kvalitetsstandard", desc: "Högsta kvalitet på allt arbete." },
  { icon: Tag, title: "Fast Pris", desc: "Transparent, inga överraskningar." },
  { icon: XCircle, title: "Inga Dolda Kostnader", desc: "Ärlig och tydlig prissättning." },
];

export function WhyChooseUs() {
  const { get } = useSiteContent();
  return (
    <section className="bg-concrete py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-12 text-center">
          <p className="label-tech mb-3 text-xs">{get("why.eyebrow", "Varför Välja Oss")}</p>
          <h2 className="text-3xl font-800 uppercase text-charcoal md:text-5xl">
            {get("why.title", "Varför välja oss")}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <div key={i} className="flex items-start gap-4 rounded-lg bg-card p-6 shadow-sm">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                <r.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-base font-700 text-charcoal">
                  {get(`why.items.${i}.title`, r.title)}
                </h3>
                <p className="mt-1 font-body text-sm text-muted-foreground">
                  {get(`why.items.${i}.desc`, r.desc)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
