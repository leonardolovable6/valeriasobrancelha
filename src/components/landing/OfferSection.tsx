import { Check } from "lucide-react";

const included = [
  "Acesso vitalício ao curso completo",
  "6 módulos com aulas em vídeo HD",
  "Bônus: Design de Sobrancelhas",
  "Certificado de conclusão profissional",
  "Suporte VIP com a Val Monteiro",
  "Material de apoio em PDF",
  "Acesso à comunidade exclusiva de alunas",
];

const OfferSection = () => {
  return (
    <section id="oferta" className="py-20 md:py-28 bg-foreground text-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Oferta Especial por Tempo Limitado
          </h2>
          <p className="text-background/70 max-w-xl mx-auto">
            Invista na sua carreira e comece a faturar com Brow Lamination hoje mesmo.
          </p>
        </div>

        <div className="max-w-lg mx-auto rounded-2xl bg-background/10 backdrop-blur-sm border border-background/20 p-8 md:p-10 text-center">
          <p className="text-sm uppercase tracking-wider text-background/60 mb-2">De <span className="line-through">R$ 297,00</span></p>
          <p className="text-5xl md:text-6xl font-bold text-primary mb-1">
            R$ 147<span className="text-3xl">,00</span>
          </p>
          <p className="text-sm text-background/60 mb-8">ou 12x de R$ 15,20 no cartão</p>

          <ul className="text-left space-y-3 mb-8">
            {included.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-background/90">
                <Check size={18} className="text-primary shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <a
            href="https://pay.hotmart.com/I99278213D"
            className="block w-full animate-pulse-cta rounded-lg bg-primary py-4 text-lg font-bold text-primary-foreground shadow-lg hover:brightness-110 transition-all"
            target="_blank"
            rel="noopener noreferrer"
          >
            SIM! QUERO APROVEITAR O DESCONTO
          </a>

          <p className="text-xs text-background/50 mt-4">
            🔒 Pagamento 100% seguro via Hotmart. Acesso imediato por e-mail após confirmação.
          </p>
          <p className="text-xs text-background/50 mt-2">
            💻 Compatível com computador, celular e tablet.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
