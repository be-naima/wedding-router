import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Photo from '../Photo/Photo';

const Gallery = () => {
    const photos = useLoaderData()

    return (
        <div>
            <img className='w-100' src="https://i.pinimg.com/564x/a1/73/4f/a1734f859bddee8d1c83775badbaaefe.jpg" alt="" />
            <div className='row row-cols-1 row-cols-md-3 g-4'>
            {
                photos.map(photo => <Photo
                 photo = {photo}
                ></Photo>)
            }
        </div>
        </div>
    );
};

export default Gallery;