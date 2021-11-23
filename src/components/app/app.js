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
                {name: 'Trevor T.', salary:1300, increase: false, rise: true, id: 1},
                {name: 'John C.', salary:800, increase: true, rise: false, id: 2},
                {name: 'Elena T.', salary:3000, increase: false, rise: false, id: 3},
                {name: 'Wayne S.', salary:5000, increase: false, rise: false, id: 4}
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
            rise: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            return { data: [...data, newUser] }
        })
    }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                return item.id === id ? {...item, [prop]: !item[prop]} : item;
            })
        }))
    }

    render () {
        const total = this.state.data.length;
        const increaseTotal = this.state.data.filter(item => item.increase).length;
        
        return (
            <div className="app">
                <AppInfo employees={total} increased={increaseTotal}/>
    
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
    
                <EmployeesList
                    data={this.state.data}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}/>
                <EmployeesAddForm onAdd={this.addItem}/>
            </div>
        );
    }
}

export default App;