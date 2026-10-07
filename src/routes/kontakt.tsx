import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { Contact } from "@/components/landing/Contact";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakta Oss — Begär Offert | H24 Bygg AB Stockholm" },
      {
        name: "description",
        content:
          "Kontakta H24 Bygg AB i Stockholm för en kostnadsfri offert. Ring, mejla eller skicka en förfrågan om renovering, bygg och målning.",
      },
      { property: "og:title", content: "Kontakta H24 Bygg AB" },
      {
        property: "og:description",
        content: "Begär en kostnadsfri offert för renovering i Stockholm.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: KontaktPage,
});

function KontaktPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-20" />
      <Contact />
      <Footer />
    </main>
  );
}
