import { Children } from "react";

export default function ModalContent({ children }) {
  return (
    <div className="modal-content">{children}</div>
  );
}