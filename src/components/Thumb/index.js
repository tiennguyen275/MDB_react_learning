import React from "react";
import Proptypes from 'prop-types';
import {Link} from 'react-router-dom';

//styles
import { Image } from './Thumb.styles';

const Thumb = ({image, movieId, clickable }) => (
    <div>
        {clickable ? (
            <Link to={`/${movieId}`} >
                <Image src={image} alt='movie-thumb' />
            </Link>
        ) : (
            <Image src={image} alt='movie-thumb' />
        )}
    </div>
)

Thumb.propTypes = {
    image: Proptypes.string,
    movieID: Proptypes.number,
    clickable: Proptypes.bool,
}

export default Thumb;