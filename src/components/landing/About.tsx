import owner from "@/assets/owner.png.asset.json";
import { useSiteContent } from "@/lib/site-content";

const defaultParagraphs = [
  "Haydar Kamil Hamad Al-Mashhadane (född 1978) är grundare och ägare av H24 Bygg AB. Med många års erfarenhet inom bygg- och renoveringsbranschen har han byggt upp ett starkt rykte genom sitt engagemang för kvalitet, noggrannhet och kundnöjdhet.",
  "Under sin yrkeskarriär har Haydar deltagit i och lett ett stort antal bygg- och renoveringsprojekt, från lägenhetsrenoveringar och villaprojekt till omfattande ombyggnationer och förbättringsarbeten. Hans erfarenhet omfattar planering, projektledning, kvalitetskontroll och praktiskt byggarbete, vilket ger honom en djup förståelse för varje steg i byggprocessen.",
  "Haydar är känd för sitt professionella arbetssätt, sin problemlösningsförmåga och sitt fokus på att leverera hållbara resultat. För honom handlar byggnation inte bara om att färdigställa ett projekt – det handlar om att skapa trygga, funktionella och värdefulla miljöer som kunderna kan vara stolta över under många år framöver.",
  "Genom H24 Bygg AB arbetar han efter tydliga värderingar: kvalitet i varje detalj, öppen kommunikation, pålitliga leveranser och respekt för kundens tid och budget. Detta har bidragit till långsiktiga kundrelationer och ett växande antal framgångsrikt genomförda projekt.",
  "Hans vision är att göra H24 Bygg AB till ett självklart val för privatpersoner och företag som söker en byggpartner som kombinerar erfarenhet, kvalitet och ansvarstagande i varje uppdrag.",
];

export function About() {
  const { get } = useSiteContent();
  return (
    <section id="om-oss" className="bg-background py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-start gap-12 px-4 md:px-8 lg:grid-cols-2">
        <div className="overflow-hidden rounded-xl shadow-xl lg:sticky lg:top-28">
          <img
            src={get("about.image", owner.url)}
            alt="Haydar Kamil Hamad Al-Mashhadane — grundare av H24 Bygg AB"
            width={1024}
            height={1024}
            loading="lazy"
            className="h-full w-full object-cover"
          />
          <div className="bg-charcoal px-6 py-4">
            <div className="font-display text-lg font-700 uppercase text-white">
              {get("about.ownerName", "Haydar Kamil Hamad Al-Mashhadane")}
            </div>
            <p className="label-tech mt-1 text-[10px]">{get("about.ownerRole", "Grundare & Ägare")}</p>
          </div>
        </div>

        <div>
          <p className="label-tech mb-3 text-xs">{get("about.eyebrow", "Om Grundaren")}</p>
          <h2 className="text-3xl font-800 uppercase text-charcoal md:text-5xl">
            {get("about.title", "Om H24 Bygg AB")}
          </h2>
          <div className="mt-5 space-y-4 font-body text-base leading-relaxed text-muted-foreground md:text-lg">
            {defaultParagraphs.map((p, i) => (
              <p key={i}>{get(`about.paragraphs.${i}`, p)}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
