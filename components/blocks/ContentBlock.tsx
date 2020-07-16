import React, { Fragment } from 'react';

interface Props {
    ShowTitle: number;
    Title: string;
    HTML: string;
}

const ContentBlock = (props: Props) => {
    return (
        <Fragment>
            {!!props.ShowTitle && <h2>{props.Title}</h2>}
            <div dangerouslySetInnerHTML={{ __html: props.HTML }}></div>
        </Fragment>
    );
}

export default ContentBlock;
