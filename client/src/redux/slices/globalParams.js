import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    globalParameter: {
        end_year: [],
        topic: [],
        sector: [],
        region: [],
        pestle: [],
        country: [],
    }
}



const globalParamsSlice = createSlice({
    name: "globalParams",
    initialState,
    reducers: {
        toggleSidebar: (state, action) => {
            state.isSidebarOpen = !state.isSidebarOpen
        },
        clearData: (state, action) => {

        },


        changeEndYear: (state, action) => {

            if (state.globalParameter.end_year.includes(action.payload.data)) {
                state.globalParameter.end_year = state.globalParameter.end_year.filter(year => year !== action.payload.data);
            } else {
                state.globalParameter.end_year.push(action.payload.data);
            }
        },
        changeTopic: (state, action) => {
            if (state.globalParameter.topic.includes(action.payload.data)) {
                state.globalParameter.topic = state.globalParameter.topic.filter(topic => topic !== action.payload.data);
            } else {
                state.globalParameter.topic.push(action.payload.data);
            }
        },
        changeSector: (state, action) => {
            if (state.globalParameter.sector.includes(action.payload.data)) {
                state.globalParameter.sector = state.globalParameter.sector.filter(sector => sector !== action.payload.data);
            } else {
                state.globalParameter.sector.push(action.payload.data);
            }
        },
        changeRegion: (state, action) => {
            if (state.globalParameter.region.includes(action.payload.data)) {
                state.globalParameter.region = state.globalParameter.region.filter(region => region !== action.payload.data);
            } else {
                state.globalParameter.region.push(action.payload.data);
            }
        },
        changePestle: (state, action) => {
            if (state.globalParameter.pestle.includes(action.payload.data)) {
                state.globalParameter.pestle = state.globalParameter.pestle.filter(pestle => pestle !== action.payload.data);
            } else {
                state.globalParameter.pestle.push(action.payload.data);
            }
        },
        changeCountry: (state, action) => {
            if (state.globalParameter.country.includes(action.payload.data)) {
                state.globalParameter.country = state.globalParameter.country.filter(country => country !== action.payload.data);
            } else {
                state.globalParameter.country.push(action.payload.data);
            }
        },

        // 
        clearAllFilter:(state)=>{
            state.globalParameter.end_year = [];
            state.globalParameter.topic = [];
            state.globalParameter.sector = [];
            state.globalParameter.region = [];
            state.globalParameter.pestle = [];
            state.globalParameter.country = [];
        },
        // clear array 
        clearEndYear: (state) => { state.globalParameter.end_year = [] },
        clearTopic:(state)=>{state.globalParameter.topic = []},
        clearSector:(state)=>{state.globalParameter.sector = []},
        clearRegion:(state)=>{state.globalParameter.region = []},
        clearPestle:(state)=>{state.globalParameter.pestle = []},
        clearCountry:(state)=>{state.globalParameter.country = []},


    }
});

export const { 
    toggleSidebar, 

    changeEndYear, 
    changeTopic, 
    changeSector, 
    changeRegion, 
    changePestle, 
    changeCountry, 

    clearData, 
    clearEndYear,
    clearTopic,
    clearSector,
    clearRegion,
    clearPestle,
    clearCountry,
    clearAllFilter,

} = globalParamsSlice.actions;

export default globalParamsSlice.reducer