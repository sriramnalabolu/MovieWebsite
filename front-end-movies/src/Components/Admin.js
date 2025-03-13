import {useEffect,useContext} from "react";
import {useNavigate} from "react-router-dom";
import MovieContext from "../Context/MovieContext";
import {deleteMovieService,AllMovies} from "../Services/ServiceApp";

export default function Admin() {
    const [movieList,setMovieList] = useContext(MovieContext);
    const navigate = useNavigate();

    useEffect(() => {
        AllMovies()
            .then((response) => {
                setMovieList(response.data);
            })
            .catch((err) => {
                console.log(err.message);
            })
        },[]
    );

    const editMovie = (id) => {
        navigate("/editMovie", { state: { id } });
    };

    const addMovie = () => {
        navigate("/addMovie");
    };

    const deleteMovie = (id) => {
        deleteMovieService(id)
            .then((response) => {
                console.log(response.data);
            })
            .catch((err) => {
                console.log(err);
            })
    };

    return (
            <div id="adminpage">
                <button onClick={()=>{addMovie();}} id="addButton">ADD</button>
                <table style={{color:"white"}}>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Image Link</th>
                            <th>Video Link</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {movieList.map((movie) => (
                            <tr key={movie.id}>
                                <td>{movie.id}</td>
                                <td>{movie.movieName}</td>
                                <td><img src={movie.movieImgLink} id="imgLink" /></td>
                                <td><a href={movie.movieVideoLink}>{movie.movieVideoLink}</a></td>
                                <td>
                                    <button onClick={()=>{editMovie(movie.id);}}>EDIT</button>
                                    <br />
                                    <button onClick={()=>{deleteMovie(movie.id);}}>DELETE</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
}