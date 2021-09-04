import React from 'react';
import ReactDOM from 'react-dom';
import { SwordContainer } from './swords';

const App = () => {
    return <div style={{
        width: "100%",
        height: "100%",
        backgroundColor:"#000"
    }}>
        <SwordContainer/>
    </div>
}

ReactDOM.render(<App />, document.getElementById("root"));