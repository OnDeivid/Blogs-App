import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import CarInfoComponent from './CarInfo';
import OffersComponent from './CarOffer'
import CarAIComponent from './CarAI';

import './Details.css';

export default function Details() {
    const [infoState, setInfoState] = useState(1); // Updated initial state
    const isMobile = useMediaQuery({ maxWidth: 500 });

    const onShowInfo = () => setInfoState(1);
    const onShowBits = () => setInfoState(2);
    const onShowAI = () => setInfoState(3);


    return (
        <div className="details-container">
            <div className="details-header">
                <h1>Audi A6</h1>
            </div>
            <div className="details-content">
                <div className="item-image">
                    <img
                        src='https://stimg.cardekho.com/images/carexteriorimages/930x620/Porsche/911/10990/1690869580714/front-left-side-47.jpg'
                        alt="Audi A6 Luxury Item"
                    />
                    <div className='car-images'></div>
                </div>
                <div className="item-description">
                    <button className='btn-info' onClick={onShowInfo}>Show INFO</button>

                    <div className='AI_BITS-btns'>
                        <button className='btn-AI' onClick={onShowAI}>Ask AI</button>
                        <button className='btn-bits' onClick={onShowBits}>Show Bits</button>
                    </div>


                    <div className="container">
                        {isMobile && infoState === 1 && <CarInfoComponent />}
                        {isMobile && infoState === 2 && <OffersComponent />}
                        {isMobile && infoState === 3 && <CarAIComponent />}
                        {!isMobile && <CarInfoComponent />}
                    </div>
                    {!isMobile && infoState == 2 && <OffersComponent />}
                    {!isMobile && infoState == 3 && <CarAIComponent />}

                </div>
            </div>
        </div>
    );
}
