import { Layout, Server, Terminal } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend & UI',
      icon: <Layout size={24} style={{ color: '#00F2FE' }} />,
      skills: [
        'HTML5',
        'CSS3',
        'JavaScript',
        'React.js',
        'Next.js',
        'Framer Motion',
        'AOS',
        'Bootstrap',
        'Responsive Design'
      ]
    },
    {
      title: 'Backend & Database',
      icon: <Server size={24} style={{ color: '#E100FF' }} />,
      skills: [
        'Node.js',
        'Express.js',
        'Socket.IO',
        'MongoDB',
        'MySQL',
        'Clerk Auth',
        'REST APIs',
        'Cloudinary'
      ]
    },
    {
      title: 'Tools & Languages',
      icon: <Terminal size={24} style={{ color: '#FFB199' }} />,
      skills: [
        'Git & GitHub',
        'VS Code',
        'Java'
      ]
    }
  ];

  return (
    <section id="skills">
      <div className="container">
        <div className="section-header reveal">
          <p className="section-subtitle">Expertise</p>
          <h2 className="section-title">Skills & Tech Stack</h2>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="glass-panel skill-category reveal">
              <h3 className="category-title">
                {category.icon}
                {category.title}
              </h3>
              <div className="skill-tags">
                {category.skills.map((skill, sIndex) => (
                  <div key={sIndex} className="skill-tag">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

