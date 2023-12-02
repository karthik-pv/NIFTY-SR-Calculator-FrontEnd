import React, { createContext, useState, useContext } from 'react';
import checkIfItemInLocalStorage from '../utils/checkLocalstorage';
import checkNullNegative from '../utils/checkNullNegative';
export const NSECurrentContext = createContext();

export const useNSECurrentContext = () => {
  return useContext(NSECurrentContext);
};

export const NSECurrentDataProvider = ({ children }) => {
  const [NSECurrValues, setNSECurrValues] = useState(checkIfItemInLocalStorage('NSECurrValues',['','']));

  const updateNSECurrValues = (index , value) => {
    if(Array.isArray(value)){
      if(checkNullNegative(value)){
        setNSECurrValues(value);
      }
    } else {
    const updatedValues = [...NSECurrValues];
    if(checkNullNegative(value)){
      updatedValues[index] = value;
    }
    setNSECurrValues(updatedValues);
  }};

  return (
    <NSECurrentContext.Provider value={{ NSECurrValues, updateNSECurrValues }}>
      {children}
    </NSECurrentContext.Provider>
  );
};