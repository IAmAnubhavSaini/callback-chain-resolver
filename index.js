function chainResolver(initValue, callbackArr) {
  var val = initValue;
  callbackArr.reduce((p, c, i, a) => val = c(val), val);
  return val;
}

module.exports = {
  resolver: chainResolver
};

