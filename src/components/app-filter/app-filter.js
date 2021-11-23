import { Component } from 'react';

import './app-filter.css';

class AppFilter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            filter: ''
        }
    }

    onUpdateFilter = (e) => {
        const filter = e.target.dataset.filter;

        this.setState({filter});
        this.props.onUpdateFilter(filter)
    }

    render() {
        const { filter } = this.state;

        return (
            <div className="btn-group">
                <button
                    className={filter ? "btn btn-outline-light" : "btn btn-light"}
                    type="button"
                    data-filter=""
                    onClick={this.onUpdateFilter}>
                        Все сотрудники
                </button>
                <button
                    className={filter === 'rise' ? "btn btn-light" : "btn btn-outline-light"}
                    type="button"
                    data-filter="rise"
                    onClick={this.onUpdateFilter}>
                        На повышение
                </button>
                <button
                    className={filter === 'salary' ? "btn btn-light" : "btn btn-outline-light"}
                    type="button"
                    data-filter="salary"
                    onClick={this.onUpdateFilter}>
                        З/П больше 1000$
                </button>
            </div>
        );
    }
}

export default AppFilter;