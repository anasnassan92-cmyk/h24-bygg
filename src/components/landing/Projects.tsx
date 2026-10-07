import paving from "@/assets/work/paving.jpg.asset.json";
import driveway from "@/assets/work/driveway.jpg.asset.json";
import driveway2 from "@/assets/work/driveway2.jpg.asset.json";
import deck from "@/assets/work/deck.jpg.asset.json";
import pergola from "@/assets/work/pergola.jpg.asset.json";
import garden from "@/assets/work/garden.jpg.asset.json";
import project2 from "@/assets/work/project2.mp4.asset.json";
import project3 from "@/assets/work/project3.mp4.asset.json";
import video5 from "@/assets/work/video5.mp4.asset.json";
import video6 from "@/assets/work/video6.mp4.asset.json";
import project2AfterVideo from "@/assets/work/project2-after.mp4.asset.json";
import project2AfterImg from "@/assets/work/project2-after.jpg.asset.json";
import { MapPin } from "lucide-react";

type Media = {
  type: "video" | "image";
  src: string;
  caption: string;
  phase: "Före" | "Efter";
};

type Project = {
  id: number;
  title: string;
  loc: string;
  media: Media[];
};

const featuredProjects: Project[] = [
  {
    id: 1,
    title: "Projekt 1 — Utomhus & Villarenovering",
    loc: "Stockholm / Skogås",
    media: [
      { type: "video", src: video6.url, caption: "Utomhusarbete, Stockholm", phase: "Före" },
      { type: "image", src: garden.url, caption: "Renovering utomhus, Stockholm radhus", phase: "Före" },
      { type: "video", src: video5.url, caption: "Renovering villa, Skogås", phase: "Efter" },
    ],
  },
  {
    id: 2,
    title: "Projekt 2 — Renovering & Altanbygge",
    loc: "Stockholm",
    media: [
      { type: "video", src: project2.url, caption: "Renoveringsprojekt, Stockholm", phase: "Före" },
      { type: "video", src: project2AfterVideo.url, caption: "Byggd altan, Stockholm", phase: "Efter" },
      { type: "image", src: project2AfterImg.url, caption: "Byggd altan, Stockholm", phase: "Efter" },
    ],
  },
  {
    id: 3,
    title: "Projekt 3 — Byggprojekt & Markarbete",
    loc: "Stockholm / Skogås",
    media: [
      { type: "video", src: project3.url, caption: "Byggprojekt, Stockholm", phase: "Före" },
      { type: "image", src: driveway.url, caption: "Stenläggning uppfart, Skogås villa", phase: "Efter" },
      { type: "image", src: driveway2.url, caption: "Gräsfog & stenytor, Stockholm villa", phase: "Efter" },
    ],
  },
];

const otherWork = [
  { img: paving.url, title: "Markarbete & Plattläggning", loc: "Stockholm, Fastighet" },
  { img: deck.url, title: "Trädäck & Altan", loc: "Stockholm, Villa" },
  { img: pergola.url, title: "Pergola & Snickeri", loc: "Stockholm, Villa" },
];

function PhaseBadge({ phase }: { phase: "Före" | "Efter" }) {
  return (
    <span
      className={`absolute left-4 top-4 z-10 rounded px-3 py-1 text-xs font-700 uppercase text-white ${
        phase === "Före" ? "bg-charcoal/90" : "bg-primary"
      }`}
    >
      {phase}
    </span>
  );
}

function MediaTile({ m }: { m: Media }) {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-charcoal/40">
      <PhaseBadge phase={m.phase} />
      {m.type === "video" ? (
        <video
          src={m.src}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="h-64 w-full object-cover md:h-72"
        />
      ) : (
        <img
          src={m.src}
          alt={m.caption}
          width={900}
          height={700}
          loading="lazy"
          className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105 md:h-72"
        />
      )}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal/85 via-transparent to-transparent" />
      <div className="pointer-events-none absolute bottom-4 left-4 right-4">
        <p className="font-body text-sm text-white/90">{m.caption}</p>
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <section id="projekt" className="bg-charcoal py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-12 text-center">
          <p className="label-tech mb-3 text-xs">Projekt</p>
          <h2 className="text-3xl font-800 uppercase text-white md:text-5xl">
            Våra Projekt
          </h2>
        </div>

        <div className="space-y-16">
          {featuredProjects.map((p) => (
            <div key={p.id}>
              <div className="mb-6 flex flex-col gap-1 border-l-4 border-primary pl-4">
                <h3 className="text-xl font-800 uppercase text-white md:text-2xl">{p.title}</h3>
                <p className="flex items-center gap-1.5 font-body text-sm text-white/70">
                  <MapPin className="h-4 w-4 text-primary" /> {p.loc}
                </p>
              </div>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {p.media.map((m, i) => (
                  <MediaTile key={i} m={m} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <div className="mb-8 text-center">
            <p className="label-tech mb-3 text-xs">Mer Arbete</p>
            <h3 className="text-2xl font-800 uppercase text-white md:text-3xl">
              Tidigare Arbeten
            </h3>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {otherWork.map((p) => (
              <div key={p.title} className="group relative overflow-hidden rounded-xl">
                <img
                  src={p.img}
                  alt={p.title}
                  width={900}
                  height={700}
                  loading="lazy"
                  className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-lg font-700 text-white">{p.title}</h3>
                  <p className="mt-1 flex items-center gap-1.5 font-body text-sm text-white/80">
                    <MapPin className="h-4 w-4 text-primary" /> {p.loc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
