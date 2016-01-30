//     Zepto.js
//     (c) 2010-2015 Thomas Fuchs
//     Zepto.js may be freely distributed under the MIT license.

/*!art-template - Template Engine | http://aui.github.com/artTemplate/*/

var Zepto = function() {
    function e(e) {
        return null == e ? String(e) : J[K.call(e)] || "object"
    }

    function t(t) {
        return "function" == e(t)
    }

    function n(e) {
        return null != e && e == e.window
    }

    function r(e) {
        return null != e && e.nodeType == e.DOCUMENT_NODE
    }

    function i(t) {
        return "object" == e(t)
    }

    function s(e) {
        return i(e) && !n(e) && Object.getPrototypeOf(e) == Object.prototype
    }

    function o(e) {
        return "number" == typeof e.length
    }

    function u(e) {
        return O.call(e, function(e) {
            return null != e
        })
    }

    function a(e) {
        return e.length > 0 ? T.fn.concat.apply([], e) : e
    }

    function f(e) {
        return e.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
    }

    function l(e) {
        return e in P ? P[e] : P[e] = new RegExp("(^|\\s)" + e + "(\\s|$)")
    }

    function c(e, t) {
        return "number" != typeof t || H[f(e)] ? t : t + "px"
    }

    function h(e) {
        var t, n;
        return D[e] || (t = _.createElement(e),
                _.body.appendChild(t),
                n = getComputedStyle(t, "").getPropertyValue("display"),
                t.parentNode.removeChild(t),
                "none" == n && (n = "block"),
                D[e] = n),
            D[e]
    }

    function p(e) {
        return "children" in e ? M.call(e.children) : T.map(e.childNodes, function(e) {
            return 1 == e.nodeType ? e : void 0
        })
    }

    function d(e, t) {
        var n, r = e ? e.length : 0;
        for (n = 0; r > n; n++)
            this[n] = e[n];
        this.length = r,
            this.selector = t || ""
    }

    function v(e, t, n) {
        for (x in t)
            n && (s(t[x]) || Z(t[x])) ? (s(t[x]) && !s(e[x]) && (e[x] = {}),
                Z(t[x]) && !Z(e[x]) && (e[x] = []),
                v(e[x], t[x], n)) : t[x] !== S && (e[x] = t[x])
    }

    function m(e, t) {
        return null == t ? T(e) : T(e).filter(t)
    }

    function g(e, n, r, i) {
        return t(n) ? n.call(e, r, i) : n
    }

    function y(e, t, n) {
        null == n ? e.removeAttribute(t) : e.setAttribute(t, n)
    }

    function b(e, t) {
        var n = e.className || "",
            r = n && n.baseVal !== S;
        return t === S ? r ? n.baseVal : n : void(r ? n.baseVal = t : e.className = t)
    }

    function w(e) {
        try {
            return e ? "true" == e || ("false" == e ? !1 : "null" == e ? null : +e + "" == e ? +e : /^[\[\{]/.test(e) ? T.parseJSON(e) : e) : e
        } catch (t) {
            return e
        }
    }

    function E(e, t) {
        t(e);
        for (var n = 0, r = e.childNodes.length; r > n; n++)
            E(e.childNodes[n], t)
    }
    var S, x, T, N, C, k, L = [],
        A = L.concat,
        O = L.filter,
        M = L.slice,
        _ = window.document,
        D = {},
        P = {},
        H = {
            "column-count": 1,
            columns: 1,
            "font-weight": 1,
            "line-height": 1,
            opacity: 1,
            "z-index": 1,
            zoom: 1
        },
        B = /^\s*<(\w+|!)[^>]*>/,
        j = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        F = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        I = /^(?:body|html)$/i,
        q = /([A-Z])/g,
        R = ["val", "css", "html", "text", "data", "width", "height", "offset"],
        U = ["after", "prepend", "before", "append"],
        z = _.createElement("table"),
        W = _.createElement("tr"),
        X = {
            tr: _.createElement("tbody"),
            tbody: z,
            thead: z,
            tfoot: z,
            td: W,
            th: W,
            "*": _.createElement("div")
        },
        V = /complete|loaded|interactive/,
        $ = /^[\w-]*$/,
        J = {},
        K = J.toString,
        Q = {},
        G = _.createElement("div"),
        Y = {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        Z = Array.isArray || function(e) {
            return e instanceof Array
        };
    return Q.matches = function(e, t) {
            if (!t || !e || 1 !== e.nodeType)
                return !1;
            var n = e.webkitMatchesSelector || e.mozMatchesSelector || e.oMatchesSelector || e.matchesSelector;
            if (n)
                return n.call(e, t);
            var r, i = e.parentNode,
                s = !i;
            return s && (i = G).appendChild(e),
                r = ~Q.qsa(i, t).indexOf(e),
                s && G.removeChild(e),
                r
        },
        C = function(e) {
            return e.replace(/-+(.)?/g, function(e, t) {
                return t ? t.toUpperCase() : ""
            })
        },
        k = function(e) {
            return O.call(e, function(t, n) {
                return e.indexOf(t) == n
            })
        },
        Q.fragment = function(e, t, n) {
            var r, i, o;
            return j.test(e) && (r = T(_.createElement(RegExp.$1))),
                r || (e.replace && (e = e.replace(F, "<$1></$2>")),
                    t === S && (t = B.test(e) && RegExp.$1),
                    t in X || (t = "*"),
                    o = X[t],
                    o.innerHTML = "" + e,
                    r = T.each(M.call(o.childNodes), function() {
                        o.removeChild(this)
                    })),
                s(n) && (i = T(r),
                    T.each(n, function(e, t) {
                        R.indexOf(e) > -1 ? i[e](t) : i.attr(e, t)
                    })),
                r
        },
        Q.Z = function(e, t) {
            return new d(e, t)
        },
        Q.isZ = function(e) {
            return e instanceof Q.Z
        },
        Q.init = function(e, n) {
            var r;
            if (!e)
                return Q.Z();
            if ("string" == typeof e)
                if (e = e.trim(),
                    "<" == e[0] && B.test(e))
                    r = Q.fragment(e, RegExp.$1, n),
                    e = null;
                else {
                    if (n !== S)
                        return T(n).find(e);
                    r = Q.qsa(_, e)
                } else {
                if (t(e))
                    return T(_).ready(e);
                if (Q.isZ(e))
                    return e;
                if (Z(e))
                    r = u(e);
                else if (i(e))
                    r = [e],
                    e = null;
                else if (B.test(e))
                    r = Q.fragment(e.trim(), RegExp.$1, n),
                    e = null;
                else {
                    if (n !== S)
                        return T(n).find(e);
                    r = Q.qsa(_, e)
                }
            }
            return Q.Z(r, e)
        },
        T = function(e, t) {
            return Q.init(e, t)
        },
        T.extend = function(e) {
            var t, n = M.call(arguments, 1);
            return "boolean" == typeof e && (t = e,
                    e = n.shift()),
                n.forEach(function(n) {
                    v(e, n, t)
                }),
                e
        },
        Q.qsa = function(e, t) {
            var n, r = "#" == t[0],
                i = !r && "." == t[0],
                s = r || i ? t.slice(1) : t,
                o = $.test(s);
            return e.getElementById && o && r ? (n = e.getElementById(s)) ? [n] : [] : 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType ? [] : M.call(o && !r && e.getElementsByClassName ? i ? e.getElementsByClassName(s) : e.getElementsByTagName(t) : e.querySelectorAll(t))
        },
        T.contains = _.documentElement.contains ? function(e, t) {
            return e !== t && e.contains(t)
        } : function(e, t) {
            for (; t && (t = t.parentNode);)
                if (t === e)
                    return !0;
            return !1
        },
        T.type = e,
        T.isFunction = t,
        T.isWindow = n,
        T.isArray = Z,
        T.isPlainObject = s,
        T.isEmptyObject = function(e) {
            var t;
            for (t in e)
                return !1;
            return !0
        },
        T.inArray = function(e, t, n) {
            return L.indexOf.call(t, e, n)
        },
        T.camelCase = C,
        T.trim = function(e) {
            return null == e ? "" : String.prototype.trim.call(e)
        },
        T.uuid = 0,
        T.support = {},
        T.expr = {},
        T.noop = function() {},
        T.map = function(e, t) {
            var n, r, i, s = [];
            if (o(e))
                for (r = 0; r < e.length; r++)
                    n = t(e[r], r),
                    null != n && s.push(n);
            else
                for (i in e)
                    n = t(e[i], i),
                    null != n && s.push(n);
            return a(s)
        },
        T.each = function(e, t) {
            var n, r;
            if (o(e)) {
                for (n = 0; n < e.length; n++)
                    if (t.call(e[n], n, e[n]) === !1)
                        return e
            } else
                for (r in e)
                    if (t.call(e[r], r, e[r]) === !1)
                        return e;
            return e
        },
        T.grep = function(e, t) {
            return O.call(e, t)
        },
        window.JSON && (T.parseJSON = JSON.parse),
        T.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
            J["[object " + t + "]"] = t.toLowerCase()
        }),
        T.fn = {
            constructor: Q.Z,
            length: 0,
            forEach: L.forEach,
            reduce: L.reduce,
            push: L.push,
            sort: L.sort,
            splice: L.splice,
            indexOf: L.indexOf,
            concat: function() {
                var e, t, n = [];
                for (e = 0; e < arguments.length; e++)
                    t = arguments[e],
                    n[e] = Q.isZ(t) ? t.toArray() : t;
                return A.apply(Q.isZ(this) ? this.toArray() : this, n)
            },
            map: function(e) {
                return T(T.map(this, function(t, n) {
                    return e.call(t, n, t)
                }))
            },
            slice: function() {
                return T(M.apply(this, arguments))
            },
            ready: function(e) {
                return V.test(_.readyState) && _.body ? e(T) : _.addEventListener("DOMContentLoaded", function() {
                        e(T)
                    }, !1),
                    this
            },
            get: function(e) {
                return e === S ? M.call(this) : this[e >= 0 ? e : e + this.length]
            },
            toArray: function() {
                return this.get()
            },
            size: function() {
                return this.length
            },
            remove: function() {
                return this.each(function() {
                    null != this.parentNode && this.parentNode.removeChild(this)
                })
            },
            each: function(e) {
                return L.every.call(this, function(t, n) {
                        return e.call(t, n, t) !== !1
                    }),
                    this
            },
            filter: function(e) {
                return t(e) ? this.not(this.not(e)) : T(O.call(this, function(t) {
                    return Q.matches(t, e)
                }))
            },
            add: function(e, t) {
                return T(k(this.concat(T(e, t))))
            },
            is: function(e) {
                return this.length > 0 && Q.matches(this[0], e)
            },
            not: function(e) {
                var n = [];
                if (t(e) && e.call !== S)
                    this.each(function(t) {
                        e.call(this, t) || n.push(this)
                    });
                else {
                    var r = "string" == typeof e ? this.filter(e) : o(e) && t(e.item) ? M.call(e) : T(e);
                    this.forEach(function(e) {
                        r.indexOf(e) < 0 && n.push(e)
                    })
                }
                return T(n)
            },
            has: function(e) {
                return this.filter(function() {
                    return i(e) ? T.contains(this, e) : T(this).find(e).size()
                })
            },
            eq: function(e) {
                return -1 === e ? this.slice(e) : this.slice(e, +e + 1)
            },
            first: function() {
                var e = this[0];
                return e && !i(e) ? e : T(e)
            },
            last: function() {
                var e = this[this.length - 1];
                return e && !i(e) ? e : T(e)
            },
            find: function(e) {
                var t, n = this;
                return t = e ? "object" == typeof e ? T(e).filter(function() {
                    var e = this;
                    return L.some.call(n, function(t) {
                        return T.contains(t, e)
                    })
                }) : 1 == this.length ? T(Q.qsa(this[0], e)) : this.map(function() {
                    return Q.qsa(this, e)
                }) : T()
            },
            closest: function(e, t) {
                var n = this[0],
                    i = !1;
                for ("object" == typeof e && (i = T(e)); n && !(i ? i.indexOf(n) >= 0 : Q.matches(n, e));)
                    n = n !== t && !r(n) && n.parentNode;
                return T(n)
            },
            parents: function(e) {
                for (var t = [], n = this; n.length > 0;)
                    n = T.map(n, function(e) {
                        return (e = e.parentNode) && !r(e) && t.indexOf(e) < 0 ? (t.push(e),
                            e) : void 0
                    });
                return m(t, e)
            },
            parent: function(e) {
                return m(k(this.pluck("parentNode")), e)
            },
            children: function(e) {
                return m(this.map(function() {
                    return p(this)
                }), e)
            },
            contents: function() {
                return this.map(function() {
                    return this.contentDocument || M.call(this.childNodes)
                })
            },
            siblings: function(e) {
                return m(this.map(function(e, t) {
                    return O.call(p(t.parentNode), function(e) {
                        return e !== t
                    })
                }), e)
            },
            empty: function() {
                return this.each(function() {
                    this.innerHTML = ""
                })
            },
            pluck: function(e) {
                return T.map(this, function(t) {
                    return t[e]
                })
            },
            show: function() {
                return this.each(function() {
                    "none" == this.style.display && (this.style.display = ""),
                        "none" == getComputedStyle(this, "").getPropertyValue("display") && (this.style.display = h(this.nodeName))
                })
            },
            replaceWith: function(e) {
                return this.before(e).remove()
            },
            wrap: function(e) {
                var n = t(e);
                if (this[0] && !n)
                    var r = T(e).get(0),
                        i = r.parentNode || this.length > 1;
                return this.each(function(t) {
                    T(this).wrapAll(n ? e.call(this, t) : i ? r.cloneNode(!0) : r)
                })
            },
            wrapAll: function(e) {
                if (this[0]) {
                    T(this[0]).before(e = T(e));
                    for (var t;
                        (t = e.children()).length;)
                        e = t.first();
                    T(e).append(this)
                }
                return this
            },
            wrapInner: function(e) {
                var n = t(e);
                return this.each(function(t) {
                    var r = T(this),
                        i = r.contents(),
                        s = n ? e.call(this, t) : e;
                    i.length ? i.wrapAll(s) : r.append(s)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                        T(this).replaceWith(T(this).children())
                    }),
                    this
            },
            clone: function() {
                return this.map(function() {
                    return this.cloneNode(!0)
                })
            },
            hide: function() {
                return this.css("display", "none")
            },
            toggle: function(e) {
                return this.each(function() {
                    var t = T(this);
                    (e === S ? "none" == t.css("display") : e) ? t.show(): t.hide()
                })
            },
            prev: function(e) {
                return T(this.pluck("previousElementSibling")).filter(e || "*")
            },
            next: function(e) {
                return T(this.pluck("nextElementSibling")).filter(e || "*")
            },
            html: function(e) {
                return 0 in arguments ? this.each(function(t) {
                    var n = this.innerHTML;
                    T(this).empty().append(g(this, e, t, n))
                }) : 0 in this ? this[0].innerHTML : null
            },
            text: function(e) {
                return 0 in arguments ? this.each(function(t) {
                    var n = g(this, e, t, this.textContent);
                    this.textContent = null == n ? "" : "" + n
                }) : 0 in this ? this[0].textContent : null
            },
            attr: function(e, t) {
                var n;
                return "string" != typeof e || 1 in arguments ? this.each(function(n) {
                    if (1 === this.nodeType)
                        if (i(e))
                            for (x in e)
                                y(this, x, e[x]);
                        else
                            y(this, e, g(this, t, n, this.getAttribute(e)))
                }) : this.length && 1 === this[0].nodeType ? !(n = this[0].getAttribute(e)) && e in this[0] ? this[0][e] : n : S
            },
            removeAttr: function(e) {
                return this.each(function() {
                    1 === this.nodeType && e.split(" ").forEach(function(e) {
                        y(this, e)
                    }, this)
                })
            },
            prop: function(e, t) {
                return e = Y[e] || e,
                    1 in arguments ? this.each(function(n) {
                        this[e] = g(this, t, n, this[e])
                    }) : this[0] && this[0][e]
            },
            data: function(e, t) {
                var n = "data-" + e.replace(q, "-$1").toLowerCase(),
                    r = 1 in arguments ? this.attr(n, t) : this.attr(n);
                return null !== r ? w(r) : S
            },
            val: function(e) {
                return 0 in arguments ? this.each(function(t) {
                    this.value = g(this, e, t, this.value)
                }) : this[0] && (this[0].multiple ? T(this[0]).find("option").filter(function() {
                    return this.selected
                }).pluck("value") : this[0].value)
            },
            offset: function(e) {
                if (e)
                    return this.each(function(t) {
                        var n = T(this),
                            r = g(this, e, t, n.offset()),
                            i = n.offsetParent().offset(),
                            s = {
                                top: r.top - i.top,
                                left: r.left - i.left
                            };
                        "static" == n.css("position") && (s.position = "relative"),
                            n.css(s)
                    });
                if (!this.length)
                    return null;
                if (!T.contains(_.documentElement, this[0]))
                    return {
                        top: 0,
                        left: 0
                    };
                var t = this[0].getBoundingClientRect();
                return {
                    left: t.left + window.pageXOffset,
                    top: t.top + window.pageYOffset,
                    width: Math.round(t.width),
                    height: Math.round(t.height)
                }
            },
            css: function(t, n) {
                if (arguments.length < 2) {
                    var r, i = this[0];
                    if (!i)
                        return;
                    if (r = getComputedStyle(i, ""),
                        "string" == typeof t)
                        return i.style[C(t)] || r.getPropertyValue(t);
                    if (Z(t)) {
                        var s = {};
                        return T.each(t, function(e, t) {
                                s[t] = i.style[C(t)] || r.getPropertyValue(t)
                            }),
                            s
                    }
                }
                var o = "";
                if ("string" == e(t))
                    n || 0 === n ? o = f(t) + ":" + c(t, n) : this.each(function() {
                        this.style.removeProperty(f(t))
                    });
                else
                    for (x in t)
                        t[x] || 0 === t[x] ? o += f(x) + ":" + c(x, t[x]) + ";" : this.each(function() {
                            this.style.removeProperty(f(x))
                        });
                return this.each(function() {
                    this.style.cssText += ";" + o
                })
            },
            index: function(e) {
                return e ? this.indexOf(T(e)[0]) : this.parent().children().indexOf(this[0])
            },
            hasClass: function(e) {
                return e ? L.some.call(this, function(e) {
                    return this.test(b(e))
                }, l(e)) : !1
            },
            addClass: function(e) {
                return e ? this.each(function(t) {
                    if ("className" in this) {
                        N = [];
                        var n = b(this),
                            r = g(this, e, t, n);
                        r.split(/\s+/g).forEach(function(e) {
                                T(this).hasClass(e) || N.push(e)
                            }, this),
                            N.length && b(this, n + (n ? " " : "") + N.join(" "))
                    }
                }) : this
            },
            removeClass: function(e) {
                return this.each(function(t) {
                    if ("className" in this) {
                        if (e === S)
                            return b(this, "");
                        N = b(this),
                            g(this, e, t, N).split(/\s+/g).forEach(function(e) {
                                N = N.replace(l(e), " ")
                            }),
                            b(this, N.trim())
                    }
                })
            },
            toggleClass: function(e, t) {
                return e ? this.each(function(n) {
                    var r = T(this),
                        i = g(this, e, n, b(this));
                    i.split(/\s+/g).forEach(function(e) {
                        (t === S ? !r.hasClass(e) : t) ? r.addClass(e): r.removeClass(e)
                    })
                }) : this
            },
            scrollTop: function(e) {
                if (this.length) {
                    var t = "scrollTop" in this[0];
                    return e === S ? t ? this[0].scrollTop : this[0].pageYOffset : this.each(t ? function() {
                        this.scrollTop = e
                    } : function() {
                        this.scrollTo(this.scrollX, e)
                    })
                }
            },
            scrollLeft: function(e) {
                if (this.length) {
                    var t = "scrollLeft" in this[0];
                    return e === S ? t ? this[0].scrollLeft : this[0].pageXOffset : this.each(t ? function() {
                        this.scrollLeft = e
                    } : function() {
                        this.scrollTo(e, this.scrollY)
                    })
                }
            },
            position: function() {
                if (this.length) {
                    var e = this[0],
                        t = this.offsetParent(),
                        n = this.offset(),
                        r = I.test(t[0].nodeName) ? {
                            top: 0,
                            left: 0
                        } : t.offset();
                    return n.top -= parseFloat(T(e).css("margin-top")) || 0,
                        n.left -= parseFloat(T(e).css("margin-left")) || 0,
                        r.top += parseFloat(T(t[0]).css("border-top-width")) || 0,
                        r.left += parseFloat(T(t[0]).css("border-left-width")) || 0, {
                            top: n.top - r.top,
                            left: n.left - r.left
                        }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var e = this.offsetParent || _.body; e && !I.test(e.nodeName) && "static" == T(e).css("position");)
                        e = e.offsetParent;
                    return e
                })
            }
        },
        T.fn.detach = T.fn.remove, ["width", "height"].forEach(function(e) {
            var t = e.replace(/./, function(e) {
                return e[0].toUpperCase()
            });
            T.fn[e] = function(i) {
                var s, o = this[0];
                return i === S ? n(o) ? o["inner" + t] : r(o) ? o.documentElement["scroll" + t] : (s = this.offset()) && s[e] : this.each(function(t) {
                    o = T(this),
                        o.css(e, g(this, i, t, o[e]()))
                })
            }
        }),
        U.forEach(function(t, n) {
            var r = n % 2;
            T.fn[t] = function() {
                    var t, i, s = T.map(arguments, function(n) {
                            return t = e(n),
                                "object" == t || "array" == t || null == n ? n : Q.fragment(n)
                        }),
                        o = this.length > 1;
                    return s.length < 1 ? this : this.each(function(e, t) {
                        i = r ? t : t.parentNode,
                            t = 0 == n ? t.nextSibling : 1 == n ? t.firstChild : 2 == n ? t : null;
                        var u = T.contains(_.documentElement, i);
                        s.forEach(function(e) {
                            if (o)
                                e = e.cloneNode(!0);
                            else if (!i)
                                return T(e).remove();
                            i.insertBefore(e, t),
                                u && E(e, function(e) {
                                    null == e.nodeName || "SCRIPT" !== e.nodeName.toUpperCase() || e.type && "text/javascript" !== e.type || e.src || window.eval.call(window, e.innerHTML)
                                })
                        })
                    })
                },
                T.fn[r ? t + "To" : "insert" + (n ? "Before" : "After")] = function(e) {
                    return T(e)[t](this),
                        this
                }
        }),
        Q.Z.prototype = d.prototype = T.fn,
        Q.uniq = k,
        Q.deserializeValue = w,
        T.zepto = Q,
        T
}();
window.Zepto = Zepto,
    void 0 === window.$ && (window.$ = Zepto),
    function(t) {
        function e(e, n, r) {
            var i = t.Event(n);
            return t(e).trigger(i, r), !i.isDefaultPrevented()
        }

        function n(t, n, r, i) {
            return t.global ? e(n || y, r, i) : void 0
        }

        function r(e) {
            e.global && 0 === t.active++ && n(e, null, "ajaxStart")
        }

        function i(e) {
            e.global && !--t.active && n(e, null, "ajaxStop")
        }

        function o(e, t) {
            var r = t.context;
            return t.beforeSend.call(r, e, t) === !1 || n(t, r, "ajaxBeforeSend", [e, t]) === !1 ? !1 : void n(t, r, "ajaxSend", [e, t])
        }

        function s(e, t, r, i) {
            var s = r.context,
                o = "success";
            r.success.call(s, e, o, t),
                i && i.resolveWith(s, [e, o, t]),
                n(r, s, "ajaxSuccess", [t, r, e]),
                u(o, t, r)
        }

        function a(e, t, r, i, s) {
            var o = i.context;
            i.error.call(o, r, t, e),
                s && s.rejectWith(o, [r, t, e]),
                n(i, o, "ajaxError", [r, i, e || t]),
                u(t, r, i)
        }

        function u(e, t, r) {
            var s = r.context;
            r.complete.call(s, t, e),
                n(r, s, "ajaxComplete", [t, r]),
                i(r)
        }

        function c() {}

        function l(e) {
            return e && (e = e.split(";", 2)[0]),
                e && (e == E ? "html" : e == j ? "json" : b.test(e) ? "script" : w.test(e) && "xml") || "text"
        }

        function f(e, t) {
            return "" == t ? e : (e + "&" + t).replace(/[&?]{1,2}/, "?")
        }

        function h(e) {
            e.processData && e.data && "string" != t.type(e.data) && (e.data = t.param(e.data, e.traditional)), !e.data || e.type && "GET" != e.type.toUpperCase() || (e.url = f(e.url, e.data),
                e.data = void 0)
        }

        function p(e, n, r, i) {
            return t.isFunction(n) && (i = r,
                    r = n,
                    n = void 0),
                t.isFunction(r) || (i = r,
                    r = void 0), {
                    url: e,
                    data: n,
                    success: r,
                    dataType: i
                }
        }

        function d(e, n, r, i) {
            var s, o = t.isArray(n),
                u = t.isPlainObject(n);
            t.each(n, function(n, f) {
                s = t.type(f),
                    i && (n = r ? i : i + "[" + (u || "object" == s || "array" == s ? n : "") + "]"), !i && o ? e.add(f.name, f.value) : "array" == s || !r && "object" == s ? d(e, f, r, n) : e.add(n, f)
            })
        }
        var m, g, v = 0,
            y = window.document,
            x = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
            b = /^(?:text|application)\/javascript/i,
            w = /^(?:text|application)\/xml/i,
            j = "application/json",
            E = "text/html",
            T = /^\s*$/,
            C = y.createElement("a");
        C.href = window.location.href,
            t.active = 0,
            t.ajaxJSONP = function(e, n) {
                if ("type" in e) {
                    var r, i, u = e.jsonpCallback,
                        f = (t.isFunction(u) ? u() : u) || "jsonp" + ++v,
                        l = y.createElement("script"),
                        c = window[f],
                        h = function(e) {
                            t(l).triggerHandler("error", e || "abort")
                        },
                        p = {
                            abort: h
                        };
                    return n && n.promise(p),
                        t(l).on("load error", function(o, u) {
                            clearTimeout(i),
                                t(l).off().remove(),
                                "error" != o.type && r ? s(r[0], p, e, n) : a(null, u || "error", p, e, n),
                                window[f] = c,
                                r && t.isFunction(c) && c(r[0]),
                                c = r = void 0
                        }),
                        o(p, e) === !1 ? (h("abort"),
                            p) : (window[f] = function() {
                                r = arguments
                            },
                            l.src = e.url.replace(/\?(.+)=\?/, "?$1=" + f),
                            y.head.appendChild(l),
                            e.timeout > 0 && (i = setTimeout(function() {
                                h("timeout")
                            }, e.timeout)),
                            p)
                }
                return t.ajax(e)
            },
            t.ajaxSettings = {
                type: "GET",
                beforeSend: c,
                success: c,
                error: c,
                complete: c,
                context: null,
                global: !0,
                xhr: function() {
                    return new window.XMLHttpRequest
                },
                accepts: {
                    script: "text/javascript, application/javascript, application/x-javascript",
                    json: j,
                    xml: "application/xml, text/xml",
                    html: E,
                    text: "text/plain"
                },
                crossDomain: !1,
                timeout: 0,
                processData: !0,
                cache: !0
            },
            t.ajax = function(e) {
                var n, i, u = t.extend({}, e || {}),
                    p = t.Deferred && t.Deferred();
                for (m in t.ajaxSettings)
                    void 0 === u[m] && (u[m] = t.ajaxSettings[m]);
                r(u),
                    u.crossDomain || (n = y.createElement("a"),
                        n.href = u.url,
                        n.href = n.href,
                        u.crossDomain = C.protocol + "//" + C.host != n.protocol + "//" + n.host),
                    u.url || (u.url = window.location.toString()), (i = u.url.indexOf("#")) > -1 && (u.url = u.url.slice(0, i)),
                    h(u);
                var d = u.dataType,
                    v = /\?.+=\?/.test(u.url);
                if (v && (d = "jsonp"),
                    u.cache !== !1 && (e && e.cache === !0 || "script" != d && "jsonp" != d) || (u.url = f(u.url, "_=" + Date.now())),
                    "jsonp" == d)
                    return v || (u.url = f(u.url, u.jsonp ? u.jsonp + "=?" : u.jsonp === !1 ? "" : "callback=?")),
                        t.ajaxJSONP(u, p);
                var x, b = u.accepts[d],
                    w = {},
                    j = function(e, t) {
                        w[e.toLowerCase()] = [e, t]
                    },
                    E = /^([\w-]+:)\/\//.test(u.url) ? RegExp.$1 : window.location.protocol,
                    N = u.xhr(),
                    S = N.setRequestHeader;
                if (p && p.promise(N),
                    u.crossDomain || j("X-Requested-With", "XMLHttpRequest"),
                    j("Accept", b || "*/*"), (b = u.mimeType || b) && (b.indexOf(",") > -1 && (b = b.split(",", 2)[0]),
                        N.overrideMimeType && N.overrideMimeType(b)), (u.contentType || u.contentType !== !1 && u.data && "GET" != u.type.toUpperCase()) && j("Content-Type", u.contentType || "application/x-www-form-urlencoded"),
                    u.headers)
                    for (g in u.headers)
                        j(g, u.headers[g]);
                if (N.setRequestHeader = j,
                    N.onreadystatechange = function() {
                        if (4 == N.readyState) {
                            N.onreadystatechange = c,
                                clearTimeout(x);
                            var e, n = !1;
                            if (N.status >= 200 && N.status < 300 || 304 == N.status || 0 == N.status && "file:" == E) {
                                d = d || l(u.mimeType || N.getResponseHeader("content-type")),
                                    e = N.responseText;
                                try {
                                    "script" == d ? (1,
                                        eval)(e) : "xml" == d ? e = N.responseXML : "json" == d && (e = T.test(e) ? null : t.parseJSON(e))
                                } catch (r) {
                                    n = r
                                }
                                n ? a(n, "parsererror", N, u, p) : s(e, N, u, p)
                            } else
                                a(N.statusText || null, N.status ? "error" : "abort", N, u, p)
                        }
                    },
                    o(N, u) === !1)
                    return N.abort(),
                        a(null, "abort", N, u, p),
                        N;
                if (u.xhrFields)
                    for (g in u.xhrFields)
                        N[g] = u.xhrFields[g];
                var O = "async" in u ? u.async : !0;
                N.open(u.type, u.url, O, u.username, u.password);
                for (g in w)
                    S.apply(N, w[g]);
                return u.timeout > 0 && (x = setTimeout(function() {
                        N.onreadystatechange = c,
                            N.abort(),
                            a(null, "timeout", N, u, p)
                    }, u.timeout)),
                    N.send(u.data ? u.data : null),
                    N
            },
            t.get = function() {
                return t.ajax(p.apply(null, arguments))
            },
            t.post = function() {
                var e = p.apply(null, arguments);
                return e.type = "POST",
                    t.ajax(e)
            },
            t.getJSON = function() {
                var e = p.apply(null, arguments);
                return e.dataType = "json",
                    t.ajax(e)
            },
            t.fn.load = function(e, n, r) {
                if (!this.length)
                    return this;
                var i, s = this,
                    o = e.split(/\s/),
                    u = p(e, n, r),
                    a = u.success;
                return o.length > 1 && (u.url = o[0],
                        i = o[1]),
                    u.success = function(e) {
                        s.html(i ? t("<div>").html(e.replace(x, "")).find(i) : e),
                            a && a.apply(s, arguments)
                    },
                    t.ajax(u),
                    this
            };
        var N = encodeURIComponent;
        t.param = function(e, n) {
            var r = [];
            return r.add = function(e, n) {
                    t.isFunction(n) && (n = n()),
                        null == n && (n = ""),
                        this.push(N(e) + "=" + N(n))
                },
                d(r, e, n),
                r.join("&").replace(/%20/g, "+")
        }
    }(Zepto),
    function(e) {
        e.Callbacks = function(n) {
            n = e.extend({}, n);
            var r, i, s, o, u, a, f = [],
                l = !n.once && [],
                c = function(e) {
                    for (r = n.memory && e,
                        i = !0,
                        a = o || 0,
                        o = 0,
                        u = f.length,
                        s = !0; f && u > a; ++a)
                        if (f[a].apply(e[0], e[1]) === !1 && n.stopOnFalse) {
                            r = !1;
                            break
                        }
                    s = !1,
                        f && (l ? l.length && c(l.shift()) : r ? f.length = 0 : h.disable())
                },
                h = {
                    add: function() {
                        if (f) {
                            var i = f.length,
                                a = function(r) {
                                    e.each(r, function(e, t) {
                                        "function" == typeof t ? n.unique && h.has(t) || f.push(t) : t && t.length && "string" != typeof t && a(t)
                                    })
                                };
                            a(arguments),
                                s ? u = f.length : r && (o = i,
                                    c(r))
                        }
                        return this
                    },
                    remove: function() {
                        return f && e.each(arguments, function(n, r) {
                                for (var i;
                                    (i = e.inArray(r, f, i)) > -1;)
                                    f.splice(i, 1),
                                    s && (u >= i && --u,
                                        a >= i && --a)
                            }),
                            this
                    },
                    has: function(n) {
                        return !!f && !!(n ? e.inArray(n, f) > -1 : f.length)
                    },
                    empty: function() {
                        return u = f.length = 0,
                            this
                    },
                    disable: function() {
                        return f = l = r = void 0,
                            this
                    },
                    disabled: function() {
                        return !f
                    },
                    lock: function() {
                        return l = void 0,
                            r || h.disable(),
                            this
                    },
                    locked: function() {
                        return !l
                    },
                    fireWith: function(e, t) {
                        return !f || i && !l || (t = t || [],
                                t = [e, t.slice ? t.slice() : t],
                                s ? l.push(t) : c(t)),
                            this
                    },
                    fire: function() {
                        return h.fireWith(this, arguments)
                    },
                    fired: function() {
                        return !!i
                    }
                };
            return h
        }
    }(Zepto),
    function(e) {
        function t(n) {
            var r = [
                    ["resolve", "done", e.Callbacks({
                        once: 1,
                        memory: 1
                    }), "resolved"],
                    ["reject", "fail", e.Callbacks({
                        once: 1,
                        memory: 1
                    }), "rejected"],
                    ["notify", "progress", e.Callbacks({
                        memory: 1
                    })]
                ],
                i = "pending",
                s = {
                    state: function() {
                        return i
                    },
                    always: function() {
                        return o.done(arguments).fail(arguments),
                            this
                    },
                    then: function() {
                        var n = arguments;
                        return t(function(t) {
                            e.each(r, function(r, i) {
                                    var u = e.isFunction(n[r]) && n[r];
                                    o[i[1]](function() {
                                        var n = u && u.apply(this, arguments);
                                        if (n && e.isFunction(n.promise))
                                            n.promise().done(t.resolve).fail(t.reject).progress(t.notify);
                                        else {
                                            var r = this === s ? t.promise() : this,
                                                o = u ? [n] : arguments;
                                            t[i[0] + "With"](r, o)
                                        }
                                    })
                                }),
                                n = null
                        }).promise()
                    },
                    promise: function(t) {
                        return null != t ? e.extend(t, s) : s
                    }
                },
                o = {};
            return e.each(r, function(e, t) {
                    var n = t[2],
                        u = t[3];
                    s[t[1]] = n.add,
                        u && n.add(function() {
                            i = u
                        }, r[1 ^ e][2].disable, r[2][2].lock),
                        o[t[0]] = function() {
                            return o[t[0] + "With"](this === o ? s : this, arguments),
                                this
                        },
                        o[t[0] + "With"] = n.fireWith
                }),
                s.promise(o),
                n && n.call(o, o),
                o
        }
        var n = Array.prototype.slice;
        e.when = function(r) {
                var i, s, o, u = n.call(arguments),
                    a = u.length,
                    f = 0,
                    l = 1 !== a || r && e.isFunction(r.promise) ? a : 0,
                    c = 1 === l ? r : t(),
                    h = function(e, t, r) {
                        return function(s) {
                            t[e] = this,
                                r[e] = arguments.length > 1 ? n.call(arguments) : s,
                                r === i ? c.notifyWith(t, r) : --l || c.resolveWith(t, r)
                        }
                    };
                if (a > 1)
                    for (i = new Array(a),
                        s = new Array(a),
                        o = new Array(a); a > f; ++f)
                        u[f] && e.isFunction(u[f].promise) ? u[f].promise().done(h(f, o, u)).fail(c.reject).progress(h(f, s, i)) : --l;
                return l || c.resolveWith(o, u),
                    c.promise()
            },
            e.Deferred = t
    }(Zepto),
    function(e) {
        function t(e) {
            return e._zid || (e._zid = h++)
        }

        function n(e, n, s, o) {
            if (n = r(n),
                n.ns)
                var u = i(n.ns);
            return (m[t(e)] || []).filter(function(e) {
                return !(!e || n.e && e.e != n.e || n.ns && !u.test(e.ns) || s && t(e.fn) !== t(s) || o && e.sel != o)
            })
        }

        function r(e) {
            var t = ("" + e).split(".");
            return {
                e: t[0],
                ns: t.slice(1).sort().join(" ")
            }
        }

        function i(e) {
            return new RegExp("(?:^| )" + e.replace(" ", " .* ?") + "(?: |$)")
        }

        function s(e, t) {
            return e.del && !y && e.e in b || !!t
        }

        function o(e) {
            return w[e] || y && b[e] || e
        }

        function u(n, i, u, a, l, h, p) {
            var d = t(n),
                v = m[d] || (m[d] = []);
            i.split(/\s/).forEach(function(t) {
                if ("ready" == t)
                    return e(document).ready(u);
                var i = r(t);
                i.fn = u,
                    i.sel = l,
                    i.e in w && (u = function(t) {
                        var n = t.relatedTarget;
                        return !n || n !== this && !e.contains(this, n) ? i.fn.apply(this, arguments) : void 0
                    }),
                    i.del = h;
                var d = h || u;
                i.proxy = function(e) {
                        if (e = f(e), !e.isImmediatePropagationStopped()) {
                            e.data = a;
                            var t = d.apply(n, e._args == c ? [e] : [e].concat(e._args));
                            return t === !1 && (e.preventDefault(),
                                    e.stopPropagation()),
                                t
                        }
                    },
                    i.i = v.length,
                    v.push(i),
                    "addEventListener" in n && n.addEventListener(o(i.e), i.proxy, s(i, p))
            })
        }

        function a(e, r, i, u, a) {
            var f = t(e);
            (r || "").split(/\s/).forEach(function(t) {
                n(e, t, i, u).forEach(function(t) {
                    delete m[f][t.i],
                        "removeEventListener" in e && e.removeEventListener(o(t.e), t.proxy, s(t, a))
                })
            })
        }

        function f(t, n) {
            return (n || !t.isDefaultPrevented) && (n || (n = t),
                    e.each(T, function(e, r) {
                        var i = n[e];
                        t[e] = function() {
                                return this[r] = E,
                                    i && i.apply(n, arguments)
                            },
                            t[r] = S
                    }), (n.defaultPrevented !== c ? n.defaultPrevented : "returnValue" in n ? n.returnValue === !1 : n.getPreventDefault && n.getPreventDefault()) && (t.isDefaultPrevented = E)),
                t
        }

        function l(e) {
            var t, n = {
                originalEvent: e
            };
            for (t in e)
                x.test(t) || e[t] === c || (n[t] = e[t]);
            return f(n, e)
        }
        var c, h = 1,
            p = Array.prototype.slice,
            d = e.isFunction,
            v = function(e) {
                return "string" == typeof e
            },
            m = {},
            g = {},
            y = "onfocusin" in window,
            b = {
                focus: "focusin",
                blur: "focusout"
            },
            w = {
                mouseenter: "mouseover",
                mouseleave: "mouseout"
            };
        g.click = g.mousedown = g.mouseup = g.mousemove = "MouseEvents",
            e.event = {
                add: u,
                remove: a
            },
            e.proxy = function(n, r) {
                var i = 2 in arguments && p.call(arguments, 2);
                if (d(n)) {
                    var s = function() {
                        return n.apply(r, i ? i.concat(p.call(arguments)) : arguments)
                    };
                    return s._zid = t(n),
                        s
                }
                if (v(r))
                    return i ? (i.unshift(n[r], n),
                        e.proxy.apply(null, i)) : e.proxy(n[r], n);
                throw new TypeError("expected function")
            },
            e.fn.bind = function(e, t, n) {
                return this.on(e, t, n)
            },
            e.fn.unbind = function(e, t) {
                return this.off(e, t)
            },
            e.fn.one = function(e, t, n, r) {
                return this.on(e, t, n, r, 1)
            };
        var E = function() {
                return !0
            },
            S = function() {
                return !1
            },
            x = /^([A-Z]|returnValue$|layer[XY]$)/,
            T = {
                preventDefault: "isDefaultPrevented",
                stopImmediatePropagation: "isImmediatePropagationStopped",
                stopPropagation: "isPropagationStopped"
            };
        e.fn.delegate = function(e, t, n) {
                return this.on(t, e, n)
            },
            e.fn.undelegate = function(e, t, n) {
                return this.off(t, e, n)
            },
            e.fn.live = function(t, n) {
                return e(document.body).delegate(this.selector, t, n),
                    this
            },
            e.fn.die = function(t, n) {
                return e(document.body).undelegate(this.selector, t, n),
                    this
            },
            e.fn.on = function(t, n, r, i, s) {
                var o, f, h = this;
                return t && !v(t) ? (e.each(t, function(e, t) {
                        h.on(e, n, r, t, s)
                    }),
                    h) : (v(n) || d(i) || i === !1 || (i = r,
                        r = n,
                        n = c), (i === c || r === !1) && (i = r,
                        r = c),
                    i === !1 && (i = S),
                    h.each(function(c, h) {
                        s && (o = function(e) {
                                return a(h, e.type, i),
                                    i.apply(this, arguments)
                            }),
                            n && (f = function(t) {
                                var r, s = e(t.target).closest(n, h).get(0);
                                return s && s !== h ? (r = e.extend(l(t), {
                                    currentTarget: s,
                                    liveFired: h
                                }), (o || i).apply(s, [r].concat(p.call(arguments, 1)))) : void 0
                            }),
                            u(h, t, i, r, n, f || o)
                    }))
            },
            e.fn.off = function(t, n, r) {
                var i = this;
                return t && !v(t) ? (e.each(t, function(e, t) {
                        i.off(e, n, t)
                    }),
                    i) : (v(n) || d(r) || r === !1 || (r = n,
                        n = c),
                    r === !1 && (r = S),
                    i.each(function() {
                        a(this, t, r, n)
                    }))
            },
            e.fn.trigger = function(t, n) {
                return t = v(t) || e.isPlainObject(t) ? e.Event(t) : f(t),
                    t._args = n,
                    this.each(function() {
                        t.type in b && "function" == typeof this[t.type] ? this[t.type]() : "dispatchEvent" in this ? this.dispatchEvent(t) : e(this).triggerHandler(t, n)
                    })
            },
            e.fn.triggerHandler = function(t, r) {
                var i, s;
                return this.each(function(o, u) {
                        i = l(v(t) ? e.Event(t) : t),
                            i._args = r,
                            i.target = u,
                            e.each(n(u, t.type || t), function(e, t) {
                                return s = t.proxy(i),
                                    i.isImmediatePropagationStopped() ? !1 : void 0
                            })
                    }),
                    s
            },
            "focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(t) {
                e.fn[t] = function(e) {
                    return 0 in arguments ? this.bind(t, e) : this.trigger(t)
                }
            }),
            e.Event = function(e, t) {
                v(e) || (t = e,
                    e = t.type);
                var n = document.createEvent(g[e] || "Events"),
                    r = !0;
                if (t)
                    for (var i in t)
                        "bubbles" == i ? r = !!t[i] : n[i] = t[i];
                return n.initEvent(e, r, !0),
                    f(n)
            }
    }(Zepto),
    function(e) {
        e.fn.serializeArray = function() {
                var n, r, i = [],
                    s = function(e) {
                        return e.forEach ? e.forEach(s) : void i.push({
                            name: n,
                            value: e
                        })
                    };
                return this[0] && e.each(this[0].elements, function(i, o) {
                        r = o.type,
                            n = o.name,
                            n && "fieldset" != o.nodeName.toLowerCase() && !o.disabled && "submit" != r && "reset" != r && "button" != r && "file" != r && ("radio" != r && "checkbox" != r || o.checked) && s(e(o).val())
                    }),
                    i
            },
            e.fn.serialize = function() {
                var e = [];
                return this.serializeArray().forEach(function(n) {
                        e.push(encodeURIComponent(n.name) + "=" + encodeURIComponent(n.value))
                    }),
                    e.join("&")
            },
            e.fn.submit = function(n) {
                if (0 in arguments)
                    this.bind("submit", n);
                else if (this.length) {
                    var r = e.Event("submit");
                    this.eq(0).trigger(r),
                        r.isDefaultPrevented() || this.get(0).submit()
                }
                return this
            }
    }(Zepto),
    function(e, t) {
        function g(e) {
            return e.replace(/([a-z])([A-Z])/, "$1-$2").toLowerCase()
        }

        function y(e) {
            return r ? r + e : e.toLowerCase()
        }
        var n = "",
            r, i = {
                Webkit: "webkit",
                Moz: "",
                O: "o"
            },
            s = document.createElement("div"),
            o = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,
            u, a, f, l, c, h, p, d, v, m = {};
        e.each(i, function(e, i) {
                if (s.style[e + "TransitionProperty"] !== t)
                    return n = "-" + e.toLowerCase() + "-",
                        r = i, !1
            }),
            u = n + "transform",
            m[a = n + "transition-property"] = m[f = n + "transition-duration"] = m[c = n + "transition-delay"] = m[l = n + "transition-timing-function"] = m[h = n + "animation-name"] = m[p = n + "animation-duration"] = m[v = n + "animation-delay"] = m[d = n + "animation-timing-function"] = "",
            e.fx = {
                off: r === t && s.style.transitionProperty === t,
                speeds: {
                    _default: 400,
                    fast: 200,
                    slow: 600
                },
                cssPrefix: n,
                transitionEnd: y("TransitionEnd"),
                animationEnd: y("AnimationEnd")
            },
            e.fn.animate = function(n, r, i, s, o) {
                return e.isFunction(r) && (s = r,
                        i = t,
                        r = t),
                    e.isFunction(i) && (s = i,
                        i = t),
                    e.isPlainObject(r) && (i = r.easing,
                        s = r.complete,
                        o = r.delay,
                        r = r.duration),
                    r && (r = (typeof r == "number" ? r : e.fx.speeds[r] || e.fx.speeds._default) / 1e3),
                    o && (o = parseFloat(o) / 1e3),
                    this.anim(n, r, i, s, o)
            },
            e.fn.anim = function(n, r, i, s, y) {
                var b, w = {},
                    E, S = "",
                    x = this,
                    T, N = e.fx.transitionEnd,
                    C = !1;
                r === t && (r = e.fx.speeds._default / 1e3),
                    y === t && (y = 0),
                    e.fx.off && (r = 0);
                if (typeof n == "string")
                    w[h] = n,
                    w[p] = r + "s",
                    w[v] = y + "s",
                    w[d] = i || "linear",
                    N = e.fx.animationEnd;
                else {
                    E = [];
                    for (b in n)
                        o.test(b) ? S += b + "(" + n[b] + ") " : (w[b] = n[b],
                            E.push(g(b)));
                    S && (w[u] = S,
                            E.push(u)),
                        r > 0 && typeof n == "object" && (w[a] = E.join(", "),
                            w[f] = r + "s",
                            w[c] = y + "s",
                            w[l] = i || "linear")
                }
                return T = function(t) {
                        if (typeof t != "undefined") {
                            if (t.target !== t.currentTarget)
                                return;
                            e(t.target).unbind(N, T)
                        } else
                            e(this).unbind(N, T);
                        C = !0,
                            e(this).css(m),
                            s && s.call(this)
                    },
                    r > 0 && (this.bind(N, T),
                        setTimeout(function() {
                            if (C)
                                return;
                            T.call(x)
                        }, (r + y) * 1e3 + 25)),
                    this.size() && this.get(0).clientLeft,
                    this.css(w),
                    r <= 0 && setTimeout(function() {
                        x.each(function() {
                            T.call(this)
                        })
                    }, 0),
                    this
            },
            s = null
    }(Zepto),
    function(e, t) {
        function u(n, r, i, s, o) {
            typeof r == "function" && !o && (o = r,
                r = t);
            var u = {
                opacity: i
            };
            return s && (u.scale = s,
                    n.css(e.fx.cssPrefix + "transform-origin", "0 0")),
                n.animate(u, r, null, o)
        }

        function a(t, n, r, i) {
            return u(t, n, 0, r, function() {
                s.call(e(this)),
                    i && i.call(this)
            })
        }
        var n = window.document,
            r = n.documentElement,
            i = e.fn.show,
            s = e.fn.hide,
            o = e.fn.toggle;
        e.fn.show = function(e, n) {
                return i.call(this),
                    e === t ? e = 0 : this.css("opacity", 0),
                    u(this, e, 1, "1,1", n)
            },
            e.fn.hide = function(e, n) {
                return e === t ? s.call(this) : a(this, e, "0,0", n)
            },
            e.fn.toggle = function(n, r) {
                return n === t || typeof n == "boolean" ? o.call(this, n) : this.each(function() {
                    var t = e(this);
                    t[t.css("display") == "none" ? "show" : "hide"](n, r)
                })
            },
            e.fn.fadeTo = function(e, t, n) {
                return u(this, e, t, null, n)
            },
            e.fn.fadeIn = function(e, t) {
                var n = this.css("opacity");
                return n > 0 ? this.css("opacity", 0) : n = 1,
                    i.call(this).fadeTo(e, n, t)
            },
            e.fn.fadeOut = function(e, t) {
                return a(this, e, null, t)
            },
            e.fn.fadeToggle = function(t, n) {
                return this.each(function() {
                    var r = e(this);
                    r[r.css("opacity") == 0 || r.css("display") == "none" ? "fadeIn" : "fadeOut"](t, n)
                })
            }
    }(Zepto),
    function(e) {
        function a(e, t, n, r) {
            return Math.abs(e - t) >= Math.abs(n - r) ? e - t > 0 ? "Left" : "Right" : n - r > 0 ? "Up" : "Down"
        }

        function f() {
            s = null,
                t.last && (t.el.trigger("longTap"),
                    t = {})
        }

        function l() {
            s && clearTimeout(s),
                s = null
        }

        function c() {
            n && clearTimeout(n),
                r && clearTimeout(r),
                i && clearTimeout(i),
                s && clearTimeout(s),
                n = r = i = s = null,
                t = {}
        }

        function h(e) {
            return (e.pointerType == "touch" || e.pointerType == e.MSPOINTER_TYPE_TOUCH) && e.isPrimary
        }

        function p(e, t) {
            return e.type == "pointer" + t || e.type.toLowerCase() == "mspointer" + t
        }
        var t = {},
            n, r, i, s, o = 750,
            u;
        e(document).ready(function() {
            var d, v, m = 0,
                g = 0,
                y, b;
            "MSGesture" in window && (u = new MSGesture,
                    u.target = document.body),
                e(document).bind("MSGestureEnd", function(e) {
                    var n = e.velocityX > 1 ? "Right" : e.velocityX < -1 ? "Left" : e.velocityY > 1 ? "Down" : e.velocityY < -1 ? "Up" : null;
                    n && (t.el.trigger("swipe"),
                        t.el.trigger("swipe" + n))
                }).on("touchstart MSPointerDown pointerdown", function(r) {
                    if ((b = p(r, "down")) && !h(r))
                        return;
                    y = b ? r : r.touches[0],
                        r.touches && r.touches.length === 1 && t.x2 && (t.x2 = undefined,
                            t.y2 = undefined),
                        d = Date.now(),
                        v = d - (t.last || d),
                        t.el = e("tagName" in y.target ? y.target : y.target.parentNode),
                        n && clearTimeout(n),
                        t.x1 = y.pageX,
                        t.y1 = y.pageY,
                        v > 0 && v <= 250 && (t.isDoubleTap = !0),
                        t.last = d,
                        s = setTimeout(f, o),
                        u && b && u.addPointer(r.pointerId)
                }).on("touchmove MSPointerMove pointermove", function(e) {
                    if ((b = p(e, "move")) && !h(e))
                        return;
                    y = b ? e : e.touches[0],
                        l(),
                        t.x2 = y.pageX,
                        t.y2 = y.pageY,
                        m += Math.abs(t.x1 - t.x2),
                        g += Math.abs(t.y1 - t.y2)
                }).on("touchend MSPointerUp pointerup", function(s) {
                    if ((b = p(s, "up")) && !h(s))
                        return;
                    l(),
                        t.x2 && Math.abs(t.x1 - t.x2) > 30 || t.y2 && Math.abs(t.y1 - t.y2) > 30 ? i = setTimeout(function() {
                            t.el.trigger("swipe"),
                                t.el.trigger("swipe" + a(t.x1, t.x2, t.y1, t.y2)),
                                t = {}
                        }, 0) : "last" in t && (m < 30 && g < 30 ? r = setTimeout(function() {
                            var r = e.Event("tap");
                            r.cancelTouch = c,
                                t.el.trigger(r),
                                t.isDoubleTap ? (t.el && t.el.trigger("doubleTap"),
                                    t = {}) : n = setTimeout(function() {
                                    n = null,
                                        t.el && t.el.trigger("singleTap"),
                                        t = {}
                                }, 250)
                        }, 0) : t = {}),
                        m = g = 0
                }).on("touchcancel MSPointerCancel pointercancel", c),
                e(window).on("scroll", c)
        }), ["swipe", "swipeLeft", "swipeRight", "swipeUp", "swipeDown", "doubleTap", "tap", "singleTap", "longTap"].forEach(function(t) {
            e.fn[t] = function(e) {
                return this.on(t, e)
            }
        })
    }(Zepto),
    function(e) {
        function o(s, o) {
            var a = s[i],
                f = a && t[a];
            if (o === undefined)
                return f || u(s);
            if (f) {
                if (o in f)
                    return f[o];
                var l = r(o);
                if (l in f)
                    return f[l]
            }
            return n.call(e(s), o)
        }

        function u(n, s, o) {
            var u = n[i] || (n[i] = ++e.uuid),
                f = t[u] || (t[u] = a(n));
            return s !== undefined && (f[r(s)] = o),
                f
        }

        function a(t) {
            var n = {};
            return e.each(t.attributes || s, function(t, i) {
                    i.name.indexOf("data-") == 0 && (n[r(i.name.replace("data-", ""))] = e.zepto.deserializeValue(i.value))
                }),
                n
        }
        var t = {},
            n = e.fn.data,
            r = e.camelCase,
            i = e.expando = "Zepto" + +(new Date),
            s = [];
        e.fn.data = function(t, n) {
                return n === undefined ? e.isPlainObject(t) ? this.each(function(n, r) {
                    e.each(t, function(e, t) {
                        u(r, e, t)
                    })
                }) : 0 in this ? o(this[0], t) : undefined : this.each(function() {
                    u(this, t, n)
                })
            },
            e.fn.removeData = function(n) {
                return typeof n == "string" && (n = n.split(/\s+/)),
                    this.each(function() {
                        var s = this[i],
                            o = s && t[s];
                        o && e.each(n || o, function(e) {
                            delete o[n ? r(this) : e]
                        })
                    })
            }, ["remove", "empty"].forEach(function(t) {
                var n = e.fn[t];
                e.fn[t] = function() {
                    var e = this.find("*");
                    return t === "remove" && (e = e.add(this)),
                        e.removeData(),
                        n.call(this)
                }
            })
    }(Zepto),
    define("zepto", function() {}), ! function() {
        function e(e) {
            return e.replace(b, "").replace(w, ",").replace(E, "").replace(S, "").replace(x, "").split(T)
        }

        function t(e) {
            return "'" + e.replace(/('|\\)/g, "\\$1").replace(/\r/g, "\\r").replace(/\n/g, "\\n") + "'"
        }

        function n(n, r) {
            function i(e) {
                return h += e.split(/\n/).length - 1,
                    l && (e = e.replace(/\s+/g, " ").replace(/<!--[\w\W]*?-->/g, "")),
                    e && (e = y[1] + t(e) + y[2] + "\n"),
                    e
            }

            function s(t) {
                var n = h;
                if (f ? t = f(t, r) : o && (t = t.replace(/\n/g, function() {
                        return h++,
                            "$line=" + h + ";"
                    })),
                    0 === t.indexOf("=")) {
                    var i = c && !/^=[=#]/.test(t);
                    if (t = t.replace(/^=[=#]?|[\s;]*$/g, ""),
                        i) {
                        var s = t.replace(/\s*\([^\)]+\)/, "");
                        p[s] || /^(include|print)$/.test(s) || (t = "$escape(" + t + ")")
                    } else
                        t = "$string(" + t + ")";
                    t = y[1] + t + y[2]
                }
                return o && (t = "$line=" + n + ";" + t),
                    g(e(t), function(e) {
                        if (e && !v[e]) {
                            var t;
                            t = "print" === e ? w : "include" === e ? E : p[e] ? "$utils." + e : d[e] ? "$helpers." + e : "$data." + e,
                                S += e + "=" + t + ",",
                                v[e] = !0
                        }
                    }),
                    t + "\n"
            }
            var o = r.debug,
                u = r.openTag,
                a = r.closeTag,
                f = r.parser,
                l = r.compress,
                c = r.escape,
                h = 1,
                v = {
                    $data: 1,
                    $filename: 1,
                    $utils: 1,
                    $helpers: 1,
                    $out: 1,
                    $line: 1
                },
                m = "".trim,
                y = m ? ["$out='';", "$out+=", ";", "$out"] : ["$out=[];", "$out.push(", ");", "$out.join('')"],
                b = m ? "$out+=text;return $out;" : "$out.push(text);",
                w = "function(){var text=''.concat.apply('',arguments);" + b + "}",
                E = "function(filename,data){data=data||$data;var text=$utils.$include(filename,data,$filename);" + b + "}",
                S = "'use strict';var $utils=this,$helpers=$utils.$helpers," + (o ? "$line=0," : ""),
                x = y[0],
                T = "return new String(" + y[3] + ");";
            g(n.split(u), function(e) {
                e = e.split(a);
                var t = e[0],
                    n = e[1];
                1 === e.length ? x += i(t) : (x += s(t),
                    n && (x += i(n)))
            });
            var N = S + x + T;
            o && (N = "try{" + N + "}catch(e){throw {filename:$filename,name:'Render Error',message:e.message,line:$line,source:" + t(n) + ".split(/\\n/)[$line-1].replace(/^\\s+/,'')};}");
            try {
                var C = new Function("$data", "$filename", N);
                return C.prototype = p,
                    C
            } catch (k) {
                throw k.temp = "function anonymous($data,$filename) {" + N + "}",
                    k
            }
        }
        var r = function(e, t) {
            return "string" == typeof t ? m(t, {
                filename: e
            }) : o(e, t)
        };
        r.version = "3.0.0",
            r.config = function(e, t) {
                i[e] = t
            };
        var i = r.defaults = {
                openTag: "<%",
                closeTag: "%>",
                escape: !0,
                cache: !0,
                compress: !1,
                parser: null
            },
            s = r.cache = {};
        r.render = function(e, t) {
            return m(e, t)
        };
        var o = r.renderFile = function(e, t) {
            var n = r.get(e) || v({
                filename: e,
                name: "Render Error",
                message: "Template not found"
            });
            return t ? n(t) : n
        };
        r.get = function(e) {
            var t;
            if (s[e])
                t = s[e];
            else if ("object" == typeof document) {
                var n = document.getElementById(e);
                if (n) {
                    var r = (n.value || n.innerHTML).replace(/^\s*|\s*$/g, "");
                    t = m(r, {
                        filename: e
                    })
                }
            }
            return t
        };
        var u = function(e, t) {
                return "string" != typeof e && (t = typeof e,
                        "number" === t ? e += "" : e = "function" === t ? u(e.call(e)) : ""),
                    e
            },
            a = {
                "<": "&#60;",
                ">": "&#62;",
                '"': "&#34;",
                "'": "&#39;",
                "&": "&#38;"
            },
            f = function(e) {
                return a[e]
            },
            l = function(e) {
                return u(e).replace(/&(?![\w#]+;)|[<>"']/g, f)
            },
            c = Array.isArray || function(e) {
                return "[object Array]" === {}.toString.call(e)
            },
            h = function(e, t) {
                var n, r;
                if (c(e))
                    for (n = 0,
                        r = e.length; r > n; n++)
                        t.call(e, e[n], n, e);
                else
                    for (n in e)
                        t.call(e, e[n], n)
            },
            p = r.utils = {
                $helpers: {},
                $include: o,
                $string: u,
                $escape: l,
                $each: h
            };
        r.helper = function(e, t) {
            d[e] = t
        };
        var d = r.helpers = p.$helpers;
        r.onerror = function(e) {
            var t = "Template Error\n\n";
            for (var n in e)
                t += "<" + n + ">\n" + e[n] + "\n\n";
            "object" == typeof console && console.error(t)
        };
        var v = function(e) {
                return r.onerror(e),
                    function() {
                        return "{Template Error}"
                    }
            },
            m = r.compile = function(e, t) {
                function r(n) {
                    try {
                        return new a(n, u) + ""
                    } catch (r) {
                        return t.debug ? v(r)() : (t.debug = !0,
                            m(e, t)(n))
                    }
                }
                t = t || {};
                for (var o in i)
                    void 0 === t[o] && (t[o] = i[o]);
                var u = t.filename;
                try {
                    var a = n(e, t)
                } catch (f) {
                    return f.filename = u || "anonymous",
                        f.name = "Syntax Error",
                        v(f)
                }
                return r.prototype = a.prototype,
                    r.toString = function() {
                        return a.toString()
                    },
                    u && t.cache && (s[u] = r),
                    r
            },
            g = p.$each,
            y = "break,case,catch,continue,debugger,default,delete,do,else,false,finally,for,function,if,in,instanceof,new,null,return,switch,this,throw,true,try,typeof,var,void,while,with,abstract,boolean,byte,char,class,const,double,enum,export,extends,final,float,goto,implements,import,int,interface,long,native,package,private,protected,public,short,static,super,synchronized,throws,transient,volatile,arguments,let,yield,undefined",
            b = /\/\*[\w\W]*?\*\/|\/\/[^\n]*\n|\/\/[^\n]*$|"(?:[^"\\]|\\[\w\W])*"|'(?:[^'\\]|\\[\w\W])*'|\s*\.\s*[$\w\.]+/g,
            w = /[^\w$]+/g,
            E = new RegExp(["\\b" + y.replace(/,/g, "\\b|\\b") + "\\b"].join("|"), "g"),
            S = /^\d[^,]*|,\d[^,]*/g,
            x = /^,+|,+$/g,
            T = /^$|,+/;
        i.openTag = "{{",
            i.closeTag = "}}";
        var N = function(e, t) {
            var n = t.split(":"),
                r = n.shift(),
                i = n.join(":") || "";
            return i && (i = ", " + i),
                "$helpers." + r + "(" + e + i + ")"
        };
        i.parser = function(e) {
                e = e.replace(/^\s/, "");
                var t = e.split(" "),
                    n = t.shift(),
                    i = t.join(" ");
                switch (n) {
                    case "if":
                        e = "if(" + i + "){";
                        break;
                    case "else":
                        t = "if" === t.shift() ? " if(" + t.join(" ") + ")" : "",
                            e = "}else" + t + "{";
                        break;
                    case "/if":
                        e = "}";
                        break;
                    case "each":
                        var s = t[0] || "$data",
                            o = t[1] || "as",
                            u = t[2] || "$value",
                            a = t[3] || "$index",
                            f = u + "," + a;
                        "as" !== o && (s = "[]"),
                            e = "$each(" + s + ",function(" + f + "){";
                        break;
                    case "/each":
                        e = "});";
                        break;
                    case "echo":
                        e = "print(" + i + ");";
                        break;
                    case "print":
                    case "include":
                        e = n + "(" + t.join(",") + ");";
                        break;
                    default:
                        if (/^\s*\|\s*[\w\$]/.test(i)) {
                            var l = !0;
                            0 === e.indexOf("#") && (e = e.substr(1),
                                l = !1);
                            for (var c = 0, h = e.split("|"), p = h.length, d = h[c++]; p > c; c++)
                                d = N(d, h[c]);
                            e = (l ? "=" : "=#") + d
                        } else
                            e = r.helpers[n] ? "=#" + n + "(" + t.join(",") + ");" : "=" + e
                }
                return e
            },
            "function" == typeof define ? define("template", [], function() {
                return r
            }) : "undefined" != typeof exports ? module.exports = r : this.template = r
    }(), ! function(e) {
        "use strict";

        function t(e, t) {
            var n = (65535 & e) + (65535 & t),
                r = (e >> 16) + (t >> 16) + (n >> 16);
            return r << 16 | 65535 & n
        }

        function n(e, t) {
            return e << t | e >>> 32 - t
        }

        function r(e, r, i, s, o, u) {
            return t(n(t(t(r, e), t(s, u)), o), i)
        }

        function i(e, t, n, i, s, o, u) {
            return r(t & n | ~t & i, e, t, s, o, u)
        }

        function s(e, t, n, i, s, o, u) {
            return r(t & i | n & ~i, e, t, s, o, u)
        }

        function o(e, t, n, i, s, o, u) {
            return r(t ^ n ^ i, e, t, s, o, u)
        }

        function u(e, t, n, i, s, o, u) {
            return r(n ^ (t | ~i), e, t, s, o, u)
        }

        function a(e, n) {
            e[n >> 5] |= 128 << n % 32,
                e[(n + 64 >>> 9 << 4) + 14] = n;
            var r, a, f, l, c, h = 1732584193,
                p = -271733879,
                d = -1732584194,
                v = 271733878;
            for (r = 0; r < e.length; r += 16)
                a = h,
                f = p,
                l = d,
                c = v,
                h = i(h, p, d, v, e[r], 7, -680876936),
                v = i(v, h, p, d, e[r + 1], 12, -389564586),
                d = i(d, v, h, p, e[r + 2], 17, 606105819),
                p = i(p, d, v, h, e[r + 3], 22, -1044525330),
                h = i(h, p, d, v, e[r + 4], 7, -176418897),
                v = i(v, h, p, d, e[r + 5], 12, 1200080426),
                d = i(d, v, h, p, e[r + 6], 17, -1473231341),
                p = i(p, d, v, h, e[r + 7], 22, -45705983),
                h = i(h, p, d, v, e[r + 8], 7, 1770035416),
                v = i(v, h, p, d, e[r + 9], 12, -1958414417),
                d = i(d, v, h, p, e[r + 10], 17, -42063),
                p = i(p, d, v, h, e[r + 11], 22, -1990404162),
                h = i(h, p, d, v, e[r + 12], 7, 1804603682),
                v = i(v, h, p, d, e[r + 13], 12, -40341101),
                d = i(d, v, h, p, e[r + 14], 17, -1502002290),
                p = i(p, d, v, h, e[r + 15], 22, 1236535329),
                h = s(h, p, d, v, e[r + 1], 5, -165796510),
                v = s(v, h, p, d, e[r + 6], 9, -1069501632),
                d = s(d, v, h, p, e[r + 11], 14, 643717713),
                p = s(p, d, v, h, e[r], 20, -373897302),
                h = s(h, p, d, v, e[r + 5], 5, -701558691),
                v = s(v, h, p, d, e[r + 10], 9, 38016083),
                d = s(d, v, h, p, e[r + 15], 14, -660478335),
                p = s(p, d, v, h, e[r + 4], 20, -405537848),
                h = s(h, p, d, v, e[r + 9], 5, 568446438),
                v = s(v, h, p, d, e[r + 14], 9, -1019803690),
                d = s(d, v, h, p, e[r + 3], 14, -187363961),
                p = s(p, d, v, h, e[r + 8], 20, 1163531501),
                h = s(h, p, d, v, e[r + 13], 5, -1444681467),
                v = s(v, h, p, d, e[r + 2], 9, -51403784),
                d = s(d, v, h, p, e[r + 7], 14, 1735328473),
                p = s(p, d, v, h, e[r + 12], 20, -1926607734),
                h = o(h, p, d, v, e[r + 5], 4, -378558),
                v = o(v, h, p, d, e[r + 8], 11, -2022574463),
                d = o(d, v, h, p, e[r + 11], 16, 1839030562),
                p = o(p, d, v, h, e[r + 14], 23, -35309556),
                h = o(h, p, d, v, e[r + 1], 4, -1530992060),
                v = o(v, h, p, d, e[r + 4], 11, 1272893353),
                d = o(d, v, h, p, e[r + 7], 16, -155497632),
                p = o(p, d, v, h, e[r + 10], 23, -1094730640),
                h = o(h, p, d, v, e[r + 13], 4, 681279174),
                v = o(v, h, p, d, e[r], 11, -358537222),
                d = o(d, v, h, p, e[r + 3], 16, -722521979),
                p = o(p, d, v, h, e[r + 6], 23, 76029189),
                h = o(h, p, d, v, e[r + 9], 4, -640364487),
                v = o(v, h, p, d, e[r + 12], 11, -421815835),
                d = o(d, v, h, p, e[r + 15], 16, 530742520),
                p = o(p, d, v, h, e[r + 2], 23, -995338651),
                h = u(h, p, d, v, e[r], 6, -198630844),
                v = u(v, h, p, d, e[r + 7], 10, 1126891415),
                d = u(d, v, h, p, e[r + 14], 15, -1416354905),
                p = u(p, d, v, h, e[r + 5], 21, -57434055),
                h = u(h, p, d, v, e[r + 12], 6, 1700485571),
                v = u(v, h, p, d, e[r + 3], 10, -1894986606),
                d = u(d, v, h, p, e[r + 10], 15, -1051523),
                p = u(p, d, v, h, e[r + 1], 21, -2054922799),
                h = u(h, p, d, v, e[r + 8], 6, 1873313359),
                v = u(v, h, p, d, e[r + 15], 10, -30611744),
                d = u(d, v, h, p, e[r + 6], 15, -1560198380),
                p = u(p, d, v, h, e[r + 13], 21, 1309151649),
                h = u(h, p, d, v, e[r + 4], 6, -145523070),
                v = u(v, h, p, d, e[r + 11], 10, -1120210379),
                d = u(d, v, h, p, e[r + 2], 15, 718787259),
                p = u(p, d, v, h, e[r + 9], 21, -343485551),
                h = t(h, a),
                p = t(p, f),
                d = t(d, l),
                v = t(v, c);
            return [h, p, d, v]
        }

        function f(e) {
            var t, n = "";
            for (t = 0; t < 32 * e.length; t += 8)
                n += String.fromCharCode(e[t >> 5] >>> t % 32 & 255);
            return n
        }

        function l(e) {
            var t, n = [];
            for (n[(e.length >> 2) - 1] = void 0,
                t = 0; t < n.length; t += 1)
                n[t] = 0;
            for (t = 0; t < 8 * e.length; t += 8)
                n[t >> 5] |= (255 & e.charCodeAt(t / 8)) << t % 32;
            return n
        }

        function c(e) {
            return f(a(l(e), 8 * e.length))
        }

        function h(e, t) {
            var n, r, i = l(e),
                s = [],
                o = [];
            for (s[15] = o[15] = void 0,
                i.length > 16 && (i = a(i, 8 * e.length)),
                n = 0; 16 > n; n += 1)
                s[n] = 909522486 ^ i[n],
                o[n] = 1549556828 ^ i[n];
            return r = a(s.concat(l(t)), 512 + 8 * t.length),
                f(a(o.concat(r), 640))
        }

        function p(e) {
            var t, n, r = "0123456789abcdef",
                i = "";
            for (n = 0; n < e.length; n += 1)
                t = e.charCodeAt(n),
                i += r.charAt(t >>> 4 & 15) + r.charAt(15 & t);
            return i
        }

        function d(e) {
            return unescape(encodeURIComponent(e))
        }

        function v(e) {
            return c(d(e))
        }

        function m(e) {
            return p(v(e))
        }

        function g(e, t) {
            return h(d(e), d(t))
        }

        function y(e, t) {
            return p(g(e, t))
        }

        function b(e, t, n) {
            return t ? n ? g(t, e) : y(t, e) : n ? v(e) : m(e)
        }
        "function" == typeof define && define.amd ? define("m", [], function() {
            return b
        }) : e.md5 = b
    }(this),
    window.url = function() {
        function e() {
            return new RegExp(/(.*?)\.?([^\.]*?)\.?(com|net|org|biz|ws|in|me|co\.uk|co|org\.uk|ltd\.uk|plc\.uk|me\.uk|edu|mil|br\.com|cn\.com|eu\.com|hu\.com|no\.com|qc\.com|sa\.com|se\.com|se\.net|us\.com|uy\.com|ac|co\.ac|gv\.ac|or\.ac|ac\.ac|af|am|as|at|ac\.at|co\.at|gv\.at|or\.at|asn\.au|com\.au|edu\.au|org\.au|net\.au|id\.au|be|ac\.be|adm\.br|adv\.br|am\.br|arq\.br|art\.br|bio\.br|cng\.br|cnt\.br|com\.br|ecn\.br|eng\.br|esp\.br|etc\.br|eti\.br|fm\.br|fot\.br|fst\.br|g12\.br|gov\.br|ind\.br|inf\.br|jor\.br|lel\.br|med\.br|mil\.br|net\.br|nom\.br|ntr\.br|odo\.br|org\.br|ppg\.br|pro\.br|psc\.br|psi\.br|rec\.br|slg\.br|tmp\.br|tur\.br|tv\.br|vet\.br|zlg\.br|br|ab\.ca|bc\.ca|mb\.ca|nb\.ca|nf\.ca|ns\.ca|nt\.ca|on\.ca|pe\.ca|qc\.ca|sk\.ca|yk\.ca|ca|cc|ac\.cn|com\.cn|edu\.cn|gov\.cn|org\.cn|bj\.cn|sh\.cn|tj\.cn|cq\.cn|he\.cn|nm\.cn|ln\.cn|jl\.cn|hl\.cn|js\.cn|zj\.cn|ah\.cn|gd\.cn|gx\.cn|hi\.cn|sc\.cn|gz\.cn|yn\.cn|xz\.cn|sn\.cn|gs\.cn|qh\.cn|nx\.cn|xj\.cn|tw\.cn|hk\.cn|mo\.cn|cn|cx|cz|de|dk|fo|com\.ec|tm\.fr|com\.fr|asso\.fr|presse\.fr|fr|gf|gs|co\.il|net\.il|ac\.il|k12\.il|gov\.il|muni\.il|ac\.in|co\.in|org\.in|ernet\.in|gov\.in|net\.in|res\.in|is|it|ac\.jp|co\.jp|go\.jp|or\.jp|ne\.jp|ac\.kr|co\.kr|go\.kr|ne\.kr|nm\.kr|or\.kr|li|lt|lu|asso\.mc|tm\.mc|com\.mm|org\.mm|net\.mm|edu\.mm|gov\.mm|ms|nl|no|nu|pl|ro|org\.ro|store\.ro|tm\.ro|firm\.ro|www\.ro|arts\.ro|rec\.ro|info\.ro|nom\.ro|nt\.ro|se|si|com\.sg|org\.sg|net\.sg|gov\.sg|sk|st|tf|ac\.th|co\.th|go\.th|mi\.th|net\.th|or\.th|tm|to|com\.tr|edu\.tr|gov\.tr|k12\.tr|net\.tr|org\.tr|com\.tw|org\.tw|net\.tw|ac\.uk|uk\.com|uk\.net|gb\.com|gb\.net|vg|sh|kz|ch|info|ua|gov|name|pro|ie|hk|com\.hk|org\.hk|net\.hk|edu\.hk|us|tk|cd|by|ad|lv|eu\.lv|bz|es|jp|cl|ag|mobi|eu|co\.nz|org\.nz|net\.nz|maori\.nz|iwi\.nz|io|la|md|sc|sg|vc|tw|travel|my|se|tv|pt|com\.pt|edu\.pt|asia|fi|com\.ve|net\.ve|fi|org\.ve|web\.ve|info\.ve|co\.ve|tel|im|gr|ru|net\.ru|org\.ru|hr|com\.hr|ly|xyz)$/)
        }

        function t(e) {
            return decodeURIComponent(e.replace(/\+/g, " "))
        }

        function n(e, t) {
            var n = e.charAt(0),
                r = t.split(n);
            return n === e ? r : (e = parseInt(e.substring(1), 10),
                r[e < 0 ? r.length + e : e - 1])
        }

        function r(e, n) {
            var r = e.charAt(0),
                i = n.split("&"),
                s = [],
                o = {},
                u = [],
                a = e.substring(1);
            for (var f in i) {
                s = i[f].match(/(.*?)=(.*)/),
                    s || (s = [i[f], i[f], ""]);
                if (s[1].replace(/\s/g, "") !== "") {
                    s[2] = t(s[2] || "");
                    if (a === s[1])
                        return s[2];
                    u = s[1].match(/(.*)\[([0-9]+)\]/),
                        u ? (o[u[1]] = o[u[1]] || [],
                            o[u[1]][u[2]] = s[2]) : o[s[1]] = s[2]
                }
            }
            return r === e ? o : o[a]
        }
        return function(t, i) {
            var s = {},
                o, u;
            if (t === "tld?")
                return e();
            i = i || window.location.toString();
            if (!t)
                return i;
            t = t.toString();
            if (o = i.match(/^mailto:([^\/].+)/))
                s.protocol = "mailto",
                s.email = o[1];
            else {
                if (o = i.match(/(.*?)#(.*)/))
                    s.hash = o[2],
                    i = o[1];
                if (s.hash && t.match(/^#/))
                    return r(t, s.hash);
                if (o = i.match(/(.*?)\?(.*)/))
                    s.query = o[2],
                    i = o[1];
                if (s.query && t.match(/^\?/))
                    return r(t, s.query);
                if (o = i.match(/(.*?)\:?\/\/(.*)/))
                    s.protocol = o[1].toLowerCase(),
                    i = o[2];
                if (o = i.match(/(.*?)(\/.*)/))
                    s.path = o[2],
                    i = o[1];
                s.path = (s.path || "").replace(/^([^\/])/, "/$1").replace(/\/$/, ""),
                    t.match(/^[\-0-9]+$/) && (t = t.replace(/^([^\/])/, "/$1"));
                if (t.match(/^\//))
                    return n(t, s.path.substring(1));
                o = n("/-1", s.path.substring(1)),
                    o && (o = o.match(/(.*?)\.(.*)/)) && (s.file = o[0],
                        s.filename = o[1],
                        s.fileext = o[2]);
                if (o = i.match(/(.*)\:([0-9]+)$/))
                    s.port = o[2],
                    i = o[1];
                if (o = i.match(/(.*?)@(.*)/))
                    s.auth = o[1],
                    i = o[2];
                s.auth && (o = s.auth.match(/(.*)\:(.*)/),
                        s.user = o ? o[1] : s.auth,
                        s.pass = o ? o[2] : undefined),
                    s.hostname = i.toLowerCase();
                if (t.charAt(0) === ".")
                    return n(t, s.hostname);
                e() && (o = s.hostname.match(e()),
                        o && (s.tld = o[3],
                            s.domain = o[2] ? o[2] + "." + o[3] : undefined,
                            s.sub = o[1] || undefined)),
                    s.port = s.port || (s.protocol === "https" ? "443" : "80"),
                    s.protocol = s.protocol || (s.port === "443" ? "https" : "http")
            }
            return t in s ? s[t] : t === "[]" ? s : undefined
        }
    }(),
    typeof jQuery != "undefined" && jQuery.extend({
        url: function(e, t) {
            return window.url(e, t)
        }
    }),
    define("url", function() {}),
    function(e) {
        function i(e, t, n) {
            a("transform", e, "translate(" + t + "px, " + n + "px)")
        }

        function s(e, t) {
            a("transition", e, t)
        }

        function o(e) {
            return e = e.originalEvent || e,
                window.event && window.event.changedTouches && event.changedTouches[0].pageX || e.pageX
        }

        function u(e) {
            return e = e.originalEvent || e,
                window.event && window.event.changedTouches && event.changedTouches[0].pageY || e.pageY
        }

        function a(e, t, n) {
            e = e.toLowerCase();
            var r = e.charAt(0).toUpperCase() + e.substr(1),
                i = ["webkit", "Moz", "ms", "O"],
                s = i.map(function(e) {
                    return e + r
                }).concat("transform");
            for (var o = 0, u = s.length; o < u; ++o)
                if (s[o] in t.style) {
                    if (n === undefined)
                        return t.style[s[o]];
                    t.style[s[o]] = n;
                    break
                }
        }

        function l(e, t, n, r) {
            if (!e[0])
                return;
            n = n.originalEvent || n;
            var i = {};
            f.forEach(function(e) {
                    i[e] = n[e]
                }),
                i.currentTarget = i.target = e[0];
            var s = e[0].ownerDocument.defaultView || e[0].ownerDocument.parentWindow,
                o = s.$.Event(t, i);
            return s.$(e[0]).trigger(o, r),
                o
        }

        function m(e, t) {
            var n = e.matches || e.matchesSelector || e.msMatchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || e.oMatchesSelector;
            return n ? n.call(e, t) : !1
        }

        function g(e) {
            return Array.prototype.slice.call(e)
        }

        function x(t, n, r) {
            return function(i, s, o) {
                var u = [];
                return this.each(function() {
                        var a = e(this).data(n);
                        if (typeof i == "string") {
                            if (typeof a == "undefined")
                                throw new Error(n + " not defined");
                            switch (i) {
                                case "enable":
                                    a.enable();
                                    break;
                                case "disable":
                                    a.disable();
                                    break;
                                case "destroy":
                                    a.destroy(),
                                        e(this).removeData(n);
                                    break;
                                case "option":
                                    o !== undefined ? a.opts[s] = o : typeof s == "object" ? a.opts = e.extend(a.opts, s) : s ? u.push(a.opts[s]) : u.push(a.opts);
                                    break;
                                case "toArray":
                                    if (n !== "sortable")
                                        return;
                                    u.push(a.toArray(s))
                            }
                        } else {
                            if (a)
                                return e.extend(a.opts, i),
                                    this;
                            a = new t(e(this), e.extend({}, r, i)),
                                a.create(),
                                e(this).data(n, a)
                        }
                    }),
                    u.length ? u.length === 1 ? u[0] : u : this
            }
        }
        var t = "mousedown touchstart MSPointerDown pointerdown",
            n = "mouseup touchend MSPointerUp pointerup",
            r = "mousemove touchmove MSPointerMove pointermove scroll",
            f = ["altKey", "bubbles", "button", "cancelable", "charCode", "clientX", "clientY", "ctrlKey", "currentTarget", "data", "detail", "eventPhase", "metaKey", "offsetX", "offsetY", "originalTarget", "pageX", "pageY", "relatedTarget", "screenX", "screenY", "shiftKey", "target", "view", "which"],
            c = 0,
            h = function() {
                this.eventHandler = e("<div />"),
                    this.parent = this.el = this.handle = null,
                    this.origin = {
                        x: 0,
                        y: 0,
                        transition: null,
                        translate: null,
                        offset: {
                            x: 0,
                            y: 0
                        }
                    },
                    this.lastEntered = this.currentTarget = null,
                    this.lastX = this.lastY = this.lastDirection = null,
                    this.originalCss = {},
                    this.windows = [window];
                var t;
                Object.defineProperty(this, "placeholder", {
                    get: function() {
                        return t
                    },
                    set: function(e) {
                        if (t === e)
                            return;
                        t && t.remove(),
                            t = e
                    }
                })
            };
        h.prototype.on = function() {
                return this.eventHandler.on.apply(this.eventHandler, Array.prototype.slice.call(arguments)),
                    this
            },
            h.prototype.off = function() {
                return this.eventHandler.off.apply(this.eventHandler, Array.prototype.slice.call(arguments)),
                    this
            },
            h.prototype.start = function(t, i, f, c) {
                this.parent = t,
                    this.el = i,
                    this.handle = c;
                var i = this.handle || this.el;
                this.origin.x = o(f),
                    this.origin.y = u(f),
                    this.origin.transform = a("transform", this.el[0]),
                    this.origin.transition = a("transition", this.el[0]);
                var h = this.el[0].getBoundingClientRect();
                return this.origin.offset.x = h.left + (window.scrollX || window.pageXOffset) - this.origin.x,
                    this.origin.offset.y = h.top + (window.scrollY || window.pageYOffset) - this.origin.y,
                    this.origin.scrollX = window.scrollX || window.pageXOffset,
                    this.origin.scrollY = window.scrollY || window.pageYOffset,
                    i[0].style.pointerEvents = "none",
                    this.windows.forEach(function(t) {
                        e(t).on(r, e.proxy(this.move, this)),
                            e(t).on(n, e.proxy(this.stop, this))
                    }, this),
                    s(i[0], ""),
                    l(this.eventHandler, "dragging:start", f),
                    this.el
            },
            h.prototype.stop = function(t) {
                var i = null,
                    o = !0;
                if (this.last) {
                    var u = this.last;
                    this.last = null,
                        i = l(e(u), "dragging:drop", t),
                        o = !i.isDefaultPrevented()
                }
                if (!this.el)
                    return;
                for (var f in this.originalCss)
                    this.el.css(f, this.originalCss[f]),
                    delete this.originalCss[f];
                l(this.eventHandler, "dragging:stop", t),
                    this.placeholder = null,
                    this.handle || this.adjustPlacement(t);
                var c = this.el;
                this.handle && this.handle.remove(),
                    setTimeout(function(e, t) {
                            s(e[0], "all 0.25s ease-in-out 0s"),
                                a("transform", e[0], t.transform || ""),
                                setTimeout(s.bind(null, e[0], t.transition || ""), 250),
                                e[0].style.pointerEvents = ""
                        }
                        .bind(null, c, this.origin)),
                    this.windows.forEach(function(t) {
                        e(t).off(r, this.move),
                            e(t).off(n, this.stop)
                    }, this),
                    this.parent = this.el = this.handle = null
            },
            h.prototype.move = function(t) {
                if (!this.el)
                    return;
                var n = this.el[0].ownerDocument,
                    r = n.defaultView || n.parentWindow;
                if (t.type !== "scroll") {
                    var s = o(t),
                        a = u(t);
                    t.view !== r && t.view.frameElement && (s += t.view.frameElement.offsetLeft,
                        a += t.view.frameElement.offsetTop);
                    var f = t.clientX || t.originalEvent && t.originalEvent.clientX || window.event && window.event.touches && window.event.touches[0].clientX || 0,
                        c = t.clientY || t.originalEvent && t.originalEvent.clientY || window.event && window.event.touches && window.event.touches[0].clientY || 0,
                        n = this.el[0].ownerDocument,
                        h;
                    y ? (h = t.view.document.msElementsFromPoint(f, c),
                        h = h[0] === this.el[0] ? h[1] : h[0]) : h = t.view.document.elementFromPoint(f, c);
                    var d = this.lastX - s,
                        v = this.lastY - a,
                        m = v > 0 && "up" || v < 0 && "down" || d > 0 && "up" || d < 0 && "down" || this.lastDirection;
                    p.currentTarget || this.setCurrent(h),
                        this.currentTarget && (h !== this.last && this.lastEntered !== this.currentTarget ? (l(e(this.lastEntered), "dragging:leave", t),
                            l(e(this.currentTarget), "dragging:enter", t),
                            this.lastEntered = this.currentTarget) : m !== this.lastDirection && l(e(this.currentTarget), "dragging:diverted", t)),
                        this.last = h,
                        this.currentTarget = null,
                        this.lastDirection = m,
                        this.lastX = s,
                        this.lastY = a,
                        this.origin.scrollX = window.scrollX || window.pageXOffset,
                        this.origin.scrollY = window.scrollY || window.pageYOffset
                } else
                    var s = this.lastX + ((window.scrollX || window.pageXOffset) - this.origin.scrollX),
                        a = this.lastY + ((window.scrollY || window.pageYOffset) - this.origin.scrollY);
                if (t.view !== r && t.view && t.view.frameElement) {
                    var g = (a - (window.scrollY || window.pageYOffset) - window.innerHeight) * -1,
                        b = document.documentElement.offsetHeight < (window.scrollY || window.pageYOffset) + window.innerHeight;
                    g <= 10 && !b && setTimeout(function() {
                        window.scrollBy(0, 5)
                    }, 50);
                    var w = a - (window.scrollY || window.pageYOffset),
                        E = (window.scrollY || window.pageYOffset) <= 0;
                    w <= 10 && !E && setTimeout(function() {
                        window.scrollBy(0, -5)
                    }, 50)
                }
                var d = s - this.origin.x,
                    v = a - this.origin.y,
                    S = this.handle || this.el;
                i(S[0], d, v)
            },
            h.prototype.setCurrent = function(e) {
                this.currentTarget = e
            },
            h.prototype.css = function(e, t) {
                if (!this.el)
                    return;
                this.originalCss[e] = this.el.css(e),
                    this.el.css(e, t)
            },
            h.prototype.adjustPlacement = function(e) {
                var t = this.handle && this.handle[0] || this.el[0];
                i(t, 0, 0);
                var n = t.getBoundingClientRect();
                this.origin.x = n.left + (window.scrollX || window.pageXOffset) - this.origin.offset.x,
                    this.origin.y = n.top + (window.scrollY || window.pageYOffset) - this.origin.offset.y;
                var r = o(e) || this.lastX,
                    s = u(e) || this.lastY,
                    a = r - this.origin.x,
                    f = s - this.origin.y;
                i(t, a, f)
            };
        var p;
        try {
            parent.$ && parent.$.dragging && (p = parent.$.dragging,
                p.windows.push(window))
        } catch (d) {}
        p = e.dragging = p || new h;
        var v = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver,
            y = !1;
        typeof v == "undefined" && (v = function(e) {
                this.targets = [],
                    this.onAdded = function(t) {
                        e([{
                            addedNodes: [t.target],
                            removedNodes: []
                        }])
                    },
                    this.onRemoved = function(t) {
                        e([{
                            addedNodes: [],
                            removedNodes: [t.target]
                        }])
                    }
            },
            v.prototype.observe = function(e) {
                e.addEventListener("DOMNodeInserted", this.onAdded),
                    e.addEventListener("DOMNodeRemoved", this.onRemoved),
                    this.targets.push(e)
            },
            v.prototype.disconnect = function() {
                var e;
                while (e = this.targets.shift())
                    e.removeEventListener("DOMNodeInserted", this.onAdded),
                    e.removeEventListener("DOMNodeRemoved", this.onRemoved)
            },
            y = !!~navigator.appName.indexOf("Internet Explorer"));
        var b = function(e, t, n, r) {
            function a(e, n) {
                var r = [];
                return g(e).forEach(function(e) {
                        if (e.nodeType !== 1)
                            return;
                        if (s && i.targets.indexOf(e.parentNode) === -1)
                            return;
                        m(e, o) && r.push(e);
                        if (s || !n)
                            return;
                        g(e.querySelectorAll(t)).forEach(function(e) {
                            r.push(e)
                        })
                    }),
                    r
            }

            function f(e, t, n) {
                if (!n)
                    return;
                a(e, t).filter(function(e, t, n) {
                    return n.indexOf(e) === t
                }).forEach(function(e) {
                    n.call(e)
                })
            }

            function p() {
                i.disconnect();
                for (var e = 0, t = h.length; e < t; ++e) {
                    var s = c.indexOf(h[e]);
                    s > -1 && (c.splice(s, 1),
                        h.splice(e--, 1))
                }
                f(c, !u || !y, n),
                    f(h, !0, r),
                    c.length = 0,
                    h.length = 0,
                    i.observe()
            }
            var i = this;
            this.targets = e instanceof NodeList ? Array.prototype.slice.call(e) : [e];
            var s = t[0] === ">",
                o = s ? t.substr(1) : t,
                u = !1,
                l = null,
                c = [],
                h = [];
            this.observer = new v(function(e) {
                    e.forEach(function(e) {
                            c.push.apply(c, e.addedNodes),
                                h.push.apply(h, e.removedNodes)
                        }),
                        l && clearTimeout(l),
                        l = setTimeout(p)
                }),
                n && this.targets.forEach(function(e) {
                    f(e.children, !0, n)
                }),
                u = !0,
                this.observe()
        };
        b.prototype.disconnect = function() {
                this.observer.disconnect()
            },
            b.prototype.observe = function() {
                var e = this;
                this.targets.forEach(function(t) {
                    e.observer.observe(t, {
                        childList: !0,
                        subtree: !0
                    })
                })
            };
        var w = function(t, n) {
            this.id = c++,
                this.el = e(t),
                this.opts = n,
                this.cancel = n.handle !== !1
        };
        w.prototype.create = function() {
                this.el.on(t, e.proxy(this.start, this)).css("touch-action", "double-tap-zoom").css("-ms-touch-action", "double-tap-zoom"),
                    p.on("dragging:stop", e.proxy(this.reset, this));
                var n = this;
                setTimeout(function() {
                    n.el.trigger("draggable:create", n)
                })
            },
            w.prototype.destroy = function() {
                this.el.off(t, this.start),
                    p.off("dragging:stop", this.reset)
            },
            w.prototype.enable = function() {
                this.opts.disabled = !1
            },
            w.prototype.disable = function() {
                this.opts.disabled = !0
            },
            w.prototype.start = function(t) {
                if (this.opts.disabled)
                    return !1;
                if (t.type === "mousedown" && t.which !== 1)
                    return !1;
                t = t.originalEvent || t;
                if (this.opts.cancel) {
                    var n = e(t.target);
                    while (n[0] !== this.el[0]) {
                        if (n.is(this.opts.cancel))
                            return;
                        n = n.parent()
                    }
                }
                if (this.opts.handle) {
                    var n = e(t.target),
                        r = !1;
                    while (n[0] !== this.el[0]) {
                        if (n.is(this.opts.handle)) {
                            r = !0;
                            break
                        }
                        n = n.parent()
                    }
                    if (!r)
                        return
                }
                t.preventDefault();
                var i = this.el,
                    s;
                if (this.opts.clone) {
                    typeof this.opts.clone == "function" ? s = this.opts.clone.call(this.el) : (s = this.el.clone(),
                        this.opts.cloneClass && s.addClass(this.opts.cloneClass));
                    var o = this.el.position();
                    s.css("position", "absolute").css("left", o.left).css("top", o.top).width(this.el.width()).height(this.el.height()),
                        s.insertAfter(this.el)
                }
                p.start(this, this.el, t, s),
                    l(this.el, "draggable:start", t, {
                        item: p.el
                    })
            },
            w.prototype.reset = function(e) {
                l(this.el, "draggable:stop", e, {
                    item: p.el
                })
            };
        var E = function(t, n) {
            this.id = c++,
                this.el = e(t),
                this.opts = n,
                this.accept = !1
        };
        E.prototype.create = function() {
                this.el.on("dragging:enter", e.proxy(this.enter, this)).on("dragging:leave", e.proxy(this.leave, this)).on("dragging:drop", e.proxy(this.drop, this)),
                    p.on("dragging:start", e.proxy(this.activate, this)).on("dragging:stop", e.proxy(this.reset, this));
                var t = this;
                setTimeout(function() {
                    t.el.trigger("droppable:create", t)
                })
            },
            E.prototype.destroy = function() {
                this.el.off("dragging:enter", this.enter).off("dragging:leave", this.leave).off("dragging:drop", this.drop)
            },
            E.prototype.enable = function() {
                this.opts.disabled = !1
            },
            E.prototype.disable = function() {
                this.opts.disabled = !0
            },
            E.prototype.activate = function(e) {
                this.accept = p.parent.opts.connectWith && this.el.is(p.parent.opts.connectWith);
                if (!this.accept) {
                    var t = this.opts.accept === "*" || (typeof this.opts.accept == "function" ? this.opts.accept.call(this.el[0], p.el) : p.el.is(this.opts.accept));
                    this.opts.scope !== "default" ? (this.accept = p.parent.opts.scope === this.opts.scope, !this.accept && this.opts.accept !== "*" && (this.accept = t)) : this.accept = t
                }
                if (!this.accept)
                    return;
                this.opts.activeClass && this.el.addClass(this.opts.activeClass),
                    l(this.el, "droppable:activate", e, {
                        item: p.el
                    })
            },
            E.prototype.reset = function(e) {
                if (!this.accept)
                    return;
                this.opts.activeClass && this.el.removeClass(this.opts.activeClass),
                    this.opts.hoverClass && this.el.removeClass(this.opts.hoverClass),
                    l(this.el, "droppable:deactivate", e, {
                        item: p.el
                    })
            },
            E.prototype.enter = function(e) {
                if (this.opts.disabled)
                    return !1;
                e.stopPropagation(),
                    p.placeholder && p.placeholder.hide();
                if (!this.accept)
                    return;
                this.opts.hoverClass && this.el.addClass(this.opts.hoverClass),
                    l(this.el, "droppable:over", e, {
                        item: p.el
                    })
            },
            E.prototype.leave = function(e) {
                if (this.opts.disabled)
                    return !1;
                this.opts.hoverClass && this.accept && this.el.removeClass(this.opts.hoverClass),
                    l(this.el, "droppable:out", e, {
                        item: p.el
                    })
            },
            E.prototype.drop = function(t) {
                if (this.opts.disabled || !this.accept)
                    return !1;
                if (!p.el)
                    return;
                var n = p.el,
                    r = typeof r == "function" && this.opts.receiveHandler,
                    i = {
                        item: n
                    },
                    s = null;
                p.handle && (i.helper = p.handle,
                    r || (s = i.clone = p.el.clone()));
                var o = l(this.el, "droppable:drop", t, i);
                o.isDefaultPrevented() || (r ? r.call(this.el, i) : e(this.el).append(s || p.el))
            };
        var S = function(t, n) {
            this.id = c++,
                this.el = t,
                this.opts = n;
            var r = this.opts.placeholderTag;
            if (!r)
                try {
                    r = this.el.find(this.opts.items)[0].tagName
                } catch (i) {
                    r = /^ul|ol$/i.test(this.el[0].tagName) ? "li" : "div"
                }
            this.placeholder = e("<" + r + ' id="__ph' + this.id + '" class="' + this.opts.placeholder + '" />'),
                this.accept = this.index = this.direction = null
        };
        S.prototype.create = function() {
                this.el.on(t, this.opts.items, e.proxy(this.start, this)).on("dragging:enter", this.opts.items, e.proxy(this.enter, this)).on("dragging:diverted", this.opts.items, e.proxy(this.diverted, this)).on("dragging:drop", this.opts.items, e.proxy(this.drop, this)),
                    e(this.el).find(this.opts.items).css("touch-action", "double-tap-zoom").css("-ms-touch-action", "double-tap-zoom"),
                    this.el.on("dragging:enter", e.proxy(this.enter, this)).on("dragging:diverted", e.proxy(this.diverted, this)).on("dragging:drop", e.proxy(this.drop, this)),
                    p.on("dragging:start", e.proxy(this.activate, this)).on("dragging:stop", e.proxy(this.reset, this));
                var n = this;
                setTimeout(function() {
                        n.el.trigger("sortable:create", n)
                    }),
                    this.observer = new b(this.el[0], this.opts.items, function() {}, function() {
                        if (this === n.placeholder[0] || p.el && this === p.el[0])
                            return;
                        var t = e(this);
                        t.css("touch-action", "double-tap-zoom").css("-ms-touch-action", "double-tap-zoom"),
                            n.el.trigger("sortable:change", {
                                item: t
                            }),
                            n.el.trigger("sortable:update", {
                                item: t,
                                index: -1
                            })
                    })
            },
            S.prototype.destroy = function() {
                this.el.off(t, this.opts.items, this.start).off("dragging:enter", this.opts.items, this.enter).off("dragging:diverted", this.opts.items, this.diverted).off("dragging:drop", this.opts.items, this.drop),
                    this.el.off("dragging:enter", this.enter).off("dragging:diverted", this.diverted).off("dragging:drop", this.drop),
                    this.observer.disconnect()
            },
            S.prototype.enable = function() {
                this.opts.disabled = !1
            },
            S.prototype.disable = function() {
                this.opts.disabled = !0
            },
            S.prototype.activate = function(e) {
                this.isEmpty = this.el.find(this.opts.items).length === 0,
                    this.accept = p.parent.id === this.id, !this.accept && p.parent.opts.connectWith && (this.accept = this.el.is(p.parent.opts.connectWith));
                if (!this.accept)
                    return;
                this.accept = p.parent.id === this.id || this.opts.accept === "*" || (typeof this.opts.accept == "function" ? this.opts.accept.call(this.el[0], p.el) : p.el.is(this.opts.accept));
                if (!this.accept)
                    return;
                this.opts.activeClass && this.el.addClass(this.opts.activeClass),
                    l(this.el, "sortable:activate", e, {
                        item: p.el
                    })
            },
            S.prototype.reset = function(e) {
                if (!this.accept)
                    return;
                this.opts.activeClass && this.el.removeClass(this.opts.activeClass),
                    l(this.el, "sortable:deactivate", e, {
                        item: p.el
                    }),
                    this.index !== null && (l(this.el, "sortable:beforeStop", e, {
                            item: p.el
                        }),
                        l(this.el, "sortable:stop", e, {
                            item: p.el
                        }),
                        this.index = null)
            },
            S.prototype.indexOf = function(e) {
                return this.el.find(this.opts.items + ", #" + this.placeholder.attr("id")).index(e)
            },
            S.prototype.start = function(t) {
                if (this.opts.disabled || p.el)
                    return;
                if (t.type === "mousedown" && t.which !== 1)
                    return !1;
                if (this.opts.cancel) {
                    var n = e(t.target);
                    while (n[0] !== this.el[0]) {
                        if (n.is(this.opts.cancel))
                            return;
                        n = n.parent()
                    }
                }
                if (this.opts.handle) {
                    var n = e(t.target),
                        r = !1;
                    while (n[0] !== this.el[0]) {
                        if (n.is(this.opts.handle)) {
                            r = !0;
                            break
                        }
                        n = n.parent()
                    }
                    if (!r)
                        return
                }
                t.stopPropagation(),
                    t.preventDefault(),
                    p.start(this, e(t.currentTarget), t),
                    this.index = this.indexOf(p.el),
                    p.el.before(p.placeholder = this.placeholder.show());
                if (this.index !== null) {
                    var i = p.el.outerHeight ? p.el.outerHeight() : p.el.height();
                    p.css("margin-bottom", -i)
                }
                this.opts.forcePlaceholderSize && (this.placeholder.height(parseFloat(p.el.css("height"))),
                        this.placeholder.width(parseFloat(p.el.css("width")))),
                    p.adjustPlacement(t),
                    l(this.el, "sortable:start", t, {
                        item: p.el
                    })
            },
            S.prototype.enter = function(t) {
                if (!this.accept || this.opts.disabled)
                    return;
                t.stopPropagation();
                var n = t.currentTarget,
                    r = n === this.el[0];
                if (n === this.placeholder[0])
                    return;
                n = e(n);
                if (r && !this.isEmpty && this.placeholder.parent().length)
                    return;
                p.placeholder = this.placeholder,
                    this.opts.forcePlaceholderSize && (this.placeholder.height(parseFloat(p.el.css("height"))),
                        this.placeholder.width(parseFloat(p.el.css("width")))),
                    r ? (this.el.append(this.placeholder),
                        this.el.trigger("sortable:change", {
                            item: p.el
                        })) : this.diverted(t)
            },
            S.prototype.diverted = function(t) {
                if (!this.accept || this.opts.disabled)
                    return;
                t.stopPropagation();
                var n = e(t.currentTarget),
                    r = n[0] === this.el[0];
                if (r)
                    return;
                p.placeholder = this.placeholder,
                    this.direction = this.indexOf(this.placeholder.show()) < this.indexOf(n) ? "down" : "up",
                    n[this.direction === "down" ? "after" : "before"](this.placeholder),
                    p.adjustPlacement(t),
                    this.el.trigger("sortable:change", {
                        item: p.el
                    })
            },
            S.prototype.drop = function(e) {
                if (!this.accept || this.opts.disabled)
                    return;
                e.stopPropagation(),
                    e.preventDefault();
                if (!p.el)
                    return;
                if (!this.placeholder.parent().length)
                    return;
                l(this.el, "sortable:beforeStop", e, {
                        item: p.el
                    }),
                    this.observer.disconnect();
                var t = this.indexOf(this.placeholder);
                t > this.index && t--;
                var n;
                this.index === null ? n = this.opts.receiveHandler : n = this.opts.updateHandler || this.opts.updatePosition;
                var r = p.el;
                typeof n == "function" ? n.call(this.el, {
                        item: p.el,
                        index: t
                    }) : (p.handle && (r = p.el.clone()),
                        r.insertBefore(this.placeholder)),
                    this.index === null && l(this.el, "sortable:receive", e, {
                        item: r
                    }),
                    t !== this.index && this.el.trigger("sortable:update", {
                        item: r,
                        index: t
                    }),
                    l(this.el, "sortable:stop", e, {
                        item: r
                    }),
                    this.index = null,
                    this.observer.observe(),
                    p.stop(e)
            },
            S.prototype.toArray = function(t) {
                t || (t = {});
                var n = t.attribute || "id",
                    r = [];
                return this.el.find(this.opts.items).each(function() {
                        r.push(e(this).prop(n))
                    }),
                    r
            },
            e.fn.draggable = x(w, "draggable", {
                cancel: "input, textarea, button, select, option",
                connectWith: !1,
                cursor: "auto",
                disabled: !1,
                handle: !1,
                initialized: !1,
                clone: !1,
                cloneClass: "",
                scope: "default"
            }),
            e.fn.droppable = x(E, "droppable", {
                accept: "*",
                activeClass: "",
                disabled: !1,
                hoverClass: "",
                initialized: !1,
                scope: "default",
                receiveHandler: null
            }),
            e.fn.sortable = x(S, "sortable", {
                accept: "*",
                activeClass: "",
                cancel: "input, textarea, button, select, option",
                connectWith: !1,
                disabled: !1,
                forcePlaceholderSize: !1,
                handle: !1,
                initialized: !1,
                items: "li, div",
                placeholder: "placeholder",
                placeholderTag: null,
                updateHandler: null,
                receiveHandler: null
            })
    }(window.Zepto || window.jQuery),
    define("touchdnd", ["zepto"], function() {}),
    define("popup", ["zepto"], function() {
        var e = {},
            t = "xy-";
        e.showMask = function(e, t) {
                e = e || !1;
                var n = $(".xy-mask");
                return n.size() === 0 && ($("body").append('<div class="xy-mask"></div>'),
                        n = $(".xy-mask")),
                    n.toggleClass("transparent", e),
                    n.show(),
                    typeof window.callback == "function" && window.callback(),
                    this
            },
            e.hideMask = function(e) {
                return $(".xy-mask").remove(),
                    typeof window.callback == "function" && window.callback(),
                    this
            };
        var n = null;
        return e.showToast = function(r) {
                clearTimeout(n);
                var i = {
                    type: "success",
                    time: 2e3,
                    callback: null
                };
                i = $.extend(i, r);
                if (!i.message)
                    return this;
                i.type === "loading" && (i.time = 6e4);
                var s = $(".xy-toast");
                return s.size() > 0 && s.remove(),
                    e.showMask(!0),
                    s = $('<div class="xy-toast"><i class="icon"></i><p class="text">#text#</p></div>'.replace("#text#", i.message)).appendTo($("body")),
                    s.addClass(t + i.type),
                    s.show(),
                    n = setTimeout(function() {
                        e.hideToast(),
                            typeof i.callback == "function" && i.callback()
                    }, i.time),
                    i.callback ? this : this
            },
            e.hideToast = function() {
                return $(".xy-toast").hide().remove(),
                    e.hideMask(),
                    this
            },
            e.showDialog = function(n) {
                var r = {
                    title: "提醒：",
                    type: "success",
                    action: [{
                        text: "确定",
                        "class": "mui-btn-success",
                        callback: function() {
                            e.hideDialog()
                        }
                    }],
                    callback: null
                };
                r = $.extend(r, n);
                if (!r.message)
                    return this;
                var i = $(".xy-dialog");
                i.size() > 0 && i.remove(),
                    e.showMask(),
                    $toast = $('<div class="xy-dialog"><div class="dialog-hd">#title#</div><div class="dialog-bd">#text#</div><div class="dialog-ft"><ul class="action"></ul></div></div>'.replace("#title#", r.title).replace("#text#", r.message)).appendTo($("body"));
                var s = $toast.find(".dialog-ft .action");
                return $.each(r.action, function() {
                        var e = this,
                            t = $('<li><a href="javascript:;" class="mui-btn #class#">#text#</a></li>'.replace("#class#", e.class).replace("#text#", e.text));
                        s.append(t),
                            t.bind("click", function() {
                                e.callback()
                            })
                    }),
                    $toast.addClass(t + r.type),
                    $toast.show(),
                    r.callback ? (typeof r.callback == "function" && r.callback(),
                        this) : this
            },
            e.hideDialog = function() {
                return $(".xy-dialog").hide().remove(),
                    e.hideMask(),
                    this
            },
            window.popup = e,
            e
    }),
    function() {
        var e = window.ctx || "/todayTask/",
            t = function() {
                return +(new Date)
            },
            n = {
                getSystemTime: e + "task/gold/getSystemTime?timestamp=" + t(),
                getTask: e + "task/expireTaskList?timestamp=" + t(),
                getCompletedTask: e + "task/completedTaskList?timestamp=" + t(),
                taskFinish: e + "task/finish?timestamp=" + t(),
                taskRestart: e + "task/restart?timestamp=" + t(),
                taskAddGold: e + "task/gold/addGold?timestamp=" + t(),
                taskRemoveGold: e + "task/gold/cancelGold?timestamp=" + t(),
                getUsedGold: e + "task/gold/getUsedGold?timestamp=" + t(),
                taskBegin: e + "task/beginEndTask?timestamp=" + t()
            };
        window.api = n
    }(),
    require(["zepto", "template", "m", "url", "touchdnd", "popup"], function(zepto, template, m) {
        "use strict";

        function loadingData() {
            popup.showToast({
                    message: "领金币咯...",
                    type: "loading",
                    time: 2e4
                }),
                $(".gold-grid li").each(function(e, t) {
                    $(this).attr("data-index", +e),
                        $(this).find(".icon-gold").attr("data-index", +e)
                }),
                $.when($.get(api.getSystemTime, {
                    accessToken: accessToken
                }), $.get(api.getTask, {
                    accessToken: accessToken
                }), $.get(api.getCompletedTask, {
                    accessToken: accessToken
                }), $.get(api.getUsedGold, {
                    accessToken: accessToken
                })).done(function(e, t, n, r) {
                    e = e[0],
                        t = t[0],
                        n = n[0],
                        r = r[0];
                    if (e.errorCode || t.errorCode || r.errorCode) {
                        popup.showToast({
                            message: "获取信息失败。",
                            type: "error"
                        });
                        return
                    }
                    systemTime = new Date(e.object.replace(/-/g, "/")),
                        usedGold = r.list,
                        $(".task-list.unfinished").html(template("task-tmpl", {
                            data: t.list
                        })),
                        $(".task-list.finished").html(template("task-tmpl", {
                            data: n.list,
                            status: "Completed"
                        })),
                        $(".gold-grid").show(),
                        renderNoData(),
                        renderView(),
                        popup.hideToast(),
                        renderBanner(),
                        setInterval(renderView, 1e3)
                }).fail(function(e) {
                    popup.showToast({
                        message: "获取信息失败。",
                        type: "error"
                    })
                })
        }

        function renderBanner() {
            $(".banner p").first().addClass("show"),
                setTimeout(function() {
                    $(".banner p").last().addClass("show")
                }, 1e3),
                setTimeout(function() {
                    $(".banner").addClass("hide")
                }, 7e3)
        }

        function renderView(e) {
            systemTime = new Date(+systemTime + 1e3),
                renderStatus();
            if (systemTime.getHours() > 23) {
                loadingData();
                return
            }
            var t = $(".gold-grid li").addClass("activate").removeClass("nonactivated expire flash"),
                n = systemTime,
                r = n.getHours(),
                i = n.getMinutes(),
                s = (r - 7) * 2;
            i >= 30 && s++,
                t.filter(function() {
                    return $(this).index() < s
                }).addClass("expire").removeClass("activate"),
                t.filter(function() {
                    return $(this).index() > s
                }).addClass("nonactivated").removeClass("activate"),
                usedGold && $.each(usedGold, function() {
                    var e = t.filter('li[data-index="' + this.dateIndex + '"]');
                    e.removeAttr("class").addClass("used").find(".icon-gold").addClass("clone")
                });
            var o = t.filter(".activate").last(),
                u = o.index();
            u != activateIndex && (activateIndex = u,
                o.addClass("flash"),
                draggableIn())
        }

        function draggableIn() {
            var e = $(".gold-grid li.activate .icon-gold"),
                t = $(".task-list li[data-id]");
            _isDraggableIn && t.droppable("destroy"),
                draggableOut(),
                e.addClass("draggable").draggable({
                    clone: !0,
                    cloneClass: "clone"
                }).on("draggable:start", function(e, t) {
                    $(t.item).closest(".gold").find(".clone").html("1")
                }).on("draggable:stop", function(e, t) {
                    var n = $(t.item),
                        r = n.closest("li");
                    r.is("[data-index]") && r.find(".clone").remove()
                }),
                t.droppable({
                    hoverClass: "active"
                }).on("droppable:drop", function(e, t) {
                    var n = $(t.item),
                        r = $(t.clone).html(""),
                        i = $(e.target).closest("li"),
                        s = i.find(".gold"),
                        o = i.attr("data-id"),
                        u = n.attr("data-index");
                    if (n.attr("data-index") === s.attr("data-index"))
                        return !1;
                    if (i.closest(".task-list.finished").size() > 0)
                        return !1;
                    var a = !0,
                        f = $(t.item).closest("li.activate");
                    f.size() === 0 && (a = !1,
                        f = $(t.item).closest(".gold"));
                    if (s[0] === f[0])
                        return !1;
                    s.attr("data-index", n.attr("data-index")),
                        setTimeout(function() {
                            s.find(".icon-gold").remove(),
                                s.attr("data-count", function(e, t) {
                                    return parseInt(t) + 1
                                }),
                                n.html(s.attr("data-count")).appendTo(s),
                                r.addClass("clone").appendTo(f);
                            if (a)
                                f.addClass("used");
                            else {
                                r.remove();
                                var e = 0;
                                f.attr("data-count", function(t, n) {
                                        return e = parseInt(n) - 1
                                    }).removeAttr("data-index"),
                                    e > 0 && f.append('<i class="icon-gold">' + e + "</>")
                            }
                            i.addClass("upup"),
                                playAudio("addGold"),
                                typeof today.taskAddGold == "function" && today.taskAddGold(o, u)
                        }, 10),
                        setTimeout(function() {
                            i.removeClass("upup")
                        }, 600)
                }),
                _isDraggableIn = !0
        }

        function draggableOut() {
            $(".task-list .gold .icon-gold[data-index]").draggable("destroy");
            var e = $(".gold-grid");
            _isDraggableOut && e.droppable("destroy"),
                e.droppable({}).on("droppable:drop", function(e, t) {
                    var n = $(t.item),
                        r = $(t.clone).html(""),
                        i = n.closest(".gold"),
                        s = n.closest("li"),
                        o = s.attr("data-id"),
                        u = n.attr("data-index");
                    if (n.closest(".task-list.finished").size() > 0)
                        return !1;
                    var a = $(".gold-grid li.activate");
                    if (n.closest("li[data-index]").size() > 0)
                        return !1;
                    var u = n.attr("data-index"),
                        f = a.attr("data-index");
                    if (u !== f)
                        return !1;
                    setTimeout(function() {
                        a.removeClass("used").find(".clone").remove(),
                            n.appendTo(a),
                            r.remove();
                        var e = 0;
                        i.attr("data-count", function(t, n) {
                                return e = parseInt(n) - 1
                            }).removeAttr("data-index"),
                            e > 0 && i.append('<i class="icon-gold">' + e + "</>"),
                            typeof today.taskRemoveGold == "function" && today.taskRemoveGold(o, u)
                    }, 10)
                }),
                _isDraggableOut = !0
        }

        function renderNoData() {
            var e = $(".task-list.unfinished"),
                t = $(".task-list.finished");
            e.find("li[data-id]").size() === 0 ? e.html($noData) : e.find(".no-data").remove(),
                t.find("li[data-id]").size() > 0 ? e.find(".no-data").removeClass("no-task") : e.find(".no-data").addClass("no-task")
        }

        function renderStatus() {
            $(".task-list.unfinished li").each(function() {
                var e = $(this),
                    t = e.attr("data-date");
                if (!t)
                    return;
                t = new Date(+t), +systemTime > +t ? e.addClass("expire") : e.removeClass("expire")
            })
        }

        function playAudio() {
            var e = $(".audio-gold")[0];
            e.play()
        }

        function parseDateString(e) {
            if (!e || e < 0)
                return "0秒";
            var t = 1e3,
                n = t * 60,
                r = n * 60,
                i = r * 24,
                s = Math.floor(e / i),
                o = Math.floor((e - s * i) / r),
                u = Math.floor((e - s * i - o * r) / n),
                a = Math.floor((e - s * i - o * r - u * n) / t),
                f = e - s * i - o * r - u * n - a * t,
                l = s + "天" + o + "时" + u + "分" + a + "秒";
            return l = l.replace(/^0天0时0分|^0天0时|^0天/g, ""),
                l
        }
        window.template = template,
            window.fa = m;
        var today = {
                a: "today 1.1.1.2"
            },
            systemTime = null,
            ajaxTimeout = 1e4,
            accessToken = url("?accessToken"),
            source = url("?source"),
            $noData = $('<li class="no-data no-task"><h5><span>今日无任务</span><span>今日任务已全部完成</span></h5><p>祝您一天过得愉快</p></li>'),
            activateIndex = -1,
            usedGold = [];
        loadingData(),
            function() {
                $(document).on("tap", ".task-list li .checkbox", function() {
                        var e = $(this),
                            t = e.closest("li"),
                            n = t.attr("data-id"),
                            r = e.is(".checked");
                        if (t.is(".animated"))
                            return;
                        e.toggleClass("checked");
                        var i = e.closest(".task-list").is(".finished"),
                            s = i ? $(".task-list.unfinished") : $(".task-list.finished");
                        t.addClass("animated").animate({
                            opacity: .1
                        }, 150, function() {
                            t.removeClass("animated").appendTo(s).css("opacity", "1"),
                                t.removeClass("begin").attr("data-begin", !1).find(".action").removeClass("pause"),
                                typeof today.taskUpdateStatus == "function" && today.taskUpdateStatus(n, !r),
                                renderNoData(),
                                renderStatus()
                        })
                    }),
                    $(document).on("tap", ".task-list.unfinished li .action", function() {
                        var e = $(this),
                            t = e.closest("li[data-id]"),
                            n = t.attr("data-id"),
                            r = t.attr("data-begin") === "true";
                        r ? (t.removeClass("begin"),
                                e.removeClass("pause").addClass("start")) : (t.addClass("begin"),
                                e.addClass("start").addClass("pause")),
                            t.attr("data-begin", !r),
                            today.taskBegin(n, r)
                    }),
                    $(document).on("tap", ".task-list li .content", function() {
                        var e = $(this).closest("li[data-id]").attr("data-id"),
                            t = url("?openId") || "",
                            n = ctx + "weixin/task/list/myChargeAll?taskId={id}&openId={openId}&accessToken={accessToken}#&topicDiv";
                        if (!source)
                            return;
                        switch (source) {
                            case "ios":
                                window.location.href = "ios:openTaskDetail:" + e;
                                break;
                            case "android":
                                window.taskDetail.onClick(e);
                                break;
                            case "wechat":
                                window.location.href = n.replace("{openId}", t).replace("{id}", e).replace("{accessToken}", accessToken)
                        }
                    })
            }();
        var _isDraggableIn = !1,
            _isDraggableOut = !1;
        today.taskUpdateStatus = function(e, t) {
                var n = t ? api.taskFinish : api.taskRestart;
                $.when($.get(n, {
                    accessToken: accessToken,
                    id: e
                })).done(function(e) {
                    if (e.errorCode) {
                        popup.showToast({
                            message: "修改任务状态失败。",
                            type: "error"
                        });
                        return
                    }
                }).fail(function(e) {
                    popup.showToast({
                        message: "修改任务状态失败。",
                        type: "error"
                    })
                })
        },
        today.taskAddGold = function(e, t) {
            $.when($.post(api.taskAddGold, {
                accessToken: accessToken,
                taskId: e,
                dateIndex: t,
                xy: today.xy(e, t)
            })).done(function(e) {
                if (e.errorCode) {
                    popup.showToast({
                        message: "领取金币失败。",
                        type: "error"
                    });
                    return
                }
            }).fail(function(e) {
                popup.showToast({
                    message: "领取金币失败。",
                    type: "error"
                })
            })
        },
        today.taskRemoveGold = function(e, t) {
            $.when($.post(api.taskRemoveGold, {
                accessToken: accessToken,
                taskId: e,
                dateIndex: t
            })).done(function(e) {
                if (e.errorCode) {
                    popup.showToast({
                        message: "移除金币失败。",
                        type: "error"
                    });
                    return
                }
            }).fail(function(e) {
                popup.showToast({
                    message: "移除金币失败。",
                    type: "error"
                })
            })
        },
        today.taskBegin = function(e, t) {
            var n = t === !0 ? "暂停" : "启动";
            $.when($.get(api.taskBegin, {
                accessToken: accessToken,
                id: e
            })).done(function(e) {
                if (e.errorCode) {
                    popup.showToast({
                        message: n + "任务失败。",
                        type: "error"
                    });
                    return
                }
            }).fail(function(e) {
                popup.showToast({
                    message: n + "任务失败。",
                    type: "error"
                })
            })
        },
        Date.prototype.format = function(e) {
            var t = {
                "M+": this.getMonth() + 1,
                "d+": this.getDate(),
                "H+": this.getHours(),
                "m+": this.getMinutes(),
                "s+": this.getSeconds(),
                "q+": Math.floor((this.getMonth() + 3) / 3),
                S: this.getMilliseconds()
            };
            /(y+)/.test(e) && (e = e.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length)));
            for (var n in t)
                (new RegExp("(" + n + ")")).test(e) && (e = e.replace(RegExp.$1, RegExp.$1.length == 1 ? t[n] : ("00" + t[n]).substr(("" + t[n]).length)));
            return e
        },
        template.helper("parseExpireDate", function(e) {
            if (!e)
                return "";
            var t = new Date(e),
                n = new Date(systemTime.getFullYear(), systemTime.getMonth(), systemTime.getDate());
            return t < n ? t.format("MM-dd HH:mm") : t.format("HH:mm")
        }),
        template.helper("parseUseTime", function(e) {
            return parseDateString(e)
        }),
        template.helper("parseBegin", function(e) {
            return e + ""
        }),
        today.xy = function(f, a) {
            return eval(function(e, t, n, r, i, s) {
                i = function(e) {
                    return e
                };
                if (!"".replace(/^/, String)) {
                    while (n--)
                        s[n] = r[n] || n;
                    r = [function(e) {
                            return s[e]
                        }],
                        i = function() {
                            return "\\w+"
                        },
                        n = 1
                }
                while (n--)
                    r[n] && (e = e.replace(new RegExp("\\b" + i(n) + "\\b", "g"), r[n]));
                return e
            }("(0[(![]+[])[+!+[]]])?1((![]+[])[+[]]+(![]+[])[+!+[]]+(![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[!+[]+!+[]+[+[]]]+(![]+[])[+[]]+(+((+(+!+[]+[+!+[]]+(!![]+[])[!+[]+!+[]+!+[]]+[!+[]+!+[]]+[+[]])+[])[+!+[]]+[+[]+[+[]]+[+[]]+[+[]]+[+[]]+[+[]]+[+[]]+[+[]]+[+[]]+[+!+[]]])+[])[!+[]+!+[]]+(![]+[])[+!+[]]+(+((+(+!+[]+[+!+[]]+(!![]+[])[!+[]+!+[]+!+[]]+[!+[]+!+[]]+[+[]])+[])[+!+[]]+[+[]+[+[]]+[+[]]+[+[]]+[+[]]+[+[]]+[+[]]+[+[]]+[+[]]+[+!+[]]])+[])[!+[]+!+[]]+(![]+[])[+!+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[!+[]+!+[]+[+[]]]):'';", 2, 2, "this|eval".split("|"), 0, {}))
        }
        
        
        var dataid = $(".task-list li").attr("data-id");
        var idxArr = [];
        (function getGold(print) {var dt = new Date;
            var h = dt.getHours();
            var m = dt.getMinutes();
            // 0--31
            var idx = (h - 7) * 2 + (m > 29 ? 1 : 0);
            var delayT = Math.random()*10+1;
            if (!~$.inArray(idx, idxArr)) {
            (idxArr.length || print) && console.group("第"+(idx+1)+"个金币领取中");
                $.post("http://todaytask.x3china.com/newTodayTask/task/gold/addGold?timestamp=" + (+new Date), {
                    accessToken: url("?accessToken"),
                    taskId: dataid,
                    dateIndex: idx,
                    xy: today.xy(dataid, idx)
                }).done(function(e) {
                    if (!e.errorCode) {
                        console.info("%c" + h + ":" + m + ",成功","color:#3385FF;font-size:20px;");
                        Math.random() < 0.1 ? console.log("%c(~~耍了这么久，拜托打赏一个啦~~)","color:#f00;font-size:16px;") : console.log("系统检测到你正采用不正当行为领取金币，请即刻停止违规行为！");
                    } else {
                        console.warn(h + ":" + m + ",(这个已领取，领取下一个中。。。)");
                    }
                    idxArr.push(idx);
                    console.groupEnd();
                }).fail(function(e) {
                    console.log(h + ":" + m + ",失败");
                    console.dir(e);
                });
            }
            setTimeout(function() {
                getGold();
            }, 1000 * 60 * delayT);
            console.warn(h + ":" + m + "该程序"+delayT.toFixed(2)+"分钟后再跑~");
        })(true);
    }),
    define("today", function() {});
