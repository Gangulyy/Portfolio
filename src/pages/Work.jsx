function Work() {
  return (
    <section id="projects" className="vintage-container">
      <h2 className="vintage-header">SELECTED WORK [ARCHIVE]</h2>

      <div className="project-list">
        <div className="project-item">
          <img
            src="/images/f.png"
            alt="Modelle"
            className="project-img"
            onError={(e) => { e.target.src = 'https://via.placeholder.com/350x250/111/dcd3c6?text=STL+Printability'; }}
          />
          <div className="project-info">
            <span className="tech-stack">React :: Node.js :: Python</span>
            <h3>MODELLE - STL PLATFORM</h3>
            <p>Developing a web-based platform that enables users to assess STL model printability and receive automated 3D printing cost estimations within a structured brutalist application environment.</p>
            <a href="https://github.com/Gangulyy" target="_blank" rel="noreferrer" className="btn-retro" style={{ display: 'inline-block', marginTop: '20px', textDecoration: 'none' }}>
              INITIATE VIEW
            </a>
          </div>
        </div>

        <div className="project-item">
          <img
            src="/images/g.png"
            alt="Traffic"
            className="project-img"
            onError={(e) => { e.target.src = 'https://via.placeholder.com/350x250/111/dcd3c6?text=Traffic+System'; }}
          />
          <div className="project-info">
            <span className="tech-stack">Python :: Tkinter</span>
            <h3>TRAFFIC DATA ANALYSIS</h3>
            <p>Processed and analyzed traffic datasets using Python to extract patterns and generate structured analytical outputs utilizing Tkinter for an intuitive desktop GUI.</p>
            <a href="https://github.com/Gangulyy" target="_blank" rel="noreferrer" className="btn-retro" style={{ display: 'inline-block', marginTop: '20px', textDecoration: 'none' }}>
              INITIATE VIEW
            </a>
          </div>
        </div>

        <div className="project-item">
          <img
            src="/images/c.png"
            alt="Maya"
            className="project-img"
            onError={(e) => { e.target.src = 'https://via.placeholder.com/350x250/111/dcd3c6?text=3D+VFX'; }}
          />
          <div className="project-info">
            <span className="tech-stack">Maya :: After Effects</span>
            <h3>3D MODELING & VFX</h3>
            <p>Modeled, textured, lit, and rendered a complex 3D interior scene entirely from scratch, followed by high-quality retro post-production compositing.</p>
            <a href="https://github.com/Gangulyy" target="_blank" rel="noreferrer" className="btn-retro" style={{ display: 'inline-block', marginTop: '20px', textDecoration: 'none' }}>
              INITIATE VIEW
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Work;
