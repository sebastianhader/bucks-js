import $ from '../src/index'

const TEST_OBJECT = {
    sections: [
        {
            title: 'A Section: Test Title',
            description: 'A Section: Test Description',
            photos: [
                { url: 'http://sebastian.uk', alternative: 'A Section: Photo 0' },
                { url: 'http://sebastian.uk', alternative: 'A Section: Photo 1' }
            ],
        },
        {
            title: 'B Section: Test Title',
            description: 'B Section: Test Description',
            photos: [
                { url: 'http://sebastian.uk', alternative: 'B Section: Photo 0' },
                { url: 'http://sebastian.uk', alternative: 'B Section: Photo 1' }
            ],
        },
        {
            title: 'C Section: Test Title',
            description: 'C Section: Test Description',
            photos: [
                { url: 'http://sebastian.uk', alternative: 'C Section: Photo 0' },
                { url: 'http://sebastian.uk', alternative: 'C Section: Photo 1' }
            ],
        },
    ]
}


test('String.isNumeric()', () => {
    expect($.string.isNumeric('a47')).toBe(false)
    expect($.string.isNumeric('47')).toBe(true)
})


test('Array.is()', () => {
    expect($.array.is([])).toBe(true)
})


test('Object.toPathKeys() -> easy', () => {
    const result = $.object.toPathKeys('sections.test[0]')
    expect(result).toStrictEqual(['sections', 'test', '0'])
})

test('Object.get() -> easy', () => {
    const result = $.object.get(TEST_OBJECT, 'sections')
    expect(result).toBe(TEST_OBJECT.sections)
})

test('Object.get() -> medium', () => {
    const result = $.object.get(TEST_OBJECT, 'sections[0]')
    expect(result).toBe(TEST_OBJECT.sections[0])
})

test('Object.set() -> medium', () => {
    let object = {
        title: {
            tests: ['test4', null, 'tet4']
        }
    }
    let resultObject = { title: { test: [ { title: 'hans' } ] } }
    $.object.set(object, 'title.tests[1].hans[5]', { ggg: 'yo' })
})