import React from 'react';

import { Description } from './Description';

export default {
    title: 'Components/Description',
    component: Description,
    argTypes: {
    },
};

const Template = (args) => <Description {...args} />;

export const Empty = Template.bind({});

Empty.args = {
};

export const WithText = Template.bind({});

WithText.args = {
    text: "This is where text goes!"
};

export const IsLoading = Template.bind({});

IsLoading.args = {
    isLoading: true
};
