import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="logo" style={{ fontSize: '20px' }}>
          HARSH<span className="gradient-text">.</span>
        </div>
        <p className="footer-text">
          &copy; {currentYear} Harsh Kumar Dewangan. All rights reserved.
        </p>
        <p className="footer-text" style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px' }}>
          Designed & Built with <Heart size={12} style={{ color: '#FF0844', fill: '#FF0844' }} /> using React & Vite.
        </p>
      </div>
    </footer>
  );
}
