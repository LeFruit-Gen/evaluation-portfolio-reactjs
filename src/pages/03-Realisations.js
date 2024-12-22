import React from 'react';
import styles from '../styles/03-Realisations.module.scss';

const Realisations = () => {
  const services = [
    {
      title: "Fresh Food",
      description: "Site de vente de produit frais en ligne",
      image: "/images/fresh-food.jpg",
      link: "https://www.freshfood.fr/" ,
    },
    {
      title: "Restaurant AkiraBack",
      description: "Site de présentation pour un restaurant japonnais",
      image: "/images/restaurant-japonais.jpg",
      link: "https://www.akirabackparis.com/fr/",
    },
    {
      title: "Sante Forme",
      description: "Site de vente de produit bien-être en ligne",
      image: "/images/espace-bien-etre.jpg",
      link: "https://www.sante-forme.com/brand/3-sante-forme",
    },
    {
      title: "SEO Optimization",
      description: "Amélioration du référencement d'un site e-commerce",
      image: "/images/seo.jpg",
      link: "https://www.nickmayerart.com/",
    },
    {
      title: "Création d'une API",
      description: "Création d'une API RESTFULL publique",
      image: "/images/screens.jpg",
      link: "https://developer.themoviedb.org/docs/getting-started",
    },
    {
      title: "Maquette d'un site web",
      description: "Création du prototype d'un site",
      image: "/images/coder.jpg",
      link: "https://www.figma.com/design/FNZvL052NymrWl9ReB4VkH/maquette-probeats-cef?node-id=3-2&p=f&t=v6WYAy7z0d93O82o-0",
    },
  ];

  return (
    <div className={styles['services-container']}>
      <h1>Portfolio</h1>
      <p>Voici quelques-une de mes réalisations</p>
      <div className={styles['services-cards']}>
        {services.map((service, index) => (
          <div className={`card ${styles['service-card']}`} key={index}>
            <img src={service.image} alt={service.title} className={styles["card-img"]} />
            <div className="card-body">
              <h2 className={styles['card-title']}>{service.title}</h2>
              <p className={styles['card-text']}>{service.description}</p>
              <a href={service.link} target="_blank" rel="noopener noreferrer" className={styles["custom-btn"]} >Voir le site</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Realisations;