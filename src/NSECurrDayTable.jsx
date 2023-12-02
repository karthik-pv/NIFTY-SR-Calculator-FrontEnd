import React from "react";
import MixedTable2 from "./htmlElements/mixedTable2";
import { useNIFTYValueContext } from "./contexts/NIFTYValueContext";
import { useGapDirectionContext } from "./contexts/GapDirectionContext";
import { useNSECurrentContext } from "./contexts/NSECurrDayContext";
import  Axios  from "axios";

const NSECurrDayTable = () => {

  const { NIFTYValue, updateNIFTYValue} = useNIFTYValueContext();
  
  const tabledata = [
    { id: "Nifty Cash Gap" },
    { id: "Nifty Prev Close" }
  ];

  const {GapDirectionValue, updateGapDirectionValue} = useGapDirectionContext();

  const { NSECurrValues, updateNSECurrValues } = useNSECurrentContext();

  const createSendDict = () => {
    let dict = {}
    dict.gapDirection = GapDirectionValue
    dict.niftyCashGap = NSECurrValues[0]
    dict.niftyPrevClose = NSECurrValues[1]
    return JSON.stringify(dict)
  }

  const sendNiftyValueCalculation = async (data) => {
    try {
      const response = await Axios.post(
        'https://niftysr.onrender.com/NSRCal/api/v1/calculateLatestNiftyValue',
        data,
        {
          withCredentials: true,
          headers: { 'Content-Type': 'application/json' },
        }
      );
  
      let niftyval = response.data.niftyVal;
      updateNIFTYValue(niftyval.latestNiftyValue)
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  };
  

  const CalcNiftyFunctionDef = () => {
      let data = createSendDict();
      sendNiftyValueCalculation(data);
  }

  return (
    <MixedTable2
      heading={'NSE Index Current Day'}
      dropdownId={'Gap Direction'}
      GapDirectionValue={GapDirectionValue}
      changeGapDir={updateGapDirectionValue}
      tabledata={tabledata}
      NSECurrValues={NSECurrValues}
      alterNSECurrValues={updateNSECurrValues}
      CalculateNiftyFunction={CalcNiftyFunctionDef}
    />
  );
};

export default NSECurrDayTable;
