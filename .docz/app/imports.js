export const imports = {
  'docs/Home.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "docs-home" */ 'docs/Home.mdx'),
  'packages/utils/src/docs/Home.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "packages-utils-src-docs-home" */ 'packages/utils/src/docs/Home.mdx'),
}
