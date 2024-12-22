import React, { useState, useEffect } from 'react';
import styles from '../styles/01-Accueil.module.scss';
import Modal from '../components/03-Modale';

const ACCUEIL = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [githubData, setGithubData] = useState(null);

  useEffect(() => {
    fetch('https://api.github.com/users/github-john-doe')
      .then((response) => response.json())
      .then((data) => setGithubData(data))
      .catch((error) => console.error('Erreur lors de la récupération des données GitHub :', error));
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      {/* Hero Section */}
      <div className={styles.hero}>
        <h1 className={styles.heroTitle}>Bonjour, je suis John Doe</h1>
        <h2 className={styles.heroSubtitle}>Développeur Web full stack</h2>
        <button className={styles.heroButton} onClick={openModal}>En savoir plus</button>
      </div>

      {/* Presentation and Skills Section */}
      <div className={styles.aboutContainer}>
        {/* À propos */}
        <div className={styles.about}>
          <h2>À propos</h2>
          <img src="/images/john-doe-about.jpg" alt="John Doe" className={styles.aboutImage} />
          <p>
            John Doe, développeur web passionné et créatif, spécialisé dans la création de sites internet modernes, 
            réactifs et fonctionnels. Mon objectif est de transformer vos idées en expériences web uniques et captivantes.
          </p>
          <p>
            Avec X années d'expérience et une maîtrise de technologies comme HTML, CSS, JavaScript, et React, je m'efforce d'offrir des solutions adaptées aux besoins de mes clients et utilisateurs,
            que ce soit pour concevoir une vitrine en ligne, développer une application web ou optimiser des performances existantes.
          </p>
        </div>

        {/* Compétences */}
        <div className={styles.skills}>
          <h2>Mes compétences</h2>
          {[
            { name: 'HTML5', percentage: '90%', color: 'bg-danger' },
            { name: 'CSS3', percentage: '80%', color: 'bg-info' },
            { name: 'JavaScript', percentage: '70%', color: 'bg-warning' },
            { name: 'PHP', percentage: '60%', color: 'bg-success' },
            { name: 'React', percentage: '50%', color: 'bg-primary' },
          ].map((skill, index) => (
            <div key={index} className={styles.skill}>
              <p>{skill.name} {skill.percentage}</p>
              <div className="progress">
                <div
                  className={`progress-bar ${skill.color}`}
                  role="progressbar"
                  style={{ width: skill.percentage }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modale */}
      {isModalOpen && <Modal onClose={closeModal} data={githubData} />}
    </>
  );
};

export default ACCUEIL;