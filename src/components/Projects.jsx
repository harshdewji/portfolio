import { useState, useEffect } from 'react';
import { projectsData } from '../data/projectsData';
import { Film, MessageSquare, Briefcase, X, Database, Terminal, FileText, Cpu } from 'lucide-react';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  // Close modal on ESC keypress
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    };
    if (selectedProject) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject]);

  const getProjectIcon = (id) => {
    if (id === 'movie-explorer') return <Film size={24} />;
    if (id === 'chat-app') return <MessageSquare size={24} />;
    return <Briefcase size={24} />;
  };

  return (
    <section id="projects">
      <div className="container">
        <div className="section-header reveal">
          <p className="section-subtitle">Portfolio</p>
          <h2 className="section-title">Featured Projects</h2>
        </div>

        <div className="projects-grid">
          {projectsData.map((project) => (
            <div key={project.id} className="glass-panel project-card reveal">
              <div className="project-icon">
                {getProjectIcon(project.id)}
              </div>
              <h3 className="project-title">{project.title}</h3>
              <div className="project-desc">
                <p>{project.description}</p>
                <ul>
                  {project.bullets.map((bullet, bIndex) => (
                    <li key={bIndex}>{bullet}</li>
                  ))}
                </ul>
              </div>
              
              {/* Tech Badges */}
              <div className="project-tech">
                {project.tech.map((t, tIndex) => (
                  <span key={tIndex} className="tech-badge">{t}</span>
                ))}
              </div>

              {/* Action Links */}
              <div className="project-links">
                <button 
                  onClick={() => setSelectedProject(project)}
                  className="project-link"
                  style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                >
                  <FileText size={16} style={{ color: '#a855f7' }} /> View System Docs
                </button>
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-link"
                  style={{ color: 'var(--accent-cyan)' }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ marginRight: '4px', verticalAlign: 'middle' }}
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                  Source Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Technical System Documentation Overlay Modal */}
      {selectedProject && (
        <div 
          className="modal-overlay" 
          onClick={() => setSelectedProject(null)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'var(--bg-modal-overlay)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 2000,
            padding: '20px'
          }}
        >
          <div 
            className="glass-panel modal-content" 
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '800px',
              width: '100%',
              maxHeight: '85vh',
              overflowY: 'auto',
              padding: '36px',
              position: 'relative',
              boxShadow: 'var(--shadow-glass-hover), var(--primary-glow)',
              transform: 'none', // Override default glass panel translate hover
            }}
          >
            {/* Close Button */}
            <button 
              onClick={() => setSelectedProject(null)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-glass)',
                color: 'var(--text-secondary)',
                borderRadius: '8px',
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--text-primary)';
                e.currentTarget.style.borderColor = 'var(--border-glass-hover)';
                e.currentTarget.style.background = 'var(--bg-card-hover)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-secondary)';
                e.currentTarget.style.borderColor = 'var(--border-glass)';
                e.currentTarget.style.background = 'var(--bg-card)';
              }}
            >
              <X size={20} />
            </button>

            {/* Modal Title */}
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '28px', color: 'var(--text-modal-title)', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              {getProjectIcon(selectedProject.id)}
              {selectedProject.title} Documentation
            </h3>
            <p style={{ color: 'var(--accent-cyan)', fontSize: '13px', fontWeight: '600', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '24px' }}>
              System Design & Architecture
            </p>

            {/* Overview */}
            <div style={{ marginBottom: '28px' }}>
              <h4 style={{ color: 'var(--text-modal-title)', marginBottom: '8px', fontSize: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <FileText size={16} style={{ color: 'var(--accent-cyan)' }} /> Overview
              </h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '14.5px', lineHeight: '1.6' }}>{selectedProject.doc.overview}</p>
            </div>

            {/* Architecture */}
            <div style={{ marginBottom: '28px' }}>
              <h4 style={{ color: 'var(--text-modal-title)', marginBottom: '8px', fontSize: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Cpu size={16} style={{ color: 'var(--accent-purple)' }} /> System Architecture
              </h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '14.5px', lineHeight: '1.6' }}>{selectedProject.doc.architecture}</p>
            </div>

            {/* Database Schema */}
            <div style={{ marginBottom: '28px' }}>
              <h4 style={{ color: 'var(--text-modal-title)', marginBottom: '12px', fontSize: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Database size={16} style={{ color: 'var(--accent-cyan)' }} /> Database Model Design
              </h4>
              <pre 
                style={{
                  background: 'var(--bg-code)',
                  border: '1px solid var(--border-code)',
                  borderRadius: '10px',
                  padding: '18px',
                  color: 'var(--text-code)',
                  fontSize: '13px',
                  fontFamily: 'Consolas, monospace',
                  overflowX: 'auto',
                  lineHeight: '1.5'
                }}
              >
                {selectedProject.doc.dbSchema}
              </pre>
            </div>

            {/* API Endpoints */}
            <div style={{ marginBottom: '28px' }}>
              <h4 style={{ color: 'var(--text-modal-title)', marginBottom: '12px', fontSize: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Cpu size={16} style={{ color: 'var(--accent-purple)' }} /> Core REST API Routing
              </h4>
              <div style={{ overflowX: 'auto', borderRadius: '10px', border: '1px solid var(--border-table)' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13.5px', textAlign: 'left' }}>
                  <thead>
                    <tr style={{ background: 'var(--bg-table-header)', borderBottom: '1px solid var(--border-table)' }}>
                      <th style={{ padding: '12px 16px', color: 'var(--text-primary)', fontWeight: '600' }}>Method</th>
                      <th style={{ padding: '12px 16px', color: 'var(--text-primary)', fontWeight: '600' }}>Endpoint Route</th>
                      <th style={{ padding: '12px 16px', color: 'var(--text-primary)', fontWeight: '600' }}>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedProject.doc.apiEndpoints.map((endpoint, apiIndex) => (
                      <tr 
                        key={apiIndex} 
                        style={{ 
                          borderBottom: apiIndex === selectedProject.doc.apiEndpoints.length - 1 ? 'none' : '1px solid var(--border-table-row)',
                          background: 'transparent'
                        }}
                      >
                        <td style={{ padding: '12px 16px' }}>
                          <span 
                            style={{
                              display: 'inline-block',
                              padding: '2px 8px',
                              borderRadius: '4px',
                              fontSize: '11px',
                              fontWeight: '700',
                              background: endpoint.method === 'GET' ? 'rgba(37, 99, 235, 0.1)' : 'rgba(234, 88, 12, 0.1)',
                              color: endpoint.method === 'GET' ? 'var(--accent-blue)' : 'var(--accent-sunset)',
                              border: endpoint.method === 'GET' ? '1px solid rgba(37, 99, 235, 0.25)' : '1px solid rgba(234, 88, 12, 0.25)'
                            }}
                          >
                            {endpoint.method}
                          </span>
                        </td>
                        <td style={{ padding: '12px 16px', fontFamily: 'Consolas, monospace', color: 'var(--accent-cyan)' }}>
                          {endpoint.path}
                        </td>
                        <td style={{ padding: '12px 16px', color: 'var(--text-secondary)' }}>
                          {endpoint.desc}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Local Installation */}
            <div>
              <h4 style={{ color: 'var(--text-modal-title)', marginBottom: '12px', fontSize: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Terminal size={16} style={{ color: 'var(--accent-cyan)' }} /> Local Development & Setup
              </h4>
              <ol style={{ paddingLeft: '20px', color: 'var(--text-secondary)', fontSize: '14.5px', lineHeight: '1.7' }}>
                {selectedProject.doc.installation.map((step, stepIndex) => (
                  <li key={stepIndex} style={{ marginBottom: '8px' }}>
                    {step.includes('npm') || step.includes('git clone') || step.includes('.env') ? (
                      <span>
                        {step.split(/(`[^`]+`)/g).map((part, pIdx) => {
                          if (part.startsWith('`') && part.endsWith('`')) {
                            return <code key={pIdx} style={{ background: 'var(--bg-code)', border: '1px solid var(--border-code)', padding: '2px 6px', borderRadius: '4px', color: 'var(--accent-cyan)', fontFamily: 'Consolas, monospace' }}>{part.slice(1, -1)}</code>;
                          }
                          return part;
                        })}
                      </span>
                    ) : (
                      step
                    )}
                  </li>
                ))}
              </ol>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
