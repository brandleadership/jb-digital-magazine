const { cx } = require('@bsi-cx/design-build');

module.exports = cx.style
    .withIdentifier('overviewpage-hero-btn-SHcAzZ')
    .withLabel('Show Button')
    .withCssClasses(
        cx.cssClass.withLabel('Shown').withCssClass('show-btn'),
        cx.cssClass.withLabel('Hidden').withCssClass('hide-btn')
    );
