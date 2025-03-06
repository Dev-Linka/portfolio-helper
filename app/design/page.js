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
        const sideDiv = document.querySelector('.div-slide');
        const leftDiv = document.querySelector('.div-btn-left');
        sideDiv.style.left = "10px";
        leftDiv.style.left = "-60px";
    };

    const closeSideBar = () => {
        const sideDiv = document.querySelector('.div-slide');
        const leftDiv = document.querySelector('.div-btn-left');
        sideDiv.style.left = "-200px";
        leftDiv.style.left = "0";
    }

    useEffect(() => {
        setWidth('1500px');
    }, []);

    return(
        <>
            <div className='container'>
                <div className='div-mininav mt-5'>
                    <button className='btn-mininav' onClick={() => handleButtonClick('414px')}>XS</button>
                    <button className='btn-mininav' onClick={() => handleButtonClick('768px')}>S</button>
                    <button className='btn-mininav' onClick={() => handleButtonClick('1024px')}>M</button>
                    <button className='btn-mininav' onClick={() => handleButtonClick('1280px')}>L</button>
                    <button className='btn-mininav' onClick={() => handleButtonClick('1440px')}>XL</button>
                </div>

                <div className='div-slide'>
                    <button onClick={closeSideBar}>&#10006;</button>
                </div>

                <div className='div-btn-left'>
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