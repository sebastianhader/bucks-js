import $ from '../src/index'

test('Bucks JS: Is Array?', () => {
    expect($.array.is([])).toBe(true);
})