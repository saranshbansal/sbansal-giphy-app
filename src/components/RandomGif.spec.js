import React from "react";
import { shallow, mount } from "enzyme";
import RandomGif from "./RandomGif";

describe("Generate Random Gif", () => {
  it("should render correctly.", () => {
    const wrapper = shallow(<RandomGif />);

    expect(wrapper).toMatchSnapshot();
  });

  it("should load a random GIF on calling handleSearch fn.", async () => {
    const wrapper = mount(<RandomGif />);
    const instance = wrapper.instance();

    expect(wrapper.state("gif")).toBe(null);

    await instance.refreshResults();

    expect(wrapper.state("gif")).not.toBe(null);
  });
});
