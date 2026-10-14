import { GraduationCap, Award, ShieldCheck } from 'lucide-react';

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="section-header reveal">
          <p className="section-subtitle">Introduction</p>
          <h2 className="section-title">About Me</h2>
        </div>
        
        <div className="about-grid">
          {/* Left: Professional Portrait Frame */}
          <div className="about-image-wrapper reveal">
            <div className="about-image-card glass-panel">
              <img 
                src="/profile.jpg" 
                alt="Harsh Kumar Dewangan - Full Stack Developer" 
                className="about-portrait"
              />
              <div className="about-image-badge">
                <span className="badge-dot-live"></span>
                <span>Harsh Kumar Dewangan</span>
              </div>
            </div>
          </div>

          {/* Right: Bio & Metrics */}
          <div className="about-content-col reveal">
            <div className="about-text">
              <p>
                I am a passionate **Full Stack Developer** skilled in React.js, Node.js, JavaScript, and modern web technologies, fortified by comprehensive training in **Java Full Stack development (JSpiders)** and certified **MERN stack architecture (Web Tech Academy)**. I thrive on creating real-time applications, enterprise resource planning (ERP) systems, and scalable web platforms with high emphasis on secure user authentication and fluid, responsive user interfaces.
              </p>
              <p>
                With a strong interest in full-stack architecture, I focus on optimizing real-time communication systems using technologies like **Socket.IO** and designing AI-powered applications that solve real-world problems.
              </p>
              <p>
                My engineering approach combines rigorous problem-solving with a keen eye for design, ensuring that backends are highly scalable and frontends are pixel-perfect and engaging.
              </p>
            </div>
            
            <div className="about-stats-row">
              <div className="glass-panel stat-card">
                <div style={{ color: '#00F2FE', display: 'flex', justifyContent: 'center', marginBottom: '8px' }}>
                  <GraduationCap size={26} />
                </div>
                <h3 className="stat-value">B.Tech Degree</h3>
                <p className="stat-label">Shri Shankaracharya Technical Campus</p>
                <span className="timeline-date" style={{ marginTop: '6px', display: 'inline-block' }}>2021 - 2025</span>
              </div>

              <div className="glass-panel stat-card">
                <div style={{ color: '#E100FF', display: 'flex', justifyContent: 'center', marginBottom: '8px' }}>
                  <ShieldCheck size={26} />
                </div>
                <h3 className="stat-value">Certified Courses</h3>
                <p className="stat-label">MERN (Web Tech) & Java (JSpiders)</p>
                <span className="timeline-date" style={{ marginTop: '6px', display: 'inline-block' }}>Specialized Training</span>
              </div>

              <div className="glass-panel stat-card">
                <div style={{ color: '#FFB199', display: 'flex', justifyContent: 'center', marginBottom: '8px' }}>
                  <Award size={26} />
                </div>
                <h3 className="stat-value">7.0 / 10</h3>
                <p className="stat-label">Cumulative GPA (Engineering)</p>
                <span className="timeline-date" style={{ marginTop: '6px', display: 'inline-block' }}>Academic Honors</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
