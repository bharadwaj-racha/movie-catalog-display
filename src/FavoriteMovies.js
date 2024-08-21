import React from 'react';

function FavoriteMovies({ movies }) {
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          <h2>{movie.title}</h2>
          <img style={{ height: '300px' }} src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
        </li>
      ))}
    </ul>
  );
}

export default FavoriteMovies;