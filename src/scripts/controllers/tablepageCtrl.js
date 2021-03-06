'use strict';    

miniApp.controller('tablepageCtrl', function($scope) {
        // create a message to display in our view
        $scope.message = 'Testing Table Features';
        
         $scope.channels =[
            {
                "Name": "Class Aptent Taciti Associates",
                "CreatedAt": "04/09/2014",
                "Description": "ac tellus. Suspendisse sed dolor.",
                "Detail": "nulla at sem molestie sodales. Mauris blandit enim consequat purus. Maecenas libero est, congue a, aliquet",
                "Premium": false,
                "Active": true,
                "Visible": true,
                "Contents": 34,
                "id": "1"
            },
            {
                "Name": "Eu Foundation",
                "CreatedAt": "10/06/2014",
                "Description": "et magnis dis",
                "Detail": "cursus in,",
                "Premium": true,
                "Active": true,
                "Visible": true,
                "Contents": 4,
                "id": "2"
            },
            {
                "Name": "Porttitor PC",
                "CreatedAt": "16/05/2014",
                "Description": "venenatis vel, faucibus",
                "Detail": "amet, consectetuer adipiscing elit. Etiam laoreet, libero et tristique pellentesque, tellus sem mollis dui, in sodales elit erat vitae risus. Duis a mi fringilla mi lacinia mattis. Integer eu",
                "Premium": false,
                "Active": true,
                "Visible": false,
                "Contents": 0,
                "id": "3"
            },
            {
                "Name": "Molestie In LLP",
                "CreatedAt": "21/05/2015",
                "Description": "Nunc ac sem",
                "Detail": "ultrices, mauris ipsum porta elit, a feugiat tellus lorem eu metus. In lorem. Donec elementum, lorem",
                "Premium": true,
                "Active": false,
                "Visible": false,
                "Contents": 12,
                "id": "4"
            },
            {
                "Name": "Semper Limited",
                "CreatedAt": "08/05/2014",
                "Description": "non enim",
                "Detail": "magnis dis parturient montes, nascetur ridiculus mus. Proin vel nisl. Quisque fringilla euismod enim. Etiam gravida molestie arcu. Sed eu nibh vulputate mauris sagittis placerat. Cras dictum ultricies ligula. Nullam",
                "Premium": false,
                "Active": true,
                "Visible": true,
                "Contents": 5,
                "id": "5"
            }
     ];
    
    $scope.deleteChannel = function (rownum) {
        var k = 0;
        var channel;
        for (channel in $scope.channels){
            if (rownum == $scope.channels[k].id){
                $scope.channels.splice(k, 1);
            }
            k++;
        }
    }
        
    
    $scope.changeActive = function (rownum) {
        if ($scope.channels[rownum-1].Active)
            $scope.channels[rownum-1].Active = false;
        else
            $scope.channels[rownum-1].Active = true;
    }
    
    $scope.$watch('channels', function (newVal, oldVal) {
       console.log("Something changed in channels");
       if (newVal.length != oldVal.length) console.log("And it was the array length");
           
    },true);
    
        
});