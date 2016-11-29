/// <reference path="../../typings/index.d.ts" />

import * as angular from 'angular';
import 'angular-mocks';
import {example} from './example';

describe('example component', () => {
  beforeEach(() => {
    angular
      .module('fountainexample', ['app/example.html'])
      .component('fountainexample', example);
    angular.mock.module('fountainexample');
  });
  it('should render example world', angular.mock.inject(($rootScope: ng.IRootScopeService, $compile: ng.ICompileService) => {
    const element = $compile('<fountain-example>Loading...</fountain-example>')($rootScope);
    $rootScope.$digest();
    const h1 = element.find('h1');
    expect(h1.html()).toEqual('example World!');
  }));
});
