import { useParams, useLocation } from "react-router-dom";
import { BackLink } from "components/BackLink/BackLink";
import { useState, useEffect } from "react";

const MovieDetails = () => {
 
//   const product = getProductById(id);
//   const location = useLocation();
//   const backLinkHref = location.state?.from ?? "/products";

  const [movieDetails, setMovieDetails] = useState({});
  const { id } = useParams();
  const [error, setError] = useState(null);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/movies";

  useEffect(() => {
    const options = { method: 'GET', headers: { accept: 'application/json' } };

   fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=971dc393aaedcd6f3861b1889a452151&language=en-US`, options)
    .then(response => response.json())
    .then(response => {console.log(response); setMovieDetails(response);})
    .catch(error => setError(error.messag));
  }, [id]);

  const dataMovie = movieDetails.release_date ? `${movieDetails.release_date.slice(0,4)}`:'';
  const moviePoster = movieDetails.poster_path ? `https://image.tmdb.org/t/p/w200${movieDetails.poster_path}`:`https://via.placeholder.com/200x270`;
//   const dataMovie = () => {
// if (movieDetails.release_date === '') {

// }
//   };

  return (
    <main>
      <BackLink to={backLinkHref}>Back to products</BackLink>
      <div>
      <img src={moviePoster} alt={movieDetails.title} />
        <h1>{movieDetails.original_title} {dataMovie}</h1>
        <p>User Score: <span>{Math.round(movieDetails.vote_average*10)}%</span></p>
        <h2>Overview</h2>
        <p>{movieDetails.overview}</p>
        <h2>Genres</h2>
        <div>{movieDetails.genres && (movieDetails.genres.map(({id, name}) => <span key={id}>{name}</span> ))}</div>
       
      </div>
    </main>
  );
};

export default MovieDetails;