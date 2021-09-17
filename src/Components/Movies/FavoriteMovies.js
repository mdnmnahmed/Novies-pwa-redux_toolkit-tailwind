import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { INDEX } from '../../helpers/RoutesURL';
import MovieCard from './MovieCard';

const FavoriteMovies = () => {
    const { favoriteMovies } = useSelector(state => state.moviesReducer);
    const history = useHistory();

    useEffect(() => {
        !favoriteMovies && history.push(INDEX);
    }, []);

    return (
        <section class="text-gray-400 bg-gray-900 body-font">
            <div class="container px-5 mx-auto">
                <div class="flex flex-wrap -m-4">
                    {
                        favoriteMovies && favoriteMovies.map(movieData => (
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

export default FavoriteMovies;