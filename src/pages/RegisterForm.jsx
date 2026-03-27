import "../styles/Form.css";
import Input from "../components/atomic/Input";
import Button from "../components/atomic/Button";
import { useNavigate } from "react-router-dom";

function RegisterForm() {
  const navigate = useNavigate();
  return (
    <main className="container-daftar">
      <div className="wrapper-form">
        <div className="header">
          <img src="/images/logo.svg" alt="" className="logo" />
          <h1 className="title">Daftar</h1>
          <p className="paragraph">Selamat datang!</p>
        </div>
        <form className="form">
          <label htmlFor="username" className="form__label username">
            Username
            <Input
              type="email"
              className={"form__input"}
              placeholder="Masukkan username"
              id="username"
            />
          </label>
          <label htmlFor="password" className="form__label password">
            Kata Sandi
            <Input
              type="password"
              className={"form__input"}
              placeholder="Masukkan kata sandi"
              id="password"
            />
            <img src="/images/hide-icon.svg" alt="" className="hide-icon" />
          </label>
          <label htmlFor="password" className="form__label password-confirm">
            Konfirmasi Kata Sandi
            <Input
              type="password"
              className={"form__input"}
              placeholder="Masukkan kata sandi"
              id="password-confirm"
            />
            <img src="/images/hide-icon.svg" alt="" className="hide-icon" />
          </label>
        </form>
        <p className="call-to-action">
          <span>
            Sudah punya akun?
            <span className="register" onClick={() => navigate("/login")}>
              Masuk
            </span>
          </span>
        </p>
        <Button
          className={"btn--secondary"}
          label={"Daftar"}
          onClick={() => navigate("/login")}
        />
        <p className="or">Atau</p>
        <Button
          className={"btn--secondary--outline flex"}
          label={
            <>
              <img src="/images/google-icon.svg" className="google-icon" />
              Masuk dengan Google
            </>
          }
        />
      </div>
    </main>
  );
}
export default RegisterForm;
