export function removeLastStacktrace(err: Error): Error {
  const stackRows = err.stack?.split('\n');
  stackRows?.splice(1, 1);
  err.stack = stackRows?.join('\n');
  return err;
}

function fail(message?: string): never {
  const error = new Error(message)
  removeLastStacktrace(error);
  throw error;
}

function getValue(n: number): number | undefined {
  if (n < 0) {
    return undefined
  } else {
    return n;
  }
}

describe('test', () => {
  it('checks error containing text', () => {
    const value = getValue(100) ?? fail('value is undefined')
    expect(value).toBe(100);
  })

  it('checks error containing text with regex', () => {
    const value = getValue(-1) ?? fail('value is undefined')
    expect(value).toBe(undefined);
  })
})
