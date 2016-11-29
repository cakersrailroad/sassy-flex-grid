export class PortalModelingActionsService {
  StateManagerService: any = {};
  getData() {
    return 1 + 2;
  }

  constructor(StateManagerService: any) {
    this.StateManagerService = StateManagerService;
  }

}

export default PortalModelingActionsService;


