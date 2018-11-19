/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function (e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function (e, t) {
    "use strict";
    var n = [], r = e.document, i = Object.getPrototypeOf, o = n.slice, a = n.concat, s = n.push, u = n.indexOf, l = {},
        c = l.toString, f = l.hasOwnProperty, p = f.toString, d = p.call(Object), h = {}, g = function e(t) {
            return "function" == typeof t && "number" != typeof t.nodeType
        }, y = function e(t) {
            return null != t && t === t.window
        }, v = {type: !0, src: !0, noModule: !0};

    function m(e, t, n) {
        var i, o = (t = t || r).createElement("script");
        if (o.text = e, n) for (i in v) n[i] && (o[i] = n[i]);
        t.head.appendChild(o).parentNode.removeChild(o)
    }

    function x(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[c.call(e)] || "object" : typeof e
    }

    var b = "3.3.1", w = function (e, t) {
        return new w.fn.init(e, t)
    }, T = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    w.fn = w.prototype = {
        jquery: "3.3.1", constructor: w, length: 0, toArray: function () {
            return o.call(this)
        }, get: function (e) {
            return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e]
        }, pushStack: function (e) {
            var t = w.merge(this.constructor(), e);
            return t.prevObject = this, t
        }, each: function (e) {
            return w.each(this, e)
        }, map: function (e) {
            return this.pushStack(w.map(this, function (t, n) {
                return e.call(t, n, t)
            }))
        }, slice: function () {
            return this.pushStack(o.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, eq: function (e) {
            var t = this.length, n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        }, end: function () {
            return this.prevObject || this.constructor()
        }, push: s, sort: n.sort, splice: n.splice
    }, w.extend = w.fn.extend = function () {
        var e, t, n, r, i, o, a = arguments[0] || {}, s = 1, u = arguments.length, l = !1;
        for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || g(a) || (a = {}), s === u && (a = this, s--); s < u; s++) if (null != (e = arguments[s])) for (t in e) n = a[t], a !== (r = e[t]) && (l && r && (w.isPlainObject(r) || (i = Array.isArray(r))) ? (i ? (i = !1, o = n && Array.isArray(n) ? n : []) : o = n && w.isPlainObject(n) ? n : {}, a[t] = w.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a
    }, w.extend({
        expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (e) {
            throw new Error(e)
        }, noop: function () {
        }, isPlainObject: function (e) {
            var t, n;
            return !(!e || "[object Object]" !== c.call(e)) && (!(t = i(e)) || "function" == typeof(n = f.call(t, "constructor") && t.constructor) && p.call(n) === d)
        }, isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
        }, globalEval: function (e) {
            m(e)
        }, each: function (e, t) {
            var n, r = 0;
            if (C(e)) {
                for (n = e.length; r < n; r++) if (!1 === t.call(e[r], r, e[r])) break
            } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
            return e
        }, trim: function (e) {
            return null == e ? "" : (e + "").replace(T, "")
        }, makeArray: function (e, t) {
            var n = t || [];
            return null != e && (C(Object(e)) ? w.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)), n
        }, inArray: function (e, t, n) {
            return null == t ? -1 : u.call(t, e, n)
        }, merge: function (e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
            return e.length = i, e
        }, grep: function (e, t, n) {
            for (var r, i = [], o = 0, a = e.length, s = !n; o < a; o++) (r = !t(e[o], o)) !== s && i.push(e[o]);
            return i
        }, map: function (e, t, n) {
            var r, i, o = 0, s = [];
            if (C(e)) for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && s.push(i); else for (o in e) null != (i = t(e[o], o, n)) && s.push(i);
            return a.apply([], s)
        }, guid: 1, support: h
    }), "function" == typeof Symbol && (w.fn[Symbol.iterator] = n[Symbol.iterator]), w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
        l["[object " + t + "]"] = t.toLowerCase()
    });

    function C(e) {
        var t = !!e && "length" in e && e.length, n = x(e);
        return !g(e) && !y(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }

    var E = function (e) {
        var t, n, r, i, o, a, s, u, l, c, f, p, d, h, g, y, v, m, x, b = "sizzle" + 1 * new Date, w = e.document, T = 0,
            C = 0, E = ae(), k = ae(), S = ae(), D = function (e, t) {
                return e === t && (f = !0), 0
            }, N = {}.hasOwnProperty, A = [], j = A.pop, q = A.push, L = A.push, H = A.slice, O = function (e, t) {
                for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
                return -1
            },
            P = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            M = "[\\x20\\t\\r\\n\\f]", R = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            I = "\\[" + M + "*(" + R + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + M + "*\\]",
            W = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + I + ")*)|.*)\\)|)",
            $ = new RegExp(M + "+", "g"), B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
            F = new RegExp("^" + M + "*," + M + "*"), _ = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
            z = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"), X = new RegExp(W),
            U = new RegExp("^" + R + "$"), V = {
                ID: new RegExp("^#(" + R + ")"),
                CLASS: new RegExp("^\\.(" + R + ")"),
                TAG: new RegExp("^(" + R + "|[*])"),
                ATTR: new RegExp("^" + I),
                PSEUDO: new RegExp("^" + W),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + P + ")$", "i"),
                needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
            }, G = /^(?:input|select|textarea|button)$/i, Y = /^h\d$/i, Q = /^[^{]+\{\s*\[native \w/,
            J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, K = /[+~]/,
            Z = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"), ee = function (e, t, n) {
                var r = "0x" + t - 65536;
                return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
            }, te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ne = function (e, t) {
                return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            }, re = function () {
                p()
            }, ie = me(function (e) {
                return !0 === e.disabled && ("form" in e || "label" in e)
            }, {dir: "parentNode", next: "legend"});
        try {
            L.apply(A = H.call(w.childNodes), w.childNodes), A[w.childNodes.length].nodeType
        } catch (e) {
            L = {
                apply: A.length ? function (e, t) {
                    q.apply(e, H.call(t))
                } : function (e, t) {
                    var n = e.length, r = 0;
                    while (e[n++] = t[r++]) ;
                    e.length = n - 1
                }
            }
        }

        function oe(e, t, r, i) {
            var o, s, l, c, f, h, v, m = t && t.ownerDocument, T = t ? t.nodeType : 9;
            if (r = r || [], "string" != typeof e || !e || 1 !== T && 9 !== T && 11 !== T) return r;
            if (!i && ((t ? t.ownerDocument || t : w) !== d && p(t), t = t || d, g)) {
                if (11 !== T && (f = J.exec(e))) if (o = f[1]) {
                    if (9 === T) {
                        if (!(l = t.getElementById(o))) return r;
                        if (l.id === o) return r.push(l), r
                    } else if (m && (l = m.getElementById(o)) && x(t, l) && l.id === o) return r.push(l), r
                } else {
                    if (f[2]) return L.apply(r, t.getElementsByTagName(e)), r;
                    if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return L.apply(r, t.getElementsByClassName(o)), r
                }
                if (n.qsa && !S[e + " "] && (!y || !y.test(e))) {
                    if (1 !== T) m = t, v = e; else if ("object" !== t.nodeName.toLowerCase()) {
                        (c = t.getAttribute("id")) ? c = c.replace(te, ne) : t.setAttribute("id", c = b), s = (h = a(e)).length;
                        while (s--) h[s] = "#" + c + " " + ve(h[s]);
                        v = h.join(","), m = K.test(e) && ge(t.parentNode) || t
                    }
                    if (v) try {
                        return L.apply(r, m.querySelectorAll(v)), r
                    } catch (e) {
                    } finally {
                        c === b && t.removeAttribute("id")
                    }
                }
            }
            return u(e.replace(B, "$1"), t, r, i)
        }

        function ae() {
            var e = [];

            function t(n, i) {
                return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i
            }

            return t
        }

        function se(e) {
            return e[b] = !0, e
        }

        function ue(e) {
            var t = d.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function le(e, t) {
            var n = e.split("|"), i = n.length;
            while (i--) r.attrHandle[n[i]] = t
        }

        function ce(e, t) {
            var n = t && e, r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n) while (n = n.nextSibling) if (n === t) return -1;
            return e ? 1 : -1
        }

        function fe(e) {
            return function (t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }

        function pe(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function de(e) {
            return function (t) {
                return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ie(t) === e : t.disabled === e : "label" in t && t.disabled === e
            }
        }

        function he(e) {
            return se(function (t) {
                return t = +t, se(function (n, r) {
                    var i, o = e([], n.length, t), a = o.length;
                    while (a--) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }

        function ge(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }

        n = oe.support = {}, o = oe.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }, p = oe.setDocument = function (e) {
            var t, i, a = e ? e.ownerDocument || e : w;
            return a !== d && 9 === a.nodeType && a.documentElement ? (d = a, h = d.documentElement, g = !o(d), w !== d && (i = d.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", re, !1) : i.attachEvent && i.attachEvent("onunload", re)), n.attributes = ue(function (e) {
                return e.className = "i", !e.getAttribute("className")
            }), n.getElementsByTagName = ue(function (e) {
                return e.appendChild(d.createComment("")), !e.getElementsByTagName("*").length
            }), n.getElementsByClassName = Q.test(d.getElementsByClassName), n.getById = ue(function (e) {
                return h.appendChild(e).id = b, !d.getElementsByName || !d.getElementsByName(b).length
            }), n.getById ? (r.filter.ID = function (e) {
                var t = e.replace(Z, ee);
                return function (e) {
                    return e.getAttribute("id") === t
                }
            }, r.find.ID = function (e, t) {
                if ("undefined" != typeof t.getElementById && g) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }) : (r.filter.ID = function (e) {
                var t = e.replace(Z, ee);
                return function (e) {
                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }, r.find.ID = function (e, t) {
                if ("undefined" != typeof t.getElementById && g) {
                    var n, r, i, o = t.getElementById(e);
                    if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                        i = t.getElementsByName(e), r = 0;
                        while (o = i[r++]) if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                    }
                    return []
                }
            }), r.find.TAG = n.getElementsByTagName ? function (e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
            } : function (e, t) {
                var n, r = [], i = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    while (n = o[i++]) 1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }, r.find.CLASS = n.getElementsByClassName && function (e, t) {
                if ("undefined" != typeof t.getElementsByClassName && g) return t.getElementsByClassName(e)
            }, v = [], y = [], (n.qsa = Q.test(d.querySelectorAll)) && (ue(function (e) {
                h.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && y.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || y.push("\\[" + M + "*(?:value|" + P + ")"), e.querySelectorAll("[id~=" + b + "-]").length || y.push("~="), e.querySelectorAll(":checked").length || y.push(":checked"), e.querySelectorAll("a#" + b + "+*").length || y.push(".#.+[+~]")
            }), ue(function (e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = d.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && y.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && y.push(":enabled", ":disabled"), h.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && y.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), y.push(",.*:")
            })), (n.matchesSelector = Q.test(m = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ue(function (e) {
                n.disconnectedMatch = m.call(e, "*"), m.call(e, "[s!='']:x"), v.push("!=", W)
            }), y = y.length && new RegExp(y.join("|")), v = v.length && new RegExp(v.join("|")), t = Q.test(h.compareDocumentPosition), x = t || Q.test(h.contains) ? function (e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function (e, t) {
                if (t) while (t = t.parentNode) if (t === e) return !0;
                return !1
            }, D = t ? function (e, t) {
                if (e === t) return f = !0, 0;
                var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return r || (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === d || e.ownerDocument === w && x(w, e) ? -1 : t === d || t.ownerDocument === w && x(w, t) ? 1 : c ? O(c, e) - O(c, t) : 0 : 4 & r ? -1 : 1)
            } : function (e, t) {
                if (e === t) return f = !0, 0;
                var n, r = 0, i = e.parentNode, o = t.parentNode, a = [e], s = [t];
                if (!i || !o) return e === d ? -1 : t === d ? 1 : i ? -1 : o ? 1 : c ? O(c, e) - O(c, t) : 0;
                if (i === o) return ce(e, t);
                n = e;
                while (n = n.parentNode) a.unshift(n);
                n = t;
                while (n = n.parentNode) s.unshift(n);
                while (a[r] === s[r]) r++;
                return r ? ce(a[r], s[r]) : a[r] === w ? -1 : s[r] === w ? 1 : 0
            }, d) : d
        }, oe.matches = function (e, t) {
            return oe(e, null, null, t)
        }, oe.matchesSelector = function (e, t) {
            if ((e.ownerDocument || e) !== d && p(e), t = t.replace(z, "='$1']"), n.matchesSelector && g && !S[t + " "] && (!v || !v.test(t)) && (!y || !y.test(t))) try {
                var r = m.call(e, t);
                if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
            } catch (e) {
            }
            return oe(t, d, null, [e]).length > 0
        }, oe.contains = function (e, t) {
            return (e.ownerDocument || e) !== d && p(e), x(e, t)
        }, oe.attr = function (e, t) {
            (e.ownerDocument || e) !== d && p(e);
            var i = r.attrHandle[t.toLowerCase()],
                o = i && N.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;
            return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
        }, oe.escape = function (e) {
            return (e + "").replace(te, ne)
        }, oe.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, oe.uniqueSort = function (e) {
            var t, r = [], i = 0, o = 0;
            if (f = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(D), f) {
                while (t = e[o++]) t === e[o] && (i = r.push(o));
                while (i--) e.splice(r[i], 1)
            }
            return c = null, e
        }, i = oe.getText = function (e) {
            var t, n = "", r = 0, o = e.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += i(e)
                } else if (3 === o || 4 === o) return e.nodeValue
            } else while (t = e[r++]) n += i(t);
            return n
        }, (r = oe.selectors = {
            cacheLength: 50,
            createPseudo: se,
            match: V,
            attrHandle: {},
            find: {},
            relative: {
                ">": {dir: "parentNode", first: !0},
                " ": {dir: "parentNode"},
                "+": {dir: "previousSibling", first: !0},
                "~": {dir: "previousSibling"}
            },
            preFilter: {
                ATTR: function (e) {
                    return e[1] = e[1].replace(Z, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                }, CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]), e
                }, PSEUDO: function (e) {
                    var t, n = !e[6] && e[2];
                    return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(Z, ee).toLowerCase();
                    return "*" === e ? function () {
                        return !0
                    } : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                }, CLASS: function (e) {
                    var t = E[e + " "];
                    return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && E(e, function (e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                }, ATTR: function (e, t, n) {
                    return function (r) {
                        var i = oe.attr(r, e);
                        return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace($, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"))
                    }
                }, CHILD: function (e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3), a = "last" !== e.slice(-4), s = "of-type" === t;
                    return 1 === r && 0 === i ? function (e) {
                        return !!e.parentNode
                    } : function (t, n, u) {
                        var l, c, f, p, d, h, g = o !== a ? "nextSibling" : "previousSibling", y = t.parentNode,
                            v = s && t.nodeName.toLowerCase(), m = !u && !s, x = !1;
                        if (y) {
                            if (o) {
                                while (g) {
                                    p = t;
                                    while (p = p[g]) if (s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
                                    h = g = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [a ? y.firstChild : y.lastChild], a && m) {
                                x = (d = (l = (c = (f = (p = y)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]) && l[2], p = d && y.childNodes[d];
                                while (p = ++d && p && p[g] || (x = d = 0) || h.pop()) if (1 === p.nodeType && ++x && p === t) {
                                    c[e] = [T, d, x];
                                    break
                                }
                            } else if (m && (x = d = (l = (c = (f = (p = t)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]), !1 === x) while (p = ++d && p && p[g] || (x = d = 0) || h.pop()) if ((s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) && ++x && (m && ((c = (f = p[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] = [T, x]), p === t)) break;
                            return (x -= i) === r || x % r == 0 && x / r >= 0
                        }
                    }
                }, PSEUDO: function (e, t) {
                    var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
                    return i[b] ? i(t) : i.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? se(function (e, n) {
                        var r, o = i(e, t), a = o.length;
                        while (a--) e[r = O(e, o[a])] = !(n[r] = o[a])
                    }) : function (e) {
                        return i(e, 0, n)
                    }) : i
                }
            },
            pseudos: {
                not: se(function (e) {
                    var t = [], n = [], r = s(e.replace(B, "$1"));
                    return r[b] ? se(function (e, t, n, i) {
                        var o, a = r(e, null, i, []), s = e.length;
                        while (s--) (o = a[s]) && (e[s] = !(t[s] = o))
                    }) : function (e, i, o) {
                        return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop()
                    }
                }), has: se(function (e) {
                    return function (t) {
                        return oe(e, t).length > 0
                    }
                }), contains: se(function (e) {
                    return e = e.replace(Z, ee), function (t) {
                        return (t.textContent || t.innerText || i(t)).indexOf(e) > -1
                    }
                }), lang: se(function (e) {
                    return U.test(e || "") || oe.error("unsupported lang: " + e), e = e.replace(Z, ee).toLowerCase(), function (t) {
                        var n;
                        do {
                            if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                        } while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                }), target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                }, root: function (e) {
                    return e === h
                }, focus: function (e) {
                    return e === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                }, enabled: de(!1), disabled: de(!0), checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                }, selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                }, empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                    return !0
                }, parent: function (e) {
                    return !r.pseudos.empty(e)
                }, header: function (e) {
                    return Y.test(e.nodeName)
                }, input: function (e) {
                    return G.test(e.nodeName)
                }, button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                }, text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                }, first: he(function () {
                    return [0]
                }), last: he(function (e, t) {
                    return [t - 1]
                }), eq: he(function (e, t, n) {
                    return [n < 0 ? n + t : n]
                }), even: he(function (e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e
                }), odd: he(function (e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e
                }), lt: he(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n; --r >= 0;) e.push(r);
                    return e
                }), gt: he(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                    return e
                })
            }
        }).pseudos.nth = r.pseudos.eq;
        for (t in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0}) r.pseudos[t] = fe(t);
        for (t in{submit: !0, reset: !0}) r.pseudos[t] = pe(t);

        function ye() {
        }

        ye.prototype = r.filters = r.pseudos, r.setFilters = new ye, a = oe.tokenize = function (e, t) {
            var n, i, o, a, s, u, l, c = k[e + " "];
            if (c) return t ? 0 : c.slice(0);
            s = e, u = [], l = r.preFilter;
            while (s) {
                n && !(i = F.exec(s)) || (i && (s = s.slice(i[0].length) || s), u.push(o = [])), n = !1, (i = _.exec(s)) && (n = i.shift(), o.push({
                    value: n,
                    type: i[0].replace(B, " ")
                }), s = s.slice(n.length));
                for (a in r.filter) !(i = V[a].exec(s)) || l[a] && !(i = l[a](i)) || (n = i.shift(), o.push({
                    value: n,
                    type: a,
                    matches: i
                }), s = s.slice(n.length));
                if (!n) break
            }
            return t ? s.length : s ? oe.error(e) : k(e, u).slice(0)
        };

        function ve(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r
        }

        function me(e, t, n) {
            var r = t.dir, i = t.next, o = i || r, a = n && "parentNode" === o, s = C++;
            return t.first ? function (t, n, i) {
                while (t = t[r]) if (1 === t.nodeType || a) return e(t, n, i);
                return !1
            } : function (t, n, u) {
                var l, c, f, p = [T, s];
                if (u) {
                    while (t = t[r]) if ((1 === t.nodeType || a) && e(t, n, u)) return !0
                } else while (t = t[r]) if (1 === t.nodeType || a) if (f = t[b] || (t[b] = {}), c = f[t.uniqueID] || (f[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t; else {
                    if ((l = c[o]) && l[0] === T && l[1] === s) return p[2] = l[2];
                    if (c[o] = p, p[2] = e(t, n, u)) return !0
                }
                return !1
            }
        }

        function xe(e) {
            return e.length > 1 ? function (t, n, r) {
                var i = e.length;
                while (i--) if (!e[i](t, n, r)) return !1;
                return !0
            } : e[0]
        }

        function be(e, t, n) {
            for (var r = 0, i = t.length; r < i; r++) oe(e, t[r], n);
            return n
        }

        function we(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++) (o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
            return a
        }

        function Te(e, t, n, r, i, o) {
            return r && !r[b] && (r = Te(r)), i && !i[b] && (i = Te(i, o)), se(function (o, a, s, u) {
                var l, c, f, p = [], d = [], h = a.length, g = o || be(t || "*", s.nodeType ? [s] : s, []),
                    y = !e || !o && t ? g : we(g, p, e, s, u), v = n ? i || (o ? e : h || r) ? [] : a : y;
                if (n && n(y, v, s, u), r) {
                    l = we(v, d), r(l, [], s, u), c = l.length;
                    while (c--) (f = l[c]) && (v[d[c]] = !(y[d[c]] = f))
                }
                if (o) {
                    if (i || e) {
                        if (i) {
                            l = [], c = v.length;
                            while (c--) (f = v[c]) && l.push(y[c] = f);
                            i(null, v = [], l, u)
                        }
                        c = v.length;
                        while (c--) (f = v[c]) && (l = i ? O(o, f) : p[c]) > -1 && (o[l] = !(a[l] = f))
                    }
                } else v = we(v === a ? v.splice(h, v.length) : v), i ? i(null, a, v, u) : L.apply(a, v)
            })
        }

        function Ce(e) {
            for (var t, n, i, o = e.length, a = r.relative[e[0].type], s = a || r.relative[" "], u = a ? 1 : 0, c = me(function (e) {
                return e === t
            }, s, !0), f = me(function (e) {
                return O(t, e) > -1
            }, s, !0), p = [function (e, n, r) {
                var i = !a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
                return t = null, i
            }]; u < o; u++) if (n = r.relative[e[u].type]) p = [me(xe(p), n)]; else {
                if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) {
                    for (i = ++u; i < o; i++) if (r.relative[e[i].type]) break;
                    return Te(u > 1 && xe(p), u > 1 && ve(e.slice(0, u - 1).concat({value: " " === e[u - 2].type ? "*" : ""})).replace(B, "$1"), n, u < i && Ce(e.slice(u, i)), i < o && Ce(e = e.slice(i)), i < o && ve(e))
                }
                p.push(n)
            }
            return xe(p)
        }

        function Ee(e, t) {
            var n = t.length > 0, i = e.length > 0, o = function (o, a, s, u, c) {
                var f, h, y, v = 0, m = "0", x = o && [], b = [], w = l, C = o || i && r.find.TAG("*", c),
                    E = T += null == w ? 1 : Math.random() || .1, k = C.length;
                for (c && (l = a === d || a || c); m !== k && null != (f = C[m]); m++) {
                    if (i && f) {
                        h = 0, a || f.ownerDocument === d || (p(f), s = !g);
                        while (y = e[h++]) if (y(f, a || d, s)) {
                            u.push(f);
                            break
                        }
                        c && (T = E)
                    }
                    n && ((f = !y && f) && v--, o && x.push(f))
                }
                if (v += m, n && m !== v) {
                    h = 0;
                    while (y = t[h++]) y(x, b, a, s);
                    if (o) {
                        if (v > 0) while (m--) x[m] || b[m] || (b[m] = j.call(u));
                        b = we(b)
                    }
                    L.apply(u, b), c && !o && b.length > 0 && v + t.length > 1 && oe.uniqueSort(u)
                }
                return c && (T = E, l = w), x
            };
            return n ? se(o) : o
        }

        return s = oe.compile = function (e, t) {
            var n, r = [], i = [], o = S[e + " "];
            if (!o) {
                t || (t = a(e)), n = t.length;
                while (n--) (o = Ce(t[n]))[b] ? r.push(o) : i.push(o);
                (o = S(e, Ee(i, r))).selector = e
            }
            return o
        }, u = oe.select = function (e, t, n, i) {
            var o, u, l, c, f, p = "function" == typeof e && e, d = !i && a(e = p.selector || e);
            if (n = n || [], 1 === d.length) {
                if ((u = d[0] = d[0].slice(0)).length > 2 && "ID" === (l = u[0]).type && 9 === t.nodeType && g && r.relative[u[1].type]) {
                    if (!(t = (r.find.ID(l.matches[0].replace(Z, ee), t) || [])[0])) return n;
                    p && (t = t.parentNode), e = e.slice(u.shift().value.length)
                }
                o = V.needsContext.test(e) ? 0 : u.length;
                while (o--) {
                    if (l = u[o], r.relative[c = l.type]) break;
                    if ((f = r.find[c]) && (i = f(l.matches[0].replace(Z, ee), K.test(u[0].type) && ge(t.parentNode) || t))) {
                        if (u.splice(o, 1), !(e = i.length && ve(u))) return L.apply(n, i), n;
                        break
                    }
                }
            }
            return (p || s(e, d))(i, t, !g, n, !t || K.test(e) && ge(t.parentNode) || t), n
        }, n.sortStable = b.split("").sort(D).join("") === b, n.detectDuplicates = !!f, p(), n.sortDetached = ue(function (e) {
            return 1 & e.compareDocumentPosition(d.createElement("fieldset"))
        }), ue(function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || le("type|href|height|width", function (e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), n.attributes && ue(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || le("value", function (e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), ue(function (e) {
            return null == e.getAttribute("disabled")
        }) || le(P, function (e, t, n) {
            var r;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), oe
    }(e);
    w.find = E, w.expr = E.selectors, w.expr[":"] = w.expr.pseudos, w.uniqueSort = w.unique = E.uniqueSort, w.text = E.getText, w.isXMLDoc = E.isXML, w.contains = E.contains, w.escapeSelector = E.escape;
    var k = function (e, t, n) {
        var r = [], i = void 0 !== n;
        while ((e = e[t]) && 9 !== e.nodeType) if (1 === e.nodeType) {
            if (i && w(e).is(n)) break;
            r.push(e)
        }
        return r
    }, S = function (e, t) {
        for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
        return n
    }, D = w.expr.match.needsContext;

    function N(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }

    var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function j(e, t, n) {
        return g(t) ? w.grep(e, function (e, r) {
            return !!t.call(e, r, e) !== n
        }) : t.nodeType ? w.grep(e, function (e) {
            return e === t !== n
        }) : "string" != typeof t ? w.grep(e, function (e) {
            return u.call(t, e) > -1 !== n
        }) : w.filter(t, e, n)
    }

    w.filter = function (e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? w.find.matchesSelector(r, e) ? [r] : [] : w.find.matches(e, w.grep(t, function (e) {
            return 1 === e.nodeType
        }))
    }, w.fn.extend({
        find: function (e) {
            var t, n, r = this.length, i = this;
            if ("string" != typeof e) return this.pushStack(w(e).filter(function () {
                for (t = 0; t < r; t++) if (w.contains(i[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < r; t++) w.find(e, i[t], n);
            return r > 1 ? w.uniqueSort(n) : n
        }, filter: function (e) {
            return this.pushStack(j(this, e || [], !1))
        }, not: function (e) {
            return this.pushStack(j(this, e || [], !0))
        }, is: function (e) {
            return !!j(this, "string" == typeof e && D.test(e) ? w(e) : e || [], !1).length
        }
    });
    var q, L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (w.fn.init = function (e, t, n) {
        var i, o;
        if (!e) return this;
        if (n = n || q, "string" == typeof e) {
            if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : L.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (i[1]) {
                if (t = t instanceof w ? t[0] : t, w.merge(this, w.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : r, !0)), A.test(i[1]) && w.isPlainObject(t)) for (i in t) g(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                return this
            }
            return (o = r.getElementById(i[2])) && (this[0] = o, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : g(e) ? void 0 !== n.ready ? n.ready(e) : e(w) : w.makeArray(e, this)
    }).prototype = w.fn, q = w(r);
    var H = /^(?:parents|prev(?:Until|All))/, O = {children: !0, contents: !0, next: !0, prev: !0};
    w.fn.extend({
        has: function (e) {
            var t = w(e, this), n = t.length;
            return this.filter(function () {
                for (var e = 0; e < n; e++) if (w.contains(this, t[e])) return !0
            })
        }, closest: function (e, t) {
            var n, r = 0, i = this.length, o = [], a = "string" != typeof e && w(e);
            if (!D.test(e)) for (; r < i; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && w.find.matchesSelector(n, e))) {
                o.push(n);
                break
            }
            return this.pushStack(o.length > 1 ? w.uniqueSort(o) : o)
        }, index: function (e) {
            return e ? "string" == typeof e ? u.call(w(e), this[0]) : u.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (e, t) {
            return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))))
        }, addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    });

    function P(e, t) {
        while ((e = e[t]) && 1 !== e.nodeType) ;
        return e
    }

    w.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        }, parents: function (e) {
            return k(e, "parentNode")
        }, parentsUntil: function (e, t, n) {
            return k(e, "parentNode", n)
        }, next: function (e) {
            return P(e, "nextSibling")
        }, prev: function (e) {
            return P(e, "previousSibling")
        }, nextAll: function (e) {
            return k(e, "nextSibling")
        }, prevAll: function (e) {
            return k(e, "previousSibling")
        }, nextUntil: function (e, t, n) {
            return k(e, "nextSibling", n)
        }, prevUntil: function (e, t, n) {
            return k(e, "previousSibling", n)
        }, siblings: function (e) {
            return S((e.parentNode || {}).firstChild, e)
        }, children: function (e) {
            return S(e.firstChild)
        }, contents: function (e) {
            return N(e, "iframe") ? e.contentDocument : (N(e, "template") && (e = e.content || e), w.merge([], e.childNodes))
        }
    }, function (e, t) {
        w.fn[e] = function (n, r) {
            var i = w.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = w.filter(r, i)), this.length > 1 && (O[e] || w.uniqueSort(i), H.test(e) && i.reverse()), this.pushStack(i)
        }
    });
    var M = /[^\x20\t\r\n\f]+/g;

    function R(e) {
        var t = {};
        return w.each(e.match(M) || [], function (e, n) {
            t[n] = !0
        }), t
    }

    w.Callbacks = function (e) {
        e = "string" == typeof e ? R(e) : w.extend({}, e);
        var t, n, r, i, o = [], a = [], s = -1, u = function () {
            for (i = i || e.once, r = t = !0; a.length; s = -1) {
                n = a.shift();
                while (++s < o.length) !1 === o[s].apply(n[0], n[1]) && e.stopOnFalse && (s = o.length, n = !1)
            }
            e.memory || (n = !1), t = !1, i && (o = n ? [] : "")
        }, l = {
            add: function () {
                return o && (n && !t && (s = o.length - 1, a.push(n)), function t(n) {
                    w.each(n, function (n, r) {
                        g(r) ? e.unique && l.has(r) || o.push(r) : r && r.length && "string" !== x(r) && t(r)
                    })
                }(arguments), n && !t && u()), this
            }, remove: function () {
                return w.each(arguments, function (e, t) {
                    var n;
                    while ((n = w.inArray(t, o, n)) > -1) o.splice(n, 1), n <= s && s--
                }), this
            }, has: function (e) {
                return e ? w.inArray(e, o) > -1 : o.length > 0
            }, empty: function () {
                return o && (o = []), this
            }, disable: function () {
                return i = a = [], o = n = "", this
            }, disabled: function () {
                return !o
            }, lock: function () {
                return i = a = [], n || t || (o = n = ""), this
            }, locked: function () {
                return !!i
            }, fireWith: function (e, n) {
                return i || (n = [e, (n = n || []).slice ? n.slice() : n], a.push(n), t || u()), this
            }, fire: function () {
                return l.fireWith(this, arguments), this
            }, fired: function () {
                return !!r
            }
        };
        return l
    };

    function I(e) {
        return e
    }

    function W(e) {
        throw e
    }

    function $(e, t, n, r) {
        var i;
        try {
            e && g(i = e.promise) ? i.call(e).done(t).fail(n) : e && g(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }

    w.extend({
        Deferred: function (t) {
            var n = [["notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2], ["resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected"]],
                r = "pending", i = {
                    state: function () {
                        return r
                    }, always: function () {
                        return o.done(arguments).fail(arguments), this
                    }, "catch": function (e) {
                        return i.then(null, e)
                    }, pipe: function () {
                        var e = arguments;
                        return w.Deferred(function (t) {
                            w.each(n, function (n, r) {
                                var i = g(e[r[4]]) && e[r[4]];
                                o[r[1]](function () {
                                    var e = i && i.apply(this, arguments);
                                    e && g(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    }, then: function (t, r, i) {
                        var o = 0;

                        function a(t, n, r, i) {
                            return function () {
                                var s = this, u = arguments, l = function () {
                                    var e, l;
                                    if (!(t < o)) {
                                        if ((e = r.apply(s, u)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                        l = e && ("object" == typeof e || "function" == typeof e) && e.then, g(l) ? i ? l.call(e, a(o, n, I, i), a(o, n, W, i)) : (o++, l.call(e, a(o, n, I, i), a(o, n, W, i), a(o, n, I, n.notifyWith))) : (r !== I && (s = void 0, u = [e]), (i || n.resolveWith)(s, u))
                                    }
                                }, c = i ? l : function () {
                                    try {
                                        l()
                                    } catch (e) {
                                        w.Deferred.exceptionHook && w.Deferred.exceptionHook(e, c.stackTrace), t + 1 >= o && (r !== W && (s = void 0, u = [e]), n.rejectWith(s, u))
                                    }
                                };
                                t ? c() : (w.Deferred.getStackHook && (c.stackTrace = w.Deferred.getStackHook()), e.setTimeout(c))
                            }
                        }

                        return w.Deferred(function (e) {
                            n[0][3].add(a(0, e, g(i) ? i : I, e.notifyWith)), n[1][3].add(a(0, e, g(t) ? t : I)), n[2][3].add(a(0, e, g(r) ? r : W))
                        }).promise()
                    }, promise: function (e) {
                        return null != e ? w.extend(e, i) : i
                    }
                }, o = {};
            return w.each(n, function (e, t) {
                var a = t[2], s = t[5];
                i[t[1]] = a.add, s && a.add(function () {
                    r = s
                }, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), a.add(t[3].fire), o[t[0]] = function () {
                    return o[t[0] + "With"](this === o ? void 0 : this, arguments), this
                }, o[t[0] + "With"] = a.fireWith
            }), i.promise(o), t && t.call(o, o), o
        }, when: function (e) {
            var t = arguments.length, n = t, r = Array(n), i = o.call(arguments), a = w.Deferred(), s = function (e) {
                return function (n) {
                    r[e] = this, i[e] = arguments.length > 1 ? o.call(arguments) : n, --t || a.resolveWith(r, i)
                }
            };
            if (t <= 1 && ($(e, a.done(s(n)).resolve, a.reject, !t), "pending" === a.state() || g(i[n] && i[n].then))) return a.then();
            while (n--) $(i[n], s(n), a.reject);
            return a.promise()
        }
    });
    var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    w.Deferred.exceptionHook = function (t, n) {
        e.console && e.console.warn && t && B.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
    }, w.readyException = function (t) {
        e.setTimeout(function () {
            throw t
        })
    };
    var F = w.Deferred();
    w.fn.ready = function (e) {
        return F.then(e)["catch"](function (e) {
            w.readyException(e)
        }), this
    }, w.extend({
        isReady: !1, readyWait: 1, ready: function (e) {
            (!0 === e ? --w.readyWait : w.isReady) || (w.isReady = !0, !0 !== e && --w.readyWait > 0 || F.resolveWith(r, [w]))
        }
    }), w.ready.then = F.then;

    function _() {
        r.removeEventListener("DOMContentLoaded", _), e.removeEventListener("load", _), w.ready()
    }

    "complete" === r.readyState || "loading" !== r.readyState && !r.documentElement.doScroll ? e.setTimeout(w.ready) : (r.addEventListener("DOMContentLoaded", _), e.addEventListener("load", _));
    var z = function (e, t, n, r, i, o, a) {
        var s = 0, u = e.length, l = null == n;
        if ("object" === x(n)) {
            i = !0;
            for (s in n) z(e, t, s, n[s], !0, o, a)
        } else if (void 0 !== r && (i = !0, g(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function (e, t, n) {
            return l.call(w(e), n)
        })), t)) for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
        return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
    }, X = /^-ms-/, U = /-([a-z])/g;

    function V(e, t) {
        return t.toUpperCase()
    }

    function G(e) {
        return e.replace(X, "ms-").replace(U, V)
    }

    var Y = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };

    function Q() {
        this.expando = w.expando + Q.uid++
    }

    Q.uid = 1, Q.prototype = {
        cache: function (e) {
            var t = e[this.expando];
            return t || (t = {}, Y(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        }, set: function (e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t) i[G(t)] = n; else for (r in t) i[G(r)] = t[r];
            return i
        }, get: function (e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][G(t)]
        }, access: function (e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        }, remove: function (e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(G) : (t = G(t)) in r ? [t] : t.match(M) || []).length;
                    while (n--) delete r[t[n]]
                }
                (void 0 === t || w.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        }, hasData: function (e) {
            var t = e[this.expando];
            return void 0 !== t && !w.isEmptyObject(t)
        }
    };
    var J = new Q, K = new Q, Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, ee = /[A-Z]/g;

    function te(e) {
        return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Z.test(e) ? JSON.parse(e) : e)
    }

    function ne(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(ee, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
            try {
                n = te(n)
            } catch (e) {
            }
            K.set(e, t, n)
        } else n = void 0;
        return n
    }

    w.extend({
        hasData: function (e) {
            return K.hasData(e) || J.hasData(e)
        }, data: function (e, t, n) {
            return K.access(e, t, n)
        }, removeData: function (e, t) {
            K.remove(e, t)
        }, _data: function (e, t, n) {
            return J.access(e, t, n)
        }, _removeData: function (e, t) {
            J.remove(e, t)
        }
    }), w.fn.extend({
        data: function (e, t) {
            var n, r, i, o = this[0], a = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (i = K.get(o), 1 === o.nodeType && !J.get(o, "hasDataAttrs"))) {
                    n = a.length;
                    while (n--) a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = G(r.slice(5)), ne(o, r, i[r]));
                    J.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each(function () {
                K.set(this, e)
            }) : z(this, function (t) {
                var n;
                if (o && void 0 === t) {
                    if (void 0 !== (n = K.get(o, e))) return n;
                    if (void 0 !== (n = ne(o, e))) return n
                } else this.each(function () {
                    K.set(this, e, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        }, removeData: function (e) {
            return this.each(function () {
                K.remove(this, e)
            })
        }
    }), w.extend({
        queue: function (e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = J.get(e, t), n && (!r || Array.isArray(n) ? r = J.access(e, t, w.makeArray(n)) : r.push(n)), r || []
        }, dequeue: function (e, t) {
            t = t || "fx";
            var n = w.queue(e, t), r = n.length, i = n.shift(), o = w._queueHooks(e, t), a = function () {
                w.dequeue(e, t)
            };
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
        }, _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return J.get(e, n) || J.access(e, n, {
                empty: w.Callbacks("once memory").add(function () {
                    J.remove(e, [t + "queue", n])
                })
            })
        }
    }), w.fn.extend({
        queue: function (e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? w.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                var n = w.queue(this, e, t);
                w._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && w.dequeue(this, e)
            })
        }, dequeue: function (e) {
            return this.each(function () {
                w.dequeue(this, e)
            })
        }, clearQueue: function (e) {
            return this.queue(e || "fx", [])
        }, promise: function (e, t) {
            var n, r = 1, i = w.Deferred(), o = this, a = this.length, s = function () {
                --r || i.resolveWith(o, [o])
            };
            "string" != typeof e && (t = e, e = void 0), e = e || "fx";
            while (a--) (n = J.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t)
        }
    });
    var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, ie = new RegExp("^(?:([+-])=|)(" + re + ")([a-z%]*)$", "i"),
        oe = ["Top", "Right", "Bottom", "Left"], ae = function (e, t) {
            return "none" === (e = t || e).style.display || "" === e.style.display && w.contains(e.ownerDocument, e) && "none" === w.css(e, "display")
        }, se = function (e, t, n, r) {
            var i, o, a = {};
            for (o in t) a[o] = e.style[o], e.style[o] = t[o];
            i = n.apply(e, r || []);
            for (o in t) e.style[o] = a[o];
            return i
        };

    function ue(e, t, n, r) {
        var i, o, a = 20, s = r ? function () {
                return r.cur()
            } : function () {
                return w.css(e, t, "")
            }, u = s(), l = n && n[3] || (w.cssNumber[t] ? "" : "px"),
            c = (w.cssNumber[t] || "px" !== l && +u) && ie.exec(w.css(e, t));
        if (c && c[3] !== l) {
            u /= 2, l = l || c[3], c = +u || 1;
            while (a--) w.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
            c *= 2, w.style(e, t, c + l), n = n || []
        }
        return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
    }

    var le = {};

    function ce(e) {
        var t, n = e.ownerDocument, r = e.nodeName, i = le[r];
        return i || (t = n.body.appendChild(n.createElement(r)), i = w.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), le[r] = i, i)
    }

    function fe(e, t) {
        for (var n, r, i = [], o = 0, a = e.length; o < a; o++) (r = e[o]).style && (n = r.style.display, t ? ("none" === n && (i[o] = J.get(r, "display") || null, i[o] || (r.style.display = "")), "" === r.style.display && ae(r) && (i[o] = ce(r))) : "none" !== n && (i[o] = "none", J.set(r, "display", n)));
        for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]);
        return e
    }

    w.fn.extend({
        show: function () {
            return fe(this, !0)
        }, hide: function () {
            return fe(this)
        }, toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                ae(this) ? w(this).show() : w(this).hide()
            })
        }
    });
    var pe = /^(?:checkbox|radio)$/i, de = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i, he = /^$|^module$|\/(?:java|ecma)script/i,
        ge = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    ge.optgroup = ge.option, ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td;

    function ye(e, t) {
        var n;
        return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && N(e, t) ? w.merge([e], n) : n
    }

    function ve(e, t) {
        for (var n = 0, r = e.length; n < r; n++) J.set(e[n], "globalEval", !t || J.get(t[n], "globalEval"))
    }

    var me = /<|&#?\w+;/;

    function xe(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++) if ((o = e[d]) || 0 === o) if ("object" === x(o)) w.merge(p, o.nodeType ? [o] : o); else if (me.test(o)) {
            a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + w.htmlPrefilter(o) + u[2], c = u[0];
            while (c--) a = a.lastChild;
            w.merge(p, a.childNodes), (a = f.firstChild).textContent = ""
        } else p.push(t.createTextNode(o));
        f.textContent = "", d = 0;
        while (o = p[d++]) if (r && w.inArray(o, r) > -1) i && i.push(o); else if (l = w.contains(o.ownerDocument, o), a = ye(f.appendChild(o), "script"), l && ve(a), n) {
            c = 0;
            while (o = a[c++]) he.test(o.type || "") && n.push(o)
        }
        return f
    }

    !function () {
        var e = r.createDocumentFragment().appendChild(r.createElement("div")), t = r.createElement("input");
        t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), e.appendChild(t), h.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", h.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
    }();
    var be = r.documentElement, we = /^key/, Te = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Ce = /^([^.]*)(?:\.(.+)|)/;

    function Ee() {
        return !0
    }

    function ke() {
        return !1
    }

    function Se() {
        try {
            return r.activeElement
        } catch (e) {
        }
    }

    function De(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            "string" != typeof n && (r = r || n, n = void 0);
            for (s in t) De(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = ke; else if (!i) return e;
        return 1 === o && (a = i, (i = function (e) {
            return w().off(e), a.apply(this, arguments)
        }).guid = a.guid || (a.guid = w.guid++)), e.each(function () {
            w.event.add(this, t, i, r, n)
        })
    }

    w.event = {
        global: {}, add: function (e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, y = J.get(e);
            if (y) {
                n.handler && (n = (o = n).handler, i = o.selector), i && w.find.matchesSelector(be, i), n.guid || (n.guid = w.guid++), (u = y.events) || (u = y.events = {}), (a = y.handle) || (a = y.handle = function (t) {
                    return "undefined" != typeof w && w.event.triggered !== t.type ? w.event.dispatch.apply(e, arguments) : void 0
                }), l = (t = (t || "").match(M) || [""]).length;
                while (l--) d = g = (s = Ce.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = w.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = w.event.special[d] || {}, c = w.extend({
                    type: d,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && w.expr.match.needsContext.test(i),
                    namespace: h.join(".")
                }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(d, a)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), w.event.global[d] = !0)
            }
        }, remove: function (e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, y = J.hasData(e) && J.get(e);
            if (y && (u = y.events)) {
                l = (t = (t || "").match(M) || [""]).length;
                while (l--) if (s = Ce.exec(t[l]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d) {
                    f = w.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;
                    while (o--) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                    a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, y.handle) || w.removeEvent(e, d, y.handle), delete u[d])
                } else for (d in u) w.event.remove(e, d + t[l], n, r, !0);
                w.isEmptyObject(u) && J.remove(e, "handle events")
            }
        }, dispatch: function (e) {
            var t = w.event.fix(e), n, r, i, o, a, s, u = new Array(arguments.length),
                l = (J.get(this, "events") || {})[t.type] || [], c = w.event.special[t.type] || {};
            for (u[0] = t, n = 1; n < arguments.length; n++) u[n] = arguments[n];
            if (t.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, t)) {
                s = w.event.handlers.call(this, t, l), n = 0;
                while ((o = s[n++]) && !t.isPropagationStopped()) {
                    t.currentTarget = o.elem, r = 0;
                    while ((a = o.handlers[r++]) && !t.isImmediatePropagationStopped()) t.rnamespace && !t.rnamespace.test(a.namespace) || (t.handleObj = a, t.data = a.data, void 0 !== (i = ((w.event.special[a.origType] || {}).handle || a.handler).apply(o.elem, u)) && !1 === (t.result = i) && (t.preventDefault(), t.stopPropagation()))
                }
                return c.postDispatch && c.postDispatch.call(this, t), t.result
            }
        }, handlers: function (e, t) {
            var n, r, i, o, a, s = [], u = t.delegateCount, l = e.target;
            if (u && l.nodeType && !("click" === e.type && e.button >= 1)) for (; l !== this; l = l.parentNode || this) if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? w(i, this).index(l) > -1 : w.find(i, this, null, [l]).length), a[i] && o.push(r);
                o.length && s.push({elem: l, handlers: o})
            }
            return l = this, u < t.length && s.push({elem: l, handlers: t.slice(u)}), s
        }, addProp: function (e, t) {
            Object.defineProperty(w.Event.prototype, e, {
                enumerable: !0, configurable: !0, get: g(t) ? function () {
                    if (this.originalEvent) return t(this.originalEvent)
                } : function () {
                    if (this.originalEvent) return this.originalEvent[e]
                }, set: function (t) {
                    Object.defineProperty(this, e, {enumerable: !0, configurable: !0, writable: !0, value: t})
                }
            })
        }, fix: function (e) {
            return e[w.expando] ? e : new w.Event(e)
        }, special: {
            load: {noBubble: !0}, focus: {
                trigger: function () {
                    if (this !== Se() && this.focus) return this.focus(), !1
                }, delegateType: "focusin"
            }, blur: {
                trigger: function () {
                    if (this === Se() && this.blur) return this.blur(), !1
                }, delegateType: "focusout"
            }, click: {
                trigger: function () {
                    if ("checkbox" === this.type && this.click && N(this, "input")) return this.click(), !1
                }, _default: function (e) {
                    return N(e.target, "a")
                }
            }, beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, w.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, w.Event = function (e, t) {
        if (!(this instanceof w.Event)) return new w.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ee : ke, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && w.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[w.expando] = !0
    }, w.Event.prototype = {
        constructor: w.Event,
        isDefaultPrevented: ke,
        isPropagationStopped: ke,
        isImmediatePropagationStopped: ke,
        isSimulated: !1,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = Ee, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = Ee, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = Ee, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, w.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        "char": !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (e) {
            var t = e.button;
            return null == e.which && we.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Te.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, w.event.addProp), w.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (e, t) {
        w.event.special[e] = {
            delegateType: t, bindType: t, handle: function (e) {
                var n, r = this, i = e.relatedTarget, o = e.handleObj;
                return i && (i === r || w.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), w.fn.extend({
        on: function (e, t, n, r) {
            return De(this, e, t, n, r)
        }, one: function (e, t, n, r) {
            return De(this, e, t, n, r, 1)
        }, off: function (e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, w(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = ke), this.each(function () {
                w.event.remove(this, e, n, t)
            })
        }
    });
    var Ne = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        Ae = /<script|<style|<link/i, je = /checked\s*(?:[^=]|=\s*.checked.)/i,
        qe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function Le(e, t) {
        return N(e, "table") && N(11 !== t.nodeType ? t : t.firstChild, "tr") ? w(e).children("tbody")[0] || e : e
    }

    function He(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function Oe(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function Pe(e, t) {
        var n, r, i, o, a, s, u, l;
        if (1 === t.nodeType) {
            if (J.hasData(e) && (o = J.access(e), a = J.set(t, o), l = o.events)) {
                delete a.handle, a.events = {};
                for (i in l) for (n = 0, r = l[i].length; n < r; n++) w.event.add(t, i, l[i][n])
            }
            K.hasData(e) && (s = K.access(e), u = w.extend({}, s), K.set(t, u))
        }
    }

    function Me(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && pe.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }

    function Re(e, t, n, r) {
        t = a.apply([], t);
        var i, o, s, u, l, c, f = 0, p = e.length, d = p - 1, y = t[0], v = g(y);
        if (v || p > 1 && "string" == typeof y && !h.checkClone && je.test(y)) return e.each(function (i) {
            var o = e.eq(i);
            v && (t[0] = y.call(this, i, o.html())), Re(o, t, n, r)
        });
        if (p && (i = xe(t, e[0].ownerDocument, !1, e, r), o = i.firstChild, 1 === i.childNodes.length && (i = o), o || r)) {
            for (u = (s = w.map(ye(i, "script"), He)).length; f < p; f++) l = i, f !== d && (l = w.clone(l, !0, !0), u && w.merge(s, ye(l, "script"))), n.call(e[f], l, f);
            if (u) for (c = s[s.length - 1].ownerDocument, w.map(s, Oe), f = 0; f < u; f++) l = s[f], he.test(l.type || "") && !J.access(l, "globalEval") && w.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? w._evalUrl && w._evalUrl(l.src) : m(l.textContent.replace(qe, ""), c, l))
        }
        return e
    }

    function Ie(e, t, n) {
        for (var r, i = t ? w.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || w.cleanData(ye(r)), r.parentNode && (n && w.contains(r.ownerDocument, r) && ve(ye(r, "script")), r.parentNode.removeChild(r));
        return e
    }

    w.extend({
        htmlPrefilter: function (e) {
            return e.replace(Ne, "<$1></$2>")
        }, clone: function (e, t, n) {
            var r, i, o, a, s = e.cloneNode(!0), u = w.contains(e.ownerDocument, e);
            if (!(h.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || w.isXMLDoc(e))) for (a = ye(s), r = 0, i = (o = ye(e)).length; r < i; r++) Me(o[r], a[r]);
            if (t) if (n) for (o = o || ye(e), a = a || ye(s), r = 0, i = o.length; r < i; r++) Pe(o[r], a[r]); else Pe(e, s);
            return (a = ye(s, "script")).length > 0 && ve(a, !u && ye(e, "script")), s
        }, cleanData: function (e) {
            for (var t, n, r, i = w.event.special, o = 0; void 0 !== (n = e[o]); o++) if (Y(n)) {
                if (t = n[J.expando]) {
                    if (t.events) for (r in t.events) i[r] ? w.event.remove(n, r) : w.removeEvent(n, r, t.handle);
                    n[J.expando] = void 0
                }
                n[K.expando] && (n[K.expando] = void 0)
            }
        }
    }), w.fn.extend({
        detach: function (e) {
            return Ie(this, e, !0)
        }, remove: function (e) {
            return Ie(this, e)
        }, text: function (e) {
            return z(this, function (e) {
                return void 0 === e ? w.text(this) : this.empty().each(function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        }, append: function () {
            return Re(this, arguments, function (e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Le(this, e).appendChild(e)
            })
        }, prepend: function () {
            return Re(this, arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Le(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        }, before: function () {
            return Re(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        }, after: function () {
            return Re(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        }, empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (w.cleanData(ye(e, !1)), e.textContent = "");
            return this
        }, clone: function (e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function () {
                return w.clone(this, e, t)
            })
        }, html: function (e) {
            return z(this, function (e) {
                var t = this[0] || {}, n = 0, r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Ae.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = w.htmlPrefilter(e);
                    try {
                        for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (w.cleanData(ye(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {
                    }
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        }, replaceWith: function () {
            var e = [];
            return Re(this, arguments, function (t) {
                var n = this.parentNode;
                w.inArray(this, e) < 0 && (w.cleanData(ye(this)), n && n.replaceChild(t, this))
            }, e)
        }
    }), w.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        w.fn[e] = function (e) {
            for (var n, r = [], i = w(e), o = i.length - 1, a = 0; a <= o; a++) n = a === o ? this : this.clone(!0), w(i[a])[t](n), s.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var We = new RegExp("^(" + re + ")(?!px)[a-z%]+$", "i"), $e = function (t) {
        var n = t.ownerDocument.defaultView;
        return n && n.opener || (n = e), n.getComputedStyle(t)
    }, Be = new RegExp(oe.join("|"), "i");
    !function () {
        function t() {
            if (c) {
                l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", be.appendChild(l).appendChild(c);
                var t = e.getComputedStyle(c);
                i = "1%" !== t.top, u = 12 === n(t.marginLeft), c.style.right = "60%", s = 36 === n(t.right), o = 36 === n(t.width), c.style.position = "absolute", a = 36 === c.offsetWidth || "absolute", be.removeChild(l), c = null
            }
        }

        function n(e) {
            return Math.round(parseFloat(e))
        }

        var i, o, a, s, u, l = r.createElement("div"), c = r.createElement("div");
        c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", h.clearCloneStyle = "content-box" === c.style.backgroundClip, w.extend(h, {
            boxSizingReliable: function () {
                return t(), o
            }, pixelBoxStyles: function () {
                return t(), s
            }, pixelPosition: function () {
                return t(), i
            }, reliableMarginLeft: function () {
                return t(), u
            }, scrollboxSize: function () {
                return t(), a
            }
        }))
    }();

    function Fe(e, t, n) {
        var r, i, o, a, s = e.style;
        return (n = n || $e(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || w.contains(e.ownerDocument, e) || (a = w.style(e, t)), !h.pixelBoxStyles() && We.test(a) && Be.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a
    }

    function _e(e, t) {
        return {
            get: function () {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }

    var ze = /^(none|table(?!-c[ea]).+)/, Xe = /^--/,
        Ue = {position: "absolute", visibility: "hidden", display: "block"},
        Ve = {letterSpacing: "0", fontWeight: "400"}, Ge = ["Webkit", "Moz", "ms"], Ye = r.createElement("div").style;

    function Qe(e) {
        if (e in Ye) return e;
        var t = e[0].toUpperCase() + e.slice(1), n = Ge.length;
        while (n--) if ((e = Ge[n] + t) in Ye) return e
    }

    function Je(e) {
        var t = w.cssProps[e];
        return t || (t = w.cssProps[e] = Qe(e) || e), t
    }

    function Ke(e, t, n) {
        var r = ie.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }

    function Ze(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0, s = 0, u = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; a < 4; a += 2) "margin" === n && (u += w.css(e, n + oe[a], !0, i)), r ? ("content" === n && (u -= w.css(e, "padding" + oe[a], !0, i)), "margin" !== n && (u -= w.css(e, "border" + oe[a] + "Width", !0, i))) : (u += w.css(e, "padding" + oe[a], !0, i), "padding" !== n ? u += w.css(e, "border" + oe[a] + "Width", !0, i) : s += w.css(e, "border" + oe[a] + "Width", !0, i));
        return !r && o >= 0 && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5))), u
    }

    function et(e, t, n) {
        var r = $e(e), i = Fe(e, t, r), o = "border-box" === w.css(e, "boxSizing", !1, r), a = o;
        if (We.test(i)) {
            if (!n) return i;
            i = "auto"
        }
        return a = a && (h.boxSizingReliable() || i === e.style[t]), ("auto" === i || !parseFloat(i) && "inline" === w.css(e, "display", !1, r)) && (i = e["offset" + t[0].toUpperCase() + t.slice(1)], a = !0), (i = parseFloat(i) || 0) + Ze(e, t, n || (o ? "border" : "content"), a, r, i) + "px"
    }

    w.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = Fe(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function (e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = G(t), u = Xe.test(t), l = e.style;
                if (u || (t = Je(s)), a = w.cssHooks[t] || w.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                "string" == (o = typeof n) && (i = ie.exec(n)) && i[1] && (n = ue(e, t, i), o = "number"), null != n && n === n && ("number" === o && (n += i && i[3] || (w.cssNumber[s] ? "" : "px")), h.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
            }
        },
        css: function (e, t, n, r) {
            var i, o, a, s = G(t);
            return Xe.test(t) || (t = Je(s)), (a = w.cssHooks[t] || w.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Fe(e, t, r)), "normal" === i && t in Ve && (i = Ve[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
        }
    }), w.each(["height", "width"], function (e, t) {
        w.cssHooks[t] = {
            get: function (e, n, r) {
                if (n) return !ze.test(w.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? et(e, t, r) : se(e, Ue, function () {
                    return et(e, t, r)
                })
            }, set: function (e, n, r) {
                var i, o = $e(e), a = "border-box" === w.css(e, "boxSizing", !1, o), s = r && Ze(e, t, r, a, o);
                return a && h.scrollboxSize() === o.position && (s -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - Ze(e, t, "border", !1, o) - .5)), s && (i = ie.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = w.css(e, t)), Ke(e, n, s)
            }
        }
    }), w.cssHooks.marginLeft = _e(h.reliableMarginLeft, function (e, t) {
        if (t) return (parseFloat(Fe(e, "marginLeft")) || e.getBoundingClientRect().left - se(e, {marginLeft: 0}, function () {
            return e.getBoundingClientRect().left
        })) + "px"
    }), w.each({margin: "", padding: "", border: "Width"}, function (e, t) {
        w.cssHooks[e + t] = {
            expand: function (n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + oe[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        }, "margin" !== e && (w.cssHooks[e + t].set = Ke)
    }), w.fn.extend({
        css: function (e, t) {
            return z(this, function (e, t, n) {
                var r, i, o = {}, a = 0;
                if (Array.isArray(t)) {
                    for (r = $e(e), i = t.length; a < i; a++) o[t[a]] = w.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? w.style(e, t, n) : w.css(e, t)
            }, e, t, arguments.length > 1)
        }
    });

    function tt(e, t, n, r, i) {
        return new tt.prototype.init(e, t, n, r, i)
    }

    w.Tween = tt, tt.prototype = {
        constructor: tt, init: function (e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || w.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (w.cssNumber[n] ? "" : "px")
        }, cur: function () {
            var e = tt.propHooks[this.prop];
            return e && e.get ? e.get(this) : tt.propHooks._default.get(this)
        }, run: function (e) {
            var t, n = tt.propHooks[this.prop];
            return this.options.duration ? this.pos = t = w.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : tt.propHooks._default.set(this), this
        }
    }, tt.prototype.init.prototype = tt.prototype, tt.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = w.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            }, set: function (e) {
                w.fx.step[e.prop] ? w.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[w.cssProps[e.prop]] && !w.cssHooks[e.prop] ? e.elem[e.prop] = e.now : w.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }, tt.propHooks.scrollTop = tt.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, w.easing = {
        linear: function (e) {
            return e
        }, swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }, _default: "swing"
    }, w.fx = tt.prototype.init, w.fx.step = {};
    var nt, rt, it = /^(?:toggle|show|hide)$/, ot = /queueHooks$/;

    function at() {
        rt && (!1 === r.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(at) : e.setTimeout(at, w.fx.interval), w.fx.tick())
    }

    function st() {
        return e.setTimeout(function () {
            nt = void 0
        }), nt = Date.now()
    }

    function ut(e, t) {
        var n, r = 0, i = {height: e};
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = oe[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function lt(e, t, n) {
        for (var r, i = (pt.tweeners[t] || []).concat(pt.tweeners["*"]), o = 0, a = i.length; o < a; o++) if (r = i[o].call(n, t, e)) return r
    }

    function ct(e, t, n) {
        var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t, p = this, d = {}, h = e.style,
            g = e.nodeType && ae(e), y = J.get(e, "fxshow");
        n.queue || (null == (a = w._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
            a.unqueued || s()
        }), a.unqueued++, p.always(function () {
            p.always(function () {
                a.unqueued--, w.queue(e, "fx").length || a.empty.fire()
            })
        }));
        for (r in t) if (i = t[r], it.test(i)) {
            if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
                if ("show" !== i || !y || void 0 === y[r]) continue;
                g = !0
            }
            d[r] = y && y[r] || w.style(e, r)
        }
        if ((u = !w.isEmptyObject(t)) || !w.isEmptyObject(d)) {
            f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = y && y.display) && (l = J.get(e, "display")), "none" === (c = w.css(e, "display")) && (l ? c = l : (fe([e], !0), l = e.style.display || l, c = w.css(e, "display"), fe([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === w.css(e, "float") && (u || (p.done(function () {
                h.display = l
            }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () {
                h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
            })), u = !1;
            for (r in d) u || (y ? "hidden" in y && (g = y.hidden) : y = J.access(e, "fxshow", {display: l}), o && (y.hidden = !g), g && fe([e], !0), p.done(function () {
                g || fe([e]), J.remove(e, "fxshow");
                for (r in d) w.style(e, r, d[r])
            })), u = lt(g ? y[r] : 0, r, p), r in y || (y[r] = u.start, g && (u.end = u.start, u.start = 0))
        }
    }

    function ft(e, t) {
        var n, r, i, o, a;
        for (n in e) if (r = G(n), i = t[r], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = w.cssHooks[r]) && "expand" in a) {
            o = a.expand(o), delete e[r];
            for (n in o) n in e || (e[n] = o[n], t[n] = i)
        } else t[r] = i
    }

    function pt(e, t, n) {
        var r, i, o = 0, a = pt.prefilters.length, s = w.Deferred().always(function () {
            delete u.elem
        }), u = function () {
            if (i) return !1;
            for (var t = nt || st(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), o = 0, a = l.tweens.length; o < a; o++) l.tweens[o].run(r);
            return s.notifyWith(e, [l, r, n]), r < 1 && a ? n : (a || s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l]), !1)
        }, l = s.promise({
            elem: e,
            props: w.extend({}, t),
            opts: w.extend(!0, {specialEasing: {}, easing: w.easing._default}, n),
            originalProperties: t,
            originalOptions: n,
            startTime: nt || st(),
            duration: n.duration,
            tweens: [],
            createTween: function (t, n) {
                var r = w.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                return l.tweens.push(r), r
            },
            stop: function (t) {
                var n = 0, r = t ? l.tweens.length : 0;
                if (i) return this;
                for (i = !0; n < r; n++) l.tweens[n].run(1);
                return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this
            }
        }), c = l.props;
        for (ft(c, l.opts.specialEasing); o < a; o++) if (r = pt.prefilters[o].call(l, e, c, l.opts)) return g(r.stop) && (w._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)), r;
        return w.map(c, lt, l), g(l.opts.start) && l.opts.start.call(e, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), w.fx.timer(w.extend(u, {
            elem: e,
            anim: l,
            queue: l.opts.queue
        })), l
    }

    w.Animation = w.extend(pt, {
        tweeners: {
            "*": [function (e, t) {
                var n = this.createTween(e, t);
                return ue(n.elem, e, ie.exec(t), n), n
            }]
        }, tweener: function (e, t) {
            g(e) ? (t = e, e = ["*"]) : e = e.match(M);
            for (var n, r = 0, i = e.length; r < i; r++) n = e[r], pt.tweeners[n] = pt.tweeners[n] || [], pt.tweeners[n].unshift(t)
        }, prefilters: [ct], prefilter: function (e, t) {
            t ? pt.prefilters.unshift(e) : pt.prefilters.push(e)
        }
    }), w.speed = function (e, t, n) {
        var r = e && "object" == typeof e ? w.extend({}, e) : {
            complete: n || !n && t || g(e) && e,
            duration: e,
            easing: n && t || t && !g(t) && t
        };
        return w.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in w.fx.speeds ? r.duration = w.fx.speeds[r.duration] : r.duration = w.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
            g(r.old) && r.old.call(this), r.queue && w.dequeue(this, r.queue)
        }, r
    }, w.fn.extend({
        fadeTo: function (e, t, n, r) {
            return this.filter(ae).css("opacity", 0).show().end().animate({opacity: t}, e, n, r)
        }, animate: function (e, t, n, r) {
            var i = w.isEmptyObject(e), o = w.speed(t, n, r), a = function () {
                var t = pt(this, w.extend({}, e), o);
                (i || J.get(this, "finish")) && t.stop(!0)
            };
            return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        }, stop: function (e, t, n) {
            var r = function (e) {
                var t = e.stop;
                delete e.stop, t(n)
            };
            return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function () {
                var t = !0, i = null != e && e + "queueHooks", o = w.timers, a = J.get(this);
                if (i) a[i] && a[i].stop && r(a[i]); else for (i in a) a[i] && a[i].stop && ot.test(i) && r(a[i]);
                for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                !t && n || w.dequeue(this, e)
            })
        }, finish: function (e) {
            return !1 !== e && (e = e || "fx"), this.each(function () {
                var t, n = J.get(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = w.timers, a = r ? r.length : 0;
                for (n.finish = !0, w.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }
    }), w.each(["toggle", "show", "hide"], function (e, t) {
        var n = w.fn[t];
        w.fn[t] = function (e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ut(t, !0), e, r, i)
        }
    }), w.each({
        slideDown: ut("show"),
        slideUp: ut("hide"),
        slideToggle: ut("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (e, t) {
        w.fn[e] = function (e, n, r) {
            return this.animate(t, e, n, r)
        }
    }), w.timers = [], w.fx.tick = function () {
        var e, t = 0, n = w.timers;
        for (nt = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || w.fx.stop(), nt = void 0
    }, w.fx.timer = function (e) {
        w.timers.push(e), w.fx.start()
    }, w.fx.interval = 13, w.fx.start = function () {
        rt || (rt = !0, at())
    }, w.fx.stop = function () {
        rt = null
    }, w.fx.speeds = {slow: 600, fast: 200, _default: 400}, w.fn.delay = function (t, n) {
        return t = w.fx ? w.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function (n, r) {
            var i = e.setTimeout(n, t);
            r.stop = function () {
                e.clearTimeout(i)
            }
        })
    }, function () {
        var e = r.createElement("input"), t = r.createElement("select").appendChild(r.createElement("option"));
        e.type = "checkbox", h.checkOn = "" !== e.value, h.optSelected = t.selected, (e = r.createElement("input")).value = "t", e.type = "radio", h.radioValue = "t" === e.value
    }();
    var dt, ht = w.expr.attrHandle;
    w.fn.extend({
        attr: function (e, t) {
            return z(this, w.attr, e, t, arguments.length > 1)
        }, removeAttr: function (e) {
            return this.each(function () {
                w.removeAttr(this, e)
            })
        }
    }), w.extend({
        attr: function (e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? w.prop(e, t, n) : (1 === o && w.isXMLDoc(e) || (i = w.attrHooks[t.toLowerCase()] || (w.expr.match.bool.test(t) ? dt : void 0)), void 0 !== n ? null === n ? void w.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = w.find.attr(e, t)) ? void 0 : r)
        }, attrHooks: {
            type: {
                set: function (e, t) {
                    if (!h.radioValue && "radio" === t && N(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }, removeAttr: function (e, t) {
            var n, r = 0, i = t && t.match(M);
            if (i && 1 === e.nodeType) while (n = i[r++]) e.removeAttribute(n)
        }
    }), dt = {
        set: function (e, t, n) {
            return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, w.each(w.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var n = ht[t] || w.find.attr;
        ht[t] = function (e, t, r) {
            var i, o, a = t.toLowerCase();
            return r || (o = ht[a], ht[a] = i, i = null != n(e, t, r) ? a : null, ht[a] = o), i
        }
    });
    var gt = /^(?:input|select|textarea|button)$/i, yt = /^(?:a|area)$/i;
    w.fn.extend({
        prop: function (e, t) {
            return z(this, w.prop, e, t, arguments.length > 1)
        }, removeProp: function (e) {
            return this.each(function () {
                delete this[w.propFix[e] || e]
            })
        }
    }), w.extend({
        prop: function (e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && w.isXMLDoc(e) || (t = w.propFix[t] || t, i = w.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        }, propHooks: {
            tabIndex: {
                get: function (e) {
                    var t = w.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : gt.test(e.nodeName) || yt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }, propFix: {"for": "htmlFor", "class": "className"}
    }), h.optSelected || (w.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        }, set: function (e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        w.propFix[this.toLowerCase()] = this
    });

    function vt(e) {
        return (e.match(M) || []).join(" ")
    }

    function mt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function xt(e) {
        return Array.isArray(e) ? e : "string" == typeof e ? e.match(M) || [] : []
    }

    w.fn.extend({
        addClass: function (e) {
            var t, n, r, i, o, a, s, u = 0;
            if (g(e)) return this.each(function (t) {
                w(this).addClass(e.call(this, t, mt(this)))
            });
            if ((t = xt(e)).length) while (n = this[u++]) if (i = mt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
                a = 0;
                while (o = t[a++]) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                i !== (s = vt(r)) && n.setAttribute("class", s)
            }
            return this
        }, removeClass: function (e) {
            var t, n, r, i, o, a, s, u = 0;
            if (g(e)) return this.each(function (t) {
                w(this).removeClass(e.call(this, t, mt(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ((t = xt(e)).length) while (n = this[u++]) if (i = mt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
                a = 0;
                while (o = t[a++]) while (r.indexOf(" " + o + " ") > -1) r = r.replace(" " + o + " ", " ");
                i !== (s = vt(r)) && n.setAttribute("class", s)
            }
            return this
        }, toggleClass: function (e, t) {
            var n = typeof e, r = "string" === n || Array.isArray(e);
            return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : g(e) ? this.each(function (n) {
                w(this).toggleClass(e.call(this, n, mt(this), t), t)
            }) : this.each(function () {
                var t, i, o, a;
                if (r) {
                    i = 0, o = w(this), a = xt(e);
                    while (t = a[i++]) o.hasClass(t) ? o.removeClass(t) : o.addClass(t)
                } else void 0 !== e && "boolean" !== n || ((t = mt(this)) && J.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : J.get(this, "__className__") || ""))
            })
        }, hasClass: function (e) {
            var t, n, r = 0;
            t = " " + e + " ";
            while (n = this[r++]) if (1 === n.nodeType && (" " + vt(mt(n)) + " ").indexOf(t) > -1) return !0;
            return !1
        }
    });
    var bt = /\r/g;
    w.fn.extend({
        val: function (e) {
            var t, n, r, i = this[0];
            {
                if (arguments.length) return r = g(e), this.each(function (n) {
                    var i;
                    1 === this.nodeType && (null == (i = r ? e.call(this, n, w(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = w.map(i, function (e) {
                        return null == e ? "" : e + ""
                    })), (t = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                });
                if (i) return (t = w.valHooks[i.type] || w.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof(n = i.value) ? n.replace(bt, "") : null == n ? "" : n
            }
        }
    }), w.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = w.find.attr(e, "value");
                    return null != t ? t : vt(w.text(e))
                }
            }, select: {
                get: function (e) {
                    var t, n, r, i = e.options, o = e.selectedIndex, a = "select-one" === e.type, s = a ? null : [],
                        u = a ? o + 1 : i.length;
                    for (r = o < 0 ? u : a ? o : 0; r < u; r++) if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !N(n.parentNode, "optgroup"))) {
                        if (t = w(n).val(), a) return t;
                        s.push(t)
                    }
                    return s
                }, set: function (e, t) {
                    var n, r, i = e.options, o = w.makeArray(t), a = i.length;
                    while (a--) ((r = i[a]).selected = w.inArray(w.valHooks.option.get(r), o) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), w.each(["radio", "checkbox"], function () {
        w.valHooks[this] = {
            set: function (e, t) {
                if (Array.isArray(t)) return e.checked = w.inArray(w(e).val(), t) > -1
            }
        }, h.checkOn || (w.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), h.focusin = "onfocusin" in e;
    var wt = /^(?:focusinfocus|focusoutblur)$/, Tt = function (e) {
        e.stopPropagation()
    };
    w.extend(w.event, {
        trigger: function (t, n, i, o) {
            var a, s, u, l, c, p, d, h, v = [i || r], m = f.call(t, "type") ? t.type : t,
                x = f.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = h = u = i = i || r, 3 !== i.nodeType && 8 !== i.nodeType && !wt.test(m + w.event.triggered) && (m.indexOf(".") > -1 && (m = (x = m.split(".")).shift(), x.sort()), c = m.indexOf(":") < 0 && "on" + m, t = t[w.expando] ? t : new w.Event(m, "object" == typeof t && t), t.isTrigger = o ? 2 : 3, t.namespace = x.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + x.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : w.makeArray(n, [t]), d = w.event.special[m] || {}, o || !d.trigger || !1 !== d.trigger.apply(i, n))) {
                if (!o && !d.noBubble && !y(i)) {
                    for (l = d.delegateType || m, wt.test(l + m) || (s = s.parentNode); s; s = s.parentNode) v.push(s), u = s;
                    u === (i.ownerDocument || r) && v.push(u.defaultView || u.parentWindow || e)
                }
                a = 0;
                while ((s = v[a++]) && !t.isPropagationStopped()) h = s, t.type = a > 1 ? l : d.bindType || m, (p = (J.get(s, "events") || {})[t.type] && J.get(s, "handle")) && p.apply(s, n), (p = c && s[c]) && p.apply && Y(s) && (t.result = p.apply(s, n), !1 === t.result && t.preventDefault());
                return t.type = m, o || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(v.pop(), n) || !Y(i) || c && g(i[m]) && !y(i) && ((u = i[c]) && (i[c] = null), w.event.triggered = m, t.isPropagationStopped() && h.addEventListener(m, Tt), i[m](), t.isPropagationStopped() && h.removeEventListener(m, Tt), w.event.triggered = void 0, u && (i[c] = u)), t.result
            }
        }, simulate: function (e, t, n) {
            var r = w.extend(new w.Event, n, {type: e, isSimulated: !0});
            w.event.trigger(r, null, t)
        }
    }), w.fn.extend({
        trigger: function (e, t) {
            return this.each(function () {
                w.event.trigger(e, t, this)
            })
        }, triggerHandler: function (e, t) {
            var n = this[0];
            if (n) return w.event.trigger(e, t, n, !0)
        }
    }), h.focusin || w.each({focus: "focusin", blur: "focusout"}, function (e, t) {
        var n = function (e) {
            w.event.simulate(t, e.target, w.event.fix(e))
        };
        w.event.special[t] = {
            setup: function () {
                var r = this.ownerDocument || this, i = J.access(r, t);
                i || r.addEventListener(e, n, !0), J.access(r, t, (i || 0) + 1)
            }, teardown: function () {
                var r = this.ownerDocument || this, i = J.access(r, t) - 1;
                i ? J.access(r, t, i) : (r.removeEventListener(e, n, !0), J.remove(r, t))
            }
        }
    });
    var Ct = e.location, Et = Date.now(), kt = /\?/;
    w.parseXML = function (t) {
        var n;
        if (!t || "string" != typeof t) return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (e) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || w.error("Invalid XML: " + t), n
    };
    var St = /\[\]$/, Dt = /\r?\n/g, Nt = /^(?:submit|button|image|reset|file)$/i,
        At = /^(?:input|select|textarea|keygen)/i;

    function jt(e, t, n, r) {
        var i;
        if (Array.isArray(t)) w.each(t, function (t, i) {
            n || St.test(e) ? r(e, i) : jt(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
        }); else if (n || "object" !== x(t)) r(e, t); else for (i in t) jt(e + "[" + i + "]", t[i], n, r)
    }

    w.param = function (e, t) {
        var n, r = [], i = function (e, t) {
            var n = g(t) ? t() : t;
            r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
        };
        if (Array.isArray(e) || e.jquery && !w.isPlainObject(e)) w.each(e, function () {
            i(this.name, this.value)
        }); else for (n in e) jt(n, e[n], t, i);
        return r.join("&")
    }, w.fn.extend({
        serialize: function () {
            return w.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var e = w.prop(this, "elements");
                return e ? w.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !w(this).is(":disabled") && At.test(this.nodeName) && !Nt.test(e) && (this.checked || !pe.test(e))
            }).map(function (e, t) {
                var n = w(this).val();
                return null == n ? null : Array.isArray(n) ? w.map(n, function (e) {
                    return {name: t.name, value: e.replace(Dt, "\r\n")}
                }) : {name: t.name, value: n.replace(Dt, "\r\n")}
            }).get()
        }
    });
    var qt = /%20/g, Lt = /#.*$/, Ht = /([?&])_=[^&]*/, Ot = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Pt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Mt = /^(?:GET|HEAD)$/, Rt = /^\/\//, It = {},
        Wt = {}, $t = "*/".concat("*"), Bt = r.createElement("a");
    Bt.href = Ct.href;

    function Ft(e) {
        return function (t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0, o = t.toLowerCase().match(M) || [];
            if (g(n)) while (r = o[i++]) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function _t(e, t, n, r) {
        var i = {}, o = e === Wt;

        function a(s) {
            var u;
            return i[s] = !0, w.each(e[s] || [], function (e, s) {
                var l = s(t, n, r);
                return "string" != typeof l || o || i[l] ? o ? !(u = l) : void 0 : (t.dataTypes.unshift(l), a(l), !1)
            }), u
        }

        return a(t.dataTypes[0]) || !i["*"] && a("*")
    }

    function zt(e, t) {
        var n, r, i = w.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && w.extend(!0, e, r), e
    }

    function Xt(e, t, n) {
        var r, i, o, a, s = e.contents, u = e.dataTypes;
        while ("*" === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r) for (i in s) if (s[i] && s[i].test(r)) {
            u.unshift(i);
            break
        }
        if (u[0] in n) o = u[0]; else {
            for (i in n) {
                if (!u[0] || e.converters[i + " " + u[0]]) {
                    o = i;
                    break
                }
                a || (a = i)
            }
            o = o || a
        }
        if (o) return o !== u[0] && u.unshift(o), n[o]
    }

    function Ut(e, t, n, r) {
        var i, o, a, s, u, l = {}, c = e.dataTypes.slice();
        if (c[1]) for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
        o = c.shift();
        while (o) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if ("*" === o) o = u; else if ("*" !== u && u !== o) {
            if (!(a = l[u + " " + o] || l["* " + o])) for (i in l) if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                break
            }
            if (!0 !== a) if (a && e["throws"]) t = a(t); else try {
                t = a(t)
            } catch (e) {
                return {state: "parsererror", error: a ? e : "No conversion from " + u + " to " + o}
            }
        }
        return {state: "success", data: t}
    }

    w.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Ct.href,
            type: "GET",
            isLocal: Pt.test(Ct.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": $t,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
            responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
            converters: {"* text": String, "text html": !0, "text json": JSON.parse, "text xml": w.parseXML},
            flatOptions: {url: !0, context: !0}
        },
        ajaxSetup: function (e, t) {
            return t ? zt(zt(e, w.ajaxSettings), t) : zt(w.ajaxSettings, e)
        },
        ajaxPrefilter: Ft(It),
        ajaxTransport: Ft(Wt),
        ajax: function (t, n) {
            "object" == typeof t && (n = t, t = void 0), n = n || {};
            var i, o, a, s, u, l, c, f, p, d, h = w.ajaxSetup({}, n), g = h.context || h,
                y = h.context && (g.nodeType || g.jquery) ? w(g) : w.event, v = w.Deferred(),
                m = w.Callbacks("once memory"), x = h.statusCode || {}, b = {}, T = {}, C = "canceled", E = {
                    readyState: 0, getResponseHeader: function (e) {
                        var t;
                        if (c) {
                            if (!s) {
                                s = {};
                                while (t = Ot.exec(a)) s[t[1].toLowerCase()] = t[2]
                            }
                            t = s[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    }, getAllResponseHeaders: function () {
                        return c ? a : null
                    }, setRequestHeader: function (e, t) {
                        return null == c && (e = T[e.toLowerCase()] = T[e.toLowerCase()] || e, b[e] = t), this
                    }, overrideMimeType: function (e) {
                        return null == c && (h.mimeType = e), this
                    }, statusCode: function (e) {
                        var t;
                        if (e) if (c) E.always(e[E.status]); else for (t in e) x[t] = [x[t], e[t]];
                        return this
                    }, abort: function (e) {
                        var t = e || C;
                        return i && i.abort(t), k(0, t), this
                    }
                };
            if (v.promise(E), h.url = ((t || h.url || Ct.href) + "").replace(Rt, Ct.protocol + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(M) || [""], null == h.crossDomain) {
                l = r.createElement("a");
                try {
                    l.href = h.url, l.href = l.href, h.crossDomain = Bt.protocol + "//" + Bt.host != l.protocol + "//" + l.host
                } catch (e) {
                    h.crossDomain = !0
                }
            }
            if (h.data && h.processData && "string" != typeof h.data && (h.data = w.param(h.data, h.traditional)), _t(It, h, n, E), c) return E;
            (f = w.event && h.global) && 0 == w.active++ && w.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Mt.test(h.type), o = h.url.replace(Lt, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(qt, "+")) : (d = h.url.slice(o.length), h.data && (h.processData || "string" == typeof h.data) && (o += (kt.test(o) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (o = o.replace(Ht, "$1"), d = (kt.test(o) ? "&" : "?") + "_=" + Et++ + d), h.url = o + d), h.ifModified && (w.lastModified[o] && E.setRequestHeader("If-Modified-Since", w.lastModified[o]), w.etag[o] && E.setRequestHeader("If-None-Match", w.etag[o])), (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && E.setRequestHeader("Content-Type", h.contentType), E.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + $t + "; q=0.01" : "") : h.accepts["*"]);
            for (p in h.headers) E.setRequestHeader(p, h.headers[p]);
            if (h.beforeSend && (!1 === h.beforeSend.call(g, E, h) || c)) return E.abort();
            if (C = "abort", m.add(h.complete), E.done(h.success), E.fail(h.error), i = _t(Wt, h, n, E)) {
                if (E.readyState = 1, f && y.trigger("ajaxSend", [E, h]), c) return E;
                h.async && h.timeout > 0 && (u = e.setTimeout(function () {
                    E.abort("timeout")
                }, h.timeout));
                try {
                    c = !1, i.send(b, k)
                } catch (e) {
                    if (c) throw e;
                    k(-1, e)
                }
            } else k(-1, "No Transport");

            function k(t, n, r, s) {
                var l, p, d, b, T, C = n;
                c || (c = !0, u && e.clearTimeout(u), i = void 0, a = s || "", E.readyState = t > 0 ? 4 : 0, l = t >= 200 && t < 300 || 304 === t, r && (b = Xt(h, E, r)), b = Ut(h, b, E, l), l ? (h.ifModified && ((T = E.getResponseHeader("Last-Modified")) && (w.lastModified[o] = T), (T = E.getResponseHeader("etag")) && (w.etag[o] = T)), 204 === t || "HEAD" === h.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = b.state, p = b.data, l = !(d = b.error))) : (d = C, !t && C || (C = "error", t < 0 && (t = 0))), E.status = t, E.statusText = (n || C) + "", l ? v.resolveWith(g, [p, C, E]) : v.rejectWith(g, [E, C, d]), E.statusCode(x), x = void 0, f && y.trigger(l ? "ajaxSuccess" : "ajaxError", [E, h, l ? p : d]), m.fireWith(g, [E, C]), f && (y.trigger("ajaxComplete", [E, h]), --w.active || w.event.trigger("ajaxStop")))
            }

            return E
        },
        getJSON: function (e, t, n) {
            return w.get(e, t, n, "json")
        },
        getScript: function (e, t) {
            return w.get(e, void 0, t, "script")
        }
    }), w.each(["get", "post"], function (e, t) {
        w[t] = function (e, n, r, i) {
            return g(n) && (i = i || r, r = n, n = void 0), w.ajax(w.extend({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: r
            }, w.isPlainObject(e) && e))
        }
    }), w._evalUrl = function (e) {
        return w.ajax({url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, "throws": !0})
    }, w.fn.extend({
        wrapAll: function (e) {
            var t;
            return this[0] && (g(e) && (e = e.call(this[0])), t = w(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                var e = this;
                while (e.firstElementChild) e = e.firstElementChild;
                return e
            }).append(this)), this
        }, wrapInner: function (e) {
            return g(e) ? this.each(function (t) {
                w(this).wrapInner(e.call(this, t))
            }) : this.each(function () {
                var t = w(this), n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        }, wrap: function (e) {
            var t = g(e);
            return this.each(function (n) {
                w(this).wrapAll(t ? e.call(this, n) : e)
            })
        }, unwrap: function (e) {
            return this.parent(e).not("body").each(function () {
                w(this).replaceWith(this.childNodes)
            }), this
        }
    }), w.expr.pseudos.hidden = function (e) {
        return !w.expr.pseudos.visible(e)
    }, w.expr.pseudos.visible = function (e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, w.ajaxSettings.xhr = function () {
        try {
            return new e.XMLHttpRequest
        } catch (e) {
        }
    };
    var Vt = {0: 200, 1223: 204}, Gt = w.ajaxSettings.xhr();
    h.cors = !!Gt && "withCredentials" in Gt, h.ajax = Gt = !!Gt, w.ajaxTransport(function (t) {
        var n, r;
        if (h.cors || Gt && !t.crossDomain) return {
            send: function (i, o) {
                var a, s = t.xhr();
                if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (a in t.xhrFields) s[a] = t.xhrFields[a];
                t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                for (a in i) s.setRequestHeader(a, i[a]);
                n = function (e) {
                    return function () {
                        n && (n = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Vt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {binary: s.response} : {text: s.responseText}, s.getAllResponseHeaders()))
                    }
                }, s.onload = n(), r = s.onerror = s.ontimeout = n("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function () {
                    4 === s.readyState && e.setTimeout(function () {
                        n && r()
                    })
                }, n = n("abort");
                try {
                    s.send(t.hasContent && t.data || null)
                } catch (e) {
                    if (n) throw e
                }
            }, abort: function () {
                n && n()
            }
        }
    }), w.ajaxPrefilter(function (e) {
        e.crossDomain && (e.contents.script = !1)
    }), w.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /\b(?:java|ecma)script\b/},
        converters: {
            "text script": function (e) {
                return w.globalEval(e), e
            }
        }
    }), w.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), w.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function (i, o) {
                    t = w("<script>").prop({charset: e.scriptCharset, src: e.url}).on("load error", n = function (e) {
                        t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type)
                    }), r.head.appendChild(t[0])
                }, abort: function () {
                    n && n()
                }
            }
        }
    });
    var Yt = [], Qt = /(=)\?(?=&|$)|\?\?/;
    w.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var e = Yt.pop() || w.expando + "_" + Et++;
            return this[e] = !0, e
        }
    }), w.ajaxPrefilter("json jsonp", function (t, n, r) {
        var i, o, a,
            s = !1 !== t.jsonp && (Qt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Qt.test(t.data) && "data");
        if (s || "jsonp" === t.dataTypes[0]) return i = t.jsonpCallback = g(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Qt, "$1" + i) : !1 !== t.jsonp && (t.url += (kt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function () {
            return a || w.error(i + " was not called"), a[0]
        }, t.dataTypes[0] = "json", o = e[i], e[i] = function () {
            a = arguments
        }, r.always(function () {
            void 0 === o ? w(e).removeProp(i) : e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, Yt.push(i)), a && g(o) && o(a[0]), a = o = void 0
        }), "script"
    }), h.createHTMLDocument = function () {
        var e = r.implementation.createHTMLDocument("").body;
        return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
    }(), w.parseHTML = function (e, t, n) {
        if ("string" != typeof e) return [];
        "boolean" == typeof t && (n = t, t = !1);
        var i, o, a;
        return t || (h.createHTMLDocument ? ((i = (t = r.implementation.createHTMLDocument("")).createElement("base")).href = r.location.href, t.head.appendChild(i)) : t = r), o = A.exec(e), a = !n && [], o ? [t.createElement(o[1])] : (o = xe([e], t, a), a && a.length && w(a).remove(), w.merge([], o.childNodes))
    }, w.fn.load = function (e, t, n) {
        var r, i, o, a = this, s = e.indexOf(" ");
        return s > -1 && (r = vt(e.slice(s)), e = e.slice(0, s)), g(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), a.length > 0 && w.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function (e) {
            o = arguments, a.html(r ? w("<div>").append(w.parseHTML(e)).find(r) : e)
        }).always(n && function (e, t) {
            a.each(function () {
                n.apply(this, o || [e.responseText, t, e])
            })
        }), this
    }, w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        w.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), w.expr.pseudos.animated = function (e) {
        return w.grep(w.timers, function (t) {
            return e === t.elem
        }).length
    }, w.offset = {
        setOffset: function (e, t, n) {
            var r, i, o, a, s, u, l, c = w.css(e, "position"), f = w(e), p = {};
            "static" === c && (e.style.position = "relative"), s = f.offset(), o = w.css(e, "top"), u = w.css(e, "left"), (l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1) ? (a = (r = f.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), g(t) && (t = t.call(e, n, w.extend({}, s))), null != t.top && (p.top = t.top - s.top + a), null != t.left && (p.left = t.left - s.left + i), "using" in t ? t.using.call(e, p) : f.css(p)
        }
    }, w.fn.extend({
        offset: function (e) {
            if (arguments.length) return void 0 === e ? this : this.each(function (t) {
                w.offset.setOffset(this, e, t)
            });
            var t, n, r = this[0];
            if (r) return r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
                top: t.top + n.pageYOffset,
                left: t.left + n.pageXOffset
            }) : {top: 0, left: 0}
        }, position: function () {
            if (this[0]) {
                var e, t, n, r = this[0], i = {top: 0, left: 0};
                if ("fixed" === w.css(r, "position")) t = r.getBoundingClientRect(); else {
                    t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;
                    while (e && (e === n.body || e === n.documentElement) && "static" === w.css(e, "position")) e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = w(e).offset()).top += w.css(e, "borderTopWidth", !0), i.left += w.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - i.top - w.css(r, "marginTop", !0),
                    left: t.left - i.left - w.css(r, "marginLeft", !0)
                }
            }
        }, offsetParent: function () {
            return this.map(function () {
                var e = this.offsetParent;
                while (e && "static" === w.css(e, "position")) e = e.offsetParent;
                return e || be
            })
        }
    }), w.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (e, t) {
        var n = "pageYOffset" === t;
        w.fn[e] = function (r) {
            return z(this, function (e, r, i) {
                var o;
                if (y(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === i) return o ? o[t] : e[r];
                o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i
            }, e, r, arguments.length)
        }
    }), w.each(["top", "left"], function (e, t) {
        w.cssHooks[t] = _e(h.pixelPosition, function (e, n) {
            if (n) return n = Fe(e, t), We.test(n) ? w(e).position()[t] + "px" : n
        })
    }), w.each({Height: "height", Width: "width"}, function (e, t) {
        w.each({padding: "inner" + e, content: t, "": "outer" + e}, function (n, r) {
            w.fn[r] = function (i, o) {
                var a = arguments.length && (n || "boolean" != typeof i),
                    s = n || (!0 === i || !0 === o ? "margin" : "border");
                return z(this, function (t, n, i) {
                    var o;
                    return y(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? w.css(t, n, s) : w.style(t, n, i, s)
                }, t, a ? i : void 0, a)
            }
        })
    }), w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
        w.fn[t] = function (e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), w.fn.extend({
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), w.fn.extend({
        bind: function (e, t, n) {
            return this.on(e, null, t, n)
        }, unbind: function (e, t) {
            return this.off(e, null, t)
        }, delegate: function (e, t, n, r) {
            return this.on(t, e, n, r)
        }, undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }), w.proxy = function (e, t) {
        var n, r, i;
        if ("string" == typeof t && (n = e[t], t = e, e = n), g(e)) return r = o.call(arguments, 2), i = function () {
            return e.apply(t || this, r.concat(o.call(arguments)))
        }, i.guid = e.guid = e.guid || w.guid++, i
    }, w.holdReady = function (e) {
        e ? w.readyWait++ : w.ready(!0)
    }, w.isArray = Array.isArray, w.parseJSON = JSON.parse, w.nodeName = N, w.isFunction = g, w.isWindow = y, w.camelCase = G, w.type = x, w.now = Date.now, w.isNumeric = function (e) {
        var t = w.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, "function" == typeof define && define.amd && define("jquery", [], function () {
        return w
    });
    var Jt = e.jQuery, Kt = e.$;
    return w.noConflict = function (t) {
        return e.$ === w && (e.$ = Kt), t && e.jQuery === w && (e.jQuery = Jt), w
    }, t || (e.jQuery = e.$ = w), w
});


/**************************************/
$(".seo_button").click(function () {
    $(this).parent().find(".about-description").toggleClass("full");
    if ($(this).parent().find(".about-description").hasClass("full")) {
        $(this).find("p").text($(this).data('off_text'));
    } else {
        $(this).find("p").text($(this).data('on_text'));
    }
});


var data_mone, data_day, data_year


function f() {
    var t = 0;

    left = ($(window).height() / ($('.sec_4').height() - $('.left_sec4').height())) / 2
    w_h = $(window).height() / 2
    $(window).height()
    $(window).scroll(function () {
        var $this = $(this),
            now = $this.scrollTop(),
            scroll = $(window).scrollTop(),
            mm = 0,
            o = 0;

        if (scroll > position) {
            o += 1
        } else {
            o += 0
        }
        position = scroll;
        if (now > $('.sec_4').offset().top - w_h && now < $('.sec_4').offset().top + $('.sec_4').height() - w_h) {

            if (o == 1) {
                t += left;
            } else if (o == 0) {
                t -= left;
            }

            $('.left_sec4').animate({'top': +t + 'px'}, 0)
            $('.right_sec4').animate({'bottom': +t + 'px'}, 0)
        }
    })
}

if ($(window).width() > 1024) {
    f();
}


if ($(window).width() > 1024) {
    bl2 = $("main").height();
    r2 = $(".text_R").offset().top;
    r3 = $(".text_R2").offset().top;
    l1 = $(".text_L").offset().top;
}



function f1() {

    klp_ = parseInt(1920 * 0.01)
    Scroll = window.pageYOffset;
    $(".text_R").css('top', ((r2 + (.3 * Scroll))) + 'px')
    $(".text_R2").css('top', ((r3 + (.4 * Scroll))) + 'px')
    $(".text_L").css('top', ((l1 + (.3 * Scroll))) + 'px')
    // $(".text_R").css('top', ((r2 + (.3 * 0))/ klp_)+ 'vw')
}

// f1()
if ($(window).width() > 1024) {
    $(window).scroll(function () {
        f1()

    })
}


function select_() {
    $(".timer .custom-select").each(function () {
        var classes = $(this).attr("class"),
            id = $(this).attr("id"),
            name = $(this).attr("name");


        var template = '<div class="' + classes + '">';
        template += '<span class="custom-select-trigger">' + $(this).find('option:not([disabled])').eq(0).text() + '</span>';
        template += '<div class="custom-options"><ul>';
        $(this).find("option").each(function () {
            template += '<li class="custom-option " ' + $(this).attr("disabled") + ' data-value="' + $(this).attr("value") + '">' + $(this).html() + '</li>';
        });
        template += '</ul></div></div>';

        $(this).wrap('<div class="custom-select-wrapper"></div>');
        $(this).hide();
        $(this).after(template);
    });
    $(".custom-option:first-of-type").hover(function () {
        $(this).parents(".custom-options").addClass("option-hover");
    }, function () {
        $(this).parents(".custom-options").removeClass("option-hover");
    });
    $(".custom-select-trigger").on("click", function () {
        $('.calendar_w').removeClass('open')
        $(this).parents(".custom-select").toggleClass("opened");
        event.stopPropagation();
    });
    $(".custom-option").on("click", function () {
        $(this).parents(".custom-select-wrapper").find("select").val($(this).data("value"));
        $(this).parents(".custom-options").find(".custom-option").removeClass("selection");
        $(this).addClass("selection");
        $(this).parents(".custom-select").removeClass("opened");
        $(this).parents(".custom-select").find(".custom-select-trigger").text($(this).text());


    });
}

select_()

function select_2() {
    $(".custom-select_people").each(function () {
        var classes = $(this).attr("class"),
            id = $(this).attr("id"),
            name = $(this).attr("name");


        var template = '<div class="' + classes + '">';
        template += '<span class="custom-select-trigger_people">' + $(this).find('option:not([disabled])').eq(0).text() + '</span>';
        template += '<div class="custom-options_people"><ul>';
        $(this).find("option").each(function () {
            template += '<li class="custom-option_people " ' + $(this).attr("disabled") + ' data-value="' + $(this).attr("value") + '">' + $(this).html() + '</li>';
        });
        template += '</ul></div></div>';

        $(this).wrap('<div class="custom-select-wrapper_people"></div>');
        $(this).hide();
        $(this).after(template);
    });
    $(".custom-option_people:first-of-type").hover(function () {
        $(this).parents(".custom-options_people").addClass("option-hover");
    }, function () {
        $(this).parents(".custom-options_people").removeClass("option-hover");
    });
    $(".custom-select-trigger_people").on("click", function () {
        $('.calendar_w').removeClass('open')
        $(this).parents(".custom-select_people").toggleClass("opened");
        event.stopPropagation();
    });
    $(".custom-option_people").on("click", function () {
        $(this).parents(".custom-select-wrapper_people").find("select").val($(this).data("value"));
        $(this).parents(".custom-options_people").find(".custom-option_people").removeClass("selection");
        $(this).addClass("selection");
        $(this).parents(".custom-select_people").removeClass("opened");
        $(this).parents(".custom-select_people").find(".custom-select-trigger_people").text($(this).text());


    });
}

select_2()

$.getScript("http://www.youtube.com/iframe_api");

function mask(inputName, mask, evt) {
    try {
        var text = document.getElementById(inputName);
        var value = text.value;

        // If user pressed DEL or BACK SPACE, clean the value
        try {
            var e = (evt.which) ? evt.which : event.keyCode;
            if ( e == 46 || e == 8 ) {
                text.value = "";
                return;
            }
        } catch (e1) {}

        var literalPattern=/[0\*]/;
        var numberPattern=/[0-9]/;
        var newValue = "";

        for (var vId = 0, mId = 0 ; mId < mask.length ; ) {
            if (mId >= value.length)
                break;

            // Number expected but got a different value, store only the valid portion
            if (mask[mId] == '0' && value[vId].match(numberPattern) == null) {
                break;
            }

            // Found a literal
            while (mask[mId].match(literalPattern) == null) {
                if (value[vId] == mask[mId])
                    break;

                newValue += mask[mId++];
            }

            newValue += value[vId++];
            mId++;
        }

        text.value = newValue;
    } catch(e) {}
}
function chat_bot() {
    var chat = $('.chat'),
        chat_window = $('.bot_window'),
        data_chat,
        button_chat,
        POST_time,
        POST_name_bot,
        POST_phone_bot,
        POST_email_bot,
        POST_position_bot,
        POST_institution,
        POST_people



    function ajax_chat() {
        $.ajax({
            url: 'get-bot',
            type: "POST",
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            processData: false,
            contentType: false,
            cache: false,
            dataType: "json",
            success: function (data) {
                data_chat = data
                button_chat = '<div class="button_one_block"><div class="button_chat">' + data_chat[0].question + '</div><div class="button_chat">' + data_chat[1].question + '</div><div class="button_chat">' + data_chat[2].question + '</div><div class="button_chat">' + data_chat[3].question + '</div></div>'


            },
        });
    }


    var messages = [
        {
            img: '/assets/img/icon/one_icon_chat.svg',
            h3: '<h3>Привіт! Я - <span>Кока Коля.</span></h3>',
            p: '<p>Я допоможу дізнатись цікаву для тебе інформацію.</p>',
            button: 'Добре. Почнемо'
        },
        {
            text: 'Що тебе цікавить?',
            text_next: 'У мене ще є питання'
        },
        {
            free_places: 'Вільні місця',
            sign_up: 'Записатися на екскурсію',
            cal_day: 'Виберіть дату',
            cal_time: 'А тепер час',
            cal_contact_1: 'Напиши інформацію щодо себе',
            cal_contact_2: 'А тепер ще трішки інформації'
        },
        {
            h3_fin: '<h3>Хей!</h3>',
            p_fin: '<p>Дзвоніть за номером гарячої лінії Кока-Кола</p>',
            ok_fin: 'ок'

        },
        {
            prev: 'Назад',
            next: 'Далі',
            finish: 'Завершити',
            finh3: 'Круто!',
            finh3_: 'Вітаю з заверщенням!',
            finhp: 'Тепер менеджер з тобою зв’яжеться для отримання більш детальньої інформації',
            finhwin: 'ОК'
        },
        {
            name_bot: 'Ім’я та Прізвище',
            phone_bot: 'Телефон',
            email_bot: 'Пошта',
            position_bot: 'Посада',
            institution: 'Назва закладу'
        }
    ]

    var loader = '<div class="c-chat__item log"> <div class="loader"><span></span><span></span><span></span></div> </div>';


    chat.find('.chat_open').click(function () {
        chat_window.html('')
        chat.addClass('open')
        ajax_chat()
        chat_window.append(loader)
        setTimeout(function () {
            chat.find('.log').remove()
            one_ekran()
        }, 800)
    })

    function click_nav_bot() {
        $('.button_one_block .button_chat').click(function () {
            var text_a = $(this).text();
            if ($(this).index() == 0) {

                address(text_a)
            } else if ($(this).index() == 1) {
                content(text_a)
            } else if ($(this).index() == 2) {
                rules(text_a)
            } else if ($(this).index() == 3) {
                sign_up(text_a)
            }
        })
    }

    function one_ekran() {
        chat_window.append('<div class="hellow"><img src="' + messages[0].img + '" alt="">' + messages[0].h3 + '' + messages[0].p + '<div class="button_chat">' + messages[0].button + '</div></div>')
        $('.hellow .button_chat').click(function () {
            two_ekran()
        })
    }

    function two_ekran() {
        chat_window.html('')
        chat_window.append(loader)
        setTimeout(function () {
            chat.find('.log').remove()

            chat_window.append('<div class="c-chat__item chat__item_bot"><div class="c-chat__message"><p>' + messages[1].text + '</p></div></div>')
            chat_window.prepend(loader)
        }, 800)
        setTimeout(function () {
            chat.find('.log').remove()

            chat_window.prepend(button_chat)

            click_nav_bot()
        }, 1600)

    }


    function address(text_a) {
        chat.find('.button_one_block').remove()
        chat_window.prepend('<div class="c-chat__item c-chat__item--human"><div class="c-chat__message"> <p>' + text_a + '</p> </div></div>')
        setTimeout(function () {
            chat_window.prepend(loader)
        }, 300)
        setTimeout(function () {
            chat.find('.log').remove()

            chat_window.prepend('<div class="c-chat__item chat__item_bot"><div class="c-chat__message"><p>' + data_chat[0].answer + '</p></div></div>')
            chat_window.prepend(loader)
        }, 1100)
        setTimeout(function () {
            chat.find('.log').remove()

            chat_window.prepend('<div class="button_one_block"><div class="button_chat remove">' + messages[1].text_next + '</div></div>')
            $('.button_chat.remove').click(function () {
                $(this).remove()
                chat_window.prepend(button_chat)
                click_nav_bot()
            })
        }, 1900)
    }

    function content(text_a) {
        chat.find('.button_one_block').remove()
        chat_window.prepend('<div class="c-chat__item c-chat__item--human"><div class="c-chat__message"> <p>' + text_a + '</p> </div></div>')
        setTimeout(function () {
            chat_window.prepend(loader)
        }, 300)
        setTimeout(function () {
            chat.find('.log').remove()

            chat_window.prepend('<div class="c-chat__item chat__item_bot"><div class="c-chat__message"><p>' + data_chat[1].answer + '</p></div></div>')
            chat_window.prepend(loader)
        }, 1100)
        setTimeout(function () {
            chat.find('.log').remove()

            chat_window.prepend('<div class="button_one_block"><div class="button_chat remove">' + messages[1].text_next + '</div></div>')
            $('.button_chat.remove').click(function () {
                $(this).remove()
                chat_window.prepend(button_chat)
                click_nav_bot()
            })
        }, 1900)
    }

    function rules(text_a) {
        chat.find('.button_one_block').remove()
        chat_window.prepend('<div class="c-chat__item c-chat__item--human"><div class="c-chat__message"> <p>' + text_a + '</p> </div></div>')
        setTimeout(function () {
            chat_window.prepend(loader)
        }, 300)
        setTimeout(function () {
            chat.find('.log').remove()

            chat_window.prepend('<div class="c-chat__item chat__item_bot"><div class="c-chat__message"><p>' + data_chat[2].answer + '</p></div></div>')
            chat_window.prepend(loader)
        }, 1100)
        setTimeout(function () {
            chat.find('.log').remove()

            chat_window.prepend('<div class="button_one_block"><div class="button_chat remove">' + messages[1].text_next + '</div></div>')
            $('.button_chat.remove').click(function () {
                $(this).remove()
                chat_window.prepend(button_chat)
                click_nav_bot()
            })
        }, 1900)
    }

    function sign_up(text_a) {
        chat.find('.button_one_block').remove()
        chat_window.prepend('<div class="c-chat__item c-chat__item--human"><div class="c-chat__message"> <p>' + text_a + '</p> </div></div>')
        setTimeout(function () {
            chat_window.prepend(loader)
        }, 300)
        setTimeout(function () {
            chat.find('.log').remove()
            eskurs()
            // chat_window.prepend(loader)
        }, 1100)

    }


    function eskurs() {
        chat_window.prepend('<div class="button_one_block"><div class="button_chat sing">' + messages[2].free_places + '</div><div class="button_chat sing">' + messages[2].sign_up + '</div></div>')
        $('.button_chat.sing').click(function () {
            var text_a = $(this).text();

            if ($(this).index() == 0) {
                sign_up_1(text_a)
            } else {
                sign_up_2(text_a)
            }
        })
    }

    function sign_up_1(text_a) {
        chat.find('.button_one_block').remove()
        chat_window.html('')
        // chat_window.prepend('<div class="c-chat__item c-chat__item--human"><div class="c-chat__message"> <p>' + text_a + '</p> </div></div>')
        chat_window.prepend('<div class="c-chat__item chat__item_bot"><div class="c-chat__message"><p>' + messages[2].cal_day + '</p></div></div>')

        chat_window.prepend('<div class="bot_calendar"></div>')

        var $button = $('form .calendar_w').clone(true, true);
        $('.bot_calendar').html($button);
        chat_window.prepend('<div class="form_chat_c button_one_block"><div class="button_chat cl_prev">' + messages[4].prev + '</div><div class="button_chat cl_next">' + messages[4].next + '</div></div>')
        $('.month .arrow').click(function () {
            // oute()
            add_calendar()
        })

        function data_click_e() {
            $('.day.ng-scope').not('.disabled').on('click',function () {
                // oute()
                add_calendar()
            })

        }
        data_click_e()
        function add_calendar() {
            var $button = $('form .calendar_w').clone(true, true);
            // oute()
            $('.bot_calendar').html('');
            $('.bot_calendar').html($button);
            data_click_e()
        }

            angular.element(".day").triggerHandler("click");
        $('.cl_next').on('click',function () {
            sign_up_time()
        })
        $('.cl_prev').on('click',function () {
            chat_window.html('')
            var text_a = messages[2].sign_up
            sign_up(text_a)
        })

    }
    function sign_up_time() {
        chat_window.html('')
        chat_window.prepend('<div class="c-chat__item chat__item_bot"><div class="c-chat__message"><p>' + messages[2].cal_time + '</p></div></div>')
        chat_window.prepend('<div class="bot_time"></div>')
        var $timer = $('form .custom-options').clone(true, true);
        $('.bot_time').html($timer);
        chat_window.prepend('<div class="form_chat_c button_one_block"><div class="button_chat cl_prev">' + messages[4].prev + '</div><div class="button_chat cl_next disabled">' + messages[4].next + '</div></div>')
        $('.bot_time li').click(function () {
            $('.cl_next').removeClass('disabled')
        })

        $('.cl_prev').on('click',function () {
            chat_window.html('')
            sign_up_1()
        })
        $('.cl_next').on('click',function () {
            POST_time = $('.bot_time li.selection').data('value')
            sign_up_contactD()
        })
    }
    function sign_up_contactD() {
        chat_window.html('')
        chat_window.prepend('<div class="c-chat__item chat__item_bot"><div class="c-chat__message"><p>' + messages[2].cal_contact_1 + '</p></div></div>')
        chat_window.prepend('<div class="bot_contacts">' +
            '<div class="name">\n' +
            '<input type="text" id="name_bot" name="name_bot" autocomplete="off">\n' +
            '<label for="name_bot">'+messages[5].name_bot+'</label>\n' +
            '</div>' +
            '<div class="tell">\n' +
            '<input type="text" id="phone_bot" onkeyup="javascript:mask(\'phone_bot\', \'+3(000)000 00 00\', event);"  name="phone_bot" autocomplete="off">\n' +
            '<label for="phone_bot">'+messages[5].phone_bot+'</label>\n' +
            '</div>' +
            '<div class="email">\n' +
            '<input type="email" id="email_bot" name="email_bot" autocomplete="off">\n' +
            '<label for="email_bot">'+messages[5].email_bot+'</label>\n' +
            '</div>' +
            '<div class="pole_form">\n' +
            '<input type="text" id="position_bot" name="position_bot" autocomplete="off">\n' +
            '<label for="position_bot">'+messages[5].position_bot+'</label>\n' +
            '</div>' +
            '</div>');

        var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
        $('.bot_contacts input').change(function () {
            el = $(this);
            el.each(function () {
                if (el.val().length > 0) {
                    el.parent().find('label').addClass('label-stay')
                } else {
                    el.parent().find('label').removeClass('label-stay')
                }
            })

            if ($('#name_bot').val().length > 3 && $('#phone_bot').val().length >= 13 && pattern.test($('#email_bot').val()) == true && $('#position_bot').val().length >= 3) {
                $('.cl_next').removeClass('disabled')
            }else {
                $('.cl_next').addClass('disabled')
            }


        });

        $('.bot_contacts input').keypress(function () {

            if ($('#name_bot').val().length > 3 && $('#phone_bot').val().length >= 13 && pattern.test($('#email_bot').val()) == true && $('#position_bot').val().length >= 3) {
                $('.cl_next').removeClass('disabled')
            } else {
                $('.cl_next').addClass('disabled')
            }
        });
        chat_window.prepend('<div class="form_chat_c button_one_block"><div class="button_chat cl_prev">' + messages[4].prev + '</div><div class="button_chat cl_next disabled">' + messages[4].next + '</div></div>')
        $('.cl_prev').on('click',function () {
            chat_window.html('')
            sign_up_time()
        })
        $('.cl_next').on('click',function () {
            POST_name_bot = $('#name_bot').val();
            POST_phone_bot = $('#phone_bot').val();
            POST_email_bot = $('#email_bot').val();
            POST_position_bot = $('#position_bot').val();
            sign_up_contactT()
        })

    }
    function sign_up_contactT() {

        var $position = $('form .pole_form').eq(2).clone(true, true);
        chat_window.html('');
        chat_window.prepend('<div class="c-chat__item chat__item_bot"><div class="c-chat__message"><p>' + messages[2].cal_contact_2 + '</p></div></div>')
        chat_window.prepend('<div class="bot_contacts">' +
            '<div class="name">\n' +
            '<input type="text" id="institution_bot" name="institution_bot" autocomplete="off">\n' +
            '<label for="institution_bot">'+messages[5].institution+'</label>\n' +
            '</div>' +
            '</div>');
        $position.appendTo('.bot_contacts')
        chat_window.prepend('<div class="form_chat_c button_one_block"><div class="button_chat cl_prev">' + messages[4].prev + '</div><div class="button_chat cl_next disabled">' + messages[4].finish + '</div></div>')


        $('.bot_contacts input').change(function () {
            el = $(this);
            el.each(function () {
                if (el.val().length > 0) {
                    el.parent().find('label').addClass('label-stay')
                } else {
                    el.parent().find('label').removeClass('label-stay')
                }
            })

            if ($('#institution_bot').val().length > 3 && $('.bot_contacts .custom-option_people.selection').index() != 0) {
                $('.cl_next').removeClass('disabled')
            }else {
                $('.cl_next').addClass('disabled')
            }


        });
        $('.bot_contacts .custom-option_people').click(function () {
            if ($('.bot_contacts .custom-option_people.selection').index() != 0 && $('#institution_bot').val().length > 3) {
                $('.cl_next').removeClass('disabled')
            } else {
                $('.cl_next').addClass('disabled')
            }
        })
        $('.bot_contacts input').keypress(function () {

            if ($('#institution_bot').val().length > 3 && $('.bot_contacts .custom-option_people.selection').index() != 0) {
                $('.cl_next').removeClass('disabled')
            } else {
                $('.cl_next').addClass('disabled')
            }
        });


        $('.cl_prev').on('click',function () {
            chat_window.html('');
            sign_up_contactD()
        })
        $('.cl_next').on('click',function () {
            POST_institution = $('#institution_bot').val()
            POST_people = $('.bot_contacts .custom-option_people.selection').data('value')
            $.ajax({
                url: 'add-excursions',
                type: "POST",
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                data: {
                    'name': POST_name_bot,
                    'phone': POST_phone_bot,
                    'email': POST_email_bot,
                    'position': POST_position_bot,
                    'institution':POST_institution,
                    'people': POST_people,
                    'interval': POST_time,
                    'trip-month': data_mone,
                    'trip-day':data_day
                },
                dataType: "json",
                success: function (data) {
                    if (data.status == 'Екскурсію збережено.') {
                        chat_window.html('')
                        chat_window.append('<div class="hellow"><img src="' + messages[0].img + '" alt=""><h3>' + messages[4].finh3 + '<br>' + messages[4].finh3_ + '</h3><p>' + messages[4].finhp + '</p><div class="button_chat">' + messages[4].finhwin + '</div></div>')
                        $('.hellow .button_chat').click(function () {
                            chat.removeClass('open')
                            chat_window.html('')
                        })
                    }

                }
            });


            console.log(POST_time,
                POST_name_bot,
                POST_phone_bot,
                POST_email_bot,
                POST_position_bot,
                POST_institution,POST_institution,POST_people, data_mone, data_day);
        })
    }
    function sign_up_2(text_a) {
        chat.find('.button_one_block').remove()
        setTimeout(function () {
            chat_window.prepend(loader)
        }, 300)
        setTimeout(function () {
            chat.find('.log').remove()
            chat_window.html('')
            chat_window.append('<div class="hellow fin"><img src="' + messages[0].img + '" alt="">' + messages[3].h3_fin + '' + messages[3].p_fin + '<h5>' + data_chat[4].answer + '</h5><div class="button_chat">' + messages[3].ok_fin + '</div></div>')
            chat.find('.fin .button_chat').click(function () {
                chat.removeClass('open')
                chat_window.html('')

            })
            // chat_window.prepend(loader)
        }, 1100)
    }

    chat.find('.chat_close').click(function () {
        chat.removeClass('open')
        chat_window.html('')


    })


}

function private_() {
    var cd_modal = $('.cd-modal')
    $('.footer__column:nth-child(2)').find('a').click(function (e) {
        $('body').addClass('nooverflow')
        e.preventDefault()

        if ($(this).index() == 0) {
            cd_modal.eq(0).addClass('modal-is-visible')
        } else if ($(this).index() == 1) {
            cd_modal.eq(1).addClass('modal-is-visible')
        }
    })
    $('.close-privacy').click(function (e) {
        e.preventDefault()
        $('body').removeClass('nooverflow')
        cd_modal.removeClass('modal-is-visible')
    })
}

function top_menu_active() {

    var lastId,
        topMenu = $(".head li"),
        topMenuHeight = topMenu.outerHeight() + 150,
        menuItems = topMenu.find("a"),
        scrollItems = menuItems.map(function () {
            var item = $($(this).attr("href"));
            if (item.length) {
                return item;
            }
        });

    menuItems.click(function (e) {
        var href = $(this).attr("href"),
            offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;
        $('html, body').stop().animate({
            scrollTop: offsetTop
        }, 300);
        e.preventDefault();
        if($( window ).width() < 1025) {
            setTimeout(function () {
                $('.mobile_nav').removeClass('open_menu')
                $('body').removeClass('bg_blur')
            },300)

        }
    });

    $(window).scroll(function () {
        var fromTop = $(this).scrollTop() + topMenuHeight;

        var cur = scrollItems.map(function () {
            if ($(this).offset().top < fromTop)
                return this;
        });
        cur = cur[cur.length - 1];
        var id = cur && cur.length ? cur[0].id : "";

        if (lastId !== id) {
            lastId = id;
            menuItems
                .parent().removeClass("active")
                .end().filter("[href='#" + id + "']").parent().addClass("active");
        }
    });
}

$(document).ready(function () {
    chat_bot()
    private_()
    top_menu_active()


    function f2() {
        var el = $('.slider_top'),
            curr_obj = 0;

        $('.nav_slider_top').find('.reviews-dots').html('');

        function sliderRemote() {
            dots = ""

            for (var i = 0; i < $('.slider_top_img img').length; i++) {
                dots += i == 0 ? '<div class="reviews-dot active" data-id="' + i + '"></div>' : '<div class="reviews-dot" data-id="' + i + '"></div>';
                // $('.circle-button_id').eq(i).attr('data-id', +i);
            }

            $('.nav_slider_top').find('.reviews-dots').append(dots)

            $('.nav_slider_top .nav-control').click(function () {
                nav_container = $('.slider_top_img img');
                $(this).hasClass('nav-control_prev') ? (curr_obj -= 1, curr_obj < 0 ? curr_obj = nav_container.length - 1 : '') : (curr_obj += 1, curr_obj == nav_container.length ? curr_obj = 0 : '');
                nav_container.removeClass('active');
                $('.reviews-dot').removeClass('active');
                nav_container.eq(curr_obj).addClass('active');
                $('.reviews-dot').eq(curr_obj).addClass('active');

            })


        }

        sliderRemote()


    }

    f2()

    function f3() {
        $('.gallery-area .gallery_block').not('.gallery_coca').click(function () {
            $('.pop_up').addClass('open')
            $('body').addClass('hover_full')
            $('.slider_popUp').html('')
            $('.slider_popUp').append('<div class="popUp_c"></div>')
            $('.slider_popUp .popUp_c').append($('.gallery_block').clone())
            id = $(this).data('id')
            data = $('.slider_popUp .gallery_block')
            for (var i = 0; i < $('.slider_popUp .gallery_block').length; i++) {
                if (id == data.eq(i).data('id')) {
                    data.eq(i).addClass('active')
                }
            }


        })
        $('.pop_up .close').click(function () {
            $('.pop_up').removeClass('open')
            $('body').removeClass('hover_full')
            $('.slider_popUp').html(' ')
        })
        $('.about-img').click(function () {
            $('.pop_up').addClass('open')
            $('body').addClass('hover_full')
            $('.slider_popUp').append('<div id="videoframe" class="video" data-video="' + $(this).data('video') + '"></div')
            var tag = document.createElement("script");
            tag.src = "https://www.youtube.com/iframe_api";
            var firstScriptTag = document.getElementsByTagName("script")[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

            var player = [];
            var videoDiv = $(".video");
            onYouTubeIframeAPIReady()

            function onYouTubeIframeAPIReady() {
                for (var a = 0; a < videoDiv.length; a++) {
                    videoDiv[a].id = "videoframe" + a;
                    video = videoDiv[a].getAttribute("data-video");

                    player["videoframe" + a] = new YT.Player(videoDiv[a], {
                        height: "100%",
                        width: "640",
                        videoId: videoDiv[a].getAttribute("data-video"),

                    })
                }
            }


        })


    }

    f3()


    $('.check_text input').change(function () {
        if ($(this).is(":checked")) {
            $('.check_text textarea').addClass('open')
        } else {
            $('.check_text textarea').removeClass('open')
        }

    })
    $('fieldset:nth-child(1) input').change(function () {
        el = $(this);
        el.each(function () {
            if (el.val().length > 0) {
                el.parent().find('label').addClass('label-stay')
            } else {
                el.parent().find('label').removeClass('label-stay')
            }
        })
    })

    function slider_galery() {
        var tag = document.createElement("script");
        tag.src = "https://www.youtube.com/iframe_api";
        var firstScriptTag = document.getElementsByTagName("script")[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        var player = [];
        var videoDiv = $(".video_galegy");


        onYouTubeIframeAPIReady = function () {
            for (var a = 0; a < videoDiv.length; a++) {
                videoDiv[a].id = "video_galegy" + a;
                video = videoDiv[a].getAttribute("data-video");

                player["video_galegy" + a] = new YT.Player(videoDiv[a], {
                    height: "100%",
                    width: "640",
                    videoId: videoDiv[a].getAttribute("data-video"),
                    playerVars: {
                        showinfo: 0,
                        color: "white",
                        cc_load_policy: 1,
                        disablekb: 1,
                        enablejsapi: 1,
                        loop: 1,
                        modestbranding: 1,
                        rel: 0,
                        fs: 0
                    },
                })
            }
        }


        var allElements = Array.from($('.gallery_slider').find(".gallery_block"));
        if (window.matchMedia("(min-width: 1026px)").matches) {

            for (var p = 0; p < allElements.length; p += 3) {
                var wrap = document.createElement("div");
                wrap.classList.add("conteiner_slider");
                for (var j = 0; j < 3; j++) {
                    if (p + j < allElements.length) {
                        wrap.append(allElements[p + j]);
                    }
                }
                $('.gallery_slider').append(wrap);
            }
            // var nn = (container.find('.maii-item').length * 7) - container.find('.item-senn').length

        } else if (window.matchMedia("(max-width: 1025px)").matches) {
            for (var p = 0; p < allElements.length; p += 1) {
                var wrap = document.createElement("div");
                wrap.classList.add("conteiner_slider");
                for (var j = 0; j < 1; j++) {
                    if (p + j < allElements.length) {
                        wrap.append(allElements[p + j]);
                    }
                }
                $('.gallery_slider').append(wrap);
            }
        }

        $('.conteiner_slider').eq(0).addClass('active')
        curr_obj = 0;
        $('.gallery-area .nav-control').click(function () {
            nav_container = $('.conteiner_slider');
            $(this).hasClass('nav-control_prev') ? (curr_obj -= 1, curr_obj < 0 ? curr_obj = nav_container.length - 1 : '') : (curr_obj += 1, curr_obj == nav_container.length ? curr_obj = 0 : '');
            nav_container.removeClass('active');
            nav_container.eq(curr_obj).addClass('active');

        })

    }

    slider_galery()

    function form() {

        var b = 5 * 1024 * 1024;
        var d = {};
        d[""];

        $(".file-don").click(function () {
            $("#addFile").trigger("click")
        });
        $("#addFile").on("change", function () {
            // setWidthToSpan();
            var m = this.files;
            for (var k = 0; k < m.length; k++) {
                var j = m[k];
                if (j.type != "application/pdf") {
                    alert("Файл должна быть в формате pdf");
                    continue
                }
                if (j.size > b) {
                    alert("Размер файла не должен превышать 5 Мб");
                    continue
                }
                file(m[k])
            }
            this.value = ""
        });

        function file(k) {
            var j = new FileReader();
            j.addEventListener("load", function (m) {
                d[k.name] = k
            });
            j.readAsDataURL(k)
        }

        $('.form_sec5 form').submit(function (j) {
            j.preventDefault()
            var formData = new FormData(this);

            for (var l in d) {
                formData.append("file", d[l])
            }
            formData.append('trip-month', data_mone)
            formData.append('trip-day', data_day)
            // data_day = date.day;
            // data_mone = date.month
            console.log(d, formData);
            $.ajax({
                url: 'add-excursions',
                type: "POST",
                mimeType: "multipart/form-data",
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },

                data: formData,
                processData: false,
                contentType: false,
                cache: false,
                dataType: "json",
                success: function (data) {
                    if (data.status == 'Екскурсію збережено.') {
                        $('.form_sec5 form').find('input').val('')

                        $('body').addClass('hover_full')
                        $('.pop_blag').addClass('open')
                        console.log(56454);

                        $('.pop_blag .close').click(function () {
                            $('body').removeClass('hover_full')
                            $('.pop_blag').removeClass('open')
                        })
                    } else {
                        console.log(555);
                    }

                },
                error: function (xhr, ajaxOptions, thrownError) {
                   var erf = xhr.responseText
                    erf = JSON.parse(erf);

                   var form_sec5 = $('.form_sec5')

                    if (erf.errors.email != undefined) {
                        form_sec5.find('.email').addClass('error')
                    } else {
                        form_sec5.find('.email').removeClass('error')
                    }
                    if (erf.errors.institution != undefined) {
                        form_sec5.find('#institution').parent().addClass('error')
                    }
                    else {
                        form_sec5.find('#institution').parent().removeClass('error')
                    }
                    if (erf.errors.name != undefined) {
                        form_sec5.find('.name').addClass('error')
                    }else {
                        form_sec5.find('.name').parent().removeClass('error')
                    }
                    if (erf.errors.people != undefined) {
                        form_sec5.find('.custom-select_people').addClass('error')
                    }else {
                        form_sec5.find('.custom-select_people').removeClass('error')
                    }
                    if (erf.errors.phone != undefined) {
                        form_sec5.find('.tell').addClass('error')
                    }else {
                        form_sec5.find('.tell').removeClass('error')
                    }
                    if (erf.errors.position != undefined) {
                        form_sec5.find('input#position').parent().addClass('error')
                    }else {
                        form_sec5.find('input#position').parent().removeClass('error')
                    }
                }
            });
        })


    }

    form()
});


/*****************************************/

/*****************************************/
function angular_js() {

    (function (N, W, u) {
        'use strict';

        function F(b) {
            return function () {
                var a = arguments[0], c;
                c = "[" + (b ? b + ":" : "") + a + "] http://errors.angularjs.org/1.4.0/" + (b ? b + "/" : "") + a;
                for (a = 1; a < arguments.length; a++) {
                    c = c + (1 == a ? "?" : "&") + "p" + (a - 1) + "=";
                    var d = encodeURIComponent, e;
                    e = arguments[a];
                    e = "function" == typeof e ? e.toString().replace(/ \{[\s\S]*$/, "") : "undefined" == typeof e ? "undefined" : "string" != typeof e ? JSON.stringify(e) : e;
                    c += d(e)
                }
                return Error(c)
            }
        }

        function Da(b) {
            if (null == b || Ta(b)) return !1;
            var a = "length" in Object(b) && b.length;
            return b.nodeType === pa && a ? !0 : L(b) || K(b) || 0 === a || "number" === typeof a && 0 < a && a - 1 in b
        }

        function n(b, a, c) {
            var d, e;
            if (b) if (G(b)) for (d in b) "prototype" == d || "length" == d || "name" == d || b.hasOwnProperty && !b.hasOwnProperty(d) || a.call(c, b[d], d, b); else if (K(b) || Da(b)) {
                var f = "object" !== typeof b;
                d = 0;
                for (e = b.length; d < e; d++) (f || d in b) && a.call(c, b[d], d, b)
            } else if (b.forEach && b.forEach !== n) b.forEach(a, c, b); else if (nc(b)) for (d in b) a.call(c, b[d], d, b); else if ("function" === typeof b.hasOwnProperty) for (d in b) b.hasOwnProperty(d) &&
            a.call(c, b[d], d, b); else for (d in b) kb.call(b, d) && a.call(c, b[d], d, b);
            return b
        }

        function oc(b, a, c) {
            for (var d = Object.keys(b).sort(), e = 0; e < d.length; e++) a.call(c, b[d[e]], d[e]);
            return d
        }

        function pc(b) {
            return function (a, c) {
                b(c, a)
            }
        }

        function Td() {
            return ++lb
        }

        function qc(b, a) {
            a ? b.$$hashKey = a : delete b.$$hashKey
        }

        function Nb(b, a, c) {
            for (var d = b.$$hashKey, e = 0, f = a.length; e < f; ++e) {
                var g = a[e];
                if (C(g) || G(g)) for (var h = Object.keys(g), l = 0, k = h.length; l < k; l++) {
                    var m = h[l], r = g[m];
                    c && C(r) ? (C(b[m]) || (b[m] = K(r) ? [] : {}), Nb(b[m],
                        [r], !0)) : b[m] = r
                }
            }
            qc(b, d);
            return b
        }

        function Q(b) {
            return Nb(b, ra.call(arguments, 1), !1)
        }

        function Ud(b) {
            return Nb(b, ra.call(arguments, 1), !0)
        }

        function Y(b) {
            return parseInt(b, 10)
        }

        function Ob(b, a) {
            return Q(Object.create(b), a)
        }

        function w() {
        }

        function Ua(b) {
            return b
        }

        function qa(b) {
            return function () {
                return b
            }
        }

        function v(b) {
            return "undefined" === typeof b
        }

        function y(b) {
            return "undefined" !== typeof b
        }

        function C(b) {
            return null !== b && "object" === typeof b
        }

        function nc(b) {
            return null !== b && "object" === typeof b && !rc(b)
        }

        function L(b) {
            return "string" ===
                typeof b
        }

        function V(b) {
            return "number" === typeof b
        }

        function da(b) {
            return "[object Date]" === sa.call(b)
        }

        function G(b) {
            return "function" === typeof b
        }

        function Va(b) {
            return "[object RegExp]" === sa.call(b)
        }

        function Ta(b) {
            return b && b.window === b
        }

        function Wa(b) {
            return b && b.$evalAsync && b.$watch
        }

        function Xa(b) {
            return "boolean" === typeof b
        }

        function sc(b) {
            return !(!b || !(b.nodeName || b.prop && b.attr && b.find))
        }

        function Vd(b) {
            var a = {};
            b = b.split(",");
            var c;
            for (c = 0; c < b.length; c++) a[b[c]] = !0;
            return a
        }

        function ta(b) {
            return E(b.nodeName ||
                b[0] && b[0].nodeName)
        }

        function Ya(b, a) {
            var c = b.indexOf(a);
            0 <= c && b.splice(c, 1);
            return c
        }

        function ua(b, a, c, d) {
            function e(a, b, c, d, e) {
                var f = ua(b, null, d, e);
                C(b) && (d.push(b), e.push(f));
                c[a] = f
            }

            if (Ta(b) || Wa(b)) throw Ea("cpws");
            if (tc.test(sa.call(a))) throw Ea("cpta");
            if (a) {
                if (b === a) throw Ea("cpi");
                c = c || [];
                d = d || [];
                if (C(b)) {
                    var f = c.indexOf(b);
                    if (-1 !== f) return d[f];
                    c.push(b);
                    d.push(a)
                }
                var g;
                if (K(b)) for (f = a.length = 0; f < b.length; f++) g = ua(b[f], null, c, d), C(b[f]) && (c.push(b[f]), d.push(g)), a.push(g); else {
                    f = a.$$hashKey;
                    K(a) ? a.length = 0 : n(a, function (b, c) {
                        delete a[c]
                    });
                    if (nc(b)) for (g in b) e(g, b[g], a, c, d); else if (b && "function" === typeof b.hasOwnProperty) for (g in b) b.hasOwnProperty(g) && e(g, b[g], a, c, d); else for (g in b) kb.call(b, g) && e(g, b[g], a, c, d);
                    qc(a, f)
                }
            } else if (a = b) K(b) ? a = ua(b, [], c, d) : tc.test(sa.call(b)) ? a = new b.constructor(b) : da(b) ? a = new Date(b.getTime()) : Va(b) ? (a = new RegExp(b.source, b.toString().match(/[^\/]*$/)[0]), a.lastIndex = b.lastIndex) : C(b) && (g = Object.create(rc(b)), a = ua(b, g, c, d));
            return a
        }

        function fa(b, a) {
            if (K(b)) {
                a =
                    a || [];
                for (var c = 0, d = b.length; c < d; c++) a[c] = b[c]
            } else if (C(b)) for (c in a = a || {}, b) if ("$" !== c.charAt(0) || "$" !== c.charAt(1)) a[c] = b[c];
            return a || b
        }

        function ka(b, a) {
            if (b === a) return !0;
            if (null === b || null === a) return !1;
            if (b !== b && a !== a) return !0;
            var c = typeof b, d;
            if (c == typeof a && "object" == c) if (K(b)) {
                if (!K(a)) return !1;
                if ((c = b.length) == a.length) {
                    for (d = 0; d < c; d++) if (!ka(b[d], a[d])) return !1;
                    return !0
                }
            } else {
                if (da(b)) return da(a) ? ka(b.getTime(), a.getTime()) : !1;
                if (Va(b)) return Va(a) ? b.toString() == a.toString() : !1;
                if (Wa(b) ||
                    Wa(a) || Ta(b) || Ta(a) || K(a) || da(a) || Va(a)) return !1;
                c = ga();
                for (d in b) if ("$" !== d.charAt(0) && !G(b[d])) {
                    if (!ka(b[d], a[d])) return !1;
                    c[d] = !0
                }
                for (d in a) if (!(d in c || "$" === d.charAt(0) || a[d] === u || G(a[d]))) return !1;
                return !0
            }
            return !1
        }

        function Za(b, a, c) {
            return b.concat(ra.call(a, c))
        }

        function uc(b, a) {
            var c = 2 < arguments.length ? ra.call(arguments, 2) : [];
            return !G(a) || a instanceof RegExp ? a : c.length ? function () {
                return arguments.length ? a.apply(b, Za(c, arguments, 0)) : a.apply(b, c)
            } : function () {
                return arguments.length ? a.apply(b,
                    arguments) : a.call(b)
            }
        }

        function Wd(b, a) {
            var c = a;
            "string" === typeof b && "$" === b.charAt(0) && "$" === b.charAt(1) ? c = u : Ta(a) ? c = "$WINDOW" : a && W === a ? c = "$DOCUMENT" : Wa(a) && (c = "$SCOPE");
            return c
        }

        function $a(b, a) {
            if ("undefined" === typeof b) return u;
            V(a) || (a = a ? 2 : null);
            return JSON.stringify(b, Wd, a)
        }

        function vc(b) {
            return L(b) ? JSON.parse(b) : b
        }

        function wc(b, a) {
            var c = Date.parse("Jan 01, 1970 00:00:00 " + b) / 6E4;
            return isNaN(c) ? a : c
        }

        function Pb(b, a, c) {
            c = c ? -1 : 1;
            var d = wc(a, b.getTimezoneOffset());
            a = b;
            b = c * (d - b.getTimezoneOffset());
            a = new Date(a.getTime());
            a.setMinutes(a.getMinutes() + b);
            return a
        }

        function va(b) {
            b = z(b).clone();
            try {
                b.empty()
            } catch (a) {
            }
            var c = z("<div>").append(b).html();
            try {
                return b[0].nodeType === ab ? E(c) : c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function (a, b) {
                    return "<" + E(b)
                })
            } catch (d) {
                return E(c)
            }
        }

        function xc(b) {
            try {
                return decodeURIComponent(b)
            } catch (a) {
            }
        }

        function yc(b) {
            var a = {}, c, d;
            n((b || "").split("&"), function (b) {
                b && (c = b.replace(/\+/g, "%20").split("="), d = xc(c[0]), y(d) && (b = y(c[1]) ? xc(c[1]) : !0, kb.call(a, d) ? K(a[d]) ?
                    a[d].push(b) : a[d] = [a[d], b] : a[d] = b))
            });
            return a
        }

        function Qb(b) {
            var a = [];
            n(b, function (b, d) {
                K(b) ? n(b, function (b) {
                    a.push(ia(d, !0) + (!0 === b ? "" : "=" + ia(b, !0)))
                }) : a.push(ia(d, !0) + (!0 === b ? "" : "=" + ia(b, !0)))
            });
            return a.length ? a.join("&") : ""
        }

        function mb(b) {
            return ia(b, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
        }

        function ia(b, a) {
            return encodeURIComponent(b).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%20/g, a ? "%20" : "+")
        }

        function Xd(b, a) {
            var c, d, e = Na.length;
            for (d = 0; d < e; ++d) if (c = Na[d] + a, L(c = b.getAttribute(c))) return c;
            return null
        }

        function Yd(b, a) {
            var c, d, e = {};
            n(Na, function (a) {
                a += "app";
                !c && b.hasAttribute && b.hasAttribute(a) && (c = b, d = b.getAttribute(a))
            });
            n(Na, function (a) {
                a += "app";
                var e;
                !c && (e = b.querySelector("[" + a.replace(":", "\\:") + "]")) && (c = e, d = e.getAttribute(a))
            });
            c && (e.strictDi = null !== Xd(c, "strict-di"), a(c, d ? [d] : [], e))
        }

        function zc(b, a, c) {
            C(c) || (c = {});
            c = Q({strictDi: !1}, c);
            var d = function () {
                b = z(b);
                if (b.injector()) {
                    var d =
                        b[0] === W ? "document" : va(b);
                    throw Ea("btstrpd", d.replace(/</, "&lt;").replace(/>/, "&gt;"));
                }
                a = a || [];
                a.unshift(["$provide", function (a) {
                    a.value("$rootElement", b)
                }]);
                c.debugInfoEnabled && a.push(["$compileProvider", function (a) {
                    a.debugInfoEnabled(!0)
                }]);
                a.unshift("ng");
                d = bb(a, c.strictDi);
                d.invoke(["$rootScope", "$rootElement", "$compile", "$injector", function (a, b, c, d) {
                    a.$apply(function () {
                        b.data("$injector", d);
                        c(b)(a)
                    })
                }]);
                return d
            }, e = /^NG_ENABLE_DEBUG_INFO!/, f = /^NG_DEFER_BOOTSTRAP!/;
            N && e.test(N.name) && (c.debugInfoEnabled =
                !0, N.name = N.name.replace(e, ""));
            if (N && !f.test(N.name)) return d();
            N.name = N.name.replace(f, "");
            aa.resumeBootstrap = function (b) {
                n(b, function (b) {
                    a.push(b)
                });
                return d()
            };
            G(aa.resumeDeferredBootstrap) && aa.resumeDeferredBootstrap()
        }

        function Zd() {
            N.name = "NG_ENABLE_DEBUG_INFO!" + N.name;
            N.location.reload()
        }

        function $d(b) {
            b = aa.element(b).injector();
            if (!b) throw Ea("test");
            return b.get("$$testability")
        }

        function Ac(b, a) {
            a = a || "_";
            return b.replace(ae, function (b, d) {
                return (d ? a : "") + b.toLowerCase()
            })
        }

        function be() {
            var b;
            if (!Bc) {
                var a = nb();
                la = N.jQuery;
                y(a) && (la = null === a ? u : N[a]);
                la && la.fn.on ? (z = la, Q(la.fn, {
                    scope: Oa.scope,
                    isolateScope: Oa.isolateScope,
                    controller: Oa.controller,
                    injector: Oa.injector,
                    inheritedData: Oa.inheritedData
                }), b = la.cleanData, la.cleanData = function (a) {
                    var d;
                    if (Rb) Rb = !1; else for (var e = 0, f; null != (f = a[e]); e++) (d = la._data(f, "events")) && d.$destroy && la(f).triggerHandler("$destroy");
                    b(a)
                }) : z = R;
                aa.element = z;
                Bc = !0
            }
        }

        function Sb(b, a, c) {
            if (!b) throw Ea("areq", a || "?", c || "required");
            return b
        }

        function Pa(b, a, c) {
            c &&
            K(b) && (b = b[b.length - 1]);
            Sb(G(b), a, "not a function, got " + (b && "object" === typeof b ? b.constructor.name || "Object" : typeof b));
            return b
        }

        function Qa(b, a) {
            if ("hasOwnProperty" === b) throw Ea("badname", a);
        }

        function Cc(b, a, c) {
            if (!a) return b;
            a = a.split(".");
            for (var d, e = b, f = a.length, g = 0; g < f; g++) d = a[g], b && (b = (e = b)[d]);
            return !c && G(b) ? uc(e, b) : b
        }

        function ob(b) {
            var a = b[0];
            b = b[b.length - 1];
            var c = [a];
            do {
                a = a.nextSibling;
                if (!a) break;
                c.push(a)
            } while (a !== b);
            return z(c)
        }

        function ga() {
            return Object.create(null)
        }

        function ce(b) {
            function a(a,
                       b, c) {
                return a[b] || (a[b] = c())
            }

            var c = F("$injector"), d = F("ng");
            b = a(b, "angular", Object);
            b.$$minErr = b.$$minErr || F;
            return a(b, "module", function () {
                var b = {};
                return function (f, g, h) {
                    if ("hasOwnProperty" === f) throw d("badname", "module");
                    g && b.hasOwnProperty(f) && (b[f] = null);
                    return a(b, f, function () {
                        function a(c, d, e, f) {
                            f || (f = b);
                            return function () {
                                f[e || "push"]([c, d, arguments]);
                                return A
                            }
                        }

                        if (!g) throw c("nomod", f);
                        var b = [], d = [], e = [], s = a("$injector", "invoke", "push", d), A = {
                            _invokeQueue: b,
                            _configBlocks: d,
                            _runBlocks: e,
                            requires: g,
                            name: f,
                            provider: a("$provide", "provider"),
                            factory: a("$provide", "factory"),
                            service: a("$provide", "service"),
                            value: a("$provide", "value"),
                            constant: a("$provide", "constant", "unshift"),
                            decorator: a("$provide", "decorator"),
                            animation: a("$animateProvider", "register"),
                            filter: a("$filterProvider", "register"),
                            controller: a("$controllerProvider", "register"),
                            directive: a("$compileProvider", "directive"),
                            config: s,
                            run: function (a) {
                                e.push(a);
                                return this
                            }
                        };
                        h && s(h);
                        return A
                    })
                }
            })
        }

        function de(b) {
            Q(b, {
                bootstrap: zc,
                copy: ua,
                extend: Q,
                merge: Ud,
                equals: ka,
                element: z,
                forEach: n,
                injector: bb,
                noop: w,
                bind: uc,
                toJson: $a,
                fromJson: vc,
                identity: Ua,
                isUndefined: v,
                isDefined: y,
                isString: L,
                isFunction: G,
                isObject: C,
                isNumber: V,
                isElement: sc,
                isArray: K,
                version: ee,
                isDate: da,
                lowercase: E,
                uppercase: pb,
                callbacks: {counter: 0},
                getTestability: $d,
                $$minErr: F,
                $$csp: cb,
                reloadWithDebugInfo: Zd
            });
            db = ce(N);
            try {
                db("ngLocale")
            } catch (a) {
                db("ngLocale", []).provider("$locale", fe)
            }
            db("ng", ["ngLocale"], ["$provide", function (a) {
                a.provider({$$sanitizeUri: ge});
                a.provider("$compile",
                    Dc).directive({
                    a: he,
                    input: Ec,
                    textarea: Ec,
                    form: ie,
                    script: je,
                    select: ke,
                    style: le,
                    option: me,
                    ngBind: ne,
                    ngBindHtml: oe,
                    ngBindTemplate: pe,
                    ngClass: qe,
                    ngClassEven: re,
                    ngClassOdd: se,
                    ngCloak: te,
                    ngController: ue,
                    ngForm: ve,
                    ngHide: we,
                    ngIf: xe,
                    ngInclude: ye,
                    ngInit: ze,
                    ngNonBindable: Ae,
                    ngPluralize: Be,
                    ngRepeat: Ce,
                    ngShow: De,
                    ngStyle: Ee,
                    ngSwitch: Fe,
                    ngSwitchWhen: Ge,
                    ngSwitchDefault: He,
                    ngOptions: Ie,
                    ngTransclude: Je,
                    ngModel: Ke,
                    ngList: Le,
                    ngChange: Me,
                    pattern: Fc,
                    ngPattern: Fc,
                    required: Gc,
                    ngRequired: Gc,
                    minlength: Hc,
                    ngMinlength: Hc,
                    maxlength: Ic,
                    ngMaxlength: Ic,
                    ngValue: Ne,
                    ngModelOptions: Oe
                }).directive({ngInclude: Pe}).directive(qb).directive(Jc);
                a.provider({
                    $anchorScroll: Qe,
                    $animate: Re,
                    $$animateQueue: Se,
                    $$AnimateRunner: Te,
                    $browser: Ue,
                    $cacheFactory: Ve,
                    $controller: We,
                    $document: Xe,
                    $exceptionHandler: Ye,
                    $filter: Kc,
                    $interpolate: Ze,
                    $interval: $e,
                    $http: af,
                    $httpParamSerializer: bf,
                    $httpParamSerializerJQLike: cf,
                    $httpBackend: df,
                    $location: ef,
                    $log: ff,
                    $parse: gf,
                    $rootScope: hf,
                    $q: jf,
                    $$q: kf,
                    $sce: lf,
                    $sceDelegate: mf,
                    $sniffer: nf,
                    $templateCache: of,
                    $templateRequest: pf,
                    $$testability: qf,
                    $timeout: rf,
                    $window: sf,
                    $$rAF: tf,
                    $$asyncCallback: uf,
                    $$jqLite: vf,
                    $$HashMap: wf,
                    $$cookieReader: xf
                })
            }])
        }

        function eb(b) {
            return b.replace(yf, function (a, b, d, e) {
                return e ? d.toUpperCase() : d
            }).replace(zf, "Moz$1")
        }

        function Lc(b) {
            b = b.nodeType;
            return b === pa || !b || 9 === b
        }

        function Mc(b, a) {
            var c, d, e = a.createDocumentFragment(), f = [];
            if (Tb.test(b)) {
                c = c || e.appendChild(a.createElement("div"));
                d = (Af.exec(b) || ["", ""])[1].toLowerCase();
                d = ma[d] || ma._default;
                c.innerHTML = d[1] + b.replace(Bf, "<$1></$2>") + d[2];
                for (d =
                         d[0]; d--;) c = c.lastChild;
                f = Za(f, c.childNodes);
                c = e.firstChild;
                c.textContent = ""
            } else f.push(a.createTextNode(b));
            e.textContent = "";
            e.innerHTML = "";
            n(f, function (a) {
                e.appendChild(a)
            });
            return e
        }

        function R(b) {
            if (b instanceof R) return b;
            var a;
            L(b) && (b = T(b), a = !0);
            if (!(this instanceof R)) {
                if (a && "<" != b.charAt(0)) throw Ub("nosel");
                return new R(b)
            }
            if (a) {
                a = W;
                var c;
                b = (c = Cf.exec(b)) ? [a.createElement(c[1])] : (c = Mc(b, a)) ? c.childNodes : []
            }
            Nc(this, b)
        }

        function Vb(b) {
            return b.cloneNode(!0)
        }

        function rb(b, a) {
            a || sb(b);
            if (b.querySelectorAll) for (var c =
                b.querySelectorAll("*"), d = 0, e = c.length; d < e; d++) sb(c[d])
        }

        function Oc(b, a, c, d) {
            if (y(d)) throw Ub("offargs");
            var e = (d = tb(b)) && d.events, f = d && d.handle;
            if (f) if (a) n(a.split(" "), function (a) {
                if (y(c)) {
                    var d = e[a];
                    Ya(d || [], c);
                    if (d && 0 < d.length) return
                }
                b.removeEventListener(a, f, !1);
                delete e[a]
            }); else for (a in e) "$destroy" !== a && b.removeEventListener(a, f, !1), delete e[a]
        }

        function sb(b, a) {
            var c = b.ng339, d = c && ub[c];
            d && (a ? delete d.data[a] : (d.handle && (d.events.$destroy && d.handle({}, "$destroy"), Oc(b)), delete ub[c], b.ng339 =
                u))
        }

        function tb(b, a) {
            var c = b.ng339, c = c && ub[c];
            a && !c && (b.ng339 = c = ++Df, c = ub[c] = {events: {}, data: {}, handle: u});
            return c
        }

        function Wb(b, a, c) {
            if (Lc(b)) {
                var d = y(c), e = !d && a && !C(a), f = !a;
                b = (b = tb(b, !e)) && b.data;
                if (d) b[a] = c; else {
                    if (f) return b;
                    if (e) return b && b[a];
                    Q(b, a)
                }
            }
        }

        function vb(b, a) {
            return b.getAttribute ? -1 < (" " + (b.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + a + " ") : !1
        }

        function wb(b, a) {
            a && b.setAttribute && n(a.split(" "), function (a) {
                b.setAttribute("class", T((" " + (b.getAttribute("class") ||
                    "") + " ").replace(/[\n\t]/g, " ").replace(" " + T(a) + " ", " ")))
            })
        }

        function xb(b, a) {
            if (a && b.setAttribute) {
                var c = (" " + (b.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");
                n(a.split(" "), function (a) {
                    a = T(a);
                    -1 === c.indexOf(" " + a + " ") && (c += a + " ")
                });
                b.setAttribute("class", T(c))
            }
        }

        function Nc(b, a) {
            if (a) if (a.nodeType) b[b.length++] = a; else {
                var c = a.length;
                if ("number" === typeof c && a.window !== a) {
                    if (c) for (var d = 0; d < c; d++) b[b.length++] = a[d]
                } else b[b.length++] = a
            }
        }

        function Pc(b, a) {
            return yb(b, "$" + (a || "ngController") +
                "Controller")
        }

        function yb(b, a, c) {
            9 == b.nodeType && (b = b.documentElement);
            for (a = K(a) ? a : [a]; b;) {
                for (var d = 0, e = a.length; d < e; d++) if ((c = z.data(b, a[d])) !== u) return c;
                b = b.parentNode || 11 === b.nodeType && b.host
            }
        }

        function Qc(b) {
            for (rb(b, !0); b.firstChild;) b.removeChild(b.firstChild)
        }

        function Xb(b, a) {
            a || rb(b);
            var c = b.parentNode;
            c && c.removeChild(b)
        }

        function Ef(b, a) {
            a = a || N;
            if ("complete" === a.document.readyState) a.setTimeout(b); else z(a).on("load", b)
        }

        function Rc(b, a) {
            var c = zb[a.toLowerCase()];
            return c && Sc[ta(b)] && c
        }

        function Ff(b,
                    a) {
            var c = b.nodeName;
            return ("INPUT" === c || "TEXTAREA" === c) && Tc[a]
        }

        function Gf(b, a) {
            var c = function (c, e) {
                c.isDefaultPrevented = function () {
                    return c.defaultPrevented
                };
                var f = a[e || c.type], g = f ? f.length : 0;
                if (g) {
                    if (v(c.immediatePropagationStopped)) {
                        var h = c.stopImmediatePropagation;
                        c.stopImmediatePropagation = function () {
                            c.immediatePropagationStopped = !0;
                            c.stopPropagation && c.stopPropagation();
                            h && h.call(c)
                        }
                    }
                    c.isImmediatePropagationStopped = function () {
                        return !0 === c.immediatePropagationStopped
                    };
                    1 < g && (f = fa(f));
                    for (var l =
                        0; l < g; l++) c.isImmediatePropagationStopped() || f[l].call(b, c)
                }
            };
            c.elem = b;
            return c
        }

        function vf() {
            this.$get = function () {
                return Q(R, {
                    hasClass: function (b, a) {
                        b.attr && (b = b[0]);
                        return vb(b, a)
                    }, addClass: function (b, a) {
                        b.attr && (b = b[0]);
                        return xb(b, a)
                    }, removeClass: function (b, a) {
                        b.attr && (b = b[0]);
                        return wb(b, a)
                    }
                })
            }
        }

        function Fa(b, a) {
            var c = b && b.$$hashKey;
            if (c) return "function" === typeof c && (c = b.$$hashKey()), c;
            c = typeof b;
            return c = "function" == c || "object" == c && null !== b ? b.$$hashKey = c + ":" + (a || Td)() : c + ":" + b
        }

        function Ra(b, a) {
            if (a) {
                var c =
                    0;
                this.nextUid = function () {
                    return ++c
                }
            }
            n(b, this.put, this)
        }

        function Hf(b) {
            return (b = b.toString().replace(Uc, "").match(Vc)) ? "function(" + (b[1] || "").replace(/[\s\r\n]+/, " ") + ")" : "fn"
        }

        function bb(b, a) {
            function c(a) {
                return function (b, c) {
                    if (C(b)) n(b, pc(a)); else return a(b, c)
                }
            }

            function d(a, b) {
                Qa(a, "service");
                if (G(b) || K(b)) b = s.instantiate(b);
                if (!b.$get) throw Ga("pget", a);
                return r[a + "Provider"] = b
            }

            function e(a, b) {
                return function () {
                    var c = H.invoke(b, this);
                    if (v(c)) throw Ga("undef", a);
                    return c
                }
            }

            function f(a, b, c) {
                return d(a,
                    {$get: !1 !== c ? e(a, b) : b})
            }

            function g(a) {
                var b = [], c;
                n(a, function (a) {
                    function d(a) {
                        var b, c;
                        b = 0;
                        for (c = a.length; b < c; b++) {
                            var e = a[b], f = s.get(e[0]);
                            f[e[1]].apply(f, e[2])
                        }
                    }

                    if (!m.get(a)) {
                        m.put(a, !0);
                        try {
                            L(a) ? (c = db(a), b = b.concat(g(c.requires)).concat(c._runBlocks), d(c._invokeQueue), d(c._configBlocks)) : G(a) ? b.push(s.invoke(a)) : K(a) ? b.push(s.invoke(a)) : Pa(a, "module")
                        } catch (e) {
                            throw K(a) && (a = a[a.length - 1]), e.message && e.stack && -1 == e.stack.indexOf(e.message) && (e = e.message + "\n" + e.stack), Ga("modulerr", a, e.stack || e.message ||
                                e);
                        }
                    }
                });
                return b
            }

            function h(b, c) {
                function d(a, e) {
                    if (b.hasOwnProperty(a)) {
                        if (b[a] === l) throw Ga("cdep", a + " <- " + k.join(" <- "));
                        return b[a]
                    }
                    try {
                        return k.unshift(a), b[a] = l, b[a] = c(a, e)
                    } catch (f) {
                        throw b[a] === l && delete b[a], f;
                    } finally {
                        k.shift()
                    }
                }

                function e(b, c, f, g) {
                    "string" === typeof f && (g = f, f = null);
                    var h = [], k = bb.$$annotate(b, a, g), l, s, m;
                    s = 0;
                    for (l = k.length; s < l; s++) {
                        m = k[s];
                        if ("string" !== typeof m) throw Ga("itkn", m);
                        h.push(f && f.hasOwnProperty(m) ? f[m] : d(m, g))
                    }
                    K(b) && (b = b[l]);
                    return b.apply(c, h)
                }

                return {
                    invoke: e,
                    instantiate: function (a, b, c) {
                        var d = Object.create((K(a) ? a[a.length - 1] : a).prototype || null);
                        a = e(a, d, b, c);
                        return C(a) || G(a) ? a : d
                    }, get: d, annotate: bb.$$annotate, has: function (a) {
                        return r.hasOwnProperty(a + "Provider") || b.hasOwnProperty(a)
                    }
                }
            }

            a = !0 === a;
            var l = {}, k = [], m = new Ra([], !0), r = {
                $provide: {
                    provider: c(d), factory: c(f), service: c(function (a, b) {
                        return f(a, ["$injector", function (a) {
                            return a.instantiate(b)
                        }])
                    }), value: c(function (a, b) {
                        return f(a, qa(b), !1)
                    }), constant: c(function (a, b) {
                        Qa(a, "constant");
                        r[a] = b;
                        A[a] = b
                    }),
                    decorator: function (a, b) {
                        var c = s.get(a + "Provider"), d = c.$get;
                        c.$get = function () {
                            var a = H.invoke(d, c);
                            return H.invoke(b, null, {$delegate: a})
                        }
                    }
                }
            }, s = r.$injector = h(r, function (a, b) {
                aa.isString(b) && k.push(b);
                throw Ga("unpr", k.join(" <- "));
            }), A = {}, H = A.$injector = h(A, function (a, b) {
                var c = s.get(a + "Provider", b);
                return H.invoke(c.$get, c, u, a)
            });
            n(g(b), function (a) {
                H.invoke(a || w)
            });
            return H
        }

        function Qe() {
            var b = !0;
            this.disableAutoScrolling = function () {
                b = !1
            };
            this.$get = ["$window", "$location", "$rootScope", function (a, c, d) {
                function e(a) {
                    var b =
                        null;
                    Array.prototype.some.call(a, function (a) {
                        if ("a" === ta(a)) return b = a, !0
                    });
                    return b
                }

                function f(b) {
                    if (b) {
                        b.scrollIntoView();
                        var c;
                        c = g.yOffset;
                        G(c) ? c = c() : sc(c) ? (c = c[0], c = "fixed" !== a.getComputedStyle(c).position ? 0 : c.getBoundingClientRect().bottom) : V(c) || (c = 0);
                        c && (b = b.getBoundingClientRect().top, a.scrollBy(0, b - c))
                    } else a.scrollTo(0, 0)
                }

                function g(a) {
                    a = L(a) ? a : c.hash();
                    var b;
                    a ? (b = h.getElementById(a)) ? f(b) : (b = e(h.getElementsByName(a))) ? f(b) : "top" === a && f(null) : f(null)
                }

                var h = a.document;
                b && d.$watch(function () {
                        return c.hash()
                    },
                    function (a, b) {
                        a === b && "" === a || Ef(function () {
                            d.$evalAsync(g)
                        })
                    });
                return g
            }]
        }

        function fb(b, a) {
            if (!b && !a) return "";
            if (!b) return a;
            if (!a) return b;
            K(b) && (b = b.join(" "));
            K(a) && (a = a.join(" "));
            return b + " " + a
        }

        function If(b) {
            L(b) && (b = b.split(" "));
            var a = ga();
            n(b, function (b) {
                b.length && (a[b] = !0)
            });
            return a
        }

        function Ha(b) {
            return C(b) ? b : {}
        }

        function uf() {
            this.$get = ["$$rAF", "$timeout", function (b, a) {
                return b.supported ? function (a) {
                    return b(a)
                } : function (b) {
                    return a(b, 0, !1)
                }
            }]
        }

        function Jf(b, a, c, d) {
            function e(a) {
                try {
                    a.apply(null,
                        ra.call(arguments, 1))
                } finally {
                    if (H--, 0 === H) for (; M.length;) try {
                        M.pop()()
                    } catch (b) {
                        c.error(b)
                    }
                }
            }

            function f() {
                g();
                h()
            }

            function g() {
                a:{
                    try {
                        t = m.state;
                        break a
                    } catch (a) {
                    }
                    t = void 0
                }
                t = v(t) ? null : t;
                ka(t, D) && (t = D);
                D = t
            }

            function h() {
                if (x !== l.url() || p !== t) x = l.url(), p = t, n(B, function (a) {
                    a(l.url(), t)
                })
            }

            var l = this, k = b.location, m = b.history, r = b.setTimeout, s = b.clearTimeout, A = {};
            l.isMock = !1;
            var H = 0, M = [];
            l.$$completeOutstandingRequest = e;
            l.$$incOutstandingRequestCount = function () {
                H++
            };
            l.notifyWhenNoOutstandingRequests = function (a) {
                0 ===
                H ? a() : M.push(a)
            };
            var t, p, x = k.href, q = a.find("base"), I = null;
            g();
            p = t;
            l.url = function (a, c, e) {
                v(e) && (e = null);
                k !== b.location && (k = b.location);
                m !== b.history && (m = b.history);
                if (a) {
                    var f = p === e;
                    if (x === a && (!d.history || f)) return l;
                    var h = x && Ia(x) === Ia(a);
                    x = a;
                    p = e;
                    !d.history || h && f ? (h || (I = a), c ? k.replace(a) : h ? (c = k, e = a.indexOf("#"), a = -1 === e ? "" : a.substr(e + 1), c.hash = a) : k.href = a) : (m[c ? "replaceState" : "pushState"](e, "", a), g(), p = t);
                    return l
                }
                return I || k.href.replace(/%27/g, "'")
            };
            l.state = function () {
                return t
            };
            var B = [], O = !1, D =
                null;
            l.onUrlChange = function (a) {
                if (!O) {
                    if (d.history) z(b).on("popstate", f);
                    z(b).on("hashchange", f);
                    O = !0
                }
                B.push(a);
                return a
            };
            l.$$applicationDestroyed = function () {
                z(b).off("hashchange popstate", f)
            };
            l.$$checkUrlChange = h;
            l.baseHref = function () {
                var a = q.attr("href");
                return a ? a.replace(/^(https?\:)?\/\/[^\/]*/, "") : ""
            };
            l.defer = function (a, b) {
                var c;
                H++;
                c = r(function () {
                    delete A[c];
                    e(a)
                }, b || 0);
                A[c] = !0;
                return c
            };
            l.defer.cancel = function (a) {
                return A[a] ? (delete A[a], s(a), e(w), !0) : !1
            }
        }

        function Ue() {
            this.$get = ["$window",
                "$log", "$sniffer", "$document", function (b, a, c, d) {
                    return new Jf(b, d, a, c)
                }]
        }

        function Ve() {
            this.$get = function () {
                function b(b, d) {
                    function e(a) {
                        a != r && (s ? s == a && (s = a.n) : s = a, f(a.n, a.p), f(a, r), r = a, r.n = null)
                    }

                    function f(a, b) {
                        a != b && (a && (a.p = b), b && (b.n = a))
                    }

                    if (b in a) throw F("$cacheFactory")("iid", b);
                    var g = 0, h = Q({}, d, {id: b}), l = {}, k = d && d.capacity || Number.MAX_VALUE, m = {},
                        r = null, s = null;
                    return a[b] = {
                        put: function (a, b) {
                            if (!v(b)) {
                                if (k < Number.MAX_VALUE) {
                                    var c = m[a] || (m[a] = {key: a});
                                    e(c)
                                }
                                a in l || g++;
                                l[a] = b;
                                g > k && this.remove(s.key);
                                return b
                            }
                        }, get: function (a) {
                            if (k < Number.MAX_VALUE) {
                                var b = m[a];
                                if (!b) return;
                                e(b)
                            }
                            return l[a]
                        }, remove: function (a) {
                            if (k < Number.MAX_VALUE) {
                                var b = m[a];
                                if (!b) return;
                                b == r && (r = b.p);
                                b == s && (s = b.n);
                                f(b.n, b.p);
                                delete m[a]
                            }
                            delete l[a];
                            g--
                        }, removeAll: function () {
                            l = {};
                            g = 0;
                            m = {};
                            r = s = null
                        }, destroy: function () {
                            m = h = l = null;
                            delete a[b]
                        }, info: function () {
                            return Q({}, h, {size: g})
                        }
                    }
                }

                var a = {};
                b.info = function () {
                    var b = {};
                    n(a, function (a, e) {
                        b[e] = a.info()
                    });
                    return b
                };
                b.get = function (b) {
                    return a[b]
                };
                return b
            }
        }

        function of() {
            this.$get =
                ["$cacheFactory", function (b) {
                    return b("templates")
                }]
        }

        function Dc(b, a) {
            function c(a, b, c) {
                var d = /^\s*([@&]|=(\*?))(\??)\s*(\w*)\s*$/, e = {};
                n(a, function (a, f) {
                    var g = a.match(d);
                    if (!g) throw ea("iscp", b, f, a, c ? "controller bindings definition" : "isolate scope definition");
                    e[f] = {mode: g[1][0], collection: "*" === g[2], optional: "?" === g[3], attrName: g[4] || f}
                });
                return e
            }

            function d(a) {
                var b = a.charAt(0);
                if (!b || b !== E(b)) throw ea("baddir", a);
                if (a !== a.trim()) throw ea("baddir", a);
            }

            var e = {}, f = /^\s*directive\:\s*([\w\-]+)\s+(.*)$/,
                g = /(([\w\-]+)(?:\:([^;]+))?;?)/, h = Vd("ngSrc,ngSrcset,src,srcset"),
                l = /^(?:(\^\^?)?(\?)?(\^\^?)?)?/, k = /^(on[a-z]+|formaction)$/;
            this.directive = function s(a, f) {
                Qa(a, "directive");
                L(a) ? (d(a), Sb(f, "directiveFactory"), e.hasOwnProperty(a) || (e[a] = [], b.factory(a + "Directive", ["$injector", "$exceptionHandler", function (b, d) {
                    var f = [];
                    n(e[a], function (e, g) {
                        try {
                            var h = b.invoke(e);
                            G(h) ? h = {compile: qa(h)} : !h.compile && h.link && (h.compile = qa(h.link));
                            h.priority = h.priority || 0;
                            h.index = g;
                            h.name = h.name || a;
                            h.require = h.require ||
                                h.controller && h.name;
                            h.restrict = h.restrict || "EA";
                            var k = h, l = h, s = h.name, m = {isolateScope: null, bindToController: null};
                            C(l.scope) && (!0 === l.bindToController ? (m.bindToController = c(l.scope, s, !0), m.isolateScope = {}) : m.isolateScope = c(l.scope, s, !1));
                            C(l.bindToController) && (m.bindToController = c(l.bindToController, s, !0));
                            if (C(m.bindToController)) {
                                var H = l.controller, ba = l.controllerAs;
                                if (!H) throw ea("noctrl", s);
                                var ha;
                                a:if (ba && L(ba)) ha = ba; else {
                                    if (L(H)) {
                                        var n = Wc.exec(H);
                                        if (n) {
                                            ha = n[3];
                                            break a
                                        }
                                    }
                                    ha = void 0
                                }
                                if (!ha) throw ea("noident",
                                    s);
                            }
                            var q = k.$$bindings = m;
                            C(q.isolateScope) && (h.$$isolateBindings = q.isolateScope);
                            f.push(h)
                        } catch (u) {
                            d(u)
                        }
                    });
                    return f
                }])), e[a].push(f)) : n(a, pc(s));
                return this
            };
            this.aHrefSanitizationWhitelist = function (b) {
                return y(b) ? (a.aHrefSanitizationWhitelist(b), this) : a.aHrefSanitizationWhitelist()
            };
            this.imgSrcSanitizationWhitelist = function (b) {
                return y(b) ? (a.imgSrcSanitizationWhitelist(b), this) : a.imgSrcSanitizationWhitelist()
            };
            var m = !0;
            this.debugInfoEnabled = function (a) {
                return y(a) ? (m = a, this) : m
            };
            this.$get = ["$injector",
                "$interpolate", "$exceptionHandler", "$templateRequest", "$parse", "$controller", "$rootScope", "$document", "$sce", "$animate", "$$sanitizeUri", function (a, b, c, d, t, p, x, q, I, B, O) {
                    function D(a, b) {
                        try {
                            a.addClass(b)
                        } catch (c) {
                        }
                    }

                    function S(a, b, c, d, e) {
                        a instanceof z || (a = z(a));
                        n(a, function (b, c) {
                            b.nodeType == ab && b.nodeValue.match(/\S+/) && (a[c] = z(b).wrap("<span></span>").parent()[0])
                        });
                        var f = P(a, b, a, c, d, e);
                        S.$$addScopeClass(a);
                        var g = null;
                        return function (b, c, d) {
                            Sb(b, "scope");
                            d = d || {};
                            var e = d.parentBoundTranscludeFn, h = d.transcludeControllers;
                            d = d.futureParentElement;
                            e && e.$$boundTransclude && (e = e.$$boundTransclude);
                            g || (g = (d = d && d[0]) ? "foreignobject" !== ta(d) && d.toString().match(/SVG/) ? "svg" : "html" : "html");
                            d = "html" !== g ? z(Yb(g, z("<div>").append(a).html())) : c ? Oa.clone.call(a) : a;
                            if (h) for (var l in h) d.data("$" + l + "Controller", h[l].instance);
                            S.$$addScopeInfo(d, b);
                            c && c(d, b);
                            f && f(b, d, d, e);
                            return d
                        }
                    }

                    function P(a, b, c, d, e, f) {
                        function g(a, c, d, e) {
                            var f, l, k, m, s, B, A;
                            if (p) for (A = Array(c.length), m = 0; m < h.length; m += 3) f = h[m], A[f] = c[f]; else A = c;
                            m = 0;
                            for (s = h.length; m <
                            s;) if (l = A[h[m++]], c = h[m++], f = h[m++], c) {
                                if (c.scope) {
                                    if (k = a.$new(), S.$$addScopeInfo(z(l), k), B = c.$$destroyBindings) c.$$destroyBindings = null, k.$on("$destroyed", B)
                                } else k = a;
                                B = c.transcludeOnThisElement ? ba(a, c.transclude, e, c.elementTranscludeOnThisElement) : !c.templateOnThisElement && e ? e : !e && b ? ba(a, b) : null;
                                c(f, k, l, d, B, c)
                            } else f && f(a, l.childNodes, u, e)
                        }

                        for (var h = [], l, k, m, s, p, B = 0; B < a.length; B++) {
                            l = new aa;
                            k = ha(a[B], [], l, 0 === B ? d : u, e);
                            (f = k.length ? J(k, a[B], l, b, c, null, [], [], f) : null) && f.scope && S.$$addScopeClass(l.$$element);
                            l = f && f.terminal || !(m = a[B].childNodes) || !m.length ? null : P(m, f ? (f.transcludeOnThisElement || !f.templateOnThisElement) && f.transclude : b);
                            if (f || l) h.push(B, f, l), s = !0, p = p || f;
                            f = null
                        }
                        return s ? g : null
                    }

                    function ba(a, b, c, d) {
                        return function (d, e, f, g, h) {
                            d || (d = a.$new(!1, h), d.$$transcluded = !0);
                            return b(d, e, {
                                parentBoundTranscludeFn: c,
                                transcludeControllers: f,
                                futureParentElement: g
                            })
                        }
                    }

                    function ha(a, b, c, d, e) {
                        var h = c.$attr, l;
                        switch (a.nodeType) {
                            case pa:
                                v(b, xa(ta(a)), "E", d, e);
                                for (var k, m, s, p = a.attributes, B = 0, A = p && p.length; B <
                                A; B++) {
                                    var H = !1, M = !1;
                                    k = p[B];
                                    l = k.name;
                                    m = T(k.value);
                                    k = xa(l);
                                    if (s = ia.test(k)) l = l.replace(Yc, "").substr(8).replace(/_(.)/g, function (a, b) {
                                        return b.toUpperCase()
                                    });
                                    var P = k.replace(/(Start|End)$/, "");
                                    F(P) && k === P + "Start" && (H = l, M = l.substr(0, l.length - 5) + "end", l = l.substr(0, l.length - 6));
                                    k = xa(l.toLowerCase());
                                    h[k] = l;
                                    if (s || !c.hasOwnProperty(k)) c[k] = m, Rc(a, k) && (c[k] = !0);
                                    V(a, b, m, k, s);
                                    v(b, k, "A", d, e, H, M)
                                }
                                a = a.className;
                                C(a) && (a = a.animVal);
                                if (L(a) && "" !== a) for (; l = g.exec(a);) k = xa(l[2]), v(b, k, "C", d, e) && (c[k] = T(l[3])), a =
                                    a.substr(l.index + l[0].length);
                                break;
                            case ab:
                                za(b, a.nodeValue);
                                break;
                            case 8:
                                try {
                                    if (l = f.exec(a.nodeValue)) k = xa(l[1]), v(b, k, "M", d, e) && (c[k] = T(l[2]))
                                } catch (O) {
                                }
                        }
                        b.sort(Ja);
                        return b
                    }

                    function wa(a, b, c) {
                        var d = [], e = 0;
                        if (b && a.hasAttribute && a.hasAttribute(b)) {
                            do {
                                if (!a) throw ea("uterdir", b, c);
                                a.nodeType == pa && (a.hasAttribute(b) && e++, a.hasAttribute(c) && e--);
                                d.push(a);
                                a = a.nextSibling
                            } while (0 < e)
                        } else d.push(a);
                        return z(d)
                    }

                    function Xc(a, b, c) {
                        return function (d, e, f, g, h) {
                            e = wa(e[0], b, c);
                            return a(d, e, f, g, h)
                        }
                    }

                    function J(a,
                               b, d, e, f, g, h, k, m) {
                        function s(a, b, c, d) {
                            if (a) {
                                c && (a = Xc(a, c, d));
                                a.require = J.require;
                                a.directiveName = w;
                                if (t === J || J.$$isolateScope) a = Z(a, {isolateScope: !0});
                                h.push(a)
                            }
                            if (b) {
                                c && (b = Xc(b, c, d));
                                b.require = J.require;
                                b.directiveName = w;
                                if (t === J || J.$$isolateScope) b = Z(b, {isolateScope: !0});
                                k.push(b)
                            }
                        }

                        function B(a, b, c, d) {
                            var e;
                            if (L(b)) {
                                var f = b.match(l);
                                b = b.substring(f[0].length);
                                var g = f[1] || f[3], f = "?" === f[2];
                                "^^" === g ? c = c.parent() : e = (e = d && d[b]) && e.instance;
                                e || (d = "$" + b + "Controller", e = g ? c.inheritedData(d) : c.data(d));
                                if (!e &&
                                    !f) throw ea("ctreq", b, a);
                            } else if (K(b)) for (e = [], g = 0, f = b.length; g < f; g++) e[g] = B(a, b[g], c, d);
                            return e || null
                        }

                        function A(a, b, c, d, e, f) {
                            var g = ga(), h;
                            for (h in d) {
                                var l = d[h], k = {
                                    $scope: l === t || l.$$isolateScope ? e : f,
                                    $element: a,
                                    $attrs: b,
                                    $transclude: c
                                }, m = l.controller;
                                "@" == m && (m = b[l.name]);
                                k = p(m, k, !0, l.controllerAs);
                                g[l.name] = k;
                                q || a.data("$" + l.name + "Controller", k.instance)
                            }
                            return g
                        }

                        function M(a, c, e, f, g, l) {
                            function m(a, b, c) {
                                var d;
                                Wa(a) || (c = b, b = a, a = u);
                                q && (d = n);
                                c || (c = q ? ja.parent() : ja);
                                return g(a, b, d, c, X)
                            }

                            var s, p, H,
                                P, n, ha, ja;
                            b === e ? (f = d, ja = d.$$element) : (ja = z(e), f = new aa(ja, d));
                            t && (P = c.$new(!0));
                            g && (ha = m, ha.$$boundTransclude = g);
                            ba && (n = A(ja, f, ha, ba, P, c));
                            t && (S.$$addScopeInfo(ja, P, !0, !(D && (D === t || D === t.$$originalDirective))), S.$$addScopeClass(ja, !0), P.$$isolateBindings = t.$$isolateBindings, Y(c, f, P, P.$$isolateBindings, t, P));
                            if (n) {
                                var x = t || O, I;
                                x && n[x.name] && (p = x.$$bindings.bindToController, (H = n[x.name]) && H.identifier && p && (I = H, l.$$destroyBindings = Y(c, f, H.instance, p, x)));
                                for (s in n) {
                                    H = n[s];
                                    var wa = H();
                                    wa !== H.instance &&
                                    (H.instance = wa, ja.data("$" + J.name + "Controller", wa), H === I && (l.$$destroyBindings(), l.$$destroyBindings = Y(c, f, wa, p, x)))
                                }
                            }
                            s = 0;
                            for (l = h.length; s < l; s++) p = h[s], $(p, p.isolateScope ? P : c, ja, f, p.require && B(p.directiveName, p.require, ja, n), ha);
                            var X = c;
                            t && (t.template || null === t.templateUrl) && (X = P);
                            a && a(X, e.childNodes, u, g);
                            for (s = k.length - 1; 0 <= s; s--) p = k[s], $(p, p.isolateScope ? P : c, ja, f, p.require && B(p.directiveName, p.require, ja, n), ha)
                        }

                        m = m || {};
                        for (var P = -Number.MAX_VALUE, O, ba = m.controllerDirectives, t = m.newIsolateScopeDirective,
                                 D = m.templateDirective, n = m.nonTlbTranscludeDirective, x = !1, I = !1, q = m.hasElementTranscludeDirective, X = d.$$element = z(b), J, w, v, Ja = e, za, F = 0, E = a.length; F < E; F++) {
                            J = a[F];
                            var Ab = J.$$start, Q = J.$$end;
                            Ab && (X = wa(b, Ab, Q));
                            v = u;
                            if (P > J.priority) break;
                            if (v = J.scope) J.templateUrl || (C(v) ? (N("new/isolated scope", t || O, J, X), t = J) : N("new/isolated scope", t, J, X)), O = O || J;
                            w = J.name;
                            !J.templateUrl && J.controller && (v = J.controller, ba = ba || ga(), N("'" + w + "' controller", ba[w], J, X), ba[w] = J);
                            if (v = J.transclude) x = !0, J.$$tlb || (N("transclusion",
                                n, J, X), n = J), "element" == v ? (q = !0, P = J.priority, v = X, X = d.$$element = z(W.createComment(" " + w + ": " + d[w] + " ")), b = X[0], U(f, ra.call(v, 0), b), Ja = S(v, e, P, g && g.name, {nonTlbTranscludeDirective: n})) : (v = z(Vb(b)).contents(), X.empty(), Ja = S(v, e));
                            if (J.template) if (I = !0, N("template", D, J, X), D = J, v = G(J.template) ? J.template(X, d) : J.template, v = fa(v), J.replace) {
                                g = J;
                                v = Tb.test(v) ? Zc(Yb(J.templateNamespace, T(v))) : [];
                                b = v[0];
                                if (1 != v.length || b.nodeType !== pa) throw ea("tplrt", w, "");
                                U(f, X, b);
                                E = {$attr: {}};
                                v = ha(b, [], E);
                                var R = a.splice(F +
                                    1, a.length - (F + 1));
                                t && y(v);
                                a = a.concat(v).concat(R);
                                $c(d, E);
                                E = a.length
                            } else X.html(v);
                            if (J.templateUrl) I = !0, N("template", D, J, X), D = J, J.replace && (g = J), M = Kf(a.splice(F, a.length - F), X, d, f, x && Ja, h, k, {
                                controllerDirectives: ba,
                                newIsolateScopeDirective: t,
                                templateDirective: D,
                                nonTlbTranscludeDirective: n
                            }), E = a.length; else if (J.compile) try {
                                za = J.compile(X, d, Ja), G(za) ? s(null, za, Ab, Q) : za && s(za.pre, za.post, Ab, Q)
                            } catch (V) {
                                c(V, va(X))
                            }
                            J.terminal && (M.terminal = !0, P = Math.max(P, J.priority))
                        }
                        M.scope = O && !0 === O.scope;
                        M.transcludeOnThisElement =
                            x;
                        M.elementTranscludeOnThisElement = q;
                        M.templateOnThisElement = I;
                        M.transclude = Ja;
                        m.hasElementTranscludeDirective = q;
                        return M
                    }

                    function y(a) {
                        for (var b = 0, c = a.length; b < c; b++) a[b] = Ob(a[b], {$$isolateScope: !0})
                    }

                    function v(b, d, f, g, h, l, k) {
                        if (d === h) return null;
                        h = null;
                        if (e.hasOwnProperty(d)) {
                            var m;
                            d = a.get(d + "Directive");
                            for (var p = 0, B = d.length; p < B; p++) try {
                                m = d[p], (g === u || g > m.priority) && -1 != m.restrict.indexOf(f) && (l && (m = Ob(m, {
                                    $$start: l,
                                    $$end: k
                                })), b.push(m), h = m)
                            } catch (A) {
                                c(A)
                            }
                        }
                        return h
                    }

                    function F(b) {
                        if (e.hasOwnProperty(b)) for (var c =
                            a.get(b + "Directive"), d = 0, f = c.length; d < f; d++) if (b = c[d], b.multiElement) return !0;
                        return !1
                    }

                    function $c(a, b) {
                        var c = b.$attr, d = a.$attr, e = a.$$element;
                        n(a, function (d, e) {
                            "$" != e.charAt(0) && (b[e] && b[e] !== d && (d += ("style" === e ? ";" : " ") + b[e]), a.$set(e, d, !0, c[e]))
                        });
                        n(b, function (b, f) {
                            "class" == f ? (D(e, b), a["class"] = (a["class"] ? a["class"] + " " : "") + b) : "style" == f ? (e.attr("style", e.attr("style") + ";" + b), a.style = (a.style ? a.style + ";" : "") + b) : "$" == f.charAt(0) || a.hasOwnProperty(f) || (a[f] = b, d[f] = c[f])
                        })
                    }

                    function Kf(a, b, c, e, f, g,
                                h, l) {
                        var k = [], m, s, p = b[0], B = a.shift(),
                            A = Ob(B, {templateUrl: null, transclude: null, replace: null, $$originalDirective: B}),
                            H = G(B.templateUrl) ? B.templateUrl(b, c) : B.templateUrl, O = B.templateNamespace;
                        b.empty();
                        d(I.getTrustedResourceUrl(H)).then(function (d) {
                            var M, t;
                            d = fa(d);
                            if (B.replace) {
                                d = Tb.test(d) ? Zc(Yb(O, T(d))) : [];
                                M = d[0];
                                if (1 != d.length || M.nodeType !== pa) throw ea("tplrt", B.name, H);
                                d = {$attr: {}};
                                U(e, b, M);
                                var x = ha(M, [], d);
                                C(B.scope) && y(x);
                                a = x.concat(a);
                                $c(c, d)
                            } else M = p, b.html(d);
                            a.unshift(A);
                            m = J(a, M, c, f, b, B, g,
                                h, l);
                            n(e, function (a, c) {
                                a == M && (e[c] = b[0])
                            });
                            for (s = P(b[0].childNodes, f); k.length;) {
                                d = k.shift();
                                t = k.shift();
                                var S = k.shift(), I = k.shift(), x = b[0];
                                if (!d.$$destroyed) {
                                    if (t !== p) {
                                        var wa = t.className;
                                        l.hasElementTranscludeDirective && B.replace || (x = Vb(M));
                                        U(S, z(t), x);
                                        D(z(x), wa)
                                    }
                                    t = m.transcludeOnThisElement ? ba(d, m.transclude, I) : I;
                                    m(s, d, x, e, t, m)
                                }
                            }
                            k = null
                        });
                        return function (a, b, c, d, e) {
                            a = e;
                            b.$$destroyed || (k ? k.push(b, c, d, a) : (m.transcludeOnThisElement && (a = ba(b, m.transclude, e)), m(s, b, c, d, a, m)))
                        }
                    }

                    function Ja(a, b) {
                        var c = b.priority -
                            a.priority;
                        return 0 !== c ? c : a.name !== b.name ? a.name < b.name ? -1 : 1 : a.index - b.index
                    }

                    function N(a, b, c, d) {
                        if (b) throw ea("multidir", b.name, c.name, a, va(d));
                    }

                    function za(a, c) {
                        var d = b(c, !0);
                        d && a.push({
                            priority: 0, compile: function (a) {
                                a = a.parent();
                                var b = !!a.length;
                                b && S.$$addBindingClass(a);
                                return function (a, c) {
                                    var e = c.parent();
                                    b || S.$$addBindingClass(e);
                                    S.$$addBindingInfo(e, d.expressions);
                                    a.$watch(d, function (a) {
                                        c[0].nodeValue = a
                                    })
                                }
                            }
                        })
                    }

                    function Yb(a, b) {
                        a = E(a || "html");
                        switch (a) {
                            case "svg":
                            case "math":
                                var c = W.createElement("div");
                                c.innerHTML = "<" + a + ">" + b + "</" + a + ">";
                                return c.childNodes[0].childNodes;
                            default:
                                return b
                        }
                    }

                    function R(a, b) {
                        if ("srcdoc" == b) return I.HTML;
                        var c = ta(a);
                        if ("xlinkHref" == b || "form" == c && "action" == b || "img" != c && ("src" == b || "ngSrc" == b)) return I.RESOURCE_URL
                    }

                    function V(a, c, d, e, f) {
                        var g = R(a, e);
                        f = h[e] || f;
                        var l = b(d, !0, g, f);
                        if (l) {
                            if ("multiple" === e && "select" === ta(a)) throw ea("selmulti", va(a));
                            c.push({
                                priority: 100, compile: function () {
                                    return {
                                        pre: function (a, c, h) {
                                            c = h.$$observers || (h.$$observers = {});
                                            if (k.test(e)) throw ea("nodomevents");
                                            var m = h[e];
                                            m !== d && (l = m && b(m, !0, g, f), d = m);
                                            l && (h[e] = l(a), (c[e] || (c[e] = [])).$$inter = !0, (h.$$observers && h.$$observers[e].$$scope || a).$watch(l, function (a, b) {
                                                "class" === e && a != b ? h.$updateClass(a, b) : h.$set(e, a)
                                            }))
                                        }
                                    }
                                }
                            })
                        }
                    }

                    function U(a, b, c) {
                        var d = b[0], e = b.length, f = d.parentNode, g, h;
                        if (a) for (g = 0, h = a.length; g < h; g++) if (a[g] == d) {
                            a[g++] = c;
                            h = g + e - 1;
                            for (var l = a.length; g < l; g++, h++) h < l ? a[g] = a[h] : delete a[g];
                            a.length -= e - 1;
                            a.context === d && (a.context = c);
                            break
                        }
                        f && f.replaceChild(c, d);
                        a = W.createDocumentFragment();
                        a.appendChild(d);
                        z(c).data(z(d).data());
                        la ? (Rb = !0, la.cleanData([d])) : delete z.cache[d[z.expando]];
                        d = 1;
                        for (e = b.length; d < e; d++) f = b[d], z(f).remove(), a.appendChild(f), delete b[d];
                        b[0] = c;
                        b.length = 1
                    }

                    function Z(a, b) {
                        return Q(function () {
                            return a.apply(null, arguments)
                        }, a, b)
                    }

                    function $(a, b, d, e, f, g) {
                        try {
                            a(b, d, e, f, g)
                        } catch (h) {
                            c(h, va(d))
                        }
                    }

                    function Y(a, c, d, e, f, g) {
                        var h;
                        n(e, function (e, g) {
                            var l = e.attrName, k = e.optional, m, s, p, B;
                            switch (e.mode) {
                                case "@":
                                    c.$observe(l, function (a) {
                                        d[g] = a
                                    });
                                    c.$$observers[l].$$scope = a;
                                    c[l] && (d[g] = b(c[l])(a));
                                    break;
                                case "=":
                                    if (k && !c[l]) break;
                                    s = t(c[l]);
                                    B = s.literal ? ka : function (a, b) {
                                        return a === b || a !== a && b !== b
                                    };
                                    p = s.assign || function () {
                                        m = d[g] = s(a);
                                        throw ea("nonassign", c[l], f.name);
                                    };
                                    m = d[g] = s(a);
                                    k = function (b) {
                                        B(b, d[g]) || (B(b, m) ? p(a, b = d[g]) : d[g] = b);
                                        return m = b
                                    };
                                    k.$stateful = !0;
                                    k = e.collection ? a.$watchCollection(c[l], k) : a.$watch(t(c[l], k), null, s.literal);
                                    h = h || [];
                                    h.push(k);
                                    break;
                                case "&":
                                    if (!c.hasOwnProperty(l) && k) break;
                                    s = t(c[l]);
                                    if (s === w && k) break;
                                    d[g] = function (b) {
                                        return s(a, b)
                                    }
                            }
                        });
                        e = h ? function () {
                            for (var a = 0, b = h.length; a <
                            b; ++a) h[a]()
                        } : w;
                        return g && e !== w ? (g.$on("$destroy", e), w) : e
                    }

                    var aa = function (a, b) {
                        if (b) {
                            var c = Object.keys(b), d, e, f;
                            d = 0;
                            for (e = c.length; d < e; d++) f = c[d], this[f] = b[f]
                        } else this.$attr = {};
                        this.$$element = a
                    };
                    aa.prototype = {
                        $normalize: xa, $addClass: function (a) {
                            a && 0 < a.length && B.addClass(this.$$element, a)
                        }, $removeClass: function (a) {
                            a && 0 < a.length && B.removeClass(this.$$element, a)
                        }, $updateClass: function (a, b) {
                            var c = ad(a, b);
                            c && c.length && B.addClass(this.$$element, c);
                            (c = ad(b, a)) && c.length && B.removeClass(this.$$element, c)
                        },
                        $set: function (a, b, d, e) {
                            var f = this.$$element[0], g = Rc(f, a), h = Ff(f, a), f = a;
                            g ? (this.$$element.prop(a, b), e = g) : h && (this[h] = b, f = h);
                            this[a] = b;
                            e ? this.$attr[a] = e : (e = this.$attr[a]) || (this.$attr[a] = e = Ac(a, "-"));
                            g = ta(this.$$element);
                            if ("a" === g && "href" === a || "img" === g && "src" === a) this[a] = b = O(b, "src" === a); else if ("img" === g && "srcset" === a) {
                                for (var g = "", h = T(b), l = /(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/, l = /\s/.test(h) ? l : /(,)/, h = h.split(l), l = Math.floor(h.length / 2), k = 0; k < l; k++) var m = 2 * k, g = g + O(T(h[m]), !0), g = g + (" " + T(h[m + 1]));
                                h = T(h[2 * k]).split(/\s/);
                                g += O(T(h[0]), !0);
                                2 === h.length && (g += " " + T(h[1]));
                                this[a] = b = g
                            }
                            !1 !== d && (null === b || b === u ? this.$$element.removeAttr(e) : this.$$element.attr(e, b));
                            (a = this.$$observers) && n(a[f], function (a) {
                                try {
                                    a(b)
                                } catch (d) {
                                    c(d)
                                }
                            })
                        }, $observe: function (a, b) {
                            var c = this, d = c.$$observers || (c.$$observers = ga()), e = d[a] || (d[a] = []);
                            e.push(b);
                            x.$evalAsync(function () {
                                !e.$$inter && c.hasOwnProperty(a) && b(c[a])
                            });
                            return function () {
                                Ya(e, b)
                            }
                        }
                    };
                    var ca = b.startSymbol(), da = b.endSymbol(),
                        fa = "{{" == ca || "}}" == da ? Ua : function (a) {
                            return a.replace(/\{\{/g,
                                ca).replace(/}}/g, da)
                        }, ia = /^ngAttr[A-Z]/;
                    S.$$addBindingInfo = m ? function (a, b) {
                        var c = a.data("$binding") || [];
                        K(b) ? c = c.concat(b) : c.push(b);
                        a.data("$binding", c)
                    } : w;
                    S.$$addBindingClass = m ? function (a) {
                        D(a, "ng-binding")
                    } : w;
                    S.$$addScopeInfo = m ? function (a, b, c, d) {
                        a.data(c ? d ? "$isolateScopeNoTemplate" : "$isolateScope" : "$scope", b)
                    } : w;
                    S.$$addScopeClass = m ? function (a, b) {
                        D(a, b ? "ng-isolate-scope" : "ng-scope")
                    } : w;
                    return S
                }]
        }

        function xa(b) {
            return eb(b.replace(Yc, ""))
        }

        function ad(b, a) {
            var c = "", d = b.split(/\s+/), e = a.split(/\s+/),
                f = 0;
            a:for (; f < d.length; f++) {
                for (var g = d[f], h = 0; h < e.length; h++) if (g == e[h]) continue a;
                c += (0 < c.length ? " " : "") + g
            }
            return c
        }

        function Zc(b) {
            b = z(b);
            var a = b.length;
            if (1 >= a) return b;
            for (; a--;) 8 === b[a].nodeType && Lf.call(b, a, 1);
            return b
        }

        function We() {
            var b = {}, a = !1;
            this.register = function (a, d) {
                Qa(a, "controller");
                C(a) ? Q(b, a) : b[a] = d
            };
            this.allowGlobals = function () {
                a = !0
            };
            this.$get = ["$injector", "$window", function (c, d) {
                function e(a, b, c, d) {
                    if (!a || !C(a.$scope)) throw F("$controller")("noscp", d, b);
                    a.$scope[b] = c
                }

                return function (f,
                                 g, h, l) {
                    var k, m, r;
                    h = !0 === h;
                    l && L(l) && (r = l);
                    if (L(f)) {
                        l = f.match(Wc);
                        if (!l) throw Mf("ctrlfmt", f);
                        m = l[1];
                        r = r || l[3];
                        f = b.hasOwnProperty(m) ? b[m] : Cc(g.$scope, m, !0) || (a ? Cc(d, m, !0) : u);
                        Pa(f, m, !0)
                    }
                    if (h) return h = (K(f) ? f[f.length - 1] : f).prototype, k = Object.create(h || null), r && e(g, r, k, m || f.name), Q(function () {
                        var a = c.invoke(f, k, g, m);
                        a !== k && (C(a) || G(a)) && (k = a, r && e(g, r, k, m || f.name));
                        return k
                    }, {instance: k, identifier: r});
                    k = c.instantiate(f, g, m);
                    r && e(g, r, k, m || f.name);
                    return k
                }
            }]
        }

        function Xe() {
            this.$get = ["$window", function (b) {
                return z(b.document)
            }]
        }

        function Ye() {
            this.$get = ["$log", function (b) {
                return function (a, c) {
                    b.error.apply(b, arguments)
                }
            }]
        }

        function Zb(b) {
            return C(b) ? da(b) ? b.toISOString() : $a(b) : b
        }

        function bf() {
            this.$get = function () {
                return function (b) {
                    if (!b) return "";
                    var a = [];
                    oc(b, function (b, d) {
                        null === b || v(b) || (K(b) ? n(b, function (b, c) {
                            a.push(ia(d) + "=" + ia(Zb(b)))
                        }) : a.push(ia(d) + "=" + ia(Zb(b))))
                    });
                    return a.join("&")
                }
            }
        }

        function cf() {
            this.$get = function () {
                return function (b) {
                    function a(b, e, f) {
                        null === b || v(b) || (K(b) ? n(b, function (b) {
                            a(b, e + "[]")
                        }) : C(b) &&
                        !da(b) ? oc(b, function (b, c) {
                            a(b, e + (f ? "" : "[") + c + (f ? "" : "]"))
                        }) : c.push(ia(e) + "=" + ia(Zb(b))))
                    }

                    if (!b) return "";
                    var c = [];
                    a(b, "", !0);
                    return c.join("&")
                }
            }
        }

        function $b(b, a) {
            if (L(b)) {
                var c = b.replace(Nf, "").trim();
                if (c) {
                    var d = a("Content-Type");
                    (d = d && 0 === d.indexOf(bd)) || (d = (d = c.match(Of)) && Pf[d[0]].test(c));
                    d && (b = vc(c))
                }
            }
            return b
        }

        function cd(b) {
            var a = ga(), c;
            L(b) ? n(b.split("\n"), function (b) {
                c = b.indexOf(":");
                var e = E(T(b.substr(0, c)));
                b = T(b.substr(c + 1));
                e && (a[e] = a[e] ? a[e] + ", " + b : b)
            }) : C(b) && n(b, function (b, c) {
                var f =
                    E(c), g = T(b);
                f && (a[f] = a[f] ? a[f] + ", " + g : g)
            });
            return a
        }

        function dd(b) {
            var a;
            return function (c) {
                a || (a = cd(b));
                return c ? (c = a[E(c)], void 0 === c && (c = null), c) : a
            }
        }

        function ed(b, a, c, d) {
            if (G(d)) return d(b, a, c);
            n(d, function (d) {
                b = d(b, a, c)
            });
            return b
        }

        function af() {
            var b = this.defaults = {
                transformResponse: [$b],
                transformRequest: [function (a) {
                    return C(a) && "[object File]" !== sa.call(a) && "[object Blob]" !== sa.call(a) && "[object FormData]" !== sa.call(a) ? $a(a) : a
                }],
                headers: {
                    common: {Accept: "application/json, text/plain, */*"}, post: fa(ac),
                    put: fa(ac), patch: fa(ac)
                },
                xsrfCookieName: "XSRF-TOKEN",
                xsrfHeaderName: "X-XSRF-TOKEN",
                paramSerializer: "$httpParamSerializer"
            }, a = !1;
            this.useApplyAsync = function (b) {
                return y(b) ? (a = !!b, this) : a
            };
            var c = this.interceptors = [];
            this.$get = ["$httpBackend", "$$cookieReader", "$cacheFactory", "$rootScope", "$q", "$injector", function (d, e, f, g, h, l) {
                function k(a) {
                    function c(a) {
                        var b = Q({}, a);
                        b.data = a.data ? ed(a.data, a.headers, a.status, e.transformResponse) : a.data;
                        a = a.status;
                        return 200 <= a && 300 > a ? b : h.reject(b)
                    }

                    function d(a, b) {
                        var c,
                            e = {};
                        n(a, function (a, d) {
                            G(a) ? (c = a(b), null != c && (e[d] = c)) : e[d] = a
                        });
                        return e
                    }

                    if (!aa.isObject(a)) throw F("$http")("badreq", a);
                    var e = Q({
                        method: "get",
                        transformRequest: b.transformRequest,
                        transformResponse: b.transformResponse,
                        paramSerializer: b.paramSerializer
                    }, a);
                    e.headers = function (a) {
                        var c = b.headers, e = Q({}, a.headers), f, g, h, c = Q({}, c.common, c[E(a.method)]);
                        a:for (f in c) {
                            g = E(f);
                            for (h in e) if (E(h) === g) continue a;
                            e[f] = c[f]
                        }
                        return d(e, fa(a))
                    }(a);
                    e.method = pb(e.method);
                    e.paramSerializer = L(e.paramSerializer) ? l.get(e.paramSerializer) :
                        e.paramSerializer;
                    var f = [function (a) {
                        var d = a.headers, e = ed(a.data, dd(d), u, a.transformRequest);
                        v(e) && n(d, function (a, b) {
                            "content-type" === E(b) && delete d[b]
                        });
                        v(a.withCredentials) && !v(b.withCredentials) && (a.withCredentials = b.withCredentials);
                        return m(a, e).then(c, c)
                    }, u], g = h.when(e);
                    for (n(A, function (a) {
                        (a.request || a.requestError) && f.unshift(a.request, a.requestError);
                        (a.response || a.responseError) && f.push(a.response, a.responseError)
                    }); f.length;) {
                        a = f.shift();
                        var k = f.shift(), g = g.then(a, k)
                    }
                    g.success = function (a) {
                        Pa(a,
                            "fn");
                        g.then(function (b) {
                            a(b.data, b.status, b.headers, e)
                        });
                        return g
                    };
                    g.error = function (a) {
                        Pa(a, "fn");
                        g.then(null, function (b) {
                            a(b.data, b.status, b.headers, e)
                        });
                        return g
                    };
                    return g
                }

                function m(c, f) {
                    function l(b, c, d, e) {
                        function f() {
                            m(c, b, d, e)
                        }

                        O && (200 <= b && 300 > b ? O.put(P, [b, c, cd(d), e]) : O.remove(P));
                        a ? g.$applyAsync(f) : (f(), g.$$phase || g.$apply())
                    }

                    function m(a, b, d, e) {
                        b = Math.max(b, 0);
                        (200 <= b && 300 > b ? I.resolve : I.reject)({
                            data: a,
                            status: b,
                            headers: dd(d),
                            config: c,
                            statusText: e
                        })
                    }

                    function A(a) {
                        m(a.data, a.status, fa(a.headers()),
                            a.statusText)
                    }

                    function n() {
                        var a = k.pendingRequests.indexOf(c);
                        -1 !== a && k.pendingRequests.splice(a, 1)
                    }

                    var I = h.defer(), B = I.promise, O, D, S = c.headers,
                        P = r(c.url, c.paramSerializer(c.params));
                    k.pendingRequests.push(c);
                    B.then(n, n);
                    !c.cache && !b.cache || !1 === c.cache || "GET" !== c.method && "JSONP" !== c.method || (O = C(c.cache) ? c.cache : C(b.cache) ? b.cache : s);
                    O && (D = O.get(P), y(D) ? D && G(D.then) ? D.then(A, A) : K(D) ? m(D[1], D[0], fa(D[2]), D[3]) : m(D, 200, {}, "OK") : O.put(P, B));
                    v(D) && ((D = fd(c.url) ? e()[c.xsrfCookieName || b.xsrfCookieName] :
                        u) && (S[c.xsrfHeaderName || b.xsrfHeaderName] = D), d(c.method, P, f, l, S, c.timeout, c.withCredentials, c.responseType));
                    return B
                }

                function r(a, b) {
                    0 < b.length && (a += (-1 == a.indexOf("?") ? "?" : "&") + b);
                    return a
                }

                var s = f("$http");
                b.paramSerializer = L(b.paramSerializer) ? l.get(b.paramSerializer) : b.paramSerializer;
                var A = [];
                n(c, function (a) {
                    A.unshift(L(a) ? l.get(a) : l.invoke(a))
                });
                k.pendingRequests = [];
                (function (a) {
                    n(arguments, function (a) {
                        k[a] = function (b, c) {
                            return k(Q({}, c || {}, {method: a, url: b}))
                        }
                    })
                })("get", "delete", "head", "jsonp");
                (function (a) {
                    n(arguments, function (a) {
                        k[a] = function (b, c, d) {
                            return k(Q({}, d || {}, {method: a, url: b, data: c}))
                        }
                    })
                })("post", "put", "patch");
                k.defaults = b;
                return k
            }]
        }

        function Qf() {
            return new N.XMLHttpRequest
        }

        function df() {
            this.$get = ["$browser", "$window", "$document", function (b, a, c) {
                return Rf(b, Qf, b.defer, a.angular.callbacks, c[0])
            }]
        }

        function Rf(b, a, c, d, e) {
            function f(a, b, c) {
                var f = e.createElement("script"), m = null;
                f.type = "text/javascript";
                f.src = a;
                f.async = !0;
                m = function (a) {
                    f.removeEventListener("load", m, !1);
                    f.removeEventListener("error",
                        m, !1);
                    e.body.removeChild(f);
                    f = null;
                    var g = -1, A = "unknown";
                    a && ("load" !== a.type || d[b].called || (a = {type: "error"}), A = a.type, g = "error" === a.type ? 404 : 200);
                    c && c(g, A)
                };
                f.addEventListener("load", m, !1);
                f.addEventListener("error", m, !1);
                e.body.appendChild(f);
                return m
            }

            return function (e, h, l, k, m, r, s, A) {
                function H() {
                    p && p();
                    x && x.abort()
                }

                function M(a, d, e, f, g) {
                    I !== u && c.cancel(I);
                    p = x = null;
                    a(d, e, f, g);
                    b.$$completeOutstandingRequest(w)
                }

                b.$$incOutstandingRequestCount();
                h = h || b.url();
                if ("jsonp" == E(e)) {
                    var t = "_" + (d.counter++).toString(36);
                    d[t] = function (a) {
                        d[t].data = a;
                        d[t].called = !0
                    };
                    var p = f(h.replace("JSON_CALLBACK", "angular.callbacks." + t), t, function (a, b) {
                        M(k, a, d[t].data, "", b);
                        d[t] = w
                    })
                } else {
                    var x = a();
                    x.open(e, h, !0);
                    n(m, function (a, b) {
                        y(a) && x.setRequestHeader(b, a)
                    });
                    x.onload = function () {
                        var a = x.statusText || "", b = "response" in x ? x.response : x.responseText,
                            c = 1223 === x.status ? 204 : x.status;
                        0 === c && (c = b ? 200 : "file" == Aa(h).protocol ? 404 : 0);
                        M(k, c, b, x.getAllResponseHeaders(), a)
                    };
                    e = function () {
                        M(k, -1, null, null, "")
                    };
                    x.onerror = e;
                    x.onabort = e;
                    s && (x.withCredentials =
                        !0);
                    if (A) try {
                        x.responseType = A
                    } catch (q) {
                        if ("json" !== A) throw q;
                    }
                    x.send(l)
                }
                if (0 < r) var I = c(H, r); else r && G(r.then) && r.then(H)
            }
        }

        function Ze() {
            var b = "{{", a = "}}";
            this.startSymbol = function (a) {
                return a ? (b = a, this) : b
            };
            this.endSymbol = function (b) {
                return b ? (a = b, this) : a
            };
            this.$get = ["$parse", "$exceptionHandler", "$sce", function (c, d, e) {
                function f(a) {
                    return "\\\\\\" + a
                }

                function g(c) {
                    return c.replace(m, b).replace(r, a)
                }

                function h(f, h, m, r) {
                    function t(a) {
                        try {
                            var b = a;
                            a = m ? e.getTrusted(m, b) : e.valueOf(b);
                            var c;
                            if (r && !y(a)) c = a;
                            else if (null == a) c = ""; else {
                                switch (typeof a) {
                                    case "string":
                                        break;
                                    case "number":
                                        a = "" + a;
                                        break;
                                    default:
                                        a = $a(a)
                                }
                                c = a
                            }
                            return c
                        } catch (g) {
                            d(Ka.interr(f, g))
                        }
                    }

                    r = !!r;
                    for (var p, n, q = 0, I = [], B = [], O = f.length, D = [], S = []; q < O;) if (-1 != (p = f.indexOf(b, q)) && -1 != (n = f.indexOf(a, p + l))) q !== p && D.push(g(f.substring(q, p))), q = f.substring(p + l, n), I.push(q), B.push(c(q, t)), q = n + k, S.push(D.length), D.push(""); else {
                        q !== O && D.push(g(f.substring(q)));
                        break
                    }
                    m && 1 < D.length && Ka.throwNoconcat(f);
                    if (!h || I.length) {
                        var P = function (a) {
                            for (var b = 0, c = I.length; b <
                            c; b++) {
                                if (r && v(a[b])) return;
                                D[S[b]] = a[b]
                            }
                            return D.join("")
                        };
                        return Q(function (a) {
                            var b = 0, c = I.length, e = Array(c);
                            try {
                                for (; b < c; b++) e[b] = B[b](a);
                                return P(e)
                            } catch (g) {
                                d(Ka.interr(f, g))
                            }
                        }, {
                            exp: f, expressions: I, $$watchDelegate: function (a, b) {
                                var c;
                                return a.$watchGroup(B, function (d, e) {
                                    var f = P(d);
                                    G(b) && b.call(this, f, d !== e ? c : f, a);
                                    c = f
                                })
                            }
                        })
                    }
                }

                var l = b.length, k = a.length, m = new RegExp(b.replace(/./g, f), "g"),
                    r = new RegExp(a.replace(/./g, f), "g");
                h.startSymbol = function () {
                    return b
                };
                h.endSymbol = function () {
                    return a
                };
                return h
            }]
        }

        function $e() {
            this.$get = ["$rootScope", "$window", "$q", "$$q", function (b, a, c, d) {
                function e(e, h, l, k) {
                    var m = 4 < arguments.length, r = m ? ra.call(arguments, 4) : [], s = a.setInterval,
                        A = a.clearInterval, H = 0, M = y(k) && !k, t = (M ? d : c).defer(), p = t.promise;
                    l = y(l) ? l : 0;
                    p.then(null, null, m ? function () {
                        e.apply(null, r)
                    } : e);
                    p.$$intervalId = s(function () {
                        t.notify(H++);
                        0 < l && H >= l && (t.resolve(H), A(p.$$intervalId), delete f[p.$$intervalId]);
                        M || b.$apply()
                    }, h);
                    f[p.$$intervalId] = t;
                    return p
                }

                var f = {};
                e.cancel = function (b) {
                    return b && b.$$intervalId in
                    f ? (f[b.$$intervalId].reject("canceled"), a.clearInterval(b.$$intervalId), delete f[b.$$intervalId], !0) : !1
                };
                return e
            }]
        }

        function fe() {
            this.$get = function () {
                return {
                    id: "en-us",
                    NUMBER_FORMATS: {
                        DECIMAL_SEP: ".",
                        GROUP_SEP: ",",
                        PATTERNS: [{
                            minInt: 1,
                            minFrac: 0,
                            maxFrac: 3,
                            posPre: "",
                            posSuf: "",
                            negPre: "-",
                            negSuf: "",
                            gSize: 3,
                            lgSize: 3
                        }, {
                            minInt: 1,
                            minFrac: 2,
                            maxFrac: 2,
                            posPre: "\u00a4",
                            posSuf: "",
                            negPre: "(\u00a4",
                            negSuf: ")",
                            gSize: 3,
                            lgSize: 3
                        }],
                        CURRENCY_SYM: "$"
                    },
                    DATETIME_FORMATS: {
                        MONTH: "January February March April May June July August September October November December".split(" "),
                        SHORTMONTH: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
                        DAY: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
                        SHORTDAY: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
                        AMPMS: ["AM", "PM"],
                        medium: "MMM d, y h:mm:ss a",
                        "short": "M/d/yy h:mm a",
                        fullDate: "EEEE, MMMM d, y",
                        longDate: "MMMM d, y",
                        mediumDate: "MMM d, y",
                        shortDate: "M/d/yy",
                        mediumTime: "h:mm:ss a",
                        shortTime: "h:mm a",
                        ERANAMES: ["Before Christ", "Anno Domini"],
                        ERAS: ["BC", "AD"]
                    },
                    pluralCat: function (b) {
                        return 1 === b ? "one" : "other"
                    }
                }
            }
        }

        function bc(b) {
            b = b.split("/");
            for (var a = b.length; a--;) b[a] = mb(b[a]);
            return b.join("/")
        }

        function gd(b, a) {
            var c = Aa(b);
            a.$$protocol = c.protocol;
            a.$$host = c.hostname;
            a.$$port = Y(c.port) || Sf[c.protocol] || null
        }

        function hd(b, a) {
            var c = "/" !== b.charAt(0);
            c && (b = "/" + b);
            var d = Aa(b);
            a.$$path = decodeURIComponent(c && "/" === d.pathname.charAt(0) ? d.pathname.substring(1) : d.pathname);
            a.$$search = yc(d.search);
            a.$$hash = decodeURIComponent(d.hash);
            a.$$path && "/" != a.$$path.charAt(0) && (a.$$path = "/" + a.$$path)
        }

        function ya(b, a) {
            if (0 ===
                a.indexOf(b)) return a.substr(b.length)
        }

        function Ia(b) {
            var a = b.indexOf("#");
            return -1 == a ? b : b.substr(0, a)
        }

        function Bb(b) {
            return b.replace(/(#.+)|#$/, "$1")
        }

        function cc(b) {
            return b.substr(0, Ia(b).lastIndexOf("/") + 1)
        }

        function dc(b, a) {
            this.$$html5 = !0;
            a = a || "";
            var c = cc(b);
            gd(b, this);
            this.$$parse = function (a) {
                var b = ya(c, a);
                if (!L(b)) throw Cb("ipthprfx", a, c);
                hd(b, this);
                this.$$path || (this.$$path = "/");
                this.$$compose()
            };
            this.$$compose = function () {
                var a = Qb(this.$$search), b = this.$$hash ? "#" + mb(this.$$hash) : "";
                this.$$url =
                    bc(this.$$path) + (a ? "?" + a : "") + b;
                this.$$absUrl = c + this.$$url.substr(1)
            };
            this.$$parseLinkUrl = function (d, e) {
                if (e && "#" === e[0]) return this.hash(e.slice(1)), !0;
                var f, g;
                (f = ya(b, d)) !== u ? (g = f, g = (f = ya(a, f)) !== u ? c + (ya("/", f) || f) : b + g) : (f = ya(c, d)) !== u ? g = c + f : c == d + "/" && (g = c);
                g && this.$$parse(g);
                return !!g
            }
        }

        function ec(b, a) {
            var c = cc(b);
            gd(b, this);
            this.$$parse = function (d) {
                d = ya(b, d) || ya(c, d);
                var e;
                "#" === d.charAt(0) ? (e = ya(a, d), v(e) && (e = d)) : e = this.$$html5 ? d : "";
                hd(e, this);
                d = this.$$path;
                var f = /^\/[A-Z]:(\/.*)/;
                0 === e.indexOf(b) &&
                (e = e.replace(b, ""));
                f.exec(e) || (d = (e = f.exec(d)) ? e[1] : d);
                this.$$path = d;
                this.$$compose()
            };
            this.$$compose = function () {
                var c = Qb(this.$$search), e = this.$$hash ? "#" + mb(this.$$hash) : "";
                this.$$url = bc(this.$$path) + (c ? "?" + c : "") + e;
                this.$$absUrl = b + (this.$$url ? a + this.$$url : "")
            };
            this.$$parseLinkUrl = function (a, c) {
                return Ia(b) == Ia(a) ? (this.$$parse(a), !0) : !1
            }
        }

        function id(b, a) {
            this.$$html5 = !0;
            ec.apply(this, arguments);
            var c = cc(b);
            this.$$parseLinkUrl = function (d, e) {
                if (e && "#" === e[0]) return this.hash(e.slice(1)), !0;
                var f,
                    g;
                b == Ia(d) ? f = d : (g = ya(c, d)) ? f = b + a + g : c === d + "/" && (f = c);
                f && this.$$parse(f);
                return !!f
            };
            this.$$compose = function () {
                var c = Qb(this.$$search), e = this.$$hash ? "#" + mb(this.$$hash) : "";
                this.$$url = bc(this.$$path) + (c ? "?" + c : "") + e;
                this.$$absUrl = b + a + this.$$url
            }
        }

        function Db(b) {
            return function () {
                return this[b]
            }
        }

        function jd(b, a) {
            return function (c) {
                if (v(c)) return this[b];
                this[b] = a(c);
                this.$$compose();
                return this
            }
        }

        function ef() {
            var b = "", a = {enabled: !1, requireBase: !0, rewriteLinks: !0};
            this.hashPrefix = function (a) {
                return y(a) ?
                    (b = a, this) : b
            };
            this.html5Mode = function (b) {
                return Xa(b) ? (a.enabled = b, this) : C(b) ? (Xa(b.enabled) && (a.enabled = b.enabled), Xa(b.requireBase) && (a.requireBase = b.requireBase), Xa(b.rewriteLinks) && (a.rewriteLinks = b.rewriteLinks), this) : a
            };
            this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement", "$window", function (c, d, e, f, g) {
                function h(a, b, c) {
                    var e = k.url(), f = k.$$state;
                    try {
                        d.url(a, b, c), k.$$state = d.state()
                    } catch (g) {
                        throw k.url(e), k.$$state = f, g;
                    }
                }

                function l(a, b) {
                    c.$broadcast("$locationChangeSuccess", k.absUrl(),
                        a, k.$$state, b)
                }

                var k, m;
                m = d.baseHref();
                var r = d.url(), s;
                if (a.enabled) {
                    if (!m && a.requireBase) throw Cb("nobase");
                    s = r.substring(0, r.indexOf("/", r.indexOf("//") + 2)) + (m || "/");
                    m = e.history ? dc : id
                } else s = Ia(r), m = ec;
                k = new m(s, "#" + b);
                k.$$parseLinkUrl(r, r);
                k.$$state = d.state();
                var A = /^\s*(javascript|mailto):/i;
                f.on("click", function (b) {
                    if (a.rewriteLinks && !b.ctrlKey && !b.metaKey && !b.shiftKey && 2 != b.which && 2 != b.button) {
                        for (var e = z(b.target); "a" !== ta(e[0]);) if (e[0] === f[0] || !(e = e.parent())[0]) return;
                        var h = e.prop("href"),
                            l = e.attr("href") || e.attr("xlink:href");
                        C(h) && "[object SVGAnimatedString]" === h.toString() && (h = Aa(h.animVal).href);
                        A.test(h) || !h || e.attr("target") || b.isDefaultPrevented() || !k.$$parseLinkUrl(h, l) || (b.preventDefault(), k.absUrl() != d.url() && (c.$apply(), g.angular["ff-684208-preventDefault"] = !0))
                    }
                });
                Bb(k.absUrl()) != Bb(r) && d.url(k.absUrl(), !0);
                var H = !0;
                d.onUrlChange(function (a, b) {
                    c.$evalAsync(function () {
                        var d = k.absUrl(), e = k.$$state, f;
                        k.$$parse(a);
                        k.$$state = b;
                        f = c.$broadcast("$locationChangeStart", a, d, b, e).defaultPrevented;
                        k.absUrl() === a && (f ? (k.$$parse(d), k.$$state = e, h(d, !1, e)) : (H = !1, l(d, e)))
                    });
                    c.$$phase || c.$digest()
                });
                c.$watch(function () {
                    var a = Bb(d.url()), b = Bb(k.absUrl()), f = d.state(), g = k.$$replace,
                        m = a !== b || k.$$html5 && e.history && f !== k.$$state;
                    if (H || m) H = !1, c.$evalAsync(function () {
                        var b = k.absUrl(),
                            d = c.$broadcast("$locationChangeStart", b, a, k.$$state, f).defaultPrevented;
                        k.absUrl() === b && (d ? (k.$$parse(a), k.$$state = f) : (m && h(b, g, f === k.$$state ? null : k.$$state), l(a, f)))
                    });
                    k.$$replace = !1
                });
                return k
            }]
        }

        function ff() {
            var b = !0, a = this;
            this.debugEnabled = function (a) {
                return y(a) ? (b = a, this) : b
            };
            this.$get = ["$window", function (c) {
                function d(a) {
                    a instanceof Error && (a.stack ? a = a.message && -1 === a.stack.indexOf(a.message) ? "Error: " + a.message + "\n" + a.stack : a.stack : a.sourceURL && (a = a.message + "\n" + a.sourceURL + ":" + a.line));
                    return a
                }

                function e(a) {
                    var b = c.console || {}, e = b[a] || b.log || w;
                    a = !1;
                    try {
                        a = !!e.apply
                    } catch (l) {
                    }
                    return a ? function () {
                        var a = [];
                        n(arguments, function (b) {
                            a.push(d(b))
                        });
                        return e.apply(b, a)
                    } : function (a, b) {
                        e(a, null == b ? "" : b)
                    }
                }

                return {
                    log: e("log"),
                    info: e("info"), warn: e("warn"), error: e("error"), debug: function () {
                        var c = e("debug");
                        return function () {
                            b && c.apply(a, arguments)
                        }
                    }()
                }
            }]
        }

        function Ba(b, a) {
            if ("__defineGetter__" === b || "__defineSetter__" === b || "__lookupGetter__" === b || "__lookupSetter__" === b || "__proto__" === b) throw ca("isecfld", a);
            return b
        }

        function na(b, a) {
            if (b) {
                if (b.constructor === b) throw ca("isecfn", a);
                if (b.window === b) throw ca("isecwindow", a);
                if (b.children && (b.nodeName || b.prop && b.attr && b.find)) throw ca("isecdom", a);
                if (b === Object) throw ca("isecobj",
                    a);
            }
            return b
        }

        function kd(b, a) {
            if (b) {
                if (b.constructor === b) throw ca("isecfn", a);
                if (b === Tf || b === Uf || b === Vf) throw ca("isecff", a);
            }
        }

        function Wf(b, a) {
            return "undefined" !== typeof b ? b : a
        }

        function ld(b, a) {
            return "undefined" === typeof b ? a : "undefined" === typeof a ? b : b + a
        }

        function U(b, a) {
            var c, d;
            switch (b.type) {
                case q.Program:
                    c = !0;
                    n(b.body, function (b) {
                        U(b.expression, a);
                        c = c && b.expression.constant
                    });
                    b.constant = c;
                    break;
                case q.Literal:
                    b.constant = !0;
                    b.toWatch = [];
                    break;
                case q.UnaryExpression:
                    U(b.argument, a);
                    b.constant = b.argument.constant;
                    b.toWatch = b.argument.toWatch;
                    break;
                case q.BinaryExpression:
                    U(b.left, a);
                    U(b.right, a);
                    b.constant = b.left.constant && b.right.constant;
                    b.toWatch = b.left.toWatch.concat(b.right.toWatch);
                    break;
                case q.LogicalExpression:
                    U(b.left, a);
                    U(b.right, a);
                    b.constant = b.left.constant && b.right.constant;
                    b.toWatch = b.constant ? [] : [b];
                    break;
                case q.ConditionalExpression:
                    U(b.test, a);
                    U(b.alternate, a);
                    U(b.consequent, a);
                    b.constant = b.test.constant && b.alternate.constant && b.consequent.constant;
                    b.toWatch = b.constant ? [] : [b];
                    break;
                case q.Identifier:
                    b.constant =
                        !1;
                    b.toWatch = [b];
                    break;
                case q.MemberExpression:
                    U(b.object, a);
                    b.computed && U(b.property, a);
                    b.constant = b.object.constant && (!b.computed || b.property.constant);
                    b.toWatch = [b];
                    break;
                case q.CallExpression:
                    c = b.filter ? !a(b.callee.name).$stateful : !1;
                    d = [];
                    n(b.arguments, function (b) {
                        U(b, a);
                        c = c && b.constant;
                        b.constant || d.push.apply(d, b.toWatch)
                    });
                    b.constant = c;
                    b.toWatch = b.filter && !a(b.callee.name).$stateful ? d : [b];
                    break;
                case q.AssignmentExpression:
                    U(b.left, a);
                    U(b.right, a);
                    b.constant = b.left.constant && b.right.constant;
                    b.toWatch = [b];
                    break;
                case q.ArrayExpression:
                    c = !0;
                    d = [];
                    n(b.elements, function (b) {
                        U(b, a);
                        c = c && b.constant;
                        b.constant || d.push.apply(d, b.toWatch)
                    });
                    b.constant = c;
                    b.toWatch = d;
                    break;
                case q.ObjectExpression:
                    c = !0;
                    d = [];
                    n(b.properties, function (b) {
                        U(b.value, a);
                        c = c && b.value.constant;
                        b.value.constant || d.push.apply(d, b.value.toWatch)
                    });
                    b.constant = c;
                    b.toWatch = d;
                    break;
                case q.ThisExpression:
                    b.constant = !1, b.toWatch = []
            }
        }

        function md(b) {
            if (1 == b.length) {
                b = b[0].expression;
                var a = b.toWatch;
                return 1 !== a.length ? a : a[0] !== b ? a : u
            }
        }

        function nd(b) {
            return b.type === q.Identifier || b.type === q.MemberExpression
        }

        function od(b) {
            if (1 === b.body.length && nd(b.body[0].expression)) return {
                type: q.AssignmentExpression,
                left: b.body[0].expression,
                right: {type: q.NGValueParameter},
                operator: "="
            }
        }

        function pd(b) {
            return 0 === b.body.length || 1 === b.body.length && (b.body[0].expression.type === q.Literal || b.body[0].expression.type === q.ArrayExpression || b.body[0].expression.type === q.ObjectExpression)
        }

        function qd(b, a) {
            this.astBuilder = b;
            this.$filter = a
        }

        function rd(b,
                    a) {
            this.astBuilder = b;
            this.$filter = a
        }

        function Eb(b, a, c, d) {
            na(b, d);
            a = a.split(".");
            for (var e, f = 0; 1 < a.length; f++) {
                e = Ba(a.shift(), d);
                var g = na(b[e], d);
                g || (g = {}, b[e] = g);
                b = g
            }
            e = Ba(a.shift(), d);
            na(b[e], d);
            return b[e] = c
        }

        function Fb(b) {
            return "constructor" == b
        }

        function fc(b) {
            return G(b.valueOf) ? b.valueOf() : Xf.call(b)
        }

        function gf() {
            var b = ga(), a = ga();
            this.$get = ["$filter", "$sniffer", function (c, d) {
                function e(a, b) {
                    return null == a || null == b ? a === b : "object" === typeof a && (a = fc(a), "object" === typeof a) ? !1 : a === b || a !== a && b !==
                        b
                }

                function f(a, b, c, d, f) {
                    var g = d.inputs, h;
                    if (1 === g.length) {
                        var l = e, g = g[0];
                        return a.$watch(function (a) {
                            var b = g(a);
                            e(b, l) || (h = d(a, u, u, [b]), l = b && fc(b));
                            return h
                        }, b, c, f)
                    }
                    for (var k = [], m = [], r = 0, n = g.length; r < n; r++) k[r] = e, m[r] = null;
                    return a.$watch(function (a) {
                        for (var b = !1, c = 0, f = g.length; c < f; c++) {
                            var l = g[c](a);
                            if (b || (b = !e(l, k[c]))) m[c] = l, k[c] = l && fc(l)
                        }
                        b && (h = d(a, u, u, m));
                        return h
                    }, b, c, f)
                }

                function g(a, b, c, d) {
                    var e, f;
                    return e = a.$watch(function (a) {
                        return d(a)
                    }, function (a, c, d) {
                        f = a;
                        G(b) && b.apply(this, arguments);
                        y(a) &&
                        d.$$postDigest(function () {
                            y(f) && e()
                        })
                    }, c)
                }

                function h(a, b, c, d) {
                    function e(a) {
                        var b = !0;
                        n(a, function (a) {
                            y(a) || (b = !1)
                        });
                        return b
                    }

                    var f, g;
                    return f = a.$watch(function (a) {
                        return d(a)
                    }, function (a, c, d) {
                        g = a;
                        G(b) && b.call(this, a, c, d);
                        e(a) && d.$$postDigest(function () {
                            e(g) && f()
                        })
                    }, c)
                }

                function l(a, b, c, d) {
                    var e;
                    return e = a.$watch(function (a) {
                        return d(a)
                    }, function (a, c, d) {
                        G(b) && b.apply(this, arguments);
                        e()
                    }, c)
                }

                function k(a, b) {
                    if (!b) return a;
                    var c = a.$$watchDelegate, c = c !== h && c !== g ? function (c, d, e, f) {
                        e = a(c, d, e, f);
                        return b(e,
                            c, d)
                    } : function (c, d, e, f) {
                        e = a(c, d, e, f);
                        c = b(e, c, d);
                        return y(e) ? c : e
                    };
                    a.$$watchDelegate && a.$$watchDelegate !== f ? c.$$watchDelegate = a.$$watchDelegate : b.$stateful || (c.$$watchDelegate = f, c.inputs = a.inputs ? a.inputs : [a]);
                    return c
                }

                var m = {csp: d.csp, expensiveChecks: !1}, r = {csp: d.csp, expensiveChecks: !0};
                return function (d, e, H) {
                    var n, t, p;
                    switch (typeof d) {
                        case "string":
                            p = d = d.trim();
                            var q = H ? a : b;
                            n = q[p];
                            n || (":" === d.charAt(0) && ":" === d.charAt(1) && (t = !0, d = d.substring(2)), H = H ? r : m, n = new gc(H), n = (new hc(n, c, H)).parse(d), n.constant ?
                                n.$$watchDelegate = l : t ? n.$$watchDelegate = n.literal ? h : g : n.inputs && (n.$$watchDelegate = f), q[p] = n);
                            return k(n, e);
                        case "function":
                            return k(d, e);
                        default:
                            return w
                    }
                }
            }]
        }

        function jf() {
            this.$get = ["$rootScope", "$exceptionHandler", function (b, a) {
                return sd(function (a) {
                    b.$evalAsync(a)
                }, a)
            }]
        }

        function kf() {
            this.$get = ["$browser", "$exceptionHandler", function (b, a) {
                return sd(function (a) {
                    b.defer(a)
                }, a)
            }]
        }

        function sd(b, a) {
            function c(a, b, c) {
                function d(b) {
                    return function (c) {
                        e || (e = !0, b.call(a, c))
                    }
                }

                var e = !1;
                return [d(b), d(c)]
            }

            function d() {
                this.$$state = {status: 0}
            }

            function e(a, b) {
                return function (c) {
                    b.call(a, c)
                }
            }

            function f(c) {
                !c.processScheduled && c.pending && (c.processScheduled = !0, b(function () {
                    var b, d, e;
                    e = c.pending;
                    c.processScheduled = !1;
                    c.pending = u;
                    for (var f = 0, g = e.length; f < g; ++f) {
                        d = e[f][0];
                        b = e[f][c.status];
                        try {
                            G(b) ? d.resolve(b(c.value)) : 1 === c.status ? d.resolve(c.value) : d.reject(c.value)
                        } catch (h) {
                            d.reject(h), a(h)
                        }
                    }
                }))
            }

            function g() {
                this.promise = new d;
                this.resolve = e(this, this.resolve);
                this.reject = e(this, this.reject);
                this.notify =
                    e(this, this.notify)
            }

            var h = F("$q", TypeError);
            d.prototype = {
                then: function (a, b, c) {
                    var d = new g;
                    this.$$state.pending = this.$$state.pending || [];
                    this.$$state.pending.push([d, a, b, c]);
                    0 < this.$$state.status && f(this.$$state);
                    return d.promise
                }, "catch": function (a) {
                    return this.then(null, a)
                }, "finally": function (a, b) {
                    return this.then(function (b) {
                        return k(b, !0, a)
                    }, function (b) {
                        return k(b, !1, a)
                    }, b)
                }
            };
            g.prototype = {
                resolve: function (a) {
                    this.promise.$$state.status || (a === this.promise ? this.$$reject(h("qcycle", a)) : this.$$resolve(a))
                },
                $$resolve: function (b) {
                    var d, e;
                    e = c(this, this.$$resolve, this.$$reject);
                    try {
                        if (C(b) || G(b)) d = b && b.then;
                        G(d) ? (this.promise.$$state.status = -1, d.call(b, e[0], e[1], this.notify)) : (this.promise.$$state.value = b, this.promise.$$state.status = 1, f(this.promise.$$state))
                    } catch (g) {
                        e[1](g), a(g)
                    }
                }, reject: function (a) {
                    this.promise.$$state.status || this.$$reject(a)
                }, $$reject: function (a) {
                    this.promise.$$state.value = a;
                    this.promise.$$state.status = 2;
                    f(this.promise.$$state)
                }, notify: function (c) {
                    var d = this.promise.$$state.pending;
                    0 >= this.promise.$$state.status && d && d.length && b(function () {
                        for (var b, e, f = 0, g = d.length; f < g; f++) {
                            e = d[f][0];
                            b = d[f][3];
                            try {
                                e.notify(G(b) ? b(c) : c)
                            } catch (h) {
                                a(h)
                            }
                        }
                    })
                }
            };
            var l = function (a, b) {
                var c = new g;
                b ? c.resolve(a) : c.reject(a);
                return c.promise
            }, k = function (a, b, c) {
                var d = null;
                try {
                    G(c) && (d = c())
                } catch (e) {
                    return l(e, !1)
                }
                return d && G(d.then) ? d.then(function () {
                    return l(a, b)
                }, function (a) {
                    return l(a, !1)
                }) : l(a, b)
            }, m = function (a, b, c, d) {
                var e = new g;
                e.resolve(a);
                return e.promise.then(b, c, d)
            }, r = function A(a) {
                if (!G(a)) throw h("norslvr",
                    a);
                if (!(this instanceof A)) return new A(a);
                var b = new g;
                a(function (a) {
                    b.resolve(a)
                }, function (a) {
                    b.reject(a)
                });
                return b.promise
            };
            r.defer = function () {
                return new g
            };
            r.reject = function (a) {
                var b = new g;
                b.reject(a);
                return b.promise
            };
            r.when = m;
            r.all = function (a) {
                var b = new g, c = 0, d = K(a) ? [] : {};
                n(a, function (a, e) {
                    c++;
                    m(a).then(function (a) {
                        d.hasOwnProperty(e) || (d[e] = a, --c || b.resolve(d))
                    }, function (a) {
                        d.hasOwnProperty(e) || b.reject(a)
                    })
                });
                0 === c && b.resolve(d);
                return b.promise
            };
            return r
        }

        function tf() {
            this.$get = ["$window",
                "$timeout", function (b, a) {
                    function c() {
                        for (var a = 0; a < m.length; a++) {
                            var b = m[a];
                            b && (m[a] = null, b())
                        }
                        k = m.length = 0
                    }

                    function d(a) {
                        var b = m.length;
                        k++;
                        m.push(a);
                        0 === b && (l = h(c));
                        return function () {
                            0 <= b && (b = m[b] = null, 0 === --k && l && (l(), l = null, m.length = 0))
                        }
                    }

                    var e = b.requestAnimationFrame || b.webkitRequestAnimationFrame,
                        f = b.cancelAnimationFrame || b.webkitCancelAnimationFrame || b.webkitCancelRequestAnimationFrame,
                        g = !!e, h = g ? function (a) {
                            var b = e(a);
                            return function () {
                                f(b)
                            }
                        } : function (b) {
                            var c = a(b, 16.66, !1);
                            return function () {
                                a.cancel(c)
                            }
                        };
                    d.supported = g;
                    var l, k = 0, m = [];
                    return d
                }]
        }

        function hf() {
            function b(a) {
                function b() {
                    this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null;
                    this.$$listeners = {};
                    this.$$listenerCount = {};
                    this.$$watchersCount = 0;
                    this.$id = ++lb;
                    this.$$ChildScope = null
                }

                b.prototype = a;
                return b
            }

            var a = 10, c = F("$rootScope"), d = null, e = null;
            this.digestTtl = function (b) {
                arguments.length && (a = b);
                return a
            };
            this.$get = ["$injector", "$exceptionHandler", "$parse", "$browser", function (f, g, h, l) {
                function k(a) {
                    a.currentScope.$$destroyed =
                        !0
                }

                function m() {
                    this.$id = ++lb;
                    this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null;
                    this.$root = this;
                    this.$$destroyed = !1;
                    this.$$listeners = {};
                    this.$$listenerCount = {};
                    this.$$watchersCount = 0;
                    this.$$isolateBindings = null
                }

                function r(a) {
                    if (p.$$phase) throw c("inprog", p.$$phase);
                    p.$$phase = a
                }

                function s(a, b) {
                    do a.$$watchersCount += b; while (a = a.$parent)
                }

                function A(a, b, c) {
                    do a.$$listenerCount[c] -= b, 0 === a.$$listenerCount[c] && delete a.$$listenerCount[c];
                    while (a = a.$parent)
                }

                function q() {
                }

                function u() {
                    for (; I.length;) try {
                        I.shift()()
                    } catch (a) {
                        g(a)
                    }
                    e = null
                }

                function t() {
                    null === e && (e = l.defer(function () {
                        p.$apply(u)
                    }))
                }

                m.prototype = {
                    constructor: m, $new: function (a, c) {
                        var d;
                        c = c || this;
                        a ? (d = new m, d.$root = this.$root) : (this.$$ChildScope || (this.$$ChildScope = b(this)), d = new this.$$ChildScope);
                        d.$parent = c;
                        d.$$prevSibling = c.$$childTail;
                        c.$$childHead ? (c.$$childTail.$$nextSibling = d, c.$$childTail = d) : c.$$childHead = c.$$childTail = d;
                        (a || c != this) && d.$on("$destroy", k);
                        return d
                    },
                    $watch: function (a, b, c, e) {
                        var f = h(a);
                        if (f.$$watchDelegate) return f.$$watchDelegate(this, b, c, f, a);
                        var g = this, l = g.$$watchers, k = {fn: b, last: q, get: f, exp: e || a, eq: !!c};
                        d = null;
                        G(b) || (k.fn = w);
                        l || (l = g.$$watchers = []);
                        l.unshift(k);
                        s(this, 1);
                        return function () {
                            0 <= Ya(l, k) && s(g, -1);
                            d = null
                        }
                    }, $watchGroup: function (a, b) {
                        function c() {
                            h = !1;
                            l ? (l = !1, b(e, e, g)) : b(e, d, g)
                        }

                        var d = Array(a.length), e = Array(a.length), f = [], g = this, h = !1, l = !0;
                        if (!a.length) {
                            var k = !0;
                            g.$evalAsync(function () {
                                k && b(e, e, g)
                            });
                            return function () {
                                k = !1
                            }
                        }
                        if (1 === a.length) return this.$watch(a[0],
                            function (a, c, f) {
                                e[0] = a;
                                d[0] = c;
                                b(e, a === c ? e : d, f)
                            });
                        n(a, function (a, b) {
                            var l = g.$watch(a, function (a, f) {
                                e[b] = a;
                                d[b] = f;
                                h || (h = !0, g.$evalAsync(c))
                            });
                            f.push(l)
                        });
                        return function () {
                            for (; f.length;) f.shift()()
                        }
                    }, $watchCollection: function (a, b) {
                        function c(a) {
                            e = a;
                            var b, d, g, h;
                            if (!v(e)) {
                                if (C(e)) if (Da(e)) for (f !== r && (f = r, n = f.length = 0, k++), a = e.length, n !== a && (k++, f.length = n = a), b = 0; b < a; b++) h = f[b], g = e[b], d = h !== h && g !== g, d || h === g || (k++, f[b] = g); else {
                                    f !== s && (f = s = {}, n = 0, k++);
                                    a = 0;
                                    for (b in e) e.hasOwnProperty(b) && (a++, g = e[b], h =
                                        f[b], b in f ? (d = h !== h && g !== g, d || h === g || (k++, f[b] = g)) : (n++, f[b] = g, k++));
                                    if (n > a) for (b in k++, f) e.hasOwnProperty(b) || (n--, delete f[b])
                                } else f !== e && (f = e, k++);
                                return k
                            }
                        }

                        c.$stateful = !0;
                        var d = this, e, f, g, l = 1 < b.length, k = 0, m = h(a, c), r = [], s = {}, p = !0, n = 0;
                        return this.$watch(m, function () {
                            p ? (p = !1, b(e, e, d)) : b(e, g, d);
                            if (l) if (C(e)) if (Da(e)) {
                                g = Array(e.length);
                                for (var a = 0; a < e.length; a++) g[a] = e[a]
                            } else for (a in g = {}, e) kb.call(e, a) && (g[a] = e[a]); else g = e
                        })
                    }, $digest: function () {
                        var b, f, h, k, m, s, n = a, A, t = [], I, v;
                        r("$digest");
                        l.$$checkUrlChange();
                        this === p && null !== e && (l.defer.cancel(e), u());
                        d = null;
                        do {
                            s = !1;
                            for (A = this; x.length;) {
                                try {
                                    v = x.shift(), v.scope.$eval(v.expression, v.locals)
                                } catch (w) {
                                    g(w)
                                }
                                d = null
                            }
                            a:do {
                                if (k = A.$$watchers) for (m = k.length; m--;) try {
                                    if (b = k[m]) if ((f = b.get(A)) !== (h = b.last) && !(b.eq ? ka(f, h) : "number" === typeof f && "number" === typeof h && isNaN(f) && isNaN(h))) s = !0, d = b, b.last = b.eq ? ua(f, null) : f, b.fn(f, h === q ? f : h, A), 5 > n && (I = 4 - n, t[I] || (t[I] = []), t[I].push({
                                        msg: G(b.exp) ? "fn: " + (b.exp.name || b.exp.toString()) : b.exp,
                                        newVal: f,
                                        oldVal: h
                                    })); else if (b ===
                                        d) {
                                        s = !1;
                                        break a
                                    }
                                } catch (z) {
                                    g(z)
                                }
                                if (!(k = A.$$watchersCount && A.$$childHead || A !== this && A.$$nextSibling)) for (; A !== this && !(k = A.$$nextSibling);) A = A.$parent
                            } while (A = k);
                            if ((s || x.length) && !n--) throw p.$$phase = null, c("infdig", a, t);
                        } while (s || x.length);
                        for (p.$$phase = null; y.length;) try {
                            y.shift()()
                        } catch (C) {
                            g(C)
                        }
                    }, $destroy: function () {
                        if (!this.$$destroyed) {
                            var a = this.$parent;
                            this.$broadcast("$destroy");
                            this.$$destroyed = !0;
                            this === p && l.$$applicationDestroyed();
                            s(this, -this.$$watchersCount);
                            for (var b in this.$$listenerCount) A(this,
                                this.$$listenerCount[b], b);
                            a && a.$$childHead == this && (a.$$childHead = this.$$nextSibling);
                            a && a.$$childTail == this && (a.$$childTail = this.$$prevSibling);
                            this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling);
                            this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling);
                            this.$destroy = this.$digest = this.$apply = this.$evalAsync = this.$applyAsync = w;
                            this.$on = this.$watch = this.$watchGroup = function () {
                                return w
                            };
                            this.$$listeners = {};
                            this.$parent = this.$$nextSibling = this.$$prevSibling = this.$$childHead =
                                this.$$childTail = this.$root = this.$$watchers = null
                        }
                    }, $eval: function (a, b) {
                        return h(a)(this, b)
                    }, $evalAsync: function (a, b) {
                        p.$$phase || x.length || l.defer(function () {
                            x.length && p.$digest()
                        });
                        x.push({scope: this, expression: a, locals: b})
                    }, $$postDigest: function (a) {
                        y.push(a)
                    }, $apply: function (a) {
                        try {
                            return r("$apply"), this.$eval(a)
                        } catch (b) {
                            g(b)
                        } finally {
                            p.$$phase = null;
                            try {
                                p.$digest()
                            } catch (c) {
                                throw g(c), c;
                            }
                        }
                    }, $applyAsync: function (a) {
                        function b() {
                            c.$eval(a)
                        }

                        var c = this;
                        a && I.push(b);
                        t()
                    }, $on: function (a, b) {
                        var c = this.$$listeners[a];
                        c || (this.$$listeners[a] = c = []);
                        c.push(b);
                        var d = this;
                        do d.$$listenerCount[a] || (d.$$listenerCount[a] = 0), d.$$listenerCount[a]++; while (d = d.$parent);
                        var e = this;
                        return function () {
                            var d = c.indexOf(b);
                            -1 !== d && (c[d] = null, A(e, 1, a))
                        }
                    }, $emit: function (a, b) {
                        var c = [], d, e = this, f = !1, h = {
                            name: a, targetScope: e, stopPropagation: function () {
                                f = !0
                            }, preventDefault: function () {
                                h.defaultPrevented = !0
                            }, defaultPrevented: !1
                        }, l = Za([h], arguments, 1), k, m;
                        do {
                            d = e.$$listeners[a] || c;
                            h.currentScope = e;
                            k = 0;
                            for (m = d.length; k < m; k++) if (d[k]) try {
                                d[k].apply(null,
                                    l)
                            } catch (r) {
                                g(r)
                            } else d.splice(k, 1), k--, m--;
                            if (f) return h.currentScope = null, h;
                            e = e.$parent
                        } while (e);
                        h.currentScope = null;
                        return h
                    }, $broadcast: function (a, b) {
                        var c = this, d = this, e = {
                            name: a, targetScope: this, preventDefault: function () {
                                e.defaultPrevented = !0
                            }, defaultPrevented: !1
                        };
                        if (!this.$$listenerCount[a]) return e;
                        for (var f = Za([e], arguments, 1), h, l; c = d;) {
                            e.currentScope = c;
                            d = c.$$listeners[a] || [];
                            h = 0;
                            for (l = d.length; h < l; h++) if (d[h]) try {
                                d[h].apply(null, f)
                            } catch (k) {
                                g(k)
                            } else d.splice(h, 1), h--, l--;
                            if (!(d = c.$$listenerCount[a] &&
                                c.$$childHead || c !== this && c.$$nextSibling)) for (; c !== this && !(d = c.$$nextSibling);) c = c.$parent
                        }
                        e.currentScope = null;
                        return e
                    }
                };
                var p = new m, x = p.$$asyncQueue = [], y = p.$$postDigestQueue = [], I = p.$$applyAsyncQueue = [];
                return p
            }]
        }

        function ge() {
            var b = /^\s*(https?|ftp|mailto|tel|file):/, a = /^\s*((https?|ftp|file|blob):|data:image\/)/;
            this.aHrefSanitizationWhitelist = function (a) {
                return y(a) ? (b = a, this) : b
            };
            this.imgSrcSanitizationWhitelist = function (b) {
                return y(b) ? (a = b, this) : a
            };
            this.$get = function () {
                return function (c, d) {
                    var e =
                        d ? a : b, f;
                    f = Aa(c).href;
                    return "" === f || f.match(e) ? c : "unsafe:" + f
                }
            }
        }

        function Yf(b) {
            if ("self" === b) return b;
            if (L(b)) {
                if (-1 < b.indexOf("***")) throw Ca("iwcard", b);
                b = td(b).replace("\\*\\*", ".*").replace("\\*", "[^:/.?&;]*");
                return new RegExp("^" + b + "$")
            }
            if (Va(b)) return new RegExp("^" + b.source + "$");
            throw Ca("imatcher");
        }

        function ud(b) {
            var a = [];
            y(b) && n(b, function (b) {
                a.push(Yf(b))
            });
            return a
        }

        function mf() {
            this.SCE_CONTEXTS = oa;
            var b = ["self"], a = [];
            this.resourceUrlWhitelist = function (a) {
                arguments.length && (b = ud(a));
                return b
            };
            this.resourceUrlBlacklist = function (b) {
                arguments.length && (a = ud(b));
                return a
            };
            this.$get = ["$injector", function (c) {
                function d(a, b) {
                    return "self" === a ? fd(b) : !!a.exec(b.href)
                }

                function e(a) {
                    var b = function (a) {
                        this.$$unwrapTrustedValue = function () {
                            return a
                        }
                    };
                    a && (b.prototype = new a);
                    b.prototype.valueOf = function () {
                        return this.$$unwrapTrustedValue()
                    };
                    b.prototype.toString = function () {
                        return this.$$unwrapTrustedValue().toString()
                    };
                    return b
                }

                var f = function (a) {
                    throw Ca("unsafe");
                };
                c.has("$sanitize") && (f = c.get("$sanitize"));
                var g = e(), h = {};
                h[oa.HTML] = e(g);
                h[oa.CSS] = e(g);
                h[oa.URL] = e(g);
                h[oa.JS] = e(g);
                h[oa.RESOURCE_URL] = e(h[oa.URL]);
                return {
                    trustAs: function (a, b) {
                        var c = h.hasOwnProperty(a) ? h[a] : null;
                        if (!c) throw Ca("icontext", a, b);
                        if (null === b || b === u || "" === b) return b;
                        if ("string" !== typeof b) throw Ca("itype", a);
                        return new c(b)
                    }, getTrusted: function (c, e) {
                        if (null === e || e === u || "" === e) return e;
                        var g = h.hasOwnProperty(c) ? h[c] : null;
                        if (g && e instanceof g) return e.$$unwrapTrustedValue();
                        if (c === oa.RESOURCE_URL) {
                            var g = Aa(e.toString()), r, s, n =
                                !1;
                            r = 0;
                            for (s = b.length; r < s; r++) if (d(b[r], g)) {
                                n = !0;
                                break
                            }
                            if (n) for (r = 0, s = a.length; r < s; r++) if (d(a[r], g)) {
                                n = !1;
                                break
                            }
                            if (n) return e;
                            throw Ca("insecurl", e.toString());
                        }
                        if (c === oa.HTML) return f(e);
                        throw Ca("unsafe");
                    }, valueOf: function (a) {
                        return a instanceof g ? a.$$unwrapTrustedValue() : a
                    }
                }
            }]
        }

        function lf() {
            var b = !0;
            this.enabled = function (a) {
                arguments.length && (b = !!a);
                return b
            };
            this.$get = ["$parse", "$sceDelegate", function (a, c) {
                if (b && 8 > gb) throw Ca("iequirks");
                var d = fa(oa);
                d.isEnabled = function () {
                    return b
                };
                d.trustAs =
                    c.trustAs;
                d.getTrusted = c.getTrusted;
                d.valueOf = c.valueOf;
                b || (d.trustAs = d.getTrusted = function (a, b) {
                    return b
                }, d.valueOf = Ua);
                d.parseAs = function (b, c) {
                    var e = a(c);
                    return e.literal && e.constant ? e : a(c, function (a) {
                        return d.getTrusted(b, a)
                    })
                };
                var e = d.parseAs, f = d.getTrusted, g = d.trustAs;
                n(oa, function (a, b) {
                    var c = E(b);
                    d[eb("parse_as_" + c)] = function (b) {
                        return e(a, b)
                    };
                    d[eb("get_trusted_" + c)] = function (b) {
                        return f(a, b)
                    };
                    d[eb("trust_as_" + c)] = function (b) {
                        return g(a, b)
                    }
                });
                return d
            }]
        }

        function nf() {
            this.$get = ["$window", "$document",
                function (b, a) {
                    var c = {}, d = Y((/android (\d+)/.exec(E((b.navigator || {}).userAgent)) || [])[1]),
                        e = /Boxee/i.test((b.navigator || {}).userAgent), f = a[0] || {}, g,
                        h = /^(Moz|webkit|ms)(?=[A-Z])/, l = f.body && f.body.style, k = !1, m = !1;
                    if (l) {
                        for (var r in l) if (k = h.exec(r)) {
                            g = k[0];
                            g = g.substr(0, 1).toUpperCase() + g.substr(1);
                            break
                        }
                        g || (g = "WebkitOpacity" in l && "webkit");
                        k = !!("transition" in l || g + "Transition" in l);
                        m = !!("animation" in l || g + "Animation" in l);
                        !d || k && m || (k = L(l.webkitTransition), m = L(l.webkitAnimation))
                    }
                    return {
                        history: !(!b.history ||
                            !b.history.pushState || 4 > d || e), hasEvent: function (a) {
                            if ("input" === a && 11 >= gb) return !1;
                            if (v(c[a])) {
                                var b = f.createElement("div");
                                c[a] = "on" + a in b
                            }
                            return c[a]
                        }, csp: cb(), vendorPrefix: g, transitions: k, animations: m, android: d
                    }
                }]
        }

        function pf() {
            this.$get = ["$templateCache", "$http", "$q", function (b, a, c) {
                function d(e, f) {
                    d.totalPendingRequests++;
                    var g = a.defaults && a.defaults.transformResponse;
                    K(g) ? g = g.filter(function (a) {
                        return a !== $b
                    }) : g === $b && (g = null);
                    return a.get(e, {cache: b, transformResponse: g})["finally"](function () {
                        d.totalPendingRequests--
                    }).then(function (a) {
                        b.put(e,
                            a.data);
                        return a.data
                    }, function (a) {
                        if (!f) throw ea("tpload", e, a.status, a.statusText);
                        return c.reject(a)
                    })
                }

                d.totalPendingRequests = 0;
                return d
            }]
        }

        function qf() {
            this.$get = ["$rootScope", "$browser", "$location", function (b, a, c) {
                return {
                    findBindings: function (a, b, c) {
                        a = a.getElementsByClassName("ng-binding");
                        var g = [];
                        n(a, function (a) {
                            var d = aa.element(a).data("$binding");
                            d && n(d, function (d) {
                                c ? (new RegExp("(^|\\s)" + td(b) + "(\\s|\\||$)")).test(d) && g.push(a) : -1 != d.indexOf(b) && g.push(a)
                            })
                        });
                        return g
                    }, findModels: function (a,
                                             b, c) {
                        for (var g = ["ng-", "data-ng-", "ng\\:"], h = 0; h < g.length; ++h) {
                            var l = a.querySelectorAll("[" + g[h] + "model" + (c ? "=" : "*=") + '"' + b + '"]');
                            if (l.length) return l
                        }
                    }, getLocation: function () {
                        return c.url()
                    }, setLocation: function (a) {
                        a !== c.url() && (c.url(a), b.$digest())
                    }, whenStable: function (b) {
                        a.notifyWhenNoOutstandingRequests(b)
                    }
                }
            }]
        }

        function rf() {
            this.$get = ["$rootScope", "$browser", "$q", "$$q", "$exceptionHandler", function (b, a, c, d, e) {
                function f(f, l, k) {
                    G(f) || (k = l, l = f, f = w);
                    var m = ra.call(arguments, 3), r = y(k) && !k, s = (r ? d : c).defer(),
                        n = s.promise, q;
                    q = a.defer(function () {
                        try {
                            s.resolve(f.apply(null, m))
                        } catch (a) {
                            s.reject(a), e(a)
                        } finally {
                            delete g[n.$$timeoutId]
                        }
                        r || b.$apply()
                    }, l);
                    n.$$timeoutId = q;
                    g[q] = s;
                    return n
                }

                var g = {};
                f.cancel = function (b) {
                    return b && b.$$timeoutId in g ? (g[b.$$timeoutId].reject("canceled"), delete g[b.$$timeoutId], a.defer.cancel(b.$$timeoutId)) : !1
                };
                return f
            }]
        }

        function Aa(b) {
            gb && (Z.setAttribute("href", b), b = Z.href);
            Z.setAttribute("href", b);
            return {
                href: Z.href,
                protocol: Z.protocol ? Z.protocol.replace(/:$/, "") : "",
                host: Z.host,
                search: Z.search ? Z.search.replace(/^\?/, "") : "",
                hash: Z.hash ? Z.hash.replace(/^#/, "") : "",
                hostname: Z.hostname,
                port: Z.port,
                pathname: "/" === Z.pathname.charAt(0) ? Z.pathname : "/" + Z.pathname
            }
        }

        function fd(b) {
            b = L(b) ? Aa(b) : b;
            return b.protocol === vd.protocol && b.host === vd.host
        }

        function sf() {
            this.$get = qa(N)
        }

        function wd(b) {
            function a(a) {
                try {
                    return decodeURIComponent(a)
                } catch (b) {
                    return a
                }
            }

            var c = b[0] || {}, d = {}, e = "";
            return function () {
                var b, g, h, l, k;
                b = c.cookie || "";
                if (b !== e) for (e = b, b = e.split("; "), d = {}, h = 0; h < b.length; h++) g =
                    b[h], l = g.indexOf("="), 0 < l && (k = a(g.substring(0, l)), d[k] === u && (d[k] = a(g.substring(l + 1))));
                return d
            }
        }

        function xf() {
            this.$get = wd
        }

        function Kc(b) {
            function a(c, d) {
                if (C(c)) {
                    var e = {};
                    n(c, function (b, c) {
                        e[c] = a(c, b)
                    });
                    return e
                }
                return b.factory(c + "Filter", d)
            }

            this.register = a;
            this.$get = ["$injector", function (a) {
                return function (b) {
                    return a.get(b + "Filter")
                }
            }];
            a("currency", xd);
            a("date", yd);
            a("filter", Zf);
            a("json", $f);
            a("limitTo", ag);
            a("lowercase", bg);
            a("number", zd);
            a("orderBy", Ad);
            a("uppercase", cg)
        }

        function Zf() {
            return function (b,
                             a, c) {
                if (!Da(b)) {
                    if (null == b) return b;
                    throw F("filter")("notarray", b);
                }
                var d;
                switch (ic(a)) {
                    case "function":
                        break;
                    case "boolean":
                    case "null":
                    case "number":
                    case "string":
                        d = !0;
                    case "object":
                        a = dg(a, c, d);
                        break;
                    default:
                        return b
                }
                return Array.prototype.filter.call(b, a)
            }
        }

        function dg(b, a, c) {
            var d = C(b) && "$" in b;
            !0 === a ? a = ka : G(a) || (a = function (a, b) {
                if (v(a)) return !1;
                if (null === a || null === b) return a === b;
                var c;
                !(c = C(b)) && (c = C(a)) && (c = a, c = !(G(c.toString) && c.toString !== Object.prototype.toString));
                if (c) return !1;
                a = E("" + a);
                b = E("" + b);
                return -1 !== a.indexOf(b)
            });
            return function (e) {
                return d && !C(e) ? La(e, b.$, a, !1) : La(e, b, a, c)
            }
        }

        function La(b, a, c, d, e) {
            var f = ic(b), g = ic(a);
            if ("string" === g && "!" === a.charAt(0)) return !La(b, a.substring(1), c, d);
            if (K(b)) return b.some(function (b) {
                return La(b, a, c, d)
            });
            switch (f) {
                case "object":
                    var h;
                    if (d) {
                        for (h in b) if ("$" !== h.charAt(0) && La(b[h], a, c, !0)) return !0;
                        return e ? !1 : La(b, a, c, !1)
                    }
                    if ("object" === g) {
                        for (h in a) if (e = a[h], !G(e) && !v(e) && (f = "$" === h, !La(f ? b : b[h], e, c, f, f))) return !1;
                        return !0
                    }
                    return c(b, a);
                case "function":
                    return !1;
                default:
                    return c(b, a)
            }
        }

        function ic(b) {
            return null === b ? "null" : typeof b
        }

        function xd(b) {
            var a = b.NUMBER_FORMATS;
            return function (b, d, e) {
                v(d) && (d = a.CURRENCY_SYM);
                v(e) && (e = a.PATTERNS[1].maxFrac);
                return null == b ? b : Bd(b, a.PATTERNS[1], a.GROUP_SEP, a.DECIMAL_SEP, e).replace(/\u00A4/g, d)
            }
        }

        function zd(b) {
            var a = b.NUMBER_FORMATS;
            return function (b, d) {
                return null == b ? b : Bd(b, a.PATTERNS[0], a.GROUP_SEP, a.DECIMAL_SEP, d)
            }
        }

        function Bd(b, a, c, d, e) {
            if (C(b)) return "";
            var f = 0 > b;
            b = Math.abs(b);
            var g = Infinity ===
                b;
            if (!g && !isFinite(b)) return "";
            var h = b + "", l = "", k = !1, m = [];
            g && (l = "\u221e");
            if (!g && -1 !== h.indexOf("e")) {
                var r = h.match(/([\d\.]+)e(-?)(\d+)/);
                r && "-" == r[2] && r[3] > e + 1 ? b = 0 : (l = h, k = !0)
            }
            if (g || k) 0 < e && 1 > b && (l = b.toFixed(e), b = parseFloat(l)); else {
                g = (h.split(Cd)[1] || "").length;
                v(e) && (e = Math.min(Math.max(a.minFrac, g), a.maxFrac));
                b = +(Math.round(+(b.toString() + "e" + e)).toString() + "e" + -e);
                var g = ("" + b).split(Cd), h = g[0], g = g[1] || "", r = 0, s = a.lgSize, n = a.gSize;
                if (h.length >= s + n) for (r = h.length - s, k = 0; k < r; k++) 0 === (r - k) % n && 0 !== k &&
                (l += c), l += h.charAt(k);
                for (k = r; k < h.length; k++) 0 === (h.length - k) % s && 0 !== k && (l += c), l += h.charAt(k);
                for (; g.length < e;) g += "0";
                e && "0" !== e && (l += d + g.substr(0, e))
            }
            0 === b && (f = !1);
            m.push(f ? a.negPre : a.posPre, l, f ? a.negSuf : a.posSuf);
            return m.join("")
        }

        function Gb(b, a, c) {
            var d = "";
            0 > b && (d = "-", b = -b);
            for (b = "" + b; b.length < a;) b = "0" + b;
            c && (b = b.substr(b.length - a));
            return d + b
        }

        function $(b, a, c, d) {
            c = c || 0;
            return function (e) {
                e = e["get" + b]();
                if (0 < c || e > -c) e += c;
                0 === e && -12 == c && (e = 12);
                return Gb(e, a, d)
            }
        }

        function Hb(b, a) {
            return function (c,
                             d) {
                var e = c["get" + b](), f = pb(a ? "SHORT" + b : b);
                return d[f][e]
            }
        }

        function Dd(b) {
            var a = (new Date(b, 0, 1)).getDay();
            return new Date(b, 0, (4 >= a ? 5 : 12) - a)
        }

        function Ed(b) {
            return function (a) {
                var c = Dd(a.getFullYear());
                a = +new Date(a.getFullYear(), a.getMonth(), a.getDate() + (4 - a.getDay())) - +c;
                a = 1 + Math.round(a / 6048E5);
                return Gb(a, b)
            }
        }

        function jc(b, a) {
            return 0 >= b.getFullYear() ? a.ERAS[0] : a.ERAS[1]
        }

        function yd(b) {
            function a(a) {
                var b;
                if (b = a.match(c)) {
                    a = new Date(0);
                    var f = 0, g = 0, h = b[8] ? a.setUTCFullYear : a.setFullYear, l = b[8] ? a.setUTCHours :
                        a.setHours;
                    b[9] && (f = Y(b[9] + b[10]), g = Y(b[9] + b[11]));
                    h.call(a, Y(b[1]), Y(b[2]) - 1, Y(b[3]));
                    f = Y(b[4] || 0) - f;
                    g = Y(b[5] || 0) - g;
                    h = Y(b[6] || 0);
                    b = Math.round(1E3 * parseFloat("0." + (b[7] || 0)));
                    l.call(a, f, g, h, b)
                }
                return a
            }

            var c = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
            return function (c, e, f) {
                var g = "", h = [], l, k;
                e = e || "mediumDate";
                e = b.DATETIME_FORMATS[e] || e;
                L(c) && (c = eg.test(c) ? Y(c) : a(c));
                V(c) && (c = new Date(c));
                if (!da(c) || !isFinite(c.getTime())) return c;
                for (; e;) (k =
                    fg.exec(e)) ? (h = Za(h, k, 1), e = h.pop()) : (h.push(e), e = null);
                var m = c.getTimezoneOffset();
                f && (m = wc(f, c.getTimezoneOffset()), c = Pb(c, f, !0));
                n(h, function (a) {
                    l = gg[a];
                    g += l ? l(c, b.DATETIME_FORMATS, m) : a.replace(/(^'|'$)/g, "").replace(/''/g, "'")
                });
                return g
            }
        }

        function $f() {
            return function (b, a) {
                v(a) && (a = 2);
                return $a(b, a)
            }
        }

        function ag() {
            return function (b, a, c) {
                a = Infinity === Math.abs(Number(a)) ? Number(a) : Y(a);
                if (isNaN(a)) return b;
                V(b) && (b = b.toString());
                if (!K(b) && !L(b)) return b;
                c = !c || isNaN(c) ? 0 : Y(c);
                c = 0 > c && c >= -b.length ?
                    b.length + c : c;
                return 0 <= a ? b.slice(c, c + a) : 0 === c ? b.slice(a, b.length) : b.slice(Math.max(0, c + a), c)
            }
        }

        function Ad(b) {
            return function (a, c, d) {
                function e(a, b) {
                    return b ? function (b, c) {
                        return a(c, b)
                    } : a
                }

                function f(a) {
                    switch (typeof a) {
                        case "number":
                        case "boolean":
                        case "string":
                            return !0;
                        default:
                            return !1
                    }
                }

                function g(a) {
                    return null === a ? "null" : "function" === typeof a.valueOf && (a = a.valueOf(), f(a)) || "function" === typeof a.toString && (a = a.toString(), f(a)) ? a : ""
                }

                function h(a, b) {
                    var c = typeof a, d = typeof b;
                    c === d && "object" === c &&
                    (a = g(a), b = g(b));
                    return c === d ? ("string" === c && (a = a.toLowerCase(), b = b.toLowerCase()), a === b ? 0 : a < b ? -1 : 1) : c < d ? -1 : 1
                }

                if (!Da(a)) return a;
                c = K(c) ? c : [c];
                0 === c.length && (c = ["+"]);
                c = c.map(function (a) {
                    var c = !1, d = a || Ua;
                    if (L(a)) {
                        if ("+" == a.charAt(0) || "-" == a.charAt(0)) c = "-" == a.charAt(0), a = a.substring(1);
                        if ("" === a) return e(h, c);
                        d = b(a);
                        if (d.constant) {
                            var f = d();
                            return e(function (a, b) {
                                return h(a[f], b[f])
                            }, c)
                        }
                    }
                    return e(function (a, b) {
                        return h(d(a), d(b))
                    }, c)
                });
                return ra.call(a).sort(e(function (a, b) {
                    for (var d = 0; d < c.length; d++) {
                        var e =
                            c[d](a, b);
                        if (0 !== e) return e
                    }
                    return 0
                }, d))
            }
        }

        function Ma(b) {
            G(b) && (b = {link: b});
            b.restrict = b.restrict || "AC";
            return qa(b)
        }

        function Fd(b, a, c, d, e) {
            var f = this, g = [], h = f.$$parentForm = b.parent().controller("form") || Ib;
            f.$error = {};
            f.$$success = {};
            f.$pending = u;
            f.$name = e(a.name || a.ngForm || "")(c);
            f.$dirty = !1;
            f.$pristine = !0;
            f.$valid = !0;
            f.$invalid = !1;
            f.$submitted = !1;
            h.$addControl(f);
            f.$rollbackViewValue = function () {
                n(g, function (a) {
                    a.$rollbackViewValue()
                })
            };
            f.$commitViewValue = function () {
                n(g, function (a) {
                    a.$commitViewValue()
                })
            };
            f.$addControl = function (a) {
                Qa(a.$name, "input");
                g.push(a);
                a.$name && (f[a.$name] = a)
            };
            f.$$renameControl = function (a, b) {
                var c = a.$name;
                f[c] === a && delete f[c];
                f[b] = a;
                a.$name = b
            };
            f.$removeControl = function (a) {
                a.$name && f[a.$name] === a && delete f[a.$name];
                n(f.$pending, function (b, c) {
                    f.$setValidity(c, null, a)
                });
                n(f.$error, function (b, c) {
                    f.$setValidity(c, null, a)
                });
                n(f.$$success, function (b, c) {
                    f.$setValidity(c, null, a)
                });
                Ya(g, a)
            };
            Gd({
                ctrl: this, $element: b, set: function (a, b, c) {
                    var d = a[b];
                    d ? -1 === d.indexOf(c) && d.push(c) : a[b] =
                        [c]
                }, unset: function (a, b, c) {
                    var d = a[b];
                    d && (Ya(d, c), 0 === d.length && delete a[b])
                }, parentForm: h, $animate: d
            });
            f.$setDirty = function () {
                d.removeClass(b, Sa);
                d.addClass(b, Jb);
                f.$dirty = !0;
                f.$pristine = !1;
                h.$setDirty()
            };
            f.$setPristine = function () {
                d.setClass(b, Sa, Jb + " ng-submitted");
                f.$dirty = !1;
                f.$pristine = !0;
                f.$submitted = !1;
                n(g, function (a) {
                    a.$setPristine()
                })
            };
            f.$setUntouched = function () {
                n(g, function (a) {
                    a.$setUntouched()
                })
            };
            f.$setSubmitted = function () {
                d.addClass(b, "ng-submitted");
                f.$submitted = !0;
                h.$setSubmitted()
            }
        }

        function kc(b) {
            b.$formatters.push(function (a) {
                return b.$isEmpty(a) ? a : a.toString()
            })
        }

        function hb(b, a, c, d, e, f) {
            var g = E(a[0].type);
            if (!e.android) {
                var h = !1;
                a.on("compositionstart", function (a) {
                    h = !0
                });
                a.on("compositionend", function () {
                    h = !1;
                    l()
                })
            }
            var l = function (b) {
                k && (f.defer.cancel(k), k = null);
                if (!h) {
                    var e = a.val();
                    b = b && b.type;
                    "password" === g || c.ngTrim && "false" === c.ngTrim || (e = T(e));
                    (d.$viewValue !== e || "" === e && d.$$hasNativeValidators) && d.$setViewValue(e, b)
                }
            };
            if (e.hasEvent("input")) a.on("input", l); else {
                var k,
                    m = function (a, b, c) {
                        k || (k = f.defer(function () {
                            k = null;
                            b && b.value === c || l(a)
                        }))
                    };
                a.on("keydown", function (a) {
                    var b = a.keyCode;
                    91 === b || 15 < b && 19 > b || 37 <= b && 40 >= b || m(a, this, this.value)
                });
                if (e.hasEvent("paste")) a.on("paste cut", m)
            }
            a.on("change", l);
            d.$render = function () {
                a.val(d.$isEmpty(d.$viewValue) ? "" : d.$viewValue)
            }
        }

        function Kb(b, a) {
            return function (c, d) {
                var e, f;
                if (da(c)) return c;
                if (L(c)) {
                    '"' == c.charAt(0) && '"' == c.charAt(c.length - 1) && (c = c.substring(1, c.length - 1));
                    if (hg.test(c)) return new Date(c);
                    b.lastIndex = 0;
                    if (e =
                        b.exec(c)) return e.shift(), f = d ? {
                        yyyy: d.getFullYear(),
                        MM: d.getMonth() + 1,
                        dd: d.getDate(),
                        HH: d.getHours(),
                        mm: d.getMinutes(),
                        ss: d.getSeconds(),
                        sss: d.getMilliseconds() / 1E3
                    } : {yyyy: 1970, MM: 1, dd: 1, HH: 0, mm: 0, ss: 0, sss: 0}, n(e, function (b, c) {
                        c < a.length && (f[a[c]] = +b)
                    }), new Date(f.yyyy, f.MM - 1, f.dd, f.HH, f.mm, f.ss || 0, 1E3 * f.sss || 0)
                }
                return NaN
            }
        }

        function ib(b, a, c, d) {
            return function (e, f, g, h, l, k, m) {
                function r(a) {
                    return a && !(a.getTime && a.getTime() !== a.getTime())
                }

                function s(a) {
                    return y(a) ? da(a) ? a : c(a) : u
                }

                Hd(e, f, g, h);
                hb(e,
                    f, g, h, l, k);
                var n = h && h.$options && h.$options.timezone, q;
                h.$$parserName = b;
                h.$parsers.push(function (b) {
                    return h.$isEmpty(b) ? null : a.test(b) ? (b = c(b, q), n && (b = Pb(b, n)), b) : u
                });
                h.$formatters.push(function (a) {
                    if (a && !da(a)) throw Lb("datefmt", a);
                    if (r(a)) return (q = a) && n && (q = Pb(q, n, !0)), m("date")(a, d, n);
                    q = null;
                    return ""
                });
                if (y(g.min) || g.ngMin) {
                    var M;
                    h.$validators.min = function (a) {
                        return !r(a) || v(M) || c(a) >= M
                    };
                    g.$observe("min", function (a) {
                        M = s(a);
                        h.$validate()
                    })
                }
                if (y(g.max) || g.ngMax) {
                    var t;
                    h.$validators.max = function (a) {
                        return !r(a) ||
                            v(t) || c(a) <= t
                    };
                    g.$observe("max", function (a) {
                        t = s(a);
                        h.$validate()
                    })
                }
            }
        }

        function Hd(b, a, c, d) {
            (d.$$hasNativeValidators = C(a[0].validity)) && d.$parsers.push(function (b) {
                var c = a.prop("validity") || {};
                return c.badInput && !c.typeMismatch ? u : b
            })
        }

        function Id(b, a, c, d, e) {
            if (y(d)) {
                b = b(d);
                if (!b.constant) throw F("ngModel")("constexpr", c, d);
                return b(a)
            }
            return e
        }

        function lc(b, a) {
            b = "ngClass" + b;
            return ["$animate", function (c) {
                function d(a, b) {
                    var c = [], d = 0;
                    a:for (; d < a.length; d++) {
                        for (var e = a[d], m = 0; m < b.length; m++) if (e == b[m]) continue a;
                        c.push(e)
                    }
                    return c
                }

                function e(a) {
                    var b = [];
                    return K(a) ? (n(a, function (a) {
                        b = b.concat(e(a))
                    }), b) : L(a) ? a.split(" ") : C(a) ? (n(a, function (a, c) {
                        a && (b = b.concat(c.split(" ")))
                    }), b) : a
                }

                return {
                    restrict: "AC", link: function (f, g, h) {
                        function l(a, b) {
                            var c = g.data("$classCounts") || ga(), d = [];
                            n(a, function (a) {
                                if (0 < b || c[a]) c[a] = (c[a] || 0) + b, c[a] === +(0 < b) && d.push(a)
                            });
                            g.data("$classCounts", c);
                            return d.join(" ")
                        }

                        function k(b) {
                            if (!0 === a || f.$index % 2 === a) {
                                var k = e(b || []);
                                if (!m) {
                                    var n = l(k, 1);
                                    h.$addClass(n)
                                } else if (!ka(b, m)) {
                                    var q =
                                        e(m), n = d(k, q), k = d(q, k), n = l(n, 1), k = l(k, -1);
                                    n && n.length && c.addClass(g, n);
                                    k && k.length && c.removeClass(g, k)
                                }
                            }
                            m = fa(b)
                        }

                        var m;
                        f.$watch(h[b], k, !0);
                        h.$observe("class", function (a) {
                            k(f.$eval(h[b]))
                        });
                        "ngClass" !== b && f.$watch("$index", function (c, d) {
                            var g = c & 1;
                            if (g !== (d & 1)) {
                                var k = e(f.$eval(h[b]));
                                g === a ? (g = l(k, 1), h.$addClass(g)) : (g = l(k, -1), h.$removeClass(g))
                            }
                        })
                    }
                }
            }]
        }

        function Gd(b) {
            function a(a, b) {
                b && !f[a] ? (k.addClass(e, a), f[a] = !0) : !b && f[a] && (k.removeClass(e, a), f[a] = !1)
            }

            function c(b, c) {
                b = b ? "-" + Ac(b, "-") : "";
                a(jb + b, !0 ===
                    c);
                a(Jd + b, !1 === c)
            }

            var d = b.ctrl, e = b.$element, f = {}, g = b.set, h = b.unset, l = b.parentForm, k = b.$animate;
            f[Jd] = !(f[jb] = e.hasClass(jb));
            d.$setValidity = function (b, e, f) {
                e === u ? (d.$pending || (d.$pending = {}), g(d.$pending, b, f)) : (d.$pending && h(d.$pending, b, f), Kd(d.$pending) && (d.$pending = u));
                Xa(e) ? e ? (h(d.$error, b, f), g(d.$$success, b, f)) : (g(d.$error, b, f), h(d.$$success, b, f)) : (h(d.$error, b, f), h(d.$$success, b, f));
                d.$pending ? (a(Ld, !0), d.$valid = d.$invalid = u, c("", null)) : (a(Ld, !1), d.$valid = Kd(d.$error), d.$invalid = !d.$valid, c("",
                    d.$valid));
                e = d.$pending && d.$pending[b] ? u : d.$error[b] ? !1 : d.$$success[b] ? !0 : null;
                c(b, e);
                l.$setValidity(b, e, d)
            }
        }

        function Kd(b) {
            if (b) for (var a in b) return !1;
            return !0
        }

        var ig = /^\/(.+)\/([a-z]*)$/, E = function (b) {
                return L(b) ? b.toLowerCase() : b
            }, kb = Object.prototype.hasOwnProperty, pb = function (b) {
                return L(b) ? b.toUpperCase() : b
            }, gb, z, la, ra = [].slice, Lf = [].splice, jg = [].push, sa = Object.prototype.toString,
            rc = Object.getPrototypeOf, Ea = F("ng"), aa = N.angular || (N.angular = {}), db, lb = 0;
        gb = W.documentMode;
        w.$inject = [];
        Ua.$inject =
            [];
        var K = Array.isArray,
            tc = /^\[object (Uint8(Clamped)?)|(Uint16)|(Uint32)|(Int8)|(Int16)|(Int32)|(Float(32)|(64))Array\]$/,
            T = function (b) {
                return L(b) ? b.trim() : b
            }, td = function (b) {
                return b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
            }, cb = function () {
                if (y(cb.isActive_)) return cb.isActive_;
                var b = !(!W.querySelector("[ng-csp]") && !W.querySelector("[data-ng-csp]"));
                if (!b) try {
                    new Function("")
                } catch (a) {
                    b = !0
                }
                return cb.isActive_ = b
            }, nb = function () {
                if (y(nb.name_)) return nb.name_;
                var b, a,
                    c = Na.length, d, e;
                for (a = 0; a < c; ++a) if (d = Na[a], b = W.querySelector("[" + d.replace(":", "\\:") + "jq]")) {
                    e = b.getAttribute(d + "jq");
                    break
                }
                return nb.name_ = e
            }, Na = ["ng-", "data-ng-", "ng:", "x-ng-"], ae = /[A-Z]/g, Bc = !1, Rb, pa = 1, ab = 3,
            ee = {full: "1.4.0", major: 1, minor: 4, dot: 0, codeName: "jaracimrman-existence"};
        R.expando = "ng339";
        var ub = R.cache = {}, Df = 1;
        R._data = function (b) {
            return this.cache[b[this.expando]] || {}
        };
        var yf = /([\:\-\_]+(.))/g, zf = /^moz([A-Z])/, kg = {mouseleave: "mouseout", mouseenter: "mouseover"},
            Ub = F("jqLite"), Cf = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            Tb = /<|&#?\w+;/, Af = /<([\w:]+)/,
            Bf = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, ma = {
                option: [1, '<select multiple="multiple">', "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };
        ma.optgroup = ma.option;
        ma.tbody = ma.tfoot = ma.colgroup = ma.caption = ma.thead;
        ma.th = ma.td;
        var Oa = R.prototype = {
            ready: function (b) {
                function a() {
                    c || (c =
                        !0, b())
                }

                var c = !1;
                "complete" === W.readyState ? setTimeout(a) : (this.on("DOMContentLoaded", a), R(N).on("load", a))
            }, toString: function () {
                var b = [];
                n(this, function (a) {
                    b.push("" + a)
                });
                return "[" + b.join(", ") + "]"
            }, eq: function (b) {
                return 0 <= b ? z(this[b]) : z(this[this.length + b])
            }, length: 0, push: jg, sort: [].sort, splice: [].splice
        }, zb = {};
        n("multiple selected checked disabled readOnly required open".split(" "), function (b) {
            zb[E(b)] = b
        });
        var Sc = {};
        n("input select option textarea button form details".split(" "), function (b) {
            Sc[b] =
                !0
        });
        var Tc = {
            ngMinlength: "minlength",
            ngMaxlength: "maxlength",
            ngMin: "min",
            ngMax: "max",
            ngPattern: "pattern"
        };
        n({data: Wb, removeData: sb}, function (b, a) {
            R[a] = b
        });
        n({
            data: Wb, inheritedData: yb, scope: function (b) {
                return z.data(b, "$scope") || yb(b.parentNode || b, ["$isolateScope", "$scope"])
            }, isolateScope: function (b) {
                return z.data(b, "$isolateScope") || z.data(b, "$isolateScopeNoTemplate")
            }, controller: Pc, injector: function (b) {
                return yb(b, "$injector")
            }, removeAttr: function (b, a) {
                b.removeAttribute(a)
            }, hasClass: vb, css: function (b,
                                            a, c) {
                a = eb(a);
                if (y(c)) b.style[a] = c; else return b.style[a]
            }, attr: function (b, a, c) {
                var d = b.nodeType;
                if (d !== ab && 2 !== d && 8 !== d) if (d = E(a), zb[d]) if (y(c)) c ? (b[a] = !0, b.setAttribute(a, d)) : (b[a] = !1, b.removeAttribute(d)); else return b[a] || (b.attributes.getNamedItem(a) || w).specified ? d : u; else if (y(c)) b.setAttribute(a, c); else if (b.getAttribute) return b = b.getAttribute(a, 2), null === b ? u : b
            }, prop: function (b, a, c) {
                if (y(c)) b[a] = c; else return b[a]
            }, text: function () {
                function b(a, b) {
                    if (v(b)) {
                        var d = a.nodeType;
                        return d === pa || d ===
                        ab ? a.textContent : ""
                    }
                    a.textContent = b
                }

                b.$dv = "";
                return b
            }(), val: function (b, a) {
                if (v(a)) {
                    if (b.multiple && "select" === ta(b)) {
                        var c = [];
                        n(b.options, function (a) {
                            a.selected && c.push(a.value || a.text)
                        });
                        return 0 === c.length ? null : c
                    }
                    return b.value
                }
                b.value = a
            }, html: function (b, a) {
                if (v(a)) return b.innerHTML;
                rb(b, !0);
                b.innerHTML = a
            }, empty: Qc
        }, function (b, a) {
            R.prototype[a] = function (a, d) {
                var e, f, g = this.length;
                if (b !== Qc && (2 == b.length && b !== vb && b !== Pc ? a : d) === u) {
                    if (C(a)) {
                        for (e = 0; e < g; e++) if (b === Wb) b(this[e], a); else for (f in a) b(this[e],
                            f, a[f]);
                        return this
                    }
                    e = b.$dv;
                    g = e === u ? Math.min(g, 1) : g;
                    for (f = 0; f < g; f++) {
                        var h = b(this[f], a, d);
                        e = e ? e + h : h
                    }
                    return e
                }
                for (e = 0; e < g; e++) b(this[e], a, d);
                return this
            }
        });
        n({
            removeData: sb, on: function a(c, d, e, f) {
                if (y(f)) throw Ub("onargs");
                if (Lc(c)) {
                    var g = tb(c, !0);
                    f = g.events;
                    var h = g.handle;
                    h || (h = g.handle = Gf(c, f));
                    for (var g = 0 <= d.indexOf(" ") ? d.split(" ") : [d], l = g.length; l--;) {
                        d = g[l];
                        var k = f[d];
                        k || (f[d] = [], "mouseenter" === d || "mouseleave" === d ? a(c, kg[d], function (a) {
                            var c = a.relatedTarget;
                            c && (c === this || this.contains(c)) ||
                            h(a, d)
                        }) : "$destroy" !== d && c.addEventListener(d, h, !1), k = f[d]);
                        k.push(e)
                    }
                }
            }, off: Oc, one: function (a, c, d) {
                a = z(a);
                a.on(c, function f() {
                    a.off(c, d);
                    a.off(c, f)
                });
                a.on(c, d)
            }, replaceWith: function (a, c) {
                var d, e = a.parentNode;
                rb(a);
                n(new R(c), function (c) {
                    d ? e.insertBefore(c, d.nextSibling) : e.replaceChild(c, a);
                    d = c
                })
            }, children: function (a) {
                var c = [];
                n(a.childNodes, function (a) {
                    a.nodeType === pa && c.push(a)
                });
                return c
            }, contents: function (a) {
                return a.contentDocument || a.childNodes || []
            }, append: function (a, c) {
                var d = a.nodeType;
                if (d ===
                    pa || 11 === d) {
                    c = new R(c);
                    for (var d = 0, e = c.length; d < e; d++) a.appendChild(c[d])
                }
            }, prepend: function (a, c) {
                if (a.nodeType === pa) {
                    var d = a.firstChild;
                    n(new R(c), function (c) {
                        a.insertBefore(c, d)
                    })
                }
            }, wrap: function (a, c) {
                c = z(c).eq(0).clone()[0];
                var d = a.parentNode;
                d && d.replaceChild(c, a);
                c.appendChild(a)
            }, remove: Xb, detach: function (a) {
                Xb(a, !0)
            }, after: function (a, c) {
                var d = a, e = a.parentNode;
                c = new R(c);
                for (var f = 0, g = c.length; f < g; f++) {
                    var h = c[f];
                    e.insertBefore(h, d.nextSibling);
                    d = h
                }
            }, addClass: xb, removeClass: wb, toggleClass: function (a,
                                                                     c, d) {
                c && n(c.split(" "), function (c) {
                    var f = d;
                    v(f) && (f = !vb(a, c));
                    (f ? xb : wb)(a, c)
                })
            }, parent: function (a) {
                return (a = a.parentNode) && 11 !== a.nodeType ? a : null
            }, next: function (a) {
                return a.nextElementSibling
            }, find: function (a, c) {
                return a.getElementsByTagName ? a.getElementsByTagName(c) : []
            }, clone: Vb, triggerHandler: function (a, c, d) {
                var e, f, g = c.type || c, h = tb(a);
                if (h = (h = h && h.events) && h[g]) e = {
                    preventDefault: function () {
                        this.defaultPrevented = !0
                    }, isDefaultPrevented: function () {
                        return !0 === this.defaultPrevented
                    }, stopImmediatePropagation: function () {
                        this.immediatePropagationStopped =
                            !0
                    }, isImmediatePropagationStopped: function () {
                        return !0 === this.immediatePropagationStopped
                    }, stopPropagation: w, type: g, target: a
                }, c.type && (e = Q(e, c)), c = fa(h), f = d ? [e].concat(d) : [e], n(c, function (c) {
                    e.isImmediatePropagationStopped() || c.apply(a, f)
                })
            }
        }, function (a, c) {
            R.prototype[c] = function (c, e, f) {
                for (var g, h = 0, l = this.length; h < l; h++) v(g) ? (g = a(this[h], c, e, f), y(g) && (g = z(g))) : Nc(g, a(this[h], c, e, f));
                return y(g) ? g : this
            };
            R.prototype.bind = R.prototype.on;
            R.prototype.unbind = R.prototype.off
        });
        Ra.prototype = {
            put: function (a,
                           c) {
                this[Fa(a, this.nextUid)] = c
            }, get: function (a) {
                return this[Fa(a, this.nextUid)]
            }, remove: function (a) {
                var c = this[a = Fa(a, this.nextUid)];
                delete this[a];
                return c
            }
        };
        var wf = [function () {
                this.$get = [function () {
                    return Ra
                }]
            }], Vc = /^function\s*[^\(]*\(\s*([^\)]*)\)/m, lg = /,/, mg = /^\s*(_?)(\S+?)\1\s*$/,
            Uc = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg, Ga = F("$injector");
        bb.$$annotate = function (a, c, d) {
            var e;
            if ("function" === typeof a) {
                if (!(e = a.$inject)) {
                    e = [];
                    if (a.length) {
                        if (c) throw L(d) && d || (d = a.name || Hf(a)), Ga("strictdi", d);
                        c = a.toString().replace(Uc,
                            "");
                        c = c.match(Vc);
                        n(c[1].split(lg), function (a) {
                            a.replace(mg, function (a, c, d) {
                                e.push(d)
                            })
                        })
                    }
                    a.$inject = e
                }
            } else K(a) ? (c = a.length - 1, Pa(a[c], "fn"), e = a.slice(0, c)) : Pa(a, "fn", !0);
            return e
        };
        var Md = F("$animate"), Te = function () {
            this.$get = ["$q", "$$rAF", function (a, c) {
                function d() {
                }

                d.all = w;
                d.chain = w;
                d.prototype = {
                    end: w, cancel: w, resume: w, pause: w, complete: w, then: function (d, f) {
                        return a(function (a) {
                            c(function () {
                                a()
                            })
                        }).then(d, f)
                    }
                };
                return d
            }]
        }, Se = function () {
            var a = new Ra, c = [];
            this.$get = ["$$AnimateRunner", "$rootScope",
                function (d, e) {
                    function f(d, f, l) {
                        var k = a.get(d);
                        k || (a.put(d, k = {}), c.push(d));
                        f && n(f.split(" "), function (a) {
                            a && (k[a] = !0)
                        });
                        l && n(l.split(" "), function (a) {
                            a && (k[a] = !1)
                        });
                        1 < c.length || e.$$postDigest(function () {
                            n(c, function (c) {
                                var d = a.get(c);
                                if (d) {
                                    var e = If(c.attr("class")), f = "", g = "";
                                    n(d, function (a, c) {
                                        a !== !!e[c] && (a ? f += (f.length ? " " : "") + c : g += (g.length ? " " : "") + c)
                                    });
                                    n(c, function (a) {
                                        f && xb(a, f);
                                        g && wb(a, g)
                                    });
                                    a.remove(c)
                                }
                            });
                            c.length = 0
                        })
                    }

                    return {
                        enabled: w, on: w, off: w, pin: w, push: function (a, c, e, k) {
                            k && k();
                            e = e || {};
                            e.from &&
                            a.css(e.from);
                            e.to && a.css(e.to);
                            (e.addClass || e.removeClass) && f(a, e.addClass, e.removeClass);
                            return new d
                        }
                    }
                }]
        }, Re = ["$provide", function (a) {
            var c = this;
            this.$$registeredAnimations = Object.create(null);
            this.register = function (d, e) {
                if (d && "." !== d.charAt(0)) throw Md("notcsel", d);
                var f = d + "-animation";
                c.$$registeredAnimations[d.substr(1)] = f;
                a.factory(f, e)
            };
            this.classNameFilter = function (a) {
                if (1 === arguments.length && (this.$$classNameFilter = a instanceof RegExp ? a : null) && /(\s+|\/)ng-animate(\s+|\/)/.test(this.$$classNameFilter.toString())) throw Md("nongcls",
                    "ng-animate");
                return this.$$classNameFilter
            };
            this.$get = ["$$animateQueue", function (a) {
                function c(a, d, e) {
                    if (e) {
                        var l;
                        a:{
                            for (l = 0; l < e.length; l++) {
                                var k = e[l];
                                if (1 === k.nodeType) {
                                    l = k;
                                    break a
                                }
                            }
                            l = void 0
                        }
                        !l || l.parentNode || l.previousElementSibling || (e = null)
                    }
                    e ? e.after(a) : d.prepend(a)
                }

                return {
                    on: a.on, off: a.off, pin: a.pin, enabled: a.enabled, cancel: function (a) {
                        a.end && a.end()
                    }, enter: function (f, g, h, l) {
                        g = g && z(g);
                        h = h && z(h);
                        g = g || h.parent();
                        c(f, g, h);
                        return a.push(f, "enter", Ha(l))
                    }, move: function (f, g, h, l) {
                        g = g && z(g);
                        h = h && z(h);
                        g = g || h.parent();
                        c(f, g, h);
                        return a.push(f, "move", Ha(l))
                    }, leave: function (c, e) {
                        return a.push(c, "leave", Ha(e), function () {
                            c.remove()
                        })
                    }, addClass: function (c, e, h) {
                        h = Ha(h);
                        h.addClass = fb(h.addclass, e);
                        return a.push(c, "addClass", h)
                    }, removeClass: function (c, e, h) {
                        h = Ha(h);
                        h.removeClass = fb(h.removeClass, e);
                        return a.push(c, "removeClass", h)
                    }, setClass: function (c, e, h, l) {
                        l = Ha(l);
                        l.addClass = fb(l.addClass, e);
                        l.removeClass = fb(l.removeClass, h);
                        return a.push(c, "setClass", l)
                    }, animate: function (c, e, h, l, k) {
                        k = Ha(k);
                        k.from = k.from ?
                            Q(k.from, e) : e;
                        k.to = k.to ? Q(k.to, h) : h;
                        k.tempClasses = fb(k.tempClasses, l || "ng-inline-animate");
                        return a.push(c, "animate", k)
                    }
                }
            }]
        }], ea = F("$compile");
        Dc.$inject = ["$provide", "$$sanitizeUriProvider"];
        var Yc = /^((?:x|data)[\:\-_])/i, Mf = F("$controller"), Wc = /^(\S+)(\s+as\s+(\w+))?$/,
            bd = "application/json", ac = {"Content-Type": bd + ";charset=utf-8"}, Of = /^\[|^\{(?!\{)/,
            Pf = {"[": /]$/, "{": /}$/}, Nf = /^\)\]\}',?\n/, Ka = aa.$interpolateMinErr = F("$interpolate");
        Ka.throwNoconcat = function (a) {
            throw Ka("noconcat", a);
        };
        Ka.interr = function (a,
                              c) {
            return Ka("interr", a, c.toString())
        };
        var ng = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/, Sf = {http: 80, https: 443, ftp: 21}, Cb = F("$location"),
            og = {
                $$html5: !1,
                $$replace: !1,
                absUrl: Db("$$absUrl"),
                url: function (a) {
                    if (v(a)) return this.$$url;
                    var c = ng.exec(a);
                    (c[1] || "" === a) && this.path(decodeURIComponent(c[1]));
                    (c[2] || c[1] || "" === a) && this.search(c[3] || "");
                    this.hash(c[5] || "");
                    return this
                },
                protocol: Db("$$protocol"),
                host: Db("$$host"),
                port: Db("$$port"),
                path: jd("$$path", function (a) {
                    a = null !== a ? a.toString() : "";
                    return "/" == a.charAt(0) ?
                        a : "/" + a
                }),
                search: function (a, c) {
                    switch (arguments.length) {
                        case 0:
                            return this.$$search;
                        case 1:
                            if (L(a) || V(a)) a = a.toString(), this.$$search = yc(a); else if (C(a)) a = ua(a, {}), n(a, function (c, e) {
                                null == c && delete a[e]
                            }), this.$$search = a; else throw Cb("isrcharg");
                            break;
                        default:
                            v(c) || null === c ? delete this.$$search[a] : this.$$search[a] = c
                    }
                    this.$$compose();
                    return this
                },
                hash: jd("$$hash", function (a) {
                    return null !== a ? a.toString() : ""
                }),
                replace: function () {
                    this.$$replace = !0;
                    return this
                }
            };
        n([id, ec, dc], function (a) {
            a.prototype = Object.create(og);
            a.prototype.state = function (c) {
                if (!arguments.length) return this.$$state;
                if (a !== dc || !this.$$html5) throw Cb("nostate");
                this.$$state = v(c) ? null : c;
                return this
            }
        });
        var ca = F("$parse"), Tf = Function.prototype.call, Uf = Function.prototype.apply,
            Vf = Function.prototype.bind, Mb = ga();
        n("+ - * / % === !== == != < > <= >= && || ! = |".split(" "), function (a) {
            Mb[a] = !0
        });
        var pg = {n: "\n", f: "\f", r: "\r", t: "\t", v: "\v", "'": "'", '"': '"'}, gc = function (a) {
            this.options = a
        };
        gc.prototype = {
            constructor: gc, lex: function (a) {
                this.text = a;
                this.index =
                    0;
                for (this.tokens = []; this.index < this.text.length;) if (a = this.text.charAt(this.index), '"' === a || "'" === a) this.readString(a); else if (this.isNumber(a) || "." === a && this.isNumber(this.peek())) this.readNumber(); else if (this.isIdent(a)) this.readIdent(); else if (this.is(a, "(){}[].,;:?")) this.tokens.push({
                    index: this.index,
                    text: a
                }), this.index++; else if (this.isWhitespace(a)) this.index++; else {
                    var c = a + this.peek(), d = c + this.peek(2), e = Mb[c], f = Mb[d];
                    Mb[a] || e || f ? (a = f ? d : e ? c : a, this.tokens.push({
                        index: this.index,
                        text: a,
                        operator: !0
                    }),
                        this.index += a.length) : this.throwError("Unexpected next character ", this.index, this.index + 1)
                }
                return this.tokens
            }, is: function (a, c) {
                return -1 !== c.indexOf(a)
            }, peek: function (a) {
                a = a || 1;
                return this.index + a < this.text.length ? this.text.charAt(this.index + a) : !1
            }, isNumber: function (a) {
                return "0" <= a && "9" >= a && "string" === typeof a
            }, isWhitespace: function (a) {
                return " " === a || "\r" === a || "\t" === a || "\n" === a || "\v" === a || "\u00a0" === a
            }, isIdent: function (a) {
                return "a" <= a && "z" >= a || "A" <= a && "Z" >= a || "_" === a || "$" === a
            }, isExpOperator: function (a) {
                return "-" ===
                    a || "+" === a || this.isNumber(a)
            }, throwError: function (a, c, d) {
                d = d || this.index;
                c = y(c) ? "s " + c + "-" + this.index + " [" + this.text.substring(c, d) + "]" : " " + d;
                throw ca("lexerr", a, c, this.text);
            }, readNumber: function () {
                for (var a = "", c = this.index; this.index < this.text.length;) {
                    var d = E(this.text.charAt(this.index));
                    if ("." == d || this.isNumber(d)) a += d; else {
                        var e = this.peek();
                        if ("e" == d && this.isExpOperator(e)) a += d; else if (this.isExpOperator(d) && e && this.isNumber(e) && "e" == a.charAt(a.length - 1)) a += d; else if (!this.isExpOperator(d) ||
                            e && this.isNumber(e) || "e" != a.charAt(a.length - 1)) break; else this.throwError("Invalid exponent")
                    }
                    this.index++
                }
                this.tokens.push({index: c, text: a, constant: !0, value: Number(a)})
            }, readIdent: function () {
                for (var a = this.index; this.index < this.text.length;) {
                    var c = this.text.charAt(this.index);
                    if (!this.isIdent(c) && !this.isNumber(c)) break;
                    this.index++
                }
                this.tokens.push({index: a, text: this.text.slice(a, this.index), identifier: !0})
            }, readString: function (a) {
                var c = this.index;
                this.index++;
                for (var d = "", e = a, f = !1; this.index < this.text.length;) {
                    var g =
                        this.text.charAt(this.index), e = e + g;
                    if (f) "u" === g ? (f = this.text.substring(this.index + 1, this.index + 5), f.match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + f + "]"), this.index += 4, d += String.fromCharCode(parseInt(f, 16))) : d += pg[g] || g, f = !1; else if ("\\" === g) f = !0; else {
                        if (g === a) {
                            this.index++;
                            this.tokens.push({index: c, text: e, constant: !0, value: d});
                            return
                        }
                        d += g
                    }
                    this.index++
                }
                this.throwError("Unterminated quote", c)
            }
        };
        var q = function (a, c) {
            this.lexer = a;
            this.options = c
        };
        q.Program = "Program";
        q.ExpressionStatement =
            "ExpressionStatement";
        q.AssignmentExpression = "AssignmentExpression";
        q.ConditionalExpression = "ConditionalExpression";
        q.LogicalExpression = "LogicalExpression";
        q.BinaryExpression = "BinaryExpression";
        q.UnaryExpression = "UnaryExpression";
        q.CallExpression = "CallExpression";
        q.MemberExpression = "MemberExpression";
        q.Identifier = "Identifier";
        q.Literal = "Literal";
        q.ArrayExpression = "ArrayExpression";
        q.Property = "Property";
        q.ObjectExpression = "ObjectExpression";
        q.ThisExpression = "ThisExpression";
        q.NGValueParameter = "NGValueParameter";
        q.prototype = {
            ast: function (a) {
                this.text = a;
                this.tokens = this.lexer.lex(a);
                a = this.program();
                0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]);
                return a
            }, program: function () {
                for (var a = []; ;) if (0 < this.tokens.length && !this.peek("}", ")", ";", "]") && a.push(this.expressionStatement()), !this.expect(";")) return {
                    type: q.Program,
                    body: a
                }
            }, expressionStatement: function () {
                return {type: q.ExpressionStatement, expression: this.filterChain()}
            }, filterChain: function () {
                for (var a = this.expression(); this.expect("|");) a =
                    this.filter(a);
                return a
            }, expression: function () {
                return this.assignment()
            }, assignment: function () {
                var a = this.ternary();
                this.expect("=") && (a = {
                    type: q.AssignmentExpression,
                    left: a,
                    right: this.assignment(),
                    operator: "="
                });
                return a
            }, ternary: function () {
                var a = this.logicalOR(), c, d;
                return this.expect("?") && (c = this.expression(), this.consume(":")) ? (d = this.expression(), {
                    type: q.ConditionalExpression,
                    test: a,
                    alternate: c,
                    consequent: d
                }) : a
            }, logicalOR: function () {
                for (var a = this.logicalAND(); this.expect("||");) a = {
                    type: q.LogicalExpression,
                    operator: "||", left: a, right: this.logicalAND()
                };
                return a
            }, logicalAND: function () {
                for (var a = this.equality(); this.expect("&&");) a = {
                    type: q.LogicalExpression,
                    operator: "&&",
                    left: a,
                    right: this.equality()
                };
                return a
            }, equality: function () {
                for (var a = this.relational(), c; c = this.expect("==", "!=", "===", "!==");) a = {
                    type: q.BinaryExpression,
                    operator: c.text,
                    left: a,
                    right: this.relational()
                };
                return a
            }, relational: function () {
                for (var a = this.additive(), c; c = this.expect("<", ">", "<=", ">=");) a = {
                    type: q.BinaryExpression, operator: c.text,
                    left: a, right: this.additive()
                };
                return a
            }, additive: function () {
                for (var a = this.multiplicative(), c; c = this.expect("+", "-");) a = {
                    type: q.BinaryExpression,
                    operator: c.text,
                    left: a,
                    right: this.multiplicative()
                };
                return a
            }, multiplicative: function () {
                for (var a = this.unary(), c; c = this.expect("*", "/", "%");) a = {
                    type: q.BinaryExpression,
                    operator: c.text,
                    left: a,
                    right: this.unary()
                };
                return a
            }, unary: function () {
                var a;
                return (a = this.expect("+", "-", "!")) ? {
                    type: q.UnaryExpression,
                    operator: a.text,
                    prefix: !0,
                    argument: this.unary()
                } : this.primary()
            },
            primary: function () {
                var a;
                this.expect("(") ? (a = this.filterChain(), this.consume(")")) : this.expect("[") ? a = this.arrayDeclaration() : this.expect("{") ? a = this.object() : this.constants.hasOwnProperty(this.peek().text) ? a = ua(this.constants[this.consume().text]) : this.peek().identifier ? a = this.identifier() : this.peek().constant ? a = this.constant() : this.throwError("not a primary expression", this.peek());
                for (var c; c = this.expect("(", "[", ".");) "(" === c.text ? (a = {
                    type: q.CallExpression,
                    callee: a,
                    arguments: this.parseArguments()
                },
                    this.consume(")")) : "[" === c.text ? (a = {
                    type: q.MemberExpression,
                    object: a,
                    property: this.expression(),
                    computed: !0
                }, this.consume("]")) : "." === c.text ? a = {
                    type: q.MemberExpression,
                    object: a,
                    property: this.identifier(),
                    computed: !1
                } : this.throwError("IMPOSSIBLE");
                return a
            }, filter: function (a) {
                a = [a];
                for (var c = {
                    type: q.CallExpression,
                    callee: this.identifier(),
                    arguments: a,
                    filter: !0
                }; this.expect(":");) a.push(this.expression());
                return c
            }, parseArguments: function () {
                var a = [];
                if (")" !== this.peekToken().text) {
                    do a.push(this.expression());
                    while (this.expect(","))
                }
                return a
            }, identifier: function () {
                var a = this.consume();
                a.identifier || this.throwError("is not a valid identifier", a);
                return {type: q.Identifier, name: a.text}
            }, constant: function () {
                return {type: q.Literal, value: this.consume().value}
            }, arrayDeclaration: function () {
                var a = [];
                if ("]" !== this.peekToken().text) {
                    do {
                        if (this.peek("]")) break;
                        a.push(this.expression())
                    } while (this.expect(","))
                }
                this.consume("]");
                return {type: q.ArrayExpression, elements: a}
            }, object: function () {
                var a = [], c;
                if ("}" !== this.peekToken().text) {
                    do {
                        if (this.peek("}")) break;
                        c = {type: q.Property, kind: "init"};
                        this.peek().constant ? c.key = this.constant() : this.peek().identifier ? c.key = this.identifier() : this.throwError("invalid key", this.peek());
                        this.consume(":");
                        c.value = this.expression();
                        a.push(c)
                    } while (this.expect(","))
                }
                this.consume("}");
                return {type: q.ObjectExpression, properties: a}
            }, throwError: function (a, c) {
                throw ca("syntax", c.text, a, c.index + 1, this.text, this.text.substring(c.index));
            }, consume: function (a) {
                if (0 === this.tokens.length) throw ca("ueoe", this.text);
                var c = this.expect(a);
                c || this.throwError("is unexpected, expecting [" + a + "]", this.peek());
                return c
            }, peekToken: function () {
                if (0 === this.tokens.length) throw ca("ueoe", this.text);
                return this.tokens[0]
            }, peek: function (a, c, d, e) {
                return this.peekAhead(0, a, c, d, e)
            }, peekAhead: function (a, c, d, e, f) {
                if (this.tokens.length > a) {
                    a = this.tokens[a];
                    var g = a.text;
                    if (g === c || g === d || g === e || g === f || !(c || d || e || f)) return a
                }
                return !1
            }, expect: function (a, c, d, e) {
                return (a = this.peek(a, c, d, e)) ? (this.tokens.shift(), a) : !1
            }, constants: {
                "true": {type: q.Literal, value: !0},
                "false": {type: q.Literal, value: !1},
                "null": {type: q.Literal, value: null},
                undefined: {type: q.Literal, value: u},
                "this": {type: q.ThisExpression}
            }
        };
        qd.prototype = {
            compile: function (a, c) {
                var d = this, e = this.astBuilder.ast(a);
                this.state = {
                    nextId: 0,
                    filters: {},
                    expensiveChecks: c,
                    fn: {vars: [], body: [], own: {}},
                    assign: {vars: [], body: [], own: {}},
                    inputs: []
                };
                U(e, d.$filter);
                var f = "", g;
                this.stage = "assign";
                if (g = od(e)) this.state.computing = "assign", f = this.nextId(), this.recurse(g, f), f = "fn.assign=" + this.generateFunction("assign", "s,v,l");
                g = md(e.body);
                d.stage = "inputs";
                n(g, function (a, c) {
                    var e = "fn" + c;
                    d.state[e] = {vars: [], body: [], own: {}};
                    d.state.computing = e;
                    var f = d.nextId();
                    d.recurse(a, f);
                    d.return_(f);
                    d.state.inputs.push(e);
                    a.watchId = c
                });
                this.state.computing = "fn";
                this.stage = "main";
                this.recurse(e);
                f = '"' + this.USE + " " + this.STRICT + '";\n' + this.filterPrefix() + "var fn=" + this.generateFunction("fn", "s,l,a,i") + f + this.watchFns() + "return fn;";
                f = (new Function("$filter", "ensureSafeMemberName", "ensureSafeObject", "ensureSafeFunction", "ifDefined", "plus",
                    "text", f))(this.$filter, Ba, na, kd, Wf, ld, a);
                this.state = this.stage = u;
                f.literal = pd(e);
                f.constant = e.constant;
                return f
            }, USE: "use", STRICT: "strict", watchFns: function () {
                var a = [], c = this.state.inputs, d = this;
                n(c, function (c) {
                    a.push("var " + c + "=" + d.generateFunction(c, "s"))
                });
                c.length && a.push("fn.inputs=[" + c.join(",") + "];");
                return a.join("")
            }, generateFunction: function (a, c) {
                return "function(" + c + "){" + this.varsPrefix(a) + this.body(a) + "};"
            }, filterPrefix: function () {
                var a = [], c = this;
                n(this.state.filters, function (d, e) {
                    a.push(d +
                        "=$filter(" + c.escape(e) + ")")
                });
                return a.length ? "var " + a.join(",") + ";" : ""
            }, varsPrefix: function (a) {
                return this.state[a].vars.length ? "var " + this.state[a].vars.join(",") + ";" : ""
            }, body: function (a) {
                return this.state[a].body.join("")
            }, recurse: function (a, c, d, e, f, g) {
                var h, l, k = this, m, r;
                e = e || w;
                if (!g && y(a.watchId)) c = c || this.nextId(), this.if_("i", this.lazyAssign(c, this.computedMember("i", a.watchId)), this.lazyRecurse(a, c, d, e, f, !0)); else switch (a.type) {
                    case q.Program:
                        n(a.body, function (c, d) {
                            k.recurse(c.expression,
                                u, u, function (a) {
                                    l = a
                                });
                            d !== a.body.length - 1 ? k.current().body.push(l, ";") : k.return_(l)
                        });
                        break;
                    case q.Literal:
                        r = this.escape(a.value);
                        this.assign(c, r);
                        e(r);
                        break;
                    case q.UnaryExpression:
                        this.recurse(a.argument, u, u, function (a) {
                            l = a
                        });
                        r = a.operator + "(" + this.ifDefined(l, 0) + ")";
                        this.assign(c, r);
                        e(r);
                        break;
                    case q.BinaryExpression:
                        this.recurse(a.left, u, u, function (a) {
                            h = a
                        });
                        this.recurse(a.right, u, u, function (a) {
                            l = a
                        });
                        r = "+" === a.operator ? this.plus(h, l) : "-" === a.operator ? this.ifDefined(h, 0) + a.operator + this.ifDefined(l,
                            0) : "(" + h + ")" + a.operator + "(" + l + ")";
                        this.assign(c, r);
                        e(r);
                        break;
                    case q.LogicalExpression:
                        c = c || this.nextId();
                        k.recurse(a.left, c);
                        k.if_("&&" === a.operator ? c : k.not(c), k.lazyRecurse(a.right, c));
                        e(c);
                        break;
                    case q.ConditionalExpression:
                        c = c || this.nextId();
                        k.recurse(a.test, c);
                        k.if_(c, k.lazyRecurse(a.alternate, c), k.lazyRecurse(a.consequent, c));
                        e(c);
                        break;
                    case q.Identifier:
                        c = c || this.nextId();
                        d && (d.context = "inputs" === k.stage ? "s" : this.assign(this.nextId(), this.getHasOwnProperty("l", a.name) + "?l:s"), d.computed = !1,
                            d.name = a.name);
                        Ba(a.name);
                        k.if_("inputs" === k.stage || k.not(k.getHasOwnProperty("l", a.name)), function () {
                            k.if_("inputs" === k.stage || "s", function () {
                                f && 1 !== f && k.if_(k.not(k.nonComputedMember("s", a.name)), k.lazyAssign(k.nonComputedMember("s", a.name), "{}"));
                                k.assign(c, k.nonComputedMember("s", a.name))
                            })
                        }, c && k.lazyAssign(c, k.nonComputedMember("l", a.name)));
                        (k.state.expensiveChecks || Fb(a.name)) && k.addEnsureSafeObject(c);
                        e(c);
                        break;
                    case q.MemberExpression:
                        h = d && (d.context = this.nextId()) || this.nextId();
                        c = c || this.nextId();
                        k.recurse(a.object, h, u, function () {
                            k.if_(k.notNull(h), function () {
                                if (a.computed) l = k.nextId(), k.recurse(a.property, l), k.addEnsureSafeMemberName(l), f && 1 !== f && k.if_(k.not(k.computedMember(h, l)), k.lazyAssign(k.computedMember(h, l), "{}")), r = k.ensureSafeObject(k.computedMember(h, l)), k.assign(c, r), d && (d.computed = !0, d.name = l); else {
                                    Ba(a.property.name);
                                    f && 1 !== f && k.if_(k.not(k.nonComputedMember(h, a.property.name)), k.lazyAssign(k.nonComputedMember(h, a.property.name), "{}"));
                                    r = k.nonComputedMember(h, a.property.name);
                                    if (k.state.expensiveChecks || Fb(a.property.name)) r = k.ensureSafeObject(r);
                                    k.assign(c, r);
                                    d && (d.computed = !1, d.name = a.property.name)
                                }
                                e(c)
                            })
                        }, !!f);
                        break;
                    case q.CallExpression:
                        c = c || this.nextId();
                        a.filter ? (l = k.filter(a.callee.name), m = [], n(a.arguments, function (a) {
                            var c = k.nextId();
                            k.recurse(a, c);
                            m.push(c)
                        }), r = l + "(" + m.join(",") + ")", k.assign(c, r), e(c)) : (l = k.nextId(), h = {}, m = [], k.recurse(a.callee, l, h, function () {
                            k.if_(k.notNull(l), function () {
                                k.addEnsureSafeFunction(l);
                                n(a.arguments, function (a) {
                                    k.recurse(a, k.nextId(),
                                        u, function (a) {
                                            m.push(k.ensureSafeObject(a))
                                        })
                                });
                                h.name ? (k.state.expensiveChecks || k.addEnsureSafeObject(h.context), r = k.member(h.context, h.name, h.computed) + "(" + m.join(",") + ")") : r = l + "(" + m.join(",") + ")";
                                r = k.ensureSafeObject(r);
                                k.assign(c, r);
                                e(c)
                            })
                        }));
                        break;
                    case q.AssignmentExpression:
                        l = this.nextId();
                        h = {};
                        if (!nd(a.left)) throw ca("lval");
                        this.recurse(a.left, u, h, function () {
                            k.if_(k.notNull(h.context), function () {
                                k.recurse(a.right, l);
                                k.addEnsureSafeObject(k.member(h.context, h.name, h.computed));
                                r = k.member(h.context,
                                    h.name, h.computed) + a.operator + l;
                                k.assign(c, r);
                                e(c || r)
                            })
                        }, 1);
                        break;
                    case q.ArrayExpression:
                        m = [];
                        n(a.elements, function (a) {
                            k.recurse(a, k.nextId(), u, function (a) {
                                m.push(a)
                            })
                        });
                        r = "[" + m.join(",") + "]";
                        this.assign(c, r);
                        e(r);
                        break;
                    case q.ObjectExpression:
                        m = [];
                        n(a.properties, function (a) {
                            k.recurse(a.value, k.nextId(), u, function (c) {
                                m.push(k.escape(a.key.type === q.Identifier ? a.key.name : "" + a.key.value) + ":" + c)
                            })
                        });
                        r = "{" + m.join(",") + "}";
                        this.assign(c, r);
                        e(r);
                        break;
                    case q.ThisExpression:
                        this.assign(c, "s");
                        e("s");
                        break;
                    case q.NGValueParameter:
                        this.assign(c, "v"), e("v")
                }
            }, getHasOwnProperty: function (a, c) {
                var d = a + "." + c, e = this.current().own;
                e.hasOwnProperty(d) || (e[d] = this.nextId(!1, a + "&&(" + this.escape(c) + " in " + a + ")"));
                return e[d]
            }, assign: function (a, c) {
                if (a) return this.current().body.push(a, "=", c, ";"), a
            }, filter: function (a) {
                this.state.filters.hasOwnProperty(a) || (this.state.filters[a] = this.nextId(!0));
                return this.state.filters[a]
            }, ifDefined: function (a, c) {
                return "ifDefined(" + a + "," + this.escape(c) + ")"
            }, plus: function (a, c) {
                return "plus(" +
                    a + "," + c + ")"
            }, return_: function (a) {
                this.current().body.push("return ", a, ";")
            }, if_: function (a, c, d) {
                if (!0 === a) c(); else {
                    var e = this.current().body;
                    e.push("if(", a, "){");
                    c();
                    e.push("}");
                    d && (e.push("else{"), d(), e.push("}"))
                }
            }, not: function (a) {
                return "!(" + a + ")"
            }, notNull: function (a) {
                return a + "!=null"
            }, nonComputedMember: function (a, c) {
                return a + "." + c
            }, computedMember: function (a, c) {
                return a + "[" + c + "]"
            }, member: function (a, c, d) {
                return d ? this.computedMember(a, c) : this.nonComputedMember(a, c)
            }, addEnsureSafeObject: function (a) {
                this.current().body.push(this.ensureSafeObject(a),
                    ";")
            }, addEnsureSafeMemberName: function (a) {
                this.current().body.push(this.ensureSafeMemberName(a), ";")
            }, addEnsureSafeFunction: function (a) {
                this.current().body.push(this.ensureSafeFunction(a), ";")
            }, ensureSafeObject: function (a) {
                return "ensureSafeObject(" + a + ",text)"
            }, ensureSafeMemberName: function (a) {
                return "ensureSafeMemberName(" + a + ",text)"
            }, ensureSafeFunction: function (a) {
                return "ensureSafeFunction(" + a + ",text)"
            }, lazyRecurse: function (a, c, d, e, f, g) {
                var h = this;
                return function () {
                    h.recurse(a, c, d, e, f, g)
                }
            }, lazyAssign: function (a,
                                     c) {
                var d = this;
                return function () {
                    d.assign(a, c)
                }
            }, stringEscapeRegex: /[^ a-zA-Z0-9]/g, stringEscapeFn: function (a) {
                return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
            }, escape: function (a) {
                if (L(a)) return "'" + a.replace(this.stringEscapeRegex, this.stringEscapeFn) + "'";
                if (V(a)) return a.toString();
                if (!0 === a) return "true";
                if (!1 === a) return "false";
                if (null === a) return "null";
                if ("undefined" === typeof a) return "undefined";
                throw ca("esc");
            }, nextId: function (a, c) {
                var d = "v" + this.state.nextId++;
                a || this.current().vars.push(d +
                    (c ? "=" + c : ""));
                return d
            }, current: function () {
                return this.state[this.state.computing]
            }
        };
        rd.prototype = {
            compile: function (a, c) {
                var d = this, e = this.astBuilder.ast(a);
                this.expression = a;
                this.expensiveChecks = c;
                U(e, d.$filter);
                var f, g;
                if (f = od(e)) g = this.recurse(f);
                f = md(e.body);
                var h;
                f && (h = [], n(f, function (a, c) {
                    var e = d.recurse(a);
                    a.input = e;
                    h.push(e);
                    a.watchId = c
                }));
                var l = [];
                n(e.body, function (a) {
                    l.push(d.recurse(a.expression))
                });
                f = 0 === e.body.length ? function () {
                } : 1 === e.body.length ? l[0] : function (a, c) {
                    var d;
                    n(l, function (e) {
                        d =
                            e(a, c)
                    });
                    return d
                };
                g && (f.assign = function (a, c, d) {
                    return g(a, d, c)
                });
                h && (f.inputs = h);
                f.literal = pd(e);
                f.constant = e.constant;
                return f
            }, recurse: function (a, c, d) {
                var e, f, g = this, h;
                if (a.input) return this.inputs(a.input, a.watchId);
                switch (a.type) {
                    case q.Literal:
                        return this.value(a.value, c);
                    case q.UnaryExpression:
                        return f = this.recurse(a.argument), this["unary" + a.operator](f, c);
                    case q.BinaryExpression:
                        return e = this.recurse(a.left), f = this.recurse(a.right), this["binary" + a.operator](e, f, c);
                    case q.LogicalExpression:
                        return e =
                            this.recurse(a.left), f = this.recurse(a.right), this["binary" + a.operator](e, f, c);
                    case q.ConditionalExpression:
                        return this["ternary?:"](this.recurse(a.test), this.recurse(a.alternate), this.recurse(a.consequent), c);
                    case q.Identifier:
                        return Ba(a.name, g.expression), g.identifier(a.name, g.expensiveChecks || Fb(a.name), c, d, g.expression);
                    case q.MemberExpression:
                        return e = this.recurse(a.object, !1, !!d), a.computed || (Ba(a.property.name, g.expression), f = a.property.name), a.computed && (f = this.recurse(a.property)), a.computed ?
                            this.computedMember(e, f, c, d, g.expression) : this.nonComputedMember(e, f, g.expensiveChecks, c, d, g.expression);
                    case q.CallExpression:
                        return h = [], n(a.arguments, function (a) {
                            h.push(g.recurse(a))
                        }), a.filter && (f = this.$filter(a.callee.name)), a.filter || (f = this.recurse(a.callee, !0)), a.filter ? function (a, d, e, g) {
                            for (var n = [], q = 0; q < h.length; ++q) n.push(h[q](a, d, e, g));
                            a = f.apply(u, n, g);
                            return c ? {context: u, name: u, value: a} : a
                        } : function (a, d, e, r) {
                            var n = f(a, d, e, r), q;
                            if (null != n.value) {
                                na(n.context, g.expression);
                                kd(n.value, g.expression);
                                q = [];
                                for (var u = 0; u < h.length; ++u) q.push(na(h[u](a, d, e, r), g.expression));
                                q = na(n.value.apply(n.context, q), g.expression)
                            }
                            return c ? {value: q} : q
                        };
                    case q.AssignmentExpression:
                        return e = this.recurse(a.left, !0, 1), f = this.recurse(a.right), function (a, d, h, n) {
                            var s = e(a, d, h, n);
                            a = f(a, d, h, n);
                            na(s.value, g.expression);
                            s.context[s.name] = a;
                            return c ? {value: a} : a
                        };
                    case q.ArrayExpression:
                        return h = [], n(a.elements, function (a) {
                            h.push(g.recurse(a))
                        }), function (a, d, e, f) {
                            for (var g = [], n = 0; n < h.length; ++n) g.push(h[n](a, d, e, f));
                            return c ?
                                {value: g} : g
                        };
                    case q.ObjectExpression:
                        return h = [], n(a.properties, function (a) {
                            h.push({
                                key: a.key.type === q.Identifier ? a.key.name : "" + a.key.value,
                                value: g.recurse(a.value)
                            })
                        }), function (a, d, e, f) {
                            for (var g = {}, n = 0; n < h.length; ++n) g[h[n].key] = h[n].value(a, d, e, f);
                            return c ? {value: g} : g
                        };
                    case q.ThisExpression:
                        return function (a) {
                            return c ? {value: a} : a
                        };
                    case q.NGValueParameter:
                        return function (a, d, e, f) {
                            return c ? {value: e} : e
                        }
                }
            }, "unary+": function (a, c) {
                return function (d, e, f, g) {
                    d = a(d, e, f, g);
                    d = y(d) ? +d : 0;
                    return c ? {value: d} :
                        d
                }
            }, "unary-": function (a, c) {
                return function (d, e, f, g) {
                    d = a(d, e, f, g);
                    d = y(d) ? -d : 0;
                    return c ? {value: d} : d
                }
            }, "unary!": function (a, c) {
                return function (d, e, f, g) {
                    d = !a(d, e, f, g);
                    return c ? {value: d} : d
                }
            }, "binary+": function (a, c, d) {
                return function (e, f, g, h) {
                    var l = a(e, f, g, h);
                    e = c(e, f, g, h);
                    l = ld(l, e);
                    return d ? {value: l} : l
                }
            }, "binary-": function (a, c, d) {
                return function (e, f, g, h) {
                    var l = a(e, f, g, h);
                    e = c(e, f, g, h);
                    l = (y(l) ? l : 0) - (y(e) ? e : 0);
                    return d ? {value: l} : l
                }
            }, "binary*": function (a, c, d) {
                return function (e, f, g, h) {
                    e = a(e, f, g, h) * c(e, f, g, h);
                    return d ? {value: e} : e
                }
            }, "binary/": function (a, c, d) {
                return function (e, f, g, h) {
                    e = a(e, f, g, h) / c(e, f, g, h);
                    return d ? {value: e} : e
                }
            }, "binary%": function (a, c, d) {
                return function (e, f, g, h) {
                    e = a(e, f, g, h) % c(e, f, g, h);
                    return d ? {value: e} : e
                }
            }, "binary===": function (a, c, d) {
                return function (e, f, g, h) {
                    e = a(e, f, g, h) === c(e, f, g, h);
                    return d ? {value: e} : e
                }
            }, "binary!==": function (a, c, d) {
                return function (e, f, g, h) {
                    e = a(e, f, g, h) !== c(e, f, g, h);
                    return d ? {value: e} : e
                }
            }, "binary==": function (a, c, d) {
                return function (e, f, g, h) {
                    e = a(e, f, g, h) == c(e, f, g, h);
                    return d ?
                        {value: e} : e
                }
            }, "binary!=": function (a, c, d) {
                return function (e, f, g, h) {
                    e = a(e, f, g, h) != c(e, f, g, h);
                    return d ? {value: e} : e
                }
            }, "binary<": function (a, c, d) {
                return function (e, f, g, h) {
                    e = a(e, f, g, h) < c(e, f, g, h);
                    return d ? {value: e} : e
                }
            }, "binary>": function (a, c, d) {
                return function (e, f, g, h) {
                    e = a(e, f, g, h) > c(e, f, g, h);
                    return d ? {value: e} : e
                }
            }, "binary<=": function (a, c, d) {
                return function (e, f, g, h) {
                    e = a(e, f, g, h) <= c(e, f, g, h);
                    return d ? {value: e} : e
                }
            }, "binary>=": function (a, c, d) {
                return function (e, f, g, h) {
                    e = a(e, f, g, h) >= c(e, f, g, h);
                    return d ? {value: e} :
                        e
                }
            }, "binary&&": function (a, c, d) {
                return function (e, f, g, h) {
                    e = a(e, f, g, h) && c(e, f, g, h);
                    return d ? {value: e} : e
                }
            }, "binary||": function (a, c, d) {
                return function (e, f, g, h) {
                    e = a(e, f, g, h) || c(e, f, g, h);
                    return d ? {value: e} : e
                }
            }, "ternary?:": function (a, c, d, e) {
                return function (f, g, h, l) {
                    f = a(f, g, h, l) ? c(f, g, h, l) : d(f, g, h, l);
                    return e ? {value: f} : f
                }
            }, value: function (a, c) {
                return function () {
                    return c ? {context: u, name: u, value: a} : a
                }
            }, identifier: function (a, c, d, e, f) {
                return function (g, h, l, k) {
                    g = h && a in h ? h : g;
                    e && 1 !== e && g && !g[a] && (g[a] = {});
                    h = g ?
                        g[a] : u;
                    c && na(h, f);
                    return d ? {context: g, name: a, value: h} : h
                }
            }, computedMember: function (a, c, d, e, f) {
                return function (g, h, l, k) {
                    var m = a(g, h, l, k), n, s;
                    null != m && (n = c(g, h, l, k), Ba(n, f), e && 1 !== e && m && !m[n] && (m[n] = {}), s = m[n], na(s, f));
                    return d ? {context: m, name: n, value: s} : s
                }
            }, nonComputedMember: function (a, c, d, e, f, g) {
                return function (h, l, k, m) {
                    h = a(h, l, k, m);
                    f && 1 !== f && h && !h[c] && (h[c] = {});
                    l = null != h ? h[c] : u;
                    (d || Fb(c)) && na(l, g);
                    return e ? {context: h, name: c, value: l} : l
                }
            }, inputs: function (a, c) {
                return function (d, e, f, g) {
                    return g ? g[c] :
                        a(d, e, f)
                }
            }
        };
        var hc = function (a, c, d) {
            this.lexer = a;
            this.$filter = c;
            this.options = d;
            this.ast = new q(this.lexer);
            this.astCompiler = d.csp ? new rd(this.ast, c) : new qd(this.ast, c)
        };
        hc.prototype = {
            constructor: hc, parse: function (a) {
                return this.astCompiler.compile(a, this.options.expensiveChecks)
            }
        };
        ga();
        ga();
        var Xf = Object.prototype.valueOf, Ca = F("$sce"),
            oa = {HTML: "html", CSS: "css", URL: "url", RESOURCE_URL: "resourceUrl", JS: "js"}, ea = F("$compile"),
            Z = W.createElement("a"), vd = Aa(N.location.href);
        wd.$inject = ["$document"];
        Kc.$inject =
            ["$provide"];
        xd.$inject = ["$locale"];
        zd.$inject = ["$locale"];
        var Cd = ".", gg = {
                yyyy: $("FullYear", 4),
                yy: $("FullYear", 2, 0, !0),
                y: $("FullYear", 1),
                MMMM: Hb("Month"),
                MMM: Hb("Month", !0),
                MM: $("Month", 2, 1),
                M: $("Month", 1, 1),
                dd: $("Date", 2),
                d: $("Date", 1),
                HH: $("Hours", 2),
                H: $("Hours", 1),
                hh: $("Hours", 2, -12),
                h: $("Hours", 1, -12),
                mm: $("Minutes", 2),
                m: $("Minutes", 1),
                ss: $("Seconds", 2),
                s: $("Seconds", 1),
                sss: $("Milliseconds", 3),
                EEEE: Hb("Day"),
                EEE: Hb("Day", !0),
                a: function (a, c) {
                    return 12 > a.getHours() ? c.AMPMS[0] : c.AMPMS[1]
                },
                Z: function (a,
                             c, d) {
                    a = -1 * d;
                    return a = (0 <= a ? "+" : "") + (Gb(Math[0 < a ? "floor" : "ceil"](a / 60), 2) + Gb(Math.abs(a % 60), 2))
                },
                ww: Ed(2),
                w: Ed(1),
                G: jc,
                GG: jc,
                GGG: jc,
                GGGG: function (a, c) {
                    return 0 >= a.getFullYear() ? c.ERANAMES[0] : c.ERANAMES[1]
                }
            }, fg = /((?:[^yMdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,
            eg = /^\-?\d+$/;
        yd.$inject = ["$locale"];
        var bg = qa(E), cg = qa(pb);
        Ad.$inject = ["$parse"];
        var he = qa({
            restrict: "E", compile: function (a, c) {
                if (!c.href && !c.xlinkHref) return function (a, c) {
                    if ("a" === c[0].nodeName.toLowerCase()) {
                        var f =
                            "[object SVGAnimatedString]" === sa.call(c.prop("href")) ? "xlink:href" : "href";
                        c.on("click", function (a) {
                            c.attr(f) || a.preventDefault()
                        })
                    }
                }
            }
        }), qb = {};
        n(zb, function (a, c) {
            function d(a, d, f) {
                a.$watch(f[e], function (a) {
                    f.$set(c, !!a)
                })
            }

            if ("multiple" != a) {
                var e = xa("ng-" + c), f = d;
                "checked" === a && (f = function (a, c, f) {
                    f.ngModel !== f[e] && d(a, c, f)
                });
                qb[e] = function () {
                    return {restrict: "A", priority: 100, link: f}
                }
            }
        });
        n(Tc, function (a, c) {
            qb[c] = function () {
                return {
                    priority: 100, link: function (a, e, f) {
                        if ("ngPattern" === c && "/" == f.ngPattern.charAt(0) &&
                            (e = f.ngPattern.match(ig))) {
                            f.$set("ngPattern", new RegExp(e[1], e[2]));
                            return
                        }
                        a.$watch(f[c], function (a) {
                            f.$set(c, a)
                        })
                    }
                }
            }
        });
        n(["src", "srcset", "href"], function (a) {
            var c = xa("ng-" + a);
            qb[c] = function () {
                return {
                    priority: 99, link: function (d, e, f) {
                        var g = a, h = a;
                        "href" === a && "[object SVGAnimatedString]" === sa.call(e.prop("href")) && (h = "xlinkHref", f.$attr[h] = "xlink:href", g = null);
                        f.$observe(c, function (c) {
                            c ? (f.$set(h, c), gb && g && e.prop(g, f[h])) : "href" === a && f.$set(h, null)
                        })
                    }
                }
            }
        });
        var Ib = {
            $addControl: w, $$renameControl: function (a,
                                                       c) {
                a.$name = c
            }, $removeControl: w, $setValidity: w, $setDirty: w, $setPristine: w, $setSubmitted: w
        };
        Fd.$inject = ["$element", "$attrs", "$scope", "$animate", "$interpolate"];
        var Nd = function (a) {
                return ["$timeout", function (c) {
                    return {
                        name: "form", restrict: a ? "EAC" : "E", controller: Fd, compile: function (d, e) {
                            d.addClass(Sa).addClass(jb);
                            var f = e.name ? "name" : a && e.ngForm ? "ngForm" : !1;
                            return {
                                pre: function (a, d, e, k) {
                                    if (!("action" in e)) {
                                        var m = function (c) {
                                            a.$apply(function () {
                                                k.$commitViewValue();
                                                k.$setSubmitted()
                                            });
                                            c.preventDefault()
                                        };
                                        d[0].addEventListener("submit", m, !1);
                                        d.on("$destroy", function () {
                                            c(function () {
                                                d[0].removeEventListener("submit", m, !1)
                                            }, 0, !1)
                                        })
                                    }
                                    var n = k.$$parentForm;
                                    f && (Eb(a, k.$name, k, k.$name), e.$observe(f, function (c) {
                                        k.$name !== c && (Eb(a, k.$name, u, k.$name), n.$$renameControl(k, c), Eb(a, k.$name, k, k.$name))
                                    }));
                                    d.on("$destroy", function () {
                                        n.$removeControl(k);
                                        f && Eb(a, e[f], u, k.$name);
                                        Q(k, Ib)
                                    })
                                }
                            }
                        }
                    }
                }]
            }, ie = Nd(), ve = Nd(!0), hg = /\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/,
            qg = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
            rg = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,
            sg = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/, Od = /^(\d{4})-(\d{2})-(\d{2})$/,
            Pd = /^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/, mc = /^(\d{4})-W(\d\d)$/,
            Qd = /^(\d{4})-(\d\d)$/, Rd = /^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/, Sd = {
                text: function (a, c, d, e, f, g) {
                    hb(a, c, d, e, f, g);
                    kc(e)
                },
                date: ib("date", Od, Kb(Od, ["yyyy", "MM", "dd"]), "yyyy-MM-dd"),
                "datetime-local": ib("datetimelocal", Pd, Kb(Pd, "yyyy MM dd HH mm ss sss".split(" ")),
                    "yyyy-MM-ddTHH:mm:ss.sss"),
                time: ib("time", Rd, Kb(Rd, ["HH", "mm", "ss", "sss"]), "HH:mm:ss.sss"),
                week: ib("week", mc, function (a, c) {
                    if (da(a)) return a;
                    if (L(a)) {
                        mc.lastIndex = 0;
                        var d = mc.exec(a);
                        if (d) {
                            var e = +d[1], f = +d[2], g = d = 0, h = 0, l = 0, k = Dd(e), f = 7 * (f - 1);
                            c && (d = c.getHours(), g = c.getMinutes(), h = c.getSeconds(), l = c.getMilliseconds());
                            return new Date(e, 0, k.getDate() + f, d, g, h, l)
                        }
                    }
                    return NaN
                }, "yyyy-Www"),
                month: ib("month", Qd, Kb(Qd, ["yyyy", "MM"]), "yyyy-MM"),
                number: function (a, c, d, e, f, g) {
                    Hd(a, c, d, e);
                    hb(a, c, d, e, f, g);
                    e.$$parserName =
                        "number";
                    e.$parsers.push(function (a) {
                        return e.$isEmpty(a) ? null : sg.test(a) ? parseFloat(a) : u
                    });
                    e.$formatters.push(function (a) {
                        if (!e.$isEmpty(a)) {
                            if (!V(a)) throw Lb("numfmt", a);
                            a = a.toString()
                        }
                        return a
                    });
                    if (y(d.min) || d.ngMin) {
                        var h;
                        e.$validators.min = function (a) {
                            return e.$isEmpty(a) || v(h) || a >= h
                        };
                        d.$observe("min", function (a) {
                            y(a) && !V(a) && (a = parseFloat(a, 10));
                            h = V(a) && !isNaN(a) ? a : u;
                            e.$validate()
                        })
                    }
                    if (y(d.max) || d.ngMax) {
                        var l;
                        e.$validators.max = function (a) {
                            return e.$isEmpty(a) || v(l) || a <= l
                        };
                        d.$observe("max", function (a) {
                            y(a) &&
                            !V(a) && (a = parseFloat(a, 10));
                            l = V(a) && !isNaN(a) ? a : u;
                            e.$validate()
                        })
                    }
                },
                url: function (a, c, d, e, f, g) {
                    hb(a, c, d, e, f, g);
                    kc(e);
                    e.$$parserName = "url";
                    e.$validators.url = function (a, c) {
                        var d = a || c;
                        return e.$isEmpty(d) || qg.test(d)
                    }
                },
                email: function (a, c, d, e, f, g) {
                    hb(a, c, d, e, f, g);
                    kc(e);
                    e.$$parserName = "email";
                    e.$validators.email = function (a, c) {
                        var d = a || c;
                        return e.$isEmpty(d) || rg.test(d)
                    }
                },
                radio: function (a, c, d, e) {
                    v(d.name) && c.attr("name", ++lb);
                    c.on("click", function (a) {
                        c[0].checked && e.$setViewValue(d.value, a && a.type)
                    });
                    e.$render =
                        function () {
                            c[0].checked = d.value == e.$viewValue
                        };
                    d.$observe("value", e.$render)
                },
                checkbox: function (a, c, d, e, f, g, h, l) {
                    var k = Id(l, a, "ngTrueValue", d.ngTrueValue, !0),
                        m = Id(l, a, "ngFalseValue", d.ngFalseValue, !1);
                    c.on("click", function (a) {
                        e.$setViewValue(c[0].checked, a && a.type)
                    });
                    e.$render = function () {
                        c[0].checked = e.$viewValue
                    };
                    e.$isEmpty = function (a) {
                        return !1 === a
                    };
                    e.$formatters.push(function (a) {
                        return ka(a, k)
                    });
                    e.$parsers.push(function (a) {
                        return a ? k : m
                    })
                },
                hidden: w,
                button: w,
                submit: w,
                reset: w,
                file: w
            }, Ec = ["$browser",
                "$sniffer", "$filter", "$parse", function (a, c, d, e) {
                    return {
                        restrict: "E", require: ["?ngModel"], link: {
                            pre: function (f, g, h, l) {
                                l[0] && (Sd[E(h.type)] || Sd.text)(f, g, h, l[0], c, a, d, e)
                            }
                        }
                    }
                }], tg = /^(true|false|\d+)$/, Ne = function () {
                return {
                    restrict: "A", priority: 100, compile: function (a, c) {
                        return tg.test(c.ngValue) ? function (a, c, f) {
                            f.$set("value", a.$eval(f.ngValue))
                        } : function (a, c, f) {
                            a.$watch(f.ngValue, function (a) {
                                f.$set("value", a)
                            })
                        }
                    }
                }
            }, ne = ["$compile", function (a) {
                return {
                    restrict: "AC", compile: function (c) {
                        a.$$addBindingClass(c);
                        return function (c, e, f) {
                            a.$$addBindingInfo(e, f.ngBind);
                            e = e[0];
                            c.$watch(f.ngBind, function (a) {
                                e.textContent = a === u ? "" : a
                            })
                        }
                    }
                }
            }], pe = ["$interpolate", "$compile", function (a, c) {
                return {
                    compile: function (d) {
                        c.$$addBindingClass(d);
                        return function (d, f, g) {
                            d = a(f.attr(g.$attr.ngBindTemplate));
                            c.$$addBindingInfo(f, d.expressions);
                            f = f[0];
                            g.$observe("ngBindTemplate", function (a) {
                                f.textContent = a === u ? "" : a
                            })
                        }
                    }
                }
            }], oe = ["$sce", "$parse", "$compile", function (a, c, d) {
                return {
                    restrict: "A", compile: function (e, f) {
                        var g = c(f.ngBindHtml),
                            h = c(f.ngBindHtml, function (a) {
                                return (a || "").toString()
                            });
                        d.$$addBindingClass(e);
                        return function (c, e, f) {
                            d.$$addBindingInfo(e, f.ngBindHtml);
                            c.$watch(h, function () {
                                e.html(a.getTrustedHtml(g(c)) || "")
                            })
                        }
                    }
                }
            }], Me = qa({
                restrict: "A", require: "ngModel", link: function (a, c, d, e) {
                    e.$viewChangeListeners.push(function () {
                        a.$eval(d.ngChange)
                    })
                }
            }), qe = lc("", !0), se = lc("Odd", 0), re = lc("Even", 1), te = Ma({
                compile: function (a, c) {
                    c.$set("ngCloak", u);
                    a.removeClass("ng-cloak")
                }
            }), ue = [function () {
                return {
                    restrict: "A", scope: !0, controller: "@",
                    priority: 500
                }
            }], Jc = {}, ug = {blur: !0, focus: !0};
        n("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function (a) {
            var c = xa("ng-" + a);
            Jc[c] = ["$parse", "$rootScope", function (d, e) {
                return {
                    restrict: "A", compile: function (f, g) {
                        var h = d(g[c], null, !0);
                        return function (c, d) {
                            d.on(a, function (d) {
                                var f = function () {
                                    h(c, {$event: d})
                                };
                                ug[a] && e.$$phase ? c.$evalAsync(f) : c.$apply(f)
                            })
                        }
                    }
                }
            }]
        });
        var xe = ["$animate", function (a) {
                return {
                    multiElement: !0,
                    transclude: "element",
                    priority: 600,
                    terminal: !0,
                    restrict: "A",
                    $$tlb: !0,
                    link: function (c, d, e, f, g) {
                        var h, l, k;
                        c.$watch(e.ngIf, function (c) {
                            c ? l || g(function (c, f) {
                                l = f;
                                c[c.length++] = W.createComment(" end ngIf: " + e.ngIf + " ");
                                h = {clone: c};
                                a.enter(c, d.parent(), d)
                            }) : (k && (k.remove(), k = null), l && (l.$destroy(), l = null), h && (k = ob(h.clone), a.leave(k).then(function () {
                                k = null
                            }), h = null))
                        })
                    }
                }
            }], ye = ["$templateRequest", "$anchorScroll", "$animate", "$sce", function (a, c, d, e) {
                return {
                    restrict: "ECA", priority: 400, terminal: !0, transclude: "element",
                    controller: aa.noop, compile: function (f, g) {
                        var h = g.ngInclude || g.src, l = g.onload || "", k = g.autoscroll;
                        return function (f, g, n, q, u) {
                            var v = 0, t, p, x, w = function () {
                                p && (p.remove(), p = null);
                                t && (t.$destroy(), t = null);
                                x && (d.leave(x).then(function () {
                                    p = null
                                }), p = x, x = null)
                            };
                            f.$watch(e.parseAsResourceUrl(h), function (e) {
                                var h = function () {
                                    !y(k) || k && !f.$eval(k) || c()
                                }, n = ++v;
                                e ? (a(e, !0).then(function (a) {
                                    if (n === v) {
                                        var c = f.$new();
                                        q.template = a;
                                        a = u(c, function (a) {
                                            w();
                                            d.enter(a, null, g).then(h)
                                        });
                                        t = c;
                                        x = a;
                                        t.$emit("$includeContentLoaded",
                                            e);
                                        f.$eval(l)
                                    }
                                }, function () {
                                    n === v && (w(), f.$emit("$includeContentError", e))
                                }), f.$emit("$includeContentRequested", e)) : (w(), q.template = null)
                            })
                        }
                    }
                }
            }], Pe = ["$compile", function (a) {
                return {
                    restrict: "ECA", priority: -400, require: "ngInclude", link: function (c, d, e, f) {
                        /SVG/.test(d[0].toString()) ? (d.empty(), a(Mc(f.template, W).childNodes)(c, function (a) {
                            d.append(a)
                        }, {futureParentElement: d})) : (d.html(f.template), a(d.contents())(c))
                    }
                }
            }], ze = Ma({
                priority: 450, compile: function () {
                    return {
                        pre: function (a, c, d) {
                            a.$eval(d.ngInit)
                        }
                    }
                }
            }),
            Le = function () {
                return {
                    restrict: "A", priority: 100, require: "ngModel", link: function (a, c, d, e) {
                        var f = c.attr(d.$attr.ngList) || ", ", g = "false" !== d.ngTrim, h = g ? T(f) : f;
                        e.$parsers.push(function (a) {
                            if (!v(a)) {
                                var c = [];
                                a && n(a.split(h), function (a) {
                                    a && c.push(g ? T(a) : a)
                                });
                                return c
                            }
                        });
                        e.$formatters.push(function (a) {
                            return K(a) ? a.join(f) : u
                        });
                        e.$isEmpty = function (a) {
                            return !a || !a.length
                        }
                    }
                }
            }, jb = "ng-valid", Jd = "ng-invalid", Sa = "ng-pristine", Jb = "ng-dirty", Ld = "ng-pending",
            Lb = new F("ngModel"), vg = ["$scope", "$exceptionHandler", "$attrs",
                "$element", "$parse", "$animate", "$timeout", "$rootScope", "$q", "$interpolate", function (a, c, d, e, f, g, h, l, k, m) {
                    this.$modelValue = this.$viewValue = Number.NaN;
                    this.$$rawModelValue = u;
                    this.$validators = {};
                    this.$asyncValidators = {};
                    this.$parsers = [];
                    this.$formatters = [];
                    this.$viewChangeListeners = [];
                    this.$untouched = !0;
                    this.$touched = !1;
                    this.$pristine = !0;
                    this.$dirty = !1;
                    this.$valid = !0;
                    this.$invalid = !1;
                    this.$error = {};
                    this.$$success = {};
                    this.$pending = u;
                    this.$name = m(d.name || "", !1)(a);
                    var r = f(d.ngModel), s = r.assign, q = r, H = s,
                        M = null, t, p = this;
                    this.$$setOptions = function (a) {
                        if ((p.$options = a) && a.getterSetter) {
                            var c = f(d.ngModel + "()"), g = f(d.ngModel + "($$$p)");
                            q = function (a) {
                                var d = r(a);
                                G(d) && (d = c(a));
                                return d
                            };
                            H = function (a, c) {
                                G(r(a)) ? g(a, {$$$p: p.$modelValue}) : s(a, p.$modelValue)
                            }
                        } else if (!r.assign) throw Lb("nonassign", d.ngModel, va(e));
                    };
                    this.$render = w;
                    this.$isEmpty = function (a) {
                        return v(a) || "" === a || null === a || a !== a
                    };
                    var x = e.inheritedData("$formController") || Ib, z = 0;
                    Gd({
                        ctrl: this, $element: e, set: function (a, c) {
                            a[c] = !0
                        }, unset: function (a,
                                            c) {
                            delete a[c]
                        }, parentForm: x, $animate: g
                    });
                    this.$setPristine = function () {
                        p.$dirty = !1;
                        p.$pristine = !0;
                        g.removeClass(e, Jb);
                        g.addClass(e, Sa)
                    };
                    this.$setDirty = function () {
                        p.$dirty = !0;
                        p.$pristine = !1;
                        g.removeClass(e, Sa);
                        g.addClass(e, Jb);
                        x.$setDirty()
                    };
                    this.$setUntouched = function () {
                        p.$touched = !1;
                        p.$untouched = !0;
                        g.setClass(e, "ng-untouched", "ng-touched")
                    };
                    this.$setTouched = function () {
                        p.$touched = !0;
                        p.$untouched = !1;
                        g.setClass(e, "ng-touched", "ng-untouched")
                    };
                    this.$rollbackViewValue = function () {
                        h.cancel(M);
                        p.$viewValue =
                            p.$$lastCommittedViewValue;
                        p.$render()
                    };
                    this.$validate = function () {
                        if (!V(p.$modelValue) || !isNaN(p.$modelValue)) {
                            var a = p.$$rawModelValue, c = p.$valid, d = p.$modelValue,
                                e = p.$options && p.$options.allowInvalid;
                            p.$$runValidators(a, p.$$lastCommittedViewValue, function (f) {
                                e || c === f || (p.$modelValue = f ? a : u, p.$modelValue !== d && p.$$writeModelToScope())
                            })
                        }
                    };
                    this.$$runValidators = function (a, c, d) {
                        function e() {
                            var d = !0;
                            n(p.$validators, function (e, f) {
                                var h = e(a, c);
                                d = d && h;
                                g(f, h)
                            });
                            return d ? !0 : (n(p.$asyncValidators, function (a,
                                                                             c) {
                                g(c, null)
                            }), !1)
                        }

                        function f() {
                            var d = [], e = !0;
                            n(p.$asyncValidators, function (f, h) {
                                var k = f(a, c);
                                if (!k || !G(k.then)) throw Lb("$asyncValidators", k);
                                g(h, u);
                                d.push(k.then(function () {
                                    g(h, !0)
                                }, function (a) {
                                    e = !1;
                                    g(h, !1)
                                }))
                            });
                            d.length ? k.all(d).then(function () {
                                h(e)
                            }, w) : h(!0)
                        }

                        function g(a, c) {
                            l === z && p.$setValidity(a, c)
                        }

                        function h(a) {
                            l === z && d(a)
                        }

                        z++;
                        var l = z;
                        (function () {
                            var a = p.$$parserName || "parse";
                            if (t === u) g(a, null); else return t || (n(p.$validators, function (a, c) {
                                g(c, null)
                            }), n(p.$asyncValidators, function (a, c) {
                                g(c,
                                    null)
                            })), g(a, t), t;
                            return !0
                        })() ? e() ? f() : h(!1) : h(!1)
                    };
                    this.$commitViewValue = function () {
                        var a = p.$viewValue;
                        h.cancel(M);
                        if (p.$$lastCommittedViewValue !== a || "" === a && p.$$hasNativeValidators) p.$$lastCommittedViewValue = a, p.$pristine && this.$setDirty(), this.$$parseAndValidate()
                    };
                    this.$$parseAndValidate = function () {
                        var c = p.$$lastCommittedViewValue;
                        if (t = v(c) ? u : !0) for (var d = 0; d < p.$parsers.length; d++) if (c = p.$parsers[d](c), v(c)) {
                            t = !1;
                            break
                        }
                        V(p.$modelValue) && isNaN(p.$modelValue) && (p.$modelValue = q(a));
                        var e = p.$modelValue,
                            f = p.$options && p.$options.allowInvalid;
                        p.$$rawModelValue = c;
                        f && (p.$modelValue = c, p.$modelValue !== e && p.$$writeModelToScope());
                        p.$$runValidators(c, p.$$lastCommittedViewValue, function (a) {
                            f || (p.$modelValue = a ? c : u, p.$modelValue !== e && p.$$writeModelToScope())
                        })
                    };
                    this.$$writeModelToScope = function () {
                        H(a, p.$modelValue);
                        n(p.$viewChangeListeners, function (a) {
                            try {
                                a()
                            } catch (d) {
                                c(d)
                            }
                        })
                    };
                    this.$setViewValue = function (a, c) {
                        p.$viewValue = a;
                        p.$options && !p.$options.updateOnDefault || p.$$debounceViewValueCommit(c)
                    };
                    this.$$debounceViewValueCommit =
                        function (c) {
                            var d = 0, e = p.$options;
                            e && y(e.debounce) && (e = e.debounce, V(e) ? d = e : V(e[c]) ? d = e[c] : V(e["default"]) && (d = e["default"]));
                            h.cancel(M);
                            d ? M = h(function () {
                                p.$commitViewValue()
                            }, d) : l.$$phase ? p.$commitViewValue() : a.$apply(function () {
                                p.$commitViewValue()
                            })
                        };
                    a.$watch(function () {
                        var c = q(a);
                        if (c !== p.$modelValue && (p.$modelValue === p.$modelValue || c === c)) {
                            p.$modelValue = p.$$rawModelValue = c;
                            t = u;
                            for (var d = p.$formatters, e = d.length, f = c; e--;) f = d[e](f);
                            p.$viewValue !== f && (p.$viewValue = p.$$lastCommittedViewValue = f, p.$render(),
                                p.$$runValidators(c, f, w))
                        }
                        return c
                    })
                }], Ke = ["$rootScope", function (a) {
                return {
                    restrict: "A",
                    require: ["ngModel", "^?form", "^?ngModelOptions"],
                    controller: vg,
                    priority: 1,
                    compile: function (c) {
                        c.addClass(Sa).addClass("ng-untouched").addClass(jb);
                        return {
                            pre: function (a, c, f, g) {
                                var h = g[0], l = g[1] || Ib;
                                h.$$setOptions(g[2] && g[2].$options);
                                l.$addControl(h);
                                f.$observe("name", function (a) {
                                    h.$name !== a && l.$$renameControl(h, a)
                                });
                                a.$on("$destroy", function () {
                                    l.$removeControl(h)
                                })
                            }, post: function (c, e, f, g) {
                                var h = g[0];
                                if (h.$options &&
                                    h.$options.updateOn) e.on(h.$options.updateOn, function (a) {
                                    h.$$debounceViewValueCommit(a && a.type)
                                });
                                e.on("blur", function (e) {
                                    h.$touched || (a.$$phase ? c.$evalAsync(h.$setTouched) : c.$apply(h.$setTouched))
                                })
                            }
                        }
                    }
                }
            }], wg = /(\s+|^)default(\s+|$)/, Oe = function () {
                return {
                    restrict: "A", controller: ["$scope", "$attrs", function (a, c) {
                        var d = this;
                        this.$options = ua(a.$eval(c.ngModelOptions));
                        this.$options.updateOn !== u ? (this.$options.updateOnDefault = !1, this.$options.updateOn = T(this.$options.updateOn.replace(wg, function () {
                            d.$options.updateOnDefault =
                                !0;
                            return " "
                        }))) : this.$options.updateOnDefault = !0
                    }]
                }
            }, Ae = Ma({terminal: !0, priority: 1E3}), xg = F("ngOptions"),
            yg = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
            Ie = ["$compile", "$parse", function (a, c) {
                function d(a, d, e) {
                    function f(a, c, d, e, g) {
                        this.selectValue = a;
                        this.viewValue = c;
                        this.label = d;
                        this.group = e;
                        this.disabled = g
                    }

                    var m = a.match(yg);
                    if (!m) throw xg("iexp", a, va(d));
                    var n = m[5] || m[7], s = m[6];
                    a = / as /.test(m[0]) && m[1];
                    var q = m[9];
                    d = c(m[2] ? m[1] : n);
                    var u = a && c(a) || d, v = q && c(q), t = q ? function (a, c) {
                            return v(e, c)
                        } : function (a) {
                            return Fa(a)
                        }, p = function (a, c) {
                            return t(a, D(a, c))
                        }, x = c(m[2] || m[1]), w = c(m[3] || ""), y = c(m[4] || ""), B = c(m[8]), z = {},
                        D = s ? function (a, c) {
                            z[s] = c;
                            z[n] = a;
                            return z
                        } : function (a) {
                            z[n] = a;
                            return z
                        };
                    return {
                        trackBy: q, getTrackByValue: p, getWatchables: c(B, function (a) {
                            var c = [];
                            a = a || [];
                            Object.keys(a).forEach(function (d) {
                                var f =
                                    D(a[d], d);
                                d = t(a[d], f);
                                c.push(d);
                                if (m[2] || m[1]) d = x(e, f), c.push(d);
                                m[4] && (f = y(e, f), c.push(f))
                            });
                            return c
                        }), getOptions: function () {
                            var a = [], c = {}, d = B(e) || [], g;
                            if (!s && Da(d)) g = d; else {
                                g = [];
                                for (var h in d) d.hasOwnProperty(h) && "$" !== h.charAt(0) && g.push(h)
                            }
                            h = g.length;
                            for (var m = 0; m < h; m++) {
                                var n = d === g ? m : g[m], r = D(d[n], n), v = u(e, r), n = t(v, r), z = x(e, r),
                                    M = w(e, r), r = y(e, r), v = new f(n, v, z, M, r);
                                a.push(v);
                                c[n] = v
                            }
                            return {
                                items: a, selectValueMap: c, getOptionFromViewValue: function (a) {
                                    return c[p(a)]
                                }, getViewValueFromOption: function (a) {
                                    return q ?
                                        aa.copy(a.viewValue) : a.viewValue
                                }
                            }
                        }
                    }
                }

                var e = W.createElement("option"), f = W.createElement("optgroup");
                return {
                    restrict: "A", terminal: !0, require: ["select", "?ngModel"], link: function (c, h, l, k) {
                        function m(a, c) {
                            a.element = c;
                            c.disabled = a.disabled;
                            a.value !== c.value && (c.value = a.selectValue);
                            a.label !== c.label && (c.label = a.label, c.textContent = a.label)
                        }

                        function r(a, c, d, e) {
                            c && E(c.nodeName) === d ? d = c : (d = e.cloneNode(!1), c ? a.insertBefore(d, c) : a.appendChild(d));
                            return d
                        }

                        function q(a) {
                            for (var c; a;) c = a.nextSibling, Xb(a), a = c
                        }

                        function u(a) {
                            var c = p && p[0], d = O && O[0];
                            if (c || d) for (; a && (a === c || a === d);) a = a.nextSibling;
                            return a
                        }

                        function v() {
                            var a = D && t.readValue();
                            D = C.getOptions();
                            var c = {}, d = h[0].firstChild;
                            B && h.prepend(p);
                            d = u(d);
                            D.items.forEach(function (a) {
                                var g, k;
                                a.group ? (g = c[a.group], g || (g = r(h[0], d, "optgroup", f), d = g.nextSibling, g.label = a.group, g = c[a.group] = {
                                    groupElement: g,
                                    currentOptionElement: g.firstChild
                                }), k = r(g.groupElement, g.currentOptionElement, "option", e), m(a, k), g.currentOptionElement = k.nextSibling) : (k = r(h[0], d, "option",
                                    e), m(a, k), d = k.nextSibling)
                            });
                            Object.keys(c).forEach(function (a) {
                                q(c[a].currentOptionElement)
                            });
                            q(d);
                            w.$render();
                            if (!w.$isEmpty(a)) {
                                var g = t.readValue();
                                if (C.trackBy && !ka(a, g) || a !== g) w.$setViewValue(g), w.$render()
                            }
                        }

                        var w = k[1];
                        if (w) {
                            var t = k[0];
                            k = l.multiple;
                            for (var p, x = 0, y = h.children(), I = y.length; x < I; x++) if ("" === y[x].value) {
                                p = y.eq(x);
                                break
                            }
                            var B = !!p, O = z(e.cloneNode(!1));
                            O.val("?");
                            var D, C = d(l.ngOptions, h, c);
                            k ? (w.$isEmpty = function (a) {
                                return !a || 0 === a.length
                            }, t.writeValue = function (a) {
                                D.items.forEach(function (a) {
                                    a.element.selected =
                                        !1
                                });
                                a && a.forEach(function (a) {
                                    (a = D.getOptionFromViewValue(a)) && !a.disabled && (a.element.selected = !0)
                                })
                            }, t.readValue = function () {
                                var a = h.val() || [], c = [];
                                n(a, function (a) {
                                    a = D.selectValueMap[a];
                                    a.disabled || c.push(D.getViewValueFromOption(a))
                                });
                                return c
                            }, C.trackBy && c.$watchCollection(function () {
                                if (K(w.$viewValue)) return w.$viewValue.map(function (a) {
                                    return C.getTrackByValue(a)
                                })
                            }, function () {
                                w.$render()
                            })) : (t.writeValue = function (a) {
                                var c = D.getOptionFromViewValue(a);
                                c && !c.disabled ? h[0].value !== c.selectValue &&
                                    (O.remove(), B || p.remove(), h[0].value = c.selectValue, c.element.selected = !0, c.element.setAttribute("selected", "selected")) : null === a || B ? (O.remove(), B || h.prepend(p), h.val(""), p.prop("selected", !0), p.attr("selected", !0)) : (B || p.remove(), h.prepend(O), h.val("?"), O.prop("selected", !0), O.attr("selected", !0))
                            }, t.readValue = function () {
                                var a = D.selectValueMap[h.val()];
                                return a && !a.disabled ? (B || p.remove(), O.remove(), D.getViewValueFromOption(a)) : null
                            }, C.trackBy && c.$watch(function () {
                                    return C.getTrackByValue(w.$viewValue)
                                },
                                function () {
                                    w.$render()
                                }));
                            B ? (p.remove(), a(p)(c), p.removeClass("ng-scope")) : p = z(e.cloneNode(!1));
                            v();
                            c.$watchCollection(C.getWatchables, v)
                        }
                    }
                }
            }], Be = ["$locale", "$interpolate", "$log", function (a, c, d) {
                var e = /{}/g, f = /^when(Minus)?(.+)$/;
                return {
                    link: function (g, h, l) {
                        function k(a) {
                            h.text(a || "")
                        }

                        var m = l.count, r = l.$attr.when && h.attr(l.$attr.when), q = l.offset || 0,
                            u = g.$eval(r) || {}, z = {}, y = c.startSymbol(), t = c.endSymbol(),
                            p = y + m + "-" + q + t, x = aa.noop, C;
                        n(l, function (a, c) {
                            var d = f.exec(c);
                            d && (d = (d[1] ? "-" : "") + E(d[2]), u[d] = h.attr(l.$attr[c]))
                        });
                        n(u, function (a, d) {
                            z[d] = c(a.replace(e, p))
                        });
                        g.$watch(m, function (c) {
                            var e = parseFloat(c), f = isNaN(e);
                            f || e in u || (e = a.pluralCat(e - q));
                            e === C || f && V(C) && isNaN(C) || (x(), f = z[e], v(f) ? (null != c && d.debug("ngPluralize: no rule defined for '" + e + "' in " + r), x = w, k()) : x = g.$watch(f, k), C = e)
                        })
                    }
                }
            }], Ce = ["$parse", "$animate", function (a, c) {
                var d = F("ngRepeat"), e = function (a, c, d, e, k, m, n) {
                    a[d] = e;
                    k && (a[k] = m);
                    a.$index = c;
                    a.$first = 0 === c;
                    a.$last = c === n - 1;
                    a.$middle = !(a.$first || a.$last);
                    a.$odd = !(a.$even = 0 === (c & 1))
                };
                return {
                    restrict: "A",
                    multiElement: !0,
                    transclude: "element",
                    priority: 1E3,
                    terminal: !0,
                    $$tlb: !0,
                    compile: function (f, g) {
                        var h = g.ngRepeat, l = W.createComment(" end ngRepeat: " + h + " "),
                            k = h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
                        if (!k) throw d("iexp", h);
                        var m = k[1], r = k[2], q = k[3], v = k[4],
                            k = m.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/);
                        if (!k) throw d("iidexp", m);
                        var w = k[3] || k[1], y = k[2];
                        if (q && (!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(q) || /^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(q))) throw d("badident",
                            q);
                        var t, p, x, C, I = {$id: Fa};
                        v ? t = a(v) : (x = function (a, c) {
                            return Fa(c)
                        }, C = function (a) {
                            return a
                        });
                        return function (a, f, g, k, m) {
                            t && (p = function (c, d, e) {
                                y && (I[y] = c);
                                I[w] = d;
                                I.$index = e;
                                return t(a, I)
                            });
                            var v = ga();
                            a.$watchCollection(r, function (g) {
                                var k, r, t = f[0], A, D = ga(), I, G, L, F, K, E, N;
                                q && (a[q] = g);
                                if (Da(g)) K = g, r = p || x; else for (N in r = p || C, K = [], g) g.hasOwnProperty(N) && "$" !== N.charAt(0) && K.push(N);
                                I = K.length;
                                N = Array(I);
                                for (k = 0; k < I; k++) if (G = g === K ? k : K[k], L = g[G], F = r(G, L, k), v[F]) E = v[F], delete v[F], D[F] = E, N[k] = E; else {
                                    if (D[F]) throw n(N,
                                        function (a) {
                                            a && a.scope && (v[a.id] = a)
                                        }), d("dupes", h, F, L);
                                    N[k] = {id: F, scope: u, clone: u};
                                    D[F] = !0
                                }
                                for (A in v) {
                                    E = v[A];
                                    F = ob(E.clone);
                                    c.leave(F);
                                    if (F[0].parentNode) for (k = 0, r = F.length; k < r; k++) F[k].$$NG_REMOVED = !0;
                                    E.scope.$destroy()
                                }
                                for (k = 0; k < I; k++) if (G = g === K ? k : K[k], L = g[G], E = N[k], E.scope) {
                                    A = t;
                                    do A = A.nextSibling; while (A && A.$$NG_REMOVED);
                                    E.clone[0] != A && c.move(ob(E.clone), null, z(t));
                                    t = E.clone[E.clone.length - 1];
                                    e(E.scope, k, w, L, y, G, I)
                                } else m(function (a, d) {
                                    E.scope = d;
                                    var f = l.cloneNode(!1);
                                    a[a.length++] = f;
                                    c.enter(a,
                                        null, z(t));
                                    t = f;
                                    E.clone = a;
                                    D[E.id] = E;
                                    e(E.scope, k, w, L, y, G, I)
                                });
                                v = D
                            })
                        }
                    }
                }
            }], De = ["$animate", function (a) {
                return {
                    restrict: "A", multiElement: !0, link: function (c, d, e) {
                        c.$watch(e.ngShow, function (c) {
                            a[c ? "removeClass" : "addClass"](d, "ng-hide", {tempClasses: "ng-hide-animate"})
                        })
                    }
                }
            }], we = ["$animate", function (a) {
                return {
                    restrict: "A", multiElement: !0, link: function (c, d, e) {
                        c.$watch(e.ngHide, function (c) {
                            a[c ? "addClass" : "removeClass"](d, "ng-hide", {tempClasses: "ng-hide-animate"})
                        })
                    }
                }
            }], Ee = Ma(function (a, c, d) {
                a.$watch(d.ngStyle,
                    function (a, d) {
                        d && a !== d && n(d, function (a, d) {
                            c.css(d, "")
                        });
                        a && c.css(a)
                    }, !0)
            }), Fe = ["$animate", function (a) {
                return {
                    require: "ngSwitch", controller: ["$scope", function () {
                        this.cases = {}
                    }], link: function (c, d, e, f) {
                        var g = [], h = [], l = [], k = [], m = function (a, c) {
                            return function () {
                                a.splice(c, 1)
                            }
                        };
                        c.$watch(e.ngSwitch || e.on, function (c) {
                            var d, e;
                            d = 0;
                            for (e = l.length; d < e; ++d) a.cancel(l[d]);
                            d = l.length = 0;
                            for (e = k.length; d < e; ++d) {
                                var q = ob(h[d].clone);
                                k[d].$destroy();
                                (l[d] = a.leave(q)).then(m(l, d))
                            }
                            h.length = 0;
                            k.length = 0;
                            (g = f.cases["!" +
                            c] || f.cases["?"]) && n(g, function (c) {
                                c.transclude(function (d, e) {
                                    k.push(e);
                                    var f = c.element;
                                    d[d.length++] = W.createComment(" end ngSwitchWhen: ");
                                    h.push({clone: d});
                                    a.enter(d, f.parent(), f)
                                })
                            })
                        })
                    }
                }
            }], Ge = Ma({
                transclude: "element",
                priority: 1200,
                require: "^ngSwitch",
                multiElement: !0,
                link: function (a, c, d, e, f) {
                    e.cases["!" + d.ngSwitchWhen] = e.cases["!" + d.ngSwitchWhen] || [];
                    e.cases["!" + d.ngSwitchWhen].push({transclude: f, element: c})
                }
            }), He = Ma({
                transclude: "element", priority: 1200, require: "^ngSwitch", multiElement: !0, link: function (a,
                                                                                                               c, d, e, f) {
                    e.cases["?"] = e.cases["?"] || [];
                    e.cases["?"].push({transclude: f, element: c})
                }
            }), Je = Ma({
                restrict: "EAC", link: function (a, c, d, e, f) {
                    if (!f) throw F("ngTransclude")("orphan", va(c));
                    f(function (a) {
                        c.empty();
                        c.append(a)
                    })
                }
            }), je = ["$templateCache", function (a) {
                return {
                    restrict: "E", terminal: !0, compile: function (c, d) {
                        "text/ng-template" == d.type && a.put(d.id, c[0].text)
                    }
                }
            }], zg = {$setViewValue: w, $render: w}, Ag = ["$element", "$scope", "$attrs", function (a, c, d) {
                var e = this, f = new Ra;
                e.ngModelCtrl = zg;
                e.unknownOption = z(W.createElement("option"));
                e.renderUnknownOption = function (c) {
                    c = "? " + Fa(c) + " ?";
                    e.unknownOption.val(c);
                    a.prepend(e.unknownOption);
                    a.val(c)
                };
                c.$on("$destroy", function () {
                    e.renderUnknownOption = w
                });
                e.removeUnknownOption = function () {
                    e.unknownOption.parent() && e.unknownOption.remove()
                };
                e.readValue = function () {
                    e.removeUnknownOption();
                    return a.val()
                };
                e.writeValue = function (c) {
                    e.hasOption(c) ? (e.removeUnknownOption(), a.val(c), "" === c && e.emptyOption.prop("selected", !0)) : null == c && e.emptyOption ? (e.removeUnknownOption(), a.val("")) : e.renderUnknownOption(c)
                };
                e.addOption = function (a, c) {
                    Qa(a, '"option value"');
                    "" === a && (e.emptyOption = c);
                    var d = f.get(a) || 0;
                    f.put(a, d + 1)
                };
                e.removeOption = function (a) {
                    var c = f.get(a);
                    c && (1 === c ? (f.remove(a), "" === a && (e.emptyOption = u)) : f.put(a, c - 1))
                };
                e.hasOption = function (a) {
                    return !!f.get(a)
                }
            }], ke = function () {
                return {
                    restrict: "E", require: ["select", "?ngModel"], controller: Ag, link: function (a, c, d, e) {
                        var f = e[1];
                        if (f) {
                            var g = e[0];
                            g.ngModelCtrl = f;
                            f.$render = function () {
                                g.writeValue(f.$viewValue)
                            };
                            c.on("change", function () {
                                a.$apply(function () {
                                    f.$setViewValue(g.readValue())
                                })
                            });
                            if (d.multiple) {
                                g.readValue = function () {
                                    var a = [];
                                    n(c.find("option"), function (c) {
                                        c.selected && a.push(c.value)
                                    });
                                    return a
                                };
                                g.writeValue = function (a) {
                                    var d = new Ra(a);
                                    n(c.find("option"), function (a) {
                                        a.selected = y(d.get(a.value))
                                    })
                                };
                                var h, l = NaN;
                                a.$watch(function () {
                                    l !== f.$viewValue || ka(h, f.$viewValue) || (h = fa(f.$viewValue), f.$render());
                                    l = f.$viewValue
                                });
                                f.$isEmpty = function (a) {
                                    return !a || 0 === a.length
                                }
                            }
                        }
                    }
                }
            }, me = ["$interpolate", function (a) {
                function c(a) {
                    a[0].hasAttribute("selected") && (a[0].selected = !0)
                }

                return {
                    restrict: "E",
                    priority: 100, compile: function (d, e) {
                        if (v(e.value)) {
                            var f = a(d.text(), !0);
                            f || e.$set("value", d.text())
                        }
                        return function (a, d, e) {
                            var k = d.parent(), m = k.data("$selectController") || k.parent().data("$selectController");
                            m && m.ngModelCtrl && (f ? a.$watch(f, function (a, f) {
                                e.$set("value", a);
                                f !== a && m.removeOption(f);
                                m.addOption(a, d);
                                m.ngModelCtrl.$render();
                                c(d)
                            }) : (m.addOption(e.value, d), m.ngModelCtrl.$render(), c(d)), d.on("$destroy", function () {
                                m.removeOption(e.value);
                                m.ngModelCtrl.$render()
                            }))
                        }
                    }
                }
            }], le = qa({
                restrict: "E",
                terminal: !1
            }), Gc = function () {
                return {
                    restrict: "A", require: "?ngModel", link: function (a, c, d, e) {
                        e && (d.required = !0, e.$validators.required = function (a, c) {
                            return !d.required || !e.$isEmpty(c)
                        }, d.$observe("required", function () {
                            e.$validate()
                        }))
                    }
                }
            }, Fc = function () {
                return {
                    restrict: "A", require: "?ngModel", link: function (a, c, d, e) {
                        if (e) {
                            var f, g = d.ngPattern || d.pattern;
                            d.$observe("pattern", function (a) {
                                L(a) && 0 < a.length && (a = new RegExp("^" + a + "$"));
                                if (a && !a.test) throw F("ngPattern")("noregexp", g, a, va(c));
                                f = a || u;
                                e.$validate()
                            });
                            e.$validators.pattern = function (a) {
                                return e.$isEmpty(a) || v(f) || f.test(a)
                            }
                        }
                    }
                }
            }, Ic = function () {
                return {
                    restrict: "A", require: "?ngModel", link: function (a, c, d, e) {
                        if (e) {
                            var f = -1;
                            d.$observe("maxlength", function (a) {
                                a = Y(a);
                                f = isNaN(a) ? -1 : a;
                                e.$validate()
                            });
                            e.$validators.maxlength = function (a, c) {
                                return 0 > f || e.$isEmpty(c) || c.length <= f
                            }
                        }
                    }
                }
            }, Hc = function () {
                return {
                    restrict: "A", require: "?ngModel", link: function (a, c, d, e) {
                        if (e) {
                            var f = 0;
                            d.$observe("minlength", function (a) {
                                f = Y(a) || 0;
                                e.$validate()
                            });
                            e.$validators.minlength = function (a,
                                                                c) {
                                return e.$isEmpty(c) || c.length >= f
                            }
                        }
                    }
                }
            };
        N.angular.bootstrap ? console.log("WARNING: Tried to load angular more than once.") : (be(), de(aa), z(W).ready(function () {
            Yd(W, zc)
        }))
    })(window, document);
    !window.angular.$$csp() && window.angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>');

}

function angular_tr() {

    (function (root, factory) {
        if (typeof define === 'function' && define.amd) {
            // AMD. Register as an anonymous module unless amdModuleId is set
            define([], function () {
                return (factory());
            });
        } else if (typeof exports === 'object') {
            // Node. Does not work with strict CommonJS, but
            // only CommonJS-like environments that support module.exports,
            // like Node.
            module.exports = factory();
        } else {
            factory();
        }
    }(this, function () {

        /**
         * @ngdoc overview
         * @name pascalprecht.translate
         *
         * @description
         * The main module which holds everything together.
         */
        angular.module('pascalprecht.translate', ['ng'])
            .run(runTranslate);

        function runTranslate($translate) {

            'use strict';

            var key = $translate.storageKey(),
                storage = $translate.storage();

            var fallbackFromIncorrectStorageValue = function () {
                var preferred = $translate.preferredLanguage();
                if (angular.isString(preferred)) {
                    $translate.use(preferred);
                    // $translate.use() will also remember the language.
                    // So, we don't need to call storage.put() here.
                } else {
                    storage.put(key, $translate.use());
                }
            };

            fallbackFromIncorrectStorageValue.displayName = 'fallbackFromIncorrectStorageValue';

            if (storage) {
                if (!storage.get(key)) {
                    fallbackFromIncorrectStorageValue();
                } else {
                    $translate.use(storage.get(key))['catch'](fallbackFromIncorrectStorageValue);
                }
            } else if (angular.isString($translate.preferredLanguage())) {
                $translate.use($translate.preferredLanguage());
            }
        }

        runTranslate.$inject = ['$translate'];

        runTranslate.displayName = 'runTranslate';

        /**
         * @ngdoc object
         * @name pascalprecht.translate.$translateSanitizationProvider
         *
         * @description
         *
         * Configurations for $translateSanitization
         */
        angular.module('pascalprecht.translate').provider('$translateSanitization', $translateSanitizationProvider);

        function $translateSanitizationProvider() {

            'use strict';

            var $sanitize,
                currentStrategy = null, // TODO change to either 'sanitize', 'escape' or ['sanitize', 'escapeParameters'] in 3.0.
                hasConfiguredStrategy = false,
                hasShownNoStrategyConfiguredWarning = false,
                strategies;

            /**
             * Definition of a sanitization strategy function
             * @callback StrategyFunction
             * @param {string|object} value - value to be sanitized (either a string or an interpolated value map)
             * @param {string} mode - either 'text' for a string (translation) or 'params' for the interpolated params
             * @return {string|object}
             */

            /**
             * @ngdoc property
             * @name strategies
             * @propertyOf pascalprecht.translate.$translateSanitizationProvider
             *
             * @description
             * Following strategies are built-in:
             * <dl>
             *   <dt>sanitize</dt>
             *   <dd>Sanitizes HTML in the translation text using $sanitize</dd>
             *   <dt>escape</dt>
             *   <dd>Escapes HTML in the translation</dd>
             *   <dt>sanitizeParameters</dt>
             *   <dd>Sanitizes HTML in the values of the interpolation parameters using $sanitize</dd>
             *   <dt>escapeParameters</dt>
             *   <dd>Escapes HTML in the values of the interpolation parameters</dd>
             *   <dt>escaped</dt>
             *   <dd>Support legacy strategy name 'escaped' for backwards compatibility (will be removed in 3.0)</dd>
             * </dl>
             *
             */

            strategies = {
                sanitize: function (value, mode) {
                    if (mode === 'text') {
                        value = htmlSanitizeValue(value);
                    }
                    return value;
                },
                escape: function (value, mode) {
                    if (mode === 'text') {
                        value = htmlEscapeValue(value);
                    }
                    return value;
                },
                sanitizeParameters: function (value, mode) {
                    if (mode === 'params') {
                        value = mapInterpolationParameters(value, htmlSanitizeValue);
                    }
                    return value;
                },
                escapeParameters: function (value, mode) {
                    if (mode === 'params') {
                        value = mapInterpolationParameters(value, htmlEscapeValue);
                    }
                    return value;
                }
            };
            // Support legacy strategy name 'escaped' for backwards compatibility.
            // TODO should be removed in 3.0
            strategies.escaped = strategies.escapeParameters;

            /**
             * @ngdoc function
             * @name pascalprecht.translate.$translateSanitizationProvider#addStrategy
             * @methodOf pascalprecht.translate.$translateSanitizationProvider
             *
             * @description
             * Adds a sanitization strategy to the list of known strategies.
             *
             * @param {string} strategyName - unique key for a strategy
             * @param {StrategyFunction} strategyFunction - strategy function
             * @returns {object} this
             */
            this.addStrategy = function (strategyName, strategyFunction) {
                strategies[strategyName] = strategyFunction;
                return this;
            };

            /**
             * @ngdoc function
             * @name pascalprecht.translate.$translateSanitizationProvider#removeStrategy
             * @methodOf pascalprecht.translate.$translateSanitizationProvider
             *
             * @description
             * Removes a sanitization strategy from the list of known strategies.
             *
             * @param {string} strategyName - unique key for a strategy
             * @returns {object} this
             */
            this.removeStrategy = function (strategyName) {
                delete strategies[strategyName];
                return this;
            };

            /**
             * @ngdoc function
             * @name pascalprecht.translate.$translateSanitizationProvider#useStrategy
             * @methodOf pascalprecht.translate.$translateSanitizationProvider
             *
             * @description
             * Selects a sanitization strategy. When an array is provided the strategies will be executed in order.
             *
             * @param {string|StrategyFunction|array} strategy The sanitization strategy / strategies which should be used. Either a name of an existing strategy, a custom strategy function, or an array consisting of multiple names and / or custom functions.
             * @returns {object} this
             */
            this.useStrategy = function (strategy) {
                hasConfiguredStrategy = true;
                currentStrategy = strategy;
                return this;
            };

            /**
             * @ngdoc object
             * @name pascalprecht.translate.$translateSanitization
             * @requires $injector
             * @requires $log
             *
             * @description
             * Sanitizes interpolation parameters and translated texts.
             *
             */
            this.$get = ['$injector', '$log', function ($injector, $log) {

                var applyStrategies = function (value, mode, selectedStrategies) {
                    angular.forEach(selectedStrategies, function (selectedStrategy) {
                        if (angular.isFunction(selectedStrategy)) {
                            value = selectedStrategy(value, mode);
                        } else if (angular.isFunction(strategies[selectedStrategy])) {
                            value = strategies[selectedStrategy](value, mode);
                        } else {
                            throw new Error('pascalprecht.translate.$translateSanitization: Unknown sanitization strategy: \'' + selectedStrategy + '\'');
                        }
                    });
                    return value;
                };

                // TODO: should be removed in 3.0
                var showNoStrategyConfiguredWarning = function () {
                    if (!hasConfiguredStrategy && !hasShownNoStrategyConfiguredWarning) {
                        $log.warn('pascalprecht.translate.$translateSanitization: No sanitization strategy has been configured. This can have serious security implications. See http://angular-translate.github.io/docs/#/guide/19_security for details.');
                        hasShownNoStrategyConfiguredWarning = true;
                    }
                };

                if ($injector.has('$sanitize')) {
                    $sanitize = $injector.get('$sanitize');
                }

                return {
                    /**
                     * @ngdoc function
                     * @name pascalprecht.translate.$translateSanitization#useStrategy
                     * @methodOf pascalprecht.translate.$translateSanitization
                     *
                     * @description
                     * Selects a sanitization strategy. When an array is provided the strategies will be executed in order.
                     *
                     * @param {string|StrategyFunction|array} strategy The sanitization strategy / strategies which should be used. Either a name of an existing strategy, a custom strategy function, or an array consisting of multiple names and / or custom functions.
                     */
                    useStrategy: (function (self) {
                        return function (strategy) {
                            self.useStrategy(strategy);
                        };
                    })(this),

                    /**
                     * @ngdoc function
                     * @name pascalprecht.translate.$translateSanitization#sanitize
                     * @methodOf pascalprecht.translate.$translateSanitization
                     *
                     * @description
                     * Sanitizes a value.
                     *
                     * @param {string|object} value The value which should be sanitized.
                     * @param {string} mode The current sanitization mode, either 'params' or 'text'.
                     * @param {string|StrategyFunction|array} [strategy] Optional custom strategy which should be used instead of the currently selected strategy.
                     * @returns {string|object} sanitized value
                     */
                    sanitize: function (value, mode, strategy) {
                        if (!currentStrategy) {
                            showNoStrategyConfiguredWarning();
                        }

                        if (arguments.length < 3) {
                            strategy = currentStrategy;
                        }

                        if (!strategy) {
                            return value;
                        }

                        var selectedStrategies = angular.isArray(strategy) ? strategy : [strategy];
                        return applyStrategies(value, mode, selectedStrategies);
                    }
                };
            }];

            var htmlEscapeValue = function (value) {
                var element = angular.element('<div></div>');
                element.text(value); // not chainable, see #1044
                return element.html();
            };

            var htmlSanitizeValue = function (value) {
                if (!$sanitize) {
                    throw new Error('pascalprecht.translate.$translateSanitization: Error cannot find $sanitize service. Either include the ngSanitize module (https://docs.angularjs.org/api/ngSanitize) or use a sanitization strategy which does not depend on $sanitize, such as \'escape\'.');
                }
                return $sanitize(value);
            };

            var mapInterpolationParameters = function (value, iteratee) {
                if (angular.isObject(value)) {
                    var result = angular.isArray(value) ? [] : {};

                    angular.forEach(value, function (propertyValue, propertyKey) {
                        result[propertyKey] = mapInterpolationParameters(propertyValue, iteratee);
                    });

                    return result;
                } else if (angular.isNumber(value)) {
                    return value;
                } else {
                    return iteratee(value);
                }
            };
        }

        /**
         * @ngdoc object
         * @name pascalprecht.translate.$translateProvider
         * @description
         *
         * $translateProvider allows developers to register translation-tables, asynchronous loaders
         * and similar to configure translation behavior directly inside of a module.
         *
         */
        angular.module('pascalprecht.translate')
            .constant('pascalprechtTranslateOverrider', {})
            .provider('$translate', $translate);

        function $translate($STORAGE_KEY, $windowProvider, $translateSanitizationProvider, pascalprechtTranslateOverrider) {

            'use strict';

            var $translationTable = {},
                $preferredLanguage,
                $availableLanguageKeys = [],
                $languageKeyAliases,
                $fallbackLanguage,
                $fallbackWasString,
                $uses,
                $nextLang,
                $storageFactory,
                $storageKey = $STORAGE_KEY,
                $storagePrefix,
                $missingTranslationHandlerFactory,
                $interpolationFactory,
                $interpolatorFactories = [],
                $loaderFactory,
                $cloakClassName = 'translate-cloak',
                $loaderOptions,
                $notFoundIndicatorLeft,
                $notFoundIndicatorRight,
                $postCompilingEnabled = false,
                $forceAsyncReloadEnabled = false,
                NESTED_OBJECT_DELIMITER = '.',
                loaderCache,
                directivePriority = 0,
                statefulFilter = true,
                uniformLanguageTagResolver = 'default',
                languageTagResolver = {
                    'default': function (tag) {
                        return (tag || '').split('-').join('_');
                    },
                    java: function (tag) {
                        var temp = (tag || '').split('-').join('_');
                        var parts = temp.split('_');
                        return parts.length > 1 ? (parts[0].toLowerCase() + '_' + parts[1].toUpperCase()) : temp;
                    },
                    bcp47: function (tag) {
                        var temp = (tag || '').split('_').join('-');
                        var parts = temp.split('-');
                        return parts.length > 1 ? (parts[0].toLowerCase() + '-' + parts[1].toUpperCase()) : temp;
                    }
                };

            var version = '2.7.2';

            // tries to determine the browsers language
            var getFirstBrowserLanguage = function () {

                // internal purpose only
                if (angular.isFunction(pascalprechtTranslateOverrider.getLocale)) {
                    return pascalprechtTranslateOverrider.getLocale();
                }

                var nav = $windowProvider.$get().navigator,
                    browserLanguagePropertyKeys = ['language', 'browserLanguage', 'systemLanguage', 'userLanguage'],
                    i,
                    language;

                // support for HTML 5.1 "navigator.languages"
                if (angular.isArray(nav.languages)) {
                    for (i = 0; i < nav.languages.length; i++) {
                        language = nav.languages[i];
                        if (language && language.length) {
                            return language;
                        }
                    }
                }

                // support for other well known properties in browsers
                for (i = 0; i < browserLanguagePropertyKeys.length; i++) {
                    language = nav[browserLanguagePropertyKeys[i]];
                    if (language && language.length) {
                        return language;
                    }
                }

                return null;
            };
            getFirstBrowserLanguage.displayName = 'angular-translate/service: getFirstBrowserLanguage';

            // tries to determine the browsers locale
            var getLocale = function () {
                var locale = getFirstBrowserLanguage() || '';
                if (languageTagResolver[uniformLanguageTagResolver]) {
                    locale = languageTagResolver[uniformLanguageTagResolver](locale);
                }
                return locale;
            };
            getLocale.displayName = 'angular-translate/service: getLocale';

            /**
             * @name indexOf
             * @private
             *
             * @description
             * indexOf polyfill. Kinda sorta.
             *
             * @param {array} array Array to search in.
             * @param {string} searchElement Element to search for.
             *
             * @returns {int} Index of search element.
             */
            var indexOf = function (array, searchElement) {
                for (var i = 0, len = array.length; i < len; i++) {
                    if (array[i] === searchElement) {
                        return i;
                    }
                }
                return -1;
            };

            /**
             * @name trim
             * @private
             *
             * @description
             * trim polyfill
             *
             * @returns {string} The string stripped of whitespace from both ends
             */
            var trim = function () {
                return this.toString().replace(/^\s+|\s+$/g, '');
            };

            var negotiateLocale = function (preferred) {

                var avail = [],
                    locale = angular.lowercase(preferred),
                    i = 0,
                    n = $availableLanguageKeys.length;

                for (; i < n; i++) {
                    avail.push(angular.lowercase($availableLanguageKeys[i]));
                }

                if (indexOf(avail, locale) > -1) {
                    return preferred;
                }

                if ($languageKeyAliases) {
                    var alias;
                    for (var langKeyAlias in $languageKeyAliases) {
                        var hasWildcardKey = false;
                        var hasExactKey = Object.prototype.hasOwnProperty.call($languageKeyAliases, langKeyAlias) &&
                            angular.lowercase(langKeyAlias) === angular.lowercase(preferred);

                        if (langKeyAlias.slice(-1) === '*') {
                            hasWildcardKey = langKeyAlias.slice(0, -1) === preferred.slice(0, langKeyAlias.length - 1);
                        }
                        if (hasExactKey || hasWildcardKey) {
                            alias = $languageKeyAliases[langKeyAlias];
                            if (indexOf(avail, angular.lowercase(alias)) > -1) {
                                return alias;
                            }
                        }
                    }
                }

                if (preferred) {
                    var parts = preferred.split('_');

                    if (parts.length > 1 && indexOf(avail, angular.lowercase(parts[0])) > -1) {
                        return parts[0];
                    }
                }

                // If everything fails, just return the preferred, unchanged.
                return preferred;
            };

            /**
             * @ngdoc function
             * @name pascalprecht.translate.$translateProvider#translations
             * @methodOf pascalprecht.translate.$translateProvider
             *
             * @description
             * Registers a new translation table for specific language key.
             *
             * To register a translation table for specific language, pass a defined language
             * key as first parameter.
             *
             * <pre>
             *  // register translation table for language: 'de_DE'
             *  $translateProvider.translations('de_DE', {
             *    'GREETING': 'Hallo Welt!'
             *  });
             *
             *  // register another one
             *  $translateProvider.translations('en_US', {
             *    'GREETING': 'Hello world!'
             *  });
             * </pre>
             *
             * When registering multiple translation tables for for the same language key,
             * the actual translation table gets extended. This allows you to define module
             * specific translation which only get added, once a specific module is loaded in
             * your app.
             *
             * Invoking this method with no arguments returns the translation table which was
             * registered with no language key. Invoking it with a language key returns the
             * related translation table.
             *
             * @param {string} key A language key.
             * @param {object} translationTable A plain old JavaScript object that represents a translation table.
             *
             */
            var translations = function (langKey, translationTable) {

                if (!langKey && !translationTable) {
                    return $translationTable;
                }

                if (langKey && !translationTable) {
                    if (angular.isString(langKey)) {
                        return $translationTable[langKey];
                    }
                } else {
                    if (!angular.isObject($translationTable[langKey])) {
                        $translationTable[langKey] = {};
                    }
                    angular.extend($translationTable[langKey], flatObject(translationTable));
                }
                return this;
            };

            this.translations = translations;

            /**
             * @ngdoc function
             * @name pascalprecht.translate.$translateProvider#cloakClassName
             * @methodOf pascalprecht.translate.$translateProvider
             *
             * @description
             *
             * Let's you change the class name for `translate-cloak` directive.
             * Default class name is `translate-cloak`.
             *
             * @param {string} name translate-cloak class name
             */
            this.cloakClassName = function (name) {
                if (!name) {
                    return $cloakClassName;
                }
                $cloakClassName = name;
                return this;
            };

            /**
             * @name flatObject
             * @private
             *
             * @description
             * Flats an object. This function is used to flatten given translation data with
             * namespaces, so they are later accessible via dot notation.
             */
            var flatObject = function (data, path, result, prevKey) {
                var key, keyWithPath, keyWithShortPath, val;

                if (!path) {
                    path = [];
                }
                if (!result) {
                    result = {};
                }
                for (key in data) {
                    if (!Object.prototype.hasOwnProperty.call(data, key)) {
                        continue;
                    }
                    val = data[key];
                    if (angular.isObject(val)) {
                        flatObject(val, path.concat(key), result, key);
                    } else {
                        keyWithPath = path.length ? ('' + path.join(NESTED_OBJECT_DELIMITER) + NESTED_OBJECT_DELIMITER + key) : key;
                        if (path.length && key === prevKey) {
                            // Create shortcut path (foo.bar == foo.bar.bar)
                            keyWithShortPath = '' + path.join(NESTED_OBJECT_DELIMITER);
                            // Link it to original path
                            result[keyWithShortPath] = '@:' + keyWithPath;
                        }
                        result[keyWithPath] = val;
                    }
                }
                return result;
            };
            flatObject.displayName = 'flatObject';

            /**
             * @ngdoc function
             * @name pascalprecht.translate.$translateProvider#addInterpolation
             * @methodOf pascalprecht.translate.$translateProvider
             *
             * @description
             * Adds interpolation services to angular-translate, so it can manage them.
             *
             * @param {object} factory Interpolation service factory
             */
            this.addInterpolation = function (factory) {
                $interpolatorFactories.push(factory);
                return this;
            };

            /**
             * @ngdoc function
             * @name pascalprecht.translate.$translateProvider#useMessageFormatInterpolation
             * @methodOf pascalprecht.translate.$translateProvider
             *
             * @description
             * Tells angular-translate to use interpolation functionality of messageformat.js.
             * This is useful when having high level pluralization and gender selection.
             */
            this.useMessageFormatInterpolation = function () {
                return this.useInterpolation('$translateMessageFormatInterpolation');
            };

            /**
             * @ngdoc function
             * @name pascalprecht.translate.$translateProvider#useInterpolation
             * @methodOf pascalprecht.translate.$translateProvider
             *
             * @description
             * Tells angular-translate which interpolation style to use as default, application-wide.
             * Simply pass a factory/service name. The interpolation service has to implement
             * the correct interface.
             *
             * @param {string} factory Interpolation service name.
             */
            this.useInterpolation = function (factory) {
                $interpolationFactory = factory;
                return this;
            };

            /**
             * @ngdoc function
             * @name pascalprecht.translate.$translateProvider#useSanitizeStrategy
             * @methodOf pascalprecht.translate.$translateProvider
             *
             * @description
             * Simply sets a sanitation strategy type.
             *
             * @param {string} value Strategy type.
             */
            this.useSanitizeValueStrategy = function (value) {
                $translateSanitizationProvider.useStrategy(value);
                return this;
            };

            /**
             * @ngdoc function
             * @name pascalprecht.translate.$translateProvider#preferredLanguage
             * @methodOf pascalprecht.translate.$translateProvider
             *
             * @description
             * Tells the module which of the registered translation tables to use for translation
             * at initial startup by passing a language key. Similar to `$translateProvider#use`
             * only that it says which language to **prefer**.
             *
             * @param {string} langKey A language key.
             *
             */
            this.preferredLanguage = function (langKey) {
                setupPreferredLanguage(langKey);
                return this;

            };
            var setupPreferredLanguage = function (langKey) {
                if (langKey) {
                    $preferredLanguage = langKey;
                }
                return $preferredLanguage;
            };
            /**
             * @ngdoc function
             * @name pascalprecht.translate.$translateProvider#translationNotFoundIndicator
             * @methodOf pascalprecht.translate.$translateProvider
             *
             * @description
             * Sets an indicator which is used when a translation isn't found. E.g. when
             * setting the indicator as 'X' and one tries to translate a translation id
             * called `NOT_FOUND`, this will result in `X NOT_FOUND X`.
             *
             * Internally this methods sets a left indicator and a right indicator using
             * `$translateProvider.translationNotFoundIndicatorLeft()` and
             * `$translateProvider.translationNotFoundIndicatorRight()`.
             *
             * **Note**: These methods automatically add a whitespace between the indicators
             * and the translation id.
             *
             * @param {string} indicator An indicator, could be any string.
             */
            this.translationNotFoundIndicator = function (indicator) {
                this.translationNotFoundIndicatorLeft(indicator);
                this.translationNotFoundIndicatorRight(indicator);
                return this;
            };

            /**
             * ngdoc function
             * @name pascalprecht.translate.$translateProvider#translationNotFoundIndicatorLeft
             * @methodOf pascalprecht.translate.$translateProvider
             *
             * @description
             * Sets an indicator which is used when a translation isn't found left to the
             * translation id.
             *
             * @param {string} indicator An indicator.
             */
            this.translationNotFoundIndicatorLeft = function (indicator) {
                if (!indicator) {
                    return $notFoundIndicatorLeft;
                }
                $notFoundIndicatorLeft = indicator;
                return this;
            };

            /**
             * ngdoc function
             * @name pascalprecht.translate.$translateProvider#translationNotFoundIndicatorLeft
             * @methodOf pascalprecht.translate.$translateProvider
             *
             * @description
             * Sets an indicator which is used when a translation isn't found right to the
             * translation id.
             *
             * @param {string} indicator An indicator.
             */
            this.translationNotFoundIndicatorRight = function (indicator) {
                if (!indicator) {
                    return $notFoundIndicatorRight;
                }
                $notFoundIndicatorRight = indicator;
                return this;
            };

            /**
             * @ngdoc function
             * @name pascalprecht.translate.$translateProvider#fallbackLanguage
             * @methodOf pascalprecht.translate.$translateProvider
             *
             * @description
             * Tells the module which of the registered translation tables to use when missing translations
             * at initial startup by passing a language key. Similar to `$translateProvider#use`
             * only that it says which language to **fallback**.
             *
             * @param {string||array} langKey A language key.
             *
             */
            this.fallbackLanguage = function (langKey) {
                fallbackStack(langKey);
                return this;
            };

            var fallbackStack = function (langKey) {
                if (langKey) {
                    if (angular.isString(langKey)) {
                        $fallbackWasString = true;
                        $fallbackLanguage = [langKey];
                    } else if (angular.isArray(langKey)) {
                        $fallbackWasString = false;
                        $fallbackLanguage = langKey;
                    }
                    if (angular.isString($preferredLanguage) && indexOf($fallbackLanguage, $preferredLanguage) < 0) {
                        $fallbackLanguage.push($preferredLanguage);
                    }

                    return this;
                } else {
                    if ($fallbackWasString) {
                        return $fallbackLanguage[0];
                    } else {
                        return $fallbackLanguage;
                    }
                }
            };

            /**
             * @ngdoc function
             * @name pascalprecht.translate.$translateProvider#use
             * @methodOf pascalprecht.translate.$translateProvider
             *
             * @description
             * Set which translation table to use for translation by given language key. When
             * trying to 'use' a language which isn't provided, it'll throw an error.
             *
             * You actually don't have to use this method since `$translateProvider#preferredLanguage`
             * does the job too.
             *
             * @param {string} langKey A language key.
             */
            this.use = function (langKey) {
                if (langKey) {
                    if (!$translationTable[langKey] && (!$loaderFactory)) {
                        // only throw an error, when not loading translation data asynchronously
                        throw new Error('$translateProvider couldn\'t find translationTable for langKey: \'' + langKey + '\'');
                    }
                    $uses = langKey;
                    return this;
                }
                return $uses;
            };

            /**
             * @ngdoc function
             * @name pascalprecht.translate.$translateProvider#storageKey
             * @methodOf pascalprecht.translate.$translateProvider
             *
             * @description
             * Tells the module which key must represent the choosed language by a user in the storage.
             *
             * @param {string} key A key for the storage.
             */
            var storageKey = function (key) {
                if (!key) {
                    if ($storagePrefix) {
                        return $storagePrefix + $storageKey;
                    }
                    return $storageKey;
                }
                $storageKey = key;
                return this;
            };

            this.storageKey = storageKey;

            /**
             * @ngdoc function
             * @name pascalprecht.translate.$translateProvider#useUrlLoader
             * @methodOf pascalprecht.translate.$translateProvider
             *
             * @description
             * Tells angular-translate to use `$translateUrlLoader` extension service as loader.
             *
             * @param {string} url Url
             * @param {Object=} options Optional configuration object
             */
            this.useUrlLoader = function (url, options) {
                return this.useLoader('$translateUrlLoader', angular.extend({url: url}, options));
            };

            /**
             * @ngdoc function
             * @name pascalprecht.translate.$translateProvider#useStaticFilesLoader
             * @methodOf pascalprecht.translate.$translateProvider
             *
             * @description
             * Tells angular-translate to use `$translateStaticFilesLoader` extension service as loader.
             *
             * @param {Object=} options Optional configuration object
             */
            this.useStaticFilesLoader = function (options) {
                return this.useLoader('$translateStaticFilesLoader', options);
            };

            /**
             * @ngdoc function
             * @name pascalprecht.translate.$translateProvider#useLoader
             * @methodOf pascalprecht.translate.$translateProvider
             *
             * @description
             * Tells angular-translate to use any other service as loader.
             *
             * @param {string} loaderFactory Factory name to use
             * @param {Object=} options Optional configuration object
             */
            this.useLoader = function (loaderFactory, options) {
                $loaderFactory = loaderFactory;
                $loaderOptions = options || {};
                return this;
            };

            /**
             * @ngdoc function
             * @name pascalprecht.translate.$translateProvider#useLocalStorage
             * @methodOf pascalprecht.translate.$translateProvider
             *
             * @description
             * Tells angular-translate to use `$translateLocalStorage` service as storage layer.
             *
             */
            this.useLocalStorage = function () {
                return this.useStorage('$translateLocalStorage');
            };

            /**
             * @ngdoc function
             * @name pascalprecht.translate.$translateProvider#useCookieStorage
             * @methodOf pascalprecht.translate.$translateProvider
             *
             * @description
             * Tells angular-translate to use `$translateCookieStorage` service as storage layer.
             */
            this.useCookieStorage = function () {
                return this.useStorage('$translateCookieStorage');
            };

            /**
             * @ngdoc function
             * @name pascalprecht.translate.$translateProvider#useStorage
             * @methodOf pascalprecht.translate.$translateProvider
             *
             * @description
             * Tells angular-translate to use custom service as storage layer.
             */
            this.useStorage = function (storageFactory) {
                $storageFactory = storageFactory;
                return this;
            };

            /**
             * @ngdoc function
             * @name pascalprecht.translate.$translateProvider#storagePrefix
             * @methodOf pascalprecht.translate.$translateProvider
             *
             * @description
             * Sets prefix for storage key.
             *
             * @param {string} prefix Storage key prefix
             */
            this.storagePrefix = function (prefix) {
                if (!prefix) {
                    return prefix;
                }
                $storagePrefix = prefix;
                return this;
            };

            /**
             * @ngdoc function
             * @name pascalprecht.translate.$translateProvider#useMissingTranslationHandlerLog
             * @methodOf pascalprecht.translate.$translateProvider
             *
             * @description
             * Tells angular-translate to use built-in log handler when trying to translate
             * a translation Id which doesn't exist.
             *
             * This is actually a shortcut method for `useMissingTranslationHandler()`.
             *
             */
            this.useMissingTranslationHandlerLog = function () {
                return this.useMissingTranslationHandler('$translateMissingTranslationHandlerLog');
            };

            /**
             * @ngdoc function
             * @name pascalprecht.translate.$translateProvider#useMissingTranslationHandler
             * @methodOf pascalprecht.translate.$translateProvider
             *
             * @description
             * Expects a factory name which later gets instantiated with `$injector`.
             * This method can be used to tell angular-translate to use a custom
             * missingTranslationHandler. Just build a factory which returns a function
             * and expects a translation id as argument.
             *
             * Example:
             * <pre>
             *  app.config(function ($translateProvider) {
             *    $translateProvider.useMissingTranslationHandler('customHandler');
             *  });
             *
             *  app.factory('customHandler', function (dep1, dep2) {
             *    return function (translationId) {
             *      // something with translationId and dep1 and dep2
             *    };
             *  });
             * </pre>
             *
             * @param {string} factory Factory name
             */
            this.useMissingTranslationHandler = function (factory) {
                $missingTranslationHandlerFactory = factory;
                return this;
            };

            /**
             * @ngdoc function
             * @name pascalprecht.translate.$translateProvider#usePostCompiling
             * @methodOf pascalprecht.translate.$translateProvider
             *
             * @description
             * If post compiling is enabled, all translated values will be processed
             * again with AngularJS' $compile.
             *
             * Example:
             * <pre>
             *  app.config(function ($translateProvider) {
             *    $translateProvider.usePostCompiling(true);
             *  });
             * </pre>
             *
             * @param {string} factory Factory name
             */
            this.usePostCompiling = function (value) {
                $postCompilingEnabled = !(!value);
                return this;
            };

            /**
             * @ngdoc function
             * @name pascalprecht.translate.$translateProvider#forceAsyncReload
             * @methodOf pascalprecht.translate.$translateProvider
             *
             * @description
             * If force async reload is enabled, async loader will always be called
             * even if $translationTable already contains the language key, adding
             * possible new entries to the $translationTable.
             *
             * Example:
             * <pre>
             *  app.config(function ($translateProvider) {
             *    $translateProvider.forceAsyncReload(true);
             *  });
             * </pre>
             *
             * @param {boolean} value - valid values are true or false
             */
            this.forceAsyncReload = function (value) {
                $forceAsyncReloadEnabled = !(!value);
                return this;
            };

            /**
             * @ngdoc function
             * @name pascalprecht.translate.$translateProvider#uniformLanguageTag
             * @methodOf pascalprecht.translate.$translateProvider
             *
             * @description
             * Tells angular-translate which language tag should be used as a result when determining
             * the current browser language.
             *
             * This setting must be set before invoking {@link pascalprecht.translate.$translateProvider#methods_determinePreferredLanguage determinePreferredLanguage()}.
             *
             * <pre>
             * $translateProvider
             *   .uniformLanguageTag('bcp47')
             *   .determinePreferredLanguage()
             * </pre>
             *
             * The resolver currently supports:
             * * default
             *     (traditionally: hyphens will be converted into underscores, i.e. en-US => en_US)
             *     en-US => en_US
             *     en_US => en_US
             *     en-us => en_us
             * * java
             *     like default, but the second part will be always in uppercase
             *     en-US => en_US
             *     en_US => en_US
             *     en-us => en_US
             * * BCP 47 (RFC 4646 & 4647)
             *     en-US => en-US
             *     en_US => en-US
             *     en-us => en-US
             *
             * See also:
             * * http://en.wikipedia.org/wiki/IETF_language_tag
             * * http://www.w3.org/International/core/langtags/
             * * http://tools.ietf.org/html/bcp47
             *
             * @param {string|object} options - options (or standard)
             * @param {string} options.standard - valid values are 'default', 'bcp47', 'java'
             */
            this.uniformLanguageTag = function (options) {

                if (!options) {
                    options = {};
                } else if (angular.isString(options)) {
                    options = {
                        standard: options
                    };
                }

                uniformLanguageTagResolver = options.standard;

                return this;
            };

            /**
             * @ngdoc function
             * @name pascalprecht.translate.$translateProvider#determinePreferredLanguage
             * @methodOf pascalprecht.translate.$translateProvider
             *
             * @description
             * Tells angular-translate to try to determine on its own which language key
             * to set as preferred language. When `fn` is given, angular-translate uses it
             * to determine a language key, otherwise it uses the built-in `getLocale()`
             * method.
             *
             * The `getLocale()` returns a language key in the format `[lang]_[country]` or
             * `[lang]` depending on what the browser provides.
             *
             * Use this method at your own risk, since not all browsers return a valid
             * locale (see {@link pascalprecht.translate.$translateProvider#methods_uniformLanguageTag uniformLanguageTag()}).
             *
             * @param {Function=} fn Function to determine a browser's locale
             */
            this.determinePreferredLanguage = function (fn) {

                var locale = (fn && angular.isFunction(fn)) ? fn() : getLocale();

                if (!$availableLanguageKeys.length) {
                    $preferredLanguage = locale;
                } else {
                    $preferredLanguage = negotiateLocale(locale);
                }

                return this;
            };

            /**
             * @ngdoc function
             * @name pascalprecht.translate.$translateProvider#registerAvailableLanguageKeys
             * @methodOf pascalprecht.translate.$translateProvider
             *
             * @description
             * Registers a set of language keys the app will work with. Use this method in
             * combination with
             * {@link pascalprecht.translate.$translateProvider#determinePreferredLanguage determinePreferredLanguage}.
             * When available languages keys are registered, angular-translate
             * tries to find the best fitting language key depending on the browsers locale,
             * considering your language key convention.
             *
             * @param {object} languageKeys Array of language keys the your app will use
             * @param {object=} aliases Alias map.
             */
            this.registerAvailableLanguageKeys = function (languageKeys, aliases) {
                if (languageKeys) {
                    $availableLanguageKeys = languageKeys;
                    if (aliases) {
                        $languageKeyAliases = aliases;
                    }
                    return this;
                }
                return $availableLanguageKeys;
            };

            /**
             * @ngdoc function
             * @name pascalprecht.translate.$translateProvider#useLoaderCache
             * @methodOf pascalprecht.translate.$translateProvider
             *
             * @description
             * Registers a cache for internal $http based loaders.
             * {@link pascalprecht.translate.$translateProvider#determinePreferredLanguage determinePreferredLanguage}.
             * When false the cache will be disabled (default). When true or undefined
             * the cache will be a default (see $cacheFactory). When an object it will
             * be treat as a cache object itself: the usage is $http({cache: cache})
             *
             * @param {object} cache boolean, string or cache-object
             */
            this.useLoaderCache = function (cache) {
                if (cache === false) {
                    // disable cache
                    loaderCache = undefined;
                } else if (cache === true) {
                    // enable cache using AJS defaults
                    loaderCache = true;
                } else if (typeof(cache) === 'undefined') {
                    // enable cache using default
                    loaderCache = '$translationCache';
                } else if (cache) {
                    // enable cache using given one (see $cacheFactory)
                    loaderCache = cache;
                }
                return this;
            };

            /**
             * @ngdoc function
             * @name pascalprecht.translate.$translateProvider#directivePriority
             * @methodOf pascalprecht.translate.$translateProvider
             *
             * @description
             * Sets the default priority of the translate directive. The standard value is `0`.
             * Calling this function without an argument will return the current value.
             *
             * @param {number} priority for the translate-directive
             */
            this.directivePriority = function (priority) {
                if (priority === undefined) {
                    // getter
                    return directivePriority;
                } else {
                    // setter with chaining
                    directivePriority = priority;
                    return this;
                }
            };

            /**
             * @ngdoc function
             * @name pascalprecht.translate.$translateProvider#statefulFilter
             * @methodOf pascalprecht.translate.$translateProvider
             *
             * @description
             * Since AngularJS 1.3, filters which are not stateless (depending at the scope)
             * have to explicit define this behavior.
             * Sets whether the translate filter should be stateful or stateless. The standard value is `true`
             * meaning being stateful.
             * Calling this function without an argument will return the current value.
             *
             * @param {boolean} state - defines the state of the filter
             */
            this.statefulFilter = function (state) {
                if (state === undefined) {
                    // getter
                    return statefulFilter;
                } else {
                    // setter with chaining
                    statefulFilter = state;
                    return this;
                }
            };

            /**
             * @ngdoc object
             * @name pascalprecht.translate.$translate
             * @requires $interpolate
             * @requires $log
             * @requires $rootScope
             * @requires $q
             *
             * @description
             * The `$translate` service is the actual core of angular-translate. It expects a translation id
             * and optional interpolate parameters to translate contents.
             *
             * <pre>
             *  $translate('HEADLINE_TEXT').then(function (translation) {
             *    $scope.translatedText = translation;
             *  });
             * </pre>
             *
             * @param {string|array} translationId A token which represents a translation id
             *                                     This can be optionally an array of translation ids which
             *                                     results that the function returns an object where each key
             *                                     is the translation id and the value the translation.
             * @param {object=} interpolateParams An object hash for dynamic values
             * @param {string} interpolationId The id of the interpolation to use
             * @returns {object} promise
             */
            this.$get = [
                '$log',
                '$injector',
                '$rootScope',
                '$q',
                function ($log, $injector, $rootScope, $q) {

                    var Storage,
                        defaultInterpolator = $injector.get($interpolationFactory || '$translateDefaultInterpolation'),
                        pendingLoader = false,
                        interpolatorHashMap = {},
                        langPromises = {},
                        fallbackIndex,
                        startFallbackIteration;

                    var $translate = function (translationId, interpolateParams, interpolationId, defaultTranslationText) {

                        // Duck detection: If the first argument is an array, a bunch of translations was requested.
                        // The result is an object.
                        if (angular.isArray(translationId)) {
                            // Inspired by Q.allSettled by Kris Kowal
                            // https://github.com/kriskowal/q/blob/b0fa72980717dc202ffc3cbf03b936e10ebbb9d7/q.js#L1553-1563
                            // This transforms all promises regardless resolved or rejected
                            var translateAll = function (translationIds) {
                                var results = {}; // storing the actual results
                                var promises = []; // promises to wait for
                                // Wraps the promise a) being always resolved and b) storing the link id->value
                                var translate = function (translationId) {
                                    var deferred = $q.defer();
                                    var regardless = function (value) {
                                        results[translationId] = value;
                                        deferred.resolve([translationId, value]);
                                    };
                                    // we don't care whether the promise was resolved or rejected; just store the values
                                    $translate(translationId, interpolateParams, interpolationId, defaultTranslationText).then(regardless, regardless);
                                    return deferred.promise;
                                };
                                for (var i = 0, c = translationIds.length; i < c; i++) {
                                    promises.push(translate(translationIds[i]));
                                }
                                // wait for all (including storing to results)
                                return $q.all(promises).then(function () {
                                    // return the results
                                    return results;
                                });
                            };
                            return translateAll(translationId);
                        }

                        var deferred = $q.defer();

                        // trim off any whitespace
                        if (translationId) {
                            translationId = trim.apply(translationId);
                        }

                        var promiseToWaitFor = (function () {
                            var promise = $preferredLanguage ?
                                langPromises[$preferredLanguage] :
                                langPromises[$uses];

                            fallbackIndex = 0;

                            if ($storageFactory && !promise) {
                                // looks like there's no pending promise for $preferredLanguage or
                                // $uses. Maybe there's one pending for a language that comes from
                                // storage.
                                var langKey = Storage.get($storageKey);
                                promise = langPromises[langKey];

                                if ($fallbackLanguage && $fallbackLanguage.length) {
                                    var index = indexOf($fallbackLanguage, langKey);
                                    // maybe the language from storage is also defined as fallback language
                                    // we increase the fallback language index to not search in that language
                                    // as fallback, since it's probably the first used language
                                    // in that case the index starts after the first element
                                    fallbackIndex = (index === 0) ? 1 : 0;

                                    // but we can make sure to ALWAYS fallback to preferred language at least
                                    if (indexOf($fallbackLanguage, $preferredLanguage) < 0) {
                                        $fallbackLanguage.push($preferredLanguage);
                                    }
                                }
                            }
                            return promise;
                        }());

                        if (!promiseToWaitFor) {
                            // no promise to wait for? okay. Then there's no loader registered
                            // nor is a one pending for language that comes from storage.
                            // We can just translate.
                            determineTranslation(translationId, interpolateParams, interpolationId, defaultTranslationText).then(deferred.resolve, deferred.reject);
                        } else {
                            var promiseResolved = function () {
                                determineTranslation(translationId, interpolateParams, interpolationId, defaultTranslationText).then(deferred.resolve, deferred.reject);
                            };
                            promiseResolved.displayName = 'promiseResolved';

                            promiseToWaitFor['finally'](promiseResolved, deferred.reject);
                        }
                        return deferred.promise;
                    };

                    /**
                     * @name applyNotFoundIndicators
                     * @private
                     *
                     * @description
                     * Applies not fount indicators to given translation id, if needed.
                     * This function gets only executed, if a translation id doesn't exist,
                     * which is why a translation id is expected as argument.
                     *
                     * @param {string} translationId Translation id.
                     * @returns {string} Same as given translation id but applied with not found
                     * indicators.
                     */
                    var applyNotFoundIndicators = function (translationId) {
                        // applying notFoundIndicators
                        if ($notFoundIndicatorLeft) {
                            translationId = [$notFoundIndicatorLeft, translationId].join(' ');
                        }
                        if ($notFoundIndicatorRight) {
                            translationId = [translationId, $notFoundIndicatorRight].join(' ');
                        }
                        return translationId;
                    };

                    /**
                     * @name useLanguage
                     * @private
                     *
                     * @description
                     * Makes actual use of a language by setting a given language key as used
                     * language and informs registered interpolators to also use the given
                     * key as locale.
                     *
                     * @param {key} Locale key.
                     */
                    var useLanguage = function (key) {
                        $uses = key;
                        $rootScope.$emit('$translateChangeSuccess', {language: key});

                        if ($storageFactory) {
                            Storage.put($translate.storageKey(), $uses);
                        }
                        // inform default interpolator
                        defaultInterpolator.setLocale($uses);

                        var eachInterpolator = function (interpolator, id) {
                            interpolatorHashMap[id].setLocale($uses);
                        };
                        eachInterpolator.displayName = 'eachInterpolatorLocaleSetter';

                        // inform all others too!
                        angular.forEach(interpolatorHashMap, eachInterpolator);
                        $rootScope.$emit('$translateChangeEnd', {language: key});
                    };

                    /**
                     * @name loadAsync
                     * @private
                     *
                     * @description
                     * Kicks of registered async loader using `$injector` and applies existing
                     * loader options. When resolved, it updates translation tables accordingly
                     * or rejects with given language key.
                     *
                     * @param {string} key Language key.
                     * @return {Promise} A promise.
                     */
                    var loadAsync = function (key) {
                        if (!key) {
                            throw 'No language key specified for loading.';
                        }

                        var deferred = $q.defer();

                        $rootScope.$emit('$translateLoadingStart', {language: key});
                        pendingLoader = true;

                        var cache = loaderCache;
                        if (typeof(cache) === 'string') {
                            // getting on-demand instance of loader
                            cache = $injector.get(cache);
                        }

                        var loaderOptions = angular.extend({}, $loaderOptions, {
                            key: key,
                            $http: angular.extend({}, {
                                cache: cache
                            }, $loaderOptions.$http)
                        });

                        var onLoaderSuccess = function (data) {
                            var translationTable = {};
                            $rootScope.$emit('$translateLoadingSuccess', {language: key});

                            if (angular.isArray(data)) {
                                angular.forEach(data, function (table) {
                                    angular.extend(translationTable, flatObject(table));
                                });
                            } else {
                                angular.extend(translationTable, flatObject(data));
                            }
                            pendingLoader = false;
                            deferred.resolve({
                                key: key,
                                table: translationTable
                            });
                            $rootScope.$emit('$translateLoadingEnd', {language: key});
                        };
                        onLoaderSuccess.displayName = 'onLoaderSuccess';

                        var onLoaderError = function (key) {
                            $rootScope.$emit('$translateLoadingError', {language: key});
                            deferred.reject(key);
                            $rootScope.$emit('$translateLoadingEnd', {language: key});
                        };
                        onLoaderError.displayName = 'onLoaderError';

                        $injector.get($loaderFactory)(loaderOptions)
                            .then(onLoaderSuccess, onLoaderError);

                        return deferred.promise;
                    };

                    if ($storageFactory) {
                        Storage = $injector.get($storageFactory);

                        if (!Storage.get || !Storage.put) {
                            throw new Error('Couldn\'t use storage \'' + $storageFactory + '\', missing get() or put() method!');
                        }
                    }

                    // if we have additional interpolations that were added via
                    // $translateProvider.addInterpolation(), we have to map'em
                    if ($interpolatorFactories.length) {
                        var eachInterpolationFactory = function (interpolatorFactory) {
                            var interpolator = $injector.get(interpolatorFactory);
                            // setting initial locale for each interpolation service
                            interpolator.setLocale($preferredLanguage || $uses);
                            // make'em recognizable through id
                            interpolatorHashMap[interpolator.getInterpolationIdentifier()] = interpolator;
                        };
                        eachInterpolationFactory.displayName = 'interpolationFactoryAdder';

                        angular.forEach($interpolatorFactories, eachInterpolationFactory);
                    }

                    /**
                     * @name getTranslationTable
                     * @private
                     *
                     * @description
                     * Returns a promise that resolves to the translation table
                     * or is rejected if an error occurred.
                     *
                     * @param langKey
                     * @returns {Q.promise}
                     */
                    var getTranslationTable = function (langKey) {
                        var deferred = $q.defer();
                        if (Object.prototype.hasOwnProperty.call($translationTable, langKey)) {
                            deferred.resolve($translationTable[langKey]);
                        } else if (langPromises[langKey]) {
                            var onResolve = function (data) {
                                translations(data.key, data.table);
                                deferred.resolve(data.table);
                            };
                            onResolve.displayName = 'translationTableResolver';
                            langPromises[langKey].then(onResolve, deferred.reject);
                        } else {
                            deferred.reject();
                        }
                        return deferred.promise;
                    };

                    /**
                     * @name getFallbackTranslation
                     * @private
                     *
                     * @description
                     * Returns a promise that will resolve to the translation
                     * or be rejected if no translation was found for the language.
                     * This function is currently only used for fallback language translation.
                     *
                     * @param langKey The language to translate to.
                     * @param translationId
                     * @param interpolateParams
                     * @param Interpolator
                     * @returns {Q.promise}
                     */
                    var getFallbackTranslation = function (langKey, translationId, interpolateParams, Interpolator) {
                        var deferred = $q.defer();

                        var onResolve = function (translationTable) {
                            if (Object.prototype.hasOwnProperty.call(translationTable, translationId)) {
                                Interpolator.setLocale(langKey);
                                var translation = translationTable[translationId];
                                if (translation.substr(0, 2) === '@:') {
                                    getFallbackTranslation(langKey, translation.substr(2), interpolateParams, Interpolator)
                                        .then(deferred.resolve, deferred.reject);
                                } else {
                                    deferred.resolve(Interpolator.interpolate(translationTable[translationId], interpolateParams));
                                }
                                Interpolator.setLocale($uses);
                            } else {
                                deferred.reject();
                            }
                        };
                        onResolve.displayName = 'fallbackTranslationResolver';

                        getTranslationTable(langKey).then(onResolve, deferred.reject);

                        return deferred.promise;
                    };

                    /**
                     * @name getFallbackTranslationInstant
                     * @private
                     *
                     * @description
                     * Returns a translation
                     * This function is currently only used for fallback language translation.
                     *
                     * @param langKey The language to translate to.
                     * @param translationId
                     * @param interpolateParams
                     * @param Interpolator
                     * @returns {string} translation
                     */
                    var getFallbackTranslationInstant = function (langKey, translationId, interpolateParams, Interpolator) {
                        var result, translationTable = $translationTable[langKey];

                        if (translationTable && Object.prototype.hasOwnProperty.call(translationTable, translationId)) {
                            Interpolator.setLocale(langKey);
                            result = Interpolator.interpolate(translationTable[translationId], interpolateParams);
                            if (result.substr(0, 2) === '@:') {
                                return getFallbackTranslationInstant(langKey, result.substr(2), interpolateParams, Interpolator);
                            }
                            Interpolator.setLocale($uses);
                        }

                        return result;
                    };


                    /**
                     * @name translateByHandler
                     * @private
                     *
                     * Translate by missing translation handler.
                     *
                     * @param translationId
                     * @returns translation created by $missingTranslationHandler or translationId is $missingTranslationHandler is
                     * absent
                     */
                    var translateByHandler = function (translationId, interpolateParams) {
                        // If we have a handler factory - we might also call it here to determine if it provides
                        // a default text for a translationid that can't be found anywhere in our tables
                        if ($missingTranslationHandlerFactory) {
                            var resultString = $injector.get($missingTranslationHandlerFactory)(translationId, $uses, interpolateParams);
                            if (resultString !== undefined) {
                                return resultString;
                            } else {
                                return translationId;
                            }
                        } else {
                            return translationId;
                        }
                    };

                    /**
                     * @name resolveForFallbackLanguage
                     * @private
                     *
                     * Recursive helper function for fallbackTranslation that will sequentially look
                     * for a translation in the fallbackLanguages starting with fallbackLanguageIndex.
                     *
                     * @param fallbackLanguageIndex
                     * @param translationId
                     * @param interpolateParams
                     * @param Interpolator
                     * @returns {Q.promise} Promise that will resolve to the translation.
                     */
                    var resolveForFallbackLanguage = function (fallbackLanguageIndex, translationId, interpolateParams, Interpolator, defaultTranslationText) {
                        var deferred = $q.defer();

                        if (fallbackLanguageIndex < $fallbackLanguage.length) {
                            var langKey = $fallbackLanguage[fallbackLanguageIndex];
                            getFallbackTranslation(langKey, translationId, interpolateParams, Interpolator).then(
                                deferred.resolve,
                                function () {
                                    // Look in the next fallback language for a translation.
                                    // It delays the resolving by passing another promise to resolve.
                                    resolveForFallbackLanguage(fallbackLanguageIndex + 1, translationId, interpolateParams, Interpolator, defaultTranslationText).then(deferred.resolve);
                                }
                            );
                        } else {
                            // No translation found in any fallback language
                            // if a default translation text is set in the directive, then return this as a result
                            if (defaultTranslationText) {
                                deferred.resolve(defaultTranslationText);
                            } else {
                                // if no default translation is set and an error handler is defined, send it to the handler
                                // and then return the result
                                deferred.resolve(translateByHandler(translationId, interpolateParams));
                            }
                        }
                        return deferred.promise;
                    };

                    /**
                     * @name resolveForFallbackLanguageInstant
                     * @private
                     *
                     * Recursive helper function for fallbackTranslation that will sequentially look
                     * for a translation in the fallbackLanguages starting with fallbackLanguageIndex.
                     *
                     * @param fallbackLanguageIndex
                     * @param translationId
                     * @param interpolateParams
                     * @param Interpolator
                     * @returns {string} translation
                     */
                    var resolveForFallbackLanguageInstant = function (fallbackLanguageIndex, translationId, interpolateParams, Interpolator) {
                        var result;

                        if (fallbackLanguageIndex < $fallbackLanguage.length) {
                            var langKey = $fallbackLanguage[fallbackLanguageIndex];
                            result = getFallbackTranslationInstant(langKey, translationId, interpolateParams, Interpolator);
                            if (!result) {
                                result = resolveForFallbackLanguageInstant(fallbackLanguageIndex + 1, translationId, interpolateParams, Interpolator);
                            }
                        }
                        return result;
                    };

                    /**
                     * Translates with the usage of the fallback languages.
                     *
                     * @param translationId
                     * @param interpolateParams
                     * @param Interpolator
                     * @returns {Q.promise} Promise, that resolves to the translation.
                     */
                    var fallbackTranslation = function (translationId, interpolateParams, Interpolator, defaultTranslationText) {
                        // Start with the fallbackLanguage with index 0
                        return resolveForFallbackLanguage((startFallbackIteration > 0 ? startFallbackIteration : fallbackIndex), translationId, interpolateParams, Interpolator, defaultTranslationText);
                    };

                    /**
                     * Translates with the usage of the fallback languages.
                     *
                     * @param translationId
                     * @param interpolateParams
                     * @param Interpolator
                     * @returns {String} translation
                     */
                    var fallbackTranslationInstant = function (translationId, interpolateParams, Interpolator) {
                        // Start with the fallbackLanguage with index 0
                        return resolveForFallbackLanguageInstant((startFallbackIteration > 0 ? startFallbackIteration : fallbackIndex), translationId, interpolateParams, Interpolator);
                    };

                    var determineTranslation = function (translationId, interpolateParams, interpolationId, defaultTranslationText) {

                        var deferred = $q.defer();

                        var table = $uses ? $translationTable[$uses] : $translationTable,
                            Interpolator = (interpolationId) ? interpolatorHashMap[interpolationId] : defaultInterpolator;

                        // if the translation id exists, we can just interpolate it
                        if (table && Object.prototype.hasOwnProperty.call(table, translationId)) {
                            var translation = table[translationId];

                            // If using link, rerun $translate with linked translationId and return it
                            if (translation.substr(0, 2) === '@:') {

                                $translate(translation.substr(2), interpolateParams, interpolationId, defaultTranslationText)
                                    .then(deferred.resolve, deferred.reject);
                            } else {
                                deferred.resolve(Interpolator.interpolate(translation, interpolateParams));
                            }
                        } else {
                            var missingTranslationHandlerTranslation;
                            // for logging purposes only (as in $translateMissingTranslationHandlerLog), value is not returned to promise
                            if ($missingTranslationHandlerFactory && !pendingLoader) {
                                missingTranslationHandlerTranslation = translateByHandler(translationId, interpolateParams);
                            }

                            // since we couldn't translate the inital requested translation id,
                            // we try it now with one or more fallback languages, if fallback language(s) is
                            // configured.
                            if ($uses && $fallbackLanguage && $fallbackLanguage.length) {
                                fallbackTranslation(translationId, interpolateParams, Interpolator, defaultTranslationText)
                                    .then(function (translation) {
                                        deferred.resolve(translation);
                                    }, function (_translationId) {
                                        deferred.reject(applyNotFoundIndicators(_translationId));
                                    });
                            } else if ($missingTranslationHandlerFactory && !pendingLoader && missingTranslationHandlerTranslation) {
                                // looks like the requested translation id doesn't exists.
                                // Now, if there is a registered handler for missing translations and no
                                // asyncLoader is pending, we execute the handler
                                if (defaultTranslationText) {
                                    deferred.resolve(defaultTranslationText);
                                } else {
                                    deferred.resolve(missingTranslationHandlerTranslation);
                                }
                            } else {
                                if (defaultTranslationText) {
                                    deferred.resolve(defaultTranslationText);
                                } else {
                                    deferred.reject(applyNotFoundIndicators(translationId));
                                }
                            }
                        }
                        return deferred.promise;
                    };

                    var determineTranslationInstant = function (translationId, interpolateParams, interpolationId) {

                        var result, table = $uses ? $translationTable[$uses] : $translationTable,
                            Interpolator = defaultInterpolator;

                        // if the interpolation id exists use custom interpolator
                        if (interpolatorHashMap && Object.prototype.hasOwnProperty.call(interpolatorHashMap, interpolationId)) {
                            Interpolator = interpolatorHashMap[interpolationId];
                        }

                        // if the translation id exists, we can just interpolate it
                        if (table && Object.prototype.hasOwnProperty.call(table, translationId)) {
                            var translation = table[translationId];

                            // If using link, rerun $translate with linked translationId and return it
                            if (translation.substr(0, 2) === '@:') {
                                result = determineTranslationInstant(translation.substr(2), interpolateParams, interpolationId);
                            } else {
                                result = Interpolator.interpolate(translation, interpolateParams);
                            }
                        } else {
                            var missingTranslationHandlerTranslation;
                            // for logging purposes only (as in $translateMissingTranslationHandlerLog), value is not returned to promise
                            if ($missingTranslationHandlerFactory && !pendingLoader) {
                                missingTranslationHandlerTranslation = translateByHandler(translationId, interpolateParams);
                            }

                            // since we couldn't translate the inital requested translation id,
                            // we try it now with one or more fallback languages, if fallback language(s) is
                            // configured.
                            if ($uses && $fallbackLanguage && $fallbackLanguage.length) {
                                fallbackIndex = 0;
                                result = fallbackTranslationInstant(translationId, interpolateParams, Interpolator);
                            } else if ($missingTranslationHandlerFactory && !pendingLoader && missingTranslationHandlerTranslation) {
                                // looks like the requested translation id doesn't exists.
                                // Now, if there is a registered handler for missing translations and no
                                // asyncLoader is pending, we execute the handler
                                result = missingTranslationHandlerTranslation;
                            } else {
                                result = applyNotFoundIndicators(translationId);
                            }
                        }

                        return result;
                    };

                    var clearNextLangAndPromise = function (key) {
                        if ($nextLang === key) {
                            $nextLang = undefined;
                        }
                        langPromises[key] = undefined;
                    };

                    /**
                     * @ngdoc function
                     * @name pascalprecht.translate.$translate#preferredLanguage
                     * @methodOf pascalprecht.translate.$translate
                     *
                     * @description
                     * Returns the language key for the preferred language.
                     *
                     * @param {string} langKey language String or Array to be used as preferredLanguage (changing at runtime)
                     *
                     * @return {string} preferred language key
                     */
                    $translate.preferredLanguage = function (langKey) {
                        if (langKey) {
                            setupPreferredLanguage(langKey);
                        }
                        return $preferredLanguage;
                    };

                    /**
                     * @ngdoc function
                     * @name pascalprecht.translate.$translate#cloakClassName
                     * @methodOf pascalprecht.translate.$translate
                     *
                     * @description
                     * Returns the configured class name for `translate-cloak` directive.
                     *
                     * @return {string} cloakClassName
                     */
                    $translate.cloakClassName = function () {
                        return $cloakClassName;
                    };

                    /**
                     * @ngdoc function
                     * @name pascalprecht.translate.$translate#fallbackLanguage
                     * @methodOf pascalprecht.translate.$translate
                     *
                     * @description
                     * Returns the language key for the fallback languages or sets a new fallback stack.
                     *
                     * @param {string=} langKey language String or Array of fallback languages to be used (to change stack at runtime)
                     *
                     * @return {string||array} fallback language key
                     */
                    $translate.fallbackLanguage = function (langKey) {
                        if (langKey !== undefined && langKey !== null) {
                            fallbackStack(langKey);

                            // as we might have an async loader initiated and a new translation language might have been defined
                            // we need to add the promise to the stack also. So - iterate.
                            if ($loaderFactory) {
                                if ($fallbackLanguage && $fallbackLanguage.length) {
                                    for (var i = 0, len = $fallbackLanguage.length; i < len; i++) {
                                        if (!langPromises[$fallbackLanguage[i]]) {
                                            langPromises[$fallbackLanguage[i]] = loadAsync($fallbackLanguage[i]);
                                        }
                                    }
                                }
                            }
                            $translate.use($translate.use());
                        }
                        if ($fallbackWasString) {
                            return $fallbackLanguage[0];
                        } else {
                            return $fallbackLanguage;
                        }

                    };

                    /**
                     * @ngdoc function
                     * @name pascalprecht.translate.$translate#useFallbackLanguage
                     * @methodOf pascalprecht.translate.$translate
                     *
                     * @description
                     * Sets the first key of the fallback language stack to be used for translation.
                     * Therefore all languages in the fallback array BEFORE this key will be skipped!
                     *
                     * @param {string=} langKey Contains the langKey the iteration shall start with. Set to false if you want to
                     * get back to the whole stack
                     */
                    $translate.useFallbackLanguage = function (langKey) {
                        if (langKey !== undefined && langKey !== null) {
                            if (!langKey) {
                                startFallbackIteration = 0;
                            } else {
                                var langKeyPosition = indexOf($fallbackLanguage, langKey);
                                if (langKeyPosition > -1) {
                                    startFallbackIteration = langKeyPosition;
                                }
                            }

                        }

                    };

                    /**
                     * @ngdoc function
                     * @name pascalprecht.translate.$translate#proposedLanguage
                     * @methodOf pascalprecht.translate.$translate
                     *
                     * @description
                     * Returns the language key of language that is currently loaded asynchronously.
                     *
                     * @return {string} language key
                     */
                    $translate.proposedLanguage = function () {
                        return $nextLang;
                    };

                    /**
                     * @ngdoc function
                     * @name pascalprecht.translate.$translate#storage
                     * @methodOf pascalprecht.translate.$translate
                     *
                     * @description
                     * Returns registered storage.
                     *
                     * @return {object} Storage
                     */
                    $translate.storage = function () {
                        return Storage;
                    };

                    /**
                     * @ngdoc function
                     * @name pascalprecht.translate.$translate#use
                     * @methodOf pascalprecht.translate.$translate
                     *
                     * @description
                     * Tells angular-translate which language to use by given language key. This method is
                     * used to change language at runtime. It also takes care of storing the language
                     * key in a configured store to let your app remember the choosed language.
                     *
                     * When trying to 'use' a language which isn't available it tries to load it
                     * asynchronously with registered loaders.
                     *
                     * Returns promise object with loaded language file data
                     * @example
                     * $translate.use("en_US").then(function(data){
                     *   $scope.text = $translate("HELLO");
                     * });
                     *
                     * @param {string} key Language key
                     * @return {string} Language key
                     */
                    $translate.use = function (key) {
                        if (!key) {
                            return $uses;
                        }

                        var deferred = $q.defer();

                        $rootScope.$emit('$translateChangeStart', {language: key});

                        // Try to get the aliased language key
                        var aliasedKey = negotiateLocale(key);
                        if (aliasedKey) {
                            key = aliasedKey;
                        }

                        // if there isn't a translation table for the language we've requested,
                        // we load it asynchronously
                        if (($forceAsyncReloadEnabled || !$translationTable[key]) && $loaderFactory && !langPromises[key]) {
                            $nextLang = key;
                            langPromises[key] = loadAsync(key).then(function (translation) {
                                translations(translation.key, translation.table);
                                deferred.resolve(translation.key);
                                useLanguage(translation.key);
                                return translation;
                            }, function (key) {
                                $rootScope.$emit('$translateChangeError', {language: key});
                                deferred.reject(key);
                                $rootScope.$emit('$translateChangeEnd', {language: key});
                                return $q.reject(key);
                            });
                            langPromises[key]['finally'](function () {
                                clearNextLangAndPromise(key);
                            });
                        } else if ($nextLang === key && langPromises[key]) {
                            // we are already loading this asynchronously
                            // resolve our new deferred when the old langPromise is resolved
                            langPromises[key].then(function (translation) {
                                deferred.resolve(translation.key);
                                return translation;
                            }, function (key) {
                                deferred.reject(key);
                                return $q.reject(key);
                            });
                        } else {
                            deferred.resolve(key);
                            useLanguage(key);
                        }

                        return deferred.promise;
                    };

                    /**
                     * @ngdoc function
                     * @name pascalprecht.translate.$translate#storageKey
                     * @methodOf pascalprecht.translate.$translate
                     *
                     * @description
                     * Returns the key for the storage.
                     *
                     * @return {string} storage key
                     */
                    $translate.storageKey = function () {
                        return storageKey();
                    };

                    /**
                     * @ngdoc function
                     * @name pascalprecht.translate.$translate#isPostCompilingEnabled
                     * @methodOf pascalprecht.translate.$translate
                     *
                     * @description
                     * Returns whether post compiling is enabled or not
                     *
                     * @return {bool} storage key
                     */
                    $translate.isPostCompilingEnabled = function () {
                        return $postCompilingEnabled;
                    };

                    /**
                     * @ngdoc function
                     * @name pascalprecht.translate.$translate#isForceAsyncReloadEnabled
                     * @methodOf pascalprecht.translate.$translate
                     *
                     * @description
                     * Returns whether force async reload is enabled or not
                     *
                     * @return {boolean} forceAsyncReload value
                     */
                    $translate.isForceAsyncReloadEnabled = function () {
                        return $forceAsyncReloadEnabled;
                    };

                    /**
                     * @ngdoc function
                     * @name pascalprecht.translate.$translate#refresh
                     * @methodOf pascalprecht.translate.$translate
                     *
                     * @description
                     * Refreshes a translation table pointed by the given langKey. If langKey is not specified,
                     * the module will drop all existent translation tables and load new version of those which
                     * are currently in use.
                     *
                     * Refresh means that the module will drop target translation table and try to load it again.
                     *
                     * In case there are no loaders registered the refresh() method will throw an Error.
                     *
                     * If the module is able to refresh translation tables refresh() method will broadcast
                     * $translateRefreshStart and $translateRefreshEnd events.
                     *
                     * @example
                     * // this will drop all currently existent translation tables and reload those which are
                     * // currently in use
                     * $translate.refresh();
                     * // this will refresh a translation table for the en_US language
                     * $translate.refresh('en_US');
                     *
                     * @param {string} langKey A language key of the table, which has to be refreshed
                     *
                     * @return {promise} Promise, which will be resolved in case a translation tables refreshing
                     * process is finished successfully, and reject if not.
                     */
                    $translate.refresh = function (langKey) {
                        if (!$loaderFactory) {
                            throw new Error('Couldn\'t refresh translation table, no loader registered!');
                        }

                        var deferred = $q.defer();

                        function resolve() {
                            deferred.resolve();
                            $rootScope.$emit('$translateRefreshEnd', {language: langKey});
                        }

                        function reject() {
                            deferred.reject();
                            $rootScope.$emit('$translateRefreshEnd', {language: langKey});
                        }

                        $rootScope.$emit('$translateRefreshStart', {language: langKey});

                        if (!langKey) {
                            // if there's no language key specified we refresh ALL THE THINGS!
                            var tables = [], loadingKeys = {};

                            // reload registered fallback languages
                            if ($fallbackLanguage && $fallbackLanguage.length) {
                                for (var i = 0, len = $fallbackLanguage.length; i < len; i++) {
                                    tables.push(loadAsync($fallbackLanguage[i]));
                                    loadingKeys[$fallbackLanguage[i]] = true;
                                }
                            }

                            // reload currently used language
                            if ($uses && !loadingKeys[$uses]) {
                                tables.push(loadAsync($uses));
                            }

                            var allTranslationsLoaded = function (tableData) {
                                $translationTable = {};
                                angular.forEach(tableData, function (data) {
                                    translations(data.key, data.table);
                                });
                                if ($uses) {
                                    useLanguage($uses);
                                }
                                resolve();
                            };
                            allTranslationsLoaded.displayName = 'refreshPostProcessor';

                            $q.all(tables).then(allTranslationsLoaded, reject);

                        } else if ($translationTable[langKey]) {

                            var oneTranslationsLoaded = function (data) {
                                translations(data.key, data.table);
                                if (langKey === $uses) {
                                    useLanguage($uses);
                                }
                                resolve();
                            };
                            oneTranslationsLoaded.displayName = 'refreshPostProcessor';

                            loadAsync(langKey).then(oneTranslationsLoaded, reject);

                        } else {
                            reject();
                        }
                        return deferred.promise;
                    };

                    /**
                     * @ngdoc function
                     * @name pascalprecht.translate.$translate#instant
                     * @methodOf pascalprecht.translate.$translate
                     *
                     * @description
                     * Returns a translation instantly from the internal state of loaded translation. All rules
                     * regarding the current language, the preferred language of even fallback languages will be
                     * used except any promise handling. If a language was not found, an asynchronous loading
                     * will be invoked in the background.
                     *
                     * @param {string|array} translationId A token which represents a translation id
                     *                                     This can be optionally an array of translation ids which
                     *                                     results that the function's promise returns an object where
                     *                                     each key is the translation id and the value the translation.
                     * @param {object} interpolateParams Params
                     * @param {string} interpolationId The id of the interpolation to use
                     *
                     * @return {string|object} translation
                     */
                    $translate.instant = function (translationId, interpolateParams, interpolationId) {

                        // Detect undefined and null values to shorten the execution and prevent exceptions
                        if (translationId === null || angular.isUndefined(translationId)) {
                            return translationId;
                        }

                        // Duck detection: If the first argument is an array, a bunch of translations was requested.
                        // The result is an object.
                        if (angular.isArray(translationId)) {
                            var results = {};
                            for (var i = 0, c = translationId.length; i < c; i++) {
                                results[translationId[i]] = $translate.instant(translationId[i], interpolateParams, interpolationId);
                            }
                            return results;
                        }

                        // We discarded unacceptable values. So we just need to verify if translationId is empty String
                        if (angular.isString(translationId) && translationId.length < 1) {
                            return translationId;
                        }

                        // trim off any whitespace
                        if (translationId) {
                            translationId = trim.apply(translationId);
                        }

                        var result, possibleLangKeys = [];
                        if ($preferredLanguage) {
                            possibleLangKeys.push($preferredLanguage);
                        }
                        if ($uses) {
                            possibleLangKeys.push($uses);
                        }
                        if ($fallbackLanguage && $fallbackLanguage.length) {
                            possibleLangKeys = possibleLangKeys.concat($fallbackLanguage);
                        }
                        for (var j = 0, d = possibleLangKeys.length; j < d; j++) {
                            var possibleLangKey = possibleLangKeys[j];
                            if ($translationTable[possibleLangKey]) {
                                if (typeof $translationTable[possibleLangKey][translationId] !== 'undefined') {
                                    result = determineTranslationInstant(translationId, interpolateParams, interpolationId);
                                } else if ($notFoundIndicatorLeft || $notFoundIndicatorRight) {
                                    result = applyNotFoundIndicators(translationId);
                                }
                            }
                            if (typeof result !== 'undefined') {
                                break;
                            }
                        }

                        if (!result && result !== '') {
                            // Return translation of default interpolator if not found anything.
                            result = defaultInterpolator.interpolate(translationId, interpolateParams);
                            if ($missingTranslationHandlerFactory && !pendingLoader) {
                                result = translateByHandler(translationId, interpolateParams);
                            }
                        }

                        return result;
                    };

                    /**
                     * @ngdoc function
                     * @name pascalprecht.translate.$translate#versionInfo
                     * @methodOf pascalprecht.translate.$translate
                     *
                     * @description
                     * Returns the current version information for the angular-translate library
                     *
                     * @return {string} angular-translate version
                     */
                    $translate.versionInfo = function () {
                        return version;
                    };

                    /**
                     * @ngdoc function
                     * @name pascalprecht.translate.$translate#loaderCache
                     * @methodOf pascalprecht.translate.$translate
                     *
                     * @description
                     * Returns the defined loaderCache.
                     *
                     * @return {boolean|string|object} current value of loaderCache
                     */
                    $translate.loaderCache = function () {
                        return loaderCache;
                    };

                    // internal purpose only
                    $translate.directivePriority = function () {
                        return directivePriority;
                    };

                    // internal purpose only
                    $translate.statefulFilter = function () {
                        return statefulFilter;
                    };

                    if ($loaderFactory) {

                        // If at least one async loader is defined and there are no
                        // (default) translations available we should try to load them.
                        if (angular.equals($translationTable, {})) {
                            $translate.use($translate.use());
                        }

                        // Also, if there are any fallback language registered, we start
                        // loading them asynchronously as soon as we can.
                        if ($fallbackLanguage && $fallbackLanguage.length) {
                            var processAsyncResult = function (translation) {
                                translations(translation.key, translation.table);
                                $rootScope.$emit('$translateChangeEnd', {language: translation.key});
                                return translation;
                            };
                            for (var i = 0, len = $fallbackLanguage.length; i < len; i++) {
                                var fallbackLanguageId = $fallbackLanguage[i];
                                if ($forceAsyncReloadEnabled || !$translationTable[fallbackLanguageId]) {
                                    langPromises[fallbackLanguageId] = loadAsync(fallbackLanguageId).then(processAsyncResult);
                                }
                            }
                        }
                    }

                    return $translate;
                }
            ];
        }

        $translate.$inject = ['$STORAGE_KEY', '$windowProvider', '$translateSanitizationProvider', 'pascalprechtTranslateOverrider'];

        $translate.displayName = 'displayName';

        /**
         * @ngdoc object
         * @name pascalprecht.translate.$translateDefaultInterpolation
         * @requires $interpolate
         *
         * @description
         * Uses angular's `$interpolate` services to interpolate strings against some values.
         *
         * Be aware to configure a proper sanitization strategy.
         *
         * See also:
         * * {@link pascalprecht.translate.$translateSanitization}
         *
         * @return {object} $translateDefaultInterpolation Interpolator service
         */
        angular.module('pascalprecht.translate').factory('$translateDefaultInterpolation', $translateDefaultInterpolation);

        function $translateDefaultInterpolation($interpolate, $translateSanitization) {

            'use strict';

            var $translateInterpolator = {},
                $locale,
                $identifier = 'default';

            /**
             * @ngdoc function
             * @name pascalprecht.translate.$translateDefaultInterpolation#setLocale
             * @methodOf pascalprecht.translate.$translateDefaultInterpolation
             *
             * @description
             * Sets current locale (this is currently not use in this interpolation).
             *
             * @param {string} locale Language key or locale.
             */
            $translateInterpolator.setLocale = function (locale) {
                $locale = locale;
            };

            /**
             * @ngdoc function
             * @name pascalprecht.translate.$translateDefaultInterpolation#getInterpolationIdentifier
             * @methodOf pascalprecht.translate.$translateDefaultInterpolation
             *
             * @description
             * Returns an identifier for this interpolation service.
             *
             * @returns {string} $identifier
             */
            $translateInterpolator.getInterpolationIdentifier = function () {
                return $identifier;
            };

            /**
             * @deprecated will be removed in 3.0
             * @see {@link pascalprecht.translate.$translateSanitization}
             */
            $translateInterpolator.useSanitizeValueStrategy = function (value) {
                $translateSanitization.useStrategy(value);
                return this;
            };

            /**
             * @ngdoc function
             * @name pascalprecht.translate.$translateDefaultInterpolation#interpolate
             * @methodOf pascalprecht.translate.$translateDefaultInterpolation
             *
             * @description
             * Interpolates given string agains given interpolate params using angulars
             * `$interpolate` service.
             *
             * @returns {string} interpolated string.
             */
            $translateInterpolator.interpolate = function (string, interpolationParams) {
                interpolationParams = interpolationParams || {};
                interpolationParams = $translateSanitization.sanitize(interpolationParams, 'params');

                var interpolatedText = $interpolate(string)(interpolationParams);
                interpolatedText = $translateSanitization.sanitize(interpolatedText, 'text');

                return interpolatedText;
            };

            return $translateInterpolator;
        }

        $translateDefaultInterpolation.$inject = ['$interpolate', '$translateSanitization'];

        $translateDefaultInterpolation.displayName = '$translateDefaultInterpolation';

        angular.module('pascalprecht.translate').constant('$STORAGE_KEY', 'NG_TRANSLATE_LANG_KEY');

        angular.module('pascalprecht.translate')
        /**
         * @ngdoc directive
         * @name pascalprecht.translate.directive:translate
         * @requires $compile
         * @requires $filter
         * @requires $interpolate
         * @restrict A
         *
         * @description
         * Translates given translation id either through attribute or DOM content.
         * Internally it uses `translate` filter to translate translation id. It possible to
         * pass an optional `translate-values` object literal as string into translation id.
         *
         * @param {string=} translate Translation id which could be either string or interpolated string.
         * @param {string=} translate-values Values to pass into translation id. Can be passed as object literal string or interpolated object.
         * @param {string=} translate-attr-ATTR translate Translation id and put it into ATTR attribute.
         * @param {string=} translate-default will be used unless translation was successful
         * @param {boolean=} translate-compile (default true if present) defines locally activation of {@link pascalprecht.translate.$translateProvider#methods_usePostCompiling}
         *
         * @example
         <example module="ngView">
         <file name="index.html">
         <div ng-controller="TranslateCtrl">

         <pre translate="TRANSLATION_ID"></pre>
         <pre translate>TRANSLATION_ID</pre>
         <pre translate translate-attr-title="TRANSLATION_ID"></pre>
         <pre translate="{{translationId}}"></pre>
         <pre translate>{{translationId}}</pre>
         <pre translate="WITH_VALUES" translate-values="{value: 5}"></pre>
         <pre translate translate-values="{value: 5}">WITH_VALUES</pre>
         <pre translate="WITH_VALUES" translate-values="{{values}}"></pre>
         <pre translate translate-values="{{values}}">WITH_VALUES</pre>
         <pre translate translate-attr-title="WITH_VALUES" translate-values="{{values}}"></pre>

         </div>
         </file>
         <file name="script.js">
         angular.module('ngView', ['pascalprecht.translate'])

         .config(function ($translateProvider) {

        $translateProvider.translations('en',{
          'TRANSLATION_ID': 'Hello there!',
          'WITH_VALUES': 'The following value is dynamic: {{value}}'
        }).preferredLanguage('en');

      });

         angular.module('ngView').controller('TranslateCtrl', function ($scope) {
        $scope.translationId = 'TRANSLATION_ID';

        $scope.values = {
          value: 78
        };
      });
         </file>
         <file name="scenario.js">
         it('should translate', function () {
        inject(function ($rootScope, $compile) {
          $rootScope.translationId = 'TRANSLATION_ID';

          element = $compile('<p translate="TRANSLATION_ID"></p>')($rootScope);
          $rootScope.$digest();
          expect(element.text()).toBe('Hello there!');

          element = $compile('<p translate="{{translationId}}"></p>')($rootScope);
          $rootScope.$digest();
          expect(element.text()).toBe('Hello there!');

          element = $compile('<p translate>TRANSLATION_ID</p>')($rootScope);
          $rootScope.$digest();
          expect(element.text()).toBe('Hello there!');

          element = $compile('<p translate>{{translationId}}</p>')($rootScope);
          $rootScope.$digest();
          expect(element.text()).toBe('Hello there!');

          element = $compile('<p translate translate-attr-title="TRANSLATION_ID"></p>')($rootScope);
          $rootScope.$digest();
          expect(element.attr('title')).toBe('Hello there!');
        });
      });
         </file>
         </example>
         */
            .directive('translate', translateDirective);

        function translateDirective($translate, $q, $interpolate, $compile, $parse, $rootScope) {

            'use strict';

            /**
             * @name trim
             * @private
             *
             * @description
             * trim polyfill
             *
             * @returns {string} The string stripped of whitespace from both ends
             */
            var trim = function () {
                return this.toString().replace(/^\s+|\s+$/g, '');
            };

            return {
                restrict: 'AE',
                scope: true,
                priority: $translate.directivePriority(),
                compile: function (tElement, tAttr) {

                    var translateValuesExist = (tAttr.translateValues) ?
                        tAttr.translateValues : undefined;

                    var translateInterpolation = (tAttr.translateInterpolation) ?
                        tAttr.translateInterpolation : undefined;

                    var translateValueExist = tElement[0].outerHTML.match(/translate-value-+/i);

                    var interpolateRegExp = '^(.*)(' + $interpolate.startSymbol() + '.*' + $interpolate.endSymbol() + ')(.*)',
                        watcherRegExp = '^(.*)' + $interpolate.startSymbol() + '(.*)' + $interpolate.endSymbol() + '(.*)';

                    return function linkFn(scope, iElement, iAttr) {

                        scope.interpolateParams = {};
                        scope.preText = '';
                        scope.postText = '';
                        var translationIds = {};

                        var initInterpolationParams = function (interpolateParams, iAttr, tAttr) {
                            // initial setup
                            if (iAttr.translateValues) {
                                angular.extend(interpolateParams, $parse(iAttr.translateValues)(scope.$parent));
                            }
                            // initially fetch all attributes if existing and fill the params
                            if (translateValueExist) {
                                for (var attr in tAttr) {
                                    if (Object.prototype.hasOwnProperty.call(iAttr, attr) && attr.substr(0, 14) === 'translateValue' && attr !== 'translateValues') {
                                        var attributeName = angular.lowercase(attr.substr(14, 1)) + attr.substr(15);
                                        interpolateParams[attributeName] = tAttr[attr];
                                    }
                                }
                            }
                        };

                        // Ensures any change of the attribute "translate" containing the id will
                        // be re-stored to the scope's "translationId".
                        // If the attribute has no content, the element's text value (white spaces trimmed off) will be used.
                        var observeElementTranslation = function (translationId) {

                            // Remove any old watcher
                            if (angular.isFunction(observeElementTranslation._unwatchOld)) {
                                observeElementTranslation._unwatchOld();
                                observeElementTranslation._unwatchOld = undefined;
                            }

                            if (angular.equals(translationId, '') || !angular.isDefined(translationId)) {
                                // Resolve translation id by inner html if required
                                var interpolateMatches = trim.apply(iElement.text()).match(interpolateRegExp);
                                // Interpolate translation id if required
                                if (angular.isArray(interpolateMatches)) {
                                    scope.preText = interpolateMatches[1];
                                    scope.postText = interpolateMatches[3];
                                    translationIds.translate = $interpolate(interpolateMatches[2])(scope.$parent);
                                    var watcherMatches = iElement.text().match(watcherRegExp);
                                    if (angular.isArray(watcherMatches) && watcherMatches[2] && watcherMatches[2].length) {
                                        observeElementTranslation._unwatchOld = scope.$watch(watcherMatches[2], function (newValue) {
                                            translationIds.translate = newValue;
                                            updateTranslations();
                                        });
                                    }
                                } else {
                                    translationIds.translate = iElement.text().replace(/^\s+|\s+$/g, '');
                                }
                            } else {
                                translationIds.translate = translationId;
                            }
                            updateTranslations();
                        };

                        var observeAttributeTranslation = function (translateAttr) {
                            iAttr.$observe(translateAttr, function (translationId) {
                                translationIds[translateAttr] = translationId;
                                updateTranslations();
                            });
                        };

                        // initial setup with values
                        initInterpolationParams(scope.interpolateParams, iAttr, tAttr);

                        var firstAttributeChangedEvent = true;
                        iAttr.$observe('translate', function (translationId) {
                            if (typeof translationId === 'undefined') {
                                // case of element "<translate>xyz</translate>"
                                observeElementTranslation('');
                            } else {
                                // case of regular attribute
                                if (translationId !== '' || !firstAttributeChangedEvent) {
                                    translationIds.translate = translationId;
                                    updateTranslations();
                                }
                            }
                            firstAttributeChangedEvent = false;
                        });

                        for (var translateAttr in iAttr) {
                            if (iAttr.hasOwnProperty(translateAttr) && translateAttr.substr(0, 13) === 'translateAttr') {
                                observeAttributeTranslation(translateAttr);
                            }
                        }

                        iAttr.$observe('translateDefault', function (value) {
                            scope.defaultText = value;
                        });

                        if (translateValuesExist) {
                            iAttr.$observe('translateValues', function (interpolateParams) {
                                if (interpolateParams) {
                                    scope.$parent.$watch(function () {
                                        angular.extend(scope.interpolateParams, $parse(interpolateParams)(scope.$parent));
                                    });
                                }
                            });
                        }

                        if (translateValueExist) {
                            var observeValueAttribute = function (attrName) {
                                iAttr.$observe(attrName, function (value) {
                                    var attributeName = angular.lowercase(attrName.substr(14, 1)) + attrName.substr(15);
                                    scope.interpolateParams[attributeName] = value;
                                });
                            };
                            for (var attr in iAttr) {
                                if (Object.prototype.hasOwnProperty.call(iAttr, attr) && attr.substr(0, 14) === 'translateValue' && attr !== 'translateValues') {
                                    observeValueAttribute(attr);
                                }
                            }
                        }

                        // Master update function
                        var updateTranslations = function () {
                            for (var key in translationIds) {

                                if (translationIds.hasOwnProperty(key) && translationIds[key] !== undefined) {
                                    updateTranslation(key, translationIds[key], scope, scope.interpolateParams, scope.defaultText);
                                }
                            }
                        };

                        // Put translation processing function outside loop
                        var updateTranslation = function (translateAttr, translationId, scope, interpolateParams, defaultTranslationText) {
                            if (translationId) {
                                $translate(translationId, interpolateParams, translateInterpolation, defaultTranslationText)
                                    .then(function (translation) {
                                        applyTranslation(translation, scope, true, translateAttr);
                                    }, function (translationId) {
                                        applyTranslation(translationId, scope, false, translateAttr);
                                    });
                            } else {
                                // as an empty string cannot be translated, we can solve this using successful=false
                                applyTranslation(translationId, scope, false, translateAttr);
                            }
                        };

                        var applyTranslation = function (value, scope, successful, translateAttr) {
                            if (translateAttr === 'translate') {
                                // default translate into innerHTML
                                if (!successful && typeof scope.defaultText !== 'undefined') {
                                    value = scope.defaultText;
                                }
                                iElement.html(scope.preText + value + scope.postText);
                                var globallyEnabled = $translate.isPostCompilingEnabled();
                                var locallyDefined = typeof tAttr.translateCompile !== 'undefined';
                                var locallyEnabled = locallyDefined && tAttr.translateCompile !== 'false';
                                if ((globallyEnabled && !locallyDefined) || locallyEnabled) {
                                    $compile(iElement.contents())(scope);
                                }
                            } else {
                                // translate attribute
                                if (!successful && typeof scope.defaultText !== 'undefined') {
                                    value = scope.defaultText;
                                }
                                var attributeName = iAttr.$attr[translateAttr];
                                if (attributeName.substr(0, 5) === 'data-') {
                                    // ensure html5 data prefix is stripped
                                    attributeName = attributeName.substr(5);
                                }
                                attributeName = attributeName.substr(15);
                                iElement.attr(attributeName, value);
                            }
                        };

                        if (translateValuesExist || translateValueExist || iAttr.translateDefault) {
                            scope.$watch('interpolateParams', updateTranslations, true);
                        }

                        // Ensures the text will be refreshed after the current language was changed
                        // w/ $translate.use(...)
                        var unbind = $rootScope.$on('$translateChangeSuccess', updateTranslations);

                        // ensure translation will be looked up at least one
                        if (iElement.text().length) {
                            if (iAttr.translate) {
                                observeElementTranslation(iAttr.translate);
                            } else {
                                observeElementTranslation('');
                            }
                        } else if (iAttr.translate) {
                            // ensure attribute will be not skipped
                            observeElementTranslation(iAttr.translate);
                        }
                        updateTranslations();
                        scope.$on('$destroy', unbind);
                    };
                }
            };
        }

        translateDirective.$inject = ['$translate', '$q', '$interpolate', '$compile', '$parse', '$rootScope'];

        translateDirective.displayName = 'translateDirective';

        angular.module('pascalprecht.translate')
        /**
         * @ngdoc directive
         * @name pascalprecht.translate.directive:translateCloak
         * @requires $rootScope
         * @requires $translate
         * @restrict A
         *
         * $description
         * Adds a `translate-cloak` class name to the given element where this directive
         * is applied initially and removes it, once a loader has finished loading.
         *
         * This directive can be used to prevent initial flickering when loading translation
         * data asynchronously.
         *
         * The class name is defined in
         * {@link pascalprecht.translate.$translateProvider#cloakClassName $translate.cloakClassName()}.
         *
         * @param {string=} translate-cloak If a translationId is provided, it will be used for showing
         *                                  or hiding the cloak. Basically it relies on the translation
         *                                  resolve.
         */
            .directive('translateCloak', translateCloakDirective);

        function translateCloakDirective($rootScope, $translate) {

            'use strict';

            return {
                compile: function (tElement) {
                    var applyCloak = function () {
                            tElement.addClass($translate.cloakClassName());
                        },
                        removeCloak = function () {
                            tElement.removeClass($translate.cloakClassName());
                        },
                        removeListener = $rootScope.$on('$translateChangeEnd', function () {
                            removeCloak();
                            removeListener();
                            removeListener = null;
                        });
                    applyCloak();

                    return function linkFn(scope, iElement, iAttr) {
                        // Register a watcher for the defined translation allowing a fine tuned cloak
                        if (iAttr.translateCloak && iAttr.translateCloak.length) {
                            iAttr.$observe('translateCloak', function (translationId) {
                                $translate(translationId).then(removeCloak, applyCloak);
                            });
                        }
                    };
                }
            };
        }

        translateCloakDirective.$inject = ['$rootScope', '$translate'];

        translateCloakDirective.displayName = 'translateCloakDirective';

        angular.module('pascalprecht.translate')
        /**
         * @ngdoc filter
         * @name pascalprecht.translate.filter:translate
         * @requires $parse
         * @requires pascalprecht.translate.$translate
         * @function
         *
         * @description
         * Uses `$translate` service to translate contents. Accepts interpolate parameters
         * to pass dynamized values though translation.
         *
         * @param {string} translationId A translation id to be translated.
         * @param {*=} interpolateParams Optional object literal (as hash or string) to pass values into translation.
         *
         * @returns {string} Translated text.
         *
         * @example
         <example module="ngView">
         <file name="index.html">
         <div ng-controller="TranslateCtrl">

         <pre>{{ 'TRANSLATION_ID' | translate }}</pre>
         <pre>{{ translationId | translate }}</pre>
         <pre>{{ 'WITH_VALUES' | translate:'{value: 5}' }}</pre>
         <pre>{{ 'WITH_VALUES' | translate:values }}</pre>

         </div>
         </file>
         <file name="script.js">
         angular.module('ngView', ['pascalprecht.translate'])

         .config(function ($translateProvider) {

        $translateProvider.translations('en', {
          'TRANSLATION_ID': 'Hello there!',
          'WITH_VALUES': 'The following value is dynamic: {{value}}'
        });
        $translateProvider.preferredLanguage('en');

      });

         angular.module('ngView').controller('TranslateCtrl', function ($scope) {
        $scope.translationId = 'TRANSLATION_ID';

        $scope.values = {
          value: 78
        };
      });
         </file>
         </example>
         */
            .filter('translate', translateFilterFactory);

        function translateFilterFactory($parse, $translate) {

            'use strict';

            var translateFilter = function (translationId, interpolateParams, interpolation) {

                if (!angular.isObject(interpolateParams)) {
                    interpolateParams = $parse(interpolateParams)(this);
                }

                return $translate.instant(translationId, interpolateParams, interpolation);
            };

            if ($translate.statefulFilter()) {
                translateFilter.$stateful = true;
            }

            return translateFilter;
        }

        translateFilterFactory.$inject = ['$parse', '$translate'];

        translateFilterFactory.displayName = 'translateFilterFactory';

        angular.module('pascalprecht.translate')

        /**
         * @ngdoc object
         * @name pascalprecht.translate.$translationCache
         * @requires $cacheFactory
         *
         * @description
         * The first time a translation table is used, it is loaded in the translation cache for quick retrieval. You
         * can load translation tables directly into the cache by consuming the
         * `$translationCache` service directly.
         *
         * @return {object} $cacheFactory object.
         */
            .factory('$translationCache', $translationCache);

        function $translationCache($cacheFactory) {

            'use strict';

            return $cacheFactory('translations');
        }

        $translationCache.$inject = ['$cacheFactory'];

        $translationCache.displayName = '$translationCache';
        return 'pascalprecht.translate';

    }));
}
// function oute() {
//     $('.days').find('.day').eq(5).addClass('out')
//     $('.days').find('.day').eq(6).addClass('out')
//     for (var i = 0; i < $('.days').length; i++ ) {
//        var a_s =  $('.days').eq(i).find('.out').length;
//        if (a_s == 7 ) {
//            $('.days').eq(i).remove()
//        }
//     }
//
// }
$('.data_calendar').click(function () {
    $(".custom-option").parents(".custom-select").removeClass("opened");
    $('.calendar_w').toggleClass('open')
    event.stopPropagation();

    // oute()
    // $('.month .arrow').click(function () {
    //     oute()
    // })
})


function angul() {

    $.ajax({
        url: 'get-calendar',
        type: "POST",
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        processData: false,
        contentType: false,
        cache: false,
        success: function (data) {
            var count = 0;



            mondays_ = []

            mondays = []
            for (ooo in Object.keys(data.excursions)) {
                mondays_.push({foo: 'bar', date: Object.keys(data.excursions)[ooo]})
            }
            for (ooo in mondays_) {
                count++
            }
            for (var i = 0; i < count; i++) {
                mondays.push(mondays_[i])
            }


            angular_js()
            angular_tr()
            angular
                .module('app', ['flexcalendar', 'pascalprecht.translate'])
                .controller('MainController', ['$scope', function ($scope) {

                    var today = new Date(),
                        inWeek = new Date();
                    inWeek.setDate(today.getDate());
                    var month = inWeek.getMonth() + 1,
                        date = inWeek.getDate() + 1,
                        year = inWeek.getFullYear(),
                        current_date = year + '/' + month + '/' + date;
                    var first_available = data.first_available_day.split('-');
                    data_day = first_available[2];
                    data_year = first_available[0];
                    data_mone = first_available[1];
                    $scope.options = {
                        // defaultDate: "" + current_date + "",
                        defaultDate: data.first_available_day,
                        // defaultDate: data.max_day,
                        disabledDates: data.disabled,
                        minDate: "" + current_date + "",
                        maxDate: data.max_day,
                        dayNamesLength: 2,
                        mondayIsFirstDay: true,
                        eventClick: function (date) {
                            $('.calendar_w').removeClass('open')
                            data_day = date.day;
                            data_year = date.year;
                            data_mone = date._month;
                            f2()

                        },
                        dateClick: function (date) {
                            $('.calendar_w').removeClass('open')
                            data_day = date.day;
                            data_mone = date._month;
                            data_year = date.year;
                            f2()

                        },
                        changeMonth: function (month, year) {
                        },
                    };


                    $scope.events = mondays_;


                }])

            function f2() {
                // var codtatdunt = 0;
                a = "" + data_year + "-" + data_mone + "-" + data_day + "";
                // for (ooo in data.excursions) {
                //     codtatdunt++
                // }
                sel = $('#interval').find('option')
                sel.removeAttr('disabled')
                if (data.excursions[a] != undefined) {
                    cache = data.excursions[a]
                    for (var i = 0; i < sel.length; i++) {
                        for (var j = 0; j < cache.length; ++j) {
                            if (sel.eq(i).val() == cache[j]) {
                                sel.eq(i).prop('disabled', true)
                            }
                        }
                    }
                }


                $('.custom-select').not($('select.custom-select')).remove()
                select_()

                return
            }

            !function () {
                "use strict";

                function e() {
                    var e = '<div class="flex-calendar"><div class="month"><div class="arrow {{arrowPrevClass}}" ng-click="prevMonth()"></div><div class="label">{{ selectedMonth | translate }} <span>{{selectedYear}}</span></div><div class="arrow {{arrowNextClass}}" ng-click="nextMonth()"></div></div><div class="week"><div class="day" ng-repeat="day in weekDays(options.dayNamesLength) track by $index">{{ day }}</div></div><div class="days" ng-repeat="week in weeks"><div class="day"ng-repeat="day in week track by $index"ng-class="{selected: isDefaultDate(day), event: day.event[0], disabled: day.disabled, out: !day}"ng-click="onClick(day, $index, $event)"><div class="number">{{day.day}}</div></div></div></div>',

                        a = {restrict: "E", scope: {options: "=?", events: "=?"}, template: e, controller: t};

                    return a
                }

                function t(e, t) {
                    function a() {
                        e.mappedDisabledDates = e.options.disabledDates.map(function (e) {
                            return new Date(e)

                        })

                    }

                    function n() {
                        e.mappedEvents = e.events.map(function (e) {
                            return e.date = new Date(e.date), e
                        })
                    }

                    function o(t, a, n) {
                        t && !t.disabled && (e.options.defaultDate = t.date, 0 != t.event.length ? e.options.eventClick(t, n) : e.options.dateClick(t, n))
                    }

                    function s(t) {
                        t && e.mappedEvents && (t.event = [], e.mappedEvents.forEach(function (e) {
                            t.date.getFullYear() === e.date.getFullYear() && t.date.getMonth() === e.date.getMonth() && t.date.getDate() === e.date.getDate() && t.event.push(e)
                        }))
                    }

                    function i(t) {
                        if (!e.options.minDate && !e.options.maxDate) return !0;
                        var a = t.date;
                        return e.options.minDate && a < e.options.minDate ? !1 : e.options.maxDate && a > e.options.maxDate ? !1 : !0
                    }

                    function d(t) {
                        if (!e.mappedDisabledDates) return !1;
                        for (var a = 0; a < e.mappedDisabledDates.length; a++) if (t.year === e.mappedDisabledDates[a].getFullYear() && t.month === e.mappedDisabledDates[a].getMonth() && t.day === e.mappedDisabledDates[a].getDate()) return !0
                    }

                    function l() {
                        var t = null, a = null;
                        if (!e.options.minDate) return !0;
                        var n = M.indexOf(e.selectedMonth);
                        return 0 === n ? (t = e.selectedYear - 1, a = 11) : (t = e.selectedYear, a = n - 1), t < e.options.minDate.getFullYear() ? !1 : t === e.options.minDate.getFullYear() && a < e.options.minDate.getMonth() ? !1 : !0
                    }

                    function r() {
                        var t = null, a = null;
                        if (!e.options.maxDate) return !0;
                        var n = M.indexOf(e.selectedMonth);
                        return 11 === n ? (t = e.selectedYear + 1, a = 0) : (t = e.selectedYear, a = n + 1), t > e.options.maxDate.getFullYear() ? !1 : t === e.options.maxDate.getFullYear() && a > e.options.maxDate.getMonth() ? !1 : !0
                    }

                    function c() {
                        e.weeks = [];
                        for (var t = null, a = new Date(e.selectedYear, M.indexOf(e.selectedMonth) + 1, 0).getDate(), n = 1; a + 1 > n; n += 1) {
                            var o = new Date(e.selectedYear, M.indexOf(e.selectedMonth), n),
                                l = new Date(e.selectedYear, M.indexOf(e.selectedMonth), n).getDay();
                            e.options.mondayIsFirstDay && (l = (l + 6) % 7), t = t || [null, null, null, null, null, null, null], t[l] = {
                                year: e.selectedYear,
                                month: M.indexOf(e.selectedMonth),
                                day: n,
                                date: o,
                                _month: o.getMonth() + 1
                            }, i(t[l]) ? e.mappedEvents && s(t[l]) : t[l].disabled = !0, t[l] && d(t[l]) && (t[l].disabled = !0), (6 === l || n === a) && (e.weeks.push(t), t = void 0)
                        }

                        e.arrowPrevClass = e.allowedPrevMonth() ? "visible" : "hidden", e.arrowNextClass = e.allowedNextMonth() ? "visible" : "hidden"

                    }

                    function D() {
                        e.options._defaultDate = e.options.defaultDate ? new Date(e.options.defaultDate) : new Date, e.selectedYear = e.options._defaultDate.getFullYear(), e.selectedMonth = M[e.options._defaultDate.getMonth()], e.selectedDay = e.options._defaultDate.getDate(), c()
                        $('.data_calendar').find('p').text('' + e.selectedMonth + ' ' + e.selectedDay + '')

                    }

                    function p() {
                        if (e.mappedDisabledDates && 0 !== e.mappedDisabledDates.length) {
                            for (var t = 0; t < e.mappedDisabledDates.length; t++) e.mappedDisabledDates[t] = new Date(e.mappedDisabledDates[t]);
                            c()
                        }

                    }

                    function u(e) {
                        return g.map(function (t) {
                            return m(t).slice(0, e)
                        })
                    }

                    function v(t) {
                        if (t) {
                            var a = t.year === e.options._defaultDate.getFullYear() && t.month === e.options._defaultDate.getMonth() && t.day === e.options._defaultDate.getDate();
                            return a
                        }
                    }

                    function f() {
                        if (e.allowedPrevMonth()) {
                            var t = M.indexOf(e.selectedMonth);
                            0 === t ? (e.selectedYear -= 1, e.selectedMonth = M[11]) : e.selectedMonth = M[t - 1];
                            var a = {name: e.selectedMonth, index: t - 1, _index: t + 2};
                            e.options.changeMonth(a, e.selectedYear), c()

                        }
                    }

                    function h() {
                        if (e.allowedNextMonth()) {
                            var t = M.indexOf(e.selectedMonth);
                            11 === t ? (e.selectedYear += 1, e.selectedMonth = M[0]) : e.selectedMonth = M[t + 1];
                            var a = {name: e.selectedMonth, index: t + 1, _index: t + 2};
                            e.options.changeMonth(a, e.selectedYear), c()
                        }
                    }

                    e.days = [], e.options = e.options || {}, e.events = e.events || [], e.options.dayNamesLength = e.options.dayNamesLength || 1, e.options.mondayIsFirstDay = e.options.mondayIsFirstDay || !1, e.onClick = o, e.allowedPrevMonth = l, e.allowedNextMonth = r, e.weekDays = u, e.isDefaultDate = v, e.prevMonth = f, e.nextMonth = h, e.arrowPrevClass = "visible", e.arrowNextClass = "visible";
                    var m = t("translate"),
                        M = ["Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"],
                        g = ["НД", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];
                    if (e.options.mondayIsFirstDay) {
                        var y = g.shift();
                        g.push(y)

                    }
                    e.options.minDate && (e.options.minDate = new Date(e.options.minDate)), e.options.maxDate && (e.options.maxDate = new Date(e.options.maxDate)), e.options.disabledDates && a(), e.events && n(), e.$watch("options.defaultDate", function () {
                        D()

                    }), e.$watch("options.disabledDates", function () {
                        a(), p()
                    }), e.$watch("events", function () {
                        n(), c()
                    })
                }



                angular.module("flexcalendar", []).directive("flexCalendar", e), t.$inject = ["$scope", "$filter"]
            }();
        },
    });
}

angul()


// Library

/*******************madia**********************/

if ($(window).width() < 1025) {
    $('.head').append('<div class="menu_mob"><span></span><span></span><span></span></div>')
    $('nav, .stock_cola,.back_call').wrapAll('<div class="mobile_nav"></div>');
    $('.name, .tell,.email,.pole_for,.pole_form').wrapAll('<div class="form_left"></div>');
    $('.mobile_nav').prepend('<div class="nav_top"><div class="nav_logo"></div><div class="close_nav"></div></div>')
    $('fieldset:nth-child(2) h3:nth-child(1), .bron').wrapAll('<div class="data_tp"></div>');
    $('fieldset:nth-child(2) h3:nth-child(2), .file_b').wrapAll('<div class="data_cl"></div>');
    $('.data_cl, .data_tp').wrapAll('<div class="tp"></div>');
    $('.nav_logo').append($('.logo img').clone(true, true))
    $('.close_nav').click(function () {
        $('.mobile_nav').removeClass('open_menu')
        $('body').removeClass('bg_blur')
    })
    $('.menu_mob').click(function () {
        $('body').addClass('bg_blur')
        $('.mobile_nav').addClass('open_menu')
    })

    function mousedown_clider() {
        $('.participation-area').append('<div class="nav_participation"><div class="nav-control nav-control_prev"></div><div class="nav-control nav-control_next"></div></div>')

        nav_participation = $('.nav_participation')
        $('.participation-block').css({'left': '0px'})
        var t = 0

        var k = true
        yy = ($('.participation-block').width() + 40) - $(window).width()


        var el = document.getElementById('participation-block');
        swipedetect(el, function (swipedir) {
        });

        function swipedetect(el) {

            var touchsurface = el,
                startX,
                threshold = 50;


            touchsurface.addEventListener('touchstart', function (e) {
                var touchobj = e.changedTouches[0]
                startX = touchobj.pageX
                e.preventDefault()
            }, false)

            touchsurface.addEventListener('touchend', function (e) {
                var touchobj = e.changedTouches[0]

                distX = touchobj.pageX - startX

                if (Math.abs(distX) >= threshold) {

                    if (distX < 0) {
                        console.log(t, yy, t + (distX * -1))
                        if (t + 150 < yy) {
                            t += 150
                            // $('.participation-block').css('left', -t)
                            $('.participation-block').css({'left': -t, 'transition': '.5s'})

                        } else {
                            t = yy
                            $('.participation-block').css({'left': -t, 'transition': '.5s'})
                        }


                    } else if (distX > 0) {
                        if (t - 150 > 0) {
                            t += -150
                            $('.participation-block').css({'left': -t, 'transition': '.5s'})
                        } else {
                            t = 0
                            $('.participation-block').css({'left': '0px', 'transition': '.5s'})
                        }
                    }


                    // swipedir = (distX < 0)? 'left' : 'right'
                    // if ( t >= 0 && t <= yy) {
                    //
                    //     t += distX * -1
                    //     // if (t > ) {
                    //     //
                    //     // }
                    // }
                    // t += distX * -1
                }
                // t += distX * -1

            }, false)

        }


        // nav_participation.find('.nav-control')
        //
        //     .on('touchend', function () {
        //         k = false
        //         return false
        //     })
        //     .on('touchstart', function () {
        //         k = true
        //         this_ = $(this)
        //
        //         function timeout() {
        //             setTimeout(function () {
        //                 if (k == true && t < yy && t >= 0) {
        //                     requestAnimationFrame(timeout)
        //                 }
        //             });
        //
        //             if (this_.hasClass('nav-control_prev')) {
        //                 ttt()
        //             } else if (this_.hasClass('nav-control_next')) {
        //                 ttt_min()
        //             }
        //             // ttt()
        //         }
        //
        //         timeout();
        //         // if (t <= yy && t >= 0)  {
        //         //     timeout();
        //         //
        //         // }
        //
        //     });
        //
        // function ttt() {
        //     if (t > yy) {
        //         t = yy
        //     } else if (t <= yy) {
        //         t += 3
        //     }
        //     // t += 1
        //     $('.participation-block').css({'left': -t,'transition':'.0s'})
        // }
        //
        // function ttt_min() {
        //     if (t < 0) {
        //         t = 0
        //     } else if (t >= 0) {
        //         t -= 3
        //     }
        //     // t -= 1
        //     $('.participation-block').css({'left': -t,'transition':'.0s'})
        // }


        nav_participation.find('.nav-control').click(function () {
            if ($(this).hasClass('nav-control_next')) {
                if (t + 150 > yy) {
                    t = yy
                } else if (t + 150 <= yy) {
                    t += 150
                }
            } else if ($(this).hasClass('nav-control_prev')) {
                if (t - 150 < 0) {
                    t = 0
                } else if (t - 150 >= 0) {
                    t -= 150
                }
            }

            $('.participation-block').css({'left': -t, 'transition': '.5s'})
        })

    }

    mousedown_clider()

}
// $(window).resize(function() {
//     location.reload();
// });


$(window).on("load", function () {
    $preloader = $("#canvas-container");
    setTimeout(function () {
        $('body').removeClass('is_load')
       // $('.is_load_').delay(800).fadeOut("slow")
        $preloader.delay(100).fadeOut("slow")
        $preloader.find('.canvas_load').animate({ height: '10vh'}, 'slow');
    }, 700);
    setTimeout(function () {
        // $("#canvas-container").remove()
    }, 1000)
    // $preloader.unbind(preloader_canvas())

});

[].forEach.call(document.querySelectorAll('img[data-src]'), function(img) {
    img.setAttribute('src', img.getAttribute('data-src'));
    img.onload = function() {
        img.removeAttribute('data-src');
    };
});