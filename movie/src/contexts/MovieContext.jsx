import { createContext, useState, useContext, useEffect } from "react";
import { db } from "../firebase";
import {
  collection,
  doc,
  setDoc,
  deleteDoc,
  getDocs
} from "firebase/firestore";
import { useAuth } from "./AuthContext";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
  const { user } = useAuth();
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🔄 Load favorites when user logs in
  useEffect(() => {
    if (!user) {
      setFavorites([]);
      setLoading(false);
      return;
    }

    async function fetchFavorites() {
      setLoading(true);
      try {
        const favRef = collection(db, "users", user.uid, "favorites");
        const snapshot = await getDocs(favRef);
        const favs = snapshot.docs.map(doc => doc.data());
        setFavorites(favs);
      } catch (err) {
        console.error("Failed to load favorites", err);
      } finally {
        setLoading(false);
      }
    }

    fetchFavorites();
  }, [user]);

  // ❤️ Add to favorites
  const addToFavorites = async (movie) => {
    if (!user) return;

    const favRef = doc(
      db,
      "users",
      user.uid,
      "favorites",
      movie.id.toString()
    );

    await setDoc(favRef, movie);
    setFavorites(prev => [...prev, movie]);
  };

  // 💔 Remove from favorites
  const removeFromFavorites = async (movieId) => {
    if (!user) return;

    const favRef = doc(
      db,
      "users",
      user.uid,
      "favorites",
      movieId.toString()
    );

    await deleteDoc(favRef);
    setFavorites(prev => prev.filter(movie => movie.id !== movieId));
  };

  const isFavorite = (movieId) => {
    return favorites.some(movie => movie.id === movieId);
  };

  const value = {
    favorites,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
    loading
  };

  return (
    <MovieContext.Provider value={value}>
      {children}
    </MovieContext.Provider>
  );
};
export default MovieContext;