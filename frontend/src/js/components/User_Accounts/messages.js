import React, { Component } from 'react';
import {Card, Button, CardTitle, CardText, Row, Col} from "reactstrap";


function Messages(props){
        return (
            <div>
                <Card body>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                  <Button>Go somewhere</Button>
                </Card>
            </div>
        );
};

export default Messages;