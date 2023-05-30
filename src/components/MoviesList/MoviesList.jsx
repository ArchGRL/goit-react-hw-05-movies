import { Link, useLocation } from "react-router-dom";
// import { Container, CardWrapper, ProductName } from "./ProductList.styled";

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <div>
      <ul>
          {movies.map(({ id, title }) => (
            <li key={id}>
              <Link to={`${id}`} state={{ from: location }}>{title}</Link>
            </li>
          ))}
        </ul>
    </div>
  );
};

export default MoviesList;
