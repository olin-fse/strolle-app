import React from 'react';
import { Component, Card, CardImg, CardText, CardBody,
  CardTitle, CardLink, CardSubtitle, Button } from 'reactstrap';
import { Link } from 'react-router';
import ReactMapGL from 'react-map-gl';
import Dimensions from 'react-dimensions';



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
                  <Link to={`paths/${this.props.pathid}`}><CardTitle tag="h2"><strong>{this.props.title}</strong></CardTitle></Link>
                  <CardSubtitle>{this.props.city}</CardSubtitle>
                </CardBody>
                <ReactMapGL
                    mapStyle="mapbox://styles/pseger/cjd9o709fa3ko2rnv0xz2lvnc"
                    {...this.state.viewport}
                    mapboxApiAccessToken = {MapboxAccessToken}
                    onViewportChange={(viewport) => this.setState({viewport})}
                />
                <CardBody>
                  <CardText>{this.props.description}</CardText>
                  <CardText>ID: {this.props.pathid}</CardText>
                  <Button color="primary">Card Link</Button>
                </CardBody>
              </Card>
            </div>
        );
    }
};
export default Dimensions()(Run_Feed)
