import React from 'react';

export default function FavoriteButton({ isFavorited }) {
  return (
    <div className= { isFavorited ? 'is-favorited' : 'is-not-favorited' }>
      {
        isFavorited
          ? <button>❤️ remove from favorites</button>
          : <button>🤍 add to favorites</button>
      }
    </div>
  );
}

