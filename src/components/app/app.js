import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

function App() {

    const data = [
        {name: 'Trevor T.', salary:1300, increase: false, id: 1},
        {name: 'John C.', salary:800, increase: true, id: 2},
        {name: 'Elena T.', salary:3000, increase: false, id: 3},
        {name: 'Wayne S.', salary:5000, increase: false, id: 4}
    ];

    return (
        <div className="app">
            <AppInfo/>

            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>

            <EmployeesList data={data}/>
            <EmployeesAddForm/>
        </div>
    );
}

export default App;