import React from 'react';
import { useColorToggle } from '../hooks/character';

export const Header = () => {
  const toggle = useColorToggle();

  return (
    <>
      <button onClick={toggle}>Toggle Light vs Dark Mode</button>
    </>
  );
};
