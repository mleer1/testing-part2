import isEmpty from '../src/isEmpty'

describe('isEmpty function', () => {
  it('returns true for null', () => {
    expect(isEmpty(null)).toBe(true)
  })

  it('returns true for undefined', () => {
    expect(isEmpty(undefined)).toBe(true)
  })

  it('returns true for an empty array', () => {
    expect(isEmpty([])).toBe(true)
  })

  it('returns true for an empty string', () => {
    expect(isEmpty('')).toBe(true)
  })

  it('returns true for an empty object', () => {
    expect(isEmpty({})).toBe(true)
  })

  it('returns true for an empty Map', () => {
    expect(isEmpty(new Map())).toBe(true)
  })

  it('returns true for an empty Set', () => {
    expect(isEmpty(new Set())).toBe(true)
  })

  it('returns true for an empty function', () => {
    expect(isEmpty(() => {})).toBe(true)
  })

  it('returns false for non-empty array', () => {
    expect(isEmpty([1, 2, 3])).toBe(false)
  })

  it('returns false for non-empty string', () => {
    expect(isEmpty('abc')).toBe(false)
  })

  it('returns false for non-empty object', () => {
    expect(isEmpty({ a: 1 })).toBe(false)
  })

  it('returns false for non-empty Map', () => {
    const nonEmptyMap = new Map([[1, 'one']])
    expect(isEmpty(nonEmptyMap)).toBe(false)
  })

  it('returns false for non-empty Set', () => {
    const nonEmptySet = new Set([1, 2, 3])
    expect(isEmpty(nonEmptySet)).toBe(false)
  })

  it('returns false for function with properties', () => {
    const funcWithProperties = () => {}
    funcWithProperties.someProperty = 'property'
    expect(isEmpty(funcWithProperties)).toBe(false)
  })
})
