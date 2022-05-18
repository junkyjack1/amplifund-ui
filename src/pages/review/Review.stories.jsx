import React from 'react';

import { Review } from './Review';

export default {
    title: 'Pages/Review',
    component: Review,
    argTypes: {
    },
};

const Template = (args) => <Review {...args} />;

export const Standard = Template.bind({});

Standard.args = {

};

