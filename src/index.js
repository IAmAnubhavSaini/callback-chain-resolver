const resolver = (initValue, callbacks) => callbacks.reduce((value, cb) => cb(value), initValue);

module.exports = resolver;
