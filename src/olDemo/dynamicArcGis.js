/*
 * @Author: LiAo
 * @Date: 2020-09-28 21:19:49
 * @LastEditors: LiAo
 * @LastEditTime: 2020-10-28 19:35:51
 * @FilePath: \first-app\src\olDemo\dynamicArcGis.js
 */
import React from 'react';
import ReactDOM from 'react-dom';

import 'ol/ol.css';
import { Map, View } from 'ol';
import { OSM, TileArcGISRest, ImageArcGISRest } from 'ol/source';
import { Tile as TileLayer, Image as ImageLayer } from 'ol/layer';

class TileArcGISRestMap extends React.Component {
    componentDidMount() {
        let url = 'https://sampleserver1.arcgisonline.com/ArcGIS/rest/services/Specialty/ESRI_StateCityHighway_USA/MapServer';
        let layers = [
            new TileLayer({
                source: new OSM()
            }),
            new TileLayer({
                extent: [-13884991, 2870341, -7455066, 6338219],
                source: new TileArcGISRest({
                    url
                })
            })
        ];
        new Map({
            view: new View({
                zoom: 3,
                center: [-10997148, 4569099]
            }),
            target: 'map1',
            layers
        })
    }
    render() {
        return (
            <div className='dynamicArcgisMap' id='map1'></div>
        )
    }
}


class ImageArcGISRestMap extends React.Component {
    componentDidMount() {
        let url = 'https://sampleserver1.arcgisonline.com/ArcGIS/rest/services/Specialty/ESRI_StateCityHighway_USA/MapServer';
        let layers = [
            new TileLayer({
                source: new OSM()
            }),
            new ImageLayer({
                source: new ImageArcGISRest({
                    ratio: 1,
                    params: {},
                    url
                })
            })
        ];
        new Map({
            view: new View({
                zoom: 3,
                center: [-10997148, 4569099]
            }),
            target: 'map2',
            layers
        })

        console.log(layers[1].getSource());
    }
    render() {
        return (
            <div className='dynamicArcgisMap' id='map2'></div>
        )
    }
}

function App() {
    return (
        <div className='mapContainer'>
            <TileArcGISRestMap />
            <ImageArcGISRestMap />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));