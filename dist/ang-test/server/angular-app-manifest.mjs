
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 697, hash: '7b49d68f418b30570fca4cec2944d34a0bc2af0775878f3c5c67c22c5f395877', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 941, hash: 'ee45050d8771d0b0a9f1bed2c4bc3e26be5b902ae47245cb2fdef2c4e86240a8', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-QMXJO2CJ.css': {size: 144, hash: '4+AXQmdsQdk', text: () => import('./assets-chunks/styles-QMXJO2CJ_css.mjs').then(m => m.default)}
  },
};
