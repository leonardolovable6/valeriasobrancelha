const SpecialistSection = () => {
  return (
    <section id="especialista" className="py-20 md:py-28 bg-muted/40">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">
          {/* Photo placeholder */}
          {/* Photo */}
          <div className="flex justify-center">
            <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-secondary border-4 border-primary/30 shadow-xl flex items-center justify-center overflow-hidden">
              <img
                src="/val-expert.jpeg"
                alt="Val Monteiro - Especialista em Brow Lamination"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Bio */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              Conheça a Val Monteiro
            </h2>
            <p className="text-primary font-medium mb-6">Especialista em Brow Lamination & Design de Sobrancelhas</p>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Com anos de experiência no mercado de sobrancelhas e design, Val Monteiro já ajudou
                centenas de mulheres a conquistarem independência financeira através da estética.
              </p>
              <p>
                Sua didática é clara e direta, com foco total no suporte ao aluno — ideal para quem
                está começando do zero e quer resultados rápidos e práticos.
              </p>
              <p>
                Apaixonada por transformar vidas através da beleza, Val criou este curso para
                que qualquer mulher possa aprender uma técnica de alta demanda e começar a faturar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialistSection;
