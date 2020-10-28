import { useEffect, useState, useContext } from 'react';
import { ColorContext } from '../context/ColorContext';
import { fetchCharacters } from '../services/fetch';

export const useColorType = () => {
  const { colorType } = useContext(ColorContext);
  return colorType;
};

export const useColors = () => {
  const [colors, setColors] = useState([]);
  const colorType = useColorType();

  const colorMap = {
    light: getLightMode,
    dark: getDarkMode
  };

  useEffect(() => {
    colorMap[colorType]()
      .then(currentColorMode => setColors(currentColorMode));
  }, [colorType]);

  return colors;
};

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
