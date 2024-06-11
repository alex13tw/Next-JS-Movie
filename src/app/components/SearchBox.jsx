'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';

const SearchBox = () => {
    const [search,setSearch] = useState('');
    const router=useRouter()
    const add=(e)=>{
        setSearch(e.target.value);  
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        router.push(`/search/${search}`);
    }
  return (
    <div>
        <form action="" className='justify-between flex px-5 max-w-6xl mx-auto'>
            <input placeholder='Search'   onChange={add} className='w-full h-14 rounded placeholder-gray-500 outline-none bg-transparent flex-1 ' type="text" value={search} />
            <button className='shoadow'  onClick={handleSubmit}>Submit</button>
        </form>
    </div>
  )
}

export default SearchBox
