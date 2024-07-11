const TableRowHeader = ({ labels }) => {
  return (
    <thead>
      <tr>
        <th>
          <span className="custom-checkbox">
            <input type="checkbox" id="selectAll" />
            <label htmlFor="selectAll"></label>
          </span>
        </th>
        {
          labels.map((label) => <th key={label}>{label}</th>)
        }
      </tr>
    </thead>
  );
};


export default TableRowHeader;