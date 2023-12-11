import filter from '../src/filter'

describe('filter function', () => {
  it('filters elements based on the provided predicate', () => {
    const users = [
      { user: 'barney', active: true },
      { user: 'fred', active: false },
    ]

    const filteredUsers = filter(users, ({ active }) => active)

    expect(filteredUsers).toEqual([{ user: 'barney', active: true }])
  })

  it('handles an empty array correctly', () => {
    const result = filter([], (item) => item)

    expect(result).toEqual([])
  })

  it('handles a predicate that filters all elements', () => {
    const array = [1, 2, 3, 4]
    const predicate = () => false

    const result = filter(array, predicate)

    expect(result).toEqual([])
  })

  it('handles a predicate that includes all elements', () => {
    const array = [1, 2, 3, 4]
    const predicate = () => true

    const result = filter(array, predicate)

    expect(result).toEqual([1, 2, 3, 4])
  })

  it('does not modify the original array', () => {
    const array = [1, 2, 3, 4]
    const predicate = () => true

    filter(array, predicate)

    expect(array).toEqual([1, 2, 3, 4])
  })
})
