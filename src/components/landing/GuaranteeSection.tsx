import { ShieldCheck } from "lucide-react";

const GuaranteeSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto flex flex-col md:flex-row items-center gap-8 rounded-2xl bg-muted/60 border border-border/60 p-8 md:p-10">
          <div className="shrink-0">
            <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
              <ShieldCheck size={40} className="text-primary" />
            </div>
          </div>
          <div>
            <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
              Garantia Incondicional de 7 Dias
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Se por qualquer motivo você sentir que o curso não é para você, basta solicitar
              o reembolso em até 7 dias após a compra e devolvemos 100% do seu investimento.
              Sem perguntas, sem burocracia. O risco é todo nosso. Pagamento 100% seguro via Hotmart.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
