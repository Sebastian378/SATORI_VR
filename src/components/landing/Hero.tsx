import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Activity, Bot, Zap, CheckCircle2 } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-36 pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_40%,transparent_100%)]" />
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-4xl text-center animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
            <span className="size-1.5 rounded-full bg-primary-glow animate-pulse" />
            Plataforma de automatización con IA para empresas
          </div>

          <h1 className="mt-6 text-5xl md:text-7xl font-semibold tracking-tight text-gradient">
            Automatizamos tu empresa<br />con inteligencia artificial real
          </h1>

          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Diseñamos agentes y sistemas inteligentes que eliminan tareas repetitivas,
            aceleran tus operaciones y multiplican la productividad de tu equipo.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button size="xl" variant="hero" className="rounded-full" asChild>
              <a href="https://wa.me/573193672368?text=Saludos%2C%20Satori%20%7C%20Agencia%20de%20Innovaci%C3%B3n.%20%F0%9F%8C%90%20Estoy%20listo%20para%20implementar%20agentes%20inteligentes%20y%20servicios%20web%20avanzados%20en%20mi%20proyecto.%20Quedo%20atento%20a%20su%20respuesta%20para%20definir%20la%20hoja%20de%20ruta.%20%F0%9F%9A%80" target="_blank" rel="noopener noreferrer">
                Solicitar automatización
                <ArrowRight className="size-4" />
              </a>
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="size-4 text-primary-glow" />Implementación en semanas</span>
            <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="size-4 text-primary-glow" />Integración con tus sistemas</span>
            <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="size-4 text-primary-glow" />ROI medible</span>
          </div>
        </div>

        <DashboardMockup />
      </div>
    </section>
  );
}

function DashboardMockup() {
  return (
    <div className="relative mt-20 mx-auto max-w-5xl animate-fade-up" style={{ animationDelay: "200ms" }}>
      <div className="absolute -inset-x-20 -inset-y-10 glow-primary opacity-60 pointer-events-none" />
      <div className="relative glass rounded-2xl p-2 shadow-soft">
        <div className="rounded-xl bg-surface overflow-hidden border border-border">
          <div className="flex items-center justify-between px-4 py-3 border-b border-border">
            <div className="flex gap-1.5">
              <span className="size-2.5 rounded-full bg-muted-foreground/30" />
              <span className="size-2.5 rounded-full bg-muted-foreground/30" />
              <span className="size-2.5 rounded-full bg-muted-foreground/30" />
            </div>
            <div className="text-xs text-muted-foreground">satori.app / dashboard</div>
            <div className="size-6" />
          </div>

          <div className="grid md:grid-cols-3 gap-3 p-4">
            <StatCard icon={<Bot className="size-4" />} label="Conversaciones IA" value="12,847" delta="+24%" />
            <StatCard icon={<Activity className="size-4" />} label="Procesos automatizados" value="384" delta="+8" />
            <StatCard icon={<Zap className="size-4" />} label="Horas ahorradas" value="2,160h" delta="este mes" />

            <div className="md:col-span-2 rounded-lg border border-border bg-surface-elevated p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="text-xs text-muted-foreground">Flujo activo</div>
                <div className="text-xs text-primary-glow inline-flex items-center gap-1">
                  <span className="size-1.5 rounded-full bg-primary-glow animate-pulse" />En vivo
                </div>
              </div>
              <div className="h-32 relative">
                <svg viewBox="0 0 400 120" className="w-full h-full">
                  <defs>
                    <linearGradient id="g" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="oklch(0.62 0.22 295)" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="oklch(0.62 0.22 295)" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path d="M0,90 C50,70 80,40 120,50 C160,60 190,30 230,25 C270,20 310,40 350,30 L400,20 L400,120 L0,120 Z" fill="url(#g)" />
                  <path d="M0,90 C50,70 80,40 120,50 C160,60 190,30 230,25 C270,20 310,40 350,30 L400,20" stroke="oklch(0.72 0.2 305)" strokeWidth="2" fill="none" />
                </svg>
              </div>
            </div>

            <div className="rounded-lg border border-border bg-surface-elevated p-4 space-y-2.5">
              <div className="text-xs text-muted-foreground mb-2">Agentes activos</div>
              {["Atención WhatsApp", "Calificación de leads", "Sincronización CRM"].map((n) => (
                <div key={n} className="flex items-center justify-between text-xs">
                  <span className="inline-flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-emerald-400" />
                    {n}
                  </span>
                  <span className="text-muted-foreground">OK</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ icon, label, value, delta }: { icon: React.ReactNode; label: string; value: string; delta: string }) {
  return (
    <div className="rounded-lg border border-border bg-surface-elevated p-4">
      <div className="flex items-center justify-between text-muted-foreground">
        <span className="text-xs">{label}</span>
        <span className="text-primary-glow">{icon}</span>
      </div>
      <div className="mt-2 text-2xl font-semibold tracking-tight">{value}</div>
      <div className="text-xs text-muted-foreground mt-0.5">{delta}</div>
    </div>
  );
}
