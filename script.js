"use strict";
{
  function TodoController(){ //controller => passes things between view and model
    let task1 = {  //task objects to be put into the array of "list"
      task: "eat",
      className: "incomplete" //class Name
    }

    let task2 = {
      task: "sleep",
      className: "incomplete"
    }

    let task3 = {
      task: "code",
      className: "complete"
    }

    let task4 = {
      task: "coffee",
      className: "complete"
    }

    let vm = this; //vm = view model
    vm.list = [task1, task2, task3, task4];
    console.log(this.list);
  }
  let complete = angular.module("todoApp", []);

  complete.controller('complete', ['$scope', '$http', function($scope, $http){
    $scope.class1 = false;
    $scope.clicked = true;

    $scope.ChangeStyle = function(){
      $scope.class1 = true;
      $scope.clicked = false;
    }
  
  }])

  angular
    .module("todoApp")
    .controller("TodoController", TodoController); //registering controller to the module
}



//, []
