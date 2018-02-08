import React from 'react';
import { Component, Card, CardImg, CardText, CardBody,
  CardTitle, CardLink, CardSubtitle, Button } from 'reactstrap';
import ReactMapGL from 'react-map-gl';
import Dimensions from 'react-dimensions';



class Run_Feed extends React.Component {

    state = {
        viewport: {
          width: this.props.containerWidth,
          height: 400,
          latitude: 37.7577,
          longitude: -122.4376,
          zoom: 10
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
                <ReactMapGL
                    mapStyle="mapbox://styles/pseger/cjd9o709fa3ko2rnv0xz2lvnc"
                    {...this.state.viewport}
                    mapboxApiAccessToken = {MapboxAccessToken}
                    onViewportChange={(viewport) => this.setState({viewport})}
                />
                <CardBody>
                  <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                  <Button color="primary">Card Link</Button>
                </CardBody>
              </Card>
            </div>
        );
    }
};
export default Dimensions()(Run_Feed)
