import React from 'react';
import Head from 'next/head';
import { getPagePaths, getPageByLink, getNavigation } from '../lib/silverstripe';
import SilverstripeContext, { defaultContext } from '../components/context/Silverstripe';
import Blog from '../components/pages/Blog';
import Page from '../components/pages/Page';

export default function PageResolver(state) {
    state = Object.assign({}, defaultContext, state || {});
    const { page } = state;
    
    let Layout: React.FC<any> = Page;
    // switch (page.__typename) {
    //     case 'Blog':
    //         Layout = Blog;
    //         break;
    //     case 'Page':
    //     default:
    //         Layout = Page;
    //         break;
    // }
    // React.createElement(page.__typename);
    
    // Todo add outer HTML(head tag)
    return <SilverstripeContext.Provider value={state}>
        <Layout />
    </SilverstripeContext.Provider>
}

export async function getStaticProps({ params, preview = false }) {
    params = params || {};

    let slug = [];
    if (params.slug !== undefined) {
        slug = params.slug;
    }

    const link = slug.join('/');

    const [page, navigation] = await Promise.all([
        getPageByLink(link, preview),
        // TODO Don't query on each page fetch
        await getNavigation()
    ]);

    return {
        props: {
            page,
            global: {
                navigation
            }
        }
    }
}

export async function getStaticPaths() {
    const nodes = await getPagePaths();
    const paths = nodes.map(node => node.link);

    return {
        paths,
        fallback: true,
    };
}
