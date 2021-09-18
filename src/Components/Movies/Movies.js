import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import APIRequestHelper from '../../helpers/APIRequestHelper';
import { addMovies, fetchAllMovies } from '../../store/reducer/movieReducer';
import MovieCard from './MovieCard';

const Movies = () => {
    const dispatch = useDispatch();
    const { allMovies } = useSelector(state => state.moviesReducer);

    useEffect(() => {
        !allMovies && dispatch(fetchAllMovies());
    }, []);

    return (
        <section className="text-gray-400 bg-gray-900 body-font">
            <div className="container px-5 mx-auto">
                <div className="flex flex-wrap -m-4">
                    {
                        allMovies && allMovies.map(movieData => (
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