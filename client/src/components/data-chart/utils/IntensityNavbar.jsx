import React from 'react'
import RadioInput from './RadioInput'
import { useDispatch, useSelector } from 'react-redux'
import { changeAboutParam } from '../../../redux/slices/chartSlice';
import EastIcon from '@mui/icons-material/East';

const IntensityNavbar = () => {
    const { aboutParam ,isIntensityBarOpen} = useSelector(state => state.chart);
    const dispatch = useDispatch();

    const about_prams_options = [
        "intensity",
        "relevance",
        "likelihood",
    ]
    const prams_options = [
        "sector",
        "topic",
        "region",
        "pestle",
        "country",
    ]
    const handleChangeAboutParam = (e) => {
        dispatch(changeAboutParam({ data: e.target.value }))
    }

    return (
        <div 
        className={`flex items-center sm:gap-3 sm:h-[30px] sm:w-full bg-white py-1 
        sm:static sm:flex-row
        absolute top-[30px] right-0
        flex-col
        w-fit
        ${isIntensityBarOpen?"":"hidden sm:flex"}
        `}
        >
            {/* drop down for aboutPram */}
            <div className='pl-2 '>
                <select
                    value={aboutParam}
                    onChange={handleChangeAboutParam}
                    className='capitalize border-blue-500 border-[1.5px] outline-none cursor-pointer' name='about-params'>
                    {
                        about_prams_options.map((item) => (
                            <option className='capitalize cursor-pointer'> {item}</option>
                        ))
                    }
                </select>
            </div>

            {/* arrow indicator */}
            <div className='sm:flex items-center gap-1 hidden '><span className='mb-1'>By</span><EastIcon style={{ fontSize: 18 }} /></div>

            {/* options */}
            <div className='flex justify-evenly w-full 
                sm:flex-row
                flex-col
            '>
                {prams_options?.map((title) => (
                    <RadioInput title={title} />
                ))
                }
            </div>
        </div>
    )
}

export default IntensityNavbar