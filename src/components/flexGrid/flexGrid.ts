class FlexGridController {
  public text: string;

  constructor() {
    this.text = 'My brand new component!';
  }
}

export const flexGrid = {
  templateUrl: 'app/../components/flexGrid/flexGrid.html',
  controller: FlexGridController
};

