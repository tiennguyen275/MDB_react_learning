import React from "react";
import { useParams } from "react-router-dom";
//Config
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";

//Component
import Grid from './Grid';
import Spinner from './Spinner';
import BreadCrumb from './BreadCrumb';
import MovieInfo from './MovieInfo';
import MovieInfoBar from './MovieInfoBar';
import Actor from './Actor';
//Hook
import { useMovieFetch } from '../hooks/useMovieFetch';
//image
import NoImage from '../images/no_image.jpg';

const Movie = () =>{
    const { movieId } = useParams(); // get id through link or params (lấy id trên đường dẫn, đã dc khai báo ở app.js) named in app.js
    const {state: movie, loading, error} = useMovieFetch(movieId);
    console.log(movie);
    if(loading) return <Spinner />
    if(error) return <div>Error.. Something went wrong</div>
    return(
        <>
            <BreadCrumb movieTitle={movie.original_title} />
            <MovieInfo movie={movie} />
            <MovieInfoBar 
                time={movie.runtime}
                budget={movie.budget} 
                revenue={movie.revenue}
            />
            <Grid header='Actors'>
                {movie.actors.map(e=>(
                    <Actor key={e.credit_id} 
                    name={e.name}
                    character={e.character}
                    imageUrl={e.profile_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${e.profile_path}`: NoImage}
                    />
                    ))}
            </Grid>
            <div>Movie</div>
        </>
    );
}

export default Movie;