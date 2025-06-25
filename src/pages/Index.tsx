
import { Tv } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import PlatformIcons from '../components/PlatformIcons';
import MovieCarousel from '../components/MovieCarousel';
import DeviceGrid from '../components/DeviceGrid';
import PricingSection from '../components/PricingSection';
import FAQ from '../components/FAQ';
import WhatsAppButton from '../components/WhatsAppButton';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <HeroSection />
      <PlatformIcons />
      <MovieCarousel />
      <DeviceGrid />
      <PricingSection />
      <FAQ />
      <WhatsAppButton />
      
      {/* Footer */}
      <footer className="bg-gray-900 py-8 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-4">
            <img 
              src="/lovable-uploads/221e1c67-deb7-40f3-93fe-acf654930999.png" 
              alt="EliteFlix Logo" 
              className="w-8 h-8 object-contain"
            />
            <span className="text-xl font-bold">ELITE<span className="text-red-600">FLIX</span></span>
          </div>
          <p className="text-gray-400 text-sm">
            © 2024 ELITEFLIX. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
