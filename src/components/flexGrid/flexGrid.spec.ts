/// <reference path='../../../typings/index.d.ts' />


import * as angular from 'angular';
import 'angular-mocks';
import { flexGrid } from './flexGrid';

import '../../../node_modules/sassy-numbers-utility/numbers/numbers.module.js';
import '../../../node_modules/sassy-third-party-injectable/thirdparty.js';

import '../../../node_modules/sassy-numbers-utility/numbers/convertStringToNumber.filter.js';
import '../../../node_modules/sassy-numbers-utility/numbers/currencyOldStyle.filter.js';
import '../../../node_modules/sassy-numbers-utility/numbers/numberConversion.service.js';
import '../../../node_modules/sassy-numbers-utility/numbers/numberOldStyle.filter.js';
import '../../../node_modules/sassy-numbers-utility/numbers/percentOldStyle.filter.js';

import '../../../node_modules/sassy-rxjs-input/inputs/inputManager.module.js';
import '../../../node_modules/sassy-rxjs-input/inputs/inputField.component.js';
import '../../../node_modules/sassy-rxjs-input/inputs/selectableCell.directive.js';

describe('flexGrid component', () => {
  beforeEach(() => {
    angular
      .module('flexGrid', ['components/flexGrid/flexGrid.html', 'NumbersUtil', 'thirdparty', 'InputManager'])
      .component('flexGrid', flexGrid);
    angular.mock.module('flexGrid');
  });

  beforeEach(() => {
    const db = require('../../assets/db.json');
    this.data = [{
      '_id': '58263a11c00afd59595ab5da',
      'companyId': '58263a11',
      'company': 'Total',
      'companyText': 'company Total',
      '_primaryTextStyle': 'makePrimaryBold',
      '_secondaryTextStyle': 'makeSecondaryBold',
      '_tertiaryTextStyle': 'makeTertiaryBold',
      '_isCollapsed': false,
      '_isFiltered': true,
      '_showCollapseIcon': true,
      '_collapseClicked': 'collapseClicked',
      '_collapseIcon': 'sms-glyph-arrow_carrot-2dwnn_alt',
      '_hoverIconPrimary': 'sms-glyph-arrow_hover_alt',
      '_hoverIconSecondary': 'sms-glyph-arrow_hover_secondary_alt',
      '_indent': 0,
      '_beforePrimaryIcon': 'star',
      '_afterPrimaryIcon': 'deconste',
      '_editCallback': 'callback',
      '16/17 Quintile': 5,
      '16/17 Dollars': 548065,
      '17/18 Upfront Strategy': 'cillum',
      '16/17 Guar cpm': 109,
      'Guar demo': 'TR-19',
      '17/18 PAM dollars': 990673,
      '17/18 Scenario dollars': 364277,
      '16/17 % RC': 106.7,
      '17/18 Rate of change': 6.6,
      '17/18 client mix': 1.5,
      '17/18 effective ROC': 6.0985,
      'balance': '$3,554.84'
    }];

    this.config = db.config;

  });

  it('should layer an html element', angular.mock.inject(($rootScope: ng.IRootScopeService, $compile: ng.ICompileService) => {
    const scope = $rootScope.$new();
    const element = $compile(`<flex-grid data='data' config='config'></flex-grid>`)(scope);
    scope['data'] = this.data;
    scope['config'] = this.config;
    scope.$digest();
    expect(element).not.toBeNull();
  }));

  it('should display same # of rows as the data set', angular.mock.inject(($rootScope: ng.IRootScopeService, $compile: ng.ICompileService) => {
    const scope = $rootScope.$new();
    const element = $compile(`<flex-grid data='data' config='config'></flex-grid>`)(scope);
    scope['data'] = this.data;
    scope['config'] = this.config;
    scope.$digest();
    expect(element.find('.lt-blue-hover-bg').length).toEqual(this.data.length);
  }));

  describe('row header configs', () => {
    var element;
    var scope;
    beforeEach(angular.mock.inject(($rootScope: ng.IRootScopeService, $compile: ng.ICompileService) => {
      scope = $rootScope.$new();
      element = $compile(`<flex-grid data='data' config='config'></flex-grid>`)(scope);
      scope['data'] = this.data;
      scope['config'] = this.config;
      scope.$digest();
    }));

    it('should set width based on the configs', () => {
      this.data.forEach((dat, i) => {
        if (dat[this.config.rowHeaderDefaults.primaryTextKey]) {
          expect(element.find(`.${this.config.rowHeaderDefaults.width}`).length).toBeGreaterThan(0);
        }
      });
    });

    it('should show primary text based on configs', () => {
      this.data.forEach((dat, i) => {
        if (dat[this.config.rowHeaderDefaults.primaryTextKey]) {
          const cellBlock = element.find(`.${dat[this.config.rowHeaderDefaults.primaryTextStyleKey]}`);
          expect(cellBlock.html()).toContain(dat[this.config.rowHeaderDefaults.primaryTextKey]);
        }
      });
    });

    it('should style primary text based on configs', () => {
      this.data.forEach((dat, i) => {
        if (dat[this.config.rowHeaderDefaults.primaryTextStyleKey]) {
          expect(element.find(`.${dat[this.config.rowHeaderDefaults.primaryTextStyleKey]}`).length).toBeGreaterThan(0);
        }
      });
    });

    it('should show primary text based on configs', () => {
      this.data.forEach((dat, i) => {
        if (dat[this.config.rowHeaderDefaults.secondaryTextKey]) {
          const cellBlock = element.find(`.${dat[this.config.rowHeaderDefaults.secondaryTextStyleKey]}`);
          expect(cellBlock.html()).toContain(dat[this.config.rowHeaderDefaults.secondaryTextKey]);
        }
      });
    });

    it('should style secondary text based on configs', () => {
      this.data.forEach((dat, i) => {
        if (dat[this.config.rowHeaderDefaults.secondaryTextStyleKey]) {
          expect(element.find(`.${dat[this.config.rowHeaderDefaults.secondaryTextStyleKey]}`).length).toBeGreaterThan(0);
        }
      });
    });

    it('should show primary text based on configs', () => {
      this.data.forEach((dat, i) => {
        if (dat[this.config.rowHeaderDefaults.tertiaryTextKey]) {
          const cellBlock = element.find(`.${dat[this.config.rowHeaderDefaults.tertiaryTextStyleKey]}`);
          expect(cellBlock.html()).toContain(dat[this.config.rowHeaderDefaults.tertiaryTextKey]);
        }
      });
    });

    it('should style tertiary text based on configs', () => {
      this.data.forEach((dat, i) => {
        if (dat[this.config.rowHeaderDefaults.tertiaryTextStyleKey]) {
          expect(element.find(`.${dat[this.config.rowHeaderDefaults.tertiaryTextStyleKey]}`).length).toBeGreaterThan(0);
        }
      });
    });

    it('should show collapseIcon based on showCollapseIconKey config', () => {
      this.data.forEach((dat, i) => {
        if (dat[this.config.rowHeaderDefaults.collapseIcon]) {
          dat[this.config.rowHeaderDefaults.showCollapseIconKey] = true;
          expect(element.find(`.${dat[this.config.rowHeaderDefaults.collapseIcon]}`).length).toBeGreaterThan(0);
          dat[this.config.rowHeaderDefaults.showCollapseIconKey] = false;
          scope.$digest();
          expect(element.find(`.${dat[this.config.rowHeaderDefaults.collapseIcon]}`).length).toEqual(0);
        }
      });
    });

    it('should show indent level based on indentKey config', () => {
      this.data.forEach((dat, i) => {
        expect(element.find(`.pl${dat[this.config.rowHeaderDefaults.indentKey]}`).length).toBeGreaterThan(0);
        dat[this.config.rowHeaderDefaults.indentKey] = 999;
        scope.$digest();
        expect(element.find(`.pl${dat[this.config.rowHeaderDefaults.indentKey]}`).length).not.toBeGreaterThan(0);
      });
    });

    it('should show #hoverIconPrimaryKey based on config', () => {
      this.data.forEach((dat, i) => {
        expect(element.find(`.${dat[this.config.rowHeaderDefaults.hoverIconPrimaryKey]}`).length).toBeGreaterThan(0);
      });
    });

    it('should show #hoverIconSecondaryKey based on config', () => {
      this.data.forEach((dat, i) => {
        expect(element.find(`.${dat[this.config.rowHeaderDefaults.hoverIconSecondaryKey]}`).length).toBeGreaterThan(0);
      });
    });

    it('should show or hide based on collapsed based on config', () => {
      this.data.forEach((dat, i) => {
        dat[this.config.rowHeaderDefaults.isCollapseKey] = true;
        scope.$digest();
        expect(element.find(`.${dat[this.config.rowHeaderDefaults.collapseIcon]}`).length).toEqual(0);
        expect(element.find(`.${dat[this.config.rowHeaderDefaults.hoverIconSecondaryKey]}`).length).toEqual(0);
      });
    });
  });

  describe('row options configs', () => {
    var element;
    var scope;
    beforeEach(angular.mock.inject(($rootScope: ng.IRootScopeService, $compile: ng.ICompileService) => {
      scope = $rootScope.$new();
      element = $compile(`<flex-grid data='data' config='config'></flex-grid>`)(scope);
      scope['data'] = this.data;
      scope['config'] = this.config;
      scope.$digest();
    }));

    it('should add style classes to row level configs', () => {
      expect(element.find(`.${this.config.rowConfig.rowStyles}`).length).toEqual(this.data.length);
    });
  });

  describe('columns options configs', () => {
    var element;
    var scope;
    beforeEach(angular.mock.inject(($rootScope: ng.IRootScopeService, $compile: ng.ICompileService) => {
      scope = $rootScope.$new();
      element = $compile(`<flex-grid data='data' config='config'></flex-grid>`)(scope);
      scope['data'] = this.data;
      scope['config'] = this.config;
      scope.$digest();
    }));

    it('should show proper title based on column title config', () => {
      const header = element.find('.table-cell');
      this.config.columns.forEach((column, i) => {
        expect(header[i].innerText).toContain(column.title);
      });
    });

    it('should show proper title based on column title config', () => {
      const header = element.find('.table-cell');
      this.config.columns.forEach((column, i) => {
        expect(header[i].className).toContain(column.width);
      });
    });

    it('should make the column editable based on config', () => {
      const filtered = this.config.columns.filter(function (a: any) { return a.editable === true; });
      const columns = element.find('edit-input');
      expect(filtered.length).toEqual(columns.length);
    });

    it('should apply edit classes based on config', () => {
      const filtered = this.config.columns.filter(function (a: any) { return a.editableColor === 'editable-bg'; });
      const columns = element.find('edit-input');
      expect(filtered.length).toEqual(columns.length);
    });

    it('should apply column styles classes based on config', () => {
      this.config.columns.forEach((column, i) => {
        const classesArr = column.columnStyles.split(' ');
        let classesString = '';
        classesArr.forEach(c => {
          classesString = classesString + `.${c}`;
        });
        expect(element.find(classesString).length).toBeGreaterThan(0);
      });
    });
  });

  describe('callback api', () => {
    var element;
    var scope;
    var $componentController;
    beforeEach(angular.mock.inject(($rootScope: ng.IRootScopeService, $compile: ng.ICompileService, _$componentController_: ng.IComponentController) => {
      scope = $rootScope.$new();
      element = $compile(`<flex-grid data='data' config='config' callback="callbackApi"></flex-grid>`)(scope);
      $componentController = _$componentController_;
      scope['data'] = this.data;
      scope['config'] = this.config;
      scope.callbackApi = {
        clientMix: jasmine.createSpy('clientMix'),
        callback1617Guar: jasmine.createSpy('callback1617Guar'),
        collapseClicked: jasmine.createSpy('collapseClicked'),
      };

      scope.$digest();
    }));

    it('should fireCallback when collapse Icon is toggled', () => {
      this.data.forEach((dat, i) => {
        if (dat[this.config.rowHeaderDefaults.collapseIcon]) {
          const icon = element.find(`.${dat[this.config.rowHeaderDefaults.collapseIcon]}`).eq(i);
          icon.click();
          scope.$apply();
          expect(scope.callbackApi.collapseClicked).toHaveBeenCalledWith(dat);
        }
      });
    });

    it('should fireCallback when editable field is blurred', () => {
      var bindings = { data: this.data, config: this.config, callback: scope.callbackApi };
      var ctrl = $componentController('flexGrid', null, bindings);
      const column = {
        callbackKey: 'callback1617Guar',
        objectKey: 'superkey'
      };
      const row = {
        _id: 2102938018230
      };
      ctrl.updateColumnValue(row, 1233, column);
      scope.$apply();

      expect(scope.callbackApi.callback1617Guar).toHaveBeenCalledWith(row, 1233, column.objectKey);
    });

    it('should fireCallback when editable field is blurred', () => {
      var bindings = { data: this.data, config: this.config, callback: scope.callbackApi };
      var ctrl = $componentController('flexGrid', null, bindings);
      const column = {
        callbackKey: 'clientMix',
        objectKey: 'superkey1'
      };
      const row = {
        _id: 21029380230
      };
      ctrl.updateColumnValue(row, 1233, column);
      scope.$apply();

      expect(scope.callbackApi.clientMix).toHaveBeenCalledWith(row, 1233, column.objectKey);
    });
  });

});
