import { useDispatch, useSelector } from 'react-redux'
import { changeCountry, changeEndYear, changePestle, changeRegion, changeSector, changeTopic, clearCountry, clearData, clearEndYear, clearPestle, clearRegion, clearSector, clearTopic } from '../../../redux/slices/globalParams';

const FilterList = ({ data, name }) => {
    const { filterList } = useSelector(state => state.chart);
    const dispatch = useDispatch();

    const { globalParameter } = useSelector(state => state.globalParams);
    const { [name]: dynamicProperty } = useSelector(state => state.globalParams.globalParameter);



    const handleCheckBoxClick = (e) => {

        switch (name) {
            case "end_year":
                return dispatch(changeEndYear({ data: e.target.value }));
            case "topic":
                return dispatch(changeTopic({ data: e.target.value }));
            case "sector":
                return dispatch(changeSector({ data: e.target.value }));
            case "region":
                return dispatch(changeRegion({ data: e.target.value }));
            case "pestle":
                return dispatch(changePestle({ data: e.target.value }));
            case "country":
                return dispatch(changeCountry({ data: e.target.value }));
            default:
                return
        }
    }

    const handleClearCheckboxes = (name) => {
        console.log("clear data ", name)
        switch (name) {
            case "end_year":
                return dispatch(clearEndYear());
            case "topic":
                return dispatch(clearTopic());
            case "sector":
                return dispatch(clearSector());
            case "region":
                return dispatch(clearRegion());
            case "pestle":
                return dispatch(clearPestle());
            case "country":
                return dispatch(clearCountry());
            default:
                return
        }
    }

    return (
        <div className='bg-white h-[60vh] overflow-y-auto md:p-3 p-2 flex flex-col md:gap-2 z-40 absolute top-[30px] md:right-0 right-4'>
                <div
                    onClick={() => handleClearCheckboxes(name)}
                    className=' h-fit md:fixed   md:top-[42px]  z-50 bg-white md:px-1 md:py-1 cursor-pointer'><button className='text-blue-500'>Clear</button>
                </div>
            
            <div className='flex flex-col gap-2 md:mt-4'>
                {

                    data?.map((item, index) => (
                        <div key={index}>
                            {
                                item === "" ?
                                    <div className='hidden' /> :
                                    <div className='flex items-center gap-2'>
                                        <input id={name} type='checkbox' className='mt-1'
                                            value={item}
                                            checked={dynamicProperty.includes(item.toString())}
                                            onChange={handleCheckBoxClick}
                                        />
                                        <label >
                                            <span className='text-black'>{item}</span>
                                        </label>
                                    </div>
                            }
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default FilterList