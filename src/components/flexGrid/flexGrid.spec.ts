/// <reference path="../../../typings/index.d.ts" />


import * as angular from 'angular';
import 'angular-mocks';
import {flexGrid} from './flexGrid';

describe('flexGrid component', () => {
  beforeEach(() => {
    angular
      .module('flexGrid', ['components/flexGrid/flexGrid.html'])
      .component('flexGrid', flexGrid);
    angular.mock.module('flexGrid');
  });

  it('should...', angular.mock.inject(($rootScope: ng.IRootScopeService, $compile: ng.ICompileService) => {
    const element = $compile('<flexGrid></flexGrid>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
