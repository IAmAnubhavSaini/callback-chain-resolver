const resolver = (initValue, callbacks) => callbacks.reduce((accumulated, cb) => cb(accumulated), initValue);

module.exports = resolver;
