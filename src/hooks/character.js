import { useEffect, useState, useContext } from 'react';
import { ColorContext } from '../context/ColorContext';
import { fetchCharacters } from '../services/fetch';

export const useColorToggle = () => {
  const { toggle } = useContext(ColorContext);
  return toggle;
};

export const useCharacters = () => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetchCharacters()
      .then(fetchedCharacters => setCharacters(fetchedCharacters))
      .finally(() => setLoading(false));
  }, []);

  return {
    loading,
    characters
  };
};
