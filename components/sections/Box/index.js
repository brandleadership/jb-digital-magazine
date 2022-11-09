const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('box')
    .withLabel('Box')
    .withDescription('')
    .withIcon(Icon.SNIPPET)
    .withFile(require('./template.twig'))
    .withParts(
        cx.part.formattedText
            .withLabel('Subheading')
            .withHtmlEditorConfig(require('../../../configs/full')),
        cx.part.formattedText
            .withLabel('Text Editor')
            .withHtmlEditorConfig(require('../../../configs/full'))
    );
