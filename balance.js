function Balance(n) {
  var d = { '': n || 0 },
      e = function (a) { return a || ''; },
      f = function (a) { return d[e(a)] || 0; },
      g = function (x, a) { return d[e(a)] = f(a) + x; },
      h = function (x, a, b) { return g(+x, a), g(-x, b); };

  this.accounts = (function () { return d; }) ();
  this.balance = function (x, a, b) { return h(x || 0, a, b); };
}
