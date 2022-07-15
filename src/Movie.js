import React, { useState } from 'react';
import CustomButton from './CustomButton';


export default function Movie({ movie }) {
  const [isFavorited, setIsFavorited] = useState(false);

  

  return (
    <div className='movie-card'>
      <h2>{movie.title}</h2>
      {
        isFavorited
          ? <CustomButton 
            onClick={() => handleDeleteFromWatchlist()}>
              ❤️ remove from watchlist
          </CustomButton>
          : <CustomButton>
            🤍 add to watchlist</CustomButton>
      }
      <img src={movie.poster_path ? `https://image.tmdb.org/t/p/original${movie.poster_path}` : 'https://www.placebear.com/200/300'} />
      <p>{movie.overview}</p>
    </div>
  );
}

//could use the mui import 

// handleFavoriteButtonClick will 
// // change the state to isFavorited
// // send the data to the watchlist table in supabase 
