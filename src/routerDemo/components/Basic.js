import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, useParams } from 'react-router-dom';

function Index(props) {
    const { list } = props;
    return (
        <ul>
            {
                list.map(item => {
                    return (
                        <li key={item.cid}>
                            <Link to={`/list/${item.cid}`}>
                                {item.title}
                            </Link>
                        </li>
                    )
                })
            }
        </ul>
    )
}

function List(props) {
    const { id } = useParams();
    console.log(id, props);
    return (
        <h3>ID:{id}</h3>
    )
}

export default function Basic() {

    const [list, setList] = useState([
        { cid: 123, title: '技术胖的个人博客-1' },
        { cid: 456, title: '技术胖的个人博客-2' },
        { cid: 789, title: '技术胖的个人博客-3' },
    ]);
    return (
        <Router>
            <Index list={list} />
            <Switch>
                <Route path='/list/:id' component={List} />
            </Switch>
        </Router>
    )
}