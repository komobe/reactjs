import './App.css'
import DeleteEmployeeForm from './components/deleteEmployeeForm'
import { EditEmployeeForm } from './components/EditEmployeeForm'
import ModalContent from './components/Modal/ModalContent'
import ModalDialog from './components/Modal/ModalDialog'
import TableRowBody from './components/table/rows/TableRowBody'
import TableRowHeader from './components/table/rows/TableRowHeader'
import Table from './components/Table/Table'
import TableBody from './components/Table/TableBody'
import TableTitle from './components/Table/TableTitle'
import TableEmployeeRow from './components/TableEmployeeRow'
import { employees } from './data/employees'
import { tableHeaderLabels } from './data/table-header'

function App() {
  return (
    <>
      <Table>
        <TableTitle value={<>Manage <b>Employees</b></>} />
        <TableBody>
          <TableRowHeader labels={tableHeaderLabels} />
          <TableRowBody>
            {employees.map((value) => <TableEmployeeRow key={value.id} employee={value} />)}
          </TableRowBody>
        </TableBody>
      </Table >
      <ModalDialog modalId="addEmployeeModal">
        <ModalContent>
          <EditEmployeeForm title="Add Employee" />
        </ModalContent>
      </ModalDialog>

      <ModalDialog modalId="editEmployeeModal">
        <ModalContent>
          <EditEmployeeForm title="Edit Employee" />
        </ModalContent>
      </ModalDialog>

      <ModalDialog modalId="deleteEmployeeModal">
        <ModalContent>
          <DeleteEmployeeForm />
        </ModalContent>
      </ModalDialog >
    </>
  )
}

export default App
