'use strict';


describe('miniApp Integration Tests', function(){
    
    beforeEach(function(){
        browser().navigateTo('/');
    });
    
    angular.scenario.dsl('value', function() {
      return function(value) {
        return this.addFuture('value to future', function(done) {
          done(null, value.value);
        });
      };
    });
    
    it('Basic and dummy test', function(){
       expect({value: true}).toEqual(true);
     });

    it('Root navigation test', function(){
        sleep(0.5);
        var output = browser().location().path();
        expect(value(output)).toBe('/');
    });
    
    
    it('Expected to go wrong', function(){
        sleep(0.5);
        var output = browser().location().path();
        expect(output).toBe('/');
    });
    
});