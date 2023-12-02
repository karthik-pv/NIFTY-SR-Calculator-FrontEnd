import React from "react";
import { useNIFTYValueContext } from "../src/contexts/NIFTYValueContext";
import { useEMAValueContext } from "../src/contexts/EMAValueContext";
import MixedTable1 from "./htmlElements/mixedTable1";

const EMATable = () => {

    const EMATableData = [
        { id: '1m EMA 200' },
        { id: '5m EMA 200' },
        { id: '30m EMA 200' },
        { id: '2H EMA 200' },
        { id: 'D EMA 200' }
      ];

      const {NIFTYValue,updateNIFTYValue} = useNIFTYValueContext();
      const {EMAValue,updateEMAValue} = useEMAValueContext();

    return (
        <MixedTable1 
        lefthead={'EMAs'}
        righthead={'Value'}
        values = {EMAValue}
        fixedParameter = {'Nifty Value'}
        fixedParameterValue = {NIFTYValue}
        tabledata = {EMATableData}
        onEMAChange = {updateEMAValue}
        />
    )
}

export default EMATable;