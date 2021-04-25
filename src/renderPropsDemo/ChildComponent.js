import React from 'react';
function ChildComponent(props) {
    return (
        <div>
            {props.children({ ...props })}
        </div>
    )
}
export default ChildComponent;