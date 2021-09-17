import { configureStore } from '@reduxjs/toolkit';
import movieReducer from './reducer/movieReducer';

const store = configureStore({
    reducer: movieReducer,
});

export default store;