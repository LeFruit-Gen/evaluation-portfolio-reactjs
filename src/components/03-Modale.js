import React from 'react';
import styles from './03-Modale.module.scss';

const Modal = ({ onClose, data }) => {
  if (!data) {
    return (
      <div className={styles.modal}>
        <div className={styles.backdrop} onClick={onClose}></div>
        <div className={styles.modalContent}>
          <p>Chargement des données...</p>
          <button onClick={onClose} className={styles.closeButton}>Fermer</button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.modal}>
      <div className={styles.backdrop} onClick={onClose}></div> {/* Ajout du backdrop ici */}
      <div className={styles.modalContent}>
        {/* Bouton pour fermer la modale */}
        <button onClick={onClose} className={styles.closeButton}>X</button>

        {/* Avatar et nom */}
        <img
          src={data.avatar_url}
          alt={`${data.name || data.login} avatar`}
          className={styles.avatar}
        />
        <h2>{data.name || 'Nom non renseigné'}</h2>

        {/* Bio */}
        <p><strong>Bio :</strong> {data.bio || 'Aucune description disponible.'}</p>

        {/* Localisation */}
        <p><strong>Localisation :</strong> {data.location || 'Non spécifiée'}</p>

        {/* Repositories */}
        <p><strong>Repositories publics :</strong> {data.public_repos}</p>

        {/* Followers et Following */}
        <p><strong>Followers :</strong> {data.followers}</p>
        <p><strong>Following :</strong> {data.following}</p>

        {/* Lien vers le profil GitHub */}
        <a
          href={data.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.profileLink}
        >
          Voir le profil GitHub
        </a>
      </div>
    </div>
  );
};

export default Modal;
