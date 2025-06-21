
import { useEffect, useState } from 'react';
import { useTMDBMovies, getTMDBImageUrl } from '../hooks/useTMDBMovies';

const MovieCarousel = () => {
  const { data: movies, isLoading, error } = useTMDBMovies();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!movies || movies.length === 0) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % movies.length);
    }, 3000);

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

  // Diferentes números de slides para diferentes tamanhos de tela
  const getSlidesPerView = () => {
    if (window.innerWidth < 640) return 2; // mobile
    if (window.innerWidth < 1024) return 3; // tablet
    return 4; // desktop
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
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / slidesPerView)}%)` }}
          >
            {movies.map((movie) => (
              <div 
                key={movie.id} 
                className="flex-shrink-0 px-2 w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4"
              >
                <div className="bg-gray-800 rounded-lg overflow-hidden hover:scale-105 transition-transform cursor-pointer">
                  <div className="relative aspect-[2/3]">
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

        {/* Indicadores de navegação para mobile */}
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: Math.ceil(movies.length / slidesPerView) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                Math.floor(currentIndex / slidesPerView) === index 
                  ? 'bg-matrix-green' 
                  : 'bg-gray-600'
              }`}
            />
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-white text-lg">Assista sem travamentos e quedas!</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCarousel;
