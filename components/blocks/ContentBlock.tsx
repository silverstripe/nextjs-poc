import React, { ReactNode } from 'react';
import { BaseElement } from '../../graphql';

interface Props extends BaseElement {
    children: ReactNode,
}

const ContentBlock = (props: Props ) => {
    const {_extend: {elementContent: {html}}} = props;
    return (
        <>
            {!!props.showTitle && <h2>{props.title}</h2>}
            <div dangerouslySetInnerHTML={{ __html: html }}></div>
        </>
    );
}

export default ContentBlock;
