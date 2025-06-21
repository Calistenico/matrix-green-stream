
import { useQuery } from '@tanstack/react-query';

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
  release_date: string;
}

interface TMDBResponse {
  results: Movie[];
}

const TMDB_API_KEY = '9049a1d821f51ef88e70e430d10298c5';
const TMDB_BASE_URL = 'https://api.themoviedb.org/3';
const TMDB_IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w300';

export const useTMDBMovies = () => {
  return useQuery({
    queryKey: ['tmdb-movies'],
    queryFn: async (): Promise<Movie[]> => {
      const response = await fetch(
        `${TMDB_BASE_URL}/movie/popular?api_key=${TMDB_API_KEY}&language=pt-BR&page=1`
      );
      
      if (!response.ok) {
        throw new Error('Erro ao buscar filmes do TMDB');
      }
      
      const data: TMDBResponse = await response.json();
      return data.results.slice(0, 8); // Limitando a 8 filmes
    },
    staleTime: 1000 * 60 * 30, // 30 minutos
    gcTime: 1000 * 60 * 60, // 1 hora
  });
};

export const getTMDBImageUrl = (posterPath: string) => {
  return `${TMDB_IMAGE_BASE_URL}${posterPath}`;
};
