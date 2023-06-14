
import './home.css'
import React from 'react';
import Swiper from '../components/Swiper';
import AboutComponents from '../components/AboutComponents';

const Home = () => {
    return (

        <div className='homePage'>
            <Swiper />
            <AboutComponents />
        </div>


    );
}

export default Home;
