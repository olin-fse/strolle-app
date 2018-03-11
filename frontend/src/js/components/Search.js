import React from 'react';
import { compose, withProps, lifecycle } from "recompose";
import { withScriptjs } from "react-google-maps";
import { StandaloneSearchBox } from "react-google-maps/lib/components/places/StandaloneSearchBox";
import { Component, Form,
    FormGroup, Label, Input, FormText, Alert} from 'reactstrap';

const PlacesWithStandaloneSearchBox = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyD_asy-3A0f-RszG3SmR8lpWpsFmdFLsQA&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
  }),
  lifecycle({
    componentWillMount() {
      const refs = {}

      this.setState({
        places: [],
        onSearchBoxMounted: ref => {
          refs.searchBox = ref;
        },
        onPlacesChanged: () => {
          const places = refs.searchBox.getPlaces();
          this.props.sendValues(places);

          this.setState({
            places,
          });
        },
      })
    },

  }),

  withScriptjs
)(props =>
  <div data-standalone-searchbox="">
    <StandaloneSearchBox
      ref={props.onSearchBoxMounted}
      bounds={props.bounds}
      onPlacesChanged={props.onPlacesChanged}
    >

        <FormGroup>
              <Label for="citysearch">{props.label}</Label>
              <Input type="text" name="search" id="citysearch" placeholder="Search" />
        </FormGroup>
    </StandaloneSearchBox>

  </div>
);
<PlacesWithStandaloneSearchBox />
{/*this.props.sendValues(location.lat(), location.lng())*/}


export default PlacesWithStandaloneSearchBox;
