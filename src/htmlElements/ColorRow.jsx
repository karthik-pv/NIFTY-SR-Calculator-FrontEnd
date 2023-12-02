import React from "react";

const ColorRow = ({name,value1,value2,bgcolor}) => {
    return (
        <tr>
          <td className="text-center" width={'40%'}>{name}</td>
          <td>
            <div className="text-center">{value1}</div>
          </td>
          <td className="text-center">
            <div>{value2}</div>
          </td>
          <td width="100px" style={{"backgroundColor" : bgcolor}}>
          </td>
        </tr>
      );
}

export default ColorRow;