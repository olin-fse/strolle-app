import React from 'react';
import { Component, Card, CardImg, CardText, CardBody,
  CardTitle, CardLink, CardSubtitle, Button } from 'reactstrap';
import { Link } from 'react-router';
import ReactMapGL from 'react-map-gl';
import Dimensions from 'react-dimensions';

var button;

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

    if( this.props.clickable ) {
        button = <Link href={`paths/${this.props.pathid}`}><Button color="primary">Learn More</Button></Link>;
    } else {
        button = <Link href={`/`}><Button outline color="primary">Return</Button></Link>;
    }

    render() {
        const MapboxAccessToken = 'pk.eyJ1IjoicHNlZ2VyIiwiYSI6ImNqZDlsMndiMjYxYWYyd24ycTVvaG1hbHoifQ.LVL_EXnvKNDCKGr-emYKQQ';

        return (
            <div>
              <Card>
                <CardBody>
                  <CardTitle tag="h2"><strong>{this.props.title}</strong></CardTitle>
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
                  {button}
                </CardBody>
              </Card>
            </div>
        );
    }
};
export default Dimensions()(Run_Feed)
