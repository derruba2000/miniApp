    miniApp.controller('example2Ctrl', function($scope, UsersFactory) {
        // create a message to display in our view
        $scope.message = 'Using $watch function';
        
        $scope.cities = { arr:[
                            {name:'Oxford',
                             country: 'UK',
                            },
                            {name:'London',
                             country: 'UK',
                            },
                            {name:'Paris',
                             country: 'France',
                            },
                            {name:'Lisbon',
                             country: 'Portugal',
                            }
                        ]};
        
        
        $scope.ReadTotalUsers= function(){
                $scope.totalusers = UsersFactory.getTotalUsers();
        }
        
        
    });