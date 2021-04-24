/*
 * @Author: LiAo
 * @Date: 2020-11-02 22:27:26
 * @LastEditors: LiAo
 * @LastEditTime: 2021-02-24 17:38:21
 * @FilePath: \first-app\src\hookDemo\index.js
 */
import React, { useEffect, useState, useMemo } from 'react';
import ReactDOM from 'react-dom';
import ChildA from './childA';



function ChildB({ count }) {
    const renderContent = (count) => {
        console.log('count is render!');
        return (
            <span>
                {count}
            </span>
        )
    }

    const countContent = useMemo(() => renderContent(count), [count])
    return (
        <div>
            {countContent}
        </div>
    )
}


class Father extends React.Component {

    state = {
        text: 'before',
        count: 0,
        myObj: this.obj
    }

    changeText = () => {
        this.setState({
            text: 'after'
        })
    }

    changeCount = () => {
        this.setState({
            count: 1
        })

    }



    render() {
        let { text, count } = this.state;
        return (
            <div>
                <button onClick={this.changeText}>改变Text</button>
                <button onClick={this.changeCount}>改变Count</button>
                <ChildA text={text} />
                <ChildB count={count} />
            </div>
        )
    }
}


function List() {
    let [list, setList] = useState([]);
    let [count, setCount] = useState(1);

    const addItem = () => {
        setList(list.concat([count++]));
        setCount(count);
    }

    // 顺序决定函数触发顺序

    useEffect(() => {
        console.log('仅在挂载时调用');
    }, [])

    useEffect(() => {
        console.log('挂载时调用');
        return () => {
            console.log('卸载时调用');
        }
    });

    useEffect(() => {
        console.log('渲染时调用');
    });

    useEffect(() => {
        // 这是回调函数的业务逻辑 
        console.log('渲染时调用（但会判断前后状态）');
        // 若 xxx 是一个函数，则 xxx 会在组件卸载时被触发
        return () => {
            console.log('卸载时调用（但会判断前后状态）');
        }
    }, [list, count])


    return (
        <div>
            {
                list.length > 0 ? (
                    <ul>
                        {
                            list.map(item => {
                                return (
                                    <li key={item}>{item}</li>
                                )
                            })
                        }
                    </ul>
                ) : (
                    <p>当前列表为空！</p>
                )
            }
            <button onClick={() => { addItem() }}>add a new item</button>
        </div >
    );
}


ReactDOM.render(<Father />, document.getElementById('root'));