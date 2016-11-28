'use strict';
import * as angular from 'angular';

import './flexGrid.scss';


class FlexGridController {
  callback: Object;
  config: any;

  constructor() { }

  /**
   * Send the updates/edits to the callback function assigned to a cell
   *
   * @param {Object} obj - the record object
   * @param {Number} value - the value being changed
   * @param {Object} column - that column this record belongs to
   */
  updateColumnValue(obj: Object, value: number, column: any): void {
    console.log(`${column.title} edited, ${column.objectKey} changed from ${obj[column.objectKey]} to ${value}`);
    this.callback[column.callbackKey](obj, value, column.objectKey);
  }

  /**
   * Send the toggle row to the callback function assigned to this row
   *
   * @param {Object} row - the row object that needs to be toggled
   */
  callCollapse(row): void {
    this.callback[row[this.config.rowHeaderDefaults.collapseCallback]](row);
  }
}

/**
* flexGrid component decelaration
*
* @bindings
*   data: the raw data array that will be used to display hte grid
*   config: the config object for setting up the grid
*   callback: the callback object that will contain function that will be triggred on change
*
* @param {Object} row - the row object that needs to be toggled
*/
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
