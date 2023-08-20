import React from 'react'
import PostsCardNew from '@/components/shared/main/PostsCardNew'
import Image from 'next/image'
import adsbanner1 from '@/public/300x250-example-banner.jpg'
import adsbanner2 from '@/public/fast-food-ads-mcdonalds-300x600.webp'
import Spacer from '@/components/etc/Spacer'

export default function RightSidebar() {
  return (
    <>
      <div className="container-fluid hidden sm:flex items-center justify-center bg-white mt-5">
        <a href="/"> <Image src={adsbanner1} alt="" width={300} height={250} /> </a>
      </div>
      <Spacer title={'Latest Posts'} />
      <PostsCardNew />
      <div className="container-fluid hidden sm:flex items-center justify-center bg-white mt-5">
        <a href="/"> <Image src={adsbanner2} alt="" width={300} height={600} /> </a>
      </div>
    </>
  )
}
