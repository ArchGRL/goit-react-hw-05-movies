function getFavoriteMoviesList()  {
  const options = { method: 'GET', headers: { accept: 'application/json' } };

 return fetch(
    'https://api.themoviedb.org/3/trending/movie/day?api_key=971dc393aaedcd6f3861b1889a452151&language=en-US',
    options
  ).then(response => response.json());
};

export const getSearchMovie = (query) => {
    const options = { method: 'GET', headers: { accept: 'application/json' } };

    return fetch(
      `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=971dc393aaedcd6f3861b1889a452151&language=en-US`,
      options
    )
      .then(response => response.json());
};

export const getMovie = ({id}) => {
    const options = { method: 'GET', headers: { accept: 'application/json' } };

    return fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=971dc393aaedcd6f3861b1889a452151&language=en-US`,
      options
    )
      .then(response => response.json())
};

export const getMovieCast = ({id}) => {
    const options = {method: 'GET', headers: {accept: 'application/json'}};

    return fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=971dc393aaedcd6f3861b1889a452151&language=en-US`, options)
      .then(response => response.json())
};

export const getMovieReviews = ({id}) => {
    const options = {method: 'GET', headers: {accept: 'application/json'}};

    return fetch(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=971dc393aaedcd6f3861b1889a452151&language=en-US`, options)
      .then(response => response.json())
};

const api = {
    getFavoriteMoviesList,
    getSearchMovie,
    getMovie,
    getMovieCast,
    getMovieReviews,
}

export default api;