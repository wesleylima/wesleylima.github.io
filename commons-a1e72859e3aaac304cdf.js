(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    "8+s/": function (t, e, n) {
      "use strict";
      function r(t) {
        return t && "object" == typeof t && "default" in t ? t.default : t;
      }
      var o = n("q1tI"),
        i = r(o),
        a = r(n("Gytx"));
      function u(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      var c = !(
        "undefined" == typeof window ||
        !window.document ||
        !window.document.createElement
      );
      t.exports = function (t, e, n) {
        if ("function" != typeof t)
          throw new Error("Expected reducePropsToState to be a function.");
        if ("function" != typeof e)
          throw new Error(
            "Expected handleStateChangeOnClient to be a function."
          );
        if (void 0 !== n && "function" != typeof n)
          throw new Error(
            "Expected mapStateOnServer to either be undefined or a function."
          );
        return function (r) {
          if ("function" != typeof r)
            throw new Error(
              "Expected WrappedComponent to be a React component."
            );
          var l,
            s = [];
          function f() {
            (l = t(
              s.map(function (t) {
                return t.props;
              })
            )),
              p.canUseDOM ? e(l) : n && (l = n(l));
          }
          var p = (function (t) {
            var e, n;
            function o() {
              return t.apply(this, arguments) || this;
            }
            (n = t),
              ((e = o).prototype = Object.create(n.prototype)),
              (e.prototype.constructor = e),
              (e.__proto__ = n),
              (o.peek = function () {
                return l;
              }),
              (o.rewind = function () {
                if (o.canUseDOM)
                  throw new Error(
                    "You may only call rewind() on the server. Call peek() to read the current state."
                  );
                var t = l;
                return (l = void 0), (s = []), t;
              });
            var u = o.prototype;
            return (
              (u.shouldComponentUpdate = function (t) {
                return !a(t, this.props);
              }),
              (u.componentWillMount = function () {
                s.push(this), f();
              }),
              (u.componentDidUpdate = function () {
                f();
              }),
              (u.componentWillUnmount = function () {
                var t = s.indexOf(this);
                s.splice(t, 1), f();
              }),
              (u.render = function () {
                return i.createElement(r, this.props);
              }),
              o
            );
          })(o.Component);
          return (
            u(
              p,
              "displayName",
              "SideEffect(" +
                (function (t) {
                  return t.displayName || t.name || "Component";
                })(r) +
                ")"
            ),
            u(p, "canUseDOM", c),
            p
          );
        };
      };
    },
    "9o1B": function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var r,
        o =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = arguments[e];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
            }
            return t;
          },
        i = n("aZJH"),
        a = (r = i) && r.__esModule ? r : { default: r },
        u = n("Eb/5");
      function c(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      var l = {
        title: "Wordpress Theme 2016",
        baseFontSize: "16px",
        baseLineHeight: 1.75,
        scaleRatio: 2.5,
        googleFonts: [
          { name: "Montserrat", styles: ["700"] },
          {
            name: "Merriweather",
            styles: ["400", "400i", "700", "700i", "900", "900i"],
          },
        ],
        headerFontFamily: ["Merriweather", "Georgia", "serif"],
        bodyFontFamily: ["Merriweather", "Georgia", "serif"],
        bodyColor: "hsla(0,0%,0%,0.9)",
        headerWeight: 900,
        bodyWeight: 400,
        boldWeight: 700,
        overrideStyles: function (t, e) {
          var n,
            r = t.adjustFontSizeTo,
            i = t.scale,
            l = t.rhythm;
          return (
            c(
              (n = {
                h1: { fontFamily: ["Montserrat", "sans-serif"].join(",") },
                blockquote: o({}, i(0.2), {
                  color: (0, a.default)(41),
                  fontStyle: "italic",
                  paddingLeft: l(13 / 16),
                  marginLeft: l(-1),
                  borderLeft: l(3 / 16) + " solid " + (0, a.default)(10),
                }),
                "blockquote > :last-child": { marginBottom: 0 },
                "blockquote cite": o({}, r(e.baseFontSize), {
                  color: e.bodyColor,
                  fontWeight: e.bodyWeight,
                }),
                "blockquote cite:before": { content: '"— "' },
                ul: { listStyle: "disc" },
                "ul,ol": { marginLeft: 0 },
              }),
              u.MOBILE_MEDIA_QUERY,
              {
                "ul,ol": { marginLeft: l(1) },
                blockquote: {
                  marginLeft: l(-3 / 4),
                  marginRight: 0,
                  paddingLeft: l(9 / 16),
                },
              }
            ),
            c(n, "h1,h2,h3,h4,h5,h6", { marginTop: l(2) }),
            c(n, "h4", {
              letterSpacing: "0.140625em",
              textTransform: "uppercase",
            }),
            c(n, "h6", { fontStyle: "italic" }),
            c(n, "a", {
              boxShadow: "0 1px 0 0 currentColor",
              color: "#007acc",
              textDecoration: "none",
            }),
            c(n, "a:hover,a:active", { boxShadow: "none" }),
            c(n, "mark,ins", {
              background: "#007acc",
              color: "white",
              padding: l(1 / 16) + " " + l(1 / 8),
              textDecoration: "none",
            }),
            n
          );
        },
      };
      e.default = l;
    },
    Bl7J: function (t, e, n) {
      "use strict";
      var r = n("q1tI"),
        o = n.n(r),
        i = n("Wbzz"),
        a = n("p3AD");
      e.a = function (t) {
        var e,
          n = t.location,
          r = t.title,
          u = t.children;
        return (
          (e =
            "/" === n.pathname
              ? o.a.createElement(
                  "h1",
                  {
                    style: Object.assign({}, Object(a.b)(1.5), {
                      marginBottom: Object(a.a)(1.5),
                      marginTop: 0,
                    }),
                  },
                  o.a.createElement(
                    i.Link,
                    { style: { boxShadow: "none", color: "inherit" }, to: "/" },
                    r
                  )
                )
              : o.a.createElement(
                  "h3",
                  {
                    style: {
                      fontFamily: "Montserrat, sans-serif",
                      marginTop: 0,
                    },
                  },
                  o.a.createElement(
                    i.Link,
                    { style: { boxShadow: "none", color: "inherit" }, to: "/" },
                    r
                  )
                )),
          o.a.createElement(
            "div",
            {
              style: {
                marginLeft: "auto",
                marginRight: "auto",
                maxWidth: Object(a.a)(24),
                padding: Object(a.a)(1.5) + " " + Object(a.a)(3 / 4),
              },
            },
            o.a.createElement("header", null, e),
            o.a.createElement("main", null, u),
            o.a.createElement(
              "footer",
              null,
              "© ",
              new Date().getFullYear(),
              ", Built with",
              " ",
              o.a.createElement(
                "a",
                { href: "https://www.gatsbyjs.org" },
                "Gatsby"
              )
            )
          )
        );
      };
    },
    "Eb/5": function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      (e.LARGER_DISPLAY_WIDTH = "1600px"),
        (e.LARGE_DISPLAY_WIDTH = "1280px"),
        (e.DEFAULT_WIDTH = "980px"),
        (e.TABLET_WIDTH = "768px"),
        (e.MOBILE_WIDTH = "480px"),
        (e.LARGER_DISPLAY_MEDIA_QUERY =
          "@media only screen and (max-width:1600px)"),
        (e.LARGE_DISPLAY_MEDIA_QUERY =
          "@media only screen and (max-width:1280px)"),
        (e.DEFAULT_MEDIA_QUERY = "@media only screen and (max-width:980px)"),
        (e.TABLET_MEDIA_QUERY = "@media only screen and (max-width:768px)"),
        (e.MOBILE_MEDIA_QUERY = "@media only screen and (max-width:480px)"),
        (e.MIN_LARGER_DISPLAY_MEDIA_QUERY = "@media (min-width:1600px)"),
        (e.MIN_LARGE_DISPLAY_MEDIA_QUERY = "@media (min-width:1280px)"),
        (e.MIN_DEFAULT_MEDIA_QUERY = "@media (min-width:980px)"),
        (e.MIN_TABLET_MEDIA_QUERY = "@media (min-width:768px)"),
        (e.MIN_MOBILE_MEDIA_QUERY = "@media (min-width:480px)");
    },
    Gytx: function (t, e) {
      t.exports = function (t, e, n, r) {
        var o = n ? n.call(r, t, e) : void 0;
        if (void 0 !== o) return !!o;
        if (t === e) return !0;
        if ("object" != typeof t || !t || "object" != typeof e || !e) return !1;
        var i = Object.keys(t),
          a = Object.keys(e);
        if (i.length !== a.length) return !1;
        for (
          var u = Object.prototype.hasOwnProperty.bind(e), c = 0;
          c < i.length;
          c++
        ) {
          var l = i[c];
          if (!u(l)) return !1;
          var s = t[l],
            f = e[l];
          if (
            !1 === (o = n ? n.call(r, s, f, l) : void 0) ||
            (void 0 === o && s !== f)
          )
            return !1;
        }
        return !0;
      };
    },
    TJpk: function (t, e, n) {
      (e.__esModule = !0), (e.Helmet = void 0);
      var r =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = arguments[e];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
            }
            return t;
          },
        o = (function () {
          function t(t, e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(t, r.key, r);
            }
          }
          return function (e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e;
          };
        })(),
        i = f(n("q1tI")),
        a = f(n("17x9")),
        u = f(n("8+s/")),
        c = f(n("bmMU")),
        l = n("v1p5"),
        s = n("hFT/");
      function f(t) {
        return t && t.__esModule ? t : { default: t };
      }
      function p(t, e) {
        var n = {};
        for (var r in t)
          e.indexOf(r) >= 0 ||
            (Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]));
        return n;
      }
      function d(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      function h(t, e) {
        if (!t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
      }
      var b,
        y,
        g,
        m = (0, u.default)(
          l.reducePropsToState,
          l.handleClientStateChange,
          l.mapStateOnServer
        )(function () {
          return null;
        }),
        T =
          ((b = m),
          (g = y = (function (t) {
            function e() {
              return d(this, e), h(this, t.apply(this, arguments));
            }
            return (
              (function (t, e) {
                if ("function" != typeof e && null !== e)
                  throw new TypeError(
                    "Super expression must either be null or a function, not " +
                      typeof e
                  );
                (t.prototype = Object.create(e && e.prototype, {
                  constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                  e &&
                    (Object.setPrototypeOf
                      ? Object.setPrototypeOf(t, e)
                      : (t.__proto__ = e));
              })(e, t),
              (e.prototype.shouldComponentUpdate = function (t) {
                return !(0, c.default)(this.props, t);
              }),
              (e.prototype.mapNestedChildrenToProps = function (t, e) {
                if (!e) return null;
                switch (t.type) {
                  case s.TAG_NAMES.SCRIPT:
                  case s.TAG_NAMES.NOSCRIPT:
                    return { innerHTML: e };
                  case s.TAG_NAMES.STYLE:
                    return { cssText: e };
                }
                throw new Error(
                  "<" +
                    t.type +
                    " /> elements are self-closing and can not contain children. Refer to our API for more information."
                );
              }),
              (e.prototype.flattenArrayTypeChildren = function (t) {
                var e,
                  n = t.child,
                  o = t.arrayTypeChildren,
                  i = t.newChildProps,
                  a = t.nestedChildren;
                return r(
                  {},
                  o,
                  (((e = {})[n.type] = [].concat(o[n.type] || [], [
                    r({}, i, this.mapNestedChildrenToProps(n, a)),
                  ])),
                  e)
                );
              }),
              (e.prototype.mapObjectTypeChildren = function (t) {
                var e,
                  n,
                  o = t.child,
                  i = t.newProps,
                  a = t.newChildProps,
                  u = t.nestedChildren;
                switch (o.type) {
                  case s.TAG_NAMES.TITLE:
                    return r(
                      {},
                      i,
                      (((e = {})[o.type] = u),
                      (e.titleAttributes = r({}, a)),
                      e)
                    );
                  case s.TAG_NAMES.BODY:
                    return r({}, i, { bodyAttributes: r({}, a) });
                  case s.TAG_NAMES.HTML:
                    return r({}, i, { htmlAttributes: r({}, a) });
                }
                return r({}, i, (((n = {})[o.type] = r({}, a)), n));
              }),
              (e.prototype.mapArrayTypeChildrenToProps = function (t, e) {
                var n = r({}, e);
                return (
                  Object.keys(t).forEach(function (e) {
                    var o;
                    n = r({}, n, (((o = {})[e] = t[e]), o));
                  }),
                  n
                );
              }),
              (e.prototype.warnOnInvalidChildren = function (t, e) {
                return !0;
              }),
              (e.prototype.mapChildrenToProps = function (t, e) {
                var n = this,
                  r = {};
                return (
                  i.default.Children.forEach(t, function (t) {
                    if (t && t.props) {
                      var o = t.props,
                        i = o.children,
                        a = p(o, ["children"]),
                        u = (0, l.convertReactPropstoHtmlAttributes)(a);
                      switch ((n.warnOnInvalidChildren(t, i), t.type)) {
                        case s.TAG_NAMES.LINK:
                        case s.TAG_NAMES.META:
                        case s.TAG_NAMES.NOSCRIPT:
                        case s.TAG_NAMES.SCRIPT:
                        case s.TAG_NAMES.STYLE:
                          r = n.flattenArrayTypeChildren({
                            child: t,
                            arrayTypeChildren: r,
                            newChildProps: u,
                            nestedChildren: i,
                          });
                          break;
                        default:
                          e = n.mapObjectTypeChildren({
                            child: t,
                            newProps: e,
                            newChildProps: u,
                            nestedChildren: i,
                          });
                      }
                    }
                  }),
                  (e = this.mapArrayTypeChildrenToProps(r, e))
                );
              }),
              (e.prototype.render = function () {
                var t = this.props,
                  e = t.children,
                  n = p(t, ["children"]),
                  o = r({}, n);
                return (
                  e && (o = this.mapChildrenToProps(e, o)),
                  i.default.createElement(b, o)
                );
              }),
              o(e, null, [
                {
                  key: "canUseDOM",
                  set: function (t) {
                    b.canUseDOM = t;
                  },
                },
              ]),
              e
            );
          })(i.default.Component)),
          (y.propTypes = {
            base: a.default.object,
            bodyAttributes: a.default.object,
            children: a.default.oneOfType([
              a.default.arrayOf(a.default.node),
              a.default.node,
            ]),
            defaultTitle: a.default.string,
            defer: a.default.bool,
            encodeSpecialCharacters: a.default.bool,
            htmlAttributes: a.default.object,
            link: a.default.arrayOf(a.default.object),
            meta: a.default.arrayOf(a.default.object),
            noscript: a.default.arrayOf(a.default.object),
            onChangeClientState: a.default.func,
            script: a.default.arrayOf(a.default.object),
            style: a.default.arrayOf(a.default.object),
            title: a.default.string,
            titleAttributes: a.default.object,
            titleTemplate: a.default.string,
          }),
          (y.defaultProps = { defer: !0, encodeSpecialCharacters: !0 }),
          (y.peek = b.peek),
          (y.rewind = function () {
            var t = b.rewind();
            return (
              t ||
                (t = (0, l.mapStateOnServer)({
                  baseTag: [],
                  bodyAttributes: {},
                  encodeSpecialCharacters: !0,
                  htmlAttributes: {},
                  linkTags: [],
                  metaTags: [],
                  noscriptTags: [],
                  scriptTags: [],
                  styleTags: [],
                  title: "",
                  titleAttributes: {},
                })),
              t
            );
          }),
          g);
      (T.renderStatic = T.rewind), (e.Helmet = T), (e.default = T);
    },
    aZJH: function (t, e) {
      function n(t) {
        return !isNaN(parseFloat(t)) && isFinite(t);
      }
      t.exports = function (t, e, r) {
        if (
          (void 0 === e && (e = 0),
          void 0 === r && (r = !1),
          "cool" === e
            ? (e = 237)
            : "slate" === e
            ? (e = 122)
            : "warm" === e && (e = 69),
          !n(e))
        )
          throw new Error("Hue is not a number");
        if (!n(t)) throw new Error("Lightness is not a number");
        t > 100 && (t = 100), t < 0 && (t = 0);
        var o = 0;
        if (0 !== e) {
          o = 19.92978 + -0.3651759 * t + 0.001737214 * Math.pow(t, 2);
        }
        var i = 0;
        return (
          r
            ? ((i = t / 100), (t = "100%,"))
            : ((i = (100 - t) / 100), (t = "0%,")),
          "hsla(" + e + "," + o + "%," + t + i + ")"
        );
      };
    },
    bmMU: function (t, e, n) {
      "use strict";
      var r = Array.isArray,
        o = Object.keys,
        i = Object.prototype.hasOwnProperty,
        a = "undefined" != typeof Element;
      t.exports = function (t, e) {
        try {
          return (function t(e, n) {
            if (e === n) return !0;
            if (e && n && "object" == typeof e && "object" == typeof n) {
              var u,
                c,
                l,
                s = r(e),
                f = r(n);
              if (s && f) {
                if ((c = e.length) != n.length) return !1;
                for (u = c; 0 != u--; ) if (!t(e[u], n[u])) return !1;
                return !0;
              }
              if (s != f) return !1;
              var p = e instanceof Date,
                d = n instanceof Date;
              if (p != d) return !1;
              if (p && d) return e.getTime() == n.getTime();
              var h = e instanceof RegExp,
                b = n instanceof RegExp;
              if (h != b) return !1;
              if (h && b) return e.toString() == n.toString();
              var y = o(e);
              if ((c = y.length) !== o(n).length) return !1;
              for (u = c; 0 != u--; ) if (!i.call(n, y[u])) return !1;
              if (a && e instanceof Element && n instanceof Element)
                return e === n;
              for (u = c; 0 != u--; )
                if (!(("_owner" === (l = y[u]) && e.$$typeof) || t(e[l], n[l])))
                  return !1;
              return !0;
            }
            return e != e && n != n;
          })(t, e);
        } catch (n) {
          if (
            (n.message && n.message.match(/stack|recursion/i)) ||
            -2146828260 === n.number
          )
            return (
              console.warn(
                "Warning: react-fast-compare does not handle circular references.",
                n.name,
                n.message
              ),
              !1
            );
          throw n;
        }
      };
    },
    "hFT/": function (t, e) {
      e.__esModule = !0;
      e.ATTRIBUTE_NAMES = {
        BODY: "bodyAttributes",
        HTML: "htmlAttributes",
        TITLE: "titleAttributes",
      };
      var n = (e.TAG_NAMES = {
          BASE: "base",
          BODY: "body",
          HEAD: "head",
          HTML: "html",
          LINK: "link",
          META: "meta",
          NOSCRIPT: "noscript",
          SCRIPT: "script",
          STYLE: "style",
          TITLE: "title",
        }),
        r =
          ((e.VALID_TAG_NAMES = Object.keys(n).map(function (t) {
            return n[t];
          })),
          (e.TAG_PROPERTIES = {
            CHARSET: "charset",
            CSS_TEXT: "cssText",
            HREF: "href",
            HTTPEQUIV: "http-equiv",
            INNER_HTML: "innerHTML",
            ITEM_PROP: "itemprop",
            NAME: "name",
            PROPERTY: "property",
            REL: "rel",
            SRC: "src",
          }),
          (e.REACT_TAG_MAP = {
            accesskey: "accessKey",
            charset: "charSet",
            class: "className",
            contenteditable: "contentEditable",
            contextmenu: "contextMenu",
            "http-equiv": "httpEquiv",
            itemprop: "itemProp",
            tabindex: "tabIndex",
          }));
      (e.HELMET_PROPS = {
        DEFAULT_TITLE: "defaultTitle",
        DEFER: "defer",
        ENCODE_SPECIAL_CHARACTERS: "encodeSpecialCharacters",
        ON_CHANGE_CLIENT_STATE: "onChangeClientState",
        TITLE_TEMPLATE: "titleTemplate",
      }),
        (e.HTML_TAG_MAP = Object.keys(r).reduce(function (t, e) {
          return (t[r[e]] = e), t;
        }, {})),
        (e.SELF_CLOSING_TAGS = [n.NOSCRIPT, n.SCRIPT, n.STYLE]),
        (e.HELMET_ATTRIBUTE = "data-react-helmet");
    },
    mBog: function (t, e, n) {
      (function (e) {
        var n,
          r,
          o = Object.getOwnPropertySymbols,
          i = Object.prototype.hasOwnProperty,
          a = Object.prototype.propertyIsEnumerable,
          u = (function () {
            try {
              if (!Object.assign) return !1;
              var t = new String("abc");
              if (((t[5] = "de"), "5" === Object.getOwnPropertyNames(t)[0]))
                return !1;
              for (var e = {}, n = 0; n < 10; n++)
                e["_" + String.fromCharCode(n)] = n;
              if (
                "0123456789" !==
                Object.getOwnPropertyNames(e)
                  .map(function (t) {
                    return e[t];
                  })
                  .join("")
              )
                return !1;
              var r = {};
              return (
                "abcdefghijklmnopqrst".split("").forEach(function (t) {
                  r[t] = t;
                }),
                "abcdefghijklmnopqrst" ===
                  Object.keys(Object.assign({}, r)).join("")
              );
            } catch (t) {
              return !1;
            }
          })()
            ? Object.assign
            : function (t, e) {
                for (
                  var n,
                    r,
                    u = (function (t) {
                      if (null == t)
                        throw new TypeError(
                          "Object.assign cannot be called with null or undefined"
                        );
                      return Object(t);
                    })(t),
                    c = 1;
                  c < arguments.length;
                  c++
                ) {
                  for (var l in (n = Object(arguments[c])))
                    i.call(n, l) && (u[l] = n[l]);
                  if (o) {
                    r = o(n);
                    for (var s = 0; s < r.length; s++)
                      a.call(n, r[s]) && (u[r[s]] = n[r[s]]);
                  }
                }
                return u;
              },
          c = function (t, e) {
            e || (e = [0, ""]), (t = String(t));
            var n = parseFloat(t, 10);
            return (
              (e[0] = n), (e[1] = t.match(/[\d.\-\+]*\s*(.*)/)[1] || ""), e
            );
          },
          l = function (t) {
            return c(t)[0];
          },
          s = function (t) {
            return (
              null == t && (t = t),
              function (e, n, r, o) {
                null == r && (r = t), null == o && (o = r);
                var i = c(e)[1];
                if (i === n) return e;
                var a = l(e);
                if ("px" !== i)
                  if ("em" === i) a = l(e) * l(r);
                  else if ("rem" === i) a = l(e) * l(t);
                  else {
                    if ("ex" !== i) return e;
                    a = l(e) * l(r) * 2;
                  }
                var u = a;
                if ("px" !== n)
                  if ("em" === n) u = a / l(o);
                  else if ("rem" === n) u = a / l(t);
                  else {
                    if ("ex" !== n) return e;
                    u = a / l(o) / 2;
                  }
                return parseFloat(u.toFixed(5)) + n;
              }
            );
          },
          f = c,
          p = function (t) {
            return f(t)[1];
          },
          d = function (t) {
            return f(t)[0];
          },
          h = {
            baseFontSize: "16px",
            baseLineHeight: 1.5,
            rhythmUnit: "rem",
            defaultRhythmBorderWidth: "1px",
            defaultRhythmBorderStyle: "solid",
            roundToNearestHalfLine: !0,
            minLinePadding: "2px",
          },
          b = function (t, e) {
            var n,
              r = s(e.baseFontSize),
              o = d(r(t, "px")),
              i = d(e.baseLineHeightInPx),
              a = d(r(e.minLinePadding, "px"));
            return (
              (n = e.roundToNearestHalfLine
                ? Math.ceil((2 * o) / i) / 2
                : Math.ceil(o / i)) *
                i -
                o <
                2 * a && (n += e.roundToNearestHalfLine ? 0.5 : 1),
              n
            );
          },
          y = function (t) {
            var e = s(t.baseFontSize);
            return function (n, r, o) {
              null == n && (n = 1),
                null == r && (r = t.baseFontSize),
                null == o && (o = 0);
              var i = n * d(t.baseLineHeightInPx) - o + "px",
                a = e(i, t.rhythmUnit, r);
              return (
                "px" === p(a) && (a = Math.floor(d(a)) + p(a)),
                parseFloat(d(a).toFixed(5)) + p(a)
              );
            };
          },
          g = Object.prototype.toString;
        function m(t) {
          return !isNaN(parseFloat(t)) && isFinite(t);
        }
        (n = function (t) {
          return (
            "number" == typeof t ||
            ((function (t) {
              return !!t && "object" == typeof t;
            })(t) &&
              "[object Number]" == g.call(t))
          );
        }),
          (r = {
            "minor second": 16 / 15,
            "major second": 9 / 8,
            "minor third": 1.2,
            "major third": 4 / 3,
            "diminished fourth": Math.sqrt(2),
            "perfect fifth": 1.5,
            "minor sixth": 1.6,
            golden: 1.61803398875,
            phi: 1.61803398875,
            "major sixth": 5 / 3,
            "minor seventh": 16 / 9,
            "major seventh": 15 / 8,
            octave: 2,
            "major tenth": 2.5,
            "major eleventh": 8 / 3,
            "major twelfth": 3,
            "double octave": 4,
          });
        var T = function (t, e, n) {
            if (
              (void 0 === e && (e = 0),
              void 0 === n && (n = !1),
              "cool" === e
                ? (e = 237)
                : "slate" === e
                ? (e = 122)
                : "warm" === e && (e = 69),
              !m(e))
            )
              throw new Error("Hue is not a number");
            if (!m(t)) throw new Error("Lightness is not a number");
            t > 100 && (t = 100), t < 0 && (t = 0);
            var r = 0;
            0 !== e &&
              (r = 19.92978 + -0.3651759 * t + 0.001737214 * Math.pow(t, 2));
            var o = 0;
            return (
              n
                ? ((o = t / 100), (t = "100%,"))
                : ((o = (100 - t) / 100), (t = "0%,")),
              "hsla(" + e + "," + r + "%," + t + o + ")"
            );
          },
          v =
            "undefined" != typeof window
              ? window
              : void 0 !== e
              ? e
              : "undefined" != typeof self
              ? self
              : {};
        function E(t, e) {
          return t((e = { exports: {} }), e.exports), e.exports;
        }
        var _,
          A = "object" == typeof v && v && v.Object === Object && v,
          S = "object" == typeof self && self && self.Object === Object && self,
          w = A || S || Function("return this")(),
          O = w.Symbol,
          j = Object.prototype,
          M = j.hasOwnProperty,
          P = j.toString,
          R = O ? O.toStringTag : void 0,
          L = Object.prototype.toString,
          I = O ? O.toStringTag : void 0,
          x = function (t) {
            return null == t
              ? void 0 === t
                ? "[object Undefined]"
                : "[object Null]"
              : I && I in Object(t)
              ? (function (t) {
                  var e = M.call(t, R),
                    n = t[R];
                  try {
                    t[R] = void 0;
                    var r = !0;
                  } catch (t) {}
                  var o = P.call(t);
                  return r && (e ? (t[R] = n) : delete t[R]), o;
                })(t)
              : (function (t) {
                  return L.call(t);
                })(t);
          },
          C = function (t) {
            var e = typeof t;
            return null != t && ("object" == e || "function" == e);
          },
          N = function (t) {
            if (!C(t)) return !1;
            var e = x(t);
            return (
              "[object Function]" == e ||
              "[object GeneratorFunction]" == e ||
              "[object AsyncFunction]" == e ||
              "[object Proxy]" == e
            );
          },
          F = w["__core-js_shared__"],
          k = (_ = /[^.]+$/.exec((F && F.keys && F.keys.IE_PROTO) || ""))
            ? "Symbol(src)_1." + _
            : "",
          H = Function.prototype.toString,
          G = function (t) {
            if (null != t) {
              try {
                return H.call(t);
              } catch (t) {}
              try {
                return t + "";
              } catch (t) {}
            }
            return "";
          },
          z = /^\[object .+?Constructor\]$/,
          B = Function.prototype,
          D = Object.prototype,
          U = RegExp(
            "^" +
              B.toString
                .call(D.hasOwnProperty)
                .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
                .replace(
                  /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                  "$1.*?"
                ) +
              "$"
          ),
          W = function (t) {
            return (
              !(
                !C(t) ||
                (function (t) {
                  return !!k && k in t;
                })(t)
              ) && (N(t) ? U : z).test(G(t))
            );
          },
          Y = function (t, e) {
            var n = (function (t, e) {
              return null == t ? void 0 : t[e];
            })(t, e);
            return W(n) ? n : void 0;
          },
          q = (function () {
            try {
              var t = Y(Object, "defineProperty");
              return t({}, "", {}), t;
            } catch (t) {}
          })(),
          $ = function (t, e, n) {
            "__proto__" == e && q
              ? q(t, e, {
                  configurable: !0,
                  enumerable: !0,
                  value: n,
                  writable: !0,
                })
              : (t[e] = n);
          },
          Q = function (t, e) {
            return t === e || (t != t && e != e);
          },
          J = Object.prototype.hasOwnProperty,
          V = function (t, e, n) {
            var r = t[e];
            (J.call(t, e) && Q(r, n) && (void 0 !== n || e in t)) || $(t, e, n);
          },
          K = Array.isArray,
          X = function (t) {
            return null != t && "object" == typeof t;
          },
          Z = function (t) {
            return "symbol" == typeof t || (X(t) && "[object Symbol]" == x(t));
          },
          tt = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
          et = /^\w*$/,
          nt = function (t, e) {
            if (K(t)) return !1;
            var n = typeof t;
            return (
              !(
                "number" != n &&
                "symbol" != n &&
                "boolean" != n &&
                null != t &&
                !Z(t)
              ) ||
              et.test(t) ||
              !tt.test(t) ||
              (null != e && t in Object(e))
            );
          },
          rt = Y(Object, "create"),
          ot = Object.prototype.hasOwnProperty,
          it = Object.prototype.hasOwnProperty;
        function at(t) {
          var e = -1,
            n = null == t ? 0 : t.length;
          for (this.clear(); ++e < n; ) {
            var r = t[e];
            this.set(r[0], r[1]);
          }
        }
        (at.prototype.clear = function () {
          (this.__data__ = rt ? rt(null) : {}), (this.size = 0);
        }),
          (at.prototype.delete = function (t) {
            var e = this.has(t) && delete this.__data__[t];
            return (this.size -= e ? 1 : 0), e;
          }),
          (at.prototype.get = function (t) {
            var e = this.__data__;
            if (rt) {
              var n = e[t];
              return "__lodash_hash_undefined__" === n ? void 0 : n;
            }
            return ot.call(e, t) ? e[t] : void 0;
          }),
          (at.prototype.has = function (t) {
            var e = this.__data__;
            return rt ? void 0 !== e[t] : it.call(e, t);
          }),
          (at.prototype.set = function (t, e) {
            var n = this.__data__;
            return (
              (this.size += this.has(t) ? 0 : 1),
              (n[t] = rt && void 0 === e ? "__lodash_hash_undefined__" : e),
              this
            );
          });
        var ut = at,
          ct = function (t, e) {
            for (var n = t.length; n--; ) if (Q(t[n][0], e)) return n;
            return -1;
          },
          lt = Array.prototype.splice;
        function st(t) {
          var e = -1,
            n = null == t ? 0 : t.length;
          for (this.clear(); ++e < n; ) {
            var r = t[e];
            this.set(r[0], r[1]);
          }
        }
        (st.prototype.clear = function () {
          (this.__data__ = []), (this.size = 0);
        }),
          (st.prototype.delete = function (t) {
            var e = this.__data__,
              n = ct(e, t);
            return !(
              n < 0 ||
              (n == e.length - 1 ? e.pop() : lt.call(e, n, 1), --this.size, 0)
            );
          }),
          (st.prototype.get = function (t) {
            var e = this.__data__,
              n = ct(e, t);
            return n < 0 ? void 0 : e[n][1];
          }),
          (st.prototype.has = function (t) {
            return ct(this.__data__, t) > -1;
          }),
          (st.prototype.set = function (t, e) {
            var n = this.__data__,
              r = ct(n, t);
            return r < 0 ? (++this.size, n.push([t, e])) : (n[r][1] = e), this;
          });
        var ft = st,
          pt = Y(w, "Map"),
          dt = function (t, e) {
            var n = t.__data__;
            return (function (t) {
              var e = typeof t;
              return "string" == e ||
                "number" == e ||
                "symbol" == e ||
                "boolean" == e
                ? "__proto__" !== t
                : null === t;
            })(e)
              ? n["string" == typeof e ? "string" : "hash"]
              : n.map;
          };
        function ht(t) {
          var e = -1,
            n = null == t ? 0 : t.length;
          for (this.clear(); ++e < n; ) {
            var r = t[e];
            this.set(r[0], r[1]);
          }
        }
        (ht.prototype.clear = function () {
          (this.size = 0),
            (this.__data__ = {
              hash: new ut(),
              map: new (pt || ft)(),
              string: new ut(),
            });
        }),
          (ht.prototype.delete = function (t) {
            var e = dt(this, t).delete(t);
            return (this.size -= e ? 1 : 0), e;
          }),
          (ht.prototype.get = function (t) {
            return dt(this, t).get(t);
          }),
          (ht.prototype.has = function (t) {
            return dt(this, t).has(t);
          }),
          (ht.prototype.set = function (t, e) {
            var n = dt(this, t),
              r = n.size;
            return n.set(t, e), (this.size += n.size == r ? 0 : 1), this;
          });
        var bt = ht;
        function yt(t, e) {
          if ("function" != typeof t || (null != e && "function" != typeof e))
            throw new TypeError("Expected a function");
          var n = function n() {
            var r = arguments,
              o = e ? e.apply(this, r) : r[0],
              i = n.cache;
            if (i.has(o)) return i.get(o);
            var a = t.apply(this, r);
            return (n.cache = i.set(o, a) || i), a;
          };
          return (n.cache = new (yt.Cache || bt)()), n;
        }
        yt.Cache = bt;
        var gt = yt,
          mt = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
          Tt = /\\(\\)?/g,
          vt = (function (t) {
            var e = gt(
                function (t) {
                  var e = [];
                  return (
                    46 === t.charCodeAt(0) && e.push(""),
                    t.replace(mt, function (t, n, r, o) {
                      e.push(r ? o.replace(Tt, "$1") : n || t);
                    }),
                    e
                  );
                },
                function (t) {
                  return 500 === n.size && n.clear(), t;
                }
              ),
              n = e.cache;
            return e;
          })(),
          Et = O ? O.prototype : void 0,
          _t = Et ? Et.toString : void 0,
          At = function t(e) {
            if ("string" == typeof e) return e;
            if (K(e))
              return (
                (function (t, e) {
                  for (
                    var n = -1, r = null == t ? 0 : t.length, o = Array(r);
                    ++n < r;

                  )
                    o[n] = e(t[n], n, t);
                  return o;
                })(e, t) + ""
              );
            if (Z(e)) return _t ? _t.call(e) : "";
            var n = e + "";
            return "0" == n && 1 / e == -1 / 0 ? "-0" : n;
          },
          St = function (t, e) {
            return K(t)
              ? t
              : nt(t, e)
              ? [t]
              : vt(
                  (function (t) {
                    return null == t ? "" : At(t);
                  })(t)
                );
          },
          wt = /^(?:0|[1-9]\d*)$/,
          Ot = function (t, e) {
            var n = typeof t;
            return (
              !!(e = null == e ? 9007199254740991 : e) &&
              ("number" == n || ("symbol" != n && wt.test(t))) &&
              t > -1 &&
              t % 1 == 0 &&
              t < e
            );
          },
          jt = function (t) {
            if ("string" == typeof t || Z(t)) return t;
            var e = t + "";
            return "0" == e && 1 / t == -1 / 0 ? "-0" : e;
          },
          Mt = function (t, e, n) {
            return null == t
              ? t
              : (function (t, e, n, r) {
                  if (!C(t)) return t;
                  for (
                    var o = -1, i = (e = St(e, t)).length, a = i - 1, u = t;
                    null != u && ++o < i;

                  ) {
                    var c = jt(e[o]),
                      l = n;
                    if (o != a) {
                      var s = u[c];
                      void 0 === (l = r ? r(s, c, u) : void 0) &&
                        (l = C(s) ? s : Ot(e[o + 1]) ? [] : {});
                    }
                    V(u, c, l), (u = u[c]);
                  }
                  return t;
                })(t, e, n);
          },
          Pt = function (t, e) {
            for (
              var n = -1, r = null == t ? 0 : t.length;
              ++n < r && !1 !== e(t[n], n, t);

            );
            return t;
          },
          Rt = function (t, e, n) {
            for (var r = -1, o = Object(t), i = n(t), a = i.length; a--; ) {
              var u = i[++r];
              if (!1 === e(o[u], u, o)) break;
            }
            return t;
          },
          Lt = function (t) {
            return X(t) && "[object Arguments]" == x(t);
          },
          It = Object.prototype,
          xt = It.hasOwnProperty,
          Ct = It.propertyIsEnumerable,
          Nt = Lt(
            (function () {
              return arguments;
            })()
          )
            ? Lt
            : function (t) {
                return X(t) && xt.call(t, "callee") && !Ct.call(t, "callee");
              },
          Ft = function () {
            return !1;
          },
          kt = E(function (t, e) {
            var n = e && !e.nodeType && e,
              r = n && t && !t.nodeType && t,
              o = r && r.exports === n ? w.Buffer : void 0;
            t.exports = (o ? o.isBuffer : void 0) || Ft;
          }),
          Ht = function (t) {
            return (
              "number" == typeof t &&
              t > -1 &&
              t % 1 == 0 &&
              t <= 9007199254740991
            );
          },
          Gt = {};
        (Gt["[object Float32Array]"] = Gt["[object Float64Array]"] = Gt[
          "[object Int8Array]"
        ] = Gt["[object Int16Array]"] = Gt["[object Int32Array]"] = Gt[
          "[object Uint8Array]"
        ] = Gt["[object Uint8ClampedArray]"] = Gt["[object Uint16Array]"] = Gt[
          "[object Uint32Array]"
        ] = !0),
          (Gt["[object Arguments]"] = Gt["[object Array]"] = Gt[
            "[object ArrayBuffer]"
          ] = Gt["[object Boolean]"] = Gt["[object DataView]"] = Gt[
            "[object Date]"
          ] = Gt["[object Error]"] = Gt["[object Function]"] = Gt[
            "[object Map]"
          ] = Gt["[object Number]"] = Gt["[object Object]"] = Gt[
            "[object RegExp]"
          ] = Gt["[object Set]"] = Gt["[object String]"] = Gt[
            "[object WeakMap]"
          ] = !1);
        var zt = E(function (t, e) {
            var n = e && !e.nodeType && e,
              r = n && t && !t.nodeType && t,
              o = r && r.exports === n && A.process,
              i = (function () {
                try {
                  return (
                    (r && r.require && r.require("util").types) ||
                    (o && o.binding && o.binding("util"))
                  );
                } catch (t) {}
              })();
            t.exports = i;
          }),
          Bt = zt && zt.isTypedArray,
          Dt = Bt
            ? (function (t) {
                return function (e) {
                  return t(e);
                };
              })(Bt)
            : function (t) {
                return X(t) && Ht(t.length) && !!Gt[x(t)];
              },
          Ut = Object.prototype.hasOwnProperty,
          Wt = function (t, e) {
            var n = K(t),
              r = !n && Nt(t),
              o = !n && !r && kt(t),
              i = !n && !r && !o && Dt(t),
              a = n || r || o || i,
              u = a
                ? (function (t, e) {
                    for (var n = -1, r = Array(t); ++n < t; ) r[n] = e(n);
                    return r;
                  })(t.length, String)
                : [],
              c = u.length;
            for (var l in t)
              (!e && !Ut.call(t, l)) ||
                (a &&
                  ("length" == l ||
                    (o && ("offset" == l || "parent" == l)) ||
                    (i &&
                      ("buffer" == l ||
                        "byteLength" == l ||
                        "byteOffset" == l)) ||
                    Ot(l, c))) ||
                u.push(l);
            return u;
          },
          Yt = Object.prototype,
          qt = function (t) {
            var e = t && t.constructor;
            return t === (("function" == typeof e && e.prototype) || Yt);
          },
          $t = function (t, e) {
            return function (n) {
              return t(e(n));
            };
          },
          Qt = $t(Object.keys, Object),
          Jt = Object.prototype.hasOwnProperty,
          Vt = function (t) {
            return null != t && Ht(t.length) && !N(t);
          },
          Kt = function (t) {
            return Vt(t)
              ? Wt(t)
              : (function (t) {
                  if (!qt(t)) return Qt(t);
                  var e = [];
                  for (var n in Object(t))
                    Jt.call(t, n) && "constructor" != n && e.push(n);
                  return e;
                })(t);
          },
          Xt = function (t, e) {
            if (null == t) return t;
            if (!Vt(t))
              return (function (t, e) {
                return t && Rt(t, e, Kt);
              })(t, e);
            for (
              var n = t.length, r = -1, o = Object(t);
              ++r < n && !1 !== e(o[r], r, o);

            );
            return t;
          },
          Zt = function (t) {
            return t;
          },
          te = function (t, e) {
            return (K(t) ? Pt : Xt)(
              t,
              (function (t) {
                return "function" == typeof t ? t : Zt;
              })(e)
            );
          };
        function ee(t) {
          var e = (this.__data__ = new ft(t));
          this.size = e.size;
        }
        (ee.prototype.clear = function () {
          (this.__data__ = new ft()), (this.size = 0);
        }),
          (ee.prototype.delete = function (t) {
            var e = this.__data__,
              n = e.delete(t);
            return (this.size = e.size), n;
          }),
          (ee.prototype.get = function (t) {
            return this.__data__.get(t);
          }),
          (ee.prototype.has = function (t) {
            return this.__data__.has(t);
          }),
          (ee.prototype.set = function (t, e) {
            var n = this.__data__;
            if (n instanceof ft) {
              var r = n.__data__;
              if (!pt || r.length < 199)
                return r.push([t, e]), (this.size = ++n.size), this;
              n = this.__data__ = new bt(r);
            }
            return n.set(t, e), (this.size = n.size), this;
          });
        var ne = ee,
          re = function (t, e, n) {
            ((void 0 === n || Q(t[e], n)) && (void 0 !== n || e in t)) ||
              $(t, e, n);
          },
          oe = E(function (t, e) {
            var n = e && !e.nodeType && e,
              r = n && t && !t.nodeType && t,
              o = r && r.exports === n ? w.Buffer : void 0,
              i = o ? o.allocUnsafe : void 0;
            t.exports = function (t, e) {
              if (e) return t.slice();
              var n = t.length,
                r = i ? i(n) : new t.constructor(n);
              return t.copy(r), r;
            };
          }),
          ie = w.Uint8Array,
          ae = function (t, e) {
            var n = e
              ? (function (t) {
                  var e = new t.constructor(t.byteLength);
                  return new ie(e).set(new ie(t)), e;
                })(t.buffer)
              : t.buffer;
            return new t.constructor(n, t.byteOffset, t.length);
          },
          ue = Object.create,
          ce = (function () {
            function t() {}
            return function (e) {
              if (!C(e)) return {};
              if (ue) return ue(e);
              t.prototype = e;
              var n = new t();
              return (t.prototype = void 0), n;
            };
          })(),
          le = $t(Object.getPrototypeOf, Object),
          se = Function.prototype,
          fe = Object.prototype,
          pe = se.toString,
          de = fe.hasOwnProperty,
          he = pe.call(Object),
          be = function (t, e) {
            return "__proto__" == e ? void 0 : t[e];
          },
          ye = Object.prototype.hasOwnProperty,
          ge = function (t) {
            if (!C(t))
              return (function (t) {
                var e = [];
                if (null != t) for (var n in Object(t)) e.push(n);
                return e;
              })(t);
            var e = qt(t),
              n = [];
            for (var r in t)
              ("constructor" != r || (!e && ye.call(t, r))) && n.push(r);
            return n;
          },
          me = function (t) {
            return Vt(t) ? Wt(t, !0) : ge(t);
          },
          Te = function (t) {
            return (function (t, e, n, r) {
              var o = !n;
              n || (n = {});
              for (var i = -1, a = e.length; ++i < a; ) {
                var u = e[i],
                  c = r ? r(n[u], t[u], u, n, t) : void 0;
                void 0 === c && (c = t[u]), o ? $(n, u, c) : V(n, u, c);
              }
              return n;
            })(t, me(t));
          },
          ve = function (t, e, n, r, o, i, a) {
            var u = be(t, n),
              c = be(e, n),
              l = a.get(c);
            if (l) re(t, n, l);
            else {
              var s = i ? i(u, c, n + "", t, e, a) : void 0,
                f = void 0 === s;
              if (f) {
                var p = K(c),
                  d = !p && kt(c),
                  h = !p && !d && Dt(c);
                (s = c),
                  p || d || h
                    ? K(u)
                      ? (s = u)
                      : (function (t) {
                          return X(t) && Vt(t);
                        })(u)
                      ? (s = (function (t, e) {
                          var n = -1,
                            r = t.length;
                          for (e || (e = Array(r)); ++n < r; ) e[n] = t[n];
                          return e;
                        })(u))
                      : d
                      ? ((f = !1), (s = oe(c, !0)))
                      : h
                      ? ((f = !1), (s = ae(c, !0)))
                      : (s = [])
                    : (function (t) {
                        if (!X(t) || "[object Object]" != x(t)) return !1;
                        var e = le(t);
                        if (null === e) return !0;
                        var n = de.call(e, "constructor") && e.constructor;
                        return (
                          "function" == typeof n &&
                          n instanceof n &&
                          pe.call(n) == he
                        );
                      })(c) || Nt(c)
                    ? ((s = u),
                      Nt(u)
                        ? (s = Te(u))
                        : (!C(u) || (r && N(u))) &&
                          (s = (function (t) {
                            return "function" != typeof t.constructor || qt(t)
                              ? {}
                              : ce(le(t));
                          })(c)))
                    : (f = !1);
              }
              f && (a.set(c, s), o(s, c, r, i, a), a.delete(c)), re(t, n, s);
            }
          },
          Ee = function (t, e, n) {
            switch (n.length) {
              case 0:
                return t.call(e);
              case 1:
                return t.call(e, n[0]);
              case 2:
                return t.call(e, n[0], n[1]);
              case 3:
                return t.call(e, n[0], n[1], n[2]);
            }
            return t.apply(e, n);
          },
          _e = Math.max,
          Ae = function (t) {
            return function () {
              return t;
            };
          },
          Se = Date.now,
          we = (function (t) {
            var e = 0,
              n = 0;
            return function () {
              var r = Se(),
                o = 16 - (r - n);
              if (((n = r), o > 0)) {
                if (++e >= 800) return arguments[0];
              } else e = 0;
              return t.apply(void 0, arguments);
            };
          })(
            q
              ? function (t, e) {
                  return q(t, "toString", {
                    configurable: !0,
                    enumerable: !1,
                    value: Ae(e),
                    writable: !0,
                  });
                }
              : Zt
          ),
          Oe = function (t, e) {
            return we(
              (function (t, e, n) {
                return (
                  (e = _e(void 0 === e ? t.length - 1 : e, 0)),
                  function () {
                    for (
                      var r = arguments,
                        o = -1,
                        i = _e(r.length - e, 0),
                        a = Array(i);
                      ++o < i;

                    )
                      a[o] = r[e + o];
                    o = -1;
                    for (var u = Array(e + 1); ++o < e; ) u[o] = r[o];
                    return (u[e] = n(a)), Ee(t, this, u);
                  }
                );
              })(t, e, Zt),
              t + ""
            );
          },
          je = (function (t) {
            return Oe(function (e, n) {
              var r = -1,
                o = n.length,
                i = o > 1 ? n[o - 1] : void 0,
                a = o > 2 ? n[2] : void 0;
              for (
                i = t.length > 3 && "function" == typeof i ? (o--, i) : void 0,
                  a &&
                    (function (t, e, n) {
                      if (!C(n)) return !1;
                      var r = typeof e;
                      return (
                        !!("number" == r
                          ? Vt(n) && Ot(e, n.length)
                          : "string" == r && (e in n)) && Q(n[e], t)
                      );
                    })(n[0], n[1], a) &&
                    ((i = o < 3 ? void 0 : i), (o = 1)),
                  e = Object(e);
                ++r < o;

              ) {
                var u = n[r];
                u && t(e, u, r);
              }
              return e;
            });
          })(function (t, e, n) {
            !(function t(e, n, r, o, i) {
              e !== n &&
                Rt(
                  n,
                  function (a, u) {
                    if (C(a)) i || (i = new ne()), ve(e, n, u, r, t, o, i);
                    else {
                      var c = o ? o(be(e, u), a, u + "", e, n, i) : void 0;
                      void 0 === c && (c = a), re(e, u, c);
                    }
                  },
                  me
                );
            })(t, e, n);
          }),
          Me = function (t, e, n, r) {
            var o = -1,
              i = null == t ? 0 : t.length;
            for (r && i && (n = t[++o]); ++o < i; ) n = e(n, t[o], o, t);
            return n;
          };
        function Pe(t) {
          var e = -1,
            n = null == t ? 0 : t.length;
          for (this.__data__ = new bt(); ++e < n; ) this.add(t[e]);
        }
        (Pe.prototype.add = Pe.prototype.push = function (t) {
          return this.__data__.set(t, "__lodash_hash_undefined__"), this;
        }),
          (Pe.prototype.has = function (t) {
            return this.__data__.has(t);
          });
        var Re = Pe,
          Le = function (t, e) {
            for (var n = -1, r = null == t ? 0 : t.length; ++n < r; )
              if (e(t[n], n, t)) return !0;
            return !1;
          },
          Ie = function (t, e) {
            return t.has(e);
          },
          xe = function (t, e, n, r, o, i) {
            var a = 1 & n,
              u = t.length,
              c = e.length;
            if (u != c && !(a && c > u)) return !1;
            var l = i.get(t);
            if (l && i.get(e)) return l == e;
            var s = -1,
              f = !0,
              p = 2 & n ? new Re() : void 0;
            for (i.set(t, e), i.set(e, t); ++s < u; ) {
              var d = t[s],
                h = e[s];
              if (r) var b = a ? r(h, d, s, e, t, i) : r(d, h, s, t, e, i);
              if (void 0 !== b) {
                if (b) continue;
                f = !1;
                break;
              }
              if (p) {
                if (
                  !Le(e, function (t, e) {
                    if (!Ie(p, e) && (d === t || o(d, t, n, r, i)))
                      return p.push(e);
                  })
                ) {
                  f = !1;
                  break;
                }
              } else if (d !== h && !o(d, h, n, r, i)) {
                f = !1;
                break;
              }
            }
            return i.delete(t), i.delete(e), f;
          },
          Ce = function (t) {
            var e = -1,
              n = Array(t.size);
            return (
              t.forEach(function (t, r) {
                n[++e] = [r, t];
              }),
              n
            );
          },
          Ne = function (t) {
            var e = -1,
              n = Array(t.size);
            return (
              t.forEach(function (t) {
                n[++e] = t;
              }),
              n
            );
          },
          Fe = O ? O.prototype : void 0,
          ke = Fe ? Fe.valueOf : void 0,
          He = Object.prototype.propertyIsEnumerable,
          Ge = Object.getOwnPropertySymbols,
          ze = Ge
            ? function (t) {
                return null == t
                  ? []
                  : ((t = Object(t)),
                    (function (t, e) {
                      for (
                        var n = -1, r = null == t ? 0 : t.length, o = 0, i = [];
                        ++n < r;

                      ) {
                        var a = t[n];
                        e(a, n, t) && (i[o++] = a);
                      }
                      return i;
                    })(Ge(t), function (e) {
                      return He.call(t, e);
                    }));
              }
            : function () {
                return [];
              },
          Be = function (t) {
            return (function (t, e, n) {
              var r = e(t);
              return K(t)
                ? r
                : (function (t, e) {
                    for (var n = -1, r = e.length, o = t.length; ++n < r; )
                      t[o + n] = e[n];
                    return t;
                  })(r, n(t));
            })(t, Kt, ze);
          },
          De = Object.prototype.hasOwnProperty,
          Ue = Y(w, "DataView"),
          We = Y(w, "Promise"),
          Ye = Y(w, "Set"),
          qe = Y(w, "WeakMap"),
          $e = G(Ue),
          Qe = G(pt),
          Je = G(We),
          Ve = G(Ye),
          Ke = G(qe),
          Xe = x;
        ((Ue && "[object DataView]" != Xe(new Ue(new ArrayBuffer(1)))) ||
          (pt && "[object Map]" != Xe(new pt())) ||
          (We && "[object Promise]" != Xe(We.resolve())) ||
          (Ye && "[object Set]" != Xe(new Ye())) ||
          (qe && "[object WeakMap]" != Xe(new qe()))) &&
          (Xe = function (t) {
            var e = x(t),
              n = "[object Object]" == e ? t.constructor : void 0,
              r = n ? G(n) : "";
            if (r)
              switch (r) {
                case $e:
                  return "[object DataView]";
                case Qe:
                  return "[object Map]";
                case Je:
                  return "[object Promise]";
                case Ve:
                  return "[object Set]";
                case Ke:
                  return "[object WeakMap]";
              }
            return e;
          });
        var Ze,
          tn = Xe,
          en = "[object Arguments]",
          nn = "[object Array]",
          rn = "[object Object]",
          on = Object.prototype.hasOwnProperty,
          an = function (t, e, n, r, o, i) {
            var a = K(t),
              u = K(e),
              c = a ? nn : tn(t),
              l = u ? nn : tn(e),
              s = (c = c == en ? rn : c) == rn,
              f = (l = l == en ? rn : l) == rn,
              p = c == l;
            if (p && kt(t)) {
              if (!kt(e)) return !1;
              (a = !0), (s = !1);
            }
            if (p && !s)
              return (
                i || (i = new ne()),
                a || Dt(t)
                  ? xe(t, e, n, r, o, i)
                  : (function (t, e, n, r, o, i, a) {
                      switch (n) {
                        case "[object DataView]":
                          if (
                            t.byteLength != e.byteLength ||
                            t.byteOffset != e.byteOffset
                          )
                            return !1;
                          (t = t.buffer), (e = e.buffer);
                        case "[object ArrayBuffer]":
                          return !(
                            t.byteLength != e.byteLength ||
                            !i(new ie(t), new ie(e))
                          );
                        case "[object Boolean]":
                        case "[object Date]":
                        case "[object Number]":
                          return Q(+t, +e);
                        case "[object Error]":
                          return t.name == e.name && t.message == e.message;
                        case "[object RegExp]":
                        case "[object String]":
                          return t == e + "";
                        case "[object Map]":
                          var u = Ce;
                        case "[object Set]":
                          if ((u || (u = Ne), t.size != e.size && !(1 & r)))
                            return !1;
                          var c = a.get(t);
                          if (c) return c == e;
                          (r |= 2), a.set(t, e);
                          var l = xe(u(t), u(e), r, o, i, a);
                          return a.delete(t), l;
                        case "[object Symbol]":
                          if (ke) return ke.call(t) == ke.call(e);
                      }
                      return !1;
                    })(t, e, c, n, r, o, i)
              );
            if (!(1 & n)) {
              var d = s && on.call(t, "__wrapped__"),
                h = f && on.call(e, "__wrapped__");
              if (d || h) {
                var b = d ? t.value() : t,
                  y = h ? e.value() : e;
                return i || (i = new ne()), o(b, y, n, r, i);
              }
            }
            return (
              !!p &&
              (i || (i = new ne()),
              (function (t, e, n, r, o, i) {
                var a = 1 & n,
                  u = Be(t),
                  c = u.length;
                if (c != Be(e).length && !a) return !1;
                for (var l = c; l--; ) {
                  var s = u[l];
                  if (!(a ? s in e : De.call(e, s))) return !1;
                }
                var f = i.get(t);
                if (f && i.get(e)) return f == e;
                var p = !0;
                i.set(t, e), i.set(e, t);
                for (var d = a; ++l < c; ) {
                  var h = t[(s = u[l])],
                    b = e[s];
                  if (r) var y = a ? r(b, h, s, e, t, i) : r(h, b, s, t, e, i);
                  if (!(void 0 === y ? h === b || o(h, b, n, r, i) : y)) {
                    p = !1;
                    break;
                  }
                  d || (d = "constructor" == s);
                }
                if (p && !d) {
                  var g = t.constructor,
                    m = e.constructor;
                  g != m &&
                    "constructor" in t &&
                    "constructor" in e &&
                    !(
                      "function" == typeof g &&
                      g instanceof g &&
                      "function" == typeof m &&
                      m instanceof m
                    ) &&
                    (p = !1);
                }
                return i.delete(t), i.delete(e), p;
              })(t, e, n, r, o, i))
            );
          },
          un = function t(e, n, r, o, i) {
            return (
              e === n ||
              (null == e || null == n || (!X(e) && !X(n))
                ? e != e && n != n
                : an(e, n, r, o, t, i))
            );
          },
          cn = function (t) {
            return t == t && !C(t);
          },
          ln = function (t, e) {
            return function (n) {
              return (
                null != n && n[t] === e && (void 0 !== e || t in Object(n))
              );
            };
          },
          sn = function (t) {
            var e = (function (t) {
              for (var e = Kt(t), n = e.length; n--; ) {
                var r = e[n],
                  o = t[r];
                e[n] = [r, o, cn(o)];
              }
              return e;
            })(t);
            return 1 == e.length && e[0][2]
              ? ln(e[0][0], e[0][1])
              : function (n) {
                  return (
                    n === t ||
                    (function (t, e, n, r) {
                      var o = n.length,
                        i = o,
                        a = !r;
                      if (null == t) return !i;
                      for (t = Object(t); o--; ) {
                        var u = n[o];
                        if (a && u[2] ? u[1] !== t[u[0]] : !(u[0] in t))
                          return !1;
                      }
                      for (; ++o < i; ) {
                        var c = (u = n[o])[0],
                          l = t[c],
                          s = u[1];
                        if (a && u[2]) {
                          if (void 0 === l && !(c in t)) return !1;
                        } else {
                          var f = new ne();
                          if (r) var p = r(l, s, c, t, e, f);
                          if (!(void 0 === p ? un(s, l, 3, r, f) : p))
                            return !1;
                        }
                      }
                      return !0;
                    })(n, t, e)
                  );
                };
          },
          fn = function (t, e) {
            for (var n = 0, r = (e = St(e, t)).length; null != t && n < r; )
              t = t[jt(e[n++])];
            return n && n == r ? t : void 0;
          },
          pn = function (t, e) {
            return null != t && e in Object(t);
          },
          dn = function (t, e) {
            return (
              null != t &&
              (function (t, e, n) {
                for (var r = -1, o = (e = St(e, t)).length, i = !1; ++r < o; ) {
                  var a = jt(e[r]);
                  if (!(i = null != t && n(t, a))) break;
                  t = t[a];
                }
                return i || ++r != o
                  ? i
                  : !!(o = null == t ? 0 : t.length) &&
                      Ht(o) &&
                      Ot(a, o) &&
                      (K(t) || Nt(t));
              })(t, e, pn)
            );
          },
          hn = function (t, e) {
            return nt(t) && cn(e)
              ? ln(jt(t), e)
              : function (n) {
                  var r = (function (t, e, n) {
                    var r = null == t ? void 0 : fn(t, e);
                    return void 0 === r ? n : r;
                  })(n, t);
                  return void 0 === r && r === e ? dn(n, t) : un(e, r, 3);
                };
          },
          bn = function (t) {
            return nt(t)
              ? (function (t) {
                  return function (e) {
                    return null == e ? void 0 : e[t];
                  };
                })(jt(t))
              : (function (t) {
                  return function (e) {
                    return fn(e, t);
                  };
                })(t);
          },
          yn = function (t) {
            return "function" == typeof t
              ? t
              : null == t
              ? Zt
              : "object" == typeof t
              ? K(t)
                ? hn(t[0], t[1])
                : sn(t)
              : bn(t);
          },
          gn = function (t, e, n, r, o) {
            return (
              o(t, function (t, o, i) {
                n = r ? ((r = !1), t) : e(n, t, o, i);
              }),
              n
            );
          },
          mn = function (t, e, n) {
            var r = K(t) ? Me : gn,
              o = arguments.length < 3;
            return r(t, yn(e), n, o, Xt);
          },
          Tn = function (t, e, n) {
            var r;
            return (
              void 0 === t && (t = {}),
              (r = K(e) ? e : [e]),
              te(r, function (e) {
                te(n, function (n, r) {
                  Mt(t, e + "." + r, n);
                });
              }),
              t
            );
          },
          vn = [
            "inherit",
            "default",
            "serif",
            "sans-serif",
            "monospace",
            "fantasy",
            "cursive",
            "-apple-system",
          ],
          En = function (t) {
            return -1 !== vn.indexOf(t) ? t : "'" + t + "'";
          },
          _n =
            (Ze = E(function (t, e) {
              Object.defineProperty(e, "__esModule", { value: !0 }),
                (e.default =
                  "html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,main,menu,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block}audio:not([controls]){display:none;height:0}progress{vertical-align:baseline}[hidden],template{display:none}a{background-color:transparent;-webkit-text-decoration-skip:objects}a:active,a:hover{outline-width:0}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:inherit;font-weight:bolder}dfn{font-style:italic}h1{font-size:2em;margin:.67em 0}mark{background-color:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}svg:not(:root){overflow:hidden}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}figure{margin:1em 40px}hr{box-sizing:content-box;height:0;overflow:visible}button,input,optgroup,select,textarea{font:inherit;margin:0}optgroup{font-weight:700}button,input{overflow:visible}button,select{text-transform:none}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-input-placeholder{color:inherit;opacity:.54}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}");
            })) &&
            Ze.__esModule &&
            Object.prototype.hasOwnProperty.call(Ze, "default")
              ? Ze.default
              : Ze;
        t.exports = function (t) {
          var e,
            o,
            i,
            a,
            c = u(
              {},
              {
                baseFontSize: "16px",
                baseLineHeight: 1.45,
                headerLineHeight: 1.1,
                scaleRatio: 2,
                googleFonts: [],
                headerFontFamily: [
                  "-apple-system",
                  "BlinkMacSystemFont",
                  "Segoe UI",
                  "Roboto",
                  "Oxygen",
                  "Ubuntu",
                  "Cantarell",
                  "Fira Sans",
                  "Droid Sans",
                  "Helvetica Neue",
                  "sans-serif",
                ],
                bodyFontFamily: ["georgia", "serif"],
                headerColor: "inherit",
                bodyColor: "hsla(0,0%,0%,0.8)",
                headerWeight: "bold",
                bodyWeight: "normal",
                boldWeight: "bold",
                includeNormalize: !0,
                blockMarginBottom: 1,
              },
              t
            ),
            l =
              ((e = c),
              (o = JSON.parse(JSON.stringify(h))),
              (i = Object.assign({}, o, e)),
              (a = s(i.baseFontSize)),
              p(i.baseLineHeight)
                ? (d(a(i.baseFontSize, "px")),
                  (i.baseLineHeightInPx = a(i.baseLineHeight, "px")))
                : (i.baseLineHeightInPx =
                    d(i.baseFontSize) * i.baseLineHeight + "px"),
              {
                rhythm: y(i),
                establishBaseline: function () {
                  return (
                    s((t = i).baseFontSize),
                    {
                      fontSize: (d(t.baseFontSize) / 16) * 100 + "%",
                      lineHeight: t.baseLineHeight.toString(),
                    }
                  );
                  var t;
                },
                linesForFontSize: function (t) {
                  return b(t, i);
                },
                adjustFontSizeTo: function (t, e, n) {
                  return (
                    null == e && (e = "auto"),
                    (function (t, e, n, r) {
                      null == n && (n = r.baseFontSize),
                        "%" === p(t) &&
                          (t = d(r.baseFontSize) * (d(t) / 100) + "px");
                      var o = s(r.baseFontSize);
                      t = o(t, "px", (n = o(n, "px")));
                      var i = y(r);
                      return (
                        "auto" === e && (e = b(t, r)),
                        { fontSize: o(t, r.rhythmUnit, n), lineHeight: i(e, n) }
                      );
                    })(t, e, n, i)
                  );
                },
              });
          return (
            (l.scale = function (t) {
              var e = parseInt(c.baseFontSize, 10),
                o =
                  (function (t, e) {
                    var o;
                    return (
                      null == t && (t = 0),
                      null == e && (e = "golden"),
                      (o = n(e) ? e : null != r[e] ? r[e] : r.golden),
                      Math.pow(o, t)
                    );
                  })(t, c.scaleRatio) *
                    e +
                  "px";
              return l.adjustFontSizeTo(o);
            }),
            Object.assign({}, { options: c }, l, {
              createStyles: function () {
                return this.toString();
              },
              toJSON: function () {
                return (function (t, e) {
                  var n = {},
                    r = t.establishBaseline();
                  (n = Tn(n, "html", {
                    font:
                      r.fontSize +
                      "/" +
                      r.lineHeight +
                      " " +
                      e.bodyFontFamily.map(En).join(","),
                    boxSizing: "border-box",
                    overflowY: "scroll",
                  })),
                    (n = Tn(n, ["*", "*:before", "*:after"], {
                      boxSizing: "inherit",
                    })),
                    (n = Tn(n, "body", {
                      color: e.bodyColor,
                      fontFamily: e.bodyFontFamily.map(En).join(","),
                      fontWeight: e.bodyWeight,
                      wordWrap: "break-word",
                      fontKerning: "normal",
                      MozFontFeatureSettings: '"kern", "liga", "clig", "calt"',
                      msFontFeatureSettings: '"kern", "liga", "clig", "calt"',
                      WebkitFontFeatureSettings:
                        '"kern", "liga", "clig", "calt"',
                      fontFeatureSettings: '"kern", "liga", "clig", "calt"',
                    })),
                    (n = Tn(n, "img", { maxWidth: "100%" }));
                  var o;
                  (o = (function (t) {
                    return (
                      "number" == typeof t ||
                      (X(t) && "[object Number]" == x(t))
                    );
                  })(e.blockMarginBottom)
                    ? t.rhythm(e.blockMarginBottom)
                    : (function (t) {
                        return (
                          "string" == typeof t ||
                          (!K(t) && X(t) && "[object String]" == x(t))
                        );
                      })(e.blockMarginBottom)
                    ? e.blockMarginBottom
                    : t.rhythm(1)),
                    (n = Tn(
                      n,
                      [
                        "h1",
                        "h2",
                        "h3",
                        "h4",
                        "h5",
                        "h6",
                        "hgroup",
                        "ul",
                        "ol",
                        "dl",
                        "dd",
                        "p",
                        "figure",
                        "pre",
                        "table",
                        "fieldset",
                        "blockquote",
                        "form",
                        "noscript",
                        "iframe",
                        "img",
                        "hr",
                        "address",
                      ],
                      {
                        marginLeft: 0,
                        marginRight: 0,
                        marginTop: 0,
                        paddingBottom: 0,
                        paddingLeft: 0,
                        paddingRight: 0,
                        paddingTop: 0,
                        marginBottom: o,
                      }
                    )),
                    (n = Tn(n, "blockquote", {
                      marginRight: t.rhythm(1),
                      marginBottom: o,
                      marginLeft: t.rhythm(1),
                    })),
                    (n = Tn(n, ["b", "strong", "dt", "th"], {
                      fontWeight: e.boldWeight,
                    })),
                    (n = Tn(n, "hr", {
                      background: T(80),
                      border: "none",
                      height: "1px",
                      marginBottom: "calc(" + o + " - 1px)",
                    })),
                    (n = Tn(n, ["ol", "ul"], {
                      listStylePosition: "outside",
                      listStyleImage: "none",
                      marginLeft: t.rhythm(1),
                    })),
                    (n = Tn(n, "li", { marginBottom: "calc(" + o + " / 2)" })),
                    (n = Tn(n, ["ol li", "ul li"], { paddingLeft: 0 })),
                    (n = Tn(n, ["li > ol", "li > ul"], {
                      marginLeft: t.rhythm(1),
                      marginBottom: "calc(" + o + " / 2)",
                      marginTop: "calc(" + o + " / 2)",
                    })),
                    (n = Tn(
                      n,
                      [
                        "blockquote *:last-child",
                        "li *:last-child",
                        "p *:last-child",
                      ],
                      { marginBottom: 0 }
                    )),
                    (n = Tn(n, ["li > p"], {
                      marginBottom: "calc(" + o + " / 2)",
                    })),
                    (n = Tn(
                      n,
                      ["code", "kbd", "pre", "samp"],
                      Object.assign({}, t.adjustFontSizeTo("85%"))
                    )),
                    ((n = Tn(n, ["abbr", "acronym"], {
                      borderBottom: "1px dotted " + T(50),
                      cursor: "help",
                    }))["abbr[title]"] = {
                      borderBottom: "1px dotted " + T(50),
                      cursor: "help",
                      textDecoration: "none",
                    }),
                    (n = Tn(
                      n,
                      ["table"],
                      Object.assign({}, t.adjustFontSizeTo(e.baseFontSize), {
                        borderCollapse: "collapse",
                        width: "100%",
                      })
                    )),
                    (n = Tn(n, ["thead"], { textAlign: "left" })),
                    (n = Tn(n, ["td,th"], {
                      textAlign: "left",
                      borderBottom: "1px solid " + T(88),
                      fontFeatureSettings: '"tnum"',
                      MozFontFeatureSettings: '"tnum"',
                      msFontFeatureSettings: '"tnum"',
                      WebkitFontFeatureSettings: '"tnum"',
                      paddingLeft: t.rhythm(2 / 3),
                      paddingRight: t.rhythm(2 / 3),
                      paddingTop: t.rhythm(0.5),
                      paddingBottom: "calc(" + t.rhythm(0.5) + " - 1px)",
                    })),
                    (n = Tn(n, "th:first-child,td:first-child", {
                      paddingLeft: 0,
                    })),
                    (n = Tn(n, "th:last-child,td:last-child", {
                      paddingRight: 0,
                    })),
                    (n = Tn(n, ["h1", "h2", "h3", "h4", "h5", "h6"], {
                      color: e.headerColor,
                      fontFamily: e.headerFontFamily.map(En).join(","),
                      fontWeight: e.headerWeight,
                      textRendering: "optimizeLegibility",
                    }));
                  var i = t.scale(1),
                    a = t.scale(0.6),
                    u = t.scale(0.4),
                    c = t.scale(0),
                    l = t.scale(-0.2),
                    s = t.scale(-0.3);
                  return (
                    te([i, a, u, c, l, s], function (t, r) {
                      (n = Mt(n, "h" + (r + 1) + ".fontSize", t.fontSize)),
                        (n = Mt(
                          n,
                          "h" + (r + 1) + ".lineHeight",
                          e.headerLineHeight
                        ));
                    }),
                    K(e.plugins) &&
                      (n = mn(
                        e.plugins,
                        function (n, r) {
                          return je(n, r(t, e, n));
                        },
                        n
                      )),
                    e.overrideStyles &&
                      N(e.overrideStyles) &&
                      (n = je(n, e.overrideStyles(t, e, n))),
                    e.overrideThemeStyles &&
                      N(e.overrideThemeStyles) &&
                      (n = je(n, e.overrideThemeStyles(t, e, n))),
                    n
                  );
                })(l, c);
              },
              toString: function () {
                return (function (t, e, n) {
                  var r = (function t(e) {
                    return mn(
                      e,
                      function (e, n, r) {
                        return (
                          (e += r + "{"),
                          te(n, function (n, r) {
                            if (C(n)) {
                              var o = {};
                              (o[r] = n), (e += t(o));
                            } else {
                              var i =
                                (function (t, e) {
                                  if ("string" != typeof t)
                                    throw new TypeError("Expected a string");
                                  return t
                                    .replace(
                                      /([a-z\d])([A-Z])/g,
                                      "$1" + (e = void 0 === e ? "_" : e) + "$2"
                                    )
                                    .replace(
                                      /([A-Z]+)([A-Z][a-z\d]+)/g,
                                      "$1" + e + "$2"
                                    )
                                    .toLowerCase();
                                })(r, "-") +
                                ":" +
                                n +
                                ";";
                              ["Webkit", "ms", "Moz", "O"].forEach(function (
                                t
                              ) {
                                r.slice(0, t.length) === t && (i = "-" + i);
                              }),
                                (e += i);
                            }
                          }),
                          (e += "}")
                        );
                      },
                      ""
                    );
                  })(n);
                  return e.includeNormalize && (r = "" + _n + r), r;
                })(0, c, this.toJSON());
              },
              injectStyles: function () {
                if ("undefined" != typeof document)
                  if (document.getElementById("typography.js"))
                    document.getElementById(
                      "typography.js"
                    ).innerHTML = this.toString();
                  else {
                    var t = document.createElement("style");
                    (t.id = "typography.js"), (t.innerHTML = this.toString());
                    var e = document.head;
                    e.firstChild
                      ? e.insertBefore(t, e.firstChild)
                      : e.appendChild(t);
                  }
              },
            })
          );
        };
      }.call(this, n("yLpj")));
    },
    p3AD: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return c;
      }),
        n.d(e, "b", function () {
          return l;
        });
      var r = n("mBog"),
        o = n.n(r),
        i = n("9o1B"),
        a = n.n(i);
      (a.a.overrideThemeStyles = function () {
        return { "a.gatsby-resp-image-link": { boxShadow: "none" } };
      }),
        delete a.a.googleFonts;
      var u = new o.a(a.a);
      var c = u.rhythm,
        l = u.scale;
    },
    v1p5: function (t, e, n) {
      (function (t) {
        (e.__esModule = !0),
          (e.warn = e.requestAnimationFrame = e.reducePropsToState = e.mapStateOnServer = e.handleClientStateChange = e.convertReactPropstoHtmlAttributes = void 0);
        var r =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                },
          o =
            Object.assign ||
            function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
              }
              return t;
            },
          i = c(n("q1tI")),
          a = c(n("6qGY")),
          u = n("hFT/");
        function c(t) {
          return t && t.__esModule ? t : { default: t };
        }
        var l,
          s = function (t) {
            var e =
              !(arguments.length > 1 && void 0 !== arguments[1]) ||
              arguments[1];
            return !1 === e
              ? String(t)
              : String(t)
                  .replace(/&/g, "&amp;")
                  .replace(/</g, "&lt;")
                  .replace(/>/g, "&gt;")
                  .replace(/"/g, "&quot;")
                  .replace(/'/g, "&#x27;");
          },
          f = function (t) {
            var e = y(t, u.TAG_NAMES.TITLE),
              n = y(t, u.HELMET_PROPS.TITLE_TEMPLATE);
            if (n && e)
              return n.replace(/%s/g, function () {
                return e;
              });
            var r = y(t, u.HELMET_PROPS.DEFAULT_TITLE);
            return e || r || void 0;
          },
          p = function (t) {
            return (
              y(t, u.HELMET_PROPS.ON_CHANGE_CLIENT_STATE) || function () {}
            );
          },
          d = function (t, e) {
            return e
              .filter(function (e) {
                return void 0 !== e[t];
              })
              .map(function (e) {
                return e[t];
              })
              .reduce(function (t, e) {
                return o({}, t, e);
              }, {});
          },
          h = function (t, e) {
            return e
              .filter(function (t) {
                return void 0 !== t[u.TAG_NAMES.BASE];
              })
              .map(function (t) {
                return t[u.TAG_NAMES.BASE];
              })
              .reverse()
              .reduce(function (e, n) {
                if (!e.length)
                  for (var r = Object.keys(n), o = 0; o < r.length; o++) {
                    var i = r[o].toLowerCase();
                    if (-1 !== t.indexOf(i) && n[i]) return e.concat(n);
                  }
                return e;
              }, []);
          },
          b = function (t, e, n) {
            var o = {};
            return n
              .filter(function (e) {
                return (
                  !!Array.isArray(e[t]) ||
                  (void 0 !== e[t] &&
                    E(
                      "Helmet: " +
                        t +
                        ' should be of type "Array". Instead found type "' +
                        r(e[t]) +
                        '"'
                    ),
                  !1)
                );
              })
              .map(function (e) {
                return e[t];
              })
              .reverse()
              .reduce(function (t, n) {
                var r = {};
                n.filter(function (t) {
                  for (
                    var n = void 0, i = Object.keys(t), a = 0;
                    a < i.length;
                    a++
                  ) {
                    var c = i[a],
                      l = c.toLowerCase();
                    -1 === e.indexOf(l) ||
                      (n === u.TAG_PROPERTIES.REL &&
                        "canonical" === t[n].toLowerCase()) ||
                      (l === u.TAG_PROPERTIES.REL &&
                        "stylesheet" === t[l].toLowerCase()) ||
                      (n = l),
                      -1 === e.indexOf(c) ||
                        (c !== u.TAG_PROPERTIES.INNER_HTML &&
                          c !== u.TAG_PROPERTIES.CSS_TEXT &&
                          c !== u.TAG_PROPERTIES.ITEM_PROP) ||
                        (n = c);
                  }
                  if (!n || !t[n]) return !1;
                  var s = t[n].toLowerCase();
                  return (
                    o[n] || (o[n] = {}),
                    r[n] || (r[n] = {}),
                    !o[n][s] && ((r[n][s] = !0), !0)
                  );
                })
                  .reverse()
                  .forEach(function (e) {
                    return t.push(e);
                  });
                for (var i = Object.keys(r), c = 0; c < i.length; c++) {
                  var l = i[c],
                    s = (0, a.default)({}, o[l], r[l]);
                  o[l] = s;
                }
                return t;
              }, [])
              .reverse();
          },
          y = function (t, e) {
            for (var n = t.length - 1; n >= 0; n--) {
              var r = t[n];
              if (r.hasOwnProperty(e)) return r[e];
            }
            return null;
          },
          g =
            ((l = Date.now()),
            function (t) {
              var e = Date.now();
              e - l > 16
                ? ((l = e), t(e))
                : setTimeout(function () {
                    g(t);
                  }, 0);
            }),
          m = function (t) {
            return clearTimeout(t);
          },
          T =
            "undefined" != typeof window
              ? window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                g
              : t.requestAnimationFrame || g,
          v =
            "undefined" != typeof window
              ? window.cancelAnimationFrame ||
                window.webkitCancelAnimationFrame ||
                window.mozCancelAnimationFrame ||
                m
              : t.cancelAnimationFrame || m,
          E = function (t) {
            return (
              console && "function" == typeof console.warn && console.warn(t)
            );
          },
          _ = null,
          A = function (t, e) {
            var n = t.baseTag,
              r = t.bodyAttributes,
              o = t.htmlAttributes,
              i = t.linkTags,
              a = t.metaTags,
              c = t.noscriptTags,
              l = t.onChangeClientState,
              s = t.scriptTags,
              f = t.styleTags,
              p = t.title,
              d = t.titleAttributes;
            O(u.TAG_NAMES.BODY, r), O(u.TAG_NAMES.HTML, o), w(p, d);
            var h = {
                baseTag: j(u.TAG_NAMES.BASE, n),
                linkTags: j(u.TAG_NAMES.LINK, i),
                metaTags: j(u.TAG_NAMES.META, a),
                noscriptTags: j(u.TAG_NAMES.NOSCRIPT, c),
                scriptTags: j(u.TAG_NAMES.SCRIPT, s),
                styleTags: j(u.TAG_NAMES.STYLE, f),
              },
              b = {},
              y = {};
            Object.keys(h).forEach(function (t) {
              var e = h[t],
                n = e.newTags,
                r = e.oldTags;
              n.length && (b[t] = n), r.length && (y[t] = h[t].oldTags);
            }),
              e && e(),
              l(t, b, y);
          },
          S = function (t) {
            return Array.isArray(t) ? t.join("") : t;
          },
          w = function (t, e) {
            void 0 !== t && document.title !== t && (document.title = S(t)),
              O(u.TAG_NAMES.TITLE, e);
          },
          O = function (t, e) {
            var n = document.getElementsByTagName(t)[0];
            if (n) {
              for (
                var r = n.getAttribute(u.HELMET_ATTRIBUTE),
                  o = r ? r.split(",") : [],
                  i = [].concat(o),
                  a = Object.keys(e),
                  c = 0;
                c < a.length;
                c++
              ) {
                var l = a[c],
                  s = e[l] || "";
                n.getAttribute(l) !== s && n.setAttribute(l, s),
                  -1 === o.indexOf(l) && o.push(l);
                var f = i.indexOf(l);
                -1 !== f && i.splice(f, 1);
              }
              for (var p = i.length - 1; p >= 0; p--) n.removeAttribute(i[p]);
              o.length === i.length
                ? n.removeAttribute(u.HELMET_ATTRIBUTE)
                : n.getAttribute(u.HELMET_ATTRIBUTE) !== a.join(",") &&
                  n.setAttribute(u.HELMET_ATTRIBUTE, a.join(","));
            }
          },
          j = function (t, e) {
            var n = document.head || document.querySelector(u.TAG_NAMES.HEAD),
              r = n.querySelectorAll(t + "[" + u.HELMET_ATTRIBUTE + "]"),
              o = Array.prototype.slice.call(r),
              i = [],
              a = void 0;
            return (
              e &&
                e.length &&
                e.forEach(function (e) {
                  var n = document.createElement(t);
                  for (var r in e)
                    if (e.hasOwnProperty(r))
                      if (r === u.TAG_PROPERTIES.INNER_HTML)
                        n.innerHTML = e.innerHTML;
                      else if (r === u.TAG_PROPERTIES.CSS_TEXT)
                        n.styleSheet
                          ? (n.styleSheet.cssText = e.cssText)
                          : n.appendChild(document.createTextNode(e.cssText));
                      else {
                        var c = void 0 === e[r] ? "" : e[r];
                        n.setAttribute(r, c);
                      }
                  n.setAttribute(u.HELMET_ATTRIBUTE, "true"),
                    o.some(function (t, e) {
                      return (a = e), n.isEqualNode(t);
                    })
                      ? o.splice(a, 1)
                      : i.push(n);
                }),
              o.forEach(function (t) {
                return t.parentNode.removeChild(t);
              }),
              i.forEach(function (t) {
                return n.appendChild(t);
              }),
              { oldTags: o, newTags: i }
            );
          },
          M = function (t) {
            return Object.keys(t).reduce(function (e, n) {
              var r = void 0 !== t[n] ? n + '="' + t[n] + '"' : "" + n;
              return e ? e + " " + r : r;
            }, "");
          },
          P = function (t) {
            var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            return Object.keys(t).reduce(function (e, n) {
              return (e[u.REACT_TAG_MAP[n] || n] = t[n]), e;
            }, e);
          },
          R = function (t, e, n) {
            switch (t) {
              case u.TAG_NAMES.TITLE:
                return {
                  toComponent: function () {
                    return (
                      (t = e.title),
                      (n = e.titleAttributes),
                      ((r = { key: t })[u.HELMET_ATTRIBUTE] = !0),
                      (o = P(n, r)),
                      [i.default.createElement(u.TAG_NAMES.TITLE, o, t)]
                    );
                    var t, n, r, o;
                  },
                  toString: function () {
                    return (function (t, e, n, r) {
                      var o = M(n),
                        i = S(e);
                      return o
                        ? "<" +
                            t +
                            " " +
                            u.HELMET_ATTRIBUTE +
                            '="true" ' +
                            o +
                            ">" +
                            s(i, r) +
                            "</" +
                            t +
                            ">"
                        : "<" +
                            t +
                            " " +
                            u.HELMET_ATTRIBUTE +
                            '="true">' +
                            s(i, r) +
                            "</" +
                            t +
                            ">";
                    })(t, e.title, e.titleAttributes, n);
                  },
                };
              case u.ATTRIBUTE_NAMES.BODY:
              case u.ATTRIBUTE_NAMES.HTML:
                return {
                  toComponent: function () {
                    return P(e);
                  },
                  toString: function () {
                    return M(e);
                  },
                };
              default:
                return {
                  toComponent: function () {
                    return (function (t, e) {
                      return e.map(function (e, n) {
                        var r,
                          o = (((r = { key: n })[u.HELMET_ATTRIBUTE] = !0), r);
                        return (
                          Object.keys(e).forEach(function (t) {
                            var n = u.REACT_TAG_MAP[t] || t;
                            if (
                              n === u.TAG_PROPERTIES.INNER_HTML ||
                              n === u.TAG_PROPERTIES.CSS_TEXT
                            ) {
                              var r = e.innerHTML || e.cssText;
                              o.dangerouslySetInnerHTML = { __html: r };
                            } else o[n] = e[t];
                          }),
                          i.default.createElement(t, o)
                        );
                      });
                    })(t, e);
                  },
                  toString: function () {
                    return (function (t, e, n) {
                      return e.reduce(function (e, r) {
                        var o = Object.keys(r)
                            .filter(function (t) {
                              return !(
                                t === u.TAG_PROPERTIES.INNER_HTML ||
                                t === u.TAG_PROPERTIES.CSS_TEXT
                              );
                            })
                            .reduce(function (t, e) {
                              var o =
                                void 0 === r[e]
                                  ? e
                                  : e + '="' + s(r[e], n) + '"';
                              return t ? t + " " + o : o;
                            }, ""),
                          i = r.innerHTML || r.cssText || "",
                          a = -1 === u.SELF_CLOSING_TAGS.indexOf(t);
                        return (
                          e +
                          "<" +
                          t +
                          " " +
                          u.HELMET_ATTRIBUTE +
                          '="true" ' +
                          o +
                          (a ? "/>" : ">" + i + "</" + t + ">")
                        );
                      }, "");
                    })(t, e, n);
                  },
                };
            }
          };
        (e.convertReactPropstoHtmlAttributes = function (t) {
          var e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return Object.keys(t).reduce(function (e, n) {
            return (e[u.HTML_TAG_MAP[n] || n] = t[n]), e;
          }, e);
        }),
          (e.handleClientStateChange = function (t) {
            _ && v(_),
              t.defer
                ? (_ = T(function () {
                    A(t, function () {
                      _ = null;
                    });
                  }))
                : (A(t), (_ = null));
          }),
          (e.mapStateOnServer = function (t) {
            var e = t.baseTag,
              n = t.bodyAttributes,
              r = t.encode,
              o = t.htmlAttributes,
              i = t.linkTags,
              a = t.metaTags,
              c = t.noscriptTags,
              l = t.scriptTags,
              s = t.styleTags,
              f = t.title,
              p = void 0 === f ? "" : f,
              d = t.titleAttributes;
            return {
              base: R(u.TAG_NAMES.BASE, e, r),
              bodyAttributes: R(u.ATTRIBUTE_NAMES.BODY, n, r),
              htmlAttributes: R(u.ATTRIBUTE_NAMES.HTML, o, r),
              link: R(u.TAG_NAMES.LINK, i, r),
              meta: R(u.TAG_NAMES.META, a, r),
              noscript: R(u.TAG_NAMES.NOSCRIPT, c, r),
              script: R(u.TAG_NAMES.SCRIPT, l, r),
              style: R(u.TAG_NAMES.STYLE, s, r),
              title: R(u.TAG_NAMES.TITLE, { title: p, titleAttributes: d }, r),
            };
          }),
          (e.reducePropsToState = function (t) {
            return {
              baseTag: h([u.TAG_PROPERTIES.HREF], t),
              bodyAttributes: d(u.ATTRIBUTE_NAMES.BODY, t),
              defer: y(t, u.HELMET_PROPS.DEFER),
              encode: y(t, u.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),
              htmlAttributes: d(u.ATTRIBUTE_NAMES.HTML, t),
              linkTags: b(
                u.TAG_NAMES.LINK,
                [u.TAG_PROPERTIES.REL, u.TAG_PROPERTIES.HREF],
                t
              ),
              metaTags: b(
                u.TAG_NAMES.META,
                [
                  u.TAG_PROPERTIES.NAME,
                  u.TAG_PROPERTIES.CHARSET,
                  u.TAG_PROPERTIES.HTTPEQUIV,
                  u.TAG_PROPERTIES.PROPERTY,
                  u.TAG_PROPERTIES.ITEM_PROP,
                ],
                t
              ),
              noscriptTags: b(
                u.TAG_NAMES.NOSCRIPT,
                [u.TAG_PROPERTIES.INNER_HTML],
                t
              ),
              onChangeClientState: p(t),
              scriptTags: b(
                u.TAG_NAMES.SCRIPT,
                [u.TAG_PROPERTIES.SRC, u.TAG_PROPERTIES.INNER_HTML],
                t
              ),
              styleTags: b(u.TAG_NAMES.STYLE, [u.TAG_PROPERTIES.CSS_TEXT], t),
              title: f(t),
              titleAttributes: d(u.ATTRIBUTE_NAMES.TITLE, t),
            };
          }),
          (e.requestAnimationFrame = T),
          (e.warn = E);
      }.call(this, n("yLpj")));
    },
    vrFN: function (t, e, n) {
      "use strict";
      var r = n("q1tI"),
        o = n.n(r),
        i = n("TJpk"),
        a = n("Wbzz"),
        u = function (t) {
          var e = t.description,
            n = t.lang,
            r = t.meta,
            u = t.title,
            c = Object(a.useStaticQuery)("2841359383").site,
            l = e || c.siteMetadata.description;
          return o.a.createElement(i.Helmet, {
            htmlAttributes: { lang: n },
            title: u,
            titleTemplate: "%s | " + c.siteMetadata.title,
            meta: [
              { name: "description", content: l },
              { property: "og:title", content: u },
              { property: "og:description", content: l },
              { property: "og:type", content: "website" },
              { name: "twitter:card", content: "summary" },
              {
                name: "twitter:creator",
                content: c.siteMetadata.social.twitter,
              },
              { name: "twitter:title", content: u },
              { name: "twitter:description", content: l },
            ].concat(r),
          });
        };
      (u.defaultProps = { lang: "en", meta: [], description: "" }), (e.a = u);
    },
    yLpj: function (t, e) {
      var n;
      n = (function () {
        return this;
      })();
      try {
        n = n || new Function("return this")();
      } catch (r) {
        "object" == typeof window && (n = window);
      }
      t.exports = n;
    },
  },
]);
//# sourceMappingURL=commons-a1e72859e3aaac304cdf.js.map
