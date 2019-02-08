export const imports = {
  'src/Example/Example.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-example-example" */ 'src/Example/Example.mdx'),
}
