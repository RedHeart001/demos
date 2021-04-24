/*
 * @Author: LiAo
 * @Date: 2020-09-15 22:01:35
 * @LastEditors: LiAo
 * @LastEditTime: 2020-09-28 21:19:34
 * @FilePath: \first-app\src\olDemo\animation.js
 */
import React from 'react';
import ReactDOM from 'react-dom';

import 'ol/ol.css';
import Feature from 'ol/Feature';
import Map from 'ol/Map';
import Point from 'ol/geom/Point';
import View from 'ol/View';
import {Circle as CircleStyle, Stroke, Style} from 'ol/style';
import {OSM, Vector as VectorSource} from 'ol/source';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer';
import {easeOut} from 'ol/easing';
import {fromLonLat} from 'ol/proj';
import {getVectorContext} from 'ol/render';
import {unByKey} from 'ol/Observable';

class Localmap extends React.Component {

    componentDidMount() {
        let tileLayer = new TileLayer({
            source: new OSM({
                wrapX: flash
            })
        });

        const map = new Map({
            layers: [tileLayer],
            target: 'map',
            view: new View({
                center: [0, 0],
                zoom: 1
            })
        });

        let source = new VectorSource({
            wrapX: false
        })

        let vectorLayer = new VectorLayer({
            source: source
        });

        map.addLayer(vectorLayer);

        // 往地图添加要素
        function addRandomFeature() {
            let x = Math.random() * 360 - 180;
            let y = Math.random() * 180 - 90;
            let point = new Point(fromLonLat([x, y]));
            let feature = new Feature(point);
            source.addFeature(feature);
        }

        let duration = 3000;

        function flash(feature) {
            let start = new Date().getTime();
            // 监听切片图层渲染事件（postrender），触发时调用animete函数
            let listenerKey = tileLayer.on('postrender', animate);


            function animate(event) {
                // 获取要绘制到canvas的矢量上下文
                let vectorContext = getVectorContext(event);
                // 渲染事件状态
                let frameState = event.frameState;
                // 克隆新增的要素
                let flashGeom = feature.getGeometry().clone();
                // 渲染时间
                let elapsed = frameState.time - start;
                // 渲染进度
                let elapsedRatio = elapsed / duration;
                console.log(easeOut(elapsedRatio));
                // 增加要素动画效果
                let radius = easeOut(elapsedRatio) * 25 + 5;
                let opacity = easeOut(1 - elapsedRatio);

                let style = new Style({
                    image: new CircleStyle({
                        radius: radius,
                        stroke: new Stroke({
                            color: 'rgba(255,0,0,' + opacity + ')',
                            width: 0.25 + opacity
                        })
                    })
                });

                // 要素动画样式设置
                vectorContext.setStyle(style);
                // 绘制克隆要素
                vectorContext.drawGeometry(flashGeom);
                if (elapsed > duration) {

                    unByKey(listenerKey);
                    return;
                }

                map.render();
            }
        }

        source.on('addfeature', function (e) {
            console.log(e);
            flash(e.feature);
        })

        setTimeout(addRandomFeature, 1000);
    }

    render() {
        return (
            <div>
                <div className='map' id='map'>
                </div>
            </div>
        )
    }
}


ReactDOM.render(<Localmap />, document.getElementById('root'));
