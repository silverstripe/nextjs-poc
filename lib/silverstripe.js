async function fetchAPI(query, {variables} = {}) {
    const res = await fetch(process.env.GRAPHQL_ENDPOINT_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query,
            variables,
        }),
    })
    const json = await res.json();

    if (json.errors) {
        console.error(json.errors)
        throw new Error('Failed to fetch API')
    }

    return json.data;
}

export async function getPagePaths(preview = false) {
    // TODO Pagination
    const data = await fetchAPI(
        `query readPages {
            readPages {
                nodes {
                    id
                    link
                }
            }
        }`
    );

    return (data.readPages.nodes || []);
}

export async function getNavigation(preview = false) {
    // TODO Pagination
    const data = await fetchAPI(
        `query readNavigation {
            readPages(filter: {parentID: { eq: 0 }}) {
                nodes {
                    id
                    title
                    link
                }
            }
        }`
    );

    return (data.readPages.nodes || []);
}

export async function getPageByLink(link, preview = false) {
    const data = await fetchAPI(
        `query readOnePage($link: String!) {
            readOnePage(link: $link) {
                __typename
                id
                title
                content
            }
        }`,
        {
            variables: {
                link,
            },
        }
    );
    
    return data.readOnePage;
}