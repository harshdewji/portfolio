import { useState } from 'react';
import { Mail, Phone, Send, Check, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('none'); // 'none', 'success', 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('none');

    const endpoint = import.meta.env.VITE_CONTACT_FORM_ENDPOINT;

    // Developer logging helper if no endpoint is configured
    if (!endpoint) {
      console.warn(
        "Contact form submitted successfully in mock mode. Set VITE_CONTACT_FORM_ENDPOINT in your .env file or Vercel settings to receive actual submissions."
      );
      
      // Simulate API lag
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormState({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('none'), 4000);
      return;
    }

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          subject: formState.subject,
          message: formState.message
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormState({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('API submission failed');
      }
    } catch (err) {
      console.error('Contact submission error:', err);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('none'), 5000);
    }
  };

  const contactMethods = [
    {
      title: 'Email',
      value: 'harshkumardewangan11@gmail.com',
      link: 'mailto:harshkumardewangan11@gmail.com',
      icon: <Mail size={20} />
    },
    {
      title: 'Phone',
      value: '+91 6266410029',
      link: 'tel:+916266410029',
      icon: <Phone size={20} />
    },
    {
      title: 'LinkedIn',
      value: 'Harsh Kumar Dewangan',
      link: 'https://www.linkedin.com/in/harsh-kumar-dewangan-029033306/',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-linkedin"
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect width="4" height="12" x="2" y="9" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      )
    }
  ];

  return (
    <section id="contact">
      <div className="container">
        <div className="section-header reveal">
          <p className="section-subtitle">Connection</p>
          <h2 className="section-title">Get In Touch</h2>
        </div>

        <div className="contact-grid">
          {/* Contact Details */}
          <div className="contact-info reveal">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel contact-method-card"
              >
                <div className="contact-method-icon">
                  {method.icon}
                </div>
                <div>
                  <div className="contact-method-title">{method.title}</div>
                  <div className="contact-method-value">{method.value}</div>
                </div>
              </a>
            ))}

            {/* Social Icons row */}
            <div className="social-links">
              <a
                href="https://www.linkedin.com/in/harsh-kumar-dewangan-029033306/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-linkedin"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href={import.meta.env.VITE_GITHUB_URL || "https://github.com/harshdewji"}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="GitHub"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-github"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </a>
            </div>
          </div>

          {/* Form Column */}
          <div className="glass-panel contact-form-panel reveal">
            <form onSubmit={handleSubmit}>
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="Your name"
                    className="form-input"
                    disabled={isSubmitting}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="name@example.com"
                    className="form-input"
                    disabled={isSubmitting}
                  />
                </div>
                <div className="form-group form-group-full">
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    required
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    placeholder="What project are you hiring for?"
                    className="form-input"
                    disabled={isSubmitting}
                  />
                </div>
                <div className="form-group form-group-full">
                  <label htmlFor="message" className="form-label">Message Details</label>
                  <textarea
                    id="message"
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Write details about the project or job role..."
                    className="form-textarea"
                    disabled={isSubmitting}
                  ></textarea>
                </div>
              </div>

              {/* Dynamic Action Button */}
              <button
                type="submit"
                className="btn btn-primary"
                style={{ 
                  width: '100%', 
                  gap: '10px', 
                  height: '48px',
                  background: submitStatus === 'success' ? '#10b981' : submitStatus === 'error' ? '#ef4444' : 'var(--grad-cyan-blue)',
                  color: submitStatus === 'success' || submitStatus === 'error' ? '#fff' : '#030712',
                  boxShadow: submitStatus === 'success' ? '0 0 15px rgba(16, 185, 129, 0.3)' : submitStatus === 'error' ? '0 0 15px rgba(239, 68, 68, 0.3)' : 'var(--primary-glow)',
                  borderColor: 'transparent'
                }}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  'Sending Message...'
                ) : submitStatus === 'success' ? (
                  <>
                    Sent Successfully <Check size={18} />
                  </>
                ) : submitStatus === 'error' ? (
                  <>
                    Send Failed. Try Again <AlertCircle size={18} />
                  </>
                ) : (
                  <>
                    Send Message <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
