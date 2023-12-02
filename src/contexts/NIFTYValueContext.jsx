import React, { createContext, useState, useContext } from 'react';

import checkIfItemInLocalStorage from '../utils/checkLocalstorage';

export const NIFTYValueContext = createContext();

export const useNIFTYValueContext = () => {
  return useContext(NIFTYValueContext);
};

export const NIFTYValueDataProvider = ({ children }) => {
  const [NIFTYValue, setNIFTYValue] = useState(checkIfItemInLocalStorage('NIFTYValue',''));
  const updateNIFTYValue = (newNIFTYValue) => {
    setNIFTYValue(newNIFTYValue);
  };

  return (
    <NIFTYValueContext.Provider value={{ NIFTYValue, updateNIFTYValue }}>
      {children}
    </NIFTYValueContext.Provider>
  );
};
