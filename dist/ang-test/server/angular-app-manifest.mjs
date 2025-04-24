
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 697, hash: '542777abbbc07a23706efcca9dd16c1aa5b3aa3c9bce3992f5aba2b30349710b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 941, hash: '5329fde367ef414a599dded47c51d5dab9847e5340010d7b0c3b1687c9b48278', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-QMXJO2CJ.css': {size: 144, hash: '4+AXQmdsQdk', text: () => import('./assets-chunks/styles-QMXJO2CJ_css.mjs').then(m => m.default)}
  },
};
