import React, { useContext } from "react";
import {Link} from 'react-router-dom';

import RMDBLogo from '../../images/react-movie-logo.svg';

import TMDBLogo from '../../images/tmdb_logo.svg';

import { Wrapper, Content, LogoImg, TMDBLogoImg } from './Header.styles';

//Component
import Logout from '../Logout';

//Context Menu
import { Context } from '../../context';


const Header = () => {
    
    const [user] = useContext(Context);
    console.log(user); 
    
    return (
        <Wrapper>
            <Content>
                <Link to='/'>
                    <LogoImg src={RMDBLogo} alt='rmdb-logo' />
                </Link>

                {user? (
                    <Content>
                        <p>Login as: {user.username}</p>
                        <Logout />
                    </Content> 
                    ) : (
                        <Link to='/login'> <span>Login</span> </Link>
                    )}
                <TMDBLogoImg src={TMDBLogo} alt='tmdb-log'/>
            </Content>
        </Wrapper>
    );
}

export default Header;