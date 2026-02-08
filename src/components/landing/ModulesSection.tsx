import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Sparkles } from "lucide-react";

const modules = [
  {
    title: "Módulo 1 — Introdução à Brow Lamination",
    content: "Conheça a técnica, seus benefícios, materiais necessários e como preparar seu espaço de trabalho profissional.",
  },
  {
    title: "Módulo 2 — Anatomia e Tipos de Sobrancelhas",
    content: "Estudo dos formatos de rosto, tipos de fio e como identificar o design ideal para cada cliente.",
  },
  {
    title: "Módulo 3 — Passo a Passo Completo da Técnica",
    content: "Demonstração prática em modelo real: aplicação dos produtos, tempos, cuidados e acabamento perfeito.",
  },
  {
    title: "Módulo 4 — Tintura e Finalização",
    content: "Como aplicar tintura de sobrancelhas, técnicas de colorimetria e finalização profissional.",
  },
  {
    title: "Módulo 5 — Biossegurança e Cuidados",
    content: "Normas sanitárias, higienização de materiais e orientações pós-procedimento para suas clientes.",
  },
  {
    title: "Módulo 6 — Como Precificar e Captar Clientes",
    content: "Estratégias de precificação, marketing para redes sociais e como montar seu portfólio profissional.",
  },
];

const bonus = {
  title: "BÔNUS — Design de Sobrancelhas",
  content: "Módulo extra completo sobre design de sobrancelhas com técnicas de visagismo, medição com paquímetro e prática em modelo. Um complemento essencial para oferecer um serviço completo.",
};

const ModulesSection = () => {
  return (
    <section id="modulos" className="py-20 md:py-28">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            O que você vai aprender
          </h2>
          <p className="text-muted-foreground">
            Um conteúdo programático completo, do zero ao profissional.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {modules.map((mod, i) => (
            <AccordionItem
              key={i}
              value={`mod-${i}`}
              className="rounded-xl border border-border/60 bg-background px-5 shadow-sm"
            >
              <AccordionTrigger className="text-left font-sans font-medium text-foreground hover:no-underline">
                {mod.title}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {mod.content}
              </AccordionContent>
            </AccordionItem>
          ))}

          {/* Bonus */}
          <AccordionItem
            value="bonus"
            className="rounded-xl border-2 border-primary/40 bg-primary/5 px-5 shadow-sm"
          >
            <AccordionTrigger className="text-left font-sans font-medium text-foreground hover:no-underline">
              <span className="flex items-center gap-2">
                <Sparkles size={18} className="text-primary" />
                {bonus.title}
                <span className="ml-2 rounded-full bg-primary px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary-foreground">
                  Bônus
                </span>
              </span>
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              {bonus.content}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default ModulesSection;
