import React, { useState } from 'react';
import { signInUser, signupUser } from './services/fetch-utils';

export default function HomePage({ setCurrentUser }) {
// what state do i need to maintain?
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');  
  const [signInEmail, setSignInEmail] = useState('');
  const [signInPassword, setSignInPassword] = useState('');  

  function clearForms() {
    setSignInEmail('');
    setSignInPassword('');
    setSignUpEmail('');
    setSignUpPassword('');
  }

  // what should happen on submit?
  async function handleSignUp(e) {
    e.preventDefault();

    const user = await signupUser(signUpEmail, signUpPassword);
    setCurrentUser(user);
    clearForms();
  }

  async function handleSignIn(e) {
    e.preventDefault();

    const user = await signInUser(signInEmail, signInPassword);
    setCurrentUser(user);
    clearForms();
  }

  return (
    <div className="home-page">
      Sign Up
      <form onSubmit={handleSignUp}>
        <label>
          Email
          {/* we sync up react state with the input. Now, the input always gets it value from react state. Whenever state changes, this input will update
          
          The benefit: whenever state changes, this input will update--NO MATTER HOW THAT STATE CHANGED.
          */}
          {/* controlled input */}
          <input value={signUpEmail} onChange={e => setSignUpEmail(e.target.value)} />
        </label>
        <label>
          Password
          <input value={signUpPassword} type='password' onChange={e => setSignUpPassword(e.target.value)} />
        </label>
        <button>Sign Up</button>
      </form>
      Sign In
      <form onSubmit={handleSignIn}>
        <label>
          Email
          <input value={signInEmail} onChange={e => setSignInEmail(e.target.value)} />
        </label>
        <label>
          Password
          <input value={signInPassword} type='password' onChange={e => setSignInPassword(e.target.value)} />
        </label>
        <button>Sign In</button>
      </form>
    </div>
  );
}