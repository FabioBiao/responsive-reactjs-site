import React from 'react';
import HeroSection from '../../components/HeroSection';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from '../../data/Data';
import Pricing from '../../components/Pricing';

function SignUp() {
    return (
        <>
            <HeroSection {...homeObjOne} />
            <HeroSection {...homeObjThree} />
        </>
    );
}

export default SignUp;
