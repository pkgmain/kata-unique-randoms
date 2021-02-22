const uut = require('./random-ints')

test("creates n ints", () => {
    const n = uut.generateRandom()
    const result = uut.getUniqueArray(n);
    expect(result.length).toBe(n)
})

test("the ints are random", () => {
    const first = uut.getUniqueArray(5);
    const second = uut.getUniqueArray(5);
    expect(first).not.toEqual(second)
})

test("there are no duplicates", () => {
    const result = uut.getUniqueArray(10);
    const expected = [...new Set(result)]
    expect(result).toEqual(expected)
})
