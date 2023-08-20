import Image from 'next/image'

import RightSidebar from '@/components/shared/RightSidebar'
import HeadlineLatest from '@/components/shared/main/HeadlineLatest'

import PostsCard from '@/components/shared/main/PostsCard'
import PostsCardHorizontal from '@/components/shared/main/PostsCardHorizontal'
import PostsCardNew from '@/components/shared/main/PostsCardNew'
import PostsCardMini from '@/components/shared/main/PostsCardMini'
import PostsLeaderboard from '@/components/shared/main/PostsLeaderboard'
import NewsSection from '@/components/shared/main/NewsSection'
import Pagination from '@/components/shared/main/Pagination'
import MiniCardLeaderBoard from '@/components/cards/MiniCardLeaderBoard'


export default function Home() {
  return (
    <>
<div className='container mx-auto max-w-screen-2xl'>
      <div className='md:flex md:flex-row'>
        <div className='md:w-3/4 px-4 pb-5'>
          {/* <HeadlineLatest /> */}
          <div>
            {/* <NewsSection /> */}
            {/* <PostsLeaderboard /> */}
          </div>
          <div>
            <PostsCardHorizontal />
            <PostsCardHorizontal />
            <PostsCardHorizontal />
            <PostsCardHorizontal />

             
          </div>

          {/* <div className='pt-5 grid justify-center gap-2 grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-7'>
            <PostsCardNew />
            <PostsCardNew />
            <PostsCardNew />
            <PostsCardNew />
          </div> */}
          {/* <div className='py-5'>
            <PostsCardMini />
            <PostsCardMini />
            <PostsCardMini />
            <PostsCardMini />
          </div> */}

          <div className='flex justify-center items-center py-10'>
            <Pagination />
          </div>

          <div>
            <div className="md:flex gap-4">
              <MiniCardLeaderBoard />
              <MiniCardLeaderBoard />
              <MiniCardLeaderBoard />
            </div>
          </div>

        </div>

        <div className='md:w-1/4'>
          <RightSidebar />
        </div>

      </div>
      
    </div>
    </>
  )
}
