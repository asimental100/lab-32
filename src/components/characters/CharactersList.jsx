/* eslint-disable max-len */
import React, { useContext } from 'react';
import { Character } from './Characters';
import { useCharacters } from '../../hooks/character';
import { ColorContext } from '../../context/ColorContext';
import styles from './CharactersList.css';

export const CharacterList = () => {
  const { loading, characters } = useCharacters();
  if(loading) return <h1>Loading...</h1>;

  const characterElements = characters.map(character => (
    <>
      <Character {...character} />
    </>
  ));

  const { backgroundColorType, textColorType } = useContext(ColorContext);

  const colors = {
    backgroundColor: backgroundColorType,
    color: textColorType
  };

  return (
    <ul style={colors} className={styles.CharactersList}>
      {characterElements}
    </ul>
  );
};
