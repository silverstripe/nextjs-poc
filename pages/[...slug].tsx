import React from 'react';
import Head from 'next/head';
import { useState } from 'react';
import SilverstripeContext, { defaultContext } from '../components/context/Silverstripe';
import Blog from '../components/pages/Blog';
import Page from '../components/pages/Page';

export default function PageResolver({ state }) {
    if (state === undefined || state === null) {
        state = defaultContext;
    }
    const { page } = state;

    let Layout: React.FC<any> = Page;
    switch (page.Type) {
        case 'Blog':
            Layout = Blog;
            break;
        case 'Page':
        default:
            Layout = Page;
            break;
    }
    // React.createElement(page.Type);

    // Todo add outer HTML(head tag)
    return <SilverstripeContext.Provider value={state}>
        <Layout />
    </SilverstripeContext.Provider>
}

export async function getStaticProps({ params }) {
    params = params || {};

    let slug = [];
    if (params.slug !== undefined) {
        slug = params.slug;
    }

    const link = slug.join('/');

    const res = await fetch(`http://project-skeleton/api/slug?slug=${link}`);
    const state = await res.json();

    return {
        props: {
            state,
        }
    }
}

export async function getStaticPaths() {
    const res = await fetch('http://project-skeleton/api/paths');
    const paths = await res.json();

    return {
        paths,
        fallback: true,
    };
}
