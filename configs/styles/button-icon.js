const { cx } = require('@bsi-cx/design-build');

module.exports = cx.style
    .withIdentifier('btn-icon-SHcAzZ')
    .withLabel('Button Icon')
    .withCssClasses(
        cx.cssClass.withLabel('Download').withCssClass('download-btn'),
        cx.cssClass.withLabel('Open Link').withCssClass('link-btn')
    );
