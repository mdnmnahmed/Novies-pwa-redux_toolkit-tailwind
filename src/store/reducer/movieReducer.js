import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    allMovies: [null]
}

const movieSlice = createSlice({
    name: "moviesSlice",
    initialState,
    reducers: {
        addMovies: (state, { payload }) => {
            state.allMovies = payload
        },
    },
});

export const { addMovies } = movieSlice.actions;
export default movieSlice.reducer;