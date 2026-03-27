import { useState, useContext } from "react";
import { MovieContext } from "../context/MovieContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./AdminMovies.css"; 

function AdminMovies() {
  const { movies, addMovie, updateMovie, deleteMovie } = useContext(MovieContext);
  
  // State for form
  const [formData, setFormData] = useState({
    title: "",
    type: "Movie",
    overview: "",
    coverUrl: "",
    isTopRated: false,
    isNewRelease: false,
    isTrending: false,
  });
  
  // Track if we are editing
  const [editingId, setEditingId] = useState(null);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingId) {
      updateMovie(editingId, formData);
      setEditingId(null);
    } else {
      addMovie(formData);
    }
    // reset form
    setFormData({
      title: "",
      type: "Movie",
      overview: "",
      coverUrl: "",
      isTopRated: false,
      isNewRelease: false,
      isTrending: false,
    });
  };

  const handleEdit = (movie) => {
    setEditingId(movie.id);
    setFormData({
      title: movie.title || "",
      type: movie.type || "Movie",
      overview: movie.overview || "",
      coverUrl: movie.coverUrl || "",
      isTopRated: movie.isTopRated || false,
      isNewRelease: movie.isNewRelease || false,
      isTrending: movie.isTrending || false,
    });
  };

  return (
    <div className="bg-screen admin-bg">
      <Navbar />
      <div className="admin-container">
        <h2 className="admin-title">Admin Panel: Kelola Film</h2>
        
        {/* FORM */}
        <section className="admin-form-section">
          <h3>{editingId ? "Edit Film" : "Tambah Film Baru"}</h3>
          <form onSubmit={handleSubmit} className="admin-form">
            <div className="form-group">
              <label>Judul</label>
              <input type="text" name="title" value={formData.title} onChange={handleInputChange} required />
            </div>
            <div className="form-group">
              <label>Tipe</label>
              <select name="type" value={formData.type} onChange={handleInputChange}>
                <option value="Movie">Movie</option>
                <option value="Series">Series</option>
              </select>
            </div>
            <div className="form-group">
              <label>Sinopsis / Overview</label>
              <textarea name="overview" value={formData.overview} onChange={handleInputChange} rows="3" required></textarea>
            </div>
            <div className="form-group">
              <label>Cover URL</label>
              <input type="text" name="coverUrl" value={formData.coverUrl} onChange={handleInputChange} placeholder="https://..." required />
            </div>
            <div className="form-group checkbox-group">
              <label>
                <input type="checkbox" name="isTrending" checked={formData.isTrending} onChange={handleInputChange} />
                Tampilkan di Trending
              </label>
              <label>
                <input type="checkbox" name="isTopRated" checked={formData.isTopRated} onChange={handleInputChange} />
                Tampilkan di Top Rated
              </label>
              <label>
                <input type="checkbox" name="isNewRelease" checked={formData.isNewRelease} onChange={handleInputChange} />
                Tampilkan di New Release
              </label>
            </div>
            <button type="submit" className="btn-submit">{editingId ? "Simpan Perubahan" : "Tambah Film"}</button>
            {editingId && (
              <button type="button" className="btn-cancel" onClick={() => {
                setEditingId(null);
                setFormData({title: "", type: "Movie", overview: "", coverUrl: "", isTopRated: false, isNewRelease: false, isTrending: false});
              }}>Batal</button>
            )}
          </form>
        </section>

        {/* LIST */}
        <section className="admin-list-section">
          <h3>Daftar Film ({movies.length})</h3>
          <div className="admin-grid">
            {movies.map(movie => (
              <div key={movie.id} className="admin-card">
                <img src={movie.coverUrl || movie.src} alt={movie.title} className="admin-card-img" />
                <div className="admin-card-body">
                  <h4>{movie.title}</h4>
                  <p className="admin-badge">{movie.type}</p>
                  <p className="admin-cats">
                    {movie.isTopRated && <span className="cat-badge">Top Rated</span>}
                    {movie.isNewRelease && <span className="cat-badge">New Release</span>}
                  </p>
                  <div className="admin-actions">
                    <button className="btn-edit" onClick={() => handleEdit(movie)}>Edit</button>
                    <button className="btn-delete" onClick={() => {
                      if(window.confirm(`Yakin hapus ${movie.title}?`)) deleteMovie(movie.id);
                    }}>Hapus</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default AdminMovies;
