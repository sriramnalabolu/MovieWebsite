import {useNavigate} from "react-router-dom";
import {useContext} from "react";
import MovieContext from "../Context/MovieContext";
import {searchMovieService} from '../Services/ServiceApp.js';

export default function Header() {
    const navigate = useNavigate();
    const [movieList,setMovieList] = useContext(MovieContext);

    const viewHome = () => {
        navigate("/viewHome")
    }

    const viewMovies = () => {
        navigate("/viewMovies")
    }

    const Admin = () => {
        navigate("/admin")
    }

    const inputMovie = (event) => {
        console.log(event.target.value);
        searchMovieService(event.target.value)
                    .then((response) => {
                        setMovieList(response.data);
                    })
                    .catch((err) => {
                        console.log("Error Inside Catch: "+err)
                    },[]);
    }

    return (
        <div id="header">
            <h1 style={{ color: "#b30202" }}>MovieHub</h1>
            <div id="links">
                <h5>
                    <a href="viewHome" style={{color: "white"}}>Home</a>
                    <a href="viewMovies" style={{color: "white"}}>Telugu Movies</a>
                    <input onChange={inputMovie} id="searchBar"/>
                    <a href="Admin" style={{color: "white"}} id="admin">Admin</a>
                </h5>
            </div>
        </div>
    );
}