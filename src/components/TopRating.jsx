import { useState, useEffect, useContext } from "react";
import "./TopRating.css";
import data from "../data/top-rating.js";
import { MovieContext } from "../context/MovieContext";
import Caraousel from "./atomic/Carousel.jsx";
import CardLabel from "./atomic/CardLabel.jsx";

function TopRating() {
  const { movies, deleteMovie } = useContext(MovieContext);
  
  // Filter movies that are top rated
  const topRatedMovies = movies.filter(movie => movie.isTopRated);

  // MERGE original static data with new data from Admin
  const mergedMovies = [...data, ...topRatedMovies];

  const [myList, setMyList] = useState(() => {
    const saved = localStorage.getItem("myList");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("myList", JSON.stringify(myList));
  }, [myList]);

  const tambahKeDaftar = (item) => {
    const sudahAda = myList.find((f) => f.id === item.id);
    if (sudahAda) {
      alert("Film sudah ada di daftar!");
      return;
    }
    setMyList((prev) => [...prev, item]);
    alert("Film ditambahkan ke daftar!");
  };

  const cardItems = mergedMovies.map((item) => {
    return (
      <div className="card top-rating" key={item.id}>
        <div className="card__img-container">
          <img src={item.coverUrl || item.src} alt={item.title || item.alt} className="card__top-rating-img" />
          {item.isNewEpisode && (
            <CardLabel className={"new--episode"}>Episode Baru</CardLabel>
          )}
          {item.isTopTen && (
            <CardLabel className={"top-ten"}>
              <span>Top</span> <span>10</span>
            </CardLabel>
          )}
        </div>
        
        <div className="card__details">
          <div className="card__actions">
            <div className="card__actions-left">
              <button className="card__btn-play" title="Mainkan">
                <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M8 5v14l11-7z" /></svg>
              </button>
              <button className="card__btn-icon" onClick={() => tambahKeDaftar(item)} title="Tambah ke Daftar">
                <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z" /></svg>
              </button>
            </div>
            <div className="card__actions-right">
              <button className="card__btn-icon" onClick={() => deleteMovie(item.id)} title="Hapus">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16"><path d="M6 9l6 6 6-6" /></svg>
              </button>
            </div>
          </div>
          <div className="card__metadata">
            <span className="metadata-age">16+</span>
            <span className="metadata-eps">16 Episode</span>
          </div>
          <div className="card__genres">
            Misteri <span className="dot">&bull;</span> Kriminal <span className="dot">&bull;</span> Fantasi
          </div>
        </div>
      </div>
    );
  });
  
  return (
    <section className="section">
      <h2 className="section__title">Top Rating Film dan Series Hari ini</h2>
      <Caraousel cardItems={cardItems} />
    </section>
  );
}
export default TopRating;
