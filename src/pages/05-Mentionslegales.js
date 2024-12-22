import React from 'react';
import { Helmet } from "react-helmet";
import { Accordion } from 'react-bootstrap';
import styles from '../styles/05-Mentionslegales.module.scss';

const MentionsLegales = () => {
  return (
    <>
      {/* Balise meta pour empêcher l'indexation et titre de la page */}
      <Helmet>
        <title>Mentions Légales</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <h1 className={styles.title}>Mentions Légales</h1>

      <div className={styles.legalContainer}>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Éditeur du site</Accordion.Header>
            <Accordion.Body>
              <p><strong>Nom :</strong> John Doe</p>
              <p><strong>Adresse :</strong> 40 Rue Laure Diebold, 69009 Lyon, France</p>
              <p><strong>Téléphone :</strong> 10 20 30 40 50</p>
              <p><strong>Email :</strong> john.doe@gmail.com</p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>Hébergeur du site</Accordion.Header>
            <Accordion.Body>
              <p><strong>Nom :</strong> alwaysdata</p>
              <p><strong>Adresse :</strong> 91 Rue du Faubourg Saint-Honoré, 75008 Paris</p>
              <p><strong>Site web :</strong> <a href="https://www.alwaysdata.com/fr/" target="_blank" rel="noopener noreferrer">www.alwaysdata.com</a></p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>Crédits</Accordion.Header>
            <Accordion.Body>
              <p>Ce site a été réalisé par <strong>John Doe</strong>, étudiant au <a href="https://www.centre-europeen-formation.fr/landing/multi-marque/?code=1464&utm_source=google&utm_medium=cpc&utm_campaign=TOTAL-REF_PAYANT-Marque_CEF&gad_source=1&gclid=CjwKCAiA34S7BhAtEiwACZzv4SDyc-yXHQSFMgAMqy9DFGOnJrEgOn5rxmyPgDhdz__ySfv0JWjkDhoCjnIQAvD_BwE" target="_blank" rel="noopener noreferrer">Centre Européen de Formation</a></p>
              <p><i>Les images utilisées sur ce site sont libres de droit et ont été obtenues sur le site <a href="https://www.pixabay.com" target="_blank" rel="noopener noreferrer">Pixabay</a></i></p>
              <p><i>La favicon de ce site a été fournie par <a href="https://www.flaticon.com" target="_blank" rel="noopener noreferrer">John Doe Icons erstellt von Freepik - Flaticon</a></i></p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
};

export default MentionsLegales;