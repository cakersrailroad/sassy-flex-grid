class FlexGridController {
  public text: string;
  callback: Object;
  constructor() {
  }
  rowSelectionHandler(obj) {
    console.log(obj)
  }
  updateColumnValue(obj, value, c) {
    this.callback[c.callbackKey](obj, value);
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
