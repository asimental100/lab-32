import React from 'react';
import { Character } from './Characters';
import { useCharacters } from '../../hooks/character';
import styles from './CharactersList.css';

export const CharacterList = () => {
  const { loading, characters } = useCharacters();
  if(loading) return <h1>Loading...</h1>;

  const characterElements = characters.map(character => (
    <>
      <Character {...character} />
    </>
  ));

  return (
    <ul className={styles.CharactersList}>
      {characterElements}
    </ul>
  );
};
