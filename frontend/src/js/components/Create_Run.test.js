import React from "react";
import { mount } from "enzyme";
import Create from "./Create_Run";

describe("Create Run", () => {
  let mountedCreate;
  const createMod = () => {
    if (!mountedCreate) {
      moumtedCreate = mount(
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
      it("contains everything else that gets rendered", () => {
          const divs = createMod().find("div");
          const wrappingDiv = divs.first();
          expect(wrappingDiv.children()).toEqual(createMod().children());
      });
  });
});
