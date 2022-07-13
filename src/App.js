import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from 'react-router-dom';
import HomePage from './HomePage';
import SearchPage from './SearchPage';
import { logout } from './services/fetch-utils';
import WatchListPage from './WatchListPage';

export default function App() {
  const [currentUser, setCurrentUser] = useState(localStorage.getItem('supabase.auth.token'));
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
            <li>
              <Link to="/watchlist">Watch List</Link>
            </li>
            { 
              currentUser && 
              <li> 
                <button onClick={logout}>logout</button> 
              </li> 
            }
          </ul>
        </nav>
        <Switch>
          <Route exact path="/watchlist">
            <WatchListPage />
          </Route>
          <Route exact path="/search">
            <SearchPage />
          </Route>
          <Route exact path="/">
            {
              currentUser 
                ? <Redirect to="/search"/>
                : <HomePage setCurrentUser={setCurrentUser} />
            }
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

