import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div className='bg-slate-400 xl:place-content-center min-h-screen py-20 px-10 grid gap-10 lg:grid-cols-2 xl:grid-cols-3 space-y-5'>
      <div className='bg-white dark:bg-black p-6 rounded-3xl shadow-xl flex flex-col justify-around'>
        <span className='font-semibold text-3xl dark:text-white'>Select Item</span>
        <ul>
          {[1,2].map((i) => (
          <div key={i} className='flex justify-between my-2 dark:text-gray-200'>
              <span className='text-gray-500 text-[17px]'>Grey Chair</span>
              <span className='font-semibold'>$19</span>
          </div>
          ))}
        </ul>
        
        <div className='flex dark:text-white justify-between mt-2 pt-2 border-t-2 border-dashed'>
          <span>Total</span>
          <span className='font-semibold'>$19</span>
        </div>
        <div className='flex justify-center'>
          <button className='mt-5 bg-blue-500 text-white p-3 dark:bg-black dark:border-white dark:border-2 dark:hover:bg-white dark:hover:text-gray-700 text-center rounded-xl w-1/2 mx-auto hover:bg-teal-500 hover:text-black active:bg-yellow-500 focus:text-red-500'>Checkout</button>
        </div>
      </div>
      <div className='bg-white overflow-hidden rounded-2xl shadow-xl group'>
        <div className='bg-blue-500 dark:bg-[#003333] p-6 xl:pb-20 pb-14 landscape:bg-indigo-400'>
          <span className='text-white text-2xl'>Profile</span>
        </div>
        <div className='rounded-3xl p-6 relative -top-5 bg-white'>
          <div className='flex relative -top-16 items-end justify-between'>
            <div className='flex flex-col items-center'>
              <span className='text-sm text-gray-500'>Orders</span>
              <span className='font-medium'>$340</span>
            </div>
            <div className='h-24 w-24 bg-zinc-300 rounded-full group-hover:bg-yellow-300 transition-colors' />
            <div className='flex flex-col items-center'>
              <span className='text-sm text-gray-500'>Spent</span>
              <span className='font-medium'>$340</span>
            </div>
          </div>
        </div>
        <div className='relative -mt-10 mb-5 flex flex-col items-center'>
          <span className='text-lg font-medium'>Tony Molloy</span>
          <span className='text-sm text-gray-500'>USA</span>
        </div>
      </div>
      <div className='bg-white p-6 rounded-2xl shadow-xl lg:col-span-2 xl:col-span-1'>
        <div className='flex mb-5 justify-between items-center'>
          <span>⬅️</span>
          <div className='space-x-3'>
            <span>⭐️ 4.9</span>
            <span className='shadow-xl p-2 rounded-md'>❤️</span>
          </div>
        </div>
        <div className='bg-zinc-400 h-72 mb-5'/>
        <div className='flex flex-col'>
          <span className='font-medium text-lg mb-1.5'>Swoon Lounge</span>
          <span className='text-xs text-gray-500'>Chair</span>
          <div className='mt-3 mb-5 flex justify-between items-center'>
            <div className='flex justify-between items-center space-x-3'>
              <button className='w-5 h-5 rounded-full transition bg-yellow-500 focus:ring-2 ring-offset-2 ring-yellow-500 ring-opacity-50' />
              <button className='w-5 h-5 rounded-full transition bg-indigo-500 focus:ring-2 ring-offset-2 ring-indigo-500 ring-opacity-50' />
              <button className='w-5 h-5 rounded-full transition bg-teal-500 focus:ring-2 ring-offset-2 ring-teal-500 ring-opacity-50' />
            </div>
            <div className='flex items-center space-x-5'>
              <button className='p-1.5 bg-blue-100 rounded-lg flex justify-center items-center aspect-square w-8 text-xl text-gray-600'>-</button>
              <span>1</span>
              <button className='p-1.5 bg-blue-100 rounded-lg flex justify-center items-center aspect-square w-8 text-xl text-gray-600'>+</button>
            </div> 
          </div>
        </div>
        <div className='flex justify-between items-center'>
          <span className='font-medium text-xl'>$450</span>
          <button className='bg-blue-500 text-center text-white py-2 px-8 text-xs rounded-lg'>Add to cart</button>
        </div>
      </div>      
    </div>
      )
}

export default Home
