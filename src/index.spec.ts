import {parallel, series} from "./index";

const incrementBy1 = (x: number) => x + 1;
const decrementBy1 = (x: number) => x - 1;
const double = (x: number) => 2 * x;
const square = (x: number) => x * x;
const cube = (x: number) => x * square(x);
const toString = (x: number) => x.toString();

describe('series', () => {


    it('series<number>() resolves successfully', () => {
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
            expect(series<number>(testCase.initValue, testCase.callbackArray)).toEqual(testCase.expected);
        });
    });

    // won't run
    // it('series<string>() fails for number returning functions', () => {
    //     // TS2345: Argument of type 'number' is not assignable to parameter of type 'string'.
    //
    //     [
    //         {
    //         callbackArray: [incrementBy1, incrementBy1, incrementBy1, double, square],
    //         initValue: 1,
    //         expected: 64
    //     }
    //     ].forEach(t => {
    //         expect(series<string>(t.initValue, t.callbackArray)).toEqual(t.expected);
    //     })
    // });

    // will run
    it('series<string>() fails for number returning functions', () => {
        // TS2345: Argument of type 'number' is not assignable to parameter of type 'string'.

        [
            {
                callbackArray: [incrementBy1, incrementBy1, incrementBy1, double, square, toString],
                initValue: 1,
                expected: '64'
            }
        ].forEach(t => {
            expect(series<any>(t.initValue, t.callbackArray)).toEqual(t.expected);
        });
    });
});

describe('parallel', () => {
    it('maps functions to input values', () => {
        const testCase = {
            callbackArray: [incrementBy1, incrementBy1, incrementBy1, double, square],
            initValue: 1,
            expected: [2, 2, 2, 2, 1]
        };
        const actual = parallel<number>(testCase.initValue, testCase.callbackArray);
        const expected = testCase.expected;
        expect(actual).toEqual(expected);
    });
    it('maps mixed functions to input values', () => {
        const testCase = {
            callbackArray: [incrementBy1, toString, decrementBy1, double, square, (x: number) => series(x, [cube, decrementBy1, cube])],
            initValue: 2,
            expected: [3, '2', 1, 4, 4, 343]
        };
        const actual = parallel<any>(testCase.initValue, testCase.callbackArray);
        const expected = testCase.expected;
        expect(actual).toEqual(expected);
    });
});
