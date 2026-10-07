import heroImg from "@/assets/hero.jpg";
import bannerVideo from "@/assets/work/banner.mp4.asset.json";
import { Phone } from "lucide-react";
import { useSiteContent } from "@/lib/site-content";

export function Hero() {
  const { get } = useSiteContent();
  const videoUrl = get("hero.video", bannerVideo.url);
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden">
      <video
        key={videoUrl}
        src={videoUrl}
        poster={get("hero.poster", heroImg)}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/60 to-charcoal/85" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pt-28 text-center md:px-8">
        <p className="label-tech mb-4 text-xs">{get("hero.eyebrow", "H24 BYGG AB · STOCKHOLM")}</p>
        <h1 className="mx-auto max-w-4xl text-4xl font-900 uppercase leading-[1.05] text-white sm:text-6xl md:text-7xl">
          {get("hero.title", "Bygger runt klockan")}
        </h1>
        <p className="mt-5 font-body text-lg text-white/85 md:text-2xl">
          {get("hero.subtitle", "Stabilt. Snabbt. Pålitligt.")}
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="/priskalkyl"
            className="w-full rounded-md bg-primary px-8 py-4 text-base font-700 text-primary-foreground transition-opacity hover:opacity-90 sm:w-auto"
          >
            {get("hero.ctaPrimary", "Räkna ut ditt pris")}
          </a>
          <a
            href={`tel:${get("contact.phoneRaw", "+46765571102")}`}
            className="flex w-full items-center justify-center gap-2 rounded-md border border-white/40 bg-charcoal/40 px-8 py-4 text-base font-700 text-white backdrop-blur transition-colors hover:bg-white hover:text-charcoal sm:w-auto"
          >
            <Phone className="h-5 w-5" /> {get("hero.ctaSecondary", "Ring Nu")}
          </a>
        </div>
      </div>

      <a
        href={`https://wa.me/${get("contact.whatsapp", "46765571102")}`}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-xl transition-transform hover:scale-105"
      >
        <svg viewBox="0 0 24 24" className="h-7 w-7 fill-white">
          <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.821 11.821 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.59 5.331l-.999 3.648 3.909-1.231zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
      </a>
    </section>
  );
}
