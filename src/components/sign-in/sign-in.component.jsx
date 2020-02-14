import React, { useState } from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../costom-button/custom-button.component';

import { userSignInEmailStart, userSignInGoogleStart } from '../../redux/user/user.actions';

import './sign-in.styles.scss';

const SignIn = ({signInWithEmailAndPassword, signInWithGoogle}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async event => {
    event.preventDefault();

    signInWithEmailAndPassword({ email, password });
  };

  const handleChange = event => {
    const { value, name } = event.target;
    if (name === 'email') {
      setEmail(value);
    } else {
      setPassword(value)
    }
  };

  return (
    <div className='sign-in'>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name='email'
          type='email'
          handleChange={handleChange}
          value={email}
          label='email'
          required
        />
        <FormInput
          name='password'
          type='password'
          value={password}
          handleChange={handleChange}
          label='password'
          required
        />
        <div className='buttons'>
          <CustomButton type='submit'> Sign in </CustomButton>
          <CustomButton type='button' onClick={signInWithGoogle} isGoogleSignIn>
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
  
}

const mapDispatchToProps = (dispatch) => ({
  signInWithEmailAndPassword: (emailAndPassword) => dispatch(userSignInEmailStart(emailAndPassword)),
  signInWithGoogle: () => dispatch(userSignInGoogleStart())
})

export default connect(null, mapDispatchToProps)(SignIn);