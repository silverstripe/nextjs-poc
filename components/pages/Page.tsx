import React, { useContext, Fragment, Component, ReactElement, FC } from 'react';
import Outer from '../layout/Outer';
import Container from '../layout/Container';
import Typography from '../layout/Typography';
import ContentBlock from '../blocks/ContentBlock';
import SilverstripeContext from '../context/Silverstripe';
import PageTitle from '../layout/PageTitle';
import { BaseElement as BaseElementType } from '../../graphql';
import BaseElement from '../blocks/BaseElement';

interface Props { }

const Page = (props: Props) => {
    const { page } = useContext(SilverstripeContext);

    const getComponentForBlock = (cmp: string): FC => {
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
    const {elementalArea: {elements: {nodes: blocks}}} = page;
    return <Outer>
        <Container>
            <PageTitle>{page.title}</PageTitle>

            <Typography>
                {page.content && <div dangerouslySetInnerHTML={{ __html: page.content }}></div>}
                {blocks && blocks.map((block: BaseElementType) => {
                    const Component = getComponentForBlock(block.__typename);

                    return <Component key={block.id} {...block} />
                })}
            </Typography>
        </Container>
    </Outer>
}

export default Page;
