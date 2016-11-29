/// <reference path="../typings/index.d.ts"" />

import * as angular from 'angular';

import  '../node_modules/sassy-numbers-utility/numbers/numbers.module.js';
import  '../node_modules/sassy-third-party-injectable/thirdparty.js';

import '../node_modules/sassy-numbers-utility/numbers/convertStringToNumber.filter.js';
import '../node_modules/sassy-numbers-utility/numbers/currencyOldStyle.filter.js';
import '../node_modules/sassy-numbers-utility/numbers/numberConversion.service.js';
import '../node_modules/sassy-numbers-utility/numbers/numberOldStyle.filter.js';
import '../node_modules/sassy-numbers-utility/numbers/percentOldStyle.filter.js';
import '../node_modules/sassy-rxjs-input/inputs/inputManager.module.js';
import '../node_modules/sassy-rxjs-input/inputs/inputField.component.js';
import '../node_modules/sassy-rxjs-input/inputs/selectableCell.directive.js';

import { example } from './app/example';
import  flexGridComponent  from './components/flexGrid/flexGrid';

import './index.scss';

export const app: string = 'app';

angular
    .module(app, [flexGridComponent, 'NumbersUtil', 'thirdparty', 'InputManager'])
    .component('app', example);
