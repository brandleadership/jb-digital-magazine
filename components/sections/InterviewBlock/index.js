const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('interviewblock')
    .withLabel('Interview Block')
    .withDescription('')
    .withIcon(Icon.SNIPPET)
    .withFile(require('./template.twig'))
    .withParts(
        cx.part.formattedText
            .withLabel('Interview Question')
            .withHtmlEditorConfig(require('../../../configs/full')),
        cx.part.plainText.withLabel('Name'),
        cx.part.formattedText
            .withLabel('Interview Answer')
            .withHtmlEditorConfig(require('../../../configs/full'))
    );
