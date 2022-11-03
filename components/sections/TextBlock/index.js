const {cx, Icon} = require('@bsi-cx/design-build'); 

module.exports = cx.contentElement
  .withElementId('textblock')
  .withLabel('Text Block')
  .withDescription('')
  .withIcon(Icon.SNIPPET)
  .withFile(require('./template.twig'))
  .withParts(
    cx.part.formattedText
      .withLabel('Subheading'),
    cx.part.formattedText
      .withLabel('Text Editor'));