import React, { useState } from 'react'
import useAPI from '../../hooks/useAPI';
import BarChart from '../charts/BarChart';
import IntensityNavbar from './utils/IntensityNavbar';
import { useDispatch, useSelector } from 'react-redux';
import MenuIcon from '@mui/icons-material/Menu';
import {  toggleIntensityBarOpen } from '../../redux/slices/chartSlice';

const Intensity = () => {
    const { barDataParams, aboutParam } = useSelector(state => state.chart);
    const {globalParameter} = useSelector(state=>state.globalParams)
    console.log("paramsss",globalParameter)
    const dispatch = useDispatch();
    const { data: sectorData, loading, error } = useAPI(`/dashboard/intensity/${barDataParams}/${aboutParam}`,
    globalParameter,"post");
    console.log("sectorData", sectorData)

    const handelBarOpenClick = () => {
        dispatch(toggleIntensityBarOpen());
    }
   
    return (
        <div>
            {!loading &&
                <div className='border  w-full flex flex-col   relative'>
                    <IntensityNavbar />
                    <div  >
                        <BarChart data={sectorData} label={`Avg. ${aboutParam} By ${barDataParams}`} />
                        <div
                            onClick={handelBarOpenClick}
                            className=' sm:hidden absolute top-0 right-0 text-white cursor-pointer'><MenuIcon /></div>
                    </div>

                </div>
            }
        </div>
    )
}

export default Intensity