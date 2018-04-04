import React, { Component } from 'react';
import Feed from "./../Run_Feed";




function User_Feed(props){

        return (
            <div>
                <h2>These are your contributions:</h2>
                <div>
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
            </div>
        );
};

export default User_Feed;
