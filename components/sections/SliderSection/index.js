const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('slidersection')
    .withLabel('Slider Section')
    .withDescription('')
    .withIcon(Icon.SNIPPET)
    .withFile(require('./template.twig'))
    .withParts(
        cx.part.plainText.withLabel('Title'),
        cx.part.formattedText
            .withLabel('Text Editor')
            .withHtmlEditorConfig(require('../../../configs/full'))
    );
