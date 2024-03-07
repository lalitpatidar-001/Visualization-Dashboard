import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import useAPI from '../../hooks/useAPI';
import PieChart from '../charts/PieChart';
import LineChart from '../charts/LineChart';
import {  changeGeoAboutParams, changeGeoParams } from '../../redux/slices/chartSlice';
import MenuIcon from '@mui/icons-material/Menu';

const GeoStats = () => {
  const { geoAboutParams, geoParams } = useSelector(state => state.chart);
  const {globalParameter} = useSelector(state=>state.globalParams)
  console.log("geo statt ",globalParameter)
  const dispatch = useDispatch();
  console.log(geoParams, geoAboutParams)
  const [menuOpen, setMenuOpen] = useState(false);
  const { data: geoData, loading, error } = useAPI(`/dashboard/geo-progress/${geoParams}/${geoAboutParams}`,globalParameter , "post");
  console.log("geoData", geoData)

  const params_options = [
    "country",
    "region",
  ]
  const about_options = [
    "intensity",
    "relevance",
    "likelihood",
  ]
  const handleChangeAboutParam = (e) => {
    dispatch(changeGeoAboutParams({ data: e.target.value }))
  }
  const handleChangeParam = (e) => {
    dispatch(changeGeoParams({ data: e.target.value }))
  }
  
  return (
    <div className='relative'>
      <LineChart data={geoData} aboutParams={geoAboutParams} params={geoParams} />
      {/* menu toggle */}
      <div className='absolute top-0 right-2 text-white cursor-pointer' onClick={()=>setMenuOpen(!menuOpen)}><MenuIcon/></div>

     {/* menu list */}
      <div className={`${menuOpen ? "flex" : "hidden"} bg-white p-1 absolute top-[30px] right-1 flex flex-col gap-2`}>
        <select
          value={geoParams}
          onChange={handleChangeParam}
          className='capitalize border-blue-500 border-[1.5px] outline-none cursor-pointer' name='params'>
          {
            params_options.map((item) => (
              <option className='capitalize cursor-pointer'>{item}</option>
            ))
          }
        </select>
        <select
          value={geoAboutParams}
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

export default GeoStats