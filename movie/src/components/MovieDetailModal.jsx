import { useEffect, useState } from "react";
import "../css/MovieDetailModal.css";
import { API_KEY, BASE_URL } from "../services/api";

const IMG_BASE = "https://image.tmdb.org/t/p/w500";
const LOGO_BASE = "https://image.tmdb.org/t/p/w92";

export default function MovieDetailModal({ movie, onClose }) {
  const [providers, setProviders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Add class to body for scroll lock
    document.body.classList.add('modal-open');
    fetchWatchProviders();
    
    return () => {
      // Remove class when modal closes
      document.body.classList.remove('modal-open');
    };
  }, [movie.id]);

  async function fetchWatchProviders() {
    setLoading(true);
    try {
      const res = await fetch(
        `${BASE_URL}/movie/${movie.id}/watch/providers?api_key=${API_KEY}`
      );
      const data = await res.json();

      const countryData = data.results?.IN || data.results?.US;
      const availableProviders = 
        countryData?.flatrate || 
        countryData?.buy || 
        countryData?.rent || 
        [];
      
      setProviders(availableProviders);
    } catch (err) {
      console.error("Failed to fetch providers", err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>✕</button>

        <div className="modal-body">
          {movie.poster_path && (
            <img
              src={IMG_BASE + movie.poster_path}
              alt={movie.title}
              className="modal-poster"
            />
          )}

          <div className="modal-info">
            <h2>{movie.title}</h2>
            <p>⭐ {movie.vote_average?.toFixed(1)}</p>
            <p className="overview">{movie.overview}</p>
            <p>📅 {movie.release_date}</p>

            <div className="watch-section">
              <h3>Where to Watch</h3>

              {loading && <p>Loading platforms...</p>}

              {!loading && providers.length === 0 && (
                <p className="no-watch">Not available for streaming in your region</p>
              )}

              {!loading && providers.length > 0 && (
                <div className="providers">
                  {providers.map((p) => (
                    <div key={p.provider_id} className="provider">
                      <img
                        src={LOGO_BASE + p.logo_path}
                        alt={p.provider_name}
                      />
                      <span>{p.provider_name}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}