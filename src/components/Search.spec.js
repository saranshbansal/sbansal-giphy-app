import React from "react";
import { shallow, mount } from "enzyme";
import Search from "./Search";

describe("Search", () => {
  const onSearchMock = jest.fn();

  it("should render correctly.", () => {
    const wrapper = shallow(<Search onSearch={onSearchMock} />);

    expect(wrapper).toMatchSnapshot();
  });

  it("should call onChange prop with input value", () => {
    const event = {
      preventDefault() {},
      target: { name: "search-gif-input", value: "the-value" }
    };

    const wrapper = mount(<Search onSearch={onSearchMock} />);
    expect(wrapper.state("value")).toBe("");

    const searchInput = wrapper.find("input");

    searchInput.simulate("change", event);

    expect(wrapper.state("value")).toBe(event.target.value);

    // Only call the search fn if the input > 2 letters.
    if (event.target.value.length > 2) expect(onSearchMock).toBeCalledWith(event.target.value);
    else expect(onSearchMock).not.toHaveBeenCalled();
  });
});
