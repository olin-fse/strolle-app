import React from 'react';
import { Component, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';


export default class Run_Feed extends React.Component {
    render() {
        return (
          <div>
            <Card>
              <CardImg top width="100%" src={require('./../../imgs/mapdemo.png')} alt="Card image cap" />
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card content.</CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
          </div>
        );
    }
};
