import glob from 'fast-glob'
import babel from '@rollup/plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import mdx from 'rollup-plugin-mdx'

const docsConfig = {
  input: glob.sync('components/**/docs.mdx'),
  output: {
    dir: 'dist',
    format: 'cjs'
  },
  external: ['react', '@mdx-js/react'],
  plugins: [mdx()],
  preserveModules: true
}

const componentConfig = {
  input: glob.sync('components/**/*.{js,jsx}'),
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

export default [docsConfig, componentConfig]
