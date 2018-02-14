import React from 'react';
import { Component, Card, CardImg, CardText, CardBody,
  CardTitle, CardLink, CardSubtitle, Button } from 'reactstrap';
import { Link } from 'react-router';
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import Dimensions from 'react-dimensions';

var button;

const Map = ReactMapboxGl({
  accessToken: "pk.eyJ1IjoicHNlZ2VyIiwiYSI6ImNqZDlsMndiMjYxYWYyd24ycTVvaG1hbHoifQ.LVL_EXnvKNDCKGr-emYKQQ"
});

class Run_Feed extends React.Component {


    state = {
        viewport: {
          width: this.props.containerWidth,
          height: 400,
          latitude: this.props.lat,
          longitude: this.props.lng,
          zoom: this.props.zoom
        }
      };

    render() {
        const MapboxAccessToken = 'pk.eyJ1IjoicHNlZ2VyIiwiYSI6ImNqZDlsMndiMjYxYWYyd24ycTVvaG1hbHoifQ.LVL_EXnvKNDCKGr-emYKQQ';

        return (
            <div>
              <Card>
                <CardBody>
                  <CardTitle tag="h2"><strong>{this.props.title}</strong></CardTitle>
                  <CardSubtitle>{this.props.city}</CardSubtitle>
                </CardBody>
                <Map
                  style="mapbox://styles/mapbox/streets-v9"
                  center={[this.props.lng, this.props.lat]}
                  zoom={[12]}
                  containerStyle={{
                    height: 400,
                    width: this.props.containerWidth
                  }}>
                    <Layer
                      type="symbol"
                      id="marker"

                      layout={{ "icon-image": "marker-15" }}>
                    </Layer>
                </Map>
                <CardBody>
                  <CardText>{this.props.description}</CardText>
                  <CardText>ID: {this.props.pathid}</CardText>
                  <Link href={`paths/${this.props.pathid}`}><Button color="primary">Learn More</Button></Link>
                </CardBody>
              </Card>
            </div>
        );
    }
};
export default Dimensions()(Run_Feed)
