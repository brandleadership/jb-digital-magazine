const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('card')
    .withLabel('Card')
    .withDescription('')
    .withIcon(Icon.SNIPPET)
    .withFile(require('./template.twig'))
    .withParts(
        cx.part.backgroundImage.withLabel('Background Image'),
        cx.part.link.withLabel('Card Link'),
        cx.part.plainText.withLabel('Subheading'),
        cx.part.plainText.withLabel('Card Title'),
        cx.part.formattedText
            .withLabel('Card Text')
            .withHtmlEditorConfig(require('../../../configs/full')),
        cx.part.plainText.withLabel('Text')
    );
