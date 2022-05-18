import React from 'react';

import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
  },
};

const Template = (args) => <Button {...args} />;

export const Standard = Template.bind({});

Standard.args = {
  label: 'Button',
};

export const Primary = Template.bind({});

Primary.args = {
  label: 'Button',
  cssClasses: 'pure-button-primary'
};

export const Disabled = Template.bind({});

Disabled.args = {
  label: 'Button',
  cssClasses: 'pure-button-disabled'
};

