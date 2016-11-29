webpackJsonp([0], [, function (t, e) {}, function (t, e, n) {
  "use strict";
  e.example = {
    template: n(16),
    controller: function (t, e, n) {
      var r = this;
      t.get("/assets/db.json").then(function (t) {
        return r.data = t.data
      }), t.get("/assets/portal_modeling.config.json").then(function (t) {
        r.configData = t.data
      }), t.get("/assets/portal_modeling.json").then(function (t) {
        var e = [];
        n.each(t.data, function (t, n) {
          n < 20 && (t._id = n, t._isFiltered = !0, t._collapseIcon = "sms-glyph-arrow_carrot-2dwnn_alt", t._indent = Math.floor(4 * Math.random()), t._showCollapseIcon = t._indent < 3, t._collapseClicked = "collapseCallback", t._isItCollapsed = 0 !== t._indent, t._beforePrimaryIcon = "star", t._afterPrimaryIcon = "delete", t._hoverIconPrimary = n % 2 === 0 ? "sms-glyph-arrow_carrot-2dwnn_alt" : "", t._hoverIconSecondary = n % 3 === 0 ? "sms-glyph-arrow_carrot-2dwnn_alt h3" : "", e.push(t))
        }), r.portalModeling = e;
        var i = n.where(r.portalModeling, {
          _indent: 0
        });
        console.log(i.length)
      }), this.portalModelingCallback = {
        normalDollars: function (t, n) {
          var i = r.portalModeling.findIndex(function (e) {
            return e._id === t._id
          });
          r.portalModeling[i].normal_dollars = n, e.$evalAsync()
        },
        baseGuaranteedImp: function (t, n) {
          var i = r.portalModeling.findIndex(function (e) {
            return e._id === t._id
          });
          r.portalModeling[i].base_guaranteed_imp = n, e.$evalAsync()
        },
        cyGuaranteedImp: function (t, n) {
          var i = r.portalModeling.findIndex(function (e) {
            return e._id === t._id
          });
          r.portalModeling[i].cy_guaranteed_imp = n, e.$evalAsync()
        },
        collapseCallback: function (t) {
          console.log(t, "collapse clicked");
          var i = !0;
          r.portalModeling = n.each(r.portalModeling, function (e, n) {
            n > t._id && i && (e._indent > t._indent ? e._isItCollapsed = !e._isItCollapsed : e._indent === t._indent && (i = !1))
          }), e.$evalAsync()
        }
      }, this.callBackApi = {
        callback1617Guar: function (t, n) {
          var i = r.data.data.findIndex(function (e) {
            return e._id === t._id
          });
          r.data.data[i]["16/17 Dollars"] = n, e.$evalAsync()
        },
        clientMix: function (t, n) {
          var i = r.data.data.findIndex(function (e) {
            return e._id === t._id
          });
          r.data.data[i]["17/18 client mix"] = n, e.$evalAsync()
        },
        effectiveROC: function (t, n) {
          var i = r.data.data.findIndex(function (e) {
            return e._id === t._id
          });
          r.data.data[i]["17/18 effective ROC"] = n, e.$evalAsync()
        }
      }
    }
  }
}, function (t, e, n) {
  "use strict";
  var r = n(0);
  n(15);
  var i = function () {
    function t() {}
    return t.prototype.rowSelectionHandler = function (t) {
      console.log(t)
    }, t.prototype.updateColumnValue = function (t, e, n) {
      this.callback[n.callbackKey](t, e)
    }, t.prototype.callCollapse = function (t) {
      this.callback[t[this.config.rowHeaderDefaults.collapseCallback]](t)
    }, t
  }();
  e.flexGrid = {
    template: n(17),
    controller: i,
    bindings: {
      data: "<",
      config: "<",
      callback: "="
    }
  }, e.__esModule = !0, e["default"] = r.module("flexGridComponent", []).component("flexGrid", e.flexGrid).name
}, function (t, e) {
  ! function () {
    "use strict";

    function t(t) {
      return function (e, n) {
        var r = parseFloat(parseFloat(t.formatAsNumber(e)).toFixed(n));
        return isNaN(r) || null === e ? 0 : r
      }
    }
    angular.module("NumbersUtil").filter("stringToNumber", t), t.$inject = ["NumberConversionService"]
  }()
}, function (t, e) {
  ! function () {
    "use strict";

    function t(t) {
      return function (e, n) {
        var r, i = n || 0;
        return isNaN(Number(parseFloat(e))) || null === e ? "$0" : (r = parseFloat(parseFloat(e).toFixed(i)), t.wrapNegativeInParens(t.addCommas(t.padWithZeroes(r, n)), "$"))
      }
    }
    angular.module("NumbersUtil").filter("currencyOldStyle", t), t.$inject = ["NumberConversionService"]
  }()
}, function (t, e) {
  ! function () {
    "use strict";

    function t() {
      function t(t) {
        t = t || "";
        var e = t.toString().replace(/\((.*)\)/g, "-$1").replace(/[^-\.\d]/g, "");
        return e
      }

      function e(t) {
        var e = t ? t.toString().replace(/[^.0-9kKmMbB]/g, "") : "",
          n = e.search(/[kK|mM|bB]/g);
        if (!(n > -1)) return e;
        var r = e.substr(n, 1).toLowerCase();
        return "k" === r ? r = [0, 0, 0, 0] : "m" === r ? r = [0, 0, 0, 0, 0, 0, 0] : "b" === r && (r = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), e = e.slice(0, n), e = e.split("."), r[0] = e[0], e.length > 1 && (r = e[1].split("").reduce(function (t, e, n) {
          return isNaN(parseInt(e, 10)) || (t[n + 1] = e), t
        }, r)), r.join("")
      }

      function n(t, e, n) {
        var r = t.toLocaleString("en");
        return e = e || "", n = n || "", r.match(/-(.*)/g) ? r.replace(/-(.*)/g, function (t, r) {
          return "(" + e + r + n + ")"
        }) : e + t + n
      }

      function r(t, e) {
        e = e || 0;
        var r = String(n(t)).length - 1,
          i = String(n(t)).indexOf("."),
          o = e - (r - i),
          s = String(t);
        return e > 0 && i === -1 && (o = e, s += "."), Array.apply(null, Array(o >= 0 ? o : 0)).reduce(function (t, e) {
          return s += "0"
        }, s)
      }

      function i(t) {
        if (isNaN(Number(t)) || null === t) return NaN;
        var e = String(t).split("."),
          n = parseFloat(t) < 0,
          r = e[0].replace(/^-(.*)/g, "$1"),
          i = e[1] ? "." + e[1] : "",
          o = "";
        return o = r.split("").reverse().reduce(function (t, e, n, r) {
          return n % 3 === 0 && n > 0 && (t += ","), t += e
        }, "").split("").reverse().concat([i]).join(""), n ? "-" + o : o
      }
      this.formatAsNumber = t, this.convertLettersToNumbers = e, this.wrapNegativeInParens = n, this.padWithZeroes = r, this.addCommas = i
    }
    angular.module("NumbersUtil").service("NumberConversionService", t)
  }()
}, function (t, e) {
  ! function () {
    "use strict";

    function t(t) {
      return function (e, n) {
        var r = t.formatAsNumber(e),
          i = n || 0;
        return isNaN(Number(parseFloat(r))) || null === e ? "0" : (r = parseFloat(r).toFixed(i), t.wrapNegativeInParens(t.addCommas(t.padWithZeroes(r, n))))
      }
    }
    angular.module("NumbersUtil").filter("numberOldStyle", t), t.$inject = ["NumberConversionService"]
  }()
}, function (t, e) {
  ! function () {
    angular.module("NumbersUtil", [])
  }()
}, function (t, e) {
  ! function () {
    "use strict";

    function t(t) {
      return function (e, n) {
        var r, i = n || 0;
        return isNaN(Number(parseFloat(e))) || null === e ? "0%" : (r = parseFloat(parseFloat(e).toFixed(i)), t.wrapNegativeInParens(t.addCommas(t.padWithZeroes(r, n)), "", "%"))
      }
    }
    angular.module("NumbersUtil").filter("percentOldStyle", t), t.$inject = ["NumberConversionService"]
  }()
}, function (t, e) {
  ! function () {
    "use strict";

    function t() {
      return {
        controller: "EditInputController",
        bindings: {
          value: "<",
          record: "<",
          propertyToUpdate: "@",
          displayFormat: "@",
          editingFormat: "@",
          action: "&"
        },
        template: '<input value="" />'
      }
    }

    function e(t, e, n, r, i) {
      function o() {
        d.displayFormat && (x = angular.fromJson(d.displayFormat)), d.editingFormat && (C = angular.fromJson(d.editingFormat)), w.onNext("blur")
      }

      function s() {
        a = g.combineLatest(w, function (t, e) {
          return {
            value: t,
            state: e
          }
        }).subscribe(function (t) {
          "blur" === t.state ? v.val(e(x.filter)(t.value, x.precision)) : "focus" === t.state && v.val(e(C.filter)(t.value, C.precision))
        }), l = _.subscribe(function () {
          w.onNext("focus")
        }), f = b.withLatestFrom(g, function (t, n) {
          return {
            elementValue: h(t.target.value),
            storedValue: e(C.filter)(h(n), C.precision)
          }
        }).subscribe(function (t) {
          w.onNext("blur"), isNaN(t.elementValue) && (t.elementValue = 0), t.elementValue !== t.storedValue && d.action({
            record: d.record,
            elementValue: t.elementValue
          })
        }), p = m.subscribe(function (t) {
          angular.element(v).triggerHandler("blur")
        })
      }

      function u() {
        a.dispose(), l.dispose(), f.dispose(), p.dispose()
      }

      function c(t) {
        t.value && g.onNext(t.value.currentValue)
      }

      function h(t) {
        return parseFloat(n.formatAsNumber(n.convertLettersToNumbers(t)))
      }
      var a, l, f, p, d = this,
        v = angular.element(r.find("input")[0]),
        b = t.Observable.fromEvent(v, "blur"),
        _ = t.Observable.fromEvent(v, "focus"),
        y = t.Observable.fromEvent(v, "keyup"),
        m = y.filter(function (t) {
          return 13 === t.keyCode
        }),
        w = new t.ReplaySubject,
        g = new t.ReplaySubject,
        x = {
          filter: "numberOldStyle",
          precision: 0
        },
        C = {
          filter: "stringToNumber",
          precision: 0
        };
      d.$onInit = o, d.$postLink = s, d.$onChanges = c, d.$onDestroy = u
    }
    angular.module("InputManager").controller("EditInputController", e).component("editInput", t()), e.$inject = ["Rx", "$filter", "NumberConversionService", "$element", "$log"]
  }()
}, function (t, e) {
  ! function () {
    angular.module("InputManager", ["thirdparty", "NumbersUtil"])
  }()
}, function (t, e) {
  ! function () {
    "use strict";

    function t(t, e, n, r, i) {
      function o() {
        l = r(n.selected)(t), l ? e.addClass("selected") : e.removeClass("selected")
      }

      function s() {
        f = r(n.enabled)(t)
      }

      function u() {
        function i(e) {
          f && t.$apply(function () {
            c(t, {
              obj: {
                index: h,
                type: a,
                selected: l
              }
            })
          })
        }
        c = r(n.callback), h = r(n.index)(t), a = n.type, l = r(n.selected)(t), f = "undefined" == typeof n.enabled || r(n.enabled)(t), e.on("click", i)
      }
      var c, h, a, l, f;
      this.$postLink = u, n.$observe("selected", o), n.$observe("enabled", s)
    }

    function e() {
      return {
        restrict: "A",
        controller: "SelectableCellController"
      }
    }
    angular.module("InputManager").controller("SelectableCellController", t).directive("selectableCell", e), t.$inject = ["$scope", "$element", "$attrs", "$parse", "$interpolate"]
  }()
}, function (t, e, n) {
  "use strict";
  var r = n(19),
    i = (n.n(r), n(20));
  n.n(i);
  ! function () {
    function t(t) {
      var e = {};
      return t.Rx ? (e = t.Rx, delete t.Rx) : e = r, e
    }

    function e(t) {
      var e = {};
      return t._ ? (e = t._, delete t._) : e = i, e
    }
    angular.module("thirdparty", []), t.$inject = ["$window"], angular.module("thirdparty").factory("Rx", t).factory("_", e)
  }()
}, , function (t, e) {}, function (t, e) {
  t.exports = '<h1 class="px2">Sassy FlexGrid</h1>\n<div class="px2">\n  <!--<flex-grid data="$ctrl.data.data" config="$ctrl.data.config" callback="$ctrl.callBackApi"></flex-grid>-->\n  <flex-grid data="$ctrl.portalModeling" config="$ctrl.configData.config" callback="$ctrl.portalModelingCallback"></flex-grid>\n</div>\n'
}, function (t, e) {
  t.exports = '<div class="component">\n  <div class="">\n    <div class="flex">\n      <div class="{{::$ctrl.config.rowHeaderDefaults.width}} {{::$ctrl.config.columns[0].columnHeaderStyles}} px1  left-align tier1-column"></div>\n      <div class="{{::column.width}} {{::column.columnHeaderStyles}} caps end-align px1 py1 table-cell center tier2-column overflow-auto"\n        ng-repeat="column in $ctrl.config.columns track by $index">\n        <span class="end-align">{{::column.title}}</span>\n      </div>\n    </div>\n    <div class="flex {{::row.rowStyles}} {{::$ctrl.config.rowConfig.rowStyles}}" ng-repeat="row in $ctrl.data track by row._id"\n      ng-if="!row[$ctrl.config.rowHeaderDefaults.isCollapseKey]">\n      <!-- right side row headers -->\n      <div class="{{::$ctrl.config.rowHeaderDefaults.width}}\n       px1 py1 border left-align tier1-column">\n        <div class="flex pl{{::row[$ctrl.config.rowHeaderDefaults.indentKey]}}">\n          <i ng-if="row[$ctrl.config.rowHeaderDefaults.showCollapseIconKey]" class="mr1 {{::row[$ctrl.config.rowHeaderDefaults.collapseIcon]}}"\n            ng-click="$ctrl.callCollapse(row)"></i>\n          <i ng-if="!row[$ctrl.config.rowHeaderDefaults.showCollapseIconKey]" class="mr2">&nbsp;</i>\n          <div>\n            <span class="{{::row[$ctrl.config.rowHeaderDefaults.primaryTextStyleKey]}}">\n              {{row[$ctrl.config.rowHeaderDefaults.primaryTextKey]}}\n            </span>\n            <span class="{{row[$ctrl.config.rowHeaderDefaults.secondaryTextStyleKey]}}" ng-if="row[$ctrl.config.rowHeaderDefaults.secondaryTextKey]">({{row[$ctrl.config.rowHeaderDefaults.secondaryTextKey]}})</span>\n            <br/>\n            <span class="{{row[$ctrl.config.rowHeaderDefaults.tertiaryTextStyleKey]}}">{{row[$ctrl.config.rowHeaderDefaults.tertiaryTextKey]}}</span>\n          </div>\n          <i ng-if="row[$ctrl.config.rowHeaderDefaults.afterPrimaryIconKey]" class="mr1 {{::row[$ctrl.config.rowHeaderDefaults.afterPrimaryIconKey]}}"></i>\n          <div class="float-right-auto">\n            <i ng-if="row[$ctrl.config.rowHeaderDefaults.hoverIconPrimaryKey]" class="mr1 {{::row[$ctrl.config.rowHeaderDefaults.hoverIconPrimaryKey]}}"></i>\n            <i ng-if="row[$ctrl.config.rowHeaderDefaults.hoverIconSecondaryKey]" class="mr1 {{::row[$ctrl.config.rowHeaderDefaults.hoverIconSecondaryKey]}}"></i>\n          </div>\n        </div>\n      </div>\n      <!-- individual columns in the table -->\n      <div class="{{::column.columnStyles}} px1 py1 tier2-column {{::column.width}} overflow-auto" ng-class="{\'editable-bg\': column.editable}"\n        ng-repeat="column in $ctrl.config.columns track by $index">\n        <div class=" selectable-cell " ng-if="!column.editable" ng-class="{enabled: $ctrl.cellSelectionEnabled, disabled: !$ctrl.cellSelectionEnabled}">\n          <span ng-if="::column.format === \'none\'" class="align-middle">{{row[column.objectKey]}}</span>\n          <span ng-if="::column.format === \'percentOldStyle\'" class="align-middle">{{row[column.objectKey] | percentOldStyle}}</span>\n          <span ng-if="::column.format === \'currencyOldStyle\'" class="align-middle">{{row[column.objectKey] | currencyOldStyle}}</span>\n          <span ng-if="::column.format === \'numberOldStyle\'" class="align-middle">{{row[column.objectKey] | numberOldStyle}}</span>\n          <span ng-if="::column.format === \'convertStringToNumber\'" class="align-middle">{{row[column.objectKey] | convertStringToNumber}}</span>\n        </div>\n        <div ng-if="::column.editable" class="edit-input-text">\n          <edit-input value="row[column.objectKey]" property-to-update="row[column.objectKey]" record="row" action="$ctrl.updateColumnValue(record, elementValue, column)"\n            display-format=\'{"filter": "{{column.format}}"}\' editing-format=\'{"filter": "stringToNumber", "precision": 0}\'>\n          </edit-input>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n'
}, function (t, e) {
  function n() {
    throw new Error("setTimeout has not been defined")
  }

  function r() {
    throw new Error("clearTimeout has not been defined")
  }

  function i(t) {
    if (a === setTimeout) return setTimeout(t, 0);
    if ((a === n || !a) && setTimeout) return a = setTimeout, setTimeout(t, 0);
    try {
      return a(t, 0)
    } catch (e) {
      try {
        return a.call(null, t, 0)
      } catch (e) {
        return a.call(this, t, 0)
      }
    }
  }

  function o(t) {
    if (l === clearTimeout) return clearTimeout(t);
    if ((l === r || !l) && clearTimeout) return l = clearTimeout, clearTimeout(t);
    try {
      return l(t)
    } catch (e) {
      try {
        return l.call(null, t)
      } catch (e) {
        return l.call(this, t)
      }
    }
  }

  function s() {
    v && p && (v = !1, p.length ? d = p.concat(d) : b = -1, d.length && u())
  }

  function u() {
    if (!v) {
      var t = i(s);
      v = !0;
      for (var e = d.length; e;) {
        for (p = d, d = []; ++b < e;) p && p[b].run();
        b = -1, e = d.length
      }
      p = null, v = !1, o(t)
    }
  }

  function c(t, e) {
    this.fun = t, this.array = e
  }

  function h() {}
  var a, l, f = t.exports = {};
  ! function () {
    try {
      a = "function" == typeof setTimeout ? setTimeout : n
    } catch (t) {
      a = n
    }
    try {
      l = "function" == typeof clearTimeout ? clearTimeout : r
    } catch (t) {
      l = r
    }
  }();
  var p, d = [],
    v = !1,
    b = -1;
  f.nextTick = function (t) {
    var e = new Array(arguments.length - 1);
    if (arguments.length > 1)
      for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
    d.push(new c(t, e)), 1 !== d.length || v || i(u)
  }, c.prototype.run = function () {
    this.fun.apply(null, this.array)
  }, f.title = "browser", f.browser = !0, f.env = {}, f.argv = [], f.version = "", f.versions = {}, f.on = h, f.addListener = h, f.once = h, f.off = h, f.removeListener = h, f.removeAllListeners = h, f.emit = h, f.binding = function (t) {
    throw new Error("process.binding is not supported")
  }, f.cwd = function () {
    return "/"
  }, f.chdir = function (t) {
    throw new Error("process.chdir is not supported")
  }, f.umask = function () {
    return 0
  }
}, function (t, e, n) {
  (function (t, r, i) {
    var o;
    (function (s) {
      function u(t) {
        return t && t.Object === Object ? t : null
      }

      function c(t) {
        for (var e = [], n = 0, r = t.length; n < r; n++) e.push(t[n]);
        return e
      }

      function h(t) {
        return function () {
          try {
            return t.apply(this, arguments)
          } catch (e) {
            return re.e = e, re
          }
        }
      }

      function a(t) {
        throw t
      }

      function l(t, e) {
        if (oe && e.stack && "object" == typeof t && null !== t && t.stack && t.stack.indexOf(he) === -1) {
          for (var n = [], r = e; r; r = r.source) r.stack && n.unshift(r.stack);
          n.unshift(t.stack);
          var i = n.join("\n" + he + "\n");
          t.stack = f(i)
        }
      }

      function f(t) {
        for (var e = t.split("\n"), n = [], r = 0, i = e.length; r < i; r++) {
          var o = e[r];
          p(o) || d(o) || !o || n.push(o)
        }
        return n.join("\n")
      }

      function p(t) {
        var e = b(t);
        if (!e) return !1;
        var n = e[0],
          r = e[1];
        return n === ue && r >= ce && r <= Ps
      }

      function d(t) {
        return t.indexOf("(module.js:") !== -1 || t.indexOf("(node.js:") !== -1
      }

      function v() {
        if (oe) try {
          throw new Error
        } catch (t) {
          var e = t.stack.split("\n"),
            n = e[0].indexOf("@") > 0 ? e[1] : e[2],
            r = b(n);
          if (!r) return;
          return ue = r[0], r[1]
        }
      }

      function b(t) {
        var e = /at .+ \((.+):(\d+):(?:\d+)\)$/.exec(t);
        if (e) return [e[1], Number(e[2])];
        var n = /at ([^ ]+):(\d+):(?:\d+)$/.exec(t);
        if (n) return [n[1], Number(n[2])];
        var r = /.*@(.+):(\d+)$/.exec(t);
        return r ? [r[1], Number(r[2])] : void 0
      }

      function _(t, e, n, r, i, o) {
        var u = Qe(t),
          c = u.length,
          h = Qe(e),
          a = h.length;
        if (c !== a && !r) return !1;
        for (var l, f = c; f--;)
          if (l = u[f], !(r ? l in e : Ue.call(e, l))) return !1;
        for (var p = r; ++f < c;) {
          l = u[f];
          var d, v = t[l],
            b = e[l];
          if (!(d === s ? n(v, b, r, i, o) : d)) return !1;
          p || (p = "constructor" === l)
        }
        if (!p) {
          var _ = t.constructor,
            y = e.constructor;
          if (_ !== y && "constructor" in t && "constructor" in e && !("function" == typeof _ && _ instanceof _ && "function" == typeof y && y instanceof y)) return !1
        }
        return !0
      }

      function y(t, e, n) {
        switch (n) {
          case Ee:
          case Ne:
            return +t === +e;
          case De:
            return t.name === e.name && t.message === e.message;
          case Oe:
            return t !== +t ? e !== +e : t === +e;
          case je:
          case Fe:
            return t === e + ""
        }
        return !1
      }

      function m(t) {
        return !!t && "object" == typeof t
      }

      function w(t) {
        return "number" == typeof t && t > -1 && t % 1 === 0 && t <= Je
      }

      function g(t) {
        return m(t) && w(t.length) && !!ze[Ge.call(t)]
      }

      function x(t, e) {
        for (var n = -1, r = t.length; ++n < r;)
          if (e(t[n], n, t)) return !0;
        return !1
      }

      function C(t, e, n, r, i, o) {
        var u = -1,
          c = t.length,
          h = e.length;
        if (c !== h && !(r && h > c)) return !1;
        for (; ++u < c;) {
          var a, l = t[u],
            f = e[u];
          if (a !== s) {
            if (a) continue;
            return !1
          }
          if (r) {
            if (!x(e, function (t) {
                return l === t || n(l, t, r, i, o)
              })) return !1
          } else if (l !== f && !n(l, f, r, i, o)) return !1
        }
        return !0
      }

      function E(t, e, n, r, i, o) {
        var s = Xe(t),
          u = Xe(e),
          c = Ce,
          h = Ce;
        s || (c = Ge.call(t), c === xe ? c = ke : c !== ke && (s = g(t))), u || (h = Ge.call(e), h === xe && (h = ke));
        var a = c === ke && !Ze(t),
          l = h === ke && !Ze(e),
          f = c === h;
        if (f && !s && !a) return y(t, e, c);
        if (!r) {
          var p = a && Ue.call(t, "__wrapped__"),
            d = l && Ue.call(e, "__wrapped__");
          if (p || d) return n(p ? t.value() : t, d ? e.value() : e, r, i, o)
        }
        if (!f) return !1;
        i || (i = []), o || (o = []);
        for (var v = i.length; v--;)
          if (i[v] === t) return o[v] === e;
        i.push(t), o.push(e);
        var b = (s ? C : _)(t, e, n, r, i, o);
        return i.pop(), o.pop(), b
      }

      function N(t, e, n, r, i) {
        return t === e || (null == t || null == e || !ut(t) && !m(e) ? t !== t && e !== e : E(t, e, N, n, r, i))
      }

      function D(t, e) {
        for (var n = new Array(t), r = 0; r < t; r++) n[r] = e();
        return n
      }

      function A(t, e) {
        this.id = t, this.value = e
      }

      function S(t, e) {
        this.scheduler = t, this.disposable = e, this.isDisposed = !1
      }

      function O(t, e) {
        e.isDisposed || (e.isDisposed = !0, e.disposable.dispose())
      }

      function k(t) {
        this._s = t, this.isDisposed = !1
      }

      function j(t) {
        this._s = t
      }

      function q(t) {
        this._s = t, this._l = t.length, this._i = 0
      }

      function F(t) {
        this._a = t
      }

      function T(t) {
        this._a = t, this._l = $(t), this._i = 0
      }

      function R(t) {
        return "number" == typeof t && Ut.isFinite(t)
      }

      function M(t) {
        var e, n = t[be];
        if (!n && "string" == typeof t) return e = new j(t), e[be]();
        if (!n && t.length !== s) return e = new F(t), e[be]();
        if (!n) throw new TypeError("Object is not iterable");
        return t[be]()
      }

      function I(t) {
        var e = +t;
        return 0 === e ? e : isNaN(e) ? e : e < 0 ? -1 : 1
      }

      function $(t) {
        var e = +t.length;
        return isNaN(e) ? 0 : 0 !== e && R(e) ? (e = I(e) * Math.floor(Math.abs(e)), e <= 0 ? 0 : e > yr ? yr : e) : e
      }

      function P(t, e) {
        return xn(t) || (t = On), new wr(e, t)
      }

      function L(t, e) {
        this.observer = t, this.parent = e
      }

      function V(t, e) {
        return t.amb(e)
      }

      function W() {
        return !1
      }

      function K() {
        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
        return e
      }

      function W() {
        return !1
      }

      function K() {
        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
        return e
      }

      function W() {
        return !1
      }

      function B() {
        return []
      }

      function W() {
        return !1
      }

      function B() {
        return []
      }

      function K() {
        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
        return e
      }

      function z(t) {
        return function (e) {
          return t.subscribe(e)
        }
      }

      function H(t) {
        return t.toArray()
      }

      function U(t) {
        return t.length > 0
      }

      function G(t) {
        return {
          "@@iterator": function () {
            return {
              next: function () {
                return {
                  done: !1,
                  value: t
                }
              }
            }
          }
        }
      }

      function G(t) {
        return {
          "@@iterator": function () {
            return {
              next: function () {
                return {
                  done: !1,
                  value: t
                }
              }
            }
          }
        }
      }

      function J(t, e, n) {
        var r = we(e, n, 3);
        return t.map(function (e, n) {
          var i = r(e, n, t);
          return ee(i) && (i = ar(i)), (me(i) || ye(i)) && (i = mr(i)), i
        }).concatAll()
      }

      function Q(t, e, n) {
        for (var r = 0, i = t.length; r < i; r++)
          if (n(t[r], e)) return r;
        return -1
      }

      function Z(t) {
        this.comparer = t, this.set = []
      }

      function X(t, e) {
        return function (n) {
          for (var r = n, i = 0; i < e; i++) {
            var o = r[t[i]];
            if ("undefined" == typeof o) return s;
            r = o
          }
          return r
        }
      }

      function Y(t) {
        if (0 === t.length) throw new ae;
        return t[0]
      }

      function tt(t, e, n, r) {
        var i = we(e, n, 3);
        return new ks(function (e) {
          return t.subscribe(new po(e, t, i, r))
        }, t)
      }

      function et(t) {
        return t ? Zn.isObservable(t) ? t : ee(t) ? Zn.fromPromise(t) : st(t) || ot(t) ? Co.call(this, t) : ne(t) ? it.call(this, t) : me(t) || ye(t) ? nt.call(this, t) : ut(t) ? rt.call(this, t) : t : t
      }

      function nt(t) {
        return Zn.from(t).concatMap(function (t) {
          return Zn.isObservable(t) || ut(t) ? et.call(null, t) : Gt.Observable.just(t)
        }).toArray()
      }

      function rt(t) {
        function e(t, e) {
          n[e] = s, i.push(t.map(function (t) {
            n[e] = t
          }))
        }
        for (var n = new t.constructor, r = Object.keys(t), i = [], o = 0, u = r.length; o < u; o++) {
          var c = r[o],
            h = et.call(this, t[c]);
          h && Zn.isObservable(h) ? e(h, c) : n[c] = t[c]
        }
        return Zn.forkJoin.apply(Zn, i).map(function () {
          return n
        })
      }

      function it(t) {
        var e = this;
        return new ks(function (n) {
          t.call(e, function () {
            var t = arguments[0],
              e = arguments[1];
            if (t) return n.onError(t);
            if (arguments.length > 2) {
              for (var r = [], i = 1, o = arguments.length; i < o; i++) r.push(arguments[i]);
              e = r
            }
            n.onNext(e), n.onCompleted()
          })
        })
      }

      function ot(t) {
        return ne(t.next) && ne(t["throw"])
      }

      function st(t) {
        var e = t.constructor;
        return !!e && ("GeneratorFunction" === e.name || "GeneratorFunction" === e.displayName || ot(e.prototype))
      }

      function ut(t) {
        return Object == t.constructor
      }

      function ct(t, e, n, r) {
        var i = new Rs;
        return r.push(ht(i, e, n)), t.apply(e, r), i.asObservable()
      }

      function ht(t, e, n) {
        return function () {
          for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o];
          if (ne(n)) {
            if (i = ie(n).apply(e, i), i === re) return t.onError(i.e);
            t.onNext(i)
          } else i.length <= 1 ? t.onNext(i[0]) : t.onNext(i);
          t.onCompleted()
        }
      }

      function at(t, e, n, r) {
        var i = new Rs;
        return r.push(lt(i, e, n)), t.apply(e, r), i.asObservable()
      }

      function lt(t, e, n) {
        return function () {
          var r = arguments[0];
          if (r) return t.onError(r);
          for (var i = arguments.length, o = [], s = 1; s < i; s++) o[s - 1] = arguments[s];
          if (ne(n)) {
            var o = ie(n).apply(e, o);
            if (o === re) return t.onError(o.e);
            t.onNext(o)
          } else o.length <= 1 ? t.onNext(o[0]) : t.onNext(o);
          t.onCompleted()
        }
      }

      function ft(t) {
        return Ut.StaticNodeList ? t instanceof Ut.StaticNodeList || t instanceof Ut.NodeList : "[object NodeList]" === Object.prototype.toString.call(t)
      }

      function pt(t, e, n) {
        this._e = t, this._n = e, this._fn = n, this._e.addEventListener(this._n, this._fn, !1), this.isDisposed = !1
      }

      function dt(t, e, n) {
        var r = new sn,
          i = Object.prototype.toString.call(t);
        if (ft(t) || "[object HTMLCollection]" === i)
          for (var o = 0, s = t.length; o < s; o++) r.add(dt(t.item(o), e, n));
        else t && r.add(new pt(t, e, n));
        return r
      }

      function vt(t, e, n) {
        return new ks(function (r) {
          function i(t, e) {
            if (h[e] = t, s[e] = !0, u || (u = s.every(Qt))) {
              if (o) return r.onError(o);
              var i = ie(n).apply(null, h);
              if (i === re) return r.onError(i.e);
              r.onNext(i)
            }
            c && h[1] && r.onCompleted()
          }
          var o, s = [!1, !1],
            u = !1,
            c = !1,
            h = new Array(2);
          return new bn(t.subscribe(function (t) {
            i(t, 0)
          }, function (t) {
            h[1] ? r.onError(t) : o = t
          }, function () {
            c = !0, h[1] && r.onCompleted()
          }), e.subscribe(function (t) {
            i(t, 1)
          }, function (t) {
            r.onError(t)
          }, function () {
            c = !0, i(!0, 1)
          }))
        }, t)
      }

      function H(t) {
        return t.toArray()
      }

      function bt(t, e) {
        return t.groupJoin(this, e, br, function (t, e) {
          return e
        })
      }

      function _t(t) {
        var e = this;
        return new ks(function (n) {
          var r = new Ts,
            i = new sn,
            o = new yn(i);
          return n.onNext(nn(r, o)), i.add(e.subscribe(function (t) {
            r.onNext(t)
          }, function (t) {
            r.onError(t), n.onError(t)
          }, function () {
            r.onCompleted(), n.onCompleted()
          })), ee(t) && (t = ar(t)), i.add(t.subscribe(function (t) {
            r.onCompleted(), r = new Ts, n.onNext(nn(r, o))
          }, function (t) {
            r.onError(t), n.onError(t)
          }, function () {
            r.onCompleted(), n.onCompleted()
          })), o
        }, e)
      }

      function yt(t) {
        var e = this;
        return new ks(function (n) {
          function r() {
            var e;
            try {
              e = t()
            } catch (o) {
              return void n.onError(o)
            }
            ee(e) && (e = ar(e));
            var c = new dn;
            i.setDisposable(c), c.setDisposable(e.take(1).subscribe(Jt, function (t) {
              u.onError(t), n.onError(t)
            }, function () {
              u.onCompleted(), u = new Ts, n.onNext(nn(u, s)), r()
            }))
          }
          var i = new vn,
            o = new sn(i),
            s = new yn(o),
            u = new Ts;
          return n.onNext(nn(u, s)), o.add(e.subscribe(function (t) {
            u.onNext(t)
          }, function (t) {
            u.onError(t), n.onError(t)
          }, function () {
            u.onCompleted(), n.onCompleted()
          })), r(), s
        }, e)
      }

      function mt(t, e) {
        return new Lo(t, e)
      }

      function K() {
        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
        return e
      }

      function wt(t) {
        this.patterns = t
      }

      function gt(t, e) {
        this.expression = t, this.selector = e
      }

      function xt(t) {
        return function (e) {
          t.onError(e)
        }
      }

      function Ct(t, e) {
        return function () {
          var n = ie(t.selector).apply(t, arguments);
          return n === re ? e.onError(n.e) : void e.onNext(n)
        }
      }

      function Et(t, e, n) {
        var r = t.get(e);
        if (!r) {
          var i = new Go(e, n);
          return t.set(e, i), i
        }
        return r
      }

      function Nt(t, e, n) {
        this.joinObserverArray = t, this.onNext = e, this.onCompleted = n, this.joinObservers = new Uo;
        for (var r = 0, i = this.joinObserverArray.length; r < i; r++) {
          var o = this.joinObserverArray[r];
          this.joinObservers.set(o, o)
        }
      }

      function Dt(t, e) {
        return new Jo(t, e)
      }

      function At(t, e, n) {
        return new ks(function (r) {
          var i = t,
            o = gn(e);
          return n.scheduleRecursiveFuture(0, i, function (t, e) {
            if (o > 0) {
              var s = n.now();
              i = new Date(i.getTime() + o), i.getTime() <= s && (i = new Date(s + o))
            }
            r.onNext(t), e(t + 1, new Date(i))
          })
        })
      }

      function St(t, e, n) {
        return t === e ? new ks(function (t) {
          return n.schedulePeriodic(0, e, function (e) {
            return t.onNext(e), e + 1
          })
        }) : pr(function () {
          return At(new Date(n.now() + t), e, n)
        })
      }

      function Ot(t, e, n) {
        return new ks(function (r) {
          var i, o = !1,
            s = new vn,
            u = null,
            c = [],
            h = !1;
          return i = t.materialize().timestamp(n).subscribe(function (t) {
            var i, a;
            "E" === t.value.kind ? (c = [], c.push(t), u = t.value.error, a = !h) : (c.push({
              value: t.value,
              timestamp: t.timestamp + e
            }), a = !o, o = !0), a && (null !== u ? r.onError(u) : (i = new dn, s.setDisposable(i), i.setDisposable(n.scheduleRecursiveFuture(null, e, function (t, e) {
              var i, s, a, l;
              if (null === u) {
                h = !0;
                do a = null, c.length > 0 && c[0].timestamp - n.now() <= 0 && (a = c.shift().value), null !== a && a.accept(r); while (null !== a);
                l = !1, s = 0, c.length > 0 ? (l = !0, s = Math.max(0, c[0].timestamp - n.now())) : o = !1, i = u, h = !1, null !== i ? r.onError(i) : l && e(null, s)
              }
            }))))
          }), new bn(i, s)
        }, t)
      }

      function kt(t, e, n) {
        return pr(function () {
          return Ot(t, e - n.now(), n)
        })
      }

      function jt(t, e, n) {
        var r, i;
        return ne(e) ? i = e : (r = e, i = n), new ks(function (e) {
          function n() {
            c.setDisposable(t.subscribe(function (t) {
              var n = ie(i)(t);
              if (n === re) return e.onError(n.e);
              var r = new dn;
              s.add(r), r.setDisposable(n.subscribe(function () {
                e.onNext(t), s.remove(r), o()
              }, function (t) {
                e.onError(t)
              }, function () {
                e.onNext(t), s.remove(r), o()
              }))
            }, function (t) {
              e.onError(t)
            }, function () {
              u = !0, c.dispose(), o()
            }))
          }

          function o() {
            u && 0 === s.length && e.onCompleted()
          }
          var s = new sn,
            u = !1,
            c = new vn;
          return r ? c.setDisposable(r.subscribe(n, function (t) {
            e.onError(t)
          }, n)) : n(), new bn(c, s)
        }, t)
      }

      function qt(t, e) {
        return new ks(function (n) {
          var r, i = !1,
            o = new vn,
            s = 0,
            u = t.subscribe(function (t) {
              var u = ie(e)(t);
              if (u === re) return n.onError(u.e);
              ee(u) && (u = ar(u)), i = !0, r = t, s++;
              var c = s,
                h = new dn;
              o.setDisposable(h), h.setDisposable(u.subscribe(function () {
                i && s === c && n.onNext(r), i = !1, h.dispose()
              }, function (t) {
                n.onError(t)
              }, function () {
                i && s === c && n.onNext(r), i = !1, h.dispose()
              }))
            }, function (t) {
              o.dispose(), n.onError(t), i = !1, s++
            }, function () {
              o.dispose(), i && n.onNext(r), n.onCompleted(), i = !1, s++
            });
          return new bn(u, o)
        }, t)
      }

      function H(t) {
        return t.toArray()
      }

      function H(t) {
        return t.toArray()
      }

      function Ft(t, e, n, r) {
        return ne(e) && (r = n, n = e, e = Nr()), Zn.isObservable(r) || (r = jr(new ss)), new ks(function (i) {
          function o(t) {
            function e() {
              return l = n === a
            }
            var n = a,
              o = new dn;
            c.setDisposable(o), o.setDisposable(t.subscribe(function () {
              e() && u.setDisposable(r.subscribe(i)), o.dispose()
            }, function (t) {
              e() && i.onError(t)
            }, function () {
              e() && u.setDisposable(r.subscribe(i))
            }))
          }

          function s() {
            var t = !l;
            return t && a++, t
          }
          var u = new vn,
            c = new vn,
            h = new dn;
          u.setDisposable(h);
          var a = 0,
            l = !1;
          return o(e), h.setDisposable(t.subscribe(function (t) {
            if (s()) {
              i.onNext(t);
              var e = ie(n)(t);
              if (e === re) return i.onError(e.e);
              o(ee(e) ? ar(e) : e)
            }
          }, function (t) {
            s() && i.onError(t)
          }, function () {
            s() && i.onCompleted()
          })), new bn(u, c)
        }, t)
      }

      function Tt(t, e, n, r) {
        return xn(n) && (r = n, n = jr(new ss)), n instanceof Error && (n = jr(n)), xn(r) || (r = Tn), Zn.isObservable(n) || (n = jr(new ss)), new ks(function (i) {
          function o() {
            var t = s;
            a.setDisposable(r.scheduleFuture(null, e, function () {
              h = s === t, h && (ee(n) && (n = ar(n)), c.setDisposable(n.subscribe(i)))
            }))
          }
          var s = 0,
            u = new dn,
            c = new vn,
            h = !1,
            a = new vn;
          return c.setDisposable(u), o(), u.setDisposable(t.subscribe(function (t) {
            h || (s++, i.onNext(t), o())
          }, function (t) {
            h || (s++, i.onError(t))
          }, function () {
            h || (s++, i.onCompleted())
          })), new bn(c, a)
        }, t)
      }

      function Rt(t) {
        return {
          "@@transducer/init": function () {
            return t
          },
          "@@transducer/step": function (t, e) {
            return t.onNext(e)
          },
          "@@transducer/result": function (t) {
            return t.onCompleted()
          }
        }
      }

      function Mt(t) {
        this.predicate = t
      }

      function It(t) {
        this.predicate = t
      }

      function $t(t, e) {
        var n = this;
        this.scheduler = t, this.messages = e, this.subscriptions = [], this.observers = [];
        for (var r = 0, i = this.messages.length; r < i; r++) {
          var o = this.messages[r],
            s = o.value;
          ! function (e) {
            t.scheduleAbsolute(null, o.time, function () {
              for (var t = n.observers.slice(0), r = 0, i = t.length; r < i; r++) e.accept(t[r]);
              return an
            })
          }(s)
        }
      }
      var Pt = {
          "function": !0,
          object: !0
        },
        Lt = Pt[typeof e] && e && !e.nodeType ? e : null,
        Vt = Pt[typeof t] && t && !t.nodeType ? t : null,
        Wt = u(Lt && Vt && "object" == typeof r && r),
        Kt = u(Pt[typeof self] && self),
        Bt = u(Pt[typeof window] && window),
        zt = Vt && Vt.exports === Lt ? Lt : null,
        Ht = u(Pt[typeof this] && this),
        Ut = Wt || Bt !== (Ht && Ht.window) && Bt || Kt || Ht || Function("return this")(),
        Gt = {
          internals: {},
          config: {
            Promise: Ut.Promise
          },
          helpers: {}
        },
        Jt = Gt.helpers.noop = function () {},
        Qt = Gt.helpers.identity = function (t) {
          return t
        },
        Zt = Gt.helpers.defaultNow = Date.now,
        Xt = Gt.helpers.defaultComparer = function (t, e) {
          return Ye(t, e)
        },
        Yt = Gt.helpers.defaultSubComparer = function (t, e) {
          return t > e ? 1 : t < e ? -1 : 0
        },
        te = (Gt.helpers.defaultKeySerializer = function (t) {
          return t.toString()
        }, Gt.helpers.defaultError = function (t) {
          throw t
        }),
        ee = Gt.helpers.isPromise = function (t) {
          return !!t && "function" != typeof t.subscribe && "function" == typeof t.then
        },
        ne = Gt.helpers.isFunction = function () {
          var t = function (t) {
            return "function" == typeof t || !1
          };
          return t(/x/) && (t = function (t) {
            return "function" == typeof t && "[object Function]" == toString.call(t)
          }), t
        }(),
        re = {
          e: {}
        },
        ie = Gt.internals.tryCatch = function (t) {
          if (!ne(t)) throw new TypeError("fn must be a function");
          return h(t)
        };
      Gt.config.longStackSupport = !1;
      var oe = !1,
        se = ie(function () {
          throw new Error
        })();
      oe = !!se.e && !!se.e.stack;
      var ue, ce = v(),
        he = "From previous event:",
        ae = Gt.EmptyError = function () {
          this.message = "Sequence contains no elements.", Error.call(this)
        };
      ae.prototype = Object.create(Error.prototype), ae.prototype.name = "EmptyError";
      var le = Gt.ObjectDisposedError = function () {
        this.message = "Object has been disposed", Error.call(this)
      };
      le.prototype = Object.create(Error.prototype), le.prototype.name = "ObjectDisposedError";
      var fe = Gt.ArgumentOutOfRangeError = function () {
        this.message = "Argument out of range", Error.call(this)
      };
      fe.prototype = Object.create(Error.prototype), fe.prototype.name = "ArgumentOutOfRangeError";
      var pe = Gt.NotSupportedError = function (t) {
        this.message = t || "This operation is not supported", Error.call(this)
      };
      pe.prototype = Object.create(Error.prototype), pe.prototype.name = "NotSupportedError";
      var de = Gt.NotImplementedError = function (t) {
        this.message = t || "This operation is not implemented", Error.call(this)
      };
      de.prototype = Object.create(Error.prototype), de.prototype.name = "NotImplementedError";
      var ve = Gt.helpers.notImplemented = function () {
          throw new de
        },
        be = (Gt.helpers.notSupported = function () {
          throw new pe
        }, "function" == typeof Symbol && Symbol.iterator || "_es6shim_iterator_");
      Ut.Set && "function" == typeof (new Ut.Set)["@@iterator"] && (be = "@@iterator");
      var _e = Gt.doneEnumerator = {
          done: !0,
          value: s
        },
        ye = Gt.helpers.isIterable = function (t) {
          return t && t[be] !== s
        },
        me = Gt.helpers.isArrayLike = function (t) {
          return t && t.length !== s
        };
      Gt.helpers.iterator = be;
      var we = Gt.internals.bindCallback = function (t, e, n) {
          if ("undefined" == typeof e) return t;
          switch (n) {
            case 0:
              return function () {
                return t.call(e)
              };
            case 1:
              return function (n) {
                return t.call(e, n)
              };
            case 2:
              return function (n, r) {
                return t.call(e, n, r)
              };
            case 3:
              return function (n, r, i) {
                return t.call(e, n, r, i)
              }
          }
          return function () {
            return t.apply(e, arguments)
          }
        },
        ge = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
        xe = (ge.length, "[object Arguments]"),
        Ce = "[object Array]",
        Ee = "[object Boolean]",
        Ne = "[object Date]",
        De = "[object Error]",
        Ae = "[object Function]",
        Se = "[object Map]",
        Oe = "[object Number]",
        ke = "[object Object]",
        je = "[object RegExp]",
        qe = "[object Set]",
        Fe = "[object String]",
        Te = "[object WeakMap]",
        Re = "[object ArrayBuffer]",
        Me = "[object Float32Array]",
        Ie = "[object Float64Array]",
        $e = "[object Int8Array]",
        Pe = "[object Int16Array]",
        Le = "[object Int32Array]",
        Ve = "[object Uint8Array]",
        We = "[object Uint8ClampedArray]",
        Ke = "[object Uint16Array]",
        Be = "[object Uint32Array]",
        ze = {};
      ze[Me] = ze[Ie] = ze[$e] = ze[Pe] = ze[Le] = ze[Ve] = ze[We] = ze[Ke] = ze[Be] = !0, ze[xe] = ze[Ce] = ze[Re] = ze[Ee] = ze[Ne] = ze[De] = ze[Ae] = ze[Se] = ze[Oe] = ze[ke] = ze[je] = ze[qe] = ze[Fe] = ze[Te] = !1;
      var He = Object.prototype,
        Ue = He.hasOwnProperty,
        Ge = He.toString,
        Je = Math.pow(2, 53) - 1,
        Qe = Object.keys || function () {
          var t = Object.prototype.hasOwnProperty,
            e = !{
              toString: null
            }.propertyIsEnumerable("toString"),
            n = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
            r = n.length;
          return function (i) {
            if ("object" != typeof i && ("function" != typeof i || null === i)) throw new TypeError("Object.keys called on non-object");
            var o, s, u = [];
            for (o in i) t.call(i, o) && u.push(o);
            if (e)
              for (s = 0; s < r; s++) t.call(i, n[s]) && u.push(n[s]);
            return u
          }
        }(),
        ut = Gt.internals.isObject = function (t) {
          var e = typeof t;
          return !!t && ("object" === e || "function" === e)
        },
        Ze = function () {
          try {
            Object({
              toString: 0
            } + "")
          } catch (t) {
            return function () {
              return !1
            }
          }
          return function (t) {
            return "function" != typeof t.toString && "string" == typeof (t + "")
          }
        }(),
        Xe = Array.isArray || function (t) {
          return m(t) && w(t.length) && Ge.call(t) === Ce
        },
        Ye = Gt.internals.isEqual = function (t, e) {
          return N(t, e)
        },
        tn = ({}.hasOwnProperty, Array.prototype.slice, Gt.internals.inherits = function (t, e) {
          function n() {
            this.constructor = t
          }
          n.prototype = e.prototype, t.prototype = new n
        }),
        en = Gt.internals.addProperties = function (t) {
          for (var e = [], n = 1, r = arguments.length; n < r; n++) e.push(arguments[n]);
          for (var i = 0, o = e.length; i < o; i++) {
            var s = e[i];
            for (var u in s) t[u] = s[u]
          }
        },
        nn = Gt.internals.addRef = function (t, e) {
          return new ks(function (n) {
            return new bn(e.getDisposable(), t.subscribe(n))
          })
        };
      A.prototype.compareTo = function (t) {
        var e = this.value.compareTo(t.value);
        return 0 === e && (e = this.id - t.id), e
      };
      var rn = Gt.internals.PriorityQueue = function (t) {
          this.items = new Array(t), this.length = 0
        },
        on = rn.prototype;
      on.isHigherPriority = function (t, e) {
        return this.items[t].compareTo(this.items[e]) < 0
      }, on.percolate = function (t) {
        if (!(t >= this.length || t < 0)) {
          var e = t - 1 >> 1;
          if (!(e < 0 || e === t) && this.isHigherPriority(t, e)) {
            var n = this.items[t];
            this.items[t] = this.items[e], this.items[e] = n, this.percolate(e)
          }
        }
      }, on.heapify = function (t) {
        if (+t || (t = 0), !(t >= this.length || t < 0)) {
          var e = 2 * t + 1,
            n = 2 * t + 2,
            r = t;
          if (e < this.length && this.isHigherPriority(e, r) && (r = e), n < this.length && this.isHigherPriority(n, r) && (r = n), r !== t) {
            var i = this.items[t];
            this.items[t] = this.items[r], this.items[r] = i, this.heapify(r)
          }
        }
      }, on.peek = function () {
        return this.items[0].value
      }, on.removeAt = function (t) {
        this.items[t] = this.items[--this.length], this.items[this.length] = s, this.heapify()
      }, on.dequeue = function () {
        var t = this.peek();
        return this.removeAt(0), t
      }, on.enqueue = function (t) {
        var e = this.length++;
        this.items[e] = new A((rn.count++), t), this.percolate(e)
      }, on.remove = function (t) {
        for (var e = 0; e < this.length; e++)
          if (this.items[e].value === t) return this.removeAt(e), !0;
        return !1
      }, rn.count = 0;
      var sn = Gt.CompositeDisposable = function () {
          var t, e, n = [];
          if (Array.isArray(arguments[0])) n = arguments[0];
          else
            for (e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
          this.disposables = n, this.isDisposed = !1, this.length = n.length
        },
        un = sn.prototype;
      un.add = function (t) {
        this.isDisposed ? t.dispose() : (this.disposables.push(t), this.length++)
      }, un.remove = function (t) {
        var e = !1;
        if (!this.isDisposed) {
          var n = this.disposables.indexOf(t);
          n !== -1 && (e = !0, this.disposables.splice(n, 1), this.length--, t.dispose())
        }
        return e
      }, un.dispose = function () {
        if (!this.isDisposed) {
          this.isDisposed = !0;
          for (var t = this.disposables.length, e = new Array(t), n = 0; n < t; n++) e[n] = this.disposables[n];
          for (this.disposables = [], this.length = 0, n = 0; n < t; n++) e[n].dispose()
        }
      };
      var cn = Gt.Disposable = function (t) {
        this.isDisposed = !1, this.action = t || Jt
      };
      cn.prototype.dispose = function () {
        this.isDisposed || (this.action(), this.isDisposed = !0)
      };
      var hn = cn.create = function (t) {
          return new cn(t)
        },
        an = cn.empty = {
          dispose: Jt
        },
        ln = cn.isDisposable = function (t) {
          return t && ne(t.dispose)
        },
        fn = cn.checkDisposed = function (t) {
          if (t.isDisposed) throw new le
        },
        pn = cn._fixup = function (t) {
          return ln(t) ? t : an
        },
        dn = Gt.SingleAssignmentDisposable = function () {
          this.isDisposed = !1, this.current = null
        };
      dn.prototype.getDisposable = function () {
        return this.current
      }, dn.prototype.setDisposable = function (t) {
        if (this.current) throw new Error("Disposable has already been assigned");
        var e = this.isDisposed;
        !e && (this.current = t), e && t && t.dispose()
      }, dn.prototype.dispose = function () {
        if (!this.isDisposed) {
          this.isDisposed = !0;
          var t = this.current;
          this.current = null, t && t.dispose()
        }
      };
      var vn = Gt.SerialDisposable = function () {
        this.isDisposed = !1, this.current = null
      };
      vn.prototype.getDisposable = function () {
        return this.current
      }, vn.prototype.setDisposable = function (t) {
        var e = this.isDisposed;
        if (!e) {
          var n = this.current;
          this.current = t
        }
        n && n.dispose(), e && t && t.dispose()
      }, vn.prototype.dispose = function () {
        if (!this.isDisposed) {
          this.isDisposed = !0;
          var t = this.current;
          this.current = null
        }
        t && t.dispose()
      };
      var bn = Gt.BinaryDisposable = function (t, e) {
        this._first = t, this._second = e, this.isDisposed = !1
      };
      bn.prototype.dispose = function () {
        if (!this.isDisposed) {
          this.isDisposed = !0;
          var t = this._first;
          this._first = null, t && t.dispose();
          var e = this._second;
          this._second = null, e && e.dispose()
        }
      };
      var _n = Gt.NAryDisposable = function (t) {
        this._disposables = t, this.isDisposed = !1
      };
      _n.prototype.dispose = function () {
        if (!this.isDisposed) {
          this.isDisposed = !0;
          for (var t = 0, e = this._disposables.length; t < e; t++) this._disposables[t].dispose();
          this._disposables.length = 0
        }
      };
      var yn = Gt.RefCountDisposable = function () {
        function t(t) {
          this.disposable = t, this.disposable.count++, this.isInnerDisposed = !1
        }

        function e(t) {
          this.underlyingDisposable = t, this.isDisposed = !1, this.isPrimaryDisposed = !1, this.count = 0
        }
        return t.prototype.dispose = function () {
          this.disposable.isDisposed || this.isInnerDisposed || (this.isInnerDisposed = !0, this.disposable.count--, 0 === this.disposable.count && this.disposable.isPrimaryDisposed && (this.disposable.isDisposed = !0, this.disposable.underlyingDisposable.dispose()))
        }, e.prototype.dispose = function () {
          this.isDisposed || this.isPrimaryDisposed || (this.isPrimaryDisposed = !0, 0 === this.count && (this.isDisposed = !0, this.underlyingDisposable.dispose()))
        }, e.prototype.getDisposable = function () {
          return this.isDisposed ? an : new t(this)
        }, e
      }();
      S.prototype.dispose = function () {
        this.scheduler.schedule(this, O)
      };
      var mn = Gt.internals.ScheduledItem = function (t, e, n, r, i) {
        this.scheduler = t, this.state = e, this.action = n, this.dueTime = r, this.comparer = i || Yt, this.disposable = new dn
      };
      mn.prototype.invoke = function () {
        this.disposable.setDisposable(this.invokeCore())
      }, mn.prototype.compareTo = function (t) {
        return this.comparer(this.dueTime, t.dueTime)
      }, mn.prototype.isCancelled = function () {
        return this.disposable.isDisposed
      }, mn.prototype.invokeCore = function () {
        return pn(this.action(this.scheduler, this.state))
      };
      var wn = Gt.Scheduler = function () {
          function t() {}
          t.isScheduler = function (e) {
            return e instanceof t
          };
          var e = t.prototype;
          return e.schedule = function (t, e) {
            throw new de
          }, e.scheduleFuture = function (e, n, r) {
            var i = n;
            return i instanceof Date && (i -= this.now()), i = t.normalize(i), 0 === i ? this.schedule(e, r) : this._scheduleFuture(e, i, r)
          }, e._scheduleFuture = function (t, e, n) {
            throw new de
          }, t.now = Zt, t.prototype.now = Zt, t.normalize = function (t) {
            return t < 0 && (t = 0), t
          }, t
        }(),
        gn = wn.normalize,
        xn = wn.isScheduler;
      ! function (t) {
        function e(t, e) {
          function n(e) {
            function r(t, e) {
              return s ? o.remove(c) : u = !0, i(e, n), an
            }
            var s = !1,
              u = !1,
              c = t.schedule(e, r);
            u || (o.add(c), s = !0)
          }
          var r = e[0],
            i = e[1],
            o = new sn;
          return i(r, n), o
        }

        function n(t, e) {
          function n(e, r) {
            function s(t, e) {
              return u ? o.remove(h) : c = !0, i(e, n), an
            }
            var u = !1,
              c = !1,
              h = t.scheduleFuture(e, r, s);
            c || (o.add(h), u = !0)
          }
          var r = e[0],
            i = e[1],
            o = new sn;
          return i(r, n), o
        }
        t.scheduleRecursive = function (t, n) {
          return this.schedule([t, n], e)
        }, t.scheduleRecursiveFuture = function (t, e, r) {
          return this.scheduleFuture([t, r], e, n)
        }
      }(wn.prototype),
      function (t) {
        t.schedulePeriodic = function (t, e, n) {
          if ("undefined" == typeof Ut.setInterval) throw new pe;
          e = gn(e);
          var r = t,
            i = Ut.setInterval(function () {
              r = n(r)
            }, e);
          return hn(function () {
            Ut.clearInterval(i)
          })
        }
      }(wn.prototype),
      function (t) {
        t.catchError = t["catch"] = function (t) {
          return new Rn(this, t)
        }
      }(wn.prototype);
      var Cn, En, Nn = Gt.internals.SchedulePeriodicRecursive = function () {
          function t(t) {
            return function (e, n) {
              n(0, t._period);
              var r = ie(t._action)(t._state);
              r === re && (t._cancel.dispose(), a(r.e)), t._state = r
            }
          }

          function e(t, e, n, r) {
            this._scheduler = t, this._state = e, this._period = n, this._action = r
          }
          return e.prototype.start = function () {
            var e = new dn;
            return this._cancel = e, e.setDisposable(this._scheduler.scheduleRecursiveFuture(0, this._period, t(this))), e
          }, e
        }(),
        Dn = function (t) {
          function e() {
            t.call(this)
          }
          return tn(e, t), e.prototype.schedule = function (t, e) {
            return pn(e(this, t))
          }, e
        }(wn),
        An = wn.immediate = new Dn,
        Sn = function (t) {
          function e() {
            for (; r.length > 0;) {
              var t = r.dequeue();
              !t.isCancelled() && t.invoke()
            }
          }

          function n() {
            t.call(this)
          }
          var r;
          return tn(n, t), n.prototype.schedule = function (t, n) {
            var i = new mn(this, t, n, this.now());
            if (r) r.enqueue(i);
            else {
              r = new rn(4), r.enqueue(i);
              var o = ie(e)();
              r = null, o === re && a(o.e)
            }
            return i.disposable
          }, n.prototype.scheduleRequired = function () {
            return !r
          }, n
        }(wn),
        On = wn.currentThread = new Sn,
        kn = function () {
          var t, e = Jt;
          if (Ut.setTimeout) t = Ut.setTimeout, e = Ut.clearTimeout;
          else {
            if (!Ut.WScript) throw new pe;
            t = function (t, e) {
              Ut.WScript.Sleep(e), t()
            }
          }
          return {
            setTimeout: t,
            clearTimeout: e
          }
        }(),
        jn = kn.setTimeout,
        qn = kn.clearTimeout;
      ! function () {
        function t(e) {
          if (o) jn(function () {
            t(e)
          }, 0);
          else {
            var n = r[e];
            if (n) {
              o = !0;
              var i = ie(n)();
              En(e), o = !1, i === re && a(i.e)
            }
          }
        }

        function e() {
          if (!Ut.postMessage || Ut.importScripts) return !1;
          var t = !1,
            e = Ut.onmessage;
          return Ut.onmessage = function () {
            t = !0
          }, Ut.postMessage("", "*"), Ut.onmessage = e, t
        }
        var n = 1,
          r = {},
          o = !1;
        En = function (t) {
          delete r[t]
        };
        var s = new RegExp("^" + String(toString).replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/toString| for [^\]]+/g, ".*?") + "$"),
          u = "function" == typeof (u = Wt && zt && Wt.setImmediate) && !s.test(u) && u;
        if (ne(u)) Cn = function (e) {
          var i = n++;
          return r[i] = e, u(function () {
            t(i)
          }), i
        };
        else if ("undefined" != typeof i && "[object process]" === {}.toString.call(i)) Cn = function (e) {
          var o = n++;
          return r[o] = e, i.nextTick(function () {
            t(o)
          }), o
        };
        else if (e()) {
          var c = "ms.rx.schedule" + Math.random(),
            h = function (e) {
              "string" == typeof e.data && e.data.substring(0, c.length) === c && t(e.data.substring(c.length))
            };
          Ut.addEventListener("message", h, !1), Cn = function (t) {
            var e = n++;
            return r[e] = t, Ut.postMessage(c + e, "*"), e
          }
        } else if (Ut.MessageChannel) {
          var l = new Ut.MessageChannel;
          l.port1.onmessage = function (e) {
            t(e.data)
          }, Cn = function (t) {
            var e = n++;
            return r[e] = t, l.port2.postMessage(e), e
          }
        } else Cn = "document" in Ut && "onreadystatechange" in Ut.document.createElement("script") ? function (e) {
          var i = Ut.document.createElement("script"),
            o = n++;
          return r[o] = e, i.onreadystatechange = function () {
            t(o), i.onreadystatechange = null, i.parentNode.removeChild(i), i = null
          }, Ut.document.documentElement.appendChild(i), o
        } : function (e) {
          var i = n++;
          return r[i] = e, jn(function () {
            t(i)
          }, 0), i
        }
      }();
      var Fn = function (t) {
          function e() {
            t.call(this)
          }

          function n(t, e, n, r) {
            return function () {
              t.setDisposable(cn._fixup(e(n, r)))
            }
          }

          function r(t) {
            this._id = t, this.isDisposed = !1
          }

          function i(t) {
            this._id = t, this.isDisposed = !1
          }

          function o(t, e, n) {
            return function () {
              e(t, n)
            }
          }
          return tn(e, t), r.prototype.dispose = function () {
            this.isDisposed || (this.isDisposed = !0, En(this._id))
          }, i.prototype.dispose = function () {
            this.isDisposed || (this.isDisposed = !0, qn(this._id))
          }, e.prototype.schedule = function (t, e) {
            var i = new dn,
              o = Cn(n(i, e, this, t));
            return new bn(i, new r(o))
          }, e.prototype._scheduleFuture = function (t, e, r) {
            if (0 === e) return this.schedule(t, r);
            var o = new dn,
              s = jn(n(o, r, this, t), e);
            return new bn(o, new i(s))
          }, e.prototype.scheduleLongRunning = function (t, e) {
            var n = hn(Jt);
            return Cn(o(t, e, n)), n
          }, e
        }(wn),
        Tn = wn["default"] = wn.async = new Fn,
        Rn = function (t) {
          function e(e, n) {
            this._scheduler = e, this._handler = n, this._recursiveOriginal = null, this._recursiveWrapper = null, t.call(this)
          }
          return tn(e, t), e.prototype.schedule = function (t, e) {
            return this._scheduler.schedule(t, this._wrap(e))
          }, e.prototype._scheduleFuture = function (t, e, n) {
            return this._scheduler.schedule(t, e, this._wrap(n))
          }, e.prototype.now = function () {
            return this._scheduler.now()
          }, e.prototype._clone = function (t) {
            return new e(t, this._handler)
          }, e.prototype._wrap = function (t) {
            var e = this;
            return function (n, r) {
              var i = ie(t)(e._getRecursiveWrapper(n), r);
              return i === re ? (e._handler(i.e) || a(i.e), an) : pn(i)
            }
          }, e.prototype._getRecursiveWrapper = function (t) {
            if (this._recursiveOriginal !== t) {
              this._recursiveOriginal = t;
              var e = this._clone(t);
              e._recursiveOriginal = t, e._recursiveWrapper = e, this._recursiveWrapper = e
            }
            return this._recursiveWrapper
          }, e.prototype.schedulePeriodic = function (t, e, n) {
            var r = this,
              i = !1,
              o = new dn;
            return o.setDisposable(this._scheduler.schedulePeriodic(t, e, function (t) {
              if (i) return null;
              var e = ie(n)(t);
              return e === re ? (i = !0, r._handler(e.e) || a(e.e), o.dispose(), null) : e
            })), o
          }, e
        }(wn),
        Mn = Gt.Notification = function () {
          function t() {}
          return t.prototype._accept = function (t, e, n) {
            throw new de
          }, t.prototype._acceptObserver = function (t, e, n) {
            throw new de
          }, t.prototype.accept = function (t, e, n) {
            return t && "object" == typeof t ? this._acceptObserver(t) : this._accept(t, e, n)
          }, t.prototype.toObservable = function (t) {
            var e = this;
            return xn(t) || (t = An), new ks(function (n) {
              return t.schedule(e, function (t, e) {
                e._acceptObserver(n), "N" === e.kind && n.onCompleted()
              })
            })
          }, t
        }(),
        In = function (t) {
          function e(t) {
            this.value = t, this.kind = "N"
          }
          return tn(e, t), e.prototype._accept = function (t) {
            return t(this.value)
          }, e.prototype._acceptObserver = function (t) {
            return t.onNext(this.value)
          }, e.prototype.toString = function () {
            return "OnNext(" + this.value + ")"
          }, e
        }(Mn),
        $n = function (t) {
          function e(t) {
            this.error = t, this.kind = "E"
          }
          return tn(e, t), e.prototype._accept = function (t, e) {
            return e(this.error)
          }, e.prototype._acceptObserver = function (t) {
            return t.onError(this.error)
          }, e.prototype.toString = function () {
            return "OnError(" + this.error + ")"
          }, e
        }(Mn),
        Pn = function (t) {
          function e() {
            this.kind = "C"
          }
          return tn(e, t), e.prototype._accept = function (t, e, n) {
            return n()
          }, e.prototype._acceptObserver = function (t) {
            return t.onCompleted()
          }, e.prototype.toString = function () {
            return "OnCompleted()"
          }, e
        }(Mn),
        Ln = Mn.createOnNext = function (t) {
          return new In(t)
        },
        Vn = Mn.createOnError = function (t) {
          return new $n(t)
        },
        Wn = Mn.createOnCompleted = function () {
          return new Pn
        },
        Kn = Gt.Observer = function () {};
      Kn.prototype.toNotifier = function () {
        var t = this;
        return function (e) {
          return e.accept(t)
        }
      }, Kn.prototype.asObserver = function () {
        var t = this;
        return new Un(function (e) {
          t.onNext(e)
        }, function (e) {
          t.onError(e)
        }, function () {
          t.onCompleted()
        })
      }, Kn.prototype.checked = function () {
        return new Gn(this)
      };
      var Bn = Kn.create = function (t, e, n) {
        return t || (t = Jt), e || (e = te), n || (n = Jt), new Un(t, e, n)
      };
      Kn.fromNotifier = function (t, e) {
        var n = we(t, e, 1);
        return new Un(function (t) {
          return n(Ln(t))
        }, function (t) {
          return n(Vn(t))
        }, function () {
          return n(Wn())
        })
      }, Kn.prototype.notifyOn = function (t) {
        return new Qn(t, this)
      }, Kn.prototype.makeSafe = function (t) {
        return new AnonymousSafeObserver(this._onNext, this._onError, this._onCompleted, t)
      };
      var zn, Hn = Gt.internals.AbstractObserver = function (t) {
          function e() {
            this.isStopped = !1
          }
          return tn(e, t), e.prototype.next = ve, e.prototype.error = ve, e.prototype.completed = ve, e.prototype.onNext = function (t) {
            !this.isStopped && this.next(t)
          }, e.prototype.onError = function (t) {
            this.isStopped || (this.isStopped = !0, this.error(t))
          }, e.prototype.onCompleted = function () {
            this.isStopped || (this.isStopped = !0, this.completed())
          }, e.prototype.dispose = function () {
            this.isStopped = !0
          }, e.prototype.fail = function (t) {
            return !this.isStopped && (this.isStopped = !0, this.error(t), !0)
          }, e
        }(Kn),
        Un = Gt.AnonymousObserver = function (t) {
          function e(e, n, r) {
            t.call(this), this._onNext = e, this._onError = n, this._onCompleted = r
          }
          return tn(e, t), e.prototype.next = function (t) {
            this._onNext(t)
          }, e.prototype.error = function (t) {
            this._onError(t)
          }, e.prototype.completed = function () {
            this._onCompleted()
          }, e
        }(Hn),
        Gn = function (t) {
          function e(e) {
            t.call(this), this._observer = e, this._state = 0
          }
          tn(e, t);
          var n = e.prototype;
          return n.onNext = function (t) {
            this.checkAccess();
            var e = ie(this._observer.onNext).call(this._observer, t);
            this._state = 0, e === re && a(e.e)
          }, n.onError = function (t) {
            this.checkAccess();
            var e = ie(this._observer.onError).call(this._observer, t);
            this._state = 2, e === re && a(e.e)
          }, n.onCompleted = function () {
            this.checkAccess();
            var t = ie(this._observer.onCompleted).call(this._observer);
            this._state = 2, t === re && a(t.e)
          }, n.checkAccess = function () {
            if (1 === this._state) throw new Error("Re-entrancy detected");
            if (2 === this._state) throw new Error("Observer completed");
            0 === this._state && (this._state = 1)
          }, e
        }(Kn),
        Jn = Gt.internals.ScheduledObserver = function (t) {
          function e(e, n) {
            t.call(this), this.scheduler = e, this.observer = n, this.isAcquired = !1, this.hasFaulted = !1, this.queue = [], this.disposable = new vn
          }

          function n(t, e) {
            return function () {
              t.onNext(e)
            }
          }

          function r(t, e) {
            return function () {
              t.onError(e)
            }
          }

          function i(t) {
            return function () {
              t.onCompleted()
            }
          }

          function o(t, e) {
            var n;
            if (!(t.queue.length > 0)) return void(t.isAcquired = !1);
            n = t.queue.shift();
            var r = ie(n)();
            return r === re ? (t.queue = [], t.hasFaulted = !0, a(r.e)) : void e(t)
          }
          return tn(e, t), e.prototype.next = function (t) {
            this.queue.push(n(this.observer, t))
          }, e.prototype.error = function (t) {
            this.queue.push(r(this.observer, t))
          }, e.prototype.completed = function () {
            this.queue.push(i(this.observer))
          }, e.prototype.ensureActive = function () {
            var t = !1;
            !this.hasFaulted && this.queue.length > 0 && (t = !this.isAcquired, this.isAcquired = !0), t && this.disposable.setDisposable(this.scheduler.scheduleRecursive(this, o))
          }, e.prototype.dispose = function () {
            t.prototype.dispose.call(this), this.disposable.dispose()
          }, e
        }(Hn),
        Qn = function (t) {
          function e(e, n, r) {
            t.call(this, e, n), this._cancel = r
          }
          return tn(e, t), e.prototype.next = function (e) {
            t.prototype.next.call(this, e), this.ensureActive()
          }, e.prototype.error = function (e) {
            t.prototype.error.call(this, e), this.ensureActive()
          }, e.prototype.completed = function () {
            t.prototype.completed.call(this), this.ensureActive()
          }, e.prototype.dispose = function () {
            t.prototype.dispose.call(this), this._cancel && this._cancel.dispose(), this._cancel = null
          }, e
        }(Jn),
        Zn = Gt.Observable = function () {
          function t(t, e) {
            return function (n) {
              var r = n.onError;
              return n.onError = function (e) {
                l(e, t), r.call(n, e)
              }, e.call(t, n)
            }
          }

          function e() {
            if (Gt.config.longStackSupport && oe) {
              var e = this._subscribe,
                n = ie(a)(new Error).e;
              this.stack = n.stack.substring(n.stack.indexOf("\n") + 1), this._subscribe = t(this, e)
            }
          }
          return zn = e.prototype, e.isObservable = function (t) {
            return t && ne(t.subscribe)
          }, zn.subscribe = zn.forEach = function (t, e, n) {
            return this._subscribe("object" == typeof t ? t : Bn(t, e, n))
          }, zn.subscribeOnNext = function (t, e) {
            return this._subscribe(Bn("undefined" != typeof e ? function (n) {
              t.call(e, n)
            } : t))
          }, zn.subscribeOnError = function (t, e) {
            return this._subscribe(Bn(null, "undefined" != typeof e ? function (n) {
              t.call(e, n)
            } : t))
          }, zn.subscribeOnCompleted = function (t, e) {
            return this._subscribe(Bn(null, null, "undefined" != typeof e ? function () {
              t.call(e)
            } : t))
          }, e
        }(),
        Xn = Gt.ObservableBase = function (t) {
          function e(t) {
            return t && ne(t.dispose) ? t : ne(t) ? hn(t) : an
          }

          function n(t, n) {
            var r = n[0],
              i = n[1],
              o = ie(i.subscribeCore).call(i, r);
            o !== re || r.fail(re.e) || a(re.e), r.setDisposable(e(o))
          }

          function r() {
            t.call(this)
          }
          return tn(r, t), r.prototype._subscribe = function (t) {
            var e = new js(t),
              r = [e, this];
            return On.scheduleRequired() ? On.schedule(r, n) : n(null, r), e
          }, r.prototype.subscribeCore = ve, r
        }(Zn),
        Yn = Gt.FlatMapObservable = function (t) {
          function e(e, n, r, i) {
            this.resultSelector = ne(r) ? r : null, this.selector = we(ne(n) ? n : function () {
              return n
            }, i, 3), this.source = e, t.call(this)
          }

          function n(t, e, n, r) {
            this.i = 0, this.selector = e, this.resultSelector = n, this.source = r, this.o = t, Hn.call(this)
          }
          return tn(e, t), e.prototype.subscribeCore = function (t) {
            return this.source.subscribe(new n(t, this.selector, this.resultSelector, this))
          }, tn(n, Hn), n.prototype._wrapResult = function (t, e, n) {
            return this.resultSelector ? t.map(function (t, r) {
              return this.resultSelector(e, t, n, r)
            }, this) : t
          }, n.prototype.next = function (t) {
            var e = this.i++,
              n = ie(this.selector)(t, e, this.source);
            return n === re ? this.o.onError(n.e) : (ee(n) && (n = ar(n)), (me(n) || ye(n)) && (n = Zn.from(n)), void this.o.onNext(this._wrapResult(n, t, e)))
          }, n.prototype.error = function (t) {
            this.o.onError(t)
          }, n.prototype.completed = function () {
            this.o.onCompleted()
          }, e
        }(Xn),
        tr = Gt.internals.Enumerable = function () {};
      k.prototype.dispose = function () {
        this.isDisposed || (this.isDisposed = !0, this._s.isDisposed = !0)
      };
      var er = function (t) {
        function e(e) {
          this.sources = e, t.call(this)
        }

        function n(t, e) {
          if (!t.isDisposed) {
            var n = ie(t.e.next).call(t.e);
            if (n === re) return t.o.onError(n.e);
            if (n.done) return t.o.onCompleted();
            var i = n.value;
            ee(i) && (i = ar(i));
            var o = new dn;
            t.subscription.setDisposable(o), o.setDisposable(i.subscribe(new r(t, e)))
          }
        }

        function r(t, e) {
          this._state = t, this._recurse = e, Hn.call(this)
        }
        return tn(e, t), e.prototype.subscribeCore = function (t) {
          var e = new vn,
            r = {
              isDisposed: !1,
              o: t,
              subscription: e,
              e: this.sources[be]()
            },
            i = On.scheduleRecursive(r, n);
          return new _n([e, i, new k(r)])
        }, tn(r, Hn), r.prototype.next = function (t) {
          this._state.o.onNext(t)
        }, r.prototype.error = function (t) {
          this._state.o.onError(t)
        }, r.prototype.completed = function () {
          this._recurse(this._state)
        }, e
      }(Xn);
      tr.prototype.concat = function () {
        return new er(this)
      };
      var nr = function (t) {
        function e(e) {
          this.sources = e, t.call(this)
        }

        function n(t, e) {
          if (!t.isDisposed) {
            var n = ie(t.e.next).call(t.e);
            if (n === re) return t.o.onError(n.e);
            if (n.done) return null !== t.lastError ? t.o.onError(t.lastError) : t.o.onCompleted();
            var i = n.value;
            ee(i) && (i = ar(i));
            var o = new dn;
            t.subscription.setDisposable(o), o.setDisposable(i.subscribe(new r(t, e)))
          }
        }

        function r(t, e) {
          this._state = t, this._recurse = e, Hn.call(this)
        }
        return tn(e, t), e.prototype.subscribeCore = function (t) {
          var e = new vn,
            r = {
              isDisposed: !1,
              e: this.sources[be](),
              subscription: e,
              lastError: null,
              o: t
            },
            i = On.scheduleRecursive(r, n);
          return new _n([e, i, new k(r)])
        }, tn(r, Hn), r.prototype.next = function (t) {
          this._state.o.onNext(t)
        }, r.prototype.error = function (t) {
          this._state.lastError = t, this._recurse(this._state)
        }, r.prototype.completed = function () {
          this._state.o.onCompleted()
        }, e
      }(Xn);
      tr.prototype.catchError = function () {
        return new nr(this)
      };
      var rr = function (t) {
          function e(t, e) {
            this.v = t, this.c = null == e ? -1 : e
          }

          function n(t) {
            this.v = t.v, this.l = t.c
          }
          return tn(e, t), e.prototype[be] = function () {
            return new n(this)
          }, n.prototype.next = function () {
            return 0 === this.l ? _e : (this.l > 0 && this.l--, {
              done: !1,
              value: this.v
            })
          }, e
        }(tr),
        ir = tr.repeat = function (t, e) {
          return new rr(t, e)
        },
        or = function (t) {
          function e(t, e, n) {
            this.s = t, this.fn = e ? we(e, n, 3) : null
          }

          function n(t) {
            this.i = -1, this.s = t.s, this.l = this.s.length, this.fn = t.fn
          }
          return tn(e, t), e.prototype[be] = function () {
            return new n(this)
          }, n.prototype.next = function () {
            return ++this.i < this.l ? {
              done: !1,
              value: this.fn ? this.fn(this.s[this.i], this.i, this.s) : this.s[this.i]
            } : _e
          }, e
        }(tr),
        sr = tr.of = function (t, e, n) {
          return new or(t, e, n)
        },
        ur = function (t) {
          function e(e, n) {
            this.source = e, this._s = n, t.call(this)
          }
          return tn(e, t), e.prototype.subscribeCore = function (t) {
            return this.source.subscribe(new Qn(this._s, t))
          }, e
        }(Xn);
      zn.observeOn = function (t) {
        return new ur(this, t)
      };
      var cr = function (t) {
        function e(e, n) {
          this.source = e, this._s = n, t.call(this)
        }

        function n(t, e) {
          var n = e[0],
            r = e[1],
            i = e[2];
          r.setDisposable(new S(t, n.subscribe(i)))
        }
        return tn(e, t), e.prototype.subscribeCore = function (t) {
          var e = new dn,
            r = new vn;
          return r.setDisposable(e), e.setDisposable(this._s.schedule([this.source, r, t], n)), r
        }, e
      }(Xn);
      zn.subscribeOn = function (t) {
        return new cr(this, t)
      };
      var hr = function (t) {
          function e(e, n) {
            this._p = e, this._s = n, t.call(this)
          }

          function n(t, e) {
            var n = e[0],
              r = e[1];
            n.onNext(r), n.onCompleted()
          }

          function r(t, e) {
            var n = e[0],
              r = e[1];
            n.onError(r)
          }
          return tn(e, t), e.prototype.subscribeCore = function (t) {
            var e = new dn,
              i = this,
              o = this._p;
            return ne(o) && (o = ie(o)(), o === re) ? (t.onError(o.e), e) : (o.then(function (r) {
              e.setDisposable(i._s.schedule([t, r], n))
            }, function (n) {
              e.setDisposable(i._s.schedule([t, n], r))
            }), e)
          }, e
        }(Xn),
        ar = Zn.fromPromise = function (t, e) {
          return e || (e = Tn), new hr(t, e)
        };
      zn.toPromise = function (t) {
        if (t || (t = Gt.config.Promise), !t) throw new pe("Promise type not provided nor in Rx.config.Promise");
        var e = this;
        return new t(function (t, n) {
          var r;
          e.subscribe(function (t) {
            r = t
          }, n, function () {
            t(r)
          })
        })
      };
      var lr = function (t) {
        function e(e) {
          this.source = e, t.call(this)
        }

        function n(t) {
          this.o = t, this.a = [], Hn.call(this)
        }
        return tn(e, t), e.prototype.subscribeCore = function (t) {
          return this.source.subscribe(new n(t))
        }, tn(n, Hn), n.prototype.next = function (t) {
          this.a.push(t)
        }, n.prototype.error = function (t) {
          this.o.onError(t)
        }, n.prototype.completed = function () {
          this.o.onNext(this.a), this.o.onCompleted()
        }, e
      }(Xn);
      zn.toArray = function () {
        return new lr(this)
      }, Zn.create = function (t, e) {
        return new ks(t, e)
      };
      var fr = function (t) {
          function e(e) {
            this._f = e, t.call(this)
          }
          return tn(e, t), e.prototype.subscribeCore = function (t) {
            var e = ie(this._f)();
            return e === re ? jr(e.e).subscribe(t) : (ee(e) && (e = ar(e)), e.subscribe(t))
          }, e
        }(Xn),
        pr = Zn.defer = function (t) {
          return new fr(t)
        },
        dr = function (t) {
          function e(e) {
            this.scheduler = e, t.call(this)
          }

          function n(t, e) {
            this.observer = t, this.scheduler = e
          }

          function r(t, e) {
            return e.onCompleted(), an
          }
          return tn(e, t), e.prototype.subscribeCore = function (t) {
            var e = new n(t, this.scheduler);
            return e.run()
          }, n.prototype.run = function () {
            var t = this.observer;
            return this.scheduler === An ? r(null, t) : this.scheduler.schedule(t, r)
          }, e
        }(Xn),
        vr = new dr(An),
        br = Zn.empty = function (t) {
          return xn(t) || (t = An), t === An ? vr : new dr(t)
        },
        _r = function (t) {
          function e(e, n, r) {
            this._iterable = e, this._fn = n, this._scheduler = r, t.call(this)
          }

          function n(t, e, n) {
            return function (r, i) {
              var o = ie(e.next).call(e);
              if (o === re) return t.onError(o.e);
              if (o.done) return t.onCompleted();
              var s = o.value;
              return ne(n) && (s = ie(n)(s, r), s === re) ? t.onError(s.e) : (t.onNext(s), void i(r + 1))
            }
          }
          return tn(e, t), e.prototype.subscribeCore = function (t) {
            var e = Object(this._iterable),
              r = M(e);
            return this._scheduler.scheduleRecursive(0, n(t, r, this._fn))
          }, e
        }(Xn),
        yr = Math.pow(2, 53) - 1;
      j.prototype[be] = function () {
        return new q(this._s)
      }, q.prototype[be] = function () {
        return this
      }, q.prototype.next = function () {
        return this._i < this._l ? {
          done: !1,
          value: this._s.charAt(this._i++)
        } : _e
      }, F.prototype[be] = function () {
        return new T(this._a)
      }, T.prototype[be] = function () {
        return this
      }, T.prototype.next = function () {
        return this._i < this._l ? {
          done: !1,
          value: this._a[this._i++]
        } : _e
      };
      var mr = Zn.from = function (t, e, n, r) {
          if (null == t) throw new Error("iterable cannot be null.");
          if (e && !ne(e)) throw new Error("mapFn when provided must be a function");
          if (e) var i = we(e, n, 2);
          return xn(r) || (r = On), new _r(t, i, r)
        },
        wr = function (t) {
          function e(e, n) {
            this._args = e, this._scheduler = n, t.call(this)
          }

          function n(t, e) {
            var n = e.length;
            return function (r, i) {
              r < n ? (t.onNext(e[r]), i(r + 1)) : t.onCompleted()
            }
          }
          return tn(e, t), e.prototype.subscribeCore = function (t) {
            return this._scheduler.scheduleRecursive(0, n(t, this._args))
          }, e
        }(Xn),
        gr = Zn.fromArray = function (t, e) {
          return xn(e) || (e = On), new wr(t, e)
        },
        xr = function (t) {
          function e(e, n, r, i, o) {
            this._initialState = e, this._cndFn = n, this._itrFn = r, this._resFn = i, this._s = o, t.call(this)
          }

          function n(t, e) {
            if (t.first) t.first = !1;
            else if (t.newState = ie(t.self._itrFn)(t.newState), t.newState === re) return t.o.onError(t.newState.e);
            var n = ie(t.self._cndFn)(t.newState);
            if (n === re) return t.o.onError(n.e);
            if (n) {
              var r = ie(t.self._resFn)(t.newState);
              if (r === re) return t.o.onError(r.e);
              t.o.onNext(r), e(t)
            } else t.o.onCompleted()
          }
          return tn(e, t), e.prototype.subscribeCore = function (t) {
            var e = {
              o: t,
              self: this,
              first: !0,
              newState: this._initialState
            };
            return this._s.scheduleRecursive(e, n)
          }, e
        }(Xn);
      Zn.generate = function (t, e, n, r, i) {
        return xn(i) || (i = On), new xr(t, e, n, r, i)
      }, Zn.of = function () {
        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
        return new wr(e, On)
      }, Zn.ofWithScheduler = function (t) {
        for (var e = arguments.length, n = new Array(e - 1), r = 1; r < e; r++) n[r - 1] = arguments[r];
        return new wr(n, t)
      }, Zn.ofArrayChanges = function (t) {
        if (!Array.isArray(t)) throw new TypeError("Array.observe only accepts arrays.");
        if ("function" != typeof Array.observe && "function" != typeof Array.unobserve) throw new TypeError("Array.observe is not supported on your platform");
        return new ks(function (e) {
          function n(t) {
            for (var n = 0, r = t.length; n < r; n++) e.onNext(t[n])
          }
          return Array.observe(t, n),
            function () {
              Array.unobserve(t, n)
            }
        })
      }, Zn.ofObjectChanges = function (t) {
        if (null == t) throw new TypeError("object must not be null or undefined.");
        if ("function" != typeof Object.observe && "function" != typeof Object.unobserve) throw new TypeError("Object.observe is not supported on your platform");
        return new ks(function (e) {
          function n(t) {
            for (var n = 0, r = t.length; n < r; n++) e.onNext(t[n])
          }
          return Object.observe(t, n),
            function () {
              Object.unobserve(t, n)
            }
        })
      };
      var Cr = function (t) {
          function e() {
            t.call(this)
          }
          return tn(e, t), e.prototype.subscribeCore = function (t) {
            return an
          }, e
        }(Xn),
        Er = new Cr,
        Nr = Zn.never = function () {
          return Er
        },
        Dr = function (t) {
          function e(e, n) {
            this._o = e, this._keys = Object.keys(e), this._scheduler = n, t.call(this)
          }

          function n(t, e, n) {
            return function (r, i) {
              if (r < n.length) {
                var o = n[r];
                t.onNext([o, e[o]]), i(r + 1)
              } else t.onCompleted()
            }
          }
          return tn(e, t), e.prototype.subscribeCore = function (t) {
            return this._scheduler.scheduleRecursive(0, n(t, this._o, this._keys))
          }, e
        }(Xn);
      Zn.pairs = function (t, e) {
        return e || (e = On), new Dr(t, e)
      };
      var Ar = function (t) {
        function e(e, n, r) {
          this.start = e, this.rangeCount = n, this.scheduler = r, t.call(this)
        }

        function n(t, e, n) {
          return function (r, i) {
            r < e ? (n.onNext(t + r), i(r + 1)) : n.onCompleted()
          }
        }
        return tn(e, t), e.prototype.subscribeCore = function (t) {
          return this.scheduler.scheduleRecursive(0, n(this.start, this.rangeCount, t))
        }, e
      }(Xn);
      Zn.range = function (t, e, n) {
        return xn(n) || (n = On), new Ar(t, e, n)
      };
      var Sr = function (t) {
        function e(e, n, r) {
          this.value = e, this.repeatCount = null == n ? -1 : n, this.scheduler = r, t.call(this)
        }
        return tn(e, t), e.prototype.subscribeCore = function (t) {
          var e = new L(t, this);
          return e.run()
        }, e
      }(Xn);
      L.prototype.run = function () {
        function t(t, r) {
          return (t === -1 || t > 0) && (e.onNext(n), t > 0 && t--), 0 === t ? e.onCompleted() : void r(t)
        }
        var e = this.observer,
          n = this.parent.value;
        return this.parent.scheduler.scheduleRecursive(this.parent.repeatCount, t)
      }, Zn.repeat = function (t, e, n) {
        return xn(n) || (n = On), new Sr(t, e, n)
      };
      var Or = function (t) {
          function e(e, n) {
            this._value = e, this._scheduler = n, t.call(this)
          }

          function n(t, e) {
            var n = e[0],
              r = e[1];
            return r.onNext(n), r.onCompleted(), an
          }
          return tn(e, t), e.prototype.subscribeCore = function (t) {
            var e = [this._value, t];
            return this._scheduler === An ? n(null, e) : this._scheduler.schedule(e, n)
          }, e
        }(Xn),
        kr = (Zn["return"] = Zn.just = function (t, e) {
          return xn(e) || (e = An), new Or(t, e)
        }, function (t) {
          function e(e, n) {
            this._error = e, this._scheduler = n, t.call(this)
          }

          function n(t, e) {
            var n = e[0],
              r = e[1];
            return r.onError(n), an
          }
          return tn(e, t), e.prototype.subscribeCore = function (t) {
            var e = [this._error, t];
            return this._scheduler === An ? n(null, e) : this._scheduler.schedule(e, n)
          }, e
        }(Xn)),
        jr = Zn["throw"] = function (t, e) {
          return xn(e) || (e = An), new kr(t, e)
        },
        qr = function (t) {
          function e(e, n) {
            this._resFn = e, this._obsFn = n, t.call(this)
          }
          return tn(e, t), e.prototype.subscribeCore = function (t) {
            var e = an,
              n = ie(this._resFn)();
            if (n === re) return new bn(jr(n.e).subscribe(t), e);
            n && (e = n);
            var r = ie(this._obsFn)(n);
            return r === re ? new bn(jr(r.e).subscribe(t), e) : new bn(r.subscribe(t), e)
          }, e
        }(Xn);
      Zn.using = function (t, e) {
        return new qr(t, e)
      }, zn.amb = function (t) {
        var e = this;
        return new ks(function (n) {
          function r() {
            o || (o = s, h.dispose())
          }

          function i() {
            o || (o = u, c.dispose())
          }
          var o, s = "L",
            u = "R",
            c = new dn,
            h = new dn;
          ee(t) && (t = ar(t));
          var a = Bn(function (t) {
              r(), o === s && n.onNext(t)
            }, function (t) {
              r(), o === s && n.onError(t)
            }, function () {
              r(), o === s && n.onCompleted()
            }),
            l = Bn(function (t) {
              i(), o === u && n.onNext(t)
            }, function (t) {
              i(), o === u && n.onError(t)
            }, function () {
              i(), o === u && n.onCompleted()
            });
          return c.setDisposable(e.subscribe(a)), h.setDisposable(t.subscribe(l)), new bn(c, h)
        })
      }, Zn.amb = function () {
        var t, e = Nr();
        if (Array.isArray(arguments[0])) t = arguments[0];
        else {
          var n = arguments.length;
          t = new Array(t);
          for (var r = 0; r < n; r++) t[r] = arguments[r]
        }
        for (var r = 0, n = t.length; r < n; r++) e = V(e, t[r]);
        return e
      };
      var Fr = function (t) {
          function e(e, n) {
            this.source = e, this._fn = n, t.call(this)
          }
          return tn(e, t), e.prototype.subscribeCore = function (t) {
            var e = new dn,
              n = new vn;
            return n.setDisposable(e), e.setDisposable(this.source.subscribe(new Tr(t, n, this._fn))), n
          }, e
        }(Xn),
        Tr = function (t) {
          function e(e, n, r) {
            this._o = e, this._s = n, this._fn = r, t.call(this)
          }
          return tn(e, t), e.prototype.next = function (t) {
            this._o.onNext(t)
          }, e.prototype.completed = function () {
            return this._o.onCompleted()
          }, e.prototype.error = function (t) {
            var e = ie(this._fn)(t);
            if (e === re) return this._o.onError(e.e);
            ee(e) && (e = ar(e));
            var n = new dn;
            this._s.setDisposable(n), n.setDisposable(e.subscribe(this._o))
          }, e
        }(Hn);
      zn["catch"] = function (t) {
        return ne(t) ? new Fr(this, t) : Rr([this, t])
      };
      var Rr = Zn["catch"] = function () {
        var t;
        if (Array.isArray(arguments[0])) t = arguments[0];
        else {
          var e = arguments.length;
          t = new Array(e);
          for (var n = 0; n < e; n++) t[n] = arguments[n]
        }
        return sr(t).catchError()
      };
      zn.combineLatest = function () {
        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
        return Array.isArray(e[0]) ? e[0].unshift(this) : e.unshift(this), $r.apply(this, e)
      };
      var Mr = function (t) {
          function e(e, n) {
            this._params = e, this._cb = n, t.call(this)
          }
          return tn(e, t), e.prototype.subscribeCore = function (t) {
            for (var e = this._params.length, n = new Array(e), r = {
                hasValue: D(e, W),
                hasValueAll: !1,
                isDone: D(e, W),
                values: new Array(e)
              }, i = 0; i < e; i++) {
              var o = this._params[i],
                s = new dn;
              n[i] = s, ee(o) && (o = ar(o)), s.setDisposable(o.subscribe(new Ir(t, i, this._cb, r)))
            }
            return new _n(n)
          }, e
        }(Xn),
        Ir = function (t) {
          function e(e, n, r, i) {
            this._o = e, this._i = n, this._cb = r, this._state = i, t.call(this)
          }

          function n(t) {
            return function (e, n) {
              return n !== t
            }
          }
          return tn(e, t), e.prototype.next = function (t) {
            if (this._state.values[this._i] = t, this._state.hasValue[this._i] = !0,
              this._state.hasValueAll || (this._state.hasValueAll = this._state.hasValue.every(Qt))) {
              var e = ie(this._cb).apply(null, this._state.values);
              if (e === re) return this._o.onError(e.e);
              this._o.onNext(e)
            } else this._state.isDone.filter(n(this._i)).every(Qt) && this._o.onCompleted()
          }, e.prototype.error = function (t) {
            this._o.onError(t)
          }, e.prototype.completed = function () {
            this._state.isDone[this._i] = !0, this._state.isDone.every(Qt) && this._o.onCompleted()
          }, e
        }(Hn),
        $r = Zn.combineLatest = function () {
          for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
          var r = ne(e[t - 1]) ? e.pop() : K;
          return Array.isArray(e[0]) && (e = e[0]), new Mr(e, r)
        };
      zn.concat = function () {
        for (var t = [], e = 0, n = arguments.length; e < n; e++) t.push(arguments[e]);
        return t.unshift(this), Vr.apply(null, t)
      };
      var Pr = function (t) {
          function e(e, n) {
            this._s = e, this._fn = n, t.call(this)
          }
          return tn(e, t), e.prototype.next = function (t) {
            this._s.o.onNext(t)
          }, e.prototype.error = function (t) {
            this._s.o.onError(t)
          }, e.prototype.completed = function () {
            this._s.i++, this._fn(this._s)
          }, e
        }(Hn),
        Lr = function (t) {
          function e(e) {
            this._sources = e, t.call(this)
          }

          function n(t, e) {
            if (!t.disposable.isDisposed) {
              if (t.i === t.sources.length) return t.o.onCompleted();
              var n = t.sources[t.i];
              ee(n) && (n = ar(n));
              var r = new dn;
              t.subscription.setDisposable(r), r.setDisposable(n.subscribe(new Pr(t, e)))
            }
          }
          return tn(e, t), e.prototype.subscribeCore = function (t) {
            var e = new vn,
              r = hn(Jt),
              i = {
                o: t,
                i: 0,
                subscription: e,
                disposable: r,
                sources: this._sources
              },
              o = An.scheduleRecursive(i, n);
            return new _n([e, r, o])
          }, e
        }(Xn),
        Vr = Zn.concat = function () {
          var t;
          if (Array.isArray(arguments[0])) t = arguments[0];
          else {
            t = new Array(arguments.length);
            for (var e = 0, n = arguments.length; e < n; e++) t[e] = arguments[e]
          }
          return new Lr(t)
        };
      zn.concatAll = function () {
        return this.merge(1)
      };
      var Wr = function (t) {
          function e(e, n) {
            this.source = e, this.maxConcurrent = n, t.call(this)
          }
          return tn(e, t), e.prototype.subscribeCore = function (t) {
            var e = new sn;
            return e.add(this.source.subscribe(new Kr(t, this.maxConcurrent, e))), e
          }, e
        }(Xn),
        Kr = function (t) {
          function e(e, n, r) {
            this.o = e, this.max = n, this.g = r, this.done = !1, this.q = [], this.activeCount = 0, t.call(this)
          }

          function n(e, n) {
            this.parent = e, this.sad = n, t.call(this)
          }
          return tn(e, t), e.prototype.handleSubscribe = function (t) {
            var e = new dn;
            this.g.add(e), ee(t) && (t = ar(t)), e.setDisposable(t.subscribe(new n(this, e)))
          }, e.prototype.next = function (t) {
            this.activeCount < this.max ? (this.activeCount++, this.handleSubscribe(t)) : this.q.push(t)
          }, e.prototype.error = function (t) {
            this.o.onError(t)
          }, e.prototype.completed = function () {
            this.done = !0, 0 === this.activeCount && this.o.onCompleted()
          }, tn(n, t), n.prototype.next = function (t) {
            this.parent.o.onNext(t)
          }, n.prototype.error = function (t) {
            this.parent.o.onError(t)
          }, n.prototype.completed = function () {
            this.parent.g.remove(this.sad), this.parent.q.length > 0 ? this.parent.handleSubscribe(this.parent.q.shift()) : (this.parent.activeCount--, this.parent.done && 0 === this.parent.activeCount && this.parent.o.onCompleted())
          }, e
        }(Hn);
      zn.merge = function (t) {
        return "number" != typeof t ? Br(this, t) : new Wr(this, t)
      };
      var Br = Zn.merge = function () {
          var t, e, n = [],
            r = arguments.length;
          if (arguments[0])
            if (xn(arguments[0]))
              for (t = arguments[0], e = 1; e < r; e++) n.push(arguments[e]);
            else
              for (t = An, e = 0; e < r; e++) n.push(arguments[e]);
          else
            for (t = An, e = 1; e < r; e++) n.push(arguments[e]);
          return Array.isArray(n[0]) && (n = n[0]), P(t, n).mergeAll()
        },
        zr = function (t) {
          function e(e) {
            this.source = e, t.call(this)
          }
          return tn(e, t), e.prototype.subscribeCore = function (t) {
            var e = new sn,
              n = new dn;
            return e.add(n), n.setDisposable(this.source.subscribe(new Hr(t, e))), e
          }, e
        }(Xn),
        Hr = function (t) {
          function e(e, n) {
            this.o = e, this.g = n, this.done = !1, t.call(this)
          }

          function n(e, n) {
            this.parent = e, this.sad = n, t.call(this)
          }
          return tn(e, t), e.prototype.next = function (t) {
            var e = new dn;
            this.g.add(e), ee(t) && (t = ar(t)), e.setDisposable(t.subscribe(new n(this, e)))
          }, e.prototype.error = function (t) {
            this.o.onError(t)
          }, e.prototype.completed = function () {
            this.done = !0, 1 === this.g.length && this.o.onCompleted()
          }, tn(n, t), n.prototype.next = function (t) {
            this.parent.o.onNext(t)
          }, n.prototype.error = function (t) {
            this.parent.o.onError(t)
          }, n.prototype.completed = function () {
            this.parent.g.remove(this.sad), this.parent.done && 1 === this.parent.g.length && this.parent.o.onCompleted()
          }, e
        }(Hn);
      zn.mergeAll = function () {
        return new zr(this)
      };
      var Ur = Gt.CompositeError = function (t) {
        this.innerErrors = t, this.message = "This contains multiple errors. Check the innerErrors", Error.call(this)
      };
      Ur.prototype = Object.create(Error.prototype), Ur.prototype.name = "CompositeError";
      var Gr = function (t) {
          function e(e) {
            this.source = e, t.call(this)
          }
          return tn(e, t), e.prototype.subscribeCore = function (t) {
            var e = new sn,
              n = new dn,
              r = {
                isStopped: !1,
                errors: [],
                o: t
              };
            return e.add(n), n.setDisposable(this.source.subscribe(new Jr(e, r))), e
          }, e
        }(Xn),
        Jr = function (t) {
          function e(e, n) {
            this._group = e, this._state = n, t.call(this)
          }

          function n(t, e) {
            0 === e.length ? t.onCompleted() : 1 === e.length ? t.onError(e[0]) : t.onError(new Ur(e))
          }

          function r(e, n, r) {
            this._inner = e, this._group = n, this._state = r, t.call(this)
          }
          return tn(e, t), e.prototype.next = function (t) {
            var e = new dn;
            this._group.add(e), ee(t) && (t = ar(t)), e.setDisposable(t.subscribe(new r(e, this._group, this._state)))
          }, e.prototype.error = function (t) {
            this._state.errors.push(t), this._state.isStopped = !0, 1 === this._group.length && n(this._state.o, this._state.errors)
          }, e.prototype.completed = function () {
            this._state.isStopped = !0, 1 === this._group.length && n(this._state.o, this._state.errors)
          }, tn(r, t), r.prototype.next = function (t) {
            this._state.o.onNext(t)
          }, r.prototype.error = function (t) {
            this._state.errors.push(t), this._group.remove(this._inner), this._state.isStopped && 1 === this._group.length && n(this._state.o, this._state.errors)
          }, r.prototype.completed = function () {
            this._group.remove(this._inner), this._state.isStopped && 1 === this._group.length && n(this._state.o, this._state.errors)
          }, e
        }(Hn);
      Zn.mergeDelayError = function () {
        var t;
        if (Array.isArray(arguments[0])) t = arguments[0];
        else {
          var e = arguments.length;
          t = new Array(e);
          for (var n = 0; n < e; n++) t[n] = arguments[n]
        }
        var r = P(null, t);
        return new Gr(r)
      }, zn.onErrorResumeNext = function (t) {
        if (!t) throw new Error("Second observable is required");
        return Xr([this, t])
      };
      var Qr = function (t) {
          function e(e) {
            this.sources = e, t.call(this)
          }

          function n(t, e) {
            if (t.pos < t.sources.length) {
              var n = t.sources[t.pos++];
              ee(n) && (n = ar(n));
              var r = new dn;
              t.subscription.setDisposable(r), r.setDisposable(n.subscribe(new Zr(t, e)))
            } else t.o.onCompleted()
          }
          return tn(e, t), e.prototype.subscribeCore = function (t) {
            var e = new vn,
              r = {
                pos: 0,
                subscription: e,
                o: t,
                sources: this.sources
              },
              i = An.scheduleRecursive(r, n);
            return new bn(e, i)
          }, e
        }(Xn),
        Zr = function (t) {
          function e(e, n) {
            this._state = e, this._recurse = n, t.call(this)
          }
          return tn(e, t), e.prototype.next = function (t) {
            this._state.o.onNext(t)
          }, e.prototype.error = function () {
            this._recurse(this._state)
          }, e.prototype.completed = function () {
            this._recurse(this._state)
          }, e
        }(Hn),
        Xr = Zn.onErrorResumeNext = function () {
          var t = [];
          if (Array.isArray(arguments[0])) t = arguments[0];
          else {
            var e = arguments.length;
            t = new Array(e);
            for (var n = 0; n < e; n++) t[n] = arguments[n]
          }
          return new Qr(t)
        },
        Yr = function (t) {
          function e(e, n) {
            this._s = e, this._o = ee(n) ? ar(n) : n, this._open = !1, t.call(this)
          }
          return tn(e, t), e.prototype.subscribeCore = function (t) {
            var e = new dn;
            e.setDisposable(this._s.subscribe(new ti(t, this))), ee(this._o) && (this._o = ar(this._o));
            var n = new dn;
            return n.setDisposable(this._o.subscribe(new ei(t, this, n))), new bn(e, n)
          }, e
        }(Xn),
        ti = function (t) {
          function e(e, n) {
            this._o = e, this._p = n, t.call(this)
          }
          return tn(e, t), e.prototype.next = function (t) {
            this._p._open && this._o.onNext(t)
          }, e.prototype.error = function (t) {
            this._o.onError(t)
          }, e.prototype.onCompleted = function () {
            this._p._open && this._o.onCompleted()
          }, e
        }(Hn),
        ei = function (t) {
          function e(e, n, r) {
            this._o = e, this._p = n, this._r = r, t.call(this)
          }
          return tn(e, t), e.prototype.next = function () {
            this._p._open = !0, this._r.dispose()
          }, e.prototype.error = function (t) {
            this._o.onError(t)
          }, e.prototype.onCompleted = function () {
            this._r.dispose()
          }, e
        }(Hn);
      zn.skipUntil = function (t) {
        return new Yr(this, t)
      };
      var ni = function (t) {
        function e(e) {
          this.source = e, t.call(this)
        }

        function n(t, e) {
          this.o = t, this.inner = e, this.stopped = !1, this.latest = 0, this.hasLatest = !1, Hn.call(this)
        }

        function r(t, e) {
          this.parent = t, this.id = e, Hn.call(this)
        }
        return tn(e, t), e.prototype.subscribeCore = function (t) {
          var e = new vn,
            r = this.source.subscribe(new n(t, e));
          return new bn(r, e)
        }, tn(n, Hn), n.prototype.next = function (t) {
          var e = new dn,
            n = ++this.latest;
          this.hasLatest = !0, this.inner.setDisposable(e), ee(t) && (t = ar(t)), e.setDisposable(t.subscribe(new r(this, n)))
        }, n.prototype.error = function (t) {
          this.o.onError(t)
        }, n.prototype.completed = function () {
          this.stopped = !0, !this.hasLatest && this.o.onCompleted()
        }, tn(r, Hn), r.prototype.next = function (t) {
          this.parent.latest === this.id && this.parent.o.onNext(t)
        }, r.prototype.error = function (t) {
          this.parent.latest === this.id && this.parent.o.onError(t)
        }, r.prototype.completed = function () {
          this.parent.latest === this.id && (this.parent.hasLatest = !1, this.parent.stopped && this.parent.o.onCompleted())
        }, e
      }(Xn);
      zn["switch"] = zn.switchLatest = function () {
        return new ni(this)
      };
      var ri = function (t) {
          function e(e, n) {
            this.source = e, this.other = ee(n) ? ar(n) : n, t.call(this)
          }
          return tn(e, t), e.prototype.subscribeCore = function (t) {
            return new bn(this.source.subscribe(t), this.other.subscribe(new ii(t)))
          }, e
        }(Xn),
        ii = function (t) {
          function e(e) {
            this._o = e, t.call(this)
          }
          return tn(e, t), e.prototype.next = function () {
            this._o.onCompleted()
          }, e.prototype.error = function (t) {
            this._o.onError(t)
          }, e.prototype.onCompleted = Jt, e
        }(Hn);
      zn.takeUntil = function (t) {
        return new ri(this, t)
      };
      var oi = function (t) {
          function e(e, n, r) {
            this._s = e, this._ss = n, this._cb = r, t.call(this)
          }
          return tn(e, t), e.prototype.subscribeCore = function (t) {
            for (var e = this._ss.length, n = {
                hasValue: D(e, W),
                hasValueAll: !1,
                values: new Array(e)
              }, r = this._ss.length, i = new Array(r + 1), o = 0; o < r; o++) {
              var s = this._ss[o],
                u = new dn;
              ee(s) && (s = ar(s)), u.setDisposable(s.subscribe(new si(t, o, n))), i[o] = u
            }
            var c = new dn;
            return c.setDisposable(this._s.subscribe(new ui(t, this._cb, n))), i[r] = c, new _n(i)
          }, e
        }(Xn),
        si = function (t) {
          function e(e, n, r) {
            this._o = e, this._i = n, this._state = r, t.call(this)
          }
          return tn(e, t), e.prototype.next = function (t) {
            this._state.values[this._i] = t, this._state.hasValue[this._i] = !0, this._state.hasValueAll = this._state.hasValue.every(Qt)
          }, e.prototype.error = function (t) {
            this._o.onError(t)
          }, e.prototype.completed = Jt, e
        }(Hn),
        ui = function (t) {
          function e(e, n, r) {
            this._o = e, this._cb = n, this._state = r, t.call(this)
          }
          return tn(e, t), e.prototype.next = function (t) {
            var e = [t].concat(this._state.values);
            if (this._state.hasValueAll) {
              var n = ie(this._cb).apply(null, e);
              return n === re ? this._o.onError(n.e) : void this._o.onNext(n)
            }
          }, e.prototype.error = function (t) {
            this._o.onError(t)
          }, e.prototype.completed = function () {
            this._o.onCompleted()
          }, e
        }(Hn);
      zn.withLatestFrom = function () {
        if (0 === arguments.length) throw new Error("invalid arguments");
        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
        var r = ne(e[t - 1]) ? e.pop() : K;
        return Array.isArray(e[0]) && (e = e[0]), new oi(this, e, r)
      };
      var ci = function (t) {
          function e(e, n) {
            this._s = e, this._cb = n, t.call(this)
          }
          return tn(e, t), e.prototype.subscribeCore = function (t) {
            for (var e = this._s.length, n = new Array(e), r = D(e, W), i = D(e, B), o = 0; o < e; o++) {
              var s = this._s[o],
                u = new dn;
              n[o] = u, ee(s) && (s = ar(s)), u.setDisposable(s.subscribe(new hi(t, o, this, i, r)))
            }
            return new _n(n)
          }, e
        }(Xn),
        hi = function (t) {
          function e(e, n, r, i, o) {
            this._o = e, this._i = n, this._p = r, this._q = i, this._d = o, t.call(this)
          }

          function n(t) {
            return t.length > 0
          }

          function r(t) {
            return t.shift()
          }

          function i(t) {
            return function (e, n) {
              return n !== t
            }
          }
          return tn(e, t), e.prototype.next = function (t) {
            if (this._q[this._i].push(t), this._q.every(n)) {
              var e = this._q.map(r),
                o = ie(this._p._cb).apply(null, e);
              if (o === re) return this._o.onError(o.e);
              this._o.onNext(o)
            } else this._d.filter(i(this._i)).every(Qt) && this._o.onCompleted()
          }, e.prototype.error = function (t) {
            this._o.onError(t)
          }, e.prototype.completed = function () {
            this._d[this._i] = !0, this._d.every(Qt) && this._o.onCompleted()
          }, e
        }(Hn);
      zn.zip = function () {
        if (0 === arguments.length) throw new Error("invalid arguments");
        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
        var r = ne(e[t - 1]) ? e.pop() : K;
        Array.isArray(e[0]) && (e = e[0]);
        var i = this;
        return e.unshift(i), new ci(e, r)
      }, Zn.zip = function () {
        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
        Array.isArray(e[0]) && (e = ne(e[1]) ? e[0].concat(e[1]) : e[0]);
        var r = e.shift();
        return r.zip.apply(r, e)
      };
      var ai = function (t) {
          function e(e, n) {
            this.sources = e, this._cb = n, t.call(this)
          }
          return tn(e, t), e.prototype.subscribeCore = function (t) {
            for (var e = this.sources, n = e.length, r = new Array(n), i = {
                q: D(n, B),
                done: D(n, W),
                cb: this._cb,
                o: t
              }, o = 0; o < n; o++) ! function (t) {
              var n = e[t],
                o = new dn;
              (me(n) || ye(n)) && (n = mr(n)), r[t] = o, o.setDisposable(n.subscribe(new li(i, t)))
            }(o);
            return new _n(r)
          }, e
        }(Xn),
        li = function (t) {
          function e(e, n) {
            this._s = e, this._i = n, t.call(this)
          }

          function n(t) {
            return t.length > 0
          }

          function r(t) {
            return t.shift()
          }

          function i(t) {
            return function (e, n) {
              return n !== t
            }
          }
          return tn(e, t), e.prototype.next = function (t) {
            if (this._s.q[this._i].push(t), this._s.q.every(n)) {
              var e = this._s.q.map(r),
                o = ie(this._s.cb).apply(null, e);
              if (o === re) return this._s.o.onError(o.e);
              this._s.o.onNext(o)
            } else this._s.done.filter(i(this._i)).every(Qt) && this._s.o.onCompleted()
          }, e.prototype.error = function (t) {
            this._s.o.onError(t)
          }, e.prototype.completed = function () {
            this._s.done[this._i] = !0, this._s.done.every(Qt) && this._s.o.onCompleted()
          }, e
        }(Hn);
      zn.zipIterable = function () {
        if (0 === arguments.length) throw new Error("invalid arguments");
        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
        var r = ne(e[t - 1]) ? e.pop() : K,
          i = this;
        return e.unshift(i), new ai(e, r)
      }, zn.asObservable = function () {
        return new ks(z(this), this)
      }, zn.bufferWithCount = zn.bufferCount = function (t, e) {
        return "number" != typeof e && (e = t), this.windowWithCount(t, e).flatMap(H).filter(U)
      };
      var fi = function (t) {
          function e(e) {
            this.source = e, t.call(this)
          }
          return tn(e, t), e.prototype.subscribeCore = function (t) {
            return this.source.subscribe(new pi(t))
          }, e
        }(Xn),
        pi = function (t) {
          function e(e) {
            this._o = e, t.call(this)
          }
          return tn(e, t), e.prototype.next = function (t) {
            t.accept(this._o)
          }, e.prototype.error = function (t) {
            this._o.onError(t)
          }, e.prototype.completed = function () {
            this._o.onCompleted()
          }, e
        }(Hn);
      zn.dematerialize = function () {
        return new fi(this)
      };
      var di = function (t) {
          function e(e, n, r) {
            this.source = e, this.keyFn = n, this.comparer = r, t.call(this)
          }
          return tn(e, t), e.prototype.subscribeCore = function (t) {
            return this.source.subscribe(new vi(t, this.keyFn, this.comparer))
          }, e
        }(Xn),
        vi = function (t) {
          function e(e, n, r) {
            this.o = e, this.keyFn = n, this.comparer = r, this.hasCurrentKey = !1, this.currentKey = null, t.call(this)
          }
          return tn(e, t), e.prototype.next = function (t) {
            var e, n = t;
            return ne(this.keyFn) && (n = ie(this.keyFn)(t), n === re) ? this.o.onError(n.e) : this.hasCurrentKey && (e = ie(this.comparer)(this.currentKey, n), e === re) ? this.o.onError(e.e) : void(this.hasCurrentKey && e || (this.hasCurrentKey = !0, this.currentKey = n, this.o.onNext(t)))
          }, e.prototype.error = function (t) {
            this.o.onError(t)
          }, e.prototype.completed = function () {
            this.o.onCompleted()
          }, e
        }(Hn);
      zn.distinctUntilChanged = function (t, e) {
        return e || (e = Xt), new di(this, t, e)
      };
      var bi = function (t) {
        function e(e, n, r, i) {
          this.source = e, this._oN = n, this._oE = r, this._oC = i, t.call(this)
        }

        function n(t, e) {
          this.o = t, this.t = !e._oN || ne(e._oN) ? Bn(e._oN || Jt, e._oE || Jt, e._oC || Jt) : e._oN, this.isStopped = !1, Hn.call(this)
        }
        return tn(e, t), e.prototype.subscribeCore = function (t) {
          return this.source.subscribe(new n(t, this))
        }, tn(n, Hn), n.prototype.next = function (t) {
          var e = ie(this.t.onNext).call(this.t, t);
          e === re && this.o.onError(e.e), this.o.onNext(t)
        }, n.prototype.error = function (t) {
          var e = ie(this.t.onError).call(this.t, t);
          return e === re ? this.o.onError(e.e) : void this.o.onError(t)
        }, n.prototype.completed = function () {
          var t = ie(this.t.onCompleted).call(this.t);
          return t === re ? this.o.onError(t.e) : void this.o.onCompleted()
        }, e
      }(Xn);
      zn["do"] = zn.tap = zn.doAction = function (t, e, n) {
        return new bi(this, t, e, n)
      }, zn.doOnNext = zn.tapOnNext = function (t, e) {
        return this.tap("undefined" != typeof e ? function (n) {
          t.call(e, n)
        } : t)
      }, zn.doOnError = zn.tapOnError = function (t, e) {
        return this.tap(Jt, "undefined" != typeof e ? function (n) {
          t.call(e, n)
        } : t)
      }, zn.doOnCompleted = zn.tapOnCompleted = function (t, e) {
        return this.tap(Jt, null, "undefined" != typeof e ? function () {
          t.call(e)
        } : t)
      };
      var _i = function (t) {
        function e(e, n, r) {
          this.source = e, this._fn = we(n, r, 0), t.call(this)
        }

        function n(t, e) {
          this.isDisposed = !1, this._s = t, this._fn = e
        }
        return tn(e, t), e.prototype.subscribeCore = function (t) {
          var e = ie(this.source.subscribe).call(this.source, t);
          return e === re && (this._fn(), a(e.e)), new n(e, this._fn)
        }, n.prototype.dispose = function () {
          if (!this.isDisposed) {
            var t = ie(this._s.dispose).call(this._s);
            this._fn(), t === re && a(t.e)
          }
        }, e
      }(Xn);
      zn["finally"] = function (t, e) {
        return new _i(this, t, e)
      };
      var yi = function (t) {
        function e(e) {
          this.source = e, t.call(this)
        }

        function n(t) {
          this.o = t, this.isStopped = !1
        }
        return tn(e, t), e.prototype.subscribeCore = function (t) {
          return this.source.subscribe(new n(t))
        }, n.prototype.onNext = Jt, n.prototype.onError = function (t) {
          this.isStopped || (this.isStopped = !0, this.o.onError(t))
        }, n.prototype.onCompleted = function () {
          this.isStopped || (this.isStopped = !0, this.o.onCompleted())
        }, n.prototype.dispose = function () {
          this.isStopped = !0
        }, n.prototype.fail = function (t) {
          return !this.isStopped && (this.isStopped = !0, this.observer.onError(t), !0)
        }, e
      }(Xn);
      zn.ignoreElements = function () {
        return new yi(this)
      };
      var mi = function (t) {
          function e(e, n) {
            this.source = e, t.call(this)
          }
          return tn(e, t), e.prototype.subscribeCore = function (t) {
            return this.source.subscribe(new wi(t))
          }, e
        }(Xn),
        wi = function (t) {
          function e(e) {
            this._o = e, t.call(this)
          }
          return tn(e, t), e.prototype.next = function (t) {
            this._o.onNext(Ln(t))
          }, e.prototype.error = function (t) {
            this._o.onNext(Vn(t)), this._o.onCompleted()
          }, e.prototype.completed = function () {
            this._o.onNext(Wn()), this._o.onCompleted()
          }, e
        }(Hn);
      zn.materialize = function () {
        return new mi(this)
      }, zn.repeat = function (t) {
        return ir(this, t).concat()
      }, zn.retry = function (t) {
        return ir(this, t).catchError()
      };
      var gi = function (t) {
        function e(t) {
          return {
            isDisposed: !1,
            dispose: function () {
              this.isDisposed || (this.isDisposed = !0, t.isDisposed = !0)
            }
          }
        }

        function n(e, n) {
          this.source = e, this._notifier = n, t.call(this)
        }
        return tn(n, t), n.prototype.subscribeCore = function (t) {
          var n, r = new Ts,
            i = new Ts,
            o = this._notifier(r),
            s = o.subscribe(i),
            u = this.source["@@iterator"](),
            c = {
              isDisposed: !1
            },
            h = new vn,
            a = On.scheduleRecursive(null, function (e, o) {
              if (!c.isDisposed) {
                var s = u.next();
                if (s.done) return void(n ? t.onError(n) : t.onCompleted());
                var a = s.value;
                ee(a) && (a = ar(a));
                var l = new dn,
                  f = new dn;
                h.setDisposable(new bn(f, l)), l.setDisposable(a.subscribe(function (e) {
                  t.onNext(e)
                }, function (e) {
                  f.setDisposable(i.subscribe(o, function (e) {
                    t.onError(e)
                  }, function () {
                    t.onCompleted()
                  })), r.onNext(e), l.dispose()
                }, function () {
                  t.onCompleted()
                }))
              }
            });
          return new _n([s, h, a, e(c)])
        }, n
      }(Xn);
      zn.retryWhen = function (t) {
        return new gi(G(this), t)
      };
      var xi = function (t) {
        function e(t) {
          return {
            isDisposed: !1,
            dispose: function () {
              this.isDisposed || (this.isDisposed = !0, t.isDisposed = !0)
            }
          }
        }

        function n(e, n) {
          this.source = e, this._notifier = n, t.call(this)
        }
        return tn(n, t), n.prototype.subscribeCore = function (t) {
          var n, r = new Ts,
            i = new Ts,
            o = this._notifier(r),
            s = o.subscribe(i),
            u = this.source["@@iterator"](),
            c = {
              isDisposed: !1
            },
            h = new vn,
            a = On.scheduleRecursive(null, function (e, o) {
              if (!c.isDisposed) {
                var s = u.next();
                if (s.done) return void(n ? t.onError(n) : t.onCompleted());
                var a = s.value;
                ee(a) && (a = ar(a));
                var l = new dn,
                  f = new dn;
                h.setDisposable(new bn(f, l)), l.setDisposable(a.subscribe(function (e) {
                  t.onNext(e)
                }, function (e) {
                  t.onError(e)
                }, function () {
                  f.setDisposable(i.subscribe(o, function (e) {
                    t.onError(e)
                  }, function () {
                    t.onCompleted()
                  })), r.onNext(null), l.dispose()
                }))
              }
            });
          return new _n([s, h, a, e(c)])
        }, n
      }(Xn);
      zn.repeatWhen = function (t) {
        return new xi(G(this), t)
      };
      var Ci = function (t) {
          function e(e, n, r, i) {
            this.source = e, this.accumulator = n, this.hasSeed = r, this.seed = i, t.call(this)
          }
          return tn(e, t), e.prototype.subscribeCore = function (t) {
            return this.source.subscribe(new Ei(t, this))
          }, e
        }(Xn),
        Ei = function (t) {
          function e(e, n) {
            this._o = e, this._p = n, this._fn = n.accumulator, this._hs = n.hasSeed, this._s = n.seed, this._ha = !1, this._a = null, this._hv = !1, this._i = 0, t.call(this)
          }
          return tn(e, t), e.prototype.next = function (t) {
            return !this._hv && (this._hv = !0), this._ha ? this._a = ie(this._fn)(this._a, t, this._i, this._p) : (this._a = this._hs ? ie(this._fn)(this._s, t, this._i, this._p) : t, this._ha = !0), this._a === re ? this._o.onError(this._a.e) : (this._o.onNext(this._a), void this._i++)
          }, e.prototype.error = function (t) {
            this._o.onError(t)
          }, e.prototype.completed = function () {
            !this._hv && this._hs && this._o.onNext(this._s), this._o.onCompleted()
          }, e
        }(Hn);
      zn.scan = function () {
        var t, e = !1,
          n = arguments[0];
        return 2 === arguments.length && (e = !0, t = arguments[1]), new Ci(this, n, e, t)
      };
      var Ni = function (t) {
          function e(e, n) {
            this.source = e, this._c = n, t.call(this)
          }
          return tn(e, t), e.prototype.subscribeCore = function (t) {
            return this.source.subscribe(new Di(t, this._c))
          }, e
        }(Xn),
        Di = function (t) {
          function e(e, n) {
            this._o = e, this._c = n, this._q = [], t.call(this)
          }
          return tn(e, t), e.prototype.next = function (t) {
            this._q.push(t), this._q.length > this._c && this._o.onNext(this._q.shift())
          }, e.prototype.error = function (t) {
            this._o.onError(t)
          }, e.prototype.completed = function () {
            this._o.onCompleted()
          }, e
        }(Hn);
      zn.skipLast = function (t) {
        if (t < 0) throw new fe;
        return new Ni(this, t)
      }, zn.startWith = function () {
        var t, e = 0;
        arguments.length && xn(arguments[0]) ? (t = arguments[0], e = 1) : t = An;
        for (var n = [], r = e, i = arguments.length; r < i; r++) n.push(arguments[r]);
        return Vr.apply(null, [gr(n, t), this])
      };
      var Ai = function (t) {
        function e(e, n) {
          this._o = e, this._c = n, this._q = [], t.call(this)
        }
        return tn(e, t), e.prototype.next = function (t) {
          this._q.push(t), this._q.length > this._c && this._q.shift()
        }, e.prototype.error = function (t) {
          this._o.onError(t)
        }, e.prototype.completed = function () {
          for (; this._q.length > 0;) this._o.onNext(this._q.shift());
          this._o.onCompleted()
        }, e
      }(Hn);
      zn.takeLast = function (t) {
        if (t < 0) throw new fe;
        var e = this;
        return new ks(function (n) {
          return e.subscribe(new Ai(n, t))
        }, e)
      };
      var Si = function (t) {
        function e(e, n) {
          this._o = e, this._c = n, this._q = [], t.call(this)
        }
        return tn(e, t), e.prototype.next = function (t) {
          this._q.push(t), this._q.length > this._c && this._q.shift()
        }, e.prototype.error = function (t) {
          this._o.onError(t)
        }, e.prototype.completed = function () {
          this._o.onNext(this._q), this._o.onCompleted()
        }, e
      }(Hn);
      zn.takeLastBuffer = function (t) {
        if (t < 0) throw new fe;
        var e = this;
        return new ks(function (n) {
          return e.subscribe(new Si(n, t))
        }, e)
      }, zn.windowWithCount = zn.windowCount = function (t, e) {
        var n = this;
        if (+t || (t = 0), Math.abs(t) === 1 / 0 && (t = 0), t <= 0) throw new fe;
        if (null == e && (e = t), +e || (e = 0), Math.abs(e) === 1 / 0 && (e = 0), e <= 0) throw new fe;
        return new ks(function (r) {
          function i() {
            var t = new Ts;
            c.push(t), r.onNext(nn(t, s))
          }
          var o = new dn,
            s = new yn(o),
            u = 0,
            c = [];
          return i(), o.setDisposable(n.subscribe(function (n) {
            for (var r = 0, o = c.length; r < o; r++) c[r].onNext(n);
            var s = u - t + 1;
            s >= 0 && s % e === 0 && c.shift().onCompleted(), ++u % e === 0 && i()
          }, function (t) {
            for (; c.length > 0;) c.shift().onError(t);
            r.onError(t)
          }, function () {
            for (; c.length > 0;) c.shift().onCompleted();
            r.onCompleted()
          })), s
        }, n)
      }, zn.selectConcat = zn.concatMap = function (t, e, n) {
        return ne(t) && ne(e) ? this.concatMap(function (n, r) {
          var i = t(n, r);
          return ee(i) && (i = ar(i)), (me(i) || ye(i)) && (i = mr(i)), i.map(function (t, i) {
            return e(n, t, r, i)
          })
        }) : ne(t) ? J(this, t, n) : J(this, function () {
          return t
        })
      }, zn.concatMapObserver = zn.selectConcatObserver = function (t, e, n, r) {
        var i = this,
          o = we(t, r, 2),
          s = we(e, r, 1),
          u = we(n, r, 0);
        return new ks(function (t) {
          var e = 0;
          return i.subscribe(function (n) {
            var r;
            try {
              r = o(n, e++)
            } catch (i) {
              return void t.onError(i)
            }
            ee(r) && (r = ar(r)), t.onNext(r)
          }, function (e) {
            var n;
            try {
              n = s(e)
            } catch (r) {
              return void t.onError(r)
            }
            ee(n) && (n = ar(n)), t.onNext(n), t.onCompleted()
          }, function () {
            var e;
            try {
              e = u()
            } catch (n) {
              return void t.onError(n)
            }
            ee(e) && (e = ar(e)), t.onNext(e), t.onCompleted()
          })
        }, this).concatAll()
      };
      var Oi = function (t) {
        function e(e, n) {
          this._o = e, this._d = n, this._f = !1, t.call(this)
        }
        return tn(e, t), e.prototype.next = function (t) {
          this._f = !0, this._o.onNext(t)
        }, e.prototype.error = function (t) {
          this._o.onError(t)
        }, e.prototype.completed = function () {
          !this._f && this._o.onNext(this._d), this._o.onCompleted()
        }, e
      }(Hn);
      zn.defaultIfEmpty = function (t) {
        var e = this;
        return t === s && (t = null), new ks(function (n) {
          return e.subscribe(new Oi(n, t))
        }, e)
      }, Z.prototype.push = function (t) {
        var e = Q(this.set, t, this.comparer) === -1;
        return e && this.set.push(t), e
      };
      var ki = function (t) {
          function e(e, n, r) {
            this.source = e, this._keyFn = n, this._cmpFn = r, t.call(this)
          }
          return tn(e, t), e.prototype.subscribeCore = function (t) {
            return this.source.subscribe(new ji(t, this._keyFn, this._cmpFn))
          }, e
        }(Xn),
        ji = function (t) {
          function e(e, n, r) {
            this._o = e, this._keyFn = n, this._h = new Z(r), t.call(this)
          }
          return tn(e, t), e.prototype.next = function (t) {
            var e = t;
            return ne(this._keyFn) && (e = ie(this._keyFn)(t), e === re) ? this._o.onError(e.e) : void(this._h.push(e) && this._o.onNext(t))
          }, e.prototype.error = function (t) {
            this._o.onError(t)
          }, e.prototype.completed = function () {
            this._o.onCompleted()
          }, e
        }(Hn);
      zn.distinct = function (t, e) {
        return e || (e = Xt), new ki(this, t, e)
      }, zn.groupBy = function (t, e) {
        return this.groupByUntil(t, e, Nr)
      }, zn.groupByUntil = function (t, e, n) {
        var r = this;
        return new ks(function (i) {
          var o = new Uo,
            u = new sn,
            c = new yn(u),
            h = function (t) {
              return function (e) {
                e.onError(t)
              }
            };
          return u.add(r.subscribe(function (r) {
            var a = ie(t)(r);
            if (a === re) return o.forEach(h(a.e)), i.onError(a.e);
            var l = !1,
              f = o.get(a);
            if (f === s && (f = new Ts, o.set(a, f), l = !0), l) {
              var p = new Fs(a, f, c),
                d = new Fs(a, f),
                v = ie(n)(d);
              if (v === re) return o.forEach(h(v.e)), i.onError(v.e);
              i.onNext(p);
              var b = new dn;
              u.add(b), b.setDisposable(v.take(1).subscribe(Jt, function (t) {
                o.forEach(h(t)), i.onError(t)
              }, function () {
                o["delete"](a) && f.onCompleted(), u.remove(b)
              }))
            }
            var _ = r;
            return ne(e) && (_ = ie(e)(r), _ === re) ? (o.forEach(h(_.e)), i.onError(_.e)) : void f.onNext(_)
          }, function (t) {
            o.forEach(h(t)), i.onError(t)
          }, function () {
            o.forEach(function (t) {
              t.onCompleted()
            }), i.onCompleted()
          })), c
        }, r)
      };
      var qi = function (t) {
        function e(e, n, r) {
          this.source = e, this.selector = we(n, r, 3), t.call(this)
        }

        function n(t, e) {
          return function (n, r, i) {
            return t.call(this, e.selector(n, r, i), r, i)
          }
        }

        function r(t, e, n) {
          this.o = t, this.selector = e, this.source = n, this.i = 0, Hn.call(this)
        }
        return tn(e, t), e.prototype.internalMap = function (t, r) {
          return new e(this.source, n(t, this), r)
        }, e.prototype.subscribeCore = function (t) {
          return this.source.subscribe(new r(t, this.selector, this))
        }, tn(r, Hn), r.prototype.next = function (t) {
          var e = ie(this.selector)(t, this.i++, this.source);
          return e === re ? this.o.onError(e.e) : void this.o.onNext(e)
        }, r.prototype.error = function (t) {
          this.o.onError(t)
        }, r.prototype.completed = function () {
          this.o.onCompleted()
        }, e
      }(Xn);
      zn.map = zn.select = function (t, e) {
        var n = "function" == typeof t ? t : function () {
          return t
        };
        return this instanceof qi ? this.internalMap(n, e) : new qi(this, n, e)
      }, zn.pluck = function () {
        var t = arguments.length,
          e = new Array(t);
        if (0 === t) throw new Error("List of properties cannot be empty.");
        for (var n = 0; n < t; n++) e[n] = arguments[n];
        return this.map(X(e, t))
      }, zn.flatMap = zn.selectMany = zn.mergeMap = function (t, e, n) {
        return new Yn(this, t, e, n).mergeAll()
      }, zn.flatMapObserver = zn.selectManyObserver = function (t, e, n, r) {
        var i = this;
        return new ks(function (o) {
          var s = 0;
          return i.subscribe(function (e) {
            var n;
            try {
              n = t.call(r, e, s++)
            } catch (i) {
              return void o.onError(i)
            }
            ee(n) && (n = ar(n)), o.onNext(n)
          }, function (t) {
            var n;
            try {
              n = e.call(r, t)
            } catch (i) {
              return void o.onError(i)
            }
            ee(n) && (n = ar(n)), o.onNext(n), o.onCompleted()
          }, function () {
            var t;
            try {
              t = n.call(r)
            } catch (e) {
              return void o.onError(e)
            }
            ee(t) && (t = ar(t)), o.onNext(t), o.onCompleted()
          })
        }, i).mergeAll()
      }, zn.flatMapLatest = zn.switchMap = function (t, e, n) {
        return new Yn(this, t, e, n).switchLatest()
      };
      var Fi = function (t) {
        function e(e, n) {
          this.source = e, this._count = n, t.call(this)
        }

        function n(t, e) {
          this._o = t, this._r = e, Hn.call(this)
        }
        return tn(e, t), e.prototype.subscribeCore = function (t) {
          return this.source.subscribe(new n(t, this._count))
        }, tn(n, Hn), n.prototype.next = function (t) {
          this._r <= 0 ? this._o.onNext(t) : this._r--
        }, n.prototype.error = function (t) {
          this._o.onError(t)
        }, n.prototype.completed = function () {
          this._o.onCompleted()
        }, e
      }(Xn);
      zn.skip = function (t) {
        if (t < 0) throw new fe;
        return new Fi(this, t)
      };
      var Ti = function (t) {
          function e(e, n) {
            this.source = e, this._fn = n, t.call(this)
          }
          return tn(e, t), e.prototype.subscribeCore = function (t) {
            return this.source.subscribe(new Ri(t, this))
          }, e
        }(Xn),
        Ri = function (t) {
          function e(e, n) {
            this._o = e, this._p = n, this._i = 0, this._r = !1, t.call(this)
          }
          return tn(e, t), e.prototype.next = function (t) {
            if (!this._r) {
              var e = ie(this._p._fn)(t, this._i++, this._p);
              if (e === re) return this._o.onError(e.e);
              this._r = !e
            }
            this._r && this._o.onNext(t)
          }, e.prototype.error = function (t) {
            this._o.onError(t)
          }, e.prototype.completed = function () {
            this._o.onCompleted()
          }, e
        }(Hn);
      zn.skipWhile = function (t, e) {
        var n = we(t, e, 3);
        return new Ti(this, n)
      };
      var Mi = function (t) {
        function e(e, n) {
          this.source = e, this._count = n, t.call(this)
        }

        function n(t, e) {
          this._o = t, this._c = e, this._r = e, Hn.call(this)
        }
        return tn(e, t), e.prototype.subscribeCore = function (t) {
          return this.source.subscribe(new n(t, this._count))
        }, tn(n, Hn), n.prototype.next = function (t) {
          this._r-- > 0 && (this._o.onNext(t), this._r <= 0 && this._o.onCompleted())
        }, n.prototype.error = function (t) {
          this._o.onError(t)
        }, n.prototype.completed = function () {
          this._o.onCompleted()
        }, e
      }(Xn);
      zn.take = function (t, e) {
        if (t < 0) throw new fe;
        return 0 === t ? br(e) : new Mi(this, t)
      };
      var Ii = function (t) {
          function e(e, n) {
            this.source = e, this._fn = n, t.call(this)
          }
          return tn(e, t), e.prototype.subscribeCore = function (t) {
            return this.source.subscribe(new $i(t, this))
          }, e
        }(Xn),
        $i = function (t) {
          function e(e, n) {
            this._o = e, this._p = n, this._i = 0, this._r = !0, t.call(this)
          }
          return tn(e, t), e.prototype.next = function (t) {
            return this._r && (this._r = ie(this._p._fn)(t, this._i++, this._p), this._r === re) ? this._o.onError(this._r.e) : void(this._r ? this._o.onNext(t) : this._o.onCompleted())
          }, e.prototype.error = function (t) {
            this._o.onError(t)
          }, e.prototype.completed = function () {
            this._o.onCompleted()
          }, e
        }(Hn);
      zn.takeWhile = function (t, e) {
        var n = we(t, e, 3);
        return new Ii(this, n)
      };
      var Pi = function (t) {
        function e(e, n, r) {
          this.source = e, this.predicate = we(n, r, 3), t.call(this)
        }

        function n(t, e) {
          return function (n, r, i) {
            return e.predicate(n, r, i) && t.call(this, n, r, i)
          }
        }

        function r(t, e, n) {
          this.o = t, this.predicate = e, this.source = n, this.i = 0, Hn.call(this)
        }
        return tn(e, t), e.prototype.subscribeCore = function (t) {
          return this.source.subscribe(new r(t, this.predicate, this))
        }, e.prototype.internalFilter = function (t, r) {
          return new e(this.source, n(t, this), r)
        }, tn(r, Hn), r.prototype.next = function (t) {
          var e = ie(this.predicate)(t, this.i++, this.source);
          return e === re ? this.o.onError(e.e) : void(e && this.o.onNext(t))
        }, r.prototype.error = function (t) {
          this.o.onError(t)
        }, r.prototype.completed = function () {
          this.o.onCompleted()
        }, e
      }(Xn);
      zn.filter = zn.where = function (t, e) {
        return this instanceof Pi ? this.internalFilter(t, e) : new Pi(this, t, e)
      };
      var Li = function (t) {
          function e(e, n, r) {
            this.source = e, this._k = n, this._c = r, t.call(this)
          }
          return tn(e, t), e.prototype.subscribeCore = function (t) {
            return this.source.subscribe(new Vi(t, this._k, this._c))
          }, e
        }(Xn),
        Vi = function (t) {
          function e(e, n, r) {
            this._o = e, this._k = n, this._c = r, this._v = null, this._hv = !1, this._l = [], t.call(this)
          }
          return tn(e, t), e.prototype.next = function (t) {
            var e = ie(this._k)(t);
            if (e === re) return this._o.onError(e.e);
            var n = 0;
            if (this._hv) {
              if (n = ie(this._c)(e, this._v), n === re) return this._o.onError(n.e)
            } else this._hv = !0, this._v = e;
            n > 0 && (this._v = e, this._l = []), n >= 0 && this._l.push(t)
          }, e.prototype.error = function (t) {
            this._o.onError(t)
          }, e.prototype.completed = function () {
            this._o.onNext(this._l), this._o.onCompleted()
          }, e
        }(Hn),
        Wi = function (t) {
          function e(e, n, r, i) {
            this.source = e, this.accumulator = n, this.hasSeed = r, this.seed = i, t.call(this)
          }
          return tn(e, t), e.prototype.subscribeCore = function (t) {
            return this.source.subscribe(new Ki(t, this))
          }, e
        }(Xn),
        Ki = function (t) {
          function e(e, n) {
            this._o = e, this._p = n, this._fn = n.accumulator, this._hs = n.hasSeed, this._s = n.seed, this._ha = !1, this._a = null, this._hv = !1, this._i = 0, t.call(this)
          }
          return tn(e, t), e.prototype.next = function (t) {
            return !this._hv && (this._hv = !0), this._ha ? this._a = ie(this._fn)(this._a, t, this._i, this._p) : (this._a = this._hs ? ie(this._fn)(this._s, t, this._i, this._p) : t, this._ha = !0), this._a === re ? this._o.onError(this._a.e) : void this._i++
          }, e.prototype.error = function (t) {
            this._o.onError(t)
          }, e.prototype.completed = function () {
            this._hv && this._o.onNext(this._a), !this._hv && this._hs && this._o.onNext(this._s), !this._hv && !this._hs && this._o.onError(new ae), this._o.onCompleted()
          }, e
        }(Hn);
      zn.reduce = function () {
        var t, e = !1,
          n = arguments[0];
        return 2 === arguments.length && (e = !0, t = arguments[1]), new Wi(this, n, e, t)
      };
      var Bi = function (t) {
          function e(e, n) {
            this.source = e, this._fn = n, t.call(this)
          }
          return tn(e, t), e.prototype.subscribeCore = function (t) {
            return this.source.subscribe(new zi(t, this._fn, this.source))
          }, e
        }(Xn),
        zi = function (t) {
          function e(e, n, r) {
            this._o = e,
              this._fn = n, this._s = r, this._i = 0, t.call(this)
          }
          return tn(e, t), e.prototype.next = function (t) {
            var e = ie(this._fn)(t, this._i++, this._s);
            return e === re ? this._o.onError(e.e) : void(Boolean(e) && (this._o.onNext(!0), this._o.onCompleted()))
          }, e.prototype.error = function (t) {
            this._o.onError(t)
          }, e.prototype.completed = function () {
            this._o.onNext(!1), this._o.onCompleted()
          }, e
        }(Hn);
      zn.some = function (t, e) {
        var n = we(t, e, 3);
        return new Bi(this, n)
      };
      var Hi = function (t) {
          function e(e) {
            this.source = e, t.call(this)
          }
          return tn(e, t), e.prototype.subscribeCore = function (t) {
            return this.source.subscribe(new Ui(t))
          }, e
        }(Xn),
        Ui = function (t) {
          function e(e) {
            this._o = e, t.call(this)
          }
          return tn(e, t), e.prototype.next = function () {
            this._o.onNext(!1), this._o.onCompleted()
          }, e.prototype.error = function (t) {
            this._o.onError(t)
          }, e.prototype.completed = function () {
            this._o.onNext(!0), this._o.onCompleted()
          }, e
        }(Hn);
      zn.isEmpty = function () {
        return new Hi(this)
      };
      var Gi = function (t) {
          function e(e, n) {
            this.source = e, this._fn = n, t.call(this)
          }
          return tn(e, t), e.prototype.subscribeCore = function (t) {
            return this.source.subscribe(new Ji(t, this._fn, this.source))
          }, e
        }(Xn),
        Ji = function (t) {
          function e(e, n, r) {
            this._o = e, this._fn = n, this._s = r, this._i = 0, t.call(this)
          }
          return tn(e, t), e.prototype.next = function (t) {
            var e = ie(this._fn)(t, this._i++, this._s);
            return e === re ? this._o.onError(e.e) : void(Boolean(e) || (this._o.onNext(!1), this._o.onCompleted()))
          }, e.prototype.error = function (t) {
            this._o.onError(t)
          }, e.prototype.completed = function () {
            this._o.onNext(!0), this._o.onCompleted()
          }, e
        }(Hn);
      zn.every = function (t, e) {
        var n = we(t, e, 3);
        return new Gi(this, n)
      };
      var Qi = function (t) {
          function e(e, n, r) {
            var i = +r || 0;
            Math.abs(i) === 1 / 0 && (i = 0), this.source = e, this._elem = n, this._n = i, t.call(this)
          }
          return tn(e, t), e.prototype.subscribeCore = function (t) {
            return this._n < 0 ? (t.onNext(!1), t.onCompleted(), an) : this.source.subscribe(new Zi(t, this._elem, this._n))
          }, e
        }(Xn),
        Zi = function (t) {
          function e(e, n, r) {
            this._o = e, this._elem = n, this._n = r, this._i = 0, t.call(this)
          }

          function n(t, e) {
            return 0 === t && 0 === e || t === e || isNaN(t) && isNaN(e)
          }
          return tn(e, t), e.prototype.next = function (t) {
            this._i++ >= this._n && n(t, this._elem) && (this._o.onNext(!0), this._o.onCompleted())
          }, e.prototype.error = function (t) {
            this._o.onError(t)
          }, e.prototype.completed = function () {
            this._o.onNext(!1), this._o.onCompleted()
          }, e
        }(Hn);
      zn.includes = function (t, e) {
        return new Qi(this, t, e)
      };
      var Xi = function (t) {
          function e(e, n) {
            this.source = e, this._fn = n, t.call(this)
          }
          return tn(e, t), e.prototype.subscribeCore = function (t) {
            return this.source.subscribe(new Yi(t, this._fn, this.source))
          }, e
        }(Xn),
        Yi = function (t) {
          function e(e, n, r) {
            this._o = e, this._fn = n, this._s = r, this._i = 0, this._c = 0, t.call(this)
          }
          return tn(e, t), e.prototype.next = function (t) {
            if (this._fn) {
              var e = ie(this._fn)(t, this._i++, this._s);
              if (e === re) return this._o.onError(e.e);
              Boolean(e) && this._c++
            } else this._c++
          }, e.prototype.error = function (t) {
            this._o.onError(t)
          }, e.prototype.completed = function () {
            this._o.onNext(this._c), this._o.onCompleted()
          }, e
        }(Hn);
      zn.count = function (t, e) {
        var n = we(t, e, 3);
        return new Xi(this, n)
      };
      var to = function (t) {
          function e(e, n, r) {
            this.source = e, this._e = n, this._n = r, t.call(this)
          }
          return tn(e, t), e.prototype.subscribeCore = function (t) {
            return this._n < 0 ? (t.onNext(-1), t.onCompleted(), an) : this.source.subscribe(new eo(t, this._e, this._n))
          }, e
        }(Xn),
        eo = function (t) {
          function e(e, n, r) {
            this._o = e, this._e = n, this._n = r, this._i = 0, t.call(this)
          }
          return tn(e, t), e.prototype.next = function (t) {
            this._i >= this._n && t === this._e && (this._o.onNext(this._i), this._o.onCompleted()), this._i++
          }, e.prototype.error = function (t) {
            this._o.onError(t)
          }, e.prototype.completed = function () {
            this._o.onNext(-1), this._o.onCompleted()
          }, e
        }(Hn);
      zn.indexOf = function (t, e) {
        var n = +e || 0;
        return Math.abs(n) === 1 / 0 && (n = 0), new to(this, t, n)
      };
      var no = function (t) {
          function e(e, n) {
            this.source = e, this._fn = n, t.call(this)
          }
          return tn(e, t), e.prototype.subscribeCore = function (t) {
            return this.source.subscribe(new ro(t, this._fn, this.source))
          }, e
        }(Xn),
        ro = function (t) {
          function e(e, n, r) {
            this._o = e, this._fn = n, this._s = r, this._i = 0, this._c = 0, t.call(this)
          }
          return tn(e, t), e.prototype.next = function (t) {
            if (this._fn) {
              var e = ie(this._fn)(t, this._i++, this._s);
              if (e === re) return this._o.onError(e.e);
              this._c += e
            } else this._c += t
          }, e.prototype.error = function (t) {
            this._o.onError(t)
          }, e.prototype.completed = function () {
            this._o.onNext(this._c), this._o.onCompleted()
          }, e
        }(Hn);
      zn.sum = function (t, e) {
        var n = we(t, e, 3);
        return new no(this, n)
      }, zn.minBy = function (t, e) {
        return e || (e = Yt), new Li(this, t, function (t, n) {
          return e(t, n) * -1
        })
      }, zn.min = function (t) {
        return this.minBy(Qt, t).map(Y)
      }, zn.maxBy = function (t, e) {
        return e || (e = Yt), new Li(this, t, e)
      }, zn.max = function (t) {
        return this.maxBy(Qt, t).map(Y)
      };
      var io = function (t) {
          function e(e, n) {
            this.source = e, this._fn = n, t.call(this)
          }
          return tn(e, t), e.prototype.subscribeCore = function (t) {
            return this.source.subscribe(new oo(t, this._fn, this.source))
          }, e
        }(Xn),
        oo = function (t) {
          function e(e, n, r) {
            this._o = e, this._fn = n, this._s = r, this._c = 0, this._t = 0, t.call(this)
          }
          return tn(e, t), e.prototype.next = function (t) {
            if (this._fn) {
              var e = ie(this._fn)(t, this._c++, this._s);
              if (e === re) return this._o.onError(e.e);
              this._t += e
            } else this._c++, this._t += t
          }, e.prototype.error = function (t) {
            this._o.onError(t)
          }, e.prototype.completed = function () {
            return 0 === this._c ? this._o.onError(new ae) : (this._o.onNext(this._t / this._c), void this._o.onCompleted())
          }, e
        }(Hn);
      zn.average = function (t, e) {
        var n, r = this;
        return ne(t) && (n = we(t, e, 3)), new io(r, n)
      }, zn.sequenceEqual = function (t, e) {
        var n = this;
        return e || (e = Xt), new ks(function (r) {
          var i = !1,
            o = !1,
            s = [],
            u = [],
            c = n.subscribe(function (t) {
              if (u.length > 0) {
                var n = u.shift(),
                  i = ie(e)(n, t);
                if (i === re) return r.onError(i.e);
                i || (r.onNext(!1), r.onCompleted())
              } else o ? (r.onNext(!1), r.onCompleted()) : s.push(t)
            }, function (t) {
              r.onError(t)
            }, function () {
              i = !0, 0 === s.length && (u.length > 0 ? (r.onNext(!1), r.onCompleted()) : o && (r.onNext(!0), r.onCompleted()))
            });
          (me(t) || ye(t)) && (t = mr(t)), ee(t) && (t = ar(t));
          var h = t.subscribe(function (t) {
            if (s.length > 0) {
              var n = s.shift(),
                o = ie(e)(n, t);
              if (o === re) return r.onError(o.e);
              o || (r.onNext(!1), r.onCompleted())
            } else i ? (r.onNext(!1), r.onCompleted()) : u.push(t)
          }, function (t) {
            r.onError(t)
          }, function () {
            o = !0, 0 === u.length && (s.length > 0 ? (r.onNext(!1), r.onCompleted()) : i && (r.onNext(!0), r.onCompleted()))
          });
          return new bn(c, h)
        }, n)
      };
      var so = function (t) {
          function e(e, n, r) {
            this.source = e, this._i = n, this._d = r, t.call(this)
          }
          return tn(e, t), e.prototype.subscribeCore = function (t) {
            return this.source.subscribe(new uo(t, this._i, this._d))
          }, e
        }(Xn),
        uo = function (t) {
          function e(e, n, r) {
            this._o = e, this._i = n, this._d = r, t.call(this)
          }
          return tn(e, t), e.prototype.next = function (t) {
            0 === this._i-- && (this._o.onNext(t), this._o.onCompleted())
          }, e.prototype.error = function (t) {
            this._o.onError(t)
          }, e.prototype.completed = function () {
            this._d === s ? this._o.onError(new fe) : (this._o.onNext(this._d), this._o.onCompleted())
          }, e
        }(Hn);
      zn.elementAt = function (t, e) {
        if (t < 0) throw new fe;
        return new so(this, t, e)
      };
      var co = function (t) {
        function e(e, n, r) {
          this._o = e, this._obj = n, this._s = r, this._i = 0, this._hv = !1, this._v = null, t.call(this)
        }
        return tn(e, t), e.prototype.next = function (t) {
          var e = !1;
          if (this._obj.predicate) {
            var n = ie(this._obj.predicate)(t, this._i++, this._s);
            if (n === re) return this._o.onError(n.e);
            Boolean(n) && (e = !0)
          } else this._obj.predicate || (e = !0);
          if (e) {
            if (this._hv) return this._o.onError(new Error("Sequence contains more than one matching element"));
            this._hv = !0, this._v = t
          }
        }, e.prototype.error = function (t) {
          this._o.onError(t)
        }, e.prototype.completed = function () {
          this._hv ? (this._o.onNext(this._v), this._o.onCompleted()) : this._obj.defaultValue === s ? this._o.onError(new ae) : (this._o.onNext(this._obj.defaultValue), this._o.onCompleted())
        }, e
      }(Hn);
      zn.single = function (t, e) {
        var n = {},
          r = this;
        if (n = "object" == typeof arguments[0] ? arguments[0] : {
            predicate: arguments[0],
            thisArg: arguments[1],
            defaultValue: arguments[2]
          }, ne(n.predicate)) {
          var i = n.predicate;
          n.predicate = we(i, n.thisArg, 3)
        }
        return new ks(function (t) {
          return r.subscribe(new co(t, n, r))
        }, r)
      };
      var ho = function (t) {
          function e(e, n) {
            this.source = e, this._obj = n, t.call(this)
          }
          return tn(e, t), e.prototype.subscribeCore = function (t) {
            return this.source.subscribe(new ao(t, this._obj, this.source))
          }, e
        }(Xn),
        ao = function (t) {
          function e(e, n, r) {
            this._o = e, this._obj = n, this._s = r, this._i = 0, t.call(this)
          }
          return tn(e, t), e.prototype.next = function (t) {
            if (this._obj.predicate) {
              var e = ie(this._obj.predicate)(t, this._i++, this._s);
              if (e === re) return this._o.onError(e.e);
              Boolean(e) && (this._o.onNext(t), this._o.onCompleted())
            } else this._obj.predicate || (this._o.onNext(t), this._o.onCompleted())
          }, e.prototype.error = function (t) {
            this._o.onError(t)
          }, e.prototype.completed = function () {
            this._obj.defaultValue === s ? this._o.onError(new ae) : (this._o.onNext(this._obj.defaultValue), this._o.onCompleted())
          }, e
        }(Hn);
      zn.first = function () {
        var t = {};
        if (t = "object" == typeof arguments[0] ? arguments[0] : {
            predicate: arguments[0],
            thisArg: arguments[1],
            defaultValue: arguments[2]
          }, ne(t.predicate)) {
          var e = t.predicate;
          t.predicate = we(e, t.thisArg, 3)
        }
        return new ho(this, t)
      };
      var lo = function (t) {
          function e(e, n) {
            this.source = e, this._obj = n, t.call(this)
          }
          return tn(e, t), e.prototype.subscribeCore = function (t) {
            return this.source.subscribe(new fo(t, this._obj, this.source))
          }, e
        }(Xn),
        fo = function (t) {
          function e(e, n, r) {
            this._o = e, this._obj = n, this._s = r, this._i = 0, this._hv = !1, this._v = null, t.call(this)
          }
          return tn(e, t), e.prototype.next = function (t) {
            var e = !1;
            if (this._obj.predicate) {
              var n = ie(this._obj.predicate)(t, this._i++, this._s);
              if (n === re) return this._o.onError(n.e);
              Boolean(n) && (e = !0)
            } else this._obj.predicate || (e = !0);
            e && (this._hv = !0, this._v = t)
          }, e.prototype.error = function (t) {
            this._o.onError(t)
          }, e.prototype.completed = function () {
            this._hv ? (this._o.onNext(this._v), this._o.onCompleted()) : this._obj.defaultValue === s ? this._o.onError(new ae) : (this._o.onNext(this._obj.defaultValue), this._o.onCompleted())
          }, e
        }(Hn);
      zn.last = function () {
        var t = {};
        if (t = "object" == typeof arguments[0] ? arguments[0] : {
            predicate: arguments[0],
            thisArg: arguments[1],
            defaultValue: arguments[2]
          }, ne(t.predicate)) {
          var e = t.predicate;
          t.predicate = we(e, t.thisArg, 3)
        }
        return new lo(this, t)
      };
      var po = function (t) {
        function e(e, n, r, i) {
          this._o = e, this._s = n, this._cb = r, this._y = i, this._i = 0, t.call(this)
        }
        return tn(e, t), e.prototype.next = function (t) {
          var e = ie(this._cb)(t, this._i, this._s);
          return e === re ? this._o.onError(e.e) : void(e ? (this._o.onNext(this._y ? this._i : t), this._o.onCompleted()) : this._i++)
        }, e.prototype.error = function (t) {
          this._o.onError(t)
        }, e.prototype.completed = function () {
          this._y && this._o.onNext(-1), this._o.onCompleted()
        }, e
      }(Hn);
      zn.find = function (t, e) {
        return tt(this, t, e, !1)
      }, zn.findIndex = function (t, e) {
        return tt(this, t, e, !0)
      };
      var vo = function (t) {
          function e(e) {
            this.source = e, t.call(this)
          }
          return tn(e, t), e.prototype.subscribeCore = function (t) {
            return this.source.subscribe(new bo(t))
          }, e
        }(Xn),
        bo = function (t) {
          function e(e) {
            this._o = e, this._s = new Ut.Set, t.call(this)
          }
          return tn(e, t), e.prototype.next = function (t) {
            this._s.add(t)
          }, e.prototype.error = function (t) {
            this._o.onError(t)
          }, e.prototype.completed = function () {
            this._o.onNext(this._s), this._o.onCompleted()
          }, e
        }(Hn);
      zn.toSet = function () {
        if ("undefined" == typeof Ut.Set) throw new TypeError;
        return new vo(this)
      };
      var _o = function (t) {
          function e(e, n, r) {
            this.source = e, this._k = n, this._e = r, t.call(this)
          }
          return tn(e, t), e.prototype.subscribeCore = function (t) {
            return this.source.subscribe(new yo(t, this._k, this._e))
          }, e
        }(Xn),
        yo = function (t) {
          function e(e, n, r) {
            this._o = e, this._k = n, this._e = r, this._m = new Ut.Map, t.call(this)
          }
          return tn(e, t), e.prototype.next = function (t) {
            var e = ie(this._k)(t);
            if (e === re) return this._o.onError(e.e);
            var n = t;
            return this._e && (n = ie(this._e)(t), n === re) ? this._o.onError(n.e) : void this._m.set(e, n)
          }, e.prototype.error = function (t) {
            this._o.onError(t)
          }, e.prototype.completed = function () {
            this._o.onNext(this._m), this._o.onCompleted()
          }, e
        }(Hn);
      zn.toMap = function (t, e) {
        if ("undefined" == typeof Ut.Map) throw new TypeError;
        return new _o(this, t, e)
      };
      var mo = function (t) {
          function e(e, n, r) {
            this.source = e, this._b = n, this._e = r, t.call(this)
          }
          return tn(e, t), e.prototype.subscribeCore = function (t) {
            return this.source.subscribe(new wo(t, this._b, this._e))
          }, e
        }(Xn),
        wo = function (t) {
          function e(e, n, r) {
            this._o = e, this._b = n, this._e = r, this._i = 0, t.call(this)
          }
          return tn(e, t), e.prototype.next = function (t) {
            this._i >= this._b && (this._e === this._i ? this._o.onCompleted() : this._o.onNext(t)), this._i++
          }, e.prototype.error = function (t) {
            this._o.onError(t)
          }, e.prototype.completed = function () {
            this._o.onCompleted()
          }, e
        }(Hn);
      zn.slice = function (t, e) {
        var n = t || 0;
        if (n < 0) throw new Gt.ArgumentOutOfRangeError;
        if ("number" == typeof e && e < n) throw new Gt.ArgumentOutOfRangeError;
        return new mo(this, n, e)
      };
      var go = function (t) {
          function e(e, n, r) {
            this.source = e, this._e = n, this._n = r, t.call(this)
          }
          return tn(e, t), e.prototype.subscribeCore = function (t) {
            return this._n < 0 ? (t.onNext(-1), t.onCompleted(), an) : this.source.subscribe(new xo(t, this._e, this._n))
          }, e
        }(Xn),
        xo = function (t) {
          function e(e, n, r) {
            this._o = e, this._e = n, this._n = r, this._v = 0, this._hv = !1, this._i = 0, t.call(this)
          }
          return tn(e, t), e.prototype.next = function (t) {
            this._i >= this._n && t === this._e && (this._hv = !0, this._v = this._i), this._i++
          }, e.prototype.error = function (t) {
            this._o.onError(t)
          }, e.prototype.completed = function () {
            this._hv ? this._o.onNext(this._v) : this._o.onNext(-1), this._o.onCompleted()
          }, e
        }(Hn);
      zn.lastIndexOf = function (t, e) {
        var n = +e || 0;
        return Math.abs(n) === 1 / 0 && (n = 0), new go(this, t, n)
      }, Zn.wrap = function (t) {
        function e() {
          return Zn.spawn.call(this, t.apply(this, arguments))
        }
        return e.__generatorFunction__ = t, e
      };
      var Co = Zn.spawn = function () {
        for (var t = arguments[0], e = this, n = [], r = 1, i = arguments.length; r < i; r++) n.push(arguments[r]);
        return new ks(function (r) {
          function i(e) {
            var n = ie(t.next).call(t, e);
            return n === re ? r.onError(n.e) : void s(n)
          }

          function o(e) {
            var n = ie(t.next).call(t, e);
            return n === re ? r.onError(n.e) : void s(n)
          }

          function s(t) {
            if (t.done) return r.onNext(t.value), void r.onCompleted();
            var n = et.call(e, t.value),
              s = null,
              c = !1;
            Zn.isObservable(n) ? u.add(n.subscribe(function (t) {
              c = !0, s = t
            }, o, function () {
              c && i(s)
            })) : o(new TypeError("type not supported"))
          }
          var u = new sn;
          return ne(t) && (t = t.apply(e, n)), t && ne(t.next) ? (i(), u) : (r.onNext(t), r.onCompleted())
        })
      };
      Zn.start = function (t, e, n) {
        return Eo(t, e, n)()
      };
      var Eo = Zn.toAsync = function (t, e, n) {
        return xn(n) || (n = Tn),
          function () {
            var r = arguments,
              i = new Rs;
            return n.schedule(null, function () {
              var n;
              try {
                n = t.apply(e, r)
              } catch (o) {
                return void i.onError(o)
              }
              i.onNext(n), i.onCompleted()
            }), i.asObservable()
          }
      };
      Zn.fromCallback = function (t, e, n) {
        return function () {
          "undefined" == typeof e && (e = this);
          for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o];
          return ct(t, e, n, i)
        }
      }, Zn.fromNodeCallback = function (t, e, n) {
        return function () {
          "undefined" == typeof e && (e = this);
          for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o];
          return at(t, e, n, i)
        }
      }, pt.prototype.dispose = function () {
        this.isDisposed || (this._e.removeEventListener(this._n, this._fn, !1), this.isDisposed = !0)
      }, Gt.config.useNativeEvents = !1;
      var No = function (t) {
        function e(e, n, r) {
          this._el = e, this._n = n, this._fn = r, t.call(this)
        }

        function n(t, e) {
          return function () {
            var n = arguments[0];
            return ne(e) && (n = ie(e).apply(null, arguments), n === re) ? t.onError(n.e) : void t.onNext(n)
          }
        }
        return tn(e, t), e.prototype.subscribeCore = function (t) {
          return dt(this._el, this._n, n(t, this._fn))
        }, e
      }(Xn);
      Zn.fromEvent = function (t, e, n) {
        return t.addListener ? Ao(function (n) {
          t.addListener(e, n)
        }, function (n) {
          t.removeListener(e, n)
        }, n) : Gt.config.useNativeEvents || "function" != typeof t.on || "function" != typeof t.off ? new No(t, e, n).publish().refCount() : Ao(function (n) {
          t.on(e, n)
        }, function (n) {
          t.off(e, n)
        }, n)
      };
      var Do = function (t) {
          function e(e, n, r) {
            this._add = e, this._del = n, this._fn = r, t.call(this)
          }

          function n(t, e) {
            return function () {
              var n = arguments[0];
              return ne(e) && (n = ie(e).apply(null, arguments), n === re) ? t.onError(n.e) : void t.onNext(n)
            }
          }

          function r(t, e, n) {
            this._del = t, this._fn = e, this._ret = n, this.isDisposed = !1
          }
          return tn(e, t), e.prototype.subscribeCore = function (t) {
            var e = n(t, this._fn),
              i = this._add(e);
            return new r(this._del, e, i)
          }, r.prototype.dispose = function () {
            this.isDisposed || (ne(this._del) && this._del(this._fn, this._ret), this.isDisposed = !0)
          }, e
        }(Xn),
        Ao = Zn.fromEventPattern = function (t, e, n) {
          return new Do(t, e, n).publish().refCount()
        };
      Zn.startAsync = function (t) {
        var e = ie(t)();
        return e === re ? jr(e.e) : ar(e)
      };
      var So = function (t) {
        function e(e, n) {
          this.source = e, this.controller = new Ts, this.paused = !0, n && n.subscribe ? this.pauser = this.controller.merge(n) : this.pauser = this.controller, t.call(this)
        }
        return tn(e, t), e.prototype._subscribe = function (t) {
          var e = this.source.publish(),
            n = e.subscribe(t),
            r = an,
            i = this.pauser.startWith(!this.paused).distinctUntilChanged().subscribe(function (t) {
              t ? r = e.connect() : (r.dispose(), r = an)
            });
          return new _n([n, r, i])
        }, e.prototype.pause = function () {
          this.paused = !0, this.controller.onNext(!1)
        }, e.prototype.resume = function () {
          this.paused = !1, this.controller.onNext(!0)
        }, e
      }(Zn);
      zn.pausable = function (t) {
        return new So(this, t)
      };
      var Oo = function (t) {
        function e(e, n) {
          this.source = e, this.controller = new Ts, this.paused = !0, n && n.subscribe ? this.pauser = this.controller.merge(n) : this.pauser = this.controller, t.call(this)
        }
        return tn(e, t), e.prototype._subscribe = function (t) {
          function e() {
            for (; r.length > 0;) t.onNext(r.shift())
          }
          var n, r = [],
            i = vt(this.source, this.pauser.startWith(!this.paused).distinctUntilChanged(), function (t, e) {
              return {
                data: t,
                shouldFire: e
              }
            }).subscribe(function (i) {
              n !== s && i.shouldFire !== n ? (n = i.shouldFire, i.shouldFire && e()) : (n = i.shouldFire, i.shouldFire ? t.onNext(i.data) : r.push(i.data))
            }, function (n) {
              e(), t.onError(n)
            }, function () {
              e(), t.onCompleted()
            });
          return i
        }, e.prototype.pause = function () {
          this.paused = !0, this.controller.onNext(!1)
        }, e.prototype.resume = function () {
          this.paused = !1, this.controller.onNext(!0)
        }, e
      }(Zn);
      zn.pausableBuffered = function (t) {
        return new Oo(this, t)
      };
      var ko = function (t) {
          function e(e, n, r) {
            t.call(this), this.subject = new jo(n, r), this.source = e.multicast(this.subject).refCount()
          }
          return tn(e, t), e.prototype._subscribe = function (t) {
            return this.source.subscribe(t)
          }, e.prototype.request = function (t) {
            return this.subject.request(null == t ? -1 : t)
          }, e
        }(Zn),
        jo = function (t) {
          function e(e, n) {
            null == e && (e = !0), t.call(this), this.subject = new Ts, this.enableQueue = e, this.queue = e ? [] : null, this.requestedCount = 0, this.requestedDisposable = null, this.error = null, this.hasFailed = !1, this.hasCompleted = !1, this.scheduler = n || On
          }
          return tn(e, t), en(e.prototype, Kn, {
            _subscribe: function (t) {
              return this.subject.subscribe(t)
            },
            onCompleted: function () {
              this.hasCompleted = !0, this.enableQueue && 0 !== this.queue.length ? this.queue.push(Mn.createOnCompleted()) : (this.subject.onCompleted(), this.disposeCurrentRequest())
            },
            onError: function (t) {
              this.hasFailed = !0, this.error = t, this.enableQueue && 0 !== this.queue.length ? this.queue.push(Mn.createOnError(t)) : (this.subject.onError(t), this.disposeCurrentRequest())
            },
            onNext: function (t) {
              this.requestedCount <= 0 ? this.enableQueue && this.queue.push(Mn.createOnNext(t)) : (0 === this.requestedCount-- && this.disposeCurrentRequest(), this.subject.onNext(t))
            },
            _processRequest: function (t) {
              if (this.enableQueue)
                for (; this.queue.length > 0 && (t > 0 || "N" !== this.queue[0].kind);) {
                  var e = this.queue.shift();
                  e.accept(this.subject), "N" === e.kind ? t-- : (this.disposeCurrentRequest(), this.queue = [])
                }
              return t
            },
            request: function (t) {
              this.disposeCurrentRequest();
              var e = this;
              return this.requestedDisposable = this.scheduler.schedule(t, function (t, n) {
                var r = e._processRequest(n),
                  i = e.hasCompleted || e.hasFailed;
                if (!i && r > 0) return e.requestedCount = r, hn(function () {
                  e.requestedCount = 0
                })
              }), this.requestedDisposable
            },
            disposeCurrentRequest: function () {
              this.requestedDisposable && (this.requestedDisposable.dispose(), this.requestedDisposable = null)
            }
          }), e
        }(Zn);
      zn.controlled = function (t, e) {
        return t && xn(t) && (e = t, t = !0), null == t && (t = !0), new ko(this, t, e)
      };
      var qo = function (t) {
        function e(e) {
          t.call(this), this.source = e
        }

        function n(t, e) {
          return e.source.request(1)
        }
        tn(e, t), e.prototype._subscribe = function (t) {
          return this.subscription = this.source.subscribe(new r(t, this, this.subscription)), new bn(this.subscription, Tn.schedule(this, n))
        };
        var r = function (t) {
          function e(e, n, r) {
            t.call(this), this.observer = e, this.observable = n, this.cancel = r, this.scheduleDisposable = null
          }

          function n(t, e) {
            return e.observable.source.request(1)
          }
          return tn(e, t), e.prototype.completed = function () {
            this.observer.onCompleted(), this.dispose()
          }, e.prototype.error = function (t) {
            this.observer.onError(t), this.dispose()
          }, e.prototype.next = function (t) {
            this.observer.onNext(t), this.scheduleDisposable = Tn.schedule(this, n)
          }, e.dispose = function () {
            this.observer = null, this.cancel && (this.cancel.dispose(), this.cancel = null), this.scheduleDisposable && (this.scheduleDisposable.dispose(), this.scheduleDisposable = null), t.prototype.dispose.call(this)
          }, e
        }(Hn);
        return e
      }(Zn);
      ko.prototype.stopAndWait = function () {
        return new qo(this)
      };
      var Fo = function (t) {
        function e(e, n) {
          t.call(this), this.source = e, this.windowSize = n
        }

        function n(t, e) {
          return e.source.request(e.windowSize)
        }
        tn(e, t), e.prototype._subscribe = function (t) {
          return this.subscription = this.source.subscribe(new r(t, this, this.subscription)), new bn(this.subscription, Tn.schedule(this, n))
        };
        var r = function (t) {
          function e(e, n, r) {
            this.observer = e, this.observable = n, this.cancel = r, this.received = 0, this.scheduleDisposable = null, t.call(this)
          }

          function n(t, e) {
            return e.observable.source.request(e.observable.windowSize)
          }
          return tn(e, t), e.prototype.completed = function () {
            this.observer.onCompleted(), this.dispose()
          }, e.prototype.error = function (t) {
            this.observer.onError(t), this.dispose()
          }, e.prototype.next = function (t) {
            this.observer.onNext(t), this.received = ++this.received % this.observable.windowSize, 0 === this.received && (this.scheduleDisposable = Tn.schedule(this, n))
          }, e.prototype.dispose = function () {
            this.observer = null, this.cancel && (this.cancel.dispose(), this.cancel = null), this.scheduleDisposable && (this.scheduleDisposable.dispose(), this.scheduleDisposable = null), t.prototype.dispose.call(this)
          }, e
        }(Hn);
        return e
      }(Zn);
      ko.prototype.windowed = function (t) {
        return new Fo(this, t)
      }, zn.pipe = function (t) {
        function e() {
          n.resume()
        }
        var n = this.pausableBuffered();
        return t.addListener("drain", e), n.subscribe(function (e) {
          !t.write(e) && n.pause()
        }, function (e) {
          t.emit("error", e)
        }, function () {
          !t._isStdio && t.end(), t.removeListener("drain", e)
        }), n.resume(), t
      };
      var To = function (t) {
        function e(e, n, r) {
          this.source = e, this._fn1 = n, this._fn2 = r, t.call(this)
        }
        return tn(e, t), e.prototype.subscribeCore = function (t) {
          var e = this.source.multicast(this._fn1());
          return new bn(this._fn2(e).subscribe(t), e.connect())
        }, e
      }(Xn);
      zn.multicast = function (t, e) {
        return ne(t) ? new To(this, t, e) : new Io(this, t)
      }, zn.publish = function (t) {
        return t && ne(t) ? this.multicast(function () {
          return new Ts
        }, t) : this.multicast(new Ts)
      }, zn.share = function () {
        return this.publish().refCount()
      }, zn.publishLast = function (t) {
        return t && ne(t) ? this.multicast(function () {
          return new Rs
        }, t) : this.multicast(new Rs)
      }, zn.publishValue = function (t, e) {
        return 2 === arguments.length ? this.multicast(function () {
          return new Ms(e)
        }, t) : this.multicast(new Ms(t))
      }, zn.shareValue = function (t) {
        return this.publishValue(t).refCount()
      }, zn.replay = function (t, e, n, r) {
        return t && ne(t) ? this.multicast(function () {
          return new Is(e, n, r)
        }, t) : this.multicast(new Is(e, n, r))
      }, zn.shareReplay = function (t, e, n) {
        return this.replay(null, t, e, n).refCount()
      };
      var Ro = function (t, e) {
        this._s = t, this._o = e
      };
      Ro.prototype.dispose = function () {
        if (!this._s.isDisposed && null !== this._o) {
          var t = this._s.observers.indexOf(this._o);
          this._s.observers.splice(t, 1), this._o = null
        }
      };
      var Mo = function (t) {
          function e(e) {
            this.source = e, this._count = 0, this._connectableSubscription = null, t.call(this)
          }

          function n(t, e) {
            this._p = t, this._s = e, this.isDisposed = !1
          }
          return tn(e, t), e.prototype.subscribeCore = function (t) {
            var e = this.source.subscribe(t);
            return 1 === ++this._count && (this._connectableSubscription = this.source.connect()), new n(this, e)
          }, n.prototype.dispose = function () {
            this.isDisposed || (this.isDisposed = !0, this._s.dispose(), 0 === --this._p._count && this._p._connectableSubscription.dispose())
          }, e
        }(Xn),
        Io = Gt.ConnectableObservable = function (t) {
          function e(e, n) {
            this.source = e, this._connection = null, this._source = e.asObservable(), this._subject = n, t.call(this)
          }

          function n(t, e) {
            this._p = t, this._s = e
          }
          return tn(e, t), n.prototype.dispose = function () {
            this._s && (this._s.dispose(), this._s = null, this._p._connection = null)
          }, e.prototype.connect = function () {
            if (!this._connection) {
              if (this._subject.isStopped) return an;
              var t = this._source.subscribe(this._subject);
              this._connection = new n(this, t)
            }
            return this._connection
          }, e.prototype._subscribe = function (t) {
            return this._subject.subscribe(t)
          }, e.prototype.refCount = function () {
            return new Mo(this)
          }, e
        }(Zn);
      zn.singleInstance = function () {
        function t() {
          return r || (r = !0, e = n["finally"](function () {
            r = !1
          }).publish().refCount()), e
        }
        var e, n = this,
          r = !1;
        return new ks(function (e) {
          return t().subscribe(e)
        })
      }, zn.join = function (t, e, n, r) {
        var i = this;
        return new ks(function (o) {
          var s = new sn,
            u = !1,
            c = !1,
            h = 0,
            a = 0,
            l = new Uo,
            f = new Uo,
            p = function (t) {
              o.onError(t)
            };
          return s.add(i.subscribe(function (t) {
            var n = h++,
              i = new dn;
            l.set(n, t), s.add(i);
            var c = ie(e)(t);
            return c === re ? o.onError(c.e) : (i.setDisposable(c.take(1).subscribe(Jt, p, function () {
              l["delete"](n) && 0 === l.size && u && o.onCompleted(), s.remove(i)
            })), void f.forEach(function (e) {
              var n = ie(r)(t, e);
              return n === re ? o.onError(n.e) : void o.onNext(n)
            }))
          }, p, function () {
            u = !0, (c || 0 === l.size) && o.onCompleted()
          })), s.add(t.subscribe(function (t) {
            var e = a++,
              i = new dn;
            f.set(e, t), s.add(i);
            var u = ie(n)(t);
            return u === re ? o.onError(u.e) : (i.setDisposable(u.take(1).subscribe(Jt, p, function () {
              f["delete"](e) && 0 === f.size && c && o.onCompleted(), s.remove(i)
            })), void l.forEach(function (e) {
              var n = ie(r)(e, t);
              return n === re ? o.onError(n.e) : void o.onNext(n)
            }))
          }, p, function () {
            c = !0, (u || 0 === f.size) && o.onCompleted()
          })), s
        }, i)
      }, zn.groupJoin = function (t, e, n, r) {
        var i = this;
        return new ks(function (o) {
          function s(t) {}
          var u = new sn,
            c = new yn(u),
            h = new Uo,
            a = new Uo,
            l = 0,
            f = 0,
            s = function (t) {
              return function (e) {
                e.onError(t)
              }
            };
          return u.add(i.subscribe(function (t) {
            var n = new Ts,
              i = l++;
            h.set(i, n);
            var f = ie(r)(t, nn(n, c));
            if (f === re) return h.forEach(s(f.e)), o.onError(f.e);
            o.onNext(f), a.forEach(function (t) {
              n.onNext(t)
            });
            var p = new dn;
            u.add(p);
            var d = ie(e)(t);
            return d === re ? (h.forEach(s(d.e)), o.onError(d.e)) : void p.setDisposable(d.take(1).subscribe(Jt, function (t) {
              h.forEach(s(t)), o.onError(t)
            }, function () {
              h["delete"](i) && n.onCompleted(), u.remove(p)
            }))
          }, function (t) {
            h.forEach(s(t)), o.onError(t)
          }, function () {
            o.onCompleted()
          })), u.add(t.subscribe(function (t) {
            var e = f++;
            a.set(e, t);
            var r = new dn;
            u.add(r);
            var i = ie(n)(t);
            return i === re ? (h.forEach(s(i.e)), o.onError(i.e)) : (r.setDisposable(i.take(1).subscribe(Jt, function (t) {
              h.forEach(s(t)), o.onError(t)
            }, function () {
              a["delete"](e), u.remove(r)
            })), void h.forEach(function (e) {
              e.onNext(t)
            }))
          }, function (t) {
            h.forEach(s(t)), o.onError(t)
          })), c
        }, i)
      }, zn.buffer = function () {
        return this.window.apply(this, arguments).flatMap(H)
      }, zn.window = function (t, e) {
        return 1 === arguments.length && "function" != typeof arguments[0] ? _t.call(this, t) : "function" == typeof t ? yt.call(this, t) : bt.call(this, t, e)
      };
      var $o = function (t) {
          function e(e) {
            this.source = e, t.call(this)
          }
          return tn(e, t), e.prototype.subscribeCore = function (t) {
            return this.source.subscribe(new Po(t))
          }, e
        }(Xn),
        Po = function (t) {
          function e(e) {
            this._o = e, this._p = null, this._hp = !1, t.call(this)
          }
          return tn(e, t), e.prototype.next = function (t) {
            this._hp ? this._o.onNext([this._p, t]) : this._hp = !0, this._p = t
          }, e.prototype.error = function (t) {
            this._o.onError(t)
          }, e.prototype.completed = function () {
            this._o.onCompleted()
          }, e
        }(Hn);
      zn.pairwise = function () {
        return new $o(this)
      }, zn.partition = function (t, e) {
        var n = we(t, e, 3);
        return [this.filter(t, e), this.filter(function (t, e, r) {
          return !n(t, e, r)
        })]
      };
      var Lo = function (t) {
        function e(t, e) {
          this.c = t, this.s = e
        }
        return tn(e, t), e.prototype[be] = function () {
          var t = this;
          return {
            next: function () {
              return t.c() ? {
                done: !1,
                value: t.s
              } : {
                done: !0,
                value: void 0
              }
            }
          }
        }, e
      }(tr);
      zn.letBind = zn["let"] = function (t) {
        return t(this)
      }, Zn["if"] = function (t, e, n) {
        return pr(function () {
          return n || (n = br()), ee(e) && (e = ar(e)), ee(n) && (n = ar(n)), "function" == typeof n.now && (n = br(n)), t() ? e : n
        })
      }, Zn["for"] = Zn.forIn = function (t, e, n) {
        return sr(t, e, n).concat()
      };
      var Vo = Zn["while"] = Zn.whileDo = function (t, e) {
        return ee(e) && (e = ar(e)), mt(t, e).concat()
      };
      zn.doWhile = function (t) {
        return Vr([this, Vo(t, this)])
      }, Zn["case"] = function (t, e, n) {
        return pr(function () {
          ee(n) && (n = ar(n)), n || (n = br()), xn(n) && (n = br(n));
          var r = e[t()];
          return ee(r) && (r = ar(r)), r || n
        })
      };
      var Wo = function (t) {
          function e(e, n, r) {
            this.source = e, this._fn = n, this._scheduler = r, t.call(this)
          }

          function n(t, e) {
            var n, r = t[0],
              i = t[1];
            if (!(r.q.length > 0)) return void(r.isAcquired = !1);
            n = r.q.shift();
            var o = new dn;
            r.d.add(o), o.setDisposable(n.subscribe(new Ko(r, i, o))), e([r, i])
          }
          return tn(e, t), e.prototype._ensureActive = function (t) {
            var e = !1;
            t.q.length > 0 && (e = !t.isAcquired, t.isAcquired = !0), e && t.m.setDisposable(this._scheduler.scheduleRecursive([t, this], n))
          }, e.prototype.subscribeCore = function (t) {
            var e = new vn,
              n = new sn(e),
              r = {
                q: [],
                m: e,
                d: n,
                activeCount: 0,
                isAcquired: !1,
                o: t
              };
            return r.q.push(this.source), r.activeCount++, this._ensureActive(r), n
          }, e
        }(Xn),
        Ko = function (t) {
          function e(e, n, r) {
            this._s = e, this._p = n, this._m1 = r, t.call(this)
          }
          return tn(e, t), e.prototype.next = function (t) {
            this._s.o.onNext(t);
            var e = ie(this._p._fn)(t);
            return e === re ? this._s.o.onError(e.e) : (this._s.q.push(e), this._s.activeCount++, void this._p._ensureActive(this._s))
          }, e.prototype.error = function (t) {
            this._s.o.onError(t)
          }, e.prototype.completed = function () {
            this._s.d.remove(this._m1), this._s.activeCount--, 0 === this._s.activeCount && this._s.o.onCompleted()
          }, e
        }(Hn);
      zn.expand = function (t, e) {
        return xn(e) || (e = On), new Wo(this, t, e)
      };
      var Bo = function (t) {
          function e(e, n) {
            this._sources = e, this._cb = n, t.call(this)
          }
          return tn(e, t), e.prototype.subscribeCore = function (t) {
            if (0 === this._sources.length) return t.onCompleted(), an;
            for (var e = this._sources.length, n = {
                finished: !1,
                hasResults: new Array(e),
                hasCompleted: new Array(e),
                results: new Array(e)
              }, r = new sn, i = 0, o = this._sources.length; i < o; i++) {
              var s = this._sources[i];
              ee(s) && (s = ar(s)), r.add(s.subscribe(new zo(t, n, i, this._cb, r)))
            }
            return r
          }, e
        }(Xn),
        zo = function (t) {
          function e(e, n, r, i, o) {
            this._o = e, this._s = n, this._i = r, this._cb = i, this._subs = o, t.call(this)
          }
          return tn(e, t), e.prototype.next = function (t) {
            this._s.finished || (this._s.hasResults[this._i] = !0, this._s.results[this._i] = t)
          }, e.prototype.error = function (t) {
            this._s.finished = !0, this._o.onError(t), this._subs.dispose()
          }, e.prototype.completed = function () {
            if (!this._s.finished) {
              if (!this._s.hasResults[this._i]) return this._o.onCompleted();
              this._s.hasCompleted[this._i] = !0;
              for (var t = 0; t < this._s.results.length; t++)
                if (!this._s.hasCompleted[t]) return;
              this._s.finished = !0;
              var e = ie(this._cb).apply(null, this._s.results);
              if (e === re) return this._o.onError(e.e);
              this._o.onNext(e), this._o.onCompleted()
            }
          }, e
        }(Hn);
      Zn.forkJoin = function () {
        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
        var r = ne(e[t - 1]) ? e.pop() : K;
        return Array.isArray(e[0]) && (e = e[0]), new Bo(e, r)
      }, zn.forkJoin = function () {
        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
        return Array.isArray(e[0]) ? e[0].unshift(this) : e.unshift(this), Zn.forkJoin.apply(null, e)
      }, zn.manySelect = zn.extend = function (t, e) {
        xn(e) || (e = Gt.Scheduler.immediate);
        var n = this;
        return pr(function () {
          var r;
          return n.map(function (t) {
            var e = new Ho(t);
            return r && r.onNext(t), r = e, e
          }).tap(Jt, function (t) {
            r && r.onError(t)
          }, function () {
            r && r.onCompleted()
          }).observeOn(e).map(t)
        }, n)
      };
      var Ho = function (t) {
          function e(e) {
            t.call(this), this.head = e, this.tail = new Rs
          }
          return tn(e, t), en(e.prototype, Kn, {
            _subscribe: function (t) {
              var e = new sn;
              return e.add(On.schedule(this, function (n, r) {
                t.onNext(r.head), e.add(r.tail.mergeAll().subscribe(t))
              })), e
            },
            onCompleted: function () {
              this.onNext(Zn.empty())
            },
            onError: function (t) {
              this.onNext(Zn["throw"](t))
            },
            onNext: function (t) {
              this.tail.onNext(t), this.tail.onCompleted()
            }
          }), e
        }(Zn),
        Uo = Ut.Map || function () {
          function t() {
            this.size = 0, this._values = [], this._keys = []
          }
          return t.prototype["delete"] = function (t) {
            var e = this._keys.indexOf(t);
            return e !== -1 && (this._values.splice(e, 1), this._keys.splice(e, 1), this.size--, !0)
          }, t.prototype.get = function (t) {
            var e = this._keys.indexOf(t);
            return e === -1 ? s : this._values[e]
          }, t.prototype.set = function (t, e) {
            var n = this._keys.indexOf(t);
            return n === -1 ? (this._keys.push(t), this._values.push(e), this.size++) : this._values[n] = e, this
          }, t.prototype.forEach = function (t, e) {
            for (var n = 0; n < this.size; n++) t.call(e, this._values[n], this._keys[n])
          }, t
        }();
      wt.prototype.and = function (t) {
        return new wt(this.patterns.concat(t))
      }, wt.prototype.thenDo = function (t) {
        return new gt(this, t)
      }, gt.prototype.activate = function (t, e, n) {
        for (var r = [], i = xt(e), o = 0, s = this.expression.patterns.length; o < s; o++) r.push(Et(t, this.expression.patterns[o], i));
        var u = new Nt(r, Ct(this, e), function () {
          for (var t = 0, e = r.length; t < e; t++) r[t].removeActivePlan(u);
          n(u)
        });
        for (o = 0, s = r.length; o < s; o++) r[o].addActivePlan(u);
        return u
      }, Nt.prototype.dequeue = function () {
        this.joinObservers.forEach(function (t) {
          t.queue.shift()
        })
      }, Nt.prototype.match = function () {
        var t, e, n = !0;
        for (t = 0, e = this.joinObserverArray.length; t < e; t++)
          if (0 === this.joinObserverArray[t].queue.length) {
            n = !1;
            break
          }
        if (n) {
          var r = [],
            i = !1;
          for (t = 0, e = this.joinObserverArray.length; t < e; t++) r.push(this.joinObserverArray[t].queue[0]), "C" === this.joinObserverArray[t].queue[0].kind && (i = !0);
          if (i) this.onCompleted();
          else {
            this.dequeue();
            var o = [];
            for (t = 0, e = r.length; t < r.length; t++) o.push(r[t].value);
            this.onNext.apply(this, o)
          }
        }
      };
      var Go = function (t) {
        function e(e, n) {
          t.call(this), this.source = e, this.onError = n, this.queue = [], this.activePlans = [], this.subscription = new dn, this.isDisposed = !1
        }
        tn(e, t);
        var n = e.prototype;
        return n.next = function (t) {
          if (!this.isDisposed) {
            if ("E" === t.kind) return this.onError(t.error);
            this.queue.push(t);
            for (var e = this.activePlans.slice(0), n = 0, r = e.length; n < r; n++) e[n].match()
          }
        }, n.error = Jt, n.completed = Jt, n.addActivePlan = function (t) {
          this.activePlans.push(t)
        }, n.subscribe = function () {
          this.subscription.setDisposable(this.source.materialize().subscribe(this))
        }, n.removeActivePlan = function (t) {
          this.activePlans.splice(this.activePlans.indexOf(t), 1), 0 === this.activePlans.length && this.dispose()
        }, n.dispose = function () {
          t.prototype.dispose.call(this), this.isDisposed || (this.isDisposed = !0, this.subscription.dispose())
        }, e
      }(Hn);
      zn.and = function (t) {
        return new wt([this, t])
      }, zn.thenDo = function (t) {
        return new wt([this]).thenDo(t)
      }, Zn.when = function () {
        var t, e = arguments.length;
        if (Array.isArray(arguments[0])) t = arguments[0];
        else {
          t = new Array(e);
          for (var n = 0; n < e; n++) t[n] = arguments[n]
        }
        return new ks(function (e) {
          var n = [],
            r = new Uo,
            i = Bn(function (t) {
              e.onNext(t)
            }, function (t) {
              r.forEach(function (e) {
                e.onError(t)
              }), e.onError(t)
            }, function (t) {
              e.onCompleted()
            });
          try {
            for (var o = 0, s = t.length; o < s; o++) n.push(t[o].activate(r, i, function (t) {
              var r = n.indexOf(t);
              n.splice(r, 1), 0 === n.length && e.onCompleted()
            }))
          } catch (u) {
            return jr(u).subscribe(e)
          }
          var c = new sn;
          return r.forEach(function (t) {
            t.subscribe(), c.add(t)
          }), c
        })
      };
      var Jo = function (t) {
          function e(e, n) {
            this._dt = e, this._s = n, t.call(this)
          }

          function n(t, e) {
            e.onNext(0), e.onCompleted()
          }
          return tn(e, t), e.prototype.subscribeCore = function (t) {
            return this._s.scheduleFuture(t, this._dt, n)
          }, e
        }(Xn),
        Qo = Zn.interval = function (t, e) {
          return St(t, t, xn(e) ? e : Tn)
        };
      Zn.timer = function (t, e, n) {
        var r;
        return xn(n) || (n = Tn), null != e && "number" == typeof e ? r = e : xn(e) && (n = e), (t instanceof Date || "number" == typeof t) && r === s ? Dt(t, n) : t instanceof Date && r !== s ? At(t, e, n) : St(t, r, n)
      };
      zn.delay = function () {
        var t = arguments[0];
        if ("number" == typeof t || t instanceof Date) {
          var e = t,
            n = arguments[1];
          return xn(n) || (n = Tn), e instanceof Date ? kt(this, e, n) : Ot(this, e, n)
        }
        if (Zn.isObservable(t) || ne(t)) return jt(this, t, arguments[1]);
        throw new Error("Invalid arguments")
      };
      var Zo = function (t) {
          function e(e, n, r) {
            xn(r) || (r = Tn), this.source = e, this._dt = n, this._s = r, t.call(this)
          }
          return tn(e, t), e.prototype.subscribeCore = function (t) {
            var e = new vn;
            return new bn(this.source.subscribe(new Xo(t, this._dt, this._s, e)), e)
          }, e
        }(Xn),
        Xo = function (t) {
          function e(e, n, r, i) {
            this._o = e, this._d = n, this._scheduler = r, this._c = i, this._v = null, this._hv = !1, this._id = 0, t.call(this)
          }
          return tn(e, t), e.prototype.next = function (t) {
            this._hv = !0, this._v = t;
            var e = ++this._id,
              n = new dn;
            this._c.setDisposable(n), n.setDisposable(this._scheduler.scheduleFuture(this, this._d, function (n, r) {
              r._hv && r._id === e && r._o.onNext(t), r._hv = !1
            }))
          }, e.prototype.error = function (t) {
            this._c.dispose(), this._o.onError(t), this._hv = !1, this._id++
          }, e.prototype.completed = function () {
            this._c.dispose(), this._hv && this._o.onNext(this._v), this._o.onCompleted(), this._hv = !1, this._id++
          }, e
        }(Hn);
      zn.debounce = function () {
        if (ne(arguments[0])) return qt(this, arguments[0]);
        if ("number" == typeof arguments[0]) return new Zo(this, arguments[0], arguments[1]);
        throw new Error("Invalid arguments")
      }, zn.windowWithTime = zn.windowTime = function (t, e, n) {
        var r, i = this;
        return null == e && (r = t), xn(n) || (n = Tn), "number" == typeof e ? r = e : xn(e) && (r = t, n = e), new ks(function (e) {
          function o() {
            var t = new dn,
              i = !1,
              s = !1;
            l.setDisposable(t), h === c ? (i = !0, s = !0) : h < c ? i = !0 : s = !0;
            var p = i ? h : c,
              d = p - f;
            f = p, i && (h += r), s && (c += r), t.setDisposable(n.scheduleFuture(null, d, function () {
              if (s) {
                var t = new Ts;
                a.push(t), e.onNext(nn(t, u))
              }
              i && a.shift().onCompleted(), o()
            }))
          }
          var s, u, c = r,
            h = t,
            a = [],
            l = new vn,
            f = 0;
          return s = new sn(l), u = new yn(s), a.push(new Ts), e.onNext(nn(a[0], u)), o(), s.add(i.subscribe(function (t) {
            for (var e = 0, n = a.length; e < n; e++) a[e].onNext(t)
          }, function (t) {
            for (var n = 0, r = a.length; n < r; n++) a[n].onError(t);
            e.onError(t)
          }, function () {
            for (var t = 0, n = a.length; t < n; t++) a[t].onCompleted();
            e.onCompleted()
          })), u
        }, i)
      }, zn.windowWithTimeOrCount = zn.windowTimeOrCount = function (t, e, n) {
        var r = this;
        return xn(n) || (n = Tn), new ks(function (i) {
          function o(e) {
            var r = new dn;
            s.setDisposable(r), r.setDisposable(n.scheduleFuture(null, t, function () {
              if (e === a) {
                h = 0;
                var t = ++a;
                l.onCompleted(), l = new Ts, i.onNext(nn(l, c)), o(t)
              }
            }))
          }
          var s = new vn,
            u = new sn(s),
            c = new yn(u),
            h = 0,
            a = 0,
            l = new Ts;
          return i.onNext(nn(l, c)), o(0), u.add(r.subscribe(function (t) {
            var n = 0,
              r = !1;
            l.onNext(t), ++h === e && (r = !0, h = 0, n = ++a, l.onCompleted(), l = new Ts, i.onNext(nn(l, c))), r && o(n)
          }, function (t) {
            l.onError(t), i.onError(t)
          }, function () {
            l.onCompleted(), i.onCompleted()
          })), c
        }, r)
      }, zn.bufferWithTime = zn.bufferTime = function (t, e, n) {
        return this.windowWithTime(t, e, n).flatMap(H)
      }, zn.bufferWithTimeOrCount = zn.bufferTimeOrCount = function (t, e, n) {
        return this.windowWithTimeOrCount(t, e, n).flatMap(H)
      };
      var Yo = function (t) {
          function e(e, n) {
            this.source = e, this._s = n, t.call(this)
          }
          return tn(e, t), e.prototype.subscribeCore = function (t) {
            return this.source.subscribe(new ts(t, this._s))
          }, e
        }(Xn),
        ts = function (t) {
          function e(e, n) {
            this._o = e, this._s = n, this._l = n.now(), t.call(this)
          }
          return tn(e, t), e.prototype.next = function (t) {
            var e = this._s.now(),
              n = e - this._l;
            this._l = e, this._o.onNext({
              value: t,
              interval: n
            })
          }, e.prototype.error = function (t) {
            this._o.onError(t)
          }, e.prototype.completed = function () {
            this._o.onCompleted()
          }, e
        }(Hn);
      zn.timeInterval = function (t) {
        return xn(t) || (t = Tn), new Yo(this, t)
      };
      var es = function (t) {
          function e(e, n) {
            this.source = e, this._s = n, t.call(this)
          }
          return tn(e, t), e.prototype.subscribeCore = function (t) {
            return this.source.subscribe(new ns(t, this._s))
          }, e
        }(Xn),
        ns = function (t) {
          function e(e, n) {
            this._o = e, this._s = n, t.call(this)
          }
          return tn(e, t), e.prototype.next = function (t) {
            this._o.onNext({
              value: t,
              timestamp: this._s.now()
            })
          }, e.prototype.error = function (t) {
            this._o.onError(t)
          }, e.prototype.completed = function () {
            this._o.onCompleted()
          }, e
        }(Hn);
      zn.timestamp = function (t) {
        return xn(t) || (t = Tn), new es(this, t)
      };
      var rs = function (t) {
          function e(e, n) {
            this.source = e, this._sampler = n, t.call(this)
          }
          return tn(e, t), e.prototype.subscribeCore = function (t) {
            var e = {
              o: t,
              atEnd: !1,
              value: null,
              hasValue: !1,
              sourceSubscription: new dn
            };
            return e.sourceSubscription.setDisposable(this.source.subscribe(new os(e))), new bn(e.sourceSubscription, this._sampler.subscribe(new is(e)))
          }, e
        }(Xn),
        is = function (t) {
          function e(e) {
            this._s = e, t.call(this)
          }
          return tn(e, t), e.prototype._handleMessage = function () {
            this._s.hasValue && (this._s.hasValue = !1, this._s.o.onNext(this._s.value)), this._s.atEnd && this._s.o.onCompleted()
          }, e.prototype.next = function () {
            this._handleMessage()
          }, e.prototype.error = function (t) {
            this._s.onError(t)
          }, e.prototype.completed = function () {
            this._handleMessage()
          }, e
        }(Hn),
        os = function (t) {
          function e(e) {
            this._s = e, t.call(this)
          }
          return tn(e, t), e.prototype.next = function (t) {
            this._s.hasValue = !0, this._s.value = t
          }, e.prototype.error = function (t) {
            this._s.o.onError(t)
          }, e.prototype.completed = function () {
            this._s.atEnd = !0, this._s.sourceSubscription.dispose()
          }, e
        }(Hn);
      zn.sample = function (t, e) {
        return xn(e) || (e = Tn), "number" == typeof t ? new rs(this, Qo(t, e)) : new rs(this, t)
      };
      var ss = Gt.TimeoutError = function (t) {
        this.message = t || "Timeout has occurred", this.name = "TimeoutError", Error.call(this)
      };
      ss.prototype = Object.create(Error.prototype), zn.timeout = function () {
        var t = arguments[0];
        if (t instanceof Date || "number" == typeof t) return Tt(this, t, arguments[1], arguments[2]);
        if (Zn.isObservable(t) || ne(t)) return Ft(this, t, arguments[1], arguments[2]);
        throw new Error("Invalid arguments")
      };
      var us = function (t) {
        function e(e, n, r, i, o, s) {
          this._state = e, this._cndFn = n, this._itrFn = r, this._resFn = i, this._timeFn = o, this._s = s, t.call(this)
        }

        function n(t, e) {
          if (t.hasResult && t.o.onNext(t.result), t.first) t.first = !1;
          else if (t.newState = ie(t.self._itrFn)(t.newState), t.newState === re) return t.o.onError(t.newState.e);
          if (t.hasResult = ie(t.self._cndFn)(t.newState), t.hasResult === re) return t.o.onError(t.hasResult.e);
          if (t.hasResult) {
            if (t.result = ie(t.self._resFn)(t.newState), t.result === re) return t.o.onError(t.result.e);
            var n = ie(t.self._timeFn)(t.newState);
            if (n === re) return t.o.onError(n.e);
            e(t, n)
          } else t.o.onCompleted()
        }
        return tn(e, t), e.prototype.subscribeCore = function (t) {
          var e = {
            o: t,
            self: this,
            newState: this._state,
            first: !0,
            hasResult: !1
          };
          return this._s.scheduleRecursiveFuture(e, new Date(this._s.now()), n)
        }, e
      }(Xn);
      Zn.generateWithAbsoluteTime = function (t, e, n, r, i, o) {
        return xn(o) || (o = Tn), new us(t, e, n, r, i, o)
      };
      var cs = function (t) {
        function e(e, n, r, i, o, s) {
          this._state = e, this._cndFn = n, this._itrFn = r, this._resFn = i, this._timeFn = o, this._s = s, t.call(this)
        }

        function n(t, e) {
          if (t.hasResult && t.o.onNext(t.result), t.first) t.first = !1;
          else if (t.newState = ie(t.self._itrFn)(t.newState), t.newState === re) return t.o.onError(t.newState.e);
          if (t.hasResult = ie(t.self._cndFn)(t.newState), t.hasResult === re) return t.o.onError(t.hasResult.e);
          if (t.hasResult) {
            if (t.result = ie(t.self._resFn)(t.newState), t.result === re) return t.o.onError(t.result.e);
            var n = ie(t.self._timeFn)(t.newState);
            if (n === re) return t.o.onError(n.e);
            e(t, n)
          } else t.o.onCompleted()
        }
        return tn(e, t), e.prototype.subscribeCore = function (t) {
          var e = {
            o: t,
            self: this,
            newState: this._state,
            first: !0,
            hasResult: !1
          };
          return this._s.scheduleRecursiveFuture(e, 0, n)
        }, e
      }(Xn);
      Zn.generateWithRelativeTime = function (t, e, n, r, i, o) {
        return xn(o) || (o = Tn), new cs(t, e, n, r, i, o)
      };
      var hs = function (t) {
        function e(e, n, r) {
          this.source = e, this._dt = n, this._s = r, t.call(this)
        }

        function n(t, e) {
          var n = e[0],
            r = e[1],
            i = e[2];
          i.setDisposable(n.subscribe(r))
        }
        return tn(e, t), e.prototype.subscribeCore = function (t) {
          var e = new vn;
          return e.setDisposable(this._s.scheduleFuture([this.source, t, e], this._dt, n)), e
        }, e
      }(Xn);
      zn.delaySubscription = function (t, e) {
        return xn(e) || (e = Tn), new hs(this, t, e)
      };
      var as = function (t) {
          function e(e, n, r) {
            this.source = e, this._d = n, this._s = r, t.call(this)
          }
          return tn(e, t), e.prototype.subscribeCore = function (t) {
            return this.source.subscribe(new ls(t, this))
          }, e
        }(Xn),
        ls = function (t) {
          function e(e, n) {
            this._o = e, this._s = n._s, this._d = n._d, this._q = [], t.call(this)
          }
          return tn(e, t), e.prototype.next = function (t) {
            var e = this._s.now();
            for (this._q.push({
                interval: e,
                value: t
              }); this._q.length > 0 && e - this._q[0].interval >= this._d;) this._o.onNext(this._q.shift().value)
          }, e.prototype.error = function (t) {
            this._o.onError(t)
          }, e.prototype.completed = function () {
            for (var t = this._s.now(); this._q.length > 0 && t - this._q[0].interval >= this._d;) this._o.onNext(this._q.shift().value);
            this._o.onCompleted()
          }, e
        }(Hn);
      zn.skipLastWithTime = function (t, e) {
        return xn(e) || (e = Tn), new as(this, t, e)
      };
      var fs = function (t) {
          function e(e, n, r) {
            this.source = e, this._d = n, this._s = r, t.call(this)
          }
          return tn(e, t), e.prototype.subscribeCore = function (t) {
            return this.source.subscribe(new ps(t, this._d, this._s))
          }, e
        }(Xn),
        ps = function (t) {
          function e(e, n, r) {
            this._o = e, this._d = n, this._s = r, this._q = [], t.call(this)
          }
          return tn(e, t), e.prototype.next = function (t) {
            var e = this._s.now();
            for (this._q.push({
                interval: e,
                value: t
              }); this._q.length > 0 && e - this._q[0].interval >= this._d;) this._q.shift()
          }, e.prototype.error = function (t) {
            this._o.onError(t)
          }, e.prototype.completed = function () {
            for (var t = this._s.now(); this._q.length > 0;) {
              var e = this._q.shift();
              t - e.interval <= this._d && this._o.onNext(e.value)
            }
            this._o.onCompleted()
          }, e
        }(Hn);
      zn.takeLastWithTime = function (t, e) {
        return xn(e) || (e = Tn), new fs(this, t, e)
      }, zn.takeLastBufferWithTime = function (t, e) {
        var n = this;
        return xn(e) || (e = Tn), new ks(function (r) {
          var i = [];
          return n.subscribe(function (n) {
            var r = e.now();
            for (i.push({
                interval: r,
                value: n
              }); i.length > 0 && r - i[0].interval >= t;) i.shift()
          }, function (t) {
            r.onError(t)
          }, function () {
            for (var n = e.now(), o = []; i.length > 0;) {
              var s = i.shift();
              n - s.interval <= t && o.push(s.value)
            }
            r.onNext(o), r.onCompleted()
          })
        }, n)
      };
      var ds = function (t) {
        function e(e, n, r) {
          this.source = e, this._d = n, this._s = r, t.call(this)
        }

        function n(t, e) {
          e.onCompleted()
        }
        return tn(e, t), e.prototype.subscribeCore = function (t) {
          return new bn(this._s.scheduleFuture(t, this._d, n), this.source.subscribe(t))
        }, e
      }(Xn);
      zn.takeWithTime = function (t, e) {
        return xn(e) || (e = Tn), new ds(this, t, e)
      };
      var vs = function (t) {
          function e(e, n, r) {
            this.source = e, this._d = n, this._s = r, this._open = !1, t.call(this)
          }

          function n(t, e) {
            e._open = !0
          }
          return tn(e, t), e.prototype.subscribeCore = function (t) {
            return new bn(this._s.scheduleFuture(this, this._d, n), this.source.subscribe(new bs(t, this)))
          }, e
        }(Xn),
        bs = function (t) {
          function e(e, n) {
            this._o = e, this._p = n, t.call(this)
          }
          return tn(e, t), e.prototype.next = function (t) {
            this._p._open && this._o.onNext(t)
          }, e.prototype.error = function (t) {
            this._o.onError(t)
          }, e.prototype.completed = function () {
            this._o.onCompleted()
          }, e
        }(Hn);
      zn.skipWithTime = function (t, e) {
        return xn(e) || (e = Tn), new vs(this, t, e)
      };
      var _s = function (t) {
          function e(e, n, r) {
            this.source = e, this._st = n, this._s = r, t.call(this)
          }

          function n(t, e) {
            e._open = !0
          }
          return tn(e, t), e.prototype.subscribeCore = function (t) {
            return this._open = !1, new bn(this._s.scheduleFuture(this, this._st, n), this.source.subscribe(new ys(t, this)))
          }, e
        }(Xn),
        ys = function (t) {
          function e(e, n) {
            this._o = e, this._p = n, t.call(this)
          }
          return tn(e, t), e.prototype.next = function (t) {
            this._p._open && this._o.onNext(t)
          }, e.prototype.error = function (t) {
            this._o.onError(t)
          }, e.prototype.completed = function () {
            this._o.onCompleted()
          }, e
        }(Hn);
      zn.skipUntilWithTime = function (t, e) {
        return xn(e) || (e = Tn), new _s(this, t, e)
      }, zn.takeUntilWithTime = function (t, e) {
        xn(e) || (e = Tn);
        var n = this;
        return new ks(function (r) {
          return new bn(e.scheduleFuture(r, t, function (t, e) {
            e.onCompleted()
          }), n.subscribe(r))
        }, n)
      }, zn.throttle = function (t, e) {
        xn(e) || (e = Tn);
        var n = +t || 0;
        if (n <= 0) throw new RangeError("windowDuration cannot be less or equal zero.");
        var r = this;
        return new ks(function (t) {
          var i = 0;
          return r.subscribe(function (r) {
            var o = e.now();
            (0 === i || o - i >= n) && (i = o, t.onNext(r))
          }, function (e) {
            t.onError(e)
          }, function () {
            t.onCompleted()
          })
        }, r)
      };
      var ms = function (t) {
        function e(e, n) {
          this._o = e, this._xform = n, t.call(this)
        }
        return tn(e, t), e.prototype.next = function (t) {
          var e = ie(this._xform["@@transducer/step"]).call(this._xform, this._o, t);
          e === re && this._o.onError(e.e)
        }, e.prototype.error = function (t) {
          this._o.onError(t)
        }, e.prototype.completed = function () {
          this._xform["@@transducer/result"](this._o)
        }, e
      }(Hn);
      zn.transduce = function (t) {
        var e = this;
        return new ks(function (n) {
          var r = t(Rt(n));
          return e.subscribe(new ms(n, r))
        }, e)
      };
      var ws = function (t) {
          function e(e) {
            this.source = e, t.call(this)
          }
          return tn(e, t), e.prototype.subscribeCore = function (t) {
            var e = new dn,
              n = new sn,
              r = {
                hasCurrent: !1,
                isStopped: !1,
                o: t,
                g: n
              };
            return n.add(e), e.setDisposable(this.source.subscribe(new gs(r))), n
          }, e
        }(Xn),
        gs = function (t) {
          function e(e) {
            this._s = e, t.call(this)
          }

          function n(e, n) {
            this._s = e, this._i = n, t.call(this)
          }
          return tn(e, t), e.prototype.next = function (t) {
            if (!this._s.hasCurrent) {
              this._s.hasCurrent = !0, ee(t) && (t = ar(t));
              var e = new dn;
              this._s.g.add(e), e.setDisposable(t.subscribe(new n(this._s, e)))
            }
          }, e.prototype.error = function (t) {
            this._s.o.onError(t)
          }, e.prototype.completed = function () {
            this._s.isStopped = !0, !this._s.hasCurrent && 1 === this._s.g.length && this._s.o.onCompleted()
          }, tn(n, t), n.prototype.next = function (t) {
            this._s.o.onNext(t)
          }, n.prototype.error = function (t) {
            this._s.o.onError(t)
          }, n.prototype.completed = function () {
            this._s.g.remove(this._i), this._s.hasCurrent = !1, this._s.isStopped && 1 === this._s.g.length && this._s.o.onCompleted()
          }, e
        }(Hn);
      zn.switchFirst = function () {
        return new ws(this)
      }, zn.flatMapFirst = zn.exhaustMap = function (t, e, n) {
        return new Yn(this, t, e, n).switchFirst()
      }, zn.flatMapWithMaxConcurrent = zn.flatMapMaxConcurrent = function (t, e, n, r) {
        return new Yn(this, e, n, r).merge(t)
      };
      var xs = Gt.VirtualTimeScheduler = function (t) {
        function e(e, n) {
          this.clock = e, this.comparer = n, this.isEnabled = !1, this.queue = new rn(1024), t.call(this)
        }
        tn(e, t);
        var n = e.prototype;
        return n.now = function () {
          return this.toAbsoluteTime(this.clock)
        }, n.schedule = function (t, e) {
          return this.scheduleAbsolute(t, this.clock, e)
        }, n.scheduleFuture = function (t, e, n) {
          var r = e instanceof Date ? this.toRelativeTime(e - this.now()) : this.toRelativeTime(e);
          return this.scheduleRelative(t, r, n)
        }, n.add = ve, n.toAbsoluteTime = ve, n.toRelativeTime = ve, n.schedulePeriodic = function (t, e, n) {
          var r = new Nn(this, t, e, n);
          return r.start()
        }, n.scheduleRelative = function (t, e, n) {
          var r = this.add(this.clock, e);
          return this.scheduleAbsolute(t, r, n)
        }, n.start = function () {
          if (!this.isEnabled) {
            this.isEnabled = !0;
            do {
              var t = this.getNext();
              null !== t ? (this.comparer(t.dueTime, this.clock) > 0 && (this.clock = t.dueTime), t.invoke()) : this.isEnabled = !1
            } while (this.isEnabled)
          }
        }, n.stop = function () {
          this.isEnabled = !1
        }, n.advanceTo = function (t) {
          var e = this.comparer(this.clock, t);
          if (this.comparer(this.clock, t) > 0) throw new fe;
          if (0 !== e && !this.isEnabled) {
            this.isEnabled = !0;
            do {
              var n = this.getNext();
              null !== n && this.comparer(n.dueTime, t) <= 0 ? (this.comparer(n.dueTime, this.clock) > 0 && (this.clock = n.dueTime), n.invoke()) : this.isEnabled = !1
            } while (this.isEnabled);
            this.clock = t
          }
        }, n.advanceBy = function (t) {
          var e = this.add(this.clock, t),
            n = this.comparer(this.clock, e);
          if (n > 0) throw new fe;
          0 !== n && this.advanceTo(e)
        }, n.sleep = function (t) {
          var e = this.add(this.clock, t);
          if (this.comparer(this.clock, e) >= 0) throw new fe;
          this.clock = e
        }, n.getNext = function () {
          for (; this.queue.length > 0;) {
            var t = this.queue.peek();
            if (!t.isCancelled()) return t;
            this.queue.dequeue()
          }
          return null
        }, n.scheduleAbsolute = function (t, e, n) {
          function r(t, e) {
            return i.queue.remove(o), n(t, e)
          }
          var i = this,
            o = new mn(this, t, r, e, this.comparer);
          return this.queue.enqueue(o), o.disposable
        }, e
      }(wn);
      Gt.HistoricalScheduler = function (t) {
        function e(e, n) {
          var r = null == e ? 0 : e,
            i = n || Yt;
          t.call(this, r, i)
        }
        tn(e, t);
        var n = e.prototype;
        return n.add = function (t, e) {
          return t + e
        }, n.toAbsoluteTime = function (t) {
          return new Date(t).getTime()
        }, n.toRelativeTime = function (t) {
          return t
        }, e
      }(Gt.VirtualTimeScheduler), Mt.prototype.equals = function (t) {
        return t === this || null != t && ("N" === t.kind && this.predicate(t.value))
      }, It.prototype.equals = function (t) {
        return t === this || null != t && ("E" === t.kind && this.predicate(t.error))
      };
      var Cs = Gt.ReactiveTest = {
          created: 100,
          subscribed: 200,
          disposed: 1e3,
          onNext: function (t, e) {
            return "function" == typeof e ? new Es(t, new Mt(e)) : new Es(t, Mn.createOnNext(e))
          },
          onError: function (t, e) {
            return "function" == typeof e ? new Es(t, new It(e)) : new Es(t, Mn.createOnError(e))
          },
          onCompleted: function (t) {
            return new Es(t, Mn.createOnCompleted())
          },
          subscribe: function (t, e) {
            return new Ns(t, e)
          }
        },
        Es = Gt.Recorded = function (t, e, n) {
          this.time = t, this.value = e, this.comparer = n || Xt
        };
      Es.prototype.equals = function (t) {
        return this.time === t.time && this.comparer(this.value, t.value)
      }, Es.prototype.toString = function () {
        return this.value.toString() + "@" + this.time
      };
      var Ns = Gt.Subscription = function (t, e) {
        this.subscribe = t, this.unsubscribe = e || Number.MAX_VALUE
      };
      Ns.prototype.equals = function (t) {
        return this.subscribe === t.subscribe && this.unsubscribe === t.unsubscribe
      }, Ns.prototype.toString = function () {
        return "(" + this.subscribe + ", " + (this.unsubscribe === Number.MAX_VALUE ? "Infinite" : this.unsubscribe) + ")"
      };
      var Ds = Gt.MockDisposable = function (t) {
        this.scheduler = t, this.disposes = [], this.disposes.push(this.scheduler.clock)
      };
      Ds.prototype.dispose = function () {
        this.disposes.push(this.scheduler.clock)
      };
      var As = function (t) {
        function e(e) {
          t.call(this), this.scheduler = e, this.messages = []
        }
        tn(e, t);
        var n = e.prototype;
        return n.onNext = function (t) {
          this.messages.push(new Es(this.scheduler.clock, Mn.createOnNext(t)))
        }, n.onError = function (t) {
          this.messages.push(new Es(this.scheduler.clock, Mn.createOnError(t)))
        }, n.onCompleted = function () {
          this.messages.push(new Es(this.scheduler.clock, Mn.createOnCompleted()))
        }, e
      }(Kn);
      $t.prototype.then = function (t, e) {
        var n = this;
        this.subscriptions.push(new Ns(this.scheduler.clock));
        var r, i = this.subscriptions.length - 1,
          o = Gt.Observer.create(function (e) {
            var u = t(e);
            if (u && "function" == typeof u.then) r = u;
            else {
              var c = n.scheduler.clock;
              r = new $t(n.scheduler, [Gt.ReactiveTest.onNext(c, s), Gt.ReactiveTest.onCompleted(c)])
            }
            var h = n.observers.indexOf(o);
            n.observers.splice(h, 1), n.subscriptions[i] = new Ns(n.subscriptions[i].subscribe, n.scheduler.clock)
          }, function (t) {
            e(t);
            var r = n.observers.indexOf(o);
            n.observers.splice(r, 1), n.subscriptions[i] = new Ns(n.subscriptions[i].subscribe, n.scheduler.clock)
          });
        return this.observers.push(o), r || new $t(this.scheduler, this.messages)
      };
      var Ss = function (t) {
          function e(e, n) {
            t.call(this);
            var r, i, o = this;
            this.scheduler = e, this.messages = n, this.subscriptions = [], this.observers = [];
            for (var s = 0, u = this.messages.length; s < u; s++) r = this.messages[s], i = r.value,
              function (t) {
                e.scheduleAbsolute(null, r.time, function () {
                  for (var e = o.observers.slice(0), n = 0, r = e.length; n < r; n++) t.accept(e[n]);
                  return an
                })
              }(i)
          }
          return tn(e, t), e.prototype._subscribe = function (t) {
            var e = this;
            this.observers.push(t), this.subscriptions.push(new Ns(this.scheduler.clock));
            var n = this.subscriptions.length - 1;
            return hn(function () {
              var r = e.observers.indexOf(t);
              e.observers.splice(r, 1), e.subscriptions[n] = new Ns(e.subscriptions[n].subscribe, e.scheduler.clock)
            })
          }, e
        }(Zn),
        Os = function (t) {
          function e(e, n) {
            t.call(this), this.scheduler = e, this.messages = n, this.subscriptions = []
          }
          return tn(e, t), e.prototype._subscribe = function (t) {
            var e, n, r = this;
            this.subscriptions.push(new Ns(this.scheduler.clock));
            for (var i = this.subscriptions.length - 1, o = new sn, s = 0, u = this.messages.length; s < u; s++) e = this.messages[s], n = e.value,
              function (n) {
                o.add(r.scheduler.scheduleRelative(null, e.time, function () {
                  return n.accept(t), an
                }))
              }(n);
            return hn(function () {
              r.subscriptions[i] = new Ns(r.subscriptions[i].subscribe, r.scheduler.clock), o.dispose()
            })
          }, e
        }(Zn);
      Gt.TestScheduler = function (t) {
        function e(t, e) {
          return t > e ? 1 : t < e ? -1 : 0
        }

        function n() {
          t.call(this, 0, e)
        }
        return tn(n, t), n.prototype.scheduleAbsolute = function (e, n, r) {
          return n <= this.clock && (n = this.clock + 1), t.prototype.scheduleAbsolute.call(this, e, n, r)
        }, n.prototype.add = function (t, e) {
          return t + e
        }, n.prototype.toAbsoluteTime = function (t) {
          return new Date(t).getTime()
        }, n.prototype.toRelativeTime = function (t) {
          return t
        }, n.prototype.startScheduler = function (t, e) {
          e || (e = {}), null == e.created && (e.created = Cs.created), null == e.subscribed && (e.subscribed = Cs.subscribed), null == e.disposed && (e.disposed = Cs.disposed);
          var n, r, i = this.createObserver();
          return this.scheduleAbsolute(null, e.created, function () {
            return n = t(), an
          }), this.scheduleAbsolute(null, e.subscribed, function () {
            return r = n.subscribe(i), an
          }), this.scheduleAbsolute(null, e.disposed, function () {
            return r.dispose(), an
          }), this.start(), i
        }, n.prototype.createHotObservable = function () {
          var t, e = arguments.length;
          if (Array.isArray(arguments[0])) t = arguments[0];
          else {
            t = new Array(e);
            for (var n = 0; n < e; n++) t[n] = arguments[n]
          }
          return new Ss(this, t)
        }, n.prototype.createColdObservable = function () {
          var t, e = arguments.length;
          if (Array.isArray(arguments[0])) t = arguments[0];
          else {
            t = new Array(e);
            for (var n = 0; n < e; n++) t[n] = arguments[n]
          }
          return new Os(this, t)
        }, n.prototype.createResolvedPromise = function (t, e) {
          return new $t(this, [Gt.ReactiveTest.onNext(t, e), Gt.ReactiveTest.onCompleted(t)])
        }, n.prototype.createRejectedPromise = function (t, e) {
          return new $t(this, [Gt.ReactiveTest.onError(t, e)])
        }, n.prototype.createObserver = function () {
          return new As(this)
        }, n
      }(xs);
      var ks = Gt.AnonymousObservable = function (t) {
          function e(t) {
            return t && ne(t.dispose) ? t : ne(t) ? hn(t) : an
          }

          function n(t, n) {
            var r = n[0],
              i = n[1],
              o = ie(i.__subscribe).call(i, r);
            o !== re || r.fail(re.e) || a(re.e), r.setDisposable(e(o))
          }

          function r(e, n) {
            this.source = n, this.__subscribe = e, t.call(this)
          }
          return tn(r, t), r.prototype._subscribe = function (t) {
            var e = new js(t),
              r = [e, this];
            return On.scheduleRequired() ? On.schedule(r, n) : n(null, r), e
          }, r
        }(Zn),
        js = function (t) {
          function e(e) {
            t.call(this), this.observer = e, this.m = new dn
          }
          tn(e, t);
          var n = e.prototype;
          return n.next = function (t) {
            var e = ie(this.observer.onNext).call(this.observer, t);
            e === re && (this.dispose(), a(e.e))
          }, n.error = function (t) {
            var e = ie(this.observer.onError).call(this.observer, t);
            this.dispose(), e === re && a(e.e)
          }, n.completed = function () {
            var t = ie(this.observer.onCompleted).call(this.observer);
            this.dispose(), t === re && a(t.e)
          }, n.setDisposable = function (t) {
            this.m.setDisposable(t)
          }, n.getDisposable = function () {
            return this.m.getDisposable()
          }, n.dispose = function () {
            t.prototype.dispose.call(this), this.m.dispose()
          }, e
        }(Hn),
        qs = function (t) {
          function e(e, n) {
            this._m = e, this._u = n, t.call(this)
          }
          return tn(e, t), e.prototype.subscribeCore = function (t) {
            return new bn(this._m.getDisposable(), this._u.subscribe(t))
          }, e
        }(Xn),
        Fs = function (t) {
          function e(e, n, r) {
            t.call(this), this.key = e, this.underlyingObservable = r ? new qs(r, n) : n
          }
          return tn(e, t), e.prototype._subscribe = function (t) {
            return this.underlyingObservable.subscribe(t)
          }, e
        }(Zn),
        Ts = Gt.Subject = function (t) {
          function e() {
            t.call(this), this.isDisposed = !1, this.isStopped = !1, this.observers = [], this.hasError = !1
          }
          return tn(e, t), en(e.prototype, Kn.prototype, {
            _subscribe: function (t) {
              return fn(this), this.isStopped ? this.hasError ? (t.onError(this.error), an) : (t.onCompleted(), an) : (this.observers.push(t), new Ro(this, t))
            },
            hasObservers: function () {
              return fn(this), this.observers.length > 0
            },
            onCompleted: function () {
              if (fn(this), !this.isStopped) {
                this.isStopped = !0;
                for (var t = 0, e = c(this.observers), n = e.length; t < n; t++) e[t].onCompleted();
                this.observers.length = 0
              }
            },
            onError: function (t) {
              if (fn(this), !this.isStopped) {
                this.isStopped = !0, this.error = t, this.hasError = !0;
                for (var e = 0, n = c(this.observers), r = n.length; e < r; e++) n[e].onError(t);
                this.observers.length = 0
              }
            },
            onNext: function (t) {
              if (fn(this), !this.isStopped)
                for (var e = 0, n = c(this.observers), r = n.length; e < r; e++) n[e].onNext(t)
            },
            dispose: function () {
              this.isDisposed = !0, this.observers = null
            }
          }), e.create = function (t, e) {
            return new $s(t, e)
          }, e
        }(Zn),
        Rs = Gt.AsyncSubject = function (t) {
          function e() {
            t.call(this), this.isDisposed = !1, this.isStopped = !1, this.hasValue = !1, this.observers = [], this.hasError = !1
          }
          return tn(e, t), en(e.prototype, Kn.prototype, {
            _subscribe: function (t) {
              return fn(this), this.isStopped ? (this.hasError ? t.onError(this.error) : this.hasValue ? (t.onNext(this.value), t.onCompleted()) : t.onCompleted(), an) : (this.observers.push(t), new Ro(this, t))
            },
            hasObservers: function () {
              return fn(this), this.observers.length > 0
            },
            onCompleted: function () {
              var t, e;
              if (fn(this), !this.isStopped) {
                this.isStopped = !0;
                var n = c(this.observers),
                  e = n.length;
                if (this.hasValue)
                  for (t = 0; t < e; t++) {
                    var r = n[t];
                    r.onNext(this.value), r.onCompleted()
                  } else
                    for (t = 0; t < e; t++) n[t].onCompleted();
                this.observers.length = 0
              }
            },
            onError: function (t) {
              if (fn(this), !this.isStopped) {
                this.isStopped = !0, this.hasError = !0, this.error = t;
                for (var e = 0, n = c(this.observers), r = n.length; e < r; e++) n[e].onError(t);
                this.observers.length = 0
              }
            },
            onNext: function (t) {
              fn(this), this.isStopped || (this.value = t, this.hasValue = !0)
            },
            dispose: function () {
              this.isDisposed = !0, this.observers = null, this.error = null, this.value = null
            }
          }), e
        }(Zn),
        Ms = Gt.BehaviorSubject = function (t) {
          function e(e) {
            t.call(this), this.value = e, this.observers = [], this.isDisposed = !1, this.isStopped = !1, this.hasError = !1
          }
          return tn(e, t), en(e.prototype, Kn.prototype, {
            _subscribe: function (t) {
              return fn(this), this.isStopped ? (this.hasError ? t.onError(this.error) : t.onCompleted(), an) : (this.observers.push(t), t.onNext(this.value), new Ro(this, t))
            },
            getValue: function () {
              return fn(this), this.hasError && a(this.error), this.value
            },
            hasObservers: function () {
              return fn(this), this.observers.length > 0
            },
            onCompleted: function () {
              if (fn(this), !this.isStopped) {
                this.isStopped = !0;
                for (var t = 0, e = c(this.observers), n = e.length; t < n; t++) e[t].onCompleted();
                this.observers.length = 0
              }
            },
            onError: function (t) {
              if (fn(this), !this.isStopped) {
                this.isStopped = !0, this.hasError = !0, this.error = t;
                for (var e = 0, n = c(this.observers), r = n.length; e < r; e++) n[e].onError(t);
                this.observers.length = 0
              }
            },
            onNext: function (t) {
              if (fn(this), !this.isStopped) {
                this.value = t;
                for (var e = 0, n = c(this.observers), r = n.length; e < r; e++) n[e].onNext(t)
              }
            },
            dispose: function () {
              this.isDisposed = !0, this.observers = null, this.value = null, this.error = null
            }
          }), e
        }(Zn),
        Is = Gt.ReplaySubject = function (t) {
          function e(t, e) {
            return hn(function () {
              e.dispose(), !t.isDisposed && t.observers.splice(t.observers.indexOf(e), 1)
            })
          }

          function n(e, n, i) {
            this.bufferSize = null == e ? r : e, this.windowSize = null == n ? r : n, this.scheduler = i || On, this.q = [], this.observers = [], this.isStopped = !1, this.isDisposed = !1, this.hasError = !1, this.error = null, t.call(this)
          }
          var r = Math.pow(2, 53) - 1;
          return tn(n, t), en(n.prototype, Kn.prototype, {
            _subscribe: function (t) {
              fn(this);
              var n = new Jn(this.scheduler, t),
                r = e(this, n);
              this._trim(this.scheduler.now()), this.observers.push(n);
              for (var i = 0, o = this.q.length; i < o; i++) n.onNext(this.q[i].value);
              return this.hasError ? n.onError(this.error) : this.isStopped && n.onCompleted(), n.ensureActive(), r
            },
            hasObservers: function () {
              return fn(this), this.observers.length > 0
            },
            _trim: function (t) {
              for (; this.q.length > this.bufferSize;) this.q.shift();
              for (; this.q.length > 0 && t - this.q[0].interval > this.windowSize;) this.q.shift()
            },
            onNext: function (t) {
              if (fn(this), !this.isStopped) {
                var e = this.scheduler.now();
                this.q.push({
                  interval: e,
                  value: t
                }), this._trim(e);
                for (var n = 0, r = c(this.observers), i = r.length; n < i; n++) {
                  var o = r[n];
                  o.onNext(t), o.ensureActive()
                }
              }
            },
            onError: function (t) {
              if (fn(this), !this.isStopped) {
                this.isStopped = !0, this.error = t, this.hasError = !0;
                var e = this.scheduler.now();
                this._trim(e);
                for (var n = 0, r = c(this.observers), i = r.length; n < i; n++) {
                  var o = r[n];
                  o.onError(t), o.ensureActive()
                }
                this.observers.length = 0
              }
            },
            onCompleted: function () {
              if (fn(this), !this.isStopped) {
                this.isStopped = !0;
                var t = this.scheduler.now();
                this._trim(t);
                for (var e = 0, n = c(this.observers), r = n.length; e < r; e++) {
                  var i = n[e];
                  i.onCompleted(), i.ensureActive()
                }
                this.observers.length = 0
              }
            },
            dispose: function () {
              this.isDisposed = !0, this.observers = null
            }
          }), n
        }(Zn),
        $s = Gt.AnonymousSubject = function (t) {
          function e(e, n) {
            this.observer = e, this.observable = n, t.call(this)
          }
          return tn(e, t), en(e.prototype, Kn.prototype, {
            _subscribe: function (t) {
              return this.observable.subscribe(t)
            },
            onCompleted: function () {
              this.observer.onCompleted()
            },
            onError: function (t) {
              this.observer.onError(t)
            },
            onNext: function (t) {
              this.observer.onNext(t)
            }
          }), e
        }(Zn);
      Gt.Pauser = function (t) {
        function e() {
          t.call(this)
        }
        return tn(e, t), e.prototype.pause = function () {
          this.onNext(!1)
        }, e.prototype.resume = function () {
          this.onNext(!0)
        }, e
      }(Ts), Ut.Rx = Gt, o = function () {
        return Gt
      }.call(e, n, e, t), !(o !== s && (t.exports = o));
      var Ps = v()
    }).call(this)
  }).call(e, n(22)(t), n(21), n(18))
}, function (t, e, n) {
  var r, i;
  (function () {
    function n(t) {
      function e(e, n, r, i, o, s) {
        for (; o >= 0 && o < s; o += t) {
          var u = i ? i[o] : o;
          r = n(r, e[u], u, e)
        }
        return r
      }
      return function (n, r, i, o) {
        r = C(r, o, 4);
        var s = !k(n) && x.keys(n),
          u = (s || n).length,
          c = t > 0 ? 0 : u - 1;
        return arguments.length < 3 && (i = n[s ? s[c] : c], c += t), e(n, r, i, s, c, u)
      }
    }

    function o(t) {
      return function (e, n, r) {
        n = E(n, r);
        for (var i = O(e), o = t > 0 ? 0 : i - 1; o >= 0 && o < i; o += t)
          if (n(e[o], o, e)) return o;
        return -1
      }
    }

    function s(t, e, n) {
      return function (r, i, o) {
        var s = 0,
          u = O(r);
        if ("number" == typeof o) t > 0 ? s = o >= 0 ? o : Math.max(o + u, s) : u = o >= 0 ? Math.min(o + 1, u) : o + u + 1;
        else if (n && o && u) return o = n(r, i), r[o] === i ? o : -1;
        if (i !== i) return o = e(d.call(r, s, u), x.isNaN), o >= 0 ? o + s : -1;
        for (o = t > 0 ? s : u - 1; o >= 0 && o < u; o += t)
          if (r[o] === i) return o;
        return -1
      }
    }

    function u(t, e) {
      var n = R.length,
        r = t.constructor,
        i = x.isFunction(r) && r.prototype || l,
        o = "constructor";
      for (x.has(t, o) && !x.contains(e, o) && e.push(o); n--;) o = R[n], o in t && t[o] !== i[o] && !x.contains(e, o) && e.push(o)
    }
    var c = this,
      h = c._,
      a = Array.prototype,
      l = Object.prototype,
      f = Function.prototype,
      p = a.push,
      d = a.slice,
      v = l.toString,
      b = l.hasOwnProperty,
      _ = Array.isArray,
      y = Object.keys,
      m = f.bind,
      w = Object.create,
      g = function () {},
      x = function (t) {
        return t instanceof x ? t : this instanceof x ? void(this._wrapped = t) : new x(t)
      };
    "undefined" != typeof t && t.exports && (e = t.exports = x), e._ = x, x.VERSION = "1.8.3";
    var C = function (t, e, n) {
        if (void 0 === e) return t;
        switch (null == n ? 3 : n) {
          case 1:
            return function (n) {
              return t.call(e, n)
            };
          case 2:
            return function (n, r) {
              return t.call(e, n, r)
            };
          case 3:
            return function (n, r, i) {
              return t.call(e, n, r, i)
            };
          case 4:
            return function (n, r, i, o) {
              return t.call(e, n, r, i, o)
            }
        }
        return function () {
          return t.apply(e, arguments)
        }
      },
      E = function (t, e, n) {
        return null == t ? x.identity : x.isFunction(t) ? C(t, e, n) : x.isObject(t) ? x.matcher(t) : x.property(t)
      };
    x.iteratee = function (t, e) {
      return E(t, e, 1 / 0)
    };
    var N = function (t, e) {
        return function (n) {
          var r = arguments.length;
          if (r < 2 || null == n) return n;
          for (var i = 1; i < r; i++)
            for (var o = arguments[i], s = t(o), u = s.length, c = 0; c < u; c++) {
              var h = s[c];
              e && void 0 !== n[h] || (n[h] = o[h])
            }
          return n
        }
      },
      D = function (t) {
        if (!x.isObject(t)) return {};
        if (w) return w(t);
        g.prototype = t;
        var e = new g;
        return g.prototype = null, e
      },
      A = function (t) {
        return function (e) {
          return null == e ? void 0 : e[t]
        }
      },
      S = Math.pow(2, 53) - 1,
      O = A("length"),
      k = function (t) {
        var e = O(t);
        return "number" == typeof e && e >= 0 && e <= S
      };
    x.each = x.forEach = function (t, e, n) {
      e = C(e, n);
      var r, i;
      if (k(t))
        for (r = 0, i = t.length; r < i; r++) e(t[r], r, t);
      else {
        var o = x.keys(t);
        for (r = 0, i = o.length; r < i; r++) e(t[o[r]], o[r], t)
      }
      return t
    }, x.map = x.collect = function (t, e, n) {
      e = E(e, n);
      for (var r = !k(t) && x.keys(t), i = (r || t).length, o = Array(i), s = 0; s < i; s++) {
        var u = r ? r[s] : s;
        o[s] = e(t[u], u, t)
      }
      return o
    }, x.reduce = x.foldl = x.inject = n(1), x.reduceRight = x.foldr = n(-1), x.find = x.detect = function (t, e, n) {
      var r;
      if (r = k(t) ? x.findIndex(t, e, n) : x.findKey(t, e, n), void 0 !== r && r !== -1) return t[r]
    }, x.filter = x.select = function (t, e, n) {
      var r = [];
      return e = E(e, n), x.each(t, function (t, n, i) {
        e(t, n, i) && r.push(t)
      }), r
    }, x.reject = function (t, e, n) {
      return x.filter(t, x.negate(E(e)), n)
    }, x.every = x.all = function (t, e, n) {
      e = E(e, n);
      for (var r = !k(t) && x.keys(t), i = (r || t).length, o = 0; o < i; o++) {
        var s = r ? r[o] : o;
        if (!e(t[s], s, t)) return !1
      }
      return !0
    }, x.some = x.any = function (t, e, n) {
      e = E(e, n);
      for (var r = !k(t) && x.keys(t), i = (r || t).length, o = 0; o < i; o++) {
        var s = r ? r[o] : o;
        if (e(t[s], s, t)) return !0
      }
      return !1
    }, x.contains = x.includes = x.include = function (t, e, n, r) {
      return k(t) || (t = x.values(t)), ("number" != typeof n || r) && (n = 0), x.indexOf(t, e, n) >= 0
    }, x.invoke = function (t, e) {
      var n = d.call(arguments, 2),
        r = x.isFunction(e);
      return x.map(t, function (t) {
        var i = r ? e : t[e];
        return null == i ? i : i.apply(t, n)
      })
    }, x.pluck = function (t, e) {
      return x.map(t, x.property(e))
    }, x.where = function (t, e) {
      return x.filter(t, x.matcher(e))
    }, x.findWhere = function (t, e) {
      return x.find(t, x.matcher(e))
    }, x.max = function (t, e, n) {
      var r, i, o = -(1 / 0),
        s = -(1 / 0);
      if (null == e && null != t) {
        t = k(t) ? t : x.values(t);
        for (var u = 0, c = t.length; u < c; u++) r = t[u], r > o && (o = r)
      } else e = E(e, n), x.each(t, function (t, n, r) {
        i = e(t, n, r), (i > s || i === -(1 / 0) && o === -(1 / 0)) && (o = t, s = i)
      });
      return o
    }, x.min = function (t, e, n) {
      var r, i, o = 1 / 0,
        s = 1 / 0;
      if (null == e && null != t) {
        t = k(t) ? t : x.values(t);
        for (var u = 0, c = t.length; u < c; u++) r = t[u], r < o && (o = r)
      } else e = E(e, n), x.each(t, function (t, n, r) {
        i = e(t, n, r), (i < s || i === 1 / 0 && o === 1 / 0) && (o = t, s = i)
      });
      return o
    }, x.shuffle = function (t) {
      for (var e, n = k(t) ? t : x.values(t), r = n.length, i = Array(r), o = 0; o < r; o++) e = x.random(0, o), e !== o && (i[o] = i[e]), i[e] = n[o];
      return i
    }, x.sample = function (t, e, n) {
      return null == e || n ? (k(t) || (t = x.values(t)), t[x.random(t.length - 1)]) : x.shuffle(t).slice(0, Math.max(0, e))
    }, x.sortBy = function (t, e, n) {
      return e = E(e, n), x.pluck(x.map(t, function (t, n, r) {
        return {
          value: t,
          index: n,
          criteria: e(t, n, r)
        }
      }).sort(function (t, e) {
        var n = t.criteria,
          r = e.criteria;
        if (n !== r) {
          if (n > r || void 0 === n) return 1;
          if (n < r || void 0 === r) return -1
        }
        return t.index - e.index
      }), "value")
    };
    var j = function (t) {
      return function (e, n, r) {
        var i = {};
        return n = E(n, r), x.each(e, function (r, o) {
          var s = n(r, o, e);
          t(i, r, s)
        }), i
      }
    };
    x.groupBy = j(function (t, e, n) {
      x.has(t, n) ? t[n].push(e) : t[n] = [e]
    }), x.indexBy = j(function (t, e, n) {
      t[n] = e
    }), x.countBy = j(function (t, e, n) {
      x.has(t, n) ? t[n]++ : t[n] = 1
    }), x.toArray = function (t) {
      return t ? x.isArray(t) ? d.call(t) : k(t) ? x.map(t, x.identity) : x.values(t) : []
    }, x.size = function (t) {
      return null == t ? 0 : k(t) ? t.length : x.keys(t).length
    }, x.partition = function (t, e, n) {
      e = E(e, n);
      var r = [],
        i = [];
      return x.each(t, function (t, n, o) {
        (e(t, n, o) ? r : i).push(t)
      }), [r, i]
    }, x.first = x.head = x.take = function (t, e, n) {
      if (null != t) return null == e || n ? t[0] : x.initial(t, t.length - e)
    }, x.initial = function (t, e, n) {
      return d.call(t, 0, Math.max(0, t.length - (null == e || n ? 1 : e)))
    }, x.last = function (t, e, n) {
      if (null != t) return null == e || n ? t[t.length - 1] : x.rest(t, Math.max(0, t.length - e))
    }, x.rest = x.tail = x.drop = function (t, e, n) {
      return d.call(t, null == e || n ? 1 : e)
    }, x.compact = function (t) {
      return x.filter(t, x.identity)
    };
    var q = function (t, e, n, r) {
      for (var i = [], o = 0, s = r || 0, u = O(t); s < u; s++) {
        var c = t[s];
        if (k(c) && (x.isArray(c) || x.isArguments(c))) {
          e || (c = q(c, e, n));
          var h = 0,
            a = c.length;
          for (i.length += a; h < a;) i[o++] = c[h++]
        } else n || (i[o++] = c)
      }
      return i
    };
    x.flatten = function (t, e) {
      return q(t, e, !1)
    }, x.without = function (t) {
      return x.difference(t, d.call(arguments, 1))
    }, x.uniq = x.unique = function (t, e, n, r) {
      x.isBoolean(e) || (r = n, n = e, e = !1), null != n && (n = E(n, r));
      for (var i = [], o = [], s = 0, u = O(t); s < u; s++) {
        var c = t[s],
          h = n ? n(c, s, t) : c;
        e ? (s && o === h || i.push(c), o = h) : n ? x.contains(o, h) || (o.push(h), i.push(c)) : x.contains(i, c) || i.push(c)
      }
      return i
    }, x.union = function () {
      return x.uniq(q(arguments, !0, !0))
    }, x.intersection = function (t) {
      for (var e = [], n = arguments.length, r = 0, i = O(t); r < i; r++) {
        var o = t[r];
        if (!x.contains(e, o)) {
          for (var s = 1; s < n && x.contains(arguments[s], o); s++);
          s === n && e.push(o)
        }
      }
      return e
    }, x.difference = function (t) {
      var e = q(arguments, !0, !0, 1);
      return x.filter(t, function (t) {
        return !x.contains(e, t)
      })
    }, x.zip = function () {
      return x.unzip(arguments)
    }, x.unzip = function (t) {
      for (var e = t && x.max(t, O).length || 0, n = Array(e), r = 0; r < e; r++) n[r] = x.pluck(t, r);
      return n
    }, x.object = function (t, e) {
      for (var n = {}, r = 0, i = O(t); r < i; r++) e ? n[t[r]] = e[r] : n[t[r][0]] = t[r][1];
      return n
    }, x.findIndex = o(1), x.findLastIndex = o(-1), x.sortedIndex = function (t, e, n, r) {
      n = E(n, r, 1);
      for (var i = n(e), o = 0, s = O(t); o < s;) {
        var u = Math.floor((o + s) / 2);
        n(t[u]) < i ? o = u + 1 : s = u
      }
      return o
    }, x.indexOf = s(1, x.findIndex, x.sortedIndex), x.lastIndexOf = s(-1, x.findLastIndex), x.range = function (t, e, n) {
      null == e && (e = t || 0, t = 0), n = n || 1;
      for (var r = Math.max(Math.ceil((e - t) / n), 0), i = Array(r), o = 0; o < r; o++, t += n) i[o] = t;
      return i
    };
    var F = function (t, e, n, r, i) {
      if (!(r instanceof e)) return t.apply(n, i);
      var o = D(t.prototype),
        s = t.apply(o, i);
      return x.isObject(s) ? s : o
    };
    x.bind = function (t, e) {
      if (m && t.bind === m) return m.apply(t, d.call(arguments, 1));
      if (!x.isFunction(t)) throw new TypeError("Bind must be called on a function");
      var n = d.call(arguments, 2),
        r = function () {
          return F(t, r, e, this, n.concat(d.call(arguments)))
        };
      return r
    }, x.partial = function (t) {
      var e = d.call(arguments, 1),
        n = function () {
          for (var r = 0, i = e.length, o = Array(i), s = 0; s < i; s++) o[s] = e[s] === x ? arguments[r++] : e[s];
          for (; r < arguments.length;) o.push(arguments[r++]);
          return F(t, n, this, this, o)
        };
      return n
    }, x.bindAll = function (t) {
      var e, n, r = arguments.length;
      if (r <= 1) throw new Error("bindAll must be passed function names");
      for (e = 1; e < r; e++) n = arguments[e], t[n] = x.bind(t[n], t);
      return t
    }, x.memoize = function (t, e) {
      var n = function (r) {
        var i = n.cache,
          o = "" + (e ? e.apply(this, arguments) : r);
        return x.has(i, o) || (i[o] = t.apply(this, arguments)), i[o]
      };
      return n.cache = {}, n
    }, x.delay = function (t, e) {
      var n = d.call(arguments, 2);
      return setTimeout(function () {
        return t.apply(null, n)
      }, e)
    }, x.defer = x.partial(x.delay, x, 1), x.throttle = function (t, e, n) {
      var r, i, o, s = null,
        u = 0;
      n || (n = {});
      var c = function () {
        u = n.leading === !1 ? 0 : x.now(), s = null, o = t.apply(r, i), s || (r = i = null)
      };
      return function () {
        var h = x.now();
        u || n.leading !== !1 || (u = h);
        var a = e - (h - u);
        return r = this, i = arguments, a <= 0 || a > e ? (s && (clearTimeout(s), s = null), u = h, o = t.apply(r, i), s || (r = i = null)) : s || n.trailing === !1 || (s = setTimeout(c, a)), o
      }
    }, x.debounce = function (t, e, n) {
      var r, i, o, s, u, c = function () {
        var h = x.now() - s;
        h < e && h >= 0 ? r = setTimeout(c, e - h) : (r = null, n || (u = t.apply(o, i), r || (o = i = null)))
      };
      return function () {
        o = this, i = arguments, s = x.now();
        var h = n && !r;
        return r || (r = setTimeout(c, e)), h && (u = t.apply(o, i), o = i = null), u
      }
    }, x.wrap = function (t, e) {
      return x.partial(e, t)
    }, x.negate = function (t) {
      return function () {
        return !t.apply(this, arguments)
      }
    }, x.compose = function () {
      var t = arguments,
        e = t.length - 1;
      return function () {
        for (var n = e, r = t[e].apply(this, arguments); n--;) r = t[n].call(this, r);
        return r
      }
    }, x.after = function (t, e) {
      return function () {
        if (--t < 1) return e.apply(this, arguments)
      }
    }, x.before = function (t, e) {
      var n;
      return function () {
        return --t > 0 && (n = e.apply(this, arguments)), t <= 1 && (e = null), n
      }
    }, x.once = x.partial(x.before, 2);
    var T = !{
        toString: null
      }.propertyIsEnumerable("toString"),
      R = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
    x.keys = function (t) {
      if (!x.isObject(t)) return [];
      if (y) return y(t);
      var e = [];
      for (var n in t) x.has(t, n) && e.push(n);
      return T && u(t, e), e
    }, x.allKeys = function (t) {
      if (!x.isObject(t)) return [];
      var e = [];
      for (var n in t) e.push(n);
      return T && u(t, e), e
    }, x.values = function (t) {
      for (var e = x.keys(t), n = e.length, r = Array(n), i = 0; i < n; i++) r[i] = t[e[i]];
      return r
    }, x.mapObject = function (t, e, n) {
      e = E(e, n);
      for (var r, i = x.keys(t), o = i.length, s = {}, u = 0; u < o; u++) r = i[u], s[r] = e(t[r], r, t);
      return s
    }, x.pairs = function (t) {
      for (var e = x.keys(t), n = e.length, r = Array(n), i = 0; i < n; i++) r[i] = [e[i], t[e[i]]];
      return r
    }, x.invert = function (t) {
      for (var e = {}, n = x.keys(t), r = 0, i = n.length; r < i; r++) e[t[n[r]]] = n[r];
      return e
    }, x.functions = x.methods = function (t) {
      var e = [];
      for (var n in t) x.isFunction(t[n]) && e.push(n);
      return e.sort()
    }, x.extend = N(x.allKeys), x.extendOwn = x.assign = N(x.keys), x.findKey = function (t, e, n) {
      e = E(e, n);
      for (var r, i = x.keys(t), o = 0, s = i.length; o < s; o++)
        if (r = i[o], e(t[r], r, t)) return r
    }, x.pick = function (t, e, n) {
      var r, i, o = {},
        s = t;
      if (null == s) return o;
      x.isFunction(e) ? (i = x.allKeys(s), r = C(e, n)) : (i = q(arguments, !1, !1, 1), r = function (t, e, n) {
        return e in n
      }, s = Object(s));
      for (var u = 0, c = i.length; u < c; u++) {
        var h = i[u],
          a = s[h];
        r(a, h, s) && (o[h] = a)
      }
      return o
    }, x.omit = function (t, e, n) {
      if (x.isFunction(e)) e = x.negate(e);
      else {
        var r = x.map(q(arguments, !1, !1, 1), String);
        e = function (t, e) {
          return !x.contains(r, e)
        }
      }
      return x.pick(t, e, n)
    }, x.defaults = N(x.allKeys, !0), x.create = function (t, e) {
      var n = D(t);
      return e && x.extendOwn(n, e), n
    }, x.clone = function (t) {
      return x.isObject(t) ? x.isArray(t) ? t.slice() : x.extend({}, t) : t
    }, x.tap = function (t, e) {
      return e(t), t
    }, x.isMatch = function (t, e) {
      var n = x.keys(e),
        r = n.length;
      if (null == t) return !r;
      for (var i = Object(t), o = 0; o < r; o++) {
        var s = n[o];
        if (e[s] !== i[s] || !(s in i)) return !1
      }
      return !0
    };
    var M = function (t, e, n, r) {
      if (t === e) return 0 !== t || 1 / t === 1 / e;
      if (null == t || null == e) return t === e;
      t instanceof x && (t = t._wrapped), e instanceof x && (e = e._wrapped);
      var i = v.call(t);
      if (i !== v.call(e)) return !1;
      switch (i) {
        case "[object RegExp]":
        case "[object String]":
          return "" + t == "" + e;
        case "[object Number]":
          return +t !== +t ? +e !== +e : 0 === +t ? 1 / +t === 1 / e : +t === +e;
        case "[object Date]":
        case "[object Boolean]":
          return +t === +e
      }
      var o = "[object Array]" === i;
      if (!o) {
        if ("object" != typeof t || "object" != typeof e) return !1;
        var s = t.constructor,
          u = e.constructor;
        if (s !== u && !(x.isFunction(s) && s instanceof s && x.isFunction(u) && u instanceof u) && "constructor" in t && "constructor" in e) return !1
      }
      n = n || [], r = r || [];
      for (var c = n.length; c--;)
        if (n[c] === t) return r[c] === e;
      if (n.push(t), r.push(e), o) {
        if (c = t.length, c !== e.length) return !1;
        for (; c--;)
          if (!M(t[c], e[c], n, r)) return !1
      } else {
        var h, a = x.keys(t);
        if (c = a.length, x.keys(e).length !== c) return !1;
        for (; c--;)
          if (h = a[c], !x.has(e, h) || !M(t[h], e[h], n, r)) return !1
      }
      return n.pop(), r.pop(), !0
    };
    x.isEqual = function (t, e) {
      return M(t, e)
    }, x.isEmpty = function (t) {
      return null == t || (k(t) && (x.isArray(t) || x.isString(t) || x.isArguments(t)) ? 0 === t.length : 0 === x.keys(t).length)
    }, x.isElement = function (t) {
      return !(!t || 1 !== t.nodeType)
    }, x.isArray = _ || function (t) {
      return "[object Array]" === v.call(t)
    }, x.isObject = function (t) {
      var e = typeof t;
      return "function" === e || "object" === e && !!t
    }, x.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function (t) {
      x["is" + t] = function (e) {
        return v.call(e) === "[object " + t + "]"
      }
    }), x.isArguments(arguments) || (x.isArguments = function (t) {
      return x.has(t, "callee")
    }), "function" != typeof /./ && "object" != typeof Int8Array && (x.isFunction = function (t) {
      return "function" == typeof t || !1
    }), x.isFinite = function (t) {
      return isFinite(t) && !isNaN(parseFloat(t))
    }, x.isNaN = function (t) {
      return x.isNumber(t) && t !== +t
    }, x.isBoolean = function (t) {
      return t === !0 || t === !1 || "[object Boolean]" === v.call(t)
    }, x.isNull = function (t) {
      return null === t
    }, x.isUndefined = function (t) {
      return void 0 === t
    }, x.has = function (t, e) {
      return null != t && b.call(t, e)
    }, x.noConflict = function () {
      return c._ = h, this
    }, x.identity = function (t) {
      return t
    }, x.constant = function (t) {
      return function () {
        return t
      }
    }, x.noop = function () {}, x.property = A, x.propertyOf = function (t) {
      return null == t ? function () {} : function (e) {
        return t[e]
      }
    }, x.matcher = x.matches = function (t) {
      return t = x.extendOwn({}, t),
        function (e) {
          return x.isMatch(e, t)
        }
    }, x.times = function (t, e, n) {
      var r = Array(Math.max(0, t));
      e = C(e, n, 1);
      for (var i = 0; i < t; i++) r[i] = e(i);
      return r
    }, x.random = function (t, e) {
      return null == e && (e = t, t = 0), t + Math.floor(Math.random() * (e - t + 1))
    }, x.now = Date.now || function () {
      return (new Date).getTime()
    };
    var I = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#x27;",
        "`": "&#x60;"
      },
      $ = x.invert(I),
      P = function (t) {
        var e = function (e) {
            return t[e]
          },
          n = "(?:" + x.keys(t).join("|") + ")",
          r = RegExp(n),
          i = RegExp(n, "g");
        return function (t) {
          return t = null == t ? "" : "" + t, r.test(t) ? t.replace(i, e) : t
        }
      };
    x.escape = P(I), x.unescape = P($), x.result = function (t, e, n) {
      var r = null == t ? void 0 : t[e];
      return void 0 === r && (r = n), x.isFunction(r) ? r.call(t) : r
    };
    var L = 0;
    x.uniqueId = function (t) {
      var e = ++L + "";
      return t ? t + e : e
    }, x.templateSettings = {
      evaluate: /<%([\s\S]+?)%>/g,
      interpolate: /<%=([\s\S]+?)%>/g,
      escape: /<%-([\s\S]+?)%>/g
    };
    var V = /(.)^/,
      W = {
        "'": "'",
        "\\": "\\",
        "\r": "r",
        "\n": "n",
        "\u2028": "u2028",
        "\u2029": "u2029"
      },
      K = /\\|'|\r|\n|\u2028|\u2029/g,
      B = function (t) {
        return "\\" + W[t]
      };
    x.template = function (t, e, n) {
      !e && n && (e = n), e = x.defaults({}, e, x.templateSettings);
      var r = RegExp([(e.escape || V).source, (e.interpolate || V).source, (e.evaluate || V).source].join("|") + "|$", "g"),
        i = 0,
        o = "__p+='";
      t.replace(r, function (e, n, r, s, u) {
        return o += t.slice(i, u).replace(K, B), i = u + e.length, n ? o += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'" : r ? o += "'+\n((__t=(" + r + "))==null?'':__t)+\n'" : s && (o += "';\n" + s + "\n__p+='"), e
      }), o += "';\n", e.variable || (o = "with(obj||{}){\n" + o + "}\n"), o = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + o + "return __p;\n";
      try {
        var s = new Function(e.variable || "obj", "_", o)
      } catch (u) {
        throw u.source = o, u
      }
      var c = function (t) {
          return s.call(this, t, x)
        },
        h = e.variable || "obj";
      return c.source = "function(" + h + "){\n" + o + "}", c
    }, x.chain = function (t) {
      var e = x(t);
      return e._chain = !0, e
    };
    var z = function (t, e) {
      return t._chain ? x(e).chain() : e
    };
    x.mixin = function (t) {
      x.each(x.functions(t), function (e) {
        var n = x[e] = t[e];
        x.prototype[e] = function () {
          var t = [this._wrapped];
          return p.apply(t, arguments), z(this, n.apply(x, t))
        }
      })
    }, x.mixin(x), x.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (t) {
      var e = a[t];
      x.prototype[t] = function () {
        var n = this._wrapped;
        return e.apply(n, arguments), "shift" !== t && "splice" !== t || 0 !== n.length || delete n[0], z(this, n)
      }
    }), x.each(["concat", "join", "slice"], function (t) {
      var e = a[t];
      x.prototype[t] = function () {
        return z(this, e.apply(this._wrapped, arguments))
      }
    }), x.prototype.value = function () {
      return this._wrapped
    }, x.prototype.valueOf = x.prototype.toJSON = x.prototype.value, x.prototype.toString = function () {
      return "" + this._wrapped
    }, r = [], i = function () {
      return x
    }.apply(e, r), !(void 0 !== i && (t.exports = i))
  }).call(this)
}, function (t, e) {
  var n;
  n = function () {
    return this
  }();
  try {
    n = n || Function("return this")() || (0, eval)("this")
  } catch (r) {
    "object" == typeof window && (n = window)
  }
  t.exports = n
}, function (t, e) {
  t.exports = function (t) {
    return t.webpackPolyfill || (t.deprecate = function () {}, t.paths = [], t.children || (t.children = []), Object.defineProperty(t, "loaded", {
      enumerable: !0,
      configurable: !1,
      get: function () {
        return t.l
      }
    }), Object.defineProperty(t, "id", {
      enumerable: !0,
      configurable: !1,
      get: function () {
        return t.i
      }
    }), t.webpackPolyfill = 1), t
  }
}, function (t, e, n) {
  "use strict";
  var r = n(0);
  n(8), n(13), n(4), n(5), n(6), n(7), n(9), n(11), n(10), n(12);
  var i = n(2),
    o = n(3);
  n(1), e.app = "app", r.module(e.app, [o["default"], "NumbersUtil", "thirdparty", "InputManager"]).component("app", i.example)
}], [23]);
