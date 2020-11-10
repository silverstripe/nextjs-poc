import React from 'react';

export const defaultContext: GlobalState = {
    global: {
        navigation: [],
    },
    page: {
        __typename: 'Page',
        title: '',
        blocks: [],
    },
};

const SilverstripeContext = React.createContext(defaultContext);

export default SilverstripeContext;
