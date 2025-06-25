
import { useEffect, useState } from 'react';
import { useTMDBMovies, getTMDBImageUrl } from '../hooks/useTMDBMovies';

const MovieCarousel = () => {
  const { data: movies, isLoading, error } = useTMDBMovies();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    if (!movies || movies.length === 0) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        // Reset instantâneo quando chegar ao final da primeira sequência
        if (nextIndex >= movies.length) {
          setTimeout(() => {
            setIsTransitioning(false);
            setCurrentIndex(0);
            setTimeout(() => setIsTransitioning(true), 50);
          }, 1000);
          return nextIndex;
        }
        return nextIndex;
      });
    }, 2500);

    return () => clearInterval(interval);
  }, [movies]);

  if (isLoading) {
    return (
      <div className="py-12 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <button className="bg-matrix-green text-black px-6 py-2 rounded-full font-bold mb-4">
              📞 SUPORTE!
            </button>
            <h3 className="text-3xl font-bold text-white mb-2">Tudo liberado!</h3>
          </div>
          <div className="text-center text-white">
            <p>Carregando filmes...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error || !movies) {
    return (
      <div className="py-12 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <button className="bg-matrix-green text-black px-6 py-2 rounded-full font-bold mb-4">
              📞 SUPORTE!
            </button>
            <h3 className="text-3xl font-bold text-white mb-2">Tudo liberado!</h3>
          </div>
          <div className="text-center text-white">
            <p>Erro ao carregar filmes. Tente novamente mais tarde.</p>
          </div>
        </div>
      </div>
    );
  }

  // Duplicar os filmes para criar loop infinito
  const duplicatedMovies = [...movies, ...movies];

  const getSlidesPerView = () => {
    if (typeof window === 'undefined') return 4;
    if (window.innerWidth < 640) return 2;
    if (window.innerWidth < 768) return 2;
    if (window.innerWidth < 1024) return 3;
    return 4;
  };

  const slidesPerView = getSlidesPerView();

  return (
    <div className="py-12 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <button className="bg-matrix-green text-black px-6 py-2 rounded-full font-bold mb-4">
            📞 SUPORTE!
          </button>
          <h3 className="text-3xl font-bold text-white mb-2">Tudo liberado!</h3>
        </div>

        <div className="relative overflow-hidden">
          <div 
            className={`flex ${isTransitioning ? 'transition-transform duration-1000 ease-linear' : ''}`}
            style={{ 
              transform: `translateX(-${currentIndex * (100 / slidesPerView)}%)`,
              width: `${(duplicatedMovies.length * 100) / slidesPerView}%`
            }}
          >
            {duplicatedMovies.map((movie, index) => (
              <div 
                key={`${movie.id}-${index}`}
                className="flex-shrink-0 px-2"
                style={{ width: `${100 / duplicatedMovies.length}%` }}
              >
                <div className="bg-gray-800 rounded-lg overflow-hidden hover:scale-105 transition-transform cursor-pointer">
                  <div className="relative aspect-[2/3] min-h-[200px] sm:min-h-[250px] md:min-h-[300px]">
                    <img 
                      src={getTMDBImageUrl(movie.poster_path)} 
                      alt={movie.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = 'https://images.unsplash.com/photo-1489599135554-d2b8ef55ab10?w=300&h=400&fit=crop';
                      }}
                    />
                  </div>
                  <div className="p-3">
                    <h4 className="text-white font-semibold text-sm line-clamp-2">{movie.title}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-white text-lg">Assista sem travamentos e quedas!</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCarousel;
