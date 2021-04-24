/*
 * @Author: LiAo
 * @Date: 2020-10-24 16:21:36
 * @LastEditors: LiAo
 * @LastEditTime: 2020-10-26 20:41:02
 * @FilePath: \first-app\src\emitDemo\index.js
 */
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Emitter from '../emitter';
const globalEmitter = new Emitter();

function EmitBoxA(props) {

    return (
        <div className='emitbox'
            onClick={() => {
                globalEmitter.emit('sendMsg', props.text)
            }}>
            {props.text}
        </div>
    )
}

class EmitBoxB extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'B'
        }
    }

    componentDidMount() {
        globalEmitter.on(`sendMsg`, (msg) => {
            console.log('msg from ' + msg + ' to ' + this.state.text);
        })
    }


    render() {
        return (
            <div className='emitbox'>
                {this.state.text}
            </div>
        )
    }
}


class EmitContainer extends React.Component {

    render() {
        return (
            <div className='emitcontainer'>
                <EmitBoxA text={"A"} />
                <EmitBoxB />
            </div>
        )
    }
}

ReactDOM.render(<EmitContainer />, document.getElementById('root'));