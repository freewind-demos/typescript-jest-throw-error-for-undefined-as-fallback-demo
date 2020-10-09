TypeScript Jest Expect Throw Error Containing Text Demo
===========================

How to check if a function throw an error which contains some special text?

Not sure why this is not working:

```
expect(() => foo()).toThrowError(expect.stringContaining('(foo)'))
```

Update:

Just pass the text, the default behavior is "containing"

```
expect(() => foo()).toThrowError('(foo)')
```

```
npm install
npm test
```
