import React from 'react';
import EditTableRow from './EditRow';

const EditTablePrint = ({ heading, tabledata, values, onValueChange, onSubmit , buttonName }) => (
  <div>
    <h4>{heading}</h4>
    <table border="0" className='text-center' width={'50%'}>
      <tbody>
        {tabledata.map((row, index) => (
          <EditTableRow
            key={row.id}
            id={row.id}
            value={values[index]}
            onChange={(newValue) => onValueChange(index, newValue)}
          />
        ))}<tr>
              <td className='text-center' colSpan={2}>
                <input 
                  type="button"
                  value={buttonName}
                  onClick={onSubmit}
                />
              </td>
            </tr>
      </tbody>
    </table>
  </div>
);

export default EditTablePrint;
