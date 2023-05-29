import { useParams } from "react-router-dom";
import MoviesList from "./MoviesList";
import { useState, useEffect } from "react";

const Search = () => {
    let [movies, setMovies] = useState(null);
    let { key } = useParams();
    useEffect(() => {
        setTimeout(() => {
            fetch(" http://localhost:4000/movies")
                .then((res) => { return res.json() })
                .then((data) => {
                    let d = data.filter((movie) => { return (movie.moviename.toLowerCase().startsWith(key.toLowerCase()) )||
                                                            (movie.genre === key)
                    })
                    setMovies(d);
                })
        }, 3000)
    }, [key])
    return (
        <div>
            {movies && <MoviesList movies={movies} title="Search result" />}
        </div>
    );
}

export default Search;