/*! modernizr 3.3.1 (Custom Build) | MIT *
 * https://modernizr.com/download/?-csstransitions-preserve3d-setclasses !*/
!(function (e, n, t) {
  function r(e, n) {
    return typeof e === n;
  }
  function s() {
    var e, n, t, s, o, i, a;
    for (var l in C)
      if (C.hasOwnProperty(l)) {
        if (
          ((e = []),
          (n = C[l]),
          n.name &&
            (e.push(n.name.toLowerCase()),
            n.options && n.options.aliases && n.options.aliases.length))
        )
          for (t = 0; t < n.options.aliases.length; t++)
            e.push(n.options.aliases[t].toLowerCase());
        for (s = r(n.fn, "function") ? n.fn() : n.fn, o = 0; o < e.length; o++)
          (i = e[o]),
            (a = i.split(".")),
            1 === a.length
              ? (Modernizr[a[0]] = s)
              : (!Modernizr[a[0]] ||
                  Modernizr[a[0]] instanceof Boolean ||
                  (Modernizr[a[0]] = new Boolean(Modernizr[a[0]])),
                (Modernizr[a[0]][a[1]] = s)),
            y.push((s ? "" : "no-") + a.join("-"));
      }
  }
  function o(e) {
    var n = x.className,
      t = Modernizr._config.classPrefix || "";
    if ((_ && (n = n.baseVal), Modernizr._config.enableJSClass)) {
      var r = new RegExp("(^|\\s)" + t + "no-js(\\s|$)");
      n = n.replace(r, "$1" + t + "js$2");
    }
    Modernizr._config.enableClasses &&
      ((n += " " + t + e.join(" " + t)),
      _ ? (x.className.baseVal = n) : (x.className = n));
  }
  function i() {
    return "function" != typeof n.createElement
      ? n.createElement(arguments[0])
      : _
      ? n.createElementNS.call(n, "http://www.w3.org/2000/svg", arguments[0])
      : n.createElement.apply(n, arguments);
  }
  function a(e, n) {
    return !!~("" + e).indexOf(n);
  }
  function l(e) {
    return e
      .replace(/([a-z])-([a-z])/g, function (e, n, t) {
        return n + t.toUpperCase();
      })
      .replace(/^-/, "");
  }
  function f(e, n) {
    return function () {
      return e.apply(n, arguments);
    };
  }
  function u(e, n, t) {
    var s;
    for (var o in e)
      if (e[o] in n)
        return t === !1
          ? e[o]
          : ((s = n[e[o]]), r(s, "function") ? f(s, t || n) : s);
    return !1;
  }
  function d(e) {
    return e
      .replace(/([A-Z])/g, function (e, n) {
        return "-" + n.toLowerCase();
      })
      .replace(/^ms-/, "-ms-");
  }
  function p() {
    var e = n.body;
    return e || ((e = i(_ ? "svg" : "body")), (e.fake = !0)), e;
  }
  function c(e, t, r, s) {
    var o,
      a,
      l,
      f,
      u = "modernizr",
      d = i("div"),
      c = p();
    if (parseInt(r, 10))
      for (; r--; )
        (l = i("div")), (l.id = s ? s[r] : u + (r + 1)), d.appendChild(l);
    return (
      (o = i("style")),
      (o.type = "text/css"),
      (o.id = "s" + u),
      (c.fake ? c : d).appendChild(o),
      c.appendChild(d),
      o.styleSheet
        ? (o.styleSheet.cssText = e)
        : o.appendChild(n.createTextNode(e)),
      (d.id = u),
      c.fake &&
        ((c.style.background = ""),
        (c.style.overflow = "hidden"),
        (f = x.style.overflow),
        (x.style.overflow = "hidden"),
        x.appendChild(c)),
      (a = t(d, e)),
      c.fake
        ? (c.parentNode.removeChild(c), (x.style.overflow = f), x.offsetHeight)
        : d.parentNode.removeChild(d),
      !!a
    );
  }
  function m(n, r) {
    var s = n.length;
    if ("CSS" in e && "supports" in e.CSS) {
      for (; s--; ) if (e.CSS.supports(d(n[s]), r)) return !0;
      return !1;
    }
    if ("CSSSupportsRule" in e) {
      for (var o = []; s--; ) o.push("(" + d(n[s]) + ":" + r + ")");
      return (
        (o = o.join(" or ")),
        c(
          "@supports (" + o + ") { #modernizr { position: absolute; } }",
          function (e) {
            return "absolute" == getComputedStyle(e, null).position;
          }
        )
      );
    }
    return t;
  }
  function h(e, n, s, o) {
    function f() {
      d && (delete P.style, delete P.modElem);
    }
    if (((o = r(o, "undefined") ? !1 : o), !r(s, "undefined"))) {
      var u = m(e, s);
      if (!r(u, "undefined")) return u;
    }
    for (
      var d, p, c, h, g, v = ["modernizr", "tspan", "samp"];
      !P.style && v.length;

    )
      (d = !0), (P.modElem = i(v.shift())), (P.style = P.modElem.style);
    for (c = e.length, p = 0; c > p; p++)
      if (
        ((h = e[p]),
        (g = P.style[h]),
        a(h, "-") && (h = l(h)),
        P.style[h] !== t)
      ) {
        if (o || r(s, "undefined")) return f(), "pfx" == n ? h : !0;
        try {
          P.style[h] = s;
        } catch (y) {}
        if (P.style[h] != g) return f(), "pfx" == n ? h : !0;
      }
    return f(), !1;
  }
  function g(e, n, t, s, o) {
    var i = e.charAt(0).toUpperCase() + e.slice(1),
      a = (e + " " + b.join(i + " ") + i).split(" ");
    return r(n, "string") || r(n, "undefined")
      ? h(a, n, s, o)
      : ((a = (e + " " + T.join(i + " ") + i).split(" ")), u(a, n, t));
  }
  function v(e, n, r) {
    return g(e, t, t, n, r);
  }
  var y = [],
    C = [],
    w = {
      _version: "3.3.1",
      _config: {
        classPrefix: "",
        enableClasses: !0,
        enableJSClass: !0,
        usePrefixes: !0,
      },
      _q: [],
      on: function (e, n) {
        var t = this;
        setTimeout(function () {
          n(t[e]);
        }, 0);
      },
      addTest: function (e, n, t) {
        C.push({ name: e, fn: n, options: t });
      },
      addAsyncTest: function (e) {
        C.push({ name: null, fn: e });
      },
    },
    Modernizr = function () {};
  (Modernizr.prototype = w), (Modernizr = new Modernizr());
  var x = n.documentElement,
    _ = "svg" === x.nodeName.toLowerCase();
  Modernizr.addTest("preserve3d", function () {
    var e = i("a"),
      n = i("a");
    (e.style.cssText =
      "display: block; transform-style: preserve-3d; transform-origin: right; transform: rotateY(40deg);"),
      (n.style.cssText =
        "display: block; width: 9px; height: 1px; background: #000; transform-origin: right; transform: rotateY(40deg);"),
      e.appendChild(n),
      x.appendChild(e);
    var t = n.getBoundingClientRect();
    return x.removeChild(e), t.width && t.width < 4;
  });
  var S = "Moz O ms Webkit",
    b = w._config.usePrefixes ? S.split(" ") : [];
  w._cssomPrefixes = b;
  var T = w._config.usePrefixes ? S.toLowerCase().split(" ") : [];
  w._domPrefixes = T;
  var E = { elem: i("modernizr") };
  Modernizr._q.push(function () {
    delete E.elem;
  });
  var P = { style: E.elem.style };
  Modernizr._q.unshift(function () {
    delete P.style;
  }),
    (w.testAllProps = g),
    (w.testAllProps = v),
    Modernizr.addTest("csstransitions", v("transition", "all", !0)),
    s(),
    o(y),
    delete w.addTest,
    delete w.addAsyncTest;
  for (var k = 0; k < Modernizr._q.length; k++) Modernizr._q[k]();
  e.Modernizr = Modernizr;
})(window, document);
