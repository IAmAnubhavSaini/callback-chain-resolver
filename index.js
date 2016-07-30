function chainResolver(initValue, callbackArr) {
    var val = initValue;
    callbackArr.reduce((p, c) => {
        val = c(val);
        return val;
    }, val);
    return val;
}

module.exports = {
    resolver: chainResolver
};
