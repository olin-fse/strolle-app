import React, { Component } from 'react';

import Form from '../components/Form';
import Tester from '../components/Tester';
import Header from '../components/Header';
import Cover from '../components/Cover';
import Feed from '../components/Run_Feed';
import Bootom from '../components/Bottom';
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
            <Feed />
            


        </div>
    );
  }
}

export default App;
