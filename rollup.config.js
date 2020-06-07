import fs from 'fs';
import babel from 'rollup-plugin-babel';
import mdx from 'rollup-plugin-mdx';

const componentList = fs.readdirSync('./components');

const componentDocs = componentList.map((name) => ({
  input: `components/${name}/docs.mdx`,
  output: {
    file: `dist/${name.toLowerCase()}-docs.js`,
    format: 'cjs'
  },
  external: ['react'],
  plugins: [mdx()]
}));

const componentFiles = componentList.map((name) => ({
  input: `components/${name}/${name.toLowerCase()}.js`,
  output: {
    file: `dist/${name.toLowerCase()}.js`,
    format: 'cjs'
  },
  external: ['react'],
  plugins: [babel()]
}));

export default componentDocs.concat(componentFiles);
