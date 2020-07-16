import React, { Fragment } from 'react';

interface Props { }

const BaseElement = (props: Props) => {
    return (
        <p className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-3" role="alert">
            <strong>Warning:</strong>
            This is the default component for blocks, have you defined $react_component on your block?
        </p>
    );
}

export default BaseElement;
