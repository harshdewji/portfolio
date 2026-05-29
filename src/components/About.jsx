import { GraduationCap, Award, Settings, User } from 'lucide-react';

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="section-header reveal">
          <p className="section-subtitle">Introduction</p>
          <h2 className="section-title">About Me</h2>
        </div>
        
        <div className="about-grid">
          {/* Left Text Column */}
          <div className="about-text reveal">
            <p>
              I am a passionate **Full Stack MERN Developer** skilled in React.js, Node.js, JavaScript, and modern web technologies. I thrive on creating real-time applications, enterprise resource planning (ERP) systems, and scalable web platforms with high emphasis on secure user authentication and fluid, responsive user interfaces.
            </p>
            <p>
              With a strong interest in full-stack architecture, I focus on optimizing real-time communication systems using technologies like **Socket.IO** and designing AI-powered applications that solve real-world problems.
            </p>
            <p>
              My engineering approach combines rigorous problem-solving with a keen eye for design, ensuring that backends are highly scalable and frontends are pixel-perfect and engaging.
            </p>
          </div>
          
          {/* Right Metrics Grid */}
          <div className="about-stats reveal">
            <div className="glass-panel stat-card">
              <div style={{ color: '#00F2FE', display: 'flex', justifyContent: 'center', marginBottom: '12px' }}>
                <GraduationCap size={32} />
              </div>
              <h3 className="stat-value">B.Tech Degree</h3>
              <p className="stat-label">Shri Shankaracharya Technical Campus</p>
              <span className="timeline-date" style={{ marginTop: '8px', display: 'inline-block' }}>2021 - 2025</span>
            </div>

            <div className="glass-panel stat-card">
              <div style={{ color: '#E100FF', display: 'flex', justifyContent: 'center', marginBottom: '12px' }}>
                <Award size={32} />
              </div>
              <h3 className="stat-value">7.0 / 10</h3>
              <p className="stat-label">Cumulative GPA (Engineering)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
