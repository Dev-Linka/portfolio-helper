"use client"
import '@/components/navbar.css'
import Link from 'next/link';
import { Space_Grotesk } from "next/font/google";

export default function Navbar(){
    return(
        <>
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Space+Grotesk:wght@300..700&display=swap');
        </style>
            <nav className="navbar">
                <div className="navdiv">
                    <div>
                        <Link href={"/"}>
                            <p className='text-2xl'>Portfolio</p>
                        </Link>
                    </div>
                    <ul>
                        <Link href="/404"><li>Discovery</li></Link>
                        <Link href="/about"><li>About</li></Link>
                        <Link href="/login"><li>Login</li></Link>
                        <Link href="/sign-in"><button className='font-medium'>JOIN NOW</button></Link>
                    </ul>
                </div>
            </nav>
            
        </>
    );
}