import React from "react";
import ReactDOM from "react-dom";

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>The water would boil.</p>;
    }
    return <p>The water would not boil.</p>;
}

function TemperatureInput({ scale, temperature, onTemperatureChange }) {

    const handleChange = (e) => {
        onTemperatureChange({
            scale,
            temperature: e.target.value
        });
    }

    return (
        <fieldset style={{ 'marginBottom': '20px', 'padding': '5px' }}>
            <legend>Enter temperature in {scaleNames[scale]}:</legend>
            <input value={temperature}
                onChange={handleChange} />
        </fieldset>
    )

}


class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            scale: 'c',
            temperature: ''
        }
    }

    // 锁机制，逻辑交给上层，下层组件只负责渲染

    handleChange = (lastChange) => {
        this.setState({
            ...lastChange
        })
    }

    render() {
        const { temperature, scale } = this.state;
        const celsius = scale === 'c' ? temperature : tryConvert(temperature, toCelsius);
        const fahrenheit = scale === 'f' ? temperature : tryConvert(temperature, toFahrenheit);
        return (
            <div>
                <TemperatureInput scale="c" temperature={celsius} onTemperatureChange={this.handleChange} />
                <TemperatureInput scale="f" temperature={fahrenheit} onTemperatureChange={this.handleChange} />
                <BoilingVerdict celsius={parseFloat(celsius)} />
            </div>
        );
    }



}

function App() {
    return (
        <Calculator />
    )
}


ReactDOM.render(
    <App />,
    document.getElementById("root")
);