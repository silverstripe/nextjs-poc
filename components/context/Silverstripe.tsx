import React from 'react';

export const defaultContext: GlobalState = {
    global: {
        navigation: [],
    },
    page: {
        Type: 'Page',
        Title: '',
        Blocks: [],
    },
};

const SilverstripeContext = React.createContext(defaultContext);

export default SilverstripeContext;
