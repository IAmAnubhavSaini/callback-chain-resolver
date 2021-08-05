"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typedResolver = exports.resolver = void 0;
function typedResolver(initValue, callbacks) {
    return callbacks.reduce(function (value, cb) { return cb(value); }, initValue);
}
exports.typedResolver = typedResolver;
function resolver(initValue, callbacks) {
    return callbacks.reduce(function (value, cb) { return cb(value); }, initValue);
}
exports.resolver = resolver;
exports.default = resolver;
//# sourceMappingURL=index.js.map