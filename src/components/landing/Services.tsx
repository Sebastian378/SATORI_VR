import { Bot, MessageCircle, Database, Workflow, Headphones, Cog, TrendingUp, Plug } from "lucide-react";

const services = [
  { icon: Bot, title: "Agentes IA personalizados", desc: "Asistentes entrenados con el conocimiento, tono y procesos de tu empresa." },
  { icon: MessageCircle, title: "Automatización de WhatsApp", desc: "Atención, ventas y seguimiento automatizados en el canal donde están tus clientes." },
  { icon: Database, title: "Integración con CRMs", desc: "Sincronización en tiempo real con HubSpot, Salesforce, Pipedrive y más." },
  { icon: Workflow, title: "Automatización empresarial", desc: "Flujos end-to-end que conectan equipos, sistemas y datos sin fricción." },
  { icon: Headphones, title: "IA para atención al cliente", desc: "Respuestas instantáneas, resolución de tickets y derivación inteligente." },
  { icon: Cog, title: "Sistemas internos inteligentes", desc: "Dashboards, paneles y herramientas a medida para tu operación." },
  { icon: TrendingUp, title: "Automatización de ventas", desc: "Calificación de leads, seguimiento y cierre asistido por IA." },
  { icon: Plug, title: "Integraciones API", desc: "Conectamos cualquier sistema, legacy o moderno, vía API segura." },
];

export function Services() {
  return (
    <section id="servicios" className="py-24 relative">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-widest text-primary-glow">Servicios</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">
            Todo lo que tu empresa necesita<br />para operar con IA
          </h2>
          <p className="mt-4 text-muted-foreground">
            Diseñamos, integramos y mantenemos soluciones de automatización adaptadas
            a la realidad de cada negocio.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden border border-border">
          {services.map((s) => (
            <div key={s.title} className="group relative bg-surface p-6 hover:bg-surface-elevated transition-colors duration-300">
              <div className="size-11 rounded-xl bg-accent/40 grid place-items-center text-primary-glow group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-primary-glow group-hover:text-primary-foreground transition-all duration-300">
                <s.icon className="size-5" />
              </div>
              <h3 className="mt-5 font-semibold tracking-tight">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
