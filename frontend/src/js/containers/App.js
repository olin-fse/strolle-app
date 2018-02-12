import React, { Component } from 'react';

import Form from '../components/Form';
import Tester from '../components/Tester';
import Header from '../components/Header';
import Cover from '../components/Cover';
import Feed from '../components/Run_Feed';
import Base from '../components/Base';


const App = () => {
    return (
        <div>
            <div className="container">
                <Header />
                <Cover />

                <Feed
                    pathid = {123}
                    city={"Boston"}
                    title={"Sunrise Run"}
                    description={"A quick morning run."}
                    lat={42.36}
                    lng={-71.06}
                    zoom={10}
                />
                <Feed
                    pathid = {2}
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

const Path = () => {
    return (
        <div>
            <div className='container'>
                <Header />
            </div>
            <div>
                <Base />
            </div>
        </div>
    )
}


module.exports = {
    App,
    Path
};
