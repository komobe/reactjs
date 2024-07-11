import './App.css';
import ModalContent from './components/Modal/ModalContent';
import ModalDialog from './components/Modal/ModalDialog';
import Table from './components/Table/Table';
import TableBody from './components/Table/TableBody';
import TableRowHeader from './components/Table/rows/TableRowHeader';
import TableRowBody from './components/Table/rows/TableRowBody';
import TableTitle, { Action } from './components/Table/TableTitle';
import TableEmployeeRow from './components/TableEmployeeRow';
import { employees } from './data/employees';
import formComponents from './config/form-mapping';
import { modals } from './config/modal';
import { actions } from './config/actions';
import { tableHeaderLabels } from './config/table-header';

function App() {
  return (
    <>
      <Table>
        <TableTitle title={<>Manage <b>Employees</b></>}>
          {actions.map((action) => (
            <Action
              key={action.id}
              href={action.modalId}
              icon={action.icon}
              label={action.label}
              type={action.type}
            />
          ))}
        </TableTitle>
        <TableBody>
          <TableRowHeader labels={tableHeaderLabels} />
          <TableRowBody>
            {employees.map((employee) => {
              const params = { employee, actions }
              return <TableEmployeeRow key={employee.id} {...params} />
            })}
          </TableRowBody>
        </TableBody>
      </Table>
      {modals.map((modal) => {
        const FormComponent = formComponents[modal.formType];
        return (
          <ModalDialog key={modal.id} modalId={modal.id}>
            <ModalContent>
              {FormComponent && <FormComponent {...modal.content} />}
            </ModalContent>
          </ModalDialog>
        );
      })}
    </>
  );
}

export default App;