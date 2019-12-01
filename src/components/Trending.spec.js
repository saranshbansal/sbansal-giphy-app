import React from "react";
import { shallow, mount } from "enzyme";
import Trending from "./Trending";

describe("Trending Gifs", () => {
  it("should render correctly.", () => {
    const wrapper = shallow(<Trending />);

    expect(wrapper).toMatchSnapshot();
  });

  it("should load a random GIFs on calling handleSearch fn.", async () => {
    const wrapper = mount(<Trending />);
    const instance = wrapper.instance();

    expect(wrapper.state("gifs").length).toBe(0);

    await instance.refreshResults();

    expect(wrapper.state("gifs").length).toBeGreaterThan(0);

  });
});
