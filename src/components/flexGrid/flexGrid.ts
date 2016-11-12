class FlexGridController {
  public text: string;

  constructor() {
    this.text = 'My brand new component!';
  }
}

export const flexGrid = {
  template: require('./flexGrid.html'),
  controller: FlexGridController,
  bindings: {
     data: '=',
     config: '='
   }
};
