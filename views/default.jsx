var React = require('react');

var DefaultLayout = React.createClass({
    render: function() {
        var bodyStyle = {
            margin: 0,
            padding: 0
        };
        return (
          <html>
            <head>
                <title>{this.props.title}</title>
                <meta charSet="utf-8" />
                <meta name='viewport' content='initial-scale=1,maximum-scale=1,user-scalable=no' />
                <script dangerouslySetInnerHTML={{__html: `
                  // google analtyics
                  // is a common use
                `}} />
                <script src='https://api.tiles.mapbox.com/mapbox-gl-js/v0.13.1/mapbox-gl.js'></script>
                <link href='https://api.tiles.mapbox.com/mapbox-gl-js/v0.13.1/mapbox-gl.css' rel='stylesheet' />
            </head>
            <body style={bodyStyle}>
                {this.props.children}
            </body>
          </html>
        );
    }
});

module.exports = DefaultLayout;
