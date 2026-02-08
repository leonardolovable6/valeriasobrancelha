import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Camila S.",
    text: "Comecei do zero e em 2 semanas já estava atendendo clientes. O suporte da Val fez toda a diferença!",
  },
  {
    name: "Juliana M.",
    text: "O curso é super didático! Consegui aprender a técnica mesmo sem experiência na área de estética.",
  },
  {
    name: "Fernanda R.",
    text: "Melhor investimento que fiz! Já recuperei o valor do curso no primeiro mês de atendimentos.",
  },
  {
    name: "Amanda L.",
    text: "A Val explica tudo com muita paciência. O bônus de design de sobrancelhas é incrível!",
  },
];

const SocialProofSection = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <section id="depoimentos" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            O que nossas alunas dizem
          </h2>
          <p className="text-muted-foreground">Histórias reais de transformação profissional.</p>
        </div>

        {/* Testimonial carousel */}
        <div className="max-w-2xl mx-auto mb-20">
          <div className="bg-background rounded-2xl border border-border/60 p-8 md:p-10 shadow-sm text-center relative">
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="fill-primary text-primary" />
              ))}
            </div>
            <p className="text-foreground text-lg italic leading-relaxed mb-6">
              "{testimonials[current].text}"
            </p>
            <p className="font-semibold text-foreground">{testimonials[current].name}</p>
            <p className="text-xs text-muted-foreground">Aluna do curso</p>

            <div className="flex justify-center gap-4 mt-6">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
                aria-label="Anterior"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
                aria-label="Próximo"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all ${i === current ? "bg-primary w-6" : "bg-border"
                  }`}
                aria-label={`Depoimento ${i + 1}`}
              />
            ))}
          </div>
        </div>


      </div>
    </section>
  );
};

export default SocialProofSection;
