import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import HomePage from './HomePage';
import SearchPage from './SearchPage';
import { logout } from './services/fetch-utils';
import WatchListPage from './WatchListPage';

export default function App() {
  const [user, setUser] = useState(localStorage)
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
              user 
              ? <button onClick={logout}>logout</button>
              : 
            }
            <li>
              <button onClick={logout}>Logout</button>
            </li>
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
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

