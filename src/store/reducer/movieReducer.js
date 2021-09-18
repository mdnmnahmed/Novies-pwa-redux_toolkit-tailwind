import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import APIRequestHelper from '../../helpers/APIRequestHelper';

const initialState = {
    allMovies: '',
    selectedMovie: '',
    favoriteMovies: '',
}

export const fetchAllMovies = createAsyncThunk(
    'allMovies/fetchAllMovies',
    async () => {
        const response = await APIRequestHelper('get', '');
        return response.data.results;
    }
)

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
    extraReducers: {
        [fetchAllMovies.pending]: () => {
            // console.log('Fetching Movies')
        },
        [fetchAllMovies.fulfilled]: (state, { payload }) => {
            state.allMovies = payload
        },
        [fetchAllMovies.rejected]: () => {
            // console.log('Error Occured in Fetching Movies')
        },
    }
});


export const { addMovies, setSelectedMovie, addToFavorite } = movieSlice.actions;
export default movieSlice.reducer;