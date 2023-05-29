import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
   let[key,setKey]=useState("");
    return (
        <nav>
            <div id="logo">
             <Link to='/'>  <i className='bx bxs-movie-play'>Movies</i></Link>
            </div>
            <div id="search-bar">
                <input type="search" placeholder="       Search for movies" value={key} onChange={(e)=>{setKey(e.target.value);}}/>
               <Link to={`/search/${key}`}> <button>search</button></Link>
            </div>
            <Link to='/fav'><button>Favourites</button></Link>
            <div id="add-movie">
               <Link to="/AddMovie">Add Movie</Link>
            </div>
            <div id="login-btn">
                <Link to="/login">Login</Link>
            </div>
        </nav>
      );
}
 
export default Navbar;
