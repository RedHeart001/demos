import React, { useEffect, useRef, useState, useMemo } from "react"
import ReactDOM from "react-dom"
import "./style/index.css"

// 滚动容器高度
const SCROLL_VIEW_HEIGHT: number = 500
// 单个项目高度
const ITEM_HEIGHT: number = 50
// 预加载数量
const PRE_LOAD_COUNT: number = SCROLL_VIEW_HEIGHT / ITEM_HEIGHT

const DummyList = () => {
  // 存储元素容器ref
  const containerRef = useRef<HTMLDivElement | null>(null)

  const [sourceData, setSourceData] = useState<number[]>([])

  const [showRange, setShowRange] = useState({
    start: 0,
    end: PRE_LOAD_COUNT,
  })

  // 初始化数据源数据
  const createListData = () => {
    const initList = Array.from(Array(40).keys())
    setSourceData(initList)
  }

  useEffect(() => {
    createListData()
  }, [])

  const scrollViewHeight = useMemo(() => {
    return sourceData?.length * ITEM_HEIGHT
  }, [sourceData])

  const currentViewList = useMemo(() => {
    console.log("showRasnge", showRange)
    return sourceData.slice(showRange.start, showRange.end).map((item: any) => {
      return {
        data: item,
      }
    })
  }, [sourceData, showRange])
  // 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

  const calculateRange = () => {
    const element = containerRef.current
    if (element) {
      // 当前偏移量
      const offset = Math.floor(element.scrollTop / ITEM_HEIGHT) + 1
      // 页面起始
      const startSize = offset - PRE_LOAD_COUNT
      // 视图高度
      const viewHeight = element.clientHeight
      // 试图可以容纳的项目
      const viewItemNum = Math.ceil(viewHeight / ITEM_HEIGHT)
      // 视图结束 = 起始+页面个数+预加载数
      const endSize = startSize + viewItemNum + PRE_LOAD_COUNT
      // console.log(startSize, endSize);
      // 改变显示的范围
      setShowRange({
        start: startSize < 0 ? 0 : startSize,
        end: endSize > sourceData.length ? sourceData.length : endSize,
      })
    }
  }

  /**
   * scrollView 偏移量
   */
  const scrollViewOffset = useMemo(() => {
    return showRange.start * ITEM_HEIGHT
  }, [showRange.start])

  // 判断是否到底
  const reachScrollBottom = () => {
    const contentScrollTop = containerRef.current?.scrollTop || 0
    //可视区域
    const clientHeight = containerRef.current?.clientHeight || 0
    //滚动条内容的总高度
    const scrollHeight = containerRef.current?.scrollHeight || 0
    if (contentScrollTop + clientHeight >= scrollHeight) {
      return true
    }
    return false
  }

  /**
   * onScroll事件回调
   * @param event { UIEvent<HTMLDivElement> } scrollview滚动参数
   */
  const containerScroll = (e: any) => {
    e.preventDefault()
    if (reachScrollBottom()) {
      let endSize = showRange.end
      const pushData: number[] = []
      for (let index = 0; index < 20; index++) {
        pushData.push(endSize++)
      }

      setSourceData((arr: any) => {
        return [...arr, ...pushData]
      })
    }

    calculateRange()
  }

  return (
    <div
      ref={containerRef}
      style={{
        height: SCROLL_VIEW_HEIGHT,
        overflow: "auto",
      }}
      onScroll={containerScroll}
    >
      <div
        style={{
          height: scrollViewHeight - scrollViewOffset,
          transform: `
                translateY(${scrollViewOffset}px)
            `,
        }}
      >
        {currentViewList.map((item: any) => {
          return (
            <div
              style={{
                height: ITEM_HEIGHT,
              }}
              className={"showElement"}
              key={item.data}
            >
              ITEM {item.data}
            </div>
          )
        })}
      </div>
    </div>
  )
}

const App = (props: any) => {
  return (
    <div className={"App"}>
      <DummyList />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))
