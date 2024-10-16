import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black h-48 px-32 flex justify-between items-center text-white'>
        <div className='text-center'>
          <h5 className='text-white font-bold text-2xl uppercase'>Oxt<span className='text-blue-400'>e</span></h5>
        <small className='text-xs'>Rights reserved</small>  
        </div>
        <div className='flex gap-2 items-center'>
            <p className='text-xs'>Contact us</p>
            <p>•</p>
            <button className='underline text-xs'>Instagram</button>
            <button className='underline text-xs'>Facebook</button>
        </div>
    </div>
  )
}

export default Footer