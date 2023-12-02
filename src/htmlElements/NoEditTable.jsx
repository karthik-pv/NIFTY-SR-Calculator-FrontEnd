import NoEditTableRow from './NoEditRow';

const NoEditTablePrint = ({ lefthead, righthead , tabledata, values }) => (
  <div style={{paddingRight:'10%'}}>
    <table border="0" width={'50%'}>
      <tbody>
        <tr>
          <th className="text-center">
            {lefthead}
          </th>
          <th className="text-center">
            {righthead}
          </th>
        </tr>
        {tabledata.map((row, index) => (
          <NoEditTableRow
            key={row.id}
            id={row.id}
            value={String(values[index])}
          />
        ))}
      </tbody>
    </table>
  </div>
);

export default NoEditTablePrint;
