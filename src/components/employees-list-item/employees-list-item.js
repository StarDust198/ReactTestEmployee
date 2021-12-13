import { Component } from 'react';

import './employees-list-item.css';

class EmployeesListItem extends Component{
    constructor(props) {
        super(props);
        this.state = {
            salary: this.props.salary + '$'
        }
    }

    onUpdateSalary = (e) => {        
        const salary = e.target.value = e.target.value.replace(/\D/, '') + '$';
        this.setState({salary});
        this.props.onUpdateSalary(e.target.dataset.key, salary.replace(/\D/, ''));
    }
    
    render() {
        const { name, onDelete, onToggleProp, increase, rise, id } = this.props;

        let classes = "list-group-item d-flex justify-content-between";
        if (increase) classes += " increase";
        if (rise) classes += " like";
        
        return (
            <li className={classes}>
                <span className="list-group-item-label" 
                    data-toggle="rise" 
                    onClick={onToggleProp}>{name}</span>
                <input type="text" 
                    className="list-group-item-input"
                    data-key={id}
                    onInput={this.onUpdateSalary}
                    value={this.state.salary}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                        className="btn-cookie btn-sm "
                        data-toggle="increase"
                        onClick={onToggleProp}>
                        <i className="fas fa-cookie"></i>
                    </button>
    
                    <button type="button"
                            className="btn-trash btn-sm "
                            onClick={onDelete}>
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        );
    }
}

export default EmployeesListItem;