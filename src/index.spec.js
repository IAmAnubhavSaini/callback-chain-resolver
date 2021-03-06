"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __importDefault(require("./index"));
describe('callback-chain-resolver', function () {
    var incrementBy1 = function (x) { return x + 1; };
    var decrementBy1 = function (x) { return x - 1; };
    var double = function (x) { return 2 * x; };
    var square = function (x) { return x * x; };
    var cube = function (x) { return x * square(x); };
    it('resolver() resolves successfully', function () {
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
            }].forEach(function (testCase) {
            expect(index_1.default(testCase.initValue, testCase.callbackArray)).toEqual(testCase.expected);
        });
    });
});
//# sourceMappingURL=index.spec.js.map