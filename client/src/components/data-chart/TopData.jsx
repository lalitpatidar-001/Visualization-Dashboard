import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useAPI from '../../hooks/useAPI';
import PieChart from '../charts/PieChart';
import MenuList from './utils/MenuList';
import { changeCatogoryAboutParam, changeCatogoryParam, changeRegionAboutParam, changeRegionParam, changeSubjectAboutParam, changeSubjectParam } from '../../redux/slices/topData';
import DonutChart from '../charts/DonutChart';
import PolarAreaChart from '../charts/PolarAreaChart';
import RadarChart from '../charts/RadarChart';

const TopData = () => {
    const dispatch = useDispatch();
    const { isSidebarOpen } = useSelector(state => state.sidebar);
    const [isRegionMenuOpen, setIsRegionMenuOpen] = useState(false);
    const [regionCharType, setIsRegionCharType] = useState("pie chart");
    const [isSubjectMenuOpen, setIsSubjectMenuOpen] = useState(false);
    const [subjectChartType, setIsSubjectChartType] = useState("donut chart");
    const [isCategoryMenuOpen, setIsCategoryMenuOpen] = useState(false);
    const [categoryChartType, setIsCategoryChartType] = useState("polar chart");

    const { regionParam, regionAboutParam } = useSelector(state => state.topData);
    const { data: regionData, loading: regionDataLoading, error: regionDataError } = useAPI(`/dashboard/top-data/${regionParam}/${regionAboutParam}`);

    const { subjectParam, subjectAboutParam } = useSelector(state => state.topData);
    const { data: subjectData, loading: subjectDataLoading, error: subjectDataError } = useAPI(`/dashboard/top-data/${subjectParam}/${subjectAboutParam}`);

    const { categoryParam, categoryAboutParam } = useSelector(state => state.topData);
    const { data: categoryData, loading: categoryDataLoading, error: categoryDataError } = useAPI(`/dashboard/top-data/${categoryParam}/${categoryAboutParam}`);

    const region_param_options = [
        "country",
        "region"
    ]
    const subject_param_options = [
        "sector",
        "topic"
    ]
    const category_param_options = [
        "source",
        "pestle"
    ]


    const about_options = [
        "intensity",
        "relevance",
        "likelihood",
    ]

   



    const regionComponents = {
        "pie chart": <PieChart data={regionData} params={regionParam} aboutParams={regionAboutParam} />,
        "donut chart": <DonutChart data={regionData} params={regionParam} aboutParams={regionAboutParam} />,
        "polar chart": <PolarAreaChart data={regionData} params={regionParam} aboutParams={regionAboutParam} />,
    }
    const subjectComponents = {
        "pie chart": <PieChart data={subjectData} params={subjectParam} aboutParams={subjectAboutParam} />,
        "donut chart": <DonutChart data={subjectData} params={subjectParam} aboutParams={subjectAboutParam} />,
        "polar chart": <PolarAreaChart data={subjectData} params={subjectParam} aboutParams={subjectAboutParam} />,
    }
    const categoryComponents = {
        "pie chart": <PieChart data={categoryData} params={categoryParam} aboutParams={categoryAboutParam} />,
        "donut chart": <DonutChart data={categoryData} params={categoryParam} aboutParams={categoryAboutParam} />,
        "polar chart": <PolarAreaChart data={categoryData} params={categoryParam} aboutParams={categoryAboutParam} />,
    }

    return (
        <div className={`flex lg:gap-[2px] gap-10 flex-col lg:flex-row
       lg:h-[55vh] h-fit lg:pb-0 pb-6  boder-white bg-[#052560] border overflow-y-hidden`}>
            <div className='flex-1 lg:border relative'>
                {regionComponents[regionCharType]}
                <MenuList
                    menuOpen={isRegionMenuOpen}
                    setMenuOpen={setIsRegionMenuOpen}
                    paramValue={regionParam}
                    aboutParamValue={regionAboutParam}
                    handleChangeAboutParam={(e) => dispatch(changeRegionAboutParam({ data: e.target.value }))}
                    handleChangeParam={(e) => dispatch(changeRegionParam({ data: e.target.value }))}
                    about_options={about_options}
                    params_options={region_param_options}
                    setChartType={setIsRegionCharType}
                    chartTypeValue={regionCharType}
                />
            </div>
            <div className='flex-1 lg:border relative'>
                {subjectComponents[subjectChartType]}
                <MenuList
                    menuOpen={isSubjectMenuOpen}
                    setMenuOpen={setIsSubjectMenuOpen}
                    paramValue={subjectParam}
                    aboutParamValue={subjectAboutParam}
                    handleChangeAboutParam={(e) => dispatch(changeSubjectAboutParam({ data: e.target.value }))}
                    handleChangeParam={(e) => dispatch(changeSubjectParam({ data: e.target.value }))}
                    about_options={about_options}
                    params_options={subject_param_options}
                    chartTypeValue={subjectChartType}
                    setChartType={setIsSubjectChartType}
                    chartTypeValue={subjectChartType}
                />
            </div>
            <div className='flex-1 lg:border relative'>
                {categoryComponents[categoryChartType]}
                <MenuList
                    menuOpen={isCategoryMenuOpen}
                    setMenuOpen={setIsCategoryMenuOpen}
                    paramValue={categoryParam}
                    aboutParamValue={categoryAboutParam}
                    handleChangeAboutParam={(e) => dispatch(changeCatogoryAboutParam({ data: e.target.value }))}
                    handleChangeParam={(e) => dispatch(changeCatogoryParam({ data: e.target.value }))}
                    about_options={about_options}
                    params_options={category_param_options}
                    chartTypeValue={categoryChartType}
                    setChartType={setIsCategoryChartType}
                    chartTypeValue={categoryChartType}
                />
            </div>
        </div>
    )
}

export default TopData