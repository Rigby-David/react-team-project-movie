import React, { useState } from 'react';
import MovieList from './MovieList';
import { searchMovies } from './services/fetch-utils';
import CustomButton from './CustomButton';

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
      <h1>Search for Movies!</h1>
      <div>
        <div className='results-div'>
          <label>
          search
            <input onChange={(e) => setTitle(e.target.value)} value={title} />
          </label>
          <CustomButton onClick={handleSearchMovie}>submit</CustomButton>
        </div>
        <div>
          Your Results Here:
          <MovieList movies={movies} />
        </div>
      </div>
    </div>
  );
}
