# Silverstripe NextJS Frontend PoC

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Set up backend

This PoC requires a Silverstripe CMS installation with a certain GraphQL endpoint configuration.
There's a separate [Backend PoC](https://github.com/silverstripe/nextjs-poc-backend) for this purpose.
The easiest way to get it going is through [Lando](https://lando.dev).

```
git clone https://github.com/silverstripe/nextjs-poc-backend
cd nextjs-poc-backend
cp .env.example .env
lando start
lando sake dev/build
````

You can now navigate the CMS at https://nextjs-poc-back.lndo.site/admin,
and try out GraphQL queries at https://nextjs-poc-back.lndo.site/dev/graphql/ide.

## Set up frontend

Install NPM dependencies, and add default config:

```
yarn
cp .env.example .env.local
```

If you haven't used Lando with the default host names,
configure `GRAPHQL_ENDPOINT_URL` in `.env.local`.

Now run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/[[...slug]].js`. The page auto-updates as you edit the file.
The GraphQL queries are in `lib/silverstripe.js`.

## Generating test data

In order to create some test data to play with,
you can use the [silverstripe/frameworktest](https://github.com/silverstripe/silverstripe-frameworktest)
module. It generates 2000 pages by default, with between one and ten blocks on each page.
In order to have some images to randomly associate with those blocks,
we also generate some files and images first. 

Caution: These tasks will take a few minutes to run.

```
cd nextjs-poc-backend
lando sake dev/tasks/FTFileMakerTask
lando sake dev/tasks/FTPageMakerTask withBlocks=1
```

## Serverless Deployment on AWS

1. Install the Serverless framework

```
npm install -g serverless
```

2. Follow the [serverless-next](https://github.com/serverless-nextjs/serverless-next.js) instructions to configure your AWS credentials.
   When using this with a Silverstripe Ltd. AWS account, you should use `aws-vault` instead of setting
   your AWS credentials in an environment config.

3. Adjust the namespace in `serverless.yml` (replace `my-namespace`)

4. Adjust the CMS backend host name in `input.build.env` in `serverless.yml`.
   If you're using the local Lando setup, you can use an [ngrok](https://ngrok.com) tunnel based on the local port mapping:
   `ngrok http 123456`. The local port mapping is different for every Lando setup, use `lando info` to find the right port.


5. Deploy!

```
serverless
```

For users of `aws-vault`, use the following instead:

```
aws-vault exec <my-aws-account> -- serverless
```

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