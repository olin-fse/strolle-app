import React from 'react';
import {
    Container,
    Jumbotron,
    Button } from 'reactstrap';
import { Link } from 'react-router';

export default class Cover extends React.Component {
    render() {
        return (
          <div>
            <Jumbotron fluid>
              <Container fluid>
                <h1 className="display-3">Welcome to Strolle</h1>
                <p className="lead">The newest way to share and find new paths in your city.</p>
                <Link href='/create'><Button outline color="primary" size="lg">Create a Run</Button></Link>
              </Container>
            </Jumbotron>
          </div>
        );
    }
};
