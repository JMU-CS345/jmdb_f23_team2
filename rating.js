class Rating {
    rating;
    movie;
    constructor(movie, rating) {
        this.rating = rating;
    }

    getRating() {
        return this.rating;
    }

    setRating(rating) {
        this.rating = rating;
    }

    getMovie() {
        return this.movie;
    }
}