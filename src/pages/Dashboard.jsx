import "../styles/Dashboard.css";
import Button from "../components/atomic/Button";
import { useNavigate } from "react-router-dom";
// import phone from "../public/Phone.png"; // pastikan path sesuai

function Dashboard() {
  const navigate = useNavigate();

  return (
    <main className="container__dashboard">

      {/* NAVBAR */}
      <nav className="nav__dashboard">
        <img src="/images/logo.svg" className="nav__logo__dashboard" alt="logo" />
        <Button
          className="btn--primary"
          label="Sign in"
          onClick={() => navigate("/register")}
        />
      </nav>

      {/* HERO */}
      <section className="container">
        <div className="hero-container">

          {/* LEFT */}
          <div className="hero-text">
            <span className="label">MOVIE STREAMING PLATFORM</span>
            <h1>Chill</h1>

            <p>
              Chill adalah aplikasi berbasis web yang dirancang untuk memberi pengguna
              akses ke library film dan acara TV yang luas dari perangkat mereka.
              Chill menawarkan antarmuka yang ramah pengguna yang memungkinkan
              pengguna mencari film dan acara TV, dan mulai menonton secara instan.
              Chill menawarkan rekomendasi hasil personalisasi berdasarkan kebiasaan
              menonton pengguna.
            </p>

            <Button
              className="btn--primary hero-btn"
              label="Get started"
              onClick={() => navigate("/login")}
            />
          </div>

          {/* RIGHT */}
          <div className="hero-image">
            <img src="/Phone.png" alt="Chill App" />
          </div>

        </div>
      </section>

    </main>
  );
}

export default Dashboard;
