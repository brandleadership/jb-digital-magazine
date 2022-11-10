const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('detailhero')
    .withLabel('Hero')
    .withDescription('')
    .withIcon(Icon.SNIPPET)
    .withFile(require('./template.twig'))
    .withParts(
        cx.part.formattedText
            .withLabel('Text')
            .withHtmlEditorConfig(require('../../../configs/full')),
        cx.part.plainText.withLabel('Text'),
        cx.part.formattedText
            .withLabel('Title')
            .withHtmlEditorConfig(require('../../../configs/full')),
        cx.part.formattedText
            .withLabel('Headline')
            .withHtmlEditorConfig(require('../../../configs/full')),
        cx.part.image.withLabel('Image')
    );
