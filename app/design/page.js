'use client'
import { useEffect, useState } from 'react';
import '@/styling/design.css'
import Link from 'next/link';
import Image from 'next/image'
import logo from '@/images/white.png'
import img from '@/images/backgound.png'
import { Button } from '@/components/ui/button';

export default function Design() {
    const [width, setWidth] = useState(null);
    const [copyCount, setCopyCount] = useState(0);
    const [sidebarLeft, setSidebarLeft] = useState(-200);
    const [leftArrow, setLeftArrow] = useState(0);

    const handleButtonClick = (newWidth) => {
        setWidth(newWidth);
    };

    const openSideBar = () => { // Open sidebar when clicked
        setSidebarLeft(10); 
        setLeftArrow(-60);
    };

    const closeSideBar = () => { // Close sidebar when clicked
        setSidebarLeft(-200);
        setLeftArrow(0);
    };

    document.onclick = function(ev){ // Close sidebar when clicked outside
        if(ev.target.className !== 'sidebar' && ev.target.className !== 'left-arr') {
            setSidebarLeft(-200);
            setLeftArrow(0);
        }
    }

    img.onclick = function(ev){ 
        setCopyCount(copyCount - 1);
    }

    const allowDrop = (ev) => ev.preventDefault(); // Allow drop

    const drag = (ev) => { // Drag and drop
        ev.dataTransfer.setData("text", ev.target.id);
    };

    const drop = (ev) => { // Drop
        ev.preventDefault();
        const data = ev.dataTransfer.getData("text");
        const original = document.getElementById(data);
        
        if (!original || original.classList.contains("copy")) return; 

        const item = original.cloneNode(true);
        item.id = `copy-${copyCount}`; 
        item.classList.add("copy"); 
        item.removeAttribute("draggable"); 
        item.ondragstart = null; 
        
        ev.target.appendChild(item);
        setCopyCount(copyCount + 1);
    };

    useEffect(() => {
        setWidth('1500px');
    }, []);

    return (
        <>
            <div className='w-[100vw] h-[100vh)]'>
                <div className='flex items-center gap-4 justify-around px-10 py-2 mx-auto rounded-full border-2 mt-5 max-w-2xl bg-card shadow-2xl'>
                    <Button className='w-10 h-10' onClick={() => handleButtonClick('414px')}>XS</Button>
                    <Button className='w-10 h-10' onClick={() => handleButtonClick('768px')}>S</Button>
                    <Button className='w-10 h-10' onClick={() => handleButtonClick('1024px')}>M</Button>
                    <Button className='w-10 h-10' onClick={() => handleButtonClick('1280px')}>L</Button>
                    <Button className='w-10 h-10' onClick={() => handleButtonClick('1440px')}>XL</Button>
                </div>

                <div // Sidebar
                    id='sidebar'
                    className='sidebar inline-block fixed left-[-200px] w-[200px] h-[700px] bg-gray-700 text-black pl-3 pt-1 transition-left duration-300 ease-in-out rounded-3xl'
                    style={{ left: `${sidebarLeft}px` }}    
                >
                    <button className='sidebar' onClick={closeSideBar}>&#10006;</button>
                    <p className='sidebar'>Lorem impus</p>
                    <p className='sidebar'>side bar for things</p>
                    <Image
                        id="dragItem"
                        src={img}
                        alt="logo"
                        width={30}
                        height={30}
                        className="sidebar logo-image"
                        draggable="true"
                        onDragStart={drag}
                    />
                </div>

                <div 
                    className='inline-block fixed top-[50%] translate-y-1/2 ml-4 text-2xl transition-left duration-300 ease-in-out'
                    style={{ left: `${leftArrow}px` }}    
                >
                    <button 
                        className='left-arr' 
                        onClick={openSideBar}
                    >
                        ➡
                    </button>
                </div>

                <div className='dynamic-rectangle' style={{ width }}>
                    <div className="logo m-5">
                        <Image
                            src={logo}
                            alt="logo"
                            width={30}
                            height={30}
                            className="logo-image"
                        />
                        <Link href={"/"}>
                            <p className='text-2xl font-medium'>Portfolio</p>
                        </Link>
                    </div>

                    <div
                        id='div1'
                        onDrop={drop}
                        onDragOver={allowDrop}
                        className='m-5'
                    >
                    </div>
                </div>
            </div>
        </>
    );
}
