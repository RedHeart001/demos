import React from 'react';
import ReactDOM from 'react-dom';

class Counter extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0
        };
    }

    increase = () => {
        this.setState((state) => ({
            count: ++state.count
        }))
    }

    decrease() {
        let count = this.state.count
        this.setState({
            count: --count
        })
    }

    render() {
        return (
            <div>
                <p>
                    {this.state.count}
                </p>
                <button onClick={this.increase}>increase</button>
                <button onClick={this.decrease.bind(this)}>decrease</button>
            </div>
        )
    }
}


class Warning extends React.Component {

    componentDidUpdate() {
        console.log(111);
    }

    render() {
        if (this.props.showWarn) {
            return (
                <p>
                    Warning!
                </p>
            )
        } else {
            return null;
        }
    }
}


class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showWarn: true
        }
    }

    show = () => {
        this.setState({
            showWarn: true
        })
    }

    hide = () => {
        this.setState({
            showWarn: false
        })
    }

    render() {
        return (
            <div>
                <Warning showWarn={this.state.showWarn} />
                <button onClick={this.show}>show</button>
                <button onClick={this.hide}>hide</button>
            </div>
        )
    }

}



class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
    }

    handleChange = (event) => {
        this.setState({ value: event.target.value });
    }

    handleSubmit = (event) => {
        alert('提交的名字: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    名字:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="提交" />
            </form>
        );
    }
}

ReactDOM.render(<NameForm />, document.getElementById('root'));