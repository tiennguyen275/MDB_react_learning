import styled from "styled-components";
import { IMAGE_BASE_URL, BACKDROP_SIZE } from '../../config';

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    animation: animateMovieInfo 1s;
    background: ${({backdrop}) => 
    backdrop ? `url(${IMAGE_BASE_URL}${BACKDROP_SIZE}${backdrop})`:'#000'}; //if backdrop exist set background to backdrop, else set it to black
    background-size: cover;
    padding: 40px 20px;

    @keyframes animateMovieInfo{
        from{
            opacity: 0;
        }to{
            opacity: 1;
        }
    }

`;

export const Mask = styled.div`
    position: relative;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: hidden;
    color: var(--darkGrey);
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    border-radius: 20px;
`;

export const Content = styled.div`
    display: flex;
    max-width: var(--maxWidth);
    margin: 0 auto;
    border-radius: 20px;
    position: relative;
    
    @media screen and (max-width:768px){
        display: block;
        max-height: none;
    }
    
`;

export const Text = styled.div`
    width: 100%;
    padding: 20px 40px;
    color: var(--white);
    
    

    .rating-directors{
        display:flex;
        justify-content: flex-start;
    }

    .score{
        display:flex;
        align-items: center;
        justify-content: center;
        width: 35px;
        height: 35px;
        background: #fff;
        color: #000;
        font-weight: 800;
        border-radius: 50%;
        margin: 0;
    }

    .director{
        margin: 0 0 0 40px;

        p{
            margin: 0;
        }
    }

    h1{
        @media screen and (max-width: 768px){
            font-size: var(--fontBig);
        }
    }
`;

