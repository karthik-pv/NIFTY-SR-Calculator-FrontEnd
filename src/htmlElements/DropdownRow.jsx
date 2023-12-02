import React from "react";

const DropdownRow = ({ id, selectedValue, handleDropdownChange }) => {
  return (
    <tr align="center">
      <td className="text-center">{id}</td>
      <td align="center">
        <select className="text-center" id="dropdown" value={selectedValue} onChange={(e)=>handleDropdownChange(e.target.value)}>
          <option value={0} className="justify-center">-- Select --</option>
          <option value={1}>Above</option>
          <option value={-1}>Below</option>
        </select>
      </td>
    </tr>
  );
};

export default DropdownRow;
