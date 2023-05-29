import { useRef } from "react";

const AddMovie = () => {
    let moviename = useRef();
    let hero = useRef();
    let heroine = useRef();
    let director = useRef();
    let genre = useRef();
    let yor = useRef();
    let rating = useRef();
    let poster = useRef();
    let trailer = useRef();
    let synopsis = useRef();

    let handleAddMovie = (e)=>{
        e.preventDefault()

    let newMovie = {
        moviename: moviename.current.value,
        hero: hero.current.value,
        heroine: heroine.current.value,
        director: director.current.value,
        genre: genre.current.value,
        poster: poster.current.value,
        trailer: trailer.current.value,
        release: yor.current.value,
        rating: rating.current.value,
        synopsis : synopsis.current.value,
        languages : []
      };
      console.log(newMovie);    
      let options = document.getElementsByName("lang");
      for(let i=0;i<options.length;i++){
        if(options.checked==false){
            newMovie.languages.push(options[i].value)
        }
      }
      fetch("http://localhost:4000/movies" , 
      {
          method : "POST" ,
          headers : {"Content-Type" : "application/json"},
          body : JSON.stringify(newMovie)
      } 
      )
      .then(()=>{
          alert("new data added");
          window.location.reload();
      })

  }
    return ( 
        <div className="AddMovie">
            <form action="" onSubmit={handleAddMovie}>
            <input type="text" name="" id="" placeholder=" MovieName" ref={moviename} /><br />
           <input type="text" placeholder="Hero name" ref={hero} /><br />
           <input type="text" placeholder="Heroine name" ref={heroine} /><br />
           <input type="text" placeholder="Director name" ref={director} /><br />
           
          <fieldset>
            <legend>Select Languages</legend>
           <input type="checkbox" name="lang" id="1" value="Kannada"/><label for="1">Kannada</label>
           <input type="checkbox" name="lang" id="2" value="Telugu"/><label for="2">Telugu</label>
           <input type="checkbox" name="lang" id="3" value="Hindi"/><label for="3">Hindi</label>
           <input type="checkbox" name="lang" id="4" value="Tamil"/><label for="4">Tamil</label>
           <input type="checkbox" name="lang" id="5" value="Malayalam"/><label for="5">Malayalam</label>
           </fieldset>
           <input type="text" placeholder="Genre" ref={genre} /><br />
           <input type="text" placeholder="Poster" ref={poster} /><br />
           <input type="text" placeholder="Trailer" ref={trailer} /><br />
           <input type="number" min="1950" max="2024" placeholder="Release Year" ref={yor} /><br />
           <input type="text" placeholder="Rating" ref={rating} /><br />
           <textarea name="" id="" cols="30" rows="5" placeholder="Synopsis" ref={synopsis} ></textarea>
            <input type="submit" value="add"/>
           </form>
        </div>
     );
}
 
export default AddMovie;