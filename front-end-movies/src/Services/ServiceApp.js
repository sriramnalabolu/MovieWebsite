import axios from 'axios';

export function AllMovies() {
    return axios.get("http://localhost:9999/api/getMovies");
}

export function AddMovieService(movie) {
    return axios.post("http://localhost:9999/api/addMovie",movie);
}

export function deleteMovieService(id) {
    return axios.delete("http://localhost:9999/api/deleteMovie/"+id);
}

export function singleMovieService(id) {
    return axios.get("http://localhost:9999/api/getMovie/"+id);
}

export function editMovieService(movie) {
    console.log("Inside editMovieService");
    return axios.put("http://localhost:9999/api/updateMovie",movie);
}

export function searchMovieService(movie) {
    console.log("Inside searchMovieService"+movie);
    return axios.get("http://localhost:9999/api/searchMovie/"+movie);
}

export function loadToAnotherTable() {
    console.log("Inside loadToAnotherTable");
    return axios.post("http://localhost:9999/api/loadTable");
}