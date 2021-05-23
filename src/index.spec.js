const resolver = require('./index');

describe('callback-chain-resolver', () => {

    const incrementBy1 = (x) => x + 1;
    const decrementBy1 = (x) => x - 1;
    const double = x => 2 * x;
    const square = x => x * x;
    const cube = x => x * square(x);

    it('resolver() resolves successfully', () => {
        [{
            callbackArray: [incrementBy1, incrementBy1, incrementBy1, double, square],
            initValue: 1,
            expected: 64
        },
            {
                callbackArray: [double, square, decrementBy1, decrementBy1, decrementBy1],
                initValue: 1,
                expected: 1
            },
            {
                callbackArray: [incrementBy1, cube, decrementBy1],
                initValue: 1,
                expected: 7
            },
            {
                callbackArray: [decrementBy1, incrementBy1],
                initValue: 1,
                expected: 1
            }].forEach(testCase => {
            expect(resolver(testCase.initValue, testCase.callbackArray)).toEqual(testCase.expected);
        });
    });
});
