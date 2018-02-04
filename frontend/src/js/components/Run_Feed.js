import React from 'react';
import { Component, Card, CardImg, CardText, CardBody,
  CardTitle, CardLink, CardSubtitle, Button } from 'reactstrap';


export default class Run_Feed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Fun Run",
            city: "Boston"
        }
    }

    render() {
        return (
            <div>
              <Card>
                <CardBody>
                  <CardTitle tag="h2"><strong>{this.state.title}</strong></CardTitle>
                  <CardSubtitle>{this.state.city}</CardSubtitle>
                </CardBody>
                <img width="100%" src={require('./../../imgs/mapdemo.png')} alt="Card image cap" />
                <CardBody>
                  <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                  <Button color="primary">Card Link</Button>
                </CardBody>
              </Card>
            </div>
        );
    }
};
