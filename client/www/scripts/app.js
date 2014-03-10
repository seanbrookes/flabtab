/**
 * Created by seanbrookes on 2014-03-10.
 */
var app = angular.module('app',['lbServices','ngResource']).
  controller('ActivityController',[
    '$scope',
    'Activity',
    function($scope,Activity){
      $scope.activity = {};

      $scope.activities = Activity.query();

      $scope.saveActivity = function(){
        console.log('save the activity');
        Activity.create($scope.activity,
          // success
          function(response){
            console.log('good add activity');
            $scope.activities = Activity.query();
          },
          // error
          function(resopnse){
            console.log('bad add activity: ' + JSON.stringify(response));
          }
        );
        var x  = $scope.activity;
        var p = x;
      }
    }
  ]);
;