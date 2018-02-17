import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

import MapsToken from './../../../../keys.js';

export class MapContainer extends React.Component {
render() {
    return (
      <Map
        google={this.props.google}
        zoom={this.props.zoom}
        initialCenter={{
            lat: this.props.lat,
            lng: this.props.lng
        }}
        style={{width: '100%', height: '500px', position: 'relative'}}
      >

        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />

      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: (MapsToken)
})(MapContainer)
