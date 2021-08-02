import $ from '../src/index'

// STRING

const NON_TEXT: any = null
const TEXT = 'Hello world'
const URL = 'https://google.com'
const PHOTO_URL = 'https://google.com/photo.jpg'


test('string.is()', () => {
    expect($.string.is(NON_TEXT)).toBe(false)
    expect($.string.is(TEXT)).toBe(true)
})

test('string.isMail()', () => {
    expect($.string.isMail('test@tester.com')).toBe(true)
    expect($.string.isMail('test+22@tester.com')).toBe(true)
    expect($.string.isMail('test.tester@tester.com')).toBe(true)
    expect($.string.isMail('test_tese44ter@tester.com')).toBe(true)
    expect($.string.isMail('tes33t_tese44ter@tester.com')).toBe(true)
    expect($.string.isMail('tes33-t_tes@e44ter@tester.com')).toBe(false)
    expect($.string.isMail('test+22@tester.c')).toBe(false)
    expect($.string.isMail('test+22@tester.c')).toBe(false)
    expect($.string.isMail('test<@tester.c')).toBe(false)
    expect($.string.isMail('te"st@tester.c')).toBe(false)
})

test('string.isUrl()', () => {
    expect($.string.isUrl(TEXT)).toBe(false)
    expect($.string.isUrl(URL)).toBe(true)
    expect($.string.isUrl(PHOTO_URL)).toBe(true)
})

test('string.isImageUrl()', () => {
    expect($.string.isImageUrl(URL)).toBe(false)
    expect($.string.isImageUrl(PHOTO_URL)).toBe(true)
})

test('string.isNumeric()', () => {
    expect($.string.isNumeric('a47')).toBe(false)
    expect($.string.isNumeric('47')).toBe(true)
})

test('string.camelize()', () => {
    expect($.string.camelize('Created At')).toBe('createdAt')
    expect($.string.camelize('Created   At')).toBe('createdAt')
})


