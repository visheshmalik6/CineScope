import "../css/MovieCard.css";
import { useState } from "react";
import { useMovieContext } from "../contexts/MovieContext";
import MovieDetailModal from "./MovieDetailModal"; // 👈 ADD

function MovieCard({ movie }) {
  const { addToFavorites, removeFromFavorites, isFavorite } = useMovieContext();
  const favorite = isFavorite(movie.id);

  const [showModal, setShowModal] = useState(false); // 👈 ADD

  function onFavoriteClick(e) {
    e.preventDefault();
    e.stopPropagation(); // 👈 IMPORTANT
    if (favorite) {
      removeFromFavorites(movie.id);
    } else {
      addToFavorites(movie);
    }
  }

  return (
    <>
      <div className="movie-card" onClick={() => setShowModal(true)}>
        <div className="movie-poster">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
          <div className="movie-overlay">
            <button
              type="button"
              className={`favorite-btn ${favorite ? "active" : ""}`}
              onClick={onFavoriteClick}
            >
              ♥
            </button>
          </div>
        </div>

        <div className="movie-info">
          <h3>{movie.title}</h3>
          <p>{movie.release_date?.split("-")[0]}</p>
        </div>
      </div>

      {/* 👇 MODAL */}
      {showModal && (
        <MovieDetailModal
          movie={movie}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
}

export default MovieCard;
