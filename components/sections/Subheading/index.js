const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('subheadingsection')
    .withLabel('Subheading')
    .withDescription('')
    .withIcon(Icon.SNIPPET)
    .withFile(require('./template.twig'))
    .withParts(
        cx.part.formattedText
            .withLabel('Subheading')
            .withHtmlEditorConfig(require('../../../configs/full'))
    );
