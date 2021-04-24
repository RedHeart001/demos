/*
 * @Author: LiAo
 * @Date: 2020-08-03 22:35:56
 * @LastEditors: 李敖
 * @LastEditTime: 2020-08-09 14:42:00
 * @Description: file content
 */
import "./index.css";
import React from "react";
const style = {
  display: "inline-block",
  cursor: "pointer",
  marginRight: "5px",
  border: "1px solid red",
};
class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.onTabClick = this.props.onTabClick.bind(this);
    this.onTabChange = this.props.onTabChange.bind(this);
    this.getTabNav = this.getTabNav.bind(this);
    this.getTabPanes = this.getTabPanes.bind(this);
    let activeIndex = 0;
    if ("activeIndex" in props) {
      activeIndex = parseInt(props.activeIndex);
    }
    this.state = {
      preActiveIndex: activeIndex,
      activeIndex,
      tabs: [],
    };
  }

  componentWillUpdate(nextProps, nextState) {
    this.onTabChange(nextState.activeIndex);
  }
  componentDidMount() {
    let { children } = this.props;
    if (children.length > 0) {
      let arr = [];
      children.forEach((child, index) => {
        arr.push(child.props.label);
      });
      this.setState({ tabs: arr });
    }
  }

  tabHeadClick(selectIndex) {
    let preActiveIndex = this.state.activeIndex;
    if (this.props.children[selectIndex].props.disabled) {
      this.setState({ activeIndex: preActiveIndex, preActiveIndex });
    } else {
      this.setState({ activeIndex: selectIndex, preActiveIndex });
    }
  }

  tabHeadDel(index) {
    let arr = this.state.tabs;
    if (index === this.state.activeIndex) {
      for (let i = index - 1; i >= 0; i--) {
        if (!("disabled" in this.props.children[i].props)) {
          this.setState({ activeIndex: i, preActiveIndex: i });
          break;
        }
      }
    }
    if (arr.length > 1) {
      arr.splice(index, 1);
      this.setState({ tabs: arr });
    }
  }

  getTabNav() {
    let tabHeads = this.state.tabs;
    if (tabHeads.length > 0) {
      return (
        <ul>
          {tabHeads.map((tabHead, index) => {
            return (
              <li
                style={style}
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  this.onTabClick(index);
                  this.tabHeadClick(index);
                }}
              >
                {tabHead}
                {this.props.closeable ? (
                  <span
                    onClick={(e) => {
                      e.stopPropagation();
                      this.tabHeadDel(index);
                    }}
                  >
                    {" "}
                    ×
                  </span>
                ) : (
                  ""
                )}
              </li>
            );
          })}
        </ul>
      );
    }
  }

  getTabPanes() {
    let { children } = this.props;
    let activeIndex = this.state.activeIndex;
    if (children.length > 0 && !children[activeIndex].props.disabled) {
      return (
        <div key={children[activeIndex].props.label}>
          {children[activeIndex].props.children}
        </div>
      );
    }
  }
  render() {
    return (
      <div>
        {this.getTabNav()}
        {this.getTabPanes()}
      </div>
    );
  }
}

export default Tabs;
