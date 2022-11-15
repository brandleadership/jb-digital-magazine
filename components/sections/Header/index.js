const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('header')
    .withLabel('Header')
    .withDescription('')
    .withIcon(Icon.SNIPPET)
    .withFile(require('./template.twig'))
    .withStyleConfigs(
        require('../../../configs/styles/display-button'),
        require('../../../configs/styles/button-icon')
    )
    .withParts(
        cx.part.link.withLabel('Link back to Overviewpage'),
        cx.part.plainText.withLabel('Link Text'),
        cx.part.link.withLabel('Button')
    );
