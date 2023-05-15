require('./styles/styles.scss');

const { cx, Locale } = require('@bsi-cx/design-build');

module.exports = cx.design
    .withTitle('Detailpage Digital Magazine')
    .withAuthor('gateB')
    .withDate('10.11.2022')
    .withDefaultLocale(Locale.EN)
    .withPreviewImage('static/preview.png')
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
                require('../../components/sections/Header'),
                require('../../components/sections/DetailPageHero'),
                require('../../components/sections/Subheading'),
                require('../../components/sections/Box'),
                require('../../components/sections/CaseBlock'),
                require('../../components/sections/Figure'),
                require('../../components/sections/Quote'),
                require('../../components/sections/InterviewBlock'),
                require('../../components/sections/ArticleTeaser'),
                require('../../components/sections/BackToTop'),
                require('../../components/sections/Contact'),
                require('../../components/sections/Footer'),
                require('@bsi-cx/jb_landingpage/components/elements/embed-video'),
                require('@bsi-cx/jb_landingpage/components/elements/iframe-video'),
                require('@bsi-cx/jb_landingpage/components/elements/downloads'),
                require('@bsi-cx/jb_landingpage/components/elements/download-item'),
                require('@bsi-cx/jb_landingpage/components/elements/links-group'),
                require('@bsi-cx/jb_landingpage/components/elements/links-group-item'),
                require('@bsi-cx/jb_landingpage/components/elements/rectangle-with-buttons'),
                require('@bsi-cx/jb_landingpage/components/elements/podcast-audio'),
                require('@bsi-cx/jb_landingpage/components/related-articles/articles-1-column-wide'),
                require('@bsi-cx/jb_landingpage/components/related-articles/articles-2-columns'),
                require('@bsi-cx/jb_landingpage/components/related-articles/articles-content'),
                require('@bsi-cx/jb_landingpage/components/related-articles/articles-title'),
                require('@bsi-cx/jb_landingpage/components/elements/links-group-title')
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
