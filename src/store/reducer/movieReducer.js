import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    allMovies: [null],
    selectedMovie: '',
    favoriteMovies: [],
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
        },
        addToFavorite: (state, { payload }) => {
            state.favoriteMovies = [...state.favoriteMovies, payload]
        }
    },
});

export const { addMovies, setSelectedMovie, addToFavorite } = movieSlice.actions;
export default movieSlice.reducer;