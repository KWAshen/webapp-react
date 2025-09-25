import React from 'react';
import { useParams, Link } from 'react-router-dom';

// Dati dal database - sostituisci con chiamata API
const moviesDetailFromDB = {
    1: {
        id: 1,
        title: "Inception",
        director: "Christopher Nolan",
        genre: "Science Fiction",
        release_year: 2010,
        abstract: "A skilled thief is given a chance at redemption if he can successfully perform inception.",
        image: "inception.jpg",
        reviews: [
            { id: 1, name: "Alice", vote: 5, text: "A mind-bending masterpiece." },
            { id: 2, name: "Bob", vote: 4, text: "Great visuals and a compelling story." },
            { id: 3, name: "Charlie", vote: 3, text: "Confusing at times, but worth watching." }
        ]
    },
    2: {
        id: 2,
        title: "The Godfather",
        director: "Francis Ford Coppola",
        genre: "Crime",
        release_year: 1972,
        abstract: "The story of a powerful Italian-American crime family and their struggles.",
        image: "the_godfather.jpg",
        reviews: [
            { id: 4, name: "Diana", vote: 5, text: "The best crime movie ever made." },
            { id: 5, name: "Eve", vote: 5, text: "A cinematic classic that never gets old." },
            { id: 6, name: "Frank", vote: 4, text: "A bit slow-paced but very impactful." }
        ]
    },
    3: {
        id: 3,
        title: "Titanic",
        director: "James Cameron",
        genre: "Romance",
        release_year: 1997,
        abstract: "A romantic story set against the tragic sinking of the RMS Titanic.",
        image: "titanic.jpg",
        reviews: [
            { id: 7, name: "Grace", vote: 5, text: "A heartbreaking love story." },
            { id: 8, name: "Hank", vote: 4, text: "Beautiful visuals and a moving plot." },
            { id: 9, name: "Ivy", vote: 3, text: "A bit too melodramatic for my taste." }
        ]
    },
    4: {
        id: 4,
        title: "The Matrix",
        director: "The Wachowskis",
        genre: "Action",
        release_year: 1999,
        abstract: "A hacker discovers the truth about his reality and its role in the war against its controllers.",
        image: "matrix.jpg",
        reviews: [
            { id: 10, name: "Jack", vote: 5, text: "A revolutionary film in every sense." },
            { id: 11, name: "Karen", vote: 4, text: "Great action and a thought-provoking plot." },
            { id: 12, name: "Liam", vote: 4, text: "A unique take on reality and perception." }
        ]
    },
    5: {
        id: 5,
        title: "Interstellar",
        director: "Christopher Nolan",
        genre: "Science Fiction",
        release_year: 2014,
        abstract: "A team of explorers travels through a wormhole in space to save humanity.",
        image: "interstellar.jpg",
        reviews: [
            { id: 13, name: "Mia", vote: 5, text: "Visually stunning and emotionally resonant." },
            { id: 14, name: "Noah", vote: 3, text: "Interesting ideas but too long." },
            { id: 15, name: "Olivia", vote: 4, text: "A beautiful story about love and survival." }
        ]
    }
};

function MovieDetail() {
    const { id } = useParams();
    const movie = moviesDetailFromDB[id];

    if (!movie) {
        return (
            <div className="movie-detail">
                <div className="container">
                    <Link to="/" className="back-link">← Back to movies</Link>
                    <div className="error-message">
                        <h2>Movie not found</h2>
                        <p>The movie you're looking for doesn't exist.</p>
                    </div>
                </div>
            </div>
        );
    }

    const averageRating = movie.reviews.length > 0
        ? (movie.reviews.reduce((sum, review) => sum + review.vote, 0) / movie.reviews.length).toFixed(1)
        : 'N/A';

    return (
        <div className="movie-detail">
            <div className="container">
                <Link to="/" className="back-link">← Back to movies</Link>

                <div className="movie-hero">
                    <div className="movie-poster">
                        <img src={`/images/${movie.image}`} alt={movie.title} />
                    </div>

                    <div className="movie-info">
                        <div className="movie-meta">
                            <span className="year">{movie.release_year}</span>
                            <span className="genre">{movie.genre}</span>
                            <span className="rating">★ {averageRating}</span>
                        </div>

                        <h1 className="movie-title">{movie.title}</h1>
                        <p className="director">Directed by {movie.director}</p>

                        <div className="synopsis">
                            <h3>Synopsis</h3>
                            <p>{movie.abstract}</p>
                        </div>
                    </div>
                </div>

                <div className="reviews-section">
                    <h3>Reviews ({movie.reviews.length})</h3>
                    <div className="reviews-list">
                        {movie.reviews.map(review => (
                            <div key={review.id} className="review">
                                <div className="review-header">
                                    <h4>{review.name}</h4>
                                    <div className="stars">
                                        {'★'.repeat(review.vote)}{'☆'.repeat(5 - review.vote)}
                                    </div>
                                </div>
                                <p>{review.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieDetail;