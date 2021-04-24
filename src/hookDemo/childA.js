import React from 'react';
function ChildA({ text }) {
    console.log('text is render!');
    return (
        <div>
            {text}
        </div>
    )
}

export default React.memo(ChildA, (prevProps, nextProps) => {
    console.log(prevProps, nextProps);
    if (prevProps.text === nextProps.text) {
        return true
    }
    return false
})