import { useState } from "react";
import "./Modal.css"
const Modalfilm = ({ isOpen, onClose, onSave }) => {
  const [form, setForm] = useState({
    title: "",
    rating: "",
    src: "",
    alt: "",
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSave({
      ...form,
      rating: parseFloat(form.rating),
    });

    setForm({
      title: "",
      rating: "",
      src: "",
      alt: "",
    });

    onClose();
  };

  return (
    <div className="overlayStyle">
      <div className="modalStyle">
        <button className="closeBtn" onClick={onClose}>
          ✖
        </button>

        <h3>Tambah Film</h3>

        <form onSubmit={handleSubmit}>
          <input
            className="inputStyle"
            type="text"
            name="title"
            placeholder="Title"
            value={form.title}
            onChange={handleChange}
            required
          />

          <input
            className="inputStyle"
            type="number"
            step="0.1"
            name="rating"
            placeholder="Rating (contoh: 4.5)"
            value={form.rating}
            onChange={handleChange}
            max={5}
            required
          />

          <input
            className="inputStyle"
            type="text"
            name="src"
            placeholder="Image path (./images/...)"
            value={form.src}
            onChange={handleChange}
            required
          />

          <input
            className="inputStyle"
            type="text"
            name="alt"
            placeholder="Alt text"
            value={form.alt}
            onChange={handleChange}
            required
          />

          <button
            className="buttonStyle"
            type="submit"
          >
            Simpan
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modalfilm ;