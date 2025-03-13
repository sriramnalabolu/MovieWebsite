import './App.css';
import HomePage from './Components/HomePage.js';
import ViewMovies from './Components/ViewMovies.js';
import Header from './Components/Header.js';
import Admin from './Components/Admin.js';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from "react-router";
import MovieContext from "./Context/MovieContext";
import React, {useState,useEffect} from "react";
import {AllMovies} from './Services/ServiceApp.js'
import EditMovie from './Components/EditMovie.js';
import AddMovie from './Components/AddMovie.js';

function App() {
       const [movie,setMovie]=useState([]);

       useEffect(() => {
                   AllMovies()
                       .then((response) => {
                           setMovie(response.data);
                       })
                       .catch((err) => {
                           console.log(err.message);
                       })
            },[]
       );

      return (
        <div className="App">
            <MovieContext.Provider value={[movie,setMovie]}>
                <Router>
                    <Header />
                    <div>
                        <Routes>
                            <Route path='/viewHome' element={<HomePage />} />
                            <Route path='/viewMovies' element={<ViewMovies />} />
                            <Route path='/admin' element={<Admin />} />
                            <Route path="/editMovie" element={<EditMovie />} />
                            <Route path='/addMovie' element={<AddMovie />} />
                        </Routes>
                    </div>
                </Router>
            </MovieContext.Provider>
        </div>
      );
}

export default App;
