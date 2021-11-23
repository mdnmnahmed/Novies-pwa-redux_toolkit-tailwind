class MovieModel {
    constructor(movie) {
        if (!movie.id) {
            throw new Error("Missing required values");
        }
        this.id = movie.id;
        this.original_name = movie.original_name || movie.original_title;
        this.overview = movie.overview;
        this.release_date = movie.release_date || movie.first_air_date;
        this.media_type = movie.media_type;
        this.popularity = movie.popularity;
        this.vote_average = movie.vote_average;
        this.poster_path = movie.poster_path;
        this.backdrop_path = movie.backdrop_path;
    }

    getReleaseDate() {
        return this.release_date;
    }
}

export default MovieModel;