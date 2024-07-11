const TableBody = ({ children }) => {
  return (
    <table className="table table-striped table-hover">
      {children}
    </table>
  );
};


export default TableBody;