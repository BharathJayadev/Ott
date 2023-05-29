import { useState,useEffect, Component } from "react";
import MoviesList from "./MoviesList";

const RelventMovies = ({genre}) => {
    let[movies,setMovies]=useState(null);
    let[error,setError]=useState(null);
       useEffect(()=>{
        setTimeout(()=>{
            fetch(" http://localhost:4000/movies/")
            .then((res)=>{return res.json()})
            .then((data)=>{console.log(data);
                setMovies(data);})
                .catch((err)=>{setError(err.message)
                console.log(err.message);})
        },3000)
       },[])
       
      
    return (  
        
    <div className="Relevent-movies">
        
        {movies && 
        <MoviesList 
        movies={movies.filter( (m)=>{ return m.genre.includes(genre) })} 
        title="Relevant Movies"/>  }
    </div>

    );
}
 
export default RelventMovies;