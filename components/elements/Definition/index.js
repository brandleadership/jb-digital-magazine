const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('definition')
    .withLabel('Definition')
    .withDescription('')
    .withIcon(Icon.SNIPPET)
    .withFile(require('./template.twig'))
    .withParts(
        cx.part.plainText.withLabel('Title'),
        cx.part.formattedText
            .withLabel('Text')
            .withHtmlEditorConfig(require('../../../configs/full'))
    );
