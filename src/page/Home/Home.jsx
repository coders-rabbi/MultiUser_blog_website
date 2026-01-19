import React from 'react';
import HeroSection from './HeroSection';
import NeverMissSection from './NeverMissSection';
import Blogs from './Blogs';

const Home = () => {
    return (
        <div>
            <HeroSection />
            <Blogs />
            <NeverMissSection />
        </div>
    );
};

export default Home;