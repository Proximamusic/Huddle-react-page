import "./styles.css";

function App() {
  return (
    <div className="container">
      <div className="card-container">
        <div className="image-container">
          <div className="brand-logo-div">
            <img src="/images/logo.svg" alt="" />
          </div>
          <img
            className="big-image"
            src="/images/illustration-mockups.svg"
            alt=""
          />
        </div>

        <div className="info">
          <h1 className="heading">Build The Community Your Fans Will Love</h1>
          <p className="details">
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as you
            engage in genuine discussion.
          </p>
          <button className="btn-register">Register</button>
        </div>
      </div>
      <div className="socials">
        <i class="fab fa-2x fa-instagram"></i>
        <i class="fab fa-2x fa-facebook-square"></i>
        <i class="fab fa-2x fa-twitter-square"></i>
      </div>
    </div>
  );
}

export default App;
