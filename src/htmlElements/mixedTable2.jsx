import React from "react";
import DropdownRow from "./DropdownRow";
import EditTableRow from "./EditRow";

const MixedTable2 = ({heading , dropdownId , GapDirectionValue , changeGapDir , tabledata , NSECurrValues , alterNSECurrValues 
                    , CalculateNiftyFunction}) => {
    return (
        <div style={{paddingTop:'6%'}}>
        <h4>{heading}</h4>
        <table border="0" width={'70%'}>
            <tbody>
                <DropdownRow 
                id = {dropdownId}
                selectedValue = {GapDirectionValue}
                handleDropdownChange={changeGapDir}
                />
                {tabledata.map((row, index) => (
                <EditTableRow
                key={row.id}
                id={row.id}
                value={NSECurrValues[index]}
                onChange={(newValue) => alterNSECurrValues(index, newValue)}
              />
            ))}
            <tr>
                <td className="text-center" colSpan={2} style={{paddingTop:'2%'}}>
                    <button onClick={() => CalculateNiftyFunction()}>Calculate Nifty</button>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
    )
}

export default MixedTable2;