import React, { useState } from 'react';

export const AuthContext = React.createContext();

export default function AuthContextProvider({ children }) {

    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return (
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
            {children}
        </AuthContext.Provider>
    )
}