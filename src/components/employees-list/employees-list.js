import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({data}) => {

    const elements = data.map(({id, ...itemProps}) => <EmployeesListItem key={id} {...itemProps}/>)

    console.log(elements);

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    );
}

export default EmployeesList;