import React from 'react'
import NavBarItem from './NavBarItem'

const NavBar = () => {
  return (
    <div className='flex bg-amber-100 p-4 lg:text-lg justify-center gap-4'>
      <NavBarItem title='Top Rated' parms='fechTopRated' />
      <NavBarItem title='Trending' parms='fechTrending' />
    </div>
  )
}

export default NavBar
