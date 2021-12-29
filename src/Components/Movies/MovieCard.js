import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { MOVIE_DETAILS } from '../../helpers/RoutesURL';
import { setSelectedMovie } from '../../store/reducer/movieReducer';

const MovieCard = ({ movieData }) => {

    const dispatch = useDispatch();
    const history = useHistory();

    return (
        <div className="p-4 md:w-1/3 cursor-pointer" onClick={() => {
            dispatch(setSelectedMovie(movieData));
            history.push(MOVIE_DETAILS);
        }}>
            <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${movieData.poster_path}`} alt="blog" />
                <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
                        {movieData.getReleaseDate()}
                    </h2>
                    <h1 className="title-font text-lg font-medium text-white mb-3">
                        {movieData.original_title || movieData.original_name}
                    </h1>
                    <p className="leading-relaxed mb-3 movie-description">
                        {movieData.overview}
                    </p>
                    <div className="flex items-center flex-wrap ">
                        <div className="text-400 inline-flex items-center md:mb-2 lg:mb-0 bg-gray-800 px-3 rounded-sm">
                            {movieData.media_type}
                        </div>
                        <span className="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-800">
                            <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                <circle cx="12" cy="12" r="3"></circle>
                            </svg>
                            {movieData.popularity}
                        </span>
                        <span className="text-gray-500 inline-flex items-center leading-none text-sm">
                            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-400" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                            </svg> &nbsp;
                            {movieData.vote_average}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieCard;