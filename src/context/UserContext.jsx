import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); 

    const setUserData = ({ name, email, password }) => {
        setName(name);
        setEmail(email);
        setPassword(password);
    };

    return (
        <UserContext.Provider value={{ name, email, password, setName, setUserData }}>
            {children}
        </UserContext.Provider>
    );
};