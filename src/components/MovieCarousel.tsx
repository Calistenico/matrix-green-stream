
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
            style={{ transform: `translateX(-${currentIndex * (100 / Math.min(movies.length, 4))}%)` }}
          >
            {movies.map((movie) => (
              <div key={movie.id} className="w-1/4 flex-shrink-0 px-2">
                <div className="bg-gray-800 rounded-lg overflow-hidden hover:scale-105 transition-transform cursor-pointer">
                  <img 
                    src={getTMDBImageUrl(movie.poster_path)} 
                    alt={movie.title}
                    className="w-full h-64 object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://images.unsplash.com/photo-1489599135554-d2b8ef55ab10?w=300&h=400&fit=crop';
                    }}
                  />
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
