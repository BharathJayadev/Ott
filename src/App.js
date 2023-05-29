
import './App.css';
import Home from './Component/Homepage';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from './Component/Navbar';
import AddMovie from './Component/AddMovie';
import MovieDetail from './Component/MovieDetail';
import Login from './Component/Login';
import Signup from './Component/Signup';
import Favorites from './Component/Favourite';
import Search from './Component/Search';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/AddMovie' element={<AddMovie/>}/>
        <Route path='/MovieDetail/:id' element={<MovieDetail/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/fav' element={<Favorites/>}/>
        <Route path='/search/:key' element={<Search/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
