import React, { useState, useEffect } from 'react';

import MovieList from './MovieList';
import { searchMovies } from './services/fetch-utils';

import CustomButton from './CustomButton';
import CustomInput from './CustomInput';

export default function SearchPage() {
  const [title, setTitle] = useState('m');
  const [movies, setMovies] = useState([]);


  async function handleSearchMovie() {
    const moviesData = await searchMovies(title);
    setMovies(moviesData);
  }

  useEffect((e) => {
    handleSearchMovie(e);
  }, []); //eslint-disable-line

  return (
    <div>
      <h1 className="page-title">Search for Movies</h1>
      <div>
        <div className='search-div'>
          <label>
            <CustomInput onChange={(e) => setTitle(e.target.value)} value={title}/>
          </label>
          <CustomButton onClick={handleSearchMovie}>search</CustomButton>
        </div>
        <div className="results">
          <h2>Search Results:</h2>
          <MovieList movies={movies}/>
        </div>
      </div>
    </div>
  );
}
