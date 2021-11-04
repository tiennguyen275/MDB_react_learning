import React from "react";
import PropTypes from "prop-types";
//styles
import { Wrapper, Content, Text} from './MovieInfo.styles';
//components
import Thumb from '../Thumb';
//config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';
//images
import EmptyImage from '../../images/no_image.jpg';
import Movie from "../Movie";

const MovieInfo = ({movie})=>(
    <Wrapper backdrop={movie.backdrop_path}>
        <Content>
            <Thumb
                image={movie.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`:EmptyImage}
                clickable={false}
                alt='movie-thumb'
            />
            <Text>
                <h1> {movie.title} </h1>
                <h3>PLOT</h3>
                <p> {movie.overview} </p>

                <div className='rating-directors'>
                    <div>
                        <h3>RATING</h3>
                        <div className='score'> {movie.vote_average} </div>
                    </div>
                    <div className='director'>
                        <h3>DIRECTOR {movie.directors.lenth > 1 ? 'S' : ''} </h3>
                        {movie.directors.map(e=>(
                            <p key={e.credit_id}> {e.name} </p>
                        ))}
                    </div>
                </div>

            </Text>
        </Content>
    </Wrapper>
)

MovieInfo.propTypes = {
    movie: PropTypes.object,
}

export default MovieInfo;