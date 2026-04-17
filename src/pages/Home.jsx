function Home() {
  return (
    <section id="home" className="hero">
      <div className="hero-image-container">
        <img
          src="/images/main2.png"
          alt="Ganguli"
          onError={(e) => { e.target.src = '/images/main.png'; }}
        />
      </div>

      <div className="hero-text-left">
        <span className="greeting">HELLO, I'M</span>
        <span className="first-name">GANGULI</span>
        <span className="last-name">Hettiarachchi</span>
        <a href="#projects" className="hero-red-btn">
          EXPLORE LAB
        </a>
      </div>

      <div className="hero-text-right">
        <h2>
          ASPIRING<br />
          TECH<br />
          ENTHUSIAST
        </h2>
        <div className="retro-stamp">ARCHIVE // 2025</div>
        <p>
          Translating concepts into <br />
          structured frontend logic.
        </p>
      </div>
    </section>
  );
}

export default Home;
