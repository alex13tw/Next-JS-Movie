
import Link from 'next/link';
import React from 'react'

export default async function page({params}){
  const name = params.search.charAt(0).toUpperCase() + params.search.slice(1);
  
  const res= await fetch(`https://663dae5ee1913c476794ffa1.mockapi.io/name/users`);
  const data = await res.json()
  console.log({name})
  return (
    <div>
      {data.filter((p)=>p.name==name).map((item)=>{
            return (
              <div   className='group cursor-pointer rounded-lg transition-shadow duration-200 p-3'>
              <Link href={`/product/${item.id}`}>
              <img style={{width:"200px", height:"200px"}}  src={item.avatar} alt="" />
               <div className='line-clamp-2 text-md'>
              </div>
              <h2 className='text-lg font-bold truncate'>{item.name}</h2>
              <p className='flex items-center'>Price: ${item.price}</p>
              </Link>
             </div>)
        })}
    </div>
  )
}
