import React from 'react';
import EditTablePrint from './htmlElements/EditTable';
import Axios from "axios"
import { useSRValuesContext } from './contexts/SRValuesContext';
import { useOCHLContext } from './contexts/ochlContext';

const OpenCloseHighLowTable = () => {

  const tagNames = ['open', 'close', 'high', 'low'];

  const {OCHLValues, updateOCHLValues} = useOCHLContext();

  const convertToOchlDict = (ochl, tagNames) => {
    const dictionary = {};
    ochl.forEach((value, index) => {
      const name = tagNames[index];
      dictionary[name] = Number(value);
    });
    return dictionary;
  };

  const { SRValues, updateSRValues } = useSRValuesContext();

  const sendOchlValues = async (data) => {
    try {
      const response = await Axios.post(
        'http://127.0.0.1:3000/NSRCal/api/v1/calculateSRValues',
        data,
        {
          withCredentials: true,
          headers: { 'Content-Type': 'application/json' },
        }
      );
      let values = response.data.SRValues
      let valuesArray = Object.values(values);
      updateSRValues(valuesArray)

    } catch (error) {
      console.error(error.response);
      alert(error.response.data.errorArray);
    }
  };

  const submitOchlValues = () => {
    const dict = convertToOchlDict(OCHLValues, tagNames);
    const data = JSON.stringify(dict);
    sendOchlValues(data);
    return data;
  };


  const ochlTableData = [
    { id: 'Open' },
    { id: 'Close' },
    { id: 'High' },
    { id: 'Low' },
  ];

  return (
    <EditTablePrint
      heading="NSE Index Previous Day"
      tabledata={ochlTableData}
      values={OCHLValues}
      onValueChange={updateOCHLValues}
      onSubmit={submitOchlValues}
      buttonName={"Calculate SR"}
    />
  );
};

export default OpenCloseHighLowTable;
