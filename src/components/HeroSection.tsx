
import { Tv } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative">
      {/* Banner promocional */}
      <div className="bg-matrix-green text-black py-3 text-center font-bold">
        <p className="text-lg md:text-xl">Promoção!</p>
        <p className="text-xl md:text-2xl">R$29,99 por mês</p>
      </div>

      {/* Hero content */}
      <div className="bg-black py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo Matrix */}
          <div className="mb-8">
            <div className="flex items-center justify-center mb-4">
              <img 
                src="/Logo Matrix.png" 
                alt="Matrix IPTV Logo" 
                className="w-32 h-32 md:w-48 md:h-48 object-contain"
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">
              MATRIX <span className="text-matrix-green">IPTV</span>
            </h1>
          </div>

          {/* Tagline */}
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-8">
            Assista tudo em um só lugar!
          </h2>

          {/* Support Button */}
          <button className="bg-matrix-green text-black px-8 py-3 rounded-full font-bold text-lg hover:bg-matrix-green-dark transition-colors inline-flex items-center gap-2 mb-8">
            📞 SUPORTE!
          </button>

          {/* Video */}
          <div className="max-w-2xl mx-auto">
            <video 
              controls 
              className="w-full rounded-lg shadow-lg"
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
