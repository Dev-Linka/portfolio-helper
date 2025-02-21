import { redirect } from 'next/navigation'
import React from "react";

export default function Home() {
  return (
    <>
      <p>Home page</p>
      <div>
        <form action={redirect('/about')}>
          <button>
            Click me 
          </button>
        </form>
        
      </div>
    </>
    
  );
}
