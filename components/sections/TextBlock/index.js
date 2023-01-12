const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('textblock')
    .withLabel('Text Block')
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
    )
    .withDropzones(
        cx.dropzone
            .withDropzone('textblock-spacer-top')
            .withAllowedElements(require('../../elements/Spacer')),
        cx.dropzone
            .withDropzone('textblock-spacer-bottom')
            .withAllowedElements(require('../../elements/Spacer'))
    );
