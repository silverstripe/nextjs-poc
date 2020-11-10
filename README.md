# Silverstripe NextJS Frontend PoC

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Set up backend

This PoC requires a Silverstripe CMS installation with a certain GraphQL endpoint configuration.
There's a separate [Backend PoC](https://github.com/silverstripeltd/nextjs-poc-backend) for this purpose.
The easiest way to get it going is through [Lando](https://lando.dev).

```
git clone https://github.com/silverstripeltd/nextjs-poc-backend
cd nextjs-poc-backend
cp .env.example .env
lando start
lando sake dev/build
````

You can now navigate the CMS at https://nextjs-poc-back.lndo.site/admin,
and try out GraphQL queries at https://nextjs-poc-back.lndo.site/dev/graphql/ide.

## Getting Started

If you haven't used Lando with the default host names,
configure `GRAPHQL_ENDPOINT_URL` in `.env.local`.

Now run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/[[...slug]].js`. The page auto-updates as you edit the file.
The GraphQL queries are in `lib/silverstripe.js`.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## TODO

 * Support build by using `getStaticPaths`
 * Identify blocks via _modelType (https://github.com/silverstripe/silverstripe-graphql/issues/312)
 * Fix blocks integration
 * Nested menus and menu performance (don't load on each page load)
 * Generate fake blocks and performance test (https://github.com/silverstripe/silverstripe-graphql/issues/312)
 * Test images via TinyMCE