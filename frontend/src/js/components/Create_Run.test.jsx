import React from "react";
import { mount } from "enzyme";
import * as enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

enzyme.configure({adapter: new Adapter() });
import Create from "./Create_Run.js";

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
          const searchbox = createMod().find("withProps(lifecycle(withScriptjs(Component)))");
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
      it("renders a map", () => {
          const map = createMod().find("withScriptjs(withGoogleMap(Component))");
          expect(map.length).toBeGreaterThan(0);
      });

  });

  describe("the search updates", () => {
      beforeEach(() => {
          const places = [[formatted_address:"Boston, MA, USA", geometry.location.lat():42, geometry.location.lng():55]]
      });

      // test("the state gets updated", () => {
      //     function setLatLng(places) {
      //         expect(places.length).toBe(1);
      //         done();
      //     }
      //     PlacesWithStandaloneSearchBox.sendValues(setLatLng);
      // });
  });


});
