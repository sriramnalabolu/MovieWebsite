package com.sample.service;

import com.sample.model.Movies;
import com.sample.repository.IMovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MovieService {

    @Autowired
    IMovieRepository repo;

    public List<Movies> getAllMovies() {
        return repo.findAllByOrderByIdDesc();
    }

    public Movies getMovie(Integer id) {
        Optional<Movies> optMovie = repo.findById(id);
        if(optMovie.isPresent()) {
            Movies movie = optMovie.get();
            return movie;
        }
        else{
            return null;
        }
    }

    public void addMovie(Movies movie) {
        repo.save(movie);
    }

    public void deleteMovie(Integer id) {
        repo.deleteById(id);
    }

}
