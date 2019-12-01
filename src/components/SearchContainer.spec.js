import { mount, shallow } from "enzyme";
import React from "react";
import SearchContainer from "./SearchContainer";

describe("SearchContainer", () => {
  it("should render correctly.", () => {
    const wrapper = shallow(<SearchContainer />);

    expect(wrapper).toMatchSnapshot();
  });

  it("should render search box", () => {
    const wrapper = mount(<SearchContainer />);

    expect(wrapper.find(".search-box")).toHaveLength(1);
    expect(wrapper.state("loading")).toBe(false);
  });

  it("should render results against some keyword", async () => {
    const wrapper = mount(<SearchContainer />);
    const instance = wrapper.instance();
    
    expect(wrapper.state().gifs.length).toBe(0);
    
    await instance.handleSearch("random");

    expect(wrapper.state().gifs.length).toBeGreaterThan(0);
  });
});
