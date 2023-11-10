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
    img.position(x, y); 
    img.style("width", "110px");
  }


}

function loadMovie(movieName) {
  let myMovie;
  data = loadJSON(`https://api.themoviedb.org/3/search/movie?query=${movieName}&api_key=`+ TMDB_API_KEY, function(data){
    myMovie = new Movie(data);
  } );
  return myMovie;
}