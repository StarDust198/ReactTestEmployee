import './app-filter.css';

const AppFilter = ({filter, onUpdateFilter}) => {
    const buttonsData = [
        {name: 'all', label: 'Все сотрудники'},
        {name: 'rise', label: 'На повышение'},
        {name: 'salary', label: 'З/П больше 1000$'}
    ];

    const buttons = buttonsData.map(({name, label}) => {
        return (
            <button
                className={`btn ${filter === name ? "btn-light" : "btn-outline-light"}`}
                type="button"
                key={name}
                onClick={() => onUpdateFilter(name)}>
                    {label}
            </button>
        )
    })

    return (
        <div className="btn-group">
            {buttons}
        </div>
    );
}

export default AppFilter;