import React from 'react';

import { Carousel } from './Carousel';

export default {
  title: 'Components/Carousel',
  component: Carousel,
  argTypes: {
  },
};

const Template = (args) => <Carousel {...args} />;

export const Empty = Template.bind({});

Empty.args = {
};

export const WithImage = Template.bind({});

WithImage.args = {
  activeItem: {
    id: 1,
    name: "Marge Simpson",
    path: "/Marge_Simpson.png"
  }
};

export const WithActions = Template.bind({});

WithActions.args = {
  leftArrowAction: () => alert("You clicked the left arrow. No need to do it again, eh?"),
  rightArrowAction: () => alert("You did it! You clicked the right arrow. Hooray! Now move along.")
};