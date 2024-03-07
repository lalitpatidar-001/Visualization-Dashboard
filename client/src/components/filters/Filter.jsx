import React from 'react'
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';
import useAPI from '../../hooks/useAPI';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilterList, changeFilterName } from '../../redux/slices/chartSlice';
import FilterList from './utils/FilterList';

const Filter = ({ openedFilter, setOpenedFilter, icon, title, index, name }) => {
    const { filterName } = useSelector(state => state.chart);
    const dispatch = useDispatch();
    const { [name]: dynamicProperty } = useSelector(state => state.globalParams.globalParameter);


    const { data, loading, error } = useAPI(name === filterName ? `/dashboard/${filterName}` : null);
    console.log(`${filterName} data`, data)
    // if(name===filterName)
    // dispatch(changeFilterList({data:data}))

    const handleFilterClick = (index) => {
        if (openedFilter === index) {
            dispatch(changeFilterName({ data: null }))
            return setOpenedFilter(null)
        }
        setOpenedFilter(index)
        dispatch(changeFilterName({ data: name }))
    }

    return (
        <div >

        <div
                onClick={() => handleFilterClick(index)}
                className={`
        
        text-white flex  items-center gap-1 justify-center
        border-[1px] border-white rounded px-1 cursor-pointer relative
        ${openedFilter === index ? "bg-green-500 text-black" : "bg-transparent"}
        `}>

                <div className=''>{icon}</div>

                <span className='text-[12px] text-center'>{title}</span>

                <div>{
                    openedFilter === index ?
                        <ExpandLessOutlinedIcon />
                        :
                        <ExpandMoreOutlinedIcon />}
                </div>

            </div>
            {dynamicProperty?.length > 0 && <div className='absolute -top-1 -left-2 h-4 w-4 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm'>
                {dynamicProperty?.length}
            </div>}
            {name === filterName && <FilterList data={data} name={name} />}
        </div>

    )
}

export default Filter