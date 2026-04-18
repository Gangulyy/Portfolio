function Skills() {
  return (
    <section id="about" className="portfolio-grid-section">
      <div className="grid-section-header">
        <h2>TECHNICAL SKILLS</h2>
      </div>

      <div className="stage-grid">
        <div className="grid-cell solid">
          <div className="cell-number">01</div>
          <div>
            <div className="cell-title">React / JS</div>
            <div className="cell-desc">Basic understanding of component-based UI development and modern JavaScript (ES6+). Able to manage simple state and build clean, responsive interfaces.</div>
          </div>
        </div>

        <div className="grid-cell outline">
          <div className="cell-number">02</div>
          <div>
            <div className="cell-title">Tailwind CSS</div>
            <div className="cell-desc">Basic understanding of utility-first CSS. Able to create simple responsive layouts and experiment with clean and structured designs.</div>
          </div>
        </div>

        <div className="grid-cell accent">
          <div className="cell-number">03</div>
          <div>
            <div className="cell-title">HTML & Core CSS</div>
            <div className="cell-desc">Good understanding of semantic HTML and modern CSS layout techniques such as Flexbox and Grid. Able to create responsive layouts and basic animations.</div>
          </div>
        </div>

        <div className="grid-cell outline">
          <div className="cell-number">04</div>
          <div>
            <div className="cell-title">UI / UX Design</div>
            <div className="cell-desc">Figma prototyping, retro aesthetic design patterns, layout distortion, and wireframing before development phases.</div>
          </div>
        </div>

        <div className="grid-cell solid">
          <div className="cell-number">05</div>
          <div>
            <div className="cell-title">Backend Aux</div>
            <div className="cell-desc">Basic familiarity with Node.js and Python. Understand how they can be used to work with APIs and backend functionality.</div>
          </div>
        </div>

        <div className="grid-cell outline">
          <div className="cell-number">06</div>
          <div>
            <div className="cell-title">Leadership Ops</div>
            <div className="cell-desc">Currently serving as the Chairperson of IEEE WIE Society. Proven track record in industry outreach and team coordination.</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
