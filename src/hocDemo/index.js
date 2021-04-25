import React from 'react';
import ReactDOM from 'react-dom';

function ContainerComponent(OriginComponent) {
    const myprops = {
        text: 'before',
        count: 0
    }
    const targetComponent = (props) => {
        return (
            <OriginComponent {...props} {...myprops} />
        )
    }

    return targetComponent
}

function Child(props) {
    return (
        <div>
            {props.text}
        </div>
    )
}





function App() {
    const NewChild = ContainerComponent(Child);
    return (
        <div>
            <NewChild />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));