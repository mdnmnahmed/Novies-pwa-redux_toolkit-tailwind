import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    allMovies: [null],
    selectedMovie: '',
}

const movieSlice = createSlice({
    name: "moviesSlice",
    initialState,
    reducers: {
        addMovies: (state, { payload }) => {
            state.allMovies = payload
        },
        setSelectedMovie: (state, { payload }) => {
            state.selectedMovie = payload
        }
    },
});

export const { addMovies, setSelectedMovie } = movieSlice.actions;
export default movieSlice.reducer;