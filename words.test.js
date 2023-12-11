import words from './src/words'

describe('words', () => {
  it('should split a string into an array of words using default pattern', () => {
    const result = words('fred, barney, & pebbles')
    expect(result).toEqual(['fred', 'barney', 'pebbles'])
  })

  it('should split a string into an array of words using a custom pattern', () => {
    const result = words('fred, barney, & pebbles', /[^, ]+/g)
    expect(result).toEqual(['fred', 'barney', '&', 'pebbles'])
  })

  it('should handle an empty string', () => {
    const result = words('')
    expect(result).toEqual([])
  })

  it('should handle a string with only spaces', () => {
    const result = words('    ')
    expect(result).toEqual([])
  })

  it('should handle a string with no word characters', () => {
    const result = words('12345!@#$%^')
    expect(result).toEqual(['12345'])
  })

  it('should split a string with Unicode words', () => {
    const result = words('café crème', /\S+/g)
    expect(result).toEqual(['café', 'crème'])
  })

  it('should split a string with mixed alphanumeric and special characters', () => {
    const result = words('word123!@#word456')
    expect(result).toEqual(['word123', 'word456'])
  })

  it('should handle a string with repeating whitespace characters', () => {
    const result = words('word  word    word')
    expect(result).toEqual(['word', 'word', 'word'])
  })
})
