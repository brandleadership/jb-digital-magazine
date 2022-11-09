const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('articleteaser')
    .withLabel('Article Teaser')
    .withDescription('')
    .withIcon(Icon.SNIPPET)
    .withFile(require('./template.twig'))
    .withParts(
        cx.part.formattedText
            .withLabel('Topic')
            .withHtmlEditorConfig(require('../../../configs/full')),
        cx.part.plainText.withLabel('Chapter'),
        cx.part.formattedText
            .withLabel('Article Teaser')
            .withHtmlEditorConfig(require('../../../configs/full')),
        cx.part.formattedText
            .withLabel('Teaser Text')
            .withHtmlEditorConfig(require('../../../configs/full')),
        cx.part.formattedText
            .withLabel('Article Image')
            .withHtmlEditorConfig(require('../../../configs/full'))
    );
