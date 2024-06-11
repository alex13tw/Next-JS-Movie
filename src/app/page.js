import React from 'react'
import Card from './components/Card'
export default async function page(){
  const res= await fetch(`https://663dae5ee1913c476794ffa1.mockapi.io/name/users`);
  const data = await res.json()
  
  console.log({data})
  return (
    <div className='sm:grid sm:grid-cols-2 lg:grid-cols-5 xl:grid:cols-4 '>
     {data.map((p)=>(
      <Card result={p}/>
     ))}
    </div>
  )
}


