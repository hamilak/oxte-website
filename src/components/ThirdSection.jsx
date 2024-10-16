import React from 'react'
import Image from '../assets/orde.jpg'

const list = [
    { 'imageUrl': 'https://img.icons8.com/pulsar-gradient/48/image.png', 'title': 'Checkout' },
    { 'imageUrl': 'https://img.icons8.com/pulsar-gradient/48/image.png', 'title': 'P2P' },
    { 'imageUrl': 'https://img.icons8.com/pulsar-gradient/48/image.png', 'title': 'Oxte for Business' },
    { 'imageUrl': 'https://img.icons8.com/pulsar-gradient/48/image.png', 'title': 'Oxte Remittance' },
    { 'imageUrl': 'https://img.icons8.com/pulsar-gradient/48/image.png', 'title': 'Oxte Bills' },
    { 'imageUrl': 'https://img.icons8.com/pulsar-gradient/48/image.png', 'title': 'Oxte Credit' },
]

const ThirdSection = () => {
    return (
        <div className='bg-orange-100 h-[36rem] p-16'>
            <div className='mb-8'>
                <h5 className='text-3xl font-semibold mb-2'>Oxte for <span className='text-orange-500'>Everyone</span></h5>
                <p className='text-xs text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum, aliquid reprehenderit corporis quibusdam voluptatum rem dolorum illum laborum animi. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum, aliquid reprehenderit corporis quibusdam voluptatum rem dolorum illum laborum animi.</p>
            </div>
            <div className='flex justify-between items-center'>
                <div className='w-3/5'>
                    {list.map((item) => (
                    <div className='flex items-center mb-8 gap-4'>
                        <img width="20" height="20" src={item.imageUrl} alt="Image" />
                        <h5>{item.title}</h5>
                    </div>
                ))}
                </div>
                <div className=''>
                    <img className='object-contain rounded-lg' width={800} height={600} src={Image} alt="" />
                </div>
            </div>

        </div>
    )
}

export default ThirdSection