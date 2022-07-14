import React, { useState } from 'react';
import MovieList from './MovieList';
import { searchMovies } from './services/fetch-utils';

import CustomButton from './CustomButton';
import CustomInput from './CustomInput';

export default function SearchPage() {
  const [title, setTitle] = useState('');
  const [movies, setMovies] = useState([]);


  async function handleSearchMovie() {
    const moviesData = await searchMovies(title);

    setMovies(moviesData);
  }

  return (
    <div>
      <h1>Search for Movies!</h1>
      <div>
        <div className='results-div'>
          <label>
            <CustomInput onChange={(e) => setTitle(e.target.value)} value={title}/>
          </label>
          <CustomButton onClick={handleSearchMovie}>submit</CustomButton>
        </div>
        <div>
          <h2>Your Results Here:</h2>
          <MovieList movies={movies}/>
        </div>
      </div>
    </div>
  );
}
