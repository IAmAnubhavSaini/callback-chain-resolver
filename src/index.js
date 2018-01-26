const resolver = (initValue, callbackArr) => callbackArr.reduce((accumulated, callback) => callback(accumulated), initValue)

module.exports = resolver
