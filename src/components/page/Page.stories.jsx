import React from 'react';

import { Page } from './Page';

export default {
  title: 'Components/Page',
  component: Page,
  argTypes: {
  },
};

const Template = (args) => <Page {...args} />;

export const JustAPage = Template.bind({});

JustAPage.args = {
    children: <h1>I'm just a page</h1>
};

export const WithImage = Template.bind({});

WithImage.args = {
    children: 
        <div>
            <h1>I'm a page with an image. Wow.</h1>
            <img src='./ben-stein.jpg' alt="Wow." />            
        </div>
};
