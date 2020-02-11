import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({children, isGoogleSignIn, inverted, handleClick, ...otherProps }) => (
    <button onClick={handleClick}
        className={`${isGoogleSignIn? 'google-sign-in': ''} ${inverted? 'inverted': ''} custom-button`} {...otherProps}>
        {children}
    </button>
)

export default CustomButton;