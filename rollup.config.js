import fs from 'fs'
import babel from '@rollup/plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import mdx from 'rollup-plugin-mdx'

const componentList = fs.readdirSync('./components')

const componentDocs = componentList.map((name) => ({
  input: `components/${name}/docs.mdx`,
  output: {
    file: `dist/${name}/docs.js`,
    format: 'cjs'
  },
  external: ['react', '@mdx-js/react'],
  plugins: [mdx()]
}))

const componentFiles = {
  input: componentList.map((name) => `components/${name}/index.js`),
  output: {
    dir: 'dist',
    format: 'cjs'
  },
  external: ['react'],
  plugins: [
    resolve({
      extensions: ['.js', '.jsx']
    }),
    babel()
  ],
  preserveModules: true
}

export default componentDocs.concat(componentFiles)
