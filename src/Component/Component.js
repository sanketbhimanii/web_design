
import React from 'react'
import Book from '../Component/open-book.png'

function Component() {
  return (
    <div class="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8" >
      <div className='w-1/2'>
        <div className='bg-blue-50 flex flex-wrap items-center justify-between p-5 rounded-2xl'>
          <div className='flex flex-wrap items-center'>
            <img src={Book} className='h-10 w-auto' />
            <h3 className='text-blue-900 capitalize font-semibold text-3xl m-4'>total conclusions</h3>
          </div>
          <div>
            <h1 className='text-blue-900 font-bold text-4xl'>410</h1>
          </div>
        </div>

        <div className='flex flex-wrap items-center justify-between p-5 mt-10 border-b-2 border-blue-300'>
          <div className='flex flex-wrap items-center'>
            <div className='h-5 w-5 border-2 border-blue-900 rounded-full bg-blue-900' />
            <h3 className='text-blue-900 capitalize  text-3xl  m-4'>phone collection</h3>
          </div>
          <div>
            <h1 className='text-blue-900  text-3xl'>200</h1>
          </div>
        </div>

        <div className='flex flex-wrap items-center justify-between p-5  border-b-2 border-blue-300'>
          <div className='flex flex-wrap items-center'>
            <div className='h-5 w-5 border-2 border-cyan-300 rounded-full bg-cyan-300' />
            <h3 className='text-blue-900   text-3xl  m-4'>Pre-decaying loans</h3>
          </div>
          <div>
            <h1 className='text-blue-900  text-3xl'>70</h1>
          </div>
        </div>

        <div className='flex flex-wrap items-center justify-between p-5  border-b-2 border-blue-300'>
          <div className='flex flex-wrap items-center'>
            <div className='h-5 w-5 border-2 border-purple-600 rounded-full bg-purple-600' />
            <h3 className='text-blue-900  text-3xl  m-4'>Pre-decaying loans</h3>
          </div>
          <div>
            <h1 className='text-blue-900  text-3xl'>110</h1>
          </div>
        </div>

        <div className='flex flex-wrap items-center justify-between p-5 border-b-2 border-blue-300'>
          <div className='flex flex-wrap items-center'>
            <div className='h-5 w-5 border-2 border-amber-400 rounded-full bg-amber-400' />
            <h3 className='text-blue-900  text-3xl  m-4'>Non performing loans(NPM) </h3>
          </div>
          <div>
            <h1 className='text-blue-900  text-3xl'>30</h1>
          </div>
        </div>
      </div>

    </div>

  );
}

export default Component