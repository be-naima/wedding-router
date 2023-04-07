import React from 'react';

const Photo = ({photo}) => {

    return (
        
        <div class="col">
               <div class="card h-100 border-0 ">
                  <img className='rounded' src={photo.picture} alt="" /> 
                </div>
            
        </div>
    );
};

export default Photo;