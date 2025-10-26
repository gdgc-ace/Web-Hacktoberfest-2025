import "../styles/home.css";

const Home = () => (
  <div className="home-container">
    <div className="hero">
      <div className="hero-content">
        <h1>Welcome to GDGC</h1>
        <p>
          Building, learning, and growing together — the Google Developer way.
        </p>
        <button>Join the Community</button>
      </div>
    </div>
    <div className="carousel">
      <h2>Our Highlights</h2>
      <div className="carousel-images">
        {/* Issue: no images here. hint: add placeholder images in public/assets folder and link them here */}
        <img src="event1.jpg" alt="Event 1" />
        <img src="event2.jpg" alt="Event 2" />
        <img src="event3.jpg" alt="Event 3" />
        <img src="event4.jpg" alt="Event 4" />
      </div>
    </div>
  </div>
);

export default Home;
