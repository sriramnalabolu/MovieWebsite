package com.sample.controller;

import com.sample.model.Movies;
import com.sample.service.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api")
public class MovieController {

    @Autowired
    MovieService service;

    @GetMapping("/getMovies")
    public ResponseEntity<List<Movies>> getAllMovies() {
        System.out.println("Inside All Movies");
        List<Movies> allMovies = service.getAllMovies();
        allMovies.forEach(System.out::println);
        return new ResponseEntity<List<Movies>>(allMovies, HttpStatus.OK);
    }

    @GetMapping("/getMovie/{id}")
    public ResponseEntity<Movies> getMovie(@PathVariable Integer id) {
        Movies movie = service.getMovie(id);
        System.out.println(movie);
        return new ResponseEntity<Movies>(movie, HttpStatus.OK);
    }

    @PostMapping("/addMovie")
    public ResponseEntity<String> addMovie(@RequestBody Movies movie) {
        System.out.println("Inside addMovie");
        service.addMovie(movie);
        return new ResponseEntity<String>("Movie Added", HttpStatus.OK);
    }

    @PutMapping("/updateMovie")
    public ResponseEntity<String> updateMovie(@RequestBody Movies movie) {
        System.out.println("Inside updateMovie");
        service.addMovie(movie);
        return new ResponseEntity<String>("Movie Updated", HttpStatus.OK);
    }

    @DeleteMapping("/deleteMovie/{id}")
    public ResponseEntity<String> deleteMovie(@PathVariable Integer id) {
        System.out.println("Inside deleteMovie");
        service.deleteMovie(id);
        return new ResponseEntity<String>("Movie Deleted with id: " + id, HttpStatus.OK);
    }

    @GetMapping("/searchMovie/")
    public ResponseEntity<?> searchMovie() {
        List<Movies> allMovies = service.getAllMovies();
        return new ResponseEntity<List<Movies>>(allMovies, HttpStatus.OK);
    }

    @GetMapping("/searchMovie/{name}")
    public ResponseEntity<?> searchMovie(@PathVariable("name") String movieName) {
        List<Movies> allMovies = service.getAllMovies();
        List<Movies> searchInpMovie = new ArrayList<Movies>();
        for (int i = 0; i < allMovies.size(); i++) {
            String mve = allMovies.get(i).getMovieName();
            if (mve.toLowerCase().contains(movieName.toLowerCase())) {
                System.out.println(mve);
                searchInpMovie.add(allMovies.get(i));
            } else {
                continue;
            }
        }
        if (searchInpMovie.size() > 0) {
            return new ResponseEntity<List<Movies>>(searchInpMovie, HttpStatus.OK);
        } else {
            return new ResponseEntity<List<Movies>>(new ArrayList<>(), HttpStatus.OK);
        }
    }

    @PostMapping("/loadTable")
    public ResponseEntity<?> loadToAnotherTable() {
        return new ResponseEntity<String>("Success",HttpStatus.OK);
    }

}
