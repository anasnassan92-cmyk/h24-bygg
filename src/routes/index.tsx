import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Services } from "@/components/landing/Services";
import { BeforeAfter } from "@/components/landing/BeforeAfter";
import { WhyChooseUs } from "@/components/landing/WhyChooseUs";
import { About } from "@/components/landing/About";
import { CtaBanner } from "@/components/landing/CtaBanner";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "H24 Bygg AB — Bygger runt klockan | Renovering i Stockholm" },
      {
        name: "description",
        content:
          "H24 Bygg AB — pålitlig byggpartner i Stockholm. Husrenovering, lägenhetsrenovering, målning och reparation. Stabilt. Snabbt. Pålitligt.",
      },
      { property: "og:title", content: "H24 Bygg AB — Bygger runt klockan" },
      {
        property: "og:description",
        content: "Renovering och bygg i Stockholm. Stabilt. Snabbt. Pålitligt.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <BeforeAfter />
      <WhyChooseUs />
      <About />
      <CtaBanner />
      <Footer />
    </main>
  );
}
