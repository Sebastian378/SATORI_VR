import { User, Brain, Database, Zap, Send, CircleDollarSign } from "lucide-react";

const steps = [
  { icon: User, label: "Cliente", sub: "Contacto inicial" },
  { icon: Brain, label: "IA", sub: "Comprende y responde" },
  { icon: Database, label: "CRM", sub: "Registro automático" },
  { icon: Zap, label: "Automatización", sub: "Disparadores inteligentes" },
  { icon: Send, label: "Seguimiento", sub: "Mensajes en el momento" },
  { icon: CircleDollarSign, label: "Venta", sub: "Cierre asistido" },
];

export function Flow() {
  return (
    <section id="flujo" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-dot opacity-50 [mask-image:radial-gradient(ellipse_70%_50%_at_50%_50%,#000_30%,transparent_100%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-xs uppercase tracking-widest text-primary-glow">Cómo funciona</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">
            Un flujo continuo, sin pausas
          </h2>
          <p className="mt-4 text-muted-foreground">
            Desde el primer contacto hasta el cierre, cada paso ocurre de forma
            automática y coordinada.
          </p>
        </div>

        <div className="mt-16 relative">
          <div className="hidden lg:block absolute top-9 left-[8%] right-[8%] h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 relative">
            {steps.map((s, i) => (
              <div key={s.label} className="flex flex-col items-center text-center animate-fade-up" style={{ animationDelay: `${i * 80}ms` }}>
                <div className="relative size-18 grid place-items-center">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary to-primary-glow opacity-20 blur-md" />
                  <div className="relative size-16 rounded-2xl glass grid place-items-center">
                    <s.icon className="size-6 text-primary-glow" />
                  </div>
                </div>
                <div className="mt-4 text-xs uppercase tracking-wider text-muted-foreground">Paso {i + 1}</div>
                <div className="mt-1 font-semibold">{s.label}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
