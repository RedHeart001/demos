import React from "react";
import ReactDOM from "react-dom";
import './index.css';

function FancyBorder(props) {
    return (
        <div className={'FancyBorder FancyBorder-' + props.color}>
            {props.children}
        </div>
    );
}

function WelcomeDialog(props) {
    const { title, content } = props;
    return (
        <FancyBorder color='red'>
            <h1 className="Dialog-title">
                {title}
            </h1>
            <p className="Dialog-message">
                {content}
            </p>
        </FancyBorder>
    )
}

function LeftContent() {
    return (
        <div className="left-content">
        </div>
    )
}

function RightContent() {
    return (
        <div className="right-content">
        </div>
    )
}

function SplitPane(props) {
    return (
        <div className="SplitPane">
            <div className="SplitPane-left">
                {props.left}
            </div>
            <div className="SplitPane-right">
                {props.right}
            </div>
        </div>
    )
}

function App() {
    return (
        // < SplitPane left={< LeftContent />} right={< RightContent />} />
        <WelcomeDialog title={'Welcome'} content={'Thank you for visiting our spacecraft!'} />
    )
}

ReactDOM.render(<App />, document.getElementById('root'));