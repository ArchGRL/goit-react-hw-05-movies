import React, { useState } from 'react';
import { useSearchParams } from "react-router-dom";
import SearchBox from 'components/SearchBox/SearchBox';
import MoviesList from 'components/MoviesList/MoviesList';

const Movie = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const moviesName = searchParams.get("query") ?? "";

  const updateQueryString = (query) => {
    const nextParams = query !== "" ? { query } : {};
    setSearchParams(nextParams);
  };

  const handleSearch = (dataMovie) => {
    setMovies(dataMovie.results);
  };

  return (
    <div>
      <SearchBox value={moviesName} onSearch={handleSearch}  onChange={updateQueryString} />
      {/* {movies.length === 0 && (<h1>No movies were found for your request.</h1>)} */}
      {movies.length >= 1 && (<MoviesList movies={movies} />)}
      
    </div>
  );
};

export default Movie;
