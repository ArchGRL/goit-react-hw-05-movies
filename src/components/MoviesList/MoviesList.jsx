import { useLocation } from 'react-router-dom';
import { ListLink } from 'pages/Home.styled';
import PropTypes from 'prop-types';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <div>
      <ol>
        {movies.map(({ id, title }) => (
          <li key={id}>
            <ListLink to={`${id}`} state={{ from: location }}>
              {title}
            </ListLink>
          </li>
        ))}
      </ol>
    </div>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default MoviesList;