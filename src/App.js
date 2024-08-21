import React, { useState, useEffect } from 'react';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import FilterOptions from './FilterOptions';
import FavoriteMovies from './FavoriteMovies';

function App() {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterOptions, setFilterOptions] = useState({
    genre: '',
    yearRange: '',
    ratingRange: '',
  });
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  useEffect(() => {
    const fetchMovieData = async () => {
      const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=dc3ff31e9fda1a010ae97f844172a764`);
      const data = await response.json();
      setMovies(data.results);
    };
    fetchMovieData();
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleFilter = (options) => {
    setFilterOptions(options);
  };

  const handleFavorite = (movie) => {
    const newFavoriteMovies = [...favoriteMovies, movie];
    setFavoriteMovies(newFavoriteMovies);
  };

  const filteredMovies = movies.filter((movie) => {
    const titleMatch = movie.title.toLowerCase().includes(searchQuery.toLowerCase());
    const genreMatch = filterOptions.genre ? movie.genre_ids.includes(filterOptions.genre) : true;
    const yearMatch = filterOptions.yearRange ? movie.release_date >= filterOptions.yearRange[0] && movie.release_date <= filterOptions.yearRange[1] : true;
    const ratingMatch = filterOptions.ratingRange ? movie.vote_average >= filterOptions.ratingRange[0] && movie.vote_average <= filterOptions.ratingRange[1] : true;
    return titleMatch && genreMatch && yearMatch && ratingMatch;
  });

  return (
    <div>
      <div className='Header'> Movie Catalogue </div>
      <SearchBar onSearch={handleSearch} />
      <FilterOptions onFilter={handleFilter} />
      <MovieList movies={filteredMovies} onFavorite={handleFavorite} />
      <FavoriteMovies movies={favoriteMovies} />
      <div className='Footer'> Designed by @BharadwajRacha</div>
    </div>
  );
}

export default App;