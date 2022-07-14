import React, { useState } from 'react';
import { signInUser, signupUser } from './services/fetch-utils';

import CustomButton from './CustomButton';
import CustomInput from './CustomInput';

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
      <h1 className="page-title">Create a Free Account</h1>
      <form >
        <label>
          {/* we sync up react state with the input. Now, the input always gets it value from react state. Whenever state changes, this input will update
          
          The benefit: whenever state changes, this input will update--NO MATTER HOW THAT STATE CHANGED.
          */}
          {/* controlled input */}
          <CustomInput 
            value={signUpEmail} 
            onChange={e => setSignUpEmail(e.target.value)} 
            label={'email'}/>
        </label>
        <label>
          <CustomInput 
            value={signUpPassword} 
            type={'password'} 
            onChange={e => setSignUpPassword(e.target.value)} 
            label={'password'}/>
        </label>
        <CustomButton onClick={handleSignUp}>Sign Up</CustomButton>
      </form>
      <h3>Already A User?</h3>
      <form onSubmit={handleSignIn}>
        <label>
          <CustomInput 
            value={signInEmail} 
            onChange={e => setSignInEmail(e.target.value)} 
            label={'email'}/>
        </label>
        <label>
          <CustomInput 
            value={signInPassword} 
            type='password' 
            onChange={e => setSignInPassword(e.target.value)} 
            label={'password'}/>
        </label>
        <CustomButton>Sign In</CustomButton>
      </form>
    </div>
  );
}