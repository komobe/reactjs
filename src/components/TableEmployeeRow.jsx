const RowActions = ({ actions }) => {
  return (
    <>
      {actions.map((action) => (
        <a
          key={action.id}
          href={`#${action.href}`}
          className={action.type === 'delete' ? 'delete' : 'edit'}
          data-toggle="modal"
        >
          <i
            className="material-icons"
            data-toggle="tooltip"
            title={action.title ? action.title : action.label}
            dangerouslySetInnerHTML={{ __html: action.icon }}
          />
        </a>
      ))}
    </>
  );
};

const TableEmployeeRow = ({ employee, actions }) => {
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
        <RowActions actions={actions} />
      </td>
    </tr>
  );
};

export default TableEmployeeRow;