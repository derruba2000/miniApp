'use strict';


describe('Checking URL', function(){
    it('check the title', function(){
        browser.get('http://127.0.0.1:9000');
        expect(browser.getTitle()).toEqual('Miniproject NG');
    });

    
    it('Testing View Title', function(){
        var test = element(by.tagName('h1'));
        console.log("-->"+ test.getText());
        expect(test.getText()).toEqual('d3.js Chart');
    });
    
});