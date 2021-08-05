# callback-chain-resolver

- [GitHub](https://github.com/IAmAnubhavSaini/callback-chain-resolver)
- [NPM](https://www.npmjs.com/package/callback-chain-resolver)

Version 16 introduces `series` and `parallel` functions and removes earlier functions.

Helps you generate values out of functions in series or in parallel.

## Installation

`npm i callback-chain-resolver`

## Usage example

```javascript

import {series, parallel} from 'callback-chain-resolver'

const incrementBy1 = (x) => x + 1;
const decrementBy1 = (x) => x - 1;
const double = x => 2 * x
const square = x => x * x
const cube = x => x * square(x)

series(1, [incrementBy1, incrementBy1, incrementBy1]) // === 4
series(1, [incrementBy1, incrementBy1, incrementBy1, double, square]) // === 64
series(1, [incrementBy1, incrementBy1, incrementBy1, cube]) // === 64
series(1, [decrementBy1, decrementBy1, decrementBy1]) // === -2
series(1, [incrementBy1, decrementBy1]) // === 1
series(1, [incrementBy1, cube, decrementBy1]) // === 7
series(1, [decrementBy1, incrementBy1]) // === 1

parallel(1, [incrementBy1, incrementBy1, incrementBy1]) // === [2, 2, 2]
parallel(1, [incrementBy1, incrementBy1, incrementBy1, double, square]) // [2, 2, 2, 2, 1]

```

Check test cases for more examples.

## typed

Throws compile time error if you pass mixed output type functions.

For example when you add `toString` to the typedResolver test cases.

```typescript
TS2345: Argument of type '(((x: number) => number) | ((x: number) => string))[]' is not assignable to parameter of type 'FnT<number>[]'.
    Type '((x: number) => number) | ((x: number) => string)' is not assignable to type 'FnT<number>'.
    Type '(x: number) => string' is not assignable to type 'FnT<number>'.
    Type 'string' is not assignable to type 'number'
```

Use `any` in `<any>` while invoking mixed functions.

## License

MIT &copy; 2016 - 2021
