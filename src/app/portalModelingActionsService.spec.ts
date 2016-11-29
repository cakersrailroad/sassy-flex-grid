/// <reference path="../../typings/index.d.ts" />

import * as angular from 'angular';
import 'angular-mocks';
import PortalModelingActionsService from './portalModelingActionsService';

describe('PortalModelingActionsService service', () => {
  beforeEach(() => {
    angular
      .module('PortalModelingActionsService', [])
      .service('PortalModelingActionsService', PortalModelingActionsService);
    angular.mock.module('PortalModelingActionsService');
  });

  it('should', angular.mock.inject((PortalModelingActionsService: PortalModelingActionsService) => {
    expect(PortalModelingActionsService.getData()).toEqual(3);
  }));
});
