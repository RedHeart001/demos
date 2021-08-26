import React, {
    useEffect,
    useRef,
    useState,
    useMemo
} from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';

// 滚动容器高度
const SCROLL_VIEW_HEIGHT: number = 500;
// 单个项目高度
const ITEM_HEIGHT: number = 50;
// 预加载数量
const PRE_LOAD_COUNT: number = SCROLL_VIEW_HEIGHT / ITEM_HEIGHT;


const DummyList = () => {
    
    // 存储元素容器ref
    const containerRef = useRef<HTMLDivElement | null>(null);

    const [sourceData, setSourceData] = useState<number[]>([]);

    const [showRange, setShowRange] = useState({
        start: 0,
        end:PRE_LOAD_COUNT
    });
    

        // 初始化数据源数据
    const createListData = () => {
        const initList = Array.from(Array(4000).keys());
        setSourceData(initList);
    };

    useEffect(() => {
        createListData()
    }, []);

    const scrollViewHeight = useMemo(() => {
        return sourceData?.length * ITEM_HEIGHT
    }, [sourceData]);

    const currentViewList = useMemo(() => {
        return sourceData.slice(showRange.start, showRange.end).map((item: any) => {
            return {
                data: item,
                id: "item_" + item
            }
        })
    }, [sourceData, showRange]);

    const calculateRange = () => {
        const element = containerRef.current;
        if (element) {
            // 当前偏移量
            const offset = Math.floor(element.scrollTop / ITEM_HEIGHT) + 1;
            const startSize = offset - PRE_LOAD_COUNT;
            const viewHeight = element.clientHeight;
            const viewItemNum =  Math.ceil(viewHeight / ITEM_HEIGHT);
            const endSize = startSize + viewItemNum + PRE_LOAD_COUNT;
            // console.log(startSize, endSize);
            setShowRange({
                start: startSize < 0? 0 :startSize,
                end:endSize > sourceData.length ? sourceData.length:endSize
            })
        }
    }

    /**
 * scrollView 偏移量
 */
 const scrollViewOffset = useMemo(() => {
    console.log(showRange.start, "showRange.start");
    return showRange.start * ITEM_HEIGHT;
  }, [showRange.start]);

    /**
 * onScroll事件回调
 * @param event { UIEvent<HTMLDivElement> } scrollview滚动参数
 */
    const containerScroll = (e:any) => {
        e.preventDefault();
        calculateRange();
    }

    return <div
        ref={ containerRef}
        style={{
            height: SCROLL_VIEW_HEIGHT,
            overflow: "auto",
        }}
        onScroll={containerScroll}
    >
        <div style={{
            height: scrollViewHeight - scrollViewOffset,
            transform:`translateY(${scrollViewOffset})`
        }}>
            {
                currentViewList.map((item: any) => {
                    return <div
                        style={{
                            height: ITEM_HEIGHT
                        }}
                        className={"showElement"}
                        key={ item.id}
                    >
                        ITEM {item.data}
                    </div>
                })
            }
        </div>
    </div>
}


const App = (props: any) => {
    return <div className={"App"}>
        <DummyList />
    </div>
}

ReactDOM.render(<App />, document.getElementById("root"));