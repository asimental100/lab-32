/* eslint-disable max-len */
import React from 'react';
import { useState } from 'react';

export const ColorContext = React.createContext();

const colors = {
  light: '#FFF8DC',
  dark: '#000000',
  textLight: '#FFF8DC',
  textDark: '#000000'
};

// eslint-disable-next-line react/prop-types
export const ColorProvider = ({ children }) => {
  const [backgroundColorType, setBackgroundColorType] = useState(colors.light);
  const [textColorType, setTextColorType] = useState(colors.dark);

  const toggle = () => {
    setTextColorType(oldTextColor => {
      if(oldTextColor === colors.dark) return colors.light;
      return colors.dark;
    });

    setBackgroundColorType(oldColor => {
      if(oldColor === colors.light) return colors.dark;
      return colors.light;
    });

  };

  return (
    <ColorContext.Provider value={{ backgroundColorType, toggle, textColorType }}>
      {children}
    </ColorContext.Provider>
  );
};
