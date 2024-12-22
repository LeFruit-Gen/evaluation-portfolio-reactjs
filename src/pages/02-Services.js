import React from 'react';
import styles from '../styles/02-Services.module.scss';

const Services = () => {
  const services = [
    {
      title: 'UX Design',
      description: "L'UX Design est une discipline qui consiste à concevoir des produits (sites web, applications mobiles, logiciels, objets connectés, etc...) en plaçant l'utilisateur au centre des préoccupations. L'objectif est de rendre l'expérience utilisateur la plus fluide et agréable possible.",
      icon: 'bi-brush',
    },
    {
      title: 'Développement web',
      description: "Le développement de sites web consiste à créer des sites internet en utilisant des langages de programmation (HTML, CSS, Javascript, PHP, etc.) et des frameworks (Bootstrap, React, Angular, etc.)",
      icon: 'bi-phone',
    },
    {
      title: 'Référencement',
      description: "Le référencement natureil (SEO) est une technique qui consiste à optimiser un site web pour le faire remonter dans les résultats des moteurs de recherche (Google, Bing, Yahoo, etc.) L'objectif est d'attirer un maximum de visiteurs qualifiés sur le site.",
      icon: 'bi-bar-chart-line',
    },
  ];

  return (
    <div className={styles['services-container']}>
      <h1>Mon offre de service</h1>
      <p>Voici la liste de prestation sur lesquelles je peux intervenir</p>
      <div className={styles['services-cards']}>
        {services.map((service, index) => (
          <div className={`card ${styles['service-card']}`} key={index}>
            <div className="card-body">
              {/* Affichage de l'icône */}
              <i className={`bi ${service.icon} ${styles.icon}`} aria-hidden="true"></i>
              <h2 className={styles['card-title']}>{service.title}</h2>
              <p className={styles['card-text']}>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;