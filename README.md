
# Sassy Flex Grid
A complete Angular.js 1.5.x flexable and customizable grid

#Getting started
Grab the sources with  npm or download from [Github:](git@github.com:CINBCUniversal/sassy-flex-grid.git):


Install "flexGridComponent" with npm and save it in your package.json.
For Example :

```sh
$ npm install --save git@github.com:CINBCUniversal/sassy-flex-grid.git
```

After installation include the following
```html
    node_modules/sassy-flex-grid/dist/flexGridComponent-app.css AND
    node_modules/sassy-flex-grid/dist/flexGridComponent-app.js
<script src="node_modules/sassy-flex-grid/dist/flexGridComponent-app.js"></script>
<link href="node_modules/sassy-flex-grid/dist/flexGridComponent-app.css" rel="stylesheet">
```
in your html. Then,

Include `flexGridComponent` module in your app:
For example :

```javascript
<!--angular.module('app', [-->
<!--    'flexGridComponent'-->
<!--]);-->
```

 There are three entry points to the Grid
    1) Data
    2) Config
    3) Callback Functions
    
    ```html
        <flex-grid 
            data="$ctrl.portalModeling" 
            config="$ctrl.configData.config" 
            callback="$ctrl.portalModelingCallback">
        </flex-grid>

```
    
1.  Data
    Data needs to be in a flat structure, if you need parent child hirechy, that can be set in the configrations. All the     keys starting with _ are reserved as grid configrations.

    this.portalModeling = [{
            "_id": "1287",       // required by the grid to be consumed by track by in angular repeats
            "_isItCollapse": false, // Boolean value that will collapse/uncollapse the row
            "_isFiltered": true,  // Boolean value that will filter/un-filter the row
            "_showCollapseIcon": false, //Boolean value to show hide collapse Icon
            "_collapseCallback": "callback", //Name of the callBack funtion that will be triggered when the user clicks on the collapse Icon
            "_collapseIcon": "sms-glyph-arrow_carrot-2dwnn_alt", //sassy pam Icon class for the collapse Icon
            "_indent": 0,      //what level to indent the primaryText, can be used to show hiarechy
            "_beforePrimaryIcon": "star", //Icon that can be displayed on the left side of Primary text
            "_afterPrimaryIcon": "delete", //Icon that can be displayed on the right side of Primary text
            "_primaryTextStyle": "black bold" //Primary text style classes
            "_secondaryTextStyle": "black Itallic" //secondary text style classes
            "_tertiaryTextStyle": "black lighter" //tertiary text style classes
            
            "agency name": "Total", 
            "16/17 Quintile": 5,
            "16/17 Dollars": 548065,
            "17/18 Upfront Strategy": "cillum",
            "16/17 Guar cpm": 109,
            "Guar demo": "TR-19",
            "17/18 PAM dollars": 990673,
            "17/18 Scenario dollars": 364277,
            "16/17 % RC": 106.7,
            "17/18 Rate of change": 6.6,
            "17/18 client mix": 1.5,
            "17/18 effective ROC": 6.0985
    }]

2. Configs:
    Configs are how you can set values and interations to the grid, there are 3 type of configs that are required.
        1. rowHeaderDefaults: this the conffiguration object that corrospends to the column where primary, secondary, tertiary text reside. all the options begining with _ corriesponds with data object above. Here are all the options available;
            {
                "rowHeaderDefaults": {
                  "primaryTextKey": "agency name", // Primary text key value that will be shown on the screen
                  "secondaryTextKey": "agency_id", // Secondary text key value that will be shown next to Primary text
                  "tertiaryTextKey": "created_at",  // Tertiary text key value that will be shown under the Primary text
                  "isCollapseKey": "_isItCollapsed", //Key value that will collapse/uncollapse the row
                  "showCollapseIconKey": "_showCollapseIcon", //Key value that willl show collapse Icon
                  "collapseCallback": "_collapseClicked", //callback fun that will be triggered upon click on collapse icon
                  "collapseIcon": "_collapseIcon", //key value that contains the collapse Icons
                  "indentKey": "_indent", //key value that has indention level
                  "width": "flex-5", //flex box style flex width, available(flex-1, flex-2, flex-3, flex-4. flex-5. flex-6)
                  "isFilterdKey": "_filterKey", //key value that will respond to the filter behavior
                  "beforePrimaryIconKey": "_beforePrimaryIcon", // key value that has icon class
                  "afterPrimaryIconKey": "_afterPrimaryIcon",  // key value that has icon class
                  "primaryTextStyleKey": "_primaryTextStyle",  // key value that has style classes
                  "secondaryTextStyleKey": "_secondaryTextStyle",   // key value that has style classes
                  "tertiaryTextStyleKey": "_tertiaryTextStyle"   // key value that has style classes
                }
            }


        2. rowConfig: these are row level configuration options;
            {"rowConfig":
                {
                  "rowStyles": "lt-blue-hover-bg white-bg" //classes that will be applied to the row level, classes can be seperated by space
                }
            }
        
        
        3.columns: these are columns level configs, columns is an array of object and each object in the column array will corrospond with each column.
        {
            "columns": [{
              "title": "ly guaranteed imp", //title of the column
              "type": "number",           //Type of value the number will display
              "format": "numberOldStyle", //angular js filter that will be applied to this column, available(convertStringToNumber, currencyOldStyle, numberOldStyle, percentOldStyle)
              "editable": true,  //should this column be editable
              "callbackKey": "16/17Callback", //callback function name that will be triggered when the user makes an edits 
              "objectKey": "ly_guaranteed_imp", //Key value that has this value in your data object
              "width": "flex-2", //flex box style flex width, available(flex-1, flex-2, flex-3, flex-4. flex-5. flex-6)
              "columnStyles": "center-align border-top border-bottom border-right border-left"  //classes that will be applied to the column level, classes can be seperated by space
            }
        }
        
3. Callback; this is an object of functions that will be triggered when the user interacts with the grid;
        Here is an example of what this can look like

        this.portalModelingCallback = {
              normalDollars: (changeObj: any, change: number) => {
                var index = this.portalModeling.findIndex(function (o: any) { return o._id === changeObj._id; });
                this.portalModeling[index]['normal_dollars'] = change;
                $scope.$evalAsync(); //need to trigger the digest cycle after each change.
              },
              baseGuaranteedImp: (changeObj: any, change: number) => {
                var index = this.portalModeling.findIndex(function (o: any) { return o._id === changeObj._id; });
                this.portalModeling[index]['base_guaranteed_imp'] = change;
                $scope.$evalAsync();  //need to trigger the digest cycle after each change.
              },
              cyGuaranteedImp: (changeObj: any, change: number) => {
                var index = this.portalModeling.findIndex(function (o: any) { return o._id === changeObj._id; });
                this.portalModeling[index]['cy_guaranteed_imp'] = change;
                $scope.$evalAsync();  //need to trigger the digest cycle after each change.
              },
              collapseCallback: (row: any, ) => {
                console.log(row, 'collapse clicked');
                let didReachedNext: Boolean = true;
                this.portalModeling = _.each(this.portalModeling, (dat: any, i: number) => {
                  if (i > row._id && didReachedNext) {
                    if (dat._indent > row._indent) {
                      dat._isItCollapsed = !dat._isItCollapsed;
                    } else if (dat._indent === row._indent) {
                      didReachedNext = false;
                    }
                  }
                });
                $scope.$evalAsync();  //need to trigger the digest cycle after each change.
              }
            }

```

## Row Header Defaults Configs
|Param 	|Details   	|
|----	|----	|
|primaryTextKey| A key value that matches header of row in the data set |
|secondaryTextKey|A key value that matches text next to the header in the data set |
|tertiaryTextKey | A key value that matches text underneath to the header in the data set	|
|primaryTextStyleKey | A string of classes that can be applied to primary text, seperated by space	|
|secondaryTextStyleKey | A key in the dataset to string of classes that can be applied to secondary text, seperated by space |
|tertiaryTextStyleKey | A key in the dataset to  string of classes that can be applied to tertiary text, seperated by space |
|beforePrimaryIconKey | A key to the icon value in the dataset |
|afterPrimaryIconKey | A key to the icon value in the dataset |
|isCollapseKey | A key to the boolean value in the dataset |
|showCollapseIconKey | A key to the boolean value in the dataset|
|collapseCallback | A key to the name of the fun to run on clicking collapse icon|
|collapseIcon | A key to the icon value in the dataset|
|indentKey | A key to the indent level value in the dataset|
|width | flexbox with in the data set can be flex-1 .. flex-6 |
|isFilterdKey | A key to the boolean value in the dataset|

## Development server
Run `npm run serve` for a dev server. Navigate to `http://localhost:3000/`. The app will automatically reload if you change any of the source files.


## Build

Run `gulp build:component` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.




