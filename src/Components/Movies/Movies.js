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
            dispatch(addMovies(response.data.results));
        } catch (error) {
            console.log('Error while API data fetching.');
        }
    }

    useEffect(() => {
        fetchAllMovies();
    }, []);

    return (
        <section className="text-gray-400 bg-gray-900 body-font">
            <div className="container px-5 mx-auto">
                <div className="flex flex-wrap -m-4">
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