import React, { createContext, useState, useContext } from 'react';

import checkIfItemInLocalStorage from '../utils/checkLocalstorage';

export const SRValuesContext = createContext();

export const useSRValuesContext = () => {
  return useContext(SRValuesContext);
};

export const SRDataProvider = ({ children }) => {
  const [SRValues, setSRValues] = useState(checkIfItemInLocalStorage('SRValues',['','','','','']));

  const updateSRValues = (value) => {
      setSRValues(value);
  };

  return (
    <SRValuesContext.Provider value={{ SRValues, updateSRValues }}>
      {children}
    </SRValuesContext.Provider>
  );
};
