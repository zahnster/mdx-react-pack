import fs from 'fs'
import babel from 'rollup-plugin-babel'
import mdx from 'rollup-plugin-mdx'
import resolve from '@rollup/plugin-node-resolve'

const componentList = fs.readdirSync('./components')

const componentDocs = componentList.map((name) => ({
  input: `components/${name}/docs.mdx`,
  output: {
    file: `dist/${name}/docs.js`,
    format: 'cjs'
  },
  external: ['react'],
  plugins: [mdx()]
}))

const componentFiles = {
  input: componentList.map((name) => `components/${name}/index.js`),
  output: {
    dir: 'dist',
    format: 'cjs'
  },
  external: ['react'],
  plugins: [resolve(), babel()],
  preserveModules: true
}

export default componentDocs.concat(componentFiles)
