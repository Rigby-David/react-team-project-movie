import React, { useState } from 'react';
import MovieList from './MovieList';
import { searchMovies } from './services/fetch-utils';


export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);

  async function handleSearchMovie(title){
    const moviesData = await searchMovies(title);
    
    setMovies(moviesData);
  }
  console.log(movies);


  return (
    <div>This is the SearchPage
      <div>
        <form onSubmit={handleSearchMovie}>
          <label>
            search
            <input 
              onChange={(e) => setSearchQuery(e.target.value)} 
              value={searchQuery}/>
          </label>
          <button>submit</button>
        </form>
        <div>Your Results Here:
          <MovieList movies={movies}/>
        </div>
      </div>
    </div>
  );
}
