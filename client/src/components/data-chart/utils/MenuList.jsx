import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';


const MenuList = ({ 
    setMenuOpen, 
    menuOpen, 
    about_options, 
    params_options, 
    paramValue, 
    handleChangeParam, 
    handleChangeAboutParam, 
    aboutParamValue,
    setChartType,
    chartTypeValue }) => {

    const chart_options=[
        "pie chart",
        "donut chart",
        "polar chart",
    ]
    const handleChangeChartType = (e)=>{
        setChartType(e.target.value)
    }

    return (
        <>
            {/* menu toggle */}
            <div div className='absolute top-0 right-2 text-white cursor-pointer' onClick={() => setMenuOpen(!menuOpen)}> <MenuIcon /></div>

            {/* menu list */}
            <div div className={`${menuOpen ? "flex" : "hidden"} bg-white p-1 absolute top-[30px] right-1 flex flex-col gap-2`}>
                <select
                    value={paramValue}
                    onChange={handleChangeParam}
                    className='capitalize border-blue-500 border-[1.5px] outline-none cursor-pointer' name='params'>
                    {
                        params_options?.map((item) => (
                            <option className='capitalize cursor-pointer'>{item}</option>
                        ))
                    }
                </select>
                <select
                    value={aboutParamValue}
                    onChange={handleChangeAboutParam}
                    className='capitalize border-blue-500 border-[1.5px] outline-none cursor-pointer' name='about-params'>
                    {
                        about_options?.map((item) => (
                            <option className='capitalize cursor-pointer'>{item}</option>
                        ))
                    }
                </select>
                <select
                    value={chartTypeValue}
                    onChange={handleChangeChartType}
                    className='capitalize border-blue-500 border-[1.5px] outline-none cursor-pointer' name='about-params'>
                    {
                        chart_options?.map((item) => (
                            <option className='capitalize cursor-pointer'>{item}</option>
                        ))
                    }
                </select>
            </div>
        </>
    )
}

export default MenuList