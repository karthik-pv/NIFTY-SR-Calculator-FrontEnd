import React from 'react';
import { useSRValuesContext } from './contexts/SRValuesContext';
import NoEditTablePrint from './htmlElements/NoEditTable';

const SRTableData = [
    { id: 'P' },
    { id: 'R1' },
    { id: 'S1' },
    { id: 'R2' },
    { id: 'S2' }
  ];

const SRTableDisplay = () => {

  const { SRValues } = useSRValuesContext();

  return (
    <NoEditTablePrint
    lefthead={'Pivot Values'}
    righthead={'Value'}
    tabledata={SRTableData}
    values = {SRValues}
    />
  );
};

export default SRTableDisplay
