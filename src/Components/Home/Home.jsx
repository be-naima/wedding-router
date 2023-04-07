import React from 'react';
import './Home.css'
const Home = () => {
    return (
        <div className='home-container embed-responsive embed-responsive-4by3 '>
            <video className='w-100 d-block' autoPlay loop muted src="home.mp4"></video>
        </div>
    );
};

export default Home;