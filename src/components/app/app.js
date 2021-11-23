import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
    constructor (props) {
        super(props);
        this.state = {
            data : [
                {name: 'Trevor T.', salary:1300, increase: false, id: 1},
                {name: 'John C.', salary:800, increase: true, id: 2},
                {name: 'Elena T.', salary:3000, increase: false, id: 3},
                {name: 'Wayne S.', salary:5000, increase: false, id: 4}
            ]
        };
        this.maxId = 5;
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return { data: data.filter(item => (item.id !== id)) }
        })
    }

    addItem = (name, salary) => {
        const newUser = {
            name,
            salary,
            increase: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            return { data: [...data, newUser] }
        })
    }

    render () {    
        return (
            <div className="app">
                <AppInfo/>
    
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
    
                <EmployeesList
                    data={this.state.data}
                    onDelete={this.deleteItem}
                    />
                <EmployeesAddForm onAdd={this.addItem}/>
            </div>
        );
    }
}

export default App;