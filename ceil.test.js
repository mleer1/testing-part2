import ceil from './src/ceil.js';

describe('ceil function', () => {
  it('should return number as the same', () => {
    expect(ceil(5)).toBe(5);
  })

  it('should return negative number as the same', () => {
    expect(ceil(-7)).toBe(-7);
  })

  it('should return number rounded up', () => {
    expect(ceil(5.3)).toBe(6);
  })

  it('should return negative number rounded up', () => {
    expect(ceil(-5.7)).toBe(-5);
  })

  it('should work with zero', () => {
    expect(ceil(0)).toBe(0);
  })

  it('should work with large numbers', () => {
    expect(ceil(1000000.1)).toBe(1000001);
  })

  it('should work with negative numbers', () => {
    expect(ceil(-999999.9)).toBe(-999999);
  })

  it('should work with small numbers', () => {
    expect(ceil(0.000001)).toBe(1);
  })

  it('should round to the correct precision', () => {
    expect(ceil(1.14, 1)).toBe(1.2)
  })

  it('should round to the correct precision for negative numbers', () => {
    expect(ceil(-2.14, 1)).toBe(-2.1)
  })

  it('should make non-number input into NaN', () => {
    expect(ceil("aaa")).toBe(NaN)
  })

})