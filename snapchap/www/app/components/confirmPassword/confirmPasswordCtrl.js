angular.module('snapchat').controller('confirmPasswordCtrl', function($scope, $rootScope, mainService, $state){

  $scope.continueButton = false;
  $scope.stuff = function(password){
  if(password !== ''){
    $scope.continueButton = true
  } else $scope.continueButton = false
  }

  $scope.confirmPassword = function(password){
    id = $rootScope.userInfo.id;
    mainService.comparePassword(password, id)
    .then(function(response){
      if(response.data){
        mainService.updateEmail($rootScope.updateEmail)
        .then(function(response){
          $state.go('settings')
        })
      }
    })

  }
})
