import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import MoviesList from "./MoviesList";
import MovieDetail from "./MovieDetail";
import RelventMovies from "./RelaventMovies";

const Home = () => {
    let[movies,setMovies]=useState(null);
    let[error,setError]=useState(null);
    
       useEffect(()=>{
        setTimeout(()=>{
            fetch(" http://localhost:4000/movies")
            .then((res)=>{return res.json()})
            .then((data)=>{console.log(data);
                setMovies(data);})
                .catch((err)=>{setError(err.message)
                console.log(err.message);})
        },3000)
       },[])
    

    return ( 
        <div className="Home">

            <h1><i className='bx bxl-graphql'></i>Movies Hub</h1>
            {movies==null && <h1>Loading...</h1>}
            <h1>{error}</h1>
         {movies && <MoviesList movies={movies} title="All Movies"/>}
         {movies && <MoviesList movies={movies.filter((m)=>{return m.genre.includes("Action")})} title="Action Movies"/>}
</div>
     );
}
 
export default Home;