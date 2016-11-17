/// <reference path="../typings/index.d.ts"" />

import * as angular from 'angular';
require('../node_modules/sassy-numbers-utility/numbers/numbers.module.js'); // eslint-disable-line babel/no-var-requires
require('../node_modules/sassy-numbers-utility/numbers/convertStringToNumber.filter.js'); // eslint-disable-line babel/no-var-requires
require('../node_modules/sassy-numbers-utility/numbers/currencyOldStyle.filter.js'); // eslint-disable-line babel/no-var-requires
require('../node_modules/sassy-numbers-utility/numbers/numberConversion.service.js'); // eslint-disable-line babel/no-var-requires
require('../node_modules/sassy-numbers-utility/numbers/numberOldStyle.filter.js'); // eslint-disable-line babel/no-var-requires
require('../node_modules/sassy-numbers-utility/numbers/percentOldStyle.filter.js'); // eslint-disable-line babel/no-var-requires

import {hello} from './app/hello';
import {flexGrid} from './components/flexGrid/flexGrid';

import './index.scss';

export const app: string = 'app';

angular
  .module(app, ['NumbersUtil'])
  .component('app', hello)
  .component('flexGrid', flexGrid);
