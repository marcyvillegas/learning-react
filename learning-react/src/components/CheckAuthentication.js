import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContextProvider';

function CheckAuthentication() {

    const { isAuthenticated, setIsAuthenticated }  = useContext(AuthContext);

    return (
        <div style={{ padding: '0.5rem 5rem' }}>
            <h1>👉 Passing Data Deeply with Context</h1>
            <p>Are you logged in? {"->"} {isAuthenticated.toString()}!!</p>
            <button onClick={() => setIsAuthenticated(!isAuthenticated)}>{isAuthenticated ? 'Sign Out' : 'Log In'}</button>
        </div>
    );
}

export default CheckAuthentication;
