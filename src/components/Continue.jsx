import "./Continue.css";
import data from "../data/film";
import Caraousel from "./atomic/Carousel";
// import { useState } from "react";
import Button from "./atomic/Button";
import Modalfilm from "./atomic/modal";
import {useState, useEffect} from "react";

function Continue() {
  const [film, Setfilm] = useState(data);
  // const [modal, setmodal] = useState(false);

  // const modalopen = () => {
  //   console.log("test");
  //   setmodal(!modal);
  // };
    // Ambil daftar dari localStorage
  const [myList, setMyList] = useState(() => {
    const saved = localStorage.getItem("myList");
    return saved ? JSON.parse(saved) : [];
  });

   // Simpan ke localStorage jika berubah
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

  const deletefilm = (id) =>{
    Setfilm(prev=> prev.filter((item)=> item.id != id))
  } 
  const cardItems = film.map((item) => {
    return (
      <div className="card continue" key={item.id}>
        <div className="card__img-container">
          <img src={item.src} alt={item.alt} className="card__img" />
          <div className="card__info">
            <div className="card__info__title">{item.title}</div>
            <div className="card__info__rating">&#9733; {item.rating}/5</div>
          </div>
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
              <button className="card__btn-icon" onClick={() => deletefilm(item.id)} title="Hapus">
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
      <h2 className="section__title">Melanjutkan Tonton Film</h2>
      <Caraousel cardItems={cardItems} />
    </section>
  );
}
export default Continue;

