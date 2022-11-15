const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('contact')
    .withLabel('Contact')
    .withDescription('')
    .withIcon(Icon.SNIPPET)
    .withFile(require('./template.twig'))
    .withStyleConfigs(
        require('../../../configs/styles/display-button'),
        require('../../../configs/styles/button-icon')
    )
    .withParts(
        cx.part.formattedText
            .withLabel('Subtitle')
            .withHtmlEditorConfig(require('../../../configs/full')),
        cx.part.formattedText
            .withLabel('Text Editor')
            .withHtmlEditorConfig(require('../../../configs/full')),
        cx.part.link.withLabel('Primary Button'),
        cx.part.link.withLabel('Secondary Button')
    );
