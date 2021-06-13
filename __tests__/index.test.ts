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


test('Array.is()', () => {
    expect($.array.is([])).toBe(true)
})


// OBJECT
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


// STRING
test('string.isNumeric()', () => {
    expect($.string.isNumeric('a47')).toBe(false)
    expect($.string.isNumeric('47')).toBe(true)
})

test('string.camelize()', () => {
    expect($.string.camelize('Created At')).toBe('createdAt')
    expect($.string.camelize('Created   At')).toBe('createdAt')
})