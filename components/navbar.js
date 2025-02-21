'use client'
import '@/components/navbar.css'
import Link from 'next/link';

export default function Navbar(){
    <link href='https://fonts.googleapis.com/css?family=Space Grotesk' rel='stylesheet'></link>
    return(
        <>
            <nav class="navbar">
                <div class="navdiv">
                    <div>
                        <Link href={"/"}>
                            <h1>Portfolio</h1>
                        </Link>
                    </div>
                    <ul>
                        <Link href="/404"><li>Discovery</li></Link>
                        <Link href="/about"><li>About</li></Link>
                        <Link href="/login"><li>Login</li></Link>
                        <Link href="/sign-in"><button>JOIN NOW</button></Link>
                    </ul>
                </div>
            </nav>
        </>
    );
}