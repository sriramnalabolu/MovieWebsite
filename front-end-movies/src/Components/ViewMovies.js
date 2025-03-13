import {useEffect,useContext} from 'react';
import MovieContext from "../Context/MovieContext";

export default function ViewMovies() {
    const [movieList,setMovieList] = useContext(MovieContext);

    useEffect(() => {
       console.log(movieList);
    },[movieList]);

    return (
        <div id="movies">
            {movieList.map((movie) => (
                <div id="movie">
                    <a href={movie.movieVideoLink} target="_blank">
                        <img src={movie.movieImgLink} alt="Movie Pic"/>
                    </a>
                    <b style={{color: "white"}}><p>{movie.movieName}</p></b>
                </div>
            ))}
        </div>
    );
}