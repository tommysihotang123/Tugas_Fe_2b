import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CardLabel from "../components/atomic/CardLabel";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../components/TopRating.css";
import "./Daftarsaya.css";

function DaftarFilm() {
  const navigate = useNavigate();

  // ✅ ambil dari localStorage langsung di useState
  const [myList, setMyList] = useState(() => {
    const saved = localStorage.getItem("myList");
    try {
      return saved ? JSON.parse(saved) : [];
    } catch (error) {
      console.error("Data localStorage rusak:", error);
      return [];
    }
  });

  // ✅ Simpan otomatis setiap myList berubah
  useEffect(() => {
    localStorage.setItem("myList", JSON.stringify(myList));
  }, [myList]);

  const hapusFilm = (id) => {
    setMyList((prev) =>
      prev.filter((film) => film.id !== id)
    );
  };

  return (
    <div className="bg-screen">
      <Navbar />
      <section className="section">
        <h2 className="section__title">Daftar Saya</h2>

        <div className="grid-daftarsaya">
          {myList.length === 0 && (
            <p style={{ color: "gray" }}>Belum ada film di daftar</p>
          )}

          {myList.map((film) => (
            <div className="card top-rating" key={film.id} onClick={() => navigate('/home')} style={{ cursor: "pointer" }}>
              <div className="card__img-container">
                <img src={film.src} alt={film.alt} className="card__top-rating-img" />
                {film.isNewEpisode && (
                  <CardLabel className={"new--episode"}>Episode Baru</CardLabel>
                )}
                {film.isTopTen && (
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
                  </div>
                  <div className="card__actions-right">
                    <button className="card__btn-icon" onClick={(e) => { e.stopPropagation(); hapusFilm(film.id); }} title="Hapus">
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
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default DaftarFilm;