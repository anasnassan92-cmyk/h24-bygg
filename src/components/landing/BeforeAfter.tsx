import beforeAsset from "@/assets/before11.jpg.asset.json";
import afterAsset from "@/assets/after11.jpg.asset.json";
import { useEffect, useRef, useState } from "react";
import { MoveHorizontal } from "lucide-react";
import { useSiteContent } from "@/lib/site-content";


export function BeforeAfter() {
  const { get } = useSiteContent();
  const beforeImg = get("beforeAfter.before", beforeAsset.url);
  const afterImg = get("beforeAfter.after", afterAsset.url);
  const [pos, setPos] = useState(50);
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);


  useEffect(() => {
    const update = () => setWidth(ref.current?.clientWidth ?? 0);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const move = (clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const p = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, p)));
  };

  return (
    <section id="fore-efter" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-4 md:px-8">
        <div className="mb-10 text-center">
          <p className="label-tech mb-3 text-xs">{get("beforeAfter.eyebrow", "Före / Efter")}</p>
          <h2 className="text-3xl font-800 uppercase text-charcoal md:text-5xl">
            {get("beforeAfter.title", "Samma hus. Nytt liv.")}
          </h2>

        </div>

        <div
          ref={ref}
          className="relative aspect-[3/2] w-full select-none overflow-hidden rounded-xl shadow-2xl"
          onMouseMove={(e) => dragging.current && move(e.clientX)}
          onMouseUp={() => (dragging.current = false)}
          onMouseLeave={() => (dragging.current = false)}
          onTouchMove={(e) => move(e.touches[0].clientX)}
        >
          <img src={afterImg} alt="Efter renovering" width={1200} height={800} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
            <img
              src={beforeImg}
              alt="Före renovering"
              width={1200}
              height={800}
              loading="lazy"
              className="h-full object-cover"
              style={{ width: width || "100%", maxWidth: "none" }}
            />
            <span className="absolute left-4 top-4 rounded bg-charcoal px-3 py-1 text-xs font-700 uppercase text-white">Före</span>
          </div>
          <span className="absolute right-4 top-4 rounded bg-charcoal px-3 py-1 text-xs font-700 uppercase text-white">Efter</span>

          <div className="absolute inset-y-0 w-1 bg-primary" style={{ left: `${pos}%` }}>
            <button
              className="absolute top-1/2 left-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg"
              onMouseDown={() => (dragging.current = true)}
              onTouchStart={() => (dragging.current = true)}
              aria-label="Dra för att jämföra"
            >
              <MoveHorizontal className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
