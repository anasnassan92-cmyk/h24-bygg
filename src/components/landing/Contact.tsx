import { Phone, Mail, MapPin } from "lucide-react";
import { useSiteContent } from "@/lib/site-content";

export function Contact() {
  const { get } = useSiteContent();
  return (
    <section id="kontakt" className="bg-charcoal py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-12 text-center">
          <p className="label-tech mb-3 text-xs">{get("contact.eyebrow", "Kontakta Oss")}</p>
          <h2 className="text-3xl font-800 uppercase text-white md:text-5xl">
            {get("contact.title", "Begär En Offert")}
          </h2>
        </div>


        <div className="grid gap-8 lg:grid-cols-2">
          <form
            className="rounded-xl bg-white/5 p-6 backdrop-blur md:p-8"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid gap-4">
              <input
                type="text"
                placeholder="Namn"
                className="rounded-md border border-white/15 bg-white/10 px-4 py-3 font-body text-white placeholder:text-white/50 focus:border-primary focus:outline-none"
              />
              <input
                type="tel"
                placeholder="Telefonnummer"
                className="rounded-md border border-white/15 bg-white/10 px-4 py-3 font-body text-white placeholder:text-white/50 focus:border-primary focus:outline-none"
              />
              <select
                className="rounded-md border border-white/15 bg-white/10 px-4 py-3 font-body text-white focus:border-primary focus:outline-none"
                defaultValue=""
              >
                <option value="" disabled className="text-charcoal">Projekttyp</option>
                <option className="text-charcoal">Husrenovering</option>
                <option className="text-charcoal">Lägenhetsrenovering</option>
                <option className="text-charcoal">Villarenovering</option>
                <option className="text-charcoal">Målning &amp; Inredning</option>
                <option className="text-charcoal">Reparation</option>
              </select>
              <textarea
                rows={4}
                placeholder="Meddelande"
                className="rounded-md border border-white/15 bg-white/10 px-4 py-3 font-body text-white placeholder:text-white/50 focus:border-primary focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-md bg-primary px-6 py-3.5 font-700 text-primary-foreground transition-opacity hover:opacity-90"
              >
                Skicka Förfrågan
              </button>
            </div>
          </form>

          <div className="flex flex-col gap-4">
            <a href={`tel:${get("contact.phoneRaw", "+46765571102")}`} className="flex items-center gap-4 rounded-xl bg-white/5 p-6 transition-colors hover:bg-white/10">
              <Phone className="h-6 w-6 text-primary" />
              <div>
                <div className="text-sm text-white/60">Ring oss</div>
                <div className="font-700 text-white">{get("contact.phone", "+46 76 557 11 02")}</div>
              </div>
            </a>
            <a href={`mailto:${get("contact.email", "info@h24byggab.se")}`} className="flex items-center gap-4 rounded-xl bg-white/5 p-6 transition-colors hover:bg-white/10">
              <Mail className="h-6 w-6 text-primary" />
              <div>
                <div className="text-sm text-white/60">E-post</div>
                <div className="font-700 text-white">{get("contact.email", "info@h24byggab.se")}</div>
              </div>
            </a>
            <div className="flex items-center gap-4 rounded-xl bg-white/5 p-6">
              <MapPin className="h-6 w-6 text-primary" />
              <div>
                <div className="text-sm text-white/60">Adress</div>
                <div className="font-700 text-white">{get("contact.address", "Fäbodvägen 25, 142 33 Skogås")}</div>
              </div>

            </div>
            <div className="overflow-hidden rounded-xl">
              <iframe
                title="Karta H24 Bygg AB"
                className="h-56 w-full border-0"
                loading="lazy"
                src="https://www.google.com/maps?q=F%C3%A4bodv%C3%A4gen%2025%2C%20142%2033%20Skog%C3%A5s&output=embed"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
