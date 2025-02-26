"use client"
import Link from 'next/link';
import '@/styling/button.css'

export default function Home() {
  return (
    <>
      <div className='main'>
        <p>Home page</p>

        <Link href="/design" className="btn btn-white btn-animate">
          DESIGN
        </Link>
        
      </div>
    </>
  );
}
