import React from "react";

const NoEditTableRow = ({ id, value }) => {
  return (
    <tr>
      <td className="text-center">{id}</td>
      <td>
        <div className="text-center">{value}</div>
      </td>
    </tr>
  );
};

export default NoEditTableRow;
