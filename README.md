# callback-chain-resolver

Do you have a bunch of callbacks that you want to call one after another? Well, look no further.


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

## License

MIT &copy;
