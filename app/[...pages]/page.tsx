import Image from 'next/image'

import RightSidebar from '@/components/shared/RightSidebar'
import PostsCardHorizontal from '@/components/shared/main/PostsCardHorizontal'
import Pagination from '@/components/shared/main/Pagination'
import MiniCardLeaderBoard from '@/components/cards/MiniCardLeaderBoard'
import Spacer from '@/components/etc/Spacer'
import Bread from '@/components/etc/Bread'
import ads from "@/public/ads.png"
import featuredImage from "@/public/photo-1416339442236-8ceb164046f8.avif"


export default function Home() {
  return (
    <>
<div className='container mx-auto max-w-screen-2xl'>
      <div className='md:flex md:flex-row'>
        <div className='md:w-3/4 px-4 pb-5'>
        
          <div className='flex justify-center items-center mt-5'>
            <Image src={ads} alt="" width={728} height={90} />
          </div>
         
          
          <h1 className='font-bold text-4xl text-indigo-500'>JUDUL POST DISINI</h1>
          <Bread />
          <p className='text-sm'>Author - website.com</p>
          <p className='text-sm'>Minggu, 20 Agustus 2023 15:35 WIB</p>
          <div className='flex justify-center items-center'>
            <Image src={featuredImage} alt="" width={728} height={90} />
          </div>
          

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>

          <h2>Sub Judul</h2>
          <p>
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
          </p>

         


        </div>

        <div className='md:w-1/4'>
          <RightSidebar />
        </div>

      </div>
      
    </div>
    </>
  )
}
