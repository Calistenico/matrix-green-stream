
import { Tv } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative">
      {/* Banner promocional */}
      <div className="bg-red-600 text-white py-3 text-center font-bold">
        <p className="text-lg md:text-xl">🔥 Oferta Limitada!</p>
        <p className="text-xl md:text-2xl">Teste Grátis por 3 dias</p>
      </div>

      {/* Hero content */}
      <div className="bg-black py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo EliteFlix */}
          <div className="mb-8">
            <div className="flex items-center justify-center mb-4">
              <img 
                src="/lovable-uploads/221e1c67-deb7-40f3-93fe-acf654930999.png" 
                alt="EliteFlix Logo" 
                className="w-24 h-24 md:w-32 md:h-32 object-contain"
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">
              ELITE<span className="text-red-600">FLIX</span>
            </h1>
          </div>

          {/* Copy poderosa */}
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
            🚀 Desbloqueie o Universo do Entretenimento!
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Milhares de filmes, séries e canais ao vivo em HD. Sem travamentos, sem limites!
          </p>

          {/* CTA Pulsante */}
          <div className="mb-8">
            <button 
              onClick={() => {
                const phoneNumber = "5544991082160";
                const message = "🔥 Quero começar meu teste grátis agora no ELITEFLIX!";
                const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                window.open(whatsappUrl, '_blank');
              }}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold text-xl transition-all duration-300 animate-pulse hover:animate-none hover:scale-105 shadow-lg shadow-red-600/50"
            >
              🎬 COMEÇAR AGORA - GRÁTIS!
            </button>
          </div>

          {/* Video */}
          <div className="max-w-2xl mx-auto">
            <video 
              controls 
              className="w-full rounded-lg shadow-lg border-2 border-red-600"
              poster="/placeholder.svg"
            >
              <source src="/Vídeo do WhatsApp de 2025-06-21 à(s) 16.22.16_6b34769f.mp4" type="video/mp4" />
              Seu navegador não suporta vídeos HTML5.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
