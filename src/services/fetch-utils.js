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

//gets all movies from API 
export async function searchMovies(title) {
  const raw = await fetch(`/.netlify/functions/movie-endpoint?title=${title}`);
  const { results } = await raw.json();
  
  // console.log(results);
  return results;
}

//adds movie to watchlist table 

//gets all movies from WatchList

//deletes movie from watchlist table


