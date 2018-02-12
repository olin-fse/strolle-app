import React from 'react';
import { Component, Card, CardImg, CardText, CardBody,
  CardTitle, CardLink, CardSubtitle, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import ReactMapGL from 'react-map-gl';
import Dimensions from 'react-dimensions';



class Create extends React.Component {

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
                    <CardTitle>Create a New Run</CardTitle>
                    <CardSubtitle>Title</CardSubtitle>
                </CardBody>
              </Card>
            </div>
        );
    }
};
export default Dimensions()(Create)
