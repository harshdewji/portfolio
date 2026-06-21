import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sun, Moon } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Dynamic Section Active States
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Experience', id: 'experience' },
    { name: 'Contact', id: 'contact' }
  ];

  const handleLinkClick = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar" style={{ background: scrolled ? 'var(--bg-navbar-scrolled)' : 'var(--bg-navbar)' }}>
      <div className="container nav-container">
        <a href="#home" onClick={(e) => { e.preventDefault(); handleLinkClick('home'); }} className="logo">
          HARSH<span className="gradient-text">.</span>
        </a>

        {/* Desktop Links */}
        <div className="nav-links">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => { e.preventDefault(); handleLinkClick(link.id); }}
              className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            className="theme-toggle-btn"
            aria-label="Toggle Theme"
            style={{
              background: 'transparent',
              border: '1px solid var(--border-glass-hover)',
              borderRadius: '8px',
              width: '38px',
              height: '38px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--text-primary)',
              cursor: 'pointer',
              transition: 'all 0.2s',
              marginRight: '8px'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--bg-card-hover)';
              e.currentTarget.style.borderColor = 'var(--text-primary)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.borderColor = 'var(--border-glass-hover)';
            }}
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleLinkClick('contact'); }}
            className="btn btn-primary"
            style={{ padding: '8px 20px', fontSize: '14px' }}
          >
            Hire Me <ArrowUpRight size={16} />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="mobile-menu-btn"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Links Dropdown */}
      {isOpen && (
        <div className="nav-menu-active">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => { e.preventDefault(); handleLinkClick(link.id); }}
              className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
              style={{ fontSize: '18px', padding: '8px 0' }}
            >
              {link.name}
            </a>
          ))}
          <div style={{ display: 'flex', gap: '10px', marginTop: '10px', width: '100%' }}>
            <button
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              className="theme-toggle-btn"
              aria-label="Toggle Theme"
              style={{
                background: 'transparent',
                border: '1px solid var(--border-glass-hover)',
                borderRadius: '8px',
                width: '48px',
                height: '48px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-primary)',
                cursor: 'pointer',
                transition: 'all 0.2s',
                flexShrink: 0
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--bg-card-hover)';
                e.currentTarget.style.borderColor = 'var(--text-primary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.borderColor = 'var(--border-glass-hover)';
              }}
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleLinkClick('contact'); }}
              className="btn btn-primary"
              style={{ padding: '12px 24px', flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
              Hire Me <ArrowUpRight size={18} style={{ marginLeft: '6px' }} />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
