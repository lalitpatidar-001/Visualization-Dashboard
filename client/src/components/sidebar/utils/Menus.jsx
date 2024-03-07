import React, { useState } from 'react'
import Menu from './Menu'
import HomeIcon from '@mui/icons-material/Home';
const Menus = () => {
    const [selectedMenu , setSelectedMenu] = useState(0);

    const menu_list = [
        {
            icon:<HomeIcon/>,
            title:"Dashboard",
            path:"/"
        },
        
    ]

  return (
    <div className='py-4 p-3 flex flex-col gap-3'>
    {
        menu_list.map((item,index)=>(
            <Menu 
            selectedMenu={selectedMenu}
            setSelectedMenu={setSelectedMenu}
            index={index}
            {...item} 

            />
        ))
    }
    </div>
  )
}

export default Menus