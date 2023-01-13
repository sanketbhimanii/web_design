import React from 'react'
import mountain from '../CardProject/img/mountains.jpg'
import Nature from '../CardProject/img/Nature.jpg'
import NatureAtnight from '../CardProject/img/NatureAtnight.jpg'

function ResponsiveCard() {
  return (
    <div className='h-screen'>
      <h1 className='text-4xl text-[#193e46] font-sora font-semibold capitalize pt-10 pb-4 border-b border-[#193e46] rounded-2xl w-1/4 m-auto'>beautifull responsive cards.</h1>
      {/* My Cards */}
      <div className='grid grid-cols-3 lg:gap-3 items-center justify-items-center'>

        {/* My First Card */}
        <div className=''>
          <div className='rounded overflow-hidden shadow-lg max-w-sm'>
            <img src={mountain} alt='mountains-img' className='w-full' />
            <div className='px-6 py-4'>
              <div className='font-bold text-xl mb-2 font-sora text-left'>Mountains</div>
              <p className='text-gray-600 text-left mb-4 '>They usually have steep, sloping sides and sharp or rounded ridges, and a high point, called a peak or summit. A mountain range is a series or chain of that are close together. </p>
              <div className='grid grid-flow-col gap-5 justify-center pb-2 px-6'>
                <span className='border rounded-full bg-gray-200 px-3 py-1 text-sm mb-2 '>#photography</span>
                <span className='border rounded-full bg-gray-200 px-3 py-1 text-sm mb-2'>#travel</span>
                <span className='border rounded-full bg-gray-200 px-3 py-1 text-sm mb-2'>#winter</span>
              </div>
            </div>
          </div>
        </div>

        {/* My Second Card */}
        <div className='py-10'>
          <div className='rounded overflow-hidden shadow-lg max-w-sm'>
            <img src={Nature} alt='mountains-img' className='w-full' />
            <div className='px-6 py-4'>
              <div className='font-bold text-xl mb-2 font-sora text-left'>Nature</div>
              <p className='text-gray-600 text-left mb-4 '>Nature is the ultimate source of our living. Both living and non-living things include nature, and everyone is interdependent, which helps maintain the ecosystem.</p>
              <div className='grid grid-flow-col gap-5 justify-center pb-2 px-6'>
                <span className='border rounded-full bg-gray-200 px-3 py-1 text-sm mb-2 '>#photography</span>
                <span className='border rounded-full bg-gray-200 px-3 py-1 text-sm mb-2'>#travel</span>
                <span className='border rounded-full bg-gray-200 px-3 py-1 text-sm mb-2'>#winter</span>
              </div>
            </div>
          </div>
        </div>

        {/* My Third Card */}
        <div className='py-10'>
          <div className='rounded overflow-hidden shadow-lg max-w-sm'>
            <img src={NatureAtnight} alt='mountains-img' className='w-full' />
            <div className='px-6 py-4'>
              <div className='font-bold text-xl mb-2 font-sora text-left'>Nature At Night</div>
              <p className='text-gray-600 text-left mb-4'>Nature at Night goes into the dark corners of forest, jungle and ocean to find organisms that use luminescence for camouflage, mating, warding off predators or attracting prey.</p>
              <div className='grid grid-flow-col gap-5 justify-center pb-2 px-6'>
                <span className='border rounded-full bg-gray-200 px-3 py-1 text-sm mb-2 '>#photography</span>
                <span className='border rounded-full bg-gray-200 px-3 py-1 text-sm mb-2'>#travel</span>
                <span className='border rounded-full bg-gray-200 px-3 py-1 text-sm mb-2'>#winter</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ResponsiveCard