import React, { useState } from 'react';
import FavoriteButton from './FavoriteButton';
// import CustomButton from './CustomButton';


export default function Movie({ movie }) {
  const [isFavorited, setIsFavorited] = useState(false);

  return (
    <div className='movie-card'>
      <h2>{movie.title}</h2>
      <FavoriteButton onClick={() => setIsFavorited(isFavorited)}/>
      <img src={movie.poster_path ? `https://image.tmdb.org/t/p/original${movie.poster_path}` : 'https://www.placebear.com/200/300'} />
      <p>{movie.overview}</p>
    </div>
  );
}

//could use the mui import 
// {
//   isFavorited
//     ? <CustomButton>❤️ remove from favorites</CustomButton>
//     : <CustomButton>🤍 add to favorites</CustomButton>
// }

{/* <button onClick={() => setIsOpen(!isOpen)}>Gandalf says</button> */}