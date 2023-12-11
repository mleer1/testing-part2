import eq from '../src/eq'

describe('eq function', () => {
  it('should return true for the same numbers', () => {
    expect(eq(5, 5)).toBe(true)
  })

  it('should return true for the same strings', () => {
    expect(eq('test', 'test')).toBe(true)
  })

  it('should return true for the same booleans', () => {
    expect(eq(true, true)).toBe(true)
  })

  it('should return true for two null values', () => {
    expect(eq(null, null)).toBe(true)
  })

  it('should return true for two undefined values', () => {
    expect(eq(undefined, undefined)).toBe(true)
  })

  it('should return false for different numbers', () => {
    expect(eq(5, 10)).toBe(false)
  })

  it('should return false for different strings', () => {
    expect(eq('test', 'string')).toBe(false)
  })

  it('should return false for different booleans', () => {
    expect(eq(true, false)).toBe(false)
  })

  it('should return false for null and undefined', () => {
    expect(eq(null, undefined)).toBe(false)
  })

  it('should return true for two NaN values', () => {
    expect(eq(NaN, NaN)).toBe(true)
  })

  it('should return false for NaN and number', () => {
    expect(eq(5, NaN)).toBe(false)
  })

  it('should return false for null and NaN', () => {
    expect(eq(null, NaN)).toBe(false)
  })

  it('should return true for different signed zeros', () => {
    expect(eq(0, -0)).toBe(true)
  })

  it('should return true for different signed zeros 2', () => {
    expect(eq(-0, 0)).toBe(true)
  })

  it('should return false for different value types', () => {
    expect(eq(0, '0')).toBe(true)
  })
})
