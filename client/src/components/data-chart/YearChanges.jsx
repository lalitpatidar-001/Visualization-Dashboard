import React, { useState } from 'react'
import useAPI from '../../hooks/useAPI';
import LineChart from '../charts/LineChart';
import { useDispatch, useSelector } from 'react-redux';
import MenuIcon from '@mui/icons-material/Menu';
import {  changeYearAboutParams, changeYearParams } from '../../redux/slices/chartSlice';

const YearChanges = () => {
  const { yearParams, yearAboutParams } = useSelector(state => state.chart);
  const {globalParameter} = useSelector(state=>state.globalParams)
  console.log("global prams in year ",globalParameter)
  const dispatch = useDispatch();

  const [menuOpen, setMenuOpen] = useState(false);

  const { data: yearData, loading, error } = useAPI(`/dashboard/year-progress/${yearParams}/${yearAboutParams}`,globalParameter , "post");

  const params_options = [
    "end_year",
    "start_year"
  ]
  const about_options = [
    "intensity",
    "relevance",
    "likelihood",
  ]
  const handleChangeAboutParam = (e) => {
    dispatch(changeYearAboutParams({ data: e.target.value }))

  }
  const handleChangeParam = (e) => {
    dispatch(changeYearParams({ data: e.target.value }))

  }
  

  return (
    <div className='w-full  relative '>
      <LineChart data={yearData} aboutParams={yearAboutParams} params={yearParams} />


      {/* menu toggle */}
      <div className='absolute top-0 right-2 text-white cursor-pointer' onClick={() => setMenuOpen(!menuOpen)}><MenuIcon /></div>

      {/* menu list */}
      <div className={`${menuOpen ? "flex" : "hidden"} bg-white p-1 absolute top-[30px] right-1 flex flex-col gap-2`}>
        <select
          value={yearParams}
          onChange={handleChangeParam}
          className='capitalize border-blue-500 border-[1.5px] outline-none cursor-pointer' name='params'>
          {
            params_options.map((item) => (
              <option className='capitalize cursor-pointer'>{item}</option>
            ))
          }
        </select>
        <select
          value={yearAboutParams}
          onChange={handleChangeAboutParam}
          className='capitalize border-blue-500 border-[1.5px] outline-none cursor-pointer' name='about-params'>
          {
            about_options.map((item) => (
              <option className='capitalize cursor-pointer'>{item}</option>
            ))
          }
        </select>
      </div>
    </div>
  )
}

export default YearChanges