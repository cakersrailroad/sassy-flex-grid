export const example: angular.IComponentOptions = {
  template: require('./example.html'),
  controller: function ($http: angular.IHttpService, $scope: angular.IScope, _: any) { // eslint-disable-line babel/object-shorthand

    /**
      * setting up the inital config data for portal modeling example
      */
    $http.get('/assets/portal_modeling.config.json').then(dat => {
      this.configData = dat.data;
    });

    /**
     * setting up the inital data set for portal modeling example
     */
    $http.get('/assets/portal_modeling.json').then(dat => {
      let portalModeling = [];
      _.each(dat.data, (property, i) => {
        if (i < 200) {
          property._id = i;
          property._indent = Math.floor(Math.random() * 4);

          property._isFiltered = true;
          property._collapseClicked = 'collapseCallback';
          property._isItCollapsed = property._indent !== 0;

          property._beforePrimaryIcon = 'star';
          property._afterPrimaryIcon = 'delete';
          property._editableStyle = i % 3 === 0 ? 'bold' : '';

          property._hoverIconPrimary = i % 2 === 0 ? 'sms-glyph-arrow_carrot-2dwnn_alt' : '';
          property._hoverIconSecondary = i % 3 === 0 ? 'sms-glyph-arrow_carrot-2dwnn_alt h3' : '';


          portalModeling.push(property);
        }
      });
      portalModeling = _.each(portalModeling, (d, i) => {
        const nextD = i + 1;
        if (portalModeling[nextD]) {
          if (portalModeling[i]._indent < portalModeling[nextD]._indent) {
            d._collapseIcon = 'sms-glyph-arrow_carrot-2dwnn_alt';
            d._showCollapseIcon = true;
          } else {
            d._showCollapseIcon = false;

          }
        }
      });
      this.portalModeling = portalModeling;
    });

    /**
     * callback api for portal modeling example
     */
    this.portalModelingCallback = {
      normalDollars: (changeObj: any, change: number) => {
        var index = this.portalModeling.findIndex(function (o: any) { return o._id === changeObj._id; });
        this.portalModeling[index]['normal_dollars'] = change;
        $scope.$evalAsync();
      },
      baseGuaranteedImp: (changeObj: any, change: number) => {
        var index = this.portalModeling.findIndex(function (o: any) { return o._id === changeObj._id; });
        this.portalModeling[index]['base_guaranteed_imp'] = change;
        $scope.$evalAsync();
      },
      cyGuaranteedImp: (changeObj: any, change: number) => {
        var index = this.portalModeling.findIndex(function (o: any) { return o._id === changeObj._id; });
        this.portalModeling[index]['cy_guaranteed_imp'] = change;
        $scope.$evalAsync();
      },
      collapseCallback: (row: any, ) => {
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
        $scope.$evalAsync();

      }
    };
  }
};
