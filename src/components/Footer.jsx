import "./Footer.css";
import { useState } from "react";

function Footer() {
  const [openGenre, setOpenGenre] = useState(false);
  const [openHelp, setOpenHelp] = useState(false);
  return (
    <footer className="footer">
      <div className="footer__header">
        <img src="./images/logo.svg" alt="logo" className="footer__logo" />
        <p className="copyright">@2023 Chill All Rights Reserved.</p>
      </div>
      <div className="footer__list">
        <div className="genre">
          <h2 className="genre__title" onClick={() => setOpenGenre(!openGenre)}>
            Genre{" "}
            <img src="./images/drop-icon.svg" alt="" className="drop-icon" />
          </h2>
          <div className={`genre__item ${openGenre ? "active" : ""}`}>
            <ul className="genre__list">
              <li>Aksi</li>
              <li>Anak-anak</li>
              <li>Anime</li>
              <li>Britania</li>
            </ul>
            <ul className="genre__list">
              <li>Drama</li>
              <li>Fantasi Ilmiah & Fantasi</li>
              <li>Kejahatan</li>
              <li>KDrama</li>
            </ul>
            <ul className="genre__list">
              <li>Komedi</li>
              <li>Petualangan</li>
              <li>Perang</li>
              <li>Romantis</li>
            </ul>
            <ul className="genre__list">
              <li>Sains & Alam</li>
              <li>Thriller</li>
            </ul>
          </div>
        </div>
        <div className="help">
          <h2 className="help__title" onClick={() => setOpenHelp(!openHelp)}>
            Bantuan{" "}
            <img src="./images/drop-icon.svg" alt="" className="drop-icon" />
          </h2>
          <div className={`help__item ${openHelp ? "active" : ""}`}>
            <ul className="help__list">
              <li>FAQ</li>
              <li>Kontak Kami</li>
              <li>Privasi</li>
              <li>Syarat & Ketentuan</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
