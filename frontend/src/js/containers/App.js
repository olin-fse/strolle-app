import React, { Component } from 'react';

const request = require('superagent');


import Form from '../components/Form';
import Header from '../components/Header';
import Cover from '../components/Cover';
import Feed from '../components/Run_Feed';
import Base from '../components/Base';
import Create from '../components/Create_Run';
import Signup from '../components/Signup';
import Login from '../components/Login';

var Type = require('type-of-is');               //TODO remove before deploy



class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="container">
                    <Header />
                    <Cover />

                    <Feed
                        pathid = {1}
                        city={"Boston"}
                        title={"Sunrise Run"}
                        description={"A quick morning run."}
                        lat={42.36}
                        lng={-71.06}
                        zoom={12}
                    />
                    <Feed
                        pathid = {2}
                        city={"New York"}
                        title={"Central Park Loop"}
                        description={"Scenic and pretty run through the park and around the lake."}
                        lat={40.71}
                        lng={-74.006}
                        zoom={12}
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
    constructor(props) {
        super(props);
        this.state = {};
        request
            .get(`/api/paths/${props.params.id}`)
            .then(res => {
                console.log(res);
                this.setState({
                    city : res.body.location_name,
                    title : res.body.title,
                    description : res.body.description,
                    lat : res.body.latitude,
                    lng : res.body.longitude,
                    pathid : this.props.params.id
                });
            });
    }

    render() {
        return (
            <div>
                <div className='container'>
                    <Header />
                    <Feed
                        pathid = {this.state.pathid}
                        city={this.state.city}
                        title={this.state.title}
                        description={this.state.description}
                        lat={this.state.lat}
                        lng={this.state.lng}
                        zoom={12}
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
            <div className="Create">
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

class signupComp extends Component {
    render() {
        return (
            <div>
                <div className='container'>
                    <Header />
                    <Signup />
                </div>
                <div>
                    <Base />
                </div>
            </div>
        )
    }
}

class loginComp extends Component {
    render() {
        return (
            <div>
                <div className='container'>
                    <Header />
                    <Login />
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
    Create_Path,
    signupComp,
    loginComp
};
