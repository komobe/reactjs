export default function ModalDialog({ modalId, children }) {
  return (
    <div id={modalId} className="modal fade">
      <div className="modal-dialog">
        {children}
      </div>
    </div>
  )
}