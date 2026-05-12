import { Code2, Globe, Server, Layers, Layout, Cpu, Rocket } from "lucide-react";

const webServices = [
  { icon: Globe, title: "Desarrollo de páginas web", desc: "Sitios web de alto impacto, optimizados para conversión y con diseño premium." },
  { icon: Server, title: "Sistemas backend", desc: "Arquitecturas robustas y escalables para manejar la lógica de tu negocio." },
  { icon: Cpu, title: "APIs e integraciones", desc: "Conectamos tus plataformas con servicios de terceros de forma eficiente." },
  { icon: Layers, title: "Plataformas empresariales", desc: "Soluciones de software complejas diseñadas para las necesidades de tu empresa." },
  { icon: Layout, title: "Dashboards administrativos", desc: "Paneles de control intuitivos para gestionar tus datos y operaciones." },
  { icon: Code2, title: "Sistemas personalizados", desc: "Desarrollo a medida que se adapta perfectamente a tus flujos de trabajo." },
  { icon: Rocket, title: "Soluciones web escalables", desc: "Tecnología moderna preparada para crecer al ritmo de tu negocio." },
];

export function WebDev() {
  return (
    <section id="web" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      
      <div className="mx-auto max-w-7xl px-6 relative">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-widest text-primary-glow">Desarrollo Web</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">
            Ingeniería web de clase mundial<br />para empresas ambiciosas
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            No solo creamos sitios, construimos ecosistemas digitales potentes, 
            seguros y escalables que impulsan el crecimiento corporativo.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden border border-border shadow-soft">
          {webServices.map((s) => (
            <div key={s.title} className="group relative bg-surface p-8 hover:bg-surface-elevated transition-all duration-500">
              <div className="size-12 rounded-xl bg-accent/40 grid place-items-center text-primary-glow group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-primary-glow group-hover:text-primary-foreground transition-all duration-500 shadow-sm">
                <s.icon className="size-6" />
              </div>
              <h3 className="mt-6 text-lg font-semibold tracking-tight">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary-glow transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
          <div className="group relative bg-gradient-to-br from-primary/10 to-accent/20 p-8 flex flex-col justify-center border-l border-border">
             <h3 className="text-lg font-semibold tracking-tight text-gradient">¿Listo para escalar?</h3>
             <p className="mt-2 text-sm text-muted-foreground mb-4">Llevemos tu infraestructura digital al siguiente nivel.</p>
             <a href="#contacto" className="text-sm font-medium text-primary-glow inline-flex items-center gap-1 hover:gap-2 transition-all">
               Hablar con un experto <Rocket className="size-3" />
             </a>
          </div>
        </div>
      </div>
    </section>
  );
}
