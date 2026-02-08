import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Para quem é esse curso?",
    a: "Para mulheres iniciantes que querem entrar no mercado da estética ou profissionais que já atuam e desejam agregar uma nova técnica de alta demanda.",
  },
  {
    q: "Preciso ter experiência na área de estética?",
    a: "Não! O curso foi desenvolvido especialmente para iniciantes. A Val ensina tudo do zero, de forma simples e prática.",
  },
  {
    q: "Como funciona o acesso ao curso?",
    a: "Após a confirmação do pagamento via Hotmart, você recebe imediatamente o acesso por e-mail à plataforma com todas as aulas e materiais.",
  },
  {
    q: "O certificado é reconhecido?",
    a: "Sim! Você recebe um certificado digital de conclusão que pode ser utilizado no LinkedIn, currículo e portfólio profissional.",
  },
  {
    q: "Por quanto tempo terei acesso ao curso?",
    a: "O acesso é vitalício! Você pode assistir às aulas quantas vezes quiser, no seu próprio ritmo.",
  },
  {
    q: "E se eu não gostar do curso?",
    a: "Oferecemos garantia incondicional de 7 dias. Se não ficar satisfeita, devolvemos 100% do seu investimento, sem perguntas.",
  },
  {
    q: "Posso assistir pelo celular?",
    a: "Sim! A plataforma é compatível com computador, celular e tablet.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-20 md:py-28 bg-muted/40">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Perguntas Frequentes
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="rounded-xl border border-border/60 bg-background px-5 shadow-sm"
            >
              <AccordionTrigger className="text-left font-sans font-medium text-foreground hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
