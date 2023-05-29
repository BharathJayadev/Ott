import { Navigate, useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import RelventMovies from "./RelaventMovies";
import { useNavigate } from "react-router-dom";
const MovieDetail = () => {
    let[movies,setMovies]=useState(null);
let[error,setError]=useState(null);
let{id}= useParams();
let navigate=useNavigate();

   useEffect(()=>{
    setTimeout(()=>{
        fetch(" http://localhost:4000/movies/"+id)
        .then((res)=>{return res.json()})
        .then((data)=>{console.log(data);
            setMovies(data);})
            .catch((err)=>{setError(err.message)
            console.log(err.message);})
    },3000)
   },[id])
   let deleteMovie=()=>{
    fetch("http://localhost:4000/movies/"+id,{method:"DELETE"})
    .then(()=>{
       alert(movies.moviename+" movie has been deleted")
        navigate("/")
    })
   }
    return (  
        <div> 
             {movies && 
                <div id="moviedetail">
                    <iframe src={movies.trailer}  width="800px" height="550px"></iframe><br />
                        <div id="description">
                            <img src={movies.poster} width="250px" height="300px"/>
                              <h1>{movies.moviename}</h1>
                              <h1>{movies.hero}</h1>
                              <p>{movies.languages.join("  ")}</p>
                              <button onClick={deleteMovie}>Delete</button>
                </div> 
             </div>}
             {movies && <RelventMovies genre={movies.genre}/>}
        </div>
    );
}
 
export default MovieDetail;

