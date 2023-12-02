import React, { createContext, useState, useContext } from 'react';

import checkIfItemInLocalStorage from '../utils/checkLocalstorage';

export const FinalValuesContext = createContext();

export const useFinalValuesContext = () => {
  return useContext(FinalValuesContext);
};

export const FinalValuesDataProvider = ({ children }) => {
  const [FinalValues, setFinalValues] = useState(checkIfItemInLocalStorage('FinalValues', {"P": ["", "", "", "P"],
                                                                                          "S1": ["", "", "", "S1"],
                                                                                          "R1": ["", "", "", "R1"],
                                                                                          "S2": ["", "", "", "S2"],
                                                                                          "R2": ["", "", "", "R2"],
                                                                                          "1m EMA 200": ["", "", "blue", "1m EMA"],
                                                                                          "5m EMA 200": ["", "", "green", "5m EMA"],
                                                                                          "30m EMA 200": ["", "", "gray", "30m EMA"],
                                                                                          "2H EMA 200": ["", "", "brown", "2H EMA"],
                                                                                          "D EMA 200": ["", "", "red", "D EMA"],
                                                                                          "Nifty Futures": ["", "", "yellow", "Nifty Futures"]}));

  const updateFinalValues = (newFinalValues) => {
    setFinalValues(newFinalValues);
  };

  return (
    <FinalValuesContext.Provider value={{ FinalValues , updateFinalValues }}>
      {children}
    </FinalValuesContext.Provider>
  );
};
