import React from "react";
import NoEditTableRow from "./NoEditRow"
import EditTableRow from "./EditRow"

const MixedTable1 = ({lefthead , righthead , values , fixedParameter , fixedParameterValue , tabledata , onEMAChange}) => (
    <div style={{paddingLeft:'10%' , paddingTop:'5%'}}>
        <table border="0" width={'70%'}>
            <tr>
                <th className="text-center">{lefthead}</th>
                <th className="text-center">{righthead}</th>
            </tr>
            <tbody>
                <NoEditTableRow 
                id = {fixedParameter}
                value = {fixedParameterValue}
                />
                {tabledata.map((row, index) => (
                <EditTableRow
                    id={row.id}
                    value={values[index]}
                    onChange={(newValue) => onEMAChange(index, newValue)}
                />
                ))}
            </tbody>
        </table>
    </div>
)

export default MixedTable1;
