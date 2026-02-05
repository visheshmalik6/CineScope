import { Link } from "react-router-dom";
import "../css/Landing.css";

function Landing() {
  return (
    <div className="landing">
      <div className="hero">
        <h1>🎬 CineScope</h1>
        <p className="tagline">
          Discover movies. Save favorites.  
          Know exactly where to watch.
        </p>

        <div className="cta-buttons">
          <Link to="/login" className="btn primary">Login</Link>
          <Link to="/register" className="btn secondary">Register</Link>
        </div>
      </div>

      <div className="features">
        <div className="feature">
          <h3>🎥 Discover</h3>
          <p>Explore trending and popular movies in real time.</p>
        </div>

        <div className="feature">
          <h3>🔍 Search</h3>
          <p>Find any movie instantly with smart search.</p>
        </div>

        <div className="feature">
          <h3>❤️ Favorites</h3>
          <p>Save movies to your personal watchlist.</p>
        </div>

        <div className="feature">
          <h3>📺 Where to Watch</h3>
          <p>See legal streaming platforms for each movie.</p>
        </div>
      </div>
    </div>
  );
}
export default Landing;