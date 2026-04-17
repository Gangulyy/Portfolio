function Contact() {
  return (
    <section id="contact" className="vintage-container" style={{ backgroundColor: 'var(--black)', color: 'var(--bg-beige)', borderBottom: 'none' }}>
      <h2 className="vintage-header" style={{ color: 'var(--bg-beige)', borderColor: 'var(--bg-beige)', borderBottomWidth: '2px' }}>
        SYSTEM OF COMMUNICATION
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '4rem', paddingTop: '2rem' }}>
        <div>
          <p style={{ fontFamily: "'Syne', sans-serif", fontSize: '1.5rem', marginBottom: '2rem', color: 'var(--red)' }}>
            [ AWAITING INPUT. CONNECT VIA BELOW CHANNELS. ]
          </p>
          <ul style={{ listStyle: 'none', fontSize: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', padding: 0 }}>
            <li><span style={{ color: 'var(--red)' }}>[TEL]</span> +94 71 11 26 953</li>
            <li><span style={{ color: 'var(--red)' }}>[MAIL]</span> gangulyyr@gmail.com</li>
            <li><span style={{ color: 'var(--red)' }}>[LINKEDIN]</span> /in/ganguli-r</li>
            <li><span style={{ color: 'var(--red)' }}>[GITHUB]</span> /Gangulyy</li>
          </ul>
        </div>

        <div className="contact-box">
          <form action="#" method="post" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <label>USER ID [NAME]</label>
              <input type="text" style={{ width: '100%', padding: '10px', marginTop: '5px' }} />
            </div>
            <div>
              <label>PING ADDRESS [EMAIL]</label>
              <input type="email" style={{ width: '100%', padding: '10px', marginTop: '5px' }} />
            </div>
            <div>
              <label>DATA PACKET [MESSAGE]</label>
              <textarea rows={4} style={{ width: '100%', padding: '10px', marginTop: '5px' }}></textarea>
            </div>
            <button type="submit" className="btn-retro" style={{ width: '100%' }}>
              TRANSMIT
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
