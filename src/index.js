"use strict";
// Alternative is to define function type as `{ (value: any): any }`
Object.defineProperty(exports, "__esModule", { value: true });
exports.series = exports.parallel = void 0;
function series(initValue, callbacks) {
    return callbacks.reduce(function (value, cb) { return cb(value); }, initValue);
}
exports.series = series;
function parallel(initValue, fns) {
    return fns.map(function (fn) { return fn(initValue); });
}
exports.parallel = parallel;
//# sourceMappingURL=index.js.map