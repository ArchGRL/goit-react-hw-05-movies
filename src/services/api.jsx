// export const getFavoriteMoviesList = () => {
//   const options = { method: 'GET', headers: { accept: 'application/json' } };

//   const data = fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=971dc393aaedcd6f3861b1889a452151&language=en-US', options)
//   .then(response => response.json())
//   .then(response => console.log(response.results))
//   .catch(err => console.error(err));
//   return data;
// };

// export const getSearchMovie = (query) => {
//   const options = {method: 'GET', headers: {accept: 'application/json'}};

//   const dataMovie = fetch(`https://api.themoviedb.org/3/discover/movie?api_key=971dc393aaedcd6f3861b1889a452151&query=${query}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`, options)
//     .then(response => response.json())
//     .then(dataMovie => console.log(dataMovie) )
//     .catch(err => console.error(err));
//     return dataMovie;
// };


// export const getMovie = ({id}) => {
//   const options = {method: 'GET', headers: {accept: 'application/json'}};

//   fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=971dc393aaedcd6f3861b1889a452151&language=en-US`, options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));
// };
