import React, { useState } from 'react';
import SearchBox from 'components/SearchBox/SearchBox';
import MoviesList from 'components/MoviesList/MoviesList';

const Movie = () => {
  const [movies, setMovies] = useState([]);

  const handleSearch = (dataMovie) => {
    setMovies(dataMovie.results);
  };

  return (
    <div>
      <SearchBox onSearch={handleSearch} />
      {/* {movies.length === 0 && (<h1>No movies were found for your request.</h1>)} */}
      {movies.length >= 1 && (<MoviesList movies={movies} />)}
      
    </div>
  );
};

export default Movie;