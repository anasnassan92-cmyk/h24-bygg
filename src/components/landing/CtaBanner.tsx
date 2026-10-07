import { Calculator, Mail } from "lucide-react";
import { useSiteContent } from "@/lib/site-content";

export function CtaBanner() {
  const { get } = useSiteContent();
  return (
    <section className="bg-concrete py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-4 text-center md:px-8">
        <p className="label-tech mb-3 text-xs">{get("cta.eyebrow", "Nästa Steg")}</p>
        <h2 className="text-3xl font-800 uppercase text-charcoal md:text-5xl">
          {get("cta.title", "Redo att starta ditt projekt?")}
        </h2>
        <p className="mx-auto mt-5 max-w-2xl font-body text-lg text-muted-foreground">
          {get(
            "cta.text",
            "Räkna ut ett uppskattat pris direkt eller kontakta oss för en kostnadsfri offert. Vi bygger runt klockan — stabilt, snabbt och pålitligt.",
          )}
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="/priskalkyl"
            className="flex w-full items-center justify-center gap-2 rounded-md bg-primary px-8 py-4 text-base font-700 text-primary-foreground transition-opacity hover:opacity-90 sm:w-auto"
          >
            <Calculator className="h-5 w-5" /> {get("cta.ctaPrimary", "Räkna ut ditt pris")}
          </a>
          <a
            href="/kontakt"
            className="flex w-full items-center justify-center gap-2 rounded-md border border-charcoal/30 px-8 py-4 text-base font-700 text-charcoal transition-colors hover:bg-charcoal hover:text-white sm:w-auto"
          >
            <Mail className="h-5 w-5" /> {get("cta.ctaSecondary", "Kontakta oss")}
          </a>
        </div>
      </div>
    </section>
  );
}
