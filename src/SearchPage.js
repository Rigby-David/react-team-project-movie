import React, { useState, useEffect } from 'react';

import MovieList from './MovieList';
import { searchMovies } from './services/fetch-utils';

import CustomButton from './CustomButton';
import CustomInput from './CustomInput';
import LoadingIcon from './LoadingIcon';

export default function SearchPage() {
  const [title, setTitle] = useState('l');
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  async function handleSearchMovie() {
    setIsLoading(true);
    const moviesData = await searchMovies(title);
    setMovies(moviesData);
    setIsLoading(false);
  }

  useEffect((e) => {
    handleSearchMovie(e);
  }, []); //eslint-disable-line

  return (
    <div className="search-page">
      <h1 className="page-title">Search for Movies</h1>
      <div>
        <div className='search-div'>
          <label>
            <CustomInput 
              onChange={(e) => setTitle(e.target.value)} 
              value={title}
              label={'your movie here'}/>
          </label>
          <CustomButton onClick={handleSearchMovie}>search</CustomButton>
        </div>
        <div className="results">
          <h2>Search Results:</h2>
          
          {
            isLoading
              ? <LoadingIcon 
                style=
                  {{
                    transitionDelay: isLoading ? '4s' : '4s',
                  }}/>
              : <MovieList movies={movies}/>
          }
        </div>
      </div>
    </div>
  );
}
