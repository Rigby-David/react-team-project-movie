import React from 'react';

export default function Movie({ movie }) {
  
  return (
    <div className='movie-card'>
      <h2>{movie.title}</h2>
      
      <img src={movie.poster_path ? `https://image.tmdb.org/t/p/original${movie.poster_path}` : 'https://www.placebear.com/200/300'} />
      <p>{movie.overview}</p>
      
    </div>
  );
}
