const { cx } = require('@bsi-cx/design-build');

module.exports = cx.style
    .withIdentifier('slider-bg-color-SHcAzZ')
    .withLabel('Slider Background Color')
    .withCssClasses(
        cx.cssClass.withLabel('Blue Background').withCssClass('blue-bg'),
        cx.cssClass.withLabel('White Background').withCssClass('white-bg')
    );
