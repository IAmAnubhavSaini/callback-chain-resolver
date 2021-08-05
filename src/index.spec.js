"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var incrementBy1 = function (x) { return x + 1; };
var decrementBy1 = function (x) { return x - 1; };
var double = function (x) { return 2 * x; };
var square = function (x) { return x * x; };
var cube = function (x) { return x * square(x); };
var toString = function (x) { return x.toString(); };
describe('series', function () {
    it('series<number>() resolves successfully', function () {
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
                callbackArray: [decrementBy1, incrementBy1 /*, toString*/],
                initValue: 1,
                expected: 1
            }
        ].forEach(function (testCase) {
            expect(index_1.series(testCase.initValue, testCase.callbackArray)).toEqual(testCase.expected);
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
    it('series<string>() fails for number returning functions', function () {
        // TS2345: Argument of type 'number' is not assignable to parameter of type 'string'.
        [
            {
                callbackArray: [incrementBy1, incrementBy1, incrementBy1, double, square, toString],
                initValue: 1,
                expected: '64'
            }
        ].forEach(function (t) {
            expect(index_1.series(t.initValue, t.callbackArray)).toEqual(t.expected);
        });
    });
});
describe('parallel', function () {
    it('maps functions to input values', function () {
        var testCase = {
            callbackArray: [incrementBy1, incrementBy1, incrementBy1, double, square],
            initValue: 1,
            expected: [2, 2, 2, 2, 1]
        };
        var actual = index_1.parallel(testCase.initValue, testCase.callbackArray);
        var expected = testCase.expected;
        expect(actual).toEqual(expected);
    });
    it('maps mixed functions to input values', function () {
        var testCase = {
            callbackArray: [incrementBy1, toString, decrementBy1, double, square, function (x) { return index_1.series(x, [cube, decrementBy1, cube]); }],
            initValue: 2,
            expected: [3, '2', 1, 4, 4, 343]
        };
        var actual = index_1.parallel(testCase.initValue, testCase.callbackArray);
        var expected = testCase.expected;
        expect(actual).toEqual(expected);
    });
});
//# sourceMappingURL=index.spec.js.map