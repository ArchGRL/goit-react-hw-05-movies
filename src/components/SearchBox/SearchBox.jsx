import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BtnSearch } from "../SearchBox/SearchBox.styled";
import PropTypes from 'prop-types';

const SearchBox = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = e => {
    setQuery(e.currentTarget.value.toLowerCase());
  };

  const handleSubmitForm = e => {
    e.preventDefault();

    if (query.trim() === '') {
      toast.error('Please, fill in the search field.');
      return;
    }
    onSearch(query);
    setQuery('');
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
      />
      <BtnSearch type="submit">Search</BtnSearch>
    </form>
  );
};

SearchBox.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchBox;
