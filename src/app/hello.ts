export const hello: angular.IComponentOptions = {
  template: require('./hello.html'),
  controller: function ($http) { // eslint-disable-line babel/object-shorthand
    this.hello = 'Hello World!';
    $http.get('/assets/db.json').then(dat => this.data = dat.data);
  }
};
