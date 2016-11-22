
'use strict';
const angular = require('angular');

import './flexGrid.scss';


class FlexGridController {
  public text: string;
  callback: Object;
  constructor() {
  }
  rowSelectionHandler(obj) {
    console.log(obj)
  }
  updateColumnValue(obj, value, column) {
    this.callback[column.callbackKey](obj, value);
  }
}

export const flexGrid = {
  template: require('./flexGrid.html'),
  controller: FlexGridController,
  bindings: {
    data: '<',
    config: '<',
    callback: '='
  }
};

export default angular.module('flexGridComponent', [])
  .component('flexGrid', flexGrid)
  .name;