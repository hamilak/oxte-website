import React from 'react'
const navList = ['Business', 'Wallets', 'Pricing', 'F.A.Q', 'Contact']

const Navbar = () => {
  return (
    <div className='bg-transparent flex justify-between h-14 items-center pr-16'>
      <div className='bg-white h-14 flex items-center w-44 justify-center rounded-br-full'>
        <p className='text-2xl font-semibold'>OXT<span className='text-blue-400'>E</span></p>
      </div>
      <div className='flex gap-4'>
        {navList.map((item) => (
          <ul className='flex items-center gap-4 uppercase font-semibold text-sm'>
            <li className='hover:text-orange-500'><a href="">{item}</a></li>
          </ul>
        ))}
        <div className=''>
          <button className='px-4 py-1 border border-orange-500 text-xs text-orange-500 rounded-md hover:bg-orange-500 hover:text-white'>Sign up</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar