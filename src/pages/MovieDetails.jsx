import { useParams, useLocation } from 'react-router-dom';
import { BackLink } from 'components/BackLink/BackLink';
import { Suspense, useRef } from 'react';
import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { BackButton, DetailsBox, TextDetailsBox, GenresBox, AdditionalBox, AdditionalLink } from './MovieDetails.styled';
import movieAPI from '../services/movie-api';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const [error, setError] = useState('');
  const { id } = useParams();
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    movieAPI
      .getMovie({ id })
      .then(response => {
        setMovieDetails(response);
      })
      .catch(error => setError(error.message));
  }, [id]);

  const dataMovie = movieDetails.release_date ? `${movieDetails.release_date.slice(0, 4)}` : '';
  const moviePoster = movieDetails.poster_path ? `https://image.tmdb.org/t/p/w200${movieDetails.poster_path}`: `https://via.placeholder.com/200x270`;
  const {title, original_title, vote_average, overview, genres } = movieDetails;
  return (
    <main>
      {movieDetails && (
        <div>
          <BackButton>
          <BackLink to={backLinkRef.current}>Go back</BackLink>
          </BackButton>
        <DetailsBox>
          <img src={moviePoster} alt={title} />
          <TextDetailsBox>
          <h1>{original_title} {dataMovie}</h1>
          <p>User Score: <span>{Math.round(vote_average * 10)}%</span></p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h2>Genres</h2>
          <GenresBox>
            {genres && genres.map(({ id, name }) => (
                <span key={id}>{name}</span>
              ))}
          </GenresBox>
          </TextDetailsBox>
        </DetailsBox>
        <AdditionalBox>
        <p>Additional information</p>
        <ul>
          <li>
            <AdditionalLink to="cast">Cast</AdditionalLink>
          </li>
          <li>
            <AdditionalLink to="reviews">Reviews</AdditionalLink>
          </li>
        </ul>
        </AdditionalBox>
        
        <Suspense>
          <Outlet />
        </Suspense>
        </div>
      )}
      {error && <h1>{error}</h1>}  
    </main>
  );
};

export default MovieDetails;