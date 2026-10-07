import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { Projects } from "@/components/landing/Projects";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/projekt")({
  head: () => ({
    meta: [
      { title: "Tidigare Projekt — H24 Bygg AB | Renovering i Stockholm" },
      {
        name: "description",
        content:
          "Se tidigare bygg- och renoveringsprojekt av H24 Bygg AB i Stockholm — villor, altaner, markarbeten och målning. Stabilt. Snabbt. Pålitligt.",
      },
      { property: "og:title", content: "Tidigare Projekt — H24 Bygg AB" },
      {
        property: "og:description",
        content: "Bygg- och renoveringsprojekt i Stockholm av H24 Bygg AB.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: ProjektPage,
});

function ProjektPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-20" />
      <Projects />
      <Footer />
    </main>
  );
}
