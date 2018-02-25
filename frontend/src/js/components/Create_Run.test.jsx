import React from "react";
import { mount } from "enzyme";
import * as enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

enzyme.configure({adapter: new Adapter() });
import Create from "./Create_Run";

describe("Create Run", () => {
  let mountedCreate;
  const createMod = () => {
    if (!mountedCreate) {
      mountedCreate = mount(
        <Create />
      );
    }
    return mountedCreate;
  }

  beforeEach(() => {
    mountedCreate = undefined;
  });

  // All tests below
  it("always renders a div", () => {
      const divs = createMod().find("div");
      expect(divs.length).toBeGreaterThan(0);
  });

  describe("the rendered div", () => {
      it("renders a Card", () => {
          const card = createMod().find("Card");
          expect(card.length).toBe(1);
      });
  });

  describe("the Card's contents", () => {
      it("contains a CardBody", () => {
          const cardbody = createMod().find("CardBody");
          expect(cardbody.length).toBeGreaterThan(0);
      });

      it("contains two FormGroups", () => {
          const formgroup = createMod().find('FormGroup');
          expect(formgroup.length).toBe(2);
      });
  });

  describe("the form in the card", () => {
      it("contains a form", () => {
          const form = createMod().find("Form");
          expect(form.length).toBe(1);
      });

      it("contains a searchbox", () => {
          const searchbox = createMod().find("PlacesWithStandaloneSearchBox");
          expect(searchbox.length).toBeGreaterThan(0);
      });       // TODO failing

      it("contains an alert", () => {
          const alert = createMod().find("Alert");
          expect(alert.length).toBe(1);
      });

      it("contains a submit button", () => {
          const btn = createMod().find("Button");
          expect(btn.length).toBe(1);
      });
  });

  describe("the map in the card", () => {
      beforeEach(() => {
          props.isMarkerShown= true;
          props.googleMapURL= "https://maps.googleapis.com/maps/api/js?key=AIzaSyCvGWiDsRg9t8L_4EKFMfLvcHmosedcEhE&v=3.exp&libraries=geometry,drawing,places";
          props.loadingElement = <div style={{height: `100%`}} />;
          props.containerElement=<div style={{ height: `400px` }} />;
          props.mapElement=<div style={{ height: `100%` }} />;
          props.zoom=12;
          props.lat=42;
          props.lng=-71;
      });

      it("renders a map", () => {
          const map = createMod().find("GMap").first();
          expect(map.length).toBeGreaterThan(0);
      });       // TODO failing

      it("has a zoom of 12", () => {
          const map = createMod().find("GMap").first();
          expect(map.props().zoom).toBe(12);
      });       // TODO failing

  });


});
