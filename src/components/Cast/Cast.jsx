import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import movieAPI from 'services/movie-api';

const Cast = () => {
  const [cast, setCast] = useState({});
  const { id } = useParams();

  useEffect(() => {
    movieAPI
      .getMovieCast({ id })
      .then(response => {
        setCast(response.cast);
      })
      .catch(err => console.error(err));
  }, [id]);

  return (
    <section>
      <ul>
        {cast.length >= 1 &&
          cast.map(({ id, profile_path, name, character }) => (
            <li key={id}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w200${profile_path}`
                    : 'https://via.placeholder.com/200x270'
                }
                alt={name}
              />
              <p>{name}</p>
              <p>{character}</p>
            </li>
          ))}
      </ul>
    </section>
  );
};

export default Cast;
