import React, { useState, useEffect } from "react";

//config 
import {POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL} from '../config';
// Components
import HeroImage from "./HeroImage";
import Grid from './Grid'
import Thumb from './Thumb';
import Spinner from './Spinner';
import SearchBar from './SearchBar';
import Button from './Button';
//Hooks 
import { useHomeFetch } from '../hooks/useHomeFetch';
//images
import  EmptyIMG from '../images/no_image.jpg';
import { Fragment } from "react";

const Home = () => {
    const {
        state, loading, error, 
        setSearchTerm, searchTerm, setIsLoadingMore 
    } = useHomeFetch();
    console.log('state',state);

    if (error) return <div>Some thing went wrong ...</div>;

    return(
        <>
            {!searchTerm && state.results[0] ?
            <HeroImage image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`} 
            title={state.results[0].original_title}
            text={state.results[0].overview}
            /> : null
            }
            <SearchBar setSearchTerm={setSearchTerm} /> {/*  setesrachterm in useHomeFetch */}
            <Grid header={ searchTerm ? 'Search Result' : 'Popular Movie'}>
                {state.results.map(movie=>(
                    <Thumb
                    key={movie.id} 
                    clickable
                    image={movie.poster_path ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path : EmptyIMG}
                    movieId={movie.id}
                    />
                    
                ))}
            </Grid>

            { loading && <Spinner />}  {/*run spinner when loading is true and does not display spinner if false, display button instead */}
            {state.page < state.total_pages && !loading && (
                <Button text='Load More' callback={() => setIsLoadingMore(true)} />
            ) }
        </>
    )
}

export default Home;