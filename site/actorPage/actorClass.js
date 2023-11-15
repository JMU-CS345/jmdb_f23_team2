

const picURL = 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2';


class Actor {

    constructor(data){
      this.data = data
    }
      
      getName(){
        return (data.results[0].name);
      }
    
      
      getScore(){
        return(data.results[0].popularity);
      }
      
      getImage(x, y){
        let img = createElement("img");
        img.attribute("src", picURL + data.results[0].profile_path);
      img.position(x, y);
      img.style("width", "110px");
        
      }
    
    
    }