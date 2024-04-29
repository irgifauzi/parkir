import Map from 'https://cdn.skypack.dev/ol/7.14.0/Map.js';
import View from 'https://cdn.skypack.dev/ol/7.14.0/View.js';
import TileLayer from 'https://cdn.skypack.dev/ol/7.14.0/layer/Tile.js';
import OSM from 'https://cdn.skypack.dev/ol/7.14.0/source/OSM.js';

const map = new Map({
    target: 'map',
    layers: [
        new TileLayer({
            source: new OSM()
        })
    ],
    view: new View({
        center: [0, 0],
        zoom: 2
    })
});
