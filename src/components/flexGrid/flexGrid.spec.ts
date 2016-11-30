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
    let db = require('../../assets/db.json');
    this.data = [{
      '_id': '58263a11c00afd59595ab5da',
      'companyId': '58263a11',
      'company': 'Total',
      'companyText': 'company Total',
      '_primaryTextStyle': 'makePrimaryBold',
      '_secondaryTextStyle': 'makeSecondaryBold',
      '_tertiaryTextStyle': 'makeTertiaryBold',
      '_isCollapse': false,
      '_isFiltered': true,
      '_showCollapseIcon': true,
      '_collapseCallback': 'callback',
      '_collapseIcon': 'sms-glyph-arrow_carrot-2dwnn_alt',
      '_hoverIconPrimary': 'sms-glyph-arrow_hover_alt',
      '_hoverIconSecondary': 'sms-glyph-arrow_hover_secondary_alt',
      '_indent': 0,
      '_beforePrimaryIcon': 'star',
      '_afterPrimaryIcon': 'delete',
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
    // this.data = db.data;
    this.config = db.config;

  });

  it('should layer an html element', angular.mock.inject(($rootScope: ng.IRootScopeService, $compile: ng.ICompileService) => {
    let scope = $rootScope.$new();
    const element = $compile(`<flex-grid data='data' config='config'></flex-grid>`)(scope);
    scope['data'] = this.data;
    scope['config'] = this.config;
    scope.$digest();
    expect(element).not.toBeNull();
  }));

  it('should display column headers from config', angular.mock.inject(($rootScope: ng.IRootScopeService, $compile: ng.ICompileService) => {
    let scope = $rootScope.$new();
    const element = $compile(`<flex-grid data='data' config='config'></flex-grid>`)(scope);
    scope['data'] = this.data;
    scope['config'] = this.config;
    scope.$digest();
    expect(element.find('.table-cell').length).toEqual(this.config.columns.length);
    let header = element.find('.table-cell');
    this.config.columns.forEach((column, i) => {
      expect(header[i].innerText).toContain(column.title);
    });
  }));

  it('should display same # of rows as the data set', angular.mock.inject(($rootScope: ng.IRootScopeService, $compile: ng.ICompileService) => {
    let scope = $rootScope.$new();
    const element = $compile(`<flex-grid data='data' config='config'></flex-grid>`)(scope);
    scope['data'] = this.data;
    scope['config'] = this.config;
    scope.$digest();
    expect(element.find('.lt-blue-hover-bg').length).toEqual(this.data.length);
  }));

  describe('text row header configs', () => {
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
  });

});
