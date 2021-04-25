import React from 'react';
import ReactDOM from 'react-dom';
import ChildComponent from './ChildComponent';

function App() {
    return (
        <div>
            <ChildComponent text='before' count={0}>
                {(props) => {
                    return (
                        <div>
                            <p>
                                {props.text}
                            </p>
                            <p>
                                {props.count}
                            </p>
                        </div>
                    )
                }}
            </ChildComponent>
        </div >
    )
}

ReactDOM.render(<App />, document.getElementById('root'));