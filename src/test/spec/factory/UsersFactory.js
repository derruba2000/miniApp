'use strict';


describe('miniApp UsersFactorySpec', function () {

    var UsersFactory;
    
    beforeEach(function() {
       module('miniApp');
       var $injector = angular.injector(['miniApp']);
       UsersFactory = $injector.get('UsersFactory');
    });

    it('Checking Number of Users', function(){
      var output = UsersFactory.getTotalUsers();
      expect(output).toEqual(3);
    });
    
});
