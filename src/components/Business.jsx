import React from 'react'

const businessDetails = [
    {'imageUrl': 'https://img.icons8.com/ultraviolet/40/wallet.png', 'title': 'Payment checkout', 'info': 'Super fast and reliable way to receive payments', 'details': ['Lorem ipsum dolor sit amet consectetur, adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.']},
    {'imageUrl': 'https://img.icons8.com/ultraviolet/40/check.png', 'title': 'Invoicing', 'info': 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.', 'details': ['Lorem ipsum dolor sit amet consectetur, adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.']},
    {'imageUrl': 'https://img.icons8.com/ultraviolet/40/initiate-money-transfer.png', 'title': 'Transfer', 'info': 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.', 'details': ['Lorem ipsum dolor sit amet consectetur, adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.']},
    {'imageUrl': 'https://img.icons8.com/ultraviolet/40/gender-neutral-user.png', 'title': 'Customer Management', 'info': 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.', 'details': ['Lorem ipsum dolor sit amet consectetur, adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.']},
    {'imageUrl': 'https://img.icons8.com/ultraviolet/40/bar-chart.png', 'title': 'Reports', 'info': 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.', 'details': ['Lorem ipsum dolor sit amet consectetur, adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.']},
    {'imageUrl': 'https://img.icons8.com/ultraviolet/40/receipt.png', 'title': 'Expenses', 'info': 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.', 'details': ['Lorem ipsum dolor sit amet consectetur, adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.']},
]

const Business = () => {
  return (
    <div className='bg-color3 min-h-[35rem] p-16'>
        <div className=''>
            <h5 className='text-white text-3xl font-semibold mb-8'>Oxte for <span className='text-orange-300'>Business</span></h5>
            <div className='flex flex-wrap gap-2 justify-center'>
               {businessDetails.map((item) => (
                <div className='bg-color2 p-8 rounded-lg text-white h-64'>
                    <div className='mb-4'>
                        <div className='flex gap-4 items-center mb-4 border-b border-b-blue-400 pb-4'>
                           <img src={item.imageUrl} alt="Image" />
                        <h5 className='text-2xl'>{item.title}</h5> 
                        </div>
                        <p className='text-xs text-blue-200'>{item.info}</p>
                    </div>
                    {item.details.map((val) => (
                       <ul className='list-disc text-xs list-inside'>
                        <li className='mb-3'>{val}</li>
                    </ul> 
                    ))}
                </div>
            ))} 
            </div>
            
        </div>
    </div>
  )
}

export default Business