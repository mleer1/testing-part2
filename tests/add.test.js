import add from '../src/add'

describe('add function', () => {
  it('should add two positive numbers', () => {
    expect(add(3, 4)).toBe(7)
  })

  it('should add a positive number and zero', () => {
    expect(add(5, 0)).toBe(5)
  })

  it('should add a negative number and a positive number', () => {
    expect(add(-2, 7)).toBe(5)
  })

  it('should add two negative numbers', () => {
    expect(add(-8, -3)).toBe(-11)
  })

  it('should add two decimal numbers', () => {
    expect(add(1.5, 2.5)).toBe(4)
  })

  it('should add two large numbers', () => {
    expect(add(999999999, 1)).toBe(1000000000)
  })

  it('should add with default value if no arguments provided', () => {
    expect(add()).toBe(0)
  })
})
