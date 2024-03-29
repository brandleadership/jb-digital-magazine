const path = require('path');

const {
    BuildConfig,
    ModuleConfig,
    WebpackConfigBuilder,
    Version,
    DesignType,
} = require('@bsi-cx/design-build');

module.exports = WebpackConfigBuilder.fromConfigs(
    new BuildConfig()
        .withName('detailpage')
        .withVersion('2.0.0')
        .withDesignType(DesignType.LANDINGPAGE)
        .withTargetVersion(Version.CX_22_0)
        .withRootPath(path.resolve(__dirname, 'templates', 'detailpage'))
        .withPropertiesFilePath('properties.js')
        .withModules(new ModuleConfig().withName('main').withPath('main.js'))
        .withAdditionalFilesToCopy({
            from: path.resolve(
                __dirname,
                'templates',
                'detailpage',
                'preview.png'
            ),
            to: 'static/preview.png',
        }),
    new BuildConfig()
        .withName('overviewpage')
        .withVersion('2.0.0')
        .withDesignType(DesignType.LANDINGPAGE)
        .withTargetVersion(Version.CX_22_0)
        .withRootPath(path.resolve(__dirname, 'templates', 'overviewpage'))
        .withPropertiesFilePath('properties.js')
        .withModules(new ModuleConfig().withName('main').withPath('main.js'))
        .withAdditionalFilesToCopy({
            from: path.resolve(
                __dirname,
                'templates',
                'overviewpage',
                'preview.png'
            ),
            to: 'static/preview.png',
        }),
    new BuildConfig()
        .withName('combined')
        .withVersion('2.0.0')
        .withDesignType(DesignType.LANDINGPAGE)
        .withTargetVersion(Version.CX_22_0)
        .withRootPath(path.resolve(__dirname, 'templates', 'combined'))
        .withPropertiesFilePath('properties.js')
        .withModules(new ModuleConfig().withName('main').withPath('main.js'))
        .withAdditionalFilesToCopy({
            from: path.resolve(
                __dirname,
                'templates',
                'combined',
                'preview.png'
            ),
            to: 'static/preview.png',
        })
);
