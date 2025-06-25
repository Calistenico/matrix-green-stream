
import { useEffect, useState } from 'react';

const PlatformIcons = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const platforms = [
    { 
      name: 'Paramount+', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Paramount_Plus_logo.svg/512px-Paramount_Plus_logo.svg.png',
      bgColor: 'bg-blue-600'
    },
    { 
      name: 'Prime Video', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Prime_Video.png/512px-Prime_Video.png',
      bgColor: 'bg-blue-900'
    },
    { 
      name: 'Star+', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Star_Plus_logo.svg/512px-Star_Plus_logo.svg.png',
      bgColor: 'bg-purple-800'
    },
    { 
      name: 'HBO Max', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/HBO_Max_Logo.svg/512px-HBO_Max_Logo.svg.png',
      bgColor: 'bg-purple-900'
    },
    { 
      name: 'Netflix', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/512px-Netflix_2015_logo.svg.png',
      bgColor: 'bg-red-600'
    },
    { 
      name: 'Disney+', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Disney%2B_logo.svg/512px-Disney%2B_logo.svg.png',
      bgColor: 'bg-blue-800'
    },
    { 
      name: 'Apple TV+', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Apple_TV_Plus_Logo.svg/512px-Apple_TV_Plus_Logo.svg.png',
      bgColor: 'bg-gray-800'
    },
    { 
      name: 'Globoplay', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Globoplay_logo_2019.svg/512px-Globoplay_logo_2019.svg.png',
      bgColor: 'bg-orange-600'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % platforms.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [platforms.length]);

  // Número de slides por visualização baseado no tamanho da tela
  const getSlidesPerView = () => {
    if (typeof window === 'undefined') return 3;
    if (window.innerWidth < 640) return 2; // mobile
    if (window.innerWidth < 1024) return 3; // tablet
    return 5; // desktop
  };

  const slidesPerView = getSlidesPerView();

  return (
    <div className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Todas as plataformas em um só lugar
          </h3>
          <p className="text-gray-400">Acesso completo às principais plataformas de streaming</p>
        </div>

        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / slidesPerView)}%)` }}
          >
            {platforms.map((platform, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-2 w-1/2 sm:w-1/3 lg:w-1/5"
              >
                <div className={`${platform.bgColor} rounded-lg h-24 flex items-center justify-center p-4 hover:scale-105 transition-transform cursor-pointer`}>
                  <img 
                    src={platform.logo} 
                    alt={platform.name}
                    className="max-w-full max-h-full object-contain filter brightness-0 invert"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = `<span class="text-white font-bold text-sm">${platform.name}</span>`;
                      }
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Indicadores de navegação */}
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: Math.ceil(platforms.length / slidesPerView) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index * slidesPerView)}
              className={`w-2 h-2 rounded-full transition-colors ${
                Math.floor(currentIndex / slidesPerView) === index 
                  ? 'bg-matrix-green' 
                  : 'bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlatformIcons;
