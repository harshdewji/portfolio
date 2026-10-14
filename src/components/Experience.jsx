import { useState } from 'react';
import { Briefcase, GraduationCap, Award, ExternalLink, X, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function Experience() {
  const [selectedCert, setSelectedCert] = useState(null);

  const experiences = [
    {
      role: 'Software Developer',
      company: 'Appnity Software',
      date: 'Present Focus',
      type: 'Full-time',
      desc: 'Developing custom software, web/mobile applications, and robust API integrations. Collaborating on UI/UX designs and IT consulting initiatives. Focused on helping businesses scale through innovative, performant technologies, scalable architectures, and modern digital solutions.',
      skills: ['React.js', 'Node.js', 'API Integration', 'UI/UX Consulting', 'Scalable Systems']
    },
    {
      role: 'Process Executive (Data) - Intern',
      company: 'Augtech NextWealth IT Services Pvt. Ltd.',
      date: '17-Mar-2026 - 30-Jun-2026',
      type: 'Internship',
      certRef: 'ANW/HR/2026-2027/610',
      desc: 'Successfully completed internship as a Process Executive (Data). Responsible for structured data processing operations, data validation pipelines, database integrity audits, and quality assurance standards.',
      skills: ['Data Processing', 'Data Operations', 'Database Management', 'Quality Assurance', 'Data Validation'],
      certificate: {
        title: 'Internship Certificate - Augtech NextWealth',
        ref: 'ANW/HR/2026-2027/610',
        issueDate: 'July 09, 2026',
        period: '17-Mar-2026 to 30-Jun-2026',
        issuer: 'Neeta Bawankure (Head - HR)',
        companyFull: 'Augtech NextWealth IT Services Private Limited',
        location: 'Bhilai, Chhattisgarh',
        image: '/augtech-certificate.png'
      }
    }
  ];

  const certifications = [
    {
      title: 'FullStack Web Development (MERN)',
      issuer: 'Web Tech Academy',
      recognition: 'Recognized by MSME - Govt. of India',
      duration: '6 Months Intensive Training',
      status: 'Verified Certificate',
      desc: 'Completed an intensive 6-month hands-on certification training in FullStack Web Development (MERN). Mastered React.js frontend engineering, Node.js & Express RESTful API architecture, MongoDB database modeling, authentication & authorization, and full-stack application deployment.',
      skills: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'REST APIs', 'JWT & Auth', 'CRUD Operations', 'Full-Stack Deployment'],
      certificate: {
        title: 'Certificate of Achievement - FullStack Web Development (MERN)',
        ref: 'MSME / Web Tech Academy',
        issueDate: 'Certified Completion',
        period: '6 Months Training Program',
        issuer: 'Saurabh Jain (Founder)',
        companyFull: 'Web Tech Academy (Recognized by MSME - Govt. of India)',
        location: 'Coding Your Future',
        image: '/webtech-certificate.jpg'
      }
    },
    {
      title: 'Java Full Stack Development',
      issuer: 'JSpiders - Java Training and Development Center',
      recognition: 'Certificate No: JSP-26-2388',
      duration: 'Professional Course (Granted: 12-10-2026)',
      status: 'Verified Certificate',
      desc: 'Successfully completed the professional certification course at JSpiders covering Core Java, Advance Java, SQL database management, and Web Technology with extensive practical implementation.',
      skills: ['Core Java', 'Advance Java', 'SQL', 'Web Technology', 'OOPs Concepts', 'JDBC', 'Database Management'],
      certificate: {
        title: 'Professional Course Certificate - Java Full Stack',
        ref: 'JSP-26-2388',
        issueDate: 'October 12, 2026',
        period: 'Professional Course',
        issuer: 'Manager (QSpiders / JSpiders)',
        companyFull: 'JSpiders Java Training and Development Center',
        location: 'Hyderabad, India',
        image: '/jspiders-certificate.jpg'
      }
    }
  ];

  const educations = [
    {
      role: 'Bachelor of Technology',
      company: 'Shri Shankaracharya Technical Campus',
      date: '11/2021 - 06/2025',
      desc: 'Specialized in Computer Science / Information Technology engineering. Developed a strong foundation in programming, database design, software engineering methodologies, and real-time network systems. Graduated with a GPA of 7.0 / 10.'
    },
    {
      role: 'Higher Secondary Education',
      company: 'Model English School',
      date: '06/2020 - 03/2021',
      desc: 'Completed secondary schooling with a focus on Mathematics and Computer Science basics. Developed early programming logic and academic foundations. Graduated with a GPA of 8.0 / 10.'
    }
  ];

  return (
    <section id="experience">
      <div className="container">
        <div className="section-header reveal">
          <p className="section-subtitle">Chronology</p>
          <h2 className="section-title">Experience & Education</h2>
        </div>

        <div className="timeline-section-grid">
          {/* Experience Column */}
          <div className="reveal">
            <h3 className="category-title" style={{ marginBottom: '32px' }}>
              <Briefcase size={22} style={{ color: '#00F2FE' }} />
              Professional Experience
            </h3>
            
            <div className="timeline">
              {experiences.map((exp, index) => (
                <div key={index} className="timeline-item">
                  <span className={`timeline-dot ${exp.certificate ? 'glowing-dot' : ''}`}></span>
                  <div className="glass-panel timeline-card">
                    <div className="timeline-header">
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                          <h4 className="timeline-role">{exp.role}</h4>
                          {exp.certificate && (
                            <span className="badge-verified">
                              <ShieldCheck size={13} /> Verified Certificate
                            </span>
                          )}
                        </div>
                        <div className="timeline-company">{exp.company}</div>
                      </div>
                      <span className="timeline-date">{exp.date}</span>
                    </div>

                    <p className="timeline-desc">{exp.desc}</p>

                    {exp.skills && (
                      <div className="timeline-skills">
                        {exp.skills.map((skill, sIdx) => (
                          <span key={sIdx} className="timeline-skill-tag">{skill}</span>
                        ))}
                      </div>
                    )}

                    {exp.certificate && (
                      <div className="timeline-cert-action">
                        <button 
                          className="btn btn-outline btn-cert"
                          onClick={() => setSelectedCert(exp.certificate)}
                        >
                          <Award size={16} /> View Certificate <ExternalLink size={14} />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div className="reveal">
            <h3 className="category-title" style={{ marginBottom: '32px' }}>
              <GraduationCap size={22} style={{ color: '#E100FF' }} />
              Education History
            </h3>

            <div className="timeline">
              {educations.map((edu, index) => (
                <div key={index} className="timeline-item">
                  <span className="timeline-dot"></span>
                  <div className="glass-panel timeline-card">
                    <div className="timeline-header">
                      <div>
                        <h4 className="timeline-role">{edu.role}</h4>
                        <div className="timeline-company">{edu.company}</div>
                      </div>
                      <span className="timeline-date">{edu.date}</span>
                    </div>
                    <p className="timeline-desc">{edu.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dedicated Certifications & Specialized Courses Showcase */}
        <div className="certifications-section reveal">
          <div className="cert-section-header" style={{ marginBottom: '28px' }}>
            <h3 className="category-title">
              <Award size={22} style={{ color: '#FFB199' }} />
              Certifications & Specialized Courses
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '14px', marginTop: '4px' }}>
              Specialized technical certifications and intensive professional training programs
            </p>
          </div>

          <div className="cert-grid">
            {certifications.map((cert, index) => (
              <div key={index} className="glass-panel cert-card">
                <div>
                  <div className="cert-card-header">
                    <div>
                      <h4 className="cert-course-title">{cert.title}</h4>
                      <div className="cert-issuer">{cert.issuer}</div>
                      {cert.recognition && (
                        <div className="cert-recognition">{cert.recognition}</div>
                      )}
                    </div>
                    <span className={cert.certificate ? "badge-verified" : "badge-cert-course"}>
                      {cert.certificate ? <ShieldCheck size={13} /> : <Award size={13} />}
                      {cert.status}
                    </span>
                  </div>

                  <span className="timeline-date" style={{ display: 'inline-block', marginBottom: '14px' }}>
                    {cert.duration}
                  </span>

                  <p className="timeline-desc">{cert.desc}</p>

                  <div className="timeline-skills">
                    {cert.skills.map((skill, sIdx) => (
                      <span key={sIdx} className="timeline-skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>

                <div className="timeline-cert-action" style={{ marginTop: '20px' }}>
                  {cert.certificate ? (
                    <button 
                      className="btn btn-outline btn-cert"
                      onClick={() => setSelectedCert(cert.certificate)}
                    >
                      <Award size={16} /> View Certificate <ExternalLink size={14} />
                    </button>
                  ) : (
                    <div className="cert-completed-tag">
                      <CheckCircle2 size={15} /> Professional Course Completed
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Certificate Viewer Modal */}
      {selectedCert && (
        <div className="modal-overlay" onClick={() => setSelectedCert(null)}>
          <div className="modal-content glass-panel" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedCert(null)}>
              <X size={20} />
            </button>

            <div className="modal-header">
              <div className="modal-icon">
                <ShieldCheck size={28} style={{ color: '#00F2FE' }} />
              </div>
              <div>
                <h3 className="modal-title">{selectedCert.title}</h3>
                <p className="modal-subtitle">{selectedCert.companyFull}</p>
              </div>
            </div>

            <div className="modal-meta-grid">
              <div className="meta-item">
                <span className="meta-label">Ref Number</span>
                <span className="meta-val">{selectedCert.ref}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Issued Date</span>
                <span className="meta-val">{selectedCert.issueDate}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Duration</span>
                <span className="meta-val">{selectedCert.period}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Signatory</span>
                <span className="meta-val">{selectedCert.issuer}</span>
              </div>
            </div>

            <div className="modal-cert-image-container">
              <img 
                src={selectedCert.image} 
                alt={selectedCert.title} 
                className="cert-preview-img"
              />
              <div className="cert-verified-watermark">
                <CheckCircle2 size={16} /> Official Certificate Verified
              </div>
            </div>

            <div className="modal-footer">
              <a 
                href={selectedCert.image} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary"
                style={{ fontSize: '13px', padding: '8px 18px' }}
              >
                Open Full Resolution <ExternalLink size={14} />
              </a>
              <button 
                className="btn btn-outline" 
                onClick={() => setSelectedCert(null)}
                style={{ fontSize: '13px', padding: '8px 18px' }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

