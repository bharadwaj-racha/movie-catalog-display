import React from 'react';
import { useState } from 'react';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <input type="search" style={{ width: '100%',padding: '10px',marginTop: '20px',marginBottom: '20px',marginLeft: '10px',marginRight: '10px'}} value={query} onChange={handleSearch} placeholder="Search movies" />
  );
}

export default SearchBar;