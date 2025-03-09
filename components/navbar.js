"use client"
import '@/styling/navbar.css'
import Link from 'next/link';
import Image from 'next/image'
import img from '../images/white.png'
import { ModeToggle } from './toggle-theme';
import { Button } from './ui/button';

export default function Navbar(){
    return(
        <>
            <div className='no-underline'>
            <nav className="w-[100%] pt-1 pb-1 border-b-2 border-solid border-primary">
                <div className="navdiv">
                    <div className="logo">
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
                    <ul>
                        <li className='list-none inline-block pr-9'><ModeToggle /></li>
                        
                        <Link href="/404"><li className='list-none inline-block pr-9'>Discovery</li></Link>
                        <Link href="/about"><li className='list-none inline-block pr-9'>About</li></Link>
                        <Link href="/login"><li className='list-none inline-block pr-9'>Login</li></Link>
                        <Link href="/sign-in"><Button>JOIN NOW</Button></Link>
                    </ul>
                </div>
            </nav>    
            </div>
        </>
    );
}