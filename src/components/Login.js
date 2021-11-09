import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../API';
//component
import Button from './Button';

//styles
import { Wrapper } from './Login.styles';
//Context
import { Context } from '../context';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    
    const [user, setUser] = useContext(Context); //get data from context which is global variable
    const navigate = useNavigate();

    const handleInput = (e) => {
        const name = e.currentTarget.name;
        const value = e.currentTarget.value;
        //set value of state base on input name
        if(name === 'username') setUsername(value);
        if(name === 'password') setPassword(value);
    };

    const handleSubmit = async () => {
        setError(false);
        try {
            const requestToken = await API.getRequestToken();
            const sessionId = await API.authenticate(
                requestToken,
                username,
                password
            );
            console.log(sessionId);
            setUser({ sessionId: sessionId.session_id, username });
            navigate('/');
        } catch (error) {
            setError(true);
        }
    };

    return (
        <Wrapper>
            {error && <div className='error'>There was an error! </div> }
            <label>UserName:</label>
            <input type="text" name="username" value={username} onChange={handleInput} />
            
            <label>Password:</label>
            <input type="password" name="password" value={password} onChange={handleInput} />
            
            <Button text='Login' callback={handleSubmit} />
        </Wrapper>
    )
}

export default Login;