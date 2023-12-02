import React, { createContext, useState, useContext } from 'react';
import checkIfItemInLocalStorage from '../utils/checkLocalstorage';

export const GapDirectionContext = createContext();

export const useGapDirectionContext = () => {
  return useContext(GapDirectionContext);
};

export const GapDirectionDataProvider = ({ children }) => {
  const [GapDirectionValue, setGapDirectionValue] = useState(checkIfItemInLocalStorage('GapDirectionValue',0));

  const updateGapDirectionValue = (newGapDirectionValue) => {
    setGapDirectionValue(newGapDirectionValue);
  };

  return (
    <GapDirectionContext.Provider value={{ GapDirectionValue, updateGapDirectionValue }}>
      {children}
    </GapDirectionContext.Provider>
  );
};
