import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    movies: []
}

const movieSlice = createSlice({
    name: "moviesSlice",
    initialState,
    reducers: {
        addMovies: (state, { payload }) => {
            state.movies = payload
        }
    },
});

export const getAllMovies = (state) => state.moviesSlice.movies
export const { addMovies } = movieSlice.actions;
export default movieSlice.reducer;