import React from "react";
import { useParams } from "react-router-dom";
//Config
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";

//Component
import Grid from './Grid';
import Spinner from './Spinner';
import BreadCrumb from './BreadCrumb';
//Hook
import { useMovieFetch } from '../hooks/useMovieFetch';
//image
import NoImage from '../images/no_image.jpg';

const Movie = () =>{
    const { movieId } = useParams(); // get id through link or params (lấy id trên đường dẫn, đã dc khai báo ở app.js) named in app.js
    const {state: movie, loading, error} = useMovieFetch(movieId);
    
    if(loading) return <Spinner />
    if(error) return <div>Error.. Something went wrong</div>
    return(
        <>
            <BreadCrumb movieTitle={movie.original_title} />
            <div>Movie</div>
        </>
    );
}

export default Movie;