(function (e) {
  function t(t) {
    for (
      var r, a, i = t[0], l = t[1], p = t[2], c = 0, s = [];
      c < i.length;
      c++
    )
      (a = i[c]),
        Object.prototype.hasOwnProperty.call(o, a) && o[a] && s.push(o[a][0]),
        (o[a] = 0);
    for (r in l) Object.prototype.hasOwnProperty.call(l, r) && (e[r] = l[r]);
    f && f(t);
    while (s.length) s.shift()();
    return u.push.apply(u, p || []), n();
  }
  function n() {
    for (var e, t = 0; t < u.length; t++) {
      for (var n = u[t], r = !0, a = 1; a < n.length; a++) {
        var i = n[a];
        0 !== o[i] && (r = !1);
      }
      r && (u.splice(t--, 1), (e = l((l.s = n[0]))));
    }
    return e;
  }
  var r = {},
    a = { app: 0 },
    o = ((a = { app: 0 }), { app: 0 }),
    u = [];
  function i(e) {
    return l.p + "js/" + ({ apply: "apply" }[e] || e) + "-1614685735825.js";
  }
  function l(t) {
    if (r[t]) return r[t].exports;
    var n = (r[t] = { i: t, l: !1, exports: {} });
    return e[t].call(n.exports, n, n.exports, l), (n.l = !0), n.exports;
  }
  (l.e = function (e) {
    var t = [],
      n = { apply: 1 };
    a[e]
      ? t.push(a[e])
      : 0 !== a[e] &&
        n[e] &&
        t.push(
          (a[e] = new Promise(function (t, n) {
            for (
              var r =
                  "css/" +
                  ({ apply: "apply" }[e] || e) +
                  "." +
                  { apply: "d1b43778" }[e] +
                  ".css",
                o = l.p + r,
                u = document.getElementsByTagName("link"),
                i = 0;
              i < u.length;
              i++
            ) {
              var p = u[i],
                c = p.getAttribute("data-href") || p.getAttribute("href");
              if ("stylesheet" === p.rel && (c === r || c === o)) return t();
            }
            var s = document.getElementsByTagName("style");
            for (i = 0; i < s.length; i++) {
              (p = s[i]), (c = p.getAttribute("data-href"));
              if (c === r || c === o) return t();
            }
            var f = document.createElement("link");
            (f.rel = "stylesheet"),
              (f.type = "text/css"),
              (f.onload = t),
              (f.onerror = function (t) {
                var r = (t && t.target && t.target.src) || o,
                  u = new Error(
                    "Loading CSS chunk " + e + " failed.\n(" + r + ")"
                  );
                (u.code = "CSS_CHUNK_LOAD_FAILED"),
                  (u.request = r),
                  delete a[e],
                  f.parentNode.removeChild(f),
                  n(u);
              }),
              (f.href = o);
            var d = document.getElementsByTagName("head")[0];
            d.appendChild(f);
          }).then(function () {
            a[e] = 0;
          }))
        );
    n = { apply: 1 };
    a[e]
      ? t.push(a[e])
      : 0 !== a[e] &&
        n[e] &&
        t.push(
          (a[e] = new Promise(function (t, n) {
            for (
              var r =
                  "css/" + ({ apply: "apply" }[e] || e) + "-1614685735825.css",
                o = l.p + r,
                u = document.getElementsByTagName("link"),
                i = 0;
              i < u.length;
              i++
            ) {
              var p = u[i],
                c = p.getAttribute("data-href") || p.getAttribute("href");
              if ("stylesheet" === p.rel && (c === r || c === o)) return t();
            }
            var s = document.getElementsByTagName("style");
            for (i = 0; i < s.length; i++) {
              (p = s[i]), (c = p.getAttribute("data-href"));
              if (c === r || c === o) return t();
            }
            var f = document.createElement("link");
            (f.rel = "stylesheet"),
              (f.type = "text/css"),
              (f.onload = t),
              (f.onerror = function (t) {
                var r = (t && t.target && t.target.src) || o,
                  u = new Error(
                    "Loading CSS chunk " + e + " failed.\n(" + r + ")"
                  );
                (u.code = "CSS_CHUNK_LOAD_FAILED"),
                  (u.request = r),
                  delete a[e],
                  f.parentNode.removeChild(f),
                  n(u);
              }),
              (f.href = o);
            var d = document.getElementsByTagName("head")[0];
            d.appendChild(f);
          }).then(function () {
            a[e] = 0;
          }))
        );
    var r = o[e];
    if (0 !== r)
      if (r) t.push(r[2]);
      else {
        var u = new Promise(function (t, n) {
          r = o[e] = [t, n];
        });
        t.push((r[2] = u));
        var p,
          c = document.createElement("script");
        (c.charset = "utf-8"),
          (c.timeout = 120),
          l.nc && c.setAttribute("nonce", l.nc),
          (c.src = i(e));
        var s = new Error();
        p = function (t) {
          (c.onerror = c.onload = null), clearTimeout(f);
          var n = o[e];
          if (0 !== n) {
            if (n) {
              var r = t && ("load" === t.type ? "missing" : t.type),
                a = t && t.target && t.target.src;
              (s.message =
                "Loading chunk " + e + " failed.\n(" + r + ": " + a + ")"),
                (s.name = "ChunkLoadError"),
                (s.type = r),
                (s.request = a),
                n[1](s);
            }
            o[e] = void 0;
          }
        };
        var f = setTimeout(function () {
          p({ type: "timeout", target: c });
        }, 12e4);
        (c.onerror = c.onload = p), document.head.appendChild(c);
      }
    return Promise.all(t);
  }),
    (l.m = e),
    (l.c = r),
    (l.d = function (e, t, n) {
      l.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (l.r = function (e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (l.t = function (e, t) {
      if ((1 & t && (e = l(e)), 8 & t)) return e;
      if (4 & t && "object" === typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (l.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var r in e)
          l.d(
            n,
            r,
            function (t) {
              return e[t];
            }.bind(null, r)
          );
      return n;
    }),
    (l.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e["default"];
            }
          : function () {
              return e;
            };
      return l.d(t, "a", t), t;
    }),
    (l.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (l.p = ""),
    (l.oe = function (e) {
      throw (console.error(e), e);
    });
  var p = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    c = p.push.bind(p);
  (p.push = t), (p = p.slice());
  for (var s = 0; s < p.length; s++) t(p[s]);
  var f = c;
  u.push([0, "chunk-vendors"]), n();
})({
  0: function (e, t, n) {
    e.exports = n("56d7");
  },
  "56d7": function (e, t, n) {
    "use strict";
    n.r(t);
    n("e260"), n("e6cf"), n("cca6"), n("a79d");
    var r = n("2b0e"),
      a = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "div",
          { attrs: { id: "app" } },
          [
            n(
              "keep-alive",
              [
                n(
                  "transition",
                  { attrs: { name: "fade", mode: "out-in" } },
                  [
                    e.$route.meta.keepAlive
                      ? n("router-view", { staticClass: "page" })
                      : e._e(),
                  ],
                  1
                ),
              ],
              1
            ),
            n(
              "transition",
              { attrs: { name: "fade", mode: "out-in" } },
              [n("router-view")],
              1
            ),
          ],
          1
        );
      },
      o = [],
      u = {
        name: "App",
        data: function () {
          return { transitionName: "" };
        },
        components: {},
        watch: {},
      },
      i = u,
      l = (n("7c55"), n("2877")),
      p = Object(l["a"])(i, a, o, !1, null, null, null),
      c = p.exports,
      s = (n("d3b7"), n("3ca3"), n("ddb0"), n("8c4f")),
      f = function () {
        return n.e("apply").then(n.bind(null, "eea6"));
      },
      d = function () {
        return n.e("apply").then(n.bind(null, "551f"));
      },
      m = function () {
        return n.e("apply").then(n.bind(null, "5926"));
      },
      h = function () {
        return n.e("apply").then(n.bind(null, "694b"));
      },
      g = function () {
        return n.e("apply").then(n.bind(null, "2c9a"));
      },
      y = function () {
        return n.e("apply").then(n.bind(null, "d84b"));
      };
    r["a"].use(s["a"]);
    var v = [
        { path: "/", name: "Home", component: f, meta: { title: "Home" } },
        {
          path: "/tabHome",
          name: "TabHome",
          component: d,
          meta: { title: "TabHome" },
        },
        {
          path: "/page1",
          name: "Page1",
          component: m,
          meta: { title: "Page1" },
        },
        {
          path: "/page2",
          name: "Page2",
          component: h,
          meta: { title: "Page2" },
        },
        {
          path: "/page3",
          name: "Page3",
          component: g,
          meta: { title: "Page3" },
        },
        {
          path: "/page4",
          name: "Page4",
          component: y,
          meta: { title: "Page4" },
        },
      ],
      b = new s["a"]({ mode: "hash", routes: v });
    b.beforeEach(function (e, t, n) {
      (document.title = e.meta.title), n();
    });
    var w = s["a"].prototype.push;
    s["a"].prototype.push = function (e) {
      return w.call(this, e).catch(function (e) {
        return e;
      });
    };
    var P = b;
    n("499a"), n("f5d6"), n("5717");
    (r["a"].config.productionTip = !1),
      (r["a"].prototype.my_go = function (e) {
        (P.isBack = !0), P.go(e);
      }),
      new r["a"]({
        router: P,
        render: function (e) {
          return e(c);
        },
      }).$mount("#app");
  },
  5717: function (e, t, n) {},
  "5ba8": function (e, t, n) {},
  "7c55": function (e, t, n) {
    "use strict";
    n("5ba8");
  },
  f5d6: function (e, t, n) {},
});
//# sourceMappingURL=app-1614685735825.js.map
