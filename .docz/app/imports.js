export const imports = {
  'docs/GettingStarted.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "docs-getting-started" */ 'docs/GettingStarted.mdx'),
  'docs/Home.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "docs-home" */ 'docs/Home.mdx'),
  'docs/packages/data/Home.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "docs-packages-data-home" */ 'docs/packages/data/Home.mdx'),
  'docs/packages/shop/Home.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "docs-packages-shop-home" */ 'docs/packages/shop/Home.mdx'),
  'docs/packages/ui/Home.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "docs-packages-ui-home" */ 'docs/packages/ui/Home.mdx'),
  'docs/packages/utils/Home.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "docs-packages-utils-home" */ 'docs/packages/utils/Home.mdx'),
  'packages/utils/src/docs/Home.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "packages-utils-src-docs-home" */ 'packages/utils/src/docs/Home.mdx'),
}
