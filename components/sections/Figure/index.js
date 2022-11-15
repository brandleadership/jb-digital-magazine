const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('figure')
    .withLabel('Figure')
    .withDescription('')
    .withIcon(Icon.SNIPPET)
    .withFile(require('./template.twig'))
    .withParts(
        cx.part.formattedText
            .withLabel('Figure Title')
            .withHtmlEditorConfig(require('../../../configs/full')),
        cx.part.image.withLabel('Image'),
        cx.part.formattedText
            .withLabel('Image Description')
            .withHtmlEditorConfig(require('../../../configs/full'))
    );
