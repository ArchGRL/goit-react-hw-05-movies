import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchBox from 'components/SearchBox/SearchBox';
import MoviesList from 'components/MoviesList/MoviesList';
import movieAPI from '../services/movie-api';

const Movie = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const moviesName = searchParams.get('query') ?? '';

  useEffect(() => {
    if (moviesName) {
      setMovies([]);
      setError('');
      fetchMovies(moviesName);
    }
  }, [moviesName]);

  const fetchMovies = query => {
    movieAPI
      .getSearchMovie(query)
      .then(response => {
        if (response.results.length >= 1) {
          setMovies(response.results);
          return;
        }
        setError(`Sorry, there is no movie with the name "${query}".`);
      })
      .catch(error => setError(error.message));
  };

  const updateQueryString = query => {
    setSearchParams(query !== '' ? { query } : {});
  };

  const handleSearch = query => {
    updateQueryString(query);
    fetchMovies(query);
  };

  return (
    <div>
      <SearchBox onSearch={handleSearch} />
      {movies.length >= 1 && <MoviesList movies={movies} />}
      {error !== '' && <h1>{error}</h1>}
    </div>
  );
};

export default Movie;