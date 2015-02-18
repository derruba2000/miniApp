    'use strict';

    miniApp.factory('UsersFactory', function(){
        
        var service = {
            getUsers: getUsers,
            getTotalUsers: getTotalUsers
        };

        var users = [
                { login: 'Joe89', id: 1, email: 'joe@mail.com'  },
                { login: 'Alice23', id: 2, email: 'alice@mail.co.uk'  },
                { login: 'Will40', id: 3, email: 'will@gmail.com'  },
        ];

        return service;
        function getTotalUsers() { 
            return users.length;
        }

        function getUsers() {
            return users;
        }
                   
    });