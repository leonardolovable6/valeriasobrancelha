import { Award, Headphones, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 overflow-hidden bg-[#0A0A0A] text-white">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/90 z-10"></div>

      {/* Background Image (Optional: you could add a subtle texture or blurred version of the specialist image here) */}
      <div className="absolute inset-0 opacity-20 bg-[url('/val-hero-nobg.png')] bg-cover bg-center blur-sm z-0"></div>

      {/* Gold accents */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-primary/20 to-transparent z-10 pointer-events-none"></div>

      <div className="container mx-auto px-4 z-20 relative text-center">

        {/* Banner Tempo Limitado */}
        <div className="inline-block bg-gradient-to-r from-transparent via-primary/20 to-transparent w-full max-w-2xl mx-auto mb-8 py-2 border-y border-primary/30 backdrop-blur-sm animate-fade-in">
          <p className="text-primary font-bold uppercase tracking-widest text-sm md:text-base">
            Oferta por Tempo Limitado
          </p>
        </div>

        {/* Headline */}
        <div className="max-w-4xl mx-auto mb-10 animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight mb-4 text-white drop-shadow-lg">
            DOMINE A TÉCNICA DE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F2E6A5]">BROW LAMINATION</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-300 font-light tracking-wide mt-4">
            DUPLIQUE SEU FATURAMENTO COM UMA ÚNICA TÉCNICA!
          </p>
        </div>

        {/* Content Grid: Image + Video */}
        <div className="grid lg:grid-cols-2 gap-8 items-end max-w-6xl mx-auto">

          {/* Specialist Image (Left/Center on mobile) */}
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px] flex items-end justify-center animate-fade-in order-2 lg:order-1 lg:ml-auto">
            <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-[#0A0A0A] to-transparent z-20"></div>
            <img
              src="/val-hero-nobg.png"
              alt="Val Monteiro"
              className="h-full w-auto object-contain drop-shadow-2xl relative z-10 hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>

          {/* Video & CTA (Right/Bottom on mobile) */}
          <div className="flex flex-col items-center lg:items-start justify-center pb-10 animate-fade-in [animation-delay:200ms] order-1 lg:order-2">

            {/* Video Container with Gold Border */}
            <div className="relative w-full max-w-lg aspect-video rounded-xl bg-black border-2 border-[#D4AF37] shadow-[0_0_30px_rgba(212,175,55,0.3)] overflow-hidden mb-8 group">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/0LHGfJZ2G7g"
                title="Apresentação Brow Masterclass"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Main CTA */}
            <a
              href="#oferta"
              className="w-full max-w-md text-center bg-gradient-to-r from-[#D4AF37] to-[#B49326] text-black font-bold text-lg md:text-xl py-4 rounded-full shadow-lg hover:shadow-[0_0_20px_rgba(212,175,55,0.6)] hover:brightness-110 transition-all transform hover:-translate-y-1"
            >
              SIM, QUERO COMEÇAR AGORA!
            </a>

            <p className="text-sm text-gray-400 mt-4 flex items-center gap-2">
              <Zap size={14} className="text-primary" />
              Acesso imediato e vitalício
            </p>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
