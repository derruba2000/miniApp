    miniApp.controller('example1Ctrl', function($scope, $interval) {
        // create a message to display in our view
        $scope.message = 'Using $interval service and $watch function';
        $scope.data = [0,0,0,0,0,0, 0, 0, 0, 0, 0 , 0, 0, 0, 0, 0, 0];
        $scope.data2 = [0,0,0,0,0,0, 0, 0, 0, 0, 0 , 0, 0, 0, 0, 0, 0];
        
         var stop;
        $scope.Refresh = function() {
          if ( angular.isDefined(stop) ) return;
          stop = $interval(function() { 
             $scope.data.push(Math.round(Math.random()*10));
             $scope.data.shift();
              
             $scope.data2.push(Math.round(Math.random()*10));
             $scope.data2.shift();
          }, 300);
        };
            
        $scope.$on('$destroy', function () { $interval.cancel(stop); });
    });