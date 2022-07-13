import React from 'react';
import Movie from './Movie';
export default function MovieList({ movies }) {
  return (
    <div>
      MovieList
      {movies.map((movie, i) => (
        <Movie key={movie.title + i} movie={movie} />
      ))}
    </div>
  );
}
