import React from 'react'
import Intensity from '../components/data-chart/Intensity';
import { useSelector } from 'react-redux';
import YearChanges from '../components/data-chart/YearChanges';
import GeoStats from '../components/data-chart/GeoStats';
import TopData from '../components/data-chart/TopData';

const HomePage = () => {
  const { isSidebarOpen } = useSelector(state => state.sidebar);
  return (
    <div className={` mt-[2px] w-full min-h-[100vh] `}>
      {/* intensity chart */}
      <div className={` `}>
        <Intensity />
      </div>

      <div className={`flex flex-col  w-full  mt-[2px]`}>
        <div className='  w-full'>
          <GeoStats />
        </div>
        <div className=' w-full'>
          <YearChanges />
        </div>
      </div>

      <div className={`${isSidebarOpen ? "w-full" : "lg:w-[calc(100vw-172px)]"} mt-[2px] h-fit`}>
        <TopData />
      </div>
    </div>
  )
}

export default HomePage