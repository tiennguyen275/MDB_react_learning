import React, { useState, createContext } from 'react';

export const Context = createContext();

const UseProvider = ({ children }) =>{
    const [state, setState] = useState(undefined);

    return (
        <Context.Provider value={[state, setState]}>
            {children}
        </Context.Provider>
    );
}

export default UseProvider;

//Store user data in context and state. Can be access globally