export const Action = ({ href, icon, label, type }) => {
  const className = 'btn btn-' + (type == 'edit' ? 'success' : 'danger');
  return (
    <a href={`#${href}`} className={className} data-toggle="modal">
      <i className="material-icons" dangerouslySetInnerHTML={{ __html: icon }}></i> <span>{label}</span>
    </a>
  );
}


export default function TableTitle({ title, children }) {
  return (
    <div className="table-title">
      <div className="row">
        <div className="col-sm-6">
          <h2>{title}</h2>
        </div>
        <div className="col-sm-6">
          {children}
        </div>
      </div>
    </div>
  );
}