import React from 'react';
import ads from '@/public/ads.png';
import Navbar from '@/components/shared/header/Navbar';
import Image from 'next/image';

export default function Header() {
  return (
    <>
      <header>
        <div className="container-fluid hidden sm:flex items-center justify-center bg-white py-1 px-5">
          <a href="/"> <Image src={ads} alt="" width={728} height={90} /> </a>
        </div>
        <Navbar />
      </header>
    </>
  );
}