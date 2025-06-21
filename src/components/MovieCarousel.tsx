
import { useEffect, useState } from 'react';

const MovieCarousel = () => {
  const movies = [
    { title: 'Amor Atrás das Grades', image: 'https://images.unsplash.com/photo-1489599135554-d2b8ef55ab10?w=300&h=400&fit=crop' },
    { title: 'Os Farofeiros', image: 'https://images.unsplash.com/photo-1616530940355-351fabd9524b?w=300&h=400&fit=crop' },
    { title: 'Love Tactics', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=300&h=400&fit=crop' },
    { title: 'Vinte e Cinco, Vinte e Um', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop' },
    { title: 'Clima do Amor', image: 'https://images.unsplash.com/photo-1516726817505-f5ed825624d8?w=300&h=400&fit=crop' },
    { title: 'Arsène Lupin', image: 'https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=300&h=400&fit=crop' },
    { title: 'O Reino', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop' },
    { title: 'Bad Boys', image: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300&h=400&fit=crop' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % movies.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [movies.length]);

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
            {movies.map((movie, index) => (
              <div key={index} className="w-1/4 flex-shrink-0 px-2">
                <div className="bg-gray-800 rounded-lg overflow-hidden hover:scale-105 transition-transform cursor-pointer">
                  <img 
                    src={movie.image} 
                    alt={movie.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-3">
                    <h4 className="text-white font-semibold text-sm">{movie.title}</h4>
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
