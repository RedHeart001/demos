/*
 * @Author: LiAo
 * @Date: 2020-09-28 21:19:49
 * @LastEditors: LiAo
 * @LastEditTime: 2020-10-28 19:32:43
 * @FilePath: \first-app\src\olDemo\tileArcGis.js
 */
import React from 'react';
import ReactDOM from 'react-dom';

import 'ol/ol.css';
import { Map, View } from 'ol';
import { XYZ } from 'ol/source';
import { Tile as TileLayer } from 'ol/layer';

class TileArcGISRestMap extends React.Component {
    componentDidMount() {
        let layers = [
            new TileLayer({
                source: new XYZ({
                    attributions: 'Copyright:© 2013 ESRI, i-cubed, GeoEye',
                    url:
                        'https://services.arcgisonline.com/arcgis/rest/services/' +
                        'ESRI_Imagery_World_2D/MapServer/tile/{z}/{y}/{x}',
                    maxZoom: 15,
                    projection: 'EPSG:4326',
                    tileSize: 512, // the tile size supported by the ArcGIS tile service
                    maxResolution: 180 / 512, // Esri's tile grid fits 180 degrees on one 512 px tile
                    wrapX: true,
                })
            })
        ];
        let map = new Map({
            view: new View({
                zoom: 3,
                center: [0, 0],
                projection: 'EPSG:4326',
                minZoom: 2
            }),
            target: 'map',
            layers
        })

        console.log(layers[0].getSource());
        map.forEachFeatureAtPixel((feature, layer) => {
            console.log(feature, layer);
        })
    }
    render() {
        return (
            <div className='tileArcgisMap' id='map'></div>
        )
    }
}



function App() {
    return (
        <div className='mapContainer'>
            <TileArcGISRestMap />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));