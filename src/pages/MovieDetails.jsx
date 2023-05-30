import { useParams} from "react-router-dom";
// import { BackLink } from "../components/BackLink";
import { useState, useEffect } from "react";

const MovieDetails = () => {
  const { id } = useParams();
//   const product = getProductById(id);
//   const location = useLocation();
//   const backLinkHref = location.state?.from ?? "/products";

  const [movieDetails, setMovieDetails] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const options = { method: 'GET', headers: { accept: 'application/json' } };

   fetch(`https://api.themoviedb.org/3/trending/movie/${id}?api_key=971dc393aaedcd6f3861b1889a452151&language=en-US`, options)
    .then(response => response.json())
    .then(response => {console.log(response); setMovieDetails(response);})
    .catch(error => setError(error.messag));
  }, [id]);

  return (
    <main>
      {/* <BackLink to={backLinkHref}>Back to products</BackLink> */}
      <img src="https://via.placeholder.com/960x240" alt="" />
      <div>
      <img src="" alt="" />
        <h1></h1>
        <p></p>
        <h2></h2>
        <p></p>
        <h2></h2>
        <p></p>
      </div>
    </main>
  );
};

export default MovieDetails;