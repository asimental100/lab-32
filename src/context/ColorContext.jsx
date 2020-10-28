import React from 'react';
import { useState } from 'react';

export const ColorContext = React.createContext();

// eslint-disable-next-line react/prop-types
export const ColorProvider = ({ children }) => {
  const [colorType, setColorType] = useState('light');

  const toggle = () => {
    setColorType(oldColorType => {
      console.log(oldColorType);
      if(oldColorType === 'light') return 'dark';
      return 'light';
    });
  };

  return (
    <ColorContext.Provider value={{ colorType, toggle }}>
      {children}
    </ColorContext.Provider>
  );
};
