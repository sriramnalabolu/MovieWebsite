package com.sample.repository;

import com.sample.model.Movies;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IMovieRepository extends JpaRepository<Movies,Integer> {
    public List<Movies> findAllByOrderByIdDesc();
}
