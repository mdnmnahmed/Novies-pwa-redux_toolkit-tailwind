import React from 'react';

const MovieCard = ({ movieData }) => {
    return (
        <div class="p-4 md:w-1/3">
            <div class="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
                <img class="lg:h-48 md:h-36 w-full object-cover object-center" src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${movieData.poster_path}`} alt="blog" />
                <div class="p-6">
                    <h2 class="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
                        {movieData.release_date || movieData.first_air_date}
                    </h2>
                    <h1 class="title-font text-lg font-medium text-white mb-3">
                        {movieData.original_title || movieData.original_name}
                    </h1>
                    <p class="leading-relaxed mb-3 movie-description">
                        {movieData.overview}
                    </p>
                    <div class="flex items-center flex-wrap ">
                        <div className="text-400 inline-flex items-center md:mb-2 lg:mb-0 bg-gray-800 px-3 rounded-sm">
                            {movieData.media_type}
                        </div>
                        <span class="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-800">
                            <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                <circle cx="12" cy="12" r="3"></circle>
                            </svg>
                            {movieData.popularity}
                        </span>
                        <span class="text-gray-500 inline-flex items-center leading-none text-sm">
                            <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                            </svg>
                            {movieData.vote_average}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieCard;