/*
 * @Author: LiAo
 * @Date: 2021-02-25 15:35:08
 * @LastEditors: LiAo
 * @LastEditTime: 2021-02-25 17:11:33
 * @FilePath: \first-app\src\oopfp\index.js
 */
import React from "react";

import ReactDOM from "react-dom";


class ProfileClass extends React.Component {

    showMessage = () => {

        alert('用户是' + this.props.user);

    };
    componentDidMount() {
        console.log(encodeURI(decodeURI('http://172.18.3.136:3000/dus/http://172.18.4.71:8090/iserver/services/map-zt_zg_csztgh/rest/maps/ghyd_pg_2020/image.png?&transparent=true&cacheEnabled=true&layersID=%5B0:0%5D&redirect=false&prjCoordSys=%7B%22epsgCode%22:%224496%22%7D&width=256&height=256&viewBounds=%7B%22leftBottom%22%20:%20%7B%22x%22:18398770.5429,%22y%22:3388875.4222000013%7D,%22rightTop%22%20:%20%7B%22x%22:18490036.5589,%22y%22:3480141.4382%7D%7D&region=510100000000&regiontype=2')))
    }

    handleClick = () => {

        setTimeout(this.showMessage, 3 * 1000);

    };

    render() {

        return <button onClick={this.handleClick}>查询</button>;

    }

}

const ProfileFunction = React.memo(
    (props) => {

        const showMessage = () => {

            alert('用户是' + props.user);

        };

        const handleClick = () => {

            setTimeout(showMessage, 3 * 1000);

        };

        return (

            <button onClick={handleClick}>查询</button>

        );

    }
)





class App extends React.Component {

    state = {

        user: '小明',

    };

    render() {

        return (

            <>

                <label>

                    <b> : </b>

                    <select

                        value={this.state.user}

                        onChange={e => this.setState({ user: e.target.value })}

                    >

                        <option value="小明">小明</option>

                        <option value="小白">小白</option>

                        <option value="小黄">小黄</option>

                    </select>

                </label>

                <h1>{this.state.user}</h1>

                <p>

                    <ProfileFunction user={this.state.user} />

                    <b> (function)</b>

                </p>

                <p>

                    <ProfileClass user={this.state.user} />

                    <b> (class)</b>

                </p>

            </>

        )

    }

}

const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);
