import React from 'react';
import { useContext } from 'react';
import Outer from '../layout/Outer';
import Container from '../layout/Container';
import Typography from '../layout/Typography';
import PageTitle from '../layout/PageTitle';
import SilverstripeContext from '../context/Silverstripe';

const Blog = () => {
    const { page } = useContext(SilverstripeContext);

    const emptyMessage = <Typography>
        <p>There are no blog posts.</p>
    </Typography>;

    let blogPosts = null;
    if (page.blogPosts && page.blogPosts.length > 0) {
        blogPosts = page.blogPosts.map(post => {
            return <a href={post.link} key={post.link} className="border rounded shadow p-6">
                <article className="md:flex">
                    <div className="md:flex-shrink-0">
                        {post.featuredImage && <img src={post.featuredImage} alt={post.title} className="rounded" />}
                    </div>
                    <div className="mt-4 md:mt-0 md:ml-6">
                        <header>
                            <span className="text-sm">{post.publishDate}</span>
                            <h1 className="text-xl mt-2">{post.title}</h1>
                        </header>
                        {post.excerpt && <p className="text-gray-700 mt-3">{post.excerpt}</p>}
                    </div>
                </article>
            </a >
        });

        blogPosts = <div className="grid grid-cols-2 gap-5 mt-8">
            {blogPosts}
        </div>
    }

    return <Outer>
        <Container>
            <PageTitle>{page.title}</PageTitle>
            {blogPosts}
            {!blogPosts && emptyMessage}
        </Container>
    </Outer>
};

export default Blog;
