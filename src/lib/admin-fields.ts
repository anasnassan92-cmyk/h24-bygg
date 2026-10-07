export type FieldType = "text" | "textarea" | "image" | "video";

export interface AdminField {
  path: string;
  label: string;
  type: FieldType;
  fallback?: string;
}

export interface AdminSection {
  id: string;
  title: string;
  fields: AdminField[];
}

export const adminSections: AdminSection[] = [
  {
    id: "brand",
    title: "Logotyp & Varumärke",
    fields: [
      { path: "brand.logo", label: "Logotyp (header & footer)", type: "image" },
    ],
  },
  {
    id: "nav",
    title: "Header / Meny",
    fields: [
      { path: "nav.ctaQuote", label: "Knapp: Begär offert", type: "text", fallback: "Begär Offert" },
      { path: "nav.ctaCall", label: "Knapp: Ring", type: "text", fallback: "Ring Nu" },
    ],
  },
  {
    id: "hero",
    title: "Hero / Banner",
    fields: [
      { path: "hero.video", label: "Bannervideo", type: "video" },
      { path: "hero.poster", label: "Banner-bild (fallback)", type: "image" },
      { path: "hero.eyebrow", label: "Liten rubrik", type: "text", fallback: "H24 BYGG AB · STOCKHOLM" },
      { path: "hero.title", label: "Huvudrubrik", type: "text", fallback: "Bygger runt klockan" },
      { path: "hero.subtitle", label: "Underrubrik", type: "text", fallback: "Stabilt. Snabbt. Pålitligt." },
      { path: "hero.ctaPrimary", label: "Primär knapp", type: "text", fallback: "Räkna ut ditt pris" },
      { path: "hero.ctaSecondary", label: "Sekundär knapp", type: "text", fallback: "Ring Nu" },
    ],
  },
  {
    id: "services",
    title: "Tjänster",
    fields: [
      { path: "services.eyebrow", label: "Liten rubrik", type: "text", fallback: "Våra Tjänster" },
      { path: "services.title", label: "Rubrik", type: "text", fallback: "Tjänster" },
      { path: "services.items.0.title", label: "Tjänst 1 - namn", type: "text", fallback: "Husrenovering" },
      { path: "services.items.0.short", label: "Tjänst 1 - kort (mobil)", type: "text", fallback: "Hus" },
      { path: "services.items.0.desc", label: "Tjänst 1 - text", type: "textarea", fallback: "Komplett renovering invändigt och utvändigt för ditt hem." },
      { path: "services.items.1.title", label: "Tjänst 2 - namn", type: "text", fallback: "Lägenhetsrenovering" },
      { path: "services.items.1.short", label: "Tjänst 2 - kort (mobil)", type: "text", fallback: "Lägenhet" },
      { path: "services.items.1.desc", label: "Tjänst 2 - text", type: "textarea", fallback: "Moderna uppgraderingar för urbant boende." },
      { path: "services.items.2.title", label: "Tjänst 3 - namn", type: "text", fallback: "Villarenovering" },
      { path: "services.items.2.short", label: "Tjänst 3 - kort (mobil)", type: "text", fallback: "Villa" },
      { path: "services.items.2.desc", label: "Tjänst 3 - text", type: "textarea", fallback: "Restaurering och modernisering av familjevillor." },
      { path: "services.items.3.title", label: "Tjänst 4 - namn", type: "text", fallback: "Målning & Inredning" },
      { path: "services.items.3.short", label: "Tjänst 4 - kort (mobil)", type: "text", fallback: "Målning" },
      { path: "services.items.3.desc", label: "Tjänst 4 - text", type: "textarea", fallback: "Professionell målning och invändig finish." },
      { path: "services.items.4.title", label: "Tjänst 5 - namn", type: "text", fallback: "Utvändig Reparation" },
      { path: "services.items.4.short", label: "Tjänst 5 - kort (mobil)", type: "text", fallback: "Reparation" },
      { path: "services.items.4.desc", label: "Tjänst 5 - text", type: "textarea", fallback: "Reparationer och underhåll av din fastighet." },
    ],
  },
  {
    id: "beforeAfter",
    title: "Före / Efter",
    fields: [
      { path: "beforeAfter.eyebrow", label: "Liten rubrik", type: "text", fallback: "Före / Efter" },
      { path: "beforeAfter.title", label: "Rubrik", type: "text", fallback: "Samma hus. Nytt liv." },
      { path: "beforeAfter.before", label: "Före-bild", type: "image" },
      { path: "beforeAfter.after", label: "Efter-bild", type: "image" },
    ],
  },
  {
    id: "why",
    title: "Varför välja oss",
    fields: [
      { path: "why.eyebrow", label: "Liten rubrik", type: "text", fallback: "Varför Välja Oss" },
      { path: "why.title", label: "Rubrik", type: "text", fallback: "Varför välja oss" },
      { path: "why.items.0.title", label: "Punkt 1 - titel", type: "text", fallback: "24/7 Tillgänglighet" },
      { path: "why.items.0.desc", label: "Punkt 1 - text", type: "text", fallback: "Alltid redo när du behöver oss." },
      { path: "why.items.1.title", label: "Punkt 2 - titel", type: "text", fallback: "Snabbt Svar" },
      { path: "why.items.1.desc", label: "Punkt 2 - text", type: "text", fallback: "Snabba offerter och kommunikation." },
      { path: "why.items.2.title", label: "Punkt 3 - titel", type: "text", fallback: "Certifierade Arbetare" },
      { path: "why.items.2.desc", label: "Punkt 3 - text", type: "text", fallback: "Skickligt och licensierat team." },
      { path: "why.items.3.title", label: "Punkt 4 - titel", type: "text", fallback: "Svensk Kvalitetsstandard" },
      { path: "why.items.3.desc", label: "Punkt 4 - text", type: "text", fallback: "Högsta kvalitet på allt arbete." },
      { path: "why.items.4.title", label: "Punkt 5 - titel", type: "text", fallback: "Fast Pris" },
      { path: "why.items.4.desc", label: "Punkt 5 - text", type: "text", fallback: "Transparent, inga överraskningar." },
      { path: "why.items.5.title", label: "Punkt 6 - titel", type: "text", fallback: "Inga Dolda Kostnader" },
      { path: "why.items.5.desc", label: "Punkt 6 - text", type: "text", fallback: "Ärlig och tydlig prissättning." },
    ],
  },
  {
    id: "about",
    title: "Om Oss",
    fields: [
      { path: "about.image", label: "Bild (ägare)", type: "image" },
      { path: "about.ownerName", label: "Ägarens namn", type: "text", fallback: "Haydar Kamil Hamad Al-Mashhadane" },
      { path: "about.ownerRole", label: "Roll", type: "text", fallback: "Grundare & Ägare" },
      { path: "about.eyebrow", label: "Liten rubrik", type: "text", fallback: "Om Grundaren" },
      { path: "about.title", label: "Rubrik", type: "text", fallback: "Om H24 Bygg AB" },
      { path: "about.paragraphs.0", label: "Stycke 1", type: "textarea" },
      { path: "about.paragraphs.1", label: "Stycke 2", type: "textarea" },
      { path: "about.paragraphs.2", label: "Stycke 3", type: "textarea" },
      { path: "about.paragraphs.3", label: "Stycke 4", type: "textarea" },
      { path: "about.paragraphs.4", label: "Stycke 5", type: "textarea" },
    ],
  },
  {
    id: "cta",
    title: "Uppmaning (CTA)",
    fields: [
      { path: "cta.eyebrow", label: "Liten rubrik", type: "text", fallback: "Nästa Steg" },
      { path: "cta.title", label: "Rubrik", type: "text", fallback: "Redo att starta ditt projekt?" },
      { path: "cta.text", label: "Text", type: "textarea", fallback: "Räkna ut ett uppskattat pris direkt eller kontakta oss för en kostnadsfri offert. Vi bygger runt klockan — stabilt, snabbt och pålitligt." },
      { path: "cta.ctaPrimary", label: "Primär knapp", type: "text", fallback: "Räkna ut ditt pris" },
      { path: "cta.ctaSecondary", label: "Sekundär knapp", type: "text", fallback: "Kontakta oss" },
    ],
  },
  {
    id: "contact",
    title: "Kontakt",
    fields: [
      { path: "contact.eyebrow", label: "Liten rubrik", type: "text", fallback: "Kontakta Oss" },
      { path: "contact.title", label: "Rubrik", type: "text", fallback: "Begär En Offert" },
      { path: "contact.phone", label: "Telefon (visas)", type: "text", fallback: "+46 76 557 11 02" },
      { path: "contact.phoneRaw", label: "Telefon (länk, inga mellanslag)", type: "text", fallback: "+46765571102" },
      { path: "contact.whatsapp", label: "WhatsApp-nummer", type: "text", fallback: "46765571102" },
      { path: "contact.email", label: "E-post", type: "text", fallback: "info@h24byggab.se" },
      { path: "contact.address", label: "Adress", type: "text", fallback: "Fäbodvägen 25, 142 33 Skogås" },
    ],
  },
  {
    id: "footer",
    title: "Footer & Sociala medier",
    fields: [
      { path: "footer.tagline", label: "Slogan", type: "textarea", fallback: "Pålitlig byggpartner i Stockholm — dygnet runt. Stabilt. Snabbt. Pålitligt." },
      { path: "footer.orgNr", label: "Org.nr", type: "text", fallback: "ORG.NR 559560-6434" },
      { path: "footer.copyright", label: "Copyright", type: "text", fallback: "© 2026 H24 Bygg AB. Alla rättigheter förbehållna." },
      { path: "social.facebook", label: "Facebook URL", type: "text", fallback: "#" },
      { path: "social.instagram", label: "Instagram URL", type: "text", fallback: "#" },
      { path: "social.linkedin", label: "LinkedIn URL", type: "text", fallback: "#" },
    ],
  },
];
