"use client"
import '@/styling/navbar.css'
import Link from 'next/link';
import Image from 'next/image'
import img from '../images/white.png'

export default function Navbar(){
    return(
        <>
            <nav className="navbar">
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
                        <Link href="/404"><li>Discovery</li></Link>
                        <Link href="/about"><li>About</li></Link>
                        <Link href="/login"><li>Login</li></Link>
                        <Link href="/sign-in"><button className='font-medium join'>JOIN NOW</button></Link>
                    </ul>
                </div>
            </nav>
            
        </>
    );
}