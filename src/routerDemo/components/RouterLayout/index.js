import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch, useParams } from 'react-router-dom';

const routes = [
    {
        path: '/',
        title: '首页',
        component: 'Index',
    },
    {
        path: '/vedio',
        title: '视频教程',
        component: 'VedioRoute',
        children: [
            {
                path: '/vedio/flutter',
                title: 'Flutter视频',
                component: 'Flutter'
            },
            {
                path: '/vedio/vue',
                title: 'Vue视频',
                component: 'Vue'
            }
        ]
    },
    {
        path: '/text',
        title: '文章教程',
        component: 'TextRoute',
        children: [
            {
                path: '/text/flutter',
                title: 'Flutter专栏',
                component: 'Flutter'
            },
            {
                path: '/text/vue',
                title: 'Vue专栏',
                component: 'Vue'
            }
        ]
    }
];

function Index() {
    return (
        <h2>首页内容</h2>
    )
}

function TextRoute() {
    return (
        <h2>TextRoute</h2>
    )
}

function VedioRoute() {
    return (
        <h2>TextRoute</h2>
    )
}

function Flutter() {
    return (
        <h2>Flutter内容</h2>
    )
}
function Vue() {
    return (
        <h2>Vue内容</h2>
    )
}

function MyRoute() {
    const { first, second } = useParams();
    console.log(first, second);
    let target;
    for (let i = 0; i < routes.length; i++) {
        if (routes[i]['path'].indexOf(first) > -1 && !!routes[i].children) {
            target = routes[i].children.filter(item => {
                return item.path.indexOf(second) > -1;
            });
            if (target.length > 0) {
                target = target[0];
                break;
            }
        }
    }
    console.log(target);
    return (
        <h3>{target.title}</h3>
    )
}




function SideBar() {
    return (
        <ul>
            <h2>一级导航</h2>
            {routes.map(route => {
                return (
                    <li key={route.path}>
                        <Link to={route.path}>{route.title}</Link>
                    </li>
                )
            })}
        </ul>
    )
}

function Content() {
    return (
        <div>
            <h2>二级导航</h2>
            <Switch>
                {
                    routes.map((route, index) => {
                        return (
                            <Route exact key={index} path={route.path} render={() => {
                                if (!!route.children) {
                                    return (
                                        route.children.map(childRoute => {
                                            return (
                                                <Link key={childRoute.path} to={childRoute.path}>
                                                    {childRoute.title}
                                                </Link>
                                            )
                                        })
                                    )
                                } else {
                                    return (
                                        <Index />
                                    )
                                }
                            }} />
                        )
                    })
                }
            </Switch>
            <h2>三级内容</h2>


            <Route path="/:first/:second" children={<MyRoute />}></Route>



        </div>
    )
}






export default function RouterLayout() {
    return (
        <Router>
            <h1>左部</h1>
            <SideBar />
            <h2>右部</h2>
            <Content />
        </Router>
    )
}