import React from 'react';
import MovieItem from './MovieItem';

function MovieList({ movies, onFavorite }) {
  return (
    <ul>
      {movies.map((movie) => (
        <MovieItem key={movie.id} movie={movie} onFavorite={onFavorite} />
      ))}
    </ul>
  );
}

export default MovieList;