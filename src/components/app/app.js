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
            ],
            term: '',
            filter: ''
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

    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter(item => item.name.toLowerCase().includes(term.toLowerCase()))
    }

    onUpdateSearch = (term) => {
        this.setState({term});
    }

    filterEmp = (items, filter) => {
        if (filter === 'rise') return items.filter(item => item.rise);
        if (filter === 'salary') return items.filter(item => item.salary > 1000);
        return items;
    }

    onUpdateFilter = (filter) => {
        this.setState({filter});
    }
   
    render () {
        const {data, term, filter} = this.state;
        const total = data.length;
        const increaseTotal = data.filter(item => item.increase).length;
        const visibleData = filter ? this.filterEmp(this.searchEmp(data, term), filter) : this.searchEmp(data, term);
        
        return (
            <div className="app">
                <AppInfo employees={total} increased={increaseTotal}/>
    
                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter onUpdateFilter={this.onUpdateFilter}/>
                </div>
    
                <EmployeesList
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}/>
                <EmployeesAddForm onAdd={this.addItem}/>
            </div>
        );
    }
}

export default App;