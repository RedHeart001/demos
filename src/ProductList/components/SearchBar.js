import React from 'react';

function SearchBar({ filteWord, isStocked, onInputChange, onCheckboxChange }) {

    function inputChange(e) {
        onInputChange(e.target.value);
    }

    function checkboxChange(e) {
        onCheckboxChange(e.target.checked);
    }

    return (
        <form>
            <input type="text" value={filteWord} placeholder="Search..." onChange={inputChange} />
            <p>
                <input type="checkbox" checked={isStocked} onChange={checkboxChange} />
                {' '}
                Only show products in stock
            </p>
        </form>
    )
}

export default SearchBar;