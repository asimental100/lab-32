/* eslint-disable max-len */
import React, { useContext } from 'react';
import { ColorContext } from '../context/ColorContext';
import { useColorToggle } from '../hooks/character';
import styles from './Header.css';

export const Header = () => {
  const toggle = useColorToggle();

  const { backgroundColorType, textColorType } = useContext(ColorContext);

  const colors = {
    backgroundColor: backgroundColorType,
    color: textColorType
  };

  return (
    <div style={colors} className={styles.Header}>
      <button onClick={toggle} className={styles.HeaderButton} style={colors}>Toggle Light vs Dark Mode</button>
    </div>
  );
};
