import { useState } from "react";
import { Hammer, PaintRoller, LayoutGrid, Check } from "lucide-react";

const services = [
  { id: "snickeri", label: "Snickeri", icon: Hammer, price: 400 },
  { id: "maleri", label: "Måleri", icon: PaintRoller, price: 350 },
  { id: "golv", label: "Golv", icon: LayoutGrid, price: 400 },
];

const complexities = [
  { id: "enkel", label: "Enkel", factor: 0.85 },
  { id: "normal", label: "Normal", factor: 1.0 },
  { id: "avancerad", label: "Avancerad", factor: 1.35 },
];

const fmt = (n: number) =>
  new Intl.NumberFormat("sv-SE", { maximumFractionDigits: 0 }).format(Math.round(n));

export function PriceCalculator() {
  const [service, setService] = useState(services[0]);
  const [area, setArea] = useState(20);
  const [complexity, setComplexity] = useState(complexities[1]);
  const [rot, setRot] = useState(true);

  const base = service.price * area * complexity.factor;
  const rotDeduction = rot ? Math.min(base * 0.3, 50000) : 0;
  const total = base - rotDeduction;

  return (
    <section id="priskalkyl" className="bg-concrete py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-4 md:px-8">
        <div className="mb-12 text-center">
          <p className="label-tech mb-3 text-xs">Priskalkyl</p>
          <h2 className="text-3xl font-800 uppercase text-charcoal md:text-5xl">
            Räkna ut ditt pris
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-body text-muted-foreground">
            Justera tjänst, antal timmar och komplexitet för att se ett uppskattat pris direkt.
            Slutligt pris ges efter platsbesök.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-8 rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8">
            {/* Service */}
            <div>
              <p className="label-tech mb-3 text-xs">01 — Tjänst</p>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                {services.map((s) => {
                  const active = s.id === service.id;
                  return (
                    <button
                      key={s.id}
                      onClick={() => setService(s)}
                      className={`flex flex-col items-start gap-3 rounded-lg border p-4 text-left transition-all ${
                        active
                          ? "border-primary bg-primary/5 ring-1 ring-primary"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <s.icon className={`h-6 w-6 ${active ? "text-primary" : "text-charcoal"}`} />
                      <span className="font-700 text-charcoal">{s.label}</span>
                      <span className="font-body text-sm text-muted-foreground">
                        fr. {fmt(s.price)} kr / timme
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Hours */}
            <div>
              <div className="mb-3 flex items-end justify-between">
                <p className="label-tech text-xs">02 — Antal timmar</p>
                <span className="font-800 text-charcoal">{area} timmar</span>
              </div>
              <input
                type="range"
                min={1}
                max={400}
                step={1}
                value={area}
                onChange={(e) => setArea(Number(e.target.value))}
                className="w-full accent-[var(--color-primary)]"
              />
              <div className="mt-1 flex justify-between font-body text-xs text-muted-foreground">
                <span>1</span>
                <span>400</span>
              </div>
            </div>

            {/* Complexity */}
            <div>
              <p className="label-tech mb-3 text-xs">03 — Komplexitet</p>
              <div className="grid grid-cols-3 gap-3">
                {complexities.map((c) => {
                  const active = c.id === complexity.id;
                  return (
                    <button
                      key={c.id}
                      onClick={() => setComplexity(c)}
                      className={`rounded-lg border p-4 text-center transition-all ${
                        active
                          ? "border-primary bg-primary/5 ring-1 ring-primary"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <span className="block font-700 text-charcoal">{c.label}</span>
                      <span className="font-body text-sm text-muted-foreground">
                        ×{c.factor.toFixed(2)}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* ROT */}
            <div>
              <p className="label-tech mb-3 text-xs">04 — ROT-avdrag</p>
              <button
                onClick={() => setRot((v) => !v)}
                className={`flex w-full items-center gap-3 rounded-lg border p-4 text-left transition-all ${
                  rot ? "border-primary bg-primary/5" : "border-border"
                }`}
              >
                <span
                  className={`flex h-6 w-6 items-center justify-center rounded border ${
                    rot ? "border-primary bg-primary text-primary-foreground" : "border-border"
                  }`}
                >
                  {rot && <Check className="h-4 w-4" />}
                </span>
                <span className="font-body text-sm text-charcoal">
                  Inkludera ROT-avdrag (30 % på arbetskostnad, max 50 000 kr/person/år)
                </span>
              </button>
            </div>
          </div>

          {/* Summary */}
          <div className="flex flex-col justify-between rounded-2xl bg-charcoal p-6 text-white shadow-lg md:p-8">
            <div>
              <p className="label-tech mb-4 text-xs">Uppskattat pris</p>
              <div className="space-y-3 font-body text-sm text-white/80">
                <div className="flex justify-between">
                  <span>{service.label} · {area} timmar</span>
                  <span>{fmt(service.price * area)} kr</span>
                </div>
                <div className="flex justify-between">
                  <span>Komplexitet ×{complexity.factor.toFixed(2)}</span>
                  <span>{fmt(base)} kr</span>
                </div>
                {rot && (
                  <div className="flex justify-between text-primary">
                    <span>ROT-avdrag</span>
                    <span>−{fmt(rotDeduction)} kr</span>
                  </div>
                )}
              </div>
            </div>
            <div className="mt-8 border-t border-white/15 pt-6">
              <p className="font-body text-sm text-white/70">Att betala</p>
              <p className="text-4xl font-900 text-white md:text-5xl">{fmt(total)} kr</p>
              <a
                href="#kontakt"
                className="mt-6 block rounded-md bg-primary px-6 py-3 text-center font-700 text-primary-foreground transition-opacity hover:opacity-90"
              >
                Begär exakt offert
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
