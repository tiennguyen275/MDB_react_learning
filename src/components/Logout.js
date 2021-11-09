import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

//Component
import Button from './Button';
//context
import { Context } from '../context';


const Logout = () => {
    const [user,setUser] = useContext(Context);
    const navigate = useNavigate();

    const handleLogout = () => {
        setUser(undefined);
        navigate('/');
    }

    return(
        <>
            <Button text='Logout' callback={handleLogout} />
        </> 
    )
}

export default Logout;