import {useNavigate} from "react-router-dom";
import {useState,useContext} from "react";
import MovieContext from "../Context/MovieContext";
import {AddMovieService} from "../Services/ServiceApp"

export default function AddMovie() {
    const navigate = useNavigate();
    const [movieList,setMovieList] = useContext(MovieContext);
    const [addedMovie,setAddedMovie]=useState("No");

    const [movie,setMovie]=useState({
        movieName: "",
        movieImgLink: "",
        movieVideoLink: ""
    });

    const addMovie = (movie) => {
        setAddedMovie("No");
        AddMovieService(movie)
            .then((response) => {
                setAddedMovie("Yes");
                navigate("/admin");
            })
            .catch((err) => {
                console.log("Inside Catch: "+err)
            },[]);
    }

    const changeMovieName = (event) => {
        setMovie({...movie,movieName: event.target.value});
        console.log(movie);
    }

    const changeMovieImg = (event) => {
        setMovie({...movie,movieImgLink: event.target.value});
        console.log(movie);
    }

    const changeMovieVideo = (event) => {
        setMovie({...movie,movieVideoLink: event.target.value});
        console.log(movie);
    }

    return (
        <div id="form">
            <form action={addMovie}>
                {addedMovie==="Yes"?<h1>Movie Added Successfully</h1>:null}
                <div>
                    <label>Movie Name: </label>
                    <input name="movieName" onChange={changeMovieName}/>
                </div>
                <div>
                    <label>Movie Image Link</label>
                    <input name="movieImgLink" onChange={changeMovieImg}/>
                </div>
                <div>
                    <label>Movie Video Link</label>
                    <input name="movieVideoLink" onChange={changeMovieVideo}/>
                </div>
                <button type="submit" onClick={()=> {addMovie(movie)}}>Add Movie</button>
            </form>
        </div>
    );
}