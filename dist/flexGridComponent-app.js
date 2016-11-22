webpackJsonp([0], [, function (e, n) {}, function (e, n) {
  e.exports = '<div class="component">\n  <div class="">\n    <div class="flex">\n      <div class="{{::$ctrl.config.rowHeaderDefaults.width}} px1  left-align tier1-column"></div>\n      <div class="{{::column.width}} caps end-align px1 py1 table-cell center tier2-column overflow-auto" ng-repeat="column in $ctrl.config.columns">\n        <span class="end-align">{{column.title}}</span>\n      </div>\n    </div>\n    <div class="flex {{::row.rowStyles}} {{$ctrl.config.rowConfig.rowStyles}}" ng-repeat="row in $ctrl.data track by row._id">\n      <!-- right side row headers -->\n      <div class="{{::$ctrl.config.rowHeaderDefaults.width}}\n       px1 py1 border left-align tier1-column">\n        <div class="flex pl{{::row[$ctrl.config.rowHeaderDefaults.indentKey]}}">\n          <i ng-if="row[$ctrl.config.rowHeaderDefaults.showCollapseIconKey]" class="mr1 {{::row[$ctrl.config.rowHeaderDefaults.collapseIcon]}}"></i>\n          <i ng-if="!row[$ctrl.config.rowHeaderDefaults.showCollapseIconKey]" class="mr2">&nbsp;</i>\n          <div>\n            <span class="{{::row[$ctrl.config.rowHeaderDefaults.primaryTextStyleKey]}}">\n              {{row[$ctrl.config.rowHeaderDefaults.primaryTextKey]}}\n            </span>\n            <span class="{{row[$ctrl.config.rowHeaderDefaults.secondaryTextStyleKey]}}" ng-if="row[$ctrl.config.rowHeaderDefaults.secondaryTextKey]">({{row[$ctrl.config.rowHeaderDefaults.secondaryTextKey]}})</span>\n            <br/>\n            <span class="{{row[$ctrl.config.rowHeaderDefaults.tertiaryTextStyleKey]}}">{{row[$ctrl.config.rowHeaderDefaults.tertiaryTextKey]}}</span>\n          </div>\n          <i ng-if="row[$ctrl.config.rowHeaderDefaults.afterPrimaryIconKey]" class="mr1 {{::row[$ctrl.config.rowHeaderDefaults.afterPrimaryIconKey]}}"></i>\n        </div>\n      </div>\n      <!-- individual columns in the table -->\n      <div class="{{::column.columnStyles}} px1 py1 tier2-column {{::column.width}} overflow-auto" ng-class="{\'editable-bg\': column.editable}"\n        ng-repeat="column in $ctrl.config.columns track by $index">\n        <div class=" selectable-cell " ng-if="!column.editable" ng-class="{enabled: $ctrl.cellSelectionEnabled, disabled: !$ctrl.cellSelectionEnabled}"\n          type="{{column.objectKey}}" index="row._id" selected="true" callback="$ctrl.rowSelectionHandler(obj)" selectable-cell>\n          <span ng-if="column.format === \'none\'" class="align-middle">{{row[column.objectKey]}}</span>\n          <span ng-if="column.format === \'percentOldStyle\'" class="align-middle">{{row[column.objectKey] | percentOldStyle}}</span>\n          <span ng-if="column.format === \'currencyOldStyle\'" class="align-middle">{{row[column.objectKey] | currencyOldStyle}}</span>\n          <span ng-if="column.format === \'numberOldStyle\'" class="align-middle">{{row[column.objectKey] | numberOldStyle}}</span>\n          <span ng-if="column.format === \'convertStringToNumber\'" class="align-middle">{{row[column.objectKey] | convertStringToNumber}}</span>\n        </div>\n        <div ng-if="column.editable" class="">\n          <edit-input value="row[column.objectKey]" property-to-update="{{row[column.objectKey]}}" record="row" action="$ctrl.updateColumnValue(record, elementValue, column)"\n            display-format=\'{"filter": "{{column.format}}"}\' editing-format=\'{"filter": "stringToNumber", "precision": 0}\'>\n          </edit-input>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n'
}, , function (e, n, l) {
  "use strict";
  var o = l(0);
  l(1);
  var r = function () {
    function e() {}
    return e.prototype.rowSelectionHandler = function (e) {
      console.log(e)
    }, e.prototype.updateColumnValue = function (e, n, l) {
      this.callback[l.callbackKey](e, n)
    }, e
  }();
  n.flexGrid = {
    template: l(2),
    controller: r,
    bindings: {
      data: "<",
      config: "<",
      callback: "="
    }
  }, n.__esModule = !0, n["default"] = o.module("flexGridComponent", []).component("flexGrid", n.flexGrid).name
}], [4]);
