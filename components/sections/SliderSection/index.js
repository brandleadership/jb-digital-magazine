const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('slidersection')
    .withLabel('Slider Section')
    .withDescription('')
    .withIcon(Icon.SNIPPET)
    .withFile(require('./template.twig'))
    .withStyleConfigs(require('../../../configs/styles/slider-bg-color'))
    .withParts(
        cx.part.formattedText
            .withLabel('Title')
            .withHtmlEditorConfig(require('../../../configs/full')),
        cx.part.formattedText
            .withLabel('Text Editor')
            .withHtmlEditorConfig(require('../../../configs/full'))
    );
