import React, { useState } from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../costom-button/custom-button.component';

import { signUpStart } from '../../redux/user/user.actions'

import './sign-up.styles.scss';

const SignUp = ({signUpStart}) => {


  const [userDetails, setUserDetails] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const { displayName, email, password, confirmPassword } = userDetails;
  
  const handleSubmit = async event => {
    event.preventDefault();
    
    // if (password !== confirmPassword) {
    //   alert("passwords don't match");
    //   return;
    // }
    signUpStart({displayName, email, password, confirmPassword});
  };

  const handleChange = event => {
    const { name, value } = event.target;

    setUserDetails({...userDetails, [name]: value})
  };

  return (
    <div className='sign-up'>
      <h2 className='title'>I do not have a account</h2>
      <span>Sign up with your email and password</span>
      <form className='sign-up-form' onSubmit={handleSubmit}>
        <FormInput
          type='text'
          name='displayName'
          value={displayName}
          handleChange={handleChange}
          label='Display Name'
          required
        />
        <FormInput
          type='email'
          name='email'
          value={email}
          handleChange={handleChange}
          label='Email'
          required
        />
        <FormInput
          type='password'
          name='password'
          value={password}
          handleChange={handleChange}
          label='Password'
          required
        />
        <FormInput
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          handleChange={handleChange}
          label='Confirm Password'
          required
        />
        <CustomButton type='submit'>SIGN UP</CustomButton>
      </form>
    </div>
  );
}


const mapDispatchToProps = dispatch => ({
  signUpStart: (userDetails) => dispatch(signUpStart(userDetails))
})
export default connect(null, mapDispatchToProps)(SignUp);