import { getFieldName, toKebabCase } from './numbers'

describe('toKebabCase', () => {
  it('returns a string in Kebab Case', () => {
    const value = toKebabCase('hello world')
    expect(value).toEqual('hello-world')
  })
})

describe('getFieldName', () => {
  it('returns a name from the name arg if available', () => {
    const value = getFieldName('custom-field', 'My custom field')
    expect(value).toEqual('custom-field')
  })

  it('returns a name from the label arg if available', () => {
    const value = getFieldName(undefined, 'My custom field')
    expect(value).toEqual('my-custom-field')
  })

  it('returns a default name if no args are available', () => {
    const value = getFieldName(undefined, undefined)
    expect(value).toEqual('money-input')
  })
})
