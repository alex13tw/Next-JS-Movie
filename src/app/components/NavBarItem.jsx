'use client'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import React from 'react'

const NavBarItem = ({title,parms}) => {
    const searchParms = useSearchParams();
    const movie = searchParms.get('movie');

  return (

    <div>
      <Link className={`hover:text-amber-600 font-semibold ${movie===parms?'underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg':``}`} href={`/?movie=${parms}`}>{title}</Link>
    </div>
  )
}

export default NavBarItem
