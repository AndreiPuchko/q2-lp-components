var xu = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Qy(c) {
  return c && c.__esModule && Object.prototype.hasOwnProperty.call(c, "default") ? c.default : c;
}
var $r = { exports: {} }, Xn = {};
var Tv;
function w1() {
  if (Tv) return Xn;
  Tv = 1;
  var c = Symbol.for("react.transitional.element"), r = Symbol.for("react.fragment");
  function u(s, o, h) {
    var d = null;
    if (h !== void 0 && (d = "" + h), o.key !== void 0 && (d = "" + o.key), "key" in o) {
      h = {};
      for (var y in o)
        y !== "key" && (h[y] = o[y]);
    } else h = o;
    return o = h.ref, {
      $$typeof: c,
      type: s,
      key: d,
      ref: o !== void 0 ? o : null,
      props: h
    };
  }
  return Xn.Fragment = r, Xn.jsx = u, Xn.jsxs = u, Xn;
}
var Cv;
function N1() {
  return Cv || (Cv = 1, $r.exports = w1()), $r.exports;
}
var S = N1(), Fr = { exports: {} }, st = {};
var xv;
function H1() {
  if (xv) return st;
  xv = 1;
  var c = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), u = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), h = Symbol.for("react.consumer"), d = Symbol.for("react.context"), y = Symbol.for("react.forward_ref"), v = Symbol.for("react.suspense"), g = Symbol.for("react.memo"), M = Symbol.for("react.lazy"), z = Symbol.for("react.activity"), L = Symbol.iterator;
  function $(p) {
    return p === null || typeof p != "object" ? null : (p = L && p[L] || p["@@iterator"], typeof p == "function" ? p : null);
  }
  var U = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, Z = Object.assign, at = {};
  function J(p, O, H) {
    this.props = p, this.context = O, this.refs = at, this.updater = H || U;
  }
  J.prototype.isReactComponent = {}, J.prototype.setState = function(p, O) {
    if (typeof p != "object" && typeof p != "function" && p != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, p, O, "setState");
  }, J.prototype.forceUpdate = function(p) {
    this.updater.enqueueForceUpdate(this, p, "forceUpdate");
  };
  function V() {
  }
  V.prototype = J.prototype;
  function nt(p, O, H) {
    this.props = p, this.context = O, this.refs = at, this.updater = H || U;
  }
  var rt = nt.prototype = new V();
  rt.constructor = nt, Z(rt, J.prototype), rt.isPureReactComponent = !0;
  var xt = Array.isArray;
  function Tt() {
  }
  var lt = { H: null, A: null, T: null, S: null }, jt = Object.prototype.hasOwnProperty;
  function yt(p, O, H) {
    var k = H.ref;
    return {
      $$typeof: c,
      type: p,
      key: O,
      ref: k !== void 0 ? k : null,
      props: H
    };
  }
  function Zt(p, O) {
    return yt(p.type, O, p.props);
  }
  function j(p) {
    return typeof p == "object" && p !== null && p.$$typeof === c;
  }
  function Y(p) {
    var O = { "=": "=0", ":": "=2" };
    return "$" + p.replace(/[=:]/g, function(H) {
      return O[H];
    });
  }
  var F = /\/+/g;
  function I(p, O) {
    return typeof p == "object" && p !== null && p.key != null ? Y("" + p.key) : O.toString(36);
  }
  function Ht(p) {
    switch (p.status) {
      case "fulfilled":
        return p.value;
      case "rejected":
        throw p.reason;
      default:
        switch (typeof p.status == "string" ? p.then(Tt, Tt) : (p.status = "pending", p.then(
          function(O) {
            p.status === "pending" && (p.status = "fulfilled", p.value = O);
          },
          function(O) {
            p.status === "pending" && (p.status = "rejected", p.reason = O);
          }
        )), p.status) {
          case "fulfilled":
            return p.value;
          case "rejected":
            throw p.reason;
        }
    }
    throw p;
  }
  function T(p, O, H, k, et) {
    var ut = typeof p;
    (ut === "undefined" || ut === "boolean") && (p = null);
    var ft = !1;
    if (p === null) ft = !0;
    else
      switch (ut) {
        case "bigint":
        case "string":
        case "number":
          ft = !0;
          break;
        case "object":
          switch (p.$$typeof) {
            case c:
            case r:
              ft = !0;
              break;
            case M:
              return ft = p._init, T(
                ft(p._payload),
                O,
                H,
                k,
                et
              );
          }
      }
    if (ft)
      return et = et(p), ft = k === "" ? "." + I(p, 0) : k, xt(et) ? (H = "", ft != null && (H = ft.replace(F, "$&/") + "/"), T(et, O, H, "", function(Be) {
        return Be;
      })) : et != null && (j(et) && (et = Zt(
        et,
        H + (et.key == null || p && p.key === et.key ? "" : ("" + et.key).replace(
          F,
          "$&/"
        ) + "/") + ft
      )), O.push(et)), 1;
    ft = 0;
    var Ut = k === "" ? "." : k + ":";
    if (xt(p))
      for (var Et = 0; Et < p.length; Et++)
        k = p[Et], ut = Ut + I(k, Et), ft += T(
          k,
          O,
          H,
          ut,
          et
        );
    else if (Et = $(p), typeof Et == "function")
      for (p = Et.call(p), Et = 0; !(k = p.next()).done; )
        k = k.value, ut = Ut + I(k, Et++), ft += T(
          k,
          O,
          H,
          ut,
          et
        );
    else if (ut === "object") {
      if (typeof p.then == "function")
        return T(
          Ht(p),
          O,
          H,
          k,
          et
        );
      throw O = String(p), Error(
        "Objects are not valid as a React child (found: " + (O === "[object Object]" ? "object with keys {" + Object.keys(p).join(", ") + "}" : O) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return ft;
  }
  function R(p, O, H) {
    if (p == null) return p;
    var k = [], et = 0;
    return T(p, k, "", "", function(ut) {
      return O.call(H, ut, et++);
    }), k;
  }
  function B(p) {
    if (p._status === -1) {
      var O = p._result;
      O = O(), O.then(
        function(H) {
          (p._status === 0 || p._status === -1) && (p._status = 1, p._result = H);
        },
        function(H) {
          (p._status === 0 || p._status === -1) && (p._status = 2, p._result = H);
        }
      ), p._status === -1 && (p._status = 0, p._result = O);
    }
    if (p._status === 1) return p._result.default;
    throw p._result;
  }
  var G = typeof reportError == "function" ? reportError : function(p) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var O = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof p == "object" && p !== null && typeof p.message == "string" ? String(p.message) : String(p),
        error: p
      });
      if (!window.dispatchEvent(O)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", p);
      return;
    }
    console.error(p);
  }, K = {
    map: R,
    forEach: function(p, O, H) {
      R(
        p,
        function() {
          O.apply(this, arguments);
        },
        H
      );
    },
    count: function(p) {
      var O = 0;
      return R(p, function() {
        O++;
      }), O;
    },
    toArray: function(p) {
      return R(p, function(O) {
        return O;
      }) || [];
    },
    only: function(p) {
      if (!j(p))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return p;
    }
  };
  return st.Activity = z, st.Children = K, st.Component = J, st.Fragment = u, st.Profiler = o, st.PureComponent = nt, st.StrictMode = s, st.Suspense = v, st.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = lt, st.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(p) {
      return lt.H.useMemoCache(p);
    }
  }, st.cache = function(p) {
    return function() {
      return p.apply(null, arguments);
    };
  }, st.cacheSignal = function() {
    return null;
  }, st.cloneElement = function(p, O, H) {
    if (p == null)
      throw Error(
        "The argument must be a React element, but you passed " + p + "."
      );
    var k = Z({}, p.props), et = p.key;
    if (O != null)
      for (ut in O.key !== void 0 && (et = "" + O.key), O)
        !jt.call(O, ut) || ut === "key" || ut === "__self" || ut === "__source" || ut === "ref" && O.ref === void 0 || (k[ut] = O[ut]);
    var ut = arguments.length - 2;
    if (ut === 1) k.children = H;
    else if (1 < ut) {
      for (var ft = Array(ut), Ut = 0; Ut < ut; Ut++)
        ft[Ut] = arguments[Ut + 2];
      k.children = ft;
    }
    return yt(p.type, et, k);
  }, st.createContext = function(p) {
    return p = {
      $$typeof: d,
      _currentValue: p,
      _currentValue2: p,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, p.Provider = p, p.Consumer = {
      $$typeof: h,
      _context: p
    }, p;
  }, st.createElement = function(p, O, H) {
    var k, et = {}, ut = null;
    if (O != null)
      for (k in O.key !== void 0 && (ut = "" + O.key), O)
        jt.call(O, k) && k !== "key" && k !== "__self" && k !== "__source" && (et[k] = O[k]);
    var ft = arguments.length - 2;
    if (ft === 1) et.children = H;
    else if (1 < ft) {
      for (var Ut = Array(ft), Et = 0; Et < ft; Et++)
        Ut[Et] = arguments[Et + 2];
      et.children = Ut;
    }
    if (p && p.defaultProps)
      for (k in ft = p.defaultProps, ft)
        et[k] === void 0 && (et[k] = ft[k]);
    return yt(p, ut, et);
  }, st.createRef = function() {
    return { current: null };
  }, st.forwardRef = function(p) {
    return { $$typeof: y, render: p };
  }, st.isValidElement = j, st.lazy = function(p) {
    return {
      $$typeof: M,
      _payload: { _status: -1, _result: p },
      _init: B
    };
  }, st.memo = function(p, O) {
    return {
      $$typeof: g,
      type: p,
      compare: O === void 0 ? null : O
    };
  }, st.startTransition = function(p) {
    var O = lt.T, H = {};
    lt.T = H;
    try {
      var k = p(), et = lt.S;
      et !== null && et(H, k), typeof k == "object" && k !== null && typeof k.then == "function" && k.then(Tt, G);
    } catch (ut) {
      G(ut);
    } finally {
      O !== null && H.types !== null && (O.types = H.types), lt.T = O;
    }
  }, st.unstable_useCacheRefresh = function() {
    return lt.H.useCacheRefresh();
  }, st.use = function(p) {
    return lt.H.use(p);
  }, st.useActionState = function(p, O, H) {
    return lt.H.useActionState(p, O, H);
  }, st.useCallback = function(p, O) {
    return lt.H.useCallback(p, O);
  }, st.useContext = function(p) {
    return lt.H.useContext(p);
  }, st.useDebugValue = function() {
  }, st.useDeferredValue = function(p, O) {
    return lt.H.useDeferredValue(p, O);
  }, st.useEffect = function(p, O) {
    return lt.H.useEffect(p, O);
  }, st.useEffectEvent = function(p) {
    return lt.H.useEffectEvent(p);
  }, st.useId = function() {
    return lt.H.useId();
  }, st.useImperativeHandle = function(p, O, H) {
    return lt.H.useImperativeHandle(p, O, H);
  }, st.useInsertionEffect = function(p, O) {
    return lt.H.useInsertionEffect(p, O);
  }, st.useLayoutEffect = function(p, O) {
    return lt.H.useLayoutEffect(p, O);
  }, st.useMemo = function(p, O) {
    return lt.H.useMemo(p, O);
  }, st.useOptimistic = function(p, O) {
    return lt.H.useOptimistic(p, O);
  }, st.useReducer = function(p, O, H) {
    return lt.H.useReducer(p, O, H);
  }, st.useRef = function(p) {
    return lt.H.useRef(p);
  }, st.useState = function(p) {
    return lt.H.useState(p);
  }, st.useSyncExternalStore = function(p, O, H) {
    return lt.H.useSyncExternalStore(
      p,
      O,
      H
    );
  }, st.useTransition = function() {
    return lt.H.useTransition();
  }, st.version = "19.2.0", st;
}
var Ev;
function hf() {
  return Ev || (Ev = 1, Fr.exports = H1()), Fr.exports;
}
var it = hf();
const tt = /* @__PURE__ */ Qy(it);
var Ir = { exports: {} }, Kn = {}, Pr = { exports: {} }, tc = {};
var Av;
function U1() {
  return Av || (Av = 1, (function(c) {
    function r(T, R) {
      var B = T.length;
      T.push(R);
      t: for (; 0 < B; ) {
        var G = B - 1 >>> 1, K = T[G];
        if (0 < o(K, R))
          T[G] = R, T[B] = K, B = G;
        else break t;
      }
    }
    function u(T) {
      return T.length === 0 ? null : T[0];
    }
    function s(T) {
      if (T.length === 0) return null;
      var R = T[0], B = T.pop();
      if (B !== R) {
        T[0] = B;
        t: for (var G = 0, K = T.length, p = K >>> 1; G < p; ) {
          var O = 2 * (G + 1) - 1, H = T[O], k = O + 1, et = T[k];
          if (0 > o(H, B))
            k < K && 0 > o(et, H) ? (T[G] = et, T[k] = B, G = k) : (T[G] = H, T[O] = B, G = O);
          else if (k < K && 0 > o(et, B))
            T[G] = et, T[k] = B, G = k;
          else break t;
        }
      }
      return R;
    }
    function o(T, R) {
      var B = T.sortIndex - R.sortIndex;
      return B !== 0 ? B : T.id - R.id;
    }
    if (c.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var h = performance;
      c.unstable_now = function() {
        return h.now();
      };
    } else {
      var d = Date, y = d.now();
      c.unstable_now = function() {
        return d.now() - y;
      };
    }
    var v = [], g = [], M = 1, z = null, L = 3, $ = !1, U = !1, Z = !1, at = !1, J = typeof setTimeout == "function" ? setTimeout : null, V = typeof clearTimeout == "function" ? clearTimeout : null, nt = typeof setImmediate < "u" ? setImmediate : null;
    function rt(T) {
      for (var R = u(g); R !== null; ) {
        if (R.callback === null) s(g);
        else if (R.startTime <= T)
          s(g), R.sortIndex = R.expirationTime, r(v, R);
        else break;
        R = u(g);
      }
    }
    function xt(T) {
      if (Z = !1, rt(T), !U)
        if (u(v) !== null)
          U = !0, Tt || (Tt = !0, Y());
        else {
          var R = u(g);
          R !== null && Ht(xt, R.startTime - T);
        }
    }
    var Tt = !1, lt = -1, jt = 5, yt = -1;
    function Zt() {
      return at ? !0 : !(c.unstable_now() - yt < jt);
    }
    function j() {
      if (at = !1, Tt) {
        var T = c.unstable_now();
        yt = T;
        var R = !0;
        try {
          t: {
            U = !1, Z && (Z = !1, V(lt), lt = -1), $ = !0;
            var B = L;
            try {
              e: {
                for (rt(T), z = u(v); z !== null && !(z.expirationTime > T && Zt()); ) {
                  var G = z.callback;
                  if (typeof G == "function") {
                    z.callback = null, L = z.priorityLevel;
                    var K = G(
                      z.expirationTime <= T
                    );
                    if (T = c.unstable_now(), typeof K == "function") {
                      z.callback = K, rt(T), R = !0;
                      break e;
                    }
                    z === u(v) && s(v), rt(T);
                  } else s(v);
                  z = u(v);
                }
                if (z !== null) R = !0;
                else {
                  var p = u(g);
                  p !== null && Ht(
                    xt,
                    p.startTime - T
                  ), R = !1;
                }
              }
              break t;
            } finally {
              z = null, L = B, $ = !1;
            }
            R = void 0;
          }
        } finally {
          R ? Y() : Tt = !1;
        }
      }
    }
    var Y;
    if (typeof nt == "function")
      Y = function() {
        nt(j);
      };
    else if (typeof MessageChannel < "u") {
      var F = new MessageChannel(), I = F.port2;
      F.port1.onmessage = j, Y = function() {
        I.postMessage(null);
      };
    } else
      Y = function() {
        J(j, 0);
      };
    function Ht(T, R) {
      lt = J(function() {
        T(c.unstable_now());
      }, R);
    }
    c.unstable_IdlePriority = 5, c.unstable_ImmediatePriority = 1, c.unstable_LowPriority = 4, c.unstable_NormalPriority = 3, c.unstable_Profiling = null, c.unstable_UserBlockingPriority = 2, c.unstable_cancelCallback = function(T) {
      T.callback = null;
    }, c.unstable_forceFrameRate = function(T) {
      0 > T || 125 < T ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : jt = 0 < T ? Math.floor(1e3 / T) : 5;
    }, c.unstable_getCurrentPriorityLevel = function() {
      return L;
    }, c.unstable_next = function(T) {
      switch (L) {
        case 1:
        case 2:
        case 3:
          var R = 3;
          break;
        default:
          R = L;
      }
      var B = L;
      L = R;
      try {
        return T();
      } finally {
        L = B;
      }
    }, c.unstable_requestPaint = function() {
      at = !0;
    }, c.unstable_runWithPriority = function(T, R) {
      switch (T) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          T = 3;
      }
      var B = L;
      L = T;
      try {
        return R();
      } finally {
        L = B;
      }
    }, c.unstable_scheduleCallback = function(T, R, B) {
      var G = c.unstable_now();
      switch (typeof B == "object" && B !== null ? (B = B.delay, B = typeof B == "number" && 0 < B ? G + B : G) : B = G, T) {
        case 1:
          var K = -1;
          break;
        case 2:
          K = 250;
          break;
        case 5:
          K = 1073741823;
          break;
        case 4:
          K = 1e4;
          break;
        default:
          K = 5e3;
      }
      return K = B + K, T = {
        id: M++,
        callback: R,
        priorityLevel: T,
        startTime: B,
        expirationTime: K,
        sortIndex: -1
      }, B > G ? (T.sortIndex = B, r(g, T), u(v) === null && T === u(g) && (Z ? (V(lt), lt = -1) : Z = !0, Ht(xt, B - G))) : (T.sortIndex = K, r(v, T), U || $ || (U = !0, Tt || (Tt = !0, Y()))), T;
    }, c.unstable_shouldYield = Zt, c.unstable_wrapCallback = function(T) {
      var R = L;
      return function() {
        var B = L;
        L = R;
        try {
          return T.apply(this, arguments);
        } finally {
          L = B;
        }
      };
    };
  })(tc)), tc;
}
var Dv;
function B1() {
  return Dv || (Dv = 1, Pr.exports = U1()), Pr.exports;
}
var ec = { exports: {} }, ie = {};
var Mv;
function L1() {
  if (Mv) return ie;
  Mv = 1;
  var c = hf();
  function r(v) {
    var g = "https://react.dev/errors/" + v;
    if (1 < arguments.length) {
      g += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var M = 2; M < arguments.length; M++)
        g += "&args[]=" + encodeURIComponent(arguments[M]);
    }
    return "Minified React error #" + v + "; visit " + g + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function u() {
  }
  var s = {
    d: {
      f: u,
      r: function() {
        throw Error(r(522));
      },
      D: u,
      C: u,
      L: u,
      m: u,
      X: u,
      S: u,
      M: u
    },
    p: 0,
    findDOMNode: null
  }, o = Symbol.for("react.portal");
  function h(v, g, M) {
    var z = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: o,
      key: z == null ? null : "" + z,
      children: v,
      containerInfo: g,
      implementation: M
    };
  }
  var d = c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function y(v, g) {
    if (v === "font") return "";
    if (typeof g == "string")
      return g === "use-credentials" ? g : "";
  }
  return ie.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = s, ie.createPortal = function(v, g) {
    var M = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!g || g.nodeType !== 1 && g.nodeType !== 9 && g.nodeType !== 11)
      throw Error(r(299));
    return h(v, g, null, M);
  }, ie.flushSync = function(v) {
    var g = d.T, M = s.p;
    try {
      if (d.T = null, s.p = 2, v) return v();
    } finally {
      d.T = g, s.p = M, s.d.f();
    }
  }, ie.preconnect = function(v, g) {
    typeof v == "string" && (g ? (g = g.crossOrigin, g = typeof g == "string" ? g === "use-credentials" ? g : "" : void 0) : g = null, s.d.C(v, g));
  }, ie.prefetchDNS = function(v) {
    typeof v == "string" && s.d.D(v);
  }, ie.preinit = function(v, g) {
    if (typeof v == "string" && g && typeof g.as == "string") {
      var M = g.as, z = y(M, g.crossOrigin), L = typeof g.integrity == "string" ? g.integrity : void 0, $ = typeof g.fetchPriority == "string" ? g.fetchPriority : void 0;
      M === "style" ? s.d.S(
        v,
        typeof g.precedence == "string" ? g.precedence : void 0,
        {
          crossOrigin: z,
          integrity: L,
          fetchPriority: $
        }
      ) : M === "script" && s.d.X(v, {
        crossOrigin: z,
        integrity: L,
        fetchPriority: $,
        nonce: typeof g.nonce == "string" ? g.nonce : void 0
      });
    }
  }, ie.preinitModule = function(v, g) {
    if (typeof v == "string")
      if (typeof g == "object" && g !== null) {
        if (g.as == null || g.as === "script") {
          var M = y(
            g.as,
            g.crossOrigin
          );
          s.d.M(v, {
            crossOrigin: M,
            integrity: typeof g.integrity == "string" ? g.integrity : void 0,
            nonce: typeof g.nonce == "string" ? g.nonce : void 0
          });
        }
      } else g == null && s.d.M(v);
  }, ie.preload = function(v, g) {
    if (typeof v == "string" && typeof g == "object" && g !== null && typeof g.as == "string") {
      var M = g.as, z = y(M, g.crossOrigin);
      s.d.L(v, M, {
        crossOrigin: z,
        integrity: typeof g.integrity == "string" ? g.integrity : void 0,
        nonce: typeof g.nonce == "string" ? g.nonce : void 0,
        type: typeof g.type == "string" ? g.type : void 0,
        fetchPriority: typeof g.fetchPriority == "string" ? g.fetchPriority : void 0,
        referrerPolicy: typeof g.referrerPolicy == "string" ? g.referrerPolicy : void 0,
        imageSrcSet: typeof g.imageSrcSet == "string" ? g.imageSrcSet : void 0,
        imageSizes: typeof g.imageSizes == "string" ? g.imageSizes : void 0,
        media: typeof g.media == "string" ? g.media : void 0
      });
    }
  }, ie.preloadModule = function(v, g) {
    if (typeof v == "string")
      if (g) {
        var M = y(g.as, g.crossOrigin);
        s.d.m(v, {
          as: typeof g.as == "string" && g.as !== "script" ? g.as : void 0,
          crossOrigin: M,
          integrity: typeof g.integrity == "string" ? g.integrity : void 0
        });
      } else s.d.m(v);
  }, ie.requestFormReset = function(v) {
    s.d.r(v);
  }, ie.unstable_batchedUpdates = function(v, g) {
    return v(g);
  }, ie.useFormState = function(v, g, M) {
    return d.H.useFormState(v, g, M);
  }, ie.useFormStatus = function() {
    return d.H.useHostTransitionStatus();
  }, ie.version = "19.2.0", ie;
}
var Ov;
function G1() {
  if (Ov) return ec.exports;
  Ov = 1;
  function c() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c);
      } catch (r) {
        console.error(r);
      }
  }
  return c(), ec.exports = L1(), ec.exports;
}
var zv;
function k1() {
  if (zv) return Kn;
  zv = 1;
  var c = B1(), r = hf(), u = G1();
  function s(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++)
        e += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function o(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
  }
  function h(t) {
    var e = t, a = t;
    if (t.alternate) for (; e.return; ) e = e.return;
    else {
      t = e;
      do
        e = t, (e.flags & 4098) !== 0 && (a = e.return), t = e.return;
      while (t);
    }
    return e.tag === 3 ? a : null;
  }
  function d(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
    }
    return null;
  }
  function y(t) {
    if (t.tag === 31) {
      var e = t.memoizedState;
      if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
    }
    return null;
  }
  function v(t) {
    if (h(t) !== t)
      throw Error(s(188));
  }
  function g(t) {
    var e = t.alternate;
    if (!e) {
      if (e = h(t), e === null) throw Error(s(188));
      return e !== t ? null : t;
    }
    for (var a = t, l = e; ; ) {
      var n = a.return;
      if (n === null) break;
      var i = n.alternate;
      if (i === null) {
        if (l = n.return, l !== null) {
          a = l;
          continue;
        }
        break;
      }
      if (n.child === i.child) {
        for (i = n.child; i; ) {
          if (i === a) return v(n), t;
          if (i === l) return v(n), e;
          i = i.sibling;
        }
        throw Error(s(188));
      }
      if (a.return !== l.return) a = n, l = i;
      else {
        for (var f = !1, m = n.child; m; ) {
          if (m === a) {
            f = !0, a = n, l = i;
            break;
          }
          if (m === l) {
            f = !0, l = n, a = i;
            break;
          }
          m = m.sibling;
        }
        if (!f) {
          for (m = i.child; m; ) {
            if (m === a) {
              f = !0, a = i, l = n;
              break;
            }
            if (m === l) {
              f = !0, l = i, a = n;
              break;
            }
            m = m.sibling;
          }
          if (!f) throw Error(s(189));
        }
      }
      if (a.alternate !== l) throw Error(s(190));
    }
    if (a.tag !== 3) throw Error(s(188));
    return a.stateNode.current === a ? t : e;
  }
  function M(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (e = M(t), e !== null) return e;
      t = t.sibling;
    }
    return null;
  }
  var z = Object.assign, L = Symbol.for("react.element"), $ = Symbol.for("react.transitional.element"), U = Symbol.for("react.portal"), Z = Symbol.for("react.fragment"), at = Symbol.for("react.strict_mode"), J = Symbol.for("react.profiler"), V = Symbol.for("react.consumer"), nt = Symbol.for("react.context"), rt = Symbol.for("react.forward_ref"), xt = Symbol.for("react.suspense"), Tt = Symbol.for("react.suspense_list"), lt = Symbol.for("react.memo"), jt = Symbol.for("react.lazy"), yt = Symbol.for("react.activity"), Zt = Symbol.for("react.memo_cache_sentinel"), j = Symbol.iterator;
  function Y(t) {
    return t === null || typeof t != "object" ? null : (t = j && t[j] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var F = Symbol.for("react.client.reference");
  function I(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === F ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case Z:
        return "Fragment";
      case J:
        return "Profiler";
      case at:
        return "StrictMode";
      case xt:
        return "Suspense";
      case Tt:
        return "SuspenseList";
      case yt:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case U:
          return "Portal";
        case nt:
          return t.displayName || "Context";
        case V:
          return (t._context.displayName || "Context") + ".Consumer";
        case rt:
          var e = t.render;
          return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
        case lt:
          return e = t.displayName || null, e !== null ? e : I(t.type) || "Memo";
        case jt:
          e = t._payload, t = t._init;
          try {
            return I(t(e));
          } catch {
          }
      }
    return null;
  }
  var Ht = Array.isArray, T = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, R = u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, B = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, G = [], K = -1;
  function p(t) {
    return { current: t };
  }
  function O(t) {
    0 > K || (t.current = G[K], G[K] = null, K--);
  }
  function H(t, e) {
    K++, G[K] = t.current, t.current = e;
  }
  var k = p(null), et = p(null), ut = p(null), ft = p(null);
  function Ut(t, e) {
    switch (H(ut, e), H(et, t), H(k, null), e.nodeType) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? Xm(t) : 0;
        break;
      default:
        if (t = e.tagName, e = e.namespaceURI)
          e = Xm(e), t = Km(e, t);
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    O(k), H(k, t);
  }
  function Et() {
    O(k), O(et), O(ut);
  }
  function Be(t) {
    t.memoizedState !== null && H(ft, t);
    var e = k.current, a = Km(e, t.type);
    e !== a && (H(et, t), H(k, a));
  }
  function Ya(t) {
    et.current === t && (O(k), O(et)), ft.current === t && (O(ft), kn._currentValue = B);
  }
  var Wl, ni;
  function Ze(t) {
    if (Wl === void 0)
      try {
        throw Error();
      } catch (a) {
        var e = a.stack.trim().match(/\n( *(at )?)/);
        Wl = e && e[1] || "", ni = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Wl + t + ni;
  }
  var Ct = !1;
  function ma(t, e) {
    if (!t || Ct) return "";
    Ct = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var l = {
        DetermineComponentFrameRoot: function() {
          try {
            if (e) {
              var N = function() {
                throw Error();
              };
              if (Object.defineProperty(N.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(N, []);
                } catch (D) {
                  var A = D;
                }
                Reflect.construct(t, [], N);
              } else {
                try {
                  N.call();
                } catch (D) {
                  A = D;
                }
                t.call(N.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (D) {
                A = D;
              }
              (N = t()) && typeof N.catch == "function" && N.catch(function() {
              });
            }
          } catch (D) {
            if (D && A && typeof D.stack == "string")
              return [D.stack, A.stack];
          }
          return [null, null];
        }
      };
      l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var n = Object.getOwnPropertyDescriptor(
        l.DetermineComponentFrameRoot,
        "name"
      );
      n && n.configurable && Object.defineProperty(
        l.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var i = l.DetermineComponentFrameRoot(), f = i[0], m = i[1];
      if (f && m) {
        var b = f.split(`
`), E = m.split(`
`);
        for (n = l = 0; l < b.length && !b[l].includes("DetermineComponentFrameRoot"); )
          l++;
        for (; n < E.length && !E[n].includes(
          "DetermineComponentFrameRoot"
        ); )
          n++;
        if (l === b.length || n === E.length)
          for (l = b.length - 1, n = E.length - 1; 1 <= l && 0 <= n && b[l] !== E[n]; )
            n--;
        for (; 1 <= l && 0 <= n; l--, n--)
          if (b[l] !== E[n]) {
            if (l !== 1 || n !== 1)
              do
                if (l--, n--, 0 > n || b[l] !== E[n]) {
                  var q = `
` + b[l].replace(" at new ", " at ");
                  return t.displayName && q.includes("<anonymous>") && (q = q.replace("<anonymous>", t.displayName)), q;
                }
              while (1 <= l && 0 <= n);
            break;
          }
      }
    } finally {
      Ct = !1, Error.prepareStackTrace = a;
    }
    return (a = t ? t.displayName || t.name : "") ? Ze(a) : "";
  }
  function St(t, e) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return Ze(t.type);
      case 16:
        return Ze("Lazy");
      case 13:
        return t.child !== e && e !== null ? Ze("Suspense Fallback") : Ze("Suspense");
      case 19:
        return Ze("SuspenseList");
      case 0:
      case 15:
        return ma(t.type, !1);
      case 11:
        return ma(t.type.render, !1);
      case 1:
        return ma(t.type, !0);
      case 31:
        return Ze("Activity");
      default:
        return "";
    }
  }
  function Je(t) {
    try {
      var e = "", a = null;
      do
        e += St(t, a), a = t, t = t.return;
      while (t);
      return e;
    } catch (l) {
      return `
Error generating stack: ` + l.message + `
` + l.stack;
    }
  }
  var Le = Object.prototype.hasOwnProperty, $l = c.unstable_scheduleCallback, va = c.unstable_cancelCallback, Ge = c.unstable_shouldYield, ne = c.unstable_requestPaint, Wt = c.unstable_now, rl = c.unstable_getCurrentPriorityLevel, ii = c.unstable_ImmediatePriority, Fl = c.unstable_UserBlockingPriority, we = c.unstable_NormalPriority, ui = c.unstable_LowPriority, Il = c.unstable_IdlePriority, Uu = c.log, si = c.unstable_setDisableYieldValue, se = null, Gt = null;
  function ga(t) {
    if (typeof Uu == "function" && si(t), Gt && typeof Gt.setStrictMode == "function")
      try {
        Gt.setStrictMode(se, t);
      } catch {
      }
  }
  var ve = Math.clz32 ? Math.clz32 : Sp, pp = Math.log, bp = Math.LN2;
  function Sp(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (pp(t) / bp | 0) | 0;
  }
  var ri = 256, ci = 262144, oi = 4194304;
  function Qa(t) {
    var e = t & 42;
    if (e !== 0) return e;
    switch (t & -t) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return t & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function fi(t, e, a) {
    var l = t.pendingLanes;
    if (l === 0) return 0;
    var n = 0, i = t.suspendedLanes, f = t.pingedLanes;
    t = t.warmLanes;
    var m = l & 134217727;
    return m !== 0 ? (l = m & ~i, l !== 0 ? n = Qa(l) : (f &= m, f !== 0 ? n = Qa(f) : a || (a = m & ~t, a !== 0 && (n = Qa(a))))) : (m = l & ~i, m !== 0 ? n = Qa(m) : f !== 0 ? n = Qa(f) : a || (a = l & ~t, a !== 0 && (n = Qa(a)))), n === 0 ? 0 : e !== 0 && e !== n && (e & i) === 0 && (i = n & -n, a = e & -e, i >= a || i === 32 && (a & 4194048) !== 0) ? e : n;
  }
  function Pl(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function _p(t, e) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return e + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Af() {
    var t = oi;
    return oi <<= 1, (oi & 62914560) === 0 && (oi = 4194304), t;
  }
  function Bu(t) {
    for (var e = [], a = 0; 31 > a; a++) e.push(t);
    return e;
  }
  function tn(t, e) {
    t.pendingLanes |= e, e !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
  }
  function Tp(t, e, a, l, n, i) {
    var f = t.pendingLanes;
    t.pendingLanes = a, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= a, t.entangledLanes &= a, t.errorRecoveryDisabledLanes &= a, t.shellSuspendCounter = 0;
    var m = t.entanglements, b = t.expirationTimes, E = t.hiddenUpdates;
    for (a = f & ~a; 0 < a; ) {
      var q = 31 - ve(a), N = 1 << q;
      m[q] = 0, b[q] = -1;
      var A = E[q];
      if (A !== null)
        for (E[q] = null, q = 0; q < A.length; q++) {
          var D = A[q];
          D !== null && (D.lane &= -536870913);
        }
      a &= ~N;
    }
    l !== 0 && Df(t, l, 0), i !== 0 && n === 0 && t.tag !== 0 && (t.suspendedLanes |= i & ~(f & ~e));
  }
  function Df(t, e, a) {
    t.pendingLanes |= e, t.suspendedLanes &= ~e;
    var l = 31 - ve(e);
    t.entangledLanes |= e, t.entanglements[l] = t.entanglements[l] | 1073741824 | a & 261930;
  }
  function Mf(t, e) {
    var a = t.entangledLanes |= e;
    for (t = t.entanglements; a; ) {
      var l = 31 - ve(a), n = 1 << l;
      n & e | t[l] & e && (t[l] |= e), a &= ~n;
    }
  }
  function Of(t, e) {
    var a = e & -e;
    return a = (a & 42) !== 0 ? 1 : Lu(a), (a & (t.suspendedLanes | e)) !== 0 ? 0 : a;
  }
  function Lu(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function Gu(t) {
    return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function zf() {
    var t = R.p;
    return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : vv(t.type));
  }
  function jf(t, e) {
    var a = R.p;
    try {
      return R.p = t, e();
    } finally {
      R.p = a;
    }
  }
  var ya = Math.random().toString(36).slice(2), It = "__reactFiber$" + ya, re = "__reactProps$" + ya, cl = "__reactContainer$" + ya, ku = "__reactEvents$" + ya, Cp = "__reactListeners$" + ya, xp = "__reactHandles$" + ya, Rf = "__reactResources$" + ya, en = "__reactMarker$" + ya;
  function Yu(t) {
    delete t[It], delete t[re], delete t[ku], delete t[Cp], delete t[xp];
  }
  function ol(t) {
    var e = t[It];
    if (e) return e;
    for (var a = t.parentNode; a; ) {
      if (e = a[cl] || a[It]) {
        if (a = e.alternate, e.child !== null || a !== null && a.child !== null)
          for (t = Pm(t); t !== null; ) {
            if (a = t[It]) return a;
            t = Pm(t);
          }
        return e;
      }
      t = a, a = t.parentNode;
    }
    return null;
  }
  function fl(t) {
    if (t = t[It] || t[cl]) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 31 || e === 26 || e === 27 || e === 3)
        return t;
    }
    return null;
  }
  function an(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(s(33));
  }
  function hl(t) {
    var e = t[Rf];
    return e || (e = t[Rf] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), e;
  }
  function $t(t) {
    t[en] = !0;
  }
  var qf = /* @__PURE__ */ new Set(), wf = {};
  function Va(t, e) {
    dl(t, e), dl(t + "Capture", e);
  }
  function dl(t, e) {
    for (wf[t] = e, t = 0; t < e.length; t++)
      qf.add(e[t]);
  }
  var Ep = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Nf = {}, Hf = {};
  function Ap(t) {
    return Le.call(Hf, t) ? !0 : Le.call(Nf, t) ? !1 : Ep.test(t) ? Hf[t] = !0 : (Nf[t] = !0, !1);
  }
  function hi(t, e, a) {
    if (Ap(e))
      if (a === null) t.removeAttribute(e);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(e);
            return;
          case "boolean":
            var l = e.toLowerCase().slice(0, 5);
            if (l !== "data-" && l !== "aria-") {
              t.removeAttribute(e);
              return;
            }
        }
        t.setAttribute(e, "" + a);
      }
  }
  function di(t, e, a) {
    if (a === null) t.removeAttribute(e);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttribute(e, "" + a);
    }
  }
  function We(t, e, a, l) {
    if (l === null) t.removeAttribute(a);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(a);
          return;
      }
      t.setAttributeNS(e, a, "" + l);
    }
  }
  function xe(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function Uf(t) {
    var e = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
  }
  function Dp(t, e, a) {
    var l = Object.getOwnPropertyDescriptor(
      t.constructor.prototype,
      e
    );
    if (!t.hasOwnProperty(e) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var n = l.get, i = l.set;
      return Object.defineProperty(t, e, {
        configurable: !0,
        get: function() {
          return n.call(this);
        },
        set: function(f) {
          a = "" + f, i.call(this, f);
        }
      }), Object.defineProperty(t, e, {
        enumerable: l.enumerable
      }), {
        getValue: function() {
          return a;
        },
        setValue: function(f) {
          a = "" + f;
        },
        stopTracking: function() {
          t._valueTracker = null, delete t[e];
        }
      };
    }
  }
  function Qu(t) {
    if (!t._valueTracker) {
      var e = Uf(t) ? "checked" : "value";
      t._valueTracker = Dp(
        t,
        e,
        "" + t[e]
      );
    }
  }
  function Bf(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var a = e.getValue(), l = "";
    return t && (l = Uf(t) ? t.checked ? "true" : "false" : t.value), t = l, t !== a ? (e.setValue(t), !0) : !1;
  }
  function mi(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var Mp = /[\n"\\]/g;
  function Ee(t) {
    return t.replace(
      Mp,
      function(e) {
        return "\\" + e.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Vu(t, e, a, l, n, i, f, m) {
    t.name = "", f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? t.type = f : t.removeAttribute("type"), e != null ? f === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + xe(e)) : t.value !== "" + xe(e) && (t.value = "" + xe(e)) : f !== "submit" && f !== "reset" || t.removeAttribute("value"), e != null ? Xu(t, f, xe(e)) : a != null ? Xu(t, f, xe(a)) : l != null && t.removeAttribute("value"), n == null && i != null && (t.defaultChecked = !!i), n != null && (t.checked = n && typeof n != "function" && typeof n != "symbol"), m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" ? t.name = "" + xe(m) : t.removeAttribute("name");
  }
  function Lf(t, e, a, l, n, i, f, m) {
    if (i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (t.type = i), e != null || a != null) {
      if (!(i !== "submit" && i !== "reset" || e != null)) {
        Qu(t);
        return;
      }
      a = a != null ? "" + xe(a) : "", e = e != null ? "" + xe(e) : a, m || e === t.value || (t.value = e), t.defaultValue = e;
    }
    l = l ?? n, l = typeof l != "function" && typeof l != "symbol" && !!l, t.checked = m ? t.checked : !!l, t.defaultChecked = !!l, f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (t.name = f), Qu(t);
  }
  function Xu(t, e, a) {
    e === "number" && mi(t.ownerDocument) === t || t.defaultValue === "" + a || (t.defaultValue = "" + a);
  }
  function ml(t, e, a, l) {
    if (t = t.options, e) {
      e = {};
      for (var n = 0; n < a.length; n++)
        e["$" + a[n]] = !0;
      for (a = 0; a < t.length; a++)
        n = e.hasOwnProperty("$" + t[a].value), t[a].selected !== n && (t[a].selected = n), n && l && (t[a].defaultSelected = !0);
    } else {
      for (a = "" + xe(a), e = null, n = 0; n < t.length; n++) {
        if (t[n].value === a) {
          t[n].selected = !0, l && (t[n].defaultSelected = !0);
          return;
        }
        e !== null || t[n].disabled || (e = t[n]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function Gf(t, e, a) {
    if (e != null && (e = "" + xe(e), e !== t.value && (t.value = e), a == null)) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = a != null ? "" + xe(a) : "";
  }
  function kf(t, e, a, l) {
    if (e == null) {
      if (l != null) {
        if (a != null) throw Error(s(92));
        if (Ht(l)) {
          if (1 < l.length) throw Error(s(93));
          l = l[0];
        }
        a = l;
      }
      a == null && (a = ""), e = a;
    }
    a = xe(e), t.defaultValue = a, l = t.textContent, l === a && l !== "" && l !== null && (t.value = l), Qu(t);
  }
  function vl(t, e) {
    if (e) {
      var a = t.firstChild;
      if (a && a === t.lastChild && a.nodeType === 3) {
        a.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var Op = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Yf(t, e, a) {
    var l = e.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === "" ? l ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : l ? t.setProperty(e, a) : typeof a != "number" || a === 0 || Op.has(e) ? e === "float" ? t.cssFloat = a : t[e] = ("" + a).trim() : t[e] = a + "px";
  }
  function Qf(t, e, a) {
    if (e != null && typeof e != "object")
      throw Error(s(62));
    if (t = t.style, a != null) {
      for (var l in a)
        !a.hasOwnProperty(l) || e != null && e.hasOwnProperty(l) || (l.indexOf("--") === 0 ? t.setProperty(l, "") : l === "float" ? t.cssFloat = "" : t[l] = "");
      for (var n in e)
        l = e[n], e.hasOwnProperty(n) && a[n] !== l && Yf(t, n, l);
    } else
      for (var i in e)
        e.hasOwnProperty(i) && Yf(t, i, e[i]);
  }
  function Ku(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var zp = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), jp = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function vi(t) {
    return jp.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
  }
  function $e() {
  }
  var Zu = null;
  function Ju(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var gl = null, yl = null;
  function Vf(t) {
    var e = fl(t);
    if (e && (t = e.stateNode)) {
      var a = t[re] || null;
      t: switch (t = e.stateNode, e.type) {
        case "input":
          if (Vu(
            t,
            a.value,
            a.defaultValue,
            a.defaultValue,
            a.checked,
            a.defaultChecked,
            a.type,
            a.name
          ), e = a.name, a.type === "radio" && e != null) {
            for (a = t; a.parentNode; ) a = a.parentNode;
            for (a = a.querySelectorAll(
              'input[name="' + Ee(
                "" + e
              ) + '"][type="radio"]'
            ), e = 0; e < a.length; e++) {
              var l = a[e];
              if (l !== t && l.form === t.form) {
                var n = l[re] || null;
                if (!n) throw Error(s(90));
                Vu(
                  l,
                  n.value,
                  n.defaultValue,
                  n.defaultValue,
                  n.checked,
                  n.defaultChecked,
                  n.type,
                  n.name
                );
              }
            }
            for (e = 0; e < a.length; e++)
              l = a[e], l.form === t.form && Bf(l);
          }
          break t;
        case "textarea":
          Gf(t, a.value, a.defaultValue);
          break t;
        case "select":
          e = a.value, e != null && ml(t, !!a.multiple, e, !1);
      }
    }
  }
  var Wu = !1;
  function Xf(t, e, a) {
    if (Wu) return t(e, a);
    Wu = !0;
    try {
      var l = t(e);
      return l;
    } finally {
      if (Wu = !1, (gl !== null || yl !== null) && (au(), gl && (e = gl, t = yl, yl = gl = null, Vf(e), t)))
        for (e = 0; e < t.length; e++) Vf(t[e]);
    }
  }
  function ln(t, e) {
    var a = t.stateNode;
    if (a === null) return null;
    var l = a[re] || null;
    if (l === null) return null;
    a = l[e];
    t: switch (e) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (l = !l.disabled) || (t = t.type, l = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !l;
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (a && typeof a != "function")
      throw Error(
        s(231, e, typeof a)
      );
    return a;
  }
  var Fe = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), $u = !1;
  if (Fe)
    try {
      var nn = {};
      Object.defineProperty(nn, "passive", {
        get: function() {
          $u = !0;
        }
      }), window.addEventListener("test", nn, nn), window.removeEventListener("test", nn, nn);
    } catch {
      $u = !1;
    }
  var pa = null, Fu = null, gi = null;
  function Kf() {
    if (gi) return gi;
    var t, e = Fu, a = e.length, l, n = "value" in pa ? pa.value : pa.textContent, i = n.length;
    for (t = 0; t < a && e[t] === n[t]; t++) ;
    var f = a - t;
    for (l = 1; l <= f && e[a - l] === n[i - l]; l++) ;
    return gi = n.slice(t, 1 < l ? 1 - l : void 0);
  }
  function yi(t) {
    var e = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
  }
  function pi() {
    return !0;
  }
  function Zf() {
    return !1;
  }
  function ce(t) {
    function e(a, l, n, i, f) {
      this._reactName = a, this._targetInst = n, this.type = l, this.nativeEvent = i, this.target = f, this.currentTarget = null;
      for (var m in t)
        t.hasOwnProperty(m) && (a = t[m], this[m] = a ? a(i) : i[m]);
      return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? pi : Zf, this.isPropagationStopped = Zf, this;
    }
    return z(e.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var a = this.nativeEvent;
        a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = pi);
      },
      stopPropagation: function() {
        var a = this.nativeEvent;
        a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = pi);
      },
      persist: function() {
      },
      isPersistent: pi
    }), e;
  }
  var Xa = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, bi = ce(Xa), un = z({}, Xa, { view: 0, detail: 0 }), Rp = ce(un), Iu, Pu, sn, Si = z({}, un, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: es,
    button: 0,
    buttons: 0,
    relatedTarget: function(t) {
      return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
    },
    movementX: function(t) {
      return "movementX" in t ? t.movementX : (t !== sn && (sn && t.type === "mousemove" ? (Iu = t.screenX - sn.screenX, Pu = t.screenY - sn.screenY) : Pu = Iu = 0, sn = t), Iu);
    },
    movementY: function(t) {
      return "movementY" in t ? t.movementY : Pu;
    }
  }), Jf = ce(Si), qp = z({}, Si, { dataTransfer: 0 }), wp = ce(qp), Np = z({}, un, { relatedTarget: 0 }), ts = ce(Np), Hp = z({}, Xa, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Up = ce(Hp), Bp = z({}, Xa, {
    clipboardData: function(t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    }
  }), Lp = ce(Bp), Gp = z({}, Xa, { data: 0 }), Wf = ce(Gp), kp = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, Yp = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, Qp = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Vp(t) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(t) : (t = Qp[t]) ? !!e[t] : !1;
  }
  function es() {
    return Vp;
  }
  var Xp = z({}, un, {
    key: function(t) {
      if (t.key) {
        var e = kp[t.key] || t.key;
        if (e !== "Unidentified") return e;
      }
      return t.type === "keypress" ? (t = yi(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? Yp[t.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: es,
    charCode: function(t) {
      return t.type === "keypress" ? yi(t) : 0;
    },
    keyCode: function(t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function(t) {
      return t.type === "keypress" ? yi(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    }
  }), Kp = ce(Xp), Zp = z({}, Si, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), $f = ce(Zp), Jp = z({}, un, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: es
  }), Wp = ce(Jp), $p = z({}, Xa, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Fp = ce($p), Ip = z({}, Si, {
    deltaX: function(t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function(t) {
      return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Pp = ce(Ip), t0 = z({}, Xa, {
    newState: 0,
    oldState: 0
  }), e0 = ce(t0), a0 = [9, 13, 27, 32], as = Fe && "CompositionEvent" in window, rn = null;
  Fe && "documentMode" in document && (rn = document.documentMode);
  var l0 = Fe && "TextEvent" in window && !rn, Ff = Fe && (!as || rn && 8 < rn && 11 >= rn), If = " ", Pf = !1;
  function th(t, e) {
    switch (t) {
      case "keyup":
        return a0.indexOf(e.keyCode) !== -1;
      case "keydown":
        return e.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function eh(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
  }
  var pl = !1;
  function n0(t, e) {
    switch (t) {
      case "compositionend":
        return eh(e);
      case "keypress":
        return e.which !== 32 ? null : (Pf = !0, If);
      case "textInput":
        return t = e.data, t === If && Pf ? null : t;
      default:
        return null;
    }
  }
  function i0(t, e) {
    if (pl)
      return t === "compositionend" || !as && th(t, e) ? (t = Kf(), gi = Fu = pa = null, pl = !1, t) : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
          if (e.char && 1 < e.char.length)
            return e.char;
          if (e.which) return String.fromCharCode(e.which);
        }
        return null;
      case "compositionend":
        return Ff && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var u0 = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function ah(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!u0[t.type] : e === "textarea";
  }
  function lh(t, e, a, l) {
    gl ? yl ? yl.push(l) : yl = [l] : gl = l, e = cu(e, "onChange"), 0 < e.length && (a = new bi(
      "onChange",
      "change",
      null,
      a,
      l
    ), t.push({ event: a, listeners: e }));
  }
  var cn = null, on = null;
  function s0(t) {
    Lm(t, 0);
  }
  function _i(t) {
    var e = an(t);
    if (Bf(e)) return t;
  }
  function nh(t, e) {
    if (t === "change") return e;
  }
  var ih = !1;
  if (Fe) {
    var ls;
    if (Fe) {
      var ns = "oninput" in document;
      if (!ns) {
        var uh = document.createElement("div");
        uh.setAttribute("oninput", "return;"), ns = typeof uh.oninput == "function";
      }
      ls = ns;
    } else ls = !1;
    ih = ls && (!document.documentMode || 9 < document.documentMode);
  }
  function sh() {
    cn && (cn.detachEvent("onpropertychange", rh), on = cn = null);
  }
  function rh(t) {
    if (t.propertyName === "value" && _i(on)) {
      var e = [];
      lh(
        e,
        on,
        t,
        Ju(t)
      ), Xf(s0, e);
    }
  }
  function r0(t, e, a) {
    t === "focusin" ? (sh(), cn = e, on = a, cn.attachEvent("onpropertychange", rh)) : t === "focusout" && sh();
  }
  function c0(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return _i(on);
  }
  function o0(t, e) {
    if (t === "click") return _i(e);
  }
  function f0(t, e) {
    if (t === "input" || t === "change")
      return _i(e);
  }
  function h0(t, e) {
    return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e;
  }
  var ge = typeof Object.is == "function" ? Object.is : h0;
  function fn(t, e) {
    if (ge(t, e)) return !0;
    if (typeof t != "object" || t === null || typeof e != "object" || e === null)
      return !1;
    var a = Object.keys(t), l = Object.keys(e);
    if (a.length !== l.length) return !1;
    for (l = 0; l < a.length; l++) {
      var n = a[l];
      if (!Le.call(e, n) || !ge(t[n], e[n]))
        return !1;
    }
    return !0;
  }
  function ch(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function oh(t, e) {
    var a = ch(t);
    t = 0;
    for (var l; a; ) {
      if (a.nodeType === 3) {
        if (l = t + a.textContent.length, t <= e && l >= e)
          return { node: a, offset: e - t };
        t = l;
      }
      t: {
        for (; a; ) {
          if (a.nextSibling) {
            a = a.nextSibling;
            break t;
          }
          a = a.parentNode;
        }
        a = void 0;
      }
      a = ch(a);
    }
  }
  function fh(t, e) {
    return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? fh(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1;
  }
  function hh(t) {
    t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
    for (var e = mi(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var a = typeof e.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) t = e.contentWindow;
      else break;
      e = mi(t.document);
    }
    return e;
  }
  function is(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true");
  }
  var d0 = Fe && "documentMode" in document && 11 >= document.documentMode, bl = null, us = null, hn = null, ss = !1;
  function dh(t, e, a) {
    var l = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    ss || bl == null || bl !== mi(l) || (l = bl, "selectionStart" in l && is(l) ? l = { start: l.selectionStart, end: l.selectionEnd } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(), l = {
      anchorNode: l.anchorNode,
      anchorOffset: l.anchorOffset,
      focusNode: l.focusNode,
      focusOffset: l.focusOffset
    }), hn && fn(hn, l) || (hn = l, l = cu(us, "onSelect"), 0 < l.length && (e = new bi(
      "onSelect",
      "select",
      null,
      e,
      a
    ), t.push({ event: e, listeners: l }), e.target = bl)));
  }
  function Ka(t, e) {
    var a = {};
    return a[t.toLowerCase()] = e.toLowerCase(), a["Webkit" + t] = "webkit" + e, a["Moz" + t] = "moz" + e, a;
  }
  var Sl = {
    animationend: Ka("Animation", "AnimationEnd"),
    animationiteration: Ka("Animation", "AnimationIteration"),
    animationstart: Ka("Animation", "AnimationStart"),
    transitionrun: Ka("Transition", "TransitionRun"),
    transitionstart: Ka("Transition", "TransitionStart"),
    transitioncancel: Ka("Transition", "TransitionCancel"),
    transitionend: Ka("Transition", "TransitionEnd")
  }, rs = {}, mh = {};
  Fe && (mh = document.createElement("div").style, "AnimationEvent" in window || (delete Sl.animationend.animation, delete Sl.animationiteration.animation, delete Sl.animationstart.animation), "TransitionEvent" in window || delete Sl.transitionend.transition);
  function Za(t) {
    if (rs[t]) return rs[t];
    if (!Sl[t]) return t;
    var e = Sl[t], a;
    for (a in e)
      if (e.hasOwnProperty(a) && a in mh)
        return rs[t] = e[a];
    return t;
  }
  var vh = Za("animationend"), gh = Za("animationiteration"), yh = Za("animationstart"), m0 = Za("transitionrun"), v0 = Za("transitionstart"), g0 = Za("transitioncancel"), ph = Za("transitionend"), bh = /* @__PURE__ */ new Map(), cs = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  cs.push("scrollEnd");
  function Ne(t, e) {
    bh.set(t, e), Va(e, [t]);
  }
  var Ti = typeof reportError == "function" ? reportError : function(t) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var e = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
        error: t
      });
      if (!window.dispatchEvent(e)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", t);
      return;
    }
    console.error(t);
  }, Ae = [], _l = 0, os = 0;
  function Ci() {
    for (var t = _l, e = os = _l = 0; e < t; ) {
      var a = Ae[e];
      Ae[e++] = null;
      var l = Ae[e];
      Ae[e++] = null;
      var n = Ae[e];
      Ae[e++] = null;
      var i = Ae[e];
      if (Ae[e++] = null, l !== null && n !== null) {
        var f = l.pending;
        f === null ? n.next = n : (n.next = f.next, f.next = n), l.pending = n;
      }
      i !== 0 && Sh(a, n, i);
    }
  }
  function xi(t, e, a, l) {
    Ae[_l++] = t, Ae[_l++] = e, Ae[_l++] = a, Ae[_l++] = l, os |= l, t.lanes |= l, t = t.alternate, t !== null && (t.lanes |= l);
  }
  function fs(t, e, a, l) {
    return xi(t, e, a, l), Ei(t);
  }
  function Ja(t, e) {
    return xi(t, null, null, e), Ei(t);
  }
  function Sh(t, e, a) {
    t.lanes |= a;
    var l = t.alternate;
    l !== null && (l.lanes |= a);
    for (var n = !1, i = t.return; i !== null; )
      i.childLanes |= a, l = i.alternate, l !== null && (l.childLanes |= a), i.tag === 22 && (t = i.stateNode, t === null || t._visibility & 1 || (n = !0)), t = i, i = i.return;
    return t.tag === 3 ? (i = t.stateNode, n && e !== null && (n = 31 - ve(a), t = i.hiddenUpdates, l = t[n], l === null ? t[n] = [e] : l.push(e), e.lane = a | 536870912), i) : null;
  }
  function Ei(t) {
    if (50 < wn)
      throw wn = 0, Sr = null, Error(s(185));
    for (var e = t.return; e !== null; )
      t = e, e = t.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var Tl = {};
  function y0(t, e, a, l) {
    this.tag = t, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = l, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function ye(t, e, a, l) {
    return new y0(t, e, a, l);
  }
  function hs(t) {
    return t = t.prototype, !(!t || !t.isReactComponent);
  }
  function Ie(t, e) {
    var a = t.alternate;
    return a === null ? (a = ye(
      t.tag,
      e,
      t.key,
      t.mode
    ), a.elementType = t.elementType, a.type = t.type, a.stateNode = t.stateNode, a.alternate = t, t.alternate = a) : (a.pendingProps = e, a.type = t.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null), a.flags = t.flags & 65011712, a.childLanes = t.childLanes, a.lanes = t.lanes, a.child = t.child, a.memoizedProps = t.memoizedProps, a.memoizedState = t.memoizedState, a.updateQueue = t.updateQueue, e = t.dependencies, a.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }, a.sibling = t.sibling, a.index = t.index, a.ref = t.ref, a.refCleanup = t.refCleanup, a;
  }
  function _h(t, e) {
    t.flags &= 65011714;
    var a = t.alternate;
    return a === null ? (t.childLanes = 0, t.lanes = e, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = a.childLanes, t.lanes = a.lanes, t.child = a.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = a.memoizedProps, t.memoizedState = a.memoizedState, t.updateQueue = a.updateQueue, t.type = a.type, e = a.dependencies, t.dependencies = e === null ? null : {
      lanes: e.lanes,
      firstContext: e.firstContext
    }), t;
  }
  function Ai(t, e, a, l, n, i) {
    var f = 0;
    if (l = t, typeof t == "function") hs(t) && (f = 1);
    else if (typeof t == "string")
      f = T1(
        t,
        a,
        k.current
      ) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else
      t: switch (t) {
        case yt:
          return t = ye(31, a, e, n), t.elementType = yt, t.lanes = i, t;
        case Z:
          return Wa(a.children, n, i, e);
        case at:
          f = 8, n |= 24;
          break;
        case J:
          return t = ye(12, a, e, n | 2), t.elementType = J, t.lanes = i, t;
        case xt:
          return t = ye(13, a, e, n), t.elementType = xt, t.lanes = i, t;
        case Tt:
          return t = ye(19, a, e, n), t.elementType = Tt, t.lanes = i, t;
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case nt:
                f = 10;
                break t;
              case V:
                f = 9;
                break t;
              case rt:
                f = 11;
                break t;
              case lt:
                f = 14;
                break t;
              case jt:
                f = 16, l = null;
                break t;
            }
          f = 29, a = Error(
            s(130, t === null ? "null" : typeof t, "")
          ), l = null;
      }
    return e = ye(f, a, e, n), e.elementType = t, e.type = l, e.lanes = i, e;
  }
  function Wa(t, e, a, l) {
    return t = ye(7, t, l, e), t.lanes = a, t;
  }
  function ds(t, e, a) {
    return t = ye(6, t, null, e), t.lanes = a, t;
  }
  function Th(t) {
    var e = ye(18, null, null, 0);
    return e.stateNode = t, e;
  }
  function ms(t, e, a) {
    return e = ye(
      4,
      t.children !== null ? t.children : [],
      t.key,
      e
    ), e.lanes = a, e.stateNode = {
      containerInfo: t.containerInfo,
      pendingChildren: null,
      implementation: t.implementation
    }, e;
  }
  var Ch = /* @__PURE__ */ new WeakMap();
  function De(t, e) {
    if (typeof t == "object" && t !== null) {
      var a = Ch.get(t);
      return a !== void 0 ? a : (e = {
        value: t,
        source: e,
        stack: Je(e)
      }, Ch.set(t, e), e);
    }
    return {
      value: t,
      source: e,
      stack: Je(e)
    };
  }
  var Cl = [], xl = 0, Di = null, dn = 0, Me = [], Oe = 0, ba = null, ke = 1, Ye = "";
  function Pe(t, e) {
    Cl[xl++] = dn, Cl[xl++] = Di, Di = t, dn = e;
  }
  function xh(t, e, a) {
    Me[Oe++] = ke, Me[Oe++] = Ye, Me[Oe++] = ba, ba = t;
    var l = ke;
    t = Ye;
    var n = 32 - ve(l) - 1;
    l &= ~(1 << n), a += 1;
    var i = 32 - ve(e) + n;
    if (30 < i) {
      var f = n - n % 5;
      i = (l & (1 << f) - 1).toString(32), l >>= f, n -= f, ke = 1 << 32 - ve(e) + n | a << n | l, Ye = i + t;
    } else
      ke = 1 << i | a << n | l, Ye = t;
  }
  function vs(t) {
    t.return !== null && (Pe(t, 1), xh(t, 1, 0));
  }
  function gs(t) {
    for (; t === Di; )
      Di = Cl[--xl], Cl[xl] = null, dn = Cl[--xl], Cl[xl] = null;
    for (; t === ba; )
      ba = Me[--Oe], Me[Oe] = null, Ye = Me[--Oe], Me[Oe] = null, ke = Me[--Oe], Me[Oe] = null;
  }
  function Eh(t, e) {
    Me[Oe++] = ke, Me[Oe++] = Ye, Me[Oe++] = ba, ke = e.id, Ye = e.overflow, ba = t;
  }
  var Pt = null, qt = null, gt = !1, Sa = null, ze = !1, ys = Error(s(519));
  function _a(t) {
    var e = Error(
      s(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw mn(De(e, t)), ys;
  }
  function Ah(t) {
    var e = t.stateNode, a = t.type, l = t.memoizedProps;
    switch (e[It] = t, e[re] = l, a) {
      case "dialog":
        dt("cancel", e), dt("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        dt("load", e);
        break;
      case "video":
      case "audio":
        for (a = 0; a < Hn.length; a++)
          dt(Hn[a], e);
        break;
      case "source":
        dt("error", e);
        break;
      case "img":
      case "image":
      case "link":
        dt("error", e), dt("load", e);
        break;
      case "details":
        dt("toggle", e);
        break;
      case "input":
        dt("invalid", e), Lf(
          e,
          l.value,
          l.defaultValue,
          l.checked,
          l.defaultChecked,
          l.type,
          l.name,
          !0
        );
        break;
      case "select":
        dt("invalid", e);
        break;
      case "textarea":
        dt("invalid", e), kf(e, l.value, l.defaultValue, l.children);
    }
    a = l.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || e.textContent === "" + a || l.suppressHydrationWarning === !0 || Qm(e.textContent, a) ? (l.popover != null && (dt("beforetoggle", e), dt("toggle", e)), l.onScroll != null && dt("scroll", e), l.onScrollEnd != null && dt("scrollend", e), l.onClick != null && (e.onclick = $e), e = !0) : e = !1, e || _a(t, !0);
  }
  function Dh(t) {
    for (Pt = t.return; Pt; )
      switch (Pt.tag) {
        case 5:
        case 31:
        case 13:
          ze = !1;
          return;
        case 27:
        case 3:
          ze = !0;
          return;
        default:
          Pt = Pt.return;
      }
  }
  function El(t) {
    if (t !== Pt) return !1;
    if (!gt) return Dh(t), gt = !0, !1;
    var e = t.tag, a;
    if ((a = e !== 3 && e !== 27) && ((a = e === 5) && (a = t.type, a = !(a !== "form" && a !== "button") || Nr(t.type, t.memoizedProps)), a = !a), a && qt && _a(t), Dh(t), e === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(s(317));
      qt = Im(t);
    } else if (e === 31) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(s(317));
      qt = Im(t);
    } else
      e === 27 ? (e = qt, Na(t.type) ? (t = Gr, Gr = null, qt = t) : qt = e) : qt = Pt ? Re(t.stateNode.nextSibling) : null;
    return !0;
  }
  function $a() {
    qt = Pt = null, gt = !1;
  }
  function ps() {
    var t = Sa;
    return t !== null && (de === null ? de = t : de.push.apply(
      de,
      t
    ), Sa = null), t;
  }
  function mn(t) {
    Sa === null ? Sa = [t] : Sa.push(t);
  }
  var bs = p(null), Fa = null, ta = null;
  function Ta(t, e, a) {
    H(bs, e._currentValue), e._currentValue = a;
  }
  function ea(t) {
    t._currentValue = bs.current, O(bs);
  }
  function Ss(t, e, a) {
    for (; t !== null; ) {
      var l = t.alternate;
      if ((t.childLanes & e) !== e ? (t.childLanes |= e, l !== null && (l.childLanes |= e)) : l !== null && (l.childLanes & e) !== e && (l.childLanes |= e), t === a) break;
      t = t.return;
    }
  }
  function _s(t, e, a, l) {
    var n = t.child;
    for (n !== null && (n.return = t); n !== null; ) {
      var i = n.dependencies;
      if (i !== null) {
        var f = n.child;
        i = i.firstContext;
        t: for (; i !== null; ) {
          var m = i;
          i = n;
          for (var b = 0; b < e.length; b++)
            if (m.context === e[b]) {
              i.lanes |= a, m = i.alternate, m !== null && (m.lanes |= a), Ss(
                i.return,
                a,
                t
              ), l || (f = null);
              break t;
            }
          i = m.next;
        }
      } else if (n.tag === 18) {
        if (f = n.return, f === null) throw Error(s(341));
        f.lanes |= a, i = f.alternate, i !== null && (i.lanes |= a), Ss(f, a, t), f = null;
      } else f = n.child;
      if (f !== null) f.return = n;
      else
        for (f = n; f !== null; ) {
          if (f === t) {
            f = null;
            break;
          }
          if (n = f.sibling, n !== null) {
            n.return = f.return, f = n;
            break;
          }
          f = f.return;
        }
      n = f;
    }
  }
  function Al(t, e, a, l) {
    t = null;
    for (var n = e, i = !1; n !== null; ) {
      if (!i) {
        if ((n.flags & 524288) !== 0) i = !0;
        else if ((n.flags & 262144) !== 0) break;
      }
      if (n.tag === 10) {
        var f = n.alternate;
        if (f === null) throw Error(s(387));
        if (f = f.memoizedProps, f !== null) {
          var m = n.type;
          ge(n.pendingProps.value, f.value) || (t !== null ? t.push(m) : t = [m]);
        }
      } else if (n === ft.current) {
        if (f = n.alternate, f === null) throw Error(s(387));
        f.memoizedState.memoizedState !== n.memoizedState.memoizedState && (t !== null ? t.push(kn) : t = [kn]);
      }
      n = n.return;
    }
    t !== null && _s(
      e,
      t,
      a,
      l
    ), e.flags |= 262144;
  }
  function Mi(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!ge(
        t.context._currentValue,
        t.memoizedValue
      ))
        return !0;
      t = t.next;
    }
    return !1;
  }
  function Ia(t) {
    Fa = t, ta = null, t = t.dependencies, t !== null && (t.firstContext = null);
  }
  function te(t) {
    return Mh(Fa, t);
  }
  function Oi(t, e) {
    return Fa === null && Ia(t), Mh(t, e);
  }
  function Mh(t, e) {
    var a = e._currentValue;
    if (e = { context: e, memoizedValue: a, next: null }, ta === null) {
      if (t === null) throw Error(s(308));
      ta = e, t.dependencies = { lanes: 0, firstContext: e }, t.flags |= 524288;
    } else ta = ta.next = e;
    return a;
  }
  var p0 = typeof AbortController < "u" ? AbortController : function() {
    var t = [], e = this.signal = {
      aborted: !1,
      addEventListener: function(a, l) {
        t.push(l);
      }
    };
    this.abort = function() {
      e.aborted = !0, t.forEach(function(a) {
        return a();
      });
    };
  }, b0 = c.unstable_scheduleCallback, S0 = c.unstable_NormalPriority, Qt = {
    $$typeof: nt,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Ts() {
    return {
      controller: new p0(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function vn(t) {
    t.refCount--, t.refCount === 0 && b0(S0, function() {
      t.controller.abort();
    });
  }
  var gn = null, Cs = 0, Dl = 0, Ml = null;
  function _0(t, e) {
    if (gn === null) {
      var a = gn = [];
      Cs = 0, Dl = Ar(), Ml = {
        status: "pending",
        value: void 0,
        then: function(l) {
          a.push(l);
        }
      };
    }
    return Cs++, e.then(Oh, Oh), e;
  }
  function Oh() {
    if (--Cs === 0 && gn !== null) {
      Ml !== null && (Ml.status = "fulfilled");
      var t = gn;
      gn = null, Dl = 0, Ml = null;
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function T0(t, e) {
    var a = [], l = {
      status: "pending",
      value: null,
      reason: null,
      then: function(n) {
        a.push(n);
      }
    };
    return t.then(
      function() {
        l.status = "fulfilled", l.value = e;
        for (var n = 0; n < a.length; n++) (0, a[n])(e);
      },
      function(n) {
        for (l.status = "rejected", l.reason = n, n = 0; n < a.length; n++)
          (0, a[n])(void 0);
      }
    ), l;
  }
  var zh = T.S;
  T.S = function(t, e) {
    dm = Wt(), typeof e == "object" && e !== null && typeof e.then == "function" && _0(t, e), zh !== null && zh(t, e);
  };
  var Pa = p(null);
  function xs() {
    var t = Pa.current;
    return t !== null ? t : Rt.pooledCache;
  }
  function zi(t, e) {
    e === null ? H(Pa, Pa.current) : H(Pa, e.pool);
  }
  function jh() {
    var t = xs();
    return t === null ? null : { parent: Qt._currentValue, pool: t };
  }
  var Ol = Error(s(460)), Es = Error(s(474)), ji = Error(s(542)), Ri = { then: function() {
  } };
  function Rh(t) {
    return t = t.status, t === "fulfilled" || t === "rejected";
  }
  function qh(t, e, a) {
    switch (a = t[a], a === void 0 ? t.push(e) : a !== e && (e.then($e, $e), e = a), e.status) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw t = e.reason, Nh(t), t;
      default:
        if (typeof e.status == "string") e.then($e, $e);
        else {
          if (t = Rt, t !== null && 100 < t.shellSuspendCounter)
            throw Error(s(482));
          t = e, t.status = "pending", t.then(
            function(l) {
              if (e.status === "pending") {
                var n = e;
                n.status = "fulfilled", n.value = l;
              }
            },
            function(l) {
              if (e.status === "pending") {
                var n = e;
                n.status = "rejected", n.reason = l;
              }
            }
          );
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw t = e.reason, Nh(t), t;
        }
        throw el = e, Ol;
    }
  }
  function tl(t) {
    try {
      var e = t._init;
      return e(t._payload);
    } catch (a) {
      throw a !== null && typeof a == "object" && typeof a.then == "function" ? (el = a, Ol) : a;
    }
  }
  var el = null;
  function wh() {
    if (el === null) throw Error(s(459));
    var t = el;
    return el = null, t;
  }
  function Nh(t) {
    if (t === Ol || t === ji)
      throw Error(s(483));
  }
  var zl = null, yn = 0;
  function qi(t) {
    var e = yn;
    return yn += 1, zl === null && (zl = []), qh(zl, t, e);
  }
  function pn(t, e) {
    e = e.props.ref, t.ref = e !== void 0 ? e : null;
  }
  function wi(t, e) {
    throw e.$$typeof === L ? Error(s(525)) : (t = Object.prototype.toString.call(e), Error(
      s(
        31,
        t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t
      )
    ));
  }
  function Hh(t) {
    function e(C, _) {
      if (t) {
        var x = C.deletions;
        x === null ? (C.deletions = [_], C.flags |= 16) : x.push(_);
      }
    }
    function a(C, _) {
      if (!t) return null;
      for (; _ !== null; )
        e(C, _), _ = _.sibling;
      return null;
    }
    function l(C) {
      for (var _ = /* @__PURE__ */ new Map(); C !== null; )
        C.key !== null ? _.set(C.key, C) : _.set(C.index, C), C = C.sibling;
      return _;
    }
    function n(C, _) {
      return C = Ie(C, _), C.index = 0, C.sibling = null, C;
    }
    function i(C, _, x) {
      return C.index = x, t ? (x = C.alternate, x !== null ? (x = x.index, x < _ ? (C.flags |= 67108866, _) : x) : (C.flags |= 67108866, _)) : (C.flags |= 1048576, _);
    }
    function f(C) {
      return t && C.alternate === null && (C.flags |= 67108866), C;
    }
    function m(C, _, x, w) {
      return _ === null || _.tag !== 6 ? (_ = ds(x, C.mode, w), _.return = C, _) : (_ = n(_, x), _.return = C, _);
    }
    function b(C, _, x, w) {
      var W = x.type;
      return W === Z ? q(
        C,
        _,
        x.props.children,
        w,
        x.key
      ) : _ !== null && (_.elementType === W || typeof W == "object" && W !== null && W.$$typeof === jt && tl(W) === _.type) ? (_ = n(_, x.props), pn(_, x), _.return = C, _) : (_ = Ai(
        x.type,
        x.key,
        x.props,
        null,
        C.mode,
        w
      ), pn(_, x), _.return = C, _);
    }
    function E(C, _, x, w) {
      return _ === null || _.tag !== 4 || _.stateNode.containerInfo !== x.containerInfo || _.stateNode.implementation !== x.implementation ? (_ = ms(x, C.mode, w), _.return = C, _) : (_ = n(_, x.children || []), _.return = C, _);
    }
    function q(C, _, x, w, W) {
      return _ === null || _.tag !== 7 ? (_ = Wa(
        x,
        C.mode,
        w,
        W
      ), _.return = C, _) : (_ = n(_, x), _.return = C, _);
    }
    function N(C, _, x) {
      if (typeof _ == "string" && _ !== "" || typeof _ == "number" || typeof _ == "bigint")
        return _ = ds(
          "" + _,
          C.mode,
          x
        ), _.return = C, _;
      if (typeof _ == "object" && _ !== null) {
        switch (_.$$typeof) {
          case $:
            return x = Ai(
              _.type,
              _.key,
              _.props,
              null,
              C.mode,
              x
            ), pn(x, _), x.return = C, x;
          case U:
            return _ = ms(
              _,
              C.mode,
              x
            ), _.return = C, _;
          case jt:
            return _ = tl(_), N(C, _, x);
        }
        if (Ht(_) || Y(_))
          return _ = Wa(
            _,
            C.mode,
            x,
            null
          ), _.return = C, _;
        if (typeof _.then == "function")
          return N(C, qi(_), x);
        if (_.$$typeof === nt)
          return N(
            C,
            Oi(C, _),
            x
          );
        wi(C, _);
      }
      return null;
    }
    function A(C, _, x, w) {
      var W = _ !== null ? _.key : null;
      if (typeof x == "string" && x !== "" || typeof x == "number" || typeof x == "bigint")
        return W !== null ? null : m(C, _, "" + x, w);
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case $:
            return x.key === W ? b(C, _, x, w) : null;
          case U:
            return x.key === W ? E(C, _, x, w) : null;
          case jt:
            return x = tl(x), A(C, _, x, w);
        }
        if (Ht(x) || Y(x))
          return W !== null ? null : q(C, _, x, w, null);
        if (typeof x.then == "function")
          return A(
            C,
            _,
            qi(x),
            w
          );
        if (x.$$typeof === nt)
          return A(
            C,
            _,
            Oi(C, x),
            w
          );
        wi(C, x);
      }
      return null;
    }
    function D(C, _, x, w, W) {
      if (typeof w == "string" && w !== "" || typeof w == "number" || typeof w == "bigint")
        return C = C.get(x) || null, m(_, C, "" + w, W);
      if (typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case $:
            return C = C.get(
              w.key === null ? x : w.key
            ) || null, b(_, C, w, W);
          case U:
            return C = C.get(
              w.key === null ? x : w.key
            ) || null, E(_, C, w, W);
          case jt:
            return w = tl(w), D(
              C,
              _,
              x,
              w,
              W
            );
        }
        if (Ht(w) || Y(w))
          return C = C.get(x) || null, q(_, C, w, W, null);
        if (typeof w.then == "function")
          return D(
            C,
            _,
            x,
            qi(w),
            W
          );
        if (w.$$typeof === nt)
          return D(
            C,
            _,
            x,
            Oi(_, w),
            W
          );
        wi(_, w);
      }
      return null;
    }
    function Q(C, _, x, w) {
      for (var W = null, pt = null, X = _, ot = _ = 0, vt = null; X !== null && ot < x.length; ot++) {
        X.index > ot ? (vt = X, X = null) : vt = X.sibling;
        var bt = A(
          C,
          X,
          x[ot],
          w
        );
        if (bt === null) {
          X === null && (X = vt);
          break;
        }
        t && X && bt.alternate === null && e(C, X), _ = i(bt, _, ot), pt === null ? W = bt : pt.sibling = bt, pt = bt, X = vt;
      }
      if (ot === x.length)
        return a(C, X), gt && Pe(C, ot), W;
      if (X === null) {
        for (; ot < x.length; ot++)
          X = N(C, x[ot], w), X !== null && (_ = i(
            X,
            _,
            ot
          ), pt === null ? W = X : pt.sibling = X, pt = X);
        return gt && Pe(C, ot), W;
      }
      for (X = l(X); ot < x.length; ot++)
        vt = D(
          X,
          C,
          ot,
          x[ot],
          w
        ), vt !== null && (t && vt.alternate !== null && X.delete(
          vt.key === null ? ot : vt.key
        ), _ = i(
          vt,
          _,
          ot
        ), pt === null ? W = vt : pt.sibling = vt, pt = vt);
      return t && X.forEach(function(Ga) {
        return e(C, Ga);
      }), gt && Pe(C, ot), W;
    }
    function P(C, _, x, w) {
      if (x == null) throw Error(s(151));
      for (var W = null, pt = null, X = _, ot = _ = 0, vt = null, bt = x.next(); X !== null && !bt.done; ot++, bt = x.next()) {
        X.index > ot ? (vt = X, X = null) : vt = X.sibling;
        var Ga = A(C, X, bt.value, w);
        if (Ga === null) {
          X === null && (X = vt);
          break;
        }
        t && X && Ga.alternate === null && e(C, X), _ = i(Ga, _, ot), pt === null ? W = Ga : pt.sibling = Ga, pt = Ga, X = vt;
      }
      if (bt.done)
        return a(C, X), gt && Pe(C, ot), W;
      if (X === null) {
        for (; !bt.done; ot++, bt = x.next())
          bt = N(C, bt.value, w), bt !== null && (_ = i(bt, _, ot), pt === null ? W = bt : pt.sibling = bt, pt = bt);
        return gt && Pe(C, ot), W;
      }
      for (X = l(X); !bt.done; ot++, bt = x.next())
        bt = D(X, C, ot, bt.value, w), bt !== null && (t && bt.alternate !== null && X.delete(bt.key === null ? ot : bt.key), _ = i(bt, _, ot), pt === null ? W = bt : pt.sibling = bt, pt = bt);
      return t && X.forEach(function(q1) {
        return e(C, q1);
      }), gt && Pe(C, ot), W;
    }
    function zt(C, _, x, w) {
      if (typeof x == "object" && x !== null && x.type === Z && x.key === null && (x = x.props.children), typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case $:
            t: {
              for (var W = x.key; _ !== null; ) {
                if (_.key === W) {
                  if (W = x.type, W === Z) {
                    if (_.tag === 7) {
                      a(
                        C,
                        _.sibling
                      ), w = n(
                        _,
                        x.props.children
                      ), w.return = C, C = w;
                      break t;
                    }
                  } else if (_.elementType === W || typeof W == "object" && W !== null && W.$$typeof === jt && tl(W) === _.type) {
                    a(
                      C,
                      _.sibling
                    ), w = n(_, x.props), pn(w, x), w.return = C, C = w;
                    break t;
                  }
                  a(C, _);
                  break;
                } else e(C, _);
                _ = _.sibling;
              }
              x.type === Z ? (w = Wa(
                x.props.children,
                C.mode,
                w,
                x.key
              ), w.return = C, C = w) : (w = Ai(
                x.type,
                x.key,
                x.props,
                null,
                C.mode,
                w
              ), pn(w, x), w.return = C, C = w);
            }
            return f(C);
          case U:
            t: {
              for (W = x.key; _ !== null; ) {
                if (_.key === W)
                  if (_.tag === 4 && _.stateNode.containerInfo === x.containerInfo && _.stateNode.implementation === x.implementation) {
                    a(
                      C,
                      _.sibling
                    ), w = n(_, x.children || []), w.return = C, C = w;
                    break t;
                  } else {
                    a(C, _);
                    break;
                  }
                else e(C, _);
                _ = _.sibling;
              }
              w = ms(x, C.mode, w), w.return = C, C = w;
            }
            return f(C);
          case jt:
            return x = tl(x), zt(
              C,
              _,
              x,
              w
            );
        }
        if (Ht(x))
          return Q(
            C,
            _,
            x,
            w
          );
        if (Y(x)) {
          if (W = Y(x), typeof W != "function") throw Error(s(150));
          return x = W.call(x), P(
            C,
            _,
            x,
            w
          );
        }
        if (typeof x.then == "function")
          return zt(
            C,
            _,
            qi(x),
            w
          );
        if (x.$$typeof === nt)
          return zt(
            C,
            _,
            Oi(C, x),
            w
          );
        wi(C, x);
      }
      return typeof x == "string" && x !== "" || typeof x == "number" || typeof x == "bigint" ? (x = "" + x, _ !== null && _.tag === 6 ? (a(C, _.sibling), w = n(_, x), w.return = C, C = w) : (a(C, _), w = ds(x, C.mode, w), w.return = C, C = w), f(C)) : a(C, _);
    }
    return function(C, _, x, w) {
      try {
        yn = 0;
        var W = zt(
          C,
          _,
          x,
          w
        );
        return zl = null, W;
      } catch (X) {
        if (X === Ol || X === ji) throw X;
        var pt = ye(29, X, null, C.mode);
        return pt.lanes = w, pt.return = C, pt;
      } finally {
      }
    };
  }
  var al = Hh(!0), Uh = Hh(!1), Ca = !1;
  function As(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Ds(t, e) {
    t = t.updateQueue, e.updateQueue === t && (e.updateQueue = {
      baseState: t.baseState,
      firstBaseUpdate: t.firstBaseUpdate,
      lastBaseUpdate: t.lastBaseUpdate,
      shared: t.shared,
      callbacks: null
    });
  }
  function xa(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Ea(t, e, a) {
    var l = t.updateQueue;
    if (l === null) return null;
    if (l = l.shared, (_t & 2) !== 0) {
      var n = l.pending;
      return n === null ? e.next = e : (e.next = n.next, n.next = e), l.pending = e, e = Ei(t), Sh(t, null, a), e;
    }
    return xi(t, l, e, a), Ei(t);
  }
  function bn(t, e, a) {
    if (e = e.updateQueue, e !== null && (e = e.shared, (a & 4194048) !== 0)) {
      var l = e.lanes;
      l &= t.pendingLanes, a |= l, e.lanes = a, Mf(t, a);
    }
  }
  function Ms(t, e) {
    var a = t.updateQueue, l = t.alternate;
    if (l !== null && (l = l.updateQueue, a === l)) {
      var n = null, i = null;
      if (a = a.firstBaseUpdate, a !== null) {
        do {
          var f = {
            lane: a.lane,
            tag: a.tag,
            payload: a.payload,
            callback: null,
            next: null
          };
          i === null ? n = i = f : i = i.next = f, a = a.next;
        } while (a !== null);
        i === null ? n = i = e : i = i.next = e;
      } else n = i = e;
      a = {
        baseState: l.baseState,
        firstBaseUpdate: n,
        lastBaseUpdate: i,
        shared: l.shared,
        callbacks: l.callbacks
      }, t.updateQueue = a;
      return;
    }
    t = a.lastBaseUpdate, t === null ? a.firstBaseUpdate = e : t.next = e, a.lastBaseUpdate = e;
  }
  var Os = !1;
  function Sn() {
    if (Os) {
      var t = Ml;
      if (t !== null) throw t;
    }
  }
  function _n(t, e, a, l) {
    Os = !1;
    var n = t.updateQueue;
    Ca = !1;
    var i = n.firstBaseUpdate, f = n.lastBaseUpdate, m = n.shared.pending;
    if (m !== null) {
      n.shared.pending = null;
      var b = m, E = b.next;
      b.next = null, f === null ? i = E : f.next = E, f = b;
      var q = t.alternate;
      q !== null && (q = q.updateQueue, m = q.lastBaseUpdate, m !== f && (m === null ? q.firstBaseUpdate = E : m.next = E, q.lastBaseUpdate = b));
    }
    if (i !== null) {
      var N = n.baseState;
      f = 0, q = E = b = null, m = i;
      do {
        var A = m.lane & -536870913, D = A !== m.lane;
        if (D ? (mt & A) === A : (l & A) === A) {
          A !== 0 && A === Dl && (Os = !0), q !== null && (q = q.next = {
            lane: 0,
            tag: m.tag,
            payload: m.payload,
            callback: null,
            next: null
          });
          t: {
            var Q = t, P = m;
            A = e;
            var zt = a;
            switch (P.tag) {
              case 1:
                if (Q = P.payload, typeof Q == "function") {
                  N = Q.call(zt, N, A);
                  break t;
                }
                N = Q;
                break t;
              case 3:
                Q.flags = Q.flags & -65537 | 128;
              case 0:
                if (Q = P.payload, A = typeof Q == "function" ? Q.call(zt, N, A) : Q, A == null) break t;
                N = z({}, N, A);
                break t;
              case 2:
                Ca = !0;
            }
          }
          A = m.callback, A !== null && (t.flags |= 64, D && (t.flags |= 8192), D = n.callbacks, D === null ? n.callbacks = [A] : D.push(A));
        } else
          D = {
            lane: A,
            tag: m.tag,
            payload: m.payload,
            callback: m.callback,
            next: null
          }, q === null ? (E = q = D, b = N) : q = q.next = D, f |= A;
        if (m = m.next, m === null) {
          if (m = n.shared.pending, m === null)
            break;
          D = m, m = D.next, D.next = null, n.lastBaseUpdate = D, n.shared.pending = null;
        }
      } while (!0);
      q === null && (b = N), n.baseState = b, n.firstBaseUpdate = E, n.lastBaseUpdate = q, i === null && (n.shared.lanes = 0), za |= f, t.lanes = f, t.memoizedState = N;
    }
  }
  function Bh(t, e) {
    if (typeof t != "function")
      throw Error(s(191, t));
    t.call(e);
  }
  function Lh(t, e) {
    var a = t.callbacks;
    if (a !== null)
      for (t.callbacks = null, t = 0; t < a.length; t++)
        Bh(a[t], e);
  }
  var jl = p(null), Ni = p(0);
  function Gh(t, e) {
    t = oa, H(Ni, t), H(jl, e), oa = t | e.baseLanes;
  }
  function zs() {
    H(Ni, oa), H(jl, jl.current);
  }
  function js() {
    oa = Ni.current, O(jl), O(Ni);
  }
  var pe = p(null), je = null;
  function Aa(t) {
    var e = t.alternate;
    H(kt, kt.current & 1), H(pe, t), je === null && (e === null || jl.current !== null || e.memoizedState !== null) && (je = t);
  }
  function Rs(t) {
    H(kt, kt.current), H(pe, t), je === null && (je = t);
  }
  function kh(t) {
    t.tag === 22 ? (H(kt, kt.current), H(pe, t), je === null && (je = t)) : Da();
  }
  function Da() {
    H(kt, kt.current), H(pe, pe.current);
  }
  function be(t) {
    O(pe), je === t && (je = null), O(kt);
  }
  var kt = p(0);
  function Hi(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var a = e.memoizedState;
        if (a !== null && (a = a.dehydrated, a === null || Br(a) || Lr(a)))
          return e;
      } else if (e.tag === 19 && (e.memoizedProps.revealOrder === "forwards" || e.memoizedProps.revealOrder === "backwards" || e.memoizedProps.revealOrder === "unstable_legacy-backwards" || e.memoizedProps.revealOrder === "together")) {
        if ((e.flags & 128) !== 0) return e;
      } else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue;
      }
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return null;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
    return null;
  }
  var aa = 0, ct = null, Mt = null, Vt = null, Ui = !1, Rl = !1, ll = !1, Bi = 0, Tn = 0, ql = null, C0 = 0;
  function Bt() {
    throw Error(s(321));
  }
  function qs(t, e) {
    if (e === null) return !1;
    for (var a = 0; a < e.length && a < t.length; a++)
      if (!ge(t[a], e[a])) return !1;
    return !0;
  }
  function ws(t, e, a, l, n, i) {
    return aa = i, ct = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, T.H = t === null || t.memoizedState === null ? xd : Ws, ll = !1, i = a(l, n), ll = !1, Rl && (i = Qh(
      e,
      a,
      l,
      n
    )), Yh(t), i;
  }
  function Yh(t) {
    T.H = En;
    var e = Mt !== null && Mt.next !== null;
    if (aa = 0, Vt = Mt = ct = null, Ui = !1, Tn = 0, ql = null, e) throw Error(s(300));
    t === null || Xt || (t = t.dependencies, t !== null && Mi(t) && (Xt = !0));
  }
  function Qh(t, e, a, l) {
    ct = t;
    var n = 0;
    do {
      if (Rl && (ql = null), Tn = 0, Rl = !1, 25 <= n) throw Error(s(301));
      if (n += 1, Vt = Mt = null, t.updateQueue != null) {
        var i = t.updateQueue;
        i.lastEffect = null, i.events = null, i.stores = null, i.memoCache != null && (i.memoCache.index = 0);
      }
      T.H = Ed, i = e(a, l);
    } while (Rl);
    return i;
  }
  function x0() {
    var t = T.H, e = t.useState()[0];
    return e = typeof e.then == "function" ? Cn(e) : e, t = t.useState()[0], (Mt !== null ? Mt.memoizedState : null) !== t && (ct.flags |= 1024), e;
  }
  function Ns() {
    var t = Bi !== 0;
    return Bi = 0, t;
  }
  function Hs(t, e, a) {
    e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~a;
  }
  function Us(t) {
    if (Ui) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        e !== null && (e.pending = null), t = t.next;
      }
      Ui = !1;
    }
    aa = 0, Vt = Mt = ct = null, Rl = !1, Tn = Bi = 0, ql = null;
  }
  function ue() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Vt === null ? ct.memoizedState = Vt = t : Vt = Vt.next = t, Vt;
  }
  function Yt() {
    if (Mt === null) {
      var t = ct.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = Mt.next;
    var e = Vt === null ? ct.memoizedState : Vt.next;
    if (e !== null)
      Vt = e, Mt = t;
    else {
      if (t === null)
        throw ct.alternate === null ? Error(s(467)) : Error(s(310));
      Mt = t, t = {
        memoizedState: Mt.memoizedState,
        baseState: Mt.baseState,
        baseQueue: Mt.baseQueue,
        queue: Mt.queue,
        next: null
      }, Vt === null ? ct.memoizedState = Vt = t : Vt = Vt.next = t;
    }
    return Vt;
  }
  function Li() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Cn(t) {
    var e = Tn;
    return Tn += 1, ql === null && (ql = []), t = qh(ql, t, e), e = ct, (Vt === null ? e.memoizedState : Vt.next) === null && (e = e.alternate, T.H = e === null || e.memoizedState === null ? xd : Ws), t;
  }
  function Gi(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return Cn(t);
      if (t.$$typeof === nt) return te(t);
    }
    throw Error(s(438, String(t)));
  }
  function Bs(t) {
    var e = null, a = ct.updateQueue;
    if (a !== null && (e = a.memoCache), e == null) {
      var l = ct.alternate;
      l !== null && (l = l.updateQueue, l !== null && (l = l.memoCache, l != null && (e = {
        data: l.data.map(function(n) {
          return n.slice();
        }),
        index: 0
      })));
    }
    if (e == null && (e = { data: [], index: 0 }), a === null && (a = Li(), ct.updateQueue = a), a.memoCache = e, a = e.data[e.index], a === void 0)
      for (a = e.data[e.index] = Array(t), l = 0; l < t; l++)
        a[l] = Zt;
    return e.index++, a;
  }
  function la(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function ki(t) {
    var e = Yt();
    return Ls(e, Mt, t);
  }
  function Ls(t, e, a) {
    var l = t.queue;
    if (l === null) throw Error(s(311));
    l.lastRenderedReducer = a;
    var n = t.baseQueue, i = l.pending;
    if (i !== null) {
      if (n !== null) {
        var f = n.next;
        n.next = i.next, i.next = f;
      }
      e.baseQueue = n = i, l.pending = null;
    }
    if (i = t.baseState, n === null) t.memoizedState = i;
    else {
      e = n.next;
      var m = f = null, b = null, E = e, q = !1;
      do {
        var N = E.lane & -536870913;
        if (N !== E.lane ? (mt & N) === N : (aa & N) === N) {
          var A = E.revertLane;
          if (A === 0)
            b !== null && (b = b.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: E.action,
              hasEagerState: E.hasEagerState,
              eagerState: E.eagerState,
              next: null
            }), N === Dl && (q = !0);
          else if ((aa & A) === A) {
            E = E.next, A === Dl && (q = !0);
            continue;
          } else
            N = {
              lane: 0,
              revertLane: E.revertLane,
              gesture: null,
              action: E.action,
              hasEagerState: E.hasEagerState,
              eagerState: E.eagerState,
              next: null
            }, b === null ? (m = b = N, f = i) : b = b.next = N, ct.lanes |= A, za |= A;
          N = E.action, ll && a(i, N), i = E.hasEagerState ? E.eagerState : a(i, N);
        } else
          A = {
            lane: N,
            revertLane: E.revertLane,
            gesture: E.gesture,
            action: E.action,
            hasEagerState: E.hasEagerState,
            eagerState: E.eagerState,
            next: null
          }, b === null ? (m = b = A, f = i) : b = b.next = A, ct.lanes |= N, za |= N;
        E = E.next;
      } while (E !== null && E !== e);
      if (b === null ? f = i : b.next = m, !ge(i, t.memoizedState) && (Xt = !0, q && (a = Ml, a !== null)))
        throw a;
      t.memoizedState = i, t.baseState = f, t.baseQueue = b, l.lastRenderedState = i;
    }
    return n === null && (l.lanes = 0), [t.memoizedState, l.dispatch];
  }
  function Gs(t) {
    var e = Yt(), a = e.queue;
    if (a === null) throw Error(s(311));
    a.lastRenderedReducer = t;
    var l = a.dispatch, n = a.pending, i = e.memoizedState;
    if (n !== null) {
      a.pending = null;
      var f = n = n.next;
      do
        i = t(i, f.action), f = f.next;
      while (f !== n);
      ge(i, e.memoizedState) || (Xt = !0), e.memoizedState = i, e.baseQueue === null && (e.baseState = i), a.lastRenderedState = i;
    }
    return [i, l];
  }
  function Vh(t, e, a) {
    var l = ct, n = Yt(), i = gt;
    if (i) {
      if (a === void 0) throw Error(s(407));
      a = a();
    } else a = e();
    var f = !ge(
      (Mt || n).memoizedState,
      a
    );
    if (f && (n.memoizedState = a, Xt = !0), n = n.queue, Qs(Zh.bind(null, l, n, t), [
      t
    ]), n.getSnapshot !== e || f || Vt !== null && Vt.memoizedState.tag & 1) {
      if (l.flags |= 2048, wl(
        9,
        { destroy: void 0 },
        Kh.bind(
          null,
          l,
          n,
          a,
          e
        ),
        null
      ), Rt === null) throw Error(s(349));
      i || (aa & 127) !== 0 || Xh(l, e, a);
    }
    return a;
  }
  function Xh(t, e, a) {
    t.flags |= 16384, t = { getSnapshot: e, value: a }, e = ct.updateQueue, e === null ? (e = Li(), ct.updateQueue = e, e.stores = [t]) : (a = e.stores, a === null ? e.stores = [t] : a.push(t));
  }
  function Kh(t, e, a, l) {
    e.value = a, e.getSnapshot = l, Jh(e) && Wh(t);
  }
  function Zh(t, e, a) {
    return a(function() {
      Jh(e) && Wh(t);
    });
  }
  function Jh(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var a = e();
      return !ge(t, a);
    } catch {
      return !0;
    }
  }
  function Wh(t) {
    var e = Ja(t, 2);
    e !== null && me(e, t, 2);
  }
  function ks(t) {
    var e = ue();
    if (typeof t == "function") {
      var a = t;
      if (t = a(), ll) {
        ga(!0);
        try {
          a();
        } finally {
          ga(!1);
        }
      }
    }
    return e.memoizedState = e.baseState = t, e.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: la,
      lastRenderedState: t
    }, e;
  }
  function $h(t, e, a, l) {
    return t.baseState = a, Ls(
      t,
      Mt,
      typeof l == "function" ? l : la
    );
  }
  function E0(t, e, a, l, n) {
    if (Vi(t)) throw Error(s(485));
    if (t = e.action, t !== null) {
      var i = {
        payload: n,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(f) {
          i.listeners.push(f);
        }
      };
      T.T !== null ? a(!0) : i.isTransition = !1, l(i), a = e.pending, a === null ? (i.next = e.pending = i, Fh(e, i)) : (i.next = a.next, e.pending = a.next = i);
    }
  }
  function Fh(t, e) {
    var a = e.action, l = e.payload, n = t.state;
    if (e.isTransition) {
      var i = T.T, f = {};
      T.T = f;
      try {
        var m = a(n, l), b = T.S;
        b !== null && b(f, m), Ih(t, e, m);
      } catch (E) {
        Ys(t, e, E);
      } finally {
        i !== null && f.types !== null && (i.types = f.types), T.T = i;
      }
    } else
      try {
        i = a(n, l), Ih(t, e, i);
      } catch (E) {
        Ys(t, e, E);
      }
  }
  function Ih(t, e, a) {
    a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(
      function(l) {
        Ph(t, e, l);
      },
      function(l) {
        return Ys(t, e, l);
      }
    ) : Ph(t, e, a);
  }
  function Ph(t, e, a) {
    e.status = "fulfilled", e.value = a, td(e), t.state = a, e = t.pending, e !== null && (a = e.next, a === e ? t.pending = null : (a = a.next, e.next = a, Fh(t, a)));
  }
  function Ys(t, e, a) {
    var l = t.pending;
    if (t.pending = null, l !== null) {
      l = l.next;
      do
        e.status = "rejected", e.reason = a, td(e), e = e.next;
      while (e !== l);
    }
    t.action = null;
  }
  function td(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function ed(t, e) {
    return e;
  }
  function ad(t, e) {
    if (gt) {
      var a = Rt.formState;
      if (a !== null) {
        t: {
          var l = ct;
          if (gt) {
            if (qt) {
              e: {
                for (var n = qt, i = ze; n.nodeType !== 8; ) {
                  if (!i) {
                    n = null;
                    break e;
                  }
                  if (n = Re(
                    n.nextSibling
                  ), n === null) {
                    n = null;
                    break e;
                  }
                }
                i = n.data, n = i === "F!" || i === "F" ? n : null;
              }
              if (n) {
                qt = Re(
                  n.nextSibling
                ), l = n.data === "F!";
                break t;
              }
            }
            _a(l);
          }
          l = !1;
        }
        l && (e = a[0]);
      }
    }
    return a = ue(), a.memoizedState = a.baseState = e, l = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ed,
      lastRenderedState: e
    }, a.queue = l, a = _d.bind(
      null,
      ct,
      l
    ), l.dispatch = a, l = ks(!1), i = Js.bind(
      null,
      ct,
      !1,
      l.queue
    ), l = ue(), n = {
      state: e,
      dispatch: null,
      action: t,
      pending: null
    }, l.queue = n, a = E0.bind(
      null,
      ct,
      n,
      i,
      a
    ), n.dispatch = a, l.memoizedState = t, [e, a, !1];
  }
  function ld(t) {
    var e = Yt();
    return nd(e, Mt, t);
  }
  function nd(t, e, a) {
    if (e = Ls(
      t,
      e,
      ed
    )[0], t = ki(la)[0], typeof e == "object" && e !== null && typeof e.then == "function")
      try {
        var l = Cn(e);
      } catch (f) {
        throw f === Ol ? ji : f;
      }
    else l = e;
    e = Yt();
    var n = e.queue, i = n.dispatch;
    return a !== e.memoizedState && (ct.flags |= 2048, wl(
      9,
      { destroy: void 0 },
      A0.bind(null, n, a),
      null
    )), [l, i, t];
  }
  function A0(t, e) {
    t.action = e;
  }
  function id(t) {
    var e = Yt(), a = Mt;
    if (a !== null)
      return nd(e, a, t);
    Yt(), e = e.memoizedState, a = Yt();
    var l = a.queue.dispatch;
    return a.memoizedState = t, [e, l, !1];
  }
  function wl(t, e, a, l) {
    return t = { tag: t, create: a, deps: l, inst: e, next: null }, e = ct.updateQueue, e === null && (e = Li(), ct.updateQueue = e), a = e.lastEffect, a === null ? e.lastEffect = t.next = t : (l = a.next, a.next = t, t.next = l, e.lastEffect = t), t;
  }
  function ud() {
    return Yt().memoizedState;
  }
  function Yi(t, e, a, l) {
    var n = ue();
    ct.flags |= t, n.memoizedState = wl(
      1 | e,
      { destroy: void 0 },
      a,
      l === void 0 ? null : l
    );
  }
  function Qi(t, e, a, l) {
    var n = Yt();
    l = l === void 0 ? null : l;
    var i = n.memoizedState.inst;
    Mt !== null && l !== null && qs(l, Mt.memoizedState.deps) ? n.memoizedState = wl(e, i, a, l) : (ct.flags |= t, n.memoizedState = wl(
      1 | e,
      i,
      a,
      l
    ));
  }
  function sd(t, e) {
    Yi(8390656, 8, t, e);
  }
  function Qs(t, e) {
    Qi(2048, 8, t, e);
  }
  function D0(t) {
    ct.flags |= 4;
    var e = ct.updateQueue;
    if (e === null)
      e = Li(), ct.updateQueue = e, e.events = [t];
    else {
      var a = e.events;
      a === null ? e.events = [t] : a.push(t);
    }
  }
  function rd(t) {
    var e = Yt().memoizedState;
    return D0({ ref: e, nextImpl: t }), function() {
      if ((_t & 2) !== 0) throw Error(s(440));
      return e.impl.apply(void 0, arguments);
    };
  }
  function cd(t, e) {
    return Qi(4, 2, t, e);
  }
  function od(t, e) {
    return Qi(4, 4, t, e);
  }
  function fd(t, e) {
    if (typeof e == "function") {
      t = t();
      var a = e(t);
      return function() {
        typeof a == "function" ? a() : e(null);
      };
    }
    if (e != null)
      return t = t(), e.current = t, function() {
        e.current = null;
      };
  }
  function hd(t, e, a) {
    a = a != null ? a.concat([t]) : null, Qi(4, 4, fd.bind(null, e, t), a);
  }
  function Vs() {
  }
  function dd(t, e) {
    var a = Yt();
    e = e === void 0 ? null : e;
    var l = a.memoizedState;
    return e !== null && qs(e, l[1]) ? l[0] : (a.memoizedState = [t, e], t);
  }
  function md(t, e) {
    var a = Yt();
    e = e === void 0 ? null : e;
    var l = a.memoizedState;
    if (e !== null && qs(e, l[1]))
      return l[0];
    if (l = t(), ll) {
      ga(!0);
      try {
        t();
      } finally {
        ga(!1);
      }
    }
    return a.memoizedState = [l, e], l;
  }
  function Xs(t, e, a) {
    return a === void 0 || (aa & 1073741824) !== 0 && (mt & 261930) === 0 ? t.memoizedState = e : (t.memoizedState = a, t = vm(), ct.lanes |= t, za |= t, a);
  }
  function vd(t, e, a, l) {
    return ge(a, e) ? a : jl.current !== null ? (t = Xs(t, a, l), ge(t, e) || (Xt = !0), t) : (aa & 42) === 0 || (aa & 1073741824) !== 0 && (mt & 261930) === 0 ? (Xt = !0, t.memoizedState = a) : (t = vm(), ct.lanes |= t, za |= t, e);
  }
  function gd(t, e, a, l, n) {
    var i = R.p;
    R.p = i !== 0 && 8 > i ? i : 8;
    var f = T.T, m = {};
    T.T = m, Js(t, !1, e, a);
    try {
      var b = n(), E = T.S;
      if (E !== null && E(m, b), b !== null && typeof b == "object" && typeof b.then == "function") {
        var q = T0(
          b,
          l
        );
        xn(
          t,
          e,
          q,
          Te(t)
        );
      } else
        xn(
          t,
          e,
          l,
          Te(t)
        );
    } catch (N) {
      xn(
        t,
        e,
        { then: function() {
        }, status: "rejected", reason: N },
        Te()
      );
    } finally {
      R.p = i, f !== null && m.types !== null && (f.types = m.types), T.T = f;
    }
  }
  function M0() {
  }
  function Ks(t, e, a, l) {
    if (t.tag !== 5) throw Error(s(476));
    var n = yd(t).queue;
    gd(
      t,
      n,
      e,
      B,
      a === null ? M0 : function() {
        return pd(t), a(l);
      }
    );
  }
  function yd(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: B,
      baseState: B,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: la,
        lastRenderedState: B
      },
      next: null
    };
    var a = {};
    return e.next = {
      memoizedState: a,
      baseState: a,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: la,
        lastRenderedState: a
      },
      next: null
    }, t.memoizedState = e, t = t.alternate, t !== null && (t.memoizedState = e), e;
  }
  function pd(t) {
    var e = yd(t);
    e.next === null && (e = t.alternate.memoizedState), xn(
      t,
      e.next.queue,
      {},
      Te()
    );
  }
  function Zs() {
    return te(kn);
  }
  function bd() {
    return Yt().memoizedState;
  }
  function Sd() {
    return Yt().memoizedState;
  }
  function O0(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var a = Te();
          t = xa(a);
          var l = Ea(e, t, a);
          l !== null && (me(l, e, a), bn(l, e, a)), e = { cache: Ts() }, t.payload = e;
          return;
      }
      e = e.return;
    }
  }
  function z0(t, e, a) {
    var l = Te();
    a = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Vi(t) ? Td(e, a) : (a = fs(t, e, a, l), a !== null && (me(a, t, l), Cd(a, e, l)));
  }
  function _d(t, e, a) {
    var l = Te();
    xn(t, e, a, l);
  }
  function xn(t, e, a, l) {
    var n = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Vi(t)) Td(e, n);
    else {
      var i = t.alternate;
      if (t.lanes === 0 && (i === null || i.lanes === 0) && (i = e.lastRenderedReducer, i !== null))
        try {
          var f = e.lastRenderedState, m = i(f, a);
          if (n.hasEagerState = !0, n.eagerState = m, ge(m, f))
            return xi(t, e, n, 0), Rt === null && Ci(), !1;
        } catch {
        } finally {
        }
      if (a = fs(t, e, n, l), a !== null)
        return me(a, t, l), Cd(a, e, l), !0;
    }
    return !1;
  }
  function Js(t, e, a, l) {
    if (l = {
      lane: 2,
      revertLane: Ar(),
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Vi(t)) {
      if (e) throw Error(s(479));
    } else
      e = fs(
        t,
        a,
        l,
        2
      ), e !== null && me(e, t, 2);
  }
  function Vi(t) {
    var e = t.alternate;
    return t === ct || e !== null && e === ct;
  }
  function Td(t, e) {
    Rl = Ui = !0;
    var a = t.pending;
    a === null ? e.next = e : (e.next = a.next, a.next = e), t.pending = e;
  }
  function Cd(t, e, a) {
    if ((a & 4194048) !== 0) {
      var l = e.lanes;
      l &= t.pendingLanes, a |= l, e.lanes = a, Mf(t, a);
    }
  }
  var En = {
    readContext: te,
    use: Gi,
    useCallback: Bt,
    useContext: Bt,
    useEffect: Bt,
    useImperativeHandle: Bt,
    useLayoutEffect: Bt,
    useInsertionEffect: Bt,
    useMemo: Bt,
    useReducer: Bt,
    useRef: Bt,
    useState: Bt,
    useDebugValue: Bt,
    useDeferredValue: Bt,
    useTransition: Bt,
    useSyncExternalStore: Bt,
    useId: Bt,
    useHostTransitionStatus: Bt,
    useFormState: Bt,
    useActionState: Bt,
    useOptimistic: Bt,
    useMemoCache: Bt,
    useCacheRefresh: Bt
  };
  En.useEffectEvent = Bt;
  var xd = {
    readContext: te,
    use: Gi,
    useCallback: function(t, e) {
      return ue().memoizedState = [
        t,
        e === void 0 ? null : e
      ], t;
    },
    useContext: te,
    useEffect: sd,
    useImperativeHandle: function(t, e, a) {
      a = a != null ? a.concat([t]) : null, Yi(
        4194308,
        4,
        fd.bind(null, e, t),
        a
      );
    },
    useLayoutEffect: function(t, e) {
      return Yi(4194308, 4, t, e);
    },
    useInsertionEffect: function(t, e) {
      Yi(4, 2, t, e);
    },
    useMemo: function(t, e) {
      var a = ue();
      e = e === void 0 ? null : e;
      var l = t();
      if (ll) {
        ga(!0);
        try {
          t();
        } finally {
          ga(!1);
        }
      }
      return a.memoizedState = [l, e], l;
    },
    useReducer: function(t, e, a) {
      var l = ue();
      if (a !== void 0) {
        var n = a(e);
        if (ll) {
          ga(!0);
          try {
            a(e);
          } finally {
            ga(!1);
          }
        }
      } else n = e;
      return l.memoizedState = l.baseState = n, t = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: t,
        lastRenderedState: n
      }, l.queue = t, t = t.dispatch = z0.bind(
        null,
        ct,
        t
      ), [l.memoizedState, t];
    },
    useRef: function(t) {
      var e = ue();
      return t = { current: t }, e.memoizedState = t;
    },
    useState: function(t) {
      t = ks(t);
      var e = t.queue, a = _d.bind(null, ct, e);
      return e.dispatch = a, [t.memoizedState, a];
    },
    useDebugValue: Vs,
    useDeferredValue: function(t, e) {
      var a = ue();
      return Xs(a, t, e);
    },
    useTransition: function() {
      var t = ks(!1);
      return t = gd.bind(
        null,
        ct,
        t.queue,
        !0,
        !1
      ), ue().memoizedState = t, [!1, t];
    },
    useSyncExternalStore: function(t, e, a) {
      var l = ct, n = ue();
      if (gt) {
        if (a === void 0)
          throw Error(s(407));
        a = a();
      } else {
        if (a = e(), Rt === null)
          throw Error(s(349));
        (mt & 127) !== 0 || Xh(l, e, a);
      }
      n.memoizedState = a;
      var i = { value: a, getSnapshot: e };
      return n.queue = i, sd(Zh.bind(null, l, i, t), [
        t
      ]), l.flags |= 2048, wl(
        9,
        { destroy: void 0 },
        Kh.bind(
          null,
          l,
          i,
          a,
          e
        ),
        null
      ), a;
    },
    useId: function() {
      var t = ue(), e = Rt.identifierPrefix;
      if (gt) {
        var a = Ye, l = ke;
        a = (l & ~(1 << 32 - ve(l) - 1)).toString(32) + a, e = "_" + e + "R_" + a, a = Bi++, 0 < a && (e += "H" + a.toString(32)), e += "_";
      } else
        a = C0++, e = "_" + e + "r_" + a.toString(32) + "_";
      return t.memoizedState = e;
    },
    useHostTransitionStatus: Zs,
    useFormState: ad,
    useActionState: ad,
    useOptimistic: function(t) {
      var e = ue();
      e.memoizedState = e.baseState = t;
      var a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return e.queue = a, e = Js.bind(
        null,
        ct,
        !0,
        a
      ), a.dispatch = e, [t, e];
    },
    useMemoCache: Bs,
    useCacheRefresh: function() {
      return ue().memoizedState = O0.bind(
        null,
        ct
      );
    },
    useEffectEvent: function(t) {
      var e = ue(), a = { impl: t };
      return e.memoizedState = a, function() {
        if ((_t & 2) !== 0)
          throw Error(s(440));
        return a.impl.apply(void 0, arguments);
      };
    }
  }, Ws = {
    readContext: te,
    use: Gi,
    useCallback: dd,
    useContext: te,
    useEffect: Qs,
    useImperativeHandle: hd,
    useInsertionEffect: cd,
    useLayoutEffect: od,
    useMemo: md,
    useReducer: ki,
    useRef: ud,
    useState: function() {
      return ki(la);
    },
    useDebugValue: Vs,
    useDeferredValue: function(t, e) {
      var a = Yt();
      return vd(
        a,
        Mt.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = ki(la)[0], e = Yt().memoizedState;
      return [
        typeof t == "boolean" ? t : Cn(t),
        e
      ];
    },
    useSyncExternalStore: Vh,
    useId: bd,
    useHostTransitionStatus: Zs,
    useFormState: ld,
    useActionState: ld,
    useOptimistic: function(t, e) {
      var a = Yt();
      return $h(a, Mt, t, e);
    },
    useMemoCache: Bs,
    useCacheRefresh: Sd
  };
  Ws.useEffectEvent = rd;
  var Ed = {
    readContext: te,
    use: Gi,
    useCallback: dd,
    useContext: te,
    useEffect: Qs,
    useImperativeHandle: hd,
    useInsertionEffect: cd,
    useLayoutEffect: od,
    useMemo: md,
    useReducer: Gs,
    useRef: ud,
    useState: function() {
      return Gs(la);
    },
    useDebugValue: Vs,
    useDeferredValue: function(t, e) {
      var a = Yt();
      return Mt === null ? Xs(a, t, e) : vd(
        a,
        Mt.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = Gs(la)[0], e = Yt().memoizedState;
      return [
        typeof t == "boolean" ? t : Cn(t),
        e
      ];
    },
    useSyncExternalStore: Vh,
    useId: bd,
    useHostTransitionStatus: Zs,
    useFormState: id,
    useActionState: id,
    useOptimistic: function(t, e) {
      var a = Yt();
      return Mt !== null ? $h(a, Mt, t, e) : (a.baseState = t, [t, a.queue.dispatch]);
    },
    useMemoCache: Bs,
    useCacheRefresh: Sd
  };
  Ed.useEffectEvent = rd;
  function $s(t, e, a, l) {
    e = t.memoizedState, a = a(l, e), a = a == null ? e : z({}, e, a), t.memoizedState = a, t.lanes === 0 && (t.updateQueue.baseState = a);
  }
  var Fs = {
    enqueueSetState: function(t, e, a) {
      t = t._reactInternals;
      var l = Te(), n = xa(l);
      n.payload = e, a != null && (n.callback = a), e = Ea(t, n, l), e !== null && (me(e, t, l), bn(e, t, l));
    },
    enqueueReplaceState: function(t, e, a) {
      t = t._reactInternals;
      var l = Te(), n = xa(l);
      n.tag = 1, n.payload = e, a != null && (n.callback = a), e = Ea(t, n, l), e !== null && (me(e, t, l), bn(e, t, l));
    },
    enqueueForceUpdate: function(t, e) {
      t = t._reactInternals;
      var a = Te(), l = xa(a);
      l.tag = 2, e != null && (l.callback = e), e = Ea(t, l, a), e !== null && (me(e, t, a), bn(e, t, a));
    }
  };
  function Ad(t, e, a, l, n, i, f) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(l, i, f) : e.prototype && e.prototype.isPureReactComponent ? !fn(a, l) || !fn(n, i) : !0;
  }
  function Dd(t, e, a, l) {
    t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(a, l), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(a, l), e.state !== t && Fs.enqueueReplaceState(e, e.state, null);
  }
  function nl(t, e) {
    var a = e;
    if ("ref" in e) {
      a = {};
      for (var l in e)
        l !== "ref" && (a[l] = e[l]);
    }
    if (t = t.defaultProps) {
      a === e && (a = z({}, a));
      for (var n in t)
        a[n] === void 0 && (a[n] = t[n]);
    }
    return a;
  }
  function Md(t) {
    Ti(t);
  }
  function Od(t) {
    console.error(t);
  }
  function zd(t) {
    Ti(t);
  }
  function Xi(t, e) {
    try {
      var a = t.onUncaughtError;
      a(e.value, { componentStack: e.stack });
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  function jd(t, e, a) {
    try {
      var l = t.onCaughtError;
      l(a.value, {
        componentStack: a.stack,
        errorBoundary: e.tag === 1 ? e.stateNode : null
      });
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  function Is(t, e, a) {
    return a = xa(a), a.tag = 3, a.payload = { element: null }, a.callback = function() {
      Xi(t, e);
    }, a;
  }
  function Rd(t) {
    return t = xa(t), t.tag = 3, t;
  }
  function qd(t, e, a, l) {
    var n = a.type.getDerivedStateFromError;
    if (typeof n == "function") {
      var i = l.value;
      t.payload = function() {
        return n(i);
      }, t.callback = function() {
        jd(e, a, l);
      };
    }
    var f = a.stateNode;
    f !== null && typeof f.componentDidCatch == "function" && (t.callback = function() {
      jd(e, a, l), typeof n != "function" && (ja === null ? ja = /* @__PURE__ */ new Set([this]) : ja.add(this));
      var m = l.stack;
      this.componentDidCatch(l.value, {
        componentStack: m !== null ? m : ""
      });
    });
  }
  function j0(t, e, a, l, n) {
    if (a.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
      if (e = a.alternate, e !== null && Al(
        e,
        a,
        n,
        !0
      ), a = pe.current, a !== null) {
        switch (a.tag) {
          case 31:
          case 13:
            return je === null ? lu() : a.alternate === null && Lt === 0 && (Lt = 3), a.flags &= -257, a.flags |= 65536, a.lanes = n, l === Ri ? a.flags |= 16384 : (e = a.updateQueue, e === null ? a.updateQueue = /* @__PURE__ */ new Set([l]) : e.add(l), Cr(t, l, n)), !1;
          case 22:
            return a.flags |= 65536, l === Ri ? a.flags |= 16384 : (e = a.updateQueue, e === null ? (e = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([l])
            }, a.updateQueue = e) : (a = e.retryQueue, a === null ? e.retryQueue = /* @__PURE__ */ new Set([l]) : a.add(l)), Cr(t, l, n)), !1;
        }
        throw Error(s(435, a.tag));
      }
      return Cr(t, l, n), lu(), !1;
    }
    if (gt)
      return e = pe.current, e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256), e.flags |= 65536, e.lanes = n, l !== ys && (t = Error(s(422), { cause: l }), mn(De(t, a)))) : (l !== ys && (e = Error(s(423), {
        cause: l
      }), mn(
        De(e, a)
      )), t = t.current.alternate, t.flags |= 65536, n &= -n, t.lanes |= n, l = De(l, a), n = Is(
        t.stateNode,
        l,
        n
      ), Ms(t, n), Lt !== 4 && (Lt = 2)), !1;
    var i = Error(s(520), { cause: l });
    if (i = De(i, a), qn === null ? qn = [i] : qn.push(i), Lt !== 4 && (Lt = 2), e === null) return !0;
    l = De(l, a), a = e;
    do {
      switch (a.tag) {
        case 3:
          return a.flags |= 65536, t = n & -n, a.lanes |= t, t = Is(a.stateNode, l, t), Ms(a, t), !1;
        case 1:
          if (e = a.type, i = a.stateNode, (a.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || i !== null && typeof i.componentDidCatch == "function" && (ja === null || !ja.has(i))))
            return a.flags |= 65536, n &= -n, a.lanes |= n, n = Rd(n), qd(
              n,
              t,
              a,
              l
            ), Ms(a, n), !1;
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var Ps = Error(s(461)), Xt = !1;
  function ee(t, e, a, l) {
    e.child = t === null ? Uh(e, null, a, l) : al(
      e,
      t.child,
      a,
      l
    );
  }
  function wd(t, e, a, l, n) {
    a = a.render;
    var i = e.ref;
    if ("ref" in l) {
      var f = {};
      for (var m in l)
        m !== "ref" && (f[m] = l[m]);
    } else f = l;
    return Ia(e), l = ws(
      t,
      e,
      a,
      f,
      i,
      n
    ), m = Ns(), t !== null && !Xt ? (Hs(t, e, n), na(t, e, n)) : (gt && m && vs(e), e.flags |= 1, ee(t, e, l, n), e.child);
  }
  function Nd(t, e, a, l, n) {
    if (t === null) {
      var i = a.type;
      return typeof i == "function" && !hs(i) && i.defaultProps === void 0 && a.compare === null ? (e.tag = 15, e.type = i, Hd(
        t,
        e,
        i,
        l,
        n
      )) : (t = Ai(
        a.type,
        null,
        l,
        e,
        e.mode,
        n
      ), t.ref = e.ref, t.return = e, e.child = t);
    }
    if (i = t.child, !sr(t, n)) {
      var f = i.memoizedProps;
      if (a = a.compare, a = a !== null ? a : fn, a(f, l) && t.ref === e.ref)
        return na(t, e, n);
    }
    return e.flags |= 1, t = Ie(i, l), t.ref = e.ref, t.return = e, e.child = t;
  }
  function Hd(t, e, a, l, n) {
    if (t !== null) {
      var i = t.memoizedProps;
      if (fn(i, l) && t.ref === e.ref)
        if (Xt = !1, e.pendingProps = l = i, sr(t, n))
          (t.flags & 131072) !== 0 && (Xt = !0);
        else
          return e.lanes = t.lanes, na(t, e, n);
    }
    return tr(
      t,
      e,
      a,
      l,
      n
    );
  }
  function Ud(t, e, a, l) {
    var n = l.children, i = t !== null ? t.memoizedState : null;
    if (t === null && e.stateNode === null && (e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), l.mode === "hidden") {
      if ((e.flags & 128) !== 0) {
        if (i = i !== null ? i.baseLanes | a : a, t !== null) {
          for (l = e.child = t.child, n = 0; l !== null; )
            n = n | l.lanes | l.childLanes, l = l.sibling;
          l = n & ~i;
        } else l = 0, e.child = null;
        return Bd(
          t,
          e,
          i,
          a,
          l
        );
      }
      if ((a & 536870912) !== 0)
        e.memoizedState = { baseLanes: 0, cachePool: null }, t !== null && zi(
          e,
          i !== null ? i.cachePool : null
        ), i !== null ? Gh(e, i) : zs(), kh(e);
      else
        return l = e.lanes = 536870912, Bd(
          t,
          e,
          i !== null ? i.baseLanes | a : a,
          a,
          l
        );
    } else
      i !== null ? (zi(e, i.cachePool), Gh(e, i), Da(), e.memoizedState = null) : (t !== null && zi(e, null), zs(), Da());
    return ee(t, e, n, a), e.child;
  }
  function An(t, e) {
    return t !== null && t.tag === 22 || e.stateNode !== null || (e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), e.sibling;
  }
  function Bd(t, e, a, l, n) {
    var i = xs();
    return i = i === null ? null : { parent: Qt._currentValue, pool: i }, e.memoizedState = {
      baseLanes: a,
      cachePool: i
    }, t !== null && zi(e, null), zs(), kh(e), t !== null && Al(t, e, l, !0), e.childLanes = n, null;
  }
  function Ki(t, e) {
    return e = Ji(
      { mode: e.mode, children: e.children },
      t.mode
    ), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function Ld(t, e, a) {
    return al(e, t.child, null, a), t = Ki(e, e.pendingProps), t.flags |= 2, be(e), e.memoizedState = null, t;
  }
  function R0(t, e, a) {
    var l = e.pendingProps, n = (e.flags & 128) !== 0;
    if (e.flags &= -129, t === null) {
      if (gt) {
        if (l.mode === "hidden")
          return t = Ki(e, l), e.lanes = 536870912, An(null, t);
        if (Rs(e), (t = qt) ? (t = Fm(
          t,
          ze
        ), t = t !== null && t.data === "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: ba !== null ? { id: ke, overflow: Ye } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, a = Th(t), a.return = e, e.child = a, Pt = e, qt = null)) : t = null, t === null) throw _a(e);
        return e.lanes = 536870912, null;
      }
      return Ki(e, l);
    }
    var i = t.memoizedState;
    if (i !== null) {
      var f = i.dehydrated;
      if (Rs(e), n)
        if (e.flags & 256)
          e.flags &= -257, e = Ld(
            t,
            e,
            a
          );
        else if (e.memoizedState !== null)
          e.child = t.child, e.flags |= 128, e = null;
        else throw Error(s(558));
      else if (Xt || Al(t, e, a, !1), n = (a & t.childLanes) !== 0, Xt || n) {
        if (l = Rt, l !== null && (f = Of(l, a), f !== 0 && f !== i.retryLane))
          throw i.retryLane = f, Ja(t, f), me(l, t, f), Ps;
        lu(), e = Ld(
          t,
          e,
          a
        );
      } else
        t = i.treeContext, qt = Re(f.nextSibling), Pt = e, gt = !0, Sa = null, ze = !1, t !== null && Eh(e, t), e = Ki(e, l), e.flags |= 4096;
      return e;
    }
    return t = Ie(t.child, {
      mode: l.mode,
      children: l.children
    }), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function Zi(t, e) {
    var a = e.ref;
    if (a === null)
      t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object")
        throw Error(s(284));
      (t === null || t.ref !== a) && (e.flags |= 4194816);
    }
  }
  function tr(t, e, a, l, n) {
    return Ia(e), a = ws(
      t,
      e,
      a,
      l,
      void 0,
      n
    ), l = Ns(), t !== null && !Xt ? (Hs(t, e, n), na(t, e, n)) : (gt && l && vs(e), e.flags |= 1, ee(t, e, a, n), e.child);
  }
  function Gd(t, e, a, l, n, i) {
    return Ia(e), e.updateQueue = null, a = Qh(
      e,
      l,
      a,
      n
    ), Yh(t), l = Ns(), t !== null && !Xt ? (Hs(t, e, i), na(t, e, i)) : (gt && l && vs(e), e.flags |= 1, ee(t, e, a, i), e.child);
  }
  function kd(t, e, a, l, n) {
    if (Ia(e), e.stateNode === null) {
      var i = Tl, f = a.contextType;
      typeof f == "object" && f !== null && (i = te(f)), i = new a(l, i), e.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, i.updater = Fs, e.stateNode = i, i._reactInternals = e, i = e.stateNode, i.props = l, i.state = e.memoizedState, i.refs = {}, As(e), f = a.contextType, i.context = typeof f == "object" && f !== null ? te(f) : Tl, i.state = e.memoizedState, f = a.getDerivedStateFromProps, typeof f == "function" && ($s(
        e,
        a,
        f,
        l
      ), i.state = e.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (f = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), f !== i.state && Fs.enqueueReplaceState(i, i.state, null), _n(e, l, i, n), Sn(), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308), l = !0;
    } else if (t === null) {
      i = e.stateNode;
      var m = e.memoizedProps, b = nl(a, m);
      i.props = b;
      var E = i.context, q = a.contextType;
      f = Tl, typeof q == "object" && q !== null && (f = te(q));
      var N = a.getDerivedStateFromProps;
      q = typeof N == "function" || typeof i.getSnapshotBeforeUpdate == "function", m = e.pendingProps !== m, q || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (m || E !== f) && Dd(
        e,
        i,
        l,
        f
      ), Ca = !1;
      var A = e.memoizedState;
      i.state = A, _n(e, l, i, n), Sn(), E = e.memoizedState, m || A !== E || Ca ? (typeof N == "function" && ($s(
        e,
        a,
        N,
        l
      ), E = e.memoizedState), (b = Ca || Ad(
        e,
        a,
        b,
        l,
        A,
        E,
        f
      )) ? (q || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = l, e.memoizedState = E), i.props = l, i.state = E, i.context = f, l = b) : (typeof i.componentDidMount == "function" && (e.flags |= 4194308), l = !1);
    } else {
      i = e.stateNode, Ds(t, e), f = e.memoizedProps, q = nl(a, f), i.props = q, N = e.pendingProps, A = i.context, E = a.contextType, b = Tl, typeof E == "object" && E !== null && (b = te(E)), m = a.getDerivedStateFromProps, (E = typeof m == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (f !== N || A !== b) && Dd(
        e,
        i,
        l,
        b
      ), Ca = !1, A = e.memoizedState, i.state = A, _n(e, l, i, n), Sn();
      var D = e.memoizedState;
      f !== N || A !== D || Ca || t !== null && t.dependencies !== null && Mi(t.dependencies) ? (typeof m == "function" && ($s(
        e,
        a,
        m,
        l
      ), D = e.memoizedState), (q = Ca || Ad(
        e,
        a,
        q,
        l,
        A,
        D,
        b
      ) || t !== null && t.dependencies !== null && Mi(t.dependencies)) ? (E || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(l, D, b), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(
        l,
        D,
        b
      )), typeof i.componentDidUpdate == "function" && (e.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || f === t.memoizedProps && A === t.memoizedState || (e.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || f === t.memoizedProps && A === t.memoizedState || (e.flags |= 1024), e.memoizedProps = l, e.memoizedState = D), i.props = l, i.state = D, i.context = b, l = q) : (typeof i.componentDidUpdate != "function" || f === t.memoizedProps && A === t.memoizedState || (e.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || f === t.memoizedProps && A === t.memoizedState || (e.flags |= 1024), l = !1);
    }
    return i = l, Zi(t, e), l = (e.flags & 128) !== 0, i || l ? (i = e.stateNode, a = l && typeof a.getDerivedStateFromError != "function" ? null : i.render(), e.flags |= 1, t !== null && l ? (e.child = al(
      e,
      t.child,
      null,
      n
    ), e.child = al(
      e,
      null,
      a,
      n
    )) : ee(t, e, a, n), e.memoizedState = i.state, t = e.child) : t = na(
      t,
      e,
      n
    ), t;
  }
  function Yd(t, e, a, l) {
    return $a(), e.flags |= 256, ee(t, e, a, l), e.child;
  }
  var er = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function ar(t) {
    return { baseLanes: t, cachePool: jh() };
  }
  function lr(t, e, a) {
    return t = t !== null ? t.childLanes & ~a : 0, e && (t |= _e), t;
  }
  function Qd(t, e, a) {
    var l = e.pendingProps, n = !1, i = (e.flags & 128) !== 0, f;
    if ((f = i) || (f = t !== null && t.memoizedState === null ? !1 : (kt.current & 2) !== 0), f && (n = !0, e.flags &= -129), f = (e.flags & 32) !== 0, e.flags &= -33, t === null) {
      if (gt) {
        if (n ? Aa(e) : Da(), (t = qt) ? (t = Fm(
          t,
          ze
        ), t = t !== null && t.data !== "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: ba !== null ? { id: ke, overflow: Ye } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, a = Th(t), a.return = e, e.child = a, Pt = e, qt = null)) : t = null, t === null) throw _a(e);
        return Lr(t) ? e.lanes = 32 : e.lanes = 536870912, null;
      }
      var m = l.children;
      return l = l.fallback, n ? (Da(), n = e.mode, m = Ji(
        { mode: "hidden", children: m },
        n
      ), l = Wa(
        l,
        n,
        a,
        null
      ), m.return = e, l.return = e, m.sibling = l, e.child = m, l = e.child, l.memoizedState = ar(a), l.childLanes = lr(
        t,
        f,
        a
      ), e.memoizedState = er, An(null, l)) : (Aa(e), nr(e, m));
    }
    var b = t.memoizedState;
    if (b !== null && (m = b.dehydrated, m !== null)) {
      if (i)
        e.flags & 256 ? (Aa(e), e.flags &= -257, e = ir(
          t,
          e,
          a
        )) : e.memoizedState !== null ? (Da(), e.child = t.child, e.flags |= 128, e = null) : (Da(), m = l.fallback, n = e.mode, l = Ji(
          { mode: "visible", children: l.children },
          n
        ), m = Wa(
          m,
          n,
          a,
          null
        ), m.flags |= 2, l.return = e, m.return = e, l.sibling = m, e.child = l, al(
          e,
          t.child,
          null,
          a
        ), l = e.child, l.memoizedState = ar(a), l.childLanes = lr(
          t,
          f,
          a
        ), e.memoizedState = er, e = An(null, l));
      else if (Aa(e), Lr(m)) {
        if (f = m.nextSibling && m.nextSibling.dataset, f) var E = f.dgst;
        f = E, l = Error(s(419)), l.stack = "", l.digest = f, mn({ value: l, source: null, stack: null }), e = ir(
          t,
          e,
          a
        );
      } else if (Xt || Al(t, e, a, !1), f = (a & t.childLanes) !== 0, Xt || f) {
        if (f = Rt, f !== null && (l = Of(f, a), l !== 0 && l !== b.retryLane))
          throw b.retryLane = l, Ja(t, l), me(f, t, l), Ps;
        Br(m) || lu(), e = ir(
          t,
          e,
          a
        );
      } else
        Br(m) ? (e.flags |= 192, e.child = t.child, e = null) : (t = b.treeContext, qt = Re(
          m.nextSibling
        ), Pt = e, gt = !0, Sa = null, ze = !1, t !== null && Eh(e, t), e = nr(
          e,
          l.children
        ), e.flags |= 4096);
      return e;
    }
    return n ? (Da(), m = l.fallback, n = e.mode, b = t.child, E = b.sibling, l = Ie(b, {
      mode: "hidden",
      children: l.children
    }), l.subtreeFlags = b.subtreeFlags & 65011712, E !== null ? m = Ie(
      E,
      m
    ) : (m = Wa(
      m,
      n,
      a,
      null
    ), m.flags |= 2), m.return = e, l.return = e, l.sibling = m, e.child = l, An(null, l), l = e.child, m = t.child.memoizedState, m === null ? m = ar(a) : (n = m.cachePool, n !== null ? (b = Qt._currentValue, n = n.parent !== b ? { parent: b, pool: b } : n) : n = jh(), m = {
      baseLanes: m.baseLanes | a,
      cachePool: n
    }), l.memoizedState = m, l.childLanes = lr(
      t,
      f,
      a
    ), e.memoizedState = er, An(t.child, l)) : (Aa(e), a = t.child, t = a.sibling, a = Ie(a, {
      mode: "visible",
      children: l.children
    }), a.return = e, a.sibling = null, t !== null && (f = e.deletions, f === null ? (e.deletions = [t], e.flags |= 16) : f.push(t)), e.child = a, e.memoizedState = null, a);
  }
  function nr(t, e) {
    return e = Ji(
      { mode: "visible", children: e },
      t.mode
    ), e.return = t, t.child = e;
  }
  function Ji(t, e) {
    return t = ye(22, t, null, e), t.lanes = 0, t;
  }
  function ir(t, e, a) {
    return al(e, t.child, null, a), t = nr(
      e,
      e.pendingProps.children
    ), t.flags |= 2, e.memoizedState = null, t;
  }
  function Vd(t, e, a) {
    t.lanes |= e;
    var l = t.alternate;
    l !== null && (l.lanes |= e), Ss(t.return, e, a);
  }
  function ur(t, e, a, l, n, i) {
    var f = t.memoizedState;
    f === null ? t.memoizedState = {
      isBackwards: e,
      rendering: null,
      renderingStartTime: 0,
      last: l,
      tail: a,
      tailMode: n,
      treeForkCount: i
    } : (f.isBackwards = e, f.rendering = null, f.renderingStartTime = 0, f.last = l, f.tail = a, f.tailMode = n, f.treeForkCount = i);
  }
  function Xd(t, e, a) {
    var l = e.pendingProps, n = l.revealOrder, i = l.tail;
    l = l.children;
    var f = kt.current, m = (f & 2) !== 0;
    if (m ? (f = f & 1 | 2, e.flags |= 128) : f &= 1, H(kt, f), ee(t, e, l, a), l = gt ? dn : 0, !m && t !== null && (t.flags & 128) !== 0)
      t: for (t = e.child; t !== null; ) {
        if (t.tag === 13)
          t.memoizedState !== null && Vd(t, a, e);
        else if (t.tag === 19)
          Vd(t, a, e);
        else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e) break t;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            break t;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    switch (n) {
      case "forwards":
        for (a = e.child, n = null; a !== null; )
          t = a.alternate, t !== null && Hi(t) === null && (n = a), a = a.sibling;
        a = n, a === null ? (n = e.child, e.child = null) : (n = a.sibling, a.sibling = null), ur(
          e,
          !1,
          n,
          a,
          i,
          l
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (a = null, n = e.child, e.child = null; n !== null; ) {
          if (t = n.alternate, t !== null && Hi(t) === null) {
            e.child = n;
            break;
          }
          t = n.sibling, n.sibling = a, a = n, n = t;
        }
        ur(
          e,
          !0,
          a,
          null,
          i,
          l
        );
        break;
      case "together":
        ur(
          e,
          !1,
          null,
          null,
          void 0,
          l
        );
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function na(t, e, a) {
    if (t !== null && (e.dependencies = t.dependencies), za |= e.lanes, (a & e.childLanes) === 0)
      if (t !== null) {
        if (Al(
          t,
          e,
          a,
          !1
        ), (a & e.childLanes) === 0)
          return null;
      } else return null;
    if (t !== null && e.child !== t.child)
      throw Error(s(153));
    if (e.child !== null) {
      for (t = e.child, a = Ie(t, t.pendingProps), e.child = a, a.return = e; t.sibling !== null; )
        t = t.sibling, a = a.sibling = Ie(t, t.pendingProps), a.return = e;
      a.sibling = null;
    }
    return e.child;
  }
  function sr(t, e) {
    return (t.lanes & e) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && Mi(t)));
  }
  function q0(t, e, a) {
    switch (e.tag) {
      case 3:
        Ut(e, e.stateNode.containerInfo), Ta(e, Qt, t.memoizedState.cache), $a();
        break;
      case 27:
      case 5:
        Be(e);
        break;
      case 4:
        Ut(e, e.stateNode.containerInfo);
        break;
      case 10:
        Ta(
          e,
          e.type,
          e.memoizedProps.value
        );
        break;
      case 31:
        if (e.memoizedState !== null)
          return e.flags |= 128, Rs(e), null;
        break;
      case 13:
        var l = e.memoizedState;
        if (l !== null)
          return l.dehydrated !== null ? (Aa(e), e.flags |= 128, null) : (a & e.child.childLanes) !== 0 ? Qd(t, e, a) : (Aa(e), t = na(
            t,
            e,
            a
          ), t !== null ? t.sibling : null);
        Aa(e);
        break;
      case 19:
        var n = (t.flags & 128) !== 0;
        if (l = (a & e.childLanes) !== 0, l || (Al(
          t,
          e,
          a,
          !1
        ), l = (a & e.childLanes) !== 0), n) {
          if (l)
            return Xd(
              t,
              e,
              a
            );
          e.flags |= 128;
        }
        if (n = e.memoizedState, n !== null && (n.rendering = null, n.tail = null, n.lastEffect = null), H(kt, kt.current), l) break;
        return null;
      case 22:
        return e.lanes = 0, Ud(
          t,
          e,
          a,
          e.pendingProps
        );
      case 24:
        Ta(e, Qt, t.memoizedState.cache);
    }
    return na(t, e, a);
  }
  function Kd(t, e, a) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps)
        Xt = !0;
      else {
        if (!sr(t, a) && (e.flags & 128) === 0)
          return Xt = !1, q0(
            t,
            e,
            a
          );
        Xt = (t.flags & 131072) !== 0;
      }
    else
      Xt = !1, gt && (e.flags & 1048576) !== 0 && xh(e, dn, e.index);
    switch (e.lanes = 0, e.tag) {
      case 16:
        t: {
          var l = e.pendingProps;
          if (t = tl(e.elementType), e.type = t, typeof t == "function")
            hs(t) ? (l = nl(t, l), e.tag = 1, e = kd(
              null,
              e,
              t,
              l,
              a
            )) : (e.tag = 0, e = tr(
              null,
              e,
              t,
              l,
              a
            ));
          else {
            if (t != null) {
              var n = t.$$typeof;
              if (n === rt) {
                e.tag = 11, e = wd(
                  null,
                  e,
                  t,
                  l,
                  a
                );
                break t;
              } else if (n === lt) {
                e.tag = 14, e = Nd(
                  null,
                  e,
                  t,
                  l,
                  a
                );
                break t;
              }
            }
            throw e = I(t) || t, Error(s(306, e, ""));
          }
        }
        return e;
      case 0:
        return tr(
          t,
          e,
          e.type,
          e.pendingProps,
          a
        );
      case 1:
        return l = e.type, n = nl(
          l,
          e.pendingProps
        ), kd(
          t,
          e,
          l,
          n,
          a
        );
      case 3:
        t: {
          if (Ut(
            e,
            e.stateNode.containerInfo
          ), t === null) throw Error(s(387));
          l = e.pendingProps;
          var i = e.memoizedState;
          n = i.element, Ds(t, e), _n(e, l, null, a);
          var f = e.memoizedState;
          if (l = f.cache, Ta(e, Qt, l), l !== i.cache && _s(
            e,
            [Qt],
            a,
            !0
          ), Sn(), l = f.element, i.isDehydrated)
            if (i = {
              element: l,
              isDehydrated: !1,
              cache: f.cache
            }, e.updateQueue.baseState = i, e.memoizedState = i, e.flags & 256) {
              e = Yd(
                t,
                e,
                l,
                a
              );
              break t;
            } else if (l !== n) {
              n = De(
                Error(s(424)),
                e
              ), mn(n), e = Yd(
                t,
                e,
                l,
                a
              );
              break t;
            } else {
              switch (t = e.stateNode.containerInfo, t.nodeType) {
                case 9:
                  t = t.body;
                  break;
                default:
                  t = t.nodeName === "HTML" ? t.ownerDocument.body : t;
              }
              for (qt = Re(t.firstChild), Pt = e, gt = !0, Sa = null, ze = !0, a = Uh(
                e,
                null,
                l,
                a
              ), e.child = a; a; )
                a.flags = a.flags & -3 | 4096, a = a.sibling;
            }
          else {
            if ($a(), l === n) {
              e = na(
                t,
                e,
                a
              );
              break t;
            }
            ee(t, e, l, a);
          }
          e = e.child;
        }
        return e;
      case 26:
        return Zi(t, e), t === null ? (a = lv(
          e.type,
          null,
          e.pendingProps,
          null
        )) ? e.memoizedState = a : gt || (a = e.type, t = e.pendingProps, l = ou(
          ut.current
        ).createElement(a), l[It] = e, l[re] = t, ae(l, a, t), $t(l), e.stateNode = l) : e.memoizedState = lv(
          e.type,
          t.memoizedProps,
          e.pendingProps,
          t.memoizedState
        ), null;
      case 27:
        return Be(e), t === null && gt && (l = e.stateNode = tv(
          e.type,
          e.pendingProps,
          ut.current
        ), Pt = e, ze = !0, n = qt, Na(e.type) ? (Gr = n, qt = Re(l.firstChild)) : qt = n), ee(
          t,
          e,
          e.pendingProps.children,
          a
        ), Zi(t, e), t === null && (e.flags |= 4194304), e.child;
      case 5:
        return t === null && gt && ((n = l = qt) && (l = c1(
          l,
          e.type,
          e.pendingProps,
          ze
        ), l !== null ? (e.stateNode = l, Pt = e, qt = Re(l.firstChild), ze = !1, n = !0) : n = !1), n || _a(e)), Be(e), n = e.type, i = e.pendingProps, f = t !== null ? t.memoizedProps : null, l = i.children, Nr(n, i) ? l = null : f !== null && Nr(n, f) && (e.flags |= 32), e.memoizedState !== null && (n = ws(
          t,
          e,
          x0,
          null,
          null,
          a
        ), kn._currentValue = n), Zi(t, e), ee(t, e, l, a), e.child;
      case 6:
        return t === null && gt && ((t = a = qt) && (a = o1(
          a,
          e.pendingProps,
          ze
        ), a !== null ? (e.stateNode = a, Pt = e, qt = null, t = !0) : t = !1), t || _a(e)), null;
      case 13:
        return Qd(t, e, a);
      case 4:
        return Ut(
          e,
          e.stateNode.containerInfo
        ), l = e.pendingProps, t === null ? e.child = al(
          e,
          null,
          l,
          a
        ) : ee(t, e, l, a), e.child;
      case 11:
        return wd(
          t,
          e,
          e.type,
          e.pendingProps,
          a
        );
      case 7:
        return ee(
          t,
          e,
          e.pendingProps,
          a
        ), e.child;
      case 8:
        return ee(
          t,
          e,
          e.pendingProps.children,
          a
        ), e.child;
      case 12:
        return ee(
          t,
          e,
          e.pendingProps.children,
          a
        ), e.child;
      case 10:
        return l = e.pendingProps, Ta(e, e.type, l.value), ee(t, e, l.children, a), e.child;
      case 9:
        return n = e.type._context, l = e.pendingProps.children, Ia(e), n = te(n), l = l(n), e.flags |= 1, ee(t, e, l, a), e.child;
      case 14:
        return Nd(
          t,
          e,
          e.type,
          e.pendingProps,
          a
        );
      case 15:
        return Hd(
          t,
          e,
          e.type,
          e.pendingProps,
          a
        );
      case 19:
        return Xd(t, e, a);
      case 31:
        return R0(t, e, a);
      case 22:
        return Ud(
          t,
          e,
          a,
          e.pendingProps
        );
      case 24:
        return Ia(e), l = te(Qt), t === null ? (n = xs(), n === null && (n = Rt, i = Ts(), n.pooledCache = i, i.refCount++, i !== null && (n.pooledCacheLanes |= a), n = i), e.memoizedState = { parent: l, cache: n }, As(e), Ta(e, Qt, n)) : ((t.lanes & a) !== 0 && (Ds(t, e), _n(e, null, null, a), Sn()), n = t.memoizedState, i = e.memoizedState, n.parent !== l ? (n = { parent: l, cache: l }, e.memoizedState = n, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = n), Ta(e, Qt, l)) : (l = i.cache, Ta(e, Qt, l), l !== n.cache && _s(
          e,
          [Qt],
          a,
          !0
        ))), ee(
          t,
          e,
          e.pendingProps.children,
          a
        ), e.child;
      case 29:
        throw e.pendingProps;
    }
    throw Error(s(156, e.tag));
  }
  function ia(t) {
    t.flags |= 4;
  }
  function rr(t, e, a, l, n) {
    if ((e = (t.mode & 32) !== 0) && (e = !1), e) {
      if (t.flags |= 16777216, (n & 335544128) === n)
        if (t.stateNode.complete) t.flags |= 8192;
        else if (bm()) t.flags |= 8192;
        else
          throw el = Ri, Es;
    } else t.flags &= -16777217;
  }
  function Zd(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (t.flags |= 16777216, !rv(e))
      if (bm()) t.flags |= 8192;
      else
        throw el = Ri, Es;
  }
  function Wi(t, e) {
    e !== null && (t.flags |= 4), t.flags & 16384 && (e = t.tag !== 22 ? Af() : 536870912, t.lanes |= e, Bl |= e);
  }
  function Dn(t, e) {
    if (!gt)
      switch (t.tailMode) {
        case "hidden":
          e = t.tail;
          for (var a = null; e !== null; )
            e.alternate !== null && (a = e), e = e.sibling;
          a === null ? t.tail = null : a.sibling = null;
          break;
        case "collapsed":
          a = t.tail;
          for (var l = null; a !== null; )
            a.alternate !== null && (l = a), a = a.sibling;
          l === null ? e || t.tail === null ? t.tail = null : t.tail.sibling = null : l.sibling = null;
      }
  }
  function wt(t) {
    var e = t.alternate !== null && t.alternate.child === t.child, a = 0, l = 0;
    if (e)
      for (var n = t.child; n !== null; )
        a |= n.lanes | n.childLanes, l |= n.subtreeFlags & 65011712, l |= n.flags & 65011712, n.return = t, n = n.sibling;
    else
      for (n = t.child; n !== null; )
        a |= n.lanes | n.childLanes, l |= n.subtreeFlags, l |= n.flags, n.return = t, n = n.sibling;
    return t.subtreeFlags |= l, t.childLanes = a, e;
  }
  function w0(t, e, a) {
    var l = e.pendingProps;
    switch (gs(e), e.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return wt(e), null;
      case 1:
        return wt(e), null;
      case 3:
        return a = e.stateNode, l = null, t !== null && (l = t.memoizedState.cache), e.memoizedState.cache !== l && (e.flags |= 2048), ea(Qt), Et(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (t === null || t.child === null) && (El(e) ? ia(e) : t === null || t.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024, ps())), wt(e), null;
      case 26:
        var n = e.type, i = e.memoizedState;
        return t === null ? (ia(e), i !== null ? (wt(e), Zd(e, i)) : (wt(e), rr(
          e,
          n,
          null,
          l,
          a
        ))) : i ? i !== t.memoizedState ? (ia(e), wt(e), Zd(e, i)) : (wt(e), e.flags &= -16777217) : (t = t.memoizedProps, t !== l && ia(e), wt(e), rr(
          e,
          n,
          t,
          l,
          a
        )), null;
      case 27:
        if (Ya(e), a = ut.current, n = e.type, t !== null && e.stateNode != null)
          t.memoizedProps !== l && ia(e);
        else {
          if (!l) {
            if (e.stateNode === null)
              throw Error(s(166));
            return wt(e), null;
          }
          t = k.current, El(e) ? Ah(e) : (t = tv(n, l, a), e.stateNode = t, ia(e));
        }
        return wt(e), null;
      case 5:
        if (Ya(e), n = e.type, t !== null && e.stateNode != null)
          t.memoizedProps !== l && ia(e);
        else {
          if (!l) {
            if (e.stateNode === null)
              throw Error(s(166));
            return wt(e), null;
          }
          if (i = k.current, El(e))
            Ah(e);
          else {
            var f = ou(
              ut.current
            );
            switch (i) {
              case 1:
                i = f.createElementNS(
                  "http://www.w3.org/2000/svg",
                  n
                );
                break;
              case 2:
                i = f.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  n
                );
                break;
              default:
                switch (n) {
                  case "svg":
                    i = f.createElementNS(
                      "http://www.w3.org/2000/svg",
                      n
                    );
                    break;
                  case "math":
                    i = f.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      n
                    );
                    break;
                  case "script":
                    i = f.createElement("div"), i.innerHTML = "<script><\/script>", i = i.removeChild(
                      i.firstChild
                    );
                    break;
                  case "select":
                    i = typeof l.is == "string" ? f.createElement("select", {
                      is: l.is
                    }) : f.createElement("select"), l.multiple ? i.multiple = !0 : l.size && (i.size = l.size);
                    break;
                  default:
                    i = typeof l.is == "string" ? f.createElement(n, { is: l.is }) : f.createElement(n);
                }
            }
            i[It] = e, i[re] = l;
            t: for (f = e.child; f !== null; ) {
              if (f.tag === 5 || f.tag === 6)
                i.appendChild(f.stateNode);
              else if (f.tag !== 4 && f.tag !== 27 && f.child !== null) {
                f.child.return = f, f = f.child;
                continue;
              }
              if (f === e) break t;
              for (; f.sibling === null; ) {
                if (f.return === null || f.return === e)
                  break t;
                f = f.return;
              }
              f.sibling.return = f.return, f = f.sibling;
            }
            e.stateNode = i;
            t: switch (ae(i, n, l), n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                l = !!l.autoFocus;
                break t;
              case "img":
                l = !0;
                break t;
              default:
                l = !1;
            }
            l && ia(e);
          }
        }
        return wt(e), rr(
          e,
          e.type,
          t === null ? null : t.memoizedProps,
          e.pendingProps,
          a
        ), null;
      case 6:
        if (t && e.stateNode != null)
          t.memoizedProps !== l && ia(e);
        else {
          if (typeof l != "string" && e.stateNode === null)
            throw Error(s(166));
          if (t = ut.current, El(e)) {
            if (t = e.stateNode, a = e.memoizedProps, l = null, n = Pt, n !== null)
              switch (n.tag) {
                case 27:
                case 5:
                  l = n.memoizedProps;
              }
            t[It] = e, t = !!(t.nodeValue === a || l !== null && l.suppressHydrationWarning === !0 || Qm(t.nodeValue, a)), t || _a(e, !0);
          } else
            t = ou(t).createTextNode(
              l
            ), t[It] = e, e.stateNode = t;
        }
        return wt(e), null;
      case 31:
        if (a = e.memoizedState, t === null || t.memoizedState !== null) {
          if (l = El(e), a !== null) {
            if (t === null) {
              if (!l) throw Error(s(318));
              if (t = e.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(s(557));
              t[It] = e;
            } else
              $a(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            wt(e), t = !1;
          } else
            a = ps(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = a), t = !0;
          if (!t)
            return e.flags & 256 ? (be(e), e) : (be(e), null);
          if ((e.flags & 128) !== 0)
            throw Error(s(558));
        }
        return wt(e), null;
      case 13:
        if (l = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (n = El(e), l !== null && l.dehydrated !== null) {
            if (t === null) {
              if (!n) throw Error(s(318));
              if (n = e.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(s(317));
              n[It] = e;
            } else
              $a(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            wt(e), n = !1;
          } else
            n = ps(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = n), n = !0;
          if (!n)
            return e.flags & 256 ? (be(e), e) : (be(e), null);
        }
        return be(e), (e.flags & 128) !== 0 ? (e.lanes = a, e) : (a = l !== null, t = t !== null && t.memoizedState !== null, a && (l = e.child, n = null, l.alternate !== null && l.alternate.memoizedState !== null && l.alternate.memoizedState.cachePool !== null && (n = l.alternate.memoizedState.cachePool.pool), i = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (i = l.memoizedState.cachePool.pool), i !== n && (l.flags |= 2048)), a !== t && a && (e.child.flags |= 8192), Wi(e, e.updateQueue), wt(e), null);
      case 4:
        return Et(), t === null && zr(e.stateNode.containerInfo), wt(e), null;
      case 10:
        return ea(e.type), wt(e), null;
      case 19:
        if (O(kt), l = e.memoizedState, l === null) return wt(e), null;
        if (n = (e.flags & 128) !== 0, i = l.rendering, i === null)
          if (n) Dn(l, !1);
          else {
            if (Lt !== 0 || t !== null && (t.flags & 128) !== 0)
              for (t = e.child; t !== null; ) {
                if (i = Hi(t), i !== null) {
                  for (e.flags |= 128, Dn(l, !1), t = i.updateQueue, e.updateQueue = t, Wi(e, t), e.subtreeFlags = 0, t = a, a = e.child; a !== null; )
                    _h(a, t), a = a.sibling;
                  return H(
                    kt,
                    kt.current & 1 | 2
                  ), gt && Pe(e, l.treeForkCount), e.child;
                }
                t = t.sibling;
              }
            l.tail !== null && Wt() > tu && (e.flags |= 128, n = !0, Dn(l, !1), e.lanes = 4194304);
          }
        else {
          if (!n)
            if (t = Hi(i), t !== null) {
              if (e.flags |= 128, n = !0, t = t.updateQueue, e.updateQueue = t, Wi(e, t), Dn(l, !0), l.tail === null && l.tailMode === "hidden" && !i.alternate && !gt)
                return wt(e), null;
            } else
              2 * Wt() - l.renderingStartTime > tu && a !== 536870912 && (e.flags |= 128, n = !0, Dn(l, !1), e.lanes = 4194304);
          l.isBackwards ? (i.sibling = e.child, e.child = i) : (t = l.last, t !== null ? t.sibling = i : e.child = i, l.last = i);
        }
        return l.tail !== null ? (t = l.tail, l.rendering = t, l.tail = t.sibling, l.renderingStartTime = Wt(), t.sibling = null, a = kt.current, H(
          kt,
          n ? a & 1 | 2 : a & 1
        ), gt && Pe(e, l.treeForkCount), t) : (wt(e), null);
      case 22:
      case 23:
        return be(e), js(), l = e.memoizedState !== null, t !== null ? t.memoizedState !== null !== l && (e.flags |= 8192) : l && (e.flags |= 8192), l ? (a & 536870912) !== 0 && (e.flags & 128) === 0 && (wt(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : wt(e), a = e.updateQueue, a !== null && Wi(e, a.retryQueue), a = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), l = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), l !== a && (e.flags |= 2048), t !== null && O(Pa), null;
      case 24:
        return a = null, t !== null && (a = t.memoizedState.cache), e.memoizedState.cache !== a && (e.flags |= 2048), ea(Qt), wt(e), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(s(156, e.tag));
  }
  function N0(t, e) {
    switch (gs(e), e.tag) {
      case 1:
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 3:
        return ea(Qt), Et(), t = e.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (e.flags = t & -65537 | 128, e) : null;
      case 26:
      case 27:
      case 5:
        return Ya(e), null;
      case 31:
        if (e.memoizedState !== null) {
          if (be(e), e.alternate === null)
            throw Error(s(340));
          $a();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 13:
        if (be(e), t = e.memoizedState, t !== null && t.dehydrated !== null) {
          if (e.alternate === null)
            throw Error(s(340));
          $a();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 19:
        return O(kt), null;
      case 4:
        return Et(), null;
      case 10:
        return ea(e.type), null;
      case 22:
      case 23:
        return be(e), js(), t !== null && O(Pa), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 24:
        return ea(Qt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Jd(t, e) {
    switch (gs(e), e.tag) {
      case 3:
        ea(Qt), Et();
        break;
      case 26:
      case 27:
      case 5:
        Ya(e);
        break;
      case 4:
        Et();
        break;
      case 31:
        e.memoizedState !== null && be(e);
        break;
      case 13:
        be(e);
        break;
      case 19:
        O(kt);
        break;
      case 10:
        ea(e.type);
        break;
      case 22:
      case 23:
        be(e), js(), t !== null && O(Pa);
        break;
      case 24:
        ea(Qt);
    }
  }
  function Mn(t, e) {
    try {
      var a = e.updateQueue, l = a !== null ? a.lastEffect : null;
      if (l !== null) {
        var n = l.next;
        a = n;
        do {
          if ((a.tag & t) === t) {
            l = void 0;
            var i = a.create, f = a.inst;
            l = i(), f.destroy = l;
          }
          a = a.next;
        } while (a !== n);
      }
    } catch (m) {
      Dt(e, e.return, m);
    }
  }
  function Ma(t, e, a) {
    try {
      var l = e.updateQueue, n = l !== null ? l.lastEffect : null;
      if (n !== null) {
        var i = n.next;
        l = i;
        do {
          if ((l.tag & t) === t) {
            var f = l.inst, m = f.destroy;
            if (m !== void 0) {
              f.destroy = void 0, n = e;
              var b = a, E = m;
              try {
                E();
              } catch (q) {
                Dt(
                  n,
                  b,
                  q
                );
              }
            }
          }
          l = l.next;
        } while (l !== i);
      }
    } catch (q) {
      Dt(e, e.return, q);
    }
  }
  function Wd(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var a = t.stateNode;
      try {
        Lh(e, a);
      } catch (l) {
        Dt(t, t.return, l);
      }
    }
  }
  function $d(t, e, a) {
    a.props = nl(
      t.type,
      t.memoizedProps
    ), a.state = t.memoizedState;
    try {
      a.componentWillUnmount();
    } catch (l) {
      Dt(t, e, l);
    }
  }
  function On(t, e) {
    try {
      var a = t.ref;
      if (a !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var l = t.stateNode;
            break;
          case 30:
            l = t.stateNode;
            break;
          default:
            l = t.stateNode;
        }
        typeof a == "function" ? t.refCleanup = a(l) : a.current = l;
      }
    } catch (n) {
      Dt(t, e, n);
    }
  }
  function Qe(t, e) {
    var a = t.ref, l = t.refCleanup;
    if (a !== null)
      if (typeof l == "function")
        try {
          l();
        } catch (n) {
          Dt(t, e, n);
        } finally {
          t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
        }
      else if (typeof a == "function")
        try {
          a(null);
        } catch (n) {
          Dt(t, e, n);
        }
      else a.current = null;
  }
  function Fd(t) {
    var e = t.type, a = t.memoizedProps, l = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && l.focus();
          break t;
        case "img":
          a.src ? l.src = a.src : a.srcSet && (l.srcset = a.srcSet);
      }
    } catch (n) {
      Dt(t, t.return, n);
    }
  }
  function cr(t, e, a) {
    try {
      var l = t.stateNode;
      l1(l, t.type, a, e), l[re] = e;
    } catch (n) {
      Dt(t, t.return, n);
    }
  }
  function Id(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && Na(t.type) || t.tag === 4;
  }
  function or(t) {
    t: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || Id(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
        if (t.tag === 27 && Na(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function fr(t, e, a) {
    var l = t.tag;
    if (l === 5 || l === 6)
      t = t.stateNode, e ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(t, e) : (e = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, e.appendChild(t), a = a._reactRootContainer, a != null || e.onclick !== null || (e.onclick = $e));
    else if (l !== 4 && (l === 27 && Na(t.type) && (a = t.stateNode, e = null), t = t.child, t !== null))
      for (fr(t, e, a), t = t.sibling; t !== null; )
        fr(t, e, a), t = t.sibling;
  }
  function $i(t, e, a) {
    var l = t.tag;
    if (l === 5 || l === 6)
      t = t.stateNode, e ? a.insertBefore(t, e) : a.appendChild(t);
    else if (l !== 4 && (l === 27 && Na(t.type) && (a = t.stateNode), t = t.child, t !== null))
      for ($i(t, e, a), t = t.sibling; t !== null; )
        $i(t, e, a), t = t.sibling;
  }
  function Pd(t) {
    var e = t.stateNode, a = t.memoizedProps;
    try {
      for (var l = t.type, n = e.attributes; n.length; )
        e.removeAttributeNode(n[0]);
      ae(e, l, a), e[It] = t, e[re] = a;
    } catch (i) {
      Dt(t, t.return, i);
    }
  }
  var ua = !1, Kt = !1, hr = !1, tm = typeof WeakSet == "function" ? WeakSet : Set, Ft = null;
  function H0(t, e) {
    if (t = t.containerInfo, qr = yu, t = hh(t), is(t)) {
      if ("selectionStart" in t)
        var a = {
          start: t.selectionStart,
          end: t.selectionEnd
        };
      else
        t: {
          a = (a = t.ownerDocument) && a.defaultView || window;
          var l = a.getSelection && a.getSelection();
          if (l && l.rangeCount !== 0) {
            a = l.anchorNode;
            var n = l.anchorOffset, i = l.focusNode;
            l = l.focusOffset;
            try {
              a.nodeType, i.nodeType;
            } catch {
              a = null;
              break t;
            }
            var f = 0, m = -1, b = -1, E = 0, q = 0, N = t, A = null;
            e: for (; ; ) {
              for (var D; N !== a || n !== 0 && N.nodeType !== 3 || (m = f + n), N !== i || l !== 0 && N.nodeType !== 3 || (b = f + l), N.nodeType === 3 && (f += N.nodeValue.length), (D = N.firstChild) !== null; )
                A = N, N = D;
              for (; ; ) {
                if (N === t) break e;
                if (A === a && ++E === n && (m = f), A === i && ++q === l && (b = f), (D = N.nextSibling) !== null) break;
                N = A, A = N.parentNode;
              }
              N = D;
            }
            a = m === -1 || b === -1 ? null : { start: m, end: b };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (wr = { focusedElem: t, selectionRange: a }, yu = !1, Ft = e; Ft !== null; )
      if (e = Ft, t = e.child, (e.subtreeFlags & 1028) !== 0 && t !== null)
        t.return = e, Ft = t;
      else
        for (; Ft !== null; ) {
          switch (e = Ft, i = e.alternate, t = e.flags, e.tag) {
            case 0:
              if ((t & 4) !== 0 && (t = e.updateQueue, t = t !== null ? t.events : null, t !== null))
                for (a = 0; a < t.length; a++)
                  n = t[a], n.ref.impl = n.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && i !== null) {
                t = void 0, a = e, n = i.memoizedProps, i = i.memoizedState, l = a.stateNode;
                try {
                  var Q = nl(
                    a.type,
                    n
                  );
                  t = l.getSnapshotBeforeUpdate(
                    Q,
                    i
                  ), l.__reactInternalSnapshotBeforeUpdate = t;
                } catch (P) {
                  Dt(
                    a,
                    a.return,
                    P
                  );
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (t = e.stateNode.containerInfo, a = t.nodeType, a === 9)
                  Ur(t);
                else if (a === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Ur(t);
                      break;
                    default:
                      t.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((t & 1024) !== 0) throw Error(s(163));
          }
          if (t = e.sibling, t !== null) {
            t.return = e.return, Ft = t;
            break;
          }
          Ft = e.return;
        }
  }
  function em(t, e, a) {
    var l = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        ra(t, a), l & 4 && Mn(5, a);
        break;
      case 1:
        if (ra(t, a), l & 4)
          if (t = a.stateNode, e === null)
            try {
              t.componentDidMount();
            } catch (f) {
              Dt(a, a.return, f);
            }
          else {
            var n = nl(
              a.type,
              e.memoizedProps
            );
            e = e.memoizedState;
            try {
              t.componentDidUpdate(
                n,
                e,
                t.__reactInternalSnapshotBeforeUpdate
              );
            } catch (f) {
              Dt(
                a,
                a.return,
                f
              );
            }
          }
        l & 64 && Wd(a), l & 512 && On(a, a.return);
        break;
      case 3:
        if (ra(t, a), l & 64 && (t = a.updateQueue, t !== null)) {
          if (e = null, a.child !== null)
            switch (a.child.tag) {
              case 27:
              case 5:
                e = a.child.stateNode;
                break;
              case 1:
                e = a.child.stateNode;
            }
          try {
            Lh(t, e);
          } catch (f) {
            Dt(a, a.return, f);
          }
        }
        break;
      case 27:
        e === null && l & 4 && Pd(a);
      case 26:
      case 5:
        ra(t, a), e === null && l & 4 && Fd(a), l & 512 && On(a, a.return);
        break;
      case 12:
        ra(t, a);
        break;
      case 31:
        ra(t, a), l & 4 && nm(t, a);
        break;
      case 13:
        ra(t, a), l & 4 && im(t, a), l & 64 && (t = a.memoizedState, t !== null && (t = t.dehydrated, t !== null && (a = X0.bind(
          null,
          a
        ), f1(t, a))));
        break;
      case 22:
        if (l = a.memoizedState !== null || ua, !l) {
          e = e !== null && e.memoizedState !== null || Kt, n = ua;
          var i = Kt;
          ua = l, (Kt = e) && !i ? ca(
            t,
            a,
            (a.subtreeFlags & 8772) !== 0
          ) : ra(t, a), ua = n, Kt = i;
        }
        break;
      case 30:
        break;
      default:
        ra(t, a);
    }
  }
  function am(t) {
    var e = t.alternate;
    e !== null && (t.alternate = null, am(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && Yu(e)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  var Nt = null, oe = !1;
  function sa(t, e, a) {
    for (a = a.child; a !== null; )
      lm(t, e, a), a = a.sibling;
  }
  function lm(t, e, a) {
    if (Gt && typeof Gt.onCommitFiberUnmount == "function")
      try {
        Gt.onCommitFiberUnmount(se, a);
      } catch {
      }
    switch (a.tag) {
      case 26:
        Kt || Qe(a, e), sa(
          t,
          e,
          a
        ), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode, a.parentNode.removeChild(a));
        break;
      case 27:
        Kt || Qe(a, e);
        var l = Nt, n = oe;
        Na(a.type) && (Nt = a.stateNode, oe = !1), sa(
          t,
          e,
          a
        ), Bn(a.stateNode), Nt = l, oe = n;
        break;
      case 5:
        Kt || Qe(a, e);
      case 6:
        if (l = Nt, n = oe, Nt = null, sa(
          t,
          e,
          a
        ), Nt = l, oe = n, Nt !== null)
          if (oe)
            try {
              (Nt.nodeType === 9 ? Nt.body : Nt.nodeName === "HTML" ? Nt.ownerDocument.body : Nt).removeChild(a.stateNode);
            } catch (i) {
              Dt(
                a,
                e,
                i
              );
            }
          else
            try {
              Nt.removeChild(a.stateNode);
            } catch (i) {
              Dt(
                a,
                e,
                i
              );
            }
        break;
      case 18:
        Nt !== null && (oe ? (t = Nt, Wm(
          t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t,
          a.stateNode
        ), Kl(t)) : Wm(Nt, a.stateNode));
        break;
      case 4:
        l = Nt, n = oe, Nt = a.stateNode.containerInfo, oe = !0, sa(
          t,
          e,
          a
        ), Nt = l, oe = n;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Ma(2, a, e), Kt || Ma(4, a, e), sa(
          t,
          e,
          a
        );
        break;
      case 1:
        Kt || (Qe(a, e), l = a.stateNode, typeof l.componentWillUnmount == "function" && $d(
          a,
          e,
          l
        )), sa(
          t,
          e,
          a
        );
        break;
      case 21:
        sa(
          t,
          e,
          a
        );
        break;
      case 22:
        Kt = (l = Kt) || a.memoizedState !== null, sa(
          t,
          e,
          a
        ), Kt = l;
        break;
      default:
        sa(
          t,
          e,
          a
        );
    }
  }
  function nm(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null))) {
      t = t.dehydrated;
      try {
        Kl(t);
      } catch (a) {
        Dt(e, e.return, a);
      }
    }
  }
  function im(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null))))
      try {
        Kl(t);
      } catch (a) {
        Dt(e, e.return, a);
      }
  }
  function U0(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var e = t.stateNode;
        return e === null && (e = t.stateNode = new tm()), e;
      case 22:
        return t = t.stateNode, e = t._retryCache, e === null && (e = t._retryCache = new tm()), e;
      default:
        throw Error(s(435, t.tag));
    }
  }
  function Fi(t, e) {
    var a = U0(t);
    e.forEach(function(l) {
      if (!a.has(l)) {
        a.add(l);
        var n = K0.bind(null, t, l);
        l.then(n, n);
      }
    });
  }
  function fe(t, e) {
    var a = e.deletions;
    if (a !== null)
      for (var l = 0; l < a.length; l++) {
        var n = a[l], i = t, f = e, m = f;
        t: for (; m !== null; ) {
          switch (m.tag) {
            case 27:
              if (Na(m.type)) {
                Nt = m.stateNode, oe = !1;
                break t;
              }
              break;
            case 5:
              Nt = m.stateNode, oe = !1;
              break t;
            case 3:
            case 4:
              Nt = m.stateNode.containerInfo, oe = !0;
              break t;
          }
          m = m.return;
        }
        if (Nt === null) throw Error(s(160));
        lm(i, f, n), Nt = null, oe = !1, i = n.alternate, i !== null && (i.return = null), n.return = null;
      }
    if (e.subtreeFlags & 13886)
      for (e = e.child; e !== null; )
        um(e, t), e = e.sibling;
  }
  var He = null;
  function um(t, e) {
    var a = t.alternate, l = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        fe(e, t), he(t), l & 4 && (Ma(3, t, t.return), Mn(3, t), Ma(5, t, t.return));
        break;
      case 1:
        fe(e, t), he(t), l & 512 && (Kt || a === null || Qe(a, a.return)), l & 64 && ua && (t = t.updateQueue, t !== null && (l = t.callbacks, l !== null && (a = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = a === null ? l : a.concat(l))));
        break;
      case 26:
        var n = He;
        if (fe(e, t), he(t), l & 512 && (Kt || a === null || Qe(a, a.return)), l & 4) {
          var i = a !== null ? a.memoizedState : null;
          if (l = t.memoizedState, a === null)
            if (l === null)
              if (t.stateNode === null) {
                t: {
                  l = t.type, a = t.memoizedProps, n = n.ownerDocument || n;
                  e: switch (l) {
                    case "title":
                      i = n.getElementsByTagName("title")[0], (!i || i[en] || i[It] || i.namespaceURI === "http://www.w3.org/2000/svg" || i.hasAttribute("itemprop")) && (i = n.createElement(l), n.head.insertBefore(
                        i,
                        n.querySelector("head > title")
                      )), ae(i, l, a), i[It] = t, $t(i), l = i;
                      break t;
                    case "link":
                      var f = uv(
                        "link",
                        "href",
                        n
                      ).get(l + (a.href || ""));
                      if (f) {
                        for (var m = 0; m < f.length; m++)
                          if (i = f[m], i.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && i.getAttribute("rel") === (a.rel == null ? null : a.rel) && i.getAttribute("title") === (a.title == null ? null : a.title) && i.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                            f.splice(m, 1);
                            break e;
                          }
                      }
                      i = n.createElement(l), ae(i, l, a), n.head.appendChild(i);
                      break;
                    case "meta":
                      if (f = uv(
                        "meta",
                        "content",
                        n
                      ).get(l + (a.content || ""))) {
                        for (m = 0; m < f.length; m++)
                          if (i = f[m], i.getAttribute("content") === (a.content == null ? null : "" + a.content) && i.getAttribute("name") === (a.name == null ? null : a.name) && i.getAttribute("property") === (a.property == null ? null : a.property) && i.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && i.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                            f.splice(m, 1);
                            break e;
                          }
                      }
                      i = n.createElement(l), ae(i, l, a), n.head.appendChild(i);
                      break;
                    default:
                      throw Error(s(468, l));
                  }
                  i[It] = t, $t(i), l = i;
                }
                t.stateNode = l;
              } else
                sv(
                  n,
                  t.type,
                  t.stateNode
                );
            else
              t.stateNode = iv(
                n,
                l,
                t.memoizedProps
              );
          else
            i !== l ? (i === null ? a.stateNode !== null && (a = a.stateNode, a.parentNode.removeChild(a)) : i.count--, l === null ? sv(
              n,
              t.type,
              t.stateNode
            ) : iv(
              n,
              l,
              t.memoizedProps
            )) : l === null && t.stateNode !== null && cr(
              t,
              t.memoizedProps,
              a.memoizedProps
            );
        }
        break;
      case 27:
        fe(e, t), he(t), l & 512 && (Kt || a === null || Qe(a, a.return)), a !== null && l & 4 && cr(
          t,
          t.memoizedProps,
          a.memoizedProps
        );
        break;
      case 5:
        if (fe(e, t), he(t), l & 512 && (Kt || a === null || Qe(a, a.return)), t.flags & 32) {
          n = t.stateNode;
          try {
            vl(n, "");
          } catch (Q) {
            Dt(t, t.return, Q);
          }
        }
        l & 4 && t.stateNode != null && (n = t.memoizedProps, cr(
          t,
          n,
          a !== null ? a.memoizedProps : n
        )), l & 1024 && (hr = !0);
        break;
      case 6:
        if (fe(e, t), he(t), l & 4) {
          if (t.stateNode === null)
            throw Error(s(162));
          l = t.memoizedProps, a = t.stateNode;
          try {
            a.nodeValue = l;
          } catch (Q) {
            Dt(t, t.return, Q);
          }
        }
        break;
      case 3:
        if (du = null, n = He, He = fu(e.containerInfo), fe(e, t), He = n, he(t), l & 4 && a !== null && a.memoizedState.isDehydrated)
          try {
            Kl(e.containerInfo);
          } catch (Q) {
            Dt(t, t.return, Q);
          }
        hr && (hr = !1, sm(t));
        break;
      case 4:
        l = He, He = fu(
          t.stateNode.containerInfo
        ), fe(e, t), he(t), He = l;
        break;
      case 12:
        fe(e, t), he(t);
        break;
      case 31:
        fe(e, t), he(t), l & 4 && (l = t.updateQueue, l !== null && (t.updateQueue = null, Fi(t, l)));
        break;
      case 13:
        fe(e, t), he(t), t.child.flags & 8192 && t.memoizedState !== null != (a !== null && a.memoizedState !== null) && (Pi = Wt()), l & 4 && (l = t.updateQueue, l !== null && (t.updateQueue = null, Fi(t, l)));
        break;
      case 22:
        n = t.memoizedState !== null;
        var b = a !== null && a.memoizedState !== null, E = ua, q = Kt;
        if (ua = E || n, Kt = q || b, fe(e, t), Kt = q, ua = E, he(t), l & 8192)
          t: for (e = t.stateNode, e._visibility = n ? e._visibility & -2 : e._visibility | 1, n && (a === null || b || ua || Kt || il(t)), a = null, e = t; ; ) {
            if (e.tag === 5 || e.tag === 26) {
              if (a === null) {
                b = a = e;
                try {
                  if (i = b.stateNode, n)
                    f = i.style, typeof f.setProperty == "function" ? f.setProperty("display", "none", "important") : f.display = "none";
                  else {
                    m = b.stateNode;
                    var N = b.memoizedProps.style, A = N != null && N.hasOwnProperty("display") ? N.display : null;
                    m.style.display = A == null || typeof A == "boolean" ? "" : ("" + A).trim();
                  }
                } catch (Q) {
                  Dt(b, b.return, Q);
                }
              }
            } else if (e.tag === 6) {
              if (a === null) {
                b = e;
                try {
                  b.stateNode.nodeValue = n ? "" : b.memoizedProps;
                } catch (Q) {
                  Dt(b, b.return, Q);
                }
              }
            } else if (e.tag === 18) {
              if (a === null) {
                b = e;
                try {
                  var D = b.stateNode;
                  n ? $m(D, !0) : $m(b.stateNode, !1);
                } catch (Q) {
                  Dt(b, b.return, Q);
                }
              }
            } else if ((e.tag !== 22 && e.tag !== 23 || e.memoizedState === null || e === t) && e.child !== null) {
              e.child.return = e, e = e.child;
              continue;
            }
            if (e === t) break t;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t) break t;
              a === e && (a = null), e = e.return;
            }
            a === e && (a = null), e.sibling.return = e.return, e = e.sibling;
          }
        l & 4 && (l = t.updateQueue, l !== null && (a = l.retryQueue, a !== null && (l.retryQueue = null, Fi(t, a))));
        break;
      case 19:
        fe(e, t), he(t), l & 4 && (l = t.updateQueue, l !== null && (t.updateQueue = null, Fi(t, l)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        fe(e, t), he(t);
    }
  }
  function he(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var a, l = t.return; l !== null; ) {
          if (Id(l)) {
            a = l;
            break;
          }
          l = l.return;
        }
        if (a == null) throw Error(s(160));
        switch (a.tag) {
          case 27:
            var n = a.stateNode, i = or(t);
            $i(t, i, n);
            break;
          case 5:
            var f = a.stateNode;
            a.flags & 32 && (vl(f, ""), a.flags &= -33);
            var m = or(t);
            $i(t, m, f);
            break;
          case 3:
          case 4:
            var b = a.stateNode.containerInfo, E = or(t);
            fr(
              t,
              E,
              b
            );
            break;
          default:
            throw Error(s(161));
        }
      } catch (q) {
        Dt(t, t.return, q);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function sm(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        sm(e), e.tag === 5 && e.flags & 1024 && e.stateNode.reset(), t = t.sibling;
      }
  }
  function ra(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; )
        em(t, e.alternate, e), e = e.sibling;
  }
  function il(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Ma(4, e, e.return), il(e);
          break;
        case 1:
          Qe(e, e.return);
          var a = e.stateNode;
          typeof a.componentWillUnmount == "function" && $d(
            e,
            e.return,
            a
          ), il(e);
          break;
        case 27:
          Bn(e.stateNode);
        case 26:
        case 5:
          Qe(e, e.return), il(e);
          break;
        case 22:
          e.memoizedState === null && il(e);
          break;
        case 30:
          il(e);
          break;
        default:
          il(e);
      }
      t = t.sibling;
    }
  }
  function ca(t, e, a) {
    for (a = a && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var l = e.alternate, n = t, i = e, f = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          ca(
            n,
            i,
            a
          ), Mn(4, i);
          break;
        case 1:
          if (ca(
            n,
            i,
            a
          ), l = i, n = l.stateNode, typeof n.componentDidMount == "function")
            try {
              n.componentDidMount();
            } catch (E) {
              Dt(l, l.return, E);
            }
          if (l = i, n = l.updateQueue, n !== null) {
            var m = l.stateNode;
            try {
              var b = n.shared.hiddenCallbacks;
              if (b !== null)
                for (n.shared.hiddenCallbacks = null, n = 0; n < b.length; n++)
                  Bh(b[n], m);
            } catch (E) {
              Dt(l, l.return, E);
            }
          }
          a && f & 64 && Wd(i), On(i, i.return);
          break;
        case 27:
          Pd(i);
        case 26:
        case 5:
          ca(
            n,
            i,
            a
          ), a && l === null && f & 4 && Fd(i), On(i, i.return);
          break;
        case 12:
          ca(
            n,
            i,
            a
          );
          break;
        case 31:
          ca(
            n,
            i,
            a
          ), a && f & 4 && nm(n, i);
          break;
        case 13:
          ca(
            n,
            i,
            a
          ), a && f & 4 && im(n, i);
          break;
        case 22:
          i.memoizedState === null && ca(
            n,
            i,
            a
          ), On(i, i.return);
          break;
        case 30:
          break;
        default:
          ca(
            n,
            i,
            a
          );
      }
      e = e.sibling;
    }
  }
  function dr(t, e) {
    var a = null;
    t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), t = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), t !== a && (t != null && t.refCount++, a != null && vn(a));
  }
  function mr(t, e) {
    t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && vn(t));
  }
  function Ue(t, e, a, l) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        rm(
          t,
          e,
          a,
          l
        ), e = e.sibling;
  }
  function rm(t, e, a, l) {
    var n = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Ue(
          t,
          e,
          a,
          l
        ), n & 2048 && Mn(9, e);
        break;
      case 1:
        Ue(
          t,
          e,
          a,
          l
        );
        break;
      case 3:
        Ue(
          t,
          e,
          a,
          l
        ), n & 2048 && (t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && vn(t)));
        break;
      case 12:
        if (n & 2048) {
          Ue(
            t,
            e,
            a,
            l
          ), t = e.stateNode;
          try {
            var i = e.memoizedProps, f = i.id, m = i.onPostCommit;
            typeof m == "function" && m(
              f,
              e.alternate === null ? "mount" : "update",
              t.passiveEffectDuration,
              -0
            );
          } catch (b) {
            Dt(e, e.return, b);
          }
        } else
          Ue(
            t,
            e,
            a,
            l
          );
        break;
      case 31:
        Ue(
          t,
          e,
          a,
          l
        );
        break;
      case 13:
        Ue(
          t,
          e,
          a,
          l
        );
        break;
      case 23:
        break;
      case 22:
        i = e.stateNode, f = e.alternate, e.memoizedState !== null ? i._visibility & 2 ? Ue(
          t,
          e,
          a,
          l
        ) : zn(t, e) : i._visibility & 2 ? Ue(
          t,
          e,
          a,
          l
        ) : (i._visibility |= 2, Nl(
          t,
          e,
          a,
          l,
          (e.subtreeFlags & 10256) !== 0 || !1
        )), n & 2048 && dr(f, e);
        break;
      case 24:
        Ue(
          t,
          e,
          a,
          l
        ), n & 2048 && mr(e.alternate, e);
        break;
      default:
        Ue(
          t,
          e,
          a,
          l
        );
    }
  }
  function Nl(t, e, a, l, n) {
    for (n = n && ((e.subtreeFlags & 10256) !== 0 || !1), e = e.child; e !== null; ) {
      var i = t, f = e, m = a, b = l, E = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          Nl(
            i,
            f,
            m,
            b,
            n
          ), Mn(8, f);
          break;
        case 23:
          break;
        case 22:
          var q = f.stateNode;
          f.memoizedState !== null ? q._visibility & 2 ? Nl(
            i,
            f,
            m,
            b,
            n
          ) : zn(
            i,
            f
          ) : (q._visibility |= 2, Nl(
            i,
            f,
            m,
            b,
            n
          )), n && E & 2048 && dr(
            f.alternate,
            f
          );
          break;
        case 24:
          Nl(
            i,
            f,
            m,
            b,
            n
          ), n && E & 2048 && mr(f.alternate, f);
          break;
        default:
          Nl(
            i,
            f,
            m,
            b,
            n
          );
      }
      e = e.sibling;
    }
  }
  function zn(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var a = t, l = e, n = l.flags;
        switch (l.tag) {
          case 22:
            zn(a, l), n & 2048 && dr(
              l.alternate,
              l
            );
            break;
          case 24:
            zn(a, l), n & 2048 && mr(l.alternate, l);
            break;
          default:
            zn(a, l);
        }
        e = e.sibling;
      }
  }
  var jn = 8192;
  function Hl(t, e, a) {
    if (t.subtreeFlags & jn)
      for (t = t.child; t !== null; )
        cm(
          t,
          e,
          a
        ), t = t.sibling;
  }
  function cm(t, e, a) {
    switch (t.tag) {
      case 26:
        Hl(
          t,
          e,
          a
        ), t.flags & jn && t.memoizedState !== null && C1(
          a,
          He,
          t.memoizedState,
          t.memoizedProps
        );
        break;
      case 5:
        Hl(
          t,
          e,
          a
        );
        break;
      case 3:
      case 4:
        var l = He;
        He = fu(t.stateNode.containerInfo), Hl(
          t,
          e,
          a
        ), He = l;
        break;
      case 22:
        t.memoizedState === null && (l = t.alternate, l !== null && l.memoizedState !== null ? (l = jn, jn = 16777216, Hl(
          t,
          e,
          a
        ), jn = l) : Hl(
          t,
          e,
          a
        ));
        break;
      default:
        Hl(
          t,
          e,
          a
        );
    }
  }
  function om(t) {
    var e = t.alternate;
    if (e !== null && (t = e.child, t !== null)) {
      e.child = null;
      do
        e = t.sibling, t.sibling = null, t = e;
      while (t !== null);
    }
  }
  function Rn(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var a = 0; a < e.length; a++) {
          var l = e[a];
          Ft = l, hm(
            l,
            t
          );
        }
      om(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        fm(t), t = t.sibling;
  }
  function fm(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Rn(t), t.flags & 2048 && Ma(9, t, t.return);
        break;
      case 3:
        Rn(t);
        break;
      case 12:
        Rn(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (e._visibility &= -3, Ii(t)) : Rn(t);
        break;
      default:
        Rn(t);
    }
  }
  function Ii(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var a = 0; a < e.length; a++) {
          var l = e[a];
          Ft = l, hm(
            l,
            t
          );
        }
      om(t);
    }
    for (t = t.child; t !== null; ) {
      switch (e = t, e.tag) {
        case 0:
        case 11:
        case 15:
          Ma(8, e, e.return), Ii(e);
          break;
        case 22:
          a = e.stateNode, a._visibility & 2 && (a._visibility &= -3, Ii(e));
          break;
        default:
          Ii(e);
      }
      t = t.sibling;
    }
  }
  function hm(t, e) {
    for (; Ft !== null; ) {
      var a = Ft;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          Ma(8, a, e);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var l = a.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          vn(a.memoizedState.cache);
      }
      if (l = a.child, l !== null) l.return = a, Ft = l;
      else
        t: for (a = t; Ft !== null; ) {
          l = Ft;
          var n = l.sibling, i = l.return;
          if (am(l), l === a) {
            Ft = null;
            break t;
          }
          if (n !== null) {
            n.return = i, Ft = n;
            break t;
          }
          Ft = i;
        }
    }
  }
  var B0 = {
    getCacheForType: function(t) {
      var e = te(Qt), a = e.data.get(t);
      return a === void 0 && (a = t(), e.data.set(t, a)), a;
    },
    cacheSignal: function() {
      return te(Qt).controller.signal;
    }
  }, L0 = typeof WeakMap == "function" ? WeakMap : Map, _t = 0, Rt = null, ht = null, mt = 0, At = 0, Se = null, Oa = !1, Ul = !1, vr = !1, oa = 0, Lt = 0, za = 0, ul = 0, gr = 0, _e = 0, Bl = 0, qn = null, de = null, yr = !1, Pi = 0, dm = 0, tu = 1 / 0, eu = null, ja = null, Jt = 0, Ra = null, Ll = null, fa = 0, pr = 0, br = null, mm = null, wn = 0, Sr = null;
  function Te() {
    return (_t & 2) !== 0 && mt !== 0 ? mt & -mt : T.T !== null ? Ar() : zf();
  }
  function vm() {
    if (_e === 0)
      if ((mt & 536870912) === 0 || gt) {
        var t = ci;
        ci <<= 1, (ci & 3932160) === 0 && (ci = 262144), _e = t;
      } else _e = 536870912;
    return t = pe.current, t !== null && (t.flags |= 32), _e;
  }
  function me(t, e, a) {
    (t === Rt && (At === 2 || At === 9) || t.cancelPendingCommit !== null) && (Gl(t, 0), qa(
      t,
      mt,
      _e,
      !1
    )), tn(t, a), ((_t & 2) === 0 || t !== Rt) && (t === Rt && ((_t & 2) === 0 && (ul |= a), Lt === 4 && qa(
      t,
      mt,
      _e,
      !1
    )), Ve(t));
  }
  function gm(t, e, a) {
    if ((_t & 6) !== 0) throw Error(s(327));
    var l = !a && (e & 127) === 0 && (e & t.expiredLanes) === 0 || Pl(t, e), n = l ? Y0(t, e) : Tr(t, e, !0), i = l;
    do {
      if (n === 0) {
        Ul && !l && qa(t, e, 0, !1);
        break;
      } else {
        if (a = t.current.alternate, i && !G0(a)) {
          n = Tr(t, e, !1), i = !1;
          continue;
        }
        if (n === 2) {
          if (i = e, t.errorRecoveryDisabledLanes & i)
            var f = 0;
          else
            f = t.pendingLanes & -536870913, f = f !== 0 ? f : f & 536870912 ? 536870912 : 0;
          if (f !== 0) {
            e = f;
            t: {
              var m = t;
              n = qn;
              var b = m.current.memoizedState.isDehydrated;
              if (b && (Gl(m, f).flags |= 256), f = Tr(
                m,
                f,
                !1
              ), f !== 2) {
                if (vr && !b) {
                  m.errorRecoveryDisabledLanes |= i, ul |= i, n = 4;
                  break t;
                }
                i = de, de = n, i !== null && (de === null ? de = i : de.push.apply(
                  de,
                  i
                ));
              }
              n = f;
            }
            if (i = !1, n !== 2) continue;
          }
        }
        if (n === 1) {
          Gl(t, 0), qa(t, e, 0, !0);
          break;
        }
        t: {
          switch (l = t, i = n, i) {
            case 0:
            case 1:
              throw Error(s(345));
            case 4:
              if ((e & 4194048) !== e) break;
            case 6:
              qa(
                l,
                e,
                _e,
                !Oa
              );
              break t;
            case 2:
              de = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(s(329));
          }
          if ((e & 62914560) === e && (n = Pi + 300 - Wt(), 10 < n)) {
            if (qa(
              l,
              e,
              _e,
              !Oa
            ), fi(l, 0, !0) !== 0) break t;
            fa = e, l.timeoutHandle = Zm(
              ym.bind(
                null,
                l,
                a,
                de,
                eu,
                yr,
                e,
                _e,
                ul,
                Bl,
                Oa,
                i,
                "Throttled",
                -0,
                0
              ),
              n
            );
            break t;
          }
          ym(
            l,
            a,
            de,
            eu,
            yr,
            e,
            _e,
            ul,
            Bl,
            Oa,
            i,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Ve(t);
  }
  function ym(t, e, a, l, n, i, f, m, b, E, q, N, A, D) {
    if (t.timeoutHandle = -1, N = e.subtreeFlags, N & 8192 || (N & 16785408) === 16785408) {
      N = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: $e
      }, cm(
        e,
        i,
        N
      );
      var Q = (i & 62914560) === i ? Pi - Wt() : (i & 4194048) === i ? dm - Wt() : 0;
      if (Q = x1(
        N,
        Q
      ), Q !== null) {
        fa = i, t.cancelPendingCommit = Q(
          Em.bind(
            null,
            t,
            e,
            i,
            a,
            l,
            n,
            f,
            m,
            b,
            q,
            N,
            null,
            A,
            D
          )
        ), qa(t, i, f, !E);
        return;
      }
    }
    Em(
      t,
      e,
      i,
      a,
      l,
      n,
      f,
      m,
      b
    );
  }
  function G0(t) {
    for (var e = t; ; ) {
      var a = e.tag;
      if ((a === 0 || a === 11 || a === 15) && e.flags & 16384 && (a = e.updateQueue, a !== null && (a = a.stores, a !== null)))
        for (var l = 0; l < a.length; l++) {
          var n = a[l], i = n.getSnapshot;
          n = n.value;
          try {
            if (!ge(i(), n)) return !1;
          } catch {
            return !1;
          }
        }
      if (a = e.child, e.subtreeFlags & 16384 && a !== null)
        a.return = e, e = a;
      else {
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return !0;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
    }
    return !0;
  }
  function qa(t, e, a, l) {
    e &= ~gr, e &= ~ul, t.suspendedLanes |= e, t.pingedLanes &= ~e, l && (t.warmLanes |= e), l = t.expirationTimes;
    for (var n = e; 0 < n; ) {
      var i = 31 - ve(n), f = 1 << i;
      l[i] = -1, n &= ~f;
    }
    a !== 0 && Df(t, a, e);
  }
  function au() {
    return (_t & 6) === 0 ? (Nn(0), !1) : !0;
  }
  function _r() {
    if (ht !== null) {
      if (At === 0)
        var t = ht.return;
      else
        t = ht, ta = Fa = null, Us(t), zl = null, yn = 0, t = ht;
      for (; t !== null; )
        Jd(t.alternate, t), t = t.return;
      ht = null;
    }
  }
  function Gl(t, e) {
    var a = t.timeoutHandle;
    a !== -1 && (t.timeoutHandle = -1, u1(a)), a = t.cancelPendingCommit, a !== null && (t.cancelPendingCommit = null, a()), fa = 0, _r(), Rt = t, ht = a = Ie(t.current, null), mt = e, At = 0, Se = null, Oa = !1, Ul = Pl(t, e), vr = !1, Bl = _e = gr = ul = za = Lt = 0, de = qn = null, yr = !1, (e & 8) !== 0 && (e |= e & 32);
    var l = t.entangledLanes;
    if (l !== 0)
      for (t = t.entanglements, l &= e; 0 < l; ) {
        var n = 31 - ve(l), i = 1 << n;
        e |= t[n], l &= ~i;
      }
    return oa = e, Ci(), a;
  }
  function pm(t, e) {
    ct = null, T.H = En, e === Ol || e === ji ? (e = wh(), At = 3) : e === Es ? (e = wh(), At = 4) : At = e === Ps ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1, Se = e, ht === null && (Lt = 1, Xi(
      t,
      De(e, t.current)
    ));
  }
  function bm() {
    var t = pe.current;
    return t === null ? !0 : (mt & 4194048) === mt ? je === null : (mt & 62914560) === mt || (mt & 536870912) !== 0 ? t === je : !1;
  }
  function Sm() {
    var t = T.H;
    return T.H = En, t === null ? En : t;
  }
  function _m() {
    var t = T.A;
    return T.A = B0, t;
  }
  function lu() {
    Lt = 4, Oa || (mt & 4194048) !== mt && pe.current !== null || (Ul = !0), (za & 134217727) === 0 && (ul & 134217727) === 0 || Rt === null || qa(
      Rt,
      mt,
      _e,
      !1
    );
  }
  function Tr(t, e, a) {
    var l = _t;
    _t |= 2;
    var n = Sm(), i = _m();
    (Rt !== t || mt !== e) && (eu = null, Gl(t, e)), e = !1;
    var f = Lt;
    t: do
      try {
        if (At !== 0 && ht !== null) {
          var m = ht, b = Se;
          switch (At) {
            case 8:
              _r(), f = 6;
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              pe.current === null && (e = !0);
              var E = At;
              if (At = 0, Se = null, kl(t, m, b, E), a && Ul) {
                f = 0;
                break t;
              }
              break;
            default:
              E = At, At = 0, Se = null, kl(t, m, b, E);
          }
        }
        k0(), f = Lt;
        break;
      } catch (q) {
        pm(t, q);
      }
    while (!0);
    return e && t.shellSuspendCounter++, ta = Fa = null, _t = l, T.H = n, T.A = i, ht === null && (Rt = null, mt = 0, Ci()), f;
  }
  function k0() {
    for (; ht !== null; ) Tm(ht);
  }
  function Y0(t, e) {
    var a = _t;
    _t |= 2;
    var l = Sm(), n = _m();
    Rt !== t || mt !== e ? (eu = null, tu = Wt() + 500, Gl(t, e)) : Ul = Pl(
      t,
      e
    );
    t: do
      try {
        if (At !== 0 && ht !== null) {
          e = ht;
          var i = Se;
          e: switch (At) {
            case 1:
              At = 0, Se = null, kl(t, e, i, 1);
              break;
            case 2:
            case 9:
              if (Rh(i)) {
                At = 0, Se = null, Cm(e);
                break;
              }
              e = function() {
                At !== 2 && At !== 9 || Rt !== t || (At = 7), Ve(t);
              }, i.then(e, e);
              break t;
            case 3:
              At = 7;
              break t;
            case 4:
              At = 5;
              break t;
            case 7:
              Rh(i) ? (At = 0, Se = null, Cm(e)) : (At = 0, Se = null, kl(t, e, i, 7));
              break;
            case 5:
              var f = null;
              switch (ht.tag) {
                case 26:
                  f = ht.memoizedState;
                case 5:
                case 27:
                  var m = ht;
                  if (f ? rv(f) : m.stateNode.complete) {
                    At = 0, Se = null;
                    var b = m.sibling;
                    if (b !== null) ht = b;
                    else {
                      var E = m.return;
                      E !== null ? (ht = E, nu(E)) : ht = null;
                    }
                    break e;
                  }
              }
              At = 0, Se = null, kl(t, e, i, 5);
              break;
            case 6:
              At = 0, Se = null, kl(t, e, i, 6);
              break;
            case 8:
              _r(), Lt = 6;
              break t;
            default:
              throw Error(s(462));
          }
        }
        Q0();
        break;
      } catch (q) {
        pm(t, q);
      }
    while (!0);
    return ta = Fa = null, T.H = l, T.A = n, _t = a, ht !== null ? 0 : (Rt = null, mt = 0, Ci(), Lt);
  }
  function Q0() {
    for (; ht !== null && !Ge(); )
      Tm(ht);
  }
  function Tm(t) {
    var e = Kd(t.alternate, t, oa);
    t.memoizedProps = t.pendingProps, e === null ? nu(t) : ht = e;
  }
  function Cm(t) {
    var e = t, a = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = Gd(
          a,
          e,
          e.pendingProps,
          e.type,
          void 0,
          mt
        );
        break;
      case 11:
        e = Gd(
          a,
          e,
          e.pendingProps,
          e.type.render,
          e.ref,
          mt
        );
        break;
      case 5:
        Us(e);
      default:
        Jd(a, e), e = ht = _h(e, oa), e = Kd(a, e, oa);
    }
    t.memoizedProps = t.pendingProps, e === null ? nu(t) : ht = e;
  }
  function kl(t, e, a, l) {
    ta = Fa = null, Us(e), zl = null, yn = 0;
    var n = e.return;
    try {
      if (j0(
        t,
        n,
        e,
        a,
        mt
      )) {
        Lt = 1, Xi(
          t,
          De(a, t.current)
        ), ht = null;
        return;
      }
    } catch (i) {
      if (n !== null) throw ht = n, i;
      Lt = 1, Xi(
        t,
        De(a, t.current)
      ), ht = null;
      return;
    }
    e.flags & 32768 ? (gt || l === 1 ? t = !0 : Ul || (mt & 536870912) !== 0 ? t = !1 : (Oa = t = !0, (l === 2 || l === 9 || l === 3 || l === 6) && (l = pe.current, l !== null && l.tag === 13 && (l.flags |= 16384))), xm(e, t)) : nu(e);
  }
  function nu(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        xm(
          e,
          Oa
        );
        return;
      }
      t = e.return;
      var a = w0(
        e.alternate,
        e,
        oa
      );
      if (a !== null) {
        ht = a;
        return;
      }
      if (e = e.sibling, e !== null) {
        ht = e;
        return;
      }
      ht = e = t;
    } while (e !== null);
    Lt === 0 && (Lt = 5);
  }
  function xm(t, e) {
    do {
      var a = N0(t.alternate, t);
      if (a !== null) {
        a.flags &= 32767, ht = a;
        return;
      }
      if (a = t.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !e && (t = t.sibling, t !== null)) {
        ht = t;
        return;
      }
      ht = t = a;
    } while (t !== null);
    Lt = 6, ht = null;
  }
  function Em(t, e, a, l, n, i, f, m, b) {
    t.cancelPendingCommit = null;
    do
      iu();
    while (Jt !== 0);
    if ((_t & 6) !== 0) throw Error(s(327));
    if (e !== null) {
      if (e === t.current) throw Error(s(177));
      if (i = e.lanes | e.childLanes, i |= os, Tp(
        t,
        a,
        i,
        f,
        m,
        b
      ), t === Rt && (ht = Rt = null, mt = 0), Ll = e, Ra = t, fa = a, pr = i, br = n, mm = l, (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, Z0(we, function() {
        return zm(), null;
      })) : (t.callbackNode = null, t.callbackPriority = 0), l = (e.flags & 13878) !== 0, (e.subtreeFlags & 13878) !== 0 || l) {
        l = T.T, T.T = null, n = R.p, R.p = 2, f = _t, _t |= 4;
        try {
          H0(t, e, a);
        } finally {
          _t = f, R.p = n, T.T = l;
        }
      }
      Jt = 1, Am(), Dm(), Mm();
    }
  }
  function Am() {
    if (Jt === 1) {
      Jt = 0;
      var t = Ra, e = Ll, a = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || a) {
        a = T.T, T.T = null;
        var l = R.p;
        R.p = 2;
        var n = _t;
        _t |= 4;
        try {
          um(e, t);
          var i = wr, f = hh(t.containerInfo), m = i.focusedElem, b = i.selectionRange;
          if (f !== m && m && m.ownerDocument && fh(
            m.ownerDocument.documentElement,
            m
          )) {
            if (b !== null && is(m)) {
              var E = b.start, q = b.end;
              if (q === void 0 && (q = E), "selectionStart" in m)
                m.selectionStart = E, m.selectionEnd = Math.min(
                  q,
                  m.value.length
                );
              else {
                var N = m.ownerDocument || document, A = N && N.defaultView || window;
                if (A.getSelection) {
                  var D = A.getSelection(), Q = m.textContent.length, P = Math.min(b.start, Q), zt = b.end === void 0 ? P : Math.min(b.end, Q);
                  !D.extend && P > zt && (f = zt, zt = P, P = f);
                  var C = oh(
                    m,
                    P
                  ), _ = oh(
                    m,
                    zt
                  );
                  if (C && _ && (D.rangeCount !== 1 || D.anchorNode !== C.node || D.anchorOffset !== C.offset || D.focusNode !== _.node || D.focusOffset !== _.offset)) {
                    var x = N.createRange();
                    x.setStart(C.node, C.offset), D.removeAllRanges(), P > zt ? (D.addRange(x), D.extend(_.node, _.offset)) : (x.setEnd(_.node, _.offset), D.addRange(x));
                  }
                }
              }
            }
            for (N = [], D = m; D = D.parentNode; )
              D.nodeType === 1 && N.push({
                element: D,
                left: D.scrollLeft,
                top: D.scrollTop
              });
            for (typeof m.focus == "function" && m.focus(), m = 0; m < N.length; m++) {
              var w = N[m];
              w.element.scrollLeft = w.left, w.element.scrollTop = w.top;
            }
          }
          yu = !!qr, wr = qr = null;
        } finally {
          _t = n, R.p = l, T.T = a;
        }
      }
      t.current = e, Jt = 2;
    }
  }
  function Dm() {
    if (Jt === 2) {
      Jt = 0;
      var t = Ra, e = Ll, a = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || a) {
        a = T.T, T.T = null;
        var l = R.p;
        R.p = 2;
        var n = _t;
        _t |= 4;
        try {
          em(t, e.alternate, e);
        } finally {
          _t = n, R.p = l, T.T = a;
        }
      }
      Jt = 3;
    }
  }
  function Mm() {
    if (Jt === 4 || Jt === 3) {
      Jt = 0, ne();
      var t = Ra, e = Ll, a = fa, l = mm;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? Jt = 5 : (Jt = 0, Ll = Ra = null, Om(t, t.pendingLanes));
      var n = t.pendingLanes;
      if (n === 0 && (ja = null), Gu(a), e = e.stateNode, Gt && typeof Gt.onCommitFiberRoot == "function")
        try {
          Gt.onCommitFiberRoot(
            se,
            e,
            void 0,
            (e.current.flags & 128) === 128
          );
        } catch {
        }
      if (l !== null) {
        e = T.T, n = R.p, R.p = 2, T.T = null;
        try {
          for (var i = t.onRecoverableError, f = 0; f < l.length; f++) {
            var m = l[f];
            i(m.value, {
              componentStack: m.stack
            });
          }
        } finally {
          T.T = e, R.p = n;
        }
      }
      (fa & 3) !== 0 && iu(), Ve(t), n = t.pendingLanes, (a & 261930) !== 0 && (n & 42) !== 0 ? t === Sr ? wn++ : (wn = 0, Sr = t) : wn = 0, Nn(0);
    }
  }
  function Om(t, e) {
    (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache, e != null && (t.pooledCache = null, vn(e)));
  }
  function iu() {
    return Am(), Dm(), Mm(), zm();
  }
  function zm() {
    if (Jt !== 5) return !1;
    var t = Ra, e = pr;
    pr = 0;
    var a = Gu(fa), l = T.T, n = R.p;
    try {
      R.p = 32 > a ? 32 : a, T.T = null, a = br, br = null;
      var i = Ra, f = fa;
      if (Jt = 0, Ll = Ra = null, fa = 0, (_t & 6) !== 0) throw Error(s(331));
      var m = _t;
      if (_t |= 4, fm(i.current), rm(
        i,
        i.current,
        f,
        a
      ), _t = m, Nn(0, !1), Gt && typeof Gt.onPostCommitFiberRoot == "function")
        try {
          Gt.onPostCommitFiberRoot(se, i);
        } catch {
        }
      return !0;
    } finally {
      R.p = n, T.T = l, Om(t, e);
    }
  }
  function jm(t, e, a) {
    e = De(a, e), e = Is(t.stateNode, e, 2), t = Ea(t, e, 2), t !== null && (tn(t, 2), Ve(t));
  }
  function Dt(t, e, a) {
    if (t.tag === 3)
      jm(t, t, a);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          jm(
            e,
            t,
            a
          );
          break;
        } else if (e.tag === 1) {
          var l = e.stateNode;
          if (typeof e.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (ja === null || !ja.has(l))) {
            t = De(a, t), a = Rd(2), l = Ea(e, a, 2), l !== null && (qd(
              a,
              l,
              e,
              t
            ), tn(l, 2), Ve(l));
            break;
          }
        }
        e = e.return;
      }
  }
  function Cr(t, e, a) {
    var l = t.pingCache;
    if (l === null) {
      l = t.pingCache = new L0();
      var n = /* @__PURE__ */ new Set();
      l.set(e, n);
    } else
      n = l.get(e), n === void 0 && (n = /* @__PURE__ */ new Set(), l.set(e, n));
    n.has(a) || (vr = !0, n.add(a), t = V0.bind(null, t, e, a), e.then(t, t));
  }
  function V0(t, e, a) {
    var l = t.pingCache;
    l !== null && l.delete(e), t.pingedLanes |= t.suspendedLanes & a, t.warmLanes &= ~a, Rt === t && (mt & a) === a && (Lt === 4 || Lt === 3 && (mt & 62914560) === mt && 300 > Wt() - Pi ? (_t & 2) === 0 && Gl(t, 0) : gr |= a, Bl === mt && (Bl = 0)), Ve(t);
  }
  function Rm(t, e) {
    e === 0 && (e = Af()), t = Ja(t, e), t !== null && (tn(t, e), Ve(t));
  }
  function X0(t) {
    var e = t.memoizedState, a = 0;
    e !== null && (a = e.retryLane), Rm(t, a);
  }
  function K0(t, e) {
    var a = 0;
    switch (t.tag) {
      case 31:
      case 13:
        var l = t.stateNode, n = t.memoizedState;
        n !== null && (a = n.retryLane);
        break;
      case 19:
        l = t.stateNode;
        break;
      case 22:
        l = t.stateNode._retryCache;
        break;
      default:
        throw Error(s(314));
    }
    l !== null && l.delete(e), Rm(t, a);
  }
  function Z0(t, e) {
    return $l(t, e);
  }
  var uu = null, Yl = null, xr = !1, su = !1, Er = !1, wa = 0;
  function Ve(t) {
    t !== Yl && t.next === null && (Yl === null ? uu = Yl = t : Yl = Yl.next = t), su = !0, xr || (xr = !0, W0());
  }
  function Nn(t, e) {
    if (!Er && su) {
      Er = !0;
      do
        for (var a = !1, l = uu; l !== null; ) {
          if (t !== 0) {
            var n = l.pendingLanes;
            if (n === 0) var i = 0;
            else {
              var f = l.suspendedLanes, m = l.pingedLanes;
              i = (1 << 31 - ve(42 | t) + 1) - 1, i &= n & ~(f & ~m), i = i & 201326741 ? i & 201326741 | 1 : i ? i | 2 : 0;
            }
            i !== 0 && (a = !0, Hm(l, i));
          } else
            i = mt, i = fi(
              l,
              l === Rt ? i : 0,
              l.cancelPendingCommit !== null || l.timeoutHandle !== -1
            ), (i & 3) === 0 || Pl(l, i) || (a = !0, Hm(l, i));
          l = l.next;
        }
      while (a);
      Er = !1;
    }
  }
  function J0() {
    qm();
  }
  function qm() {
    su = xr = !1;
    var t = 0;
    wa !== 0 && i1() && (t = wa);
    for (var e = Wt(), a = null, l = uu; l !== null; ) {
      var n = l.next, i = wm(l, e);
      i === 0 ? (l.next = null, a === null ? uu = n : a.next = n, n === null && (Yl = a)) : (a = l, (t !== 0 || (i & 3) !== 0) && (su = !0)), l = n;
    }
    Jt !== 0 && Jt !== 5 || Nn(t), wa !== 0 && (wa = 0);
  }
  function wm(t, e) {
    for (var a = t.suspendedLanes, l = t.pingedLanes, n = t.expirationTimes, i = t.pendingLanes & -62914561; 0 < i; ) {
      var f = 31 - ve(i), m = 1 << f, b = n[f];
      b === -1 ? ((m & a) === 0 || (m & l) !== 0) && (n[f] = _p(m, e)) : b <= e && (t.expiredLanes |= m), i &= ~m;
    }
    if (e = Rt, a = mt, a = fi(
      t,
      t === e ? a : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), l = t.callbackNode, a === 0 || t === e && (At === 2 || At === 9) || t.cancelPendingCommit !== null)
      return l !== null && l !== null && va(l), t.callbackNode = null, t.callbackPriority = 0;
    if ((a & 3) === 0 || Pl(t, a)) {
      if (e = a & -a, e === t.callbackPriority) return e;
      switch (l !== null && va(l), Gu(a)) {
        case 2:
        case 8:
          a = Fl;
          break;
        case 32:
          a = we;
          break;
        case 268435456:
          a = Il;
          break;
        default:
          a = we;
      }
      return l = Nm.bind(null, t), a = $l(a, l), t.callbackPriority = e, t.callbackNode = a, e;
    }
    return l !== null && l !== null && va(l), t.callbackPriority = 2, t.callbackNode = null, 2;
  }
  function Nm(t, e) {
    if (Jt !== 0 && Jt !== 5)
      return t.callbackNode = null, t.callbackPriority = 0, null;
    var a = t.callbackNode;
    if (iu() && t.callbackNode !== a)
      return null;
    var l = mt;
    return l = fi(
      t,
      t === Rt ? l : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), l === 0 ? null : (gm(t, l, e), wm(t, Wt()), t.callbackNode != null && t.callbackNode === a ? Nm.bind(null, t) : null);
  }
  function Hm(t, e) {
    if (iu()) return null;
    gm(t, e, !0);
  }
  function W0() {
    s1(function() {
      (_t & 6) !== 0 ? $l(
        ii,
        J0
      ) : qm();
    });
  }
  function Ar() {
    if (wa === 0) {
      var t = Dl;
      t === 0 && (t = ri, ri <<= 1, (ri & 261888) === 0 && (ri = 256)), wa = t;
    }
    return wa;
  }
  function Um(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : vi("" + t);
  }
  function Bm(t, e) {
    var a = e.ownerDocument.createElement("input");
    return a.name = e.name, a.value = e.value, t.id && a.setAttribute("form", t.id), e.parentNode.insertBefore(a, e), t = new FormData(t), a.parentNode.removeChild(a), t;
  }
  function $0(t, e, a, l, n) {
    if (e === "submit" && a && a.stateNode === n) {
      var i = Um(
        (n[re] || null).action
      ), f = l.submitter;
      f && (e = (e = f[re] || null) ? Um(e.formAction) : f.getAttribute("formAction"), e !== null && (i = e, f = null));
      var m = new bi(
        "action",
        "action",
        null,
        l,
        n
      );
      t.push({
        event: m,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (l.defaultPrevented) {
                if (wa !== 0) {
                  var b = f ? Bm(n, f) : new FormData(n);
                  Ks(
                    a,
                    {
                      pending: !0,
                      data: b,
                      method: n.method,
                      action: i
                    },
                    null,
                    b
                  );
                }
              } else
                typeof i == "function" && (m.preventDefault(), b = f ? Bm(n, f) : new FormData(n), Ks(
                  a,
                  {
                    pending: !0,
                    data: b,
                    method: n.method,
                    action: i
                  },
                  i,
                  b
                ));
            },
            currentTarget: n
          }
        ]
      });
    }
  }
  for (var Dr = 0; Dr < cs.length; Dr++) {
    var Mr = cs[Dr], F0 = Mr.toLowerCase(), I0 = Mr[0].toUpperCase() + Mr.slice(1);
    Ne(
      F0,
      "on" + I0
    );
  }
  Ne(vh, "onAnimationEnd"), Ne(gh, "onAnimationIteration"), Ne(yh, "onAnimationStart"), Ne("dblclick", "onDoubleClick"), Ne("focusin", "onFocus"), Ne("focusout", "onBlur"), Ne(m0, "onTransitionRun"), Ne(v0, "onTransitionStart"), Ne(g0, "onTransitionCancel"), Ne(ph, "onTransitionEnd"), dl("onMouseEnter", ["mouseout", "mouseover"]), dl("onMouseLeave", ["mouseout", "mouseover"]), dl("onPointerEnter", ["pointerout", "pointerover"]), dl("onPointerLeave", ["pointerout", "pointerover"]), Va(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Va(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Va("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Va(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Va(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Va(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var Hn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), P0 = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Hn)
  );
  function Lm(t, e) {
    e = (e & 4) !== 0;
    for (var a = 0; a < t.length; a++) {
      var l = t[a], n = l.event;
      l = l.listeners;
      t: {
        var i = void 0;
        if (e)
          for (var f = l.length - 1; 0 <= f; f--) {
            var m = l[f], b = m.instance, E = m.currentTarget;
            if (m = m.listener, b !== i && n.isPropagationStopped())
              break t;
            i = m, n.currentTarget = E;
            try {
              i(n);
            } catch (q) {
              Ti(q);
            }
            n.currentTarget = null, i = b;
          }
        else
          for (f = 0; f < l.length; f++) {
            if (m = l[f], b = m.instance, E = m.currentTarget, m = m.listener, b !== i && n.isPropagationStopped())
              break t;
            i = m, n.currentTarget = E;
            try {
              i(n);
            } catch (q) {
              Ti(q);
            }
            n.currentTarget = null, i = b;
          }
      }
    }
  }
  function dt(t, e) {
    var a = e[ku];
    a === void 0 && (a = e[ku] = /* @__PURE__ */ new Set());
    var l = t + "__bubble";
    a.has(l) || (Gm(e, t, 2, !1), a.add(l));
  }
  function Or(t, e, a) {
    var l = 0;
    e && (l |= 4), Gm(
      a,
      t,
      l,
      e
    );
  }
  var ru = "_reactListening" + Math.random().toString(36).slice(2);
  function zr(t) {
    if (!t[ru]) {
      t[ru] = !0, qf.forEach(function(a) {
        a !== "selectionchange" && (P0.has(a) || Or(a, !1, t), Or(a, !0, t));
      });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[ru] || (e[ru] = !0, Or("selectionchange", !1, e));
    }
  }
  function Gm(t, e, a, l) {
    switch (vv(e)) {
      case 2:
        var n = D1;
        break;
      case 8:
        n = M1;
        break;
      default:
        n = Xr;
    }
    a = n.bind(
      null,
      e,
      a,
      t
    ), n = void 0, !$u || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (n = !0), l ? n !== void 0 ? t.addEventListener(e, a, {
      capture: !0,
      passive: n
    }) : t.addEventListener(e, a, !0) : n !== void 0 ? t.addEventListener(e, a, {
      passive: n
    }) : t.addEventListener(e, a, !1);
  }
  function jr(t, e, a, l, n) {
    var i = l;
    if ((e & 1) === 0 && (e & 2) === 0 && l !== null)
      t: for (; ; ) {
        if (l === null) return;
        var f = l.tag;
        if (f === 3 || f === 4) {
          var m = l.stateNode.containerInfo;
          if (m === n) break;
          if (f === 4)
            for (f = l.return; f !== null; ) {
              var b = f.tag;
              if ((b === 3 || b === 4) && f.stateNode.containerInfo === n)
                return;
              f = f.return;
            }
          for (; m !== null; ) {
            if (f = ol(m), f === null) return;
            if (b = f.tag, b === 5 || b === 6 || b === 26 || b === 27) {
              l = i = f;
              continue t;
            }
            m = m.parentNode;
          }
        }
        l = l.return;
      }
    Xf(function() {
      var E = i, q = Ju(a), N = [];
      t: {
        var A = bh.get(t);
        if (A !== void 0) {
          var D = bi, Q = t;
          switch (t) {
            case "keypress":
              if (yi(a) === 0) break t;
            case "keydown":
            case "keyup":
              D = Kp;
              break;
            case "focusin":
              Q = "focus", D = ts;
              break;
            case "focusout":
              Q = "blur", D = ts;
              break;
            case "beforeblur":
            case "afterblur":
              D = ts;
              break;
            case "click":
              if (a.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              D = Jf;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              D = wp;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              D = Wp;
              break;
            case vh:
            case gh:
            case yh:
              D = Up;
              break;
            case ph:
              D = Fp;
              break;
            case "scroll":
            case "scrollend":
              D = Rp;
              break;
            case "wheel":
              D = Pp;
              break;
            case "copy":
            case "cut":
            case "paste":
              D = Lp;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              D = $f;
              break;
            case "toggle":
            case "beforetoggle":
              D = e0;
          }
          var P = (e & 4) !== 0, zt = !P && (t === "scroll" || t === "scrollend"), C = P ? A !== null ? A + "Capture" : null : A;
          P = [];
          for (var _ = E, x; _ !== null; ) {
            var w = _;
            if (x = w.stateNode, w = w.tag, w !== 5 && w !== 26 && w !== 27 || x === null || C === null || (w = ln(_, C), w != null && P.push(
              Un(_, w, x)
            )), zt) break;
            _ = _.return;
          }
          0 < P.length && (A = new D(
            A,
            Q,
            null,
            a,
            q
          ), N.push({ event: A, listeners: P }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (A = t === "mouseover" || t === "pointerover", D = t === "mouseout" || t === "pointerout", A && a !== Zu && (Q = a.relatedTarget || a.fromElement) && (ol(Q) || Q[cl]))
            break t;
          if ((D || A) && (A = q.window === q ? q : (A = q.ownerDocument) ? A.defaultView || A.parentWindow : window, D ? (Q = a.relatedTarget || a.toElement, D = E, Q = Q ? ol(Q) : null, Q !== null && (zt = h(Q), P = Q.tag, Q !== zt || P !== 5 && P !== 27 && P !== 6) && (Q = null)) : (D = null, Q = E), D !== Q)) {
            if (P = Jf, w = "onMouseLeave", C = "onMouseEnter", _ = "mouse", (t === "pointerout" || t === "pointerover") && (P = $f, w = "onPointerLeave", C = "onPointerEnter", _ = "pointer"), zt = D == null ? A : an(D), x = Q == null ? A : an(Q), A = new P(
              w,
              _ + "leave",
              D,
              a,
              q
            ), A.target = zt, A.relatedTarget = x, w = null, ol(q) === E && (P = new P(
              C,
              _ + "enter",
              Q,
              a,
              q
            ), P.target = x, P.relatedTarget = zt, w = P), zt = w, D && Q)
              e: {
                for (P = t1, C = D, _ = Q, x = 0, w = C; w; w = P(w))
                  x++;
                w = 0;
                for (var W = _; W; W = P(W))
                  w++;
                for (; 0 < x - w; )
                  C = P(C), x--;
                for (; 0 < w - x; )
                  _ = P(_), w--;
                for (; x--; ) {
                  if (C === _ || _ !== null && C === _.alternate) {
                    P = C;
                    break e;
                  }
                  C = P(C), _ = P(_);
                }
                P = null;
              }
            else P = null;
            D !== null && km(
              N,
              A,
              D,
              P,
              !1
            ), Q !== null && zt !== null && km(
              N,
              zt,
              Q,
              P,
              !0
            );
          }
        }
        t: {
          if (A = E ? an(E) : window, D = A.nodeName && A.nodeName.toLowerCase(), D === "select" || D === "input" && A.type === "file")
            var pt = nh;
          else if (ah(A))
            if (ih)
              pt = f0;
            else {
              pt = c0;
              var X = r0;
            }
          else
            D = A.nodeName, !D || D.toLowerCase() !== "input" || A.type !== "checkbox" && A.type !== "radio" ? E && Ku(E.elementType) && (pt = nh) : pt = o0;
          if (pt && (pt = pt(t, E))) {
            lh(
              N,
              pt,
              a,
              q
            );
            break t;
          }
          X && X(t, A, E), t === "focusout" && E && A.type === "number" && E.memoizedProps.value != null && Xu(A, "number", A.value);
        }
        switch (X = E ? an(E) : window, t) {
          case "focusin":
            (ah(X) || X.contentEditable === "true") && (bl = X, us = E, hn = null);
            break;
          case "focusout":
            hn = us = bl = null;
            break;
          case "mousedown":
            ss = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ss = !1, dh(N, a, q);
            break;
          case "selectionchange":
            if (d0) break;
          case "keydown":
          case "keyup":
            dh(N, a, q);
        }
        var ot;
        if (as)
          t: {
            switch (t) {
              case "compositionstart":
                var vt = "onCompositionStart";
                break t;
              case "compositionend":
                vt = "onCompositionEnd";
                break t;
              case "compositionupdate":
                vt = "onCompositionUpdate";
                break t;
            }
            vt = void 0;
          }
        else
          pl ? th(t, a) && (vt = "onCompositionEnd") : t === "keydown" && a.keyCode === 229 && (vt = "onCompositionStart");
        vt && (Ff && a.locale !== "ko" && (pl || vt !== "onCompositionStart" ? vt === "onCompositionEnd" && pl && (ot = Kf()) : (pa = q, Fu = "value" in pa ? pa.value : pa.textContent, pl = !0)), X = cu(E, vt), 0 < X.length && (vt = new Wf(
          vt,
          t,
          null,
          a,
          q
        ), N.push({ event: vt, listeners: X }), ot ? vt.data = ot : (ot = eh(a), ot !== null && (vt.data = ot)))), (ot = l0 ? n0(t, a) : i0(t, a)) && (vt = cu(E, "onBeforeInput"), 0 < vt.length && (X = new Wf(
          "onBeforeInput",
          "beforeinput",
          null,
          a,
          q
        ), N.push({
          event: X,
          listeners: vt
        }), X.data = ot)), $0(
          N,
          t,
          E,
          a,
          q
        );
      }
      Lm(N, e);
    });
  }
  function Un(t, e, a) {
    return {
      instance: t,
      listener: e,
      currentTarget: a
    };
  }
  function cu(t, e) {
    for (var a = e + "Capture", l = []; t !== null; ) {
      var n = t, i = n.stateNode;
      if (n = n.tag, n !== 5 && n !== 26 && n !== 27 || i === null || (n = ln(t, a), n != null && l.unshift(
        Un(t, n, i)
      ), n = ln(t, e), n != null && l.push(
        Un(t, n, i)
      )), t.tag === 3) return l;
      t = t.return;
    }
    return [];
  }
  function t1(t) {
    if (t === null) return null;
    do
      t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function km(t, e, a, l, n) {
    for (var i = e._reactName, f = []; a !== null && a !== l; ) {
      var m = a, b = m.alternate, E = m.stateNode;
      if (m = m.tag, b !== null && b === l) break;
      m !== 5 && m !== 26 && m !== 27 || E === null || (b = E, n ? (E = ln(a, i), E != null && f.unshift(
        Un(a, E, b)
      )) : n || (E = ln(a, i), E != null && f.push(
        Un(a, E, b)
      ))), a = a.return;
    }
    f.length !== 0 && t.push({ event: e, listeners: f });
  }
  var e1 = /\r\n?/g, a1 = /\u0000|\uFFFD/g;
  function Ym(t) {
    return (typeof t == "string" ? t : "" + t).replace(e1, `
`).replace(a1, "");
  }
  function Qm(t, e) {
    return e = Ym(e), Ym(t) === e;
  }
  function Ot(t, e, a, l, n, i) {
    switch (a) {
      case "children":
        typeof l == "string" ? e === "body" || e === "textarea" && l === "" || vl(t, l) : (typeof l == "number" || typeof l == "bigint") && e !== "body" && vl(t, "" + l);
        break;
      case "className":
        di(t, "class", l);
        break;
      case "tabIndex":
        di(t, "tabindex", l);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        di(t, a, l);
        break;
      case "style":
        Qf(t, l, i);
        break;
      case "data":
        if (e !== "object") {
          di(t, "data", l);
          break;
        }
      case "src":
      case "href":
        if (l === "" && (e !== "a" || a !== "href")) {
          t.removeAttribute(a);
          break;
        }
        if (l == null || typeof l == "function" || typeof l == "symbol" || typeof l == "boolean") {
          t.removeAttribute(a);
          break;
        }
        l = vi("" + l), t.setAttribute(a, l);
        break;
      case "action":
      case "formAction":
        if (typeof l == "function") {
          t.setAttribute(
            a,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof i == "function" && (a === "formAction" ? (e !== "input" && Ot(t, e, "name", n.name, n, null), Ot(
            t,
            e,
            "formEncType",
            n.formEncType,
            n,
            null
          ), Ot(
            t,
            e,
            "formMethod",
            n.formMethod,
            n,
            null
          ), Ot(
            t,
            e,
            "formTarget",
            n.formTarget,
            n,
            null
          )) : (Ot(t, e, "encType", n.encType, n, null), Ot(t, e, "method", n.method, n, null), Ot(t, e, "target", n.target, n, null)));
        if (l == null || typeof l == "symbol" || typeof l == "boolean") {
          t.removeAttribute(a);
          break;
        }
        l = vi("" + l), t.setAttribute(a, l);
        break;
      case "onClick":
        l != null && (t.onclick = $e);
        break;
      case "onScroll":
        l != null && dt("scroll", t);
        break;
      case "onScrollEnd":
        l != null && dt("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l))
            throw Error(s(61));
          if (a = l.__html, a != null) {
            if (n.children != null) throw Error(s(60));
            t.innerHTML = a;
          }
        }
        break;
      case "multiple":
        t.multiple = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "muted":
        t.muted = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (l == null || typeof l == "function" || typeof l == "boolean" || typeof l == "symbol") {
          t.removeAttribute("xlink:href");
          break;
        }
        a = vi("" + l), t.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          a
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        l != null && typeof l != "function" && typeof l != "symbol" ? t.setAttribute(a, "" + l) : t.removeAttribute(a);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        l && typeof l != "function" && typeof l != "symbol" ? t.setAttribute(a, "") : t.removeAttribute(a);
        break;
      case "capture":
      case "download":
        l === !0 ? t.setAttribute(a, "") : l !== !1 && l != null && typeof l != "function" && typeof l != "symbol" ? t.setAttribute(a, l) : t.removeAttribute(a);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        l != null && typeof l != "function" && typeof l != "symbol" && !isNaN(l) && 1 <= l ? t.setAttribute(a, l) : t.removeAttribute(a);
        break;
      case "rowSpan":
      case "start":
        l == null || typeof l == "function" || typeof l == "symbol" || isNaN(l) ? t.removeAttribute(a) : t.setAttribute(a, l);
        break;
      case "popover":
        dt("beforetoggle", t), dt("toggle", t), hi(t, "popover", l);
        break;
      case "xlinkActuate":
        We(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          l
        );
        break;
      case "xlinkArcrole":
        We(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          l
        );
        break;
      case "xlinkRole":
        We(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          l
        );
        break;
      case "xlinkShow":
        We(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          l
        );
        break;
      case "xlinkTitle":
        We(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          l
        );
        break;
      case "xlinkType":
        We(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          l
        );
        break;
      case "xmlBase":
        We(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          l
        );
        break;
      case "xmlLang":
        We(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          l
        );
        break;
      case "xmlSpace":
        We(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          l
        );
        break;
      case "is":
        hi(t, "is", l);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = zp.get(a) || a, hi(t, a, l));
    }
  }
  function Rr(t, e, a, l, n, i) {
    switch (a) {
      case "style":
        Qf(t, l, i);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l))
            throw Error(s(61));
          if (a = l.__html, a != null) {
            if (n.children != null) throw Error(s(60));
            t.innerHTML = a;
          }
        }
        break;
      case "children":
        typeof l == "string" ? vl(t, l) : (typeof l == "number" || typeof l == "bigint") && vl(t, "" + l);
        break;
      case "onScroll":
        l != null && dt("scroll", t);
        break;
      case "onScrollEnd":
        l != null && dt("scrollend", t);
        break;
      case "onClick":
        l != null && (t.onclick = $e);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!wf.hasOwnProperty(a))
          t: {
            if (a[0] === "o" && a[1] === "n" && (n = a.endsWith("Capture"), e = a.slice(2, n ? a.length - 7 : void 0), i = t[re] || null, i = i != null ? i[a] : null, typeof i == "function" && t.removeEventListener(e, i, n), typeof l == "function")) {
              typeof i != "function" && i !== null && (a in t ? t[a] = null : t.hasAttribute(a) && t.removeAttribute(a)), t.addEventListener(e, l, n);
              break t;
            }
            a in t ? t[a] = l : l === !0 ? t.setAttribute(a, "") : hi(t, a, l);
          }
    }
  }
  function ae(t, e, a) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        dt("error", t), dt("load", t);
        var l = !1, n = !1, i;
        for (i in a)
          if (a.hasOwnProperty(i)) {
            var f = a[i];
            if (f != null)
              switch (i) {
                case "src":
                  l = !0;
                  break;
                case "srcSet":
                  n = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(s(137, e));
                default:
                  Ot(t, e, i, f, a, null);
              }
          }
        n && Ot(t, e, "srcSet", a.srcSet, a, null), l && Ot(t, e, "src", a.src, a, null);
        return;
      case "input":
        dt("invalid", t);
        var m = i = f = n = null, b = null, E = null;
        for (l in a)
          if (a.hasOwnProperty(l)) {
            var q = a[l];
            if (q != null)
              switch (l) {
                case "name":
                  n = q;
                  break;
                case "type":
                  f = q;
                  break;
                case "checked":
                  b = q;
                  break;
                case "defaultChecked":
                  E = q;
                  break;
                case "value":
                  i = q;
                  break;
                case "defaultValue":
                  m = q;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (q != null)
                    throw Error(s(137, e));
                  break;
                default:
                  Ot(t, e, l, q, a, null);
              }
          }
        Lf(
          t,
          i,
          m,
          b,
          E,
          f,
          n,
          !1
        );
        return;
      case "select":
        dt("invalid", t), l = f = i = null;
        for (n in a)
          if (a.hasOwnProperty(n) && (m = a[n], m != null))
            switch (n) {
              case "value":
                i = m;
                break;
              case "defaultValue":
                f = m;
                break;
              case "multiple":
                l = m;
              default:
                Ot(t, e, n, m, a, null);
            }
        e = i, a = f, t.multiple = !!l, e != null ? ml(t, !!l, e, !1) : a != null && ml(t, !!l, a, !0);
        return;
      case "textarea":
        dt("invalid", t), i = n = l = null;
        for (f in a)
          if (a.hasOwnProperty(f) && (m = a[f], m != null))
            switch (f) {
              case "value":
                l = m;
                break;
              case "defaultValue":
                n = m;
                break;
              case "children":
                i = m;
                break;
              case "dangerouslySetInnerHTML":
                if (m != null) throw Error(s(91));
                break;
              default:
                Ot(t, e, f, m, a, null);
            }
        kf(t, l, n, i);
        return;
      case "option":
        for (b in a)
          if (a.hasOwnProperty(b) && (l = a[b], l != null))
            switch (b) {
              case "selected":
                t.selected = l && typeof l != "function" && typeof l != "symbol";
                break;
              default:
                Ot(t, e, b, l, a, null);
            }
        return;
      case "dialog":
        dt("beforetoggle", t), dt("toggle", t), dt("cancel", t), dt("close", t);
        break;
      case "iframe":
      case "object":
        dt("load", t);
        break;
      case "video":
      case "audio":
        for (l = 0; l < Hn.length; l++)
          dt(Hn[l], t);
        break;
      case "image":
        dt("error", t), dt("load", t);
        break;
      case "details":
        dt("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        dt("error", t), dt("load", t);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (E in a)
          if (a.hasOwnProperty(E) && (l = a[E], l != null))
            switch (E) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(s(137, e));
              default:
                Ot(t, e, E, l, a, null);
            }
        return;
      default:
        if (Ku(e)) {
          for (q in a)
            a.hasOwnProperty(q) && (l = a[q], l !== void 0 && Rr(
              t,
              e,
              q,
              l,
              a,
              void 0
            ));
          return;
        }
    }
    for (m in a)
      a.hasOwnProperty(m) && (l = a[m], l != null && Ot(t, e, m, l, a, null));
  }
  function l1(t, e, a, l) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var n = null, i = null, f = null, m = null, b = null, E = null, q = null;
        for (D in a) {
          var N = a[D];
          if (a.hasOwnProperty(D) && N != null)
            switch (D) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                b = N;
              default:
                l.hasOwnProperty(D) || Ot(t, e, D, null, l, N);
            }
        }
        for (var A in l) {
          var D = l[A];
          if (N = a[A], l.hasOwnProperty(A) && (D != null || N != null))
            switch (A) {
              case "type":
                i = D;
                break;
              case "name":
                n = D;
                break;
              case "checked":
                E = D;
                break;
              case "defaultChecked":
                q = D;
                break;
              case "value":
                f = D;
                break;
              case "defaultValue":
                m = D;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (D != null)
                  throw Error(s(137, e));
                break;
              default:
                D !== N && Ot(
                  t,
                  e,
                  A,
                  D,
                  l,
                  N
                );
            }
        }
        Vu(
          t,
          f,
          m,
          b,
          E,
          q,
          i,
          n
        );
        return;
      case "select":
        D = f = m = A = null;
        for (i in a)
          if (b = a[i], a.hasOwnProperty(i) && b != null)
            switch (i) {
              case "value":
                break;
              case "multiple":
                D = b;
              default:
                l.hasOwnProperty(i) || Ot(
                  t,
                  e,
                  i,
                  null,
                  l,
                  b
                );
            }
        for (n in l)
          if (i = l[n], b = a[n], l.hasOwnProperty(n) && (i != null || b != null))
            switch (n) {
              case "value":
                A = i;
                break;
              case "defaultValue":
                m = i;
                break;
              case "multiple":
                f = i;
              default:
                i !== b && Ot(
                  t,
                  e,
                  n,
                  i,
                  l,
                  b
                );
            }
        e = m, a = f, l = D, A != null ? ml(t, !!a, A, !1) : !!l != !!a && (e != null ? ml(t, !!a, e, !0) : ml(t, !!a, a ? [] : "", !1));
        return;
      case "textarea":
        D = A = null;
        for (m in a)
          if (n = a[m], a.hasOwnProperty(m) && n != null && !l.hasOwnProperty(m))
            switch (m) {
              case "value":
                break;
              case "children":
                break;
              default:
                Ot(t, e, m, null, l, n);
            }
        for (f in l)
          if (n = l[f], i = a[f], l.hasOwnProperty(f) && (n != null || i != null))
            switch (f) {
              case "value":
                A = n;
                break;
              case "defaultValue":
                D = n;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (n != null) throw Error(s(91));
                break;
              default:
                n !== i && Ot(t, e, f, n, l, i);
            }
        Gf(t, A, D);
        return;
      case "option":
        for (var Q in a)
          if (A = a[Q], a.hasOwnProperty(Q) && A != null && !l.hasOwnProperty(Q))
            switch (Q) {
              case "selected":
                t.selected = !1;
                break;
              default:
                Ot(
                  t,
                  e,
                  Q,
                  null,
                  l,
                  A
                );
            }
        for (b in l)
          if (A = l[b], D = a[b], l.hasOwnProperty(b) && A !== D && (A != null || D != null))
            switch (b) {
              case "selected":
                t.selected = A && typeof A != "function" && typeof A != "symbol";
                break;
              default:
                Ot(
                  t,
                  e,
                  b,
                  A,
                  l,
                  D
                );
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var P in a)
          A = a[P], a.hasOwnProperty(P) && A != null && !l.hasOwnProperty(P) && Ot(t, e, P, null, l, A);
        for (E in l)
          if (A = l[E], D = a[E], l.hasOwnProperty(E) && A !== D && (A != null || D != null))
            switch (E) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (A != null)
                  throw Error(s(137, e));
                break;
              default:
                Ot(
                  t,
                  e,
                  E,
                  A,
                  l,
                  D
                );
            }
        return;
      default:
        if (Ku(e)) {
          for (var zt in a)
            A = a[zt], a.hasOwnProperty(zt) && A !== void 0 && !l.hasOwnProperty(zt) && Rr(
              t,
              e,
              zt,
              void 0,
              l,
              A
            );
          for (q in l)
            A = l[q], D = a[q], !l.hasOwnProperty(q) || A === D || A === void 0 && D === void 0 || Rr(
              t,
              e,
              q,
              A,
              l,
              D
            );
          return;
        }
    }
    for (var C in a)
      A = a[C], a.hasOwnProperty(C) && A != null && !l.hasOwnProperty(C) && Ot(t, e, C, null, l, A);
    for (N in l)
      A = l[N], D = a[N], !l.hasOwnProperty(N) || A === D || A == null && D == null || Ot(t, e, N, A, l, D);
  }
  function Vm(t) {
    switch (t) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function n1() {
    if (typeof performance.getEntriesByType == "function") {
      for (var t = 0, e = 0, a = performance.getEntriesByType("resource"), l = 0; l < a.length; l++) {
        var n = a[l], i = n.transferSize, f = n.initiatorType, m = n.duration;
        if (i && m && Vm(f)) {
          for (f = 0, m = n.responseEnd, l += 1; l < a.length; l++) {
            var b = a[l], E = b.startTime;
            if (E > m) break;
            var q = b.transferSize, N = b.initiatorType;
            q && Vm(N) && (b = b.responseEnd, f += q * (b < m ? 1 : (m - E) / (b - E)));
          }
          if (--l, e += 8 * (i + f) / (n.duration / 1e3), t++, 10 < t) break;
        }
      }
      if (0 < t) return e / t / 1e6;
    }
    return navigator.connection && (t = navigator.connection.downlink, typeof t == "number") ? t : 5;
  }
  var qr = null, wr = null;
  function ou(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function Xm(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Km(t, e) {
    if (t === 0)
      switch (e) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && e === "foreignObject" ? 0 : t;
  }
  function Nr(t, e) {
    return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null;
  }
  var Hr = null;
  function i1() {
    var t = window.event;
    return t && t.type === "popstate" ? t === Hr ? !1 : (Hr = t, !0) : (Hr = null, !1);
  }
  var Zm = typeof setTimeout == "function" ? setTimeout : void 0, u1 = typeof clearTimeout == "function" ? clearTimeout : void 0, Jm = typeof Promise == "function" ? Promise : void 0, s1 = typeof queueMicrotask == "function" ? queueMicrotask : typeof Jm < "u" ? function(t) {
    return Jm.resolve(null).then(t).catch(r1);
  } : Zm;
  function r1(t) {
    setTimeout(function() {
      throw t;
    });
  }
  function Na(t) {
    return t === "head";
  }
  function Wm(t, e) {
    var a = e, l = 0;
    do {
      var n = a.nextSibling;
      if (t.removeChild(a), n && n.nodeType === 8)
        if (a = n.data, a === "/$" || a === "/&") {
          if (l === 0) {
            t.removeChild(n), Kl(e);
            return;
          }
          l--;
        } else if (a === "$" || a === "$?" || a === "$~" || a === "$!" || a === "&")
          l++;
        else if (a === "html")
          Bn(t.ownerDocument.documentElement);
        else if (a === "head") {
          a = t.ownerDocument.head, Bn(a);
          for (var i = a.firstChild; i; ) {
            var f = i.nextSibling, m = i.nodeName;
            i[en] || m === "SCRIPT" || m === "STYLE" || m === "LINK" && i.rel.toLowerCase() === "stylesheet" || a.removeChild(i), i = f;
          }
        } else
          a === "body" && Bn(t.ownerDocument.body);
      a = n;
    } while (a);
    Kl(e);
  }
  function $m(t, e) {
    var a = t;
    t = 0;
    do {
      var l = a.nextSibling;
      if (a.nodeType === 1 ? e ? (a._stashedDisplay = a.style.display, a.style.display = "none") : (a.style.display = a._stashedDisplay || "", a.getAttribute("style") === "" && a.removeAttribute("style")) : a.nodeType === 3 && (e ? (a._stashedText = a.nodeValue, a.nodeValue = "") : a.nodeValue = a._stashedText || ""), l && l.nodeType === 8)
        if (a = l.data, a === "/$") {
          if (t === 0) break;
          t--;
        } else
          a !== "$" && a !== "$?" && a !== "$~" && a !== "$!" || t++;
      a = l;
    } while (a);
  }
  function Ur(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var a = e;
      switch (e = e.nextSibling, a.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Ur(a), Yu(a);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (a.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(a);
    }
  }
  function c1(t, e, a, l) {
    for (; t.nodeType === 1; ) {
      var n = a;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!l && (t.nodeName !== "INPUT" || t.type !== "hidden"))
          break;
      } else if (l) {
        if (!t[en])
          switch (e) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (i = t.getAttribute("rel"), i === "stylesheet" && t.hasAttribute("data-precedence"))
                break;
              if (i !== n.rel || t.getAttribute("href") !== (n.href == null || n.href === "" ? null : n.href) || t.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin) || t.getAttribute("title") !== (n.title == null ? null : n.title))
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (i = t.getAttribute("src"), (i !== (n.src == null ? null : n.src) || t.getAttribute("type") !== (n.type == null ? null : n.type) || t.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin)) && i && t.hasAttribute("async") && !t.hasAttribute("itemprop"))
                break;
              return t;
            default:
              return t;
          }
      } else if (e === "input" && t.type === "hidden") {
        var i = n.name == null ? null : "" + n.name;
        if (n.type === "hidden" && t.getAttribute("name") === i)
          return t;
      } else return t;
      if (t = Re(t.nextSibling), t === null) break;
    }
    return null;
  }
  function o1(t, e, a) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !a || (t = Re(t.nextSibling), t === null)) return null;
    return t;
  }
  function Fm(t, e) {
    for (; t.nodeType !== 8; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = Re(t.nextSibling), t === null)) return null;
    return t;
  }
  function Br(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function Lr(t) {
    return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading";
  }
  function f1(t, e) {
    var a = t.ownerDocument;
    if (t.data === "$~") t._reactRetry = e;
    else if (t.data !== "$?" || a.readyState !== "loading")
      e();
    else {
      var l = function() {
        e(), a.removeEventListener("DOMContentLoaded", l);
      };
      a.addEventListener("DOMContentLoaded", l), t._reactRetry = l;
    }
  }
  function Re(t) {
    for (; t != null; t = t.nextSibling) {
      var e = t.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (e = t.data, e === "$" || e === "$!" || e === "$?" || e === "$~" || e === "&" || e === "F!" || e === "F")
          break;
        if (e === "/$" || e === "/&") return null;
      }
    }
    return t;
  }
  var Gr = null;
  function Im(t) {
    t = t.nextSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var a = t.data;
        if (a === "/$" || a === "/&") {
          if (e === 0)
            return Re(t.nextSibling);
          e--;
        } else
          a !== "$" && a !== "$!" && a !== "$?" && a !== "$~" && a !== "&" || e++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function Pm(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var a = t.data;
        if (a === "$" || a === "$!" || a === "$?" || a === "$~" || a === "&") {
          if (e === 0) return t;
          e--;
        } else a !== "/$" && a !== "/&" || e++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function tv(t, e, a) {
    switch (e = ou(a), t) {
      case "html":
        if (t = e.documentElement, !t) throw Error(s(452));
        return t;
      case "head":
        if (t = e.head, !t) throw Error(s(453));
        return t;
      case "body":
        if (t = e.body, !t) throw Error(s(454));
        return t;
      default:
        throw Error(s(451));
    }
  }
  function Bn(t) {
    for (var e = t.attributes; e.length; )
      t.removeAttributeNode(e[0]);
    Yu(t);
  }
  var qe = /* @__PURE__ */ new Map(), ev = /* @__PURE__ */ new Set();
  function fu(t) {
    return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument;
  }
  var ha = R.d;
  R.d = {
    f: h1,
    r: d1,
    D: m1,
    C: v1,
    L: g1,
    m: y1,
    X: b1,
    S: p1,
    M: S1
  };
  function h1() {
    var t = ha.f(), e = au();
    return t || e;
  }
  function d1(t) {
    var e = fl(t);
    e !== null && e.tag === 5 && e.type === "form" ? pd(e) : ha.r(t);
  }
  var Ql = typeof document > "u" ? null : document;
  function av(t, e, a) {
    var l = Ql;
    if (l && typeof e == "string" && e) {
      var n = Ee(e);
      n = 'link[rel="' + t + '"][href="' + n + '"]', typeof a == "string" && (n += '[crossorigin="' + a + '"]'), ev.has(n) || (ev.add(n), t = { rel: t, crossOrigin: a, href: e }, l.querySelector(n) === null && (e = l.createElement("link"), ae(e, "link", t), $t(e), l.head.appendChild(e)));
    }
  }
  function m1(t) {
    ha.D(t), av("dns-prefetch", t, null);
  }
  function v1(t, e) {
    ha.C(t, e), av("preconnect", t, e);
  }
  function g1(t, e, a) {
    ha.L(t, e, a);
    var l = Ql;
    if (l && t && e) {
      var n = 'link[rel="preload"][as="' + Ee(e) + '"]';
      e === "image" && a && a.imageSrcSet ? (n += '[imagesrcset="' + Ee(
        a.imageSrcSet
      ) + '"]', typeof a.imageSizes == "string" && (n += '[imagesizes="' + Ee(
        a.imageSizes
      ) + '"]')) : n += '[href="' + Ee(t) + '"]';
      var i = n;
      switch (e) {
        case "style":
          i = Vl(t);
          break;
        case "script":
          i = Xl(t);
      }
      qe.has(i) || (t = z(
        {
          rel: "preload",
          href: e === "image" && a && a.imageSrcSet ? void 0 : t,
          as: e
        },
        a
      ), qe.set(i, t), l.querySelector(n) !== null || e === "style" && l.querySelector(Ln(i)) || e === "script" && l.querySelector(Gn(i)) || (e = l.createElement("link"), ae(e, "link", t), $t(e), l.head.appendChild(e)));
    }
  }
  function y1(t, e) {
    ha.m(t, e);
    var a = Ql;
    if (a && t) {
      var l = e && typeof e.as == "string" ? e.as : "script", n = 'link[rel="modulepreload"][as="' + Ee(l) + '"][href="' + Ee(t) + '"]', i = n;
      switch (l) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          i = Xl(t);
      }
      if (!qe.has(i) && (t = z({ rel: "modulepreload", href: t }, e), qe.set(i, t), a.querySelector(n) === null)) {
        switch (l) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(Gn(i)))
              return;
        }
        l = a.createElement("link"), ae(l, "link", t), $t(l), a.head.appendChild(l);
      }
    }
  }
  function p1(t, e, a) {
    ha.S(t, e, a);
    var l = Ql;
    if (l && t) {
      var n = hl(l).hoistableStyles, i = Vl(t);
      e = e || "default";
      var f = n.get(i);
      if (!f) {
        var m = { loading: 0, preload: null };
        if (f = l.querySelector(
          Ln(i)
        ))
          m.loading = 5;
        else {
          t = z(
            { rel: "stylesheet", href: t, "data-precedence": e },
            a
          ), (a = qe.get(i)) && kr(t, a);
          var b = f = l.createElement("link");
          $t(b), ae(b, "link", t), b._p = new Promise(function(E, q) {
            b.onload = E, b.onerror = q;
          }), b.addEventListener("load", function() {
            m.loading |= 1;
          }), b.addEventListener("error", function() {
            m.loading |= 2;
          }), m.loading |= 4, hu(f, e, l);
        }
        f = {
          type: "stylesheet",
          instance: f,
          count: 1,
          state: m
        }, n.set(i, f);
      }
    }
  }
  function b1(t, e) {
    ha.X(t, e);
    var a = Ql;
    if (a && t) {
      var l = hl(a).hoistableScripts, n = Xl(t), i = l.get(n);
      i || (i = a.querySelector(Gn(n)), i || (t = z({ src: t, async: !0 }, e), (e = qe.get(n)) && Yr(t, e), i = a.createElement("script"), $t(i), ae(i, "link", t), a.head.appendChild(i)), i = {
        type: "script",
        instance: i,
        count: 1,
        state: null
      }, l.set(n, i));
    }
  }
  function S1(t, e) {
    ha.M(t, e);
    var a = Ql;
    if (a && t) {
      var l = hl(a).hoistableScripts, n = Xl(t), i = l.get(n);
      i || (i = a.querySelector(Gn(n)), i || (t = z({ src: t, async: !0, type: "module" }, e), (e = qe.get(n)) && Yr(t, e), i = a.createElement("script"), $t(i), ae(i, "link", t), a.head.appendChild(i)), i = {
        type: "script",
        instance: i,
        count: 1,
        state: null
      }, l.set(n, i));
    }
  }
  function lv(t, e, a, l) {
    var n = (n = ut.current) ? fu(n) : null;
    if (!n) throw Error(s(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string" ? (e = Vl(a.href), a = hl(
          n
        ).hoistableStyles, l = a.get(e), l || (l = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, a.set(e, l)), l) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
          t = Vl(a.href);
          var i = hl(
            n
          ).hoistableStyles, f = i.get(t);
          if (f || (n = n.ownerDocument || n, f = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, i.set(t, f), (i = n.querySelector(
            Ln(t)
          )) && !i._p && (f.instance = i, f.state.loading = 5), qe.has(t) || (a = {
            rel: "preload",
            as: "style",
            href: a.href,
            crossOrigin: a.crossOrigin,
            integrity: a.integrity,
            media: a.media,
            hrefLang: a.hrefLang,
            referrerPolicy: a.referrerPolicy
          }, qe.set(t, a), i || _1(
            n,
            t,
            a,
            f.state
          ))), e && l === null)
            throw Error(s(528, ""));
          return f;
        }
        if (e && l !== null)
          throw Error(s(529, ""));
        return null;
      case "script":
        return e = a.async, a = a.src, typeof a == "string" && e && typeof e != "function" && typeof e != "symbol" ? (e = Xl(a), a = hl(
          n
        ).hoistableScripts, l = a.get(e), l || (l = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, a.set(e, l)), l) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(s(444, t));
    }
  }
  function Vl(t) {
    return 'href="' + Ee(t) + '"';
  }
  function Ln(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function nv(t) {
    return z({}, t, {
      "data-precedence": t.precedence,
      precedence: null
    });
  }
  function _1(t, e, a, l) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]") ? l.loading = 1 : (e = t.createElement("link"), l.preload = e, e.addEventListener("load", function() {
      return l.loading |= 1;
    }), e.addEventListener("error", function() {
      return l.loading |= 2;
    }), ae(e, "link", a), $t(e), t.head.appendChild(e));
  }
  function Xl(t) {
    return '[src="' + Ee(t) + '"]';
  }
  function Gn(t) {
    return "script[async]" + t;
  }
  function iv(t, e, a) {
    if (e.count++, e.instance === null)
      switch (e.type) {
        case "style":
          var l = t.querySelector(
            'style[data-href~="' + Ee(a.href) + '"]'
          );
          if (l)
            return e.instance = l, $t(l), l;
          var n = z({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null
          });
          return l = (t.ownerDocument || t).createElement(
            "style"
          ), $t(l), ae(l, "style", n), hu(l, a.precedence, t), e.instance = l;
        case "stylesheet":
          n = Vl(a.href);
          var i = t.querySelector(
            Ln(n)
          );
          if (i)
            return e.state.loading |= 4, e.instance = i, $t(i), i;
          l = nv(a), (n = qe.get(n)) && kr(l, n), i = (t.ownerDocument || t).createElement("link"), $t(i);
          var f = i;
          return f._p = new Promise(function(m, b) {
            f.onload = m, f.onerror = b;
          }), ae(i, "link", l), e.state.loading |= 4, hu(i, a.precedence, t), e.instance = i;
        case "script":
          return i = Xl(a.src), (n = t.querySelector(
            Gn(i)
          )) ? (e.instance = n, $t(n), n) : (l = a, (n = qe.get(i)) && (l = z({}, a), Yr(l, n)), t = t.ownerDocument || t, n = t.createElement("script"), $t(n), ae(n, "link", l), t.head.appendChild(n), e.instance = n);
        case "void":
          return null;
        default:
          throw Error(s(443, e.type));
      }
    else
      e.type === "stylesheet" && (e.state.loading & 4) === 0 && (l = e.instance, e.state.loading |= 4, hu(l, a.precedence, t));
    return e.instance;
  }
  function hu(t, e, a) {
    for (var l = a.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), n = l.length ? l[l.length - 1] : null, i = n, f = 0; f < l.length; f++) {
      var m = l[f];
      if (m.dataset.precedence === e) i = m;
      else if (i !== n) break;
    }
    i ? i.parentNode.insertBefore(t, i.nextSibling) : (e = a.nodeType === 9 ? a.head : a, e.insertBefore(t, e.firstChild));
  }
  function kr(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.title == null && (t.title = e.title);
  }
  function Yr(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.integrity == null && (t.integrity = e.integrity);
  }
  var du = null;
  function uv(t, e, a) {
    if (du === null) {
      var l = /* @__PURE__ */ new Map(), n = du = /* @__PURE__ */ new Map();
      n.set(a, l);
    } else
      n = du, l = n.get(a), l || (l = /* @__PURE__ */ new Map(), n.set(a, l));
    if (l.has(t)) return l;
    for (l.set(t, null), a = a.getElementsByTagName(t), n = 0; n < a.length; n++) {
      var i = a[n];
      if (!(i[en] || i[It] || t === "link" && i.getAttribute("rel") === "stylesheet") && i.namespaceURI !== "http://www.w3.org/2000/svg") {
        var f = i.getAttribute(e) || "";
        f = t + f;
        var m = l.get(f);
        m ? m.push(i) : l.set(f, [i]);
      }
    }
    return l;
  }
  function sv(t, e, a) {
    t = t.ownerDocument || t, t.head.insertBefore(
      a,
      e === "title" ? t.querySelector("head > title") : null
    );
  }
  function T1(t, e, a) {
    if (a === 1 || e.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof e.precedence != "string" || typeof e.href != "string" || e.href === "")
          break;
        return !0;
      case "link":
        if (typeof e.rel != "string" || typeof e.href != "string" || e.href === "" || e.onLoad || e.onError)
          break;
        switch (e.rel) {
          case "stylesheet":
            return t = e.disabled, typeof e.precedence == "string" && t == null;
          default:
            return !0;
        }
      case "script":
        if (e.async && typeof e.async != "function" && typeof e.async != "symbol" && !e.onLoad && !e.onError && e.src && typeof e.src == "string")
          return !0;
    }
    return !1;
  }
  function rv(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  function C1(t, e, a, l) {
    if (a.type === "stylesheet" && (typeof l.media != "string" || matchMedia(l.media).matches !== !1) && (a.state.loading & 4) === 0) {
      if (a.instance === null) {
        var n = Vl(l.href), i = e.querySelector(
          Ln(n)
        );
        if (i) {
          e = i._p, e !== null && typeof e == "object" && typeof e.then == "function" && (t.count++, t = mu.bind(t), e.then(t, t)), a.state.loading |= 4, a.instance = i, $t(i);
          return;
        }
        i = e.ownerDocument || e, l = nv(l), (n = qe.get(n)) && kr(l, n), i = i.createElement("link"), $t(i);
        var f = i;
        f._p = new Promise(function(m, b) {
          f.onload = m, f.onerror = b;
        }), ae(i, "link", l), a.instance = i;
      }
      t.stylesheets === null && (t.stylesheets = /* @__PURE__ */ new Map()), t.stylesheets.set(a, e), (e = a.state.preload) && (a.state.loading & 3) === 0 && (t.count++, a = mu.bind(t), e.addEventListener("load", a), e.addEventListener("error", a));
    }
  }
  var Qr = 0;
  function x1(t, e) {
    return t.stylesheets && t.count === 0 && gu(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function(a) {
      var l = setTimeout(function() {
        if (t.stylesheets && gu(t, t.stylesheets), t.unsuspend) {
          var i = t.unsuspend;
          t.unsuspend = null, i();
        }
      }, 6e4 + e);
      0 < t.imgBytes && Qr === 0 && (Qr = 62500 * n1());
      var n = setTimeout(
        function() {
          if (t.waitingForImages = !1, t.count === 0 && (t.stylesheets && gu(t, t.stylesheets), t.unsuspend)) {
            var i = t.unsuspend;
            t.unsuspend = null, i();
          }
        },
        (t.imgBytes > Qr ? 50 : 800) + e
      );
      return t.unsuspend = a, function() {
        t.unsuspend = null, clearTimeout(l), clearTimeout(n);
      };
    } : null;
  }
  function mu() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) gu(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        this.unsuspend = null, t();
      }
    }
  }
  var vu = null;
  function gu(t, e) {
    t.stylesheets = null, t.unsuspend !== null && (t.count++, vu = /* @__PURE__ */ new Map(), e.forEach(E1, t), vu = null, mu.call(t));
  }
  function E1(t, e) {
    if (!(e.state.loading & 4)) {
      var a = vu.get(t);
      if (a) var l = a.get(null);
      else {
        a = /* @__PURE__ */ new Map(), vu.set(t, a);
        for (var n = t.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), i = 0; i < n.length; i++) {
          var f = n[i];
          (f.nodeName === "LINK" || f.getAttribute("media") !== "not all") && (a.set(f.dataset.precedence, f), l = f);
        }
        l && a.set(null, l);
      }
      n = e.instance, f = n.getAttribute("data-precedence"), i = a.get(f) || l, i === l && a.set(null, n), a.set(f, n), this.count++, l = mu.bind(this), n.addEventListener("load", l), n.addEventListener("error", l), i ? i.parentNode.insertBefore(n, i.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(n, t.firstChild)), e.state.loading |= 4;
    }
  }
  var kn = {
    $$typeof: nt,
    Provider: null,
    Consumer: null,
    _currentValue: B,
    _currentValue2: B,
    _threadCount: 0
  };
  function A1(t, e, a, l, n, i, f, m, b) {
    this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Bu(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Bu(0), this.hiddenUpdates = Bu(null), this.identifierPrefix = l, this.onUncaughtError = n, this.onCaughtError = i, this.onRecoverableError = f, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = b, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function cv(t, e, a, l, n, i, f, m, b, E, q, N) {
    return t = new A1(
      t,
      e,
      a,
      f,
      b,
      E,
      q,
      N,
      m
    ), e = 1, i === !0 && (e |= 24), i = ye(3, null, null, e), t.current = i, i.stateNode = t, e = Ts(), e.refCount++, t.pooledCache = e, e.refCount++, i.memoizedState = {
      element: l,
      isDehydrated: a,
      cache: e
    }, As(i), t;
  }
  function ov(t) {
    return t ? (t = Tl, t) : Tl;
  }
  function fv(t, e, a, l, n, i) {
    n = ov(n), l.context === null ? l.context = n : l.pendingContext = n, l = xa(e), l.payload = { element: a }, i = i === void 0 ? null : i, i !== null && (l.callback = i), a = Ea(t, l, e), a !== null && (me(a, t, e), bn(a, t, e));
  }
  function hv(t, e) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var a = t.retryLane;
      t.retryLane = a !== 0 && a < e ? a : e;
    }
  }
  function Vr(t, e) {
    hv(t, e), (t = t.alternate) && hv(t, e);
  }
  function dv(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = Ja(t, 67108864);
      e !== null && me(e, t, 67108864), Vr(t, 67108864);
    }
  }
  function mv(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = Te();
      e = Lu(e);
      var a = Ja(t, e);
      a !== null && me(a, t, e), Vr(t, e);
    }
  }
  var yu = !0;
  function D1(t, e, a, l) {
    var n = T.T;
    T.T = null;
    var i = R.p;
    try {
      R.p = 2, Xr(t, e, a, l);
    } finally {
      R.p = i, T.T = n;
    }
  }
  function M1(t, e, a, l) {
    var n = T.T;
    T.T = null;
    var i = R.p;
    try {
      R.p = 8, Xr(t, e, a, l);
    } finally {
      R.p = i, T.T = n;
    }
  }
  function Xr(t, e, a, l) {
    if (yu) {
      var n = Kr(l);
      if (n === null)
        jr(
          t,
          e,
          l,
          pu,
          a
        ), gv(t, l);
      else if (z1(
        n,
        t,
        e,
        a,
        l
      ))
        l.stopPropagation();
      else if (gv(t, l), e & 4 && -1 < O1.indexOf(t)) {
        for (; n !== null; ) {
          var i = fl(n);
          if (i !== null)
            switch (i.tag) {
              case 3:
                if (i = i.stateNode, i.current.memoizedState.isDehydrated) {
                  var f = Qa(i.pendingLanes);
                  if (f !== 0) {
                    var m = i;
                    for (m.pendingLanes |= 2, m.entangledLanes |= 2; f; ) {
                      var b = 1 << 31 - ve(f);
                      m.entanglements[1] |= b, f &= ~b;
                    }
                    Ve(i), (_t & 6) === 0 && (tu = Wt() + 500, Nn(0));
                  }
                }
                break;
              case 31:
              case 13:
                m = Ja(i, 2), m !== null && me(m, i, 2), au(), Vr(i, 2);
            }
          if (i = Kr(l), i === null && jr(
            t,
            e,
            l,
            pu,
            a
          ), i === n) break;
          n = i;
        }
        n !== null && l.stopPropagation();
      } else
        jr(
          t,
          e,
          l,
          null,
          a
        );
    }
  }
  function Kr(t) {
    return t = Ju(t), Zr(t);
  }
  var pu = null;
  function Zr(t) {
    if (pu = null, t = ol(t), t !== null) {
      var e = h(t);
      if (e === null) t = null;
      else {
        var a = e.tag;
        if (a === 13) {
          if (t = d(e), t !== null) return t;
          t = null;
        } else if (a === 31) {
          if (t = y(e), t !== null) return t;
          t = null;
        } else if (a === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return pu = t, null;
  }
  function vv(t) {
    switch (t) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (rl()) {
          case ii:
            return 2;
          case Fl:
            return 8;
          case we:
          case ui:
            return 32;
          case Il:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Jr = !1, Ha = null, Ua = null, Ba = null, Yn = /* @__PURE__ */ new Map(), Qn = /* @__PURE__ */ new Map(), La = [], O1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function gv(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        Ha = null;
        break;
      case "dragenter":
      case "dragleave":
        Ua = null;
        break;
      case "mouseover":
      case "mouseout":
        Ba = null;
        break;
      case "pointerover":
      case "pointerout":
        Yn.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Qn.delete(e.pointerId);
    }
  }
  function Vn(t, e, a, l, n, i) {
    return t === null || t.nativeEvent !== i ? (t = {
      blockedOn: e,
      domEventName: a,
      eventSystemFlags: l,
      nativeEvent: i,
      targetContainers: [n]
    }, e !== null && (e = fl(e), e !== null && dv(e)), t) : (t.eventSystemFlags |= l, e = t.targetContainers, n !== null && e.indexOf(n) === -1 && e.push(n), t);
  }
  function z1(t, e, a, l, n) {
    switch (e) {
      case "focusin":
        return Ha = Vn(
          Ha,
          t,
          e,
          a,
          l,
          n
        ), !0;
      case "dragenter":
        return Ua = Vn(
          Ua,
          t,
          e,
          a,
          l,
          n
        ), !0;
      case "mouseover":
        return Ba = Vn(
          Ba,
          t,
          e,
          a,
          l,
          n
        ), !0;
      case "pointerover":
        var i = n.pointerId;
        return Yn.set(
          i,
          Vn(
            Yn.get(i) || null,
            t,
            e,
            a,
            l,
            n
          )
        ), !0;
      case "gotpointercapture":
        return i = n.pointerId, Qn.set(
          i,
          Vn(
            Qn.get(i) || null,
            t,
            e,
            a,
            l,
            n
          )
        ), !0;
    }
    return !1;
  }
  function yv(t) {
    var e = ol(t.target);
    if (e !== null) {
      var a = h(e);
      if (a !== null) {
        if (e = a.tag, e === 13) {
          if (e = d(a), e !== null) {
            t.blockedOn = e, jf(t.priority, function() {
              mv(a);
            });
            return;
          }
        } else if (e === 31) {
          if (e = y(a), e !== null) {
            t.blockedOn = e, jf(t.priority, function() {
              mv(a);
            });
            return;
          }
        } else if (e === 3 && a.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function bu(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var a = Kr(t.nativeEvent);
      if (a === null) {
        a = t.nativeEvent;
        var l = new a.constructor(
          a.type,
          a
        );
        Zu = l, a.target.dispatchEvent(l), Zu = null;
      } else
        return e = fl(a), e !== null && dv(e), t.blockedOn = a, !1;
      e.shift();
    }
    return !0;
  }
  function pv(t, e, a) {
    bu(t) && a.delete(e);
  }
  function j1() {
    Jr = !1, Ha !== null && bu(Ha) && (Ha = null), Ua !== null && bu(Ua) && (Ua = null), Ba !== null && bu(Ba) && (Ba = null), Yn.forEach(pv), Qn.forEach(pv);
  }
  function Su(t, e) {
    t.blockedOn === e && (t.blockedOn = null, Jr || (Jr = !0, c.unstable_scheduleCallback(
      c.unstable_NormalPriority,
      j1
    )));
  }
  var _u = null;
  function bv(t) {
    _u !== t && (_u = t, c.unstable_scheduleCallback(
      c.unstable_NormalPriority,
      function() {
        _u === t && (_u = null);
        for (var e = 0; e < t.length; e += 3) {
          var a = t[e], l = t[e + 1], n = t[e + 2];
          if (typeof l != "function") {
            if (Zr(l || a) === null)
              continue;
            break;
          }
          var i = fl(a);
          i !== null && (t.splice(e, 3), e -= 3, Ks(
            i,
            {
              pending: !0,
              data: n,
              method: a.method,
              action: l
            },
            l,
            n
          ));
        }
      }
    ));
  }
  function Kl(t) {
    function e(b) {
      return Su(b, t);
    }
    Ha !== null && Su(Ha, t), Ua !== null && Su(Ua, t), Ba !== null && Su(Ba, t), Yn.forEach(e), Qn.forEach(e);
    for (var a = 0; a < La.length; a++) {
      var l = La[a];
      l.blockedOn === t && (l.blockedOn = null);
    }
    for (; 0 < La.length && (a = La[0], a.blockedOn === null); )
      yv(a), a.blockedOn === null && La.shift();
    if (a = (t.ownerDocument || t).$$reactFormReplay, a != null)
      for (l = 0; l < a.length; l += 3) {
        var n = a[l], i = a[l + 1], f = n[re] || null;
        if (typeof i == "function")
          f || bv(a);
        else if (f) {
          var m = null;
          if (i && i.hasAttribute("formAction")) {
            if (n = i, f = i[re] || null)
              m = f.formAction;
            else if (Zr(n) !== null) continue;
          } else m = f.action;
          typeof m == "function" ? a[l + 1] = m : (a.splice(l, 3), l -= 3), bv(a);
        }
      }
  }
  function Sv() {
    function t(i) {
      i.canIntercept && i.info === "react-transition" && i.intercept({
        handler: function() {
          return new Promise(function(f) {
            return n = f;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function e() {
      n !== null && (n(), n = null), l || setTimeout(a, 20);
    }
    function a() {
      if (!l && !navigation.transition) {
        var i = navigation.currentEntry;
        i && i.url != null && navigation.navigate(i.url, {
          state: i.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var l = !1, n = null;
      return navigation.addEventListener("navigate", t), navigation.addEventListener("navigatesuccess", e), navigation.addEventListener("navigateerror", e), setTimeout(a, 100), function() {
        l = !0, navigation.removeEventListener("navigate", t), navigation.removeEventListener("navigatesuccess", e), navigation.removeEventListener("navigateerror", e), n !== null && (n(), n = null);
      };
    }
  }
  function Wr(t) {
    this._internalRoot = t;
  }
  Tu.prototype.render = Wr.prototype.render = function(t) {
    var e = this._internalRoot;
    if (e === null) throw Error(s(409));
    var a = e.current, l = Te();
    fv(a, l, t, e, null, null);
  }, Tu.prototype.unmount = Wr.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var e = t.containerInfo;
      fv(t.current, 2, null, t, null, null), au(), e[cl] = null;
    }
  };
  function Tu(t) {
    this._internalRoot = t;
  }
  Tu.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var e = zf();
      t = { blockedOn: null, target: t, priority: e };
      for (var a = 0; a < La.length && e !== 0 && e < La[a].priority; a++) ;
      La.splice(a, 0, t), a === 0 && yv(t);
    }
  };
  var _v = r.version;
  if (_v !== "19.2.0")
    throw Error(
      s(
        527,
        _v,
        "19.2.0"
      )
    );
  R.findDOMNode = function(t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function" ? Error(s(188)) : (t = Object.keys(t).join(","), Error(s(268, t)));
    return t = g(e), t = t !== null ? M(t) : null, t = t === null ? null : t.stateNode, t;
  };
  var R1 = {
    bundleType: 0,
    version: "19.2.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: T,
    reconcilerVersion: "19.2.0"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Cu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Cu.isDisabled && Cu.supportsFiber)
      try {
        se = Cu.inject(
          R1
        ), Gt = Cu;
      } catch {
      }
  }
  return Kn.createRoot = function(t, e) {
    if (!o(t)) throw Error(s(299));
    var a = !1, l = "", n = Md, i = Od, f = zd;
    return e != null && (e.unstable_strictMode === !0 && (a = !0), e.identifierPrefix !== void 0 && (l = e.identifierPrefix), e.onUncaughtError !== void 0 && (n = e.onUncaughtError), e.onCaughtError !== void 0 && (i = e.onCaughtError), e.onRecoverableError !== void 0 && (f = e.onRecoverableError)), e = cv(
      t,
      1,
      !1,
      null,
      null,
      a,
      l,
      null,
      n,
      i,
      f,
      Sv
    ), t[cl] = e.current, zr(t), new Wr(e);
  }, Kn.hydrateRoot = function(t, e, a) {
    if (!o(t)) throw Error(s(299));
    var l = !1, n = "", i = Md, f = Od, m = zd, b = null;
    return a != null && (a.unstable_strictMode === !0 && (l = !0), a.identifierPrefix !== void 0 && (n = a.identifierPrefix), a.onUncaughtError !== void 0 && (i = a.onUncaughtError), a.onCaughtError !== void 0 && (f = a.onCaughtError), a.onRecoverableError !== void 0 && (m = a.onRecoverableError), a.formState !== void 0 && (b = a.formState)), e = cv(
      t,
      1,
      !0,
      e,
      a ?? null,
      l,
      n,
      b,
      i,
      f,
      m,
      Sv
    ), e.context = ov(null), a = e.current, l = Te(), l = Lu(l), n = xa(l), n.callback = null, Ea(a, n, l), a = l, e.current.lanes = a, tn(e, a), Ve(e), t[cl] = e.current, zr(t), new Tu(e);
  }, Kn.version = "19.2.0", Kn;
}
var jv;
function Y1() {
  if (jv) return Ir.exports;
  jv = 1;
  function c() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c);
      } catch (r) {
        console.error(r);
      }
  }
  return c(), Ir.exports = k1(), Ir.exports;
}
var Q1 = Y1(), ac, Rv;
function V1() {
  if (Rv) return ac;
  Rv = 1;
  function c() {
    this.__data__ = [], this.size = 0;
  }
  return ac = c, ac;
}
var lc, qv;
function Vy() {
  if (qv) return lc;
  qv = 1;
  function c(r, u) {
    return r === u || r !== r && u !== u;
  }
  return lc = c, lc;
}
var nc, wv;
function zu() {
  if (wv) return nc;
  wv = 1;
  var c = Vy();
  function r(u, s) {
    for (var o = u.length; o--; )
      if (c(u[o][0], s))
        return o;
    return -1;
  }
  return nc = r, nc;
}
var ic, Nv;
function X1() {
  if (Nv) return ic;
  Nv = 1;
  var c = zu(), r = Array.prototype, u = r.splice;
  function s(o) {
    var h = this.__data__, d = c(h, o);
    if (d < 0)
      return !1;
    var y = h.length - 1;
    return d == y ? h.pop() : u.call(h, d, 1), --this.size, !0;
  }
  return ic = s, ic;
}
var uc, Hv;
function K1() {
  if (Hv) return uc;
  Hv = 1;
  var c = zu();
  function r(u) {
    var s = this.__data__, o = c(s, u);
    return o < 0 ? void 0 : s[o][1];
  }
  return uc = r, uc;
}
var sc, Uv;
function Z1() {
  if (Uv) return sc;
  Uv = 1;
  var c = zu();
  function r(u) {
    return c(this.__data__, u) > -1;
  }
  return sc = r, sc;
}
var rc, Bv;
function J1() {
  if (Bv) return rc;
  Bv = 1;
  var c = zu();
  function r(u, s) {
    var o = this.__data__, h = c(o, u);
    return h < 0 ? (++this.size, o.push([u, s])) : o[h][1] = s, this;
  }
  return rc = r, rc;
}
var cc, Lv;
function ju() {
  if (Lv) return cc;
  Lv = 1;
  var c = V1(), r = X1(), u = K1(), s = Z1(), o = J1();
  function h(d) {
    var y = -1, v = d == null ? 0 : d.length;
    for (this.clear(); ++y < v; ) {
      var g = d[y];
      this.set(g[0], g[1]);
    }
  }
  return h.prototype.clear = c, h.prototype.delete = r, h.prototype.get = u, h.prototype.has = s, h.prototype.set = o, cc = h, cc;
}
var oc, Gv;
function W1() {
  if (Gv) return oc;
  Gv = 1;
  var c = ju();
  function r() {
    this.__data__ = new c(), this.size = 0;
  }
  return oc = r, oc;
}
var fc, kv;
function $1() {
  if (kv) return fc;
  kv = 1;
  function c(r) {
    var u = this.__data__, s = u.delete(r);
    return this.size = u.size, s;
  }
  return fc = c, fc;
}
var hc, Yv;
function F1() {
  if (Yv) return hc;
  Yv = 1;
  function c(r) {
    return this.__data__.get(r);
  }
  return hc = c, hc;
}
var dc, Qv;
function I1() {
  if (Qv) return dc;
  Qv = 1;
  function c(r) {
    return this.__data__.has(r);
  }
  return dc = c, dc;
}
var mc, Vv;
function Xy() {
  if (Vv) return mc;
  Vv = 1;
  var c = typeof xu == "object" && xu && xu.Object === Object && xu;
  return mc = c, mc;
}
var vc, Xv;
function Ke() {
  if (Xv) return vc;
  Xv = 1;
  var c = Xy(), r = typeof self == "object" && self && self.Object === Object && self, u = c || r || Function("return this")();
  return vc = u, vc;
}
var gc, Kv;
function df() {
  if (Kv) return gc;
  Kv = 1;
  var c = Ke(), r = c.Symbol;
  return gc = r, gc;
}
var yc, Zv;
function P1() {
  if (Zv) return yc;
  Zv = 1;
  var c = df(), r = Object.prototype, u = r.hasOwnProperty, s = r.toString, o = c ? c.toStringTag : void 0;
  function h(d) {
    var y = u.call(d, o), v = d[o];
    try {
      d[o] = void 0;
      var g = !0;
    } catch {
    }
    var M = s.call(d);
    return g && (y ? d[o] = v : delete d[o]), M;
  }
  return yc = h, yc;
}
var pc, Jv;
function tb() {
  if (Jv) return pc;
  Jv = 1;
  var c = Object.prototype, r = c.toString;
  function u(s) {
    return r.call(s);
  }
  return pc = u, pc;
}
var bc, Wv;
function Ru() {
  if (Wv) return bc;
  Wv = 1;
  var c = df(), r = P1(), u = tb(), s = "[object Null]", o = "[object Undefined]", h = c ? c.toStringTag : void 0;
  function d(y) {
    return y == null ? y === void 0 ? o : s : h && h in Object(y) ? r(y) : u(y);
  }
  return bc = d, bc;
}
var Sc, $v;
function ei() {
  if ($v) return Sc;
  $v = 1;
  function c(r) {
    var u = typeof r;
    return r != null && (u == "object" || u == "function");
  }
  return Sc = c, Sc;
}
var _c, Fv;
function Ky() {
  if (Fv) return _c;
  Fv = 1;
  var c = Ru(), r = ei(), u = "[object AsyncFunction]", s = "[object Function]", o = "[object GeneratorFunction]", h = "[object Proxy]";
  function d(y) {
    if (!r(y))
      return !1;
    var v = c(y);
    return v == s || v == o || v == u || v == h;
  }
  return _c = d, _c;
}
var Tc, Iv;
function eb() {
  if (Iv) return Tc;
  Iv = 1;
  var c = Ke(), r = c["__core-js_shared__"];
  return Tc = r, Tc;
}
var Cc, Pv;
function ab() {
  if (Pv) return Cc;
  Pv = 1;
  var c = eb(), r = (function() {
    var s = /[^.]+$/.exec(c && c.keys && c.keys.IE_PROTO || "");
    return s ? "Symbol(src)_1." + s : "";
  })();
  function u(s) {
    return !!r && r in s;
  }
  return Cc = u, Cc;
}
var xc, tg;
function Zy() {
  if (tg) return xc;
  tg = 1;
  var c = Function.prototype, r = c.toString;
  function u(s) {
    if (s != null) {
      try {
        return r.call(s);
      } catch {
      }
      try {
        return s + "";
      } catch {
      }
    }
    return "";
  }
  return xc = u, xc;
}
var Ec, eg;
function lb() {
  if (eg) return Ec;
  eg = 1;
  var c = Ky(), r = ab(), u = ei(), s = Zy(), o = /[\\^$.*+?()[\]{}|]/g, h = /^\[object .+?Constructor\]$/, d = Function.prototype, y = Object.prototype, v = d.toString, g = y.hasOwnProperty, M = RegExp(
    "^" + v.call(g).replace(o, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  );
  function z(L) {
    if (!u(L) || r(L))
      return !1;
    var $ = c(L) ? M : h;
    return $.test(s(L));
  }
  return Ec = z, Ec;
}
var Ac, ag;
function nb() {
  if (ag) return Ac;
  ag = 1;
  function c(r, u) {
    return r?.[u];
  }
  return Ac = c, Ac;
}
var Dc, lg;
function sl() {
  if (lg) return Dc;
  lg = 1;
  var c = lb(), r = nb();
  function u(s, o) {
    var h = r(s, o);
    return c(h) ? h : void 0;
  }
  return Dc = u, Dc;
}
var Mc, ng;
function mf() {
  if (ng) return Mc;
  ng = 1;
  var c = sl(), r = Ke(), u = c(r, "Map");
  return Mc = u, Mc;
}
var Oc, ig;
function qu() {
  if (ig) return Oc;
  ig = 1;
  var c = sl(), r = c(Object, "create");
  return Oc = r, Oc;
}
var zc, ug;
function ib() {
  if (ug) return zc;
  ug = 1;
  var c = qu();
  function r() {
    this.__data__ = c ? c(null) : {}, this.size = 0;
  }
  return zc = r, zc;
}
var jc, sg;
function ub() {
  if (sg) return jc;
  sg = 1;
  function c(r) {
    var u = this.has(r) && delete this.__data__[r];
    return this.size -= u ? 1 : 0, u;
  }
  return jc = c, jc;
}
var Rc, rg;
function sb() {
  if (rg) return Rc;
  rg = 1;
  var c = qu(), r = "__lodash_hash_undefined__", u = Object.prototype, s = u.hasOwnProperty;
  function o(h) {
    var d = this.__data__;
    if (c) {
      var y = d[h];
      return y === r ? void 0 : y;
    }
    return s.call(d, h) ? d[h] : void 0;
  }
  return Rc = o, Rc;
}
var qc, cg;
function rb() {
  if (cg) return qc;
  cg = 1;
  var c = qu(), r = Object.prototype, u = r.hasOwnProperty;
  function s(o) {
    var h = this.__data__;
    return c ? h[o] !== void 0 : u.call(h, o);
  }
  return qc = s, qc;
}
var wc, og;
function cb() {
  if (og) return wc;
  og = 1;
  var c = qu(), r = "__lodash_hash_undefined__";
  function u(s, o) {
    var h = this.__data__;
    return this.size += this.has(s) ? 0 : 1, h[s] = c && o === void 0 ? r : o, this;
  }
  return wc = u, wc;
}
var Nc, fg;
function ob() {
  if (fg) return Nc;
  fg = 1;
  var c = ib(), r = ub(), u = sb(), s = rb(), o = cb();
  function h(d) {
    var y = -1, v = d == null ? 0 : d.length;
    for (this.clear(); ++y < v; ) {
      var g = d[y];
      this.set(g[0], g[1]);
    }
  }
  return h.prototype.clear = c, h.prototype.delete = r, h.prototype.get = u, h.prototype.has = s, h.prototype.set = o, Nc = h, Nc;
}
var Hc, hg;
function fb() {
  if (hg) return Hc;
  hg = 1;
  var c = ob(), r = ju(), u = mf();
  function s() {
    this.size = 0, this.__data__ = {
      hash: new c(),
      map: new (u || r)(),
      string: new c()
    };
  }
  return Hc = s, Hc;
}
var Uc, dg;
function hb() {
  if (dg) return Uc;
  dg = 1;
  function c(r) {
    var u = typeof r;
    return u == "string" || u == "number" || u == "symbol" || u == "boolean" ? r !== "__proto__" : r === null;
  }
  return Uc = c, Uc;
}
var Bc, mg;
function wu() {
  if (mg) return Bc;
  mg = 1;
  var c = hb();
  function r(u, s) {
    var o = u.__data__;
    return c(s) ? o[typeof s == "string" ? "string" : "hash"] : o.map;
  }
  return Bc = r, Bc;
}
var Lc, vg;
function db() {
  if (vg) return Lc;
  vg = 1;
  var c = wu();
  function r(u) {
    var s = c(this, u).delete(u);
    return this.size -= s ? 1 : 0, s;
  }
  return Lc = r, Lc;
}
var Gc, gg;
function mb() {
  if (gg) return Gc;
  gg = 1;
  var c = wu();
  function r(u) {
    return c(this, u).get(u);
  }
  return Gc = r, Gc;
}
var kc, yg;
function vb() {
  if (yg) return kc;
  yg = 1;
  var c = wu();
  function r(u) {
    return c(this, u).has(u);
  }
  return kc = r, kc;
}
var Yc, pg;
function gb() {
  if (pg) return Yc;
  pg = 1;
  var c = wu();
  function r(u, s) {
    var o = c(this, u), h = o.size;
    return o.set(u, s), this.size += o.size == h ? 0 : 1, this;
  }
  return Yc = r, Yc;
}
var Qc, bg;
function yb() {
  if (bg) return Qc;
  bg = 1;
  var c = fb(), r = db(), u = mb(), s = vb(), o = gb();
  function h(d) {
    var y = -1, v = d == null ? 0 : d.length;
    for (this.clear(); ++y < v; ) {
      var g = d[y];
      this.set(g[0], g[1]);
    }
  }
  return h.prototype.clear = c, h.prototype.delete = r, h.prototype.get = u, h.prototype.has = s, h.prototype.set = o, Qc = h, Qc;
}
var Vc, Sg;
function pb() {
  if (Sg) return Vc;
  Sg = 1;
  var c = ju(), r = mf(), u = yb(), s = 200;
  function o(h, d) {
    var y = this.__data__;
    if (y instanceof c) {
      var v = y.__data__;
      if (!r || v.length < s - 1)
        return v.push([h, d]), this.size = ++y.size, this;
      y = this.__data__ = new u(v);
    }
    return y.set(h, d), this.size = y.size, this;
  }
  return Vc = o, Vc;
}
var Xc, _g;
function bb() {
  if (_g) return Xc;
  _g = 1;
  var c = ju(), r = W1(), u = $1(), s = F1(), o = I1(), h = pb();
  function d(y) {
    var v = this.__data__ = new c(y);
    this.size = v.size;
  }
  return d.prototype.clear = r, d.prototype.delete = u, d.prototype.get = s, d.prototype.has = o, d.prototype.set = h, Xc = d, Xc;
}
var Kc, Tg;
function Sb() {
  if (Tg) return Kc;
  Tg = 1;
  function c(r, u) {
    for (var s = -1, o = r == null ? 0 : r.length; ++s < o && u(r[s], s, r) !== !1; )
      ;
    return r;
  }
  return Kc = c, Kc;
}
var Zc, Cg;
function _b() {
  if (Cg) return Zc;
  Cg = 1;
  var c = sl(), r = (function() {
    try {
      var u = c(Object, "defineProperty");
      return u({}, "", {}), u;
    } catch {
    }
  })();
  return Zc = r, Zc;
}
var Jc, xg;
function Jy() {
  if (xg) return Jc;
  xg = 1;
  var c = _b();
  function r(u, s, o) {
    s == "__proto__" && c ? c(u, s, {
      configurable: !0,
      enumerable: !0,
      value: o,
      writable: !0
    }) : u[s] = o;
  }
  return Jc = r, Jc;
}
var Wc, Eg;
function Wy() {
  if (Eg) return Wc;
  Eg = 1;
  var c = Jy(), r = Vy(), u = Object.prototype, s = u.hasOwnProperty;
  function o(h, d, y) {
    var v = h[d];
    (!(s.call(h, d) && r(v, y)) || y === void 0 && !(d in h)) && c(h, d, y);
  }
  return Wc = o, Wc;
}
var $c, Ag;
function Nu() {
  if (Ag) return $c;
  Ag = 1;
  var c = Wy(), r = Jy();
  function u(s, o, h, d) {
    var y = !h;
    h || (h = {});
    for (var v = -1, g = o.length; ++v < g; ) {
      var M = o[v], z = d ? d(h[M], s[M], M, h, s) : void 0;
      z === void 0 && (z = s[M]), y ? r(h, M, z) : c(h, M, z);
    }
    return h;
  }
  return $c = u, $c;
}
var Fc, Dg;
function Tb() {
  if (Dg) return Fc;
  Dg = 1;
  function c(r, u) {
    for (var s = -1, o = Array(r); ++s < r; )
      o[s] = u(s);
    return o;
  }
  return Fc = c, Fc;
}
var Ic, Mg;
function ai() {
  if (Mg) return Ic;
  Mg = 1;
  function c(r) {
    return r != null && typeof r == "object";
  }
  return Ic = c, Ic;
}
var Pc, Og;
function Cb() {
  if (Og) return Pc;
  Og = 1;
  var c = Ru(), r = ai(), u = "[object Arguments]";
  function s(o) {
    return r(o) && c(o) == u;
  }
  return Pc = s, Pc;
}
var to, zg;
function xb() {
  if (zg) return to;
  zg = 1;
  var c = Cb(), r = ai(), u = Object.prototype, s = u.hasOwnProperty, o = u.propertyIsEnumerable, h = c(/* @__PURE__ */ (function() {
    return arguments;
  })()) ? c : function(d) {
    return r(d) && s.call(d, "callee") && !o.call(d, "callee");
  };
  return to = h, to;
}
var eo, jg;
function vf() {
  if (jg) return eo;
  jg = 1;
  var c = Array.isArray;
  return eo = c, eo;
}
var Zn = { exports: {} }, ao, Rg;
function Eb() {
  if (Rg) return ao;
  Rg = 1;
  function c() {
    return !1;
  }
  return ao = c, ao;
}
Zn.exports;
var qg;
function $y() {
  return qg || (qg = 1, (function(c, r) {
    var u = Ke(), s = Eb(), o = r && !r.nodeType && r, h = o && !0 && c && !c.nodeType && c, d = h && h.exports === o, y = d ? u.Buffer : void 0, v = y ? y.isBuffer : void 0, g = v || s;
    c.exports = g;
  })(Zn, Zn.exports)), Zn.exports;
}
var lo, wg;
function Ab() {
  if (wg) return lo;
  wg = 1;
  var c = 9007199254740991, r = /^(?:0|[1-9]\d*)$/;
  function u(s, o) {
    var h = typeof s;
    return o = o ?? c, !!o && (h == "number" || h != "symbol" && r.test(s)) && s > -1 && s % 1 == 0 && s < o;
  }
  return lo = u, lo;
}
var no, Ng;
function Fy() {
  if (Ng) return no;
  Ng = 1;
  var c = 9007199254740991;
  function r(u) {
    return typeof u == "number" && u > -1 && u % 1 == 0 && u <= c;
  }
  return no = r, no;
}
var io, Hg;
function Db() {
  if (Hg) return io;
  Hg = 1;
  var c = Ru(), r = Fy(), u = ai(), s = "[object Arguments]", o = "[object Array]", h = "[object Boolean]", d = "[object Date]", y = "[object Error]", v = "[object Function]", g = "[object Map]", M = "[object Number]", z = "[object Object]", L = "[object RegExp]", $ = "[object Set]", U = "[object String]", Z = "[object WeakMap]", at = "[object ArrayBuffer]", J = "[object DataView]", V = "[object Float32Array]", nt = "[object Float64Array]", rt = "[object Int8Array]", xt = "[object Int16Array]", Tt = "[object Int32Array]", lt = "[object Uint8Array]", jt = "[object Uint8ClampedArray]", yt = "[object Uint16Array]", Zt = "[object Uint32Array]", j = {};
  j[V] = j[nt] = j[rt] = j[xt] = j[Tt] = j[lt] = j[jt] = j[yt] = j[Zt] = !0, j[s] = j[o] = j[at] = j[h] = j[J] = j[d] = j[y] = j[v] = j[g] = j[M] = j[z] = j[L] = j[$] = j[U] = j[Z] = !1;
  function Y(F) {
    return u(F) && r(F.length) && !!j[c(F)];
  }
  return io = Y, io;
}
var uo, Ug;
function gf() {
  if (Ug) return uo;
  Ug = 1;
  function c(r) {
    return function(u) {
      return r(u);
    };
  }
  return uo = c, uo;
}
var Jn = { exports: {} };
Jn.exports;
var Bg;
function yf() {
  return Bg || (Bg = 1, (function(c, r) {
    var u = Xy(), s = r && !r.nodeType && r, o = s && !0 && c && !c.nodeType && c, h = o && o.exports === s, d = h && u.process, y = (function() {
      try {
        var v = o && o.require && o.require("util").types;
        return v || d && d.binding && d.binding("util");
      } catch {
      }
    })();
    c.exports = y;
  })(Jn, Jn.exports)), Jn.exports;
}
var so, Lg;
function Mb() {
  if (Lg) return so;
  Lg = 1;
  var c = Db(), r = gf(), u = yf(), s = u && u.isTypedArray, o = s ? r(s) : c;
  return so = o, so;
}
var ro, Gg;
function Iy() {
  if (Gg) return ro;
  Gg = 1;
  var c = Tb(), r = xb(), u = vf(), s = $y(), o = Ab(), h = Mb(), d = Object.prototype, y = d.hasOwnProperty;
  function v(g, M) {
    var z = u(g), L = !z && r(g), $ = !z && !L && s(g), U = !z && !L && !$ && h(g), Z = z || L || $ || U, at = Z ? c(g.length, String) : [], J = at.length;
    for (var V in g)
      (M || y.call(g, V)) && !(Z && // Safari 9 has enumerable `arguments.length` in strict mode.
      (V == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      $ && (V == "offset" || V == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      U && (V == "buffer" || V == "byteLength" || V == "byteOffset") || // Skip index properties.
      o(V, J))) && at.push(V);
    return at;
  }
  return ro = v, ro;
}
var co, kg;
function pf() {
  if (kg) return co;
  kg = 1;
  var c = Object.prototype;
  function r(u) {
    var s = u && u.constructor, o = typeof s == "function" && s.prototype || c;
    return u === o;
  }
  return co = r, co;
}
var oo, Yg;
function Py() {
  if (Yg) return oo;
  Yg = 1;
  function c(r, u) {
    return function(s) {
      return r(u(s));
    };
  }
  return oo = c, oo;
}
var fo, Qg;
function Ob() {
  if (Qg) return fo;
  Qg = 1;
  var c = Py(), r = c(Object.keys, Object);
  return fo = r, fo;
}
var ho, Vg;
function zb() {
  if (Vg) return ho;
  Vg = 1;
  var c = pf(), r = Ob(), u = Object.prototype, s = u.hasOwnProperty;
  function o(h) {
    if (!c(h))
      return r(h);
    var d = [];
    for (var y in Object(h))
      s.call(h, y) && y != "constructor" && d.push(y);
    return d;
  }
  return ho = o, ho;
}
var mo, Xg;
function tp() {
  if (Xg) return mo;
  Xg = 1;
  var c = Ky(), r = Fy();
  function u(s) {
    return s != null && r(s.length) && !c(s);
  }
  return mo = u, mo;
}
var vo, Kg;
function bf() {
  if (Kg) return vo;
  Kg = 1;
  var c = Iy(), r = zb(), u = tp();
  function s(o) {
    return u(o) ? c(o) : r(o);
  }
  return vo = s, vo;
}
var go, Zg;
function jb() {
  if (Zg) return go;
  Zg = 1;
  var c = Nu(), r = bf();
  function u(s, o) {
    return s && c(o, r(o), s);
  }
  return go = u, go;
}
var yo, Jg;
function Rb() {
  if (Jg) return yo;
  Jg = 1;
  function c(r) {
    var u = [];
    if (r != null)
      for (var s in Object(r))
        u.push(s);
    return u;
  }
  return yo = c, yo;
}
var po, Wg;
function qb() {
  if (Wg) return po;
  Wg = 1;
  var c = ei(), r = pf(), u = Rb(), s = Object.prototype, o = s.hasOwnProperty;
  function h(d) {
    if (!c(d))
      return u(d);
    var y = r(d), v = [];
    for (var g in d)
      g == "constructor" && (y || !o.call(d, g)) || v.push(g);
    return v;
  }
  return po = h, po;
}
var bo, $g;
function Sf() {
  if ($g) return bo;
  $g = 1;
  var c = Iy(), r = qb(), u = tp();
  function s(o) {
    return u(o) ? c(o, !0) : r(o);
  }
  return bo = s, bo;
}
var So, Fg;
function wb() {
  if (Fg) return So;
  Fg = 1;
  var c = Nu(), r = Sf();
  function u(s, o) {
    return s && c(o, r(o), s);
  }
  return So = u, So;
}
var Wn = { exports: {} };
Wn.exports;
var Ig;
function Nb() {
  return Ig || (Ig = 1, (function(c, r) {
    var u = Ke(), s = r && !r.nodeType && r, o = s && !0 && c && !c.nodeType && c, h = o && o.exports === s, d = h ? u.Buffer : void 0, y = d ? d.allocUnsafe : void 0;
    function v(g, M) {
      if (M)
        return g.slice();
      var z = g.length, L = y ? y(z) : new g.constructor(z);
      return g.copy(L), L;
    }
    c.exports = v;
  })(Wn, Wn.exports)), Wn.exports;
}
var _o, Pg;
function Hb() {
  if (Pg) return _o;
  Pg = 1;
  function c(r, u) {
    var s = -1, o = r.length;
    for (u || (u = Array(o)); ++s < o; )
      u[s] = r[s];
    return u;
  }
  return _o = c, _o;
}
var To, ty;
function Ub() {
  if (ty) return To;
  ty = 1;
  function c(r, u) {
    for (var s = -1, o = r == null ? 0 : r.length, h = 0, d = []; ++s < o; ) {
      var y = r[s];
      u(y, s, r) && (d[h++] = y);
    }
    return d;
  }
  return To = c, To;
}
var Co, ey;
function ep() {
  if (ey) return Co;
  ey = 1;
  function c() {
    return [];
  }
  return Co = c, Co;
}
var xo, ay;
function _f() {
  if (ay) return xo;
  ay = 1;
  var c = Ub(), r = ep(), u = Object.prototype, s = u.propertyIsEnumerable, o = Object.getOwnPropertySymbols, h = o ? function(d) {
    return d == null ? [] : (d = Object(d), c(o(d), function(y) {
      return s.call(d, y);
    }));
  } : r;
  return xo = h, xo;
}
var Eo, ly;
function Bb() {
  if (ly) return Eo;
  ly = 1;
  var c = Nu(), r = _f();
  function u(s, o) {
    return c(s, r(s), o);
  }
  return Eo = u, Eo;
}
var Ao, ny;
function ap() {
  if (ny) return Ao;
  ny = 1;
  function c(r, u) {
    for (var s = -1, o = u.length, h = r.length; ++s < o; )
      r[h + s] = u[s];
    return r;
  }
  return Ao = c, Ao;
}
var Do, iy;
function lp() {
  if (iy) return Do;
  iy = 1;
  var c = Py(), r = c(Object.getPrototypeOf, Object);
  return Do = r, Do;
}
var Mo, uy;
function np() {
  if (uy) return Mo;
  uy = 1;
  var c = ap(), r = lp(), u = _f(), s = ep(), o = Object.getOwnPropertySymbols, h = o ? function(d) {
    for (var y = []; d; )
      c(y, u(d)), d = r(d);
    return y;
  } : s;
  return Mo = h, Mo;
}
var Oo, sy;
function Lb() {
  if (sy) return Oo;
  sy = 1;
  var c = Nu(), r = np();
  function u(s, o) {
    return c(s, r(s), o);
  }
  return Oo = u, Oo;
}
var zo, ry;
function ip() {
  if (ry) return zo;
  ry = 1;
  var c = ap(), r = vf();
  function u(s, o, h) {
    var d = o(s);
    return r(s) ? d : c(d, h(s));
  }
  return zo = u, zo;
}
var jo, cy;
function Gb() {
  if (cy) return jo;
  cy = 1;
  var c = ip(), r = _f(), u = bf();
  function s(o) {
    return c(o, u, r);
  }
  return jo = s, jo;
}
var Ro, oy;
function kb() {
  if (oy) return Ro;
  oy = 1;
  var c = ip(), r = np(), u = Sf();
  function s(o) {
    return c(o, u, r);
  }
  return Ro = s, Ro;
}
var qo, fy;
function Yb() {
  if (fy) return qo;
  fy = 1;
  var c = sl(), r = Ke(), u = c(r, "DataView");
  return qo = u, qo;
}
var wo, hy;
function Qb() {
  if (hy) return wo;
  hy = 1;
  var c = sl(), r = Ke(), u = c(r, "Promise");
  return wo = u, wo;
}
var No, dy;
function Vb() {
  if (dy) return No;
  dy = 1;
  var c = sl(), r = Ke(), u = c(r, "Set");
  return No = u, No;
}
var Ho, my;
function Xb() {
  if (my) return Ho;
  my = 1;
  var c = sl(), r = Ke(), u = c(r, "WeakMap");
  return Ho = u, Ho;
}
var Uo, vy;
function Tf() {
  if (vy) return Uo;
  vy = 1;
  var c = Yb(), r = mf(), u = Qb(), s = Vb(), o = Xb(), h = Ru(), d = Zy(), y = "[object Map]", v = "[object Object]", g = "[object Promise]", M = "[object Set]", z = "[object WeakMap]", L = "[object DataView]", $ = d(c), U = d(r), Z = d(u), at = d(s), J = d(o), V = h;
  return (c && V(new c(new ArrayBuffer(1))) != L || r && V(new r()) != y || u && V(u.resolve()) != g || s && V(new s()) != M || o && V(new o()) != z) && (V = function(nt) {
    var rt = h(nt), xt = rt == v ? nt.constructor : void 0, Tt = xt ? d(xt) : "";
    if (Tt)
      switch (Tt) {
        case $:
          return L;
        case U:
          return y;
        case Z:
          return g;
        case at:
          return M;
        case J:
          return z;
      }
    return rt;
  }), Uo = V, Uo;
}
var Bo, gy;
function Kb() {
  if (gy) return Bo;
  gy = 1;
  var c = Object.prototype, r = c.hasOwnProperty;
  function u(s) {
    var o = s.length, h = new s.constructor(o);
    return o && typeof s[0] == "string" && r.call(s, "index") && (h.index = s.index, h.input = s.input), h;
  }
  return Bo = u, Bo;
}
var Lo, yy;
function Zb() {
  if (yy) return Lo;
  yy = 1;
  var c = Ke(), r = c.Uint8Array;
  return Lo = r, Lo;
}
var Go, py;
function Cf() {
  if (py) return Go;
  py = 1;
  var c = Zb();
  function r(u) {
    var s = new u.constructor(u.byteLength);
    return new c(s).set(new c(u)), s;
  }
  return Go = r, Go;
}
var ko, by;
function Jb() {
  if (by) return ko;
  by = 1;
  var c = Cf();
  function r(u, s) {
    var o = s ? c(u.buffer) : u.buffer;
    return new u.constructor(o, u.byteOffset, u.byteLength);
  }
  return ko = r, ko;
}
var Yo, Sy;
function Wb() {
  if (Sy) return Yo;
  Sy = 1;
  var c = /\w*$/;
  function r(u) {
    var s = new u.constructor(u.source, c.exec(u));
    return s.lastIndex = u.lastIndex, s;
  }
  return Yo = r, Yo;
}
var Qo, _y;
function $b() {
  if (_y) return Qo;
  _y = 1;
  var c = df(), r = c ? c.prototype : void 0, u = r ? r.valueOf : void 0;
  function s(o) {
    return u ? Object(u.call(o)) : {};
  }
  return Qo = s, Qo;
}
var Vo, Ty;
function Fb() {
  if (Ty) return Vo;
  Ty = 1;
  var c = Cf();
  function r(u, s) {
    var o = s ? c(u.buffer) : u.buffer;
    return new u.constructor(o, u.byteOffset, u.length);
  }
  return Vo = r, Vo;
}
var Xo, Cy;
function Ib() {
  if (Cy) return Xo;
  Cy = 1;
  var c = Cf(), r = Jb(), u = Wb(), s = $b(), o = Fb(), h = "[object Boolean]", d = "[object Date]", y = "[object Map]", v = "[object Number]", g = "[object RegExp]", M = "[object Set]", z = "[object String]", L = "[object Symbol]", $ = "[object ArrayBuffer]", U = "[object DataView]", Z = "[object Float32Array]", at = "[object Float64Array]", J = "[object Int8Array]", V = "[object Int16Array]", nt = "[object Int32Array]", rt = "[object Uint8Array]", xt = "[object Uint8ClampedArray]", Tt = "[object Uint16Array]", lt = "[object Uint32Array]";
  function jt(yt, Zt, j) {
    var Y = yt.constructor;
    switch (Zt) {
      case $:
        return c(yt);
      case h:
      case d:
        return new Y(+yt);
      case U:
        return r(yt, j);
      case Z:
      case at:
      case J:
      case V:
      case nt:
      case rt:
      case xt:
      case Tt:
      case lt:
        return o(yt, j);
      case y:
        return new Y();
      case v:
      case z:
        return new Y(yt);
      case g:
        return u(yt);
      case M:
        return new Y();
      case L:
        return s(yt);
    }
  }
  return Xo = jt, Xo;
}
var Ko, xy;
function Pb() {
  if (xy) return Ko;
  xy = 1;
  var c = ei(), r = Object.create, u = /* @__PURE__ */ (function() {
    function s() {
    }
    return function(o) {
      if (!c(o))
        return {};
      if (r)
        return r(o);
      s.prototype = o;
      var h = new s();
      return s.prototype = void 0, h;
    };
  })();
  return Ko = u, Ko;
}
var Zo, Ey;
function t2() {
  if (Ey) return Zo;
  Ey = 1;
  var c = Pb(), r = lp(), u = pf();
  function s(o) {
    return typeof o.constructor == "function" && !u(o) ? c(r(o)) : {};
  }
  return Zo = s, Zo;
}
var Jo, Ay;
function e2() {
  if (Ay) return Jo;
  Ay = 1;
  var c = Tf(), r = ai(), u = "[object Map]";
  function s(o) {
    return r(o) && c(o) == u;
  }
  return Jo = s, Jo;
}
var Wo, Dy;
function a2() {
  if (Dy) return Wo;
  Dy = 1;
  var c = e2(), r = gf(), u = yf(), s = u && u.isMap, o = s ? r(s) : c;
  return Wo = o, Wo;
}
var $o, My;
function l2() {
  if (My) return $o;
  My = 1;
  var c = Tf(), r = ai(), u = "[object Set]";
  function s(o) {
    return r(o) && c(o) == u;
  }
  return $o = s, $o;
}
var Fo, Oy;
function n2() {
  if (Oy) return Fo;
  Oy = 1;
  var c = l2(), r = gf(), u = yf(), s = u && u.isSet, o = s ? r(s) : c;
  return Fo = o, Fo;
}
var Io, zy;
function i2() {
  if (zy) return Io;
  zy = 1;
  var c = bb(), r = Sb(), u = Wy(), s = jb(), o = wb(), h = Nb(), d = Hb(), y = Bb(), v = Lb(), g = Gb(), M = kb(), z = Tf(), L = Kb(), $ = Ib(), U = t2(), Z = vf(), at = $y(), J = a2(), V = ei(), nt = n2(), rt = bf(), xt = Sf(), Tt = 1, lt = 2, jt = 4, yt = "[object Arguments]", Zt = "[object Array]", j = "[object Boolean]", Y = "[object Date]", F = "[object Error]", I = "[object Function]", Ht = "[object GeneratorFunction]", T = "[object Map]", R = "[object Number]", B = "[object Object]", G = "[object RegExp]", K = "[object Set]", p = "[object String]", O = "[object Symbol]", H = "[object WeakMap]", k = "[object ArrayBuffer]", et = "[object DataView]", ut = "[object Float32Array]", ft = "[object Float64Array]", Ut = "[object Int8Array]", Et = "[object Int16Array]", Be = "[object Int32Array]", Ya = "[object Uint8Array]", Wl = "[object Uint8ClampedArray]", ni = "[object Uint16Array]", Ze = "[object Uint32Array]", Ct = {};
  Ct[yt] = Ct[Zt] = Ct[k] = Ct[et] = Ct[j] = Ct[Y] = Ct[ut] = Ct[ft] = Ct[Ut] = Ct[Et] = Ct[Be] = Ct[T] = Ct[R] = Ct[B] = Ct[G] = Ct[K] = Ct[p] = Ct[O] = Ct[Ya] = Ct[Wl] = Ct[ni] = Ct[Ze] = !0, Ct[F] = Ct[I] = Ct[H] = !1;
  function ma(St, Je, Le, $l, va, Ge) {
    var ne, Wt = Je & Tt, rl = Je & lt, ii = Je & jt;
    if (Le && (ne = va ? Le(St, $l, va, Ge) : Le(St)), ne !== void 0)
      return ne;
    if (!V(St))
      return St;
    var Fl = Z(St);
    if (Fl) {
      if (ne = L(St), !Wt)
        return d(St, ne);
    } else {
      var we = z(St), ui = we == I || we == Ht;
      if (at(St))
        return h(St, Wt);
      if (we == B || we == yt || ui && !va) {
        if (ne = rl || ui ? {} : U(St), !Wt)
          return rl ? v(St, o(ne, St)) : y(St, s(ne, St));
      } else {
        if (!Ct[we])
          return va ? St : {};
        ne = $(St, we, Wt);
      }
    }
    Ge || (Ge = new c());
    var Il = Ge.get(St);
    if (Il)
      return Il;
    Ge.set(St, ne), nt(St) ? St.forEach(function(se) {
      ne.add(ma(se, Je, Le, se, St, Ge));
    }) : J(St) && St.forEach(function(se, Gt) {
      ne.set(Gt, ma(se, Je, Le, Gt, St, Ge));
    });
    var Uu = ii ? rl ? M : g : rl ? xt : rt, si = Fl ? void 0 : Uu(St);
    return r(si || St, function(se, Gt) {
      si && (Gt = se, se = St[Gt]), u(ne, Gt, ma(se, Je, Le, Gt, St, Ge));
    }), ne;
  }
  return Io = ma, Io;
}
var Po, jy;
function u2() {
  if (jy) return Po;
  jy = 1;
  var c = i2(), r = 1, u = 4;
  function s(o) {
    return c(o, r | u);
  }
  return Po = s, Po;
}
var s2 = u2();
const r2 = /* @__PURE__ */ Qy(s2);
function Du(c) {
  ka.instance?.showDialog(c);
}
function c2(c) {
  ka.instance?.closeDialog(c);
}
function Ce() {
  return ka.instance;
}
async function $n(c, r = {}) {
  const u = await fetch(`${ka.apiUrl}${c}`, {
    ...r,
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      ...r.headers || {}
    }
  });
  if (!u.ok) throw new Error("Request failed");
  return u.json();
}
function In() {
  return "uid_" + (crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).substring(2, 15)).split("-").join("");
}
function o2(c) {
  if (!c) throw new Error("cloneForm: q2form is undefined");
  const r = r2(c);
  Object.setPrototypeOf(r, Object.getPrototypeOf(c));
  const u = [
    "hookShow",
    "hookSubmit",
    "hookCancel",
    "hookInputChanged",
    "hookFocusChanged",
    "hookClosed"
  ];
  for (const s of u)
    typeof c[s] == "function" && (r[s] = c[s]);
  return r;
}
function f2(c, r) {
  const u = document.getElementById(c);
  if (!u) return;
  let s = u.firstElementChild;
  (!s || s.tagName.toLowerCase() !== "style") && (s = document.createElement("style"), u.prepend(s));
  const o = [], h = /([^{}]+)\{([^}]*)\}/g;
  let d;
  for (; d = h.exec(r); ) {
    let [y, v, g] = d;
    if (v = v.trim(), v.startsWith("@")) {
      o.push(`${v} {${g}}`);
      continue;
    }
    const M = v.split(",").map((z) => `[id="${c}"] ${z.trim()}`).join(", ");
    o.push(`${M} {${g}}`);
  }
  s.textContent = o.join(`
`);
}
function h2(c) {
  return new Promise((r) => {
    if (!document.getElementById(c)) {
      r();
      return;
    }
    const s = new MutationObserver(() => {
      document.getElementById(c) || (s.disconnect(), r());
    });
    s.observe(document.body, { childList: !0, subtree: !0 });
  });
}
const d2 = (c) => c.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), m2 = (c) => c.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (r, u, s) => s ? s.toUpperCase() : u.toLowerCase()
), Ry = (c) => {
  const r = m2(c);
  return r.charAt(0).toUpperCase() + r.slice(1);
}, up = (...c) => c.filter((r, u, s) => !!r && r.trim() !== "" && s.indexOf(r) === u).join(" ").trim(), v2 = (c) => {
  for (const r in c)
    if (r.startsWith("aria-") || r === "role" || r === "title")
      return !0;
};
var g2 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
const y2 = it.forwardRef(
  ({
    color: c = "currentColor",
    size: r = 24,
    strokeWidth: u = 2,
    absoluteStrokeWidth: s,
    className: o = "",
    children: h,
    iconNode: d,
    ...y
  }, v) => it.createElement(
    "svg",
    {
      ref: v,
      ...g2,
      width: r,
      height: r,
      stroke: c,
      strokeWidth: s ? Number(u) * 24 / Number(r) : u,
      className: up("lucide", o),
      ...!h && !v2(y) && { "aria-hidden": "true" },
      ...y
    },
    [
      ...d.map(([g, M]) => it.createElement(g, M)),
      ...Array.isArray(h) ? h : [h]
    ]
  )
);
const Jl = (c, r) => {
  const u = it.forwardRef(
    ({ className: s, ...o }, h) => it.createElement(y2, {
      ref: h,
      iconNode: r,
      className: up(
        `lucide-${d2(Ry(c))}`,
        `lucide-${c}`,
        s
      ),
      ...o
    })
  );
  return u.displayName = Ry(c), u;
};
const p2 = [
  [
    "path",
    {
      d: "M13 9a1 1 0 0 1-1-1V5.061a1 1 0 0 0-1.811-.75l-6.835 6.836a1.207 1.207 0 0 0 0 1.707l6.835 6.835a1 1 0 0 0 1.811-.75V16a1 1 0 0 1 1-1h6a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1z",
      key: "aztept"
    }
  ]
], b2 = Jl("arrow-big-left", p2);
const S2 = [
  ["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" }],
  [
    "path",
    {
      d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
      key: "r6nss1"
    }
  ]
], _2 = Jl("house", S2);
const T2 = [
  ["path", { d: "m10 17 5-5-5-5", key: "1bsop3" }],
  ["path", { d: "M15 12H3", key: "6jk70r" }],
  ["path", { d: "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4", key: "u53s6r" }]
], C2 = Jl("log-in", T2);
const x2 = [
  ["path", { d: "m16 17 5-5-5-5", key: "1bji2h" }],
  ["path", { d: "M21 12H9", key: "dn1m92" }],
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }]
], E2 = Jl("log-out", x2);
const A2 = [
  [
    "path",
    {
      d: "M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",
      key: "kfwtm"
    }
  ]
], D2 = Jl("moon", A2);
const M2 = [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
  ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
  ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }]
], O2 = Jl("sun", M2);
class z2 extends tt.Component {
  constructor(r) {
    super(r), this.handleClickOutside = (u) => {
      this.menuRef.current && !this.menuRef.current.contains(u.target) && this.setState({ visibleDropdown: null, activated: !1 });
    }, this.renderMenu = (u) => Object.entries(u).filter(([o]) => o !== "__meta__").map(([o, h]) => ({ key: o, ...h.__meta__, children: h })).sort((o, h) => (o.seq ?? 0) - (h.seq ?? 0)).map((o) => o.key && o.label === "-" ? /* @__PURE__ */ S.jsx("hr", {}, o.key) : o.label !== "" && o.key && o.key !== null ? /* @__PURE__ */ S.jsx("button", { onClick: (h) => {
      h.stopPropagation();
      const d = this.props.q2forms.find((y) => y.key === o.key);
      d && Du(d), this.hideDropdown();
    }, children: o.label }, o.key) : /* @__PURE__ */ S.jsxs("div", { className: "submenu", children: [
      /* @__PURE__ */ S.jsx("button", { className: "submenubtn", children: o.label }),
      /* @__PURE__ */ S.jsx("div", { className: "submenu-content", children: this.renderMenu(o.children) })
    ] }, o.label)), this.renderToolButtons = () => this.props.q2forms.map((u) => {
      const s = u.menutoolbar;
      if (s === 1 || s === !0) {
        const o = u.menubarpath.split("|"), h = o[o.length - 1];
        return /* @__PURE__ */ S.jsx("button", { onClick: () => {
          Du(u), this.hideDropdown();
        }, className: "toolButton", children: h }, u.key);
      }
      return null;
    }).filter(Boolean), this.openNewTab = () => {
      window.open("/", "_blank");
    }, this.hideDropdown = () => {
      this.setState({ visibleDropdown: null, activated: !1 });
    }, this.state = {
      visibleDropdown: null,
      activated: !1
    }, this.menuRef = tt.createRef();
  }
  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }
  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }
  buildMenuStructure(r) {
    const u = {};
    let s = 0;
    return r.forEach((o) => {
      if (!o.menubarpath) return;
      const h = o.menubarpath.split("|");
      let d = u;
      h.forEach((y, v) => {
        d[y] || (s++, d[y] = {
          __meta__: {
            label: y,
            seq: s,
            key: v === h.length - 1 ? o.key : null,
            menutoolbar: v === h.length - 1 ? o.menutoolbar : null
          }
        }), d = d[y];
      });
    }), u;
  }
  render() {
    const { visibleDropdown: r, activated: u } = this.state, s = this.buildMenuStructure(this.props.q2forms), {
      // userName,
      // guestName,
      // guestLogo,
      isLoggedIn: o
      // navigate,
    } = this.props, h = document.documentElement.classList.contains("dark"), d = Ce()?.hookMainMenuWidget(), y = Object.entries(s).map(([v, g]) => ({ key: v, ...g.__meta__, children: g })).sort((v, g) => (v.seq ?? 0) - (g.seq ?? 0));
    return /* @__PURE__ */ S.jsxs("nav", { className: "MainMenuBar", children: [
      /* @__PURE__ */ S.jsx(
        _2,
        {
          className: "MainMenuIcon HomeButton",
          onClick: () => Ce()?.closeAllDialogs()
        }
      ),
      /* @__PURE__ */ S.jsx(
        b2,
        {
          className: "MainMenuIcon StepBackButton",
          onClick: () => Ce()?.closeTopDialog()
        }
      ),
      /* @__PURE__ */ S.jsx("div", { className: "menuItems MainMenuItems", ref: this.menuRef, children: y.map((v) => /* @__PURE__ */ S.jsxs(
        "div",
        {
          className: "dropdown",
          onMouseEnter: () => {
            u && this.setState({ visibleDropdown: v.label });
          },
          onClick: () => {
            u || this.setState({ activated: !0 }), this.setState({ visibleDropdown: v.label });
          },
          children: [
            /* @__PURE__ */ S.jsx("button", { className: "dropbtn", children: v.label }),
            /* @__PURE__ */ S.jsx(
              "div",
              {
                className: "dropdown-content",
                style: { display: r === v.label ? "block" : "none" },
                children: this.renderMenu(v.children)
              }
            )
          ]
        },
        v.seq
      )) }),
      /* @__PURE__ */ S.jsx("div", { className: "spacer1" }),
      /* @__PURE__ */ S.jsx("div", { className: "toolButtons", children: this.renderToolButtons() }),
      /* @__PURE__ */ S.jsx("div", { className: "spacer9" }),
      d || null,
      Ce()?.state.userName && /* @__PURE__ */ S.jsx(
        "span",
        {
          className: "MainMenuIcon MainMenuUserName",
          title: "Edit User Propfile",
          onClick: Ce()?.editUserProfile,
          children: Ce()?.state.userName
        }
      ),
      /* @__PURE__ */ S.jsx("span", { title: o ? "Logout" : "Login", className: "MainMenuLoginButton ", children: o ? /* @__PURE__ */ S.jsx(
        E2,
        {
          className: "MainMenuIcon ",
          onClick: Ce()?.login_logout
        }
      ) : /* @__PURE__ */ S.jsx(
        C2,
        {
          className: "MainMenuIcon",
          onClick: Ce()?.login_logout
        }
      ) }),
      /* @__PURE__ */ S.jsx("span", { title: h ? "Light theme" : "Dark theme", className: "MainMenuThemeButton", children: h ? /* @__PURE__ */ S.jsx(
        O2,
        {
          className: "MainMenuIcon",
          onClick: Ce()?.toggleTheme
        }
      ) : /* @__PURE__ */ S.jsx(
        D2,
        {
          className: "MainMenuIcon",
          onClick: Ce()?.toggleTheme
        }
      ) })
    ] });
  }
}
function Eu(c) {
  for (var r = 1; r < arguments.length; r++) {
    var u = arguments[r];
    for (var s in u)
      c[s] = u[s];
  }
  return c;
}
var j2 = {
  read: function(c) {
    return c[0] === '"' && (c = c.slice(1, -1)), c.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
  },
  write: function(c) {
    return encodeURIComponent(c).replace(
      /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
      decodeURIComponent
    );
  }
};
function uf(c, r) {
  function u(o, h, d) {
    if (!(typeof document > "u")) {
      d = Eu({}, r, d), typeof d.expires == "number" && (d.expires = new Date(Date.now() + d.expires * 864e5)), d.expires && (d.expires = d.expires.toUTCString()), o = encodeURIComponent(o).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
      var y = "";
      for (var v in d)
        d[v] && (y += "; " + v, d[v] !== !0 && (y += "=" + d[v].split(";")[0]));
      return document.cookie = o + "=" + c.write(h, o) + y;
    }
  }
  function s(o) {
    if (!(typeof document > "u" || arguments.length && !o)) {
      for (var h = document.cookie ? document.cookie.split("; ") : [], d = {}, y = 0; y < h.length; y++) {
        var v = h[y].split("="), g = v.slice(1).join("=");
        try {
          var M = decodeURIComponent(v[0]);
          if (d[M] = c.read(g, M), o === M)
            break;
        } catch {
        }
      }
      return o ? d[o] : d;
    }
  }
  return Object.create(
    {
      set: u,
      get: s,
      remove: function(o, h) {
        u(
          o,
          "",
          Eu({}, h, {
            expires: -1
          })
        );
      },
      withAttributes: function(o) {
        return uf(this.converter, Eu({}, this.attributes, o));
      },
      withConverter: function(o) {
        return uf(Eu({}, this.converter, o), this.attributes);
      }
    },
    {
      attributes: { value: Object.freeze(r) },
      converter: { value: Object.freeze(c) }
    }
  );
}
var sf = uf(j2, { path: "/" }), sp = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, qy = tt.createContext && /* @__PURE__ */ tt.createContext(sp), R2 = ["attr", "size", "title"];
function q2(c, r) {
  if (c == null) return {};
  var u = w2(c, r), s, o;
  if (Object.getOwnPropertySymbols) {
    var h = Object.getOwnPropertySymbols(c);
    for (o = 0; o < h.length; o++)
      s = h[o], !(r.indexOf(s) >= 0) && Object.prototype.propertyIsEnumerable.call(c, s) && (u[s] = c[s]);
  }
  return u;
}
function w2(c, r) {
  if (c == null) return {};
  var u = {};
  for (var s in c)
    if (Object.prototype.hasOwnProperty.call(c, s)) {
      if (r.indexOf(s) >= 0) continue;
      u[s] = c[s];
    }
  return u;
}
function Mu() {
  return Mu = Object.assign ? Object.assign.bind() : function(c) {
    for (var r = 1; r < arguments.length; r++) {
      var u = arguments[r];
      for (var s in u)
        Object.prototype.hasOwnProperty.call(u, s) && (c[s] = u[s]);
    }
    return c;
  }, Mu.apply(this, arguments);
}
function wy(c, r) {
  var u = Object.keys(c);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(c);
    r && (s = s.filter(function(o) {
      return Object.getOwnPropertyDescriptor(c, o).enumerable;
    })), u.push.apply(u, s);
  }
  return u;
}
function Ou(c) {
  for (var r = 1; r < arguments.length; r++) {
    var u = arguments[r] != null ? arguments[r] : {};
    r % 2 ? wy(Object(u), !0).forEach(function(s) {
      N2(c, s, u[s]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(c, Object.getOwnPropertyDescriptors(u)) : wy(Object(u)).forEach(function(s) {
      Object.defineProperty(c, s, Object.getOwnPropertyDescriptor(u, s));
    });
  }
  return c;
}
function N2(c, r, u) {
  return r = H2(r), r in c ? Object.defineProperty(c, r, { value: u, enumerable: !0, configurable: !0, writable: !0 }) : c[r] = u, c;
}
function H2(c) {
  var r = U2(c, "string");
  return typeof r == "symbol" ? r : r + "";
}
function U2(c, r) {
  if (typeof c != "object" || !c) return c;
  var u = c[Symbol.toPrimitive];
  if (u !== void 0) {
    var s = u.call(c, r);
    if (typeof s != "object") return s;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(c);
}
function rp(c) {
  return c && c.map((r, u) => /* @__PURE__ */ tt.createElement(r.tag, Ou({
    key: u
  }, r.attr), rp(r.child)));
}
function li(c) {
  return (r) => /* @__PURE__ */ tt.createElement(B2, Mu({
    attr: Ou({}, c.attr)
  }, r), rp(c.child));
}
function B2(c) {
  var r = (u) => {
    var {
      attr: s,
      size: o,
      title: h
    } = c, d = q2(c, R2), y = o || u.size || "1em", v;
    return u.className && (v = u.className), c.className && (v = (v ? v + " " : "") + c.className), /* @__PURE__ */ tt.createElement("svg", Mu({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, u.attr, s, d, {
      className: v,
      style: Ou(Ou({
        color: c.color || u.color
      }, u.style), c.style),
      height: y,
      width: y,
      xmlns: "http://www.w3.org/2000/svg"
    }), h && /* @__PURE__ */ tt.createElement("title", null, h), c.children);
  };
  return qy !== void 0 ? /* @__PURE__ */ tt.createElement(qy.Consumer, null, (u) => r(u)) : r(sp);
}
function L2(c) {
  return li({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { d: "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" }, child: [] }] })(c);
}
function G2(c) {
  return li({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" }, child: [] }] })(c);
}
function k2(c) {
  return li({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0V0z" }, child: [] }, { tag: "path", attr: { d: "M10.09 15.59 11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5a2 2 0 0 0-2 2v4h2V5h14v14H5v-4H3v4a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" }, child: [] }] })(c);
}
function Y2(c) {
  return li({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0V0z" }, child: [] }, { tag: "path", attr: { d: "M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" }, child: [] }] })(c);
}
function Q2(c) {
  return li({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0V0z" }, child: [] }, { tag: "path", attr: { d: "M17 3H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7V5h10v14z" }, child: [] }] })(c);
}
class Zl {
  constructor(r, u, s = {}, o = "0") {
    this.column = r, this.label = u, this.datalen = s.datalen, this.datadec = s.datadec !== void 0 ? s.datadec : 0, this.datatype = s.datatype !== void 0 ? s.datatype : "", this.stretch = s.stretch !== void 0 ? s.stretch : 1, this.size = s.size !== void 0 ? s.size : "", this.alignment = s.alignment, this.control = s.control ?? "line", this.readonly = s.readonly ?? !1, this.disabled = s.disabled ?? !1, this.key = o, this.valid = s.valid ?? (() => !0), this.data = s.data, this.pic = s?.pic || "", this.check = s.check, this.checkChecked = s.checkChecked, this.checkDisabled = s.checkDisabled, this.tag = s.tag, this.range = s.range, this.style = s?.style || {}, this.class = s?.class || "", this.control === "check" && (this.stretch = 0, this.size = "max");
  }
  getStyle() {
    return this.datalen ? { flex: "0 1 auto", maxWidth: `${this.datalen}rem` } : { flex: `${this.stretch} ${this.stretch}`, width: "100%" };
  }
}
const V2 = {
  showHeaders: !0,
  showCurrentRow: !0,
  resizeColumns: !0,
  reorderColumns: !0
};
class Pn {
  constructor(r = "", u = "", s = "", o = {}) {
    this.s = {}, this.w = {}, this.c = {}, this.key = s, this.columns = [], this.hasCancelButton = !1, this.hasOkButton = !1, this.hasMaxButton = !0, this.description = "", this.menubarpath = r, this.menutoolbar = o.menutoolbar ?? !1, this.subForm = !1, o.data ? this.data = o.data : this.data = [], this.actions = [], this.title = u, this.icon = "form", this.width = "", this.height = "", this.left = "", this.top = "", this.resizeable = !0, this.moveable = !0, this.frameless = !1, this.x = 0, this.y = 0, this.dialogIndex = "", this.formKey = "", this.frontForm = void 0, this.class = o.class || "", this.dataGridParams = { ...o.dataGridParams, ...V2 }, this.cssText = o.cssText ? o.cssText : "", this.restoreGeometry = o.restoreGeometry ? o.restoreGeometry : !0, this.payload = {}, s === "" ? this.key = In() : this.key = `${this.key}_${In()}`, Object.assign(this, o), this.columns && Array.isArray(this.columns) && (this.columns = this.columns.map(
      (h, d) => h instanceof Zl ? h : new Zl(
        h.column,
        h.label,
        h,
        h.key ?? d.toString()
      )
    ));
  }
  check_frameless() {
    this.frameless && this.width === "" && (this.width = "100%"), this.frameless && this.height === "" && (this.height = "100%"), this.frameless && this.top === "" && (this.top = "0"), this.frameless && this.left === "" && (this.left = "0"), this.height === "" && (this.height = "auto"), this.width === "" && (this.width = "auto");
  }
  add_control(r, u, s = {}) {
    const o = new Zl(r, u, s);
    for (const h in s)
      s.hasOwnProperty(h) && (o[h] = s[h]);
    return this.columns.push(o), o;
  }
  showDialog() {
    Du(this);
  }
  closeDialog() {
    c2(this.dialogIndex);
  }
  setCssText(r) {
    this.cssText = r, this.frontForm && this.frontForm.setCssText(r), this.updateForm();
  }
  async updateForm() {
    await Ce()?.updateForm(this);
  }
  async getFormInstance() {
    const r = Ce();
    if (!r) return null;
    const u = Object.values(r.state.dialogs).find(
      (s) => s.dialogIndex === this.dialogIndex
    );
    return u && u.frontForm && typeof u.frontForm.waitForClose == "function" ? u.frontForm : null;
  }
  async waitForClose() {
    const r = await this.getFormInstance();
    r && await r.waitForClose();
  }
}
const tf = "EDIT", Ny = "NEW", ef = "COPY";
class X2 extends it.Component {
  constructor(r) {
    super(r), this.tableBodyRef = tt.createRef(), this.dataGridRef = tt.createRef(), this.checkTableHeight = () => {
      const u = this.tableBodyRef.current.querySelector("tbody tr");
      if (u) {
        const s = u.offsetHeight, o = this.dataGridRef.current.clientHeight, h = this.dataGridRef.current.querySelector(".DialogToolBar"), d = h ? h.offsetHeight : 0, y = Math.floor((o - d) / s);
        y > this.state.visibleRows && this.setState({ visibleRows: y }), this.tableBodyRef.current.style.height = `${o - d}px`;
      }
    }, this.handleScroll = () => {
      const { scrollTop: u, scrollHeight: s, clientHeight: o } = this.tableBodyRef.current;
      u + o >= s - 10 && this.setState((h) => ({ visibleRows: h.visibleRows + 10 }));
    }, this.handleRowClick = (u) => {
      this.setState({ selectedRow: u }, this.scrollToRow);
    }, this.handleKeyDown = (u) => {
      if (!this.props.isTopDialog) return;
      const { selectedRow: s, visibleRows: o } = this.state, h = this.props.q2form.data.length, d = this.tableBodyRef.current.querySelector("tbody tr"), y = d ? Math.floor(this.tableBodyRef.current.clientHeight / d.offsetHeight) : 0;
      if (u.key === "ArrowUp" && s > 0)
        this.setState({ selectedRow: s - 1 }, this.scrollToRow), u.preventDefault();
      else if (u.key === "ArrowDown" && s < h - 1)
        this.setState({ selectedRow: s + 1 }, this.scrollToRow), u.preventDefault();
      else if (u.key === "PageUp" && s > 0)
        this.setState({ selectedRow: Math.max(s - y, 0) }, this.scrollToRow), u.preventDefault();
      else if (u.key === "PageDown" && s < h - 1) {
        const v = Math.min(o + y, h);
        this.setState({ visibleRows: v, selectedRow: Math.min(s + y, h - 1) }, () => {
          this.scrollToRow(), this.handleScroll();
        }), u.preventDefault();
      } else if (u.key === "Home")
        this.setState({ selectedRow: 0 }, this.scrollToRow), u.preventDefault();
      else if (u.key === "End") {
        const v = h;
        this.setState({ visibleRows: v, selectedRow: h - 1 }, () => {
          this.scrollToRow(), this.handleScroll();
        }), u.preventDefault();
      } else u.key === " " && s >= 0 && s < h ? (this.showCrud(this.props.q2form, tf), u.preventDefault()) : u.key === "Insert" && !u.ctrlKey ? (this.showCrud(this.props.q2form, Ny), u.preventDefault()) : u.key === "Insert" && u.ctrlKey ? (this.showCrud(this.props.q2form, ef), u.preventDefault()) : u.key === "Escape" && this.props.onClose && (this.props.onClose(), u.preventDefault());
    }, this.scrollToRow = () => {
      const u = this.tableBodyRef.current.querySelector(`tbody tr:nth-child(${this.state.selectedRow + 1})`);
      if (u && this.tableBodyRef.current) {
        const { offsetTop: s, offsetHeight: o } = u, { scrollTop: h, clientHeight: d } = this.tableBodyRef.current, y = this.tableBodyRef.current.querySelector("thead").offsetHeight, v = s + o, g = h + d;
        (s < h + y || v > g) && (s < h + y ? this.tableBodyRef.current.scrollTop = s - y : v > g && (this.tableBodyRef.current.scrollTop = v - d));
      }
      this.props.q2form?.hookDataGridRowClicked;
    }, this.showCrud = (u, s) => {
      const o = new Pn();
      if (Object.assign(o, u), o.data = [], o.key += s, o.title += ".[" + s + "]", o.hasOkButton = !0, o.hasCancelButton = !0, s === tf || s === ef) {
        const { selectedRow: h } = this.state, d = this.state.data[h];
        o.columns.map((y) => y.data = d[y.column] || y.data || "");
      } else
        o.columns.map((h) => h.data = "");
      Du(o);
    }, this.handleAction = (u) => {
      switch (u.label) {
        case "Exit":
          this.props.onClose && this.props.onClose();
          break;
        case "New":
          this.showCrud(this.props.q2form, Ny);
          break;
        case "Copy":
          this.showCrud(this.props.q2form, ef);
          break;
        case "Edit":
          this.showCrud(this.props.q2form, tf);
          break;
        case "Delete":
          console.log("Delete action");
          break;
        default:
          console.log(u.label);
      }
    }, this.state = {
      visibleRows: 20,
      // Начальное количество отображаемых строк
      selectedRow: 0,
      // Initially row 0 is selected
      data: typeof this.props.q2form.data == "object" ? this.props.q2form.data : [],
      loading: !1,
      error: null
    }, this.tableBodyRef = tt.createRef(), this.dataGridRef = tt.createRef();
  }
  async fetchData() {
    if (this.props.q2form.dataGridParams.loader)
      try {
        const r = await this.props.q2form.dataGridParams.loader();
        return this.setState({ data: r, loading: !1 }), r;
      } catch (r) {
        return this.setState({ error: r.message, loading: !1 }), r;
      }
  }
  componentDidMount() {
    this.tableBodyRef.current.addEventListener("scroll", this.handleScroll), window.addEventListener("resize", this.checkTableHeight), document.addEventListener("keydown", this.handleKeyDown), this.checkTableHeight(), this.resizeObserver = new ResizeObserver(this.checkTableHeight), this.resizeObserver.observe(this.dataGridRef.current), this.props.q2form.dataGridParams.loader && this.fetchData();
  }
  componentWillUnmount() {
    this.tableBodyRef.current.removeEventListener("scroll", this.handleScroll), window.removeEventListener("resize", this.checkTableHeight), document.removeEventListener("keydown", this.handleKeyDown), this.resizeObserver.disconnect();
  }
  render() {
    const { columns: r, actions: u } = this.props.q2form, { visibleRows: s, data: o, loading: h, error: d } = this.state, y = [
      { key: "new", label: "New", icon: /* @__PURE__ */ S.jsx(Q2, {}) },
      { key: "copy", label: "Copy", icon: /* @__PURE__ */ S.jsx(Y2, {}) },
      { key: "edit", label: "Edit", icon: /* @__PURE__ */ S.jsx(L2, {}) },
      { key: "delete", label: "Delete", icon: /* @__PURE__ */ S.jsx(G2, {}) },
      ...u,
      { key: "separator", label: "-", icon: "" },
      { key: "exit", label: "Exit", icon: /* @__PURE__ */ S.jsx(k2, {}) }
    ];
    return /* @__PURE__ */ S.jsxs("div", { ref: this.dataGridRef, className: "DataGridRoot", children: [
      u.length > 0 && /* @__PURE__ */ S.jsx(K2, { actions: y, onAction: this.handleAction }),
      /* @__PURE__ */ S.jsx("div", { className: `DataGrid ${this.props.q2form.class}`, children: /* @__PURE__ */ S.jsx("div", { className: "DataGridBody", ref: this.tableBodyRef, onScroll: this.handleScroll, children: /* @__PURE__ */ S.jsxs("table", { children: [
        h && /* @__PURE__ */ S.jsx("div", { children: "Loading..." }),
        d && /* @__PURE__ */ S.jsx("div", { children: d }),
        /* @__PURE__ */ S.jsx("thead", { className: "DataGrigHeader", children: /* @__PURE__ */ S.jsx("tr", { children: r.map((v, g) => /* @__PURE__ */ S.jsx("th", { children: v.label }, `header-${v.key}-${g}`)) }) }),
        /* @__PURE__ */ S.jsx("tbody", { children: o.slice(0, s).map((v, g) => /* @__PURE__ */ S.jsx(
          "tr",
          {
            onClick: () => this.handleRowClick(g),
            children: r.map((M, z) => /* @__PURE__ */ S.jsx("td", { children: v[M.column] }, `cell-${M.key}-${z}`))
          },
          `row-${g}`
        )) })
      ] }) }) })
    ] });
  }
}
const K2 = ({ actions: c, onAction: r }) => /* @__PURE__ */ S.jsxs("div", { className: "DialogToolBar", children: [
  /* @__PURE__ */ S.jsxs("div", { className: "dropdown", children: [
    /* @__PURE__ */ S.jsx("button", { className: "gridBurgerButton", children: "☰" }),
    /* @__PURE__ */ S.jsx("div", { className: "dropdown-content", children: c.map((u, s) => u.label !== "-" ? /* @__PURE__ */ S.jsxs("button", { onClick: () => r(u), children: [
      u.icon,
      " ",
      u.label
    ] }, s) : /* @__PURE__ */ S.jsx("hr", {}, s)) })
  ] }),
  c.map((u, s) => u.icon && u.label !== "-" && /* @__PURE__ */ S.jsx("button", { className: "gridToolButton", onClick: () => r(u), children: u.icon }, s))
] });
class Z2 extends it.Component {
  constructor(r) {
    super(r), this.handleRowClick = (s) => {
      this.setState({ selectedRow: s }, () => {
        typeof this.props.q2form?.hookDataGridRowClicked == "function" && this.props.q2form.hookDataGridRowClicked(this);
      });
    }, this.startResize = (s, o) => {
      o.preventDefault(), o.stopPropagation();
      const h = o.clientX, d = this.state.colWidths[s], y = (g) => {
        const M = g.clientX - h;
        this.setState((z) => {
          const L = [...z.colWidths];
          return L[s] = Math.max(50, d + M), { colWidths: L };
        });
      }, v = () => {
        document.removeEventListener("mousemove", y), document.removeEventListener("mouseup", v);
      };
      document.addEventListener("mousemove", y), document.addEventListener("mouseup", v);
    }, this.onDragStart = (s, o) => {
      this.reorderColumns && (o.dataTransfer.effectAllowed = "move", o.dataTransfer.setData("text/plain", s), this.setState({ dragIndex: s }));
    }, this.onDragOver = (s, o) => {
      o.preventDefault();
      const { dragIndex: h, columnOrder: d } = this.state;
      if (h === s || h === null) return;
      const y = [...d];
      y.splice(
        s,
        0,
        y.splice(h, 1)[0]
      ), this.setState({ columnOrder: y, dragIndex: s });
    }, this.onDrop = () => {
      this.setState({ dragIndex: null });
    };
    const { columns: u } = r.q2form;
    this.state = {
      visibleRows: 0,
      selectedRow: 0,
      loading: !1,
      error: null,
      colWidths: u.map(() => 150),
      columnOrder: u.map((s, o) => o),
      dragIndex: null,
      // data: props.q2form.data,
      data: Array.isArray(r.q2form.data) ? r.q2form.data : []
    }, this.resizeColumns = this.props.q2form.dataGridParams.resizeColumns, this.reorderColumns = this.props.q2form.dataGridParams.reorderColumns;
  }
  componentDidMount() {
    this.props.q2form.dataGridParams.loader && this.fetchData();
  }
  async fetchData() {
    if (this.props.q2form.dataGridParams.loader)
      try {
        const r = await this.props.q2form.dataGridParams.loader();
        return this.setState({ data: r, loading: !1 }), r;
      } catch (r) {
        return this.setState({ error: r.message, loading: !1 }), r;
      }
  }
  // ==========================
  // RENDER
  // ==========================
  renderHeader() {
    const { columns: r } = this.props.q2form, { colWidths: u, columnOrder: s } = this.state;
    return /* @__PURE__ */ S.jsx("div", { className: "Q2DataList-header", children: s.map((o, h) => {
      const d = r[o], y = this.resizeColumns ? `${u[o]}px` : "auto";
      return /* @__PURE__ */ S.jsxs(
        "div",
        {
          className: "Q2DataList-header-cell",
          style: {
            flex: `1 1 ${y}`,
            width: `${y}`,
            boxSizing: "border-box"
          },
          ...this.reorderColumns && {
            draggable: !0,
            onDragStart: (v) => this.onDragStart(h, v),
            onDragOver: (v) => this.onDragOver(h, v),
            onDrop: this.onDrop
          },
          children: [
            /* @__PURE__ */ S.jsx("b", { children: d.label }),
            this.resizeColumns && /* @__PURE__ */ S.jsx(
              "div",
              {
                className: "Q2DataList-resizer",
                onMouseDown: (v) => this.startResize(o, v)
              }
            )
          ]
        },
        o
      );
    }) });
  }
  renderRow(r, u) {
    const { columns: s } = this.props.q2form, { colWidths: o, columnOrder: h } = this.state;
    let d = "Q2DataList-row";
    d += u % 2 === 0 ? " even" : " odd";
    const y = u % 2 === 0 ? { background: "var(--datagrid-bg, #777 )" } : { background: "var(--datagrid-bg-odd)" };
    return /* @__PURE__ */ S.jsx(
      "div",
      {
        className: d,
        style: y,
        onClick: () => this.handleRowClick(u),
        children: h.map((v) => {
          const g = s[v], M = this.resizeColumns ? `${o[v]}px` : "auto";
          return /* @__PURE__ */ S.jsx(
            "div",
            {
              className: `Q2DataList-cell ${u === 0 ? "first-row" : ""}`,
              style: {
                flex: `1 1 ${M}`,
                width: `${M}px`,
                boxSizing: "border-box"
              },
              children: `${r[g.column]}`
            },
            g.column
          );
        })
      },
      u
    );
  }
  render() {
    const { q2form: r } = this.props, { data: u } = this.state;
    return Array.isArray(u) ? /* @__PURE__ */ S.jsxs("div", { className: `Q2DataList ${this.props.q2form.class}`, children: [
      r.dataGridParams.showHeaders && this.renderHeader(),
      /* @__PURE__ */ S.jsx("div", { className: "Q2DataList-scrollarea", style: { overflow: "auto" }, children: /* @__PURE__ */ S.jsx("div", { children: u.map((s, o) => this.renderRow(s, o)) }) })
    ] }) : /* @__PURE__ */ S.jsx("div", { children: "No data provided" });
  }
}
class da extends it.Component {
  constructor(r) {
    super(r), this.state = {
      value: ""
    }, this.focusIn = () => {
      this.props.form && (this.props.form.focus = this.props.column.column, this.props.form?.handleFocus());
    }, this.focusOut = () => {
      this.props.form && (this.props.form.prevFocus = this.props.column.column);
    }, r.id ? this.id = `${r.form?.key}-${r.id}` : this.id = `${r.form?.formKey}-${r.column.column}-${r.column.key}`;
  }
  getData() {
    return this.props.column.data;
  }
  // setData = (value: String | Number | boolean) => {
  setData(r) {
    const u = r == null ? "" : typeof r == "string" ? r : String(r);
    this.props.column.data = u, this.state && Object.prototype.hasOwnProperty.call(this.state, "value") && typeof this.setState == "function" && this.setState({ value: u });
  }
  focus() {
    const { id: r } = this.props;
    r && document.getElementById(r)?.focus();
  }
  changed(r) {
    const { column: u, form: s } = this.props;
    u.data = r, s?.handleChange && s.handleChange({
      target: {
        value: r,
        name: u.column
      }
    });
  }
  // setValue(value: any) {
  //     // this.props.onChange({ target: { name: this.props.name, value } });
  // }
  render() {
    return /* @__PURE__ */ S.jsx(S.Fragment, {});
  }
}
class Hy extends da {
  constructor(r) {
    super(r), this.inputRef = tt.createRef(), this.state = {
      value: ""
    }, this.handleChange = (s) => {
      const { column: o } = this.props;
      let h = s.target.value;
      if (o?.datatype === "dec" || o?.datatype === "num") {
        h = h.replace(/[^0-9.-]/g, ""), h = h.replace(",", ".");
        const d = h.split(".");
        if (d.length > 2 && (h = d[0] + "." + d.slice(1).join("")), o.datadec !== void 0 && o.datadec >= 0 && h.includes(".")) {
          const [y, v] = h.split(".");
          h = y + "." + v.slice(0, o.datadec);
        }
      } else o?.datatype === "int" && (h = h.replace(/[^0-9-]/g, ""), h === "" && (h = "0"));
      if (["int", "num", "dec"].includes(o?.datatype) && typeof o.range == "string" && h !== "") {
        let d = Number(h);
        if (!isNaN(d)) {
          const y = o.range.trim().split(/\s+/);
          if (y.length === 1)
            if (o.range.trim() === "0")
              d < 0 && (d = Math.abs(d));
            else {
              const v = Number(y[0]);
              !isNaN(v) && d > v && (d = v);
            }
          else if (y.length === 2) {
            const v = y[0] === "" ? void 0 : Number(y[0]), g = y[1] === "" ? void 0 : Number(y[1]);
            v !== void 0 && !isNaN(v) && d < v && (d = v), g !== void 0 && !isNaN(g) && d > g && (d = g);
          }
          h = (o.datatype === "dec" || o.datatype === "num") && o.datadec !== void 0 ? d.toFixed(o.datadec) : d.toString();
        }
      }
      o.data = h, this.setState({ value: h }, () => {
        this.changed(h);
      });
    }, this.handleSpin = (s) => {
      const { column: o } = this.props, h = this.inputRef.current?.value;
      if (h === void 0) return;
      let d = this.inputRef.current?.selectionStart ?? h.length;
      const y = h.length;
      let v = Number(h);
      isNaN(v) && (v = 0);
      let g;
      if (o?.datatype === "dec" || o?.datatype === "num") {
        const M = h.indexOf(".");
        let z = 1;
        if (M !== -1)
          if ((d === 0 || d === h.length) && (d = M), d <= M) {
            const L = M - d - 1;
            z = Math.pow(10, L + 1);
          } else {
            let L = d - M - 1;
            L >= o.datadec && (L = o.datadec - 1), z = Math.pow(10, -(L + 1));
          }
        g = (v + s * z).toFixed(o.datadec ?? 0);
      } else if (o?.datatype === "int") {
        d === 0 && (d = h.length);
        let M = 1;
        if (h.length > 0) {
          const z = h.length - d - 1;
          M = Math.pow(10, Math.max(0, z + 1));
        }
        v = v + s * M, g = v.toString();
      } else
        g = h;
      d = d + (g.length - y), this.setState({ value: g }, () => {
        this.handleChange({
          target: {
            value: g,
            name: this.inputRef.current ? this.inputRef.current.name : o.column
          }
        }), setTimeout(() => {
          this.inputRef.current && (this.inputRef.current.focus(), this.inputRef.current.setSelectionRange(d, d));
        }, 0);
      });
    }, this.handleKeyDown = (s) => {
      const { column: o } = this.props;
      if (o?.datatype === "int" || o?.datatype === "dec" || o?.datatype === "num") {
        if (s.key == "ArrowUp") {
          s.preventDefault(), this.handleSpin(1);
          return;
        } else if (s.key == "ArrowDown") {
          s.preventDefault(), this.handleSpin(-1);
          return;
        }
      }
      if (o?.datatype === "dec" || o?.datatype === "num") {
        const h = s.currentTarget, d = h.value, y = h.selectionStart ?? 0, v = d.indexOf(".");
        if ((s.key === "." || s.key === ",") && v !== -1)
          s.preventDefault(), this.setCursorPosition(y > v ? v : v + 1);
        else if (s.key === "-") {
          s.preventDefault();
          let g = d;
          d.startsWith("-") ? g = d.slice(1) : g = "-" + d, setTimeout(() => {
            const M = d.startsWith("-") ? Math.max(y - 1, 0) : y + 1;
            this.setState({ value: g }, () => {
              this.setCursorPosition(M), this.handleChange({
                target: {
                  value: g,
                  name: h.name
                }
              });
            });
          }, 0);
        } else if (s.key === "Backspace") {
          if (h.selectionStart === 0 && h.selectionEnd === d.length)
            s.preventDefault(), this.clearInput("0", v, o, h);
          else if (v === 1 && d.length > 1 && h.selectionStart === 1 && h.selectionEnd === 1) {
            s.preventDefault();
            const g = "0" + d.slice(v);
            setTimeout(() => {
              this.setState({ value: g }, () => {
                this.setCursorPosition(1), this.handleChange({
                  target: {
                    value: g,
                    name: h.name
                  }
                });
              });
            }, 0);
          } else if (y - v === 1)
            s.preventDefault(), this.setCursorPosition(v);
          else if (v !== -1 && y > v) {
            s.preventDefault();
            const g = d.slice(0, y - 1) + d.slice(y) + "0";
            setTimeout(() => {
              this.setState({ value: g }, () => {
                this.setCursorPosition(y - 1), this.handleChange({
                  target: {
                    value: g,
                    name: h.name
                  }
                });
              });
            }, 0);
          }
        } else if (s.key === "Delete")
          if (h.selectionStart === 0 && h.selectionEnd === d.length)
            s.preventDefault(), this.clearInput("0", v, o, h);
          else if (v === 1 && d.length > 1 && h.selectionStart === 0 && h.selectionEnd === 0) {
            s.preventDefault();
            const g = "0" + d.slice(v);
            setTimeout(() => {
              this.setState({ value: g }, () => {
                this.setCursorPosition(1), this.handleChange({
                  target: {
                    value: g,
                    name: h.name
                  }
                });
              });
            }, 0);
          } else if (v !== -1 && y > v) {
            s.preventDefault();
            const g = d.slice(0, y) + d.slice(y + 1) + "0";
            setTimeout(() => {
              this.setState({ value: g }, () => {
                this.setCursorPosition(y), this.handleChange({
                  target: {
                    value: g,
                    name: h.name
                  }
                });
              });
            }, 0);
          } else y - v === 0 && (s.preventDefault(), this.setCursorPosition(v + 1));
        else if (s.key == "End" && v !== -1)
          s.preventDefault(), this.setCursorPosition(d.length - 1);
        else if (d[0] === "-" && (s.key == "Home" || s.key == "ArrowLeft" && y === 1))
          s.preventDefault(), this.setCursorPosition(1);
        else if (s.key.length === 1 && s.key >= "0" && s.key <= "9")
          if (v !== -1 && y > v) {
            const g = y + 1;
            setTimeout(() => {
              this.inputRef.current && this.inputRef.current.selectionStart !== g && this.setCursorPosition(g);
            }, 0);
          } else d[0] === "0" && y === 1 ? setTimeout(() => {
            this.setCursorPosition(y);
          }, 0) : h.selectionStart === 0 && h.selectionEnd === d.length && (s.preventDefault(), this.clearInput(s.key, v, o, h));
      }
    };
    let u = r.column && typeof r.column.data < "u" || typeof r.column.data < "u" ? r.column.data : "";
    if ((r.column?.datatype === "dec" || r.column?.datatype === "num") && u !== void 0 && u !== null && u !== "") {
      let s = Number(u);
      isNaN(s) || (u = s.toFixed(r.column.datadec ?? 0));
    }
    this.state = { value: u };
  }
  componentDidMount() {
    this.handleChange({
      target: {
        value: this.state.value,
        name: this.props.column.column
      }
    });
  }
  componentDidUpdate(r) {
    if (this.props.column?.data !== r.column?.data && this.props.column?.data !== this.state.value) {
      let u = this.props.column.data;
      if ((this.props.column?.datatype === "dec" || this.props.column?.datatype === "num") && u !== void 0 && u !== null && u !== "") {
        const s = Number(u);
        isNaN(s) || (u = s.toFixed(this.props.column.datadec ?? 0));
      }
      this.setState({ value: u });
    }
  }
  setCursorPosition(r) {
    this.inputRef.current && this.inputRef.current.setSelectionRange(r, r);
  }
  clearInput(r, u, s, o) {
    let h = r, d = -1;
    if (u !== -1) {
      const y = s?.datadec ? "0".repeat(s.datadec) : "";
      h = r + "." + y, d = h.indexOf(".");
    }
    setTimeout(() => {
      this.setState({ value: h }, () => {
        let y = d !== -1 ? d : h.length;
        this.setCursorPosition(y), this.handleChange({
          target: {
            value: h,
            name: o.name
          }
        });
      });
    }, 0);
  }
  getData() {
    return this.state.value;
  }
  render() {
    const { column: r } = this.props, u = {
      width: "100%"
    }, s = !!r.readonly;
    r?.datalen && (u.maxWidth = `${r.datalen}cap`), r?.stretch && (u.flex = `${r?.stretch} 1 auto`), ["dec", "int", "num"].includes(r?.datatype) && (u.textAlign = "right");
    const o = this.state.value, h = r?.datatype === "dec" || r?.datatype === "num" || r?.datatype === "int", d = { padding: 0, width: "2cap", height: "1.5cap", fontSize: "1cap", lineHeight: 1, UserSelect: "none", border: 0 }, y = (g) => {
      !h || s || this.inputRef.current === document.activeElement && (g.deltaY < 0 ? this.handleSpin(1) : g.deltaY > 0 && this.handleSpin(-1));
    };
    Object.assign(u, r.style);
    const v = r.pic === "*" ? "password" : "text";
    return /* @__PURE__ */ S.jsxs("div", { style: { display: "flex", alignItems: "center" }, children: [
      /* @__PURE__ */ S.jsx(
        "input",
        {
          type: v,
          className: "Q2Line",
          style: u,
          value: o,
          onChange: this.handleChange,
          onKeyDown: this.handleKeyDown,
          onBlur: this.focusOut,
          onFocus: this.focusIn,
          readOnly: s,
          id: this.id,
          name: r.column,
          inputMode: r?.datatype === "dec" || r?.datatype === "num" ? "decimal" : r?.datatype === "int" ? "numeric" : void 0,
          pattern: r?.datatype === "dec" || r?.datatype === "num" ? "[0-9]*[.,]?[0-9]*" : r?.datatype === "int" ? "[0-9]*" : void 0,
          autoComplete: "off",
          ref: this.inputRef,
          onWheel: y
        }
      ),
      h && !s && /* @__PURE__ */ S.jsxs("span", { style: { display: "flex", flexDirection: "column", marginLeft: 2 }, children: [
        /* @__PURE__ */ S.jsx(
          "button",
          {
            type: "button",
            tabIndex: -1,
            style: d,
            onClick: () => this.handleSpin(1),
            children: "▲"
          }
        ),
        /* @__PURE__ */ S.jsx(
          "button",
          {
            type: "button",
            tabIndex: -1,
            style: d,
            onClick: () => this.handleSpin(-1),
            children: "▼"
          }
        )
      ] })
    ] });
  }
}
function Hu() {
  return (Hu = Object.assign || function(c) {
    for (var r = 1; r < arguments.length; r++) {
      var u = arguments[r];
      for (var s in u) Object.prototype.hasOwnProperty.call(u, s) && (c[s] = u[s]);
    }
    return c;
  }).apply(this, arguments);
}
function cp(c, r) {
  if (c == null) return {};
  var u, s, o = {}, h = Object.keys(c);
  for (s = 0; s < h.length; s++) r.indexOf(u = h[s]) >= 0 || (o[u] = c[u]);
  return o;
}
function rf(c) {
  var r = it.useRef(c), u = it.useRef(function(s) {
    r.current && r.current(s);
  });
  return r.current = c, u.current;
}
var ti = function(c, r, u) {
  return r === void 0 && (r = 0), u === void 0 && (u = 1), c > u ? u : c < r ? r : c;
}, Fn = function(c) {
  return "touches" in c;
}, cf = function(c) {
  return c && c.ownerDocument.defaultView || self;
}, Uy = function(c, r, u) {
  var s = c.getBoundingClientRect(), o = Fn(r) ? (function(h, d) {
    for (var y = 0; y < h.length; y++) if (h[y].identifier === d) return h[y];
    return h[0];
  })(r.touches, u) : r;
  return { left: ti((o.pageX - (s.left + cf(c).pageXOffset)) / s.width), top: ti((o.pageY - (s.top + cf(c).pageYOffset)) / s.height) };
}, By = function(c) {
  !Fn(c) && c.preventDefault();
}, op = tt.memo(function(c) {
  var r = c.onMove, u = c.onKey, s = cp(c, ["onMove", "onKey"]), o = it.useRef(null), h = rf(r), d = rf(u), y = it.useRef(null), v = it.useRef(!1), g = it.useMemo(function() {
    var $ = function(at) {
      By(at), (Fn(at) ? at.touches.length > 0 : at.buttons > 0) && o.current ? h(Uy(o.current, at, y.current)) : Z(!1);
    }, U = function() {
      return Z(!1);
    };
    function Z(at) {
      var J = v.current, V = cf(o.current), nt = at ? V.addEventListener : V.removeEventListener;
      nt(J ? "touchmove" : "mousemove", $), nt(J ? "touchend" : "mouseup", U);
    }
    return [function(at) {
      var J = at.nativeEvent, V = o.current;
      if (V && (By(J), !(function(rt, xt) {
        return xt && !Fn(rt);
      })(J, v.current) && V)) {
        if (Fn(J)) {
          v.current = !0;
          var nt = J.changedTouches || [];
          nt.length && (y.current = nt[0].identifier);
        }
        V.focus(), h(Uy(V, J, y.current)), Z(!0);
      }
    }, function(at) {
      var J = at.which || at.keyCode;
      J < 37 || J > 40 || (at.preventDefault(), d({ left: J === 39 ? 0.05 : J === 37 ? -0.05 : 0, top: J === 40 ? 0.05 : J === 38 ? -0.05 : 0 }));
    }, Z];
  }, [d, h]), M = g[0], z = g[1], L = g[2];
  return it.useEffect(function() {
    return L;
  }, [L]), tt.createElement("div", Hu({}, s, { onTouchStart: M, onMouseDown: M, className: "react-colorful__interactive", ref: o, onKeyDown: z, tabIndex: 0, role: "slider" }));
}), xf = function(c) {
  return c.filter(Boolean).join(" ");
}, fp = function(c) {
  var r = c.color, u = c.left, s = c.top, o = s === void 0 ? 0.5 : s, h = xf(["react-colorful__pointer", c.className]);
  return tt.createElement("div", { className: h, style: { top: 100 * o + "%", left: 100 * u + "%" } }, tt.createElement("div", { className: "react-colorful__pointer-fill", style: { backgroundColor: r } }));
}, le = function(c, r, u) {
  return r === void 0 && (r = 0), u === void 0 && (u = Math.pow(10, r)), Math.round(u * c) / u;
}, J2 = function(c) {
  return P2(of(c));
}, of = function(c) {
  return c[0] === "#" && (c = c.substring(1)), c.length < 6 ? { r: parseInt(c[0] + c[0], 16), g: parseInt(c[1] + c[1], 16), b: parseInt(c[2] + c[2], 16), a: c.length === 4 ? le(parseInt(c[3] + c[3], 16) / 255, 2) : 1 } : { r: parseInt(c.substring(0, 2), 16), g: parseInt(c.substring(2, 4), 16), b: parseInt(c.substring(4, 6), 16), a: c.length === 8 ? le(parseInt(c.substring(6, 8), 16) / 255, 2) : 1 };
}, W2 = function(c) {
  return I2(F2(c));
}, $2 = function(c) {
  var r = c.s, u = c.v, s = c.a, o = (200 - r) * u / 100;
  return { h: le(c.h), s: le(o > 0 && o < 200 ? r * u / 100 / (o <= 100 ? o : 200 - o) * 100 : 0), l: le(o / 2), a: le(s, 2) };
}, ff = function(c) {
  var r = $2(c);
  return "hsl(" + r.h + ", " + r.s + "%, " + r.l + "%)";
}, F2 = function(c) {
  var r = c.h, u = c.s, s = c.v, o = c.a;
  r = r / 360 * 6, u /= 100, s /= 100;
  var h = Math.floor(r), d = s * (1 - u), y = s * (1 - (r - h) * u), v = s * (1 - (1 - r + h) * u), g = h % 6;
  return { r: le(255 * [s, y, d, d, v, s][g]), g: le(255 * [v, s, s, y, d, d][g]), b: le(255 * [d, d, v, s, s, y][g]), a: le(o, 2) };
}, Au = function(c) {
  var r = c.toString(16);
  return r.length < 2 ? "0" + r : r;
}, I2 = function(c) {
  var r = c.r, u = c.g, s = c.b, o = c.a, h = o < 1 ? Au(le(255 * o)) : "";
  return "#" + Au(r) + Au(u) + Au(s) + h;
}, P2 = function(c) {
  var r = c.r, u = c.g, s = c.b, o = c.a, h = Math.max(r, u, s), d = h - Math.min(r, u, s), y = d ? h === r ? (u - s) / d : h === u ? 2 + (s - r) / d : 4 + (r - u) / d : 0;
  return { h: le(60 * (y < 0 ? y + 6 : y)), s: le(h ? d / h * 100 : 0), v: le(h / 255 * 100), a: o };
}, tS = tt.memo(function(c) {
  var r = c.hue, u = c.onChange, s = xf(["react-colorful__hue", c.className]);
  return tt.createElement("div", { className: s }, tt.createElement(op, { onMove: function(o) {
    u({ h: 360 * o.left });
  }, onKey: function(o) {
    u({ h: ti(r + 360 * o.left, 0, 360) });
  }, "aria-label": "Hue", "aria-valuenow": le(r), "aria-valuemax": "360", "aria-valuemin": "0" }, tt.createElement(fp, { className: "react-colorful__hue-pointer", left: r / 360, color: ff({ h: r, s: 100, v: 100, a: 1 }) })));
}), eS = tt.memo(function(c) {
  var r = c.hsva, u = c.onChange, s = { backgroundColor: ff({ h: r.h, s: 100, v: 100, a: 1 }) };
  return tt.createElement("div", { className: "react-colorful__saturation", style: s }, tt.createElement(op, { onMove: function(o) {
    u({ s: 100 * o.left, v: 100 - 100 * o.top });
  }, onKey: function(o) {
    u({ s: ti(r.s + 100 * o.left, 0, 100), v: ti(r.v - 100 * o.top, 0, 100) });
  }, "aria-label": "Color", "aria-valuetext": "Saturation " + le(r.s) + "%, Brightness " + le(r.v) + "%" }, tt.createElement(fp, { className: "react-colorful__saturation-pointer", top: 1 - r.v / 100, left: r.s / 100, color: ff(r) })));
}), hp = function(c, r) {
  if (c === r) return !0;
  for (var u in c) if (c[u] !== r[u]) return !1;
  return !0;
}, aS = function(c, r) {
  return c.toLowerCase() === r.toLowerCase() || hp(of(c), of(r));
};
function lS(c, r, u) {
  var s = rf(u), o = it.useState(function() {
    return c.toHsva(r);
  }), h = o[0], d = o[1], y = it.useRef({ color: r, hsva: h });
  it.useEffect(function() {
    if (!c.equal(r, y.current.color)) {
      var g = c.toHsva(r);
      y.current = { hsva: g, color: r }, d(g);
    }
  }, [r, c]), it.useEffect(function() {
    var g;
    hp(h, y.current.hsva) || c.equal(g = c.fromHsva(h), y.current.color) || (y.current = { hsva: h, color: g }, s(g));
  }, [h, c, s]);
  var v = it.useCallback(function(g) {
    d(function(M) {
      return Object.assign({}, M, g);
    });
  }, []);
  return [h, v];
}
var nS = typeof window < "u" ? it.useLayoutEffect : it.useEffect, iS = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : void 0;
}, Ly = /* @__PURE__ */ new Map(), uS = function(c) {
  nS(function() {
    var r = c.current ? c.current.ownerDocument : document;
    if (r !== void 0 && !Ly.has(r)) {
      var u = r.createElement("style");
      u.innerHTML = `.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}`, Ly.set(r, u);
      var s = iS();
      s && u.setAttribute("nonce", s), r.head.appendChild(u);
    }
  }, []);
}, sS = function(c) {
  var r = c.className, u = c.colorModel, s = c.color, o = s === void 0 ? u.defaultColor : s, h = c.onChange, d = cp(c, ["className", "colorModel", "color", "onChange"]), y = it.useRef(null);
  uS(y);
  var v = lS(u, o, h), g = v[0], M = v[1], z = xf(["react-colorful", r]);
  return tt.createElement("div", Hu({}, d, { ref: y, className: z }), tt.createElement(eS, { hsva: g, onChange: M }), tt.createElement(tS, { hue: g.h, onChange: M, className: "react-colorful__last-control" }));
}, rS = { defaultColor: "000", toHsva: J2, fromHsva: function(c) {
  return W2({ h: c.h, s: c.s, v: c.v, a: 1 });
}, equal: aS }, cS = function(c) {
  return tt.createElement(sS, Hu({}, c, { colorModel: rS }));
};
function Gy(c) {
  const r = new Option().style;
  return r.color = c, r.color !== "";
}
class oS extends da {
  constructor(r) {
    super(r), this.pickerRef = tt.createRef(), this.handleClickOutside = (s) => {
      this.pickerRef.current && !this.pickerRef.current.contains(s.target) && this.setState({ showPicker: !1 });
    }, this.handleColorChange = (s) => {
      this.setState({ value: s }, () => {
        this.changed(s);
      });
    }, this.handleInputChange = (s) => {
      const o = s.target.value.trim();
      this.setState({ value: o }, () => {
        Gy(o) && this.changed(o);
      });
    }, this.handleEyedropper = async () => {
      if ("EyeDropper" in window)
        try {
          const s = await new EyeDropper().open();
          this.handleColorChange(s.sRGBHex);
        } catch (s) {
          console.warn("Eyedropper canceled or failed", s);
        }
      else
        alert("Your browser does not support the EyeDropper API.");
    }, this.togglePicker = () => {
      this.setState((s) => ({ showPicker: !s.showPicker }));
    }, this.calculatePickerPosition = () => {
      const s = this.pickerRef.current?.querySelector("button");
      if (!s) return { top: "100%", marginTop: 6 };
      const o = s.getBoundingClientRect(), h = window.innerHeight - o.bottom, d = o.top;
      return h < 250 && d > h ? { bottom: "100%", marginBottom: 6 } : { top: "100%", marginTop: 6 };
    };
    const u = r.column && typeof r.column.data < "u" || typeof r.column.data < "u" ? r.column.data : "#FFFFFF";
    this.state = { value: u, showPicker: !1 };
  }
  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }
  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }
  componentDidUpdate(r) {
    r.column.data !== this.props.column.data && this.props.column.data !== this.state.value && this.setState({ value: this.props.column.data });
  }
  render() {
    const { value: r, showPicker: u } = this.state, s = Gy(r), o = this.calculatePickerPosition();
    return /* @__PURE__ */ S.jsxs("div", { style: { display: "flex", alignItems: "center", gap: 8, position: "relative" }, ref: this.pickerRef, children: [
      /* @__PURE__ */ S.jsx(
        "button",
        {
          style: {
            width: 20,
            height: 20,
            background: s ? r : "#fff",
            border: "1px solid #999"
          },
          title: "Open color picker",
          onClick: this.togglePicker
        }
      ),
      /* @__PURE__ */ S.jsx(
        "input",
        {
          value: r,
          className: "Q2Line",
          onChange: this.handleInputChange,
          onClick: () => this.setState({ showPicker: !1 }),
          placeholder: "#hex or name"
        }
      ),
      u && /* @__PURE__ */ S.jsxs(
        "div",
        {
          style: {
            position: "absolute",
            zIndex: 999,
            ...o,
            padding: 10,
            background: "#fff",
            border: "1px solid #ccc",
            borderRadius: 4,
            boxShadow: "0 2px 8px rgba(0,0,0,0.15)"
          },
          children: [
            /* @__PURE__ */ S.jsx(
              cS,
              {
                color: s ? r : "#ffffff",
                onChange: this.handleColorChange
              }
            ),
            /* @__PURE__ */ S.jsx("div", { style: { marginTop: 6, textAlign: "right" }, children: /* @__PURE__ */ S.jsx(
              "button",
              {
                onClick: this.handleEyedropper,
                style: {
                  padding: "2px 6px",
                  fontSize: 12,
                  border: "1px solid #ccc",
                  borderRadius: 4,
                  cursor: "pointer"
                },
                children: "Pick from screen"
              }
            ) })
          ]
        }
      )
    ] });
  }
}
class fS extends da {
  constructor(r) {
    super(r), this.filterValues = (u) => this.values.filter(
      (s) => s.toLowerCase().includes(u.toLowerCase())
    ), this.updateDropdownPosition = () => {
      const u = this.wrapperRef.current, s = this.dropdownRef.current;
      if (!u || !s) return;
      const o = u.getBoundingClientRect(), h = window.innerHeight, d = h - o.bottom, y = o.top, v = 150;
      let g = !1, M = v;
      d < v && y > d ? (g = !0, M = Math.min(y - 10, v)) : M = Math.min(d - 10, v);
      const z = o.width, L = o.left, $ = g ? void 0 : o.bottom, U = g ? h - o.top : void 0;
      Object.assign(s.style, {
        position: "fixed",
        // position relative to viewport
        top: $ !== void 0 ? `${$}px` : "auto",
        bottom: U !== void 0 ? `${U}px` : "auto",
        left: `${L}px`,
        width: `${z}px`,
        maxHeight: `${M}px`,
        overflowY: "auto",
        zIndex: 1e3
      }), this.setState({ dropdownAbove: g, dropdownMaxHeight: M });
    }, this.handleInputChange = (u) => {
      const s = u.target.value, o = this.filterValues(s);
      this.setState({
        value: s,
        filtered: o,
        showList: !0,
        highlightedIndex: -1
      }, () => {
        this.changed(s);
      });
    }, this.handleItemClick = (u) => {
      this.setState({
        value: u,
        showList: !1,
        highlightedIndex: -1,
        filtered: this.filterValues(u)
      }, () => {
        this.changed(u);
      });
    }, this.handleBlur = () => {
      setTimeout(() => this.setState({ showList: !1 }), 100);
    }, this.handleKeyDown = (u) => {
      const { highlightedIndex: s, filtered: o } = this.state;
      u.key === "ArrowDown" ? (u.preventDefault(), this.setState({
        highlightedIndex: (s + 1) % o.length,
        showList: !0
      })) : u.key === "ArrowUp" ? (u.preventDefault(), this.setState({
        highlightedIndex: (s - 1 + o.length) % o.length,
        showList: !0
      })) : u.key === "Enter" ? s >= 0 && s < o.length ? this.handleItemClick(o[s]) : this.setState({ showList: !1 }) : u.key === "Escape" && this.setState({ showList: !1, highlightedIndex: -1 });
    }, this.handleClear = () => {
      this.setState({
        value: "",
        filtered: this.values,
        showList: !0,
        highlightedIndex: -1
      }, () => {
        this.changed(""), this.inputRef.current?.focus(), this.updateDropdownPosition();
      });
    }, this.toggleDropdown = () => {
      const { showList: u, value: s } = this.state;
      this.setState({
        showList: !u,
        filtered: this.filterValues(s)
      }, () => this.updateDropdownPosition()), this.inputRef.current?.focus();
    }, this.values = this.props.column.pic.split(";"), this.state = {
      value: this.props.column.data,
      showList: !1,
      filtered: this.values,
      highlightedIndex: -1,
      dropdownAbove: !0,
      dropdownMaxHeight: -1
    }, this.inputRef = tt.createRef(), this.wrapperRef = tt.createRef(), this.dropdownRef = tt.createRef(), this.updateDropdownPosition();
  }
  componentDidUpdate(r) {
    if (this.props.column?.data !== r.column?.data && this.props.column?.data !== this.state.value) {
      const u = this.props.column.data;
      this.setState({ value: u, showList: !1 });
    }
  }
  render() {
    const { value: r, showList: u, filtered: s, highlightedIndex: o } = this.state;
    let h = {};
    h = { ...h, ...this.props.column?.style };
    const d = this.props.column.class;
    return /* @__PURE__ */ S.jsxs("div", { className: `Q2Combo ${d}`, ref: this.wrapperRef, style: h, children: [
      /* @__PURE__ */ S.jsx(
        "input",
        {
          ref: this.inputRef,
          value: r,
          onChange: this.handleInputChange,
          onBlur: this.handleBlur,
          onKeyDown: this.handleKeyDown,
          style: { flex: "1 auto", width: "100%" }
        }
      ),
      r && /* @__PURE__ */ S.jsx(
        "button",
        {
          className: "Clear",
          onClick: this.handleClear,
          title: "Clear",
          children: "×"
        }
      ),
      /* @__PURE__ */ S.jsx(
        "button",
        {
          onClick: this.toggleDropdown,
          tabIndex: -1,
          title: "Toggle dropdown",
          children: "▼"
        }
      ),
      u && s.length > 0 && /* @__PURE__ */ S.jsx(
        "ul",
        {
          ref: this.dropdownRef,
          className: "combo-list",
          style: {
            position: "absolute",
            [this.state.dropdownAbove ? "bottom" : "top"]: "100%",
            left: 0,
            right: 0,
            border: "1px solid #ccc",
            backgroundColor: "white",
            listStyle: "none",
            margin: 0,
            padding: 0,
            maxHeight: `${this.state.dropdownMaxHeight}px`,
            overflowY: "auto",
            boxSizing: "border-box",
            zIndex: 500
          },
          children: s.map((y, v) => /* @__PURE__ */ S.jsx(
            "li",
            {
              onMouseDown: () => this.handleItemClick(y),
              style: {
                padding: "4px 8px",
                cursor: "pointer",
                backgroundColor: v === o ? "#eee" : "white"
              },
              children: y
            },
            v
          ))
        }
      )
    ] });
  }
}
class hS extends da {
  constructor(r) {
    super(r), this.handleChange = (u) => {
      const { column: s } = this.props, o = u.target.value;
      s.data = o, this.setState({ value: o }, () => {
        this.changed(o);
      });
    };
  }
  render() {
    const { column: r } = this.props, u = !!r.readonly, s = {
      width: "98%"
    };
    return /* @__PURE__ */ S.jsx(
      "textarea",
      {
        className: "Q2Text",
        value: r.data,
        readOnly: u,
        onChange: this.handleChange,
        style: s,
        id: this.id,
        name: r.column
      },
      r.key
    );
  }
}
class dS extends da {
  constructor(r) {
    super(r);
  }
  render() {
    const r = this.props.column;
    return /* @__PURE__ */ S.jsx("div", { className: "Q2Spacer", children: r.label });
  }
}
class mS extends da {
  constructor(r) {
    super(r), this.handleChange = (u) => {
      const { column: s } = this.props, o = !!u.currentTarget.checked;
      this.setState({ value: o }, () => {
        this.props.form.handleChange({
          target: {
            value: o,
            name: s.column
          }
        }), s.data = o;
      });
    }, this.state = {
      value: !!r.column?.data
    };
  }
  focus() {
    const { id: r } = this.props;
    r && document.getElementById(r)?.focus();
  }
  componentDidUpdate(r) {
    r.column?.data !== this.props.column?.data && this.setState({ value: !!this.props.column?.data });
  }
  setChecked(r) {
    const { column: u } = this.props;
    if (u.data = r, this.setState({ value: r }), typeof this.props.form.handleChange == "function") {
      const s = {
        target: { checked: r },
        currentTarget: { checked: r }
      };
      this.props.form.handleChange(s);
    }
    this.forceUpdate();
  }
  getData() {
    return this.state.value;
  }
  render() {
    const { column: r } = this.props;
    return /* @__PURE__ */ S.jsxs("div", { className: "Q2CheckBox-container", children: [
      /* @__PURE__ */ S.jsx(
        "input",
        {
          type: "checkbox",
          id: this.id,
          className: "Q2CheckBox",
          onChange: this.handleChange,
          checked: this.state.value
        },
        this.id
      ),
      /* @__PURE__ */ S.jsx("label", { htmlFor: this.id, children: r.label })
    ] });
  }
}
const dp = (c) => {
  if (!c) return;
  const u = c.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  )[0];
  u && u.focus();
};
class mp extends da {
  constructor(r) {
    super(r), this.handleChange = (u) => {
      const { column: s } = this.props, o = u.target.value;
      s.data = o, this.prevValue = this.state.selectedValue, this.setState({ selectedValue: o }, () => {
        this.props.form.handleChange({
          target: {
            value: o,
            name: s.column
          }
        }), typeof this.props.column.valid == "function" && this.props.column.valid(this.props.form);
      });
    }, this.prevValue = "", typeof r.column.data == "number" ? this.state = {
      selectedValue: r.column.pic.split(";")[r.column.data - 1]
    } : this.state = {
      selectedValue: r.column.data || ""
    };
  }
  componentDidMount() {
    typeof this.props.column.valid == "function" && this.props.column.valid(this.props.form);
  }
  static getDerivedStateFromProps(r, u) {
    return typeof r.column.data == "string" && r.column.data !== u.selectedValue ? { selectedValue: r.column.data || "" } : null;
  }
  getData() {
    return this.state.selectedValue;
  }
  setData(r) {
    this.props.column.data = r, this.props.form.s[this.props.column.column] = r, this.setState({ selectedValue: r });
  }
  focus() {
    const r = `${this.id}-0`;
    document.getElementById(r)?.focus();
  }
  render() {
    const { column: r } = this.props;
    if (r.pic) {
      const u = r.pic.split(";");
      return /* @__PURE__ */ S.jsx("div", { className: `Q2RadioButton ${r.class}`, id: this.id, children: u.map((s, o) => {
        const h = `${this.id}-${o}`;
        return /* @__PURE__ */ S.jsxs(S.Fragment, { children: [
          /* @__PURE__ */ S.jsx(
            "input",
            {
              type: "radio",
              name: h,
              id: h,
              value: s,
              checked: this.state.selectedValue === s,
              onChange: this.handleChange,
              onBlur: this.focusOut,
              onFocus: this.focusIn
            }
          ),
          /* @__PURE__ */ S.jsx("label", { htmlFor: h, id: `label-${h}`, children: s }, o)
        ] });
      }) });
    } else return /* @__PURE__ */ S.jsx(S.Fragment, {});
  }
}
class af extends da {
  constructor(r) {
    super(r);
  }
  render() {
    const { column: r } = this.props, u = r.disabled, s = {};
    return Object.assign(s, r.style), /* @__PURE__ */ S.jsx(
      "button",
      {
        className: "Q2Button",
        onClick: r.valid,
        disabled: u,
        style: s,
        children: r?.label
      }
    );
  }
}
function vS({ html: c }) {
  return /* @__PURE__ */ S.jsx("span", { dangerouslySetInnerHTML: { __html: c } });
}
class gS extends it.Component {
  constructor(r) {
    super(r), this.handleCheckStatusChange = (s) => {
      const { panel: o } = this.props, h = !!s.currentTarget.checked;
      this.checkStatusChanged(h), this.setState({ checkChecked: h }, () => {
        if (this.props.onChange(s), o.column.checkChecked = h, h && this.panelRef) {
          const d = this.panelRef.querySelector("fieldset.field-set-style");
          d instanceof HTMLElement && setTimeout(() => {
            dp(d);
          }, 100);
        }
      });
    }, this.panelRef = null;
    const { panel: u } = this.props;
    this.hasCheck = u.column?.check, this.state = {
      checkChecked: u.column.checkChecked
    };
  }
  static getDerivedStateFromProps(r, u) {
    return r.panel.column.checkChecked !== u.checkChecked ? { checkChecked: r.panel.column.checkChecked } : null;
  }
  componentDidMount() {
    this.hasCheck && this.panelRef && this.panelRef.querySelectorAll("input[name]").forEach((u) => {
      u && u.name && (this.props.form.c[u.name] = !!this.state.checkChecked);
    });
  }
  componentDidUpdate() {
    this.componentDidMount();
  }
  checkStatusChanged(r) {
    this.hasCheck && this.panelRef && this.panelRef.querySelectorAll("input[name]").forEach((s) => {
      s && s.name && (this.props.form.c[s.name] = !!r);
    }), this.props.form.handleChange({
      target: {
        value: "",
        name: ""
      }
    });
  }
  render() {
    const { panel: r, form: u, setState: s } = this.props;
    r.panelKey = In();
    let o = "Panel";
    o += this.props.form.props.q2form.class, r.column.column.startsWith("/h") && (o += " flex-row"), (r.column.column.startsWith("/v") || r.column.column.startsWith("/t")) && (o += " flex-column"), r.column.column.includes("o") && (o += " q2-scroll "), r?.label !== "" && r?.label !== void 0 && !r?.isTabWidget && (o += " group-box "), r?.label !== "-" && r?.label !== "" && !r?.isTabWidget && r?.label !== void 0 && (o += " group-box-border "), r.isTabPage && (o += " tab-page "), r.isTabWidget && (o += " tab-widget ");
    let h = { display: "flex", flex: 1, padding: "0.1cap" };
    const d = { display: "flex", justifyContent: "flex-center", width: "auto" };
    r.column.column === "/f" ? (o += " panel-formgrid", h = {
      display: "grid",
      gridTemplateColumns: "max-content 1fr",
      width: "100%",
      paddingRight: "1cap"
      // gap: "0.2em",
      // padding: "0.5cap"
    }) : r.column.column.startsWith("/v") || r.column.column.startsWith("/t") ? h.flexDirection = "column" : h.flexDirection = "row", r.column.column.includes("o") && (h.overflow = "auto"), h.alignItems = "start", h.justifyContent = "flex-start", [7, 8, 9].includes(r.column?.alignment) ? h.alignItems = "start" : [4, 5, 6].includes(r.column?.alignment) ? h.alignItems = "center" : [1, 2, 3].includes(r.column?.alignment) && (h.alignItems = "end"), [7, 4, 1].includes(r.column?.alignment) ? h.textAlign = "left" : [8, 5, 2].includes(r.column?.alignment) ? (h.textAlign = "center", r.column.column.startsWith("/h") && (d.justifyContent = "center")) : [9, 6, 3].includes(r.column?.alignment) && (h.textAlign = "right"), r.column.label === "" && (d.border = "none", d.margin = "0px", d.padding = "0px"), this.props.form.props.q2form.resizeable ? d.minWidth = "max-content" : (h.minWidth = "0", d.minWidth = "0");
    const y = `${r.column.key}-${r.column.tag}-panel-id`, v = this.state.checkChecked, g = [], M = this.props.forceResize;
    r?.isTabWidget && r.children.reduce((U, Z) => {
      g.push({ key: Z.key, label: Z.label, display: "" });
    }, g);
    function z(U) {
      let Z = U.s.tabWidget;
      return Z || (Z = g[0].label), g.map((at, J) => {
        const V = document.getElementById(at.key);
        V && (at.label === Z ? V.style.display = "" : (g[J].display = V.style.display, V.style.display = "none"));
      }), M && M(), !0;
    }
    const L = new Zl("tabWidget", "", {
      pic: r.label,
      data: 1,
      valid: z,
      class: "Q2TabWidget ",
      key: In()
    }), $ = {
      column: L,
      form: this.props.form,
      ref: (U) => {
        this.props.form.w[L.column] = U;
      }
    };
    return /* @__PURE__ */ S.jsxs(
      "div",
      {
        className: o,
        style: d,
        id: "r__" + r.panelKey,
        ref: (U) => {
          this.panelRef = U;
        },
        children: [
          r.column.label && (r?.isTabPage || r?.isTabWidget ? "" : this.hasCheck ? (
            // Group Box with checkbox
            /* @__PURE__ */ S.jsxs("div", { className: "group-box-title", children: [
              /* @__PURE__ */ S.jsx(
                "input",
                {
                  id: y,
                  type: "checkbox",
                  checked: !!v,
                  onChange: this.handleCheckStatusChange,
                  disabled: !!r.column.checkDisabled
                },
                y
              ),
              /* @__PURE__ */ S.jsx("label", { htmlFor: y, children: r.column.label })
            ] })
          ) : (
            // Just Group Box Title
            r.label !== "-" ? /* @__PURE__ */ S.jsx("div", { className: "group-box-title", children: r?.isTabs ? r.label + "!" : r?.isTabPage ? "!" : r.label === "-" ? "" : r.column.label }) : /* @__PURE__ */ S.jsx(S.Fragment, {})
          )),
          r?.isTabWidget ? /* @__PURE__ */ S.jsx(mp, { ...$ }) : "",
          /* @__PURE__ */ S.jsx("fieldset", { className: "field-set-style", disabled: this.hasCheck && !v, children: /* @__PURE__ */ S.jsx("div", { style: h, children: r.children && r.children.map((U, Z) => {
            const J = `${U.id || `${U.column}-${U.key || Z}`}-control-cb`;
            if (U.children) {
              const V = {};
              return U.children.some((nt) => "children" in nt || nt?.datalen === void 0 || nt?.datalen === 0) ? V.width = "100%" : V.display = "inline-block", /* @__PURE__ */ S.jsx(
                "div",
                {
                  id: U.key,
                  style: V,
                  children: u.renderPanel(U)
                },
                U.key + `-form-group1-${Z}`
              );
            } else {
              U.check && (typeof u.c[U.column] > "u" && (u.c[U.column] = typeof U.checkChecked < "u" ? U.checkChecked : !!U.data), U.checkChecked = u.c[U.column]);
              const V = {};
              return U.control != "label" && (V.justifySelf = "end", V.justifySelf = "end", V.marginRight = "0.5em"), Object.assign(V, U.style), /* @__PURE__ */ S.jsxs(tt.Fragment, { children: [
                U.check ? /* @__PURE__ */ S.jsxs("div", { style: { justifySelf: "end", marginRight: "0.5em" }, children: [
                  /* @__PURE__ */ S.jsx(
                    "input",
                    {
                      id: J,
                      type: "checkbox",
                      checked: typeof u.c[U.column] < "u" ? u.c[U.column] : !!U.checkChecked,
                      onChange: (nt) => {
                        const rt = nt.target.checked;
                        U.checkChecked = rt, u.c[U.column] = rt, s(
                          (xt) => ({
                            formData: {
                              ...xt.formData,
                              [U.column]: rt
                            }
                          }),
                          () => {
                            rt && typeof u.w[U.column]?.focus == "function" && u.w[U.column].focus(), this.checkStatusChanged();
                          }
                        );
                      },
                      disabled: !!U.checkDisabled
                    },
                    J
                  ),
                  /* @__PURE__ */ S.jsx("label", { htmlFor: J, children: U.control === "check" ? "Turn on" : U.label })
                ] }, U.key + `-checkdiv-${Z}`) : U.label !== "" && !["check", "button"].includes(U.control) ? /* @__PURE__ */ S.jsx(
                  "label",
                  {
                    htmlFor: J,
                    className: `form-label ${U.class}`,
                    style: V,
                    children: /* @__PURE__ */ S.jsx(vS, { html: U.label })
                  },
                  U.key + "-label"
                ) : /* @__PURE__ */ S.jsx(S.Fragment, {}),
                U.control !== "label" && /* @__PURE__ */ S.jsx(
                  "div",
                  {
                    className: "form-group",
                    style: U.getStyle(),
                    children: U.check ? /* @__PURE__ */ S.jsx(
                      "fieldset",
                      {
                        className: "field-set-style",
                        disabled: !u.c[U.column],
                        children: u.renderInput(U)
                      }
                    ) : u.renderInput(U)
                  },
                  U.key + `-form-group-${Z}`
                )
              ] }, U.key + `-fragment-${Z}`);
            }
          }) }) })
        ]
      },
      r.column.key
    );
  }
}
class yS extends da {
  constructor(r) {
    super(r), this.imageRef = tt.createRef();
  }
  render() {
    const { column: r } = this.props, u = {};
    return Object.assign(u, r.style), /* @__PURE__ */ S.jsxs(S.Fragment, { children: [
      r?.label,
      /* @__PURE__ */ S.jsx(
        "img",
        {
          className: "Q2Image " + r.class,
          style: u,
          onClick: r.valid,
          alt: r.label,
          src: r.data,
          ref: this.imageRef
        }
      )
    ] });
  }
}
class Ef extends it.Component {
  constructor(r) {
    super(r), this.w = {}, this.s = {}, this.c = {}, this.focus = "", this.prevFocus = "", this.formRef = tt.createRef(), this.okButtonText = "Ok", this.cancelButtonText = "Cancel", this.formKey = In(), this.handleFocus = () => {
      this.w[this.prevFocus]?.props.column.valid, this.scanAndCopyValues(), typeof this.props.q2form?.hookFocusChanged == "function" && this.props.q2form.hookFocusChanged(this);
    }, this.handleKeyDown = (u) => {
      u.key === "Escape" && this.props.isTopDialog && this.handleCancel();
    }, this.handleResize = () => {
    }, this.handleChange = (u) => {
      const { name: s } = u.target;
      this.scanAndCopyValues(), typeof this.props.q2form?.hookInputChanged == "function" && (this.focus = s, this.props.q2form.hookInputChanged(this));
    }, this.handleSubmit = async () => {
      let u = !0;
      typeof this.props.q2form?.hookSubmit == "function" && (u = await this.props.q2form.hookSubmit(this)), u && this.close();
    }, this.handleCancel = async () => {
      let u = !0;
      typeof this.props.q2form?.hookCancel == "function" && (u = await this.props.q2form.hookCancel(this)), u && this.close();
    }, this.close = () => {
      this.props.onClose && this.props.onClose();
    }, this.handleAction = (u) => {
      u.label === "Exit" && this.props.onClose && this.props.onClose();
    }, this.getWidgetData = (u) => this.w[u]?.getData(), this.setWidgetData = (u, s) => {
      this.w[u] && this.w[u].setValue(s);
    }, this.getWidgetCheck = (u) => this.w[u]?.props.column.checkChecked, this.scanAndCopyValues = () => {
      Object.keys(this.w).forEach((u) => {
        this.w[u] && typeof this.w[u].getData == "function" ? (this.s[u] = this.getWidgetData(u), this.w[u] && this.w[u].props && this.w[u].props.col && (this.w[u].props.column.data = this.s[u]), this.w[u]?.props.column.check && (this.c[u] = this.getWidgetCheck(u))) : (delete this.s[u], delete this.w[u]);
      });
    }, this.renderInput = (u) => {
      u.check && typeof u.checkChecked > "u" && (u.checkChecked = !!u.data);
      const s = {
        column: u,
        form: this,
        ref: (o) => {
          this.w[u.column] = o;
        }
        // Store reference to the widget
      };
      switch (u.column === "/s" && (u.control = "spacer"), u.control) {
        case "text":
          return /* @__PURE__ */ S.jsx(hS, { ...s });
        case "line":
          return /* @__PURE__ */ S.jsx(Hy, { ...s });
        case "color":
          return /* @__PURE__ */ S.jsx(oS, { ...s });
        case "combo":
          return /* @__PURE__ */ S.jsx(fS, { ...s });
        case "button":
          return /* @__PURE__ */ S.jsx(af, { ...s });
        case "spacer":
          return /* @__PURE__ */ S.jsx(dS, { ...s });
        case "check":
          return /* @__PURE__ */ S.jsx(mS, { ...s });
        case "radio":
          return /* @__PURE__ */ S.jsx(mp, { ...s });
        case "image":
          return /* @__PURE__ */ S.jsx(yS, { ...s });
        case "list":
          return u.data.subForm = !0, /* @__PURE__ */ S.jsx(Z2, { q2form: u.data });
        case "form":
          return u.data.subForm = !0, /* @__PURE__ */ S.jsx(Ef, { q2form: u.data });
        case "widget":
          {
            if (typeof u.data == "object" && u.data?.widget)
              return /* @__PURE__ */ S.jsx(u.data.widget, { ...u.data.props || {} });
            if (typeof u.data == "function")
              return /* @__PURE__ */ S.jsx(u.data, {});
          }
          return null;
        default:
          return /* @__PURE__ */ S.jsx(Hy, { ...s });
      }
    }, this.createFormTree = (u) => {
      const s = [], o = { column: "root", children: [{ key: "root-0", column: void 0 }] };
      s.push(o), u[0].column.startsWith("/") || u.splice(0, 0, { column: "/f", key: "root-1" });
      let h = {};
      return u.forEach((d, y) => {
        if (d.column === "/t")
          if ("children" in h) {
            let v = s.length - 1;
            for (; s[v]?.isTabPage !== !0 || v === 0; )
              s.pop(), v -= 1;
            s.pop(), h.label = h.label + `;${d.label}`, h.isTabWidget = !0;
          } else {
            const v = {
              label: d.label,
              isTabWidget: !0,
              key: `tabWidget-${d.column}-${y}}`,
              // Generate unique key
              children: [],
              column: d
            };
            s[s.length - 1].children.push(v), h = v, s.push(v);
          }
        if (d.column.startsWith("/h") || d.column.startsWith("/v") || d.column.startsWith("/f") || d.column.startsWith("/t")) {
          const v = {
            label: d.label,
            key: `${this.formKey}${d.column}-${y}`,
            // Generate unique key
            children: [],
            isTabPage: d.column === "/t",
            column: d
          };
          s[s.length - 1].children.push(v), s.push(v);
        } else d.column === "/" ? (s.length > 1 && s.pop(), s[s.length - 1]?.isTabWidget && (h = {}, s.pop())) : (d.key = d.key || `${d.column}-${y}-${Math.random().toString(36).substring(2, 9)}`, d.check && typeof d.checkChecked > "u" && (d.checkChecked = !!d.data), this.s[d.column] = d.data, this.c[d.column] = !!d.checkChecked, s[s.length - 1].children.push(d));
      }), o;
    }, this.handlePanelCheck = (u) => (s) => {
      this.setState((o) => ({
        panelChecks: {
          ...o.panelChecks,
          [u]: s.target.checked
        }
      }));
    }, this.renderPanel = (u) => !u || !u.children ? null : /* @__PURE__ */ S.jsx(
      gS,
      {
        panel: u,
        form: this,
        onChange: this.handlePanelCheck(u.key),
        formData: this.state.formData,
        forceResize: this.props.forceResize,
        setState: this.setState.bind(this)
      },
      u.key
    ), this.setCssText = (u) => {
      f2(this.formKey, u);
    }, this.waitForClose = async () => await h2(this.formKey), this.props.q2form.formKey = this.formKey, this.state = {
      formData: {},
      panelChecks: {},
      // Track checkbox state for panels
      okButtonText: "Ok",
      cancelButtonText: "Cancel"
    }, this.updateQ2FormLinks();
  }
  updateQ2FormLinks() {
    this.props.q2form && (this.props.q2form.s = this.s, this.props.q2form.w = this.w);
  }
  componentDidMount() {
    const r = this.props.q2form.columns.reduce((u, s) => (u[s.column] = s.data || "", u), {});
    this.setState({ formData: r }), document.addEventListener("keydown", this.handleKeyDown), this.props.q2form.frontForm = this, setTimeout(() => {
      dp(this.formRef.current);
    }, 100), typeof this.props.q2form?.hookShow == "function" && this.props.q2form.hookShow(this), this.props.q2form.cssText && this.setCssText(this.props.q2form.cssText);
  }
  // componentDidUpdate(prevProps: FormProps, prevState: { formData: { [key: string]: any } }) {
  componentDidUpdate(r, u) {
    this.updateQ2FormLinks(), Object.keys(this.state.formData).forEach((s) => {
      this.state.formData[s] && !u.formData?.[s] && this.w[s] && typeof this.w[s]?.focus == "function" && this.w[s].focus();
    }), this.props.q2form.cssText && this.setCssText(this.props.q2form.cssText);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown), typeof this.props.q2form?.hookClosed == "function" && this.props.q2form.hookClosed(this);
  }
  render() {
    const { q2form: r, onClose: u, isTopDialog: s } = this.props, { okButtonText: o, cancelButtonText: h } = this.state;
    if (r?.data && (Array.isArray(r.data) && r.data.length > 0 || typeof r.data == "function" || r.dataGridParams.loader))
      return /* @__PURE__ */ S.jsx(
        X2,
        {
          q2form: r,
          onClose: u ?? (() => {
          }),
          isTopDialog: !!s
        }
      );
    const { columns: d } = r, y = this.props.q2form.hasOkButton, v = this.props.q2form?.subForm, g = this.props.q2form.hasCancelButton, M = this.createFormTree(d);
    return /* @__PURE__ */ S.jsxs(
      "div",
      {
        ref: this.formRef,
        className: `FormComponent ${r.class}`,
        id: this.formKey,
        children: [
          M.children && M.children.map((z) => this.renderPanel(z)),
          (y || g) && !v && /* @__PURE__ */ S.jsxs("div", { className: "form-bottom-panel", children: [
            y && /* @__PURE__ */ S.jsx(
              af,
              {
                column: new Zl(
                  "ok",
                  o,
                  { valid: this.handleSubmit }
                )
              }
            ),
            g && /* @__PURE__ */ S.jsx(
              af,
              {
                column: new Zl(
                  "cancel",
                  h,
                  { valid: this.handleCancel }
                )
              }
            )
          ] })
        ]
      },
      this.formKey
    );
  }
}
const pS = `textarea, 
                    .Q2DataList-scrollarea, 
                    .q2-scroll, 
                    .q2-report-editor-root`, bS = `
                    .Q2DataList, 
                    .q2-scroll, 
                    .q2-report-editor-root`, ky = (c) => {
  if ("touches" in c && c.touches.length > 0)
    return { x: c.touches[0].clientX, y: c.touches[0].clientY };
  {
    const r = c;
    return { x: r.clientX, y: r.clientY };
  }
};
class SS extends tt.Component {
  constructor(r) {
    super(r), this._reduceRaf = null, this._reduceRunning = !1, this.set_resize_move_icons = () => {
      const u = this.dialogRef.current;
      if (u) {
        if (!this.props.q2form.frameless) {
          const s = u.querySelector(".dialog-header");
          s.style.cursor = this.props.q2form.moveable && !this.state.isMaximized ? "move" : "auto";
        }
        u.style.resize = this.props.q2form.resizeable && !this.state.isMaximized ? "both" : "none";
      }
    }, this.saveDialogState = () => {
      const u = this.dialogRef.current;
      if (!u) return;
      const s = {
        width: u.style.width,
        height: u.style.height,
        left: u.style.left,
        top: u.style.top
      };
      this.normalizePosition();
      const o = this.props.q2form.title.replace(/\[.*?\]/g, "");
      sf.set(`dialogState_${o}`, JSON.stringify(s));
    }, this.normalizePosition = () => {
      const u = this.dialogRef.current;
      if (!u) return;
      const s = u.offsetLeft, o = u.offsetTop;
      if (this.props.q2form.moveable && (s < 0 && (u.style.left = "0px"), o < 0 && (u.style.top = "0px"), u.parentElement)) {
        const { offsetHeight: h, offsetWidth: d } = u.parentElement, { offsetTop: y, offsetLeft: v } = u;
        v + u.offsetWidth > d && (u.style.width = `${d - v}px`), y + u.offsetHeight > h && (u.style.height = `${h - y}px`);
      }
    }, this.loadDialogState = () => {
      const u = this.dialogRef.current;
      if (!u) return;
      const s = this.props.q2form.title.replace(/\[.*?\]/g, ""), o = document.querySelector(".MainMenuBar")?.clientHeight || 0;
      u.parentElement && (u.parentElement.style.inset = `${o}px 0 0`);
      const h = this.props.q2form.restoreGeometry ? sf.get(`dialogState_${s}`) : "", { resizeable: d, moveable: y, width: v, height: g, left: M, top: z } = this.props.q2form, L = h ? JSON.parse(h) : {};
      d && (L.height || (L.height = this.props.q2form.height ? this.props.q2form.height : "30%"), L.width || (L.width = this.props.q2form.width ? this.props.q2form.width : "60%"));
      const $ = d && L.width ? L.width : String(v);
      let U = d && L.height ? L.height : String(g);
      !d && U.includes("%") && (U = `calc(${U} - 1px)`), console.log("---", $), u.style.width = $, u.style.height = U, y ? (L.left ? u.style.left = L.left : String(M) ? u.style.left = String(M) : u.parentElement ? u.style.left = `${u.parentElement?.clientWidth / 2 - u.clientWidth / 2}px` : u.style.left = "0px", L.top ? u.style.top = L.top : String(z) ? u.style.top = String(z) : u.parentElement ? u.style.top = `${u.parentElement?.clientHeight / 2 - u.clientHeight / 2}px` : u.style.top = "0px") : u.style.top = z != "" ? String(z) : `${(window.innerHeight - o - u.offsetHeight) / 2}px`, this.normalizePosition();
    }, this.onMoveMouseDown = (u) => {
      const { q2form: s, isTopDialog: o } = this.props, { isMaximized: h } = this.state;
      if (!s.moveable || h || !o) return;
      const d = this.dialogRef.current;
      if (!d) return;
      const y = ky(u), v = d.offsetLeft, g = d.offsetTop, M = (L) => {
        const $ = ky(L);
        d.style.left = `${v + $.x - y.x}px`, d.style.top = `${g + $.y - y.y}px`;
      }, z = () => {
        document.removeEventListener("mousemove", M), document.removeEventListener("mouseup", z), document.removeEventListener("touchmove", M), document.removeEventListener("touchend", z), this.saveDialogState();
      };
      document.addEventListener("mousemove", M), document.addEventListener("mouseup", z), document.addEventListener("touchmove", M, { passive: !1 }), document.addEventListener("touchend", z), "touches" in u && u.preventDefault();
    }, this.forceResize = () => {
      const u = this.dialogRef.current;
      u && (u.style.width = `${u.clientWidth + 1}px`, this.dialogHandleMouseUp(), u.style.width = `${u.clientWidth - 1}px`);
    }, this.fitHeights = () => {
      const u = this.dialogRef.current;
      if (!u) return;
      const s = Array.from(
        u.querySelectorAll(pS)
      );
      s.length && (s.forEach((o) => o.style.height = "50px"), requestAnimationFrame(() => this.fitHeightsContinue(u, s)));
    }, this.fitWidths = () => {
      const u = this.dialogRef.current;
      if (!u) return;
      const s = Array.from(u.querySelectorAll(bS));
      if (!s.length) return;
      const o = [];
      s.forEach((d) => {
        o.push({
          pan: d,
          overflowX: d.style.overflowX,
          height: d.style.height
        });
        const y = d.offsetHeight;
        d.style.height = `${y}px`, d.style.overflowX = "hidden", d.style.width = d.style.minWidth || "50px";
      });
      let h = 10;
      for (; u.scrollWidth <= u.clientWidth; ) {
        let d = !1;
        for (let v = 0; v < s.length; v++) {
          const g = s[v], M = parseFloat(getComputedStyle(g).width);
          if (g.style.width = `${M + h}px`, u.scrollWidth > u.clientWidth) {
            g.style.width = `${M}px`, h > 1 ? h = Math.max(1, Math.floor(h / 2)) : d = !0;
            break;
          }
        }
        if (d) break;
        u.clientWidth - u.scrollWidth < 50 && h > 1 && (h = 1);
      }
      o.forEach(({ pan: d, overflowX: y, height: v }) => {
        d.style.overflowX = y || "", d.style.height = v || "";
      });
    }, this.dialogHandleMouseUp = () => {
      if (!this.props.q2form.resizeable) return;
      const u = this.dialogRef.current;
      if (!u) return;
      const s = {
        clientWidth: u.clientWidth,
        clientHeight: u.clientHeight,
        scrollWidth: u.scrollWidth,
        scrollHeight: u.scrollHeight,
        childCount: u.children.length
      }, o = this.prevDialogSnapshotRef;
      if (o && o.clientWidth === s.clientWidth && o.clientHeight === s.clientHeight && // prev.scrollWidth === snapshot.scrollWidth &&
      // prev.scrollHeight === snapshot.scrollHeight &&
      o.childCount === s.childCount)
        return;
      this.fitHeights(), this.fitWidths(), this.prevDialogSnapshotRef = s;
      const h = u.scrollHeight > u.clientHeight, d = u.scrollWidth > u.clientWidth;
      h && (u.style.height = `${u.scrollHeight + 3}px`), d && (u.style.width = `${u.scrollWidth + 3}px`), this.prevDialogSnapshotRef = {
        clientWidth: u.clientWidth,
        clientHeight: u.clientHeight,
        scrollWidth: u.scrollWidth,
        scrollHeight: u.scrollHeight,
        childCount: u.children.length
      };
    }, this.handleMaximize = (u) => {
      u.stopPropagation();
      const s = this.dialogRef.current;
      if (s)
        if (this.state.isMaximized)
          this.prevStateRef && (s.style.width = this.prevStateRef.width, s.style.height = this.prevStateRef.height, s.style.left = this.prevStateRef.left, s.style.top = this.prevStateRef.top), this.setState({ isMaximized: !1 }, this.dialogHandleMouseUp);
        else {
          this.prevStateRef = {
            width: s.style.width,
            height: s.style.height,
            left: s.style.left,
            top: s.style.top
          }, s.style.left = "0px", s.style.top = "0px", s.style.width = s.parentElement?.offsetWidth + "px";
          const o = document.querySelector(".MainMenuBar")?.clientHeight || 0;
          s.style.height = window.innerHeight - o + "px", this.setState({ isMaximized: !0 }, this.dialogHandleMouseUp);
        }
    }, this.dialogRef = tt.createRef(), this.prevStateRef = null, this.prevDialogSnapshotRef = null, this.state = {
      isMaximized: !1
    }, this.props.q2form.check_frameless();
  }
  componentDidMount() {
    this.loadDialogState();
    const r = this.dialogRef.current;
    r && (r.style.overflow = this.props.q2form.resizeable ? "hidden" : "none", this.set_resize_move_icons(), r.addEventListener("mouseup", this.dialogHandleMouseUp), window.addEventListener("resize", this.fitHeights), this.props.q2form.resizeable || this.fitHeights(), this.props.q2form.resizeable && requestAnimationFrame(() => {
      this.dialogHandleMouseUp(), requestAnimationFrame(() => this.dialogHandleMouseUp());
    }));
  }
  componentDidUpdate() {
    this.set_resize_move_icons(), this.fitHeights();
  }
  componentWillUnmount() {
    const r = this.dialogRef.current;
    r && r.removeEventListener("mouseup", this.dialogHandleMouseUp);
  }
  fitHeightsContinue(r, u) {
    r.offsetHeight;
    let s = 10, o = 0;
    const h = window.innerHeight - r.clientTop;
    for (; r.scrollHeight <= r.clientHeight && o++ < h; ) {
      let d = !1;
      for (let v = 0; v < u.length; v++) {
        const g = u[v], M = parseFloat(getComputedStyle(g).height);
        if (g.style.height = `${M + s}px`, r.scrollHeight > r.clientHeight) {
          g.style.height = `${M}px`, r.offsetHeight, s > 1 ? s = Math.max(1, Math.floor(s / 2)) : d = !0;
          break;
        }
      }
      if (d) break;
      r.clientHeight - r.scrollHeight < 50 && s > 1 && (s = 1);
    }
    o >= h && console.warn("Dialog.fitHeights() stopped due to safety limit");
  }
  render() {
    const { onClose: r, q2form: u, isTopDialog: s, dialogIndex: o } = this.props, { isMaximized: h } = this.state;
    u.dialogIndex = o;
    const d = u.frameless;
    return u ? /* @__PURE__ */ S.jsx(
      "div",
      {
        className: "dialog-pre-container",
        style: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          inset: "0",
          position: "fixed"
        },
        children: /* @__PURE__ */ S.jsxs(
          "div",
          {
            className: `dialog-container Q2Dialog ${u.class} ${d ? "frameless" : ""}
                        ${s ? "" : "disabled"} ${h ? "maximized" : ""}
                        `,
            ref: this.dialogRef,
            children: [
              !d && /* @__PURE__ */ S.jsxs(
                "div",
                {
                  className: `dialog-header ${s ? "" : "disabled"}`,
                  onMouseDown: this.onMoveMouseDown,
                  onPointerDown: this.onMoveMouseDown,
                  children: [
                    /* @__PURE__ */ S.jsx("span", { className: "dialog-title", children: /* @__PURE__ */ S.jsx("b", { children: u.title }) }),
                    /* @__PURE__ */ S.jsxs("div", { children: [
                      u.hasMaxButton && u.resizeable && /* @__PURE__ */ S.jsx("button", { className: "max-button", onClick: this.handleMaximize, children: h ? /* @__PURE__ */ S.jsx(TS, {}) : /* @__PURE__ */ S.jsx(_S, {}) }),
                      /* @__PURE__ */ S.jsx("button", { className: "close-button", onClick: r, children: /* @__PURE__ */ S.jsx(CS, {}) })
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ S.jsx("div", { className: "dialog-content", children: /* @__PURE__ */ S.jsx(
                Ef,
                {
                  q2form: u,
                  onClose: r,
                  forceResize: this.forceResize,
                  isTopDialog: s
                }
              ) })
            ]
          },
          u.key
        )
      },
      u.key
    ) : null;
  }
}
function _S({ size: c = 24, color: r = "currentColor" }) {
  return /* @__PURE__ */ S.jsx(
    "svg",
    {
      width: c,
      height: c,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: r,
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: /* @__PURE__ */ S.jsx("rect", { x: "4", y: "6", width: "16", height: "16", rx: "2", ry: "2" })
    }
  );
}
function TS({ size: c = 24, color: r = "currentColor" }) {
  return /* @__PURE__ */ S.jsxs(
    "svg",
    {
      width: c,
      height: c,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: r,
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        /* @__PURE__ */ S.jsx("rect", { x: "4", y: "11", width: "11", height: "11", rx: "0", ry: "0" }),
        /* @__PURE__ */ S.jsx(
          "path",
          {
            d: "M8 10 V6 H20 V18 H16",
            rx: "2",
            ry: "2",
            fill: "none"
          }
        )
      ]
    }
  );
}
function CS({ size: c = 24, color: r = "currentColor" }) {
  return /* @__PURE__ */ S.jsx(
    "svg",
    {
      width: c,
      height: c,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: r,
      strokeWidth: "4",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: /* @__PURE__ */ S.jsx(
        "path",
        {
          d: "M4 7 L20 22 M 4 22 L20 7",
          rx: "2",
          ry: "2",
          fill: "none"
        }
      )
    }
  );
}
const Xe = class Xe extends it.Component {
  constructor(r) {
    super(r), this.detectTheme = () => {
      const u = localStorage.getItem("theme");
      return u === "dark" && document.documentElement.classList.add("dark"), u === "light" || u === "dark" ? u : window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
    }, this.handleBackButton = (u) => {
      u.preventDefault(), this.closeTopDialog();
    }, this.handleThemeChanged = () => {
      const u = this.detectTheme();
      this.setState({ theme: u });
    }, this.applyTheme = () => {
      document.documentElement.classList.toggle("dark", this.state.theme === "dark");
    }, this.toggleTheme = () => {
      this.setState((u) => {
        const s = u.theme === "light" ? "dark" : "light";
        return localStorage.setItem("theme", s), sf.set("theme", s, { expires: 365 * 10 }), document.documentElement.classList.toggle("dark", s === "dark"), { theme: s };
      });
    }, this.editUserProfile = () => {
      this.showMsg("Under construction...");
    }, this.login_logout = async () => {
      if (this.state.isLoggedIn)
        await this.handleLogout();
      else {
        if (this.state.isLoginDialogOpen) return;
        const u = new Pn("", "Auth Form", "authform", { class: "LP-AuthForm" });
        u.hasOkButton = !0, u.hasCancelButton = !0, u.hasMaxButton = !1, u.resizeable = !1, u.moveable = !1, u.width = window.innerWidth < 600 ? "100%" : "65%", u.height = "auto", u.top = "10%", u.add_control("/t", "Login"), u.add_control("email", "Email"), u.add_control("password", "Password", { pic: "*" }), u.add_control("/t", "Register"), u.add_control("reg_name", "Nickname"), u.add_control("reg_email", "Email"), u.add_control("reg_pass1", "Password", { pic: "*" }), u.add_control("reg_pass2", "Repeat password", { pic: "*" }), u.add_control("/"), u.add_control("/h"), u.add_control("remember", "Remember me", { control: "check", data: !0 }), u.hookInputChanged = (s) => {
          s.w.tabWidget.prevValue != s.s.tabWidget && s.setState({ okButtonText: s.s.tabWidget });
        }, u.hookSubmit = (s) => {
          const { tabWidget: o, email: h, password: d, remember: y } = s.s;
          if (o === "Login")
            this.handleLogin(h, d, y).then((v) => {
              v ? s.close() : console.log("Login failed");
            });
          else {
            const { reg_name: v, reg_email: g, reg_pass1: M, reg_pass2: z } = s.s;
            this.handleRegister(
              v,
              g,
              M,
              z,
              y
            ).then((L) => {
              L && s.close();
            });
          }
          return !1;
        }, u.hookClosed = () => (this.setState({ isLoginDialogOpen: !1 }), !0), this.setState(
          { isLoginDialogOpen: !0 },
          () => this.showDialog(u)
        );
      }
    }, this.handleRegister = async (u, s, o, h, d) => {
      try {
        const y = await $n("/register", {
          method: "POST",
          body: JSON.stringify({ name: u, email: s, password: o, password2: h, remember: d })
        });
        return d ? localStorage.setItem("rememberedEmail", s) : localStorage.removeItem("rememberedEmail"), "error" in y ? !1 : (this.setUser(), !0);
      } catch (y) {
        return console.error(y), this.showMsg("Register failed"), !1;
      }
    }, this.handleLogin = async (u, s, o) => {
      try {
        await $n("/login", {
          method: "POST",
          body: JSON.stringify({ email: u, password: s, remember: o })
        }), o ? localStorage.setItem("rememberedEmail", u) : localStorage.removeItem("rememberedEmail"), this.setUser();
      } catch (h) {
        return console.log(h), this.showMsg("Login failed"), !1;
      }
      return !0;
    }, this.handleLogout = async () => {
      try {
        await $n("/logout", { method: "POST" });
      } catch {
      }
      this.setState({ isLoggedIn: !1, userName: "", userUid: "" }, () => this.showHome());
    }, this.setUser = async () => {
      try {
        const u = await $n("/me");
        this.setState({
          userName: u.user.name,
          userUid: u.user.uid,
          isLoggedIn: !0,
          isLoginDialogOpen: !1
        }), this.closeAllDialogs();
      } catch {
        console.log("Not logged in");
      }
    }, this.showDialog = async (u) => {
      const s = `dlg_${Math.random().toString(36).substring(2, 9)}`;
      history.pushState({ key: s }, "", window.location.href), u.dialogIndex = s;
      const o = o2(u);
      await new Promise((h) => {
        this.setState(
          (d) => ({
            dialogs: { ...d.dialogs, [s]: o }
          }),
          // callback after render is committed
          () => {
            requestAnimationFrame(h);
          }
        );
      });
    }, this.closeDialog = (u) => {
      this.setState((s) => {
        const o = { ...s.dialogs };
        return delete o[u], { dialogs: o };
      }, () => {
        Object.keys(this.state.dialogs).length === 0 && this.showHome();
      });
    }, this.updateForm = async (u) => {
      const s = Object.entries(this.state.dialogs).find(([o, h]) => h.dialogIndex === u.dialogIndex);
      if (s) {
        const [o] = s;
        this.setState((h) => ({
          dialogs: {
            ...h.dialogs,
            [o]: u
          }
        }));
      }
    }, this.closeAllDialogs = () => {
      this.setState({ dialogs: {} }, () => this.showHome());
    }, this.closeTopDialog = () => {
      const u = Object.keys(this.state.dialogs);
      u.length > 0 && this.closeDialog(u[u.length - 1]);
    }, this.showHome = () => {
      Object.keys(this.state.dialogs).length === 0 && this.props.q2forms.forEach((u) => {
        u.key.startsWith("autorun") && this.showDialog(u);
      });
    }, this.hookMainMenuWidget = () => null, Xe.instance = this, this.state = {
      dialogs: {},
      theme: this.detectTheme(),
      isLoggedIn: !1,
      userName: "",
      userUid: "",
      isLoginDialogOpen: !1,
      isMobile: window.innerWidth < 600
    };
  }
  componentDidMount() {
    this.applyTheme(), window.addEventListener("q2-theme-changed", this.handleThemeChanged), this.setUser().then(() => this.showHome()), window.addEventListener("popstate", this.handleBackButton);
  }
  componentWillUnmount() {
    window.removeEventListener("q2-theme-changed", this.handleThemeChanged), window.removeEventListener("popstate", this.handleBackButton);
  }
  componentDidUpdate(r) {
    r.theme !== this.state.theme && this.applyTheme();
  }
  async showMsg(r, u, s) {
    let o, h;
    if (Array.isArray(u) ? (o = "Message", h = u) : (o = u || "Message", h = s), !Xe.instance) return null;
    console.log(Xe.instance.state.isMobile, "<<");
    const d = new Pn("", o, "msgbox", {
      hasMaxButton: !1,
      hasOkButton: !h,
      width: Xe.instance.state.isMobile ? "100%" : "65%",
      height: "45%",
      top: Xe.instance.state.isMobile ? "25%" : "10%",
      restoreGeometry: !1
    });
    if (d.add_control("/v"), d.add_control("text", "", {
      readonly: !0,
      data: r,
      control: "text"
    }), d.payload.button = 0, h) {
      let y = function(v) {
        d.payload.button = v, d.closeDialog();
      };
      d.add_control("/h", ""), d.add_control("/s", "", { stretch: 99 }), h.forEach((v, g) => {
        d.add_control(`btn${g}`, v, { control: "button", valid: () => y(g), style: { minWidth: "6rem" } });
      }), d.add_control("/");
    }
    return await Xe.instance.showDialog(d), d;
  }
  render() {
    const r = Object.keys(this.state.dialogs);
    return /* @__PURE__ */ S.jsxs(S.Fragment, { children: [
      /* @__PURE__ */ S.jsx(z2, { q2forms: this.props.q2forms, isLoggedIn: this.state.isLoggedIn }),
      r.map((u, s) => /* @__PURE__ */ S.jsx(
        SS,
        {
          onClose: () => this.closeDialog(u),
          q2form: this.state.dialogs[u],
          isTopDialog: s === r.length - 1,
          dialogIndex: u
        },
        u
      ))
    ] });
  }
};
Xe.instance = null, Xe.apiUrl = "";
let ka = Xe;
async function xS(c) {
  const r = (o) => Array.isArray(o) ? `[${o.map(r).join(",")}]` : o && typeof o == "object" ? `{${Object.keys(o).sort().map((h) => `${JSON.stringify(h)}:${r(o[h])}`).join(",")}}` : JSON.stringify(o), u = r(c), s = await crypto.subtle.digest(
    "SHA-256",
    new TextEncoder().encode(u.slice(0, 1024))
  );
  return Array.from(new Uint8Array(s)).map((o) => o.toString(16).padStart(2, "0")).join("");
}
const lf = (c, r, u) => {
  const s = { answers: r, passCount: u };
  try {
    localStorage.setItem(`trainer_stats_${c}`, JSON.stringify(s));
  } catch (o) {
    console.error("Failed to save stats to localStorage:", o);
  }
}, ES = (c) => {
  const r = localStorage.getItem(`trainer_stats_${c}`);
  if (r)
    try {
      const u = JSON.parse(r);
      return {
        answers: u.answers ?? {},
        passCount: u.passCount ?? 0
      };
    } catch {
      return { answers: {}, passCount: 0 };
    }
  return { answers: {}, passCount: 0 };
}, Yy = "...", AS = "-", DS = ({ data: c }) => {
  const [r, u] = tt.useState(null), [s, o] = tt.useState(
    () => Math.floor(Math.random() * c.length)
  ), [h, d] = tt.useState(""), [y, v] = tt.useState(!1), [g, M] = tt.useState(0), [z, L] = tt.useState({});
  tt.useEffect(() => {
    (async () => {
      const j = await xS(c);
      u(j);
      const Y = ES(j);
      L(Y.answers), M(Y.passCount);
    })();
  }, [c]);
  const $ = tt.useMemo(() => {
    const j = Object.values(z).length, Y = Object.values(z).filter((F) => F.correct).length;
    return {
      total: j,
      correct: Y,
      wrong: j - Y,
      percentage: j ? Math.round(Y / j * 100) : 0
    };
  }, [z]), U = c[s], Z = (j) => j.split(Yy).map((F) => F === AS ? "" : F), at = (j) => {
    const Y = /\{.*?\}/g, F = j.sentence.split(Y), I = [...j.sentence.matchAll(Y)], T = I.map(
      (G) => (G[0] === "{}" ? "-" : G[0]).replace(/[{}]/g, "")
    ).join("..."), R = j.words.includes(T) ? [...j.words] : [...j.words, T], B = [];
    for (let G = 0; G < F.length; G++)
      B.push({ isBlank: !1, text: F[G], index: G }), G < I.length && B.push({ isBlank: !0, text: I[G][0], index: G });
    return { sentenceParts: B, correctAnswer: T, words: R };
  }, { sentenceParts: J, correctAnswer: V, words: nt } = at(U), rt = V.split(Yy), xt = Z(h), Tt = () => {
    if (g > 0 && (g + 1) % 4 === 0) {
      const F = c.map((I, Ht) => Ht).filter((I) => !z[I] && I !== s);
      if (F.length > 0)
        return F[Math.floor(Math.random() * F.length)];
    }
    if (g > 0 && (g + 1) % 3 === 0) {
      const F = c.map((I, Ht) => Ht).filter((I) => z[I] && !z[I].correct && I !== s);
      if (F.length > 0)
        return F[Math.floor(Math.random() * F.length)];
    }
    const j = c.map((F, I) => I).filter((F) => {
      const I = z[F];
      return !(F === s || I?.correctCount && I?.correctCount >= 6 || I?.correct && I.lastPassNumber !== void 0 && g - I.lastPassNumber < 100);
    }), Y = j.length > 0 ? j : c.map((F, I) => I).filter((F) => F !== s);
    return Y[Math.floor(Math.random() * Y.length)];
  }, lt = async () => {
    M((Y) => {
      const F = Y + 1;
      return r && lf(r, z, F), F;
    });
    const j = Tt();
    o(j), d(""), v(!1);
  }, jt = (j) => {
    d(j);
  }, yt = () => {
    const j = h === V;
    v(!0);
    const Y = {
      ...z,
      [s]: {
        correct: j,
        lastPassNumber: j ? g : void 0,
        correctCount: j ? (z[s]?.correctCount ?? 0) + 1 : void 0
      }
    };
    return L(Y), r && lf(r, Y, g), j;
  };
  tt.useEffect(() => {
    h && !y && yt();
  }, [h]);
  const Zt = async () => {
    const j = await Ce()?.showMsg(
      "Darf ich die Statistik zurücksetzen?",
      "Question",
      ["Ok", "Cancel"]
    );
    await j?.waitForClose(), j?.payload.button === 0 && (v(!1), d(""), L({}), M(0), r && lf(r, {}, 0));
  };
  return /* @__PURE__ */ S.jsxs("div", { className: "exercise-container q2-scroll", children: [
    /* @__PURE__ */ S.jsxs("div", { className: "stats", children: [
      /* @__PURE__ */ S.jsxs("span", { children: [
        "Correct: ",
        $.correct
      ] }),
      /* @__PURE__ */ S.jsxs("span", { children: [
        "Wrong: ",
        $.wrong
      ] }),
      /* @__PURE__ */ S.jsxs("span", { children: [
        "Total: ",
        $.total
      ] }),
      /* @__PURE__ */ S.jsxs("span", { children: [
        "Success Rate: ",
        $.percentage,
        "%"
      ] })
    ] }),
    /* @__PURE__ */ S.jsx("div", { className: "one-word-sentence", children: J.map((j, Y) => {
      if (j.isBlank) {
        const F = xt[j.index] || "";
        let I = "blank";
        return y && (F === ((j && rt[j.index] === "-" ? "" : rt[j.index]) || "") ? I += " correct" : I += " wrong"), /* @__PURE__ */ S.jsx(
          "div",
          {
            className: I,
            children: F
          },
          Y
        );
      } else
        return /* @__PURE__ */ S.jsx("span", { children: j.text }, Y);
    }) }),
    /* @__PURE__ */ S.jsxs("div", { className: "key", children: [
      /* @__PURE__ */ S.jsx("h3", { children: U.key }),
      " ",
      /* @__PURE__ */ S.jsx("div", { className: "key-repeat-coount", children: z[s]?.correctCount })
    ] }),
    /* @__PURE__ */ S.jsx("div", { className: "word-pool", children: [...nt].sort(() => Math.random() - 0.5).map((j, Y) => /* @__PURE__ */ S.jsx(
      "div",
      {
        className: `word ${j === h ? "selected" : ""}`,
        onClick: () => jt(j),
        children: j
      },
      `${j}-${Y}`
    )) }),
    /* @__PURE__ */ S.jsxs("div", { className: "buttons", children: [
      /* @__PURE__ */ S.jsx("button", { onClick: lt, children: "Next" }),
      /* @__PURE__ */ S.jsx("button", { onClick: Zt, children: "Reset" })
    ] }),
    h && h !== V && /* @__PURE__ */ S.jsx("div", { className: "error-message", children: "Du hast einen Fehler gemacht. Versuch es noch mal." })
  ] });
}, MS = ({ data: c }) => {
  const [r, u] = it.useState([]), [s, o] = it.useState([]), [h, d] = it.useState([]), [y, v] = it.useState(!1), [g, M] = it.useState(null), z = it.useRef(null), L = it.useRef(null), [$, U] = it.useState(null), Z = it.useRef(null), at = it.useRef(null), J = 8, V = 300;
  it.useEffect(() => {
    if (!c?.slot_text?.length) return;
    const T = c.slot_text.map((H) => H.trim()).filter(Boolean);
    let R = 1, B = 1;
    const G = [], K = [];
    for (const H of T) {
      const k = /\{(.*?)\}/g, et = [], ut = [];
      let ft = 0, Ut;
      for (; Ut = k.exec(H); ) {
        ut.push(H.slice(ft, Ut.index));
        const Et = Ut[1];
        G.push({ id: R, text: Et }), et.push({ id: B, correctWord: Et, placedId: null }), R++, B++, ft = k.lastIndex;
      }
      ut.push(H.slice(ft)), K.push({ parts: ut, blanks: et });
    }
    c.wrong_answers && c.wrong_answers.forEach((H, k) => {
      G.push({ id: R + k, text: H });
    });
    const p = G.map((H) => H.id);
    for (let H = p.length - 1; H > 0; H--) {
      const k = Math.floor(Math.random() * (H + 1));
      [p[H], p[k]] = [p[k], p[H]];
    }
    o(G), u(K), d(p), v(!1);
    const O = K.findIndex((H) => H.blanks.length > 0);
    M({ sid: O, bid: 1 });
  }, [c]);
  const nt = (T) => T == null ? null : s.find((R) => R.id === T)?.text || null, rt = (T, R, B) => {
    const G = r.map((p) => ({
      ...p,
      blanks: p.blanks.map((O) => ({ ...O }))
    }));
    let K = [...h];
    if (R.type === "pool")
      K = K.filter((p) => p !== T);
    else if (R.type === "blank" && R.sid != null && R.bid != null) {
      const p = G[R.sid].blanks.find((O) => O.id === R.bid);
      p && (p.placedId = null);
    }
    if (B.type === "pool")
      K.includes(T) || K.push(T);
    else if (B.type === "blank" && B.sid != null && B.bid != null) {
      const p = G[B.sid].blanks.find((O) => O.id === B.bid);
      p && (p.placedId && !K.includes(p.placedId) && K.push(p.placedId), p.placedId = T);
    }
    u(G), d(K), window.dispatchEvent(new Event("resize"));
  }, xt = (T, R) => {
    const B = g?.sid === T && g?.bid === R.id;
    M(B ? null : { sid: T, bid: R.id });
  }, Tt = (T) => {
    if (!g) return;
    const { sid: R, bid: B } = g;
    rt(
      T,
      { type: "pool" },
      { type: "blank", sid: R, bid: B }
    );
    const G = r.findIndex((K, p) => p >= g.sid && K.blanks.find((O) => O.id > B));
    if (G) {
      const K = r[G].blanks.find((p) => p.id > B);
      K && M({ sid: G, bid: K.id });
    }
  }, lt = (T, R, B) => {
    T.dataTransfer.setData("wordId", R.toString()), T.dataTransfer.setData("source", JSON.stringify(B));
    try {
      T.dataTransfer.effectAllowed = "move";
    } catch {
    }
  }, jt = (T, R) => {
    T.preventDefault();
    const B = parseInt(T.dataTransfer.getData("wordId"), 10), G = JSON.parse(T.dataTransfer.getData("source"));
    Number.isNaN(B) || rt(B, G, R);
  }, yt = (T) => T.preventDefault(), Zt = (T, R, B) => {
    Z.current = {
      x: B.clientX,
      y: B.clientY,
      time: Date.now()
    };
    const G = (O) => {
      const H = O.touches[0];
      L.current = { lastX: H.clientX, lastY: H.clientY }, U({
        text: s.find((k) => k.id === T)?.text || "",
        x: H.clientX,
        y: H.clientY
      }), O.preventDefault();
    }, K = (O) => {
      const H = O.changedTouches && O.changedTouches[0] || B;
      if (Z.current) {
        const et = Math.abs(H.clientX - Z.current.x), ut = Math.abs(H.clientY - Z.current.y), ft = Date.now() - Z.current.time, Ut = et < J && ut < J && ft < V, Et = O.target;
        if (Ut && Et) {
          const Be = Date.now();
          if (at.current && Be - at.current < V) {
            rt(T, R, { type: "pool" }), at.current = null, p();
            return;
          }
          at.current = Be, Et.className.includes("word") && Tt(T), p();
          return;
        }
      }
      const k = document.elementFromPoint(H.clientX, H.clientY);
      j(k, T, R), U(null), p();
    }, p = () => {
      window.removeEventListener("touchmove", G, { passive: !1 }), window.removeEventListener("touchend", K), window.removeEventListener("touchcancel", K);
    };
    window.addEventListener("touchmove", G, { passive: !1 }), window.addEventListener("touchend", K), window.addEventListener("touchcancel", K), z.current = { id: T, source: R }, L.current = { lastX: B.clientX, lastY: B.clientY };
  }, j = (T, R, B) => {
    if (!T) return rt(R, B, { type: "pool" });
    const G = T.closest(".blank[data-sid][data-bid]");
    if (G) {
      const p = parseInt(G.getAttribute("data-sid"), 10), O = parseInt(G.getAttribute("data-bid"), 10);
      return rt(R, B, { type: "blank", sid: p, bid: O });
    }
    if (T.closest(".word-pool")) return rt(R, B, { type: "pool" });
    rt(R, B, { type: "pool" });
  }, Y = (T, R, B) => {
    const G = T.touches[0];
    G && Zt(R, B, G);
  }, F = h.map((T) => ({ id: T, text: nt(T) })), I = () => v(!0), Ht = () => {
    const T = s.map((B) => B.id).sort(() => Math.random() - 0.5), R = r.map((B) => ({
      ...B,
      blanks: B.blanks.map((G) => ({ ...G, placedId: null }))
    }));
    u(R), d(T), v(!1), M(null), window.dispatchEvent(new Event("resize"));
  };
  return /* @__PURE__ */ S.jsxs("div", { className: "exercise-container", children: [
    /* @__PURE__ */ S.jsx("h2", { children: "Ziehe die Wörter in die Lücken" }),
    /* @__PURE__ */ S.jsx("div", { className: "sentence-list q2-scroll", children: r.map((T, R) => /* @__PURE__ */ S.jsx("div", { className: "sentence", children: T.parts.map((B, G) => /* @__PURE__ */ S.jsxs(tt.Fragment, { children: [
      /* @__PURE__ */ S.jsx("span", { children: B }),
      G < T.blanks.length && /* @__PURE__ */ S.jsx(
        "div",
        {
          className: "blank" + (T.blanks[G].placedId ? y ? nt(T.blanks[G].placedId) === T.blanks[G].correctWord ? " correct" : " wrong" : " filled" : "") + // NEW: Selection class
          (g?.sid === R && g?.bid === T.blanks[G].id ? " selectedSlot" : ""),
          "data-sid": R,
          "data-bid": T.blanks[G].id,
          draggable: !!T.blanks[G].placedId,
          onClick: () => xt(R, T.blanks[G]),
          onDoubleClick: () => {
            rt(T.blanks[G].placedId, { type: "blank", sid: R, bid: T.blanks[G].id }, { type: "pool" });
          },
          onDragStart: (K) => lt(K, T.blanks[G].placedId, { type: "blank", sid: R, bid: T.blanks[G].id }),
          onDrop: (K) => jt(K, { type: "blank", sid: R, bid: T.blanks[G].id }),
          onDragOver: yt,
          onTouchStart: (K) => T.blanks[G].placedId && Y(K, T.blanks[G].placedId, { type: "blank", sid: R, bid: T.blanks[G].id }),
          children: nt(T.blanks[G].placedId) || "____"
        }
      )
    ] }, G)) }, R)) }),
    /* @__PURE__ */ S.jsx(
      "div",
      {
        className: "word-pool",
        onDrop: (T) => jt(T, { type: "pool" }),
        onDragOver: yt,
        children: F.length ? F.map((T) => /* @__PURE__ */ S.jsx(
          "div",
          {
            className: "word",
            draggable: !0,
            onDragStart: (R) => lt(R, T.id, { type: "pool" }),
            onClick: (R) => Tt(T.id),
            onTouchStart: (R) => Y(R, T.id, { type: "pool" }),
            children: T.text
          },
          T.id
        )) : /* @__PURE__ */ S.jsx("div", { className: "empty-msg", children: "Alle Wörter verwendet" })
      }
    ),
    /* @__PURE__ */ S.jsxs("div", { className: "buttons", children: [
      /* @__PURE__ */ S.jsx("button", { onClick: I, children: "Prüfen" }),
      /* @__PURE__ */ S.jsx("button", { onClick: Ht, children: "Zurücksetzen" })
    ] }),
    $ && /* @__PURE__ */ S.jsx(
      "div",
      {
        className: "drag-ghost",
        style: {
          left: $.x - 25,
          top: $.y - 25
        },
        children: $.text
      }
    )
  ] });
}, OS = ({ data: c }) => {
  const { slots_1: r, slots_2: u, answers: s } = c, o = Object.keys(r), h = Object.keys(u), [d, y] = it.useState({}), [v, g] = it.useState({}), [M, z] = it.useState(!1), L = it.useRef(null), $ = it.useRef(null), U = it.useRef(null), [Z, at] = it.useState(400), J = () => {
    if (L.current) {
      const j = window.innerHeight - L.current.getBoundingClientRect().top - 120;
      at(j > 200 ? j : 200);
    }
  };
  it.useEffect(() => (J(), window.addEventListener("resize", J), () => window.removeEventListener("resize", J)), []);
  const V = (j, Y) => {
    y({ ...d, [j]: Y });
  }, nt = (j, Y) => {
    g({ ...v, [j]: Y });
  }, rt = () => {
    y({}), g({}), z(!1);
  }, xt = (j) => {
    if (!M) return "border-gray";
    const Y = d[`${j}`];
    if (!Y) return "border-gray";
    const F = h.indexOf(Y), I = ["cyan", "blue", "green", "purple", "orange", "teal"];
    return `border-${I[F % I.length]}`;
  }, Tt = (j) => {
    if (!M) return "";
    const Y = s[`_${j}`], F = d[j];
    return F ? F === Y ? "bg-correct" : "bg-wrong" : "";
  }, lt = (j) => {
    if (!M) return "border-gray";
    const Y = Object.keys(d).filter(
      (Ht) => d[Ht] === j
    );
    if (Y.length === 0) return "border-gray";
    const F = o.indexOf(Y[0]), I = ["cyan", "blue", "green", "purple", "orange", "teal"];
    return `border-${I[F % I.length]}`;
  }, jt = (j) => {
    if (!M) return "";
    const Y = Object.keys(d).filter(
      (I) => d[I] === j
    );
    return Y.length === 0 ? "" : Y.some(
      (I) => s[`_${I}`] === j
    ) ? "bg-correct" : "bg-wrong";
  }, yt = (j) => {
    j.current && j.current.scrollBy({ left: -300, behavior: "smooth" });
  }, Zt = (j) => {
    j.current && j.current.scrollBy({ left: 300, behavior: "smooth" });
  };
  return /* @__PURE__ */ S.jsxs("div", { className: "lt-container", ref: L, children: [
    /* @__PURE__ */ S.jsxs("div", { style: { position: "relative" }, children: [
      /* @__PURE__ */ S.jsx("button", { className: "lt-arrow lt-arrow-left", onClick: () => yt($), children: "⟵" }),
      /* @__PURE__ */ S.jsx("button", { className: "lt-arrow lt-arrow-right", onClick: () => Zt($), children: "⟶" }),
      /* @__PURE__ */ S.jsx("div", { className: "lt-col", ref: $, style: { maxHeight: `${Z}px` }, children: o.map((j) => /* @__PURE__ */ S.jsx("div", { className: `lt-card ${xt(j)} ${Tt(j)}`, children: /* @__PURE__ */ S.jsxs("div", { className: "lt-content", children: [
        /* @__PURE__ */ S.jsxs("div", { className: "lt-inputs", children: [
          /* @__PURE__ */ S.jsxs(
            "select",
            {
              className: "lt-select",
              value: d[j] || "",
              onChange: (Y) => V(j, Y.target.value),
              children: [
                /* @__PURE__ */ S.jsx("option", { value: "", children: "Select..." }),
                h.map((Y) => /* @__PURE__ */ S.jsx("option", { value: Y, children: Y }, Y))
              ]
            }
          ),
          /* @__PURE__ */ S.jsx(
            "input",
            {
              type: "text",
              className: "lt-input1",
              placeholder: "Notes...",
              value: v[j] || "",
              onChange: (Y) => nt(j, Y.target.value)
            }
          )
        ] }),
        /* @__PURE__ */ S.jsxs("div", { className: "lt-text q2-scroll", children: [
          j,
          ". ",
          r[j]
        ] })
      ] }) }, j)) })
    ] }),
    /* @__PURE__ */ S.jsxs("div", { style: { position: "relative" }, children: [
      /* @__PURE__ */ S.jsx("button", { className: "lt-arrow lt-arrow-left", onClick: () => yt(U), children: "⟵" }),
      /* @__PURE__ */ S.jsx("button", { className: "lt-arrow lt-arrow-right", onClick: () => Zt(U), children: "⟶" }),
      /* @__PURE__ */ S.jsx("div", { className: "lt-col", ref: U, style: { maxHeight: `${Z}px` }, children: h.map((j) => /* @__PURE__ */ S.jsx("div", { className: `lt-card ${lt(j)} ${jt(j)}`, children: /* @__PURE__ */ S.jsxs("div", { className: "lt-content", children: [
        /* @__PURE__ */ S.jsx(
          "input",
          {
            type: "text",
            className: "lt-input2",
            placeholder: "Notes...",
            value: v[j] || "",
            onChange: (Y) => nt(j, Y.target.value)
          }
        ),
        /* @__PURE__ */ S.jsxs("div", { className: "lt-text q2-scroll", children: [
          j,
          ". ",
          u[j]
        ] })
      ] }) }, j)) })
    ] }),
    /* @__PURE__ */ S.jsxs("div", { className: "lt-buttons", children: [
      /* @__PURE__ */ S.jsx("button", { className: "lt-btn lt-btn-primary", onClick: () => z(!0), children: "Check" }),
      /* @__PURE__ */ S.jsx("button", { className: "lt-btn lt-btn-secondary", onClick: rt, children: "Reset" })
    ] })
  ] });
};
function zS() {
  return "/" + window.location.pathname.split("/").filter(Boolean)[0] + "/";
}
async function vp(c) {
  try {
    return await $n(`${zS()}/public/${c}`);
  } catch {
    return [];
  }
}
function gp() {
  const c = new Pn();
  return c.frameless = !0, c.moveable = !1, c.resizeable = !1, c;
}
function nf(c, r) {
  const u = gp();
  return u.add_control("/h"), u.add_control("label", "", {
    control: "widget",
    data: {
      widget: c,
      props: { data: r }
    }
  }), u;
}
async function jS(c) {
  const r = await vp(c);
  if (["key", "sentence", "words"].every((u) => u in r[0]))
    return nf(DS, r);
  if (["slot_text"].every((u) => u in r[0]))
    return nf(MS, r[0]);
  if (["slots_1", "slots_2", "answers"].every((u) => u in r[0]))
    return nf(OS, r[0]);
  console.log("Unknown format", Object.keys(r[0]));
}
async function yp(c, r) {
  const u = await vp(`${c}/folder_content.json`), s = [];
  if (u.folders && u.folders.forEach((o) => {
    s.push({ folder: o, title: `[ ${o} ]`, type: "folder" });
  }), u.files && u.files.forEach((o) => {
    s.push({ folder: o, title: o.replace(".json", ""), type: "file" });
  }), Object.keys(u).length === 0)
    return ka.instance?.showMsg("Ist leer"), null;
  {
    const o = new Pn("", "", "", {
      class: "content-selector",
      dataGridParams: {
        showCurrentRow: !1,
        showHeaders: !0,
        loader: () => s
      }
    });
    o.add_control("title"), o.hookDataGridRowClicked = (d) => {
      const { title: y, folder: v, type: g } = d.state.data[d.state.selectedRow], M = `${c}/${v}`;
      g === "folder" ? yp(M, `${r}<font color=red>/</font>${y}`).then((z) => {
        z?.showDialog();
      }) : jS(M).then((z) => {
        z?.showDialog();
      });
    };
    const h = gp();
    return h.class = " form-selector ", h.add_control("/v"), h.add_control("/h", "", { alignment: 5, class: "title-panel" }), h.add_control("label", r, { control: "label", class: "selector-title" }), h.add_control("/"), h.add_control("/v"), h.add_control("sc", "", { control: "list", data: o }), h;
  }
}
class RS extends ka {
  constructor(r) {
    super(r);
  }
  showHome = () => {
    yp("", "HOME").then((r) => {
      r && this.showDialog(r);
    });
  };
  render() {
    return /* @__PURE__ */ S.jsx("div", { children: super.render() });
  }
}
function qS(c, r = {}) {
  const u = Q1.createRoot(c);
  return u.render(
    /* @__PURE__ */ S.jsx(tt.StrictMode, { children: /* @__PURE__ */ S.jsx(RS, { q2forms: r.q2forms || [] }) })
  ), {
    destroy() {
      u.unmount();
    }
  };
}
export {
  qS as createQ2LPWidget
};
