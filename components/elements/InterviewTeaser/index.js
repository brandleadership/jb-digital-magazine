const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('interviewteaser')
    .withLabel('Interview Teaser')
    .withDescription('')
    .withIcon(Icon.SNIPPET)
    .withFile(require('./template.twig'))
    .withParts(
        cx.part.image.withLabel('Image'),
        cx.part.plainText.withLabel('Subheading'),
        cx.part.formattedText
            .withLabel('Interview Teaser Title')
            .withHtmlEditorConfig(require('../../../configs/full')),
        cx.part.formattedText
            .withLabel('Interviewee')
            .withHtmlEditorConfig(require('../../../configs/full')),
        cx.part.link.withLabel('Button')
    );
