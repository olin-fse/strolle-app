import React, { Component } from 'react';

import Form from '../components/Form';
import Tester from '../components/Tester';
import Header from '../components/Header';
import '../../css/App.css';
import '../../css/Navigation.css';

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
            <div className="Navigation">
                <Header />
            </div>

            <div className="App">
              <h1 className="App-title">Welcome to Shawty</h1>
            </div>
        </div>
    );
  }
}

export default App;
