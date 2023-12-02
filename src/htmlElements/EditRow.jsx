import React from 'react';

const EditTableRow = ({ id, value, onChange }) => (
  <tr>
    <td className='text-center'>{id}</td>
    <td align='center'>
      <input className='text-center'
        type="number"
        min="1"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{width:'50%'}}
      />
    </td>
  </tr>
);

export default EditTableRow;
