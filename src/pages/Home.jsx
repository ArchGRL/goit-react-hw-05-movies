import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ListLink } from "../pages/Home.styled";
import movieAPI from '../services/movie-api';

export default function Home() {
  const [favoriteMoviesList, setFavoriteMoviesList] = useState([]);
  const [error, setError] = useState('');
  const location = useLocation();

  useEffect(() => {
    movieAPI
      .getFavoriteMoviesList()
      .then(response => {
        setFavoriteMoviesList(response.results);
      })
      .catch(error => setError(error.message));
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      {favoriteMoviesList.length >= 1 && (
        <ol>
          {favoriteMoviesList.map(({ id, title }) => (
            <li key={id}>
              <ListLink to={`/movies/${id}`} state={{ from: location }}>
                {title}
              </ListLink>
            </li>
          ))}
        </ol>
      )}
      {error !== '' && <h1>{error}</h1>}
    </div>
  );
}
