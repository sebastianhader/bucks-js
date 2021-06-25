import $ from '../src/index'

// ARRAY

const TEST_ARRAY: any = [
    { firstName: 'Lisa', lastName: 'Hansen' },
    { firstName: 'Max', lastName: 'Meier' },
    { firstName: 'Josef', lastName: 'Gunter' },
]

test('$.array.is()', () => {
    expect($.array.is([])).toBe(true)
    expect($.array.is('Name')).toBe(false)
    expect($.array.is(1)).toBe(false)
    expect($.array.is(null)).toBe(false)
    expect($.array.is(undefined)).toBe(false)
})


test('$.array.empty()', () => {
    expect($.array.empty([])).toBe(true)
    expect($.array.empty(['Name'])).toBe(false)
    expect($.array.empty(['Name', 'First Name'])).toBe(false)
})


test('$.array.find()', () => {
    const friend = $.array.find(TEST_ARRAY, (f: any) => { return f.firstName === 'Max' })
    expect(friend.lastName).toBe('Meier')
})


test('$.array.findIndex()', () => {
    const friendIndex1 = $.array.findIndex(TEST_ARRAY, (f: any) => { return f.firstName === 'Max' })
    expect(friendIndex1).toBe(1)
    const friendIndex2 = $.array.findIndex(TEST_ARRAY, (f: any) => { return f.lastName === 'Gunter' })
    expect(friendIndex2).toBe(2)
    const friendIndexUndefined = $.array.findIndex(TEST_ARRAY, (f: any) => { return f.lastName === 'Holman' })
    expect(friendIndexUndefined).toBe(undefined)
})