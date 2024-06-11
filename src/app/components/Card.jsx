
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Card = ({result}) => {
  return (
    <div   className='group cursor-pointer rounded-lg transition-shadow duration-200 p-3'>
     <Link href={`/product/${result.id}`}>
     <img style={{width:"200px", height:"200px"}}  src={result.avatar} alt="" />
      <div className='line-clamp-2 text-md'>

     </div>
     <h2 className='text-lg font-bold truncate'>{result.name}</h2>
     <p className='flex items-center'>Price: ${result.price}</p>
     </Link>
    </div>
  )
}

export default Card
