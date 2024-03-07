import React, { useState } from 'react'

import StackedLineChartOutlinedIcon from '@mui/icons-material/StackedLineChartOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import TopicOutlinedIcon from '@mui/icons-material/TopicOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import OutlinedFlagSharpIcon from '@mui/icons-material/OutlinedFlagSharp';
import LocationCityOutlinedIcon from '@mui/icons-material/LocationCityOutlined';
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';
import StackedBarChartOutlinedIcon from '@mui/icons-material/StackedBarChartOutlined';

import Filter from './Filter'
import { useDispatch, useSelector } from 'react-redux';
import { clearAllFilter } from '../../redux/slices/globalParams';
import { changeFilterName } from '../../redux/slices/chartSlice';


const Filters = ({ isFilterMenuOpen, setIsFilterMenuOpen }) => {
    const [openedFilter, setOpenedFilter] = useState(null);

    const dispatch = useDispatch();

    const filter_list = [
        {
            icon: <CalendarMonthOutlinedIcon style={{ fontSize: 14 }} />,
            title: "End year",
            name: "end_year"

        },
        {
            icon: <TopicOutlinedIcon style={{ fontSize: 14 }} />,
            title: "Topics",
            name: "topic"
        },
        {
            icon: <StackedLineChartOutlinedIcon style={{ fontSize: 14 }} />,
            title: "Sector",
            name: "sector"
        },
        {
            icon: <LanguageOutlinedIcon style={{ fontSize: 14 }} />,
            title: "Region",
            name: "region"
        },
        {
            icon: <StackedBarChartOutlinedIcon style={{ fontSize: 14 }} />,
            title: "PEST",
            name: "pestle"
        },
        // {
        //     icon: <StoreOutlinedIcon style={{ fontSize: 14 }} />,
        //     title: "Source",
        //     name:"end_year"
        // },
        // {
        //     icon: <StackedLineChartOutlinedIcon style={{ fontSize: 14 }} />,
        //     title: "SWOT",
        //     name:"end_year"
        // },
        {
            icon: <OutlinedFlagSharpIcon style={{ fontSize: 14 }} />,
            title: "Country",
            name: "country"
        },
        // {
        //     icon: <LocationCityOutlinedIcon style={{ fontSize: 14 }} />,
        //     title: "City",
        //     name:"end_year"
        // },

    ]

    const handleCleatAllFIlter = () => {
        setOpenedFilter(null)
        dispatch(changeFilterName({ data: null }))
        dispatch(clearAllFilter())
    }

     

    return (
        <div className={`
        ${isFilterMenuOpen ? " " : "hidden md:block"}
        md:flex md:flex-row flex-col gap-2 md:items-center md:justify-evenly top-[55px] right-2 md:px-2 md:p-0 p-2  md:w-full md:static absolute bg-[#040B27] w-fit  `}>
            <button onClick={handleCleatAllFIlter} className=' text-white bg-red-500 font-medium border-none rounded w-[80px] h-fit '>Clear All</button>
            <div className='flex  w-full  p-2 justify-evenly md:flex-row flex-col md:gap-2 gap-0  md:mt-0 mt-2'>

                {
                    filter_list.map((item, index) => (
                        <div className='relative' >
                            <Filter
                                openedFilter={openedFilter}
                                setOpenedFilter={setOpenedFilter}
                                {...item}
                                index={index}
                            />

                        </div>
                    ))
                }
            </div>


        </div>
    )
}

export default Filters