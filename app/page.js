'use client'
import Link from 'next/link';
import '@/styling/button.css'

export default function Home() {
  return (
    <>
    
      <div className='main'>

        <Link href="/design" className="btn btn-white btn-animate btn-bottom">
          DESIGN
        </Link>
        
      </div>
    </>
  );
}
