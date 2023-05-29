import { useEffect, useState } from "react";
import MoviesList from "./MoviesList";

const Favorites = () => {

    let[favoriteMovies , setFav] = useState(null);

    useEffect(()=>{
        setFav(JSON.parse(localStorage.getItem("fav")))
    } , [])

    return ( 
    <div>
       {favoriteMovies &&
        <MoviesList movies={favoriteMovies} title="Favorite movies"/>}
    </div> );
}
 
export default Favorites;