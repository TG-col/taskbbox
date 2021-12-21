import React from "react";

import Carousel from "./Carousel";

export default {
  component: Carousel,
  title: "Carousel",
};

const Template = (args) => <Carousel {...args} />;

export const Default = Template.bind({});
Default.args = {
  carousel: {
    id: "1",
    type: "default",
    title: "Carousel test",
    state: "CAROUSEL_DEFAULT"
  },
};


export const Infinite = Template.bind({});
Infinite.args = {
  carousel: {
    ...Default.args.carousel,
    type: "infinite",
    state: "CAROUSEL_INFINITE",
  },
};
