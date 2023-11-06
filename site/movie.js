const imgUrl = 'https://www.themoviedb.org/t/p/w1280'

class Movie {

constructor(data){
  this.data = data
}
  
  getName(){
    return (data.results[0].original_title);
  }
  getDate(){
    return(data.results[0].release_date);
  }
  getAbout(){
    return(data.results[0].overview);
  }
  
  getPopScore(){
    return(data.results[0].popularity);
  }
  
  getImage(x, y){
    let img = createElement("img");
    img.attribute("src", imgUrl + data.results[0].poster_path);
  img.position(x, y);
  img.style("width", "110px");
    
  }


}