import upperFirst from './src/upperFirst'

describe('upperFirst', () => {
  it('should convert the first character of a lowercase string to uppercase', () => {
    const result = upperFirst('fred')
    expect(result).toEqual('Fred')
  })

  it('should not change the first character of an already uppercase string', () => {
    const result = upperFirst('FRED')
    expect(result).toEqual('FRED')
  })

  it('should handle an empty string', () => {
    const result = upperFirst('')
    expect(result).toEqual('')
  })

  it('should handle a string with only spaces', () => {
    const result = upperFirst('    ')
    expect(result).toEqual('    ')
  })

  it('should convert the first character of a mixed case string to uppercase', () => {
    const result = upperFirst('mIxEDcaSe')
    expect(result).toEqual('MIxEDcaSe')
  })

  it('should convert the first character of a string with leading whitespace to uppercase', () => {
    const result = upperFirst('  leadingWhitespace')
    expect(result).toEqual('  LeadingWhitespace')
  })

  it('should convert the first character of a string with trailing whitespace to uppercase', () => {
    const result = upperFirst('trailingWhitespace  ')
    expect(result).toEqual('TrailingWhitespace  ')
  })

  it('should convert the first character of a single character string to uppercase', () => {
    const result = upperFirst('a')
    expect(result).toEqual('A')
  })
})
