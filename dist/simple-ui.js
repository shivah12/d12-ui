import er, { forwardRef as Te } from "react";
var ke = { exports: {} }, ae = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Je;
function Fr() {
  if (Je) return ae;
  Je = 1;
  var r = er, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, c = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function u(l, p, m) {
    var b, x = {}, C = null, j = null;
    m !== void 0 && (C = "" + m), p.key !== void 0 && (C = "" + p.key), p.ref !== void 0 && (j = p.ref);
    for (b in p) a.call(p, b) && !i.hasOwnProperty(b) && (x[b] = p[b]);
    if (l && l.defaultProps) for (b in p = l.defaultProps, p) x[b] === void 0 && (x[b] = p[b]);
    return { $$typeof: t, type: l, key: C, ref: j, props: x, _owner: c.current };
  }
  return ae.Fragment = n, ae.jsx = u, ae.jsxs = u, ae;
}
var se = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ke;
function Nr() {
  return Ke || (Ke = 1, process.env.NODE_ENV !== "production" && function() {
    var r = er, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), u = Symbol.for("react.provider"), l = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), b = Symbol.for("react.suspense_list"), x = Symbol.for("react.memo"), C = Symbol.for("react.lazy"), j = Symbol.for("react.offscreen"), O = Symbol.iterator, S = "@@iterator";
    function w(e) {
      if (e === null || typeof e != "object")
        return null;
      var o = O && e[O] || e[S];
      return typeof o == "function" ? o : null;
    }
    var k = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function y(e) {
      {
        for (var o = arguments.length, s = new Array(o > 1 ? o - 1 : 0), d = 1; d < o; d++)
          s[d - 1] = arguments[d];
        Y("error", e, s);
      }
    }
    function Y(e, o, s) {
      {
        var d = k.ReactDebugCurrentFrame, h = d.getStackAddendum();
        h !== "" && (o += "%s", s = s.concat([h]));
        var E = s.map(function(v) {
          return String(v);
        });
        E.unshift("Warning: " + o), Function.prototype.apply.call(console[e], console, E);
      }
    }
    var V = !1, q = !1, ce = !1, ue = !1, de = !1, J;
    J = Symbol.for("react.module.reference");
    function ee(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === a || e === i || de || e === c || e === m || e === b || ue || e === j || V || q || ce || typeof e == "object" && e !== null && (e.$$typeof === C || e.$$typeof === x || e.$$typeof === u || e.$$typeof === l || e.$$typeof === p || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === J || e.getModuleId !== void 0));
    }
    function re(e, o, s) {
      var d = e.displayName;
      if (d)
        return d;
      var h = o.displayName || o.name || "";
      return h !== "" ? s + "(" + h + ")" : s;
    }
    function R(e) {
      return e.displayName || "Context";
    }
    function N(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case a:
          return "Fragment";
        case n:
          return "Portal";
        case i:
          return "Profiler";
        case c:
          return "StrictMode";
        case m:
          return "Suspense";
        case b:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case l:
            var o = e;
            return R(o) + ".Consumer";
          case u:
            var s = e;
            return R(s._context) + ".Provider";
          case p:
            return re(e, e.render, "ForwardRef");
          case x:
            var d = e.displayName || null;
            return d !== null ? d : N(e.type) || "Memo";
          case C: {
            var h = e, E = h._payload, v = h._init;
            try {
              return N(v(E));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var I = Object.assign, $ = 0, U, te, K, G, oe, M, Oe;
    function Ae() {
    }
    Ae.__reactDisabledLog = !0;
    function cr() {
      {
        if ($ === 0) {
          U = console.log, te = console.info, K = console.warn, G = console.error, oe = console.group, M = console.groupCollapsed, Oe = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Ae,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        $++;
      }
    }
    function ur() {
      {
        if ($--, $ === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: I({}, e, {
              value: U
            }),
            info: I({}, e, {
              value: te
            }),
            warn: I({}, e, {
              value: K
            }),
            error: I({}, e, {
              value: G
            }),
            group: I({}, e, {
              value: oe
            }),
            groupCollapsed: I({}, e, {
              value: M
            }),
            groupEnd: I({}, e, {
              value: Oe
            })
          });
        }
        $ < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ve = k.ReactCurrentDispatcher, he;
    function fe(e, o, s) {
      {
        if (he === void 0)
          try {
            throw Error();
          } catch (h) {
            var d = h.stack.trim().match(/\n( *(at )?)/);
            he = d && d[1] || "";
          }
        return `
` + he + e;
      }
    }
    var ye = !1, pe;
    {
      var dr = typeof WeakMap == "function" ? WeakMap : Map;
      pe = new dr();
    }
    function ze(e, o) {
      if (!e || ye)
        return "";
      {
        var s = pe.get(e);
        if (s !== void 0)
          return s;
      }
      var d;
      ye = !0;
      var h = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var E;
      E = ve.current, ve.current = null, cr();
      try {
        if (o) {
          var v = function() {
            throw Error();
          };
          if (Object.defineProperty(v.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(v, []);
            } catch (z) {
              d = z;
            }
            Reflect.construct(e, [], v);
          } else {
            try {
              v.call();
            } catch (z) {
              d = z;
            }
            e.call(v.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (z) {
            d = z;
          }
          e();
        }
      } catch (z) {
        if (z && d && typeof z.stack == "string") {
          for (var g = z.stack.split(`
`), A = d.stack.split(`
`), T = g.length - 1, P = A.length - 1; T >= 1 && P >= 0 && g[T] !== A[P]; )
            P--;
          for (; T >= 1 && P >= 0; T--, P--)
            if (g[T] !== A[P]) {
              if (T !== 1 || P !== 1)
                do
                  if (T--, P--, P < 0 || g[T] !== A[P]) {
                    var F = `
` + g[T].replace(" at new ", " at ");
                    return e.displayName && F.includes("<anonymous>") && (F = F.replace("<anonymous>", e.displayName)), typeof e == "function" && pe.set(e, F), F;
                  }
                while (T >= 1 && P >= 0);
              break;
            }
        }
      } finally {
        ye = !1, ve.current = E, ur(), Error.prepareStackTrace = h;
      }
      var H = e ? e.displayName || e.name : "", B = H ? fe(H) : "";
      return typeof e == "function" && pe.set(e, B), B;
    }
    function fr(e, o, s) {
      return ze(e, !1);
    }
    function pr(e) {
      var o = e.prototype;
      return !!(o && o.isReactComponent);
    }
    function be(e, o, s) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ze(e, pr(e));
      if (typeof e == "string")
        return fe(e);
      switch (e) {
        case m:
          return fe("Suspense");
        case b:
          return fe("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case p:
            return fr(e.render);
          case x:
            return be(e.type, o, s);
          case C: {
            var d = e, h = d._payload, E = d._init;
            try {
              return be(E(h), o, s);
            } catch {
            }
          }
        }
      return "";
    }
    var ne = Object.prototype.hasOwnProperty, Ie = {}, Me = k.ReactDebugCurrentFrame;
    function ge(e) {
      if (e) {
        var o = e._owner, s = be(e.type, e._source, o ? o.type : null);
        Me.setExtraStackFrame(s);
      } else
        Me.setExtraStackFrame(null);
    }
    function br(e, o, s, d, h) {
      {
        var E = Function.call.bind(ne);
        for (var v in e)
          if (E(e, v)) {
            var g = void 0;
            try {
              if (typeof e[v] != "function") {
                var A = Error((d || "React class") + ": " + s + " type `" + v + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[v] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw A.name = "Invariant Violation", A;
              }
              g = e[v](o, v, d, s, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (T) {
              g = T;
            }
            g && !(g instanceof Error) && (ge(h), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", d || "React class", s, v, typeof g), ge(null)), g instanceof Error && !(g.message in Ie) && (Ie[g.message] = !0, ge(h), y("Failed %s type: %s", s, g.message), ge(null));
          }
      }
    }
    var gr = Array.isArray;
    function xe(e) {
      return gr(e);
    }
    function mr(e) {
      {
        var o = typeof Symbol == "function" && Symbol.toStringTag, s = o && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return s;
      }
    }
    function vr(e) {
      try {
        return Fe(e), !1;
      } catch {
        return !0;
      }
    }
    function Fe(e) {
      return "" + e;
    }
    function Ne(e) {
      if (vr(e))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", mr(e)), Fe(e);
    }
    var Ve = k.ReactCurrentOwner, hr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, We, $e;
    function yr(e) {
      if (ne.call(e, "ref")) {
        var o = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (o && o.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function xr(e) {
      if (ne.call(e, "key")) {
        var o = Object.getOwnPropertyDescriptor(e, "key").get;
        if (o && o.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function wr(e, o) {
      typeof e.ref == "string" && Ve.current;
    }
    function Rr(e, o) {
      {
        var s = function() {
          We || (We = !0, y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", o));
        };
        s.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: s,
          configurable: !0
        });
      }
    }
    function Er(e, o) {
      {
        var s = function() {
          $e || ($e = !0, y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", o));
        };
        s.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: s,
          configurable: !0
        });
      }
    }
    var Cr = function(e, o, s, d, h, E, v) {
      var g = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: e,
        key: o,
        ref: s,
        props: v,
        // Record the component responsible for creating this element.
        _owner: E
      };
      return g._store = {}, Object.defineProperty(g._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(g, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: d
      }), Object.defineProperty(g, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: h
      }), Object.freeze && (Object.freeze(g.props), Object.freeze(g)), g;
    };
    function _r(e, o, s, d, h) {
      {
        var E, v = {}, g = null, A = null;
        s !== void 0 && (Ne(s), g = "" + s), xr(o) && (Ne(o.key), g = "" + o.key), yr(o) && (A = o.ref, wr(o, h));
        for (E in o)
          ne.call(o, E) && !hr.hasOwnProperty(E) && (v[E] = o[E]);
        if (e && e.defaultProps) {
          var T = e.defaultProps;
          for (E in T)
            v[E] === void 0 && (v[E] = T[E]);
        }
        if (g || A) {
          var P = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          g && Rr(v, P), A && Er(v, P);
        }
        return Cr(e, g, A, h, d, Ve.current, v);
      }
    }
    var we = k.ReactCurrentOwner, Ge = k.ReactDebugCurrentFrame;
    function X(e) {
      if (e) {
        var o = e._owner, s = be(e.type, e._source, o ? o.type : null);
        Ge.setExtraStackFrame(s);
      } else
        Ge.setExtraStackFrame(null);
    }
    var Re;
    Re = !1;
    function Ee(e) {
      return typeof e == "object" && e !== null && e.$$typeof === t;
    }
    function De() {
      {
        if (we.current) {
          var e = N(we.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function kr(e) {
      return "";
    }
    var Le = {};
    function Sr(e) {
      {
        var o = De();
        if (!o) {
          var s = typeof e == "string" ? e : e.displayName || e.name;
          s && (o = `

Check the top-level render call using <` + s + ">.");
        }
        return o;
      }
    }
    function Ye(e, o) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var s = Sr(o);
        if (Le[s])
          return;
        Le[s] = !0;
        var d = "";
        e && e._owner && e._owner !== we.current && (d = " It was passed a child from " + N(e._owner.type) + "."), X(e), y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', s, d), X(null);
      }
    }
    function Ue(e, o) {
      {
        if (typeof e != "object")
          return;
        if (xe(e))
          for (var s = 0; s < e.length; s++) {
            var d = e[s];
            Ee(d) && Ye(d, o);
          }
        else if (Ee(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var h = w(e);
          if (typeof h == "function" && h !== e.entries)
            for (var E = h.call(e), v; !(v = E.next()).done; )
              Ee(v.value) && Ye(v.value, o);
        }
      }
    }
    function Tr(e) {
      {
        var o = e.type;
        if (o == null || typeof o == "string")
          return;
        var s;
        if (typeof o == "function")
          s = o.propTypes;
        else if (typeof o == "object" && (o.$$typeof === p || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        o.$$typeof === x))
          s = o.propTypes;
        else
          return;
        if (s) {
          var d = N(o);
          br(s, e.props, "prop", d, e);
        } else if (o.PropTypes !== void 0 && !Re) {
          Re = !0;
          var h = N(o);
          y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", h || "Unknown");
        }
        typeof o.getDefaultProps == "function" && !o.getDefaultProps.isReactClassApproved && y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Pr(e) {
      {
        for (var o = Object.keys(e.props), s = 0; s < o.length; s++) {
          var d = o[s];
          if (d !== "children" && d !== "key") {
            X(e), y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", d), X(null);
            break;
          }
        }
        e.ref !== null && (X(e), y("Invalid attribute `ref` supplied to `React.Fragment`."), X(null));
      }
    }
    var Be = {};
    function qe(e, o, s, d, h, E) {
      {
        var v = ee(e);
        if (!v) {
          var g = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (g += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var A = kr();
          A ? g += A : g += De();
          var T;
          e === null ? T = "null" : xe(e) ? T = "array" : e !== void 0 && e.$$typeof === t ? (T = "<" + (N(e.type) || "Unknown") + " />", g = " Did you accidentally export a JSX literal instead of a component?") : T = typeof e, y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", T, g);
        }
        var P = _r(e, o, s, h, E);
        if (P == null)
          return P;
        if (v) {
          var F = o.children;
          if (F !== void 0)
            if (d)
              if (xe(F)) {
                for (var H = 0; H < F.length; H++)
                  Ue(F[H], e);
                Object.freeze && Object.freeze(F);
              } else
                y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ue(F, e);
        }
        if (ne.call(o, "key")) {
          var B = N(e), z = Object.keys(o).filter(function(Mr) {
            return Mr !== "key";
          }), Ce = z.length > 0 ? "{key: someKey, " + z.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Be[B + Ce]) {
            var Ir = z.length > 0 ? "{" + z.join(": ..., ") + ": ...}" : "{}";
            y(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Ce, B, Ir, B), Be[B + Ce] = !0;
          }
        }
        return e === a ? Pr(P) : Tr(P), P;
      }
    }
    function jr(e, o, s) {
      return qe(e, o, s, !0);
    }
    function Or(e, o, s) {
      return qe(e, o, s, !1);
    }
    var Ar = Or, zr = jr;
    se.Fragment = a, se.jsx = Ar, se.jsxs = zr;
  }()), se;
}
process.env.NODE_ENV === "production" ? ke.exports = Fr() : ke.exports = Nr();
var me = ke.exports;
function rr(r) {
  var t, n, a = "";
  if (typeof r == "string" || typeof r == "number") a += r;
  else if (typeof r == "object") if (Array.isArray(r)) {
    var c = r.length;
    for (t = 0; t < c; t++) r[t] && (n = rr(r[t])) && (a && (a += " "), a += n);
  } else for (n in r) r[n] && (a && (a += " "), a += n);
  return a;
}
function tr() {
  for (var r, t, n = 0, a = "", c = arguments.length; n < c; n++) (r = arguments[n]) && (t = rr(r)) && (a && (a += " "), a += t);
  return a;
}
const Pe = "-", Vr = (r) => {
  const t = $r(r), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: a
  } = r;
  return {
    getClassGroupId: (u) => {
      const l = u.split(Pe);
      return l[0] === "" && l.length !== 1 && l.shift(), or(l, t) || Wr(u);
    },
    getConflictingClassGroupIds: (u, l) => {
      const p = n[u] || [];
      return l && a[u] ? [...p, ...a[u]] : p;
    }
  };
}, or = (r, t) => {
  var u;
  if (r.length === 0)
    return t.classGroupId;
  const n = r[0], a = t.nextPart.get(n), c = a ? or(r.slice(1), a) : void 0;
  if (c)
    return c;
  if (t.validators.length === 0)
    return;
  const i = r.join(Pe);
  return (u = t.validators.find(({
    validator: l
  }) => l(i))) == null ? void 0 : u.classGroupId;
}, Xe = /^\[(.+)\]$/, Wr = (r) => {
  if (Xe.test(r)) {
    const t = Xe.exec(r)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}, $r = (r) => {
  const {
    theme: t,
    prefix: n
  } = r, a = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return Dr(Object.entries(r.classGroups), n).forEach(([i, u]) => {
    Se(u, a, i, t);
  }), a;
}, Se = (r, t, n, a) => {
  r.forEach((c) => {
    if (typeof c == "string") {
      const i = c === "" ? t : He(t, c);
      i.classGroupId = n;
      return;
    }
    if (typeof c == "function") {
      if (Gr(c)) {
        Se(c(a), t, n, a);
        return;
      }
      t.validators.push({
        validator: c,
        classGroupId: n
      });
      return;
    }
    Object.entries(c).forEach(([i, u]) => {
      Se(u, He(t, i), n, a);
    });
  });
}, He = (r, t) => {
  let n = r;
  return t.split(Pe).forEach((a) => {
    n.nextPart.has(a) || n.nextPart.set(a, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(a);
  }), n;
}, Gr = (r) => r.isThemeGetter, Dr = (r, t) => t ? r.map(([n, a]) => {
  const c = a.map((i) => typeof i == "string" ? t + i : typeof i == "object" ? Object.fromEntries(Object.entries(i).map(([u, l]) => [t + u, l])) : i);
  return [n, c];
}) : r, Lr = (r) => {
  if (r < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, n = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map();
  const c = (i, u) => {
    n.set(i, u), t++, t > r && (t = 0, a = n, n = /* @__PURE__ */ new Map());
  };
  return {
    get(i) {
      let u = n.get(i);
      if (u !== void 0)
        return u;
      if ((u = a.get(i)) !== void 0)
        return c(i, u), u;
    },
    set(i, u) {
      n.has(i) ? n.set(i, u) : c(i, u);
    }
  };
}, nr = "!", Yr = (r) => {
  const {
    separator: t,
    experimentalParseClassName: n
  } = r, a = t.length === 1, c = t[0], i = t.length, u = (l) => {
    const p = [];
    let m = 0, b = 0, x;
    for (let w = 0; w < l.length; w++) {
      let k = l[w];
      if (m === 0) {
        if (k === c && (a || l.slice(w, w + i) === t)) {
          p.push(l.slice(b, w)), b = w + i;
          continue;
        }
        if (k === "/") {
          x = w;
          continue;
        }
      }
      k === "[" ? m++ : k === "]" && m--;
    }
    const C = p.length === 0 ? l : l.substring(b), j = C.startsWith(nr), O = j ? C.substring(1) : C, S = x && x > b ? x - b : void 0;
    return {
      modifiers: p,
      hasImportantModifier: j,
      baseClassName: O,
      maybePostfixModifierPosition: S
    };
  };
  return n ? (l) => n({
    className: l,
    parseClassName: u
  }) : u;
}, Ur = (r) => {
  if (r.length <= 1)
    return r;
  const t = [];
  let n = [];
  return r.forEach((a) => {
    a[0] === "[" ? (t.push(...n.sort(), a), n = []) : n.push(a);
  }), t.push(...n.sort()), t;
}, Br = (r) => ({
  cache: Lr(r.cacheSize),
  parseClassName: Yr(r),
  ...Vr(r)
}), qr = /\s+/, Jr = (r, t) => {
  const {
    parseClassName: n,
    getClassGroupId: a,
    getConflictingClassGroupIds: c
  } = t, i = [], u = r.trim().split(qr);
  let l = "";
  for (let p = u.length - 1; p >= 0; p -= 1) {
    const m = u[p], {
      modifiers: b,
      hasImportantModifier: x,
      baseClassName: C,
      maybePostfixModifierPosition: j
    } = n(m);
    let O = !!j, S = a(O ? C.substring(0, j) : C);
    if (!S) {
      if (!O) {
        l = m + (l.length > 0 ? " " + l : l);
        continue;
      }
      if (S = a(C), !S) {
        l = m + (l.length > 0 ? " " + l : l);
        continue;
      }
      O = !1;
    }
    const w = Ur(b).join(":"), k = x ? w + nr : w, y = k + S;
    if (i.includes(y))
      continue;
    i.push(y);
    const Y = c(S, O);
    for (let V = 0; V < Y.length; ++V) {
      const q = Y[V];
      i.push(k + q);
    }
    l = m + (l.length > 0 ? " " + l : l);
  }
  return l;
};
function Kr() {
  let r = 0, t, n, a = "";
  for (; r < arguments.length; )
    (t = arguments[r++]) && (n = ar(t)) && (a && (a += " "), a += n);
  return a;
}
const ar = (r) => {
  if (typeof r == "string")
    return r;
  let t, n = "";
  for (let a = 0; a < r.length; a++)
    r[a] && (t = ar(r[a])) && (n && (n += " "), n += t);
  return n;
};
function Xr(r, ...t) {
  let n, a, c, i = u;
  function u(p) {
    const m = t.reduce((b, x) => x(b), r());
    return n = Br(m), a = n.cache.get, c = n.cache.set, i = l, l(p);
  }
  function l(p) {
    const m = a(p);
    if (m)
      return m;
    const b = Jr(p, n);
    return c(p, b), b;
  }
  return function() {
    return i(Kr.apply(null, arguments));
  };
}
const _ = (r) => {
  const t = (n) => n[r] || [];
  return t.isThemeGetter = !0, t;
}, sr = /^\[(?:([a-z-]+):)?(.+)\]$/i, Hr = /^\d+\/\d+$/, Zr = /* @__PURE__ */ new Set(["px", "full", "screen"]), Qr = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, et = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, rt = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, tt = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, ot = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, W = (r) => Z(r) || Zr.has(r) || Hr.test(r), D = (r) => Q(r, "length", dt), Z = (r) => !!r && !Number.isNaN(Number(r)), _e = (r) => Q(r, "number", Z), ie = (r) => !!r && Number.isInteger(Number(r)), nt = (r) => r.endsWith("%") && Z(r.slice(0, -1)), f = (r) => sr.test(r), L = (r) => Qr.test(r), at = /* @__PURE__ */ new Set(["length", "size", "percentage"]), st = (r) => Q(r, at, ir), it = (r) => Q(r, "position", ir), lt = /* @__PURE__ */ new Set(["image", "url"]), ct = (r) => Q(r, lt, pt), ut = (r) => Q(r, "", ft), le = () => !0, Q = (r, t, n) => {
  const a = sr.exec(r);
  return a ? a[1] ? typeof t == "string" ? a[1] === t : t.has(a[1]) : n(a[2]) : !1;
}, dt = (r) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  et.test(r) && !rt.test(r)
), ir = () => !1, ft = (r) => tt.test(r), pt = (r) => ot.test(r), bt = () => {
  const r = _("colors"), t = _("spacing"), n = _("blur"), a = _("brightness"), c = _("borderColor"), i = _("borderRadius"), u = _("borderSpacing"), l = _("borderWidth"), p = _("contrast"), m = _("grayscale"), b = _("hueRotate"), x = _("invert"), C = _("gap"), j = _("gradientColorStops"), O = _("gradientColorStopPositions"), S = _("inset"), w = _("margin"), k = _("opacity"), y = _("padding"), Y = _("saturate"), V = _("scale"), q = _("sepia"), ce = _("skew"), ue = _("space"), de = _("translate"), J = () => ["auto", "contain", "none"], ee = () => ["auto", "hidden", "clip", "visible", "scroll"], re = () => ["auto", f, t], R = () => [f, t], N = () => ["", W, D], I = () => ["auto", Z, f], $ = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], U = () => ["solid", "dashed", "dotted", "double", "none"], te = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], K = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], G = () => ["", "0", f], oe = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], M = () => [Z, f];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [le],
      spacing: [W, D],
      blur: ["none", "", L, f],
      brightness: M(),
      borderColor: [r],
      borderRadius: ["none", "", "full", L, f],
      borderSpacing: R(),
      borderWidth: N(),
      contrast: M(),
      grayscale: G(),
      hueRotate: M(),
      invert: G(),
      gap: R(),
      gradientColorStops: [r],
      gradientColorStopPositions: [nt, D],
      inset: re(),
      margin: re(),
      opacity: M(),
      padding: R(),
      saturate: M(),
      scale: M(),
      sepia: G(),
      skew: M(),
      space: R(),
      translate: R()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", f]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [L]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": oe()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": oe()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [...$(), f]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: ee()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": ee()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": ee()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: J()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": J()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": J()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [S]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [S]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [S]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [S]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [S]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [S]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [S]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [S]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [S]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", ie, f]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: re()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", f]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: G()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: G()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", ie, f]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [le]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", ie, f]
        }, f]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": I()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": I()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [le]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [ie, f]
        }, f]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": I()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": I()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", f]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", f]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [C]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [C]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [C]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...K()]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...K(), "baseline"]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [...K(), "baseline"]
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [y]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [y]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [y]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [y]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [y]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [y]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [y]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [y]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [y]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [w]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [w]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [w]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [w]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [w]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [w]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [w]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [w]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [w]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [ue]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [ue]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", f, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [f, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [f, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [L]
        }, L]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [f, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [f, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [f, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [f, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", L, D]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", _e]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [le]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", f]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", Z, _e]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", W, f]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", f]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", f]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [r]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [k]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [r]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [k]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...U(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", W, D]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", W, f]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [r]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: R()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", f]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", f]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [k]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [...$(), it]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", st]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, ct]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [r]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [O]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [O]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [O]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [j]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [j]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [j]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [i]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [i]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [i]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [i]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [i]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [i]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [i]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [i]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [i]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [i]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [i]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [i]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [i]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [i]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [i]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [l]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [l]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [l]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [l]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [l]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [l]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [l]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [l]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [l]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [k]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...U(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [l]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [l]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [k]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: U()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [c]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [c]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [c]
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": [c]
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": [c]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [c]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [c]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [c]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [c]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [c]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...U()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [W, f]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [W, D]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [r]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: N()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [r]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [k]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [W, D]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [r]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", L, ut]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [le]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [k]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...te(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": te()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [n]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [a]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [p]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", L, f]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [m]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [b]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [x]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [Y]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [q]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [n]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [a]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [p]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [m]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [b]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [x]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [k]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [Y]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [q]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [u]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [u]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [u]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", f]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: M()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", f]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: M()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", f]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [V]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [V]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [V]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [ie, f]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [de]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [de]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [ce]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [ce]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", f]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", r]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", f]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [r]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": R()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": R()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": R()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": R()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": R()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": R()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": R()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": R()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": R()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": R()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": R()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": R()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": R()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": R()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": R()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": R()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": R()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": R()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", f]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [r, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [W, D, _e]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [r, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}, gt = /* @__PURE__ */ Xr(bt), je = (...r) => gt(tr(r)), Ze = (r) => typeof r == "boolean" ? `${r}` : r === 0 ? "0" : r, Qe = tr, lr = (r, t) => (n) => {
  var a;
  if ((t == null ? void 0 : t.variants) == null) return Qe(r, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: c, defaultVariants: i } = t, u = Object.keys(c).map((m) => {
    const b = n == null ? void 0 : n[m], x = i == null ? void 0 : i[m];
    if (b === null) return null;
    const C = Ze(b) || Ze(x);
    return c[m][C];
  }), l = n && Object.entries(n).reduce((m, b) => {
    let [x, C] = b;
    return C === void 0 || (m[x] = C), m;
  }, {}), p = t == null || (a = t.compoundVariants) === null || a === void 0 ? void 0 : a.reduce((m, b) => {
    let { class: x, className: C, ...j } = b;
    return Object.entries(j).every((O) => {
      let [S, w] = O;
      return Array.isArray(w) ? w.includes({
        ...i,
        ...l
      }[S]) : {
        ...i,
        ...l
      }[S] === w;
    }) ? [
      ...m,
      x,
      C
    ] : m;
  }, []);
  return Qe(r, u, p, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
}, mt = lr(
  [
    "w-full",
    "rounded-md",
    "font-semibold",
    "focus:outline-none",
    "disabled:cursor-not-allowed"
  ],
  {
    variants: {
      variant: {
        solid: "",
        outline: "border-2",
        ghost: "transition-colors duration-300"
      },
      size: {
        sm: "px-4 py-2 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-6 py-3 text-lg"
      },
      colorscheme: {
        primary: "text-white"
      }
    },
    compoundVariants: [
      {
        variant: "solid",
        colorscheme: "primary",
        className: "bg-primary-600 hover:bg-primary-600"
      },
      {
        variant: "outline",
        colorscheme: "primary",
        className: "text-primary-600 border-primary-500 bg-transparent hover:bg-primary-100"
      },
      {
        variant: "ghost",
        colorscheme: "primary",
        className: "text-primary-600 bg-transparent hover:bg-primary-100"
      }
    ],
    defaultVariants: {
      variant: "solid",
      size: "md",
      colorscheme: "primary"
    }
  }
), xt = Te(
  ({ variant: r, size: t, colorscheme: n, className: a, ...c }, i) => /* @__PURE__ */ me.jsx(
    "button",
    {
      ref: i,
      className: je(mt({ variant: r, size: t, colorscheme: n, className: a })),
      ...c
    }
  )
), vt = lr([
  "w-full",
  "border",
  "border-gray-200",
  "p-2",
  "rounded-lg",
  "transition-all",
  "duration-100",
  "outline-none",
  "focus:outline-primary-500 ",
  "focus:border-transparent",
  "placeholder:text-gray-400",
  "placeholder:text-sm"
]), wt = Te(
  ({ className: r, ...t }, n) => /* @__PURE__ */ me.jsx(
    "input",
    {
      ref: n,
      type: "text",
      autoComplete: "off",
      className: je(vt({ className: r })),
      ...t
    }
  )
), ht = Te(({ ...r }, t) => /* @__PURE__ */ me.jsx("div", { ref: t, ...r })), Rt = ({ className: r, ...t }) => /* @__PURE__ */ me.jsx(ht, { className: je("flex flex-col items-start", r), ...t });
export {
  ht as Box,
  xt as Button,
  wt as Input,
  Rt as Stack
};
