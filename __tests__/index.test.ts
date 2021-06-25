import $ from '../src/index'


// STRING
test('string.isNumeric()', () => {
    expect($.string.isNumeric('a47')).toBe(false)
    expect($.string.isNumeric('47')).toBe(true)
})

test('string.camelize()', () => {
    expect($.string.camelize('Created At')).toBe('createdAt')
    expect($.string.camelize('Created   At')).toBe('createdAt')
})