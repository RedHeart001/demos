import React from 'react';
import ReactDOM from 'react-dom';
import ChildComponent from './ChildComponent';

function App() {
    console.log('111');
    return (
        <div>
            <ChildComponent text={'before'} count={0}>
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
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));