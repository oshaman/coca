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


!function(i){"use strict";"function"==typeof define&&define.amd?define(["jquery"],i):"undefined"!=typeof exports?module.exports=i(require("jquery")):i(jQuery)}(function(i){"use strict";var e=window.Slick||{};(e=function(){var e=0;return function(t,o){var s,n=this;n.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:i(t),appendDots:i(t),arrows:!0,asNavFor:null,prevArrow:'<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',nextArrow:'<button class="slick-next" aria-label="Next" type="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(e,t){return i('<button type="button" />').text(t+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,focusOnChange:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},n.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,scrolling:!1,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,swiping:!1,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},i.extend(n,n.initials),n.activeBreakpoint=null,n.animType=null,n.animProp=null,n.breakpoints=[],n.breakpointSettings=[],n.cssTransitions=!1,n.focussed=!1,n.interrupted=!1,n.hidden="hidden",n.paused=!0,n.positionProp=null,n.respondTo=null,n.rowCount=1,n.shouldClick=!0,n.$slider=i(t),n.$slidesCache=null,n.transformType=null,n.transitionType=null,n.visibilityChange="visibilitychange",n.windowWidth=0,n.windowTimer=null,s=i(t).data("slick")||{},n.options=i.extend({},n.defaults,o,s),n.currentSlide=n.options.initialSlide,n.originalSettings=n.options,void 0!==document.mozHidden?(n.hidden="mozHidden",n.visibilityChange="mozvisibilitychange"):void 0!==document.webkitHidden&&(n.hidden="webkitHidden",n.visibilityChange="webkitvisibilitychange"),n.autoPlay=i.proxy(n.autoPlay,n),n.autoPlayClear=i.proxy(n.autoPlayClear,n),n.autoPlayIterator=i.proxy(n.autoPlayIterator,n),n.changeSlide=i.proxy(n.changeSlide,n),n.clickHandler=i.proxy(n.clickHandler,n),n.selectHandler=i.proxy(n.selectHandler,n),n.setPosition=i.proxy(n.setPosition,n),n.swipeHandler=i.proxy(n.swipeHandler,n),n.dragHandler=i.proxy(n.dragHandler,n),n.keyHandler=i.proxy(n.keyHandler,n),n.instanceUid=e++,n.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,n.registerBreakpoints(),n.init(!0)}}()).prototype.activateADA=function(){this.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},e.prototype.addSlide=e.prototype.slickAdd=function(e,t,o){var s=this;if("boolean"==typeof t)o=t,t=null;else if(t<0||t>=s.slideCount)return!1;s.unload(),"number"==typeof t?0===t&&0===s.$slides.length?i(e).appendTo(s.$slideTrack):o?i(e).insertBefore(s.$slides.eq(t)):i(e).insertAfter(s.$slides.eq(t)):!0===o?i(e).prependTo(s.$slideTrack):i(e).appendTo(s.$slideTrack),s.$slides=s.$slideTrack.children(this.options.slide),s.$slideTrack.children(this.options.slide).detach(),s.$slideTrack.append(s.$slides),s.$slides.each(function(e,t){i(t).attr("data-slick-index",e)}),s.$slidesCache=s.$slides,s.reinit()},e.prototype.animateHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.animate({height:e},i.options.speed)}},e.prototype.animateSlide=function(e,t){var o={},s=this;s.animateHeight(),!0===s.options.rtl&&!1===s.options.vertical&&(e=-e),!1===s.transformsEnabled?!1===s.options.vertical?s.$slideTrack.animate({left:e},s.options.speed,s.options.easing,t):s.$slideTrack.animate({top:e},s.options.speed,s.options.easing,t):!1===s.cssTransitions?(!0===s.options.rtl&&(s.currentLeft=-s.currentLeft),i({animStart:s.currentLeft}).animate({animStart:e},{duration:s.options.speed,easing:s.options.easing,step:function(i){i=Math.ceil(i),!1===s.options.vertical?(o[s.animType]="translate("+i+"px, 0px)",s.$slideTrack.css(o)):(o[s.animType]="translate(0px,"+i+"px)",s.$slideTrack.css(o))},complete:function(){t&&t.call()}})):(s.applyTransition(),e=Math.ceil(e),!1===s.options.vertical?o[s.animType]="translate3d("+e+"px, 0px, 0px)":o[s.animType]="translate3d(0px,"+e+"px, 0px)",s.$slideTrack.css(o),t&&setTimeout(function(){s.disableTransition(),t.call()},s.options.speed))},e.prototype.getNavTarget=function(){var e=this,t=e.options.asNavFor;return t&&null!==t&&(t=i(t).not(e.$slider)),t},e.prototype.asNavFor=function(e){var t=this.getNavTarget();null!==t&&"object"==typeof t&&t.each(function(){var t=i(this).slick("getSlick");t.unslicked||t.slideHandler(e,!0)})},e.prototype.applyTransition=function(i){var e=this,t={};!1===e.options.fade?t[e.transitionType]=e.transformType+" "+e.options.speed+"ms "+e.options.cssEase:t[e.transitionType]="opacity "+e.options.speed+"ms "+e.options.cssEase,!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.autoPlay=function(){var i=this;i.autoPlayClear(),i.slideCount>i.options.slidesToShow&&(i.autoPlayTimer=setInterval(i.autoPlayIterator,i.options.autoplaySpeed))},e.prototype.autoPlayClear=function(){var i=this;i.autoPlayTimer&&clearInterval(i.autoPlayTimer)},e.prototype.autoPlayIterator=function(){var i=this,e=i.currentSlide+i.options.slidesToScroll;i.paused||i.interrupted||i.focussed||(!1===i.options.infinite&&(1===i.direction&&i.currentSlide+1===i.slideCount-1?i.direction=0:0===i.direction&&(e=i.currentSlide-i.options.slidesToScroll,i.currentSlide-1==0&&(i.direction=1))),i.slideHandler(e))},e.prototype.buildArrows=function(){var e=this;!0===e.options.arrows&&(e.$prevArrow=i(e.options.prevArrow).addClass("slick-arrow"),e.$nextArrow=i(e.options.nextArrow).addClass("slick-arrow"),e.slideCount>e.options.slidesToShow?(e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.prependTo(e.options.appendArrows),e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.appendTo(e.options.appendArrows),!0!==e.options.infinite&&e.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},e.prototype.buildDots=function(){var e,t,o=this;if(!0===o.options.dots){for(o.$slider.addClass("slick-dotted"),t=i("<ul />").addClass(o.options.dotsClass),e=0;e<=o.getDotCount();e+=1)t.append(i("<li />").append(o.options.customPaging.call(this,o,e)));o.$dots=t.appendTo(o.options.appendDots),o.$dots.find("li").first().addClass("slick-active")}},e.prototype.buildOut=function(){var e=this;e.$slides=e.$slider.children(e.options.slide+":not(.slick-cloned)").addClass("slick-slide"),e.slideCount=e.$slides.length,e.$slides.each(function(e,t){i(t).attr("data-slick-index",e).data("originalStyling",i(t).attr("style")||"")}),e.$slider.addClass("slick-slider"),e.$slideTrack=0===e.slideCount?i('<div class="slick-track"/>').appendTo(e.$slider):e.$slides.wrapAll('<div class="slick-track"/>').parent(),e.$list=e.$slideTrack.wrap('<div class="slick-list"/>').parent(),e.$slideTrack.css("opacity",0),!0!==e.options.centerMode&&!0!==e.options.swipeToSlide||(e.options.slidesToScroll=1),i("img[data-lazy]",e.$slider).not("[src]").addClass("slick-loading"),e.setupInfinite(),e.buildArrows(),e.buildDots(),e.updateDots(),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),!0===e.options.draggable&&e.$list.addClass("draggable")},e.prototype.buildRows=function(){var i,e,t,o,s,n,r,l=this;if(o=document.createDocumentFragment(),n=l.$slider.children(),l.options.rows>1){for(r=l.options.slidesPerRow*l.options.rows,s=Math.ceil(n.length/r),i=0;i<s;i++){var d=document.createElement("div");for(e=0;e<l.options.rows;e++){var a=document.createElement("div");for(t=0;t<l.options.slidesPerRow;t++){var c=i*r+(e*l.options.slidesPerRow+t);n.get(c)&&a.appendChild(n.get(c))}d.appendChild(a)}o.appendChild(d)}l.$slider.empty().append(o),l.$slider.children().children().children().css({width:100/l.options.slidesPerRow+"%",display:"inline-block"})}},e.prototype.checkResponsive=function(e,t){var o,s,n,r=this,l=!1,d=r.$slider.width(),a=window.innerWidth||i(window).width();if("window"===r.respondTo?n=a:"slider"===r.respondTo?n=d:"min"===r.respondTo&&(n=Math.min(a,d)),r.options.responsive&&r.options.responsive.length&&null!==r.options.responsive){s=null;for(o in r.breakpoints)r.breakpoints.hasOwnProperty(o)&&(!1===r.originalSettings.mobileFirst?n<r.breakpoints[o]&&(s=r.breakpoints[o]):n>r.breakpoints[o]&&(s=r.breakpoints[o]));null!==s?null!==r.activeBreakpoint?(s!==r.activeBreakpoint||t)&&(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):null!==r.activeBreakpoint&&(r.activeBreakpoint=null,r.options=r.originalSettings,!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e),l=s),e||!1===l||r.$slider.trigger("breakpoint",[r,l])}},e.prototype.changeSlide=function(e,t){var o,s,n,r=this,l=i(e.currentTarget);switch(l.is("a")&&e.preventDefault(),l.is("li")||(l=l.closest("li")),n=r.slideCount%r.options.slidesToScroll!=0,o=n?0:(r.slideCount-r.currentSlide)%r.options.slidesToScroll,e.data.message){case"previous":s=0===o?r.options.slidesToScroll:r.options.slidesToShow-o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide-s,!1,t);break;case"next":s=0===o?r.options.slidesToScroll:o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide+s,!1,t);break;case"index":var d=0===e.data.index?0:e.data.index||l.index()*r.options.slidesToScroll;r.slideHandler(r.checkNavigable(d),!1,t),l.children().trigger("focus");break;default:return}},e.prototype.checkNavigable=function(i){var e,t;if(e=this.getNavigableIndexes(),t=0,i>e[e.length-1])i=e[e.length-1];else for(var o in e){if(i<e[o]){i=t;break}t=e[o]}return i},e.prototype.cleanUpEvents=function(){var e=this;e.options.dots&&null!==e.$dots&&(i("li",e.$dots).off("click.slick",e.changeSlide).off("mouseenter.slick",i.proxy(e.interrupt,e,!0)).off("mouseleave.slick",i.proxy(e.interrupt,e,!1)),!0===e.options.accessibility&&e.$dots.off("keydown.slick",e.keyHandler)),e.$slider.off("focus.slick blur.slick"),!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow&&e.$prevArrow.off("click.slick",e.changeSlide),e.$nextArrow&&e.$nextArrow.off("click.slick",e.changeSlide),!0===e.options.accessibility&&(e.$prevArrow&&e.$prevArrow.off("keydown.slick",e.keyHandler),e.$nextArrow&&e.$nextArrow.off("keydown.slick",e.keyHandler))),e.$list.off("touchstart.slick mousedown.slick",e.swipeHandler),e.$list.off("touchmove.slick mousemove.slick",e.swipeHandler),e.$list.off("touchend.slick mouseup.slick",e.swipeHandler),e.$list.off("touchcancel.slick mouseleave.slick",e.swipeHandler),e.$list.off("click.slick",e.clickHandler),i(document).off(e.visibilityChange,e.visibility),e.cleanUpSlideEvents(),!0===e.options.accessibility&&e.$list.off("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().off("click.slick",e.selectHandler),i(window).off("orientationchange.slick.slick-"+e.instanceUid,e.orientationChange),i(window).off("resize.slick.slick-"+e.instanceUid,e.resize),i("[draggable!=true]",e.$slideTrack).off("dragstart",e.preventDefault),i(window).off("load.slick.slick-"+e.instanceUid,e.setPosition)},e.prototype.cleanUpSlideEvents=function(){var e=this;e.$list.off("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.off("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.cleanUpRows=function(){var i,e=this;e.options.rows>1&&((i=e.$slides.children().children()).removeAttr("style"),e.$slider.empty().append(i))},e.prototype.clickHandler=function(i){!1===this.shouldClick&&(i.stopImmediatePropagation(),i.stopPropagation(),i.preventDefault())},e.prototype.destroy=function(e){var t=this;t.autoPlayClear(),t.touchObject={},t.cleanUpEvents(),i(".slick-cloned",t.$slider).detach(),t.$dots&&t.$dots.remove(),t.$prevArrow&&t.$prevArrow.length&&(t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.remove()),t.$nextArrow&&t.$nextArrow.length&&(t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.remove()),t.$slides&&(t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){i(this).attr("style",i(this).data("originalStyling"))}),t.$slideTrack.children(this.options.slide).detach(),t.$slideTrack.detach(),t.$list.detach(),t.$slider.append(t.$slides)),t.cleanUpRows(),t.$slider.removeClass("slick-slider"),t.$slider.removeClass("slick-initialized"),t.$slider.removeClass("slick-dotted"),t.unslicked=!0,e||t.$slider.trigger("destroy",[t])},e.prototype.disableTransition=function(i){var e=this,t={};t[e.transitionType]="",!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.fadeSlide=function(i,e){var t=this;!1===t.cssTransitions?(t.$slides.eq(i).css({zIndex:t.options.zIndex}),t.$slides.eq(i).animate({opacity:1},t.options.speed,t.options.easing,e)):(t.applyTransition(i),t.$slides.eq(i).css({opacity:1,zIndex:t.options.zIndex}),e&&setTimeout(function(){t.disableTransition(i),e.call()},t.options.speed))},e.prototype.fadeSlideOut=function(i){var e=this;!1===e.cssTransitions?e.$slides.eq(i).animate({opacity:0,zIndex:e.options.zIndex-2},e.options.speed,e.options.easing):(e.applyTransition(i),e.$slides.eq(i).css({opacity:0,zIndex:e.options.zIndex-2}))},e.prototype.filterSlides=e.prototype.slickFilter=function(i){var e=this;null!==i&&(e.$slidesCache=e.$slides,e.unload(),e.$slideTrack.children(this.options.slide).detach(),e.$slidesCache.filter(i).appendTo(e.$slideTrack),e.reinit())},e.prototype.focusHandler=function(){var e=this;e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*",function(t){t.stopImmediatePropagation();var o=i(this);setTimeout(function(){e.options.pauseOnFocus&&(e.focussed=o.is(":focus"),e.autoPlay())},0)})},e.prototype.getCurrent=e.prototype.slickCurrentSlide=function(){return this.currentSlide},e.prototype.getDotCount=function(){var i=this,e=0,t=0,o=0;if(!0===i.options.infinite)if(i.slideCount<=i.options.slidesToShow)++o;else for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else if(!0===i.options.centerMode)o=i.slideCount;else if(i.options.asNavFor)for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else o=1+Math.ceil((i.slideCount-i.options.slidesToShow)/i.options.slidesToScroll);return o-1},e.prototype.getLeft=function(i){var e,t,o,s,n=this,r=0;return n.slideOffset=0,t=n.$slides.first().outerHeight(!0),!0===n.options.infinite?(n.slideCount>n.options.slidesToShow&&(n.slideOffset=n.slideWidth*n.options.slidesToShow*-1,s=-1,!0===n.options.vertical&&!0===n.options.centerMode&&(2===n.options.slidesToShow?s=-1.5:1===n.options.slidesToShow&&(s=-2)),r=t*n.options.slidesToShow*s),n.slideCount%n.options.slidesToScroll!=0&&i+n.options.slidesToScroll>n.slideCount&&n.slideCount>n.options.slidesToShow&&(i>n.slideCount?(n.slideOffset=(n.options.slidesToShow-(i-n.slideCount))*n.slideWidth*-1,r=(n.options.slidesToShow-(i-n.slideCount))*t*-1):(n.slideOffset=n.slideCount%n.options.slidesToScroll*n.slideWidth*-1,r=n.slideCount%n.options.slidesToScroll*t*-1))):i+n.options.slidesToShow>n.slideCount&&(n.slideOffset=(i+n.options.slidesToShow-n.slideCount)*n.slideWidth,r=(i+n.options.slidesToShow-n.slideCount)*t),n.slideCount<=n.options.slidesToShow&&(n.slideOffset=0,r=0),!0===n.options.centerMode&&n.slideCount<=n.options.slidesToShow?n.slideOffset=n.slideWidth*Math.floor(n.options.slidesToShow)/2-n.slideWidth*n.slideCount/2:!0===n.options.centerMode&&!0===n.options.infinite?n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)-n.slideWidth:!0===n.options.centerMode&&(n.slideOffset=0,n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)),e=!1===n.options.vertical?i*n.slideWidth*-1+n.slideOffset:i*t*-1+r,!0===n.options.variableWidth&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,!0===n.options.centerMode&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow+1),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,e+=(n.$list.width()-o.outerWidth())/2)),e},e.prototype.getOption=e.prototype.slickGetOption=function(i){return this.options[i]},e.prototype.getNavigableIndexes=function(){var i,e=this,t=0,o=0,s=[];for(!1===e.options.infinite?i=e.slideCount:(t=-1*e.options.slidesToScroll,o=-1*e.options.slidesToScroll,i=2*e.slideCount);t<i;)s.push(t),t=o+e.options.slidesToScroll,o+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;return s},e.prototype.getSlick=function(){return this},e.prototype.getSlideCount=function(){var e,t,o=this;return t=!0===o.options.centerMode?o.slideWidth*Math.floor(o.options.slidesToShow/2):0,!0===o.options.swipeToSlide?(o.$slideTrack.find(".slick-slide").each(function(s,n){if(n.offsetLeft-t+i(n).outerWidth()/2>-1*o.swipeLeft)return e=n,!1}),Math.abs(i(e).attr("data-slick-index")-o.currentSlide)||1):o.options.slidesToScroll},e.prototype.goTo=e.prototype.slickGoTo=function(i,e){this.changeSlide({data:{message:"index",index:parseInt(i)}},e)},e.prototype.init=function(e){var t=this;i(t.$slider).hasClass("slick-initialized")||(i(t.$slider).addClass("slick-initialized"),t.buildRows(),t.buildOut(),t.setProps(),t.startLoad(),t.loadSlider(),t.initializeEvents(),t.updateArrows(),t.updateDots(),t.checkResponsive(!0),t.focusHandler()),e&&t.$slider.trigger("init",[t]),!0===t.options.accessibility&&t.initADA(),t.options.autoplay&&(t.paused=!1,t.autoPlay())},e.prototype.initADA=function(){var e=this,t=Math.ceil(e.slideCount/e.options.slidesToShow),o=e.getNavigableIndexes().filter(function(i){return i>=0&&i<e.slideCount});e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),null!==e.$dots&&(e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(t){var s=o.indexOf(t);i(this).attr({role:"tabpanel",id:"slick-slide"+e.instanceUid+t,tabindex:-1}),-1!==s&&i(this).attr({"aria-describedby":"slick-slide-control"+e.instanceUid+s})}),e.$dots.attr("role","tablist").find("li").each(function(s){var n=o[s];i(this).attr({role:"presentation"}),i(this).find("button").first().attr({role:"tab",id:"slick-slide-control"+e.instanceUid+s,"aria-controls":"slick-slide"+e.instanceUid+n,"aria-label":s+1+" of "+t,"aria-selected":null,tabindex:"-1"})}).eq(e.currentSlide).find("button").attr({"aria-selected":"true",tabindex:"0"}).end());for(var s=e.currentSlide,n=s+e.options.slidesToShow;s<n;s++)e.$slides.eq(s).attr("tabindex",0);e.activateADA()},e.prototype.initArrowEvents=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},i.changeSlide),i.$nextArrow.off("click.slick").on("click.slick",{message:"next"},i.changeSlide),!0===i.options.accessibility&&(i.$prevArrow.on("keydown.slick",i.keyHandler),i.$nextArrow.on("keydown.slick",i.keyHandler)))},e.prototype.initDotEvents=function(){var e=this;!0===e.options.dots&&(i("li",e.$dots).on("click.slick",{message:"index"},e.changeSlide),!0===e.options.accessibility&&e.$dots.on("keydown.slick",e.keyHandler)),!0===e.options.dots&&!0===e.options.pauseOnDotsHover&&i("li",e.$dots).on("mouseenter.slick",i.proxy(e.interrupt,e,!0)).on("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.initSlideEvents=function(){var e=this;e.options.pauseOnHover&&(e.$list.on("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.on("mouseleave.slick",i.proxy(e.interrupt,e,!1)))},e.prototype.initializeEvents=function(){var e=this;e.initArrowEvents(),e.initDotEvents(),e.initSlideEvents(),e.$list.on("touchstart.slick mousedown.slick",{action:"start"},e.swipeHandler),e.$list.on("touchmove.slick mousemove.slick",{action:"move"},e.swipeHandler),e.$list.on("touchend.slick mouseup.slick",{action:"end"},e.swipeHandler),e.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},e.swipeHandler),e.$list.on("click.slick",e.clickHandler),i(document).on(e.visibilityChange,i.proxy(e.visibility,e)),!0===e.options.accessibility&&e.$list.on("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),i(window).on("orientationchange.slick.slick-"+e.instanceUid,i.proxy(e.orientationChange,e)),i(window).on("resize.slick.slick-"+e.instanceUid,i.proxy(e.resize,e)),i("[draggable!=true]",e.$slideTrack).on("dragstart",e.preventDefault),i(window).on("load.slick.slick-"+e.instanceUid,e.setPosition),i(e.setPosition)},e.prototype.initUI=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.show(),i.$nextArrow.show()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.show()},e.prototype.keyHandler=function(i){var e=this;i.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===i.keyCode&&!0===e.options.accessibility?e.changeSlide({data:{message:!0===e.options.rtl?"next":"previous"}}):39===i.keyCode&&!0===e.options.accessibility&&e.changeSlide({data:{message:!0===e.options.rtl?"previous":"next"}}))},e.prototype.lazyLoad=function(){function e(e){i("img[data-lazy]",e).each(function(){var e=i(this),t=i(this).attr("data-lazy"),o=i(this).attr("data-srcset"),s=i(this).attr("data-sizes")||n.$slider.attr("data-sizes"),r=document.createElement("img");r.onload=function(){e.animate({opacity:0},100,function(){o&&(e.attr("srcset",o),s&&e.attr("sizes",s)),e.attr("src",t).animate({opacity:1},200,function(){e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")}),n.$slider.trigger("lazyLoaded",[n,e,t])})},r.onerror=function(){e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),n.$slider.trigger("lazyLoadError",[n,e,t])},r.src=t})}var t,o,s,n=this;if(!0===n.options.centerMode?!0===n.options.infinite?s=(o=n.currentSlide+(n.options.slidesToShow/2+1))+n.options.slidesToShow+2:(o=Math.max(0,n.currentSlide-(n.options.slidesToShow/2+1)),s=n.options.slidesToShow/2+1+2+n.currentSlide):(o=n.options.infinite?n.options.slidesToShow+n.currentSlide:n.currentSlide,s=Math.ceil(o+n.options.slidesToShow),!0===n.options.fade&&(o>0&&o--,s<=n.slideCount&&s++)),t=n.$slider.find(".slick-slide").slice(o,s),"anticipated"===n.options.lazyLoad)for(var r=o-1,l=s,d=n.$slider.find(".slick-slide"),a=0;a<n.options.slidesToScroll;a++)r<0&&(r=n.slideCount-1),t=(t=t.add(d.eq(r))).add(d.eq(l)),r--,l++;e(t),n.slideCount<=n.options.slidesToShow?e(n.$slider.find(".slick-slide")):n.currentSlide>=n.slideCount-n.options.slidesToShow?e(n.$slider.find(".slick-cloned").slice(0,n.options.slidesToShow)):0===n.currentSlide&&e(n.$slider.find(".slick-cloned").slice(-1*n.options.slidesToShow))},e.prototype.loadSlider=function(){var i=this;i.setPosition(),i.$slideTrack.css({opacity:1}),i.$slider.removeClass("slick-loading"),i.initUI(),"progressive"===i.options.lazyLoad&&i.progressiveLazyLoad()},e.prototype.next=e.prototype.slickNext=function(){this.changeSlide({data:{message:"next"}})},e.prototype.orientationChange=function(){var i=this;i.checkResponsive(),i.setPosition()},e.prototype.pause=e.prototype.slickPause=function(){var i=this;i.autoPlayClear(),i.paused=!0},e.prototype.play=e.prototype.slickPlay=function(){var i=this;i.autoPlay(),i.options.autoplay=!0,i.paused=!1,i.focussed=!1,i.interrupted=!1},e.prototype.postSlide=function(e){var t=this;t.unslicked||(t.$slider.trigger("afterChange",[t,e]),t.animating=!1,t.slideCount>t.options.slidesToShow&&t.setPosition(),t.swipeLeft=null,t.options.autoplay&&t.autoPlay(),!0===t.options.accessibility&&(t.initADA(),t.options.focusOnChange&&i(t.$slides.get(t.currentSlide)).attr("tabindex",0).focus()))},e.prototype.prev=e.prototype.slickPrev=function(){this.changeSlide({data:{message:"previous"}})},e.prototype.preventDefault=function(i){i.preventDefault()},e.prototype.progressiveLazyLoad=function(e){e=e||1;var t,o,s,n,r,l=this,d=i("img[data-lazy]",l.$slider);d.length?(t=d.first(),o=t.attr("data-lazy"),s=t.attr("data-srcset"),n=t.attr("data-sizes")||l.$slider.attr("data-sizes"),(r=document.createElement("img")).onload=function(){s&&(t.attr("srcset",s),n&&t.attr("sizes",n)),t.attr("src",o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),!0===l.options.adaptiveHeight&&l.setPosition(),l.$slider.trigger("lazyLoaded",[l,t,o]),l.progressiveLazyLoad()},r.onerror=function(){e<3?setTimeout(function(){l.progressiveLazyLoad(e+1)},500):(t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),l.$slider.trigger("lazyLoadError",[l,t,o]),l.progressiveLazyLoad())},r.src=o):l.$slider.trigger("allImagesLoaded",[l])},e.prototype.refresh=function(e){var t,o,s=this;o=s.slideCount-s.options.slidesToShow,!s.options.infinite&&s.currentSlide>o&&(s.currentSlide=o),s.slideCount<=s.options.slidesToShow&&(s.currentSlide=0),t=s.currentSlide,s.destroy(!0),i.extend(s,s.initials,{currentSlide:t}),s.init(),e||s.changeSlide({data:{message:"index",index:t}},!1)},e.prototype.registerBreakpoints=function(){var e,t,o,s=this,n=s.options.responsive||null;if("array"===i.type(n)&&n.length){s.respondTo=s.options.respondTo||"window";for(e in n)if(o=s.breakpoints.length-1,n.hasOwnProperty(e)){for(t=n[e].breakpoint;o>=0;)s.breakpoints[o]&&s.breakpoints[o]===t&&s.breakpoints.splice(o,1),o--;s.breakpoints.push(t),s.breakpointSettings[t]=n[e].settings}s.breakpoints.sort(function(i,e){return s.options.mobileFirst?i-e:e-i})}},e.prototype.reinit=function(){var e=this;e.$slides=e.$slideTrack.children(e.options.slide).addClass("slick-slide"),e.slideCount=e.$slides.length,e.currentSlide>=e.slideCount&&0!==e.currentSlide&&(e.currentSlide=e.currentSlide-e.options.slidesToScroll),e.slideCount<=e.options.slidesToShow&&(e.currentSlide=0),e.registerBreakpoints(),e.setProps(),e.setupInfinite(),e.buildArrows(),e.updateArrows(),e.initArrowEvents(),e.buildDots(),e.updateDots(),e.initDotEvents(),e.cleanUpSlideEvents(),e.initSlideEvents(),e.checkResponsive(!1,!0),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),e.setPosition(),e.focusHandler(),e.paused=!e.options.autoplay,e.autoPlay(),e.$slider.trigger("reInit",[e])},e.prototype.resize=function(){var e=this;i(window).width()!==e.windowWidth&&(clearTimeout(e.windowDelay),e.windowDelay=window.setTimeout(function(){e.windowWidth=i(window).width(),e.checkResponsive(),e.unslicked||e.setPosition()},50))},e.prototype.removeSlide=e.prototype.slickRemove=function(i,e,t){var o=this;if(i="boolean"==typeof i?!0===(e=i)?0:o.slideCount-1:!0===e?--i:i,o.slideCount<1||i<0||i>o.slideCount-1)return!1;o.unload(),!0===t?o.$slideTrack.children().remove():o.$slideTrack.children(this.options.slide).eq(i).remove(),o.$slides=o.$slideTrack.children(this.options.slide),o.$slideTrack.children(this.options.slide).detach(),o.$slideTrack.append(o.$slides),o.$slidesCache=o.$slides,o.reinit()},e.prototype.setCSS=function(i){var e,t,o=this,s={};!0===o.options.rtl&&(i=-i),e="left"==o.positionProp?Math.ceil(i)+"px":"0px",t="top"==o.positionProp?Math.ceil(i)+"px":"0px",s[o.positionProp]=i,!1===o.transformsEnabled?o.$slideTrack.css(s):(s={},!1===o.cssTransitions?(s[o.animType]="translate("+e+", "+t+")",o.$slideTrack.css(s)):(s[o.animType]="translate3d("+e+", "+t+", 0px)",o.$slideTrack.css(s)))},e.prototype.setDimensions=function(){var i=this;!1===i.options.vertical?!0===i.options.centerMode&&i.$list.css({padding:"0px "+i.options.centerPadding}):(i.$list.height(i.$slides.first().outerHeight(!0)*i.options.slidesToShow),!0===i.options.centerMode&&i.$list.css({padding:i.options.centerPadding+" 0px"})),i.listWidth=i.$list.width(),i.listHeight=i.$list.height(),!1===i.options.vertical&&!1===i.options.variableWidth?(i.slideWidth=Math.ceil(i.listWidth/i.options.slidesToShow),i.$slideTrack.width(Math.ceil(i.slideWidth*i.$slideTrack.children(".slick-slide").length))):!0===i.options.variableWidth?i.$slideTrack.width(5e3*i.slideCount):(i.slideWidth=Math.ceil(i.listWidth),i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0)*i.$slideTrack.children(".slick-slide").length)));var e=i.$slides.first().outerWidth(!0)-i.$slides.first().width();!1===i.options.variableWidth&&i.$slideTrack.children(".slick-slide").width(i.slideWidth-e)},e.prototype.setFade=function(){var e,t=this;t.$slides.each(function(o,s){e=t.slideWidth*o*-1,!0===t.options.rtl?i(s).css({position:"relative",right:e,top:0,zIndex:t.options.zIndex-2,opacity:0}):i(s).css({position:"relative",left:e,top:0,zIndex:t.options.zIndex-2,opacity:0})}),t.$slides.eq(t.currentSlide).css({zIndex:t.options.zIndex-1,opacity:1})},e.prototype.setHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.css("height",e)}},e.prototype.setOption=e.prototype.slickSetOption=function(){var e,t,o,s,n,r=this,l=!1;if("object"===i.type(arguments[0])?(o=arguments[0],l=arguments[1],n="multiple"):"string"===i.type(arguments[0])&&(o=arguments[0],s=arguments[1],l=arguments[2],"responsive"===arguments[0]&&"array"===i.type(arguments[1])?n="responsive":void 0!==arguments[1]&&(n="single")),"single"===n)r.options[o]=s;else if("multiple"===n)i.each(o,function(i,e){r.options[i]=e});else if("responsive"===n)for(t in s)if("array"!==i.type(r.options.responsive))r.options.responsive=[s[t]];else{for(e=r.options.responsive.length-1;e>=0;)r.options.responsive[e].breakpoint===s[t].breakpoint&&r.options.responsive.splice(e,1),e--;r.options.responsive.push(s[t])}l&&(r.unload(),r.reinit())},e.prototype.setPosition=function(){var i=this;i.setDimensions(),i.setHeight(),!1===i.options.fade?i.setCSS(i.getLeft(i.currentSlide)):i.setFade(),i.$slider.trigger("setPosition",[i])},e.prototype.setProps=function(){var i=this,e=document.body.style;i.positionProp=!0===i.options.vertical?"top":"left","top"===i.positionProp?i.$slider.addClass("slick-vertical"):i.$slider.removeClass("slick-vertical"),void 0===e.WebkitTransition&&void 0===e.MozTransition&&void 0===e.msTransition||!0===i.options.useCSS&&(i.cssTransitions=!0),i.options.fade&&("number"==typeof i.options.zIndex?i.options.zIndex<3&&(i.options.zIndex=3):i.options.zIndex=i.defaults.zIndex),void 0!==e.OTransform&&(i.animType="OTransform",i.transformType="-o-transform",i.transitionType="OTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.MozTransform&&(i.animType="MozTransform",i.transformType="-moz-transform",i.transitionType="MozTransition",void 0===e.perspectiveProperty&&void 0===e.MozPerspective&&(i.animType=!1)),void 0!==e.webkitTransform&&(i.animType="webkitTransform",i.transformType="-webkit-transform",i.transitionType="webkitTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.msTransform&&(i.animType="msTransform",i.transformType="-ms-transform",i.transitionType="msTransition",void 0===e.msTransform&&(i.animType=!1)),void 0!==e.transform&&!1!==i.animType&&(i.animType="transform",i.transformType="transform",i.transitionType="transition"),i.transformsEnabled=i.options.useTransform&&null!==i.animType&&!1!==i.animType},e.prototype.setSlideClasses=function(i){var e,t,o,s,n=this;if(t=n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),n.$slides.eq(i).addClass("slick-current"),!0===n.options.centerMode){var r=n.options.slidesToShow%2==0?1:0;e=Math.floor(n.options.slidesToShow/2),!0===n.options.infinite&&(i>=e&&i<=n.slideCount-1-e?n.$slides.slice(i-e+r,i+e+1).addClass("slick-active").attr("aria-hidden","false"):(o=n.options.slidesToShow+i,t.slice(o-e+1+r,o+e+2).addClass("slick-active").attr("aria-hidden","false")),0===i?t.eq(t.length-1-n.options.slidesToShow).addClass("slick-center"):i===n.slideCount-1&&t.eq(n.options.slidesToShow).addClass("slick-center")),n.$slides.eq(i).addClass("slick-center")}else i>=0&&i<=n.slideCount-n.options.slidesToShow?n.$slides.slice(i,i+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):t.length<=n.options.slidesToShow?t.addClass("slick-active").attr("aria-hidden","false"):(s=n.slideCount%n.options.slidesToShow,o=!0===n.options.infinite?n.options.slidesToShow+i:i,n.options.slidesToShow==n.options.slidesToScroll&&n.slideCount-i<n.options.slidesToShow?t.slice(o-(n.options.slidesToShow-s),o+s).addClass("slick-active").attr("aria-hidden","false"):t.slice(o,o+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"));"ondemand"!==n.options.lazyLoad&&"anticipated"!==n.options.lazyLoad||n.lazyLoad()},e.prototype.setupInfinite=function(){var e,t,o,s=this;if(!0===s.options.fade&&(s.options.centerMode=!1),!0===s.options.infinite&&!1===s.options.fade&&(t=null,s.slideCount>s.options.slidesToShow)){for(o=!0===s.options.centerMode?s.options.slidesToShow+1:s.options.slidesToShow,e=s.slideCount;e>s.slideCount-o;e-=1)t=e-1,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t-s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");for(e=0;e<o+s.slideCount;e+=1)t=e,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t+s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");s.$slideTrack.find(".slick-cloned").find("[id]").each(function(){i(this).attr("id","")})}},e.prototype.interrupt=function(i){var e=this;i||e.autoPlay(),e.interrupted=i},e.prototype.selectHandler=function(e){var t=this,o=i(e.target).is(".slick-slide")?i(e.target):i(e.target).parents(".slick-slide"),s=parseInt(o.attr("data-slick-index"));s||(s=0),t.slideCount<=t.options.slidesToShow?t.slideHandler(s,!1,!0):t.slideHandler(s)},e.prototype.slideHandler=function(i,e,t){var o,s,n,r,l,d=null,a=this;if(e=e||!1,!(!0===a.animating&&!0===a.options.waitForAnimate||!0===a.options.fade&&a.currentSlide===i))if(!1===e&&a.asNavFor(i),o=i,d=a.getLeft(o),r=a.getLeft(a.currentSlide),a.currentLeft=null===a.swipeLeft?r:a.swipeLeft,!1===a.options.infinite&&!1===a.options.centerMode&&(i<0||i>a.getDotCount()*a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else if(!1===a.options.infinite&&!0===a.options.centerMode&&(i<0||i>a.slideCount-a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else{if(a.options.autoplay&&clearInterval(a.autoPlayTimer),s=o<0?a.slideCount%a.options.slidesToScroll!=0?a.slideCount-a.slideCount%a.options.slidesToScroll:a.slideCount+o:o>=a.slideCount?a.slideCount%a.options.slidesToScroll!=0?0:o-a.slideCount:o,a.animating=!0,a.$slider.trigger("beforeChange",[a,a.currentSlide,s]),n=a.currentSlide,a.currentSlide=s,a.setSlideClasses(a.currentSlide),a.options.asNavFor&&(l=(l=a.getNavTarget()).slick("getSlick")).slideCount<=l.options.slidesToShow&&l.setSlideClasses(a.currentSlide),a.updateDots(),a.updateArrows(),!0===a.options.fade)return!0!==t?(a.fadeSlideOut(n),a.fadeSlide(s,function(){a.postSlide(s)})):a.postSlide(s),void a.animateHeight();!0!==t?a.animateSlide(d,function(){a.postSlide(s)}):a.postSlide(s)}},e.prototype.startLoad=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.hide(),i.$nextArrow.hide()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.hide(),i.$slider.addClass("slick-loading")},e.prototype.swipeDirection=function(){var i,e,t,o,s=this;return i=s.touchObject.startX-s.touchObject.curX,e=s.touchObject.startY-s.touchObject.curY,t=Math.atan2(e,i),(o=Math.round(180*t/Math.PI))<0&&(o=360-Math.abs(o)),o<=45&&o>=0?!1===s.options.rtl?"left":"right":o<=360&&o>=315?!1===s.options.rtl?"left":"right":o>=135&&o<=225?!1===s.options.rtl?"right":"left":!0===s.options.verticalSwiping?o>=35&&o<=135?"down":"up":"vertical"},e.prototype.swipeEnd=function(i){var e,t,o=this;if(o.dragging=!1,o.swiping=!1,o.scrolling)return o.scrolling=!1,!1;if(o.interrupted=!1,o.shouldClick=!(o.touchObject.swipeLength>10),void 0===o.touchObject.curX)return!1;if(!0===o.touchObject.edgeHit&&o.$slider.trigger("edge",[o,o.swipeDirection()]),o.touchObject.swipeLength>=o.touchObject.minSwipe){switch(t=o.swipeDirection()){case"left":case"down":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide+o.getSlideCount()):o.currentSlide+o.getSlideCount(),o.currentDirection=0;break;case"right":case"up":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide-o.getSlideCount()):o.currentSlide-o.getSlideCount(),o.currentDirection=1}"vertical"!=t&&(o.slideHandler(e),o.touchObject={},o.$slider.trigger("swipe",[o,t]))}else o.touchObject.startX!==o.touchObject.curX&&(o.slideHandler(o.currentSlide),o.touchObject={})},e.prototype.swipeHandler=function(i){var e=this;if(!(!1===e.options.swipe||"ontouchend"in document&&!1===e.options.swipe||!1===e.options.draggable&&-1!==i.type.indexOf("mouse")))switch(e.touchObject.fingerCount=i.originalEvent&&void 0!==i.originalEvent.touches?i.originalEvent.touches.length:1,e.touchObject.minSwipe=e.listWidth/e.options.touchThreshold,!0===e.options.verticalSwiping&&(e.touchObject.minSwipe=e.listHeight/e.options.touchThreshold),i.data.action){case"start":e.swipeStart(i);break;case"move":e.swipeMove(i);break;case"end":e.swipeEnd(i)}},e.prototype.swipeMove=function(i){var e,t,o,s,n,r,l=this;return n=void 0!==i.originalEvent?i.originalEvent.touches:null,!(!l.dragging||l.scrolling||n&&1!==n.length)&&(e=l.getLeft(l.currentSlide),l.touchObject.curX=void 0!==n?n[0].pageX:i.clientX,l.touchObject.curY=void 0!==n?n[0].pageY:i.clientY,l.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(l.touchObject.curX-l.touchObject.startX,2))),r=Math.round(Math.sqrt(Math.pow(l.touchObject.curY-l.touchObject.startY,2))),!l.options.verticalSwiping&&!l.swiping&&r>4?(l.scrolling=!0,!1):(!0===l.options.verticalSwiping&&(l.touchObject.swipeLength=r),t=l.swipeDirection(),void 0!==i.originalEvent&&l.touchObject.swipeLength>4&&(l.swiping=!0,i.preventDefault()),s=(!1===l.options.rtl?1:-1)*(l.touchObject.curX>l.touchObject.startX?1:-1),!0===l.options.verticalSwiping&&(s=l.touchObject.curY>l.touchObject.startY?1:-1),o=l.touchObject.swipeLength,l.touchObject.edgeHit=!1,!1===l.options.infinite&&(0===l.currentSlide&&"right"===t||l.currentSlide>=l.getDotCount()&&"left"===t)&&(o=l.touchObject.swipeLength*l.options.edgeFriction,l.touchObject.edgeHit=!0),!1===l.options.vertical?l.swipeLeft=e+o*s:l.swipeLeft=e+o*(l.$list.height()/l.listWidth)*s,!0===l.options.verticalSwiping&&(l.swipeLeft=e+o*s),!0!==l.options.fade&&!1!==l.options.touchMove&&(!0===l.animating?(l.swipeLeft=null,!1):void l.setCSS(l.swipeLeft))))},e.prototype.swipeStart=function(i){var e,t=this;if(t.interrupted=!0,1!==t.touchObject.fingerCount||t.slideCount<=t.options.slidesToShow)return t.touchObject={},!1;void 0!==i.originalEvent&&void 0!==i.originalEvent.touches&&(e=i.originalEvent.touches[0]),t.touchObject.startX=t.touchObject.curX=void 0!==e?e.pageX:i.clientX,t.touchObject.startY=t.touchObject.curY=void 0!==e?e.pageY:i.clientY,t.dragging=!0},e.prototype.unfilterSlides=e.prototype.slickUnfilter=function(){var i=this;null!==i.$slidesCache&&(i.unload(),i.$slideTrack.children(this.options.slide).detach(),i.$slidesCache.appendTo(i.$slideTrack),i.reinit())},e.prototype.unload=function(){var e=this;i(".slick-cloned",e.$slider).remove(),e.$dots&&e.$dots.remove(),e.$prevArrow&&e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.remove(),e.$nextArrow&&e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.remove(),e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},e.prototype.unslick=function(i){var e=this;e.$slider.trigger("unslick",[e,i]),e.destroy()},e.prototype.updateArrows=function(){var i=this;Math.floor(i.options.slidesToShow/2),!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&!i.options.infinite&&(i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===i.currentSlide?(i.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-i.options.slidesToShow&&!1===i.options.centerMode?(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-1&&!0===i.options.centerMode&&(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},e.prototype.updateDots=function(){var i=this;null!==i.$dots&&(i.$dots.find("li").removeClass("slick-active").end(),i.$dots.find("li").eq(Math.floor(i.currentSlide/i.options.slidesToScroll)).addClass("slick-active"))},e.prototype.visibility=function(){var i=this;i.options.autoplay&&(document[i.hidden]?i.interrupted=!0:i.interrupted=!1)},i.fn.slick=function(){var i,t,o=this,s=arguments[0],n=Array.prototype.slice.call(arguments,1),r=o.length;for(i=0;i<r;i++)if("object"==typeof s||void 0===s?o[i].slick=new e(o[i],s):t=o[i].slick[s].apply(o[i].slick,n),void 0!==t)return t;return o}});


function angular_js() {
    (function (fm, e9, eR) {
        function ft(a) {
            return function () {
                var n = arguments[0], v;
                v = "[" + (a ? a + ":" : "") + n + "] http://errors.angularjs.org/1.4.0/" + (a ? a + "/" : "") + n;
                for (n = 1; n < arguments.length; n++) {
                    v = v + (1 == n ? "?" : "&") + "p" + (n - 1) + "=";
                    var u = encodeURIComponent, q;
                    q = arguments[n];
                    q = "function" == typeof q ? q.toString().replace(/ \{[\s\S]*$/, "") : "undefined" == typeof q ? "undefined" : "string" != typeof q ? JSON.stringify(q) : q;
                    v += u(q)
                }
                return Error(v)
            }
        }

        function at(n) {
            if (null == n || cI(n)) {
                return !1
            }
            var q = "length" in Object(n) && n.length;
            return n.nodeType === bN && q ? !0 : fn(n) || fo(n) || 0 === q || "number" === typeof q && 0 < q && q - 1 in n
        }

        function eT(n, q, y) {
            var w, v;
            if (n) {
                if (fr(n)) {
                    for (w in n) {
                        "prototype" == w || "length" == w || "name" == w || n.hasOwnProperty && !n.hasOwnProperty(w) || q.call(y, n[w], w, n)
                    }
                } else {
                    if (fo(n) || at(n)) {
                        var u = "object" !== typeof n;
                        w = 0;
                        for (v = n.length; w < v; w++) {
                            (u || w in n) && q.call(y, n[w], w, n)
                        }
                    } else {
                        if (n.forEach && n.forEach !== eT) {
                            n.forEach(q, y, n)
                        } else {
                            if (cn(n)) {
                                for (w in n) {
                                    q.call(y, n[w], w, n)
                                }
                            } else {
                                if ("function" === typeof n.hasOwnProperty) {
                                    for (w in n) {
                                        n.hasOwnProperty(w) && q.call(y, n[w], w, n)
                                    }
                                } else {
                                    for (w in n) {
                                        c1.call(n, w) && q.call(y, n[w], w, n)
                                    }
                                }
                            }
                        }
                    }
                }
            }
            return n
        }

        function bY(n, q, w) {
            for (var v = Object.keys(n).sort(), u = 0; u < v.length; u++) {
                q.call(w, n[v[u]], v[u])
            }
            return v
        }

        function bL(a) {
            return function (n, q) {
                a(q, n)
            }
        }

        function cF() {
            return ++cO
        }

        function bz(n, q) {
            q ? n.$$hashKey = q : delete n.$$hashKey
        }

        function d2(G, K, F) {
            for (var E = G.$$hashKey, C = 0, z = K.length; C < z; ++C) {
                var y = K[C];
                if (fy(y) || fr(y)) {
                    for (var w = Object.keys(y), u = 0, v = w.length; u < v; u++) {
                        var q = w[u], n = y[q];
                        F && fy(n) ? (fy(G[q]) || (G[q] = fo(n) ? [] : {}), d2(G[q], [n], !0)) : G[q] = n
                    }
                }
            }
            bz(G, E);
            return G
        }

        function fl(a) {
            return d2(a, bp.call(arguments, 1), !1)
        }

        function cs(a) {
            return d2(a, bp.call(arguments, 1), !0)
        }

        function e8(a) {
            return parseInt(a, 10)
        }

        function dP(n, q) {
            return fl(Object.create(n), q)
        }

        function eP() {
        }

        function cv(a) {
            return a
        }

        function bB(a) {
            return function () {
                return a
            }
        }

        function eQ(a) {
            return "undefined" === typeof a
        }

        function eN(a) {
            return "undefined" !== typeof a
        }

        function fy(a) {
            return null !== a && "object" === typeof a
        }

        function cn(a) {
            return null !== a && "object" === typeof a && !bn(a)
        }

        function fn(a) {
            return "string" === typeof a
        }

        function fh(a) {
            return "number" === typeof a
        }

        function eH(a) {
            return "[object Date]" === a0.call(a)
        }

        function fr(a) {
            return "function" === typeof a
        }

        function b6(a) {
            return "[object RegExp]" === a0.call(a)
        }

        function cI(a) {
            return a && a.window === a
        }

        function bT(a) {
            return a && a.$evalAsync && a.$watch
        }

        function bG(a) {
            return "boolean" === typeof a
        }

        function aY(a) {
            return !(!a || !(a.nodeName || a.prop && a.attr && a.find))
        }

        function b3(n) {
            var q = {};
            n = n.split(",");
            var u;
            for (u = 0; u < n.length; u++) {
                q[n[u]] = !0
            }
            return q
        }

        function aN(a) {
            return fv(a.nodeName || a[0] && a[0].nodeName)
        }

        function bu(n, q) {
            var u = n.indexOf(q);
            0 <= u && n.splice(u, 1);
            return u
        }

        function aA(n, q, z, y) {
            function w(E, C, L, K, G) {
                var F = aA(C, null, K, G);
                fy(C) && (K.push(C), G.push(F));
                L[E] = F
            }

            if (cI(n) || bT(n)) {
                throw S("cpws")
            }
            if (aL.test(a0.call(q))) {
                throw S("cpta")
            }
            if (q) {
                if (n === q) {
                    throw S("cpi")
                }
                z = z || [];
                y = y || [];
                if (fy(n)) {
                    var v = z.indexOf(n);
                    if (-1 !== v) {
                        return y[v]
                    }
                    z.push(n);
                    y.push(q)
                }
                var u;
                if (fo(n)) {
                    for (v = q.length = 0; v < n.length; v++) {
                        u = aA(n[v], null, z, y), fy(n[v]) && (z.push(n[v]), y.push(u)), q.push(u)
                    }
                } else {
                    v = q.$$hashKey;
                    fo(q) ? q.length = 0 : eT(q, function (a, C) {
                        delete q[C]
                    });
                    if (cn(n)) {
                        for (u in n) {
                            w(u, n[u], q, z, y)
                        }
                    } else {
                        if (n && "function" === typeof n.hasOwnProperty) {
                            for (u in n) {
                                n.hasOwnProperty(u) && w(u, n[u], q, z, y)
                            }
                        } else {
                            for (u in n) {
                                c1.call(n, u) && w(u, n[u], q, z, y)
                            }
                        }
                    }
                    bz(q, v)
                }
            } else {
                if (q = n) {
                    fo(n) ? q = aA(n, [], z, y) : aL.test(a0.call(n)) ? q = new n.constructor(n) : eH(n) ? q = new Date(n.getTime()) : b6(n) ? (q = new RegExp(n.source, n.toString().match(/[^\/]*$/)[0]), q.lastIndex = n.lastIndex) : fy(n) && (u = Object.create(bn(n)), q = aA(n, u, z, y))
                }
            }
            return q
        }

        function eh(n, q) {
            if (fo(n)) {
                q = q || [];
                for (var v = 0, u = n.length; v < u; v++) {
                    q[v] = n[v]
                }
            } else {
                if (fy(n)) {
                    for (v in q = q || {}, n) {
                        if ("$" !== v.charAt(0) || "$" !== v.charAt(1)) {
                            q[v] = n[v]
                        }
                    }
                }
            }
            return q || n
        }

        function c2(n, q) {
            if (n === q) {
                return !0
            }
            if (null === n || null === q) {
                return !1
            }
            if (n !== n && q !== q) {
                return !0
            }
            var v = typeof n, u;
            if (v == typeof q && "object" == v) {
                if (fo(n)) {
                    if (!fo(q)) {
                        return !1
                    }
                    if ((v = n.length) == q.length) {
                        for (u = 0; u < v; u++) {
                            if (!c2(n[u], q[u])) {
                                return !1
                            }
                        }
                        return !0
                    }
                } else {
                    if (eH(n)) {
                        return eH(q) ? c2(n.getTime(), q.getTime()) : !1
                    }
                    if (b6(n)) {
                        return b6(q) ? n.toString() == q.toString() : !1
                    }
                    if (bT(n) || bT(q) || cI(n) || cI(q) || fo(q) || eH(q) || b6(q)) {
                        return !1
                    }
                    v = dX();
                    for (u in n) {
                        if ("$" !== u.charAt(0) && !fr(n[u])) {
                            if (!c2(n[u], q[u])) {
                                return !1
                            }
                            v[u] = !0
                        }
                    }
                    for (u in q) {
                        if (!(u in v || "$" === u.charAt(0) || q[u] === eR || fr(q[u]))) {
                            return !1
                        }
                    }
                    return !0
                }
            }
            return !1
        }

        function a6(n, q, u) {
            return n.concat(bp.call(q, u))
        }

        function ay(n, q) {
            var u = 2 < arguments.length ? bp.call(arguments, 2) : [];
            return !fr(q) || q instanceof RegExp ? q : u.length ? function () {
                return arguments.length ? q.apply(n, a6(u, arguments, 0)) : q.apply(n, u)
            } : function () {
                return arguments.length ? q.apply(n, arguments) : q.call(n)
            }
        }

        function bQ(n, q) {
            var u = q;
            "string" === typeof n && "$" === n.charAt(0) && "$" === n.charAt(1) ? u = eR : cI(q) ? u = "$WINDOW" : q && e9 === q ? u = "$DOCUMENT" : bT(q) && (u = "$SCOPE");
            return u
        }

        function ci(n, q) {
            if ("undefined" === typeof n) {
                return eR
            }
            fh(q) || (q = q ? 2 : null);
            return JSON.stringify(n, bQ, q)
        }

        function ak(a) {
            return fn(a) ? JSON.parse(a) : a
        }

        function D(n, q) {
            var u = Date.parse("Jan 01, 1970 00:00:00 " + n) / 60000;
            return isNaN(u) ? q : u
        }

        function dD(n, q, v) {
            v = v ? -1 : 1;
            var u = D(q, n.getTimezoneOffset());
            q = n;
            n = v * (u - n.getTimezoneOffset());
            q = new Date(q.getTime());
            q.setMinutes(q.getMinutes() + n);
            return q
        }

        function am(n) {
            n = eL(n).clone();
            try {
                n.empty()
            } catch (q) {
            }
            var v = eL("<div>").append(n).html();
            try {
                return n[0].nodeType === fQ ? fv(v) : v.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function (y, w) {
                    return "<" + fv(w)
                })
            } catch (u) {
                return fv(v)
            }
        }

        function i(n) {
            try {
                return decodeURIComponent(n)
            } catch (q) {
            }
        }

        function f3(n) {
            var q = {}, v, u;
            eT((n || "").split("&"), function (a) {
                a && (v = a.replace(/\+/g, "%20").split("="), u = i(v[0]), eN(u) && (a = eN(v[1]) ? i(v[1]) : !0, c1.call(q, u) ? fo(q[u]) ? q[u].push(a) : q[u] = [q[u], a] : q[u] = a))
            });
            return q
        }

        function dr(n) {
            var q = [];
            eT(n, function (a, u) {
                fo(a) ? eT(a, function (v) {
                    q.push(dy(u, !0) + (!0 === v ? "" : "=" + dy(v, !0)))
                }) : q.push(dy(u, !0) + (!0 === a ? "" : "=" + dy(a, !0)))
            });
            return q.length ? q.join("&") : ""
        }

        function cB(a) {
            return dy(a, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
        }

        function dy(n, q) {
            return encodeURIComponent(n).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%20/g, q ? "%20" : "+")
        }

        function bE(n, q) {
            var w, v, u = d3.length;
            for (v = 0; v < u; ++v) {
                if (w = d3[v] + q, fn(w = n.getAttribute(w))) {
                    return w
                }
            }
            return null
        }

        function bs(n, q) {
            var w, v, u = {};
            eT(d3, function (y) {
                y += "app";
                !w && n.hasAttribute && n.hasAttribute(y) && (w = n, v = n.getAttribute(y))
            });
            eT(d3, function (y) {
                y += "app";
                var z;
                !w && (z = n.querySelector("[" + y.replace(":", "\\:") + "]")) && (w = z, v = z.getAttribute(y))
            });
            w && (u.strictDi = null !== bE(w, "strict-di"), q(w, v ? [v] : [], u))
        }

        function fJ(n, q, y) {
            fy(y) || (y = {});
            y = fl({strictDi: !1}, y);
            var w = function () {
                n = eL(n);
                if (n.injector()) {
                    var a = n[0] === e9 ? "document" : am(n);
                    throw S("btstrpd", a.replace(/</, "&lt;").replace(/>/, "&gt;"))
                }
                q = q || [];
                q.unshift(["$provide", function (z) {
                    z.value("$rootElement", n)
                }]);
                y.debugInfoEnabled && q.push(["$compileProvider", function (z) {
                    z.debugInfoEnabled(!0)
                }]);
                q.unshift("ng");
                a = fx(q, y.strictDi);
                a.invoke(["$rootScope", "$rootElement", "$compile", "$injector", function (C, z, F, E) {
                    C.$apply(function () {
                        z.data("$injector", E);
                        F(z)(C)
                    })
                }]);
                return a
            }, v = /^NG_ENABLE_DEBUG_INFO!/, u = /^NG_DEFER_BOOTSTRAP!/;
            fm && v.test(fm.name) && (y.debugInfoEnabled = !0, fm.name = fm.name.replace(v, ""));
            if (fm && !u.test(fm.name)) {
                return w()
            }
            fm.name = fm.name.replace(u, "");
            fS.resumeBootstrap = function (a) {
                eT(a, function (z) {
                    q.push(z)
                });
                return w()
            };
            fr(fS.resumeDeferredBootstrap) && fS.resumeDeferredBootstrap()
        }

        function a3() {
            fm.name = "NG_ENABLE_DEBUG_INFO!" + fm.name;
            fm.location.reload()
        }

        function b9(a) {
            a = fS.element(a).injector();
            if (!a) {
                throw S("test")
            }
            return a.get("$$testability")
        }

        function bh(n, q) {
            q = q || "_";
            return n.replace(fN, function (a, u) {
                return (u ? q : "") + a.toLowerCase()
            })
        }

        function fs() {
            var n;
            if (!aR) {
                var q = co();
                cP = fm.jQuery;
                eN(q) && (cP = null === q ? eR : fm[q]);
                cP && cP.fn.on ? (eL = cP, fl(cP.fn, {
                    scope: dQ.scope,
                    isolateScope: dQ.isolateScope,
                    controller: dQ.controller,
                    injector: dQ.injector,
                    inheritedData: dQ.inheritedData
                }), n = cP.cleanData, cP.cleanData = function (u) {
                    var y;
                    if (c7) {
                        c7 = !1
                    } else {
                        for (var w = 0, v; null != (v = u[w]); w++) {
                            (y = cP._data(v, "events")) && y.$destroy && cP(v).triggerHandler("$destroy")
                        }
                    }
                    n(u)
                }) : eL = fk;
                fS.element = eL;
                aR = !0
            }
        }

        function cU(n, q, u) {
            if (!n) {
                throw S("areq", q || "?", u || "required")
            }
            return n
        }

        function dE(n, q, u) {
            u && fo(n) && (n = n[n.length - 1]);
            cU(fr(n), q, "not a function, got " + (n && "object" === typeof n ? n.constructor.name || "Object" : typeof n));
            return n
        }

        function ds(n, q) {
            if ("hasOwnProperty" === n) {
                throw S("badname", q)
            }
        }

        function aE(n, q, z) {
            if (!q) {
                return n
            }
            q = q.split(".");
            for (var y, w = n, v = q.length, u = 0; u < v; u++) {
                y = q[u], n && (n = (w = n)[y])
            }
            return !z && fr(n) ? ay(w, n) : n
        }

        function bZ(n) {
            var q = n[0];
            n = n[n.length - 1];
            var u = [q];
            do {
                q = q.nextSibling;
                if (!q) {
                    break
                }
                u.push(q)
            } while (q !== n);
            return eL(u)
        }

        function dX() {
            return Object.create(null)
        }

        function eW(n) {
            function q(y, w, z) {
                return y[w] || (y[w] = z())
            }

            var v = ft("$injector"), u = ft("ng");
            n = q(n, "angular", Object);
            n.$$minErr = n.$$minErr || ft;
            return q(n, "module", function () {
                var a = {};
                return function (z, y, w) {
                    if ("hasOwnProperty" === z) {
                        throw u("badname", "module")
                    }
                    y && a.hasOwnProperty(z) && (a[z] = null);
                    return q(a, z, function () {
                        function F(T, R, Q, N) {
                            N || (N = E);
                            return function () {
                                N[Q || "push"]([T, R, arguments]);
                                return C
                            }
                        }

                        if (!y) {
                            throw v("nomod", z)
                        }
                        var E = [], L = [], K = [], G = F("$injector", "invoke", "push", L), C = {
                            _invokeQueue: E,
                            _configBlocks: L,
                            _runBlocks: K,
                            requires: y,
                            name: z,
                            provider: F("$provide", "provider"),
                            factory: F("$provide", "factory"),
                            service: F("$provide", "service"),
                            value: F("$provide", "value"),
                            constant: F("$provide", "constant", "unshift"),
                            decorator: F("$provide", "decorator"),
                            animation: F("$animateProvider", "register"),
                            filter: F("$filterProvider", "register"),
                            controller: F("$controllerProvider", "register"),
                            directive: F("$compileProvider", "directive"),
                            config: G,
                            run: function (N) {
                                K.push(N);
                                return this
                            }
                        };
                        w && G(w);
                        return C
                    })
                }
            })
        }

        function eD(n) {
            fl(n, {
                bootstrap: fJ,
                copy: aA,
                extend: fl,
                merge: cs,
                equals: c2,
                element: eL,
                forEach: eT,
                injector: fx,
                noop: eP,
                bind: ay,
                toJson: ci,
                fromJson: ak,
                identity: cv,
                isUndefined: eQ,
                isDefined: eN,
                isString: fn,
                isFunction: fr,
                isObject: fy,
                isNumber: fh,
                isElement: aY,
                isArray: fo,
                version: eq,
                isDate: eH,
                lowercase: fv,
                uppercase: bM,
                callbacks: {counter: 0},
                getTestability: b9,
                $$minErr: ft,
                $$csp: eZ,
                reloadWithDebugInfo: a3
            });
            eG = eW(fm);
            try {
                eG("ngLocale")
            } catch (q) {
                eG("ngLocale", []).provider("$locale", d6)
            }
            eG("ng", ["ngLocale"], ["$provide", function (u) {
                u.provider({$$sanitizeUri: dT});
                u.provider("$compile", aq).directive({
                    a: dH,
                    input: O,
                    textarea: O,
                    form: du,
                    script: di,
                    select: cY,
                    style: cL,
                    option: cy,
                    ngBind: cl,
                    ngBindHtml: bW,
                    ngBindTemplate: bJ,
                    ngClass: bx,
                    ngClassEven: bl,
                    ngClassOdd: aW,
                    ngCloak: aJ,
                    ngController: aw,
                    ngForm: ai,
                    ngHide: A,
                    ngIf: g,
                    ngInclude: f1,
                    ngInit: fH,
                    ngNonBindable: a9,
                    ngPluralize: aP,
                    ngRepeat: aC,
                    ngShow: ao,
                    ngStyle: J,
                    ngSwitch: m,
                    ngSwitchWhen: f7,
                    ngSwitchDefault: fU,
                    ngOptions: fA,
                    ngTransclude: e3,
                    ngModel: eI,
                    ngList: ew,
                    ngChange: ej,
                    pattern: p,
                    ngPattern: p,
                    required: b,
                    ngRequired: b,
                    minlength: fW,
                    ngMinlength: fW,
                    maxlength: fC,
                    ngMaxlength: fC,
                    ngValue: dZ,
                    ngModelOptions: dM
                }).directive({ngInclude: dA}).directive(bA).directive(e5);
                u.provider({
                    $anchorScroll: dn,
                    $animate: c4,
                    $$animateQueue: cR,
                    $$AnimateRunner: cE,
                    $browser: cr,
                    $cacheFactory: b2,
                    $controller: bP,
                    $document: bD,
                    $exceptionHandler: br,
                    $filter: eK,
                    $interpolate: a2,
                    $interval: b8,
                    $http: fM,
                    $httpParamSerializer: fq,
                    $httpParamSerializerJQLike: eV,
                    $httpBackend: eC,
                    $location: ep,
                    $log: d5,
                    $parse: dS,
                    $rootScope: dG,
                    $q: dh,
                    $$q: cX,
                    $sce: cK,
                    $sceDelegate: cx,
                    $sniffer: ck,
                    $templateCache: bV,
                    $templateRequest: bI,
                    $$testability: bw,
                    $timeout: bk,
                    $window: aV,
                    $$rAF: aI,
                    $$asyncCallback: av,
                    $$jqLite: ah,
                    $$HashMap: x,
                    $$cookieReader: f
                })
            }])
        }

        function et(a) {
            return a.replace(f0, function (q, n, v, u) {
                return u ? v.toUpperCase() : v
            }).replace(fG, "Moz$1")
        }

        function ey(a) {
            a = a.nodeType;
            return a === bN || !a || 9 === a
        }

        function el(n, q) {
            var y, w, v = q.createDocumentFragment(), u = [];
            if (cH.test(n)) {
                y = y || v.appendChild(q.createElement("div"));
                w = (a8.exec(n) || ["", ""])[1].toLowerCase();
                w = cC[w] || cC._default;
                y.innerHTML = w[1] + n.replace(aO, "<$1></$2>") + w[2];
                for (w = w[0]; w--;) {
                    y = y.lastChild
                }
                u = a6(u, y.childNodes);
                y = v.firstChild;
                y.textContent = ""
            } else {
                u.push(q.createTextNode(n))
            }
            v.textContent = "";
            v.innerHTML = "";
            eT(u, function (z) {
                v.appendChild(z)
            });
            return v
        }

        function fk(n) {
            if (n instanceof fk) {
                return n
            }
            var q;
            fn(n) && (n = fj(n), q = !0);
            if (!(this instanceof fk)) {
                if (q && "<" != n.charAt(0)) {
                    throw cu("nosel")
                }
                return new fk(n)
            }
            if (q) {
                q = e9;
                var u;
                n = (u = aB.exec(n)) ? [q.createElement(u[1])] : (u = el(n, q)) ? u.childNodes : []
            }
            d1(this, n)
        }

        function b5(a) {
            return a.cloneNode(!0)
        }

        function bo(n, q) {
            q || aZ(n);
            if (n.querySelectorAll) {
                for (var w = n.querySelectorAll("*"), v = 0, u = w.length; v < u; v++) {
                    aZ(w[v])
                }
            }
        }

        function dO(n, q, y, w) {
            if (eN(w)) {
                throw cu("offargs")
            }
            var v = (w = aM(n)) && w.events, u = w && w.handle;
            if (u) {
                if (q) {
                    eT(q.split(" "), function (z) {
                        if (eN(y)) {
                            var C = v[z];
                            bu(C || [], y);
                            if (C && 0 < C.length) {
                                return
                            }
                        }
                        n.removeEventListener(z, u, !1);
                        delete v[z]
                    })
                } else {
                    for (q in v) {
                        "$destroy" !== q && n.removeEventListener(q, u, !1), delete v[q]
                    }
                }
            }
        }

        function aZ(n, q) {
            var v = n.ng339, u = v && az[v];
            u && (q ? delete u.data[q] : (u.handle && (u.events.$destroy && u.handle({}, "$destroy"), dO(n)), delete az[v], n.ng339 = eR))
        }

        function aM(n, q) {
            var u = n.ng339, u = u && az[u];
            q && !u && (n.ng339 = u = ++an, u = az[u] = {events: {}, data: {}, handle: eR});
            return u
        }

        function bS(n, q, y) {
            if (ey(n)) {
                var w = eN(y), v = !w && q && !fy(q), u = !q;
                n = (n = aM(n, !v)) && n.data;
                if (w) {
                    n[q] = y
                } else {
                    if (u) {
                        return n
                    }
                    if (v) {
                        return n && n[q]
                    }
                    fl(n, q)
                }
            }
        }

        function al(n, q) {
            return n.getAttribute ? -1 < (" " + (n.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + q + " ") : !1
        }

        function H(n, q) {
            q && n.setAttribute && eT(q.split(" "), function (u) {
                n.setAttribute("class", fj((" " + (n.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").replace(" " + fj(u) + " ", " ")))
            })
        }

        function j(n, q) {
            if (q && n.setAttribute) {
                var u = (" " + (n.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");
                eT(q.split(" "), function (v) {
                    v = fj(v);
                    -1 === u.indexOf(" " + v + " ") && (u += v + " ")
                });
                n.setAttribute("class", fj(u))
            }
        }

        function d1(n, q) {
            if (q) {
                if (q.nodeType) {
                    n[n.length++] = q
                } else {
                    var v = q.length;
                    if ("number" === typeof v && q.window !== q) {
                        if (v) {
                            for (var u = 0; u < v; u++) {
                                n[n.length++] = q[u]
                            }
                        }
                    } else {
                        n[n.length++] = q
                    }
                }
            }
        }

        function dC(n, q) {
            return f4(n, "$" + (q || "ngController") + "Controller")
        }

        function f4(n, q, w) {
            9 == n.nodeType && (n = n.documentElement);
            for (q = fo(q) ? q : [q]; n;) {
                for (var v = 0, u = q.length; v < u; v++) {
                    if ((w = eL.data(n, q[v])) !== eR) {
                        return w
                    }
                }
                n = n.parentNode || 11 === n.nodeType && n.host
            }
        }

        function dq(a) {
            for (bo(a, !0); a.firstChild;) {
                a.removeChild(a.firstChild)
            }
        }

        function bF(n, q) {
            q || bo(n);
            var u = n.parentNode;
            u && u.removeChild(n)
        }

        function I(n, q) {
            q = q || fm;
            if ("complete" === q.document.readyState) {
                q.setTimeout(n)
            } else {
                eL(q).on("load", n)
            }
        }

        function c6(n, q) {
            var u = fK[q.toLowerCase()];
            return u && cT[aN(n)] && u
        }

        function l(n, q) {
            var u = n.nodeName;
            return ("INPUT" === u || "TEXTAREA" === u) && cG[q]
        }

        function f6(n, q) {
            var u = function (C, z) {
                C.isDefaultPrevented = function () {
                    return C.defaultPrevented
                };
                var y = q[z || C.type], w = y ? y.length : 0;
                if (w) {
                    if (eQ(C.immediatePropagationStopped)) {
                        var v = C.stopImmediatePropagation;
                        C.stopImmediatePropagation = function () {
                            C.immediatePropagationStopped = !0;
                            C.stopPropagation && C.stopPropagation();
                            v && v.call(C)
                        }
                    }
                    C.isImmediatePropagationStopped = function () {
                        return !0 === C.immediatePropagationStopped
                    };
                    1 < w && (y = eh(y));
                    for (var a = 0; a < w; a++) {
                        C.isImmediatePropagationStopped() || y[a].call(n, C)
                    }
                }
            };
            u.elem = n;
            return u
        }

        function ah() {
            this.$get = function () {
                return fl(fk, {
                    hasClass: function (n, q) {
                        n.attr && (n = n[0]);
                        return al(n, q)
                    }, addClass: function (n, q) {
                        n.attr && (n = n[0]);
                        return j(n, q)
                    }, removeClass: function (n, q) {
                        n.attr && (n = n[0]);
                        return H(n, q)
                    }
                })
            }
        }

        function s(n, q) {
            var u = n && n.$$hashKey;
            if (u) {
                return "function" === typeof u && (u = n.$$hashKey()), u
            }
            u = typeof n;
            return u = "function" == u || "object" == u && null !== n ? n.$$hashKey = u + ":" + (q || cF)() : u + ":" + n
        }

        function c8(n, q) {
            if (q) {
                var u = 0;
                this.nextUid = function () {
                    return ++u
                }
            }
            eT(n, this.put, this)
        }

        function fT(a) {
            return (a = a.toString().replace(ct, "").match(b4)) ? "function(" + (a[1] || "").replace(/[\s\r\n]+/, " ") + ")" : "fn"
        }

        function fx(K, L) {
            function G(R) {
                return function (a, T) {
                    if (fy(a)) {
                        eT(a, bL(R))
                    } else {
                        return R(a, T)
                    }
                }
            }

            function F(T, R) {
                ds(T, "service");
                if (fr(R) || fo(R)) {
                    R = Q.instantiate(R)
                }
                if (!R.$get) {
                    throw d("pget", T)
                }
                return n[T + "Provider"] = R
            }

            function E(T, R) {
                return function () {
                    var a = N.invoke(R, this);
                    if (eQ(a)) {
                        throw d("undef", T)
                    }
                    return a
                }
            }

            function C(T, R, U) {
                return F(T, {$get: !1 !== U ? E(T, R) : R})
            }

            function z(T) {
                var R = [], U;
                eT(T, function (V) {
                    function Y(aa) {
                        var Z, ad;
                        Z = 0;
                        for (ad = aa.length; Z < ad; Z++) {
                            var ac = aa[Z], ab = Q.get(ac[0]);
                            ab[ac[1]].apply(ab, ac[2])
                        }
                    }

                    if (!u.get(V)) {
                        u.put(V, !0);
                        try {
                            fn(V) ? (U = eG(V), R = R.concat(z(U.requires)).concat(U._runBlocks), Y(U._invokeQueue), Y(U._configBlocks)) : fr(V) ? R.push(Q.invoke(V)) : fo(V) ? R.push(Q.invoke(V)) : dE(V, "module")
                        } catch (W) {
                            throw fo(V) && (V = V[V.length - 1]), W.message && W.stack && -1 == W.stack.indexOf(W.message) && (W = W.message + "\n" + W.stack), d("modulerr", V, W.stack || W.message || W)
                        }
                    }
                });
                return R
            }

            function y(a, U) {
                function T(V, Y) {
                    if (a.hasOwnProperty(V)) {
                        if (a[V] === v) {
                            throw d("cdep", V + " <- " + w.join(" <- "))
                        }
                        return a[V]
                    }
                    try {
                        return w.unshift(V), a[V] = v, a[V] = U(V, Y)
                    } catch (W) {
                        throw a[V] === v && delete a[V], W
                    } finally {
                        w.shift()
                    }
                }

                function R(ad, ac, ab, aa) {
                    "string" === typeof ab && (aa = ab, ab = null);
                    var Z = [], Y = fx.$$annotate(ad, L, aa), W, ae, V;
                    ae = 0;
                    for (W = Y.length; ae < W; ae++) {
                        V = Y[ae];
                        if ("string" !== typeof V) {
                            throw d("itkn", V)
                        }
                        Z.push(ab && ab.hasOwnProperty(V) ? ab[V] : T(V, aa))
                    }
                    fo(ad) && (ad = ad[W]);
                    return ad.apply(ac, Z)
                }

                return {
                    invoke: R, instantiate: function (W, V, Z) {
                        var Y = Object.create((fo(W) ? W[W.length - 1] : W).prototype || null);
                        W = R(W, Y, V, Z);
                        return fy(W) || fr(W) ? W : Y
                    }, get: T, annotate: fx.$$annotate, has: function (V) {
                        return n.hasOwnProperty(V + "Provider") || a.hasOwnProperty(V)
                    }
                }
            }

            L = !0 === L;
            var v = {}, w = [], u = new c8([], !0), n = {
                $provide: {
                    provider: G(F), factory: G(C), service: G(function (T, R) {
                        return C(T, ["$injector", function (U) {
                            return U.instantiate(R)
                        }])
                    }), value: G(function (T, R) {
                        return C(T, bB(R), !1)
                    }), constant: G(function (T, R) {
                        ds(T, "constant");
                        n[T] = R;
                        q[T] = R
                    }), decorator: function (T, R) {
                        var V = Q.get(T + "Provider"), U = V.$get;
                        V.$get = function () {
                            var W = N.invoke(U, V);
                            return N.invoke(R, null, {$delegate: W})
                        }
                    }
                }
            }, Q = n.$injector = y(n, function (T, R) {
                fS.isString(R) && w.push(R);
                throw d("unpr", w.join(" <- "))
            }), q = {}, N = q.$injector = y(q, function (T, R) {
                var U = Q.get(T + "Provider", R);
                return N.invoke(U.$get, U, eR, T)
            });
            eT(z(K), function (R) {
                N.invoke(R || eP)
            });
            return N
        }

        function dn() {
            var a = !0;
            this.disableAutoScrolling = function () {
                a = !1
            };
            this.$get = ["$window", "$location", "$rootScope", function (n, z, y) {
                function w(E) {
                    var C = null;
                    Array.prototype.some.call(E, function (F) {
                        if ("a" === aN(F)) {
                            return C = F, !0
                        }
                    });
                    return C
                }

                function v(C) {
                    if (C) {
                        C.scrollIntoView();
                        var E;
                        E = u.yOffset;
                        fr(E) ? E = E() : aY(E) ? (E = E[0], E = "fixed" !== n.getComputedStyle(E).position ? 0 : E.getBoundingClientRect().bottom) : fh(E) || (E = 0);
                        E && (C = C.getBoundingClientRect().top, n.scrollBy(0, C - E))
                    } else {
                        n.scrollTo(0, 0)
                    }
                }

                function u(E) {
                    E = fn(E) ? E : z.hash();
                    var C;
                    E ? (C = q.getElementById(E)) ? v(C) : (C = w(q.getElementsByName(E))) ? v(C) : "top" === E && v(null) : v(null)
                }

                var q = n.document;
                a && y.$watch(function () {
                    return z.hash()
                }, function (E, C) {
                    E === C && "" === E || I(function () {
                        y.$evalAsync(u)
                    })
                });
                return u
            }]
        }

        function d9(n, q) {
            if (!n && !q) {
                return ""
            }
            if (!n) {
                return q
            }
            if (!q) {
                return n
            }
            fo(n) && (n = n.join(" "));
            fo(q) && (q = q.join(" "));
            return n + " " + q
        }

        function fz(n) {
            fn(n) && (n = n.split(" "));
            var q = dX();
            eT(n, function (a) {
                a.length && (q[a] = !0)
            });
            return q
        }

        function fY(a) {
            return fy(a) ? a : {}
        }

        function av() {
            this.$get = ["$$rAF", "$timeout", function (n, q) {
                return n.supported ? function (u) {
                    return n(u)
                } : function (a) {
                    return q(a, 0, !1)
                }
            }]
        }

        function e2(ab, ac, aa, Z) {
            function Y(ad) {
                try {
                    ad.apply(null, bp.call(arguments, 1))
                } finally {
                    if (y--, 0 === y) {
                        for (; u.length;) {
                            try {
                                u.pop()()
                            } catch (q) {
                                aa.error(q)
                            }
                        }
                    }
                }
            }

            function W() {
                V();
                U()
            }

            function V() {
                q:{
                    try {
                        z = Q.state;
                        break q
                    } catch (q) {
                    }
                    z = void 0
                }
                z = eQ(z) ? null : z;
                c2(z, C) && (z = C);
                C = z
            }

            function U() {
                if (w !== R.url() || L !== z) {
                    w = R.url(), L = z, eT(G, function (q) {
                        q(R.url(), z)
                    })
                }
            }

            var R = this, T = ab.location, Q = ab.history, F = ab.setTimeout, E = ab.clearTimeout, N = {};
            R.isMock = !1;
            var y = 0, u = [];
            R.$$completeOutstandingRequest = Y;
            R.$$incOutstandingRequestCount = function () {
                y++
            };
            R.notifyWhenNoOutstandingRequests = function (q) {
                0 === y ? q() : u.push(q)
            };
            var z, L, w = T.href, K = ac.find("base"), v = null;
            V();
            L = z;
            R.url = function (q, ag, af) {
                eQ(af) && (af = null);
                T !== ab.location && (T = ab.location);
                Q !== ab.history && (Q = ab.history);
                if (q) {
                    var ae = L === af;
                    if (w === q && (!Z.history || ae)) {
                        return R
                    }
                    var ad = w && fE(w) === fE(q);
                    w = q;
                    L = af;
                    !Z.history || ad && ae ? (ad || (v = q), ag ? T.replace(q) : ad ? (ag = T, af = q.indexOf("#"), q = -1 === af ? "" : q.substr(af + 1), ag.hash = q) : T.href = q) : (Q[ag ? "replaceState" : "pushState"](af, "", q), V(), L = z);
                    return R
                }
                return v || T.href.replace(/%27/g, "'")
            };
            R.state = function () {
                return z
            };
            var G = [], n = !1, C = null;
            R.onUrlChange = function (q) {
                if (!n) {
                    if (Z.history) {
                        eL(ab).on("popstate", W)
                    }
                    eL(ab).on("hashchange", W);
                    n = !0
                }
                G.push(q);
                return q
            };
            R.$$applicationDestroyed = function () {
                eL(ab).off("hashchange popstate", W)
            };
            R.$$checkUrlChange = U;
            R.baseHref = function () {
                var q = K.attr("href");
                return q ? q.replace(/^(https?\:)?\/\/[^\/]*/, "") : ""
            };
            R.defer = function (ad, q) {
                var ae;
                y++;
                ae = F(function () {
                    delete N[ae];
                    Y(ad)
                }, q || 0);
                N[ae] = !0;
                return ae
            };
            R.defer.cancel = function (q) {
                return N[q] ? (delete N[q], E(q), Y(eP), !0) : !1
            }
        }

        function cr() {
            this.$get = ["$window", "$log", "$sniffer", "$document", function (n, q, v, u) {
                return new e2(n, u, q, v)
            }]
        }

        function b2() {
            this.$get = function () {
                function n(G, F) {
                    function E(L) {
                        L != a && (K ? K == L && (K = L.n) : K = L, C(L.n, L.p), C(L, a), a = L, a.n = null)
                    }

                    function C(N, L) {
                        N != L && (N && (N.p = L), L && (L.n = N))
                    }

                    if (G in q) {
                        throw ft("$cacheFactory")("iid", G)
                    }
                    var z = 0, y = fl({}, F, {id: G}), v = {}, w = F && F.capacity || Number.MAX_VALUE, u = {},
                        a = null, K = null;
                    return q[G] = {
                        put: function (N, L) {
                            if (!eQ(L)) {
                                if (w < Number.MAX_VALUE) {
                                    var Q = u[N] || (u[N] = {key: N});
                                    E(Q)
                                }
                                N in v || z++;
                                v[N] = L;
                                z > w && this.remove(K.key);
                                return L
                            }
                        }, get: function (N) {
                            if (w < Number.MAX_VALUE) {
                                var L = u[N];
                                if (!L) {
                                    return
                                }
                                E(L)
                            }
                            return v[N]
                        }, remove: function (N) {
                            if (w < Number.MAX_VALUE) {
                                var L = u[N];
                                if (!L) {
                                    return
                                }
                                L == a && (a = L.p);
                                L == K && (K = L.n);
                                C(L.n, L.p);
                                delete u[N]
                            }
                            delete v[N];
                            z--
                        }, removeAll: function () {
                            v = {};
                            z = 0;
                            u = {};
                            a = K = null
                        }, destroy: function () {
                            u = y = v = null;
                            delete q[G]
                        }, info: function () {
                            return fl({}, y, {size: z})
                        }
                    }
                }

                var q = {};
                n.info = function () {
                    var a = {};
                    eT(q, function (u, v) {
                        a[v] = u.info()
                    });
                    return a
                };
                n.get = function (a) {
                    return q[a]
                };
                return n
            }
        }

        function bV() {
            this.$get = ["$cacheFactory", function (a) {
                return a("templates")
            }]
        }

        function aq(F, G) {
            function E(N, L, T) {
                var R = /^\s*([@&]|=(\*?))(\??)\s*(\w*)\s*$/, Q = {};
                eT(N, function (U, W) {
                    var V = U.match(R);
                    if (!V) {
                        throw eu("iscp", L, W, U, T ? "controller bindings definition" : "isolate scope definition")
                    }
                    Q[W] = {mode: V[1][0], collection: "*" === V[2], optional: "?" === V[3], attrName: V[4] || W}
                });
                return Q
            }

            function C(N) {
                var L = N.charAt(0);
                if (!L || L !== fv(L)) {
                    throw eu("baddir", N)
                }
                if (N !== N.trim()) {
                    throw eu("baddir", N)
                }
            }

            var z = {}, y = /^\s*directive\:\s*([\w\-]+)\s+(.*)$/, w = /(([\w\-]+)(?:\:([^;]+))?;?)/,
                v = b3("ngSrc,ngSrcset,src,srcset"), q = /^(?:(\^\^?)?(\?)?(\^\^?)?)?/, u = /^(on[a-z]+|formaction)$/;
            this.directive = function K(L, N) {
                ds(L, "directive");
                fn(L) ? (C(L), cU(N, "directiveFactory"), z.hasOwnProperty(L) || (z[L] = [], F.factory(L + "Directive", ["$injector", "$exceptionHandler", function (a, R) {
                    var Q = [];
                    eT(z[L], function (ac, aa) {
                        try {
                            var Z = a.invoke(ac);
                            fr(Z) ? Z = {compile: bB(Z)} : !Z.compile && Z.link && (Z.compile = bB(Z.link));
                            Z.priority = Z.priority || 0;
                            Z.index = aa;
                            Z.name = Z.name || L;
                            Z.require = Z.require || Z.controller && Z.name;
                            Z.restrict = Z.restrict || "EA";
                            var Y = Z, W = Z, ag = Z.name, V = {isolateScope: null, bindToController: null};
                            fy(W.scope) && (!0 === W.bindToController ? (V.bindToController = E(W.scope, ag, !0), V.isolateScope = {}) : V.isolateScope = E(W.scope, ag, !1));
                            fy(W.bindToController) && (V.bindToController = E(W.bindToController, ag, !0));
                            if (fy(V.bindToController)) {
                                var ae = W.controller, ad = W.controllerAs;
                                if (!ae) {
                                    throw eu("noctrl", ag)
                                }
                                var ab;
                                L:if (ad && fn(ad)) {
                                    ab = ad
                                } else {
                                    if (fn(ae)) {
                                        var U = bR.exec(ae);
                                        if (U) {
                                            ab = U[3];
                                            break L
                                        }
                                    }
                                    ab = void 0
                                }
                                if (!ab) {
                                    throw eu("noident", ag)
                                }
                            }
                            var T = Y.$$bindings = V;
                            fy(T.isolateScope) && (Z.$$isolateBindings = T.isolateScope);
                            Q.push(Z)
                        } catch (af) {
                            R(af)
                        }
                    });
                    return Q
                }])), z[L].push(N)) : eT(L, bL(K));
                return this
            };
            this.aHrefSanitizationWhitelist = function (a) {
                return eN(a) ? (G.aHrefSanitizationWhitelist(a), this) : G.aHrefSanitizationWhitelist()
            };
            this.imgSrcSanitizationWhitelist = function (a) {
                return eN(a) ? (G.imgSrcSanitizationWhitelist(a), this) : G.imgSrcSanitizationWhitelist()
            };
            var n = !0;
            this.debugInfoEnabled = function (L) {
                return eN(L) ? (n = L, this) : n
            };
            this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$templateRequest", "$parse", "$controller", "$rootScope", "$document", "$sce", "$animate", "$$sanitizeUri", function (fd, fc, fb, eg, eb, ed, dg, ec, bf, cd, bb) {
                function cc(R, N) {
                    try {
                        R.addClass(N)
                    } catch (U) {
                    }
                }

                function ac(R, N, aa, Z, Y) {
                    R instanceof eL || (R = eL(R));
                    eT(R, function (a, ca) {
                        a.nodeType == fQ && a.nodeValue.match(/\S+/) && (R[ca] = eL(a).wrap("<span></span>").parent()[0])
                    });
                    var V = af(R, N, R, aa, Z, Y);
                    ac.$$addScopeClass(R);
                    var U = null;
                    return function (a, fg, ff) {
                        cU(a, "scope");
                        ff = ff || {};
                        var fa = ff.parentBoundTranscludeFn, da = ff.transcludeControllers;
                        ff = ff.futureParentElement;
                        fa && fa.$$boundTransclude && (fa = fa.$$boundTransclude);
                        U || (U = (ff = ff && ff[0]) ? "foreignobject" !== aN(ff) && ff.toString().match(/SVG/) ? "svg" : "html" : "html");
                        ff = "html" !== U ? eL(ef(U, eL("<div>").append(R).html())) : fg ? dQ.clone.call(R) : R;
                        if (da) {
                            for (var ca in da) {
                                ff.data("$" + ca + "Controller", da[ca].instance)
                            }
                        }
                        ac.$$addScopeInfo(ff, a);
                        fg && fg(ff, a);
                        V && V(a, ff, ff, fa);
                        return ff
                    }
                }

                function af(f9, fg, ff, fa, da, ca) {
                    function aa(gk, gj, gi, gh) {
                        var gg, ge, gf, gd, gl, gb, gc;
                        if (R) {
                            for (gc = Array(gj.length), gd = 0; gd < Z.length; gd += 3) {
                                gg = Z[gd], gc[gg] = gj[gg]
                            }
                        } else {
                            gc = gj
                        }
                        gd = 0;
                        for (gl = Z.length; gd < gl;) {
                            if (ge = gc[Z[gd++]], gj = Z[gd++], gg = Z[gd++], gj) {
                                if (gj.scope) {
                                    if (gf = gk.$new(), ac.$$addScopeInfo(eL(ge), gf), gb = gj.$$destroyBindings) {
                                        gj.$$destroyBindings = null, gf.$on("$destroyed", gb)
                                    }
                                } else {
                                    gf = gk
                                }
                                gb = gj.transcludeOnThisElement ? fe(gk, gj.transclude, gh, gj.elementTranscludeOnThisElement) : !gj.templateOnThisElement && gh ? gh : !gh && fg ? fe(gk, fg) : null;
                                gj(gg, gf, ge, gi, gb, gj)
                            } else {
                                gg && gg(gk, ge.childNodes, eR, gh)
                            }
                        }
                    }

                    for (var Z = [], V, Y, U, ga, R, N = 0; N < f9.length; N++) {
                        V = new ce;
                        Y = L(f9[N], [], V, 0 === N ? fa : eR, da);
                        (ca = Y.length ? be(Y, f9[N], V, fg, ff, null, [], [], ca) : null) && ca.scope && ac.$$addScopeClass(V.$$element);
                        V = ca && ca.terminal || !(U = f9[N].childNodes) || !U.length ? null : af(U, ca ? (ca.transcludeOnThisElement || !ca.templateOnThisElement) && ca.transclude : fg);
                        if (ca || V) {
                            Z.push(N, ca, V), ga = !0, R = R || ca
                        }
                        ca = null
                    }
                    return ga ? aa : null
                }

                function fe(R, N, V, U) {
                    return function (ca, aa, Z, Y, a) {
                        ca || (ca = R.$new(!1, a), ca.$$transcluded = !0);
                        return N(ca, aa, {parentBoundTranscludeFn: V, transcludeControllers: Z, futureParentElement: Y})
                    }
                }

                function L(gb, ga, f9, fg, fa) {
                    var aa = f9.$attr, Y;
                    switch (gb.nodeType) {
                        case bN:
                            ea(ga, k(aN(gb)), "E", fg, fa);
                            for (var Z, V, gd, R = gb.attributes, N = 0, U = R && R.length; N < U; N++) {
                                var gc = !1, ff = !1;
                                Z = R[N];
                                Y = Z.name;
                                V = fj(Z.value);
                                Z = k(Y);
                                if (gd = de.test(Z)) {
                                    Y = Y.replace(bt, "").substr(8).replace(/_(.)/g, function (gf, ge) {
                                        return ge.toUpperCase()
                                    })
                                }
                                var ca = Z.replace(/(Start|End)$/, "");
                                cb(ca) && Z === ca + "Start" && (gc = Y, ff = Y.substr(0, Y.length - 5) + "end", Y = Y.substr(0, Y.length - 6));
                                Z = k(Y.toLowerCase());
                                aa[Z] = Y;
                                if (gd || !f9.hasOwnProperty(Z)) {
                                    f9[Z] = V, c6(gb, Z) && (f9[Z] = !0)
                                }
                                W(gb, ga, V, Z, gd);
                                ea(ga, Z, "A", fg, fa, gc, ff)
                            }
                            gb = gb.className;
                            fy(gb) && (gb = gb.animVal);
                            if (fn(gb) && "" !== gb) {
                                for (; Y = w.exec(gb);) {
                                    Z = k(Y[2]), ea(ga, Z, "C", fg, fa) && (f9[Z] = fj(Y[3])), gb = gb.substr(Y.index + Y[0].length)
                                }
                            }
                            break;
                        case fQ:
                            ag(ga, gb.nodeValue);
                            break;
                        case 8:
                            try {
                                if (Y = y.exec(gb.nodeValue)) {
                                    Z = k(Y[1]), ea(ga, Z, "M", fg, fa) && (f9[Z] = fj(Y[2]))
                                }
                            } catch (da) {
                            }
                    }
                    ga.sort(ee);
                    return ga
                }

                function ae(R, N, Y) {
                    var V = [], U = 0;
                    if (N && R.hasAttribute && R.hasAttribute(N)) {
                        do {
                            if (!R) {
                                throw eu("uterdir", N, Y)
                            }
                            R.nodeType == bN && (R.hasAttribute(N) && U++, R.hasAttribute(Y) && U--);
                            V.push(R);
                            R = R.nextSibling
                        } while (0 < U)
                    } else {
                        V.push(R)
                    }
                    return eL(V)
                }

                function bg(R, N, U) {
                    return function (aa, Z, Y, V, a) {
                        Z = ae(Z[0], N, U);
                        return R(aa, Z, Y, V, a)
                    }
                }

                function be(gw, gv, gu, gt, gs, gr, gq, gp, go) {
                    function gj(V, R, gy, gx) {
                        if (V) {
                            gy && (V = bg(V, gy, gx));
                            V.require = f9.require;
                            V.directiveName = gd;
                            if (gh === f9 || f9.$$isolateScope) {
                                V = Q(V, {isolateScope: !0})
                            }
                            gq.push(V)
                        }
                        if (R) {
                            gy && (R = bg(R, gy, gx));
                            R.require = f9.require;
                            R.directiveName = gd;
                            if (gh === f9 || f9.$$isolateScope) {
                                R = Q(R, {isolateScope: !0})
                            }
                            gp.push(R)
                        }
                    }

                    function gl(V, R, gB, gA) {
                        var gz;
                        if (fn(R)) {
                            var gy = R.match(q);
                            R = R.substring(gy[0].length);
                            var gx = gy[1] || gy[3], gy = "?" === gy[2];
                            "^^" === gx ? gB = gB.parent() : gz = (gz = gA && gA[R]) && gz.instance;
                            gz || (gA = "$" + R + "Controller", gz = gx ? gB.inheritedData(gA) : gB.data(gA));
                            if (!gz && !gy) {
                                throw eu("ctreq", R, V)
                            }
                        } else {
                            if (fo(R)) {
                                for (gz = [], gx = 0, gy = R.length; gx < gy; gx++) {
                                    gz[gx] = gl(V, R[gx], gB, gA)
                                }
                            }
                        }
                        return gz || null
                    }

                    function gm(gF, gE, gD, gC, gB, gA) {
                        var gz = dX(), gy;
                        for (gy in gC) {
                            var V = gC[gy], gx = {
                                $scope: V === gh || V.$$isolateScope ? gB : gA,
                                $element: gF,
                                $attrs: gE,
                                $transclude: gD
                            }, R = V.controller;
                            "@" == R && (R = gE[V.name]);
                            gx = ed(R, gx, !0, V.controllerAs);
                            gz[V.name] = gx;
                            gk || gF.data("$" + V.name + "Controller", gx.instance)
                        }
                        return gz
                    }

                    function fg(gM, gL, gK, gJ, gI, gH) {
                        function gG(gO, gN, gQ) {
                            var gP;
                            bT(gO) || (gQ = gN, gN = gO, gO = eR);
                            gk && (gP = gF);
                            gQ || (gQ = gk ? R.parent() : R);
                            return gI(gO, gN, gP, gQ, V)
                        }

                        var gD, gE, gC, gx, gF, gy, R;
                        gv === gK ? (gJ = gu, R = gu.$$element) : (R = eL(gK), gJ = new ce(R, gu));
                        gh && (gx = gL.$new(!0));
                        gI && (gy = gG, gy.$$boundTransclude = gI);
                        da && (gF = gm(R, gJ, gy, da, gx, gL));
                        gh && (ac.$$addScopeInfo(R, gx, !0, !(gi && (gi === gh || gi === gh.$$originalDirective))), ac.$$addScopeClass(R, !0), gx.$$isolateBindings = gh.$$isolateBindings, T(gL, gJ, gx, gx.$$isolateBindings, gh, gx));
                        if (gF) {
                            var gA = gh || ff, gz;
                            gA && gF[gA.name] && (gE = gA.$$bindings.bindToController, (gC = gF[gA.name]) && gC.identifier && gE && (gz = gC, gH.$$destroyBindings = T(gL, gJ, gC.instance, gE, gA)));
                            for (gD in gF) {
                                gC = gF[gD];
                                var gB = gC();
                                gB !== gC.instance && (gC.instance = gB, R.data("$" + f9.name + "Controller", gB), gC === gz && (gH.$$destroyBindings(), gH.$$destroyBindings = T(gL, gJ, gB, gE, gA)))
                            }
                        }
                        gD = 0;
                        for (gH = gq.length; gD < gH; gD++) {
                            gE = gq[gD], db(gE, gE.isolateScope ? gx : gL, R, gJ, gE.require && gl(gE.directiveName, gE.require, R, gF), gy)
                        }
                        var V = gL;
                        gh && (gh.template || null === gh.templateUrl) && (V = gx);
                        gM && gM(V, gK.childNodes, eR, gI);
                        for (gD = gp.length - 1; 0 <= gD; gD--) {
                            gE = gp[gD], db(gE, gE.isolateScope ? gx : gL, R, gJ, gE.require && gl(gE.directiveName, gE.require, R, gF), gy)
                        }
                    }

                    go = go || {};
                    for (var fa = -Number.MAX_VALUE, ff, da = go.controllerDirectives, gh = go.newIsolateScopeDirective, gi = go.templateDirective, gn = go.nonTlbTranscludeDirective, gb = !1, ga = !1, gk = go.hasElementTranscludeDirective, Y = gu.$$element = eL(gv), f9, gd, ge, U = gt, gc, gf = 0, gg = gw.length; gf < gg; gf++) {
                        f9 = gw[gf];
                        var N = f9.$$start, ca = f9.$$end;
                        N && (Y = ae(gv, N, ca));
                        ge = eR;
                        if (fa > f9.priority) {
                            break
                        }
                        if (ge = f9.scope) {
                            f9.templateUrl || (fy(ge) ? (bc("new/isolated scope", gh || ff, f9, Y), gh = f9) : bc("new/isolated scope", gh, f9, Y)), ff = ff || f9
                        }
                        gd = f9.name;
                        !f9.templateUrl && f9.controller && (ge = f9.controller, da = da || dX(), bc("'" + gd + "' controller", da[gd], f9, Y), da[gd] = f9);
                        if (ge = f9.transclude) {
                            gb = !0, f9.$$tlb || (bc("transclusion", gn, f9, Y), gn = f9), "element" == ge ? (gk = !0, fa = f9.priority, ge = Y, Y = gu.$$element = eL(e9.createComment(" " + gd + ": " + gu[gd] + " ")), gv = Y[0], ab(gs, bp.call(ge, 0), gv), U = ac(ge, gt, fa, gr && gr.name, {nonTlbTranscludeDirective: gn})) : (ge = eL(b5(gv)).contents(), Y.empty(), U = ac(ge, gt))
                        }
                        if (f9.template) {
                            if (ga = !0, bc("template", gi, f9, Y), gi = f9, ge = fr(f9.template) ? f9.template(Y, gu) : f9.template, ge = dd(ge), f9.replace) {
                                gr = f9;
                                ge = cH.test(ge) ? a4(ef(f9.templateNamespace, fj(ge))) : [];
                                gv = ge[0];
                                if (1 != ge.length || gv.nodeType !== bN) {
                                    throw eu("tplrt", gd, "")
                                }
                                ab(gs, Y, gv);
                                gg = {$attr: {}};
                                ge = L(gv, [], gg);
                                var aa = gw.splice(gf + 1, gw.length - (gf + 1));
                                gh && df(ge);
                                gw = gw.concat(ge).concat(aa);
                                bd(gu, gg);
                                gg = gw.length
                            } else {
                                Y.html(ge)
                            }
                        }
                        if (f9.templateUrl) {
                            ga = !0, bc("template", gi, f9, Y), gi = f9, f9.replace && (gr = f9), fg = cg(gw.splice(gf, gw.length - gf), Y, gu, gs, gb && U, gq, gp, {
                                controllerDirectives: da,
                                newIsolateScopeDirective: gh,
                                templateDirective: gi,
                                nonTlbTranscludeDirective: gn
                            }), gg = gw.length
                        } else {
                            if (f9.compile) {
                                try {
                                    gc = f9.compile(Y, gu, U), fr(gc) ? gj(null, gc, N, ca) : gc && gj(gc.pre, gc.post, N, ca)
                                } catch (Z) {
                                    fb(Z, am(Y))
                                }
                            }
                        }
                        f9.terminal && (fg.terminal = !0, fa = Math.max(fa, f9.priority))
                    }
                    fg.scope = ff && !0 === ff.scope;
                    fg.transcludeOnThisElement = gb;
                    fg.elementTranscludeOnThisElement = gk;
                    fg.templateOnThisElement = ga;
                    fg.transclude = U;
                    go.hasElementTranscludeDirective = gk;
                    return fg
                }

                function df(R) {
                    for (var N = 0, U = R.length; N < U; N++) {
                        R[N] = dP(R[N], {$$isolateScope: !0})
                    }
                }

                function ea(fa, da, ca, aa, Z, V, Y) {
                    if (da === Z) {
                        return null
                    }
                    Z = null;
                    if (z.hasOwnProperty(da)) {
                        var U;
                        da = fd.get(da + "Directive");
                        for (var N = 0, a = da.length; N < a; N++) {
                            try {
                                U = da[N], (aa === eR || aa > U.priority) && -1 != U.restrict.indexOf(ca) && (V && (U = dP(U, {
                                    $$start: V,
                                    $$end: Y
                                })), fa.push(U), Z = U)
                            } catch (R) {
                                fb(R)
                            }
                        }
                    }
                    return Z
                }

                function cb(a) {
                    if (z.hasOwnProperty(a)) {
                        for (var U = fd.get(a + "Directive"), R = 0, N = U.length; R < N; R++) {
                            if (a = U[R], a.multiElement) {
                                return !0
                            }
                        }
                    }
                    return !1
                }

                function bd(R, N) {
                    var Y = N.$attr, V = R.$attr, U = R.$$element;
                    eT(R, function (Z, a) {
                        "$" != a.charAt(0) && (N[a] && N[a] !== Z && (Z += ("style" === a ? ";" : " ") + N[a]), R.$set(a, Z, !0, Y[a]))
                    });
                    eT(N, function (a, Z) {
                        "class" == Z ? (cc(U, a), R["class"] = (R["class"] ? R["class"] + " " : "") + a) : "style" == Z ? (U.attr("style", U.attr("style") + ";" + a), R.style = (R.style ? R.style + ";" : "") + a) : "$" == Z.charAt(0) || R.hasOwnProperty(Z) || (R[Z] = a, V[Z] = Y[Z])
                    })
                }

                function cg(ga, f9, fg, ff, fa, ca, aa, Y) {
                    var Z = [], V, gc, R = f9[0], N = ga.shift(),
                        U = dP(N, {templateUrl: null, transclude: null, replace: null, $$originalDirective: N}),
                        gb = fr(N.templateUrl) ? N.templateUrl(f9, fg) : N.templateUrl, da = N.templateNamespace;
                    f9.empty();
                    eg(bf.getTrustedResourceUrl(gb)).then(function (gh) {
                        var gi, gf;
                        gh = dd(gh);
                        if (N.replace) {
                            gh = cH.test(gh) ? a4(ef(da, fj(gh))) : [];
                            gi = gh[0];
                            if (1 != gh.length || gi.nodeType !== bN) {
                                throw eu("tplrt", N.name, gb)
                            }
                            gh = {$attr: {}};
                            ab(ff, f9, gi);
                            var a = L(gi, [], gh);
                            fy(N.scope) && df(a);
                            ga = a.concat(ga);
                            bd(fg, gh)
                        } else {
                            gi = R, f9.html(gh)
                        }
                        ga.unshift(U);
                        V = be(ga, gi, fg, fa, f9, N, ca, aa, Y);
                        eT(ff, function (gj, gk) {
                            gj == gi && (ff[gk] = f9[0])
                        });
                        for (gc = af(f9[0].childNodes, fa); Z.length;) {
                            gh = Z.shift();
                            gf = Z.shift();
                            var ge = Z.shift(), gd = Z.shift(), a = f9[0];
                            if (!gh.$$destroyed) {
                                if (gf !== R) {
                                    var gg = gf.className;
                                    Y.hasElementTranscludeDirective && N.replace || (a = b5(gi));
                                    ab(ge, eL(gf), a);
                                    cc(eL(a), gg)
                                }
                                gf = V.transcludeOnThisElement ? fe(gh, V.transclude, gd) : gd;
                                V(gc, gh, a, ff, gf, V)
                            }
                        }
                        Z = null
                    });
                    return function (ge, gd, gh, gg, gf) {
                        ge = gf;
                        gd.$$destroyed || (Z ? Z.push(gd, gh, gg, ge) : (V.transcludeOnThisElement && (ge = fe(gd, V.transclude, gf)), V(gc, gd, gh, gg, ge, V)))
                    }
                }

                function ee(R, N) {
                    var U = N.priority - R.priority;
                    return 0 !== U ? U : R.name !== N.name ? R.name < N.name ? -1 : 1 : R.index - N.index
                }

                function bc(R, N, V, U) {
                    if (N) {
                        throw eu("multidir", N.name, V.name, R, am(U))
                    }
                }

                function ag(N, U) {
                    var R = fc(U, !0);
                    R && N.push({
                        priority: 0, compile: function (Y) {
                            Y = Y.parent();
                            var V = !!Y.length;
                            V && ac.$$addBindingClass(Y);
                            return function (Z, ca) {
                                var aa = ca.parent();
                                V || ac.$$addBindingClass(aa);
                                ac.$$addBindingInfo(aa, R.expressions);
                                Z.$watch(R, function (da) {
                                    ca[0].nodeValue = da
                                })
                            }
                        }
                    })
                }

                function ef(R, N) {
                    R = fv(R || "html");
                    switch (R) {
                        case"svg":
                        case"math":
                            var U = e9.createElement("div");
                            U.innerHTML = "<" + R + ">" + N + "</" + R + ">";
                            return U.childNodes[0].childNodes;
                        default:
                            return N
                    }
                }

                function ad(R, N) {
                    if ("srcdoc" == N) {
                        return bf.HTML
                    }
                    var U = aN(R);
                    if ("xlinkHref" == N || "form" == U && "action" == N || "img" != U && ("src" == N || "ngSrc" == N)) {
                        return bf.RESOURCE_URL
                    }
                }

                function W(R, aa, Z, Y, V) {
                    var U = ad(R, Y);
                    V = v[Y] || V;
                    var N = fc(Z, !0, U, V);
                    if (N) {
                        if ("multiple" === Y && "select" === aN(R)) {
                            throw eu("selmulti", am(R))
                        }
                        aa.push({
                            priority: 100, compile: function () {
                                return {
                                    pre: function (da, ff, fa) {
                                        ff = fa.$$observers || (fa.$$observers = {});
                                        if (u.test(Y)) {
                                            throw eu("nodomevents")
                                        }
                                        var ca = fa[Y];
                                        ca !== Z && (N = ca && fc(ca, !0, U, V), Z = ca);
                                        N && (fa[Y] = N(da), (ff[Y] || (ff[Y] = [])).$$inter = !0, (fa.$$observers && fa.$$observers[Y].$$scope || da).$watch(N, function (f9, fg) {
                                            "class" === Y && f9 != fg ? fa.$updateClass(f9, fg) : fa.$set(Y, f9)
                                        }))
                                    }
                                }
                            }
                        })
                    }
                }

                function ab(da, ca, aa) {
                    var Z = ca[0], Y = ca.length, V = Z.parentNode, U, R;
                    if (da) {
                        for (U = 0, R = da.length; U < R; U++) {
                            if (da[U] == Z) {
                                da[U++] = aa;
                                R = U + Y - 1;
                                for (var N = da.length; U < N; U++, R++) {
                                    R < N ? da[U] = da[R] : delete da[U]
                                }
                                da.length -= Y - 1;
                                da.context === Z && (da.context = aa);
                                break
                            }
                        }
                    }
                    V && V.replaceChild(aa, Z);
                    da = e9.createDocumentFragment();
                    da.appendChild(Z);
                    eL(aa).data(eL(Z).data());
                    cP ? (c7 = !0, cP.cleanData([Z])) : delete eL.cache[Z[eL.expando]];
                    Z = 1;
                    for (Y = ca.length; Z < Y; Z++) {
                        V = ca[Z], eL(V).remove(), da.appendChild(V), delete ca[Z]
                    }
                    ca[0] = aa;
                    ca.length = 1
                }

                function Q(R, N) {
                    return fl(function () {
                        return R.apply(null, arguments)
                    }, R, N)
                }

                function db(R, N, aa, Z, Y, V) {
                    try {
                        R(N, aa, Z, Y, V)
                    } catch (U) {
                        fb(U, am(aa))
                    }
                }

                function T(N, aa, Z, Y, V, U) {
                    var R;
                    eT(Y, function (f9, ff) {
                        var ca = f9.attrName, da = f9.optional, a, fa, fg, ga;
                        switch (f9.mode) {
                            case"@":
                                aa.$observe(ca, function (gb) {
                                    Z[ff] = gb
                                });
                                aa.$$observers[ca].$$scope = N;
                                aa[ca] && (Z[ff] = fc(aa[ca])(N));
                                break;
                            case"=":
                                if (da && !aa[ca]) {
                                    break
                                }
                                fa = eb(aa[ca]);
                                ga = fa.literal ? c2 : function (gc, gb) {
                                    return gc === gb || gc !== gc && gb !== gb
                                };
                                fg = fa.assign || function () {
                                    a = Z[ff] = fa(N);
                                    throw eu("nonassign", aa[ca], V.name)
                                };
                                a = Z[ff] = fa(N);
                                da = function (gb) {
                                    ga(gb, Z[ff]) || (ga(gb, a) ? fg(N, gb = Z[ff]) : Z[ff] = gb);
                                    return a = gb
                                };
                                da.$stateful = !0;
                                da = f9.collection ? N.$watchCollection(aa[ca], da) : N.$watch(eb(aa[ca], da), null, fa.literal);
                                R = R || [];
                                R.push(da);
                                break;
                            case"&":
                                if (!aa.hasOwnProperty(ca) && da) {
                                    break
                                }
                                fa = eb(aa[ca]);
                                if (fa === eP && da) {
                                    break
                                }
                                Z[ff] = function (gb) {
                                    return fa(N, gb)
                                }
                        }
                    });
                    Y = R ? function () {
                        for (var da = 0, ca = R.length; da < ca; ++da) {
                            R[da]()
                        }
                    } : eP;
                    return U && Y !== eP ? (U.$on("$destroy", Y), eP) : Y
                }

                var ce = function (R, N) {
                    if (N) {
                        var Z = Object.keys(N), Y, V, U;
                        Y = 0;
                        for (V = Z.length; Y < V; Y++) {
                            U = Z[Y], this[U] = N[U]
                        }
                    } else {
                        this.$attr = {}
                    }
                    this.$$element = R
                };
                ce.prototype = {
                    $normalize: k, $addClass: function (N) {
                        N && 0 < N.length && cd.addClass(this.$$element, N)
                    }, $removeClass: function (N) {
                        N && 0 < N.length && cd.removeClass(this.$$element, N)
                    }, $updateClass: function (R, N) {
                        var U = fO(R, N);
                        U && U.length && cd.addClass(this.$$element, U);
                        (U = fO(N, R)) && U.length && cd.removeClass(this.$$element, U)
                    }, $set: function (fa, da, ca, aa) {
                        var Z = this.$$element[0], Y = c6(Z, fa), V = l(Z, fa), Z = fa;
                        Y ? (this.$$element.prop(fa, da), aa = Y) : V && (this[V] = da, Z = V);
                        this[fa] = da;
                        aa ? this.$attr[fa] = aa : (aa = this.$attr[fa]) || (this.$attr[fa] = aa = bh(fa, "-"));
                        Y = aN(this.$$element);
                        if ("a" === Y && "href" === fa || "img" === Y && "src" === fa) {
                            this[fa] = da = bb(da, "src" === fa)
                        } else {
                            if ("img" === Y && "srcset" === fa) {
                                for (var Y = "", V = fj(da), R = /(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/, R = /\s/.test(V) ? R : /(,)/, V = V.split(R), R = Math.floor(V.length / 2), U = 0; U < R; U++) {
                                    var N = 2 * U, Y = Y + bb(fj(V[N]), !0), Y = Y + (" " + fj(V[N + 1]))
                                }
                                V = fj(V[2 * U]).split(/\s/);
                                Y += bb(fj(V[0]), !0);
                                2 === V.length && (Y += " " + fj(V[1]));
                                this[fa] = da = Y
                            }
                        }
                        !1 !== ca && (null === da || da === eR ? this.$$element.removeAttr(aa) : this.$$element.attr(aa, da));
                        (fa = this.$$observers) && eT(fa[Z], function (ff) {
                            try {
                                ff(da)
                            } catch (fg) {
                                fb(fg)
                            }
                        })
                    }, $observe: function (R, N) {
                        var Y = this, V = Y.$$observers || (Y.$$observers = dX()), U = V[R] || (V[R] = []);
                        U.push(N);
                        dg.$evalAsync(function () {
                            !U.$$inter && Y.hasOwnProperty(R) && N(Y[R])
                        });
                        return function () {
                            bu(U, N)
                        }
                    }
                };
                var dc = fc.startSymbol(), cf = fc.endSymbol(), dd = "{{" == dc || "}}" == cf ? cv : function (N) {
                    return N.replace(/\{\{/g, dc).replace(/}}/g, cf)
                }, de = /^ngAttr[A-Z]/;
                ac.$$addBindingInfo = n ? function (R, N) {
                    var U = R.data("$binding") || [];
                    fo(N) ? U = U.concat(N) : U.push(N);
                    R.data("$binding", U)
                } : eP;
                ac.$$addBindingClass = n ? function (N) {
                    cc(N, "ng-binding")
                } : eP;
                ac.$$addScopeInfo = n ? function (R, N, V, U) {
                    R.data(V ? U ? "$isolateScopeNoTemplate" : "$isolateScope" : "$scope", N)
                } : eP;
                ac.$$addScopeClass = n ? function (R, N) {
                    cc(R, N ? "ng-isolate-scope" : "ng-scope")
                } : eP;
                return ac
            }]
        }

        function k(a) {
            return et(a.replace(bt, ""))
        }

        function fO(n, q) {
            var C = "", z = n.split(/\s+/), y = q.split(/\s+/), w = 0;
            q:for (; w < z.length; w++) {
                for (var v = z[w], u = 0; u < y.length; u++) {
                    if (v == y[u]) {
                        continue q
                    }
                }
                C += (0 < C.length ? " " : "") + v
            }
            return C
        }

        function a4(n) {
            n = eL(n);
            var q = n.length;
            if (1 >= q) {
                return n
            }
            for (; q--;) {
                8 === n[q].nodeType && ev.call(n, q, 1)
            }
            return n
        }

        function bP() {
            var n = {}, q = !1;
            this.register = function (u, v) {
                ds(u, "controller");
                fy(u) ? fl(n, u) : n[u] = v
            };
            this.allowGlobals = function () {
                q = !0
            };
            this.$get = ["$injector", "$window", function (v, u) {
                function a(y, w, C, z) {
                    if (!y || !fy(y.$scope)) {
                        throw ft("$controller")("noscp", z, w)
                    }
                    y.$scope[w] = C
                }

                return function (G, F, C, y) {
                    var z, w, E;
                    C = !0 === C;
                    y && fn(y) && (E = y);
                    if (fn(G)) {
                        y = G.match(bR);
                        if (!y) {
                            throw ei("ctrlfmt", G)
                        }
                        w = y[1];
                        E = E || y[3];
                        G = n.hasOwnProperty(w) ? n[w] : aE(F.$scope, w, !0) || (q ? aE(u, w, !0) : eR);
                        dE(G, w, !0)
                    }
                    if (C) {
                        return C = (fo(G) ? G[G.length - 1] : G).prototype, z = Object.create(C || null), E && a(F, E, z, w || G.name), fl(function () {
                            var K = v.invoke(G, z, F, w);
                            K !== z && (fy(K) || fr(K)) && (z = K, E && a(F, E, z, w || G.name));
                            return z
                        }, {instance: z, identifier: E})
                    }
                    z = v.instantiate(G, F, w);
                    E && a(F, E, z, w || G.name);
                    return z
                }
            }]
        }

        function bD() {
            this.$get = ["$window", function (a) {
                return eL(a.document)
            }]
        }

        function br() {
            this.$get = ["$log", function (a) {
                return function (n, q) {
                    a.error.apply(a, arguments)
                }
            }]
        }

        function a5(a) {
            return fy(a) ? eH(a) ? a.toISOString() : ci(a) : a
        }

        function fq() {
            this.$get = function () {
                return function (n) {
                    if (!n) {
                        return ""
                    }
                    var q = [];
                    bY(n, function (a, u) {
                        null === a || eQ(a) || (fo(a) ? eT(a, function (v, w) {
                            q.push(dy(u) + "=" + dy(a5(v)))
                        }) : q.push(dy(u) + "=" + dy(a5(a))))
                    });
                    return q.join("&")
                }
            }
        }

        function eV() {
            this.$get = function () {
                return function (n) {
                    function q(a, w, v) {
                        null === a || eQ(a) || (fo(a) ? eT(a, function (y) {
                            q(y, w + "[]")
                        }) : fy(a) && !eH(a) ? bY(a, function (y, z) {
                            q(y, w + (v ? "" : "[") + z + (v ? "" : "]"))
                        }) : u.push(dy(w) + "=" + dy(a5(a))))
                    }

                    if (!n) {
                        return ""
                    }
                    var u = [];
                    q(n, "", !0);
                    return u.join("&")
                }
            }
        }

        function ch(n, q) {
            if (fn(n)) {
                var v = n.replace(dY, "").trim();
                if (v) {
                    var u = q("Content-Type");
                    (u = u && 0 === u.indexOf(fu)) || (u = (u = v.match(dL)) && dz[u[0]].test(v));
                    u && (n = ak(v))
                }
            }
            return n
        }

        function eX(n) {
            var q = dX(), u;
            fn(n) ? eT(n.split("\n"), function (a) {
                u = a.indexOf(":");
                var v = fv(fj(a.substr(0, u)));
                a = fj(a.substr(u + 1));
                v && (q[v] = q[v] ? q[v] + ", " + a : a)
            }) : fy(n) && eT(n, function (a, y) {
                var w = fv(y), v = fj(a);
                w && (q[w] = q[w] ? q[w] + ", " + v : v)
            });
            return q
        }

        function eE(n) {
            var q;
            return function (a) {
                q || (q = eX(n));
                return a ? (a = q[fv(a)], void 0 === a && (a = null), a) : q
            }
        }

        function er(n, q, v, u) {
            if (fr(u)) {
                return u(n, q, v)
            }
            eT(u, function (a) {
                n = a(n, q, v)
            });
            return n
        }

        function fM() {
            var n = this.defaults = {
                transformResponse: [ch],
                transformRequest: [function (v) {
                    return fy(v) && "[object File]" !== a0.call(v) && "[object Blob]" !== a0.call(v) && "[object FormData]" !== a0.call(v) ? ci(v) : v
                }],
                headers: {
                    common: {Accept: "application/json, text/plain, */*"},
                    post: eh(fP),
                    put: eh(fP),
                    patch: eh(fP)
                },
                xsrfCookieName: "XSRF-TOKEN",
                xsrfHeaderName: "X-XSRF-TOKEN",
                paramSerializer: "$httpParamSerializer"
            }, q = !1;
            this.useApplyAsync = function (a) {
                return eN(a) ? (q = !!a, this) : q
            };
            var u = this.interceptors = [];
            this.$get = ["$httpBackend", "$$cookieReader", "$cacheFactory", "$rootScope", "$q", "$injector", function (K, G, F, E, C, y) {
                function z(N) {
                    function W(Z) {
                        var Y = fl({}, Z);
                        Y.data = Z.data ? er(Z.data, Z.headers, Z.status, U.transformResponse) : Z.data;
                        Z = Z.status;
                        return 200 <= Z && 300 > Z ? Y : C.reject(Y)
                    }

                    function V(Z, Y) {
                        var ab, aa = {};
                        eT(Z, function (ac, ad) {
                            fr(ac) ? (ab = ac(Y), null != ab && (aa[ad] = ab)) : aa[ad] = ac
                        });
                        return aa
                    }

                    if (!fS.isObject(N)) {
                        throw ft("$http")("badreq", N)
                    }
                    var U = fl({
                        method: "get",
                        transformRequest: n.transformRequest,
                        transformResponse: n.transformResponse,
                        paramSerializer: n.paramSerializer
                    }, N);
                    U.headers = function (Y) {
                        var ad = n.headers, ac = fl({}, Y.headers), ab, aa, Z, ad = fl({}, ad.common, ad[fv(Y.method)]);
                        Y:for (ab in ad) {
                            aa = fv(ab);
                            for (Z in ac) {
                                if (fv(Z) === aa) {
                                    continue Y
                                }
                            }
                            ac[ab] = ad[ab]
                        }
                        return V(ac, eh(Y))
                    }(N);
                    U.method = bM(U.method);
                    U.paramSerializer = fn(U.paramSerializer) ? y.get(U.paramSerializer) : U.paramSerializer;
                    var T = [function (Y) {
                        var aa = Y.headers, Z = er(Y.data, eE(aa), eR, Y.transformRequest);
                        eQ(Z) && eT(aa, function (ac, ab) {
                            "content-type" === fv(ab) && delete aa[ab]
                        });
                        eQ(Y.withCredentials) && !eQ(n.withCredentials) && (Y.withCredentials = n.withCredentials);
                        return w(Y, Z).then(W, W)
                    }, eR], R = C.when(U);
                    for (eT(v, function (Y) {
                        (Y.request || Y.requestError) && T.unshift(Y.request, Y.requestError);
                        (Y.response || Y.responseError) && T.push(Y.response, Y.responseError)
                    }); T.length;) {
                        N = T.shift();
                        var Q = T.shift(), R = R.then(N, Q)
                    }
                    R.success = function (Y) {
                        dE(Y, "fn");
                        R.then(function (Z) {
                            Y(Z.data, Z.status, Z.headers, U)
                        });
                        return R
                    };
                    R.error = function (Y) {
                        dE(Y, "fn");
                        R.then(null, function (Z) {
                            Y(Z.data, Z.status, Z.headers, U)
                        });
                        return R
                    };
                    return R
                }

                function w(ab, aa) {
                    function V(ad, bb, ag, af) {
                        function ae() {
                            U(bb, ad, ag, af)
                        }

                        Z && (200 <= ad && 300 > ad ? Z.put(Y, [ad, bb, eX(ag), af]) : Z.remove(Y));
                        q ? E.$applyAsync(ae) : (ae(), E.$$phase || E.$apply())
                    }

                    function U(ae, ad, ag, af) {
                        ad = Math.max(ad, 0);
                        (200 <= ad && 300 > ad ? ac.resolve : ac.reject)({
                            data: ae,
                            status: ad,
                            headers: eE(ag),
                            config: ab,
                            statusText: af
                        })
                    }

                    function R(ad) {
                        U(ad.data, ad.status, eh(ad.headers()), ad.statusText)
                    }

                    function T() {
                        var ad = z.pendingRequests.indexOf(ab);
                        -1 !== ad && z.pendingRequests.splice(ad, 1)
                    }

                    var ac = C.defer(), Q = ac.promise, Z, N, W = ab.headers,
                        Y = a(ab.url, ab.paramSerializer(ab.params));
                    z.pendingRequests.push(ab);
                    Q.then(T, T);
                    !ab.cache && !n.cache || !1 === ab.cache || "GET" !== ab.method && "JSONP" !== ab.method || (Z = fy(ab.cache) ? ab.cache : fy(n.cache) ? n.cache : L);
                    Z && (N = Z.get(Y), eN(N) ? N && fr(N.then) ? N.then(R, R) : fo(N) ? U(N[1], N[0], eh(N[2]), N[3]) : U(N, 200, {}, "OK") : Z.put(Y, Q));
                    eQ(N) && ((N = d7(ab.url) ? G()[ab.xsrfCookieName || n.xsrfCookieName] : eR) && (W[ab.xsrfHeaderName || n.xsrfHeaderName] = N), K(ab.method, Y, aa, V, W, ab.timeout, ab.withCredentials, ab.responseType));
                    return Q
                }

                function a(Q, N) {
                    0 < N.length && (Q += (-1 == Q.indexOf("?") ? "?" : "&") + N);
                    return Q
                }

                var L = F("$http");
                n.paramSerializer = fn(n.paramSerializer) ? y.get(n.paramSerializer) : n.paramSerializer;
                var v = [];
                eT(u, function (N) {
                    v.unshift(fn(N) ? y.get(N) : y.invoke(N))
                });
                z.pendingRequests = [];
                (function (N) {
                    eT(arguments, function (Q) {
                        z[Q] = function (R, T) {
                            return z(fl({}, T || {}, {method: Q, url: R}))
                        }
                    })
                })("get", "delete", "head", "jsonp");
                (function (N) {
                    eT(arguments, function (Q) {
                        z[Q] = function (R, U, T) {
                            return z(fl({}, T || {}, {method: Q, url: R, data: U}))
                        }
                    })
                })("post", "put", "patch");
                z.defaults = n;
                return z
            }]
        }

        function dm() {
            return new fm.XMLHttpRequest
        }

        function eC() {
            this.$get = ["$browser", "$window", "$document", function (n, q, u) {
                return c3(n, dm, n.defer, q.angular.callbacks, u[0])
            }]
        }

        function c3(n, q, y, w, v) {
            function u(E, C, G) {
                var F = v.createElement("script"), z = null;
                F.type = "text/javascript";
                F.src = E;
                F.async = !0;
                z = function (L) {
                    F.removeEventListener("load", z, !1);
                    F.removeEventListener("error", z, !1);
                    v.body.removeChild(F);
                    F = null;
                    var N = -1, K = "unknown";
                    L && ("load" !== L.type || w[C].called || (L = {type: "error"}), K = L.type, N = "error" === L.type ? 404 : 200);
                    G && G(N, K)
                };
                F.addEventListener("load", z, !1);
                F.addEventListener("error", z, !1);
                v.body.appendChild(F);
                return z
            }

            return function (N, L, G, K, F, a, W, E) {
                function U() {
                    C && C();
                    R && R.abort()
                }

                function Q(Y, ac, ab, aa, Z) {
                    T !== eR && y.cancel(T);
                    C = R = null;
                    Y(ac, ab, aa, Z);
                    n.$$completeOutstandingRequest(eP)
                }

                n.$$incOutstandingRequestCount();
                L = L || n.url();
                if ("jsonp" == fv(N)) {
                    var V = "_" + (w.counter++).toString(36);
                    w[V] = function (Y) {
                        w[V].data = Y;
                        w[V].called = !0
                    };
                    var C = u(L.replace("JSON_CALLBACK", "angular.callbacks." + V), V, function (Z, Y) {
                        Q(K, Z, w[V].data, "", Y);
                        w[V] = eP
                    })
                } else {
                    var R = q();
                    R.open(N, L, !0);
                    eT(F, function (Z, Y) {
                        eN(Z) && R.setRequestHeader(Y, Z)
                    });
                    R.onload = function () {
                        var Z = R.statusText || "", Y = "response" in R ? R.response : R.responseText,
                            aa = 1223 === R.status ? 204 : R.status;
                        0 === aa && (aa = Y ? 200 : "file" == bi(L).protocol ? 404 : 0);
                        Q(K, aa, Y, R.getAllResponseHeaders(), Z)
                    };
                    N = function () {
                        Q(K, -1, null, null, "")
                    };
                    R.onerror = N;
                    R.onabort = N;
                    W && (R.withCredentials = !0);
                    if (E) {
                        try {
                            R.responseType = E
                        } catch (z) {
                            if ("json" !== E) {
                                throw z
                            }
                        }
                    }
                    R.send(G)
                }
                if (0 < a) {
                    var T = y(U, a)
                } else {
                    a && fr(a.then) && a.then(U)
                }
            }
        }

        function a2() {
            var n = "{{", q = "}}";
            this.startSymbol = function (u) {
                return u ? (n = u, this) : n
            };
            this.endSymbol = function (a) {
                return a ? (q = a, this) : q
            };
            this.$get = ["$parse", "$exceptionHandler", "$sce", function (G, F, E) {
                function C(K) {
                    return "\\\\\\" + K
                }

                function z(K) {
                    return K.replace(u, n).replace(a, q)
                }

                function y(aa, W, U, L) {
                    function ac(ae) {
                        try {
                            var ad = ae;
                            ae = U ? E.getTrusted(U, ad) : E.valueOf(ad);
                            var ag;
                            if (L && !eN(ae)) {
                                ag = ae
                            } else {
                                if (null == ae) {
                                    ag = ""
                                } else {
                                    switch (typeof ae) {
                                        case"string":
                                            break;
                                        case"number":
                                            ae = "" + ae;
                                            break;
                                        default:
                                            ae = ci(ae)
                                    }
                                    ag = ae
                                }
                            }
                            return ag
                        } catch (af) {
                            F(eO.interr(aa, af))
                        }
                    }

                    L = !!L;
                    for (var R, T, N = 0, ab = [], Q = [], Z = aa.length, K = [], V = []; N < Z;) {
                        if (-1 != (R = aa.indexOf(n, N)) && -1 != (T = aa.indexOf(q, R + v))) {
                            N !== R && K.push(z(aa.substring(N, R))), N = aa.substring(R + v, T), ab.push(N), Q.push(G(N, ac)), N = T + w, V.push(K.length), K.push("")
                        } else {
                            N !== Z && K.push(z(aa.substring(N)));
                            break
                        }
                    }
                    U && 1 < K.length && eO.throwNoconcat(aa);
                    if (!W || ab.length) {
                        var Y = function (ae) {
                            for (var ad = 0, af = ab.length; ad < af; ad++) {
                                if (L && eQ(ae[ad])) {
                                    return
                                }
                                K[V[ad]] = ae[ad]
                            }
                            return K.join("")
                        };
                        return fl(function (ae) {
                            var ad = 0, bb = ab.length, ag = Array(bb);
                            try {
                                for (; ad < bb; ad++) {
                                    ag[ad] = Q[ad](ae)
                                }
                                return Y(ag)
                            } catch (af) {
                                F(eO.interr(aa, af))
                            }
                        }, {
                            exp: aa, expressions: ab, $$watchDelegate: function (ae, ad) {
                                var af;
                                return ae.$watchGroup(Q, function (bc, bb) {
                                    var ag = Y(bc);
                                    fr(ad) && ad.call(this, ag, bc !== bb ? af : ag, ae);
                                    af = ag
                                })
                            }
                        })
                    }
                }

                var v = n.length, w = q.length, u = new RegExp(n.replace(/./g, C), "g"),
                    a = new RegExp(q.replace(/./g, C), "g");
                y.startSymbol = function () {
                    return n
                };
                y.endSymbol = function () {
                    return q
                };
                return y
            }]
        }

        function b8() {
            this.$get = ["$rootScope", "$window", "$q", "$$q", function (n, q, y, w) {
                function v(L, K, F, G) {
                    var E = 4 < arguments.length, a = E ? bp.call(arguments, 4) : [], T = q.setInterval,
                        C = q.clearInterval, Q = 0, N = eN(G) && !G, R = (N ? w : y).defer(), z = R.promise;
                    F = eN(F) ? F : 0;
                    z.then(null, null, E ? function () {
                        L.apply(null, a)
                    } : L);
                    z.$$intervalId = T(function () {
                        R.notify(Q++);
                        0 < F && Q >= F && (R.resolve(Q), C(z.$$intervalId), delete u[z.$$intervalId]);
                        N || n.$apply()
                    }, K);
                    u[z.$$intervalId] = R;
                    return z
                }

                var u = {};
                v.cancel = function (a) {
                    return a && a.$$intervalId in u ? (u[a.$$intervalId].reject("canceled"), q.clearInterval(a.$$intervalId), delete u[a.$$intervalId], !0) : !1
                };
                return v
            }]
        }

        function d6() {
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
                    pluralCat: function (a) {
                        return 1 === a ? "one" : "other"
                    }
                }
            }
        }

        function fw(n) {
            n = n.split("/");
            for (var q = n.length; q--;) {
                n[q] = cB(n[q])
            }
            return n.join("/")
        }

        function dU(n, q) {
            var u = bi(n);
            q.$$protocol = u.protocol;
            q.$$host = u.hostname;
            q.$$port = e8(u.port) || cQ[u.protocol] || null
        }

        function dI(n, q) {
            var v = "/" !== n.charAt(0);
            v && (n = "/" + n);
            var u = bi(n);
            q.$$path = decodeURIComponent(v && "/" === u.pathname.charAt(0) ? u.pathname.substring(1) : u.pathname);
            q.$$search = f3(u.search);
            q.$$hash = decodeURIComponent(u.hash);
            q.$$path && "/" != q.$$path.charAt(0) && (q.$$path = "/" + q.$$path)
        }

        function f5(n, q) {
            if (0 === q.indexOf(n)) {
                return q.substr(n.length)
            }
        }

        function fE(n) {
            var q = n.indexOf("#");
            return -1 == q ? n : n.substr(0, q)
        }

        function aS(a) {
            return a.replace(/(#.+)|#$/, "$1")
        }

        function eY(a) {
            return a.substr(0, fE(a).lastIndexOf("/") + 1)
        }

        function eF(n, q) {
            this.$$html5 = !0;
            q = q || "";
            var u = eY(n);
            dU(n, this);
            this.$$parse = function (w) {
                var v = f5(u, w);
                if (!fn(v)) {
                    throw aF("ipthprfx", w, u)
                }
                dI(v, this);
                this.$$path || (this.$$path = "/");
                this.$$compose()
            };
            this.$$compose = function () {
                var w = dr(this.$$search), v = this.$$hash ? "#" + cB(this.$$hash) : "";
                this.$$url = fw(this.$$path) + (w ? "?" + w : "") + v;
                this.$$absUrl = u + this.$$url.substr(1)
            };
            this.$$parseLinkUrl = function (y, w) {
                if (w && "#" === w[0]) {
                    return this.hash(w.slice(1)), !0
                }
                var v, a;
                (v = f5(n, y)) !== eR ? (a = v, a = (v = f5(q, v)) !== eR ? u + (f5("/", v) || v) : n + a) : (v = f5(u, y)) !== eR ? a = u + v : u == y + "/" && (a = u);
                a && this.$$parse(a);
                return !!a
            }
        }

        function es(n, q) {
            var u = eY(n);
            dU(n, this);
            this.$$parse = function (w) {
                w = f5(n, w) || f5(u, w);
                var v;
                "#" === w.charAt(0) ? (v = f5(q, w), eQ(v) && (v = w)) : v = this.$$html5 ? w : "";
                dI(v, this);
                w = this.$$path;
                var a = /^\/[A-Z]:(\/.*)/;
                0 === v.indexOf(n) && (v = v.replace(n, ""));
                a.exec(v) || (w = (v = a.exec(w)) ? v[1] : w);
                this.$$path = w;
                this.$$compose()
            };
            this.$$compose = function () {
                var v = dr(this.$$search), a = this.$$hash ? "#" + cB(this.$$hash) : "";
                this.$$url = fw(this.$$path) + (v ? "?" + v : "") + a;
                this.$$absUrl = n + (this.$$url ? q + this.$$url : "")
            };
            this.$$parseLinkUrl = function (v, w) {
                return fE(n) == fE(v) ? (this.$$parse(v), !0) : !1
            }
        }

        function dv(n, q) {
            this.$$html5 = !0;
            es.apply(this, arguments);
            var u = eY(n);
            this.$$parseLinkUrl = function (y, w) {
                if (w && "#" === w[0]) {
                    return this.hash(w.slice(1)), !0
                }
                var v, a;
                n == fE(y) ? v = y : (a = f5(u, y)) ? v = n + q + a : u === y + "/" && (v = u);
                v && this.$$parse(v);
                return !!v
            };
            this.$$compose = function () {
                var v = dr(this.$$search), a = this.$$hash ? "#" + cB(this.$$hash) : "";
                this.$$url = fw(this.$$path) + (v ? "?" + v : "") + a;
                this.$$absUrl = n + q + this.$$url
            }
        }

        function ar(a) {
            return function () {
                return this[a]
            }
        }

        function dj(n, q) {
            return function (a) {
                if (eQ(a)) {
                    return this[n]
                }
                this[n] = q(a);
                this.$$compose();
                return this
            }
        }

        function ep() {
            var n = "", q = {enabled: !1, requireBase: !0, rewriteLinks: !0};
            this.hashPrefix = function (u) {
                return eN(u) ? (n = u, this) : n
            };
            this.html5Mode = function (a) {
                return bG(a) ? (q.enabled = a, this) : fy(a) ? (bG(a.enabled) && (q.enabled = a.enabled), bG(a.requireBase) && (q.requireBase = a.requireBase), bG(a.rewriteLinks) && (q.rewriteLinks = a.rewriteLinks), this) : q
            };
            this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement", "$window", function (K, G, F, E, C) {
                function z(R, Q, W) {
                    var V = y.url(), U = y.$$state;
                    try {
                        G.url(R, Q, W), y.$$state = G.state()
                    } catch (T) {
                        throw y.url(V), y.$$state = U, T
                    }
                }

                function w(R, Q) {
                    K.$broadcast("$locationChangeSuccess", y.absUrl(), R, y.$$state, Q)
                }

                var y, v;
                v = G.baseHref();
                var a = G.url(), N;
                if (q.enabled) {
                    if (!v && q.requireBase) {
                        throw aF("nobase")
                    }
                    N = a.substring(0, a.indexOf("/", a.indexOf("//") + 2)) + (v || "/");
                    v = F.history ? eF : dv
                } else {
                    N = fE(a), v = es
                }
                y = new v(N, "#" + n);
                y.$$parseLinkUrl(a, a);
                y.$$state = G.state();
                var u = /^\s*(javascript|mailto):/i;
                E.on("click", function (Q) {
                    if (q.rewriteLinks && !Q.ctrlKey && !Q.metaKey && !Q.shiftKey && 2 != Q.which && 2 != Q.button) {
                        for (var U = eL(Q.target); "a" !== aN(U[0]);) {
                            if (U[0] === E[0] || !(U = U.parent())[0]) {
                                return
                            }
                        }
                        var T = U.prop("href"), R = U.attr("href") || U.attr("xlink:href");
                        fy(T) && "[object SVGAnimatedString]" === T.toString() && (T = bi(T.animVal).href);
                        u.test(T) || !T || U.attr("target") || Q.isDefaultPrevented() || !y.$$parseLinkUrl(T, R) || (Q.preventDefault(), y.absUrl() != G.url() && (K.$apply(), C.angular["ff-684208-preventDefault"] = !0))
                    }
                });
                aS(y.absUrl()) != aS(a) && G.url(y.absUrl(), !0);
                var L = !0;
                G.onUrlChange(function (R, Q) {
                    K.$evalAsync(function () {
                        var V = y.absUrl(), U = y.$$state, T;
                        y.$$parse(R);
                        y.$$state = Q;
                        T = K.$broadcast("$locationChangeStart", R, V, Q, U).defaultPrevented;
                        y.absUrl() === R && (T ? (y.$$parse(V), y.$$state = U, z(V, !1, U)) : (L = !1, w(V, U)))
                    });
                    K.$$phase || K.$digest()
                });
                K.$watch(function () {
                    var T = aS(G.url()), R = aS(y.absUrl()), V = G.state(), U = y.$$replace,
                        Q = T !== R || y.$$html5 && F.history && V !== y.$$state;
                    if (L || Q) {
                        L = !1, K.$evalAsync(function () {
                            var W = y.absUrl(),
                                Y = K.$broadcast("$locationChangeStart", W, T, y.$$state, V).defaultPrevented;
                            y.absUrl() === W && (Y ? (y.$$parse(T), y.$$state = V) : (Q && z(W, U, V === y.$$state ? null : y.$$state), w(T, V)))
                        })
                    }
                    y.$$replace = !1
                });
                return y
            }]
        }

        function d5() {
            var n = !0, q = this;
            this.debugEnabled = function (u) {
                return eN(u) ? (n = u, this) : n
            };
            this.$get = ["$window", function (v) {
                function u(w) {
                    w instanceof Error && (w.stack ? w = w.message && -1 === w.stack.indexOf(w.message) ? "Error: " + w.message + "\n" + w.stack : w.stack : w.sourceURL && (w = w.message + "\n" + w.sourceURL + ":" + w.line));
                    return w
                }

                function a(z) {
                    var w = v.console || {}, C = w[z] || w.log || eP;
                    z = !1;
                    try {
                        z = !!C.apply
                    } catch (y) {
                    }
                    return z ? function () {
                        var E = [];
                        eT(arguments, function (F) {
                            E.push(u(F))
                        });
                        return C.apply(w, E)
                    } : function (F, E) {
                        C(F, null == E ? "" : E)
                    }
                }

                return {
                    log: a("log"), info: a("info"), warn: a("warn"), error: a("error"), debug: function () {
                        var w = a("debug");
                        return function () {
                            n && w.apply(q, arguments)
                        }
                    }()
                }
            }]
        }

        function aT(n, q) {
            if ("__defineGetter__" === n || "__defineSetter__" === n || "__lookupGetter__" === n || "__lookupSetter__" === n || "__proto__" === n) {
                throw e0("isecfld", q)
            }
            return n
        }

        function cp(n, q) {
            if (n) {
                if (n.constructor === n) {
                    throw e0("isecfn", q)
                }
                if (n.window === n) {
                    throw e0("isecwindow", q)
                }
                if (n.children && (n.nodeName || n.prop && n.attr && n.find)) {
                    throw e0("isecdom", q)
                }
                if (n === Object) {
                    throw e0("isecobj", q)
                }
            }
            return n
        }

        function cZ(n, q) {
            if (n) {
                if (n.constructor === n) {
                    throw e0("isecfn", q)
                }
                if (n === cD || n === cq || n === b1) {
                    throw e0("isecff", q)
                }
            }
        }

        function bO(n, q) {
            return "undefined" !== typeof n ? n : q
        }

        function cM(n, q) {
            return "undefined" === typeof n ? q : "undefined" === typeof q ? n : n + q
        }

        function fi(n, q) {
            var v, u;
            switch (n.type) {
                case eS.Program:
                    v = !0;
                    eT(n.body, function (a) {
                        fi(a.expression, q);
                        v = v && a.expression.constant
                    });
                    n.constant = v;
                    break;
                case eS.Literal:
                    n.constant = !0;
                    n.toWatch = [];
                    break;
                case eS.UnaryExpression:
                    fi(n.argument, q);
                    n.constant = n.argument.constant;
                    n.toWatch = n.argument.toWatch;
                    break;
                case eS.BinaryExpression:
                    fi(n.left, q);
                    fi(n.right, q);
                    n.constant = n.left.constant && n.right.constant;
                    n.toWatch = n.left.toWatch.concat(n.right.toWatch);
                    break;
                case eS.LogicalExpression:
                    fi(n.left, q);
                    fi(n.right, q);
                    n.constant = n.left.constant && n.right.constant;
                    n.toWatch = n.constant ? [] : [n];
                    break;
                case eS.ConditionalExpression:
                    fi(n.test, q);
                    fi(n.alternate, q);
                    fi(n.consequent, q);
                    n.constant = n.test.constant && n.alternate.constant && n.consequent.constant;
                    n.toWatch = n.constant ? [] : [n];
                    break;
                case eS.Identifier:
                    n.constant = !1;
                    n.toWatch = [n];
                    break;
                case eS.MemberExpression:
                    fi(n.object, q);
                    n.computed && fi(n.property, q);
                    n.constant = n.object.constant && (!n.computed || n.property.constant);
                    n.toWatch = [n];
                    break;
                case eS.CallExpression:
                    v = n.filter ? !q(n.callee.name).$stateful : !1;
                    u = [];
                    eT(n.arguments, function (a) {
                        fi(a, q);
                        v = v && a.constant;
                        a.constant || u.push.apply(u, a.toWatch)
                    });
                    n.constant = v;
                    n.toWatch = n.filter && !q(n.callee.name).$stateful ? u : [n];
                    break;
                case eS.AssignmentExpression:
                    fi(n.left, q);
                    fi(n.right, q);
                    n.constant = n.left.constant && n.right.constant;
                    n.toWatch = [n];
                    break;
                case eS.ArrayExpression:
                    v = !0;
                    u = [];
                    eT(n.elements, function (a) {
                        fi(a, q);
                        v = v && a.constant;
                        a.constant || u.push.apply(u, a.toWatch)
                    });
                    n.constant = v;
                    n.toWatch = u;
                    break;
                case eS.ObjectExpression:
                    v = !0;
                    u = [];
                    eT(n.properties, function (a) {
                        fi(a.value, q);
                        v = v && a.value.constant;
                        a.value.constant || u.push.apply(u, a.value.toWatch)
                    });
                    n.constant = v;
                    n.toWatch = u;
                    break;
                case eS.ThisExpression:
                    n.constant = !1, n.toWatch = []
            }
        }

        function cz(n) {
            if (1 == n.length) {
                n = n[0].expression;
                var q = n.toWatch;
                return 1 !== q.length ? q : q[0] !== n ? q : eR
            }
        }

        function cm(a) {
            return a.type === eS.Identifier || a.type === eS.MemberExpression
        }

        function bX(a) {
            if (1 === a.body.length && cm(a.body[0].expression)) {
                return {
                    type: eS.AssignmentExpression,
                    left: a.body[0].expression,
                    right: {type: eS.NGValueParameter},
                    operator: "="
                }
            }
        }

        function bK(a) {
            return 0 === a.body.length || 1 === a.body.length && (a.body[0].expression.type === eS.Literal || a.body[0].expression.type === eS.ArrayExpression || a.body[0].expression.type === eS.ObjectExpression)
        }

        function by(n, q) {
            this.astBuilder = n;
            this.$filter = q
        }

        function bm(n, q) {
            this.astBuilder = n;
            this.$filter = q
        }

        function P(n, q, z, y) {
            cp(n, y);
            q = q.split(".");
            for (var w, v = 0; 1 < q.length; v++) {
                w = aT(q.shift(), y);
                var u = cp(n[w], y);
                u || (u = {}, n[w] = u);
                n = u
            }
            w = aT(q.shift(), y);
            cp(n[w], y);
            return n[w] = z
        }

        function r(a) {
            return "constructor" == a
        }

        function d8(a) {
            return fr(a.valueOf) ? a.valueOf() : bC.call(a)
        }

        function dS() {
            var n = dX(), q = dX();
            this.$get = ["$filter", "$sniffer", function (G, F) {
                function E(L, K) {
                    return null == L || null == K ? L === K : "object" === typeof L && (L = d8(L), "object" === typeof L) ? !1 : L === K || L !== L && K !== K
                }

                function C(aa, Z, Y, W, V) {
                    var U = W.inputs, T;
                    if (1 === U.length) {
                        var Q = E, U = U[0];
                        return aa.$watch(function (ac) {
                            var ab = U(ac);
                            E(ab, Q) || (T = W(ac, eR, eR, [ab]), Q = ab && d8(ab));
                            return T
                        }, Z, Y, V)
                    }
                    for (var R = [], N = [], K = 0, L = U.length; K < L; K++) {
                        R[K] = E, N[K] = null
                    }
                    return aa.$watch(function (ad) {
                        for (var ab = !1, af = 0, ae = U.length; af < ae; af++) {
                            var ac = U[af](ad);
                            if (ab || (ab = !E(ac, R[af]))) {
                                N[af] = ac, R[af] = ac && d8(ac)
                            }
                        }
                        ab && (T = W(ad, eR, eR, N));
                        return T
                    }, Z, Y, V)
                }

                function z(L, K, T, R) {
                    var Q, N;
                    return Q = L.$watch(function (U) {
                        return R(U)
                    }, function (U, W, V) {
                        N = U;
                        fr(K) && K.apply(this, arguments);
                        eN(U) && V.$$postDigest(function () {
                            eN(N) && Q()
                        })
                    }, T)
                }

                function y(L, K, U, T) {
                    function R(W) {
                        var V = !0;
                        eT(W, function (Y) {
                            eN(Y) || (V = !1)
                        });
                        return V
                    }

                    var Q, N;
                    return Q = L.$watch(function (V) {
                        return T(V)
                    }, function (V, Y, W) {
                        N = V;
                        fr(K) && K.call(this, V, Y, W);
                        R(V) && W.$$postDigest(function () {
                            R(N) && Q()
                        })
                    }, U)
                }

                function v(L, K, R, Q) {
                    var N;
                    return N = L.$watch(function (T) {
                        return Q(T)
                    }, function (T, V, U) {
                        fr(K) && K.apply(this, arguments);
                        N()
                    }, R)
                }

                function w(L, K) {
                    if (!K) {
                        return L
                    }
                    var N = L.$$watchDelegate, N = N !== y && N !== z ? function (U, T, R, Q) {
                        R = L(U, T, R, Q);
                        return K(R, U, T)
                    } : function (U, T, R, Q) {
                        R = L(U, T, R, Q);
                        U = K(R, U, T);
                        return eN(R) ? U : R
                    };
                    L.$$watchDelegate && L.$$watchDelegate !== C ? N.$$watchDelegate = L.$$watchDelegate : K.$stateful || (N.$$watchDelegate = C, N.inputs = L.inputs ? L.inputs : [L]);
                    return N
                }

                var u = {csp: F.csp, expensiveChecks: !1}, a = {csp: F.csp, expensiveChecks: !0};
                return function (T, R, L) {
                    var U, K, Q;
                    switch (typeof T) {
                        case"string":
                            Q = T = T.trim();
                            var N = L ? q : n;
                            U = N[Q];
                            U || (":" === T.charAt(0) && ":" === T.charAt(1) && (K = !0, T = T.substring(2)), L = L ? a : u, U = new dV(L), U = (new dJ(U, G, L)).parse(T), U.constant ? U.$$watchDelegate = v : K ? U.$$watchDelegate = U.literal ? y : z : U.inputs && (U.$$watchDelegate = C), N[Q] = U);
                            return w(U, R);
                        case"function":
                            return w(T, R);
                        default:
                            return eP
                    }
                }
            }]
        }

        function dh() {
            this.$get = ["$rootScope", "$exceptionHandler", function (n, q) {
                return aX(function (u) {
                    n.$evalAsync(u)
                }, q)
            }]
        }

        function cX() {
            this.$get = ["$browser", "$exceptionHandler", function (n, q) {
                return aX(function (u) {
                    n.defer(u)
                }, q)
            }]
        }

        function aX(K, L) {
            function G(Q, N, U) {
                function T(a) {
                    return function (V) {
                        R || (R = !0, a.call(Q, V))
                    }
                }

                var R = !1;
                return [T(N), T(U)]
            }

            function F() {
                this.$$state = {status: 0}
            }

            function E(Q, N) {
                return function (a) {
                    N.call(Q, a)
                }
            }

            function C(a) {
                !a.processScheduled && a.pending && (a.processScheduled = !0, K(function () {
                    var N, V, U;
                    U = a.pending;
                    a.processScheduled = !1;
                    a.pending = eR;
                    for (var T = 0, R = U.length; T < R; ++T) {
                        V = U[T][0];
                        N = U[T][a.status];
                        try {
                            fr(N) ? V.resolve(N(a.value)) : 1 === a.status ? V.resolve(a.value) : V.reject(a.value)
                        } catch (Q) {
                            V.reject(Q), L(Q)
                        }
                    }
                }))
            }

            function z() {
                this.promise = new F;
                this.resolve = E(this, this.resolve);
                this.reject = E(this, this.reject);
                this.notify = E(this, this.notify)
            }

            var y = ft("$q", TypeError);
            F.prototype = {
                then: function (Q, N, T) {
                    var R = new z;
                    this.$$state.pending = this.$$state.pending || [];
                    this.$$state.pending.push([R, Q, N, T]);
                    0 < this.$$state.status && C(this.$$state);
                    return R.promise
                }, "catch": function (N) {
                    return this.then(null, N)
                }, "finally": function (Q, N) {
                    return this.then(function (a) {
                        return w(a, !0, Q)
                    }, function (a) {
                        return w(a, !1, Q)
                    }, N)
                }
            };
            z.prototype = {
                resolve: function (N) {
                    this.promise.$$state.status || (N === this.promise ? this.$$reject(y("qcycle", N)) : this.$$resolve(N))
                }, $$resolve: function (a) {
                    var R, Q;
                    Q = G(this, this.$$resolve, this.$$reject);
                    try {
                        if (fy(a) || fr(a)) {
                            R = a && a.then
                        }
                        fr(R) ? (this.promise.$$state.status = -1, R.call(a, Q[0], Q[1], this.notify)) : (this.promise.$$state.value = a, this.promise.$$state.status = 1, C(this.promise.$$state))
                    } catch (N) {
                        Q[1](N), L(N)
                    }
                }, reject: function (N) {
                    this.promise.$$state.status || this.$$reject(N)
                }, $$reject: function (N) {
                    this.promise.$$state.value = N;
                    this.promise.$$state.status = 2;
                    C(this.promise.$$state)
                }, notify: function (N) {
                    var a = this.promise.$$state.pending;
                    0 >= this.promise.$$state.status && a && a.length && K(function () {
                        for (var Q, V, U = 0, T = a.length; U < T; U++) {
                            V = a[U][0];
                            Q = a[U][3];
                            try {
                                V.notify(fr(Q) ? Q(N) : N)
                            } catch (R) {
                                L(R)
                            }
                        }
                    })
                }
            };
            var v = function (Q, N) {
                var R = new z;
                N ? R.resolve(Q) : R.reject(Q);
                return R.promise
            }, w = function (Q, N, U) {
                var T = null;
                try {
                    fr(U) && (T = U())
                } catch (R) {
                    return v(R, !1)
                }
                return T && fr(T.then) ? T.then(function () {
                    return v(Q, N)
                }, function (V) {
                    return v(V, !1)
                }) : v(Q, N)
            }, u = function (Q, N, U, T) {
                var R = new z;
                R.resolve(Q);
                return R.promise.then(N, U, T)
            }, n = function q(Q) {
                if (!fr(Q)) {
                    throw y("norslvr", Q)
                }
                if (!(this instanceof q)) {
                    return new q(Q)
                }
                var N = new z;
                Q(function (R) {
                    N.resolve(R)
                }, function (R) {
                    N.reject(R)
                });
                return N.promise
            };
            n.defer = function () {
                return new z
            };
            n.reject = function (Q) {
                var N = new z;
                N.reject(Q);
                return N.promise
            };
            n.when = u;
            n.all = function (Q) {
                var N = new z, T = 0, R = fo(Q) ? [] : {};
                eT(Q, function (U, V) {
                    T++;
                    u(U).then(function (W) {
                        R.hasOwnProperty(V) || (R[V] = W, --T || N.resolve(R))
                    }, function (W) {
                        R.hasOwnProperty(V) || N.reject(W)
                    })
                });
                0 === T && N.resolve(R);
                return N.promise
            };
            return n
        }

        function aI() {
            this.$get = ["$window", "$timeout", function (F, G) {
                function E() {
                    for (var L = 0; L < n.length; L++) {
                        var K = n[L];
                        K && (n[L] = null, K())
                    }
                    u = n.length = 0
                }

                function C(L) {
                    var K = n.length;
                    u++;
                    n.push(L);
                    0 === K && (q = v(E));
                    return function () {
                        0 <= K && (K = n[K] = null, 0 === --u && q && (q(), q = null, n.length = 0))
                    }
                }

                var z = F.requestAnimationFrame || F.webkitRequestAnimationFrame,
                    y = F.cancelAnimationFrame || F.webkitCancelAnimationFrame || F.webkitCancelRequestAnimationFrame,
                    w = !!z, v = w ? function (L) {
                        var K = z(L);
                        return function () {
                            y(K)
                        }
                    } : function (a) {
                        var K = G(a, 16.66, !1);
                        return function () {
                            G.cancel(K)
                        }
                    };
                C.supported = w;
                var q, u = 0, n = [];
                return C
            }]
        }

        function dG() {
            function n(z) {
                function y() {
                    this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null;
                    this.$$listeners = {};
                    this.$$listenerCount = {};
                    this.$$watchersCount = 0;
                    this.$id = ++cO;
                    this.$$ChildScope = null
                }

                y.prototype = z;
                return y
            }

            var q = 10, w = ft("$rootScope"), v = null, u = null;
            this.digestTtl = function (a) {
                arguments.length && (q = a);
                return q
            };
            this.$get = ["$injector", "$exceptionHandler", "$parse", "$browser", function (Q, N, L, G) {
                function K(y) {
                    y.currentScope.$$destroyed = !0
                }

                function F() {
                    this.$id = ++cO;
                    this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null;
                    this.$root = this;
                    this.$$destroyed = !1;
                    this.$$listeners = {};
                    this.$$listenerCount = {};
                    this.$$watchersCount = 0;
                    this.$$isolateBindings = null
                }

                function a(y) {
                    if (C.$$phase) {
                        throw w("inprog", C.$$phase)
                    }
                    C.$$phase = y
                }

                function Y(Z, y) {
                    do {
                        Z.$$watchersCount += y
                    } while (Z = Z.$parent)
                }

                function E(Z, y, aa) {
                    do {
                        Z.$$listenerCount[aa] -= y, 0 === Z.$$listenerCount[aa] && delete Z.$$listenerCount[aa]
                    } while (Z = Z.$parent)
                }

                function z() {
                }

                function V() {
                    for (; U.length;) {
                        try {
                            U.shift()()
                        } catch (y) {
                            N(y)
                        }
                    }
                    u = null
                }

                function W() {
                    null === u && (u = G.defer(function () {
                        C.$apply(V)
                    }))
                }

                F.prototype = {
                    constructor: F, $new: function (y, aa) {
                        var Z;
                        aa = aa || this;
                        y ? (Z = new F, Z.$root = this.$root) : (this.$$ChildScope || (this.$$ChildScope = n(this)), Z = new this.$$ChildScope);
                        Z.$parent = aa;
                        Z.$$prevSibling = aa.$$childTail;
                        aa.$$childHead ? (aa.$$childTail.$$nextSibling = Z, aa.$$childTail = Z) : aa.$$childHead = aa.$$childTail = Z;
                        (y || aa != this) && Z.$on("$destroy", K);
                        return Z
                    }, $watch: function (aa, y, af, ae) {
                        var ad = L(aa);
                        if (ad.$$watchDelegate) {
                            return ad.$$watchDelegate(this, y, af, ad, aa)
                        }
                        var ac = this, Z = ac.$$watchers, ab = {fn: y, last: z, get: ad, exp: ae || aa, eq: !!af};
                        v = null;
                        fr(y) || (ab.fn = eP);
                        Z || (Z = ac.$$watchers = []);
                        Z.unshift(ab);
                        Y(this, 1);
                        return function () {
                            0 <= bu(Z, ab) && Y(ac, -1);
                            v = null
                        }
                    }, $watchGroup: function (bb, ag) {
                        function af() {
                            aa = !1;
                            y ? (y = !1, ag(ad, ad, ab)) : ag(ad, ae, ab)
                        }

                        var ae = Array(bb.length), ad = Array(bb.length), ac = [], ab = this, aa = !1, y = !0;
                        if (!bb.length) {
                            var Z = !0;
                            ab.$evalAsync(function () {
                                Z && ag(ad, ad, ab)
                            });
                            return function () {
                                Z = !1
                            }
                        }
                        if (1 === bb.length) {
                            return this.$watch(bb[0], function (bc, be, bd) {
                                ad[0] = bc;
                                ae[0] = be;
                                ag(ad, bc === be ? ad : ae, bd)
                            })
                        }
                        eT(bb, function (be, bc) {
                            var bd = ab.$watch(be, function (bf, bg) {
                                ad[bc] = bf;
                                ae[bc] = bg;
                                aa || (aa = !0, ab.$evalAsync(af))
                            });
                            ac.push(bd)
                        });
                        return function () {
                            for (; ac.length;) {
                                ac.shift()()
                            }
                        }
                    }, $watchCollection: function (be, bd) {
                        function bc(ca) {
                            ag = ca;
                            var bg, cd, cc, cb;
                            if (!eQ(ag)) {
                                if (fy(ag)) {
                                    if (at(ag)) {
                                        for (af !== y && (af = y, aa = af.length = 0, ad++), ca = ag.length, aa !== ca && (ad++, af.length = aa = ca), bg = 0; bg < ca; bg++) {
                                            cb = af[bg], cc = ag[bg], cd = cb !== cb && cc !== cc, cd || cb === cc || (ad++, af[bg] = cc)
                                        }
                                    } else {
                                        af !== bf && (af = bf = {}, aa = 0, ad++);
                                        ca = 0;
                                        for (bg in ag) {
                                            ag.hasOwnProperty(bg) && (ca++, cc = ag[bg], cb = af[bg], bg in af ? (cd = cb !== cb && cc !== cc, cd || cb === cc || (ad++, af[bg] = cc)) : (aa++, af[bg] = cc, ad++))
                                        }
                                        if (aa > ca) {
                                            for (bg in ad++, af) {
                                                ag.hasOwnProperty(bg) || (aa--, delete af[bg])
                                            }
                                        }
                                    }
                                } else {
                                    af !== ag && (af = ag, ad++)
                                }
                                return ad
                            }
                        }

                        bc.$stateful = !0;
                        var bb = this, ag, af, ae, ac = 1 < bd.length, ad = 0, ab = L(be, bc), y = [], bf = {}, Z = !0,
                            aa = 0;
                        return this.$watch(ab, function () {
                            Z ? (Z = !1, bd(ag, ag, bb)) : bd(ag, ae, bb);
                            if (ac) {
                                if (fy(ag)) {
                                    if (at(ag)) {
                                        ae = Array(ag.length);
                                        for (var bg = 0; bg < ag.length; bg++) {
                                            ae[bg] = ag[bg]
                                        }
                                    } else {
                                        for (bg in ae = {}, ag) {
                                            c1.call(ag, bg) && (ae[bg] = ag[bg])
                                        }
                                    }
                                } else {
                                    ae = ag
                                }
                            }
                        })
                    }, $digest: function () {
                        var ag, ae, ad, ac, ab, bf, aa = q, Z, be = [], bc, bd;
                        a("$digest");
                        G.$$checkUrlChange();
                        this === C && null !== u && (G.defer.cancel(u), V());
                        v = null;
                        do {
                            bf = !1;
                            for (Z = this; T.length;) {
                                try {
                                    bd = T.shift(), bd.scope.$eval(bd.expression, bd.locals)
                                } catch (bb) {
                                    N(bb)
                                }
                                v = null
                            }
                            q:do {
                                if (ac = Z.$$watchers) {
                                    for (ab = ac.length; ab--;) {
                                        try {
                                            if (ag = ac[ab]) {
                                                if ((ae = ag.get(Z)) !== (ad = ag.last) && !(ag.eq ? c2(ae, ad) : "number" === typeof ae && "number" === typeof ad && isNaN(ae) && isNaN(ad))) {
                                                    bf = !0, v = ag, ag.last = ag.eq ? aA(ae, null) : ae, ag.fn(ae, ad === z ? ae : ad, Z), 5 > aa && (bc = 4 - aa, be[bc] || (be[bc] = []), be[bc].push({
                                                        msg: fr(ag.exp) ? "fn: " + (ag.exp.name || ag.exp.toString()) : ag.exp,
                                                        newVal: ae,
                                                        oldVal: ad
                                                    }))
                                                } else {
                                                    if (ag === v) {
                                                        bf = !1;
                                                        break q
                                                    }
                                                }
                                            }
                                        } catch (af) {
                                            N(af)
                                        }
                                    }
                                }
                                if (!(ac = Z.$$watchersCount && Z.$$childHead || Z !== this && Z.$$nextSibling)) {
                                    for (; Z !== this && !(ac = Z.$$nextSibling);) {
                                        Z = Z.$parent
                                    }
                                }
                            } while (Z = ac);
                            if ((bf || T.length) && !aa--) {
                                throw C.$$phase = null, w("infdig", q, be)
                            }
                        } while (bf || T.length);
                        for (C.$$phase = null; R.length;) {
                            try {
                                R.shift()()
                            } catch (y) {
                                N(y)
                            }
                        }
                    }, $destroy: function () {
                        if (!this.$$destroyed) {
                            var Z = this.$parent;
                            this.$broadcast("$destroy");
                            this.$$destroyed = !0;
                            this === C && G.$$applicationDestroyed();
                            Y(this, -this.$$watchersCount);
                            for (var y in this.$$listenerCount) {
                                E(this, this.$$listenerCount[y], y)
                            }
                            Z && Z.$$childHead == this && (Z.$$childHead = this.$$nextSibling);
                            Z && Z.$$childTail == this && (Z.$$childTail = this.$$prevSibling);
                            this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling);
                            this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling);
                            this.$destroy = this.$digest = this.$apply = this.$evalAsync = this.$applyAsync = eP;
                            this.$on = this.$watch = this.$watchGroup = function () {
                                return eP
                            };
                            this.$$listeners = {};
                            this.$parent = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = this.$root = this.$$watchers = null
                        }
                    }, $eval: function (Z, y) {
                        return L(Z)(this, y)
                    }, $evalAsync: function (Z, y) {
                        C.$$phase || T.length || G.defer(function () {
                            T.length && C.$digest()
                        });
                        T.push({scope: this, expression: Z, locals: y})
                    }, $$postDigest: function (y) {
                        R.push(y)
                    }, $apply: function (Z) {
                        try {
                            return a("$apply"), this.$eval(Z)
                        } catch (y) {
                            N(y)
                        } finally {
                            C.$$phase = null;
                            try {
                                C.$digest()
                            } catch (aa) {
                                throw N(aa), aa
                            }
                        }
                    }, $applyAsync: function (Z) {
                        function y() {
                            aa.$eval(Z)
                        }

                        var aa = this;
                        Z && U.push(y);
                        W()
                    }, $on: function (Z, y) {
                        var ac = this.$$listeners[Z];
                        ac || (this.$$listeners[Z] = ac = []);
                        ac.push(y);
                        var ab = this;
                        do {
                            ab.$$listenerCount[Z] || (ab.$$listenerCount[Z] = 0), ab.$$listenerCount[Z]++
                        } while (ab = ab.$parent);
                        var aa = this;
                        return function () {
                            var ad = ac.indexOf(y);
                            -1 !== ad && (ac[ad] = null, E(aa, 1, Z))
                        }
                    }, $emit: function (bc, bb) {
                        var ag = [], af, ae = this, ad = !1, ac = {
                            name: bc, targetScope: ae, stopPropagation: function () {
                                ad = !0
                            }, preventDefault: function () {
                                ac.defaultPrevented = !0
                            }, defaultPrevented: !1
                        }, aa = a6([ac], arguments, 1), ab, Z;
                        do {
                            af = ae.$$listeners[bc] || ag;
                            ac.currentScope = ae;
                            ab = 0;
                            for (Z = af.length; ab < Z; ab++) {
                                if (af[ab]) {
                                    try {
                                        af[ab].apply(null, aa)
                                    } catch (y) {
                                        N(y)
                                    }
                                } else {
                                    af.splice(ab, 1), ab--, Z--
                                }
                            }
                            if (ad) {
                                return ac.currentScope = null, ac
                            }
                            ae = ae.$parent
                        } while (ae);
                        ac.currentScope = null;
                        return ac
                    }, $broadcast: function (ag, af) {
                        var ae = this, ad = this, ac = {
                            name: ag, targetScope: this, preventDefault: function () {
                                ac.defaultPrevented = !0
                            }, defaultPrevented: !1
                        };
                        if (!this.$$listenerCount[ag]) {
                            return ac
                        }
                        for (var ab = a6([ac], arguments, 1), aa, y; ae = ad;) {
                            ac.currentScope = ae;
                            ad = ae.$$listeners[ag] || [];
                            aa = 0;
                            for (y = ad.length; aa < y; aa++) {
                                if (ad[aa]) {
                                    try {
                                        ad[aa].apply(null, ab)
                                    } catch (Z) {
                                        N(Z)
                                    }
                                } else {
                                    ad.splice(aa, 1), aa--, y--
                                }
                            }
                            if (!(ad = ae.$$listenerCount[ag] && ae.$$childHead || ae !== this && ae.$$nextSibling)) {
                                for (; ae !== this && !(ad = ae.$$nextSibling);) {
                                    ae = ae.$parent
                                }
                            }
                        }
                        ac.currentScope = null;
                        return ac
                    }
                };
                var C = new F, T = C.$$asyncQueue = [], R = C.$$postDigestQueue = [], U = C.$$applyAsyncQueue = [];
                return C
            }]
        }

        function dT() {
            var n = /^\s*(https?|ftp|mailto|tel|file):/, q = /^\s*((https?|ftp|file|blob):|data:image\/)/;
            this.aHrefSanitizationWhitelist = function (u) {
                return eN(u) ? (n = u, this) : n
            };
            this.imgSrcSanitizationWhitelist = function (a) {
                return eN(a) ? (q = a, this) : q
            };
            this.$get = function () {
                return function (w, v) {
                    var u = v ? q : n, a;
                    a = bi(w).href;
                    return "" === a || a.match(u) ? w : "unsafe:" + a
                }
            }
        }

        function bq(a) {
            if ("self" === a) {
                return a
            }
            if (fn(a)) {
                if (-1 < a.indexOf("***")) {
                    throw aG("iwcard", a)
                }
                a = aK(a).replace("\\*\\*", ".*").replace("\\*", "[^:/.?&;]*");
                return new RegExp("^" + a + "$")
            }
            if (b6(a)) {
                return new RegExp("^" + a.source + "$")
            }
            throw aG("imatcher")
        }

        function ax(n) {
            var q = [];
            eN(n) && eT(n, function (a) {
                q.push(bq(a))
            });
            return q
        }

        function cx() {
            this.SCE_CONTEXTS = b0;
            var n = ["self"], q = [];
            this.resourceUrlWhitelist = function (u) {
                arguments.length && (n = ax(u));
                return n
            };
            this.resourceUrlBlacklist = function (a) {
                arguments.length && (q = ax(a));
                return q
            };
            this.$get = ["$injector", function (z) {
                function y(E, C) {
                    return "self" === E ? d7(C) : !!E.exec(C.href)
                }

                function w(E) {
                    var C = function (F) {
                        this.$$unwrapTrustedValue = function () {
                            return F
                        }
                    };
                    E && (C.prototype = new E);
                    C.prototype.valueOf = function () {
                        return this.$$unwrapTrustedValue()
                    };
                    C.prototype.toString = function () {
                        return this.$$unwrapTrustedValue().toString()
                    };
                    return C
                }

                var v = function (C) {
                    throw aG("unsafe")
                };
                z.has("$sanitize") && (v = z.get("$sanitize"));
                var u = w(), a = {};
                a[b0.HTML] = w(u);
                a[b0.CSS] = w(u);
                a[b0.URL] = w(u);
                a[b0.JS] = w(u);
                a[b0.RESOURCE_URL] = w(a[b0.URL]);
                return {
                    trustAs: function (E, C) {
                        var F = a.hasOwnProperty(E) ? a[E] : null;
                        if (!F) {
                            throw aG("icontext", E, C)
                        }
                        if (null === C || C === eR || "" === C) {
                            return C
                        }
                        if ("string" !== typeof C) {
                            throw aG("itype", E)
                        }
                        return new F(C)
                    }, getTrusted: function (L, G) {
                        if (null === G || G === eR || "" === G) {
                            return G
                        }
                        var F = a.hasOwnProperty(L) ? a[L] : null;
                        if (F && G instanceof F) {
                            return G.$$unwrapTrustedValue()
                        }
                        if (L === b0.RESOURCE_URL) {
                            var F = bi(G.toString()), E, C, K = !1;
                            E = 0;
                            for (C = n.length; E < C; E++) {
                                if (y(n[E], F)) {
                                    K = !0;
                                    break
                                }
                            }
                            if (K) {
                                for (E = 0, C = q.length; E < C; E++) {
                                    if (y(q[E], F)) {
                                        K = !1;
                                        break
                                    }
                                }
                            }
                            if (K) {
                                return G
                            }
                            throw aG("insecurl", G.toString())
                        }
                        if (L === b0.HTML) {
                            return v(G)
                        }
                        throw aG("unsafe")
                    }, valueOf: function (C) {
                        return C instanceof u ? C.$$unwrapTrustedValue() : C
                    }
                }
            }]
        }

        function cK() {
            var a = !0;
            this.enabled = function (n) {
                arguments.length && (a = !!n);
                return a
            };
            this.$get = ["$parse", "$sceDelegate", function (n, y) {
                if (a && 8 > dW) {
                    throw aG("iequirks")
                }
                var w = eh(b0);
                w.isEnabled = function () {
                    return a
                };
                w.trustAs = y.trustAs;
                w.getTrusted = y.getTrusted;
                w.valueOf = y.valueOf;
                a || (w.trustAs = w.getTrusted = function (C, z) {
                    return z
                }, w.valueOf = cv);
                w.parseAs = function (z, E) {
                    var C = n(E);
                    return C.literal && C.constant ? C : n(E, function (F) {
                        return w.getTrusted(z, F)
                    })
                };
                var v = w.parseAs, u = w.getTrusted, q = w.trustAs;
                eT(b0, function (C, z) {
                    var E = fv(z);
                    w[et("parse_as_" + E)] = function (F) {
                        return v(C, F)
                    };
                    w[et("get_trusted_" + E)] = function (F) {
                        return u(C, F)
                    };
                    w[et("trust_as_" + E)] = function (F) {
                        return q(C, F)
                    }
                });
                return w
            }]
        }

        function ck() {
            this.$get = ["$window", "$document", function (G, K) {
                var F = {}, E = e8((/android (\d+)/.exec(fv((G.navigator || {}).userAgent)) || [])[1]),
                    C = /Boxee/i.test((G.navigator || {}).userAgent), z = K[0] || {}, y,
                    w = /^(Moz|webkit|ms)(?=[A-Z])/, u = z.body && z.body.style, v = !1, q = !1;
                if (u) {
                    for (var n in u) {
                        if (v = w.exec(n)) {
                            y = v[0];
                            y = y.substr(0, 1).toUpperCase() + y.substr(1);
                            break
                        }
                    }
                    y || (y = "WebkitOpacity" in u && "webkit");
                    v = !!("transition" in u || y + "Transition" in u);
                    q = !!("animation" in u || y + "Animation" in u);
                    !E || v && q || (v = fn(u.webkitTransition), q = fn(u.webkitAnimation))
                }
                return {
                    history: !(!G.history || !G.history.pushState || 4 > E || C), hasEvent: function (N) {
                        if ("input" === N && 11 >= dW) {
                            return !1
                        }
                        if (eQ(F[N])) {
                            var L = z.createElement("div");
                            F[N] = "on" + N in L
                        }
                        return F[N]
                    }, csp: eZ(), vendorPrefix: y, transitions: v, animations: q, android: E
                }
            }]
        }

        function bI() {
            this.$get = ["$templateCache", "$http", "$q", function (n, q, v) {
                function u(y, w) {
                    u.totalPendingRequests++;
                    var a = q.defaults && q.defaults.transformResponse;
                    fo(a) ? a = a.filter(function (z) {
                        return z !== ch
                    }) : a === ch && (a = null);
                    return q.get(y, {cache: n, transformResponse: a})["finally"](function () {
                        u.totalPendingRequests--
                    }).then(function (z) {
                        n.put(y, z.data);
                        return z.data
                    }, function (z) {
                        if (!w) {
                            throw eu("tpload", y, z.status, z.statusText)
                        }
                        return v.reject(z)
                    })
                }

                u.totalPendingRequests = 0;
                return u
            }]
        }

        function bw() {
            this.$get = ["$rootScope", "$browser", "$location", function (n, q, u) {
                return {
                    findBindings: function (w, v, z) {
                        w = w.getElementsByClassName("ng-binding");
                        var y = [];
                        eT(w, function (C) {
                            var E = fS.element(C).data("$binding");
                            E && eT(E, function (a) {
                                z ? (new RegExp("(^|\\s)" + aK(v) + "(\\s|\\||$)")).test(a) && y.push(C) : -1 != a.indexOf(v) && y.push(C)
                            })
                        });
                        return y
                    }, findModels: function (y, v, E) {
                        for (var C = ["ng-", "data-ng-", "ng\\:"], z = 0; z < C.length; ++z) {
                            var w = y.querySelectorAll("[" + C[z] + "model" + (E ? "=" : "*=") + '"' + v + '"]');
                            if (w.length) {
                                return w
                            }
                        }
                    }, getLocation: function () {
                        return u.url()
                    }, setLocation: function (v) {
                        v !== u.url() && (u.url(v), n.$digest())
                    }, whenStable: function (a) {
                        q.notifyWhenNoOutstandingRequests(a)
                    }
                }
            }]
        }

        function bk() {
            this.$get = ["$rootScope", "$browser", "$q", "$$q", "$exceptionHandler", function (n, q, z, y, w) {
                function v(L, C, E) {
                    fr(L) || (E = C, C = L, L = eP);
                    var a = bp.call(arguments, 3), G = eN(E) && !E, F = (G ? y : z).defer(), N = F.promise, K;
                    K = q.defer(function () {
                        try {
                            F.resolve(L.apply(null, a))
                        } catch (Q) {
                            F.reject(Q), w(Q)
                        } finally {
                            delete u[N.$$timeoutId]
                        }
                        G || n.$apply()
                    }, C);
                    N.$$timeoutId = K;
                    u[K] = F;
                    return N
                }

                var u = {};
                v.cancel = function (a) {
                    return a && a.$$timeoutId in u ? (u[a.$$timeoutId].reject("canceled"), delete u[a.$$timeoutId], q.defer.cancel(a.$$timeoutId)) : !1
                };
                return v
            }]
        }

        function bi(a) {
            dW && (e7.setAttribute("href", a), a = e7.href);
            e7.setAttribute("href", a);
            return {
                href: e7.href,
                protocol: e7.protocol ? e7.protocol.replace(/:$/, "") : "",
                host: e7.host,
                search: e7.search ? e7.search.replace(/^\?/, "") : "",
                hash: e7.hash ? e7.hash.replace(/^#/, "") : "",
                hostname: e7.hostname,
                port: e7.port,
                pathname: "/" === e7.pathname.charAt(0) ? e7.pathname : "/" + e7.pathname
            }
        }

        function d7(a) {
            a = fn(a) ? bi(a) : a;
            return a.protocol === aj.protocol && a.host === aj.host
        }

        function aV() {
            this.$get = bB(fm)
        }

        function B(n) {
            function q(z) {
                try {
                    return decodeURIComponent(z)
                } catch (y) {
                    return z
                }
            }

            var w = n[0] || {}, v = {}, u = "";
            return function () {
                var a, E, C, y, z;
                a = w.cookie || "";
                if (a !== u) {
                    for (u = a, a = u.split("; "), v = {}, C = 0; C < a.length; C++) {
                        E = a[C], y = E.indexOf("="), 0 < y && (z = q(E.substring(0, y)), v[z] === eR && (v[z] = q(E.substring(y + 1))))
                    }
                }
                return v
            }
        }

        function f() {
            this.$get = B
        }

        function eK(n) {
            function q(v, u) {
                if (fy(v)) {
                    var a = {};
                    eT(v, function (w, y) {
                        a[y] = q(y, w)
                    });
                    return a
                }
                return n.factory(v + "Filter", u)
            }

            this.register = q;
            this.$get = ["$injector", function (u) {
                return function (a) {
                    return u.get(a + "Filter")
                }
            }];
            q("currency", h);
            q("date", f2);
            q("filter", a1);
            q("json", b7);
            q("limitTo", fL);
            q("lowercase", fp);
            q("number", fI);
            q("orderBy", ba);
            q("uppercase", eU)
        }

        function a1() {
            return function (n, q, v) {
                if (!at(n)) {
                    if (null == n) {
                        return n
                    }
                    throw ft("filter")("notarray", n)
                }
                var u;
                switch (dw(q)) {
                    case"function":
                        break;
                    case"boolean":
                    case"null":
                    case"number":
                    case"string":
                        u = !0;
                    case"object":
                        q = eB(q, v, u);
                        break;
                    default:
                        return n
                }
                return Array.prototype.filter.call(n, q)
            }
        }

        function eB(n, q, v) {
            var u = fy(n) && "$" in n;
            !0 === q ? q = c2 : fr(q) || (q = function (y, w) {
                if (eQ(y)) {
                    return !1
                }
                if (null === y || null === w) {
                    return y === w
                }
                var z;
                !(z = fy(w)) && (z = fy(y)) && (z = y, z = !(fr(z.toString) && z.toString !== Object.prototype.toString));
                if (z) {
                    return !1
                }
                y = fv("" + y);
                w = fv("" + w);
                return -1 !== y.indexOf(w)
            });
            return function (a) {
                return u && !fy(a) ? eA(a, n.$, q, !1) : eA(a, n, q, v)
            }
        }

        function eA(n, q, C, z, y) {
            var w = dw(n), v = dw(q);
            if ("string" === v && "!" === q.charAt(0)) {
                return !eA(n, q.substring(1), C, z)
            }
            if (fo(n)) {
                return n.some(function (a) {
                    return eA(a, q, C, z)
                })
            }
            switch (w) {
                case"object":
                    var u;
                    if (z) {
                        for (u in n) {
                            if ("$" !== u.charAt(0) && eA(n[u], q, C, !0)) {
                                return !0
                            }
                        }
                        return y ? !1 : eA(n, q, C, !1)
                    }
                    if ("object" === v) {
                        for (u in q) {
                            if (y = q[u], !fr(y) && !eQ(y) && (w = "$" === u, !eA(w ? n : n[u], y, C, w, w))) {
                                return !1
                            }
                        }
                        return !0
                    }
                    return C(n, q);
                case"function":
                    return !1;
                default:
                    return C(n, q)
            }
        }

        function dw(a) {
            return null === a ? "null" : typeof a
        }

        function h(n) {
            var q = n.NUMBER_FORMATS;
            return function (a, v, u) {
                eQ(v) && (v = q.CURRENCY_SYM);
                eQ(u) && (u = q.PATTERNS[1].maxFrac);
                return null == a ? a : aQ(a, q.PATTERNS[1], q.GROUP_SEP, q.DECIMAL_SEP, u).replace(/\u00A4/g, v)
            }
        }

        function fI(n) {
            var q = n.NUMBER_FORMATS;
            return function (a, u) {
                return null == a ? a : aQ(a, q.PATTERNS[0], q.GROUP_SEP, q.DECIMAL_SEP, u)
            }
        }

        function aQ(L, N, K, G, F) {
            if (fy(L)) {
                return ""
            }
            var E = 0 > L;
            L = Math.abs(L);
            var C = Infinity === L;
            if (!C && !isFinite(L)) {
                return ""
            }
            var z = L + "", w = "", y = !1, v = [];
            C && (w = "\u221e");
            if (!C && -1 !== z.indexOf("e")) {
                var q = z.match(/([\d\.]+)e(-?)(\d+)/);
                q && "-" == q[2] && q[3] > F + 1 ? L = 0 : (w = z, y = !0)
            }
            if (C || y) {
                0 < F && 1 > L && (w = L.toFixed(F), L = parseFloat(w))
            } else {
                C = (z.split(aD)[1] || "").length;
                eQ(F) && (F = Math.min(Math.max(N.minFrac, C), N.maxFrac));
                L = +(Math.round(+(L.toString() + "e" + F)).toString() + "e" + -F);
                var C = ("" + L).split(aD), z = C[0], C = C[1] || "", q = 0, Q = N.lgSize, u = N.gSize;
                if (z.length >= Q + u) {
                    for (q = z.length - Q, y = 0; y < q; y++) {
                        0 === (q - y) % u && 0 !== y && (w += K), w += z.charAt(y)
                    }
                }
                for (y = q; y < z.length; y++) {
                    0 === (z.length - y) % Q && 0 !== y && (w += K), w += z.charAt(y)
                }
                for (; C.length < F;) {
                    C += "0"
                }
                F && "0" !== F && (w += G + C.substr(0, F))
            }
            0 === L && (E = !1);
            v.push(E ? N.negPre : N.posPre, w, E ? N.negSuf : N.posSuf);
            return v.join("")
        }

        function c(n, q, v) {
            var u = "";
            0 > n && (u = "-", n = -n);
            for (n = "" + n; n.length < q;) {
                n = "0" + n
            }
            v && (n = n.substr(n.length - q));
            return u + n
        }

        function fR(n, q, v, u) {
            v = v || 0;
            return function (a) {
                a = a["get" + n]();
                if (0 < v || a > -v) {
                    a += v
                }
                0 === a && -12 == v && (a = 12);
                return c(a, q, u)
            }
        }

        function fX(n, q) {
            return function (w, v) {
                var u = w["get" + n](), a = bM(q ? "SHORT" + n : n);
                return v[a][u]
            }
        }

        function ap(n) {
            var q = (new Date(n, 0, 1)).getDay();
            return new Date(n, 0, (4 >= q ? 5 : 12) - q)
        }

        function M(a) {
            return function (n) {
                var q = ap(n.getFullYear());
                n = +new Date(n.getFullYear(), n.getMonth(), n.getDate() + (4 - n.getDay())) - +q;
                n = 1 + Math.round(n / 604800000);
                return c(n, a)
            }
        }

        function dk(n, q) {
            return 0 >= n.getFullYear() ? q.ERAS[0] : q.ERAS[1]
        }

        function f2(n) {
            function q(y) {
                var v;
                if (v = y.match(u)) {
                    y = new Date(0);
                    var E = 0, C = 0, z = v[8] ? y.setUTCFullYear : y.setFullYear,
                        w = v[8] ? y.setUTCHours : y.setHours;
                    v[9] && (E = e8(v[9] + v[10]), C = e8(v[9] + v[11]));
                    z.call(y, e8(v[1]), e8(v[2]) - 1, e8(v[3]));
                    E = e8(v[4] || 0) - E;
                    C = e8(v[5] || 0) - C;
                    z = e8(v[6] || 0);
                    v = Math.round(1000 * parseFloat("0." + (v[7] || 0)));
                    w.call(y, E, C, z, v)
                }
                return y
            }

            var u = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
            return function (F, E, C) {
                var z = "", y = [], v, w;
                E = E || "mediumDate";
                E = n.DATETIME_FORMATS[E] || E;
                fn(F) && (F = eo.test(F) ? e8(F) : q(F));
                fh(F) && (F = new Date(F));
                if (!eH(F) || !isFinite(F.getTime())) {
                    return F
                }
                for (; E;) {
                    (w = d4.exec(E)) ? (y = a6(y, w, 1), E = y.pop()) : (y.push(E), E = null)
                }
                var a = F.getTimezoneOffset();
                C && (a = D(C, F.getTimezoneOffset()), F = dD(F, C, !0));
                eT(y, function (G) {
                    v = dR[G];
                    z += v ? v(F, n.DATETIME_FORMATS, a) : G.replace(/(^'|'$)/g, "").replace(/''/g, "'")
                });
                return z
            }
        }

        function b7() {
            return function (n, q) {
                eQ(q) && (q = 2);
                return ci(n, q)
            }
        }

        function fL() {
            return function (n, q, u) {
                q = Infinity === Math.abs(Number(q)) ? Number(q) : e8(q);
                if (isNaN(q)) {
                    return n
                }
                fh(n) && (n = n.toString());
                if (!fo(n) && !fn(n)) {
                    return n
                }
                u = !u || isNaN(u) ? 0 : e8(u);
                u = 0 > u && u >= -n.length ? n.length + u : u;
                return 0 <= q ? n.slice(u, u + q) : 0 === u ? n.slice(q, n.length) : n.slice(Math.max(0, u + q), u)
            }
        }

        function ba(a) {
            return function (n, z, y) {
                function w(E, C) {
                    return C ? function (F, G) {
                        return E(G, F)
                    } : E
                }

                function v(C) {
                    switch (typeof C) {
                        case"number":
                        case"boolean":
                        case"string":
                            return !0;
                        default:
                            return !1
                    }
                }

                function u(C) {
                    return null === C ? "null" : "function" === typeof C.valueOf && (C = C.valueOf(), v(C)) || "function" === typeof C.toString && (C = C.toString(), v(C)) ? C : ""
                }

                function q(E, C) {
                    var G = typeof E, F = typeof C;
                    G === F && "object" === G && (E = u(E), C = u(C));
                    return G === F ? ("string" === G && (E = E.toLowerCase(), C = C.toLowerCase()), E === C ? 0 : E < C ? -1 : 1) : G < F ? -1 : 1
                }

                if (!at(n)) {
                    return n
                }
                z = fo(z) ? z : [z];
                0 === z.length && (z = ["+"]);
                z = z.map(function (C) {
                    var G = !1, F = C || cv;
                    if (fn(C)) {
                        if ("+" == C.charAt(0) || "-" == C.charAt(0)) {
                            G = "-" == C.charAt(0), C = C.substring(1)
                        }
                        if ("" === C) {
                            return w(q, G)
                        }
                        F = a(C);
                        if (F.constant) {
                            var E = F();
                            return w(function (L, K) {
                                return q(L[E], K[E])
                            }, G)
                        }
                    }
                    return w(function (L, K) {
                        return q(F(L), F(K))
                    }, G)
                });
                return bp.call(n).sort(w(function (E, C) {
                    for (var G = 0; G < z.length; G++) {
                        var F = z[G](E, C);
                        if (0 !== F) {
                            return F
                        }
                    }
                    return 0
                }, y))
            }
        }

        function en(a) {
            fr(a) && (a = {link: a});
            a.restrict = a.restrict || "AC";
            return bB(a)
        }

        function o(n, q, C, z, y) {
            var w = this, v = [], u = w.$$parentForm = n.parent().controller("form") || fD;
            w.$error = {};
            w.$$success = {};
            w.$pending = eR;
            w.$name = y(q.name || q.ngForm || "")(C);
            w.$dirty = !1;
            w.$pristine = !0;
            w.$valid = !0;
            w.$invalid = !1;
            w.$submitted = !1;
            u.$addControl(w);
            w.$rollbackViewValue = function () {
                eT(v, function (E) {
                    E.$rollbackViewValue()
                })
            };
            w.$commitViewValue = function () {
                eT(v, function (E) {
                    E.$commitViewValue()
                })
            };
            w.$addControl = function (E) {
                ds(E.$name, "input");
                v.push(E);
                E.$name && (w[E.$name] = E)
            };
            w.$$renameControl = function (F, E) {
                var G = F.$name;
                w[G] === F && delete w[G];
                w[E] = F;
                F.$name = E
            };
            w.$removeControl = function (E) {
                E.$name && w[E.$name] === E && delete w[E.$name];
                eT(w.$pending, function (a, F) {
                    w.$setValidity(F, null, E)
                });
                eT(w.$error, function (a, F) {
                    w.$setValidity(F, null, E)
                });
                eT(w.$$success, function (a, F) {
                    w.$setValidity(F, null, E)
                });
                bu(v, E)
            };
            f8({
                ctrl: this, $element: n, set: function (F, E, K) {
                    var G = F[E];
                    G ? -1 === G.indexOf(K) && G.push(K) : F[E] = [K]
                }, unset: function (F, E, K) {
                    var G = F[E];
                    G && (bu(G, K), 0 === G.length && delete F[E])
                }, parentForm: u, $animate: z
            });
            w.$setDirty = function () {
                z.removeClass(n, cV);
                z.addClass(n, e6);
                w.$dirty = !0;
                w.$pristine = !1;
                u.$setDirty()
            };
            w.$setPristine = function () {
                z.setClass(n, cV, e6 + " ng-submitted");
                w.$dirty = !1;
                w.$pristine = !0;
                w.$submitted = !1;
                eT(v, function (E) {
                    E.$setPristine()
                })
            };
            w.$setUntouched = function () {
                eT(v, function (E) {
                    E.$setUntouched()
                })
            };
            w.$setSubmitted = function () {
                z.addClass(n, "ng-submitted");
                w.$submitted = !0;
                u.$setSubmitted()
            }
        }

        function c0(a) {
            a.$formatters.push(function (n) {
                return a.$isEmpty(n) ? n : n.toString()
            })
        }

        function dK(F, G, E, C, z, y) {
            var w = fv(G[0].type);
            if (!z.android) {
                var v = !1;
                G.on("compositionstart", function (K) {
                    v = !0
                });
                G.on("compositionend", function () {
                    v = !1;
                    q()
                })
            }
            var q = function (a) {
                u && (y.defer.cancel(u), u = null);
                if (!v) {
                    var K = G.val();
                    a = a && a.type;
                    "password" === w || E.ngTrim && "false" === E.ngTrim || (K = fj(K));
                    (C.$viewValue !== K || "" === K && C.$$hasNativeValidators) && C.$setViewValue(K, a)
                }
            };
            if (z.hasEvent("input")) {
                G.on("input", q)
            } else {
                var u, n = function (L, K, N) {
                    u || (u = y.defer(function () {
                        u = null;
                        K && K.value === N || q(L)
                    }))
                };
                G.on("keydown", function (L) {
                    var K = L.keyCode;
                    91 === K || 15 < K && 19 > K || 37 <= K && 40 >= K || n(L, this, this.value)
                });
                if (z.hasEvent("paste")) {
                    G.on("paste cut", n)
                }
            }
            G.on("change", q);
            C.$render = function () {
                G.val(C.$isEmpty(C.$viewValue) ? "" : C.$viewValue)
            }
        }

        function eM(n, q) {
            return function (w, v) {
                var u, a;
                if (eH(w)) {
                    return w
                }
                if (fn(w)) {
                    '"' == w.charAt(0) && '"' == w.charAt(w.length - 1) && (w = w.substring(1, w.length - 1));
                    if (dF.test(w)) {
                        return new Date(w)
                    }
                    n.lastIndex = 0;
                    if (u = n.exec(w)) {
                        return u.shift(), a = v ? {
                            yyyy: v.getFullYear(),
                            MM: v.getMonth() + 1,
                            dd: v.getDate(),
                            HH: v.getHours(),
                            mm: v.getMinutes(),
                            ss: v.getSeconds(),
                            sss: v.getMilliseconds() / 1000
                        } : {yyyy: 1970, MM: 1, dd: 1, HH: 0, mm: 0, ss: 0, sss: 0}, eT(u, function (y, z) {
                            z < q.length && (a[q[z]] = +y)
                        }), new Date(a.yyyy, a.MM - 1, a.dd, a.HH, a.mm, a.ss || 0, 1000 * a.sss || 0)
                    }
                }
                return NaN
            }
        }

        function dx(n, q, v, u) {
            return function (L, K, G, F, C, E, z) {
                function a(T) {
                    return T && !(T.getTime && T.getTime() !== T.getTime())
                }

                function R(T) {
                    return eN(T) ? eH(T) ? T : v(T) : eR
                }

                fV(L, K, G, F);
                dK(L, K, G, F, C, E);
                var y = F && F.$options && F.$options.timezone, w;
                F.$$parserName = n;
                F.$parsers.push(function (T) {
                    return F.$isEmpty(T) ? null : q.test(T) ? (T = v(T, w), y && (T = dD(T, y)), T) : eR
                });
                F.$formatters.push(function (T) {
                    if (T && !eH(T)) {
                        throw ez("datefmt", T)
                    }
                    if (a(T)) {
                        return (w = T) && y && (w = dD(w, y, !0)), z("date")(T, u, y)
                    }
                    w = null;
                    return ""
                });
                if (eN(G.min) || G.ngMin) {
                    var N;
                    F.$validators.min = function (T) {
                        return !a(T) || eQ(N) || v(T) >= N
                    };
                    G.$observe("min", function (T) {
                        N = R(T);
                        F.$validate()
                    })
                }
                if (eN(G.max) || G.ngMax) {
                    var Q;
                    F.$validators.max = function (T) {
                        return !a(T) || eQ(Q) || v(T) <= Q
                    };
                    G.$observe("max", function (T) {
                        Q = R(T);
                        F.$validate()
                    })
                }
            }
        }

        function fV(n, q, v, u) {
            (u.$$hasNativeValidators = fy(q[0].validity)) && u.$parsers.push(function (a) {
                var w = q.prop("validity") || {};
                return w.badInput && !w.typeMismatch ? eR : a
            })
        }

        function fB(n, q, w, v, u) {
            if (eN(v)) {
                n = n(v);
                if (!n.constant) {
                    throw ft("ngModel")("constexpr", w, v)
                }
                return n(q)
            }
            return u
        }

        function cN(n, q) {
            n = "ngClass" + n;
            return ["$animate", function (v) {
                function u(z, y) {
                    var F = [], E = 0;
                    z:for (; E < z.length; E++) {
                        for (var C = z[E], w = 0; w < y.length; w++) {
                            if (C == y[w]) {
                                continue z
                            }
                        }
                        F.push(C)
                    }
                    return F
                }

                function a(y) {
                    var w = [];
                    return fo(y) ? (eT(y, function (z) {
                        w = w.concat(a(z))
                    }), w) : fn(y) ? y.split(" ") : fy(y) ? (eT(y, function (z, C) {
                        z && (w = w.concat(C.split(" ")))
                    }), w) : y
                }

                return {
                    restrict: "AC", link: function (F, E, C) {
                        function y(K, G) {
                            var N = E.data("$classCounts") || dX(), L = [];
                            eT(K, function (Q) {
                                if (0 < G || N[Q]) {
                                    N[Q] = (N[Q] || 0) + G, N[Q] === +(0 < G) && L.push(Q)
                                }
                            });
                            E.data("$classCounts", N);
                            return L.join(" ")
                        }

                        function z(G) {
                            if (!0 === q || F.$index % 2 === q) {
                                var K = a(G || []);
                                if (!w) {
                                    var N = y(K, 1);
                                    C.$addClass(N)
                                } else {
                                    if (!c2(G, w)) {
                                        var L = a(w), N = u(K, L), K = u(L, K), N = y(N, 1), K = y(K, -1);
                                        N && N.length && v.addClass(E, N);
                                        K && K.length && v.removeClass(E, K)
                                    }
                                }
                            }
                            w = eh(G)
                        }

                        var w;
                        F.$watch(C[n], z, !0);
                        C.$observe("class", function (G) {
                            z(F.$eval(C[n]))
                        });
                        "ngClass" !== n && F.$watch("$index", function (N, L) {
                            var K = N & 1;
                            if (K !== (L & 1)) {
                                var G = a(F.$eval(C[n]));
                                K === q ? (K = y(G, 1), C.$addClass(K)) : (K = y(G, -1), C.$removeClass(K))
                            }
                        })
                    }
                }
            }]
        }

        function f8(E) {
            function F(K, G) {
                G && !w[K] ? (q.addClass(y, K), w[K] = !0) : !G && w[K] && (q.removeClass(y, K), w[K] = !1)
            }

            function C(a, G) {
                a = a ? "-" + bh(a, "-") : "";
                F(dl + a, !0 === G);
                F(e4 + a, !1 === G)
            }

            var z = E.ctrl, y = E.$element, w = {}, v = E.set, u = E.unset, n = E.parentForm, q = E.$animate;
            w[e4] = !(w[dl] = y.hasClass(dl));
            z.$setValidity = function (a, K, G) {
                K === eR ? (z.$pending || (z.$pending = {}), v(z.$pending, a, G)) : (z.$pending && u(z.$pending, a, G), eJ(z.$pending) && (z.$pending = eR));
                bG(K) ? K ? (u(z.$error, a, G), v(z.$$success, a, G)) : (v(z.$error, a, G), u(z.$$success, a, G)) : (u(z.$error, a, G), u(z.$$success, a, G));
                z.$pending ? (F(ex, !0), z.$valid = z.$invalid = eR, C("", null)) : (F(ex, !1), z.$valid = eJ(z.$error), z.$invalid = !z.$valid, C("", z.$valid));
                K = z.$pending && z.$pending[a] ? eR : z.$error[a] ? !1 : z.$$success[a] ? !0 : null;
                C(a, K);
                n.$setValidity(a, K, z)
            }
        }

        function eJ(n) {
            if (n) {
                for (var q in n) {
                    return !1
                }
            }
            return !0
        }

        var dt = /^\/(.+)\/([a-z]*)$/, fv = function (a) {
                return fn(a) ? a.toLowerCase() : a
            }, c1 = Object.prototype.hasOwnProperty, bM = function (a) {
                return fn(a) ? a.toUpperCase() : a
            }, dW, eL, cP, bp = [].slice, ev = [].splice, c9 = [].push, a0 = Object.prototype.toString,
            bn = Object.getPrototypeOf, S = ft("ng"), fS = fm.angular || (fm.angular = {}), eG, cO = 0;
        dW = e9.documentMode;
        eP.$inject = [];
        cv.$inject = [];
        var fo = Array.isArray,
            aL = /^\[object (Uint8(Clamped)?)|(Uint16)|(Uint32)|(Int8)|(Int16)|(Int32)|(Float(32)|(64))Array\]$/,
            fj = function (a) {
                return fn(a) ? a.trim() : a
            }, aK = function (a) {
                return a.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
            }, eZ = function () {
                if (eN(eZ.isActive_)) {
                    return eZ.isActive_
                }
                var n = !(!e9.querySelector("[ng-csp]") && !e9.querySelector("[data-ng-csp]"));
                if (!n) {
                    try {
                        new Function("")
                    } catch (q) {
                        n = !0
                    }
                }
                return eZ.isActive_ = n
            }, co = function () {
                if (eN(co.name_)) {
                    return co.name_
                }
                var n, q, w = d3.length, v, u;
                for (q = 0; q < w; ++q) {
                    if (v = d3[q], n = e9.querySelector("[" + v.replace(":", "\\:") + "jq]")) {
                        u = n.getAttribute(v + "jq");
                        break
                    }
                }
                return co.name_ = u
            }, d3 = ["ng-", "data-ng-", "ng:", "x-ng-"], fN = /[A-Z]/g, aR = !1, c7, bN = 1, fQ = 3,
            eq = {full: "1.4.0", major: 1, minor: 4, dot: 0, codeName: "jaracimrman-existence"};
        fk.expando = "ng339";
        var az = fk.cache = {}, an = 1;
        fk._data = function (a) {
            return this.cache[a[this.expando]] || {}
        };
        var f0 = /([\:\-\_]+(.))/g, fG = /^moz([A-Z])/, cW = {mouseleave: "mouseout", mouseenter: "mouseover"},
            cu = ft("jqLite"), aB = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, cH = /<|&#?\w+;/, a8 = /<([\w:]+)/,
            aO = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, cC = {
                option: [1, '<select multiple="multiple">', "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };
        cC.optgroup = cC.option;
        cC.tbody = cC.tfoot = cC.colgroup = cC.caption = cC.thead;
        cC.th = cC.td;
        var dQ = fk.prototype = {
            ready: function (n) {
                function q() {
                    u || (u = !0, n())
                }

                var u = !1;
                "complete" === e9.readyState ? setTimeout(q) : (this.on("DOMContentLoaded", q), fk(fm).on("load", q))
            }, toString: function () {
                var a = [];
                eT(this, function (n) {
                    a.push("" + n)
                });
                return "[" + a.join(", ") + "]"
            }, eq: function (a) {
                return 0 <= a ? eL(this[a]) : eL(this[this.length + a])
            }, length: 0, push: c9, sort: [].sort, splice: [].splice
        }, fK = {};
        eT("multiple selected checked disabled readOnly required open".split(" "), function (a) {
            fK[fv(a)] = a
        });
        var cT = {};
        eT("input select option textarea button form details".split(" "), function (a) {
            cT[a] = !0
        });
        var cG = {ngMinlength: "minlength", ngMaxlength: "maxlength", ngMin: "min", ngMax: "max", ngPattern: "pattern"};
        eT({data: bS, removeData: aZ}, function (n, q) {
            fk[q] = n
        });
        eT({
            data: bS, inheritedData: f4, scope: function (a) {
                return eL.data(a, "$scope") || f4(a.parentNode || a, ["$isolateScope", "$scope"])
            }, isolateScope: function (a) {
                return eL.data(a, "$isolateScope") || eL.data(a, "$isolateScopeNoTemplate")
            }, controller: dC, injector: function (a) {
                return f4(a, "$injector")
            }, removeAttr: function (n, q) {
                n.removeAttribute(q)
            }, hasClass: al, css: function (n, q, u) {
                q = et(q);
                if (eN(u)) {
                    n.style[q] = u
                } else {
                    return n.style[q]
                }
            }, attr: function (n, q, v) {
                var u = n.nodeType;
                if (u !== fQ && 2 !== u && 8 !== u) {
                    if (u = fv(q), fK[u]) {
                        if (eN(v)) {
                            v ? (n[q] = !0, n.setAttribute(q, u)) : (n[q] = !1, n.removeAttribute(u))
                        } else {
                            return n[q] || (n.attributes.getNamedItem(q) || eP).specified ? u : eR
                        }
                    } else {
                        if (eN(v)) {
                            n.setAttribute(q, v)
                        } else {
                            if (n.getAttribute) {
                                return n = n.getAttribute(q, 2), null === n ? eR : n
                            }
                        }
                    }
                }
            }, prop: function (n, q, u) {
                if (eN(u)) {
                    n[q] = u
                } else {
                    return n[q]
                }
            }, text: function () {
                function a(q, n) {
                    if (eQ(n)) {
                        var u = q.nodeType;
                        return u === bN || u === fQ ? q.textContent : ""
                    }
                    q.textContent = n
                }

                a.$dv = "";
                return a
            }(), val: function (n, q) {
                if (eQ(q)) {
                    if (n.multiple && "select" === aN(n)) {
                        var u = [];
                        eT(n.options, function (v) {
                            v.selected && u.push(v.value || v.text)
                        });
                        return 0 === u.length ? null : u
                    }
                    return n.value
                }
                n.value = q
            }, html: function (n, q) {
                if (eQ(q)) {
                    return n.innerHTML
                }
                bo(n, !0);
                n.innerHTML = q
            }, empty: dq
        }, function (n, q) {
            fk.prototype[q] = function (u, C) {
                var z, y, w = this.length;
                if (n !== dq && (2 == n.length && n !== al && n !== dC ? u : C) === eR) {
                    if (fy(u)) {
                        for (z = 0; z < w; z++) {
                            if (n === bS) {
                                n(this[z], u)
                            } else {
                                for (y in u) {
                                    n(this[z], y, u[y])
                                }
                            }
                        }
                        return this
                    }
                    z = n.$dv;
                    w = z === eR ? Math.min(w, 1) : w;
                    for (y = 0; y < w; y++) {
                        var v = n(this[y], u, C);
                        z = z ? z + v : v
                    }
                    return z
                }
                for (z = 0; z < w; z++) {
                    n(this[z], u, C)
                }
                return this
            }
        });
        eT({
            removeData: aZ, on: function e1(z, y, w, v) {
                if (eN(v)) {
                    throw cu("onargs")
                }
                if (ey(z)) {
                    var u = aM(z, !0);
                    v = u.events;
                    var q = u.handle;
                    q || (q = u.handle = f6(z, v));
                    for (var u = 0 <= y.indexOf(" ") ? y.split(" ") : [y], a = u.length; a--;) {
                        y = u[a];
                        var n = v[y];
                        n || (v[y] = [], "mouseenter" === y || "mouseleave" === y ? e1(z, cW[y], function (C) {
                            var E = C.relatedTarget;
                            E && (E === this || this.contains(E)) || q(C, y)
                        }) : "$destroy" !== y && z.addEventListener(y, q, !1), n = v[y]);
                        n.push(w)
                    }
                }
            }, off: dO, one: function (n, v, u) {
                n = eL(n);
                n.on(v, function q() {
                    n.off(v, u);
                    n.off(v, q)
                });
                n.on(v, u)
            }, replaceWith: function (n, v) {
                var u, q = n.parentNode;
                bo(n);
                eT(new fk(v), function (a) {
                    u ? q.insertBefore(a, u.nextSibling) : q.replaceChild(a, n);
                    u = a
                })
            }, children: function (n) {
                var q = [];
                eT(n.childNodes, function (u) {
                    u.nodeType === bN && q.push(u)
                });
                return q
            }, contents: function (n) {
                return n.contentDocument || n.childNodes || []
            }, append: function (n, v) {
                var u = n.nodeType;
                if (u === bN || 11 === u) {
                    v = new fk(v);
                    for (var u = 0, q = v.length; u < q; u++) {
                        n.appendChild(v[u])
                    }
                }
            }, prepend: function (n, u) {
                if (n.nodeType === bN) {
                    var q = n.firstChild;
                    eT(new fk(u), function (a) {
                        n.insertBefore(a, q)
                    })
                }
            }, wrap: function (n, u) {
                u = eL(u).eq(0).clone()[0];
                var q = n.parentNode;
                q && q.replaceChild(u, n);
                u.appendChild(n)
            }, remove: bF, detach: function (n) {
                bF(n, !0)
            }, after: function (n, z) {
                var y = n, w = n.parentNode;
                z = new fk(z);
                for (var v = 0, u = z.length; v < u; v++) {
                    var q = z[v];
                    w.insertBefore(q, y.nextSibling);
                    y = q
                }
            }, addClass: j, removeClass: H, toggleClass: function (n, u, q) {
                u && eT(u.split(" "), function (v) {
                    var a = q;
                    eQ(a) && (a = !al(n, v));
                    (a ? j : H)(n, v)
                })
            }, parent: function (n) {
                return (n = n.parentNode) && 11 !== n.nodeType ? n : null
            }, next: function (n) {
                return n.nextElementSibling
            }, find: function (n, q) {
                return n.getElementsByTagName ? n.getElementsByTagName(q) : []
            }, clone: b5, triggerHandler: function (n, z, y) {
                var w, v, u = z.type || z, q = aM(n);
                if (q = (q = q && q.events) && q[u]) {
                    w = {
                        preventDefault: function () {
                            this.defaultPrevented = !0
                        }, isDefaultPrevented: function () {
                            return !0 === this.defaultPrevented
                        }, stopImmediatePropagation: function () {
                            this.immediatePropagationStopped = !0
                        }, isImmediatePropagationStopped: function () {
                            return !0 === this.immediatePropagationStopped
                        }, stopPropagation: eP, type: u, target: n
                    }, z.type && (w = fl(w, z)), z = eh(q), v = y ? [w].concat(y) : [w], eT(z, function (a) {
                        w.isImmediatePropagationStopped() || a.apply(n, v)
                    })
                }
            }
        }, function (n, q) {
            fk.prototype[q] = function (z, y, w) {
                for (var v, u = 0, a = this.length; u < a; u++) {
                    eQ(v) ? (v = n(this[u], z, y, w), eN(v) && (v = eL(v))) : d1(v, n(this[u], z, y, w))
                }
                return eN(v) ? v : this
            };
            fk.prototype.bind = fk.prototype.on;
            fk.prototype.unbind = fk.prototype.off
        });
        c8.prototype = {
            put: function (n, q) {
                this[s(n, this.nextUid)] = q
            }, get: function (n) {
                return this[s(n, this.nextUid)]
            }, remove: function (n) {
                var q = this[n = s(n, this.nextUid)];
                delete this[n];
                return q
            }
        };
        var x = [function () {
                this.$get = [function () {
                    return c8
                }]
            }], b4 = /^function\s*[^\(]*\(\s*([^\)]*)\)/m, cJ = /,/, cw = /^\s*(_?)(\S+?)\1\s*$/,
            ct = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg, d = ft("$injector");
        fx.$$annotate = function (n, v, u) {
            var q;
            if ("function" === typeof n) {
                if (!(q = n.$inject)) {
                    q = [];
                    if (n.length) {
                        if (v) {
                            throw fn(u) && u || (u = n.name || fT(n)), d("strictdi", u)
                        }
                        v = n.toString().replace(ct, "");
                        v = v.match(b4);
                        eT(v[1].split(cJ), function (w) {
                            w.replace(cw, function (y, C, z) {
                                q.push(z)
                            })
                        })
                    }
                    n.$inject = q
                }
            } else {
                fo(n) ? (v = n.length - 1, dE(n[v], "fn"), q = n.slice(0, v)) : dE(n, "fn", !0)
            }
            return q
        };
        var ek = ft("$animate"), cE = function () {
            this.$get = ["$q", "$$rAF", function (n, u) {
                function q() {
                }

                q.all = eP;
                q.chain = eP;
                q.prototype = {
                    end: eP, cancel: eP, resume: eP, pause: eP, complete: eP, then: function (v, a) {
                        return n(function (w) {
                            u(function () {
                                w()
                            })
                        }).then(v, a)
                    }
                };
                return q
            }]
        }, cR = function () {
            var n = new c8, q = [];
            this.$get = ["$$AnimateRunner", "$rootScope", function (v, u) {
                function a(C, z, w) {
                    var y = n.get(C);
                    y || (n.put(C, y = {}), q.push(C));
                    z && eT(z.split(" "), function (E) {
                        E && (y[E] = !0)
                    });
                    w && eT(w.split(" "), function (E) {
                        E && (y[E] = !1)
                    });
                    1 < q.length || u.$$postDigest(function () {
                        eT(q, function (L) {
                            var K = n.get(L);
                            if (K) {
                                var G = fz(L.attr("class")), F = "", E = "";
                                eT(K, function (N, Q) {
                                    N !== !!G[Q] && (N ? F += (F.length ? " " : "") + Q : E += (E.length ? " " : "") + Q)
                                });
                                eT(L, function (N) {
                                    F && j(N, F);
                                    E && H(N, E)
                                });
                                n.remove(L)
                            }
                        });
                        q.length = 0
                    })
                }

                return {
                    enabled: eP, on: eP, off: eP, pin: eP, push: function (w, C, z, y) {
                        y && y();
                        z = z || {};
                        z.from && w.css(z.from);
                        z.to && w.css(z.to);
                        (z.addClass || z.removeClass) && a(w, z.addClass, z.removeClass);
                        return new v
                    }
                }
            }]
        }, c4 = ["$provide", function (n) {
            var q = this;
            this.$$registeredAnimations = Object.create(null);
            this.register = function (v, u) {
                if (v && "." !== v.charAt(0)) {
                    throw ek("notcsel", v)
                }
                var a = v + "-animation";
                q.$$registeredAnimations[v.substr(1)] = a;
                n.factory(a, u)
            };
            this.classNameFilter = function (u) {
                if (1 === arguments.length && (this.$$classNameFilter = u instanceof RegExp ? u : null) && /(\s+|\/)ng-animate(\s+|\/)/.test(this.$$classNameFilter.toString())) {
                    throw ek("nongcls", "ng-animate")
                }
                return this.$$classNameFilter
            };
            this.$get = ["$$animateQueue", function (u) {
                function v(y, E, C) {
                    if (C) {
                        var w;
                        y:{
                            for (w = 0; w < C.length; w++) {
                                var z = C[w];
                                if (1 === z.nodeType) {
                                    w = z;
                                    break y
                                }
                            }
                            w = void 0
                        }
                        !w || w.parentNode || w.previousElementSibling || (C = null)
                    }
                    C ? C.after(y) : E.prepend(y)
                }

                return {
                    on: u.on, off: u.off, pin: u.pin, enabled: u.enabled, cancel: function (w) {
                        w.end && w.end()
                    }, enter: function (z, y, w, a) {
                        y = y && eL(y);
                        w = w && eL(w);
                        y = y || w.parent();
                        v(z, y, w);
                        return u.push(z, "enter", fY(a))
                    }, move: function (z, y, w, a) {
                        y = y && eL(y);
                        w = w && eL(w);
                        y = y || w.parent();
                        v(z, y, w);
                        return u.push(z, "move", fY(a))
                    }, leave: function (w, a) {
                        return u.push(w, "leave", fY(a), function () {
                            w.remove()
                        })
                    }, addClass: function (y, w, a) {
                        a = fY(a);
                        a.addClass = d9(a.addclass, w);
                        return u.push(y, "addClass", a)
                    }, removeClass: function (y, w, a) {
                        a = fY(a);
                        a.removeClass = d9(a.removeClass, w);
                        return u.push(y, "removeClass", a)
                    }, setClass: function (z, y, w, a) {
                        a = fY(a);
                        a.addClass = d9(a.addClass, y);
                        a.removeClass = d9(a.removeClass, w);
                        return u.push(z, "setClass", a)
                    }, animate: function (C, z, y, a, w) {
                        w = fY(w);
                        w.from = w.from ? fl(w.from, z) : z;
                        w.to = w.to ? fl(w.to, y) : y;
                        w.tempClasses = d9(w.tempClasses, a || "ng-inline-animate");
                        return u.push(C, "animate", w)
                    }
                }
            }]
        }], eu = ft("$compile");
        aq.$inject = ["$provide", "$$sanitizeUriProvider"];
        var bt = /^((?:x|data)[\:\-_])/i, ei = ft("$controller"), bR = /^(\S+)(\s+as\s+(\w+))?$/,
            fu = "application/json", fP = {"Content-Type": fu + ";charset=utf-8"}, dL = /^\[|^\{(?!\{)/,
            dz = {"[": /]$/, "{": /}$/}, dY = /^\)\]\}',?\n/, eO = fS.$interpolateMinErr = ft("$interpolate");
        eO.throwNoconcat = function (n) {
            throw eO("noconcat", n)
        };
        eO.interr = function (n, q) {
            return eO("interr", n, q.toString())
        };
        var cj = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/, cQ = {http: 80, https: 443, ftp: 21}, aF = ft("$location"), bU = {
            $$html5: !1, $$replace: !1, absUrl: ar("$$absUrl"), url: function (n) {
                if (eQ(n)) {
                    return this.$$url
                }
                var q = cj.exec(n);
                (q[1] || "" === n) && this.path(decodeURIComponent(q[1]));
                (q[2] || q[1] || "" === n) && this.search(q[3] || "");
                this.hash(q[5] || "");
                return this
            }, protocol: ar("$$protocol"), host: ar("$$host"), port: ar("$$port"), path: dj("$$path", function (n) {
                n = null !== n ? n.toString() : "";
                return "/" == n.charAt(0) ? n : "/" + n
            }), search: function (n, q) {
                switch (arguments.length) {
                    case 0:
                        return this.$$search;
                    case 1:
                        if (fn(n) || fh(n)) {
                            n = n.toString(), this.$$search = f3(n)
                        } else {
                            if (fy(n)) {
                                n = aA(n, {}), eT(n, function (u, a) {
                                    null == u && delete n[a]
                                }), this.$$search = n
                            } else {
                                throw aF("isrcharg")
                            }
                        }
                        break;
                    default:
                        eQ(q) || null === q ? delete this.$$search[n] : this.$$search[n] = q
                }
                this.$$compose();
                return this
            }, hash: dj("$$hash", function (n) {
                return null !== n ? n.toString() : ""
            }), replace: function () {
                this.$$replace = !0;
                return this
            }
        };
        eT([dv, es, eF], function (n) {
            n.prototype = Object.create(bU);
            n.prototype.state = function (a) {
                if (!arguments.length) {
                    return this.$$state
                }
                if (n !== eF || !this.$$html5) {
                    throw aF("nostate")
                }
                this.$$state = eQ(a) ? null : a;
                return this
            }
        });
        var e0 = ft("$parse"), cD = Function.prototype.call, cq = Function.prototype.apply,
            b1 = Function.prototype.bind, em = dX();
        eT("+ - * / % === !== == != < > <= >= && || ! = |".split(" "), function (n) {
            em[n] = !0
        });
        var bH = {n: "\n", f: "\f", r: "\r", t: "\t", v: "\v", "'": "'", '"': '"'}, dV = function (n) {
            this.options = n
        };
        dV.prototype = {
            constructor: dV, lex: function (n) {
                this.text = n;
                this.index = 0;
                for (this.tokens = []; this.index < this.text.length;) {
                    if (n = this.text.charAt(this.index), '"' === n || "'" === n) {
                        this.readString(n)
                    } else {
                        if (this.isNumber(n) || "." === n && this.isNumber(this.peek())) {
                            this.readNumber()
                        } else {
                            if (this.isIdent(n)) {
                                this.readIdent()
                            } else {
                                if (this.is(n, "(){}[].,;:?")) {
                                    this.tokens.push({index: this.index, text: n}), this.index++
                                } else {
                                    if (this.isWhitespace(n)) {
                                        this.index++
                                    } else {
                                        var w = n + this.peek(), v = w + this.peek(2), u = em[w], q = em[v];
                                        em[n] || u || q ? (n = q ? v : u ? w : n, this.tokens.push({
                                            index: this.index,
                                            text: n,
                                            operator: !0
                                        }), this.index += n.length) : this.throwError("Unexpected next character ", this.index, this.index + 1)
                                    }
                                }
                            }
                        }
                    }
                }
                return this.tokens
            }, is: function (n, q) {
                return -1 !== q.indexOf(n)
            }, peek: function (n) {
                n = n || 1;
                return this.index + n < this.text.length ? this.text.charAt(this.index + n) : !1
            }, isNumber: function (n) {
                return "0" <= n && "9" >= n && "string" === typeof n
            }, isWhitespace: function (n) {
                return " " === n || "\r" === n || "\t" === n || "\n" === n || "\v" === n || "\u00a0" === n
            }, isIdent: function (n) {
                return "a" <= n && "z" >= n || "A" <= n && "Z" >= n || "_" === n || "$" === n
            }, isExpOperator: function (n) {
                return "-" === n || "+" === n || this.isNumber(n)
            }, throwError: function (n, u, q) {
                q = q || this.index;
                u = eN(u) ? "s " + u + "-" + this.index + " [" + this.text.substring(u, q) + "]" : " " + q;
                throw e0("lexerr", n, u, this.text)
            }, readNumber: function () {
                for (var n = "", v = this.index; this.index < this.text.length;) {
                    var u = fv(this.text.charAt(this.index));
                    if ("." == u || this.isNumber(u)) {
                        n += u
                    } else {
                        var q = this.peek();
                        if ("e" == u && this.isExpOperator(q)) {
                            n += u
                        } else {
                            if (this.isExpOperator(u) && q && this.isNumber(q) && "e" == n.charAt(n.length - 1)) {
                                n += u
                            } else {
                                if (!this.isExpOperator(u) || q && this.isNumber(q) || "e" != n.charAt(n.length - 1)) {
                                    break
                                } else {
                                    this.throwError("Invalid exponent")
                                }
                            }
                        }
                    }
                    this.index++
                }
                this.tokens.push({index: v, text: n, constant: !0, value: Number(n)})
            }, readIdent: function () {
                for (var n = this.index; this.index < this.text.length;) {
                    var q = this.text.charAt(this.index);
                    if (!this.isIdent(q) && !this.isNumber(q)) {
                        break
                    }
                    this.index++
                }
                this.tokens.push({index: n, text: this.text.slice(n, this.index), identifier: !0})
            }, readString: function (n) {
                var y = this.index;
                this.index++;
                for (var w = "", v = n, u = !1; this.index < this.text.length;) {
                    var q = this.text.charAt(this.index), v = v + q;
                    if (u) {
                        "u" === q ? (u = this.text.substring(this.index + 1, this.index + 5), u.match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + u + "]"), this.index += 4, w += String.fromCharCode(parseInt(u, 16))) : w += bH[q] || q, u = !1
                    } else {
                        if ("\\" === q) {
                            u = !0
                        } else {
                            if (q === n) {
                                this.index++;
                                this.tokens.push({index: y, text: v, constant: !0, value: w});
                                return
                            }
                            w += q
                        }
                    }
                    this.index++
                }
                this.throwError("Unterminated quote", y)
            }
        };
        var eS = function (n, q) {
            this.lexer = n;
            this.options = q
        };
        eS.Program = "Program";
        eS.ExpressionStatement = "ExpressionStatement";
        eS.AssignmentExpression = "AssignmentExpression";
        eS.ConditionalExpression = "ConditionalExpression";
        eS.LogicalExpression = "LogicalExpression";
        eS.BinaryExpression = "BinaryExpression";
        eS.UnaryExpression = "UnaryExpression";
        eS.CallExpression = "CallExpression";
        eS.MemberExpression = "MemberExpression";
        eS.Identifier = "Identifier";
        eS.Literal = "Literal";
        eS.ArrayExpression = "ArrayExpression";
        eS.Property = "Property";
        eS.ObjectExpression = "ObjectExpression";
        eS.ThisExpression = "ThisExpression";
        eS.NGValueParameter = "NGValueParameter";
        eS.prototype = {
            ast: function (n) {
                this.text = n;
                this.tokens = this.lexer.lex(n);
                n = this.program();
                0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]);
                return n
            },
            program: function () {
                for (var n = []; ;) {
                    if (0 < this.tokens.length && !this.peek("}", ")", ";", "]") && n.push(this.expressionStatement()), !this.expect(";")) {
                        return {type: eS.Program, body: n}
                    }
                }
            },
            expressionStatement: function () {
                return {type: eS.ExpressionStatement, expression: this.filterChain()}
            },
            filterChain: function () {
                for (var n = this.expression(); this.expect("|");) {
                    n = this.filter(n)
                }
                return n
            },
            expression: function () {
                return this.assignment()
            },
            assignment: function () {
                var n = this.ternary();
                this.expect("=") && (n = {
                    type: eS.AssignmentExpression,
                    left: n,
                    right: this.assignment(),
                    operator: "="
                });
                return n
            },
            ternary: function () {
                var n = this.logicalOR(), u, q;
                return this.expect("?") && (u = this.expression(), this.consume(":")) ? (q = this.expression(), {
                    type: eS.ConditionalExpression,
                    test: n,
                    alternate: u,
                    consequent: q
                }) : n
            },
            logicalOR: function () {
                for (var n = this.logicalAND(); this.expect("||");) {
                    n = {type: eS.LogicalExpression, operator: "||", left: n, right: this.logicalAND()}
                }
                return n
            },
            logicalAND: function () {
                for (var n = this.equality(); this.expect("&&");) {
                    n = {type: eS.LogicalExpression, operator: "&&", left: n, right: this.equality()}
                }
                return n
            },
            equality: function () {
                for (var n = this.relational(), q; q = this.expect("==", "!=", "===", "!==");) {
                    n = {type: eS.BinaryExpression, operator: q.text, left: n, right: this.relational()}
                }
                return n
            },
            relational: function () {
                for (var n = this.additive(), q; q = this.expect("<", ">", "<=", ">=");) {
                    n = {type: eS.BinaryExpression, operator: q.text, left: n, right: this.additive()}
                }
                return n
            },
            additive: function () {
                for (var n = this.multiplicative(), q; q = this.expect("+", "-");) {
                    n = {type: eS.BinaryExpression, operator: q.text, left: n, right: this.multiplicative()}
                }
                return n
            },
            multiplicative: function () {
                for (var n = this.unary(), q; q = this.expect("*", "/", "%");) {
                    n = {type: eS.BinaryExpression, operator: q.text, left: n, right: this.unary()}
                }
                return n
            },
            unary: function () {
                var n;
                return (n = this.expect("+", "-", "!")) ? {
                    type: eS.UnaryExpression,
                    operator: n.text,
                    prefix: !0,
                    argument: this.unary()
                } : this.primary()
            },
            primary: function () {
                var n;
                this.expect("(") ? (n = this.filterChain(), this.consume(")")) : this.expect("[") ? n = this.arrayDeclaration() : this.expect("{") ? n = this.object() : this.constants.hasOwnProperty(this.peek().text) ? n = aA(this.constants[this.consume().text]) : this.peek().identifier ? n = this.identifier() : this.peek().constant ? n = this.constant() : this.throwError("not a primary expression", this.peek());
                for (var q; q = this.expect("(", "[", ".");) {
                    "(" === q.text ? (n = {
                        type: eS.CallExpression,
                        callee: n,
                        arguments: this.parseArguments()
                    }, this.consume(")")) : "[" === q.text ? (n = {
                        type: eS.MemberExpression,
                        object: n,
                        property: this.expression(),
                        computed: !0
                    }, this.consume("]")) : "." === q.text ? n = {
                        type: eS.MemberExpression,
                        object: n,
                        property: this.identifier(),
                        computed: !1
                    } : this.throwError("IMPOSSIBLE")
                }
                return n
            },
            filter: function (n) {
                n = [n];
                for (var q = {
                    type: eS.CallExpression,
                    callee: this.identifier(),
                    arguments: n,
                    filter: !0
                }; this.expect(":");) {
                    n.push(this.expression())
                }
                return q
            },
            parseArguments: function () {
                var n = [];
                if (")" !== this.peekToken().text) {
                    do {
                        n.push(this.expression())
                    } while (this.expect(","))
                }
                return n
            },
            identifier: function () {
                var n = this.consume();
                n.identifier || this.throwError("is not a valid identifier", n);
                return {type: eS.Identifier, name: n.text}
            },
            constant: function () {
                return {type: eS.Literal, value: this.consume().value}
            },
            arrayDeclaration: function () {
                var n = [];
                if ("]" !== this.peekToken().text) {
                    do {
                        if (this.peek("]")) {
                            break
                        }
                        n.push(this.expression())
                    } while (this.expect(","))
                }
                this.consume("]");
                return {type: eS.ArrayExpression, elements: n}
            },
            object: function () {
                var n = [], q;
                if ("}" !== this.peekToken().text) {
                    do {
                        if (this.peek("}")) {
                            break
                        }
                        q = {type: eS.Property, kind: "init"};
                        this.peek().constant ? q.key = this.constant() : this.peek().identifier ? q.key = this.identifier() : this.throwError("invalid key", this.peek());
                        this.consume(":");
                        q.value = this.expression();
                        n.push(q)
                    } while (this.expect(","))
                }
                this.consume("}");
                return {type: eS.ObjectExpression, properties: n}
            },
            throwError: function (n, q) {
                throw e0("syntax", q.text, n, q.index + 1, this.text, this.text.substring(q.index))
            },
            consume: function (n) {
                if (0 === this.tokens.length) {
                    throw e0("ueoe", this.text)
                }
                var q = this.expect(n);
                q || this.throwError("is unexpected, expecting [" + n + "]", this.peek());
                return q
            },
            peekToken: function () {
                if (0 === this.tokens.length) {
                    throw e0("ueoe", this.text)
                }
                return this.tokens[0]
            },
            peek: function (n, v, u, q) {
                return this.peekAhead(0, n, v, u, q)
            },
            peekAhead: function (n, y, w, v, u) {
                if (this.tokens.length > n) {
                    n = this.tokens[n];
                    var q = n.text;
                    if (q === y || q === w || q === v || q === u || !(y || w || v || u)) {
                        return n
                    }
                }
                return !1
            },
            expect: function (n, v, u, q) {
                return (n = this.peek(n, v, u, q)) ? (this.tokens.shift(), n) : !1
            },
            constants: {
                "true": {type: eS.Literal, value: !0},
                "false": {type: eS.Literal, value: !1},
                "null": {type: eS.Literal, value: null},
                undefined: {type: eS.Literal, value: eR},
                "this": {type: eS.ThisExpression}
            }
        };
        by.prototype = {
            compile: function (n, y) {
                var w = this, v = this.astBuilder.ast(n);
                this.state = {
                    nextId: 0,
                    filters: {},
                    expensiveChecks: y,
                    fn: {vars: [], body: [], own: {}},
                    assign: {vars: [], body: [], own: {}},
                    inputs: []
                };
                fi(v, w.$filter);
                var u = "", q;
                this.stage = "assign";
                if (q = bX(v)) {
                    this.state.computing = "assign", u = this.nextId(), this.recurse(q, u), u = "fn.assign=" + this.generateFunction("assign", "s,v,l")
                }
                q = cz(v.body);
                w.stage = "inputs";
                eT(q, function (z, F) {
                    var E = "fn" + F;
                    w.state[E] = {vars: [], body: [], own: {}};
                    w.state.computing = E;
                    var C = w.nextId();
                    w.recurse(z, C);
                    w.return_(C);
                    w.state.inputs.push(E);
                    z.watchId = F
                });
                this.state.computing = "fn";
                this.stage = "main";
                this.recurse(v);
                u = '"' + this.USE + " " + this.STRICT + '";\n' + this.filterPrefix() + "var fn=" + this.generateFunction("fn", "s,l,a,i") + u + this.watchFns() + "return fn;";
                u = (new Function("$filter", "ensureSafeMemberName", "ensureSafeObject", "ensureSafeFunction", "ifDefined", "plus", "text", u))(this.$filter, aT, cp, cZ, bO, cM, n);
                this.state = this.stage = eR;
                u.literal = bK(v);
                u.constant = v.constant;
                return u
            }, USE: "use", STRICT: "strict", watchFns: function () {
                var n = [], u = this.state.inputs, q = this;
                eT(u, function (a) {
                    n.push("var " + a + "=" + q.generateFunction(a, "s"))
                });
                u.length && n.push("fn.inputs=[" + u.join(",") + "];");
                return n.join("")
            }, generateFunction: function (n, q) {
                return "function(" + q + "){" + this.varsPrefix(n) + this.body(n) + "};"
            }, filterPrefix: function () {
                var n = [], q = this;
                eT(this.state.filters, function (u, a) {
                    n.push(u + "=$filter(" + q.escape(a) + ")")
                });
                return n.length ? "var " + n.join(",") + ";" : ""
            }, varsPrefix: function (n) {
                return this.state[n].vars.length ? "var " + this.state[n].vars.join(",") + ";" : ""
            }, body: function (n) {
                return this.state[n].body.join("")
            }, recurse: function (G, F, E, C, z, y) {
                var w, u, v = this, q, n;
                C = C || eP;
                if (!y && eN(G.watchId)) {
                    F = F || this.nextId(), this.if_("i", this.lazyAssign(F, this.computedMember("i", G.watchId)), this.lazyRecurse(G, F, E, C, z, !0))
                } else {
                    switch (G.type) {
                        case eS.Program:
                            eT(G.body, function (K, a) {
                                v.recurse(K.expression, eR, eR, function (L) {
                                    u = L
                                });
                                a !== G.body.length - 1 ? v.current().body.push(u, ";") : v.return_(u)
                            });
                            break;
                        case eS.Literal:
                            n = this.escape(G.value);
                            this.assign(F, n);
                            C(n);
                            break;
                        case eS.UnaryExpression:
                            this.recurse(G.argument, eR, eR, function (K) {
                                u = K
                            });
                            n = G.operator + "(" + this.ifDefined(u, 0) + ")";
                            this.assign(F, n);
                            C(n);
                            break;
                        case eS.BinaryExpression:
                            this.recurse(G.left, eR, eR, function (K) {
                                w = K
                            });
                            this.recurse(G.right, eR, eR, function (K) {
                                u = K
                            });
                            n = "+" === G.operator ? this.plus(w, u) : "-" === G.operator ? this.ifDefined(w, 0) + G.operator + this.ifDefined(u, 0) : "(" + w + ")" + G.operator + "(" + u + ")";
                            this.assign(F, n);
                            C(n);
                            break;
                        case eS.LogicalExpression:
                            F = F || this.nextId();
                            v.recurse(G.left, F);
                            v.if_("&&" === G.operator ? F : v.not(F), v.lazyRecurse(G.right, F));
                            C(F);
                            break;
                        case eS.ConditionalExpression:
                            F = F || this.nextId();
                            v.recurse(G.test, F);
                            v.if_(F, v.lazyRecurse(G.alternate, F), v.lazyRecurse(G.consequent, F));
                            C(F);
                            break;
                        case eS.Identifier:
                            F = F || this.nextId();
                            E && (E.context = "inputs" === v.stage ? "s" : this.assign(this.nextId(), this.getHasOwnProperty("l", G.name) + "?l:s"), E.computed = !1, E.name = G.name);
                            aT(G.name);
                            v.if_("inputs" === v.stage || v.not(v.getHasOwnProperty("l", G.name)), function () {
                                v.if_("inputs" === v.stage || "s", function () {
                                    z && 1 !== z && v.if_(v.not(v.nonComputedMember("s", G.name)), v.lazyAssign(v.nonComputedMember("s", G.name), "{}"));
                                    v.assign(F, v.nonComputedMember("s", G.name))
                                })
                            }, F && v.lazyAssign(F, v.nonComputedMember("l", G.name)));
                            (v.state.expensiveChecks || r(G.name)) && v.addEnsureSafeObject(F);
                            C(F);
                            break;
                        case eS.MemberExpression:
                            w = E && (E.context = this.nextId()) || this.nextId();
                            F = F || this.nextId();
                            v.recurse(G.object, w, eR, function () {
                                v.if_(v.notNull(w), function () {
                                    if (G.computed) {
                                        u = v.nextId(), v.recurse(G.property, u), v.addEnsureSafeMemberName(u), z && 1 !== z && v.if_(v.not(v.computedMember(w, u)), v.lazyAssign(v.computedMember(w, u), "{}")), n = v.ensureSafeObject(v.computedMember(w, u)), v.assign(F, n), E && (E.computed = !0, E.name = u)
                                    } else {
                                        aT(G.property.name);
                                        z && 1 !== z && v.if_(v.not(v.nonComputedMember(w, G.property.name)), v.lazyAssign(v.nonComputedMember(w, G.property.name), "{}"));
                                        n = v.nonComputedMember(w, G.property.name);
                                        if (v.state.expensiveChecks || r(G.property.name)) {
                                            n = v.ensureSafeObject(n)
                                        }
                                        v.assign(F, n);
                                        E && (E.computed = !1, E.name = G.property.name)
                                    }
                                    C(F)
                                })
                            }, !!z);
                            break;
                        case eS.CallExpression:
                            F = F || this.nextId();
                            G.filter ? (u = v.filter(G.callee.name), q = [], eT(G.arguments, function (K) {
                                var L = v.nextId();
                                v.recurse(K, L);
                                q.push(L)
                            }), n = u + "(" + q.join(",") + ")", v.assign(F, n), C(F)) : (u = v.nextId(), w = {}, q = [], v.recurse(G.callee, u, w, function () {
                                v.if_(v.notNull(u), function () {
                                    v.addEnsureSafeFunction(u);
                                    eT(G.arguments, function (K) {
                                        v.recurse(K, v.nextId(), eR, function (L) {
                                            q.push(v.ensureSafeObject(L))
                                        })
                                    });
                                    w.name ? (v.state.expensiveChecks || v.addEnsureSafeObject(w.context), n = v.member(w.context, w.name, w.computed) + "(" + q.join(",") + ")") : n = u + "(" + q.join(",") + ")";
                                    n = v.ensureSafeObject(n);
                                    v.assign(F, n);
                                    C(F)
                                })
                            }));
                            break;
                        case eS.AssignmentExpression:
                            u = this.nextId();
                            w = {};
                            if (!cm(G.left)) {
                                throw e0("lval")
                            }
                            this.recurse(G.left, eR, w, function () {
                                v.if_(v.notNull(w.context), function () {
                                    v.recurse(G.right, u);
                                    v.addEnsureSafeObject(v.member(w.context, w.name, w.computed));
                                    n = v.member(w.context, w.name, w.computed) + G.operator + u;
                                    v.assign(F, n);
                                    C(F || n)
                                })
                            }, 1);
                            break;
                        case eS.ArrayExpression:
                            q = [];
                            eT(G.elements, function (K) {
                                v.recurse(K, v.nextId(), eR, function (L) {
                                    q.push(L)
                                })
                            });
                            n = "[" + q.join(",") + "]";
                            this.assign(F, n);
                            C(n);
                            break;
                        case eS.ObjectExpression:
                            q = [];
                            eT(G.properties, function (K) {
                                v.recurse(K.value, v.nextId(), eR, function (a) {
                                    q.push(v.escape(K.key.type === eS.Identifier ? K.key.name : "" + K.key.value) + ":" + a)
                                })
                            });
                            n = "{" + q.join(",") + "}";
                            this.assign(F, n);
                            C(n);
                            break;
                        case eS.ThisExpression:
                            this.assign(F, "s");
                            C("s");
                            break;
                        case eS.NGValueParameter:
                            this.assign(F, "v"), C("v")
                    }
                }
            }, getHasOwnProperty: function (n, v) {
                var u = n + "." + v, q = this.current().own;
                q.hasOwnProperty(u) || (q[u] = this.nextId(!1, n + "&&(" + this.escape(v) + " in " + n + ")"));
                return q[u]
            }, assign: function (n, q) {
                if (n) {
                    return this.current().body.push(n, "=", q, ";"), n
                }
            }, filter: function (n) {
                this.state.filters.hasOwnProperty(n) || (this.state.filters[n] = this.nextId(!0));
                return this.state.filters[n]
            }, ifDefined: function (n, q) {
                return "ifDefined(" + n + "," + this.escape(q) + ")"
            }, plus: function (n, q) {
                return "plus(" + n + "," + q + ")"
            }, return_: function (n) {
                this.current().body.push("return ", n, ";")
            }, if_: function (n, v, u) {
                if (!0 === n) {
                    v()
                } else {
                    var q = this.current().body;
                    q.push("if(", n, "){");
                    v();
                    q.push("}");
                    u && (q.push("else{"), u(), q.push("}"))
                }
            }, not: function (n) {
                return "!(" + n + ")"
            }, notNull: function (n) {
                return n + "!=null"
            }, nonComputedMember: function (n, q) {
                return n + "." + q
            }, computedMember: function (n, q) {
                return n + "[" + q + "]"
            }, member: function (n, u, q) {
                return q ? this.computedMember(n, u) : this.nonComputedMember(n, u)
            }, addEnsureSafeObject: function (n) {
                this.current().body.push(this.ensureSafeObject(n), ";")
            }, addEnsureSafeMemberName: function (n) {
                this.current().body.push(this.ensureSafeMemberName(n), ";")
            }, addEnsureSafeFunction: function (n) {
                this.current().body.push(this.ensureSafeFunction(n), ";")
            }, ensureSafeObject: function (n) {
                return "ensureSafeObject(" + n + ",text)"
            }, ensureSafeMemberName: function (n) {
                return "ensureSafeMemberName(" + n + ",text)"
            }, ensureSafeFunction: function (n) {
                return "ensureSafeFunction(" + n + ",text)"
            }, lazyRecurse: function (n, z, y, w, v, u) {
                var q = this;
                return function () {
                    q.recurse(n, z, y, w, v, u)
                }
            }, lazyAssign: function (n, u) {
                var q = this;
                return function () {
                    q.assign(n, u)
                }
            }, stringEscapeRegex: /[^ a-zA-Z0-9]/g, stringEscapeFn: function (n) {
                return "\\u" + ("0000" + n.charCodeAt(0).toString(16)).slice(-4)
            }, escape: function (n) {
                if (fn(n)) {
                    return "'" + n.replace(this.stringEscapeRegex, this.stringEscapeFn) + "'"
                }
                if (fh(n)) {
                    return n.toString()
                }
                if (!0 === n) {
                    return "true"
                }
                if (!1 === n) {
                    return "false"
                }
                if (null === n) {
                    return "null"
                }
                if ("undefined" === typeof n) {
                    return "undefined"
                }
                throw e0("esc")
            }, nextId: function (n, u) {
                var q = "v" + this.state.nextId++;
                n || this.current().vars.push(q + (u ? "=" + u : ""));
                return q
            }, current: function () {
                return this.state[this.state.computing]
            }
        };
        bm.prototype = {
            compile: function (q, C) {
                var z = this, y = this.astBuilder.ast(q);
                this.expression = q;
                this.expensiveChecks = C;
                fi(y, z.$filter);
                var w, v;
                if (w = bX(y)) {
                    v = this.recurse(w)
                }
                w = cz(y.body);
                var u;
                w && (u = [], eT(w, function (E, G) {
                    var F = z.recurse(E);
                    E.input = F;
                    u.push(F);
                    E.watchId = G
                }));
                var n = [];
                eT(y.body, function (E) {
                    n.push(z.recurse(E.expression))
                });
                w = 0 === y.body.length ? function () {
                } : 1 === y.body.length ? n[0] : function (E, G) {
                    var F;
                    eT(n, function (a) {
                        F = a(E, G)
                    });
                    return F
                };
                v && (w.assign = function (E, G, F) {
                    return v(E, F, G)
                });
                u && (w.inputs = u);
                w.literal = bK(y);
                w.constant = y.constant;
                return w
            }, recurse: function (n, z, y) {
                var w, v, u = this, q;
                if (n.input) {
                    return this.inputs(n.input, n.watchId)
                }
                switch (n.type) {
                    case eS.Literal:
                        return this.value(n.value, z);
                    case eS.UnaryExpression:
                        return v = this.recurse(n.argument), this["unary" + n.operator](v, z);
                    case eS.BinaryExpression:
                        return w = this.recurse(n.left), v = this.recurse(n.right), this["binary" + n.operator](w, v, z);
                    case eS.LogicalExpression:
                        return w = this.recurse(n.left), v = this.recurse(n.right), this["binary" + n.operator](w, v, z);
                    case eS.ConditionalExpression:
                        return this["ternary?:"](this.recurse(n.test), this.recurse(n.alternate), this.recurse(n.consequent), z);
                    case eS.Identifier:
                        return aT(n.name, u.expression), u.identifier(n.name, u.expensiveChecks || r(n.name), z, y, u.expression);
                    case eS.MemberExpression:
                        return w = this.recurse(n.object, !1, !!y), n.computed || (aT(n.property.name, u.expression), v = n.property.name), n.computed && (v = this.recurse(n.property)), n.computed ? this.computedMember(w, v, z, y, u.expression) : this.nonComputedMember(w, v, u.expensiveChecks, z, y, u.expression);
                    case eS.CallExpression:
                        return q = [], eT(n.arguments, function (C) {
                            q.push(u.recurse(C))
                        }), n.filter && (v = this.$filter(n.callee.name)), n.filter || (v = this.recurse(n.callee, !0)), n.filter ? function (C, K, G, E) {
                            for (var L = [], F = 0; F < q.length; ++F) {
                                L.push(q[F](C, K, G, E))
                            }
                            C = v.apply(eR, L, E);
                            return z ? {context: eR, name: eR, value: C} : C
                        } : function (C, L, K, F) {
                            var N = v(C, L, K, F), G;
                            if (null != N.value) {
                                cp(N.context, u.expression);
                                cZ(N.value, u.expression);
                                G = [];
                                for (var E = 0; E < q.length; ++E) {
                                    G.push(cp(q[E](C, L, K, F), u.expression))
                                }
                                G = cp(N.value.apply(N.context, G), u.expression)
                            }
                            return z ? {value: G} : G
                        };
                    case eS.AssignmentExpression:
                        return w = this.recurse(n.left, !0, 1), v = this.recurse(n.right), function (C, G, F, K) {
                            var E = w(C, G, F, K);
                            C = v(C, G, F, K);
                            cp(E.value, u.expression);
                            E.context[E.name] = C;
                            return z ? {value: C} : C
                        };
                    case eS.ArrayExpression:
                        return q = [], eT(n.elements, function (C) {
                            q.push(u.recurse(C))
                        }), function (C, K, G, F) {
                            for (var E = [], L = 0; L < q.length; ++L) {
                                E.push(q[L](C, K, G, F))
                            }
                            return z ? {value: E} : E
                        };
                    case eS.ObjectExpression:
                        return q = [], eT(n.properties, function (C) {
                            q.push({
                                key: C.key.type === eS.Identifier ? C.key.name : "" + C.key.value,
                                value: u.recurse(C.value)
                            })
                        }), function (C, K, G, F) {
                            for (var E = {}, L = 0; L < q.length; ++L) {
                                E[q[L].key] = q[L].value(C, K, G, F)
                            }
                            return z ? {value: E} : E
                        };
                    case eS.ThisExpression:
                        return function (C) {
                            return z ? {value: C} : C
                        };
                    case eS.NGValueParameter:
                        return function (C, G, F, E) {
                            return z ? {value: F} : F
                        }
                }
            }, "unary+": function (n, q) {
                return function (w, v, u, a) {
                    w = n(w, v, u, a);
                    w = eN(w) ? +w : 0;
                    return q ? {value: w} : w
                }
            }, "unary-": function (n, q) {
                return function (w, v, u, a) {
                    w = n(w, v, u, a);
                    w = eN(w) ? -w : 0;
                    return q ? {value: w} : w
                }
            }, "unary!": function (n, q) {
                return function (w, v, u, a) {
                    w = !n(w, v, u, a);
                    return q ? {value: w} : w
                }
            }, "binary+": function (n, u, q) {
                return function (z, y, w, v) {
                    var a = n(z, y, w, v);
                    z = u(z, y, w, v);
                    a = cM(a, z);
                    return q ? {value: a} : a
                }
            }, "binary-": function (n, u, q) {
                return function (z, y, w, v) {
                    var a = n(z, y, w, v);
                    z = u(z, y, w, v);
                    a = (eN(a) ? a : 0) - (eN(z) ? z : 0);
                    return q ? {value: a} : a
                }
            }, "binary*": function (n, u, q) {
                return function (y, w, v, a) {
                    y = n(y, w, v, a) * u(y, w, v, a);
                    return q ? {value: y} : y
                }
            }, "binary/": function (n, u, q) {
                return function (y, w, v, a) {
                    y = n(y, w, v, a) / u(y, w, v, a);
                    return q ? {value: y} : y
                }
            }, "binary%": function (n, u, q) {
                return function (y, w, v, a) {
                    y = n(y, w, v, a) % u(y, w, v, a);
                    return q ? {value: y} : y
                }
            }, "binary===": function (n, u, q) {
                return function (y, w, v, a) {
                    y = n(y, w, v, a) === u(y, w, v, a);
                    return q ? {value: y} : y
                }
            }, "binary!==": function (n, u, q) {
                return function (y, w, v, a) {
                    y = n(y, w, v, a) !== u(y, w, v, a);
                    return q ? {value: y} : y
                }
            }, "binary==": function (n, u, q) {
                return function (y, w, v, a) {
                    y = n(y, w, v, a) == u(y, w, v, a);
                    return q ? {value: y} : y
                }
            }, "binary!=": function (n, u, q) {
                return function (y, w, v, a) {
                    y = n(y, w, v, a) != u(y, w, v, a);
                    return q ? {value: y} : y
                }
            }, "binary<": function (n, u, q) {
                return function (y, w, v, a) {
                    y = n(y, w, v, a) < u(y, w, v, a);
                    return q ? {value: y} : y
                }
            }, "binary>": function (n, u, q) {
                return function (y, w, v, a) {
                    y = n(y, w, v, a) > u(y, w, v, a);
                    return q ? {value: y} : y
                }
            }, "binary<=": function (n, u, q) {
                return function (y, w, v, a) {
                    y = n(y, w, v, a) <= u(y, w, v, a);
                    return q ? {value: y} : y
                }
            }, "binary>=": function (n, u, q) {
                return function (y, w, v, a) {
                    y = n(y, w, v, a) >= u(y, w, v, a);
                    return q ? {value: y} : y
                }
            }, "binary&&": function (n, u, q) {
                return function (y, w, v, a) {
                    y = n(y, w, v, a) && u(y, w, v, a);
                    return q ? {value: y} : y
                }
            }, "binary||": function (n, u, q) {
                return function (y, w, v, a) {
                    y = n(y, w, v, a) || u(y, w, v, a);
                    return q ? {value: y} : y
                }
            }, "ternary?:": function (n, v, u, q) {
                return function (z, y, w, a) {
                    z = n(z, y, w, a) ? v(z, y, w, a) : u(z, y, w, a);
                    return q ? {value: z} : z
                }
            }, value: function (n, q) {
                return function () {
                    return q ? {context: eR, name: eR, value: n} : n
                }
            }, identifier: function (n, w, v, u, q) {
                return function (C, z, a, y) {
                    C = z && n in z ? z : C;
                    u && 1 !== u && C && !C[n] && (C[n] = {});
                    z = C ? C[n] : eR;
                    w && cp(z, q);
                    return v ? {context: C, name: n, value: z} : z
                }
            }, computedMember: function (n, w, v, u, q) {
                return function (F, E, y, z) {
                    var a = n(F, E, y, z), G, C;
                    null != a && (G = w(F, E, y, z), aT(G, q), u && 1 !== u && a && !a[G] && (a[G] = {}), C = a[G], cp(C, q));
                    return v ? {context: a, name: G, value: C} : C
                }
            }, nonComputedMember: function (n, y, w, v, u, q) {
                return function (E, z, C, a) {
                    E = n(E, z, C, a);
                    u && 1 !== u && E && !E[y] && (E[y] = {});
                    z = null != E ? E[y] : eR;
                    (w || r(y)) && cp(z, q);
                    return v ? {context: E, name: y, value: z} : z
                }
            }, inputs: function (n, q) {
                return function (w, v, u, a) {
                    return a ? a[q] : n(w, v, u)
                }
            }
        };
        var dJ = function (n, u, q) {
            this.lexer = n;
            this.$filter = u;
            this.options = q;
            this.ast = new eS(this.lexer);
            this.astCompiler = q.csp ? new bm(this.ast, u) : new by(this.ast, u)
        };
        dJ.prototype = {
            constructor: dJ, parse: function (n) {
                return this.astCompiler.compile(n, this.options.expensiveChecks)
            }
        };
        dX();
        dX();
        var bC = Object.prototype.valueOf, aG = ft("$sce"),
            b0 = {HTML: "html", CSS: "css", URL: "url", RESOURCE_URL: "resourceUrl", JS: "js"}, eu = ft("$compile"),
            e7 = e9.createElement("a"), aj = bi(fm.location.href);
        B.$inject = ["$document"];
        eK.$inject = ["$provide"];
        h.$inject = ["$locale"];
        fI.$inject = ["$locale"];
        var aD = ".", dR = {
            yyyy: fR("FullYear", 4),
            yy: fR("FullYear", 2, 0, !0),
            y: fR("FullYear", 1),
            MMMM: fX("Month"),
            MMM: fX("Month", !0),
            MM: fR("Month", 2, 1),
            M: fR("Month", 1, 1),
            dd: fR("Date", 2),
            d: fR("Date", 1),
            HH: fR("Hours", 2),
            H: fR("Hours", 1),
            hh: fR("Hours", 2, -12),
            h: fR("Hours", 1, -12),
            mm: fR("Minutes", 2),
            m: fR("Minutes", 1),
            ss: fR("Seconds", 2),
            s: fR("Seconds", 1),
            sss: fR("Milliseconds", 3),
            EEEE: fX("Day"),
            EEE: fX("Day", !0),
            a: function (n, q) {
                return 12 > n.getHours() ? q.AMPMS[0] : q.AMPMS[1]
            },
            Z: function (n, u, q) {
                n = -1 * q;
                return n = (0 <= n ? "+" : "") + (c(Math[0 < n ? "floor" : "ceil"](n / 60), 2) + c(Math.abs(n % 60), 2))
            },
            ww: M(2),
            w: M(1),
            G: dk,
            GG: dk,
            GGG: dk,
            GGGG: function (n, q) {
                return 0 >= n.getFullYear() ? q.ERANAMES[0] : q.ERANAMES[1]
            }
        }, d4 = /((?:[^yMdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/, eo = /^\-?\d+$/;
        f2.$inject = ["$locale"];
        var fp = bB(fv), eU = bB(bM);
        ba.$inject = ["$parse"];
        var dH = bB({
            restrict: "E", compile: function (n, q) {
                if (!q.href && !q.xlinkHref) {
                    return function (u, w) {
                        if ("a" === w[0].nodeName.toLowerCase()) {
                            var v = "[object SVGAnimatedString]" === a0.call(w.prop("href")) ? "xlink:href" : "href";
                            w.on("click", function (y) {
                                w.attr(v) || y.preventDefault()
                            })
                        }
                    }
                }
            }
        }), bA = {};
        eT(fK, function (n, w) {
            function v(y, C, z) {
                y.$watch(z[u], function (E) {
                    z.$set(w, !!E)
                })
            }

            if ("multiple" != n) {
                var u = k("ng-" + w), q = v;
                "checked" === n && (q = function (y, C, z) {
                    z.ngModel !== z[u] && v(y, C, z)
                });
                bA[u] = function () {
                    return {restrict: "A", priority: 100, link: q}
                }
            }
        });
        eT(cG, function (n, q) {
            bA[q] = function () {
                return {
                    priority: 100, link: function (u, w, v) {
                        if ("ngPattern" === q && "/" == v.ngPattern.charAt(0) && (w = v.ngPattern.match(dt))) {
                            v.$set("ngPattern", new RegExp(w[1], w[2]));
                            return
                        }
                        u.$watch(v[q], function (y) {
                            v.$set(q, y)
                        })
                    }
                }
            }
        });
        eT(["src", "srcset", "href"], function (n) {
            var q = k("ng-" + n);
            bA[q] = function () {
                return {
                    priority: 99, link: function (y, w, v) {
                        var u = n, a = n;
                        "href" === n && "[object SVGAnimatedString]" === a0.call(w.prop("href")) && (a = "xlinkHref", v.$attr[a] = "xlink:href", u = null);
                        v.$observe(q, function (z) {
                            z ? (v.$set(a, z), dW && u && w.prop(u, v[a])) : "href" === n && v.$set(a, null)
                        })
                    }
                }
            }
        });
        var fD = {
            $addControl: eP, $$renameControl: function (n, q) {
                n.$name = q
            }, $removeControl: eP, $setValidity: eP, $setDirty: eP, $setPristine: eP, $setSubmitted: eP
        };
        o.$inject = ["$element", "$attrs", "$scope", "$animate", "$interpolate"];
        var d0 = function (n) {
                return ["$timeout", function (a) {
                    return {
                        name: "form", restrict: n ? "EAC" : "E", controller: o, compile: function (v, u) {
                            v.addClass(cV).addClass(dl);
                            var q = u.name ? "name" : n && u.ngForm ? "ngForm" : !1;
                            return {
                                pre: function (y, E, C, z) {
                                    if (!("action" in C)) {
                                        var w = function (G) {
                                            y.$apply(function () {
                                                z.$commitViewValue();
                                                z.$setSubmitted()
                                            });
                                            G.preventDefault()
                                        };
                                        E[0].addEventListener("submit", w, !1);
                                        E.on("$destroy", function () {
                                            a(function () {
                                                E[0].removeEventListener("submit", w, !1)
                                            }, 0, !1)
                                        })
                                    }
                                    var F = z.$$parentForm;
                                    q && (P(y, z.$name, z, z.$name), C.$observe(q, function (G) {
                                        z.$name !== G && (P(y, z.$name, eR, z.$name), F.$$renameControl(z, G), P(y, z.$name, z, z.$name))
                                    }));
                                    E.on("$destroy", function () {
                                        F.$removeControl(z);
                                        q && P(y, C[q], eR, z.$name);
                                        fl(z, fD)
                                    })
                                }
                            }
                        }
                    }
                }]
            }, du = d0(), ai = d0(!0), dF = /\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/,
            bv = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
            bj = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,
            aU = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/, dN = /^(\d{4})-(\d{2})-(\d{2})$/,
            dB = /^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/, cA = /^(\d{4})-W(\d\d)$/,
            dp = /^(\d{4})-(\d\d)$/, c5 = /^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/, cS = {
                text: function (n, y, w, v, u, q) {
                    dK(n, y, w, v, u, q);
                    c0(v)
                },
                date: dx("date", dN, eM(dN, ["yyyy", "MM", "dd"]), "yyyy-MM-dd"),
                "datetime-local": dx("datetimelocal", dB, eM(dB, "yyyy MM dd HH mm ss sss".split(" ")), "yyyy-MM-ddTHH:mm:ss.sss"),
                time: dx("time", c5, eM(c5, ["HH", "mm", "ss", "sss"]), "HH:mm:ss.sss"),
                week: dx("week", cA, function (E, C) {
                    if (eH(E)) {
                        return E
                    }
                    if (fn(E)) {
                        cA.lastIndex = 0;
                        var z = cA.exec(E);
                        if (z) {
                            var y = +z[1], w = +z[2], v = z = 0, u = 0, n = 0, q = ap(y), w = 7 * (w - 1);
                            C && (z = C.getHours(), v = C.getMinutes(), u = C.getSeconds(), n = C.getMilliseconds());
                            return new Date(y, 0, q.getDate() + w, z, v, u, n)
                        }
                    }
                    return NaN
                }, "yyyy-Www"),
                month: dx("month", dp, eM(dp, ["yyyy", "MM"]), "yyyy-MM"),
                number: function (q, C, z, y, w, v) {
                    fV(q, C, z, y);
                    dK(q, C, z, y, w, v);
                    y.$$parserName = "number";
                    y.$parsers.push(function (E) {
                        return y.$isEmpty(E) ? null : aU.test(E) ? parseFloat(E) : eR
                    });
                    y.$formatters.push(function (E) {
                        if (!y.$isEmpty(E)) {
                            if (!fh(E)) {
                                throw ez("numfmt", E)
                            }
                            E = E.toString()
                        }
                        return E
                    });
                    if (eN(z.min) || z.ngMin) {
                        var u;
                        y.$validators.min = function (E) {
                            return y.$isEmpty(E) || eQ(u) || E >= u
                        };
                        z.$observe("min", function (E) {
                            eN(E) && !fh(E) && (E = parseFloat(E, 10));
                            u = fh(E) && !isNaN(E) ? E : eR;
                            y.$validate()
                        })
                    }
                    if (eN(z.max) || z.ngMax) {
                        var n;
                        y.$validators.max = function (E) {
                            return y.$isEmpty(E) || eQ(n) || E <= n
                        };
                        z.$observe("max", function (E) {
                            eN(E) && !fh(E) && (E = parseFloat(E, 10));
                            n = fh(E) && !isNaN(E) ? E : eR;
                            y.$validate()
                        })
                    }
                },
                url: function (n, y, w, v, u, q) {
                    dK(n, y, w, v, u, q);
                    c0(v);
                    v.$$parserName = "url";
                    v.$validators.url = function (z, E) {
                        var C = z || E;
                        return v.$isEmpty(C) || bv.test(C)
                    }
                },
                email: function (n, y, w, v, u, q) {
                    dK(n, y, w, v, u, q);
                    c0(v);
                    v.$$parserName = "email";
                    v.$validators.email = function (z, E) {
                        var C = z || E;
                        return v.$isEmpty(C) || bj.test(C)
                    }
                },
                radio: function (n, v, u, q) {
                    eQ(u.name) && v.attr("name", ++cO);
                    v.on("click", function (w) {
                        v[0].checked && q.$setViewValue(u.value, w && w.type)
                    });
                    q.$render = function () {
                        v[0].checked = u.value == q.$viewValue
                    };
                    u.$observe("value", q.$render)
                },
                checkbox: function (F, E, C, z, y, w, v, q) {
                    var u = fB(q, F, "ngTrueValue", C.ngTrueValue, !0), n = fB(q, F, "ngFalseValue", C.ngFalseValue, !1);
                    E.on("click", function (G) {
                        z.$setViewValue(E[0].checked, G && G.type)
                    });
                    z.$render = function () {
                        E[0].checked = z.$viewValue
                    };
                    z.$isEmpty = function (G) {
                        return !1 === G
                    };
                    z.$formatters.push(function (G) {
                        return c2(G, u)
                    });
                    z.$parsers.push(function (G) {
                        return G ? u : n
                    })
                },
                hidden: eP,
                button: eP,
                submit: eP,
                reset: eP,
                file: eP
            }, O = ["$browser", "$sniffer", "$filter", "$parse", function (n, v, u, q) {
                return {
                    restrict: "E", require: ["?ngModel"], link: {
                        pre: function (z, y, w, a) {
                            a[0] && (cS[fv(w.type)] || cS.text)(z, y, w, a[0], v, n, u, q)
                        }
                    }
                }
            }], aH = /^(true|false|\d+)$/, dZ = function () {
                return {
                    restrict: "A", priority: 100, compile: function (n, q) {
                        return aH.test(q.ngValue) ? function (u, w, v) {
                            v.$set("value", u.$eval(v.ngValue))
                        } : function (u, w, v) {
                            u.$watch(v.ngValue, function (y) {
                                v.$set("value", y)
                            })
                        }
                    }
                }
            }, cl = ["$compile", function (n) {
                return {
                    restrict: "AC", compile: function (a) {
                        n.$$addBindingClass(a);
                        return function (v, u, q) {
                            n.$$addBindingInfo(u, q.ngBind);
                            u = u[0];
                            v.$watch(q.ngBind, function (w) {
                                u.textContent = w === eR ? "" : w
                            })
                        }
                    }
                }
            }], bJ = ["$interpolate", "$compile", function (n, q) {
                return {
                    compile: function (a) {
                        q.$$addBindingClass(a);
                        return function (w, v, u) {
                            w = n(v.attr(u.$attr.ngBindTemplate));
                            q.$$addBindingInfo(v, w.expressions);
                            v = v[0];
                            u.$observe("ngBindTemplate", function (y) {
                                v.textContent = y === eR ? "" : y
                            })
                        }
                    }
                }
            }], bW = ["$sce", "$parse", "$compile", function (n, u, q) {
                return {
                    restrict: "A", compile: function (y, w) {
                        var v = u(w.ngBindHtml), a = u(w.ngBindHtml, function (z) {
                            return (z || "").toString()
                        });
                        q.$$addBindingClass(y);
                        return function (E, C, z) {
                            q.$$addBindingInfo(C, z.ngBindHtml);
                            E.$watch(a, function () {
                                C.html(n.getTrustedHtml(v(E)) || "")
                            })
                        }
                    }
                }
            }], ej = bB({
                restrict: "A", require: "ngModel", link: function (n, v, u, q) {
                    q.$viewChangeListeners.push(function () {
                        n.$eval(u.ngChange)
                    })
                }
            }), bx = cN("", !0), aW = cN("Odd", 0), bl = cN("Even", 1), aJ = en({
                compile: function (n, q) {
                    q.$set("ngCloak", eR);
                    n.removeClass("ng-cloak")
                }
            }), aw = [function () {
                return {restrict: "A", scope: !0, controller: "@", priority: 500}
            }], e5 = {}, au = {blur: !0, focus: !0};
        eT("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function (n) {
            var q = k("ng-" + n);
            e5[q] = ["$parse", "$rootScope", function (u, a) {
                return {
                    restrict: "A", compile: function (y, w) {
                        var v = u(w[q], null, !0);
                        return function (C, z) {
                            z.on(n, function (F) {
                                var E = function () {
                                    v(C, {$event: F})
                                };
                                au[n] && a.$$phase ? C.$evalAsync(E) : C.$apply(E)
                            })
                        }
                    }
                }
            }]
        });
        var g = ["$animate", function (n) {
                return {
                    multiElement: !0,
                    transclude: "element",
                    priority: 600,
                    terminal: !0,
                    restrict: "A",
                    $$tlb: !0,
                    link: function (C, z, y, w, v) {
                        var u, a, q;
                        C.$watch(y.ngIf, function (E) {
                            E ? a || v(function (G, F) {
                                a = F;
                                G[G.length++] = e9.createComment(" end ngIf: " + y.ngIf + " ");
                                u = {clone: G};
                                n.enter(G, z.parent(), z)
                            }) : (q && (q.remove(), q = null), a && (a.$destroy(), a = null), u && (q = bZ(u.clone), n.leave(q).then(function () {
                                q = null
                            }), u = null))
                        })
                    }
                }
            }], f1 = ["$templateRequest", "$anchorScroll", "$animate", "$sce", function (n, v, u, q) {
                return {
                    restrict: "ECA",
                    priority: 400,
                    terminal: !0,
                    transclude: "element",
                    controller: fS.noop,
                    compile: function (C, z) {
                        var y = z.ngInclude || z.src, a = z.onload || "", w = z.autoscroll;
                        return function (L, K, G, E, T) {
                            var R = 0, U, F, N, Q = function () {
                                F && (F.remove(), F = null);
                                U && (U.$destroy(), U = null);
                                N && (u.leave(N).then(function () {
                                    F = null
                                }), F = N, N = null)
                            };
                            L.$watch(q.parseAsResourceUrl(y), function (W) {
                                var V = function () {
                                    !eN(w) || w && !L.$eval(w) || v()
                                }, Y = ++R;
                                W ? (n(W, !0).then(function (Z) {
                                    if (Y === R) {
                                        var aa = L.$new();
                                        E.template = Z;
                                        Z = T(aa, function (ab) {
                                            Q();
                                            u.enter(ab, null, K).then(V)
                                        });
                                        U = aa;
                                        N = Z;
                                        U.$emit("$includeContentLoaded", W);
                                        L.$eval(a)
                                    }
                                }, function () {
                                    Y === R && (Q(), L.$emit("$includeContentError", W))
                                }), L.$emit("$includeContentRequested", W)) : (Q(), E.template = null)
                            })
                        }
                    }
                }
            }], dA = ["$compile", function (n) {
                return {
                    restrict: "ECA", priority: -400, require: "ngInclude", link: function (v, u, q, a) {
                        /SVG/.test(u[0].toString()) ? (u.empty(), n(el(a.template, e9).childNodes)(v, function (w) {
                            u.append(w)
                        }, {futureParentElement: u})) : (u.html(a.template), n(u.contents())(v))
                    }
                }
            }], fH = en({
                priority: 450, compile: function () {
                    return {
                        pre: function (n, u, q) {
                            n.$eval(q.ngInit)
                        }
                    }
                }
            }), ew = function () {
                return {
                    restrict: "A", priority: 100, require: "ngModel", link: function (n, z, y, w) {
                        var v = z.attr(y.$attr.ngList) || ", ", u = "false" !== y.ngTrim, q = u ? fj(v) : v;
                        w.$parsers.push(function (C) {
                            if (!eQ(C)) {
                                var E = [];
                                C && eT(C.split(q), function (F) {
                                    F && E.push(u ? fj(F) : F)
                                });
                                return E
                            }
                        });
                        w.$formatters.push(function (C) {
                            return fo(C) ? C.join(v) : eR
                        });
                        w.$isEmpty = function (C) {
                            return !C || !C.length
                        }
                    }
                }
            }, dl = "ng-valid", e4 = "ng-invalid", cV = "ng-pristine", e6 = "ng-dirty", ex = "ng-pending",
            ez = new ft("ngModel"),
            X = ["$scope", "$exceptionHandler", "$attrs", "$element", "$parse", "$animate", "$timeout", "$rootScope", "$q", "$interpolate", function (Y, W, V, U, T, R, Q, L, N, K) {
                this.$modelValue = this.$viewValue = Number.NaN;
                this.$$rawModelValue = eR;
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
                this.$pending = eR;
                this.$name = K(V.name || "", !1)(Y);
                var E = T(V.ngModel), C = E.assign, F = E, w = C, n = null, y, G = this;
                this.$$setOptions = function (q) {
                    if ((G.$options = q) && q.getterSetter) {
                        var Z = T(V.ngModel + "()"), z = T(V.ngModel + "($$$p)");
                        F = function (aa) {
                            var ab = E(aa);
                            fr(ab) && (ab = Z(aa));
                            return ab
                        };
                        w = function (aa, ab) {
                            fr(E(aa)) ? z(aa, {$$$p: G.$modelValue}) : C(aa, G.$modelValue)
                        }
                    } else {
                        if (!E.assign) {
                            throw ez("nonassign", V.ngModel, am(U))
                        }
                    }
                };
                this.$render = eP;
                this.$isEmpty = function (q) {
                    return eQ(q) || "" === q || null === q || q !== q
                };
                var v = U.inheritedData("$formController") || fD, u = 0;
                f8({
                    ctrl: this, $element: U, set: function (q, z) {
                        q[z] = !0
                    }, unset: function (q, z) {
                        delete q[z]
                    }, parentForm: v, $animate: R
                });
                this.$setPristine = function () {
                    G.$dirty = !1;
                    G.$pristine = !0;
                    R.removeClass(U, e6);
                    R.addClass(U, cV)
                };
                this.$setDirty = function () {
                    G.$dirty = !0;
                    G.$pristine = !1;
                    R.removeClass(U, cV);
                    R.addClass(U, e6);
                    v.$setDirty()
                };
                this.$setUntouched = function () {
                    G.$touched = !1;
                    G.$untouched = !0;
                    R.setClass(U, "ng-untouched", "ng-touched")
                };
                this.$setTouched = function () {
                    G.$touched = !0;
                    G.$untouched = !1;
                    R.setClass(U, "ng-touched", "ng-untouched")
                };
                this.$rollbackViewValue = function () {
                    Q.cancel(n);
                    G.$viewValue = G.$$lastCommittedViewValue;
                    G.$render()
                };
                this.$validate = function () {
                    if (!fh(G.$modelValue) || !isNaN(G.$modelValue)) {
                        var q = G.$$rawModelValue, aa = G.$valid, Z = G.$modelValue,
                            z = G.$options && G.$options.allowInvalid;
                        G.$$runValidators(q, G.$$lastCommittedViewValue, function (a) {
                            z || aa === a || (G.$modelValue = a ? q : eR, G.$modelValue !== Z && G.$$writeModelToScope())
                        })
                    }
                };
                this.$$runValidators = function (z, ae, ad) {
                    function ac() {
                        var a = !0;
                        eT(G.$validators, function (bb, ag) {
                            var af = bb(z, ae);
                            a = a && af;
                            aa(ag, af)
                        });
                        return a ? !0 : (eT(G.$asyncValidators, function (af, ag) {
                            aa(ag, null)
                        }), !1)
                    }

                    function ab() {
                        var af = [], a = !0;
                        eT(G.$asyncValidators, function (bc, bb) {
                            var ag = bc(z, ae);
                            if (!ag || !fr(ag.then)) {
                                throw ez("$asyncValidators", ag)
                            }
                            aa(bb, eR);
                            af.push(ag.then(function () {
                                aa(bb, !0)
                            }, function (bd) {
                                a = !1;
                                aa(bb, !1)
                            }))
                        });
                        af.length ? N.all(af).then(function () {
                            Z(a)
                        }, eP) : Z(!0)
                    }

                    function aa(af, ag) {
                        q === u && G.$setValidity(af, ag)
                    }

                    function Z(af) {
                        q === u && ad(af)
                    }

                    u++;
                    var q = u;
                    (function () {
                        var af = G.$$parserName || "parse";
                        if (y === eR) {
                            aa(af, null)
                        } else {
                            return y || (eT(G.$validators, function (ag, bb) {
                                aa(bb, null)
                            }), eT(G.$asyncValidators, function (ag, bb) {
                                aa(bb, null)
                            })), aa(af, y), y
                        }
                        return !0
                    })() ? ac() ? ab() : Z(!1) : Z(!1)
                };
                this.$commitViewValue = function () {
                    var q = G.$viewValue;
                    Q.cancel(n);
                    if (G.$$lastCommittedViewValue !== q || "" === q && G.$$hasNativeValidators) {
                        G.$$lastCommittedViewValue = q, G.$pristine && this.$setDirty(), this.$$parseAndValidate()
                    }
                };
                this.$$parseAndValidate = function () {
                    var Z = G.$$lastCommittedViewValue;
                    if (y = eQ(Z) ? eR : !0) {
                        for (var z = 0; z < G.$parsers.length; z++) {
                            if (Z = G.$parsers[z](Z), eQ(Z)) {
                                y = !1;
                                break
                            }
                        }
                    }
                    fh(G.$modelValue) && isNaN(G.$modelValue) && (G.$modelValue = F(Y));
                    var q = G.$modelValue, a = G.$options && G.$options.allowInvalid;
                    G.$$rawModelValue = Z;
                    a && (G.$modelValue = Z, G.$modelValue !== q && G.$$writeModelToScope());
                    G.$$runValidators(Z, G.$$lastCommittedViewValue, function (aa) {
                        a || (G.$modelValue = aa ? Z : eR, G.$modelValue !== q && G.$$writeModelToScope())
                    })
                };
                this.$$writeModelToScope = function () {
                    w(Y, G.$modelValue);
                    eT(G.$viewChangeListeners, function (q) {
                        try {
                            q()
                        } catch (z) {
                            W(z)
                        }
                    })
                };
                this.$setViewValue = function (q, z) {
                    G.$viewValue = q;
                    G.$options && !G.$options.updateOnDefault || G.$$debounceViewValueCommit(z)
                };
                this.$$debounceViewValueCommit = function (z) {
                    var q = 0, a = G.$options;
                    a && eN(a.debounce) && (a = a.debounce, fh(a) ? q = a : fh(a[z]) ? q = a[z] : fh(a["default"]) && (q = a["default"]));
                    Q.cancel(n);
                    q ? n = Q(function () {
                        G.$commitViewValue()
                    }, q) : L.$$phase ? G.$commitViewValue() : Y.$apply(function () {
                        G.$commitViewValue()
                    })
                };
                Y.$watch(function () {
                    var Z = F(Y);
                    if (Z !== G.$modelValue && (G.$modelValue === G.$modelValue || Z === Z)) {
                        G.$modelValue = G.$$rawModelValue = Z;
                        y = eR;
                        for (var z = G.$formatters, q = z.length, a = Z; q--;) {
                            a = z[q](a)
                        }
                        G.$viewValue !== a && (G.$viewValue = G.$$lastCommittedViewValue = a, G.$render(), G.$$runValidators(Z, a, eP))
                    }
                    return Z
                })
            }], eI = ["$rootScope", function (n) {
                return {
                    restrict: "A",
                    require: ["ngModel", "^?form", "^?ngModelOptions"],
                    controller: X,
                    priority: 1,
                    compile: function (a) {
                        a.addClass(cV).addClass("ng-untouched").addClass(dl);
                        return {
                            pre: function (u, z, y, w) {
                                var v = w[0], q = w[1] || fD;
                                v.$$setOptions(w[2] && w[2].$options);
                                q.$addControl(v);
                                y.$observe("name", function (C) {
                                    v.$name !== C && q.$$renameControl(v, C)
                                });
                                u.$on("$destroy", function () {
                                    q.$removeControl(v)
                                })
                            }, post: function (y, w, v, u) {
                                var q = u[0];
                                if (q.$options && q.$options.updateOn) {
                                    w.on(q.$options.updateOn, function (z) {
                                        q.$$debounceViewValueCommit(z && z.type)
                                    })
                                }
                                w.on("blur", function (z) {
                                    q.$touched || (n.$$phase ? y.$evalAsync(q.$setTouched) : y.$apply(q.$setTouched))
                                })
                            }
                        }
                    }
                }
            }], t = /(\s+|^)default(\s+|$)/, dM = function () {
                return {
                    restrict: "A", controller: ["$scope", "$attrs", function (n, u) {
                        var q = this;
                        this.$options = aA(n.$eval(u.ngModelOptions));
                        this.$options.updateOn !== eR ? (this.$options.updateOnDefault = !1, this.$options.updateOn = fj(this.$options.updateOn.replace(t, function () {
                            q.$options.updateOnDefault = !0;
                            return " "
                        }))) : this.$options.updateOnDefault = !0
                    }]
                }
            }, a9 = en({terminal: !0, priority: 1000}), e = ft("ngOptions"),
            fZ = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
            fA = ["$compile", "$parse", function (n, w) {
                function v(ac, ab, aa) {
                    function Z(y, af, ae, ad, z) {
                        this.selectValue = y;
                        this.viewValue = af;
                        this.label = ae;
                        this.group = ad;
                        this.disabled = z
                    }

                    var Y = ac.match(fZ);
                    if (!Y) {
                        throw e("iexp", ac, am(ab))
                    }
                    var W = Y[5] || Y[7], R = Y[6];
                    ac = / as /.test(Y[0]) && Y[1];
                    var U = Y[9];
                    ab = w(Y[2] ? Y[1] : W);
                    var L = ac && w(ac) || ab, K = U && w(U), N = U ? function (y, z) {
                            return K(aa, z)
                        } : function (y) {
                            return s(y)
                        }, V = function (y, z) {
                            return N(y, Q(y, z))
                        }, F = w(Y[2] || Y[1]), G = w(Y[3] || ""), E = w(Y[4] || ""), T = w(Y[8]), C = {},
                        Q = R ? function (y, z) {
                            C[R] = z;
                            C[W] = y;
                            return C
                        } : function (y) {
                            C[W] = y;
                            return C
                        };
                    return {
                        trackBy: U, getTrackByValue: V, getWatchables: w(T, function (y) {
                            var z = [];
                            y = y || [];
                            Object.keys(y).forEach(function (ad) {
                                var a = Q(y[ad], ad);
                                ad = N(y[ad], a);
                                z.push(ad);
                                if (Y[2] || Y[1]) {
                                    ad = F(aa, a), z.push(ad)
                                }
                                Y[4] && (a = E(aa, a), z.push(a))
                            });
                            return z
                        }), getOptions: function () {
                            var bf = [], be = {}, bc = T(aa) || [], ag;
                            if (!R && at(bc)) {
                                ag = bc
                            } else {
                                ag = [];
                                for (var af in bc) {
                                    bc.hasOwnProperty(af) && "$" !== af.charAt(0) && ag.push(af)
                                }
                            }
                            af = ag.length;
                            for (var ae = 0; ae < af; ae++) {
                                var ad = bc === ag ? ae : ag[ae], y = Q(bc[ad], ad), bg = L(aa, y), ad = N(bg, y),
                                    bd = F(aa, y), bb = G(aa, y), y = E(aa, y), bg = new Z(ad, bg, bd, bb, y);
                                bf.push(bg);
                                be[ad] = bg
                            }
                            return {
                                items: bf, selectValueMap: be, getOptionFromViewValue: function (z) {
                                    return be[V(z)]
                                }, getViewValueFromOption: function (z) {
                                    return U ? fS.copy(z.viewValue) : z.viewValue
                                }
                            }
                        }
                    }
                }

                var u = e9.createElement("option"), q = e9.createElement("optgroup");
                return {
                    restrict: "A", terminal: !0, require: ["select", "?ngModel"], link: function (ac, ab, Z, aa) {
                        function Y(y, C) {
                            y.element = C;
                            C.disabled = y.disabled;
                            y.value !== C.value && (C.value = y.selectValue);
                            y.label !== C.label && (C.label = y.label, C.textContent = y.label)
                        }

                        function T(y, ae, ad, C) {
                            ae && fv(ae.nodeName) === ad ? ad = ae : (ad = C.cloneNode(!1), ae ? y.insertBefore(ad, ae) : y.appendChild(ad));
                            return ad
                        }

                        function V(y) {
                            for (var C; y;) {
                                C = y.nextSibling, bF(y), y = C
                            }
                        }

                        function L(y) {
                            var ad = W && W[0], C = a && a[0];
                            if (ad || C) {
                                for (; y && (y === ad || y === C);) {
                                    y = y.nextSibling
                                }
                            }
                            return y
                        }

                        function K() {
                            var y = Q && N.readValue();
                            Q = R.getOptions();
                            var ae = {}, ad = ab[0].firstChild;
                            U && ab.prepend(W);
                            ad = L(ad);
                            Q.items.forEach(function (af) {
                                var bb, ag;
                                af.group ? (bb = ae[af.group], bb || (bb = T(ab[0], ad, "optgroup", q), ad = bb.nextSibling, bb.label = af.group, bb = ae[af.group] = {
                                    groupElement: bb,
                                    currentOptionElement: bb.firstChild
                                }), ag = T(bb.groupElement, bb.currentOptionElement, "option", u), Y(af, ag), bb.currentOptionElement = ag.nextSibling) : (ag = T(ab[0], ad, "option", u), Y(af, ag), ad = ag.nextSibling)
                            });
                            Object.keys(ae).forEach(function (af) {
                                V(ae[af].currentOptionElement)
                            });
                            V(ad);
                            G.$render();
                            if (!G.$isEmpty(y)) {
                                var C = N.readValue();
                                if (R.trackBy && !c2(y, C) || y !== C) {
                                    G.$setViewValue(C), G.$render()
                                }
                            }
                        }

                        var G = aa[1];
                        if (G) {
                            var N = aa[0];
                            aa = Z.multiple;
                            for (var W, F = 0, z = ab.children(), E = z.length; F < E; F++) {
                                if ("" === z[F].value) {
                                    W = z.eq(F);
                                    break
                                }
                            }
                            var U = !!W, a = eL(u.cloneNode(!1));
                            a.val("?");
                            var Q, R = v(Z.ngOptions, ab, ac);
                            aa ? (G.$isEmpty = function (y) {
                                return !y || 0 === y.length
                            }, N.writeValue = function (y) {
                                Q.items.forEach(function (C) {
                                    C.element.selected = !1
                                });
                                y && y.forEach(function (C) {
                                    (C = Q.getOptionFromViewValue(C)) && !C.disabled && (C.element.selected = !0)
                                })
                            }, N.readValue = function () {
                                var y = ab.val() || [], C = [];
                                eT(y, function (ad) {
                                    ad = Q.selectValueMap[ad];
                                    ad.disabled || C.push(Q.getViewValueFromOption(ad))
                                });
                                return C
                            }, R.trackBy && ac.$watchCollection(function () {
                                if (fo(G.$viewValue)) {
                                    return G.$viewValue.map(function (y) {
                                        return R.getTrackByValue(y)
                                    })
                                }
                            }, function () {
                                G.$render()
                            })) : (N.writeValue = function (y) {
                                var C = Q.getOptionFromViewValue(y);
                                C && !C.disabled ? ab[0].value !== C.selectValue && (a.remove(), U || W.remove(), ab[0].value = C.selectValue, C.element.selected = !0, C.element.setAttribute("selected", "selected")) : null === y || U ? (a.remove(), U || ab.prepend(W), ab.val(""), W.prop("selected", !0), W.attr("selected", !0)) : (U || W.remove(), ab.prepend(a), ab.val("?"), a.prop("selected", !0), a.attr("selected", !0))
                            }, N.readValue = function () {
                                var y = Q.selectValueMap[ab.val()];
                                return y && !y.disabled ? (U || W.remove(), a.remove(), Q.getViewValueFromOption(y)) : null
                            }, R.trackBy && ac.$watch(function () {
                                return R.getTrackByValue(G.$viewValue)
                            }, function () {
                                G.$render()
                            }));
                            U ? (W.remove(), n(W)(ac), W.removeClass("ng-scope")) : W = eL(u.cloneNode(!1));
                            K();
                            ac.$watchCollection(R.getWatchables, K)
                        }
                    }
                }
            }], aP = ["$locale", "$interpolate", "$log", function (n, w, v) {
                var u = /{}/g, q = /^when(Minus)?(.+)$/;
                return {
                    link: function (R, Q, L) {
                        function N(y) {
                            Q.text(y || "")
                        }

                        var K = L.count, a = L.$attr.when && Q.attr(L.$attr.when), F = L.offset || 0, W = R.$eval(a) || {},
                            T = {}, U = w.startSymbol(), Y = w.endSymbol(), G = U + K + "-" + F + Y, V = fS.noop, E;
                        eT(L, function (y, C) {
                            var z = q.exec(C);
                            z && (z = (z[1] ? "-" : "") + fv(z[2]), W[z] = Q.attr(L.$attr[C]))
                        });
                        eT(W, function (y, z) {
                            T[z] = w(y.replace(u, G))
                        });
                        R.$watch(K, function (C) {
                            var z = parseFloat(C), y = isNaN(z);
                            y || z in W || (z = n.pluralCat(z - F));
                            z === E || y && fh(E) && isNaN(E) || (V(), y = T[z], eQ(y) ? (null != C && v.debug("ngPluralize: no rule defined for '" + z + "' in " + a), V = eP, N()) : V = R.$watch(y, N), E = z)
                        })
                    }
                }
            }], aC = ["$parse", "$animate", function (n, v) {
                var u = ft("ngRepeat"), q = function (y, G, E, C, z, w, F) {
                    y[E] = C;
                    z && (y[z] = w);
                    y.$index = G;
                    y.$first = 0 === G;
                    y.$last = G === F - 1;
                    y.$middle = !(y.$first || y.$last);
                    y.$odd = !(y.$even = 0 === (G & 1))
                };
                return {
                    restrict: "A",
                    multiElement: !0,
                    transclude: "element",
                    priority: 1000,
                    terminal: !0,
                    $$tlb: !0,
                    compile: function (R, Q) {
                        var N = Q.ngRepeat, K = e9.createComment(" end ngRepeat: " + N + " "),
                            L = N.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
                        if (!L) {
                            throw u("iexp", N)
                        }
                        var G = L[1], a = L[2], E = L[3], Y = L[4],
                            L = G.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/);
                        if (!L) {
                            throw u("iidexp", G)
                        }
                        var W = L[3] || L[1], T = L[2];
                        if (E && (!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(E) || /^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(E))) {
                            throw u("badident", E)
                        }
                        var Z, F, U, z, V = {$id: s};
                        Y ? Z = n(Y) : (U = function (w, y) {
                            return s(y)
                        }, z = function (w) {
                            return w
                        });
                        return function (y, ac, ab, aa, w) {
                            Z && (F = function (af, ae, ad) {
                                T && (V[T] = af);
                                V[W] = ae;
                                V.$index = ad;
                                return Z(y, V)
                            });
                            var C = dX();
                            y.$watchCollection(a, function (bb) {
                                var ag, ae, cb = ac[0], af, ad = dX(), bf, bg, bd, ca, be, cc, bc;
                                E && (y[E] = bb);
                                if (at(bb)) {
                                    be = bb, ae = F || U
                                } else {
                                    for (bc in ae = F || z, be = [], bb) {
                                        bb.hasOwnProperty(bc) && "$" !== bc.charAt(0) && be.push(bc)
                                    }
                                }
                                bf = be.length;
                                bc = Array(bf);
                                for (ag = 0; ag < bf; ag++) {
                                    if (bg = bb === be ? ag : be[ag], bd = bb[bg], ca = ae(bg, bd, ag), C[ca]) {
                                        cc = C[ca], delete C[ca], ad[ca] = cc, bc[ag] = cc
                                    } else {
                                        if (ad[ca]) {
                                            throw eT(bc, function (cd) {
                                                cd && cd.scope && (C[cd.id] = cd)
                                            }), u("dupes", N, ca, bd)
                                        }
                                        bc[ag] = {id: ca, scope: eR, clone: eR};
                                        ad[ca] = !0
                                    }
                                }
                                for (af in C) {
                                    cc = C[af];
                                    ca = bZ(cc.clone);
                                    v.leave(ca);
                                    if (ca[0].parentNode) {
                                        for (ag = 0, ae = ca.length; ag < ae; ag++) {
                                            ca[ag].$$NG_REMOVED = !0
                                        }
                                    }
                                    cc.scope.$destroy()
                                }
                                for (ag = 0; ag < bf; ag++) {
                                    if (bg = bb === be ? ag : be[ag], bd = bb[bg], cc = bc[ag], cc.scope) {
                                        af = cb;
                                        do {
                                            af = af.nextSibling
                                        } while (af && af.$$NG_REMOVED);
                                        cc.clone[0] != af && v.move(bZ(cc.clone), null, eL(cb));
                                        cb = cc.clone[cc.clone.length - 1];
                                        q(cc.scope, ag, W, bd, T, bg, bf)
                                    } else {
                                        w(function (cd, cf) {
                                            cc.scope = cf;
                                            var ce = K.cloneNode(!1);
                                            cd[cd.length++] = ce;
                                            v.enter(cd, null, eL(cb));
                                            cb = ce;
                                            cc.clone = cd;
                                            ad[cc.id] = cc;
                                            q(cc.scope, ag, W, bd, T, bg, bf)
                                        })
                                    }
                                }
                                C = ad
                            })
                        }
                    }
                }
            }], ao = ["$animate", function (n) {
                return {
                    restrict: "A", multiElement: !0, link: function (u, q, a) {
                        u.$watch(a.ngShow, function (v) {
                            n[v ? "removeClass" : "addClass"](q, "ng-hide", {tempClasses: "ng-hide-animate"})
                        })
                    }
                }
            }], A = ["$animate", function (n) {
                return {
                    restrict: "A", multiElement: !0, link: function (u, q, a) {
                        u.$watch(a.ngHide, function (v) {
                            n[v ? "addClass" : "removeClass"](q, "ng-hide", {tempClasses: "ng-hide-animate"})
                        })
                    }
                }
            }], J = en(function (n, u, q) {
                n.$watch(q.ngStyle, function (v, w) {
                    w && v !== w && eT(w, function (y, z) {
                        u.css(z, "")
                    });
                    v && u.css(v)
                }, !0)
            }), m = ["$animate", function (n) {
                return {
                    require: "ngSwitch", controller: ["$scope", function () {
                        this.cases = {}
                    }], link: function (E, C, z, y) {
                        var w = [], v = [], q = [], u = [], a = function (F, G) {
                            return function () {
                                F.splice(G, 1)
                            }
                        };
                        E.$watch(z.ngSwitch || z.on, function (L) {
                            var K, G;
                            K = 0;
                            for (G = q.length; K < G; ++K) {
                                n.cancel(q[K])
                            }
                            K = q.length = 0;
                            for (G = u.length; K < G; ++K) {
                                var F = bZ(v[K].clone);
                                u[K].$destroy();
                                (q[K] = n.leave(F)).then(a(q, K))
                            }
                            v.length = 0;
                            u.length = 0;
                            (w = y.cases["!" + L] || y.cases["?"]) && eT(w, function (N) {
                                N.transclude(function (T, R) {
                                    u.push(R);
                                    var Q = N.element;
                                    T[T.length++] = e9.createComment(" end ngSwitchWhen: ");
                                    v.push({clone: T});
                                    n.enter(T, Q.parent(), Q)
                                })
                            })
                        })
                    }
                }
            }], f7 = en({
                transclude: "element",
                priority: 1200,
                require: "^ngSwitch",
                multiElement: !0,
                link: function (n, w, v, u, q) {
                    u.cases["!" + v.ngSwitchWhen] = u.cases["!" + v.ngSwitchWhen] || [];
                    u.cases["!" + v.ngSwitchWhen].push({transclude: q, element: w})
                }
            }), fU = en({
                transclude: "element",
                priority: 1200,
                require: "^ngSwitch",
                multiElement: !0,
                link: function (n, w, v, u, q) {
                    u.cases["?"] = u.cases["?"] || [];
                    u.cases["?"].push({transclude: q, element: w})
                }
            }), e3 = en({
                restrict: "EAC", link: function (n, w, v, u, q) {
                    if (!q) {
                        throw ft("ngTransclude")("orphan", am(w))
                    }
                    q(function (y) {
                        w.empty();
                        w.append(y)
                    })
                }
            }), di = ["$templateCache", function (n) {
                return {
                    restrict: "E", terminal: !0, compile: function (q, a) {
                        "text/ng-template" == a.type && n.put(a.id, q[0].text)
                    }
                }
            }], fF = {$setViewValue: eP, $render: eP}, a7 = ["$element", "$scope", "$attrs", function (n, w, v) {
                var u = this, q = new c8;
                u.ngModelCtrl = fF;
                u.unknownOption = eL(e9.createElement("option"));
                u.renderUnknownOption = function (a) {
                    a = "? " + s(a) + " ?";
                    u.unknownOption.val(a);
                    n.prepend(u.unknownOption);
                    n.val(a)
                };
                w.$on("$destroy", function () {
                    u.renderUnknownOption = eP
                });
                u.removeUnknownOption = function () {
                    u.unknownOption.parent() && u.unknownOption.remove()
                };
                u.readValue = function () {
                    u.removeUnknownOption();
                    return n.val()
                };
                u.writeValue = function (a) {
                    u.hasOption(a) ? (u.removeUnknownOption(), n.val(a), "" === a && u.emptyOption.prop("selected", !0)) : null == a && u.emptyOption ? (u.removeUnknownOption(), n.val("")) : u.renderUnknownOption(a)
                };
                u.addOption = function (y, C) {
                    ds(y, '"option value"');
                    "" === y && (u.emptyOption = C);
                    var z = q.get(y) || 0;
                    q.put(y, z + 1)
                };
                u.removeOption = function (y) {
                    var z = q.get(y);
                    z && (1 === z ? (q.remove(y), "" === y && (u.emptyOption = eR)) : q.put(y, z - 1))
                };
                u.hasOption = function (y) {
                    return !!q.get(y)
                }
            }], cY = function () {
                return {
                    restrict: "E", require: ["select", "?ngModel"], controller: a7, link: function (q, C, z, y) {
                        var w = y[1];
                        if (w) {
                            var v = y[0];
                            v.ngModelCtrl = w;
                            w.$render = function () {
                                v.writeValue(w.$viewValue)
                            };
                            C.on("change", function () {
                                q.$apply(function () {
                                    w.$setViewValue(v.readValue())
                                })
                            });
                            if (z.multiple) {
                                v.readValue = function () {
                                    var E = [];
                                    eT(C.find("option"), function (a) {
                                        a.selected && E.push(a.value)
                                    });
                                    return E
                                };
                                v.writeValue = function (E) {
                                    var F = new c8(E);
                                    eT(C.find("option"), function (G) {
                                        G.selected = eN(F.get(G.value))
                                    })
                                };
                                var u, n = NaN;
                                q.$watch(function () {
                                    n !== w.$viewValue || c2(u, w.$viewValue) || (u = eh(w.$viewValue), w.$render());
                                    n = w.$viewValue
                                });
                                w.$isEmpty = function (E) {
                                    return !E || 0 === E.length
                                }
                            }
                        }
                    }
                }
            }, cy = ["$interpolate", function (n) {
                function q(u) {
                    u[0].hasAttribute("selected") && (u[0].selected = !0)
                }

                return {
                    restrict: "E", priority: 100, compile: function (v, u) {
                        if (eQ(u.value)) {
                            var a = n(v.text(), !0);
                            a || u.$set("value", v.text())
                        }
                        return function (y, E, C) {
                            var z = E.parent(), w = z.data("$selectController") || z.parent().data("$selectController");
                            w && w.ngModelCtrl && (a ? y.$watch(a, function (F, G) {
                                C.$set("value", F);
                                G !== F && w.removeOption(G);
                                w.addOption(F, E);
                                w.ngModelCtrl.$render();
                                q(E)
                            }) : (w.addOption(C.value, E), w.ngModelCtrl.$render(), q(E)), E.on("$destroy", function () {
                                w.removeOption(C.value);
                                w.ngModelCtrl.$render()
                            }))
                        }
                    }
                }
            }], cL = bB({restrict: "E", terminal: !1}), b = function () {
                return {
                    restrict: "A", require: "?ngModel", link: function (n, v, u, q) {
                        q && (u.required = !0, q.$validators.required = function (w, y) {
                            return !u.required || !q.$isEmpty(y)
                        }, u.$observe("required", function () {
                            q.$validate()
                        }))
                    }
                }
            }, p = function () {
                return {
                    restrict: "A", require: "?ngModel", link: function (n, y, w, v) {
                        if (v) {
                            var u, q = w.ngPattern || w.pattern;
                            w.$observe("pattern", function (z) {
                                fn(z) && 0 < z.length && (z = new RegExp("^" + z + "$"));
                                if (z && !z.test) {
                                    throw ft("ngPattern")("noregexp", q, z, am(y))
                                }
                                u = z || eR;
                                v.$validate()
                            });
                            v.$validators.pattern = function (z) {
                                return v.$isEmpty(z) || eQ(u) || u.test(z)
                            }
                        }
                    }
                }
            }, fC = function () {
                return {
                    restrict: "A", require: "?ngModel", link: function (n, w, v, u) {
                        if (u) {
                            var q = -1;
                            v.$observe("maxlength", function (y) {
                                y = e8(y);
                                q = isNaN(y) ? -1 : y;
                                u.$validate()
                            });
                            u.$validators.maxlength = function (y, z) {
                                return 0 > q || u.$isEmpty(z) || z.length <= q
                            }
                        }
                    }
                }
            }, fW = function () {
                return {
                    restrict: "A", require: "?ngModel", link: function (n, w, v, u) {
                        if (u) {
                            var q = 0;
                            v.$observe("minlength", function (y) {
                                q = e8(y) || 0;
                                u.$validate()
                            });
                            u.$validators.minlength = function (y, z) {
                                return u.$isEmpty(z) || z.length >= q
                            }
                        }
                    }
                }
            };
        fm.angular.bootstrap ? console.log("WARNING: Tried to load angular more than once.") : (fs(), eD(fS), eL(e9).ready(function () {
            bs(e9, fJ)
        }))
    })(window, document);
    !window.angular.$$csp() && window.angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>')
};

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


            this.addStrategy = function (strategyName, strategyFunction) {
                strategies[strategyName] = strategyFunction;
                return this;
            };


            this.removeStrategy = function (strategyName) {
                delete strategies[strategyName];
                return this;
            };


            this.useStrategy = function (strategy) {
                hasConfiguredStrategy = true;
                currentStrategy = strategy;
                return this;
            };


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

                    useStrategy: (function (self) {
                        return function (strategy) {
                            self.useStrategy(strategy);
                        };
                    })(this),


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

$.getScript("https://www.youtube.com/iframe_api");
/**************************************/
var data_mone,
    data_day,
    data_year;

function f() {
    var a = 0;
    left = ($(window).height() / ($(".sec_4").height() - $(".left_sec4").height())) / 2;
    w_h = $(window).height() / 2;
    $(window).height();
    $(window).scroll(function () {
        var d = $(this), c = d.scrollTop(), b = $(window).scrollTop(), g = 0, e = 0;
        if (b > position) {
            e += 1
        } else {
            e += 0
        }
        position = b;
        if (c > $(".sec_4").offset().top - w_h && c < $(".sec_4").offset().top + $(".sec_4").height() - w_h) {
            if (e == 1) {
                a += left
            } else {
                if (e == 0) {
                    a -= left
                }
            }
            $(".left_sec4").animate({top: +a + "px"}, 0);
            $(".right_sec4").animate({bottom: +a + "px"}, 0)
        }
    })
};

function f1() {
    klp_ = parseInt(1920 * 0.01);
    Scroll = window.pageYOffset;
    $(".text_R").css("top", ((r2 + (0.3 * Scroll))) + "px");
    $(".text_R2").css("top", ((r3 + (0.4 * Scroll))) + "px");
    $(".text_L").css("top", ((l1 + (0.3 * Scroll))) + "px")
};

function select_() {
    $(".timer").find('select option:not([disabled])').eq(0).attr('selected','selected')
    $(".timer .custom-select").each(function () {
        var b = $(this).attr("class"), d = $(this).attr("id"), a = $(this).attr("name");
        var c = '<div class="' + b + '">';
        c += '<span class="custom-select-trigger">' + $(this).find("option:not([disabled])").eq(0).text() + "</span>";
        c += '<div class="custom-options"><ul>';
        $(this).find("option").each(function () {
            c += '<li class="custom-option " ' + $(this).attr("disabled") + ' data-value="' + $(this).attr("value") + '">' + $(this).html() + "</li>"
        });
        c += "</ul></div></div>";
        $(this).wrap('<div class="custom-select-wrapper"></div>');
        $(this).hide();
        $(this).after(c)
    });
    $(".custom-option:first-of-type").hover(function () {
        $(this).parents(".custom-options").addClass("option-hover")
    }, function () {
        $(this).parents(".custom-options").removeClass("option-hover")
    });
    $(".custom-select-trigger").on("click", function () {
        $(".calendar_w").removeClass("open");
        $(this).parents(".custom-select").toggleClass("opened");
        event.stopPropagation()
    });
    $(".custom-option").on("click", function () {
        $(this).parents(".custom-select-wrapper").find("select").val($(this).data("value"));
        $(this).parents(".custom-options").find(".custom-option").removeClass("selection");
        $(this).addClass("selection");
        $(this).parents(".custom-select").removeClass("opened");
        $(this).parents(".custom-select").find(".custom-select-trigger").text($(this).text())
    })
};

function select_2() {
    $(".custom-select_people").each(function () {
        var c = $(this).attr("class"), e = $(this).attr("id"), b = $(this).attr("name");
        var d = '<div class="' + c + '">';
        d += '<span class="custom-select-trigger_people">' + $(this).find("option:not([disabled])").eq(0).text() + "</span>";
        d += '<div class="custom-options_people"><ul>';
        $(this).find("option").each(function () {
            d += '<li class="custom-option_people " ' + $(this).attr("disabled") + ' data-value="' + $(this).attr("value") + '">' + $(this).html() + "</li>"
        });
        d += "</ul></div></div>";
        $(this).wrap('<div class="custom-select-wrapper_people"></div>');
        $(this).hide();
        $(this).after(d)
    });
    $(".custom-option_people:first-of-type").hover(function () {
        $(this).parents(".custom-options_people").addClass("option-hover")
    }, function () {
        $(this).parents(".custom-options_people").removeClass("option-hover")
    });
    $(".custom-select-trigger_people").on("click", function () {
        $(".calendar_w").removeClass("open");
        $(this).parents(".custom-select_people").toggleClass("opened");
        event.stopPropagation()
    });
    $(".custom-option_people").on("click", function () {
        $(this).parents(".custom-select-wrapper_people").find("select").val($(this).data("value"));
        $(this).parents(".custom-options_people").find(".custom-option_people").removeClass("selection");
        $(this).addClass("selection");
        $(this).parents(".custom-select_people").removeClass("opened");
        $(this).parents(".custom-select_people").find(".custom-select-trigger_people").text($(this).text())
    })
}

function mask() {
    $("#phone,#phone_bot").keydown(function (c) {

        var b = c.which || c.charCode || c.keyCode || 0;
        $phone = $(this);
        if ($phone.val().length === 5 && (b === 8 || b === 46)) {
            $phone.val("+38(0");
            return false
        } else {
            if ($phone.val().charAt(4) !== "0") {
                $phone.val("+38(0" + String.fromCharCode(c.keyCode) + "")
            }
        }
        if (b !== 8 && b !== 9 && b !== 16) {
            if ($phone.val().length === 7) {
                $phone.val($phone.val() + ")")
            }
            if ($phone.val().length === 11) {
                $phone.val($phone.val() + "-")
            }
            if ($phone.val().length === 14) {
                $phone.val($phone.val() + "-")
            }
        }
        return (b == 8 || b == 9 || b == 46 || (b >= 48 && b <= 57) || (b >= 96 && b <= 105) || b == 16)
    }).bind("focus click", function () {
        $phone = $(this);
        if ($phone.val().length === 0) {
            $phone.val("+38(0")
        } else {
            var b = $phone.val();
            $phone.val("").val(b);
            console.log(b)
        }
    }).blur(function () {
        $phone = $(this);
        if ($phone.val() === "+38(0") {
            $phone.val("")
        }
    })
}

function chat_bot() {
    var w = $(".chat"), o = $(".bot_window"), y, d, u, t, k, b, x, e, z;

    function q() {
        $.ajax({
            url: "get-bot",
            type: "POST",
            headers: {"X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content")},
            processData: false,
            contentType: false,
            cache: false,
            dataType: "json",
            success: function (E) {
                y = E;
                d = '<div class="button_one_block"><div class="button_chat">' + y[0].question + '</div><div class="button_chat">' + y[1].question + '</div><div class="button_chat">' + y[2].question + '</div><div class="button_chat">' + y[3].question + "</div></div>"
            },
        })
    }

    var A = [{
        img: "/assets/img/icon/one_icon_chat.svg",
        h3: "<h3>Привіт! Я - <span>Кока Коля.</span></h3>",
        p: "<p>Я допоможу дізнатись цікаву для тебе інформацію.</p>",
        button: "Добре. Почнемо"
    }, {text: "Що тебе цікавить?", text_next: "У мене ще є питання"}, {
        free_places: "Вільні місця",
        sign_up: "Записатися на екскурсію",
        cal_day: "Виберіть дату",
        cal_time: "А тепер час",
        cal_contact_1: "Напиши інформацію щодо себе",
        cal_contact_2: "А тепер ще трішки інформації"
    }, {
        h3_fin: "<h3>Хей!</h3>",
        p_fin: "<p>Дзвоніть за номером гарячої лінії Кока-Кола</p>",
        ok_fin: "ок"
    }, {
        prev: "Назад",
        next: "Далі",
        finish: "Завершити",
        finh3: "Круто!",
        finh3_: "Вітаю з заверщенням!",
        finhp: "Тепер менеджер з тобою зв’яжеться для отримання більш детальньої інформації",
        finhwin: "ОК"
    }, {
        name_bot: "Ім’я та Прізвище",
        phone_bot: "Телефон",
        email_bot: "Пошта",
        position_bot: "Посада",
        institution: "Назва закладу"
    }];
    var n = '<div class="c-chat__item log"><div class="loader"><span></span><span></span><span></span></div></div>';
    w.find(".chat_open").click(function () {
        o.html("");
        w.addClass("open");
        o.append(n);
        q();
        setTimeout(function () {
            w.find(".log").remove();
            l()
        }, 800);
        if ($(window).width() < 768) {
            $("body").addClass("open_chat_mob")
        }
    });

    function D() {
        $(".button_one_block .button_chat").click(function () {
            var E = $(this).text();
            if ($(this).index() == 0) {
                c(E)
            } else {
                if ($(this).index() == 1) {
                    v(E)
                } else {
                    if ($(this).index() == 2) {
                        m(E)
                    } else {
                        if ($(this).index() == 3) {
                            B(E)
                        }
                    }
                }
            }
        })
    }

    function l() {
        o.append('<div class="hellow"><img src="' + A[0].img + '" alt="">' + A[0].h3 + "" + A[0].p + '<div class="button_chat">' + A[0].button + "</div></div>");
        $(".hellow .button_chat").click(function () {
            s()
        })
    }

    function s() {
        o.html("");
        o.append(n);
        setTimeout(function () {
            w.find(".log").remove();
            o.append('<div class="c-chat__item chat__item_bot"><div class="c-chat__message"><p>' + A[1].text + "</p></div></div>");
            o.append(n);
            $(".bot_window").scrollTop($(".bot_window")[0].scrollHeight)
        }, 800);
        setTimeout(function () {
            w.find(".log").remove();
            o.append(d);
            D();
            $(".bot_window").scrollTop($(".bot_window")[0].scrollHeight)
        }, 1600)
    }

    function c(E) {
        w.find(".button_one_block").remove();
        o.append('<div class="c-chat__item c-chat__item--human"><div class="c-chat__message"> <p>' + E + "</p> </div></div>");
        setTimeout(function () {
            o.append(n)
        }, 300);
        setTimeout(function () {
            w.find(".log").remove();
            o.append('<div class="c-chat__item chat__item_bot"><div class="c-chat__message"><p>' + y[0].answer + "</p></div></div>");
            o.append(n)
        }, 1100);
        setTimeout(function () {
            w.find(".log").remove();
            w.find(".button_one_block").remove();
            o.append('<div class="button_one_block"><div class="button_chat remove">' + A[1].text_next + "</div></div>");
            $(".button_chat.remove").click(function () {
                $(this).remove();
                o.append(d);
                D();
                $(".bot_window").scrollTop($(".bot_window")[0].scrollHeight)
            });
            $(".bot_window").scrollTop($(".bot_window")[0].scrollHeight)
        }, 1900)
    }

    function v(E) {
        w.find(".button_one_block").remove();
        o.append('<div class="c-chat__item c-chat__item--human"><div class="c-chat__message"> <p>' + E + "</p> </div></div>");
        setTimeout(function () {
            o.append(n)
        }, 300);
        setTimeout(function () {
            w.find(".log").remove();
            o.append('<div class="c-chat__item chat__item_bot"><div class="c-chat__message"><p>' + y[1].answer + "</p></div></div>");
            o.append(n)
        }, 1100);
        setTimeout(function () {
            w.find(".log").remove();
            w.find(".button_one_block").remove();
            o.append('<div class="button_one_block"><div class="button_chat remove">' + A[1].text_next + "</div></div>");
            $(".button_chat.remove").click(function () {
                $(this).remove();
                o.append(d);
                D();
                $(".bot_window").scrollTop($(".bot_window")[0].scrollHeight)
            });
            $(".bot_window").scrollTop($(".bot_window")[0].scrollHeight)
        }, 1900)
    }

    function m(E) {
        w.find(".button_one_block").remove();
        o.append('<div class="c-chat__item c-chat__item--human"><div class="c-chat__message"> <p>' + E + "</p> </div></div>");
        setTimeout(function () {
            o.append(n);
            $(".bot_window").scrollTop($(".bot_window")[0].scrollHeight)
        }, 300);
        setTimeout(function () {
            w.find(".log").remove();
            o.append('<div class="c-chat__item chat__item_bot"><div class="c-chat__message"><p>' + y[2].answer + "</p></div></div>");
            o.append(n);
            $(".bot_window").scrollTop($(".bot_window")[0].scrollHeight)
        }, 1100);
        setTimeout(function () {
            w.find(".log").remove();
            w.find(".button_one_block").remove();
            o.append('<div class="button_one_block"><div class="button_chat remove">' + A[1].text_next + "</div></div>");
            $(".button_chat.remove").click(function () {
                $(this).remove();
                o.append(d);
                D();
                $(".bot_window").scrollTop($(".bot_window")[0].scrollHeight)
            });
            $(".bot_window").scrollTop($(".bot_window")[0].scrollHeight)
        }, 1900)
    }

    function B(E) {
        w.find(".button_one_block").remove();
        o.append('<div class="c-chat__item c-chat__item--human"><div class="c-chat__message"> <p>' + E + "</p> </div></div>");
        setTimeout(function () {
            o.append(n);
            $(".bot_window").scrollTop($(".bot_window")[0].scrollHeight)
        }, 300);
        setTimeout(function () {
            w.find(".log").remove();
            g();
            $(".bot_window").scrollTop($(".bot_window")[0].scrollHeight)
        }, 1100)
    }

    function g() {
        o.append('<div class="button_one_block"><div class="button_chat sing">' + A[2].free_places + '</div><div class="button_chat sing">' + A[2].sign_up + "</div></div>");
        $(".button_chat.sing").click(function () {
            var E = $(this).text();
            if ($(this).index() == 0) {
                i(E)
            } else {
                h(E)
            }
        })
    }

    function i(E) {
        w.find(".button_one_block").remove();
        o.html("");
        o.append('<div class="c-chat__item chat__item_bot"><div class="c-chat__message"><p>' + A[2].cal_day + "</p></div></div>");
        o.append('<div class="bot_calendar"></div>');
        var G = $("form .calendar_w").clone(true, true);
        $(".bot_calendar").html(G);
        o.append('<div class="form_chat_c button_one_block"><div class="button_chat cl_prev">' + A[4].prev + '</div><div class="button_chat cl_next">' + A[4].next + "</div></div>");
        $(".month .arrow").click(function () {
            H()
        });

        function F() {
            $(".day.ng-scope").not(".disabled").on("click", function () {
                H()
            })
        }

        F();

        function H() {
            var I = $("form .calendar_w").clone(true, true);
            $(".bot_calendar").html("");
            $(".bot_calendar").html(I);
            F()
        }

        angular.element(".day").triggerHandler("click");
        $(".cl_next").on("click", function () {
            p()
        });
        $(".cl_prev").on("click", function () {
            o.html("");
            var I = A[2].sign_up;
            B(I)
        })
    }

    function p() {
        o.html("");
        o.append('<div class="c-chat__item chat__item_bot"><div class="c-chat__message"><p>' + A[2].cal_time + "</p></div></div>");
        o.append('<div class="bot_time"></div>');
        var E = $("form .custom-options").clone(true, true);
        $(".bot_time").html(E);
        o.append('<div class="form_chat_c button_one_block"><div class="button_chat cl_prev">' + A[4].prev + '</div><div class="button_chat cl_next disabled">' + A[4].next + "</div></div>");
        $(".bot_time li").click(function () {
            $(".cl_next").removeClass("disabled")
        });
        $(".cl_prev").on("click", function () {
            o.html("");
            i()
        });
        $(".cl_next").on("click", function () {
            u = $(".bot_time li.selection").data("value");
            C()
        })
    }

    function C() {
        o.html("");
        o.append('<div class="c-chat__item chat__item_bot"><div class="c-chat__message"><p>' + A[2].cal_contact_1 + "</p></div></div>");
        o.append('<div class="bot_contacts"><div class="name">\n<input type="text" id="name_bot" name="name_bot" autocomplete="off">\n<label for="name_bot">' + A[5].name_bot + '</label>\n</div><div class="tell">\n<input type="text" maxlength="17" id="phone_bot" name="phone_bot" autocomplete="off">\n<label for="phone_bot">' + A[5].phone_bot + '</label>\n</div><div class="email">\n<input type="email" id="email_bot" name="email_bot" autocomplete="off">\n<label for="email_bot">' + A[5].email_bot + '</label>\n</div><div class="pole_form">\n<input type="text" id="position_bot" name="position_bot" autocomplete="off">\n<label for="position_bot">' + A[5].position_bot + "</label>\n</div></div>");
        mask();
        var E = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
        $(".bot_contacts input").change(function () {
            el = $(this);
            el.each(function () {
                if (el.val().length > 0) {
                    el.parent().find("label").addClass("label-stay")
                } else {
                    el.parent().find("label").removeClass("label-stay")
                }
            });
            if ($("#name_bot").val().length > 3 && $("#phone_bot").val().length >= 13 && E.test($("#email_bot").val()) == true && $("#position_bot").val().length >= 3) {
                $(".cl_next").removeClass("disabled")
            } else {
                $(".cl_next").addClass("disabled")
            }
        });
        $(".bot_contacts input").keypress(function () {
            if ($("#name_bot").val().length > 3 && $("#phone_bot").val().length >= 13 && E.test($("#email_bot").val()) == true && $("#position_bot").val().length >= 3) {
                $(".cl_next").removeClass("disabled")
            } else {
                $(".cl_next").addClass("disabled")
            }
        });
        o.append('<div class="form_chat_c button_one_block"><div class="button_chat cl_prev">' + A[4].prev + '</div><div class="button_chat cl_next disabled">' + A[4].next + "</div></div>");
        $(".cl_prev").on("click", function () {
            o.html("");
            p()
        });
        $(".cl_next").on("click", function () {
            t = $("#name_bot").val();
            k = $("#phone_bot").val();
            b = $("#email_bot").val();
            x = $("#position_bot").val();
            r()
        })
    }

    function r() {
        var E = $("form .pole_form").eq(2).clone();
        o.html("");
        o.append('<div class="c-chat__item chat__item_bot"><div class="c-chat__message"><p>' + A[2].cal_contact_2 + "</p></div></div>");
        o.append('<div class="bot_contacts"><div class="name">\n<input type="text" id="institution_bot" name="institution_bot" autocomplete="off">\n<label for="institution_bot">' + A[5].institution + "</label>\n</div></div>");
        E.appendTo(".bot_contacts");
        o.append('<div class="form_chat_c button_one_block"><div class="button_chat cl_prev">' + A[4].prev + '</div><div class="button_chat cl_next disabled">' + A[4].finish + "</div></div>");
        $(".bot_contacts input").change(function () {
            el = $(this);
            el.each(function () {
                if (el.val().length > 0) {
                    el.parent().find("label").addClass("label-stay")
                } else {
                    el.parent().find("label").removeClass("label-stay")
                }
            });
            if ($("#institution_bot").val().length > 3 && $(".bot_contacts #people").val() > Math.min(9) && $(".bot_contacts #people").val() < Math.min(37) && $(".bot_contacts #people").val() != "") {
                $(".cl_next").removeClass("disabled")
            } else {
                $(".cl_next").addClass("disabled")
            }
        });
        $(".bot_contacts .custom-option_people").click(function () {
            if ($(".bot_contacts #people").val() > Math.min(9) && $(".bot_contacts #people").val() < Math.min(37) && $(".bot_contacts #people").val() != "" && $("#institution_bot").val().length > 3) {
                $(".cl_next").removeClass("disabled")
            } else {
                $(".cl_next").addClass("disabled")
            }
        });
        $(".bot_contacts input").keypress(function () {
            if ($("#institution_bot").val().length > 3 && $(".bot_contacts #people").val() > Math.min(9) && $(".bot_contacts #people").val() < Math.min(37) && $(".bot_contacts #people").val() != "") {
                $(".cl_next").removeClass("disabled")
            } else {
                $(".cl_next").addClass("disabled")
            }
        });
        $(".cl_prev").on("click", function () {
            o.html("");
            C()
        });
        $(".cl_next").on("click", function () {
            e = $("#institution_bot").val();
            z = $(".bot_contacts #people").val();
            $.ajax({
                url: "add-excursions",
                type: "POST",
                headers: {"X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content")},
                data: {
                    name: t,
                    phone: k,
                    email: b,
                    position: x,
                    institution: e,
                    people: z,
                    interval: u,
                    "trip-month": data_mone,
                    "trip-day": data_day
                },
                dataType: "json",
                success: function (F) {
                    if (F.status == "Екскурсію збережено.") {
                        o.html("");
                        o.append('<div class="hellow"><img src="' + A[0].img + '" alt=""><h3>' + A[4].finh3 + "<br>" + A[4].finh3_ + "</h3><p>" + A[4].finhp + '</p><div class="button_chat">' + A[4].finhwin + "</div></div>");
                        $(".bot_window").scrollTop($(".bot_window")[0].scrollHeight);
                        $(".hellow .button_chat").click(function () {
                            w.removeClass("open");
                            o.html("")
                        })
                    }
                }
            });
            console.log(u, t, k, b, x, e, e, z, data_mone, data_day)
        })
    }

    function h(E) {
        w.find(".button_one_block").remove();
        setTimeout(function () {
            o.append(n)
        }, 300);
        setTimeout(function () {
            w.find(".log").remove();
            o.html("");
            o.append('<div class="hellow fin"><img src="' + A[0].img + '" alt="">' + A[3].h3_fin + "" + A[3].p_fin + "<h5>" + y[4].answer + '</h5><div class="button_chat">' + A[3].ok_fin + "</div></div>");
            w.find(".fin .button_chat").click(function () {
                w.removeClass("open");
                o.html("")
            })
        }, 1100)
    }

    w.find(".chat_close").click(function () {
        w.removeClass("open");
        o.html("");
        if ($(window).width() < 768) {
            $("body").removeClass("open_chat_mob")
        }
    })
}

function private_() {
    var b = $(".cd-modal");
    $(".footer__column:nth-child(2)").find("a").click(function (c) {
        $("body").addClass("nooverflow");
        c.preventDefault();
        if ($(this).index() == 0) {
            b.eq(0).addClass("modal-is-visible")
        } else {
            if ($(this).index() == 1) {
                b.eq(1).addClass("modal-is-visible")
            }
        }
    });
    $(".close-privacy").click(function (c) {
        c.preventDefault();
        $("body").removeClass("nooverflow");
        b.removeClass("modal-is-visible")
    })
}

function top_menu_active() {
    var e, d = $(".head li"), g = d.outerHeight() + 150, c = d.find("a"), b = c.map(function () {
        var h = $($(this).attr("href"));
        if (h.length) {
            return h
        }
    });
    c.click(function (k) {
        var h = $(this).attr("href"), i = h === "#" ? 0 : $(h).offset().top - g + 1;
        $("html, body").stop().animate({scrollTop: i}, 300);
        k.preventDefault();
        if ($(window).width() < 1025) {
            setTimeout(function () {
                $(".mobile_nav").removeClass("open_menu");
                $("body").removeClass("bg_blur")
            }, 300)
        }
    });
    $(".back_call a,.button_callback a").click(function (k) {
        var h = $(this).attr("href"), i = h === "#" ? 0 : $(h).offset().top - g + 1;
        $("html, body").stop().animate({scrollTop: i}, 300);
        k.preventDefault();
        if ($(window).width() < 1025) {
            setTimeout(function () {
                $(".mobile_nav").removeClass("open_menu");
                $("body").removeClass("bg_blur")
            }, 300)
        }
    });
    $(window).scroll(function () {
        var h = $(this).scrollTop() + g;
        var i = b.map(function () {
            if ($(this).offset().top < h) {
                return this
            }
        });
        i = i[i.length - 1];
        var k = i && i.length ? i[0].id : "";
        if (e !== k) {
            e = k;
            c.parent().removeClass("active").end().filter("[href='#" + k + "']").parent().addClass("active")
        }
    })
}

function slider_top() {
    var b = $(".slider_top"), d = 0;
    $(".nav_slider_top").find(".reviews-dots").html("");

    function c() {
        dots = "";
        var g = $(".slider_top_img img");
        for (var e = 0; e < $(".slider_top_img img").length; e++) {
            dots += e == 0 ? '<div class="reviews-dot active" data-id="' + e + '"></div>' : '<div class="reviews-dot" data-id="' + e + '"></div>'
        }
        if (g.length > 2) {
            g.eq(g.length - 1).addClass("prev");
            g.eq(1).addClass("next")
        }
        $(".nav_slider_top").find(".reviews-dots").append(dots);
        $(".nav_slider_top .nav-control").click(function () {
            $(this).hasClass("nav-control_prev") ? (d -= 1, d < 0 ? d = g.length - 1 : "") : (d += 1, d == g.length ? d = 0 : "");
            g.removeClass("active next prev");
            $(".reviews-dot").removeClass("active");
            g.eq(d).addClass("active");
            if (g.length > 2) {
                if ((j = d + 1 ? d == g.length - 1 : "0") == false) {
                    f = d + 1
                } else {
                    f = 0
                }
                g.eq(f).addClass("next");
                g.eq(d - 1).addClass("prev")
            }
            $(".reviews-dot").eq(d).addClass("active")
        })
    }

    c()
}

function f3() {
    $(".gallery-area .gallery_block").not(".gallery_coca").click(function () {
        $(".pop_up").addClass("open");
        $("body").addClass("hover_full");
        $(".slider_popUp").html("");
        $(".slider_popUp").append('<div class="popUp_c"></div>');
        $(".slider_popUp .popUp_c").append($(".gallery_block").clone());
        id = $(this).data("id");
        data = $(".slider_popUp .gallery_block");
        for (var b = 0; b < $(".slider_popUp .gallery_block").length; b++) {
            if (id == data.eq(b).data("id")) {
                data.eq(b).addClass("active")
            }
        }
    });
    $(".pop_up .close").click(function () {
        $(".pop_up").removeClass("open");
        $("body").removeClass("hover_full");
        $(".slider_popUp").html(" ")
    });
    $(".about-img").click(function () {
        $(".pop_up").addClass("open");
        $("body").addClass("hover_full");
        $(".slider_popUp").append('<div id="videoframe" class="video" data-video="' + $(this).data("video") + '"></div');
        var b = document.createElement("script");
        b.src = "https://www.youtube.com/iframe_api";
        var g = document.getElementsByTagName("script")[0];
        g.parentNode.insertBefore(b, g);
        var e = [];
        var d = $(".video");
        c();

        function c() {
            for (var h = 0; h < d.length; h++) {
                d[h].id = "videoframe" + h;
                video = d[h].getAttribute("data-video");
                e["videoframe" + h] = new YT.Player(d[h], {
                    height: "100%",
                    width: "640",
                    videoId: d[h].getAttribute("data-video"),
                })
            }
        }
    })
}

function event_cola() {
    var d, k, c, b = [], g = $(".easters").html(), e = $(".pop_event"),
        i = document.cookie.replace(/(?:(?:^|.*;\s*)ev_fs_cr\s*\=\s*([^;]*).*$)|^.*$/, "$1"),
        m = document.cookie.replace(/(?:(?:^|.*;\s*)ev_fs_v\s*\=\s*([^;]*).*$)|^.*$/, "$1"),
        l = document.cookie.replace(/(?:(?:^|.*;\s*)ev_fs_e\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    $(".easters").remove();
    if ($(window).width() < 1025) {
        $(".gallery_coca").removeClass("gallery_coca");
        $(".event_coka_v").removeClass("event_coka_v");
        $(".event_coka_e").removeClass("event_coka_e")
    }
    if (i == "true") {
        b.push("one_e");
        d = true;
        $(".cola_event").find(".ev_fs_cr").css("display", "block");
        $(".gallery_coca").removeClass("gallery_coca")
    }
    if (m == "true") {
        b.push("two_e");
        k = true;
        $(".cola_event").find(".ev_fs_v").css("display", "block");
        $(".event_coka_v").removeClass("event_coka_v")
    }
    if (l == "true") {
        b.push("three_e");
        c = true;
        $(".cola_event").find(".ev_fs_e").css("display", "block");
        $(".event_coka_e").removeClass("event_coka_e")
    }

    if (l == "true" && m == "true" && i == "true") {
        $('.event_info').addClass('app_ev')
        $('.event_info').find('img').remove()
        $('.event_info').html(g)
        $('.event_info p').eq(2).remove()
    }
    $(".gallery_coca").on("click", function () {
        $(this).removeClass("gallery_coca");
        f3();
        if (d != true) {
            b.push("one_e");
            h(easters[0], b.length)
        }
        d = true;
        $(".cola_event").find(".ev_fs_cr").css("display", "block");
        document.cookie = "ev_fs_cr=true;expires=604800"
    });
    $(".event_coka_v").on("click", function () {
        $(this).removeClass("event_coka_v");
        if (k != true) {
            b.push("two_e");
            h(easters[1], b.length)
        }
        k = true;
        $(".cola_event").find(".ev_fs_v").css("display", "block");
        document.cookie = "ev_fs_v=true;expires=604800"
    });
    $(".event_coka_e").on("click", function () {
        $(this).removeClass("event_coka_e");
        if (c != true) {
            b.push("three_e");
            h(easters[2], b.length)
        }
        c = true;
        $(".cola_event").find(".ev_fs_e").css("display", "block");
        document.cookie = "ev_fs_e=true;expires=604800"
    });

    function h(p, o) {
        if (o < 3) {
            if (d != true || k != true || c != true) {
                e.addClass("open");
                $("body").addClass("hover_full");
                console.log(p, o);
                e.find("h3 span").text(p);
                e.find(".cool_ev_fs p span").text(o);
                for (var n = 0; n < o; n++) {
                    e.find(".hr_fs span").eq(n).addClass("active")
                }
            }
        } else {
            $("body").addClass("hover_full");
            $("body").append('<div class="pop_event open fin__event">\n    <img src="" alt="">\n' + g + '\n    <div class="close">\n        <p>Круто!</p>\n      </div>\n</div>');
            $(".fin__event").find(".close").click(function () {
                e.removeClass("open");
                $("body").removeClass("hover_full");
                $(".fin__event").remove()
            })
            $('.event_info').addClass('app_ev')
            $('.event_info').find('img').remove()
            $('.event_info').html(g)
            $('.event_info p').eq(2).remove()

        }
        e.find(".close").click(function () {
            e.removeClass("open");
            $("body").removeClass("hover_full")
        })
    }
}

function slider_galery() {
    var l = document.createElement("script");
    l.src = "https://www.youtube.com/iframe_api";
    var d = document.getElementsByTagName("script")[0];
    d.parentNode.insertBefore(l, d);
    var i = [];
    var g = $(".video_galegy");
    onYouTubeIframeAPIReady = function () {
        for (var m = 0; m < g.length; m++) {
            g[m].id = "video_galegy" + m;
            var n = g[m].getAttribute("data-video");
            i["video_galegy" + m] = new YT.Player(g[m], {
                height: "100%",
                width: "640",
                videoId: g[m].getAttribute("data-video"),
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
    };
    var e = [];
    e.forEach.call($(".gallery_slider").find(".gallery_block"), function (m) {
        e.push(m)
    });
    if (window.matchMedia("(min-width: 1026px)").matches) {
        for (var b = 0; b < e.length; b += 3) {
            var h = $("<div></div>");
            h.addClass("conteiner_slider");
            for (var c = 0; c < 3; c++) {
                if (b + c < e.length) {
                    h.append(e[b + c])
                }
            }
            $(".gallery_slider").append(h)
        }
    } else {
        if (window.matchMedia("(max-width: 1025px)").matches) {
            for (var b = 0; b < e.length; b += 1) {
                var k = document.createElement("div");
                k.classList.add("conteiner_slider");
                for (var c = 0; c < 1; c++) {
                    if (b + c < e.length) {
                        k.append(e[b + c])
                    }
                }
                $(".gallery_slider").append(k)
            }
        }
    }
    $(".conteiner_slider").eq(0).addClass("active");
    curr_obj = 0;
    $(".gallery-area .nav-control").click(function () {
        nav_container = $(".conteiner_slider");
        $(this).hasClass("nav-control_prev") ? (curr_obj -= 1, curr_obj < 0 ? curr_obj = nav_container.length - 1 : "") : (curr_obj += 1, curr_obj == nav_container.length ? curr_obj = 0 : "");
        nav_container.removeClass("active");
        nav_container.eq(curr_obj).addClass("active")
    });
    if (window.matchMedia("(min-width: 1026px)").matches && $(".conteiner_slider").length < 2) {
        $(".gallery_title .slider_nav").css("display", "none")
    }
}

function form() {
    var c = 5 * 1024 * 1024;
    var k = {};
    var e = $(".form_sec5"), h;
    var i = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
    k[""];
    $(".file-don").click(function () {
        $("#addFile").trigger("click")
    });
    $("#addFile").on("change", function () {
        var b = this.files;
        for (var d = 0; d < b.length; d++) {
            var l = b[d];
            if (l.type != "application/pdf") {
                alert("Файл має бути в форматі pdf");
                continue
            }
            if (l.size > c) {
                alert("Розмір файлу не повинен перевищувати 5 Мб");
                continue
            }
            g(b[d])
        }
        this.value = ""
    });


    $('form').find('input').on('keyup', function () {
        if (i.test($("#email").val()) == true) {
            e.find(".email").removeClass("error")
        }else {
            e.find(".email").addClass("error")
        }
        if ($("#name").val().length >= 3) {
            e.find(".name").removeClass("error")
        }else {
            e.find(".name").addClass("error")
        }
        if ($("#institution").val().length >= 3) {
            e.find("#institution").parent().removeClass("error")
        }else {
            e.find("#institution").parent().addClass("error")
        }
        if ($("#phone").val().length == 17) {
            e.find(".tell").removeClass("error")
        }else {
            e.find(".tell").addClass("error")
        }
        if ($("#position").val().length >= 3) {
            e.find("#position").parent().removeClass("error")
        }else {
            e.find("#position").parent().addClass("error")
        }
        // if ($("#people").val() < Math.min(10) || $("#people").val() > Math.min(37) || $("#people").val() == "") {
        //     e.find("#people").parent().addClass("error")
        // }
        if ( $("#people").val() != "") {
            e.find("#people").parent().removeClass("error")
        } else {
            e.find("#people").parent().addClass("error")
        }
    })




    function g(b) {
        var d = new FileReader();
        d.addEventListener("load", function (l) {
            k[b.name] = b
        });
        d.readAsDataURL(b)
    }


    $("#checkBox").change(function () {
        h, cd_modal = $(".cd-modal_check");
        if ($(this).is(":checked")) {
            if (h == undefined) {
                $("body").addClass("nooverflow");
                cd_modal.addClass("modal-is-visible");
                cd_modal.find(".close-privacy").click(function (b) {
                    b.preventDefault();
                    $("body").removeClass("nooverflow");
                    cd_modal.removeClass("modal-is-visible");
                    $("#checkBox").prop('checked', false)
                })
                cd_modal.find(".cd-modal_check_ok").click(function (b) {
                    b.preventDefault();
                    h = true;
                    $(".send").addClass("verification");
                    $("body").removeClass("nooverflow");
                    cd_modal.removeClass("modal-is-visible");
                })
                cd_modal.find(".cd-modal_check_text").click(function (b) {
                    b.preventDefault();
                    $("body").removeClass("nooverflow");
                    cd_modal.removeClass("modal-is-visible");
                    $("#checkBox").prop('checked', false)
                })
                cd_modal.find(".cd-modal_check_text_link").click(function (b) {
                    b.preventDefault();
                    $('.cd-modal').eq(1).addClass("modal-is-visible");
                })
                $('.cd-modal').find(".close-privacy").click(function () {
                    $("body").addClass("nooverflow");
                })
            } else {
                $(".send").addClass("verification")
            }
        } else {
            $(".send").removeClass("verification")
        }
    });


    $(".form_sec5 form").submit(function (d) {
        d.preventDefault();
        var m = new FormData(this);
        for (var b in k) {
            m.append("file", k[b])
        }
        m.append("trip-month", data_mone);
        m.append("trip-day", data_day);
        console.log(k, m);
        e.find("input").parent().removeClass("error");
        if ($("#name").val().length >= 3 && i.test($("#email").val()) == true && $("#institution").val().length >= 3 && $("#phone").val().length == 17 && $("#position").val().length >= 3 && $("#people").val() != "") {
            $.ajax({
                url: "add-excursions",
                type: "POST",
                mimeType: "multipart/form-data",
                headers: {"X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content")},
                data: m,
                processData: false,
                contentType: false,
                cache: false,
                dataType: "json",
                success: function (l) {
                    console.log(l, 6666);
                    if (l.status == "Екскурсію збережено.") {
                        $(".form_sec5 form").find("input").val("");
                        $("body").addClass("hover_full");
                        $(".pop_blag").addClass("open");
                        $(".pop_blag .close").click(function () {
                            $("body").removeClass("hover_full");
                            $(".pop_blag").removeClass("open")
                        })
                    }
                    if (l.errors != undefined) {
                        $("body").addClass("hover_full").append('<div class="pop_blag open error_p">\n    <img src="https://visitcoke.com.ua/assets/img/icon/error_icon.svg" alt="">\n    ' + l.errors + '\n    <div class="close">\n        <p>ок</p>\n    </div>\n</div>');
                        $(".pop_blag .close").click(function () {
                            $("body").removeClass("hover_full");
                            $(".pop_blag").removeClass("open");
                            $(".error_p").remove()
                        })
                    }
                },
                error: function (p, l, n) {
                    var o = p.responseText;
                    o = JSON.parse(o);
                    if (o.errors.email != undefined) {
                        e.find(".email").addClass("error")
                    } else {
                        e.find(".email").removeClass("error")
                    }
                    if (o.errors.institution != undefined) {
                        e.find("#institution").parent().addClass("error")
                    } else {
                        e.find("#institution").parent().removeClass("error")
                    }
                    if (o.errors.name != undefined) {
                        e.find(".name").addClass("error")
                    } else {
                        e.find(".name").parent().removeClass("error")
                    }
                    if (o.errors.people != undefined) {
                        e.find(".custom-select_people").addClass("error")
                    } else {
                        e.find(".custom-select_people").removeClass("error")
                    }
                    if (o.errors.phone != undefined) {
                        e.find(".tell").addClass("error")
                    } else {
                        e.find(".tell").removeClass("error")
                    }
                    if (o.errors.position != undefined) {
                        e.find("input#position").parent().addClass("error")
                    } else {
                        e.find("input#position").parent().removeClass("error")
                    }
                }
            })
        } else {
            if (i.test($("#email").val()) == false) {
                e.find(".email").addClass("error")
            }
            if ($("#name").val().length < 3) {
                e.find(".name").addClass("error")
            }
            if ($("#institution").val().length < 3) {
                e.find("#institution").parent().addClass("error")
            }
            if ($("#phone").val().length != 17) {
                e.find(".tell").addClass("error")
            }
            if ($("#position").val().length < 3) {
                e.find("#position").parent().addClass("error")
            }
            // if ($("#people").val() == "") {
            //     e.find("#people").parent().addClass("error")
            // }
            if ( $("#people").val() == "") {
                e.find("#people").parent().addClass("error")
            }
        }
    })
}
function proverka(input) {
    var value = input.value;
    var rep = /[\.;":!@#$%^&*№?'a-zA-Zа-яА-Я]/;
    if (rep.test(value)) {
        value = value.replace(rep, '');
        input.value = value;
    }
}
function proverka_text(input) {
    var value = input.value;
    var rep = /[-\;":!@#$%^&*№=+/_?>,'0-9]/;
    if (rep.test(value)) {
        value = value.replace(rep, '');
        input.value = value;
    }
}
function angul() {
    $.ajax({
        url: "get-calendar",
        type: "POST",
        headers: {"X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content")},
        processData: false,
        contentType: false,
        cache: false,
        success: function (d) {
            var c = 0;
            mondays_ = [];
            mondays = [];
            for (ooo in Object.keys(d.excursions)) {
                mondays_.push({foo: "bar", date: Object.keys(d.excursions)[ooo]})
            }
            for (ooo in mondays_) {
                c++
            }
            for (var b = 0; b < c; b++) {
                mondays.push(mondays_[b])
            }
            angular_js();
            angular_tr();
            e(d,d.first_available_day)
            angular.module("app", ["flexcalendar", "pascalprecht.translate"]).controller("MainController", ["$scope", function (h) {
                var g = new Date(), n = new Date();
                n.setDate(g.getDate());
                var m = n.getMonth() + 1, i = n.getDate() + 1, l = n.getFullYear(), k = l + "/" + m + "/" + i;
                var o = d.first_available_day.split("-");
                data_day = o[2];
                data_year = o[0];
                data_mone = o[1];

                h.options = {
                    defaultDate: d.first_available_day,
                    disabledDates: d.disabled,
                    minDate: "" + k + "",
                    maxDate: d.max_day,
                    dayNamesLength: 2,
                    mondayIsFirstDay: true,
                    eventClick: function (p) {
                        $(".calendar_w").removeClass("open");
                        data_day = p.day;
                        data_year = p.year;
                        data_mone = p._month;
                        dey_op = data_year  +"-" + data_mone + "-" + data_day ;
                        e(d,dey_op)
                    },
                    dateClick: function (p) {
                        $(".calendar_w").removeClass("open");
                        data_day = p.day;
                        data_mone = p._month;
                        data_year = p.year;
                        dey_op = data_year  +"-" + data_mone + "-" + data_day ;
                        e(d,dey_op)
                    },
                    changeMonth: function (q, p) {
                    },
                };
                h.events = mondays_
            }]);

            // function e() {
            //     a = "" + data_year + "-" + data_mone + "-" + data_day + "";
            //     sel = $("#interval").find("option");
            //     sel.removeAttr("disabled");
            //     if (d.excursions[a] != undefined) {
            //         cache = d.excursions[a];
            //         for (var h = 0; h < sel.length; h++) {
            //             for (var g = 0; g < cache.length; ++g) {
            //                 if (sel.eq(h).val() == cache[g]) {
            //                     sel.eq(h).prop("disabled", true)
            //                 }
            //             }
            //         }
            //     }
            //     $(".custom-select").not($("select.custom-select")).remove();
            //     select_();
            //     return
            // }

            !function () {
                function h() {
                    var k = '<div class="flex-calendar"><div class="month"><div class="arrow {{arrowPrevClass}}" ng-click="prevMonth()"></div><div class="label">{{ selectedMonth | translate }} <span>{{selectedYear}}</span></div><div class="arrow {{arrowNextClass}}" ng-click="nextMonth()"></div></div><div class="week"><div class="day" ng-repeat="day in weekDays(options.dayNamesLength) track by $index">{{ day }}</div></div><div class="days" ng-repeat="week in weeks"><div class="day"ng-repeat="day in week track by $index"ng-class="{selected: isDefaultDate(day), event: day.event[0], disabled: day.disabled, out: !day}"ng-click="onClick(day, $index, $event)"><div class="number">{{day.day}}</div></div></div></div>',
                        i = {restrict: "E", scope: {options: "=?", events: "=?"}, template: k, controller: g};
                    return i
                }

                function g(O, z) {
                    function R() {
                        O.mappedDisabledDates = O.options.disabledDates.map(function (i) {
                            return new Date(i)
                        })
                    }

                    function G() {
                        O.mappedEvents = O.events.map(function (i) {
                            return i.date = new Date(i.date), i
                        })
                    }

                    function F(l, i, m) {
                        l && !l.disabled && (O.options.defaultDate = l.date, 0 != l.event.length ? O.options.eventClick(l, m) : O.options.dateClick(l, m))
                    }

                    function A(i) {
                        i && O.mappedEvents && (i.event = [], O.mappedEvents.forEach(function (l) {
                            i.date.getFullYear() === l.date.getFullYear() && i.date.getMonth() === l.date.getMonth() && i.date.getDate() === l.date.getDate() && i.event.push(l)
                        }))
                    }

                    function J(l) {
                        if (!O.options.minDate && !O.options.maxDate) {
                            return !0
                        }
                        var i = l.date;
                        return O.options.minDate && i < O.options.minDate ? !1 : O.options.maxDate && i > O.options.maxDate ? !1 : !0
                    }

                    function P(l) {
                        if (!O.mappedDisabledDates) {
                            return !1
                        }
                        for (var i = 0; i < O.mappedDisabledDates.length; i++) {
                            if (l.year === O.mappedDisabledDates[i].getFullYear() && l.month === O.mappedDisabledDates[i].getMonth() && l.day === O.mappedDisabledDates[i].getDate()) {
                                return !0
                            }
                        }
                    }

                    function I() {
                        var l = null, i = null;
                        if (!O.options.minDate) {
                            return !0
                        }
                        var m = k.indexOf(O.selectedMonth);
                        return 0 === m ? (l = O.selectedYear - 1, i = 11) : (l = O.selectedYear, i = m - 1), l < O.options.minDate.getFullYear() ? !1 : l === O.options.minDate.getFullYear() && i < O.options.minDate.getMonth() ? !1 : !0
                    }

                    function C() {
                        var l = null, i = null;
                        if (!O.options.maxDate) {
                            return !0
                        }
                        var m = k.indexOf(O.selectedMonth);
                        return 11 === m ? (l = O.selectedYear + 1, i = 0) : (l = O.selectedYear, i = m + 1), l > O.options.maxDate.getFullYear() ? !1 : l === O.options.maxDate.getFullYear() && i > O.options.maxDate.getMonth() ? !1 : !0
                    }

                    function Q() {
                        O.weeks = [];
                        for (var p = null, m = new Date(O.selectedYear, k.indexOf(O.selectedMonth) + 1, 0).getDate(), s = 1; m + 1 > s; s += 1) {
                            var r = new Date(O.selectedYear, k.indexOf(O.selectedMonth), s),
                                i = new Date(O.selectedYear, k.indexOf(O.selectedMonth), s).getDay();
                            O.options.mondayIsFirstDay && (i = (i + 6) % 7), p = p || [null, null, null, null, null, null, null], p[i] = {
                                year: O.selectedYear,
                                month: k.indexOf(O.selectedMonth),
                                day: s,
                                date: r,
                                _month: r.getMonth() + 1
                            }, J(p[i]) ? O.mappedEvents && A(p[i]) : p[i].disabled = !0, p[i] && P(p[i]) && (p[i].disabled = !0), (6 === i || s === m) && (O.weeks.push(p), p = void 0)
                        }
                        O.arrowPrevClass = O.allowedPrevMonth() ? "visible" : "hidden", O.arrowNextClass = O.allowedNextMonth() ? "visible" : "hidden"
                    }

                    function B() {
                        O.options._defaultDate = O.options.defaultDate ? new Date(O.options.defaultDate) : new Date, O.selectedYear = O.options._defaultDate.getFullYear(), O.selectedMonth = k[O.options._defaultDate.getMonth()], O.selectedDay = O.options._defaultDate.getDate(), Q();
                        $(".data_calendar").find("p").text("" + O.selectedMonth + " " + O.selectedDay + "")
                    }

                    function E() {
                        if (O.mappedDisabledDates && 0 !== O.mappedDisabledDates.length) {
                            for (var i = 0; i < O.mappedDisabledDates.length; i++) {
                                O.mappedDisabledDates[i] = new Date(O.mappedDisabledDates[i])
                            }
                            Q()
                        }
                    }

                    function x(i) {
                        return L.map(function (l) {
                            return H(l).slice(0, i)
                        })
                    }

                    function w(l) {
                        if (l) {
                            var i = l.year === O.options._defaultDate.getFullYear() && l.month === O.options._defaultDate.getMonth() && l.day === O.options._defaultDate.getDate();
                            return i
                        }
                    }

                    function N() {
                        if (O.allowedPrevMonth()) {
                            var l = k.indexOf(O.selectedMonth);
                            0 === l ? (O.selectedYear -= 1, O.selectedMonth = k[11]) : O.selectedMonth = k[l - 1];
                            var i = {name: O.selectedMonth, index: l - 1, _index: l + 2};
                            O.options.changeMonth(i, O.selectedYear), Q()
                        }
                    }

                    function K() {
                        if (O.allowedNextMonth()) {
                            var l = k.indexOf(O.selectedMonth);
                            11 === l ? (O.selectedYear += 1, O.selectedMonth = k[0]) : O.selectedMonth = k[l + 1];
                            var i = {name: O.selectedMonth, index: l + 1, _index: l + 2};
                            O.options.changeMonth(i, O.selectedYear), Q()
                        }
                    }

                    O.days = [], O.options = O.options || {}, O.events = O.events || [], O.options.dayNamesLength = O.options.dayNamesLength || 1, O.options.mondayIsFirstDay = O.options.mondayIsFirstDay || !1, O.onClick = F, O.allowedPrevMonth = I, O.allowedNextMonth = C, O.weekDays = x, O.isDefaultDate = w, O.prevMonth = N, O.nextMonth = K, O.arrowPrevClass = "visible", O.arrowNextClass = "visible";
                    var H = z("translate"),
                        k = ["Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"],
                        L = ["НД", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];
                    if (O.options.mondayIsFirstDay) {
                        var q = L.shift();
                        L.push(q)
                    }
                    O.options.minDate && (O.options.minDate = new Date(O.options.minDate)), O.options.maxDate && (O.options.maxDate = new Date(O.options.maxDate)), O.options.disabledDates && R(), O.events && G(), O.$watch("options.defaultDate", function () {
                        B()
                    }), O.$watch("options.disabledDates", function () {
                        R(), E()
                    }), O.$watch("events", function () {
                        G(), Q()
                    })
                }

                angular.module("flexcalendar", []).directive("flexCalendar", h), g.$inject = ["$scope", "$filter"]
            }()
        },
    })
}
function e(d,a) {
    sel = $("#interval").find("option");
    sel.removeAttr("disabled");
    if (d.excursions[a] != undefined) {
        cache = d.excursions[a];
        for (var h = 0; h < sel.length; h++) {
            for (var g = 0; g < cache.length; ++g) {
                if (sel.eq(h).val() == cache[g]) {
                    sel.eq(h).prop("disabled", true)
                }
            }
        }
    }
    $(".custom-select").not($("select.custom-select")).remove();
    select_();
    return
}
function mousedown_clider() {
    $(".participation-area").append('<div class="nav_participation"><div class="nav-control nav-control_prev"></div><div class="nav-control nav-control_next"></div></div>');
    var n = $(".nav_participation"), q = $(".participation_umovi"), c = $(".block_par").innerWidth(), p = window,
        m = document, l = m.documentElement, i = m.getElementsByTagName("body")[0],
        o = p.innerWidth || l.clientWidth || i.clientWidth;
    q.css({left: "0px"});
    var r = 0;
    var h = true;
    if ($(window).width() > 1025) {
        vwValue = parseFloat(65 / 1920) * 100;
        vwValue_ = (o * vwValue) / 100;
        yy = q.width() - ($(".participation-block").width() + vwValue_)
    } else {
        yy = (q.width() + 22) - $(window).width()
    }
    if ($(window).width() < 1025) {
        var b = document.getElementById("participation_umovi");
        s(b, function (d) {
        });

        function s(g) {
            var k = g, e, d = 50;
            k.addEventListener("touchstart", function (u) {
                var t = u.changedTouches[0];
                e = t.pageX;
                u.preventDefault()
            }, false);
            k.addEventListener("touchend", function (u) {
                var t = u.changedTouches[0];
                distX = t.pageX - e;
                if (Math.abs(distX) >= d) {
                    if (distX < 0) {
                        console.log(r, yy, r + (distX * -1));
                        if (r + c < yy) {
                            r += c;
                            q.css({left: -r, transition: ".5s"})
                        } else {
                            r = yy;
                            q.css({left: -r, transition: ".5s"})
                        }
                    } else {
                        if (distX > 0) {
                            if (r - c > 0) {
                                r += -c;
                                q.css({left: -r, transition: ".5s"})
                            } else {
                                r = 0;
                                q.css({left: "0px", transition: ".5s"})
                            }
                        }
                    }
                }
            }, false)
        }
    }
    n.find(".nav-control").click(function () {
        if ($(this).hasClass("nav-control_next")) {
            if (r + c > yy) {
                r = yy
            } else {
                if (r + c <= yy) {
                    r += c
                }
            }
        } else {
            if ($(this).hasClass("nav-control_prev")) {
                if (r - c < 0) {
                    r = 0
                } else {
                    if (r - c >= 0) {
                        r -= c
                    }
                }
            }
        }
        q.css({left: -r, transition: ".5s"})
    })
}

function initMap() {
    var m, n, d, c;
    m = 50.611271;
    n = 30.87207;
    d = 50.611271;
    c = 30.87207;
    var h = [{featureType: "all", elementType: "geometry.fill", stylers: [{weight: "2.00"}]}, {
            featureType: "all",
            elementType: "geometry.stroke",
            stylers: [{color: "#9c9c9c"}]
        }, {
            featureType: "all",
            elementType: "labels.text",
            stylers: [{visibility: "on"}]
        }, {
            featureType: "administrative.locality",
            elementType: "labels.text.fill",
            stylers: [{color: "#de4540"}]
        }, {
            featureType: "administrative.locality",
            elementType: "labels.text.stroke",
            stylers: [{color: "#de4540"}, {visibility: "off"}]
        }, {featureType: "landscape", elementType: "all", stylers: [{color: "#f2f2f2"}]}, {
            featureType: "landscape",
            elementType: "geometry.fill",
            stylers: [{color: "#ffffff"}]
        }, {
            featureType: "landscape.man_made",
            elementType: "geometry.fill",
            stylers: [{color: "#ffffff"}]
        }, {featureType: "poi", elementType: "all", stylers: [{visibility: "off"}]}, {
            featureType: "road",
            elementType: "all",
            stylers: [{saturation: -100}, {lightness: 45}]
        }, {featureType: "road", elementType: "geometry.fill", stylers: [{color: "#eeeeee"}]}, {
            featureType: "road",
            elementType: "labels.text.fill",
            stylers: [{color: "#7b7b7b"}]
        }, {
            featureType: "road",
            elementType: "labels.text.stroke",
            stylers: [{color: "#ffffff"}]
        }, {
            featureType: "road.highway",
            elementType: "all",
            stylers: [{visibility: "simplified"}]
        }, {
            featureType: "road.arterial",
            elementType: "labels.icon",
            stylers: [{visibility: "off"}]
        }, {featureType: "transit", elementType: "all", stylers: [{visibility: "off"}]}, {
            featureType: "transit",
            elementType: "geometry",
            stylers: [{visibility: "on"}]
        }, {featureType: "transit", elementType: "labels", stylers: [{visibility: "on"}]}, {
            featureType: "transit.station",
            elementType: "labels.text.fill",
            stylers: [{color: "#646464"}]
        }, {
            featureType: "water",
            elementType: "all",
            stylers: [{color: "#46bcec"}, {visibility: "on"}]
        }, {featureType: "water", elementType: "geometry.fill", stylers: [{color: "#c8d7d4"}]}, {
            featureType: "water",
            elementType: "labels.text.fill",
            stylers: [{color: "#070707"}]
        }, {featureType: "water", elementType: "labels.text.stroke", stylers: [{color: "#ffffff"}]}], o = {lat: d, lng: c},
        i = {lat: m, lng: n};
    var l = {lat: 50.611271, lng: 30.87207},
        b = new google.maps.Map(document.getElementById("map"), {center: o, zoom: 12, disableDefaultUI: true,}),
        k = {url: "assets/img/icon/marker.svg", scaledSize: new google.maps.Size(176, 144)},
        g = new google.maps.Marker({position: i, map: b, icon: k,});
    setTimeout(function () {
        $(".gm-style img[src='" + k.url + "']").addClass("markerClass")
    }, 2000)
};

function pro_musej() {
    $('.sec_about_img').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        centerPadding: true,
        // centerMode: true,
        // variableWidth: true
    });
}
$(document).ready(function () {
    event_cola();
    chat_bot();
    private_();
    top_menu_active();
    if ($(".slider_top_img img").length > 1) {
        slider_top()
    }
    f3();
    slider_galery();
    form();
    angul();
    select_();
    select_2();
    mask();
    mousedown_clider();

        pro_musej()

    $(".check_text input").change(function () {
        if ($(this).is(":checked")) {
            $(".check_text textarea").addClass("open")
        } else {
            $(".check_text textarea").removeClass("open")
        }
    });
    $("fieldset:nth-child(1) input").change(function () {
        el = $(this);
        el.each(function () {
            if (el.val().length > 0) {
                el.parent().find("label").addClass("label-stay")
            } else {
                el.parent().find("label").removeClass("label-stay")
            }
        })
    });
    $about_description = $(".about-description").height();
    $(".about-description").css({height: $about_description - 10});
    $(".seo_button").click(function () {
        $(this).parent().find(".about-description").toggleClass("full");
        if ($(this).parent().find(".about-description").hasClass("full")) {
            $(this).parent().find(".about-description").animate({height: $(".about-description")[0].scrollHeight}, 500);
            $(this).find("p").text($(this).data("off_text"))
        } else {
            $(this).find("p").text($(this).data("on_text"));
            $(this).parent().find(".about-description").animate({height: $about_description - 10}, 500)
        }
    });
    if ($(window).width() > 1024) {
        f();
        bl2 = $("main").height();
        r2 = $(".text_R").offset().top;
        r3 = $(".text_R2").offset().top;
        l1 = $(".text_L").offset().top;
        $(window).scroll(function () {
            f1()
        })
    }
    $(".data_calendar").click(function () {
        $(".custom-option").parents(".custom-select").removeClass("opened");
        $(".calendar_w").toggleClass("open");
        event.stopPropagation()
    });
    $(document).click(function (a) {
        if (!$(a.target).is(".data_calendar, .data *")) {
            $(".calendar_w").removeClass("open")
        }
        if (!$(a.target).is(".custom-options, .timer *")) {
            $(".custom-select").removeClass("opened")
        }
    })



});
if ($(window).width() < 1025) {
    $(".head").append('<div class="menu_mob"><span></span><span></span><span></span></div>');
    $("nav, .stock_cola,.back_call").wrapAll('<div class="mobile_nav"></div>');
    $(".name, .tell,.email,.pole_for,.pole_form").wrapAll('<div class="form_left"></div>');
    $(".mobile_nav").prepend('<div class="nav_top"><div class="nav_logo"></div><div class="close_nav"></div></div>');
    $("fieldset:nth-child(2) h3:nth-child(1), .bron").wrapAll('<div class="data_tp"></div>');
    $("fieldset:nth-child(2) h3:nth-child(2), .file_b").wrapAll('<div class="data_cl"></div>');
    $(".data_cl, .data_tp").wrapAll('<div class="tp"></div>');
    $(".nav_logo").append($(".logo img").clone(true, true));
    $(".close_nav").click(function () {
        $(".mobile_nav").removeClass("open_menu");
        $("body").removeClass("bg_blur")
    });
    $(".menu_mob").click(function () {
        $("body").addClass("bg_blur");
        $(".mobile_nav").addClass("open_menu")
    })
}
$(window).on("load", function () {
    $preloader = $("#canvas-container");
    setTimeout(function () {
        $("body").removeClass("is_load");
        $preloader.delay(100).fadeOut("slow");
        $preloader.find(".canvas_load").animate({height: "10vh"}, "slow")
    }, 700);
    setTimeout(function () {
        $("#canvas-container").remove()
    }, 1100)
    crm_img = []
    crm_img.forEach.call(document.querySelectorAll("img[data-src]"), function (a) {
        a.setAttribute("src", a.getAttribute("data-src"));
        a.onload = function () {
            a.removeAttribute("data-src");


        }
    });

});



script_n = [];
script_n.forEach.call(document.querySelectorAll("script[data-src]"), function (a) {
    a.setAttribute("src", a.getAttribute("data-src"));
    a.onload = function () {
        a.removeAttribute("data-src")
    }
});