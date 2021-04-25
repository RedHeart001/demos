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

class TextForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
    }

    handleChange = (event) => {
        this.setState({ value: event.target.value });
    }

    handleSubmit = (event) => {
        alert('提交的文本: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    文本:
            <textarea value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="提交" />
            </form>
        );
    }
}

class SelectForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 'grapefruit' };
    }

    handleChange = (event) => {
        this.setState({ value: event.target.value });
    }

    handleSubmit = (event) => {
        alert('您最喜欢的水果是: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    选择最喜欢的水果:
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="grapefruit">葡萄柚</option>
                        <option value="lime">酸橙</option>
                        <option selected value="coconut">椰子</option>
                        <option value="mango">芒果</option>
                    </select>
                </label>
                <input type="submit" value="提交" />
            </form>
        );
    }
}


class MultipleSelectForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: [] };
    }

    handleChange = (event) => {
        let { value } = this.state;
        value.push(event.target.value);
        this.setState({ value });
    }

    handleSubmit = (event) => {
        alert('您最喜欢的水果是: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    选择最喜欢的水果:
                    <select multiple='multiple' value={this.state.value} onChange={this.handleChange}>
                        <option value="grapefruit">葡萄柚</option>
                        <option value="lime">酸橙</option>
                        <option value="coconut">椰子</option>
                        <option value="mango">芒果</option>
                    </select>
                </label>
                <input type="submit" value="提交" />
            </form>
        );
    }
}


function App() {
    return (
        <div>
            <NameForm />
            <TextForm />
            <SelectForm />
            <MultipleSelectForm />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));