import toNumber from './src/toNumber'

describe('toNumber', () => {
  it('should convert a number to itself', () => {
    expect(toNumber(3.2)).toBe(3.2)
    expect(toNumber(Number.MIN_VALUE)).toBe(5e-324)
    expect(toNumber(Infinity)).toBe(Infinity)
  })

  it('should return NaN for symbols', () => {
    const symbol = Symbol('test')
    expect(toNumber(symbol)).toBe(NaN)
  })

  it('should convert an object to a number', () => {
    const obj = {
      valueOf: () => 3.2,
    }
    expect(toNumber(obj)).toBe(3.2)
  })

  it('should convert a string to a number', () => {
    expect(toNumber('3.2')).toBe(3.2)
  })

  it('should handle leading and trailing whitespace in strings', () => {
    expect(toNumber('  3.2  ')).toBe(3.2)
  })

  it('should handle binary string values', () => {
    expect(toNumber('0b101')).toBe(5)
  })

  it('should handle octal string values', () => {
    expect(toNumber('0o777')).toBe(511)
  })

  it('should handle bad signed hexadecimal string values', () => {
    expect(toNumber('-0xabc')).toBe(NaN)
  })

  it('should handle other string values', () => {
    expect(toNumber('abc')).toBe(NaN)
  })

  it('should handle 0 as a special case', () => {
    expect(toNumber(0)).toBe(0)
  })

  it('should handle other non-numeric values', () => {
    expect(toNumber('test')).toBe(NaN)
    expect(toNumber(null)).toBe(NaN)
    expect(toNumber(undefined)).toBe(NaN)
    expect(toNumber({})).toBe(NaN)
    expect(toNumber([])).toBe(NaN)
  })
})
