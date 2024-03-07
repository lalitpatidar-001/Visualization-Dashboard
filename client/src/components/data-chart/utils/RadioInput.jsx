import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeParams } from '../../../redux/slices/chartSlice';

const RadioInput = ({ title }) => {
    const { barDataParams } = useSelector(state => state.chart);
    const dispatch = useDispatch();

    const handleParamChange = (e) => {
        dispatch(changeParams({ data: e.target.value }));
    };

    return (
        <label
            htmlFor={title}
            className='flex items-center gap-1 p-[2px] border shadow-sm bg-gray-300 rounded cursor-pointer'
        >
            {title}
            <input
                id={title}
                className='mt-1'
                value={title}
                onChange={(e) => handleParamChange(e)}
                checked={barDataParams === title}
                type='radio'
                name="params"
            />
        </label>
    );
};

export default RadioInput;
