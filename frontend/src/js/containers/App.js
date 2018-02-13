import React, { Component } from 'react';

import Form from '../components/Form';
import Tester from '../components/Tester';
import Header from '../components/Header';
import Cover from '../components/Cover';
import Feed from '../components/Run_Feed';
import Base from '../components/Base';
import Create from '../components/Create_Run';


class App extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <Header />
                    <Cover />

                    <Feed
                        pathid = {123}
                        clickable = {true}
                        city={"Boston"}
                        title={"Sunrise Run"}
                        description={"A quick morning run."}
                        lat={42.36}
                        lng={-71.06}
                        zoom={10}
                    />
                    <Feed
                        pathid = {2}
                        clickable = {true}
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
        )
    }
}

class Path extends Component {
    render() {
        return (
            <div>
                <div className='container'>
                    <Header />
                    <Feed
                        pathid = {this.props.params.id}
                        clickable = {false}
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
        )
    }
}

class Create_Path extends Component {
    render() {
        return (
            <div>
                <div className='container'>
                    <Header />
                    <Create />
                </div>
                <div>
                    <Base />
                </div>
            </div>
        )
    }
}


module.exports = {
    App,
    Path,
    Create_Path
};
