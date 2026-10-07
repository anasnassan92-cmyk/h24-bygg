import logoWhite from "@/assets/logo-h24-white.png.asset.json";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import { useSiteContent } from "@/lib/site-content";

export function Footer() {
  const { get } = useSiteContent();
  return (
    <footer className="border-t border-white/10 bg-charcoal py-12">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 md:grid-cols-3 md:px-8">
        <div>
          <img src={get("brand.logo", logoWhite.url)} alt="H24 Bygg AB" className="h-20 w-auto" />
          <p className="mt-4 max-w-xs font-body text-sm text-white/60">
            {get("footer.tagline", "Pålitlig byggpartner i Stockholm — dygnet runt. Stabilt. Snabbt. Pålitligt.")}
          </p>
          <p className="label-tech mt-4 text-[10px]">{get("footer.orgNr", "ORG.NR 559560-6434")}</p>
        </div>

        <div className="font-body text-sm text-white/70">
          <h4 className="mb-4 font-display text-base font-700 uppercase text-white">{get("footer.contactTitle", "Kontakt")}</h4>
          <ul className="space-y-3">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /><span>{get("contact.phone", "+46 76 557 11 02")}</span></li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary" /><span>{get("contact.email", "info@h24byggab.se")}</span></li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /><span>{get("contact.address", "Fäbodvägen 25, 142 33 Skogås")}</span></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-display text-base font-700 uppercase text-white">{get("footer.followTitle", "Följ Oss")}</h4>
          <div className="flex gap-3">
            {[
              { Icon: Facebook, href: get("social.facebook", "#") },
              { Icon: Instagram, href: get("social.instagram", "#") },
              { Icon: Linkedin, href: get("social.linkedin", "#") },
            ].map(({ Icon, href }, i) => (
              <a key={i} href={href} target="_blank" rel="noreferrer" aria-label="social" className="flex h-10 w-10 items-center justify-center rounded-md bg-white/10 text-white transition-colors hover:bg-primary">
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 px-4 pt-6 text-center font-body text-xs text-white/40 md:px-8">
        <p>{get("footer.copyright", "© 2026 H24 Bygg AB. Alla rättigheter förbehållna.")}</p>
        <p className="mt-1">
          Webbdesign &amp; utveckling av{" "}
          <a
            href="https://mizagroup.se"
            target="_blank"
            rel="noreferrer"
            className="text-primary transition-colors hover:text-white"
          >
            Miza Group
          </a>{" "}
          — © 2026 mizagroup.se
        </p>
      </div>
    </footer>
  );
}
