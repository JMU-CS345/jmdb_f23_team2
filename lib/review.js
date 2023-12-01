class Review {
    review;
    movie;
    constructor(movie, review) {
        this.review = review;
        this.movie = movie;
    }

    getReview() {
        return this.review;
    }

    getMovie() {
        return this.movie;
    }
}