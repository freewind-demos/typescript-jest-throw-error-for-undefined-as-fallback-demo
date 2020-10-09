function foo() {
  throw new Error('an error from (foo)');
}

describe('test', () => {
  it('checks error containing text', () => {
    // expect(() => foo()).toThrowError(expect.stringContaining('(foo)'))
    expect(() => foo()).toThrowError('(foo)')
  })

  it('checks error containing text with regex', () => {
    expect(() => foo()).toThrowError(/[(]foo[)]/)
  })
})
