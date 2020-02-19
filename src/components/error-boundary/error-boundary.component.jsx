import React from 'react';

import { ErrorImageContainer, ErrorImageOverlay, ErrorImageText } from './error-boundary.styles';

class ErrorBoundary extends React.Component {
    constructor() {
        super();

        this.state = {
            hasErrored: false
        }
    }
    
    static getDerivedStateFromError(error) {
        // process error
        return { hasErrored: true }
    }

    componentDidCatch(error, info) {
        console.log(error);
    }

    render() {
        if (this.state.hasErrored) {
            return (
            <ErrorImageOverlay>
                <ErrorImageContainer imageUrl="https://i.imgur.com/flHudHE.png"/>
                <ErrorImageText>Sorry, This Page is Lost</ErrorImageText>
            </ErrorImageOverlay>
            )
        }

        return this.props.children;
    }
}

export default ErrorBoundary;