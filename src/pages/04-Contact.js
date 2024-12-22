import React, { useState } from 'react';
import styles from '../styles/04-Contact.module.scss';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation et soumission du formulaire ici
    console.log('Form submitted', formData);
  };

  return (
    <>
      <h1 style={{ textAlign: "center", marginBottom: "1rem" }}>Contact</h1>
      <p style={{ textAlign: "center", marginBottom: "2rem" }}>
        Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.
      </p>
      <div className={styles.contactContainer}>
        <div className={styles.formSection}>
          <h2>Formulaire de contact</h2>
          <form onSubmit={handleSubmit}>
            <input 
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              placeholder="Votre nom *" 
              required 
            />

            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              placeholder="Votre adresse email *" 
              required 
            />

            <input 
              type="tel" 
              name="phone" 
              value={formData.phone} 
              onChange={handleChange} 
              placeholder="Votre numéro de téléphone *" 
              required 
            />

            <input 
              type="text" 
              name="subject" 
              value={formData.subject} 
              onChange={handleChange} 
              placeholder="Sujet *" 
              required 
            />

            <textarea 
              name="message" 
              value={formData.message} 
              onChange={handleChange} 
              placeholder="Votre message *" 
              required
            ></textarea>

            <button type="submit">Envoyer</button>
          </form>
        </div>

        <div className={styles.infoSection}>
          <h2>Nos coordonnées</h2>
          <p><strong>John Doe</strong></p>
          <p><i className="bi bi-map"></i> 40 rue Laure Diebold</p>
          <p><i className="bi bi-geo-alt"></i>69009 Lyon, France</p>
          <p><i className="bi bi-phone"></i>10 20 30 40 50</p>
          <p><i className="bi bi-envelope-at"></i> john.doe@gmail.com</p>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3387.703627868167!2d4.7989789!3d45.778662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e1!3m2!1sfr!2sfr!4v1734338802356!5m2!1sfr!2sfr"
            width="600" 
            height="450" 
            style={{border:0}} 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade"
            title="Carte interactive - 401 Rue Laure Diebold, Lyon 9ème">
          </iframe>
        </div>
      </div>
    </>
  );
};

export default Contact;
