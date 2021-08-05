"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
describe('callback-chain-resolver default resolver', function () {
    var incrementBy1 = function (x) { return x + 1; };
    var decrementBy1 = function (x) { return x - 1; };
    var double = function (x) { return 2 * x; };
    var square = function (x) { return x * x; };
    var cube = function (x) { return x * square(x); };
    it('resolver() resolves successfully', function () {
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
        ].forEach(function (testCase) {
            expect(index_1.resolver(testCase.initValue, testCase.callbackArray)).toEqual(testCase.expected);
        });
    });
});
describe('callback-chain-resolver typedResolver', function () {
    var incrementBy1 = function (x) { return x + 1; };
    var decrementBy1 = function (x) { return x - 1; };
    var double = function (x) { return 2 * x; };
    var square = function (x) { return x * x; };
    var cube = function (x) { return x * square(x); };
    // const toString = (x: number) => x.toString();
    it('typedResolver() resolves successfully', function () {
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
            expect(index_1.typedResolver(testCase.initValue, testCase.callbackArray)).toEqual(testCase.expected);
        });
    });
});
//# sourceMappingURL=index.spec.js.map