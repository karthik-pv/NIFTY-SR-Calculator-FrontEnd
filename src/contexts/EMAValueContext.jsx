import React, { createContext, useState, useContext } from 'react';
import checkNullNegative from '../utils/checkNullNegative';
import checkIfItemInLocalStorage from '../utils/checkLocalstorage';

export const EMAValueContext = createContext();

export const useEMAValueContext = () => {
  return useContext(EMAValueContext);
};

export const EMAValueDataProvider = ({ children }) => {
  const [EMAValue, setEMAValue] = useState(checkIfItemInLocalStorage('EMAValue',['','','','','']));

  const updateEMAValue = (index,value) => {
    if(Array.isArray(value)){
    if(checkNullNegative(value)){
      setEMAValue(value);
    }
    }
    else {
      const updatedValues = [...EMAValue];
      if(checkNullNegative(value)){
      updatedValues[index] = value;
      }
      setEMAValue(updatedValues);
    }
  };

  return (
    <EMAValueContext.Provider value={{ EMAValue, updateEMAValue }}>
      {children}
    </EMAValueContext.Provider>
  );
};
