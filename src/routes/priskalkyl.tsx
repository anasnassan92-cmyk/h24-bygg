import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { PriceCalculator } from "@/components/landing/PriceCalculator";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/priskalkyl")({
  head: () => ({
    meta: [
      { title: "Priskalkyl — Räkna ut ditt pris | H24 Bygg AB" },
      {
        name: "description",
        content:
          "Räkna ut ett uppskattat pris för snickeri, måleri eller golv direkt online med H24 Bygg AB. Inklusive ROT-avdrag. Slutligt pris ges efter platsbesök.",
      },
      { property: "og:title", content: "Priskalkyl — H24 Bygg AB" },
      {
        property: "og:description",
        content: "Räkna ut ditt pris för renovering i Stockholm direkt online.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: PriskalkylPage,
});

function PriskalkylPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-20" />
      <PriceCalculator />
      <Footer />
    </main>
  );
}
