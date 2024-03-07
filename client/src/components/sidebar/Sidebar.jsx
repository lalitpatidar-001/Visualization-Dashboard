import React from 'react'
import Logo from './utils/Logo'
import Menus from './utils/Menus'
import { useSelector } from 'react-redux'

const Sidebar = () => {
    const {isSidebarOpen} = useSelector(state=>state.sidebar);
    return (
        <div className={`
        z-50
        w-[170px] h-[100vh] 
        bg-gradient-to-b from-[#050b26] to-[#002056]
        fixed lg:top-0  top-[51px]
        lg:sticky
      
        ${isSidebarOpen?"lg:hidden":"lg:block hidden"}
        `}>
        {/* logo */}
                <Logo/>

        {/* divider */}
        <div className='  w-full h-[1px] bg-gradient-to-r from-black via-white to-black'/>

        {/* menus */}
        <Menus/>
            
        </div>
    )
}

export default Sidebar