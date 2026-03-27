import React, { createContext, useState, useEffect } from "react";
import { initialMovies } from "../data/movies";

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState(() => {
    // Try to get movies from localStorage on initial load
    const savedMovies = localStorage.getItem("chill_movies");
    if (savedMovies) {
      try {
        return JSON.parse(savedMovies);
      } catch (e) {
        console.error("Gagal parse localStorage chill_movies:", e);
      }
    }
    return initialMovies;
  });

  // Save to localStorage whenever movies state changes
  useEffect(() => {
    localStorage.setItem("chill_movies", JSON.stringify(movies));
  }, [movies]);

  // CREATE
  const addMovie = (newMovie) => {
    const movieWithId = {
      ...newMovie,
      id: Date.now(), // Generate a simple unique ID
    };
    setMovies((prevMovies) => [movieWithId, ...prevMovies]);
  };

  // UPDATE
  const updateMovie = (id, updatedMovieStr) => {
    setMovies((prevMovies) =>
      prevMovies.map((movie) =>
        movie.id === id ? { ...movie, ...updatedMovieStr } : movie
      )
    );
  };

  // DELETE
  const deleteMovie = (id) => {
    setMovies((prevMovies) => prevMovies.filter((movie) => movie.id !== id));
  };

  return (
    <MovieContext.Provider
      value={{ movies, addMovie, updateMovie, deleteMovie }}
    >
      {children}
    </MovieContext.Provider>
  );
};
