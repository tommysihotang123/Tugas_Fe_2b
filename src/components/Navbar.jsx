import "./Navbar.css";
import { useNavigate, Link } from "react-router-dom";
function Navbar() {
  const navigate = useNavigate();
  return (
    <>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__logo" onClick={() => navigate("/home")} style={{ cursor: "pointer" }}>
            <img src="./images/logo-small.svg" alt="" className="logo-small" />
            <img src="./images/logo.svg" alt="" className="logo-medium" />
          </li>
          <li className="nav__item">
            <Link to="/home" className="nav__link">
              Series
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/home" className="nav__link">
              Film
            </Link>
          </li>
          <li className="nav__item">
          <Link to="/Daftarsaya" className="nav__link">
            Daftar Saya
          </Link>
          </li>
        </ul>
        <div className="nav__profile">
          <img src="./images/profile.svg" alt="" className="profile-img" />
          <img src="./images/dropdown.svg" alt="" className="dropdown-icon " />
          <ul className="dropdown-menu">
            <li className="dropdown-menu__item">
              <img
                src="./images/account.svg"
                alt=""
                className="dropdown-icons"
              />
              Profil Saya
            </li>
            <li className="dropdown-menu__item">
              <img src="./images/star.svg" alt="" className="dropdown-icons" />
              Ubah Premium
            </li>
            <li
              className="dropdown-menu__item"
              onClick={() => navigate("/login")}
            >
              <img
                src="./images/login-variant.svg"
                alt=""
                className="dropdown-icons"
              />
              Keluar
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
