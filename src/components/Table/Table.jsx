import Pagination from "../Pagination";


export default function Table({ children }) {
  return (
    <div className="container-xl">
      <div className="table-responsive">
        <div className="table-wrapper">
          {children}
          <Pagination />
        </div>
      </div>
    </div>
  );
}