import React, { useEffect } from "react"
import ReactDOM from "react-dom"
import { SwordContainer } from "./swords"
import { Revolution } from "./revolution"
import {
  Width1Container,
  Width2Container,
  Width3Container,
  Width4Container,
  Width5Container,
} from "./width"
// import { Container, ImgContainer } from "./backfilter"
import { SlotContainer } from "./slot"
import { HoverContainer } from "./hover"
import { LoadingContainer } from "./loading"
import { MarginContainer } from "./margindemo"

class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      val: 0,
    }
  }

  componentDidMount() {
    // 对象更新state会被合并
    this.setState({ val: this.state.val + 1 }, () => {
      console.log(this.state.val)
    })
    this.setState({ val: this.state.val + 1 }, () => {
      console.log(this.state.val)
    })

    this.setState(
      // { val: this.state.val + 1 },
      (preState: any) => ({ val: preState.val + 1 }),
      () => {}
    )
    console.log(this.state.val)
    this.setState(
      // { val: this.state.val + 1 },
      (preState: any) => ({ val: preState.val + 1 }),
      () => {
        // console.log(this.state.val);
      }
    )
    console.log(this.state.val)

    // setTimeout(() => {
    //   // 函数更新state不会
    //   // 但是异步对象更新不会被合并
    //   this.setState(
    //     { val: this.state.val + 1 },
    //     // (preState: any) => ({ val: preState.val + 1 }),
    //     () => {}
    //   )
    //   console.log(this.state.val)
    //   this.setState(
    //     { val: this.state.val + 1 },
    //     // (preState: any) => ({ val: preState.val + 1 }),
    //     () => {
    //       // console.log(this.state.val);
    //     }
    //   )
    //   console.log(this.state.val)
    // }, 0)
    console.log(this.state.val)
  }
  render() {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        {/* <p>{this.state.val}</p> */}
        {/* <SwordContainer /> */}
        {/* <Revolution /> */}
        {/* <Width1Container />
        <Width2Container />
        <Width3Container />
        <Width4Container />
        <Width5Container /> */}
        {/* <Container /> */}
        {/* <ImgContainer /> */}
        {/* <SlotContainer /> */}
        {/* <HoverContainer /> */}
        {/* <LoadingContainer /> */}
        <MarginContainer />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"))
