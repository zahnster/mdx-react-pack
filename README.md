# Pack and Dist MDX

This is a spike on packing MDX files and their associated React components, in a way which can be distributed and imported into other projects, specifically Next.js sites.

This project utilizes the [Rollup bunlder](http://rollupjs.org/) to build React component files, along with associated docs mdx files that reside under the `/components` directory. These contents are built to `dist`, and can then be distributed and imported into any React-type project. They will work both on the server-side and client-side.

## Purpose of this example

This is to provide for a streamlined way to take components and docs from one project (say, a design system), and render them in a completely different app (say, a website).

The output must work on both server-side as well as client-side, which is why we are using Rollup and not Webpack. Rollup is an elegant solution when dealing with bundling libraries, as opposed to web apps.

## Starting up and Running the Build

This project is intended to run with Node v12.

1. Clone repository
2. `npm install` to install
3. `npm run build` will build the contents of `/components` and put their packed cjs files in `dist`

## Limitations / Bugs

- The Rollup MDX plugin won't import associated React components. As a result, we are bringing the component files along for the ride explicitly. It would be nice to not have to do this.
