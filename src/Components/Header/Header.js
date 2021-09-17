import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FAVORITE_MOVIE } from '../../helpers/RoutesURL';

const Header = () => {
    const { favoriteMovies } = useSelector(state => state.moviesReducer);

    return (
        <header class="text-gray-400 bg-gray-900 body-font">
            <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a class="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                    <img src="./images/nlogo.png" width="50px" />
                    <span class="ml-3 text-xl">Novies</span>
                </a>

                <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    {/* <a class="mr-5 hover:text-white">First Link</a> */}
                </nav>

                {
                    favoriteMovies && (
                        <Link to={FAVORITE_MOVIE}>
                            <button class="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
                                Favourite
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </button>
                        </Link>
                    )
                }
            </div>
        </header>
    );
}

export default Header;