import logoWhite from "@/assets/logo-h24-white.png.asset.json";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { useSiteContent } from "@/lib/site-content";


const links = [
  { label: "Tjänster", href: "/#tjanster" },
  { label: "Priskalkyl", href: "/priskalkyl" },
  { label: "Före / Efter", href: "/#fore-efter" },
  { label: "Projekt", href: "/projekt" },
  { label: "Om Oss", href: "/#om-oss" },
  { label: "Kontakt", href: "/kontakt" },
];

export function Navbar() {
  const { get } = useSiteContent();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const phone = get("contact.phoneRaw", "+46765571102");


  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-charcoal/95 shadow-lg backdrop-blur" : "bg-charcoal/80 backdrop-blur"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-8">
        <a href="#top" className="flex items-center gap-2">
          <img src={get("brand.logo", logoWhite.url)} alt="H24 Bygg AB" className="h-16 w-auto md:h-20" />
        </a>


        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-body text-sm font-500 text-white/90 transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="/kontakt"
            className="rounded-md bg-primary px-5 py-2.5 text-sm font-700 text-primary-foreground transition-opacity hover:opacity-90"
          >
            {get("nav.ctaQuote", "Begär Offert")}
          </a>
          <a
            href={`tel:${phone}`}
            className="flex items-center gap-2 rounded-md border border-white/30 px-5 py-2.5 text-sm font-700 text-white transition-colors hover:bg-white hover:text-charcoal"
          >
            <Phone className="h-4 w-4" /> {get("nav.ctaCall", "Ring Nu")}

          </a>
        </div>

        <button
          className="text-white lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Meny"
        >
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-charcoal px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 font-body text-white/90 hover:bg-white/10"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-3">
            <a href="/kontakt" onClick={() => setOpen(false)} className="rounded-md bg-primary px-5 py-3 text-center text-sm font-700 text-primary-foreground">
              {get("nav.ctaQuote", "Begär Offert")}
            </a>
            <a href={`tel:${phone}`} className="flex items-center justify-center gap-2 rounded-md border border-white/30 px-5 py-3 text-sm font-700 text-white">
              <Phone className="h-4 w-4" /> {get("nav.ctaCall", "Ring Nu")}
            </a>
          </div>

        </div>
      )}
    </header>
  );
}
