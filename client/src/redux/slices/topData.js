import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    regionParam: "country", // country / region / 
    regionAboutParam: "intensity",

    subjectParam: "sector",
    subjectAboutParam: "intensity",

    categoryParam: "source",  // or pestle
    categoryAboutParam: "intensity",



}

const topDataSlice = createSlice({
    name: "topdata",
    initialState,
    reducers: {
        changeRegionParam: (state, action) => {
            state.regionParam = action.payload.data;
        },
        changeRegionAboutParam: (state, action) => {
            state.regionAboutParam = action.payload.data;
        },

        changeSubjectParam: (state, action) => {
            state.subjectParam = action.payload.data;
        },
        changeSubjectAboutParam: (state, action) => {
            state.subjectAboutParam = action.payload.data;
        },

        changeCatogoryParam: (state, action) => {
            state.categoryParam = action.payload.data;
        },
        changeCatogoryAboutParam: (state, action) => {
            state.categoryAboutParam = action.payload.data;
        },


    }
});

export const { 
    changeRegionParam,
    changeRegionAboutParam,
    changeSubjectParam,
    changeSubjectAboutParam,
    changeCatogoryParam,
    changeCatogoryAboutParam } = topDataSlice.actions;

export default topDataSlice.reducer