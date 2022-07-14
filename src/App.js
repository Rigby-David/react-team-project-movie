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
import './App.css';

//mui components
import CustomButton from './CustomButton';


export default function App() {
  const [currentUser, setCurrentUser] = useState(localStorage.getItem('supabase.auth.token'));
  return (
    <Router>
      <div>
        <nav>
          {
            ! currentUser &&
                <Link to="/">
                  <CustomButton>Home</CustomButton>
                </Link>
          }
          <Link to="/search">
            <CustomButton>Search</CustomButton>
          </Link>
          <Link to="/watchlist">
            <CustomButton>Watch List</CustomButton>
          </Link>
          { 
            currentUser && 
                <CustomButton onClick={logout}>logout</CustomButton> 
          }
        </nav>
        <Switch>
          <Route exact path="/watchlist">
            {
              !currentUser 
                ? <Redirect to="/"/>
                : <WatchListPage />
            }
          </Route>
          <Route exact path="/search">
            {
              !currentUser 
                ? <Redirect to="/"/>
                : <SearchPage />
            }
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

