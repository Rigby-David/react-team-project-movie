import { client } from './client';

export function getUser() {
  return client.auth.session() && client.auth.session().user;
}

export async function signupUser(email, password) {
  const response = await client.auth.signUp({ email, password });

  return response.user;
}

export async function signInUser(email, password) {
  const response = await client.auth.signIn({ email, password });

  return response.user;
}

export async function logout() {
  await client.auth.signOut();

  return (window.location.href = '/');
}

export async function searchMovies(title) {
  const raw = await fetch(`/.netlify/functions/movie-endpoint?title=${title}`);
  const { results } = await raw.json();
  
  // console.log(results);
  return results;
}

// export async function addToWatchlist(favorite) {
//   const { body } = await client
//     .from('favorite_films')
//     .insert(favorite);
    
//   return body;
// }


// export async function deleteFrom Watchlist(id) {
//   const { body } = await client
//     .from('favorite_films')
//     .delete()
//     .match({ id })
//     .single();
      
//   return body;
// }

