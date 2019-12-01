import { mount, shallow } from "enzyme";
import React from "react";
import Tabs from "./Tabs";

describe("Tabs", () => {
  const dummyTabs = [
    <div label="label 1">
      {'label: label1'}
    </div>,
    <div label="label 2">
      {'label: label2'}
    </div>
  ];
  
  it("should render correctly.", () => {
    const wrapper = shallow(<Tabs children={dummyTabs} />);

    expect(wrapper).toMatchSnapshot();
  });

  it("should render tabs with given data.", () => {
    const wrapper = mount(<Tabs children={dummyTabs} />);

    expect(wrapper.find('li')).toHaveLength(2);
  });
});
