describe = (function() {
  var _describe;
  return _describe = function(list, desc, fn) {
    list.push(desc);
    this.describe = this.context = _describe.bind(this, list);
    this.it = function(d, f) {
      if (f.length <= 1) {
        return Tinytest.add(list.concat(d).join(' - '), f);
      } else {
        return Tinytest.addAsync(list.concat(d).join(' - '), f);
      }
    };
    fn.bind(this)();
    return list.pop();
  };
})().bind(this, []);
