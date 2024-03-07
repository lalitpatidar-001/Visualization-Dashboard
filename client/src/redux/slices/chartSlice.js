import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    barDataParams:"sector",
    aboutParam:"intensity",
    isIntensityBarOpen:false,


    yearParams:"end_year",
    yearAboutParams:"intensity",

    geoParams:"country",
    geoAboutParams:"intensity",

    filterName:"",

    filterList:[],

    showDescription:false,
    descriptionOf:"",

}

const chartSlice =createSlice({
    name:"chart",
    initialState,
    reducers:{
        toggleIntensityBarOpen:(state)=>{
            state.isIntensityBarOpen = !state.isIntensityBarOpen
        },

        changeParams:(state,action)=>{
            state.barDataParams = action.payload.data
        },
        changeAboutParam:(state,action)=>{
            state.aboutParam = action.payload.data
        },

        changeGeoParams:(state,action)=>{
            state.geoParams = action.payload.data
        },
        changeGeoAboutParams:(state,action)=>{
            state.geoAboutParams = action.payload.data
        },

        changeYearParams:(state,action)=>{
            state.yearParams = action.payload.data
        },
        changeYearAboutParams:(state,action)=>{
            state.yearAboutParams = action.payload.data
        },
        changeFilterName :(state,action)=>{
            state.filterName = action.payload.data
        },
        changeFilterList :(state,action)=>{
            state.filterList = action.payload.data
        },

       


    }
});

export const {
    changeParams,
    changeAboutParam,
    toggleIntensityBarOpen,
    changeGeoParams,
    changeGeoAboutParams,
    changeYearParams,
    changeYearAboutParams,
    changeFilterName,
    changeFilterList,
            } = chartSlice.actions; 

export default chartSlice.reducer