import React from 'react'
import Image from '../assets/mainpic.jpg'

const MainInformation = () => {
    return (
        <div className='min-h-[36rem] flex justify-between items-center leading-8'>
            <div className='w-3/5'>
                <h4 className='text-6xl font-semibold'>Fastest way to <span className='text-blue-400'>send</span> money</h4><br />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem repellat dolorem, suscipit, nobis ea, reiciendis ducimus odit quis quas explicabo delectus.</p><br />
                <div className='flex space-x-4'>
                    <button className='px-6 py-2 rounded-md hover:bg-blue-800 bg-blue-500 text-white'>Learn more</button>
                    <button className='px-6 py-2 rounded-md hover:bg-orange-400 bg-orange-500 text-white'>Sign up</button>
                </div>
            </div>
            <div className='absolute top-20 right-0 h-2/3 w-4/12 bg-white rounded-tl-full'>
                {/* <div>
                <img width="64" height="64" src="https://img.icons8.com/dusk/64/paper-plane.png" alt="paper-plane"/>
                </div> */}
                <div className='absolute top-2 left-2 h-full right-0 rounded-tl-full overflow-hidden'>
                    <img className='object-cover h-full w-full' src={Image} alt='Main' />
                </div>
            </div>
        </div>
    )
}

export default MainInformation