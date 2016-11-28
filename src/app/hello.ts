export const hello: angular.IComponentOptions = {
  template: require('./hello.html'),
  controller: function ($http: angular.IHttpService, $scope: angular.IScope, _) { // eslint-disable-line babel/object-shorthand

    $http.get('/assets/db.json').then(dat => this.data = dat.data);
    $http.get('/assets/portal_modeling.config.json').then(dat => {
      this.configData = dat.data;
    });
    $http.get('/assets/portal_modeling.json').then(dat => {
      let portalModeling = []
      _.each(dat.data, (property, i) => {
        if (i < 20) {
          property._id = i;
          property._isFiltered = true;
          property._collapseIcon = "sms-glyph-arrow_carrot-2dwnn_alt";
          property._indent = Math.floor(Math.random() * 4);
          //collapse configs
          property._showCollapseIcon = property._indent < 3; //boolean
          property._collapseClicked = "collapseCallback";
          property._isItCollapsed = property._indent !== 0;

          property._beforePrimaryIcon = "star";
          property._afterPrimaryIcon = "delete";

          property._hoverIconPrimary = i % 2 === 0 ? "sms-glyph-arrow_carrot-2dwnn_alt": '';
          property._hoverIconSecondary = i % 3 === 0 ? "sms-glyph-arrow_carrot-2dwnn_alt h3": '';


          portalModeling.push(property);
        }
      });
      this.portalModeling = portalModeling;
      let parentAgency = _.where(this.portalModeling, {_indent: 0});
      console.log(parentAgency.length)
    });


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
        $scope.$evalAsync();

      }
    }

    this.callBackApi = {
      callback1617Guar: (changeObj: any, change: number) => {
        var index = this.data.data.findIndex(function (o: any) { return o._id === changeObj._id; });
        this.data.data[index]['16/17 Dollars'] = change;
        $scope.$evalAsync();
      },
      clientMix: (changeObj: any, change: number) => {
        var index = this.data.data.findIndex(function (o: any) { return o._id === changeObj._id; });
        this.data.data[index]['17/18 client mix'] = change;
        $scope.$evalAsync();
      },
      effectiveROC: (changeObj: any, change: number) => {
        var index = this.data.data.findIndex(function (o: any) { return o._id === changeObj._id; });
        this.data.data[index]['17/18 effective ROC'] = change;
        $scope.$evalAsync();
      }
    };
  }
};
