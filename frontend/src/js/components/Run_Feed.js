import React from 'react';
import { Component, Card, CardImg, CardText, CardBody,
  CardTitle, CardLink, CardSubtitle, Button } from 'reactstrap';
import { Link } from 'react-router';
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import Dimensions from 'react-dimensions';
import GMap from './Map';

var button;

class Run_Feed extends React.Component {
    // constructor(props) {
    //     super(props);
    //     console.log(props);
    //     this.state = {};
    //     this.setState({
    //         city : this.props.location_name,
    //         title : this.props.title,
    //         description : this.props.description,
    //         lat : this.props.latitude,
    //         lng : this.props.longitude
    //     });
    // }


    // state = {
    //     viewport: {
    //         width: this.props.containerWidth,
    //       latitude: this.props.lat,
    //       longitude: this.props.lng,
    //       zoom: this.props.zoom,
    //       pathid : this.props.pathid
    //     }
    //   };

    render() {
        return (
            <div>
              <Card>
                <CardBody>
                  <CardTitle tag="h2"><strong>{this.props.title}</strong></CardTitle>
                  <CardSubtitle>{this.props.city}</CardSubtitle>
                </CardBody>

                <GMap
                  isMarkerShown
                  googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCvGWiDsRg9t8L_4EKFMfLvcHmosedcEhE&v=3.exp&libraries=geometry,drawing,places"
                  loadingElement={<div style={{ height: `100%` }} />}
                  containerElement={<div style={{ height: `400px` }} />}
                  mapElement={<div style={{ height: `100%` }} />}
                  zoom={this.props.zoom}
                  lat={this.props.lat}
                  lng={this.props.lng}
                />

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
