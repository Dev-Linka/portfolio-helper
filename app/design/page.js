'use client'
import { useEffect, useState } from 'react';
import '@/styling/design.css'
import Link from 'next/link';
import Image from 'next/image'
import img from '@/images/white.png'

export default function Design() {
    const [width, setWidth] = useState(null);

    const handleButtonClick = (newWidth) => {
        setWidth(newWidth);
    };

    const openSideBar = () => {
        const sideDiv = document.querySelector('.side-div');
        const leftDiv = document.querySelector('.left-div');
        sideDiv.style.left = "10px";
        leftDiv.style.left = "-60px";
    };

    const closeSideBar = () => {
        const sideDiv = document.querySelector('.side-div');
        const leftDiv = document.querySelector('.left-div');
        sideDiv.style.left = "-200px";
        leftDiv.style.left = "0";
    }

    useEffect(() => {
        setWidth('1500px');
    }, []);

    return(
        <>
            <div className='container'>
                <div className='mininav mt-5'>
                    <button className='mininav-btn' onClick={() => handleButtonClick('500px')}>XS</button>
                    <button className='mininav-btn' onClick={() => handleButtonClick('750px')}>S</button>
                    <button className='mininav-btn' onClick={() => handleButtonClick('1000px')}>M</button>
                    <button className='mininav-btn' onClick={() => handleButtonClick('1250px')}>L</button>
                    <button className='mininav-btn' onClick={() => handleButtonClick('1500px')}>XL</button>
                </div>

                <div className='side-div'>
                    <button onClick={closeSideBar}>&#10006;</button>
                </div>

                <div className='left-div'>
                    <button className='left-arr' onClick={openSideBar}>➡</button> 
                </div>

                <div className='dynamic-rectangle' style={{ width }}>
                    <div className="logo m-5">
                        <Image
                            src={img}
                            alt="logo"
                            width={30}
                            height={30}
                            className="logo-image"
                        />
                        <Link href={"/"}>
                            <p className='text-2xl font-medium'>Portfolio</p>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}