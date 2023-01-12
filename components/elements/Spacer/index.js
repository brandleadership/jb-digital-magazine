const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('spacer')
    .withLabel('Spacer')
    .withIcon(Icon.SNIPPET)
    .withFile(require('./template.twig'));
