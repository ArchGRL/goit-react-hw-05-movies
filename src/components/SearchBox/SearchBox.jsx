import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SearchBox = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (query.trim() === '') {
      toast('Please, fill in the search field.');
      return;
    }

    const options = { method: 'GET', headers: { accept: 'application/json' } };
    fetch(
      `
 https://api.themoviedb.org/3/search/movie?query=${query}&api_key=971dc393aaedcd6f3861b1889a452151`,
      options
    )
      .then(response => response.json())
      .then(dataMovie => {
        console.log(dataMovie);
        onSearch(dataMovie);
      })
      .catch(err => console.error(err));

      setQuery('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Enter search query"
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBox;
