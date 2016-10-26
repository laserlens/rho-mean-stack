angular.module('meanApp')
       .controller('PeopleController', PeopleController);

function PeopleController($http) {
  console.log('PeopleController loaded');
  var controller = this;
  controller.people = [];

  controller.listPeople = function(){
    console.log('Listing people');
    $http.get('/people').then(function(response){
      console.log('response that comes back', response);
      controller.people = response.data;
    }, function(error){
      console.log('error making request', error);
    });
  };

  controller.addPerson = function() {
    var data = [{name: controller.name}, {hometown: controller.hometown},
                {favoriteMovie: controller.favoriteMovie}];
                console.log('whats the data',data);
    $http.post('/people', data).then(function(response){
      console.log('response', response);
    }, function(error) {
      console.log('error making post', error);
    });
    controller.clearInput();
  };
  //funtion to clear input field on addPerson function call
  controller.clearInput = function() {
    controller.name = null;
    controller.hometown = null;
    controller.favoriteMovie = null;
  }
}
