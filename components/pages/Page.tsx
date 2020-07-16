import React, { useContext, Fragment } from 'react';
import Outer from '../layout/Outer';
import Container from '../layout/Container';
import Typography from '../layout/Typography';
import ContentBlock from '../blocks/ContentBlock';
import BaseElement from '../blocks/BaseElement';
import SilverstripeContext from '../context/Silverstripe';
import PageTitle from '../layout/PageTitle';

interface Props { }

const Page = (props: Props) => {
    const { page } = useContext(SilverstripeContext);

    const getComponentForBlock = (cmp: string) => {
        // TODO: Refactor with dynamic imports so we don't
        // Have to edit this file every time a block is added
        switch (cmp) {
            case 'ContentBlock':
                return ContentBlock;
            case 'BaseElement':
            default:
                return BaseElement;
        }
    }

    return <Outer>
        <Container>
            <PageTitle>{page.Title}</PageTitle>

            <Typography>
                {page.Content && <div dangerouslySetInnerHTML={{ __html: page.Content }}></div>}
                {page.Blocks && page.Blocks.map((block: any) => {
                    const Component = getComponentForBlock(block.Component);

                    return <Component key={block.ID} {...block} />
                })}
            </Typography>
        </Container>
    </Outer>
}

export default Page;
