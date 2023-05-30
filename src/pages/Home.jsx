import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const [favoriteMoviesList, setfavoriteMoviesList] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const options = { method: 'GET', headers: { accept: 'application/json' } };

   fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=971dc393aaedcd6f3861b1889a452151&language=en-US', options)
    .then(response => response.json())
    .then(response => {console.log(response.results); setfavoriteMoviesList(response.results);})
    .catch(error => setError(error.messag));
  }, []);

  return (
    <div>
      {favoriteMoviesList.length >= 1 && (
        <ul>
          {favoriteMoviesList.map(({ id, title }) => (
            <li key={id}>
              <Link to={`/movies/${id}`}>{title}</Link>
            </li>
          ))}
        </ul>
      )}
      {error !== '' && (
        <h1>{error}</h1>
      )}
    </div>
  );
}
