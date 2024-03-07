import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Menu = ({ selectedMenu, setSelectedMenu, index, icon, title, path }) => {

    return (
        <Link to={path}>

            <div
                onClick={() => setSelectedMenu(index)}
                className={`flex gap-2 items-center cursor-pointer
            p-2 rounded-md
            ${selectedMenu === index && "bg-[#1A1F37]"} `}>

                <div className={`bg-[#1A1F37] rounded-md flex items-center p-[2px] ${selectedMenu === index ? "text-white bg-blue-500" : "text-blue-500 bg-[#1A1F37]"}`}>
                    {icon}
                </div>
                <span className='text-white'>{title}</span>
            </div>
        </Link>
    )
}

export default Menu