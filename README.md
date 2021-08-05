# callback-chain-resolver

- [GitHub](https://github.com/IAmAnubhavSaini/callback-chain-resolver)
- [NPM](https://www.npmjs.com/package/callback-chain-resolver)

Do you have a bunch of callbacks that you want to call one after another? Well, look no further.

Pass your in-series callbacks in an array and an initial value, this will resolve and return you the final value.

## `main` branch

We are using `main` branch. If you find `master` branch being used by authors, let us know.

This closes #6.

## Installation

`npm i callback-chain-resolver`

## Usage example

```javascript

const incrementBy1 = (x) => x + 1;
const decrementBy1 = (x) => x - 1;
const double = x => 2 * x
const square = x => x * x
const cube = x => x * square(x)

resolver(1, [incrementBy1, incrementBy1, incrementBy1]) // === 4
resolver(1, [incrementBy1, incrementBy1, incrementBy1, double, square]) // === 64
resolver(1, [incrementBy1, incrementBy1, incrementBy1, cube]) // === 64
resolver(1, [decrementBy1, decrementBy1, decrementBy1]) // === -2
resolver(1, [incrementBy1, decrementBy1]) // === 1
resolver(1, [incrementBy1, cube, decrementBy1]) // === 7
resolver(1, [decrementBy1, incrementBy1]) // === 1

```

## typedResolver

Throws compile time error if you pass mixed output type functions.

For example when you add `toString` to the typedResolver test cases.

```typescript
TS2345: Argument of type '(((x: number) => number) | ((x: number) => string))[]' is not assignable to parameter of type 'FnT<number>[]'.
    Type '((x: number) => number) | ((x: number) => string)' is not assignable to type 'FnT<number>'.
    Type '(x: number) => string' is not assignable to type 'FnT<number>'.
    Type 'string' is not assignable to type 'number'
```

## License

MIT &copy; 2016 - 2021
