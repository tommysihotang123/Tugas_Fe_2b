import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Continue from "../components/Continue";
import TopRating from "../components/TopRating";
import Trending from "../components/Trending";
import NewRelease from "../components/NewRelease";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Continue />
      <TopRating />
      <Trending />
      <NewRelease />
      <Footer />
    </>
  );
}

export default Home;
