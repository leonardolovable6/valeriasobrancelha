import { DollarSign, BookOpen, Headphones, Award } from "lucide-react";

const benefits = [
  {
    icon: DollarSign,
    title: "Independência Financeira",
    description: "Comece com baixo investimento inicial e trabalhe de casa. Fature atendendo clientes em poucos dias.",
  },
  {
    icon: BookOpen,
    title: "Técnica Passo a Passo",
    description: "Aulas práticas do início ao fim com técnicas de acabamento perfeito. Explicações claras e diretas.",
  },
  {
    icon: Headphones,
    title: "Suporte VIP",
    description: "Tire todas as suas dúvidas e receba orientações sobre precificação e captação de clientes.",
  },
  {
    icon: Award,
    title: "Certificado Digital",
    description: "Certificado de conclusão profissional para usar no LinkedIn, currículo e portfólio.",
  },
];

const BenefitsSection = () => {
  return (
    <section id="beneficios" className="py-20 md:py-28 bg-muted/40 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Image */}
          <div className="relative animate-fade-in order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-background transform lg:-rotate-2 hover:rotate-0 transition-all duration-500">
              <img
                src="/val-2.jpeg"
                alt="Val Monteiro ensinando"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Decorative background element */}
            <div className="absolute -z-10 top-10 -left-10 w-full h-full bg-primary/10 rounded-2xl -rotate-6 hidden lg:block"></div>
          </div>

          {/* Right: Content */}
          <div className="order-1 lg:order-2">
            <div className="text-left mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Por que escolher este curso?
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Tudo o que você precisa para se tornar uma profissional de Brow Lamination requisitada no mercado.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              {benefits.map((b, i) => (
                <div
                  key={b.title}
                  className="animate-fade-in opacity-0 rounded-xl bg-background p-5 shadow-sm border border-border/60 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <b.icon size={20} className="text-primary" />
                  </div>
                  <h3 className="font-serif text-base font-semibold text-foreground mb-1.5">{b.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{b.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
