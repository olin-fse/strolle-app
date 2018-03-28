import React from 'react';
import { Media } from 'reactstrap';
import { Link } from 'react-router';

export default class Cover extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loggedIn: true
        };
    }


    render() {
        return (
          <div>
            <Media>
                <Media left href="#">
                  <Media object src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Generic placeholder image" />
                </Media>
                <Media body>
                  <Media heading>
                    Media heading
                  </Media>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                </Media>
              </Media>
          </div>
        );
    }
};
