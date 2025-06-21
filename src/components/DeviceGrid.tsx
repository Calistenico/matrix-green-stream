
import { Tv, Smartphone, Tablet, Monitor } from 'lucide-react';

const DeviceGrid = () => {
  const devices = [
    {
      name: 'Smart TV',
      icon: <Tv className="w-12 h-12 text-white" />,
      image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=200&h=150&fit=crop'
    },
    {
      name: 'TV Box',
      icon: <div className="w-12 h-12 bg-gray-700 rounded flex items-center justify-center text-white text-xs">BOX</div>,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&h=150&fit=crop'
    },
    {
      name: 'Stick TV',
      icon: <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center text-white text-xs">STICK</div>,
      image: 'https://images.unsplash.com/photo-1624461164770-1e1b9df8e2c2?w=200&h=150&fit=crop'
    },
    {
      name: 'Celular',
      icon: <Smartphone className="w-12 h-12 text-white" />,
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=200&h=150&fit=crop'
    },
    {
      name: 'Tablet',
      icon: <Tablet className="w-12 h-12 text-white" />,
      image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=200&h=150&fit=crop'
    },
    {
      name: 'Computador',
      icon: <Monitor className="w-12 h-12 text-white" />,
      image: 'https://images.unsplash.com/photo-1547082299-de196ea013d6?w=200&h=150&fit=crop'
    }
  ];

  return (
    <div className="py-16 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          Funcional para:
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {devices.map((device, index) => (
            <div key={index} className="text-center group">
              <div className="relative overflow-hidden rounded-lg mb-4 hover:scale-105 transition-transform">
                <img 
                  src={device.image} 
                  alt={device.name}
                  className="w-full h-32 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  {device.icon}
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-matrix-green text-black py-2 font-bold">
                  {device.name}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-white text-xl mb-2">Achou interessante?</p>
          <p className="text-white text-xl font-bold">Contrate Agora Mesmo.</p>
        </div>
      </div>
    </div>
  );
};

export default DeviceGrid;
