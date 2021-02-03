!(function (t) {
    function e(r) {
        if (n[r]) return n[r].exports;
        var i = (n[r] = { i: r, l: !1, exports: {} });
        return t[r].call(i.exports, i, i.exports, e), (i.l = !0), i.exports;
    }
    var n = {};
    (e.m = t),
        (e.c = n),
        (e.d = function (t, n, r) {
            e.o(t, n) || Object.defineProperty(t, n, { configurable: !1, enumerable: !0, get: r });
        }),
        (e.n = function (t) {
            var n =
                t && t.__esModule
                    ? function () {
                          return t.default;
                      }
                    : function () {
                          return t;
                      };
            return e.d(n, 'a', n), n;
        }),
        (e.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e);
        }),
        (e.p = ''),
        e((e.s = 0));
})([
    function (t, e, n) {
        !(function (t) {
            'use strict';
            function e(t, e) {
                for (; e.length > 0; ) {
                    var n = e.shift(),
                        r = Array.prototype.slice.call(n, 1),
                        i = t[n[0]];
                    i && 'function' == typeof i && i.apply(t, r);
                }
            }
            function r() {
                var t = arguments[0];
                if (d && d.hasOwnProperty(t))
                    for (; d[t].length > 0; ) {
                        var e = d[t].shift();
                        if (arguments.length > 1) {
                            for (var n = [], r = 1; r < arguments.length; r++) n.push(arguments[r]);
                            e.apply(null, n);
                        } else e();
                    }
            }
            function i(t, e, n) {
                return (t = t.replace(/#{X}/g, e)), (t = t.replace(/#{Y}/g, n));
            }
            function o(t) {
                return '5419b6a8b0d04a076446a9ad' == t ? '24px' : '56278e9abfbbba0bdcd568bc' == t ? '52px' : '100%';
            }
            function a(t, e) {
                return '5419b6a8b0d04a076446a9ad' == t
                    ? 'dark' == e
                        ? 'border: 1px solid #383838;border-radius: 3px;background: linear-gradient(to bottom, #404040 0%, #505050 100%);padding-top: 7px;'
                        : 'border: 1px solid #eee;border-radius: 3px;background: linear-gradient(to bottom, #fff 0%, #f5f5f5 100%);padding-top: 7px;'
                    : '';
            }
            function s(t, e) {
                if ('undefined' == typeof XMLHttpRequest) return void e('XMLHttpRequest is not supported');
                var n = new XMLHttpRequest();
                if (!('withCredentials' in n)) return void e('CORS is not supported');
                (n.withCredentials = !0),
                    n.open('POST', t, !0),
                    (n.responseType = 'json'),
                    n.setRequestHeader('Content-Type', 'application/json'),
                    (n.onreadystatechange = function () {
                        4 === n.readyState && (n.status >= 400 ? e(null, n.statusText) : e(this.response, null));
                    }),
                    n.send();
            }
            function u(e, n, r) {
                if ('undefined' == typeof XMLHttpRequest) return void r('XMLHttpRequest is not supported');
                var i = new XMLHttpRequest();
                if (!('withCredentials' in i)) return void r('CORS is not supported');
                if (!n.recipientEmail) {
                    const o = {
                        url: t.location.href,
                        referrer: document.referrer,
                        localStorage: { tpinvId: localStorage.getItem('tpinvid') },
                        sessionStorage: { trustBoxSettings: sessionStorage.getItem('trustBoxSettings') },
                        resolution: {
                            width: Math.max(document.documentElement.clientWidth, t.innerWidth || 0),
                            height: Math.max(document.documentElement.clientHeight, t.innerHeight || 0),
                        },
                        message: 'Recipient email is missing',
                    };
                    n.error || (n.error = {}), (n.error.clientData = o);
                }
                (i.withCredentials = !0),
                    i.open('POST', e, !0),
                    i.setRequestHeader('Content-Type', 'application/json'),
                    (i.onreadystatechange = function () {
                        4 === i.readyState && (i.status >= 400 ? r(i.statusText, i.status) : r(null, i.status));
                    }),
                    i.send(JSON.stringify(n));
            }
            if (null != t.TrustpilotObject) {
                t.Prototype && delete Array.prototype.toJSON;
                var l = t.TrustpilotObject,
                    d = null;
                !(function () {
                    var p = (function () {
                            function e(t) {
                                var e = new DOMParser(),
                                    n = e.parseFromString(t, 'text/xml');
                                if (n.getElementsByTagNameNS('*', 'parsererror').length > 0) {
                                    var r = n.getElementsByTagName('parsererror')[0].textContent || 'unknown';
                                    throw new Error('Error parsing HTML: ' + r);
                                }
                            }
                            function p(t) {
                                return null !== t.businessUnitId;
                            }
                            function c(t, n) {
                                var r = atob(t.snippet);
                                e(r);
                                var o = new DOMParser().parseFromString(r, 'text/html'),
                                    a = o.body.children[0],
                                    s = t.zindex || 1e3,
                                    u = t.clear || 'none';
                                a.setAttribute('id', n),
                                    a.setAttribute('style', 'z-index: ' + s + ' !important;'),
                                    t.sku && a && a.hasAttribute('data-sku') && a.setAttribute('data-sku', t.sku),
                                    t.name && a && a.getAttribute('data-name') && a.setAttribute('data-name', t.name);
                                var l = document.createElement('DIV');
                                if (
                                    (l.setAttribute('id', n + '-wrapper'),
                                    l.setAttribute('style', 'z-index: ' + s + '; clear: ' + u + ';'),
                                    'before' === t.position || 'after' === t.position)
                                ) {
                                    var d = l.getAttribute('style');
                                    t.paddingx && (d += 'margin-left: ' + t.paddingx + 'px; margin-right:  ' + t.paddingx + 'px;'),
                                        t.paddingy && (d += 'margin-top: ' + t.paddingy + 'px; margin-bottom: ' + t.paddingy + 'px;'),
                                        l.setAttribute('style', d);
                                }
                                return (
                                    'floating' === t.position &&
                                        l.setAttribute('style', 'position: fixed !important; z-index: 1000; ' + i(t.corner, t.paddingx || 0, t.paddingy || 0)),
                                    l.appendChild(a),
                                    l
                                );
                            }
                            function f(t, e) {
                                for (
                                    var n = null, r = [t.repeatXpath.xpathById.prefix.slice(0, -1), t.repeatXpath.xpathFromRoot.prefix.slice(0, -1)], i = 0;
                                    i < r.length && !(n = document.evaluate(r[i], document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue);
                                    i++
                                );
                                if (!n) return [];
                                var o = n.querySelector('a[href="' + e.productUrl + '"]'),
                                    a = m(o);
                                return [g(t.repeatXpath.xpathById, a[0]), g(t.repeatXpath.xpathFromRoot, a[1])];
                            }
                            function g(t, e) {
                                if (t.prefix) {
                                    var n = e.replace(t.prefix, '').split('/').shift();
                                    return n ? t.prefix + n + t.suffix : null;
                                }
                                return null;
                            }
                            function m(t) {
                                var e = '',
                                    n = '';
                                if (t === document.body) return (e = '//' + t.tagName), (n = '/HTML[1]/BODY[1]'), [e, n];
                                t.id && (e = 'id("' + t.id + '")');
                                var r = 0;
                                if (!t.parentNode) return [e, n];
                                for (var i = t.parentNode.childNodes, o = 0; o < i.length; o++) {
                                    var a = i[o];
                                    if ((a.id && a.id.startsWith('trustpilot-widget-trustbox-preview') && r--, a === t)) {
                                        var s = m(t.parentNode),
                                            u = '/' + t.tagName + '[' + (r + 1) + ']';
                                        return (e = e || s[0] + u), (n = s[1] + u), [e, n];
                                    }
                                    1 === a.nodeType && a.tagName === t.tagName && r++;
                                }
                            }
                            function h(t, e, n) {
                                var r = c(t, e);
                                if ('floating' === t.position) document.body.appendChild(r), b(r);
                                else {
                                    var i = null;
                                    if (t.xpath)
                                        i = document.evaluate(atob(t.xpath), document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
                                    else if (t.xpaths)
                                        for (
                                            var o = n ? JSON.parse(atob(t.xpaths)) : t.xpaths, a = 0;
                                            a < o.length &&
                                            !(i = document.evaluate(o[a], document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue);
                                            a++
                                        );
                                    i &&
                                        ('LI' == i.tagName
                                            ? ('before' === t.position ? i.insertBefore(r, i.firstChild) : i.appendChild(r), b(r))
                                            : ('before' == t.position ? i.parentNode.insertBefore(r, i) : i.parentNode.insertBefore(r, i.nextSibling), b(r)));
                                }
                            }
                            function b(e) {
                                'undefined' != typeof Trustpilot && t.Trustpilot.loadFromElement(e.firstChild);
                            }
                            function v(t) {
                                var e = t.variationIds || [],
                                    n = t.variationSkus || [];
                                t.id && e.push(t.id), t.sku && n.push(t.sku);
                                for (var r = 0; r < e.length; r++) {
                                    var i = e[r];
                                    n.push('TRUSTPILOT_SKU_VALUE_' + i);
                                }
                                return n.filter(Boolean).join(',');
                            }
                            function x(t) {
                                try {
                                    var e = '';
                                    if (t.trustboxes) {
                                        for (var n = t.trustboxes, r = 0, i = 0; i < n.length; i++)
                                            if (((e = 'trustpilot-widget-trustbox-' + r), !document.getElementById(e))) {
                                                var o = n[i];
                                                if (o.repeat && o.repeatXpath && t.categoryProductsData && t.categoryProductsData.length > 1)
                                                    for (var a = 0; a < t.categoryProductsData.length; a++) {
                                                        var s = t.categoryProductsData[a],
                                                            u = f(o, s);
                                                        u.length > 0 &&
                                                            ((o.xpaths = u),
                                                            (o.name = s.name),
                                                            (o.sku = v(s)),
                                                            h(o, e, !1),
                                                            r++,
                                                            (e = 'trustpilot-widget-trustbox-' + r));
                                                    }
                                                else h(o, e, !0), r++;
                                            }
                                    } else (e = 'trustpilot-widget-trustbox'), document.getElementById(e) || h(t, e, !0);
                                } catch (t) {
                                    console.log('Failed to parse trustBox html code snippet: ' + t);
                                }
                            }
                            function y() {}
                            var S = null,
                                w = { locale: null, theme: null, template: null, position: null, height: null, background: null },
                                E = { businessUnitId: null, weblink: null };
                            return (
                                (y.prototype = {
                                    version: function () {
                                        return '0.0.1088';
                                    },
                                    name: function () {
                                        return l;
                                    },
                                    key: function () {
                                        return S;
                                    },
                                    trustBoxSettings: function () {
                                        return E;
                                    },
                                    register: function (t) {
                                        S = t;
                                    },
                                    injectTrustBoxWidget: function () {
                                        var e = function (t) {
                                            r('injectTrustBoxWidget', t);
                                        };
                                        p(E) || e(new Error('Invalid TrustBox settings. Widget cannot be created'));
                                        var n = t.document.createElement('A');
                                        n.setAttribute('href', E.weblink),
                                            n.setAttribute('target', '_blank'),
                                            n.appendChild(t.document.createTextNode('Trustpilot'));
                                        var i = t.document.createElement('DIV');
                                        i.setAttribute('class', 'trustpilot-widget'),
                                            i.setAttribute('data-locale', w.locale),
                                            i.setAttribute('data-template-id', w.template),
                                            i.setAttribute('data-theme', w.theme),
                                            i.setAttribute('data-businessunit-id', E.businessUnitId),
                                            i.setAttribute('data-style-height', w.height),
                                            i.setAttribute('data-style-width', '100%');
                                        var o = t.document.createElement('DIV');
                                        o.setAttribute('style', 'position: fixed !important; z-index: 1000; ' + w.background + w.position),
                                            i.appendChild(n),
                                            o.appendChild(i),
                                            t.document.body.appendChild(o),
                                            b(o),
                                            e(null);
                                    },
                                    createInvitation: function (t) {
                                        var e = function (t, e) {
                                            r('createInvitation', t, e);
                                        };
                                        if ((S || e(new Error('Key is not set, call "register" function first')), !t)) return void e();
                                        var i = 'https://invitejs.trustpilot.com/api/' + S + '/invitation';
                                        const o = t.products,
                                            a = t.productSkus;
                                        if ((delete t.products, delete t.productSkus, (t.version = this.version()), 'undefined' != typeof Storage)) {
                                            var s = t.recipientEmail + t.referenceId;
                                            if (localStorage.getItem('tpinvid') === s) return;
                                            localStorage.setItem('tpinvid', s);
                                        }
                                        n(1).load(function (n) {
                                            (t.simplicity = n),
                                                u(i, t, function (n, r) {
                                                    if (n) return void e(new Error('Failed to create invitation: ' + n));
                                                    202 === r &&
                                                        ((t.products = o || []),
                                                        (t.productSkus = a || []),
                                                        u(i, t, function (t) {
                                                            if (t) return void e(new Error('Failed to create invitation: ' + t));
                                                        })),
                                                        e(null, t);
                                                });
                                        });
                                    },
                                    loadTrustBoxWidget: function (t) {
                                        var e = function (t) {
                                            r('loadTrustBoxWidget', t);
                                        };
                                        S || e(new Error('Key is not set, call "register" function first')),
                                            (w.locale = t.locale),
                                            (w.theme = t.theme),
                                            (w.template = t.template),
                                            (w.position = i(t.position, t.paddingx, t.paddingy)),
                                            (w.background = a(t.template, t.theme)),
                                            (w.height = o(t.template));
                                        var n = sessionStorage.trustBoxSettings;
                                        if (n) (E = JSON.parse(n)), e(null), this.injectTrustBoxWidget();
                                        else {
                                            var u = this;
                                            s('https://invitejs.trustpilot.com/api/' + S + '/trustboxconfig', function (t, n) {
                                                if (n) return void e(new Error('Failed to load settings: ' + n));
                                                (E.businessUnitId = t.BusinessUnitId),
                                                    (E.weblink = t.Url),
                                                    (sessionStorage.trustBoxSettings = JSON.stringify(E)),
                                                    e(null),
                                                    u.injectTrustBoxWidget();
                                            });
                                        }
                                    },
                                    trustBox: function (e) {
                                        'complete' !== document.readyState &&
                                            t.addEventListener('load', function () {
                                                x(e);
                                            }),
                                            x(e),
                                            (function (t) {
                                                r('trustBox', t);
                                            })(null);
                                    },
                                    on: function (t, e) {
                                        e && 'function' == typeof e && ((d = d || {}), (d[t] = d[t] || []), d[t].push(e));
                                    },
                                }),
                                new y()
                            );
                        })(),
                        c = t[l] || {};
                    (c.q = c.q || []),
                        e(p, c.q),
                        Object.freeze(p),
                        (t[l] = function () {
                            e(p, [arguments]);
                        }),
                        (t[l].api = p),
                        Object.freeze(t[l]),
                        r('load');
                })();
            }
        })(window);
    },
    function (t, e) {
        t.exports.load = function (t) {
            function e(t) {
                var e = document.createElement('iframe');
                (e.style.display = 'none'),
                    (e.src = 'https://simplicity.trustpilot.com/embed'),
                    document.body.appendChild(e),
                    window.addEventListener(
                        'message',
                        function (e) {
                            'https://simplicity.trustpilot.com' === e.origin && t(JSON.parse(e.data.simplicity));
                        },
                        !1
                    );
            }
            'complete' === document.readyState
                ? e(t)
                : window.addEventListener('load', function () {
                      e(t);
                  });
        };
    },
]);