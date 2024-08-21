import React from 'react';
import { useState } from 'react';


function FilterOptions({ onFilter }) {
  const [genre, setGenre] = useState('');
  const [yearRange, setYearRange] = useState('');
  const [ratingRange, setRatingRange] = useState('');

  const handleFilter = () => {
    onFilter({ genre, yearRange, ratingRange });
  };

  return (
    <div>
      <select value={genre} onChange={(e) => setGenre(e.target.value)}>
        <option value="">Genre</option>
        <option value="28">Action</option>
        <option value="12">Adventure</option>
        <option value="16">Animation</option>
      </select>
      <input type="range" value={yearRange} onChange={(e) => setYearRange(e.target.value)} />
      <input type="range" value={ratingRange} onChange={(e) => setRatingRange(e.target.value)} />
      <button onClick={handleFilter}>Apply filters</button>
    </div>
  );
}

export default FilterOptions;