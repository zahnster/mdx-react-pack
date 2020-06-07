# Pack and Dist MDX

This is a spike on packing MDX files and their associated React components, in a way which can be distributed and imported into other projects, specifically Next.js sites.

This project utilizes the [Rollup bundler](http://rollupjs.org/) to build React component files, along with associated docs mdx files that reside under the `/components` directory. These contents are built to `/dist`, and can then be distributed and imported into any React-type project. They will work both on the server-side and client-side.

## Purpose of this example

This is to provide for a streamlined way to take components and docs from one project (say, a design system), and render them in a completely different app (say, a website).

We are using Rollup as it is better suited for bundling and distributing libraries than bundlers like Webpack. We have had struggles getting Webpack to work with external packages efficiently. Webpack also has a [limitation with SSR](https://github.com/webpack/webpack/issues/6784), and SSR is critical to our needs.

Read more about the key differences between Webpack and Rollup, and why we chose Rollup for bundling our component library, here:
https://medium.com/webpack/webpack-and-rollup-the-same-but-different-a41ad427058c

## Starting up and Running the Build

This project is intended to run with Node v12.

1. Clone repository
2. `npm install` to install
3. `npm run build` will build the contents of `/components` and put their packed cjs files in `dist`
