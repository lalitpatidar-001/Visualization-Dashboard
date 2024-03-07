import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/sidebar/Sidebar';
import Navbar from '../components/navbar/Navbar';

const DashBoard = () => {
  return (
    <div className='flex relative '>

      {/* sidebar - for routing */}
      <Sidebar />

      {/* Dashboard - pages */}
      <div className='
      flex flex-col w-full  min-h-[calc(100vh-51px)]
      bg-gradient-to-t from-[#162551] via-[#0066d6]   to-[#0066d6]'>

          {/* navbar - for data filter options */}
          <Navbar />

          {/* divider - for design */}
          <div className='  w-full h-[1px] bg-gradient-to-r from-black via-white to-black ' />

          {/* displaying current dashboard page */}
          <Outlet />
      </div>
    </div>
  )
}

export default DashBoard