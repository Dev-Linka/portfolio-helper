'use client'
import { useState } from 'react';
import '@/styling/design.css'

export default function Design() {
    const [width, setWidth] = useState('1500px'); // Initial width of the rectangle

    const handleButtonClick = (newWidth) => {
        setWidth(newWidth);
    };

    return(
        <>
            <div>
                <div className='mininav mt-5'>
                    <button className='mininav-btn' onClick={() => handleButtonClick('500px')}>XS</button>
                    <button className='mininav-btn' onClick={() => handleButtonClick('750px')}>S</button>
                    <button className='mininav-btn' onClick={() => handleButtonClick('1000px')}>M</button>
                    <button className='mininav-btn' onClick={() => handleButtonClick('1250px')}>L</button>
                    <button className='mininav-btn' onClick={() => handleButtonClick('1500px')}>XL</button>
                </div>
                <div className='dynamic-rectangle' style={{ width }}></div>
            </div>
        </>
    );
}