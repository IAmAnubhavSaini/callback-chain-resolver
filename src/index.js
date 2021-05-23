"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function resolver(initValue, callbacks) {
    return callbacks.reduce(function (value, cb) { return cb(value); }, initValue);
}
exports.default = resolver;
//# sourceMappingURL=index.js.map