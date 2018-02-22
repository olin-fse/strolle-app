import React from 'react';
import { compose, withProps, lifecycle } from "recompose";
import { withScriptjs } from "react-google-maps";
import { StandaloneSearchBox } from "react-google-maps/lib/components/places/StandaloneSearchBox";
import { Component, Form,
    FormGroup, Label, Input, FormText, Alert} from 'reactstrap';

const PlacesWithStandaloneSearchBox = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCvGWiDsRg9t8L_4EKFMfLvcHmosedcEhE&v=3.exp&libraries=geometry,drawing,places",
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
    <ol>

      {props.places.map(({ place_id, formatted_address, geometry: { location } }) =>
        <li key={place_id}>
          {formatted_address}
          {" at "}
          ({location.lat()}, {location.lng()})
        </li>

      )}

    </ol>
  </div>
);
<PlacesWithStandaloneSearchBox />
{/*this.props.sendValues(location.lat(), location.lng())*/}


export default PlacesWithStandaloneSearchBox;
