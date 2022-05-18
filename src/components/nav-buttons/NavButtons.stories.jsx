import React from 'react';

import { NavButtons } from './NavButtons';

export default {
    title: 'Components/NavButtons',
    component: NavButtons,
    argTypes: {
    },
};

const Template = (args) => <NavButtons {...args} />;

export const WithActions = Template.bind({});

WithActions.args = {
    back: () => alert('Back!'),
    next: () => alert('Next!'),
};

export const WithoutActions = Template.bind({});

WithoutActions.args = {

};


