import React from 'react';

interface Props { }

const Container: React.FC<Props> = ({ children }) => (
    <div className="container mx-auto">
        {children}
    </div>
);

export default Container;
