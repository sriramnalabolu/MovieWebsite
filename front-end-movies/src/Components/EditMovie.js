import {useNavigate,useLocation} from 'react-router-dom';
import {useEffect,useState} from 'react';
import {singleMovieService,editMovieService} from "../Services/ServiceApp";

export default function EditMovie() {
    const navigate = useNavigate();
    const [movie,setMovie]=useState({
            id: 0,
            movieName: "",
            movieImgLink: "",
            movieVideoLink: ""
    });
    const location = useLocation();
    const id = location.state?.id;

    useEffect(() => {
        if(id) {
            singleMovieService(id)
                    .then((response) => {
                        console.log("use effect");
                        console.log(response.data);
                        setMovie(response.data);
                    })
                    .catch((err) => {
                        console.log(err);
                    })
        }
    },[id]);

    const editMovie = (e) => {
        e.preventDefault();
        editMovieService(movie)
            .then((response) => {
                navigate("/admin");
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const changeMovieName = (event) => {
        setMovie({...movie,movieName: event.target.value});
        console.log(movie);
    }

    const changeMovieImage = (event) => {
        console.log(event.target.value);
        setMovie({...movie,movieImgLink: event.target.value});
        console.log(movie);
    }

    const changeMovieVideo = (event) => {
        setMovie({...movie,movieVideoLink: event.target.value});
        console.log(movie);
    }

    return (
        <div id="editMovie">
            <form>
                <div>
                    <label>Movie Name: </label>
                    <input value={movie.movieName} onChange={changeMovieName}/>
                </div>
                <div>
                   <label>Movie Image Link: </label>
                   <input value={movie.movieImgLink} onChange={changeMovieImage}/>
                </div>
                <div>
                    <label>Movie Video Link: </label>
                    <input value={movie.movieVideoLink} onChange={changeMovieVideo}/>
                </div>
                <button type="submit" onClick={()=>{editMovie();}}>Edit</button>
            </form>
        </div>
    )
}