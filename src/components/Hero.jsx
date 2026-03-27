import "./Hero.css";
import Button from "./atomic/Button";

function Hero() {
  return (
    <section className="hero">
      <h1 className="hero__title">Duty After School</h1>
      <p className="hero__paragraph">
        Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan,
        Departemen Pertahanan mulai merekrut lebih banyak tentara, termasuk
        siswa sekolah menengah. Mereka pun segera menjadi pejuang garis depan
        dalam perang.
      </p>
      <div className="hero__actions">
        <div className="hero__info">
          <Button className={"btn--primary--dark"} label={"Mulai"} />
          <Button
            className={"btn--secondary--small flex"}
            label={
              <>
                <img
                  src="./images/information-outline.svg"
                  alt=""
                  className="icon-info"
                />
                Selengkapnya
              </>
            }
          />
          <span className="hero__age">18+</span>
        </div>
        <span className="hero__sound">
          <img src="./images/sound.svg" alt="" className="sound-icon" />
        </span>
      </div>
    </section>
  );
}
export default Hero;
