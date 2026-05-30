import { Code, MessageSquare } from 'lucide-react';

export default function Hero() {
  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-sec">
      {/* Background Glowing Orbs */}
      <div className="bg-orb orb-1"></div>
      <div className="bg-orb orb-2"></div>
      
      <div className="container">
        <div className="hero-content reveal">
          {/* Status Badge */}
          <div className="hero-badge">
            <span className="hero-badge-dot"></span>
            Ready for Opportunities
          </div>
          
          {/* Main Title */}
          <h1 className="hero-title">
            Hi, I am <span className="gradient-text">Harsh Kumar</span>
          </h1>
          
          {/* Professional Title */}
          <h2 className="gradient-text-purple" style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(22px, 4vw, 32px)', fontWeight: '700', marginBottom: '24px', letterSpacing: '-0.5px' }}>
            Frontend Engineer || Backend Engineer
          </h2>
          
          {/* Intro Description */}
          <p className="hero-subtitle">
            Passionate **Full Stack MERN Developer** specializing in building highly interactive, real-time web applications, ERP management systems, and performant web interfaces.
          </p>
          
          {/* Call to Actions */}
          <div className="hero-actions">
            <button 
              onClick={() => handleScrollTo('projects')}
              className="btn btn-primary"
            >
              Explore Projects <Code size={18} />
            </button>
            <button 
              onClick={() => handleScrollTo('contact')}
              className="btn btn-secondary"
            >
              Contact Me <MessageSquare size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
