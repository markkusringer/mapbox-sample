var React = require('react');
var DefaultLayout = require('./default');
var Config = require('../config');

var IndexView = React.createClass({
    render: function() {
        var mapStyle = {
            position: "absolute",
            top: 0,
            bottom: 0,
            width: "100%"
        };
        function createMapBoxAccessTokenGlobalVar() {
            return {__html: "mapboxgl.accessToken = '" + Config.mapBoxAccessToken + "'"};
        };
        return (
            <DefaultLayout title={this.props.title}>
                <div id="map" style={mapStyle}></div>
                <script dangerouslySetInnerHTML={createMapBoxAccessTokenGlobalVar()} />
                <script dangerouslySetInnerHTML={{__html: `
                    var map = new mapboxgl.Map({
                        container: 'map', // container id
                        style: 'mapbox://styles/mapbox/streets-v8', //stylesheet location
                        center: [-74.50, 40], // starting position
                        zoom: 9 // starting zoom
                    });
                `}} />
            </DefaultLayout>
        );
    }
});

module.exports = IndexView;
