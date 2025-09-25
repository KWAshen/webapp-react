import React from 'react';
import { Link } from 'react-router-dom';

const moviesFromDB = [
    {
        id: 1,
        title: "Inception",
        director: "Christopher Nolan",
        genre: "Science Fiction",
        release_year: 2010,
        abstract: "A skilled thief is given a chance at redemption if he can successfully perform inception.",
        image: "inception.jpg"
    },
    {
        id: 2,
        title: "The Godfather",
        director: "Francis Ford Coppola",
        genre: "Crime",
        release_year: 1972,
        abstract: "The story of a powerful Italian-American crime family and their struggles.",
        image: "the_godfather.jpg"
    },
    {
        id: 3,
        title: "Titanic",
        director: "James Cameron",
        genre: "Romance",
        release_year: 1997,
        abstract: "A romantic story set against the tragic sinking of the RMS Titanic.",
        image: "titanic.jpg"
    },
    {
        id: 4,
        title: "The Matrix",
        director: "The Wachowskis",
        genre: "Action",
        release_year: 1999,
        abstract: "A hacker discovers the truth about his reality and his role in the war against its controllers.",
        image: "matrix.jpg"
    },
    {
        id: 5,
        title: "Interstellar",
        director: "Christopher Nolan",
        genre: "Science Fiction",
        release_year: 2014,
        abstract: "A team of explorers travels through a wormhole in space to save humanity.",
        image: "interstellar.jpg"
    }
];

function Home() {
    return (
        <div className="home">
            <div className="container">
                <div className="page-header">
                    <h1>Movie Collection</h1>
                    <p>Discover and explore our curated movie selection</p>
                </div>

                <div className="movies-grid">
                    {moviesFromDB.map(movie => (
                        <Link key={movie.id} to={`/movie/${movie.id}`} className="movie-card">
                            <div className="movie-image">
                                <img src={`/images/${movie.image}`} alt={movie.title} />
                            </div>
                            <div className="movie-info">
                                <h3 className="movie-title">{movie.title}</h3>
                                <p className="movie-year">{movie.release_year}</p>
                                <p className="movie-director">{movie.director}</p>
                                <span className="movie-genre">{movie.genre}</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home;