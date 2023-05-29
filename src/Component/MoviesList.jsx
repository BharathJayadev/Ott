import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const MoviesList = ({ movies, title }) => {
    let [favId, setFavId] = useState(null);
    let [altered,setAltered] = useState(0);
    useEffect(() => {
        let fav = JSON.parse(localStorage.getItem("fav"));
        setFavId(fav.map((m) => { return m.id }))
    },[altered])
    let favMovie = (movie) => {
        if (localStorage.getItem("fav") == null) {
            localStorage.setItem("fav", "[]");
        }
        let fav = JSON.parse(localStorage.getItem("fav"));
        console.log(fav);
        fav.push(movie);
        localStorage.setItem("fav", JSON.stringify(fav));
        setAltered(altered+1);
    }
    let delFav = (id) => {
        let fav = JSON.parse(localStorage.getItem("fav"));
        fav = fav.filter((m) => {
            return m.id != id;
        })
        localStorage.setItem("fav", JSON.stringify(fav));
        setAltered(altered+1);
    }
    return (
        <div>

            <h1>{title}</h1>
            {movies && <div className="movies">
                {movies.map((movie) => {
                    return (
                        <div>
                            {favId && favId.includes(movie.id) ?  
                                <button onClick={() => { delFav(movie.id) }}>🖤 </button>:<button onClick={() => { favMovie(movie) }}>💙 </button>}
                            <Link to={`/MovieDetail/${movie.id}`}>
                                <div className="movie">
                                    <img className="img" src={movie.poster} width="250px" height="300px" />
                                    <h1 id="m-name">{movie.moviename}</h1>
                                    <h2>{movie.genre}</h2>
                                </div>

                            </Link>
                        </div>
                    )
                })}

            </div>}
        </div>);
}

export default MoviesList;