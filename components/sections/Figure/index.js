const {cx, Icon} = require('@bsi-cx/design-build'); 

module.exports = cx.contentElement
  .withElementId('figure')
  .withLabel('Figure')
  .withDescription('')
  .withIcon(Icon.SNIPPET)
  .withFile(require('./template.twig'))
  .withParts(
    cx.part.image
      .withLabel('Image'),
    cx.part.formattedText
      .withLabel('Image Description'));