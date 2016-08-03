# callback-chain-resolver
Do you have a bunch of callbacks that you want to call one after another? Well, look no further.


### Usage example

```

function incrementBy1(x) {
    return x + 1;
}

function decrementBy1(x) {
    return x - 1;
}

resolver(1, [incrementBy1, incrementBy1, incrementBy1]) // === 4
resolver(1, [decrementBy1, decrementBy1, decrementBy1]) // === -2
resolver(1, [incrementBy1, decrementBy1]) // === 1
resolver(1, [decrementBy1, incrementBy1]) // === 1

```

## License and copyright

MIT &copy; Anubhav Saini 2016
