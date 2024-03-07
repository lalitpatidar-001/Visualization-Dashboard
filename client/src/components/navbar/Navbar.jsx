import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { useDispatch } from "react-redux"
import { toggleSidebar } from '../../redux/slices/sidebarSlice';
import Filters from '../filters/Filters';
const Navbar = () => {
  const dispatch = useDispatch();
  const [isFilterMenuOpen , setIsFilterMenuOpen] = useState(false);


  const handleMenuClick = () => {
    dispatch(toggleSidebar());
  }
  return (
    <div className='h-[50px] sticky top-0 z-50 bg-[#040B27] w-full flex items-center relative'>
    {/* menu toggle - for sidebar toggling */}
      <div
        onClick={handleMenuClick}
        className='text-white cursor-pointer'>
        <MenuIcon />
      </div>
    
    {/* data filters */}
    
    <Filters setIsFilterMenuOpen={setIsFilterMenuOpen} isFilterMenuOpen={isFilterMenuOpen} />
    <div onClick={()=>setIsFilterMenuOpen(!isFilterMenuOpen)} className='md:hidden text-white absolute right-2 top-auto '>Filters</div>
    </div>
  )
}

export default Navbar