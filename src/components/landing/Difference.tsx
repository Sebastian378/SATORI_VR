import { Layers, Target, Network, Gauge } from "lucide-react";

const points = [
  { icon: Target, title: "Soluciones a medida", desc: "No vendemos plantillas. Diseñamos cada automatización en función de tu operación real." },
  { icon: Network, title: "Integración profunda", desc: "Conectamos tus sistemas existentes en lugar de obligarte a cambiarlos." },
  { icon: Gauge, title: "Enfoque estratégico", desc: "Priorizamos los procesos con mayor impacto en ingresos y eficiencia." },
  { icon: Layers, title: "Escalabilidad real", desc: "Construimos arquitecturas que crecen con tu negocio sin reescribir nada." },
];

export function Difference() {
  return (
    <section id="diferencia" className="py-24 relative">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="lg:sticky lg:top-32">
            <span className="text-xs uppercase tracking-widest text-primary-glow">Por qué SATORI</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">
              No somos una agencia más de IA
            </h2>
            <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
              Trabajamos como un partner tecnológico. Nuestro objetivo no es entregarte una
              herramienta, sino transformar la forma en que tu empresa opera para que el
              crecimiento deje de ser un problema operativo.
            </p>
          </div>

          <div className="space-y-3">
            {points.map((p, i) => (
              <div key={p.title} className="flex gap-5 rounded-2xl border border-border bg-surface p-6 hover:bg-surface-elevated transition-colors duration-300">
                <div className="text-xs text-muted-foreground font-mono pt-1">0{i + 1}</div>
                <div className="size-11 rounded-xl bg-gradient-to-br from-primary/20 to-primary-glow/10 grid place-items-center shrink-0 text-primary-glow">
                  <p.icon className="size-5" />
                </div>
                <div>
                  <h3 className="font-semibold tracking-tight">{p.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
