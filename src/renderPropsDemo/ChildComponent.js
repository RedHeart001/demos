import React from 'react';
function ChildComponent(props) {
    return (
        <div>
            {props.children({ text: 'render props', count: 1 })}
        </div>
    )
}
export default ChildComponent;