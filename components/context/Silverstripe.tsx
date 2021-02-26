import React from 'react';
import { GlobalState } from '../..';

export const defaultContext: GlobalState = {
    global: {
        navigation: [],
    },
    page: {
        __typename: 'Page',
        title: '',
    },
};

const SilverstripeContext = React.createContext(defaultContext);

export default SilverstripeContext;
