import Image from 'next/image'

import RightSidebar from '@/components/shared/RightSidebar'
import HeroSection from '@/components/main/cards/HeroSection'
import SectionTitle from '@/components/main/cards/Featured'
import Section from '@/components/main/cards/Section'
import LatestComponent from '@/components/main/LatestComponent'
import Pagination from '@/components/shared/main/Pagination'


export default function Home() {
  return (
    <>
      <div className='container mx-auto max-w-screen-2xl'>
        <div>
        <HeroSection />
        </div>
        {/* <div className='p-12'>
        <SectionTitle />
        </div> */}
      
        <div className='md:flex md:flex-row px-20 py-5 gap-4'>
          <div className='md:w-3/4'>
            <Section name={'Latest News'}/>
            <LatestComponent />
            <div className='flex justify-center items-center py-10'>
            <Pagination />
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
