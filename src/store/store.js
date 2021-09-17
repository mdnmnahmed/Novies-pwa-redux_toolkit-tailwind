import { configureStore } from '@reduxjs/toolkit';
import movieReducer from './reducer/movieReducer';

const store = configureStore({
    reducer: {
        moviesReducer: movieReducer
    },
});

export default store;