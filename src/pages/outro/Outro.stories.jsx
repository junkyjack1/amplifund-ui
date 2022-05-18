import React from 'react';

import { Outro } from './Outro';

export default {
    title: 'Pages/Outro',
    component: Outro,
    argTypes: {
    },
};

const Template = (args) => <Outro {...args} />;

export const Standard = Template.bind({});

Standard.args = {

};
