import React from 'react';

import { Intro } from './Intro';

export default {
    title: 'Pages/Intro',
    component: Intro,
    argTypes: {
    },
};

const Template = (args) => <Intro {...args} />;

export const Standard = Template.bind({});

Standard.args = {

};
