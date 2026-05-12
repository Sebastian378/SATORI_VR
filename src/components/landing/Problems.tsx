import { Clock, MessageSquareWarning, FileStack, TrendingDown, Sparkles, Zap, Bot, LineChart } from "lucide-react";

const problems = [
  { icon: Clock, title: "Tareas repetitivas", desc: "Tu equipo invierte horas en procesos manuales que podrían automatizarse." },
  { icon: MessageSquareWarning, title: "Atención lenta", desc: "Clientes que esperan demasiado abandonan y se pierden ventas." },
  { icon: FileStack, title: "Datos desconectados", desc: "Información dispersa entre WhatsApp, CRM, hojas y correos." },
  { icon: TrendingDown, title: "Operación que no escala", desc: "Crecer significa contratar más personas para hacer lo mismo." },
];

const solutions = [
  { icon: Bot, title: "Agentes IA 24/7", desc: "Atienden, califican y derivan clientes sin pausas ni errores." },
  { icon: Zap, title: "Procesos automatizados", desc: "Flujos que ejecutan tareas de inicio a fin sin intervención manual." },
  { icon: Sparkles, title: "Sistemas integrados", desc: "WhatsApp, CRM, email y operaciones trabajando como un solo cerebro." },
  { icon: LineChart, title: "Operación escalable", desc: "Tu empresa crece sin que el costo operativo crezca con ella." },
];

export function Problems() {
  return (
    <section className="py-24 relative">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-xs uppercase tracking-widest text-primary-glow">El problema · La solución</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">
            De operación lenta a empresa inteligente
          </h2>
          <p className="mt-4 text-muted-foreground">
            Identificamos los cuellos de botella reales y los reemplazamos con automatización
            diseñada para tu negocio.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-border bg-surface/50 p-6">
            <div className="text-xs uppercase tracking-widest text-muted-foreground mb-6">Antes</div>
            <div className="space-y-4">
              {problems.map((p) => (
                <div key={p.title} className="flex gap-4 p-4 rounded-xl bg-surface-elevated/60 border border-border">
                  <div className="size-10 rounded-lg bg-destructive/10 text-destructive grid place-items-center shrink-0">
                    <p.icon className="size-5" />
                  </div>
                  <div>
                    <div className="font-medium">{p.title}</div>
                    <div className="text-sm text-muted-foreground mt-1">{p.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-primary/30 bg-gradient-to-br from-surface to-accent/40 p-6 relative overflow-hidden">
            <div className="absolute -top-20 -right-20 size-60 rounded-full bg-primary/20 blur-3xl" />
            <div className="text-xs uppercase tracking-widest text-primary-glow mb-6 relative">Después con Nexora</div>
            <div className="space-y-4 relative">
              {solutions.map((s) => (
                <div key={s.title} className="flex gap-4 p-4 rounded-xl glass">
                  <div className="size-10 rounded-lg bg-gradient-to-br from-primary to-primary-glow text-primary-foreground grid place-items-center shrink-0">
                    <s.icon className="size-5" />
                  </div>
                  <div>
                    <div className="font-medium">{s.title}</div>
                    <div className="text-sm text-muted-foreground mt-1">{s.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
