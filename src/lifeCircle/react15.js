import React from "react";

import ReactDOM from "react-dom";

// 定义子组件

class LifeCircle extends React.Component {

    constructor(props) {

        console.log("进入constructor");

        super(props);

        // state 可以在 constructor 里初始化

        this.state = { text: "子组件的文本" };

    }

    // 初始化渲染时调用

    componentWillMount() {

        console.log("componentWillMount方法执行");

    }

    // 初始化渲染时调用

    componentDidMount() {

        console.log("componentDidMount方法执行");

    }

    // 父组件修改组件的props时会调用

    componentWillReceiveProps(nextProps) {

        console.log("componentWillReceiveProps方法执行");

    }

    // 组件更新时调用

    shouldComponentUpdate(nextProps, nextState) {

        console.log("shouldComponentUpdate方法执行");

        return true;

    }

    // 组件更新时调用

    componentWillUpdate(nextProps, nextState) {

        console.log("componentWillUpdate方法执行");

    }

    // 组件更新后调用

    componentDidUpdate(nextProps, nextState) {

        console.log("componentDidUpdate方法执行");

    }

    // 组件卸载时调用

    componentWillUnmount() {

        console.log("子组件的componentWillUnmount方法执行");

    }

    // 点击按钮，修改子组件文本内容的方法

    changeText = () => {

        this.setState({

            text: "修改后的子组件文本"

        });

    };

    render() {

        console.log("render方法执行");

        return (

            <div className="container">

                <button onClick={this.changeText} className="changeText">

                    修改子组件文本内容

        </button>

                <p className="textContent">{this.state.text}</p>

                <p className="fatherContent">{this.props.text}</p>

            </div>

        );

    }

}

// 定义 LifeCircle 组件的父组件

class LifeCircleContainer extends React.Component {

    // state 也可以像这样用属性声明的形式初始化

    state = {

        text: "父组件的文本",

        hideChild: false,

        ownText: "父组件自有文本",

    };

    // 点击按钮，修改父组件文本的方法

    changeText = () => {

        this.setState({

            text: "修改后的父组件文本"

        });

    };

    changeOwnText = () => {

        this.setState({

            ownText: "修改后的父组件自有文本"

        });

    };

    // 点击按钮，隐藏（卸载）LifeCircle 组件的方法

    hideChild = () => {

        this.setState({

            hideChild: true

        });

    };

    render() {

        return (

            <div className="fatherContainer">

                <button onClick={this.changeText} className="changeText">

                    修改父组件文本内容

        </button>

                <button onClick={this.changeText} className="changeText">

                    修改父组件自有文本内容

        </button>

                <button onClick={this.hideChild} className="hideChild">

                    隐藏子组件

        </button>

                {this.state.hideChild ? null : <LifeCircle text={this.state.text} />}

            </div>

        );

    }

}

ReactDOM.render(<LifeCircleContainer />, document.getElementById("root"));
