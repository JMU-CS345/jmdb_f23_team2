class Rating {
    rating;
    movie;
    constructor(movie, rating) {
        this.movie = movie;
        this.rating = rating;
    }

    getRating() {
        return this.rating;
    }

    getMovie() {
        return this.movie;
    }
}