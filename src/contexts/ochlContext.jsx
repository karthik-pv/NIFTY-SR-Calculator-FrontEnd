import React, { createContext, useState, useContext } from 'react';
import checkNullNegative from '../utils/checkNullNegative';
import checkIfItemInLocalStorage from '../utils/checkLocalstorage';
export const OCHLContext = createContext();

export const useOCHLContext = () => {
  return useContext(OCHLContext);
};

export const OCHLDataProvider = ({ children }) => {
  const [OCHLValues, setOCHLValues] = useState(checkIfItemInLocalStorage('OCHLValues',['','','','']));

  const updateOCHLValues = (index, value) => {
    if(Array.isArray(value)){
      if(checkNullNegative(value)){
        setOCHLValues(value);
      }
    } else {
    const updatedValues = [...OCHLValues];
    if(checkNullNegative(value)){
      updatedValues[index] = value;
    }
    setOCHLValues(updatedValues);
  }};

  return (
    <OCHLContext.Provider value={{ OCHLValues, updateOCHLValues }}>
      {children}
    </OCHLContext.Provider>
  );
};