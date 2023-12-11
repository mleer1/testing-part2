import toString from '../src/toString.js'

describe('toString function', () => {
  it('should return the input string as the same', () => {
    expect(toString('test')).toBe('test')
  })

  it('should return the numbers in a string as the same f', () => {
    expect(toString('123')).toBe('123')
  })

  it('should convert arrays to strings', () => {
    expect(toString([1, 2, 3, 4])).toBe('1,2,3,4')
  })

  it('should recursively convert arrays to strings', () => {
    expect(toString([1, 'two', [3, 'four']])).toBe('1,two,3,four')
  })

  it('should recursively convert matrix to string', () => {
    expect(
      toString([
        [1, 2],
        [3, 4],
      ])
    ).toBe('1,2,3,4')
  })

  it('should convert symbols to strings', () => {
    const sym = Symbol('test')
    expect(toString(sym)).toBe(sym.toString())
  })

  it('should convert numbers to string', () => {
    expect(toString(42)).toBe('42')
  })

  it('should convert bool to string', () => {
    expect(toString(true)).toBe('true')
  })

  it('should convert null values to string', () => {
    expect(toString(null)).toBe('null')
  })

  it('should convert undefined to string', () => {
    expect(toString(undefined)).toBe('undefined')
  })

  it('should handle cases like -0', () => {
    expect(toString(-0)).toBe('-0')
  })
  it('should handle cases like -Infinity', () => {
    expect(toString(-Infinity)).toBe('-Infinity')
  })

  it('should handle objects', () => {
    const obj = {
      prop1: 'value1',
    }
    expect(toString(obj)).toBe('{"prop1":"value1"}')
  })
})
