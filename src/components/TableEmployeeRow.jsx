const TableEmployeeRow = ({ employee }) => {
  return (
    <tr>
      <td>
        <span className="custom-checkbox">
          <input type="checkbox" id={employee.id} name="options[]" value="1" />
          <label htmlFor={employee.id}></label>
        </span>
      </td>
      <td>{employee.name}</td>
      <td>{employee.address}</td>
      <td>{employee.phone}</td>
      <td>
        <a href={employee.editLink} className="edit" data-toggle="modal">
          <i className="material-icons" data-toggle="tooltip" title="Edit">
            &#xE254;
          </i>
        </a>
        <a href={employee.deleteLink} className="delete" data-toggle="modal">
          <i className="material-icons" data-toggle="tooltip" title="Delete">
            &#xE872;
          </i>
        </a>
      </td>
    </tr>
  );
};


export default TableEmployeeRow;