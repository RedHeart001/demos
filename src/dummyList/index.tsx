import React, {
    useEffect,
    useRef,
    useState,
    useMemo
} from 'react';
import ReactDOM from 'react-dom';
import './style/index.less'

// 滚动容器高度
const SCROLL_VIEW_HEIGHT: number = 500;
// 单个项目高度
const ITEM_HEIGHT: number = 50;
// 预加载数量
const PRE_LOAD_COUNT: number = SCROLL_VIEW_HEIGHT / ITEM_HEIGHT;
// 存储元素容器ref
const containerRef = useRef<HTMLDivElement | null>(null);

const [sourceData, setSourceData] = useState<number[] | null>([]);

// 初始化数据源数据
const createListData = () => {
    const initList = Array.from(Array(4000).keys());
    setSourceData(initList);
};

useEffect(() => {
    createListData()
}, []);

const DummyList = () => {
    return <div>
        <div>
            ...list
        </div>
    </div>
}


const App = (props: any) => {
    return <DummyList />
}

ReactDOM.render(<App />, document.getElementById("root"));