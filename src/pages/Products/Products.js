import React from 'react';
import HeroSection from '../../components/HeroSection';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from '../../data/Data';
import Pricing from '../../components/Pricing';

function Products() {
    return (
        <div className="products">
            <HeroSection {...homeObjOne} />
            <HeroSection {...homeObjTwo} />
        </div>
    );
}

export default Products;
