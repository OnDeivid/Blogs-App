import React, { useState } from 'react';

import CatalogCard from '../catalog/CatalogCard';

import './home.css';

export default function Home() {
    // const [sliderValue, setSliderValue] = useState(1);
    const [interactionDown, setInteractionDown] = useState(false);
    const [interactionX, setInteractionX] = useState(10);

    function onInteractionMove(event) {
        if (interactionDown) {
            let clientX;
            if (event.type === 'touchmove') {
                const touch = event.touches[0];
                clientX = touch.clientX;
            } else {
                clientX = event.clientX;
            }

            onChangeRange(clientX)
        }
    }
    function onInteractionStart() {
        setInteractionDown(true);
    }
    function onInteractionEnd() {
        setInteractionDown(false);
    }
    function onChangeRange(x) {
        if (Number(x).toFixed(0) % 3 == 0) {
            setInteractionX(prev => prev + 1)
        }
        if (interactionX >= 50) {
            setInteractionX(1)
        }
    }
    return (
        <>
            <div className="slideShow">
                <div className='slide-wrapper'>
                    {/* <input className='currentCar' onChange={onChangeRange} type='range' min='1' max='50'></input> */}
                    <div className='slide'

                    >
                        <div className='carModelSponFront'>
                            <h3 className='modelName'>RS e-tron GT</h3>
                        </div>
                        <img
                            draggable="false"
                            onTouchEnd={onInteractionEnd}
                            onTouchMove={onInteractionMove}
                            onTouchStart={onInteractionStart}
                            onMouseUp={onInteractionEnd}
                            onMouseMove={onInteractionMove}
                            onMouseDown={onInteractionStart}
                            className='carImg'
                            src={`./porche/${interactionX}.png`}></img>
                    </div>
                    <img className='backPodium' src='./porche/p12.png'></img>
                </div>
            </div>
            <div className='SponsorsInfo'>
                <div className='carModelSponBack'>
                    <div className='el'>
                        <h3>TOP SPEED</h3>
                        <p className='summary'>250 kph</p>
                    </div>
                    <div className='el'>
                        <h3>ACCELERATION 0-100 KM/H</h3>
                        <p className='summary'>3.3 Seconds</p>
                    </div>
                    <div className='el'>
                        <h3>GEARBOX</h3>
                        <p className='summary'>2-speed / automatic</p>
                    </div>
                </div>
            </div>
            <div className='minicatalog'>
                <div className='cardHolder'>
                    <CatalogCard />
                    <CatalogCard />
                    <CatalogCard />
                </div>
            </div>
        </>
    )
}
