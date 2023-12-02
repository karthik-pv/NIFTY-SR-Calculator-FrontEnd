import React from "react";
import { useFinalValuesContext } from "./contexts/FinalContext";
import ColorRow from "./htmlElements/ColorRow";

const DisplayFinalTable = () => {

    const { FinalValues , updateFinalValues } = useFinalValuesContext();

    return(
        <div>
            <h2>{""}</h2>
            <table border="1" width={'80%'}>
            <tbody>
            {Object.keys(FinalValues).map((key) => (
                <ColorRow
                name={FinalValues[key][3]}
                value1={FinalValues[key][0]}
                value2={FinalValues[key][1]}
                bgcolor={FinalValues[key][2]}
                />
          ))}
            </tbody>
            </table>
        </div>
    )
}

export default DisplayFinalTable;