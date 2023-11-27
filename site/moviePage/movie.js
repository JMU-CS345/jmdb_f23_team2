const imgUrl = 'https://www.themoviedb.org/t/p/w1280'

class Movie {
  constructor(data) {
    this.data = data
  }

  getName() {
    return (this.data.results[0].original_title);
  }
  getDate() {
    return (this.data.results[0].release_date);
  }
  getAbout() {
    return (this.data.results[0].overview);
  }

  getPopScore() {
    return (this.data.results[0].popularity);
  }

  getImage(x, y) {
    let img = createElement("img");
    img.attribute("src", imgUrl + this.data.results[0].poster_path);
    img.position(x - img.width, y); 
    img.style("width", "80px");
    img.mousePressed(function(){loadMoviePage(data.results[0].id);});
  }
  getBackground(x, y) {
    let img = createElement("img");
    img.attribute("src", imgUrl + this.data.results[0].poster_path);
    //img.opacity(0.5);
    img.style("width", "400px");
    img.position((x/2) - width * 2, 0); 
  }

  getBigImage(x, y) {
    let img = createElement("img");
    img.attribute("src", imgUrl + this.data.results[0].poster_path);
    img.style("width", "250px");
    img.position((x/2) - width * 3, 105); 
  }

}

function loadMovie(movieName, x, y) {
  let myMovie;
  data = loadJSON(`https://api.themoviedb.org/3/search/movie?query=${movieName}&api_key=` + TMDB_API_KEY, function (data) {
    myMovie = new Movie(data);
    myMovie.getImage(x, y);
  });
}

function loadMoviePage(id) {
  window.location.replace(`../moviePage/moviePage.html?data=${id}`);
}