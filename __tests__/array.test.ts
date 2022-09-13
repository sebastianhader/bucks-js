import $ from '../src/index'

// ARRAY

const TEST_ARRAY: any = [
    { firstName: 'Lisa', lastName: 'Hansen' },
    { firstName: 'Max', lastName: 'Meier' },
    { firstName: 'Josef', lastName: 'Gunter' },
    { firstName: 'Jana', lastName: 'Laurenz' },
    { firstName: 'Ursula', lastName: 'Green' },
    { firstName: 'Katharina', lastName: 'Miller' },
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
    const friendIndex4 = $.array.findIndex(TEST_ARRAY, (f: any) => { return f.firstName === 'Ursula' })
    expect(friendIndex4).toBe(4)
})


test('$.array.intersection()', () => {
    const intersection1 = $.array.intersection([1, 2, 3], [2, 3])
    expect(intersection1).toStrictEqual([2, 3])
})


test('$.array.difference()', () => {
    const difference1 = $.array.difference([1, 2, 3], [2, 3])
    expect(difference1).toStrictEqual([1])
    const difference2 = $.array.difference([1, 2, 3], [2, 3, 5])
    expect(difference2).toStrictEqual([1])
    const difference3 = $.array.difference([2, 3, 5], [1, 2, 3])
    expect(difference3).toStrictEqual([5])
})