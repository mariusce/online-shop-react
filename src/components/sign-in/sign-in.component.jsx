import React from 'react';
import { signInWithGoogle } from '../../firebase/firebase.utils'

import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../costom-button/custom-button.component';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSumbit = event => {
        event.preventDefault();

        this.setState({email:'', password: ''});
    }

    handleChange = event => {
        const {name, value} = event.target;
        this.setState({ [name]: value });
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput handleChange={this.handleChange}
                        name="email" type="email" value={this.state.email}  label="Email" required />
                    <FormInput handleChange={this.handleChange}
                        name="password" type="password" value={this.state.password} label="Password" required/>

                    <div className="buttons">
                        <CustomButton type="submit">SIGN IN</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>GOOGLE SIGN IN</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;