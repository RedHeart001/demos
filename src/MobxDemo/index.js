import React from 'react';
import { render } from 'react-dom';
import { inject, Provider } from 'mobx-react';
import store from './store';

const Counter = (props) => {
    return (
        <div>
            <p>

                count :
                <span>{appState.count}</span>
            </p>
            <button onClick={() => appState.increase()}>+</button>
            <button onClick={() => appState.decrease()}>-</button>
        </div>
    )
};


function App() {
    return (
        <Provider store={store}>
            <Counter />
        </Provider>
    )
}

render(<App />, document.getElementById('root'));

