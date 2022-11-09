const { cx, Icon } = require('@bsi-cx/design-build')

module.exports = cx.contentElement
    .withElementId('footer')
    .withLabel('Footer')
    .withDescription('')
    .withIcon(Icon.SNIPPET)
    .withFile(require('./template.twig'))
    .withParts(
        cx.part.link
            .withId('648510fc-5f83-11ed-9b6a-0242ac120002')
            .withLabel('About Us'),
        cx.part.link
            .withId('64850f4e-5f83-11ed-9b6a-0242ac120002')
            .withLabel('Contact'),
        cx.part.link
            .withId('64850d3c-5f83-11ed-9b6a-0242ac120002')
            .withLabel('Legal'),
        cx.part.link
            .withId('64850aee-5f83-11ed-9b6a-0242ac120002')
            .withLabel('Facebook Link'),
        cx.part.link
            .withId('6485094a-5f83-11ed-9b6a-0242ac120002')
            .withLabel('Twitter Link'),
        cx.part.link
            .withId('64850788-5f83-11ed-9b6a-0242ac120002')
            .withLabel('Youtube Link'),
        cx.part.link
            .withId('64850378-5f83-11ed-9b6a-0242ac120002')
            .withLabel('Linkedin Link'),
        cx.part.link
            .withId('648501fc-5f83-11ed-9b6a-0242ac120002')
            .withLabel('Instagram Link'),
        cx.part.link
            .withId('6485003a-5f83-11ed-9b6a-0242ac120002')
            .withLabel('Data Privacy'),
        cx.part.link
            .withId('6484fcfc-5f83-11ed-9b6a-0242ac120002')
            .withLabel('Terms of use'),
        cx.part.link
            .withId('a9194160-5f84-11ed-9b6a-0242ac120002')
            .withLabel('News Alert'),
        cx.part.plainText
            .withId('a9193fda-5f84-11ed-9b6a-0242ac120002')
            .withLabel('Copyright Text'),
        cx.part.link
            .withId('a9193e2c-5f84-11ed-9b6a-0242ac120002')
            .withLabel('Terms of Use'),
        cx.part.link
            .withId('a9193be8-5f84-11ed-9b6a-0242ac120002')
            .withLabel('Data Privacy Policy'),
        cx.part.link
            .withId('a9193ad0-5f84-11ed-9b6a-0242ac120002')
            .withLabel('Back to top')
    )
