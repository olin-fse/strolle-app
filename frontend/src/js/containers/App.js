import React, { Component } from 'react';

import Form from '../components/Form';
import Tester from '../components/Tester';
import Header from '../components/Header';
import Cover from '../components/Cover';
import Feed from '../components/Run_Feed';
import Base from '../components/Base';
// import '../../css/App.css';
// import './../../../../node_modules/bootstrap/dist/css/bootstrap.css';
// import './../../css/Navigation.css';


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
          shortenedUrl: ''
        };
      }

      setUrl = (shortenedUrl) => {
        this.setState({ shortenedUrl });
      };

  render() {
    return (
        <div>
            <div className="container">
                <Header />
                <Cover />

                <Feed
                    city={"Boston"}
                    title={"Sunrise Run"}
                    description={"A quick morning run."}
                    lat={42.36}
                    lng={-71.06}
                    zoom={10}
                />
                <Feed
                    city={"New York"}
                    title={"Central Park Loop"}
                    description={"Scenic and pretty run through the park and around the lake."}
                    lat={40.71}
                    lng={-74.006}
                    zoom={10}
                />
            </div>
            <div>
                <Base />
            </div>
        </div>
    );
  }
}

export default App;
