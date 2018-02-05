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
        <div className="container">
            <Header />
            <Cover />

            <Feed city={"Boston"} title={"Sunrise Run"} lat={34} lng={5} zoom={1.5} />
            <Feed city={"New York"} title={"Central Park Loop"} lat={34} lng={5} zoom={1.5} />


            <Base />


        </div>
    );
  }
}

export default App;
