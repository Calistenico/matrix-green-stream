
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
          {/* Logo */}
          <div className="mb-8 animate-float">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="relative">
                <div className="w-24 h-24 bg-gradient-to-br from-gray-800 to-gray-600 rounded-full flex items-center justify-center border-4 border-matrix-green">
                  <span className="text-4xl font-bold text-matrix-green">M</span>
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 relative overflow-hidden">
                <Tv className="w-16 h-16 text-matrix-green" />
                <div className="absolute top-2 right-2 w-3 h-3 bg-matrix-green rounded-full animate-pulse"></div>
                <div className="absolute bottom-2 left-2 text-xs font-bold text-matrix-green">TV</div>
              </div>
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
          <button className="bg-matrix-green text-black px-8 py-3 rounded-full font-bold text-lg hover:bg-matrix-green-dark transition-colors inline-flex items-center gap-2">
            📞 SUPORTE!
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
