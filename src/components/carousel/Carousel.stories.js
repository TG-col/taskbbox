import React from "react";

import Carousel from "./Carousel";

export default {
  title: "Colmobil/Carousel",
  component: Carousel,
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

export const Bullets = Template.bind({});
Bullets.args = {
  carousel: {
    ...Default.args.carousel,
    type: "infinite",
    bullets: true,
    state: "CAROUSEL_BULLETS",
  },
};

export const Arrows = Template.bind({});
Arrows.args = {
  carousel: {
    ...Default.args.carousel,
    type: "default",
    bullets: true,
    arrows: true,
    state: "CAROUSEL_ARROWS",
  },
};

export const PlayPauseCarousel = Template.bind({});
PlayPauseCarousel.args = {
  carousel: {
    ...Default.args.carousel,
    type: "infinite",
    bullets: true,
    arrows: true,
    state: "CAROUSEL_PLAY_PAUSE",
  },
};

// export const WithImages = Template.bind({});
// WithImages.args = {
//   carousel: {
//     ...Default.args.carousel,
//     type: "default",
//     bullets: true,
//     arrows: true,
//     images: images,
//     state: "CAROUSEL_WITH_IMAGES",
//   },
// };

