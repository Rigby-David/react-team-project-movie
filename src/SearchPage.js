import React, { useState } from 'react';
import MovieList from './MovieList';
import { searchMovies } from './services/fetch-utils';

export default function SearchPage() {
  const [title, setTitle] = useState('');
  const [movies, setMovies] = useState([]);

  async function handleSearchMovie() {
    const moviesData = await searchMovies(title);

    setMovies(moviesData);
  }
  console.log(movies);

  return (
    <div>
      This is the SearchPage
      <div>
        <label>
          search
          <input onChange={(e) => setTitle(e.target.value)} value={title} />
        </label>
        <button onClick={handleSearchMovie}>submit</button>

        <div>
          Your Results Here:
          <MovieList movies={movies} />
        </div>
      </div>
    </div>
  );
}
