import React from 'react';

interface Props {
}

const Typography: React.FC<Props> = ({ children }) => {

    return <div className="text-xl">
        {children}
    </div>
};
export default Typography;
