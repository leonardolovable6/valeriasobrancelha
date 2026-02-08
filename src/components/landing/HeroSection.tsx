import { Award, Headphones, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
        backgroundSize: "40px 40px",
      }} />

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <div className="animate-fade-in">
            <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary mb-6">
              Curso Online Completo
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground mb-6">
              Domine a técnica de{" "}
              <span className="text-primary italic">Brow Lamination</span>{" "}
              e transforme sua carreira.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-lg">
              Método simples, rápido e prático para criar sobrancelhas perfeitas
              e se destacar no mercado da estética, mesmo começando do zero.{" "}
              <strong className="text-foreground">Certificado incluso.</strong>
            </p>
            <a
              href="#oferta"
              className="inline-block animate-pulse-cta rounded-lg bg-primary px-8 py-4 text-lg font-bold text-primary-foreground shadow-lg hover:brightness-110 transition-all"
            >
              Quero me tornar uma Especialista
            </a>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-6 mt-10">
              {[
                { icon: Award, label: "Certificado Incluso" },
                { icon: Headphones, label: "Suporte VIP" },
                { icon: Zap, label: "Acesso Imediato" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Icon size={18} className="text-primary" />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Video / Image placeholder */}
          <div className="animate-fade-in [animation-delay:200ms] opacity-0">
            <div className="relative aspect-video rounded-2xl bg-black border border-border overflow-hidden shadow-xl">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/0LHGfJZ2G7g"
                title="Apresentação Brow Masterclass"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
