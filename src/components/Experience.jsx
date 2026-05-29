import { Briefcase, GraduationCap } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      role: 'Software Developer',
      company: 'Appnity Software',
      date: 'Present Focus',
      desc: 'Developing custom software, web/mobile applications, and robust API integrations. Collaborating on UI/UX designs and IT consulting initiatives. Focused on helping businesses scale through innovative, performant technologies, scalable architectures, and modern digital solutions.'
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
                  <span className="timeline-dot"></span>
                  <div className="glass-panel timeline-card">
                    <div className="timeline-header">
                      <div>
                        <h4 className="timeline-role">{exp.role}</h4>
                        <div className="timeline-company">{exp.company}</div>
                      </div>
                      <span className="timeline-date">{exp.date}</span>
                    </div>
                    <p className="timeline-desc">{exp.desc}</p>
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
      </div>
    </section>
  );
}
