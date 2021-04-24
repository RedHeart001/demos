/*
 * @Author: LiAo
 * @Date: 2020-07-07 23:47:44
 * @LastEditors: 李敖
 * @LastEditTime: 2020-07-11 14:54:00
 * @Description: file content
 */

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };
    this.changeBoardStatus = this.props.changeBoardStatus;
  }
  render() {
    return (
      <button
        className="square"
        onClick={() => {
          if (!this.props.isGameOver) {
            let clicked = this.state.clicked,
              index = this.props.index,
              currentStatus = this.props.currentStatus;
            if (!clicked) {
              this.setState({ clicked: true });
              console.log(index, currentStatus);
              this.changeBoardStatus(index, currentStatus);
            }
          }
        }}
      >
        {this.props.value}
      </button>
    );
  }
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Next: "X",
      Squares: Array(9).fill(null),
      isGameOver: false,
    };
  }
  renderSquare(i) {
    return (
      <Square
        index={i}
        isGameOver={this.state.isGameOver}
        value={this.state.Squares[i]}
        currentStatus={this.state.Next}
        changeBoardStatus={(index, currentStatus) => {
          this.changeBoardStatus(index, currentStatus);
        }}
      />
    );
  }

  judgeWinner(array) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      let [a, b, c] = lines[i];
      if (array[a] && array[a] === array[b] && array[b] === array[c]) {
        let oi = document.getElementsByClassName("game-info")[0];
        oi.innerText = `the game is over,the winner is ${array[a]}!`;
        this.setState({ isGameOver: true });
      }
    }
  }

  changeBoardStatus(index, currentStatus) {
    let arr = this.state.Squares.concat();
    arr[index] = currentStatus;
    this.setState({ Squares: arr });
    this.judgeWinner(arr);
    if (this.state.Next === "X") {
      this.setState({ Next: "O" });
    } else {
      this.setState({ Next: "X" });
    }
  }
  render() {
    const status = "Next player: " + this.state.Next;

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info"></div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(<Game />, document.getElementById("root"));
