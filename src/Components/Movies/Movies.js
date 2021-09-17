import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import APIRequestHelper from '../../helpers/APIRequestHelper';
import { addMovies } from '../../store/reducer/movieReducer';
import MovieCard from './MovieCard';

const Movies = () => {

    const dispatch = useDispatch();
    const { allMovies } = useSelector(state => state.moviesReducer);

    const fetchAllMovies = async () => {
        try {
            const response = await APIRequestHelper('get', '');
            console.log('response: ', response);
            dispatch(addMovies(response.data.results));
        } catch (error) {
            console.log('Error while API data fetching.');
        }
    }

    useEffect(() => {
        fetchAllMovies();
    }, []);

    return (
        <section class="text-gray-400 bg-gray-900 body-font">
            <div class="container px-5 mx-auto">
                <div class="flex flex-wrap -m-4">
                    {
                        allMovies != null && allMovies.map(movieData => (
                            movieData && (
                                <MovieCard
                                    key={movieData.id}
                                    movieData={movieData}
                                />
                            )
                        ))
                    }
                </div>
            </div>
        </section>
    );
}

export default Movies;