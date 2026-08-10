import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Check, AlertCircle } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState('idle'); // idle, sending, success, error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus('error');
      return;
    }

    setFormStatus('sending');

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "f6d79d4e-7d3f-4531-a112-7df439bb8b74", 
          name: formData.name,
          email: formData.email,
          subject: formData.subject || "New Message from Portfolio",
          message: formData.message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setFormStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        console.error("Form submission failed", result);
        setFormStatus('error');
      }
    } catch (error) {
      console.error("Error submitting form", error);
      setFormStatus('error');
    }
  };

  return (
    <section id="contact" className="contact-section section-container reveal">
      {/* Section number badge */}
      <div className="section-number-badge">
        <div className="badge-line" />
        <span className="badge-number">06 — CONTACT</span>
        <div className="badge-line badge-line-right" />
      </div>

      <h2 className="section-title">Get In Touch</h2>
      
      <p className="contact-subtitle">
        Have a project idea, a job opportunity, or just want to say hello? 
        Feel free to drop a message or reach out through my contacts.
      </p>

      <div className="contact-grid">
        {/* Contact Info */}
        <div className="contact-info-col">
          <div className="glass-panel contact-card info-item-card">
            <h3 className="contact-card-heading">Contact Information</h3>
            
            <div className="contact-info-list">
              <a href="tel:0760168785" className="info-item">
                <div className="info-icon-wrapper cyan-glow">
                  <Phone size={20} />
                </div>
                <div className="info-text-wrapper">
                  <span className="info-label">Phone Number</span>
                  <span className="info-value">076 016 8785</span>
                </div>
              </a>

              <a href="mailto:praveennethsith06@gmail.com" className="info-item">
                <div className="info-icon-wrapper purple-glow">
                  <Mail size={20} />
                </div>
                <div className="info-text-wrapper">
                  <span className="info-label">Email Address</span>
                  <span className="info-value">praveennethsith06@gmail.com</span>
                </div>
              </a>

              <div className="info-item">
                <div className="info-icon-wrapper pink-glow">
                  <MapPin size={20} />
                </div>
                <div className="info-text-wrapper">
                  <span className="info-label">Location Address</span>
                  <span className="info-value">No. 62, Rassapana, Banduragoda, Sri Lanka</span>
                </div>
              </div>
            </div>

            <div className="contact-quick-note">
              <MessageSquare size={16} className="note-icon" />
              <p>Available for freelance collaborations, remote roles, and technical consultancies.</p>
            </div>
          </div>
        </div>

        {/* Message Form */}
        <div className="contact-form-col">
          <div className="glass-panel contact-card form-container-card">
            <h3 className="contact-card-heading">Send A Message</h3>

            {formStatus === 'success' ? (
              <div className="form-feedback success-feedback animate-float-1">
                <div className="feedback-icon-circle bg-cyan">
                  <Check size={28} />
                </div>
                <h4>Message Sent Successfully!</h4>
                <p>Thank you for reaching out, Praveen. I will respond to your email as soon as possible.</p>
                <button 
                  className="btn-secondary btn-feedback" 
                  onClick={() => setFormStatus('idle')}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    disabled={formStatus === 'sending'}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                    required
                    disabled={formStatus === 'sending'}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject (Optional)</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry"
                    disabled={formStatus === 'sending'}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    required
                    disabled={formStatus === 'sending'}
                  ></textarea>
                </div>

                {formStatus === 'error' && (
                  <div className="form-error-msg">
                    <AlertCircle size={16} />
                    <span>Please fill in all required fields correctly.</span>
                  </div>
                )}

                <button 
                  type="submit" 
                  className="btn-primary form-submit-btn"
                  disabled={formStatus === 'sending'}
                >
                  {formStatus === 'sending' ? (
                    <>Sending Message...</>
                  ) : (
                    <>Send Message <Send size={16} /></>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
