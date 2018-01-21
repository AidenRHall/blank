import * as React from 'react';

export const newUserDisplay = () => (
    <div>
        <h1>Become a Member!</h1>
        <p>
            Create a username and password for SkyCast to access exclusive member benefits. 
        </p>
        <p>Already have an account? <a href="#/signin">go to login</a></p>
    </div>
);

export const existingUserDisplay = () => (
    <div>
        <h1>Welcome Back!</h1>
        <p>Sign in with your username and password.</p>
        <p>Don't have an account yet? <a href="#/signup">Sign Up!</a></p>
    </div>
);