import React from 'react';
import ReactDOM from 'react-dom';
import FilterableProductTable from './components/FilterableProductTable ';


function App() {
    return (
        <FilterableProductTable />
    )
}

ReactDOM.render(<App />, document.getElementById('root'));