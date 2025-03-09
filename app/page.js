"use server"
import Link from 'next/link';
import '@/styling/button.css'

export default async function Home() {
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
