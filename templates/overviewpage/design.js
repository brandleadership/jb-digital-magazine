require('./styles/styles.scss');

const { cx, Locale } = require('@bsi-cx/design-build');

module.exports = cx.design
    .withTitle('Detailpage Digital Magazine')
    .withAuthor('gateB')
    .withDate('10.11.2022')
    .withDefaultLocale(Locale.EN)
    .withLocales(Locale.EN, Locale.DE)
    .withContentElementGroups(
        cx.contentElementGroup
            .withGroupId('sections')
            .withLabel('Sections')
            .withContentElements(
                require('../../components/sections/OverviewPageHero'),
                require('../../components/sections/Introduction'),
                require('../../components/sections/TextBlock'),
                require('../../components/sections/SliderSection'),
                require('../../components/sections/GlossarySection'),
                require('../../components/sections/Interviews'),
                require('../../components/sections/Education'),
                require('../../components/sections/Contact'),
                require('../../components/sections/Footer')
            ),
        cx.contentElementGroup
            .withGroupId('elements')
            .withLabel('Elements')
            .withContentElements(
                require('../../components/elements/Lead'),
                require('../../components/elements/Card'),
                require('../../components/elements/Definition'),
                require('../../components/elements/InterviewTeaser'),
                require('../../components/elements/Spacer')
            )
    );
