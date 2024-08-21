import React from 'react';

function MovieItem({ movie, onFavorite }) {
  return (
    <li>
      <h2>{movie.title}</h2>
      <img style={{ height: '300px' }} src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
      <p>Release Year: {movie.release_date.slice(0, 4)}</p>
      <button onClick={() => onFavorite(movie)}>Favorite</button>
    </li>
  );
}

export default MovieItem;