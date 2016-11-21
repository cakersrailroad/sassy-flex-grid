export const hello: angular.IComponentOptions = {
  template: require('./hello.html'),
  controller: function ($http: angular.IHttpService, $scope: angular.IScope) { // eslint-disable-line babel/object-shorthand
    var vm = this;
    this.hello = 'Hello World!';
    // let data = [];
    $http.get('/assets/db.json').then(dat => this.data = dat.data);


    this.callBackApi = {
      callback1617Guar: (changeObj: any, change: number) => {
          var index = vm.data.data.findIndex(function (o) { return o._id === changeObj._id });
        vm.data.data[index]['16/17 Dollars'] = change;
        $scope.$evalAsync();
      },
      clientMix: (changeObj: any, change: number) => {
      var index = vm.data.data.findIndex(function (o) { return o._id === changeObj._id });
        vm.data.data[index]['17/18 client mix'] = change;
        $scope.$evalAsync();
      },
      effectiveROC: (changeObj: any, change: number) => {
        var index = vm.data.data.findIndex(function (o) { return o._id === changeObj._id });
        vm.data.data[index]['17/18 effective ROC'] = change;
        $scope.$evalAsync();
      }
    }
  }
};
