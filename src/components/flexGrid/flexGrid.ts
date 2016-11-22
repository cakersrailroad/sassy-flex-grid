'use strict';
import * as angular from 'angular';

import './flexGrid.scss';


class FlexGridController {
  public text: string;
  callback: Object;
  config: any;

  constructor() {}
  rowSelectionHandler(obj: any) {
    console.log(obj);
  }
  updateColumnValue(obj: any, value: number, column: any) {
    this.callback[column.callbackKey](obj, value);
  }

  callCollapse(row){
    this.callback[row[this.config.rowHeaderDefaults.collapseCallback]](row);
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
