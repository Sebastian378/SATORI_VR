import { Sparkles, Linkedin, Twitter, Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-2">
              <div className="size-7 rounded-lg bg-gradient-to-br from-primary to-primary-glow grid place-items-center">
                <Sparkles className="size-4 text-primary-foreground" />
              </div>
              <span className="font-display font-semibold tracking-tight">Nexora</span>
            </a>
            <p className="mt-4 text-sm text-muted-foreground max-w-sm">
              Automatización e inteligencia artificial diseñada para empresas que
              quieren crecer sin operar al doble.
            </p>
            <a href="mailto:hola@nexora.ai" className="mt-4 inline-block text-sm text-foreground hover:text-primary-glow transition-colors">
              hola@nexora.ai
            </a>
          </div>

          <div>
            <div className="text-sm font-medium">Navegación</div>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              <li><a href="#servicios" className="hover:text-foreground transition-colors">Servicios</a></li>
              <li><a href="#flujo" className="hover:text-foreground transition-colors">Flujo</a></li>
              <li><a href="#sectores" className="hover:text-foreground transition-colors">Sectores</a></li>
              <li><a href="#diferencia" className="hover:text-foreground transition-colors">Diferencia</a></li>
            </ul>
          </div>

          <div>
            <div className="text-sm font-medium">Legal</div>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Privacidad</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Términos</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Cookies</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Nexora. Todos los derechos reservados.
          </div>
          <div className="flex gap-3 text-muted-foreground">
            <a href="#" aria-label="LinkedIn" className="hover:text-foreground transition-colors"><Linkedin className="size-4" /></a>
            <a href="#" aria-label="Twitter" className="hover:text-foreground transition-colors"><Twitter className="size-4" /></a>
            <a href="#" aria-label="GitHub" className="hover:text-foreground transition-colors"><Github className="size-4" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
