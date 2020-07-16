import React from 'react';

interface Props { }

const PageTitle: React.FC<Props> = ({ children }) => {
    return <h1 className="text-6xl mb-10 mt-6">{children}</h1>
}

export default PageTitle;
