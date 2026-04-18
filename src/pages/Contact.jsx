import { useState } from 'react';

function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('TRANSMITTING...');

    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://formsubmit.co/ajax/gangulyyr@gmail.com", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setStatus('TRANSMISSION SUCCESSFUL.');
        e.target.reset();
      } else {
        setStatus('TRANSMISSION FAILED. RETRY.');
      }
    } catch (error) {
      setStatus('SYSTEM ERROR. AWAITING RETRY.');
    }

    setTimeout(() => setStatus(''), 5000);
  };

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
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <input type="hidden" name="_captcha" value="false" />
            <input type="text" name="_honey" style={{ display: 'none' }} />
            
            <div>
              <label>USER ID [NAME]</label>
              <input type="text" name="name" required style={{ width: '100%', padding: '10px', marginTop: '5px' }} />
            </div>
            <div>
              <label>PING ADDRESS [EMAIL]</label>
              <input type="email" name="email" required style={{ width: '100%', padding: '10px', marginTop: '5px' }} />
            </div>
            <div>
              <label>DATA PACKET [MESSAGE]</label>
              <textarea name="message" rows={4} required style={{ width: '100%', padding: '10px', marginTop: '5px' }}></textarea>
            </div>
            <button type="submit" className="btn-retro" style={{ width: '100%' }}>
              {status || 'TRANSMIT'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
