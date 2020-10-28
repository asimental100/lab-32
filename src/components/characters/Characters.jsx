import React from 'react';
import PropTypes from 'prop-types';
import styles from './Characters.css';

export const Character = ({ name, status, image }) => (
  <li key={name} className={styles.CharactersLightMode}>
    <h1>{name}</h1>
    <img src={image} alt={name}></img>
    <p>{status}</p>
  </li>
);

Character.propTypes = {
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};
