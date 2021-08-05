import {resolver, typedResolver} from "./index";

describe('callback-chain-resolver default resolver', () => {
    const incrementBy1 = (x: number) => x + 1;
    const decrementBy1 = (x: number) => x - 1;
    const double = (x: number) => 2 * x;
    const square = (x: number) => x * x;
    const cube = (x: number) => x * square(x);

    it('resolver() resolves successfully', () => {
        [
            {
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
            }
        ].forEach(testCase => {
            expect(resolver(testCase.initValue, testCase.callbackArray)).toEqual(testCase.expected);
        });
    });
});

describe('callback-chain-resolver typedResolver', () => {
    const incrementBy1 = (x: number) => x + 1;
    const decrementBy1 = (x: number) => x - 1;
    const double = (x: number) => 2 * x;
    const square = (x: number) => x * x;
    const cube = (x: number) => x * square(x);
    // const toString = (x: number) => x.toString();

    it('typedResolver() resolves successfully', () => {
        [
            {
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
                callbackArray: [decrementBy1, incrementBy1/*, toString*/],
                initValue: 1,
                expected: 1
            }
        ].forEach(testCase => {
            expect(typedResolver(testCase.initValue, testCase.callbackArray)).toEqual(testCase.expected);
        });
    });
});
