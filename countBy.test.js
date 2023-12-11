import countBy from './src/countBy'

describe('countBy', () => {
  it('should count by a boolean iteratee for an array of objects', () => {
    const users = [
      { user: 'barney', active: true },
      { user: 'betty', active: true },
      { user: 'fred', active: false },
    ]

    const result = countBy(users, (value) => value.active)
    expect(result).toEqual({ true: 2, false: 1 })
  })

  it('should count by a string iteratee for an array of objects', () => {
    const users = [
      { user: 'barney', active: true },
      { user: 'betty', active: true },
      { user: 'fred', active: false },
    ]

    const result = countBy(users, 'user')
    expect(result).toEqual({ barney: 1, betty: 1, fred: 1 })
  })

  it('should count by a custom iteratee for an array of numbers', () => {
    const numbers = [1, 2, 3, 4, 5]

    const result = countBy(numbers, (value) =>
      value % 2 === 0 ? 'even' : 'odd'
    )
    expect(result).toEqual({ odd: 3, even: 2 })
  })

  it('should count by a custom iteratee for an array of strings', () => {
    const words = ['apple', 'banana', 'orange', 'grape', 'kiwi']

    const result = countBy(words, (value) => value.length)
    expect(result).toEqual({ 5: 2, 6: 2, 7: 1 })
  })

  it('should return an empty object for an empty array', () => {
    const result = countBy([], (value) => value)
    expect(result).toEqual({})
  })

  it('should count by a custom iteratee for an object', () => {
    const obj = {
      a: { value: 10 },
      b: { value: 20 },
      c: { value: 10 },
    }

    const result = countBy(obj, (value) => value.value)
    expect(result).toEqual({ 10: 2, 20: 1 })
  })
})
