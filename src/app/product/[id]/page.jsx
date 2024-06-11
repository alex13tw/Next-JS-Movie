import React from 'react'

export default async function page({params}){
const id = params.id;

const res= await fetch(`https://663dae5ee1913c476794ffa1.mockapi.io/name/users`);
  const data = await res.json()
 return (
    <div className='w-full'>
        <div>
        {data.filter((p)=>p.id==id).map((item)=>{
            return (
            <div>
            <div className='p-10 flex content-center mx-auto'> 
            <img src={item.avatar} style={{width:"200px", height:"200px"}} alt="" />
            <div className='p-4 '>
            <h1 className='text-lg mb-3 font-bold'>{item.name}</h1>
            <p className='text-lg mb-3'><span className='font-semibold'>Address: </span> {item.address}</p>
            <p className='text-lg mb-3'> <span className='font-semibold'>Text: </span> {item.text}</p>
            <p className='text-lg mb-3'> <span className='font-semibold'> Price: </span> {item.price}</p>
            </div>
            </div>   
            </div>)
        })}           
        </div>   
      Products {id}
    </div>
  )
}


