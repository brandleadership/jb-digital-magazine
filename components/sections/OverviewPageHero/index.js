const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('overviewpagehero')
    .withLabel('Hero')
    .withDescription('')
    .withIcon(Icon.SNIPPET)
    .withFile(require('./template.twig'))
    .withStyleConfigs(require('../../../configs/styles/overviewpage-button'))
    .withParts(
        cx.part.backgroundImage.withLabel('Background Image'),
        cx.part.formattedText
            .withLabel('Modal: Language Switch Text')
            .withHtmlEditorConfig(require('../../../configs/full')),
        cx.part.formattedText
            .withLabel('Modal: Language Selection')
            .withHtmlEditorConfig(require('../../../configs/full')),
        cx.part.plainText.withLabel('Current Language'),
        cx.part.link.withLabel('Button'),
        cx.part.plainText.withLabel('Subheading'),
        cx.part.formattedText.withLabel('Title'),
        cx.part.plainText.withLabel('Scroll Indicator')
    );
