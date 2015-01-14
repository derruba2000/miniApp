describe('miniApp filterSpec', function () {
    var filter;
    
    beforeEach(function () {
        module('miniApp');
        inject(function($injector){
            filter = $injector.get('$filter')('ukfilter');
        });
    });

    it('has a ukfilter filter', inject(function() {
        expect(filter).not.toBeNull();
    }));
    
    it('Testing UK City', function() {
        expect(filter([{  name:'London',country: 'UK' }, 
                       {  name:'Madrid',country: 'Spain' } ] )).toEqual([{name: 'London', country: 'UK'}]);
    });
    it('Testing No UK City', function() {
        expect(filter([{  name:'Madrid',country: 'Spain' }] )).toEqual([]);
    });
        

});
