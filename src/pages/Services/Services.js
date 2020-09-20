import React from 'react';
import HeroSection from '../../components/HeroSection';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from '../../data/Data';
import Pricing from '../../components/Pricing';

function Services() {
    return (
        <div className="service">
            <Pricing />
            <HeroSection {...homeObjOne} />
            <HeroSection {...homeObjThree} />
        </div>
    );
}

export default Services;
